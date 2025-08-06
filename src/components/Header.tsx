import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-white">
          TravelMate
        </div>
        <div className="flex items-center gap-4">
          <Button variant="hero" size="sm">
            Log In
          </Button>
          <Button variant="hero" size="sm">
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;