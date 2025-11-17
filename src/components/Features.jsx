import { Truck, Shirt, Sparkles, BadgeCheck } from "lucide-react";

export default function Features() {
  const items = [
    { icon: Shirt, title: "Premium Druck", text: "Direktdruck (DTG), Stick & Transfer – gestochen scharfe Ergebnisse auf Top-Textilien." },
    { icon: Truck, title: "Schneller Versand", text: "Produktion innerhalb von 48h, klimaneutraler Versand weltweit." },
    { icon: BadgeCheck, title: "Markenverpackung", text: "Dein Logo auf Hangtags, Verpackung & Lieferschein – white label by default." },
    { icon: Sparkles, title: "Automatisierung", text: "Shop-Anbindung via API & Zapier – Orders laufen automatisch durch." },
  ];
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Alles, was du brauchst</h2>
        <p className="mt-3 text-gray-600 text-center">Von der Idee bis zur Auslieferung – wir decken den kompletten Prozess ab.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <Icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
