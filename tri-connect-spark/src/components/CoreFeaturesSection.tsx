import { FileText, Users, Bell } from "lucide-react";

const CoreFeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Assignments",
      description: "Access and submit your work in one place"
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "Communicate and work together easily"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Stay updated with important alerts"
    }
  ];

  return (
    <section id="core-features" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 sm:mb-12">
          Core Features
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 sm:p-8 lg:p-10 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 lg:mb-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-3 sm:mb-4 lg:mb-6">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;