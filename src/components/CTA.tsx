import { Button } from "@/components/ui/button";
import { ArrowRight, Plane } from "lucide-react";
const CTA = () => {
  return (
    <section className="py-20 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Plane className="w-4 h-4" />
          Start Your Journey
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready to Plan Your Next Adventure?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of travelers who trust TravelMate to create their perfect itineraries
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Watch Demo
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-6">
          No credit card required • 14-day free trial
        </p>
      </div>
    </section>
  );
};
export default CTA;