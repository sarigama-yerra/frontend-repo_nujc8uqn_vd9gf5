import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      });
      if (!res.ok) throw new Error('Fehler beim Senden');
      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Projekt anfragen</h2>
        <p className="mt-3 text-gray-600 text-center">Erzähle uns kurz von deinem Vorhaben – wir melden uns innerhalb von 24h.</p>
        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <input name="name" required placeholder="Dein Name" className="w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
          <input type="email" name="email" required placeholder="E-Mail" className="w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
          <textarea name="message" rows="5" required placeholder="Deine Nachricht" className="w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
          <button type="submit" className="inline-flex justify-center px-4 py-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700">Absenden</button>
          {status === 'loading' && <p className="text-sm text-gray-600">Senden…</p>}
          {status === 'success' && <p className="text-sm text-green-600">Danke! Wir haben deine Anfrage erhalten.</p>}
          {status === 'error' && <p className="text-sm text-red-600">Leider ist ein Fehler aufgetreten.</p>}
        </form>
      </div>
    </section>
  );
}
