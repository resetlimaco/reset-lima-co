import { Cormorant_Garamond } from "next/font/google";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white flex items-center justify-between px-8 py-6 border-b border-gray-200">
        <h1  className={`${cormorant.className} text-3xl tracking-[0.25em]`}>
          RESET LIMA CO.
        </h1>

        <div className="flex gap-6 text-sm uppercase tracking-widest">
          <a href="#shop">Catálogo</a>
          <a href="#about">Nosotros</a>
          <a href="#faq">FAQ</a>
          <a
            href="https://instagram.com/resetlimaco"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
       <h2
  className={`${cormorant.className} text-7xl md:text-9xl tracking-[0.45em] font-light mb-6]`}
>
  RESET
</h2> 
<p className="mt-4 text-lg tracking-[0.8em] uppercase">
  LIMA CO.
</p>
        <p className="max-w-xl text-gray-600 text-lg mb-10">
  
</p>

        <div className="flex gap-4">
          <a
  href="https://wa.me/17543084482?text=Hola%20RESET%20LIMA%20CO.,%20quisiera%20realizar%20un%20pedido."
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 bg-black text-white hover:bg-zinc-800 transition"
>
  PEDIR POR WHATSAPP
</a>

          <a
        
  href="#shop"
  className="px-8 py-3 border border-black hover:bg-black hover:text-white transition"
>
  EXPLORAR COLECCIÓN
</a>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        id="shop"
        className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 pb-24"
      >
        {["POLOS", "HOODIES", "GORRAS", "SNEAKERS"].map((item) => (
          <div
            key={item}
            className="border border-gray-200 p-12 text-center hover:border-black transition"
          >
            <h3 className="text-2xl font-light">{item}</h3>
          </div>
        ))}
      </section>

      {/* FEATURED */}
      <section className="px-8 py-24 bg-zinc-50">
        <h2 className="text-4xl font-light mb-12 text-center">
          PRODUCTOS DESTACADOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((product) => (
            <div
              key={product}
              className="bg-white border border-gray-200 p-8"
            >
              <div className="h-72 bg-gray-100 mb-4"></div>

              <h3 className="text-xl mb-2">
                RESET Essential Tee
              </h3>

              <p className="text-gray-500">
                S/ 89.00
              </p>
            </div>
          ))}
        </div>
      </section>
{/* FAQ */}
<section id="faq" className="px-8 py-24">
  <h2 className="text-4xl font-bold text-center mb-12">
    PREGUNTAS FRECUENTES
  </h2>

  <div className="max-w-3xl mx-auto space-y-8">

    <div>
      <h3 className="font-medium mb-2">
        ¿Realizan envíos?
      </h3>
      <p className="text-gray-600">
        Sí, realizamos envíos a todo el Perú.
      </p>
    </div>

    <div>
      <h3 className="font-medium mb-2">
        ¿Cuánto demora la entrega?
      </h3>
      <p className="text-gray-600">
        Lima Metropolitana: 24-48 horas. Provincias: 2-5 días hábiles.
      </p>
    </div>

    <div>
      <h3 className="font-medium mb-2">
        ¿Cómo puedo realizar un pedido?
      </h3>
      <p className="text-gray-600">
        Puedes realizar tu pedido directamente a través de WhatsApp.
      </p>
    </div>

    <div>
      <h3 className="font-medium mb-2">
        ¿Qué métodos de pago aceptan?
      </h3>
      <p className="text-gray-600">
        Yape, Plin, transferencia bancaria y próximamente pagos online.
      </p>
    </div>
<div>
      <h3 className="text-xl mb-2">
        ¿Puedo realizar cambios?
      </h3>
      <p className="text-gray-500">
        No. Todas las ventas son finales. Asegúrate de revisar la guía de tallas antes de realizar tu pedido.
      </p>
    </div>
  </div>
</section>
      {/* FOOTER */}
      <footer
        id="about"
        className="text-center py-16 border-t border-gray-200"
      >
       <h3
  className={`${cormorant.className} text-3xl tracking-[0.25em]`}
>
  RESET LIMA CO.
</h3>

        <p className="text-gray-500 mb-6">
          Streetwear Retail Store founded and based in Lima, Peru.
        </p>

        <a
          href="https://instagram.com/resetlimaco"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          @resetlimaco
        </a>
      </footer>
    </main>
  );
}
