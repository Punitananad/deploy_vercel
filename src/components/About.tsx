import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background" id="about">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>

        {/* Two equal cards centered and responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* Education Card */}
          <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Education</h3>
            </div>

            <div className="text-muted-foreground leading-relaxed flex-1">
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <span className="font-medium text-card-foreground">Kurukshetra University</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Bachelor of Technology - Computer Science Engineering | 2022 – 2026 (current)
                  </span>
                </li>

                <li>
                  <span className="font-medium text-card-foreground">Senior Secondary Education (XII)</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    CBSE Board | 2020 – 2022
                  </span>
                </li>

                <li>
                  <span className="font-medium text-card-foreground">Secondary Education (X)</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    CBSE Board | 2019 – 2020
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Work Experience Card (combined current + past) */}
          <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Work Experience</h3>
            </div>

            <div className="text-muted-foreground leading-relaxed flex-1">
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <span className="font-medium text-card-foreground">Full-Stack Developer — CalculateNTrade.com (Recent)</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Designed and deployed a comprehensive trading platform with algorithmic trading bots, REST APIs, and automated workflows using Selenium.
                  </span>
                </li>

                <li>
                  <span className="font-medium text-card-foreground">Healthcare Developer — Hospital Management System</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Built a Flask-based hospital management system solving patient queue problems, inventory management, and digital prescription workflows.
                  </span>
                </li>

                <li>
                  <span className="font-medium text-card-foreground">Hackathon Participant — Smart India Hackathon (SIH) & Multiple Events</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Active participant in various hackathons including SIH, developing innovative solutions for real-world problems under time constraints.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-card rounded-3xl p-10 shadow-elegant">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-lg text-card-foreground leading-relaxed">
              I'm passionate about creating innovative solutions that solve real-world problems. From building trading platforms like CalculateNTrade.com to developing healthcare systems that reduce patient waiting times by 60%, I focus on creating impactful applications.
            </p>

            <p className="text-lg text-card-foreground leading-relaxed">
              As an active hackathon participant, including Smart India Hackathon (SIH), I thrive under pressure and enjoy collaborating with teams to build innovative solutions. My expertise spans trading algorithms, healthcare systems, web automation, and SEO optimization. Chess has taught me strategic thinking that I apply to every development challenge.
            </p>

            <blockquote className="text-xl italic text-primary font-medium border-l-4 border-primary pl-6 py-4 my-8 text-left">
              "From hackathons to production systems - building solutions that make a real difference in people's lives."
            </blockquote>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="/Punit_Anand_Resume.pdf" download="Punit_Anand_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download My Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
