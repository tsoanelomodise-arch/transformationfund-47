import { useState } from "react";
import { X, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactsModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactsModal = ({ open, onClose }: ContactsModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    telephone: '',
    message: ''
  });
  const { toast } = useToast();

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = `Contact Form Submission from ${formData.firstName} ${formData.surname}`;
    const emailBody = `Name: ${formData.firstName} ${formData.surname}
Email: ${formData.email}
Telephone: ${formData.telephone}

Message:
${formData.message}`;

    const mailtoLink = `mailto:info@sa-transformationfund.co.za,applications@nefcorp.co.za?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Message Prepared",
      description: "Your email client will open to send the message.",
    });

    setFormData({ firstName: '', surname: '', email: '', telephone: '', message: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a href="mailto:info@sa-transformationfund.co.za" className="text-primary hover:underline">
                  info@sa-transformationfund.co.za
                </a>
                <br />
                <a href="mailto:applications@nefcorp.co.za" className="text-primary hover:underline">
                  applications@nefcorp.co.za
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <a href="tel:+27861113186" className="text-primary hover:underline">
                  +27 86 111 3186
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-gray-700">
                  70 Grayston Drive, Sandown<br />
                  Sandton, Gauteng, 2196<br />
                  South Africa
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-gray-900">Office Hours</p>
                <p className="text-gray-700">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <h3 className="text-xl font-bold text-primary mb-4">Our Location</h3>
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.2697844786704!2d28.051544!3d-26.107598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573493dbe26c5%3A0x1b1e2f4a4e4e4e4e!2s70%20Grayston%20Dr%2C%20Sandown%2C%20Sandton%2C%202196!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-primary mb-4">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-1">
                    Surname *
                  </label>
                  <input
                    type="text"
                    id="surname"
                    required
                    value={formData.surname}
                    onChange={(e) => setFormData({...formData, surname: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telephone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    required
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsModal;