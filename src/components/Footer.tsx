import { Heart, Facebook, Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/mohsena.zarin", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/_duh.its_jerry_", label: "Instagram" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          {/* Name and Role */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient">Kazi Mohesena Zarin</span>
            </h3>
            <p className="text-muted-foreground mt-1">Flutter & Dart Developer | Frontend Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Kazi Mohesena Zarin
            </p>
            <p className="mt-1">
              © {currentYear} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
