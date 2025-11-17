import { Package, PenTool, Settings, Truck } from "lucide-react";

export default function Process() {
  const steps = [
    { icon: PenTool, title: "Design Upload", text: "Du lädst Motive hoch oder nutzt unsere Design-Hilfe." },
    { icon: Settings, title: "Produktwahl", text: "Wähle Größen, Farben und Branding-Optionen." },
    { icon: Package, title: "Produktion", text: "Wir drucken, prüfen und verpacken markenkonform." },
    { icon: Truck, title: "Versand", text: "Klimaneutral weltweit – Tracking inklusive." },
  ];
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">So einfach funktioniert's</h2>
        <div className="mt-12 grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-blue-600 text-white flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-sm text-gray-500">Schritt {i + 1}</div>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
