import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Her leadership guidance transformed our organization's culture and productivity.",
      author: "Sarah Johnson",
      role: "CEO, Tech Innovations Inc."
    },
    {
      quote: "The strategic insights provided were invaluable to our community development initiatives.",
      author: "Michael Chen",
      role: "Director, Community Outreach"
    },
    {
      quote: "A true visionary who understands how to build and nurture successful teams.",
      author: "Lisa Thompson",
      role: "HR Director, Global Solutions"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">What People Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the leaders and organizations we've had the privilege to work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <p className="text-lg mb-6 text-gray-700">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-primary">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};