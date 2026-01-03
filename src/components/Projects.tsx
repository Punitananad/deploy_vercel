import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Lightbulb, Target, FileText, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CalculateNTrade.com - Trading Platform",
    problem: "Traders needed a comprehensive platform for algorithmic trading with automated bots and real-time market analysis.",
    solution: "Designed and deployed a full-stack trading platform with REST APIs, algorithmic trading bots, and automated workflows using Flask and Selenium.",
    outcome: "Successfully launched live trading platform with automated trading strategies, real-time data processing, and user-friendly interface.",
    learnings: "Mastered financial APIs, algorithmic trading concepts, deployment strategies, and real-time data handling for trading systems.",
    pdfLink: "",
    liveLink: "https://calculatentrade.com/"
  },
  {
    title: "Web Automation & Admin Panel Tools",
    problem: "Businesses needed automated solutions for repetitive admin tasks and data extraction from various websites.",
    solution: "Built comprehensive automation tools using Selenium and Beautiful Soup for web scraping, admin panel automation, and workflow optimization.",
    outcome: "Delivered efficient automation solutions that reduced manual work by 80% and improved data accuracy for multiple clients.",
    learnings: "Advanced Selenium techniques, web scraping ethics, handling dynamic content, and building robust automation frameworks.",
    pdfLink: ""
  },
  {
    title: "Hospital Management System",
    problem: "Hospitals faced long patient queues, inefficient inventory management, and manual prescription processes that led to delays and errors in patient care.",
    solution: "Developed a comprehensive Flask-based hospital management system with queue management, digital prescriptions, inventory tracking, and patient management dashboard.",
    outcome: "Successfully reduced patient waiting times by 60%, digitized prescription processes, and automated inventory management for improved hospital efficiency.",
    learnings: "Mastered healthcare system workflows, real-time queue management, inventory optimization algorithms, and digital prescription security protocols.",
    pdfLink: ""
  },
  {
    title: "SEO & Google Extensions Suite",
    isLearning: true,
    summary:
      "Collection of Google Chrome extensions and SEO tools for website optimization, keyword analysis, and automated SEO reporting.",
    tools: ["Google Extensions API", "JavaScript", "SEO Tools", "Web Analytics", "Chrome DevTools", "Beautiful Soup"],
    learnings:
      "Gained expertise in browser extension development, SEO best practices, Google Analytics integration, and automated SEO auditing tools.",
    pdfLink: ""
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-background" id="projects">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Projects & Case Studies
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Problem → Solution → Outcome → Learnings. Showcasing trading platforms, automation tools, and web applications.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:flex md:items-start md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 ml-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold mb-2 text-card-foreground">{project.title}</h3>
                    {project.isLearning && (
                      <span className="inline-flex items-center gap-2 bg-indigo-700/10 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">
                        Learning Project
                      </span>
                    )}
                  </div>

                  {project.isLearning ? (
                    <div className="mt-3 grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.summary}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tools.map((t) => (
                            <span key={t} className="text-xs px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold text-card-foreground mb-2">Key Learnings</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{project.learnings}</p>
                        </div>

                        {project.pdfLink && (
                          <div className="mt-6">
                            <a
                              href={project.pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition"
                            >
                              <FileText className="h-4 w-4" />
                              View Dashboard (PDF)
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <Target className="h-5 w-5 text-destructive mt-1" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-card-foreground mb-1">Problem</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <Lightbulb className="h-5 w-5 text-accent mt-1" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-card-foreground mb-1">Solution</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-card-foreground mb-1">Outcome</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">{project.outcome}</p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <ArrowRight className="h-5 w-5 text-secondary-foreground mt-1" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-card-foreground mb-1">Key Learnings</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">{project.learnings}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* PDF and Live Link CTAs */}
              {!project.isLearning && (
                <div className="mt-6 flex gap-3 flex-wrap">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all shadow-glow hover:shadow-elegant"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live Project
                    </a>
                  )}
                  {project.pdfLink && (
                    <a
                      href={project.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-card border border-primary text-primary px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 transition-all"
                    >
                      <FileText className="h-4 w-4" />
                      View Case Study (PDF)
                    </a>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-6 py-3 text-secondary-foreground">
            <ArrowRight className="h-4 w-4" />
            <span className="font-medium">More detailed case studies coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
