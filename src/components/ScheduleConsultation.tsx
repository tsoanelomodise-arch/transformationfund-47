import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  validateAndSanitizeConsultationForm,
  type ConsultationFormData,
} from "@/lib/validation/consultation-form";

const emptyForm: ConsultationFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

const ScheduleConsultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ConsultationFormData>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = validateAndSanitizeConsultationForm(formData);
    if (!result.success) {
      setErrors(result.errors);
      toast({
        title: "Please check your details",
        description: "Some fields need to be corrected before submitting.",
        variant: "destructive",
      });
      return;
    }

    setErrors({});
    toast({
      title: "Consultation scheduled",
      description: "We'll contact you within 24 hours.",
    });
    setFormData(emptyForm);
  };

  const errorText = (field: string) =>
    errors[field] ? (
      <p className="text-sm text-destructive">{errors[field]}</p>
    ) : null;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-primary">
          Schedule a Consultation
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Book a free consultation with our funding specialists
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                aria-invalid={!!errors.name}
              />
              {errorText("name")}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                aria-invalid={!!errors.email}
              />
              {errorText("email")}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                required
                maxLength={20}
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                aria-invalid={!!errors.phone}
              />
              {errorText("phone")}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                maxLength={100}
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter company name"
                aria-invalid={!!errors.company}
              />
              {errorText("company")}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                required
                value={formData.preferredDate}
                onChange={handleInputChange}
                aria-invalid={!!errors.preferredDate}
              />
              {errorText("preferredDate")}
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <Input
                id="preferredTime"
                name="preferredTime"
                type="time"
                required
                value={formData.preferredTime}
                onChange={handleInputChange}
                aria-invalid={!!errors.preferredTime}
              />
              {errorText("preferredTime")}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your funding needs</Label>
            <Textarea
              id="message"
              name="message"
              maxLength={2000}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Briefly describe your business and funding requirements..."
              rows={4}
              aria-invalid={!!errors.message}
            />
            {errorText("message")}
          </div>

          <div className="flex gap-4 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setFormData(emptyForm);
                setErrors({});
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="cta">
              Schedule Consultation
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ScheduleConsultation;
