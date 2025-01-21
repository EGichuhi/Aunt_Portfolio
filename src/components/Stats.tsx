import { motion } from "framer-motion";
import { Users, Trophy, Building2, Globe2 } from "lucide-react";

export const Stats = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-gray-300">Clients Served</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">30+</div>
            <div className="text-gray-300">Years Experience</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Building2 className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-gray-300">Organizations</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Globe2 className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-gray-300">Countries</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};