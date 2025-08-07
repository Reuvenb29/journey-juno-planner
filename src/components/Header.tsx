import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-white">
          TravelMate
        </div>
        <div className="flex items-center gap-4">
          <Button variant="hero" size="sm" asChild>
            <Link to="/login" onClick={() => console.log("Login button clicked")}>Log In</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/signup" onClick={() => console.log("Signup button clicked")}>Sign Up</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;