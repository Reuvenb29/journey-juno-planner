import { Plus, Plane, MapPin } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Dashboard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Mock data for next booking
  const nextBooking = {
    type: "flight", // or "accommodation"
    flight: {
      from: "TLV",
      to: "BKK", 
      date: "Aug 10",
      time: "08:30 AM"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Dashboard</h1>
        
        {/* Next Booking Card */}
        <Card className="mb-8 border-primary/20 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-primary">Next Booking</CardTitle>
          </CardHeader>
          <CardContent>
            {nextBooking.type === "flight" ? (
              <div className="flex items-center gap-3 text-lg">
                <Plane className="h-6 w-6 text-primary" />
                <span className="font-semibold">Next Flight:</span>
                <span>{nextBooking.flight.from} ✈ {nextBooking.flight.to}</span>
                <span>– {nextBooking.flight.date}, {nextBooking.flight.time}</span>
              </div>
            ) : (
              <div className="flex items-center gap-3 text-lg">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="font-semibold">Current Stay:</span>
                <span>Hanoi Guesthouse – Ends Aug 14</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Floating Action Button */}
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button 
              size="lg"
              className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-glow bg-gradient-primary hover:shadow-xl transition-all duration-300"
            >
              <Plus className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Booking</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" className="justify-start gap-3 h-12">
                <Plane className="h-5 w-5" />
                Add Flight
              </Button>
              <Button variant="outline" className="justify-start gap-3 h-12">
                <MapPin className="h-5 w-5" />
                Add Accommodation
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Dashboard;