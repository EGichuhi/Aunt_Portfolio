import { motion } from "framer-motion";
import { Users2, Briefcase, LineChart, HeartHandshake } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Users2 className="w-12 h-12" />,
      title: "Leadership Development",
      description: "Cultivating strong leaders through personalized coaching and mentorship programs."
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Strategic Planning",
      description: "Developing comprehensive strategies to achieve organizational goals and growth."
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Performance Optimization",
      description: "Enhancing operational efficiency and team productivity through proven methodologies."
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Community Building",
      description: "Creating strong, sustainable communities through strategic partnerships and engagement."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive organizational success and community impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};