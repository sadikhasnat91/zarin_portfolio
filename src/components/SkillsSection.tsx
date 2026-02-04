import { 
  Smartphone, 
  Globe, 
  Layout, 
  Layers, 
  FileText, 
  Presentation, 
  Database, 
  GitBranch,
  Flame,
  Palette,
  Code,
  Terminal
} from "lucide-react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  level: number;
  delay: number;
}

const SkillCard = ({ icon, title, level, delay }: SkillCardProps) => (
  <div 
    className="card-gradient p-5 rounded-xl border border-border hover-lift group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
    </div>
    
    {/* Progress bar */}
    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
    <p className="text-sm text-muted-foreground mt-2">{level}%</p>
  </div>
);

const SkillsSection = () => {
  const coreSkills = [
    { icon: <Smartphone className="w-6 h-6 text-primary" />, title: "Flutter & Dart Development", level: 85 },
    { icon: <Globe className="w-6 h-6 text-primary" />, title: "Frontend Development", level: 80 },
    { icon: <Layout className="w-6 h-6 text-primary" />, title: "Responsive UI Design", level: 85 },
    { icon: <Layers className="w-6 h-6 text-primary" />, title: "State Management", level: 70 },
  ];

  const toolsSkills = [
    { icon: <FileText className="w-6 h-6 text-primary" />, title: "MS Word", level: 90 },
    { icon: <Presentation className="w-6 h-6 text-primary" />, title: "MS PowerPoint", level: 88 },
    { icon: <Database className="w-6 h-6 text-primary" />, title: "Oracle & MS Access", level: 75 },
    { icon: <Terminal className="w-6 h-6 text-primary" />, title: "Visual Basic", level: 70 },
    { icon: <GitBranch className="w-6 h-6 text-primary" />, title: "Git & GitHub", level: 80 },
    { icon: <Flame className="w-6 h-6 text-primary" />, title: "Firebase", level: 65 },
    { icon: <Palette className="w-6 h-6 text-primary" />, title: "UI/UX Fundamentals", level: 75 },
    { icon: <Code className="w-6 h-6 text-primary" />, title: "API Integration", level: 72 },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and tools I work with
          </p>
        </div>

        {/* Core Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">
            <span className="inline-block px-4 py-2 bg-secondary rounded-lg">Core Skills</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skill, index) => (
              <SkillCard 
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                level={skill.level}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Software & Tools */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center">
            <span className="inline-block px-4 py-2 bg-secondary rounded-lg">Software & Tools</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsSkills.map((skill, index) => (
              <SkillCard 
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                level={skill.level}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
