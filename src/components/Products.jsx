export default function Products() {
  const products = [
    { name: "T-Shirts", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1600&auto=format&fit=crop" },
    { name: "Hoodies", image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop" },
    { name: "Tassen", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop" },
    { name: "Poster", image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxULVNoaXJ0c3xlbnwwfDB8fHwxNzYzMzUyNjc1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  ];
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Produkte</h2>
            <p className="mt-3 text-gray-600">Qualität, die man sieht und fühlt – mit deinem Design.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">Projekt anfragen</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="font-medium text-gray-900">{p.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
