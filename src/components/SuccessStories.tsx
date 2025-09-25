const SuccessStories = () => {
  const stories = [
    {
      company: "TechSolutions SA",
      industry: "Software Development",
      quote: "Fund Ignite's SME Development Fund enabled us to expand our team from 8 to 45 employees and secure major enterprise contracts. The mentorship program was invaluable.",
      metrics: [
        { value: "R2.5M", label: "Funding Received" },
        { value: "37", label: "Jobs Created" },
        { value: "450%", label: "Revenue Growth" }
      ]
    },
    {
      company: "Green Energy Co",
      industry: "Renewable Energy",
      quote: "The Transformation Fund helped us achieve Level 4 B-BBEE status while expanding our solar installation capacity. We've become a leading player in renewable energy.",
      metrics: [
        { value: "R8.2M", label: "Funding Received" },
        { value: "120", label: "Jobs Created" },
        { value: "Level 4", label: "B-BBEE Status" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Real impact, real transformation, real results
          </p>
        </div>
        
        {/* Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary-light rounded-lg"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{story.company}</h3>
                  <p className="text-muted-foreground">{story.industry}</p>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-muted-foreground mb-8 text-lg leading-relaxed">
                "{story.quote}"
              </blockquote>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6">
                {story.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;