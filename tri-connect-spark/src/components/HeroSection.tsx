import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="TriConnect - Connecting Education"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 text-white">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Welcome to{" "}
            <span className="text-blue-400">TriConnect</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed opacity-90 max-w-3xl mx-auto">
            Your all-in-one hub for learning, support, and connection.
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl opacity-80 max-w-2xl mx-auto">
            Whether you're here to learn, guide, or teach we've built this space for you
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 lg:pt-10 justify-center">
            <Link to="/signup">
              <Button size="lg" className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-4 sm:py-6 lg:py-7 bg-blue-600 hover:bg-blue-700 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-4 sm:py-6 lg:py-7 bg-green-600 hover:bg-green-700 text-white min-h-[48px] sm:min-h-[56px] w-full sm:w-auto"
              onClick={() => {
                const featuresSection = document.getElementById('core-features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;