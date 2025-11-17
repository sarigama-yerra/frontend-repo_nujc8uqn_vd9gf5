export default function Hero() {
  return (
    <section id="cta" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Dein Print-on-Demand Partner für Marken, Creator und Shops
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Wir produzieren und versenden hochwertige Produkte ab Stückzahl 1 – mit deinem Design und deiner Marke. Keine Lagerhaltung, volle Kontrolle, schneller Versand.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium shadow">
                Kostenlos starten
              </a>
              <a href="#products" className="inline-flex items-center justify-center px-6 py-3 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md font-medium">
                Produkte ansehen
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <div className="text-2xl font-bold text-gray-900">48h</div>
                <div>Schnelle Produktion</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">0€</div>
                <div>Keine Fixkosten</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div>Marken-Erlebnis</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop" alt="T-Shirt Druck" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-indigo-200 to-blue-100 rounded-xl -z-10"></div>
            <div className="hidden sm:block absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
