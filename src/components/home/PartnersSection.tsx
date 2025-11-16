export const PartnersSection = () => {
  const partners = [
    "ICICI Lombard",
    "Digit",
    "Royal Sundaram",
    "Reliance General",
    "Liberty",
    "Shriram",
    "Chola MS",
  ];

  return (
    <section className="py-16 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Insurance Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner}
              className="px-6 py-4 bg-card rounded-lg border border-border text-center min-w-[140px]"
            >
              <p className="text-sm font-medium text-muted-foreground">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
