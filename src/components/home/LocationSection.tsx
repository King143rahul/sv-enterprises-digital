import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const LocationSection = () => {
  return (
    <section className="py-16 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-12">Visit Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-border">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <p className="text-sm text-muted-foreground">
                    SV Enterprises<br />
                    Rajajinagar, Bangalore
                  </p>
                  <a
                    href="https://maps.app.goo.gl/ihBRHowvEB6kyXPY8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-block mt-2"
                  >
                    View on Map →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:9380858219" className="hover:text-primary">9380858219</a>
                    {" / "}
                    <a href="tel:7411812788" className="hover:text-primary">7411812788</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a
                    href="mailto:vijay@svinsurance.in"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    vijay@svinsurance.in
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg overflow-hidden border border-border bg-muted h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Map Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};
