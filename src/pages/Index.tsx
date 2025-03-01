
import { Navigation } from "@/components/Navigation";
import { NewHero } from "@/components/NewHero";
import { About } from "@/components/About";
import { CompanySection } from "@/components/CompanySection";
import { Contact } from "@/components/Contact";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { MapPin, MessageSquare, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <NewHero />
      <div className="space-y-0"> {/* Removed spacing between sections */}
        {/* Stats section removed */}
        <About />
        <Services />
        <div id="organizations" className="py-8 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">Organizations</h2>
            <CompanySection
              name="Biashara Africa Business Club"
              role="Co-Founder"
              description="Discover African Businesses Near You"
              achievements={[
                <a href="https://biasharaafricabusinessclub.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Visit Biashara Africa Business Club</a>,
                "We connect African entrepreneurs with exciting opportunities to grow their businesses.",
                "Join Toronto's vibrant African community designed to help your business thrive."
              ]}
              imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            />
            <CompanySection
              name="Hannah Community"
              role="Executive Advisor"
              description="Providing executive-level guidance and implementing organizational change."
              achievements={[
                <a href="https://www.hannahcommunity.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Learn more about Hannah Community Development Project</a>,
                "The Hannah Community Development Project is a faith-based organization in Eldoret's Kamukunji informal settlement, dedicated to empowering youth, women, and the elderly through initiatives like skill development, preventive health, and substance abuse management.",
                "The mission is to improve living standards by linking community members to income-generating opportunities and providing holistic support."
              ]}
              imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              isReversed
            />
          </div>
        </div>
        <Testimonials />
        <Contact />
        <footer className="bg-white py-8 border-t">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>Toronto, Canada</span>
            </div>
            <div className="flex gap-6">
              <a href="https://wa.me/1234567890" className="text-gray-600 hover:text-primary">
                <MessageSquare className="w-6 h-6" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-600 hover:text-primary">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
