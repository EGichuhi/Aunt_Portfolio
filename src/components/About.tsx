import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              With over three decades of professional experience, I've dedicated my career to fostering meaningful connections and driving organizational success through effective people management and strategic leadership.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              My approach combines time-tested wisdom with contemporary best practices, ensuring sustainable results and positive workplace relationships.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Professional portrait"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};