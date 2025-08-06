import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic will be added later
    console.log("Sign up attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-turquoise-light via-turquoise to-ocean flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <Card className="w-full max-w-md relative z-10 border-white/20 bg-white/10 backdrop-blur-md">
        <CardHeader className="text-center">
          <Link to="/" className="text-3xl font-bold text-white mb-4 block hover:opacity-80 transition-opacity">
            TravelMate
          </Link>
          <CardTitle className="text-2xl text-white">Create Account</CardTitle>
          <CardDescription className="text-white/80">
            Join TravelMate and start planning your dream trips
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                required
              />
            </div>
            
            <Button type="submit" className="w-full" variant="cta" size="lg">
              Create Account
            </Button>
          </form>
          
          <div className="text-center pt-4 border-t border-white/20">
            <p className="text-white/80 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-white font-medium hover:underline underline-offset-4">
                Sign in here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;