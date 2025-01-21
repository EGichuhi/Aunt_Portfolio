import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary to-accent relative">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-8 text-white"
        >
          Decades of Excellence
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto mb-12"
        >
          Building relationships and driving success through experienced leadership
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={scrollToWork}
          className="text-white hover:text-gray-200 transition-colors duration-300 animate-bounce"
        >
          <ArrowDown size={48} />
        </motion.button>
      </div>
    </section>
  );
};