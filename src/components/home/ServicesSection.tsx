import { Car, Bike, Truck, Ambulance } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Car Insurance",
      description: "Comprehensive and third-party policies for your car.",
    },
    {
      icon: Bike,
      title: "Bike Insurance",
      description: "Protect your two-wheeler with our range of plans.",
    },
    {
      icon: Ambulance,
      title: "Auto Insurance",
      description: "Secure your auto-rickshaw with reliable insurance.",
    },
    {
      icon: Truck,
      title: "Commercial Vehicles",
      description: "Insurance for trucks, taxis, and other commercial fleets.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
