import { Button } from "@/components/ui/button";
import { ArrowRight, Plane } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-turquoise via-turquoise-light to-ocean text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <Plane className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join thousands of travelers who trust TravelMate to plan their perfect trips
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="px-8 py-4 text-lg bg-white text-turquoise hover:bg-white/90"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            Contact Sales
          </Button>
        </div>
        
        <p className="text-sm text-white/70 mt-6">
          No credit card required • Free 14-day trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;