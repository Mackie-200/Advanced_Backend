const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">
          About TriConnect
        </h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Mission */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
              Mission
            </h3>
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              To bridge the communication gap between home and the classroom, empowering learners, educators, and guardians with a collaborative digital platform.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
              Vision
            </h3>
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              A connected education ecosystem where progress, feedback, and engagement flow seamlessly between students, teachers, and parents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;