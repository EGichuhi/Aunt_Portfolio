import { motion } from "framer-motion";
import { Users2, Briefcase, HeartHandshake, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      description: "Developing comprehensive strategies to achieve personal goals and growth."
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Community Building",
      description: "Creating strong, sustainable communities through strategic partnerships and engagement."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Services I Can Provide</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive personalized success and community impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="inline-flex items-center gap-2"
            onClick={() => window.location.href = 'mailto:contact@example.com'}
          >
            <Mail className="w-5 h-5" />
            Contact for Services
          </Button>
        </div>
      </div>
    </section>
  );
};