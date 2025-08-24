import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Map, Code, Cloud, BarChart3, Award } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "primary",
      skills: ["Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "Hugging Face", "YOLOv8", "MLOps"]
    },
    {
      title: "Geospatial Analysis",
      icon: Map,
      color: "accent",
      skills: ["Remote Sensing", "QGIS", "Satellite Image Processing", "GIS Analytics"]
    },
    {
      title: "Programming",
      icon: Code,
      color: "secondary",
      skills: ["Python", "R", "C/C++", "Dart", "SQL", "JavaScript"]
    },
    {
      title: "Cloud & Big Data",
      icon: Cloud,
      color: "primary",
      skills: ["AWS", "GCP", "Azure", "Hadoop", "Apache Spark", "Docker"]
    },
    {
      title: "Analytics & Visualization",
      icon: BarChart3,
      color: "accent",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly", "Excel"]
    },
    {
      title: "Tools & Platforms",
      icon: Award,
      color: "secondary",
      skills: ["GitHub", "Jupyter", "VS Code", "Linux", "Windows"]
    }
  ];

  const certifications = [
    "AWS Academy Machine Learning Foundations",
    "AWS Data Engineering",
    "AWS Cloud Foundations",
    "AWS Cloud Architecting"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning machine learning, cloud computing, and data analytics, 
            backed by industry certifications and hands-on project experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card-gradient border-border/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-${category.color}/10`}>
                      <category.icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
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
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-card-gradient border-border/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;