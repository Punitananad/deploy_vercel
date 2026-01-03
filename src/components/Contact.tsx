import { Card } from "@/components/ui/card";
import { Mail, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background" id="contact">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Let's Connect
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
          I'm passionate about creating innovative solutions that make a real impact. From reducing hospital waiting times by 60% to building comprehensive trading platforms, I focus on solving complex problems with elegant code.
          <br /><br />
          As an active hackathon participant, including Smart India Hackathon (SIH), I thrive in collaborative environments and enjoy the challenge of building innovative solutions under tight deadlines.
          <span className="text-primary font-semibold"> My expertise spans healthcare systems, trading platforms, and web automation.</span>
          <br /><br />
          Let's connect and discuss how we can build the next innovative solution together.
          <span className="text-primary font-semibold"> Ready to tackle your next challenging project!</span>
        </p>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 flex flex-col items-center justify-center">
            <Mail className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Email</h3>
            <a
              href="mailto:punitanand146@gmail.com"
              className="text-lg font-medium text-primary hover:underline"
            >
              punitanand146@gmail.com
            </a>
          </Card>

          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 flex flex-col items-center justify-center">
            <Twitter className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Twitter/X</h3>
            <a
              href="https://x.com/Punit_1465"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-primary hover:underline"
            >
              @Punit_1465
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;