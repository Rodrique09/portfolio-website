import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code, 
  Zap, 
  Database, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ProfileWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { toast } = useToast();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const skills = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Prompt Engineering",
      description: "AI workflow optimization and intelligent automation"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Make.com",
      description: "Complex automation and integration workflows"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "lovable.dev & Vibecoding",
      description: "No-code website development and rapid prototyping"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Supabase",
      description: "Backend-as-a-service and database management"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "CRM and Command Line Interface",
      description: "Customer relationship management and CLI automation"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Postman",
      description: "API testing and development workflows"
    }
  ];

  const projects = [
    {
      title: "Charlie Munger Investing Assistant",
      description: "AI-powered investment advisor providing Warren Buffett and Charlie Munger-inspired insights for stock analysis and market wisdom",
      tech: "OpenAI GPT, Custom AI Training, ChatGPT",
      image: "/api/placeholder/300/200",
      link: "https://chatgpt.com/g/g-c8OT5xlXC-charlie-munger-investing-assistant"
    },
    {
      title: "Email Virus Scanner",
      description: "A Make.com automation that uses VirusTotal API to check if any URL mentioned inside emails is legitimate or contains scams/viruses",
      tech: "Make.com, VirusTotal API, Email Processing, URL Analysis",
      image: "Virustotal.png",
      link: "#",
      isImageProject: true
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("https://hook.us2.make.com/wc2vpn7aof56pag5459ildqn48inxr0f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          timestamp: new Date().toISOString(),
        }),
      });
         // Clear the form after successful submission
    e.currentTarget.reset();
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gradient">Panth Patel</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-smooth hover:text-primary",
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-smooth"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen hero-gradient flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              I'm <span className="text-gradient">Panth Patel</span> —
              <br />
              Prompt Engineer, Solutions Engineer & No-Code Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Building AI-driven workflows, low-code websites, and automations that transform business processes.
            </p>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="shadow-glow hover:shadow-glow transition-smooth text-lg px-8 py-6"
            >
              See My Work
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Prompt Engineer, Solutions Engineer, and No-Code Developer with expertise in building 
                  intelligent automation workflows that solve complex business challenges.
                </p>
                <p>
                  My experience spans across Make.com integrations, Supabase backend development, 
                  and advanced prompt engineering techniques that maximize AI potential for enterprise solutions.
                </p>
                <p>
                  As a Solutions Engineer, I bridge the gap between technical complexity and business needs, 
                  designing scalable automation architectures and implementing AI-driven workflows that 
                  streamline operations and enhance productivity.
                </p>
                <p>
                  Through Vibecoding and lovable.dev, I create rapid prototypes and full-featured 
                  applications, helping businesses transition into the no-code future while maintaining 
                  enterprise-grade reliability and performance.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center animate-scale-in">
              <Card className="card-gradient shadow-elegant border-border/20 max-w-md">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Based in Canada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-primary" />
                      <span>1.5 year experience in tech-support and 1+ year building automations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <span>50+ Automations Built</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient animate-fade-in">
            Core Skills & Tools
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="card-gradient shadow-elegant border-border/20 transition-smooth hover:shadow-glow hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4 text-primary group-hover:text-accent transition-smooth">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient animate-fade-in">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="card-gradient shadow-elegant border-border/20 transition-smooth hover:shadow-glow hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <p className="text-sm text-primary mb-4 font-medium">{project.tech}</p>
                    {project.isImageProject ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                          >
                            View Project <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-hidden p-2">
                          <div className="flex items-center justify-center">
                            <img 
                              src={project.image} 
                              alt="Email Virus Scanner Automation Flow"
                              className="max-w-full max-h-full object-contain animate-scale-in rounded-lg"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        View Project <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient animate-fade-in">
            Let's Connect
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="card-gradient shadow-elegant border-border/20 animate-slide-up">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full shadow-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:panth23patel@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <Mail className="w-5 h-5" />
                    panth23patel@gmail.com
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    Canada
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Follow me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/panth-patel-139a63253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth shadow-glow"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/Rodrique09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth shadow-glow"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <Card className="card-gradient shadow-elegant border-border/20">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    "Let's build something amazing together!"
                  </p>
                  <div className="text-sm text-primary font-medium">
                    Available for freelance projects
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Panth Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProfileWebsite;