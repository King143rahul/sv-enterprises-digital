export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">SV Enterprises</h3>
            <p className="text-sm text-muted-foreground">
              Trusted Motor & Vehicle Insurance Service Provider
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Phone: 9380858219 / 7411812788<br />
              Email: vijay@svinsurance.in
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Location</h3>
            <p className="text-sm text-muted-foreground">
              Rajajinagar, Bangalore
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SV Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
