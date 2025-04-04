
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [messageOfDay, setMessageOfDay] = useState("");

  const messages = [
    "Empowering communities through collaborative leadership",
    "Building bridges across continents",
    "Creating sustainable partnerships for growth",
    "Inspiring change through effective leadership",
    "Connecting hearts and minds across borders",
    "Fostering innovation in African business",
    "Transforming ideas into impactful realities"
  ];

  useEffect(() => {
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = (today.getTime() - start.getTime());
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const messageIndex = dayOfYear % messages.length;
    setMessageOfDay(messages[messageIndex]);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-slate-100 to-slate-300 relative py-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-800">
              Decades of Excellence
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-6"
            >
              Uniting people and ideas to drive success through effective leadership and teamwork.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-12 shadow-lg"
            >
              <h2 className="text-sm uppercase tracking-wider text-slate-600 mb-2">Message of the Day</h2>
              <p className="text-lg text-slate-800 italic">{messageOfDay}</p>
            </motion.div>

            <div className="w-full flex justify-center">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={scrollToWork}
                className="text-slate-600 hover:text-slate-800 transition-colors duration-300 animate-bounce"
              >
                <ArrowDown size={48} />
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98"
              alt="Jacqueline Kariuki"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
