import { ArrowDown, Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/image.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6">
                Flutter & Dart Developer
              </span>
            </div>

            <h1 className="fade-up opacity-0 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Hi, I'm{" "}
              <span className="text-gradient">Kazi Mohesena Zarin</span>
            </h1>

            <p className="fade-up opacity-0 text-lg sm:text-xl text-muted-foreground mb-4" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Flutter & Dart Developer | Frontend Developer
            </p>

            <p className="fade-up opacity-0 text-base text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              Building modern, user-friendly applications with Flutter and web technologies.
            </p>

            <div className="fade-up opacity-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <Button
                size="lg"
                className="group gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group gap-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                onClick={() => scrollToSection("#experience")}
              >
                <FolderOpen className="w-4 h-4" />
                View Projects
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75 animate-pulse-subtle" />
              
              {/* Image container */}
              <div className="relative image-reveal floating">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl glow-primary">
                  <img
                    src={profileImage}
                    alt="Kazi Mohesena Zarin"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative ring */}
                <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-[spin_30s_linear_infinite]" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="fade-up opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
