import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic will be added later
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-turquoise-light via-turquoise to-ocean flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <Card className="w-full max-w-md relative z-10 border-white/20 bg-white/10 backdrop-blur-md">
        <CardHeader className="text-center">
          <Link to="/" className="text-3xl font-bold text-white mb-4 block hover:opacity-80 transition-opacity">
            TravelMate
          </Link>
          <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
          <CardDescription className="text-white/80">
            Sign in to your account to continue planning your adventures
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                required
              />
            </div>
            
            <Button type="submit" className="w-full" variant="cta" size="lg">
              Sign In
            </Button>
          </form>
          
          <div className="text-center">
            <Link to="/forgot-password" className="text-white/80 hover:text-white text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </Link>
          </div>
          
          <div className="text-center pt-4 border-t border-white/20">
            <p className="text-white/80 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-white font-medium hover:underline underline-offset-4">
                Sign up here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;