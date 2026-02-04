import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My work experience and contributions in the tech industry
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block" />

            {/* Experience Card */}
            <div className="relative pl-0 sm:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg hidden sm:block animate-pulse-glow" />

              <div className="card-gradient p-8 rounded-2xl border border-border hover-lift">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">PIE BD</h3>
                    <p className="text-primary font-medium">Developer / Tech Contributor</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Calendar className="w-4 h-4" />
                  <span>2025 – Present</span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    1.5 Years
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Worked on development-related tasks, contributing to various technical projects
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Assisted in frontend and UI-related projects, improving user experience
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Gained valuable professional teamwork experience in a collaborative environment
                    </p>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                  {["Flutter", "Frontend Development", "UI/UX", "Team Collaboration"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
