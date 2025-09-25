import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  const resources = [
    {
      title: "Business Development",
      description: "Access to business planning, market research, and strategic development resources.",
      icon: "📈"
    },
    {
      title: "Mentorship Network", 
      description: "Connect with experienced business leaders and industry experts for guidance and support.",
      icon: "🤝"
    },
    {
      title: "Training Programs",
      description: "Skills development workshops, financial literacy, and business management training.",
      icon: "🎓"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resources & Support
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive support beyond funding
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:-translate-y-2 text-center border-0 shadow-[var(--card-shadow)]">
              <CardHeader className="pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {resource.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;