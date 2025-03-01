
import { motion } from "framer-motion";
import { Users2, Briefcase, HeartHandshake, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: <Users2 className="w-10 h-10 text-indigo-500" />,
      title: "Leadership Development",
      description: "Cultivating strong leaders through personalized coaching."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-500" />,
      title: "Strategic Planning",
      description: "Developing strategies to achieve personal goals and growth."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-green-500" />,
      title: "Community Building",
      description: "Creating sustainable communities through strategic partnerships."
    },
    {
      icon: <Globe className="w-10 h-10 text-purple-500" />,
      title: "Kenyan Immigration",
      description: "Guidance and assistance for Kenyans navigating Canadian immigration."
    }
  ];

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-primary mb-3">Services I Provide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored solutions driving personal success and community impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full border-t-4 hover:shadow-lg transition-all duration-300 border-t-primary/80">
                <CardHeader className="pb-2">
                  <div className="mb-3">{service.icon}</div>
                  <CardTitle className="text-lg font-bold text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="inline-flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
            onClick={() => window.location.href = 'mailto:contact@example.com'}
          >
            <Mail className="w-4 h-4" />
            Contact for Services
          </Button>
        </div>
      </div>
    </section>
  );
};
