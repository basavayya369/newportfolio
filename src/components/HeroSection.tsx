import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MapPin, Phone, Mail, ExternalLink, Sparkles, Code2, Database } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  const roles = ["ML Explorer", "GenAI Learner", "Data Storyteller", "Geospatial Analyst"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeText = async () => {
      const currentRoleText = roles[currentRole];
      if (isTyping) {
        for (let i = 0; i <= currentRoleText.length; i++) {
          setDisplayText(currentRoleText.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsTyping(false);
      } else {
        for (let i = currentRoleText.length; i >= 0; i--) {
          setDisplayText(currentRoleText.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    };

    typeText();
  }, [currentRole, isTyping]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kasi_Naga_Basavayya_Chebrolu_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      <ParticleBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/20 rounded-full blur-2xl"
          animate={{ 
            scale: [0.8, 1.5, 0.8],
            opacity: [0.2, 0.4, 0.2],
            x: [-50, 50, -50],
            y: [-30, 30, -30]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-32 right-32 text-white/10"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <Code2 size={120} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 text-white/10"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          <Database size={100} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-16 text-white/10"
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          <Sparkles size={80} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              KASI NAGA BASAVAYYA
            </motion.span>
            <br />
            <motion.span 
              className="text-4xl md:text-5xl font-medium text-gradient inline-block"
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              CHEBROLU
            </motion.span>
            <motion.div
              className="absolute -top-4 -right-4 text-yellow-400"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>
          </motion.h1>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Aspiring Data Scientist & GenAI Enthusiast
            </p>
            <div className="h-8 flex items-center justify-center">
              <span className="text-lg md:text-xl text-accent-foreground font-mono">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold group relative overflow-hidden"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold glass-effect relative overflow-hidden group"
               >
                <a
                  href="/resume.pdf"
                  download="Kasi_Naga_Basavayya_Chebrolu_Resume.pdf"
                  aria-label="Download resume PDF"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Lucknow, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9121434693</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>kasichebrolu369@gmail.com</span>
            </div>
            <a 
              href="https://basavayya369.github.io/resume1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Personal Site</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;