import { z } from 'zod';

const NAME_PATTERN = /^[a-zA-Z\s\-']+$/;
const PHONE_PATTERN = /^[+\d\s\-()]+$/;

// Remove newlines and control characters that could enable injection downstream
const sanitize = (input: string): string =>
  input
    .replace(/[\r\n]/g, ' ')
    .replace(/[\x00-\x1F\x7F]/g, '')
    .trim();

export const consultationFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Full name is required' })
    .max(100, { message: 'Full name must be less than 100 characters' })
    .regex(NAME_PATTERN, { message: 'Full name contains invalid characters' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .max(255, { message: 'Email must be less than 255 characters' })
    .email({ message: 'Please enter a valid email address' }),
  phone: z
    .string()
    .trim()
    .min(1, { message: 'Phone number is required' })
    .max(20, { message: 'Phone number must be less than 20 characters' })
    .regex(PHONE_PATTERN, { message: 'Phone number contains invalid characters' }),
  company: z
    .string()
    .trim()
    .max(100, { message: 'Company name must be less than 100 characters' })
    .optional()
    .or(z.literal('')),
  preferredDate: z
    .string()
    .trim()
    .min(1, { message: 'Preferred date is required' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Please select a valid date' }),
  preferredTime: z
    .string()
    .trim()
    .min(1, { message: 'Preferred time is required' })
    .regex(/^\d{2}:\d{2}(:\d{2})?$/, { message: 'Please select a valid time' }),
  message: z
    .string()
    .trim()
    .max(2000, { message: 'Message must be less than 2000 characters' })
    .optional()
    .or(z.literal('')),
});

export type ConsultationFormData = z.infer<typeof consultationFormSchema>;

export const validateAndSanitizeConsultationForm = (
  data: ConsultationFormData
):
  | { success: true; sanitizedData: ConsultationFormData }
  | { success: false; errors: Record<string, string> } => {
  const result = consultationFormSchema.safeParse(data);

  if (!result.success) {
    const errors: Record<string, string> = {};
    result.error.errors.forEach((err) => {
      const field = err.path[0] as string;
      if (!errors[field]) errors[field] = err.message;
    });
    return { success: false, errors };
  }

  return {
    success: true,
    sanitizedData: {
      name: sanitize(result.data.name),
      email: sanitize(result.data.email),
      phone: sanitize(result.data.phone),
      company: sanitize(result.data.company ?? ''),
      preferredDate: sanitize(result.data.preferredDate),
      preferredTime: sanitize(result.data.preferredTime),
      message: sanitize(result.data.message ?? ''),
    },
  };
};
