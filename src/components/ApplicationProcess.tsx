import { Card, CardContent } from "@/components/ui/card";

const ApplicationProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Initial Assessment",
      description: "Complete our online eligibility assessment to determine the best funding program for your needs.",
      icon: "📋"
    },
    {
      number: "2", 
      title: "Document Submission",
      description: "Submit required documentation through our secure online portal with dedicated support.",
      icon: "📄"
    },
    {
      number: "3",
      title: "Review & Approval", 
      description: "Our expert team reviews applications within 14 business days with transparent communication.",
      icon: "🔍"
    },
    {
      number: "4",
      title: "Funding Disbursement",
      description: "Approved funds are disbursed quickly with ongoing support and monitoring throughout the term.",
      icon: "💰"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Application Process
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple, transparent, and efficient funding application process
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 transform translate-x-4"></div>
              )}
              
              <Card className="relative overflow-hidden group hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    {/* Icon Overlay */}
                    <div className="absolute -top-2 -right-2 text-2xl">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;