import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SuccessStories = () => {
  const stories = [
    {
      company: "TechSolutions SA",
      industry: "Software Development",
      quote: "Fund Ignite's SME Development Fund enabled us to expand our team from 8 to 45 employees and secure major enterprise contracts. The mentorship program was invaluable.",
      metrics: [
        { label: "Funding Received", value: "R2.5M" },
        { label: "Jobs Created", value: "37" },
        { label: "Revenue Growth", value: "450%" }
      ]
    },
    {
      company: "Green Energy Co",
      industry: "Renewable Energy", 
      quote: "The Transformation Fund helped us achieve Level 4 B-BBEE status while expanding our solar installation capacity. We've become a leading player in renewable energy.",
      metrics: [
        { label: "Funding Received", value: "R8.2M" },
        { label: "Jobs Created", value: "120" },
        { label: "B-BBEE Status", value: "Level 4" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Real impact, real transformation, real results
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="group hover:shadow-[var(--card-shadow-hover)] transition-all duration-500 hover:-translate-y-3 border-0 shadow-[var(--card-shadow)] bg-gradient-to-br from-card to-card/80">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {story.company}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {story.industry}
                  </span>
                </div>
                
                <blockquote className="text-lg italic text-muted-foreground leading-relaxed relative">
                  <span className="absolute -top-2 -left-1 text-4xl text-primary/20">"</span>
                  {story.quote}
                  <span className="absolute -bottom-6 -right-1 text-4xl text-primary/20">"</span>
                </blockquote>
              </CardHeader>
              
              <CardContent className="pt-8">
                <div className="grid grid-cols-3 gap-4">
                  {story.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;