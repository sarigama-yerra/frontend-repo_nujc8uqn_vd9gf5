import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">P</div>
            <span className="text-lg font-semibold text-gray-900">PrintifyPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Leistungen</a>
            <a href="#process" className="hover:text-gray-900">Ablauf</a>
            <a href="#products" className="hover:text-gray-900">Produkte</a>
            <a href="#pricing" className="hover:text-gray-900">Preise</a>
            <a href="#contact" className="hover:text-gray-900">Kontakt</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Anmelden</a>
            <a href="#cta" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm">Loslegen</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Menü">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-gray-700">
              <a onClick={() => setOpen(false)} href="#features" className="px-3 py-2 rounded-md hover:bg-gray-100">Leistungen</a>
              <a onClick={() => setOpen(false)} href="#process" className="px-3 py-2 rounded-md hover:bg-gray-100">Ablauf</a>
              <a onClick={() => setOpen(false)} href="#products" className="px-3 py-2 rounded-md hover:bg-gray-100">Produkte</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="px-3 py-2 rounded-md hover:bg-gray-100">Preise</a>
              <a onClick={() => setOpen(false)} href="#contact" className="px-3 py-2 rounded-md hover:bg-gray-100">Kontakt</a>
              <a onClick={() => setOpen(false)} href="#cta" className="px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 rounded-md">Loslegen</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
