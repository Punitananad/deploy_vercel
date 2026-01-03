import { Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-subtle border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">Punit Anand</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer & Trading Platform Specialist
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://x.com/Punit_1465"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-card hover:bg-gradient-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-card hover:shadow-elegant group"
              aria-label="Twitter/X"
            >
              <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            
            <a
              href="mailto:punitanand146@gmail.com"
              className="w-12 h-12 rounded-xl bg-card hover:bg-gradient-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-card hover:shadow-elegant group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Punit Anand. Building intelligent trading platforms and automation solutions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;