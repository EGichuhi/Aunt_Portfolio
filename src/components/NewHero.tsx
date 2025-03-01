
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const NewHero = () => {
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
    const diff = today.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const messageIndex = dayOfYear % messages.length;
    setMessageOfDay(messages[messageIndex]);
  }, []);

  const scrollToOrganizations = () => {
    document.getElementById('organizations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-slate-800 to-slate-900 relative py-16">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Leadership & Community Building
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-300 mb-4"
            >
              Transforming organizations and creating sustainable impact through visionary leadership
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-10 shadow-lg"
            >
              <h2 className="text-sm uppercase tracking-wider text-slate-300 mb-2">Message of the Day</h2>
              <p className="text-lg text-white italic">{messageOfDay}</p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-2 mb-8"
              onClick={scrollToOrganizations}
            >
              View Organizations
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?ixlib=rb-4.0.3"
              alt="Jacqueline Kariuki Leadership"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">Jacqueline Kariuki</h3>
                <p className="text-slate-200">Leadership Consultant & Community Builder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
