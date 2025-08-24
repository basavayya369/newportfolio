import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star, Target, Users } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import SectionReveal from "./SectionReveal";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "AIR 930 in IIT JAM 2024",
      description: "Achieved All India Rank 930 in IIT JAM Mathematics, demonstrating exceptional mathematical competency among thousands of candidates nationwide.",
      category: "Academic Excellence",
      color: "primary",
      featured: true
    },
    {
      icon: Medal,
      title: "Teaching Excellence",
      description: "Successfully mentored 100+ students as Teaching Assistant, maintaining high student satisfaction and academic performance rates.",
      category: "Education",
      color: "accent"
    },
    {
      icon: Award,
      title: "Project Leadership",
      description: "Led multiple successful data science projects with measurable impact, including ML model deployments and analytics solutions.",
      category: "Technical",
      color: "secondary"
    },
    {
      icon: Star,
      title: "GitHub Contributions",
      description: "Consistent open-source contributions with well-documented repositories showcasing diverse machine learning and data science projects.",
      category: "Open Source",
      color: "primary"
    },
    {
      icon: Target,
      title: "Certification Achievement",
      description: "Completed 4 AWS certifications covering Machine Learning, Data Engineering, and Cloud Architecture fundamentals.",
      category: "Professional",
      color: "accent"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Active participation in data science communities, sharing knowledge through technical blogs and collaborative projects.",
      category: "Community",
      color: "secondary"
    }
  ];

  const stats = [
    { number: "930", label: "IIT JAM Rank", description: "Mathematics" },
    { number: "100+", label: "Students Mentored", description: "Teaching Assistant" },
    { number: "4", label: "AWS Certifications", description: "Professional Level" },
    { number: "25+", label: "Projects Completed", description: "Data Science & ML" }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Achievements & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Milestones that reflect dedication to excellence in academics, professional development, and community contribution.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 bg-card-gradient border-border/50 backdrop-blur-sm text-center relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <CardContent className="p-0 relative z-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter 
                      value={parseInt(stat.number.replace(/\D/g, '')) || 0}
                      suffix={stat.number.includes('+') ? '+' : ''}
                      className="text-3xl md:text-4xl font-bold text-primary mb-2 block"
                    />
                    <p className="text-foreground font-semibold mb-1">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={achievement.featured ? "xl:col-span-2" : ""}
            >
              <Card className={`group p-6 bg-card-gradient border-border/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full ${achievement.featured ? 'lg:row-span-2' : ''}`}>
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-${achievement.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className={`h-6 w-6 text-${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`font-bold text-foreground ${achievement.featured ? 'text-xl' : 'text-lg'}`}>
                          {achievement.title}
                        </h3>
                        {achievement.featured && (
                          <Badge className="bg-primary text-primary-foreground text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <Badge variant="outline" className="mb-3 text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className={`text-muted-foreground leading-relaxed ${achievement.featured ? 'text-base' : 'text-sm'}`}>
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-card-gradient border-border/50 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                These achievements represent my commitment to continuous learning and excellence. 
                I believe in pushing boundaries, sharing knowledge, and making meaningful contributions 
                to the data science and AI community.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;