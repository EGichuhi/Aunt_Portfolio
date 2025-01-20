import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CompanySection } from "@/components/CompanySection";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <div id="companies">
        <CompanySection
          name="First Company"
          role="Senior Consultant"
          description="Leading strategic initiatives and fostering professional growth across teams."
          achievements={[
            "Developed and implemented comprehensive training programs",
            "Improved team efficiency by 40% through process optimization",
            "Mentored over 50 professionals in career development"
          ]}
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        />
        <CompanySection
          name="Second Company"
          role="Executive Advisor"
          description="Providing executive-level guidance and implementing organizational change."
          achievements={[
            "Led successful organizational restructuring initiatives",
            "Established new departmental processes increasing productivity",
            "Facilitated executive leadership workshops"
          ]}
          imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          isReversed
        />
      </div>
      <Contact />
    </div>
  );
};

export default Index;