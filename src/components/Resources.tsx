import { BookOpen, Users, Briefcase } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Business Development",
      description: "Access to business planning, market research, and strategic development resources.",
      icon: BookOpen,
      iconColor: "text-teal-600",
      bgColor: "bg-gray-100"
    },
    {
      title: "Mentorship Network", 
      description: "Connect with experienced business leaders and industry experts for guidance and support.",
      icon: Users,
      iconColor: "text-teal-600", 
      bgColor: "bg-gray-100"
    },
    {
      title: "Training Programs",
      description: "Skills development workshops, financial literacy, and business management training.",
      icon: Briefcase,
      iconColor: "text-yellow-600",
      bgColor: "bg-gray-100"
    }
  ];

  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Resources & Support
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive support beyond funding
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-6 ${resource.bgColor} rounded-2xl flex items-center justify-center`}>
                  <IconComponent className={`w-10 h-10 ${resource.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {resource.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {resource.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;