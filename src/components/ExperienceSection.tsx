import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, BookOpen, Database, BarChart3, Cloud } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Science Research Intern",
      company: "Edurva",
      period: "July 2025 – Present",
      description: [
        " Leading R&D lab initiatives integrating ML and geospatial analytics in EdTech.",
        " Designed academic performance models and automated data pipelines.",
        " Contributing to publication-level research on AI in education",
      ],
      icon:BarChart3 ,
      color: "primary"
    }
    ,
    {
      title: "Teaching Assistant",
      company: "IIIT Lucknow",
      period: "Feb 2025 – June 2025",
      description: [
        "Assisted in teaching Discrete Mathematics to undergraduate students",
        "Evaluated 50+ assignments weekly with detailed feedback",
        "Supported over 100 students through office hours and doubt sessions",
        "Collaborated with faculty to improve course materials and assessments"
      ],
      icon: BookOpen,
      color: "primary"
    }
    ,
    {
      title: "Data Science Intern",
      company: "AICTE",
      period: "Apr 2024 – Jul 2024",
      description: [
        "Built predictive models using scikit-learn and TensorFlow",
        "Performed data preprocessing and feature engineering on large datasets",
        "Developed machine learning pipelines for automated model deployment",
        "Created comprehensive documentation and technical reports"
      ],
      icon: BarChart3,
      color: "accent"
    },
    {
      title: "Big Data Intern",
      company: "AICTE",
      period: "Jan 2024 – Mar 2024",
      description: [
        "Utilized Hadoop and Apache Spark for distributed data processing",
        "Built real-time analytics dashboards using modern visualization tools",
        "Optimized data pipelines for improved performance and scalability",
        "Gained hands-on experience with cloud-based big data solutions"
      ],
      icon: Database,
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional journey spanning teaching, data science, and big data analytics with hands-on experience in cutting-edge technologies.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card-gradient border-border/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-xl bg-${exp.color}/10 flex-shrink-0`}>
                      <exp.icon className={`h-8 w-8 text-${exp.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                          <p className="text-lg text-muted-foreground">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </Badge>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.description.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-card-gradient border-border/50 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Students Supported</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Assignments Evaluated </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Cloud className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">3+</p>
                  <p className="text-sm text-muted-foreground">Internship Programs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;