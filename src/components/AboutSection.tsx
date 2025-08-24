import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Download, Calendar, BookOpen, Award, Lightbulb } from "lucide-react";
import SectionReveal from "./SectionReveal";

const AboutSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kasi_Naga_Basavayya_Chebrolu_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 right-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <BookOpen size={200} className="text-primary" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Lightbulb size={150} className="text-accent" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionReveal className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            About Me
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="h-8 w-8 text-primary" />
            </motion.div>
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging data for impactful solutions, with interests in environmental sustainability and technical education. 
            Currently pursuing advanced studies in Data Science while actively contributing to the academic community.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 bg-card-gradient border-border/50 backdrop-blur-sm relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-lg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">MSc Data Science</h3>
                    <p className="text-muted-foreground mb-2">Indian Institute of Information Technology, Lucknow</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>2024 – Present</span>
                    </div>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Card className="p-6 bg-card-gradient border-border/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">BSc Mathematics, Statistics, Computer Science</h3>
                    <p className="text-muted-foreground mb-2">Adikavi Nannaya University</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>2021 – 2024</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={handleResumeDownload}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Complete Resume
                </span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                I'm a passionate data scientist and AI enthusiast with a strong foundation in mathematics, statistics, and computer science. 
                Currently pursuing my Master's in Data Science at IIIT Lucknow, I'm deeply engaged in exploring the frontiers of machine learning and generative AI.
              </p>
              
              <p className="text-foreground leading-relaxed">
                My academic journey has been marked by excellence, including achieving AIR 930 in IIT JAM 2024 (Mathematics). 
                I believe in the power of data to solve real-world problems and am particularly interested in environmental sustainability 
                and educational technology applications.
              </p>
              
              <p className="text-foreground leading-relaxed">
                As a Teaching Assistant at IIIT Lucknow, I've had the privilege of supporting over 100 students in their academic journey, 
                which has enhanced my communication skills and deepened my understanding of complex mathematical concepts.
              </p>
              
              <p className="text-foreground leading-relaxed">
                I'm always eager to collaborate on innovative projects that combine cutting-edge AI technologies with meaningful impact. 
                Whether it's developing predictive models, exploring geospatial analytics, or working with the latest generative AI tools, 
                I approach each challenge with curiosity and determination.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;