import { GraduationCap, Code, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get to Know <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-foreground font-medium">Computer Science and Engineering student</span> at{" "}
              <span className="text-primary font-medium">Northern University of Business & Technology, Khulna</span>.
              My journey in technology began early, nurturing a deep interest in creating impactful digital experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in <span className="text-foreground font-medium">mobile app development with Flutter & Dart</span> and{" "}
              <span className="text-foreground font-medium">frontend development</span> using modern web technologies.
              I'm driven by the art of crafting clean, intuitive user interfaces that prioritize both aesthetics and performance.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm fascinated by <span className="text-foreground font-medium">UI/UX design principles</span>,
              always striving to bridge the gap between beautiful design and seamless functionality.
              My goal is to create applications that users love to interact with.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>

            <div className="space-y-4">
              <div className="card-gradient p-6 rounded-xl border border-border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">B.Sc. in Computer Science & Engineering</h4>
                    <p className="text-primary font-medium">Northern University of Business & Technology, Khulna</p>
                    <p className="text-sm text-muted-foreground mt-1">Currently Pursuing</p>
                  </div>
                </div>
              </div>

              <div className="card-gradient p-6 rounded-xl border border-border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Higher Secondary Certificate (HSC)</h4>
                    <p className="text-primary font-medium">Moheshin College, Khulna</p>
                  </div>
                </div>
              </div>

              <div className="card-gradient p-6 rounded-xl border border-border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Secondary School Certificate (SSC)</h4>
                    <p className="text-primary font-medium">Rotary School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
