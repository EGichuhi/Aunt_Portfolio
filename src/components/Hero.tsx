import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Professional Excellence Through Experience
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto"
        >
          With decades of expertise in building relationships and driving success across organizations
        </motion.p>
      </div>
    </section>
  );
};