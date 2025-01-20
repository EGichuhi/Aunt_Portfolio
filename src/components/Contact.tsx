import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl mb-12 text-gray-100">
          I'm always interested in discussing new opportunities and sharing insights
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button 
            variant="secondary"
            className="flex items-center gap-2 text-lg px-6 py-3"
            onClick={() => window.location.href = "mailto:contact@example.com"}
          >
            <Mail className="w-5 h-5" />
            Email Me
          </Button>
          <Button 
            variant="outline"
            className="flex items-center gap-2 text-lg px-6 py-3"
            onClick={() => window.location.href = "tel:+1234567890"}
          >
            <Phone className="w-5 h-5" />
            Call Me
          </Button>
        </div>
      </div>
    </section>
  );
};