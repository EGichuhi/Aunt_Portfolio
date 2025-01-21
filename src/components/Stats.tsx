import { motion } from "framer-motion";
import { Users, Trophy, Building2, Globe2 } from "lucide-react";

export const Stats = () => {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">200+</div>
            <div className="text-gray-300">People Served</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Building2 className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">20+</div>
            <div className="text-gray-300">Organizations</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center col-span-2 md:col-span-1"
          >
            <Globe2 className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">3+</div>
            <div className="text-gray-300">Countries</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};