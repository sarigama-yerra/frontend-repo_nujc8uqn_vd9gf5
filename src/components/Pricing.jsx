export default function Pricing() {
  const tiers = [
    { name: "Starter", price: "0€", features: ["Keine Mindestmengen", "Standardproduktion 72h", "E-Mail Support"] },
    { name: "Business", price: "49€ / Monat", features: ["Rabatte ab Volumen", "Produktion 48h", "Shop-Anbindung", "Priorisierter Support"] },
    { name: "Enterprise", price: "Individuell", features: ["Individuelle Preise", "Fulfillment weltweit", "SLA & Account Manager"] },
  ];
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Einfache, transparente Preise</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <div key={t.name} className={`p-6 rounded-xl border shadow-sm ${idx === 1 ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 bg-white'}`}>
              <div className="text-sm text-gray-500">{t.name}</div>
              <div className="mt-1 text-3xl font-bold text-gray-900">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full justify-center px-4 py-2 rounded-md font-medium ${idx === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-black'}`}>Jetzt starten</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
