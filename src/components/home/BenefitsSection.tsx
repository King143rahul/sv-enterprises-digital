import { DollarSign, Rocket, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Affordable Premiums",
      description: "Competitive rates from top insurance companies",
    },
    {
      icon: Rocket,
      title: "Fast Claim Support",
      description: "Quick and hassle-free claim processing",
    },
    {
      icon: Shield,
      title: "All Company Policies",
      description: "Access to policies from leading insurers",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-border">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
