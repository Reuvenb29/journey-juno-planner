import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Globe, Heart, Clock, Shield, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Planning",
      description: "Our smart AI analyzes your preferences to create the perfect personalized itinerary"
    },
    {
      icon: Globe,
      title: "Global Destinations",
      description: "Discover hidden gems and popular attractions across thousands of destinations worldwide"
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Tailored recommendations based on your interests, budget, and travel style"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Get live updates on weather, events, and local conditions for your destinations"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your travel data is encrypted and protected with enterprise-grade security"
    },
    {
      icon: Sparkles,
      title: "Seamless Booking",
      description: "Book flights, hotels, and activities directly through our integrated platform"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose TravelMate?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge AI technology with local expertise to create travel experiences that exceed your expectations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-turquoise to-ocean rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;