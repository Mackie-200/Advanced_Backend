import logoImage from "@/assets/triconnect-logo.png";

const Footer = () => {
  const footerLinks = [
    { label: "About Us", href: "#about" },
    { label: "Explore", href: "#explore" },
    { label: "Support", href: "#support" },
    { label: "Connect With Us", href: "#connect" }
  ];

  return (
    <footer className="bg-background">
      {/* Green Navigation Section */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
          <nav className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-white/80 transition-colors font-medium text-base sm:text-lg lg:text-xl text-center px-2 sm:px-3"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <img 
                src={logoImage} 
                alt="TriConnect Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              />
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary">TriConnect</span>
            </div>
            <p className="text-secondary font-medium text-base sm:text-lg lg:text-xl text-center max-w-md">
              Built for learners. Powered by purpose.
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground text-center">
              2025 TriConnect. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;