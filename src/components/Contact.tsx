import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 bg-gradient-to-br from-primary to-accent text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl mb-16 text-gray-100 max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities and sharing insights from my years of experience
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="secondary"
              className="group flex items-center gap-3 text-lg px-8 py-6"
              onClick={() => window.location.href = "mailto:contact@example.com"}
            >
              <Mail className="w-6 h-6" />
              Email Me
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline"
              className="group flex items-center gap-3 text-lg px-8 py-6 border-2"
              onClick={() => window.location.href = "tel:+1234567890"}
            >
              <Phone className="w-6 h-6" />
              Call Me
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};