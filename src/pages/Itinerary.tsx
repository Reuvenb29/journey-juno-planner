import { useState } from "react";
import { Calendar, List, Plane, MapPin, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Itinerary = () => {
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [selectedEntry, setSelectedEntry] = useState<any>(null);

  // Mock data for bookings
  const bookings = [
    {
      id: 1,
      type: "flight",
      from: "TLV",
      to: "BKK",
      date: "2024-08-10",
      time: "08:30 AM",
      airline: "El Al",
    },
    {
      id: 2,
      type: "accommodation",
      name: "Hanoi Guesthouse",
      location: "Hanoi, Vietnam",
      checkIn: "2024-08-12",
      checkOut: "2024-08-14",
    },
    {
      id: 3,
      type: "flight",
      from: "BKK",
      to: "HAN",
      date: "2024-08-12",
      time: "14:20 PM",
      airline: "Thai Airways",
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Itinerary</h1>
          
          {/* View Toggle */}
          <div className="flex bg-background border rounded-lg p-1">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="gap-2"
            >
              <List className="h-4 w-4" />
              List
            </Button>
            <Button
              variant={viewMode === "calendar" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("calendar")}
              className="gap-2"
              disabled
            >
              <Calendar className="h-4 w-4" />
              Calendar
            </Button>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id} className="border-primary/20 shadow-elegant hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {booking.type === "flight" ? (
                      <div className="flex items-center gap-4">
                        <Plane className="h-6 w-6 text-primary" />
                        <div>
                          <div className="font-semibold text-lg">
                            {booking.from} ✈ {booking.to}
                          </div>
                          <div className="text-muted-foreground">
                            {formatDate(booking.date)} • {booking.time} • {booking.airline}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <div>
                          <div className="font-semibold text-lg">{booking.name}</div>
                          <div className="text-muted-foreground">
                            {booking.location}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {formatDate(booking.checkIn)} - {formatDate(booking.checkOut)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {booking.type === "flight" ? "Flight" : "Stay"}
                    </Badge>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>View / Edit Entry</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                          <p className="text-muted-foreground">
                            Entry details and edit functionality will be implemented here.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;