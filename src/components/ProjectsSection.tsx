import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Cpu, Brain, BarChart3, Map, Cloud, Database } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "YOLOv8 Object Detection System",
      description: "Advanced real-time object detection system built with YOLOv8, featuring custom dataset training and deployment optimization. Achieved 95% accuracy on custom objects with real-time inference capabilities.",
      image: "/api/placeholder/400/300",
      tags: ["YOLOv8", "PyTorch", "Computer Vision", "Deep Learning", "OpenCV"],
      github: "#",
      demo: "#",
      icon: Eye,
      featured: true
    },
    {
      title: "NLP Sentiment Analysis with Transformers",
      description: "Deployed state-of-the-art sentiment analysis using Hugging Face Transformers. Fine-tuned BERT models for domain-specific text classification with 92% accuracy.",
      image: "/api/placeholder/400/300",
      tags: ["Hugging Face", "BERT", "NLP", "Python", "Transformers"],
      github: "#",
      demo: "#",
      icon: Brain
    },
    {
      title: "Time Series Forecasting Dashboard",
      description: "Interactive forecasting dashboard for financial data using LSTM networks and ARIMA models. Built with Streamlit for real-time predictions and visualization.",
      image: "/api/placeholder/400/300",
      tags: ["LSTM", "ARIMA", "Streamlit", "Time Series", "TensorFlow"],
      github: "#",
      demo: "#",
      icon: BarChart3
    },
    {
      title: "Satellite Image Classification",
      description: "Geospatial analysis project using satellite imagery for land use classification. Implemented CNN models with QGIS integration for spatial analysis.",
      image: "/api/placeholder/400/300",
      tags: ["QGIS", "CNN", "Remote Sensing", "Geospatial", "Python"],
      github: "#",
      demo: "#",
      icon: Map
    },
    {
      title: "MLOps Pipeline with Docker & AWS",
      description: "End-to-end ML pipeline with automated model training, validation, and deployment. Containerized with Docker and deployed on AWS with CI/CD integration.",
      image: "/api/placeholder/400/300",
      tags: ["Docker", "AWS", "MLOps", "CI/CD", "Python"],
      github: "#",
      demo: "#",
      icon: Cloud
    },
    {
      title: "Big Data Analytics Platform",
      description: "Scalable analytics platform using Apache Spark and Hadoop for processing large datasets. Built real-time dashboards with interactive visualizations.",
      image: "/api/placeholder/400/300",
      tags: ["Apache Spark", "Hadoop", "Big Data", "Tableau", "SQL"],
      github: "#",
      demo: "#",
      icon: Database
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects spanning machine learning, computer vision, NLP, and big data analytics. 
            Each project demonstrates practical application of cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? "xl:col-span-2" : ""}
            >
              <Card className={`group bg-card-gradient border-border/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full perspective-card ${project.featured ? 'lg:row-span-2' : ''}`}>
                <div className="relative overflow-hidden">
                  <motion.div 
                    className={`bg-gradient-to-br from-primary/20 to-accent/20 ${project.featured ? 'h-64' : 'h-48'} flex items-center justify-center relative`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <project.icon className={`${project.featured ? 'h-20 w-20' : 'h-16 w-16'} text-primary`} />
                    </motion.div>
                    {/* Floating particles around icon */}
                    <motion.div
                      className="absolute top-4 left-4 w-2 h-2 bg-primary/50 rounded-full"
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-accent/50 rounded-full"
                      animate={{ 
                        x: [0, 10, 0],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                  </motion.div>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className={`font-bold mb-3 text-foreground ${project.featured ? 'text-2xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-muted-foreground mb-4 leading-relaxed ${project.featured ? 'text-base' : 'text-sm'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
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
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/basavayya369" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;