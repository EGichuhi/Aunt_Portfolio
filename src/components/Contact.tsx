
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
        >
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/30 border-white/40 text-white placeholder:text-white/80"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/30 border-white/40 text-white placeholder:text-white/80"
                required
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full min-h-[150px] rounded-md border bg-white/30 border-white/40 p-3 text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/40"
                required
              />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              type="submit"
              variant="secondary"
              className="group flex items-center gap-3 text-lg px-8 py-6 w-full"
            >
              <Mail className="w-6 h-6" />
              Send Message
              <Send className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};
