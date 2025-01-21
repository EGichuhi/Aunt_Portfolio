import { motion } from "framer-motion";

interface CompanySectionProps {
  name: string;
  description: string;
  role: string;
  achievements: string[];
  imageSrc: string;
  isReversed?: boolean;
}

export const CompanySection = ({
  name,
  description,
  role,
  achievements,
  imageSrc,
  isReversed = false,
}: CompanySectionProps) => {
  return (
    <section className="py-24 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className={`grid md:grid-cols-2 gap-16 items-center ${isReversed ? 'md:grid-flow-dense' : ''}`}>
          <motion.div 
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary">{name}</h3>
            <p className="text-xl text-accent font-medium">{role}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start group"
                >
                  <span className="text-accent mr-3 text-2xl group-hover:scale-110 transition-transform">•</span>
                  <span className="text-gray-700">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
          >
            <img 
              src={imageSrc} 
              alt={`Work at ${name}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};