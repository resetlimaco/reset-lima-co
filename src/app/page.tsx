"use client";

import { useState } from "react";
import Image from "next/image";

import { Cormorant_Garamond } from "next/font/google";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
export default function Home() {

  const [blackImage, setBlackImage] = useState(0);

  const blackImages = [
    "/products/allsaints-black-front.avif",
    "/products/allsaints-black-back.avif",
  ];
  const greenOliveImages = [
    "/products/ck-greenolive-front.webp",
    "/products/ck-greenolive-back.webp",
  ]
  const allSaintsWhiteImages = [
  "/products/allsaints-white-front.avif",
  "/products/allsaints-white-back.avif",
];

const [allSaintsWhiteImage, setAllSaintsWhiteImage] = useState(0);

  const [greenOliveImage, setGreenOliveImage] = useState(0)

const whiteImages = [
  "/products/ck-white-front.webp",
  "/products/ck-white-back.webp",
];

const [whiteImage, setWhiteImage] = useState(0);
const beigeImages = [
  "/products/ck-beige-front.webp",
  "/products/ck-beige-back.webp",
];

const [beigeImage, setBeigeImage] = useState(0);
const navyBagImages = [
  "/products/longchamp-navy-front.jpg",
  "/products/longchamp-navy-back.jpg",
  "/products/longchamp-navy-small.jpg",
];

const paperBagImages = [
  "/products/longchamp-paper-front.jpg",
  "/products/longchamp-paper-back.jpg",
  "/products/longchamp-paper-small.jpg",
];

const [navyBagImage, setNavyBagImage] = useState(0);
const [paperBagImage, setPaperBagImage] = useState(0);
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
          <a href="/size-guide">GUÍA DE TALLAS</a>
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
        className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 pb-24"
      >

        <a
          href="#polos"
          className="border border-gray-200 p-12 text-center hover:border-black transition block"
        >
          <h3 className="text-2xl font-light">POLOS</h3>
        </a>

        <a
          href="#carteras"
          className="border border-gray-200 p-12 text-center hover:border-black transition block"
        >
          <h3 className="text-2xl font-light">CARTERAS</h3>
        </a>

        <a
          href="#sneakers"
          className="border border-gray-200 p-12 text-center hover:border-black transition block"
        >
          <h3 className="text-2xl font-light">SNEAKERS</h3>
        </a>

        <a
          href="#gorras"
          className="border border-gray-200 p-12 text-center hover:border-black transition block"
        >
          <h3 className="text-2xl font-light">GORRAS</h3>
        </a>
      </section>

      {/* FEATURED */}
      <section className="px-8 py-24 bg-zinc-50">
        <h2 className="text-4xl font-light mb-12 text-center">
          NEW ARRIVALS
        </h2>
        <div id="polos" className="px-8 py-24">
          <h2 className="text-4xl font-light text-center mb-12">
            POLOS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* PRODUCTO 1 */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="relative mb-4">

                <button
                  onClick={() =>
                    setBlackImage(
                      blackImage === 0
                        ? blackImages.length - 1
                        : blackImage - 1
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
                >
                  ‹
                </button>

                <Image
                  src={blackImages[blackImage]}
                  alt="AllSaints Tierra Oversized Crew Neck Logo T-Shirt"
                  width={600}
                  height={800}
                  className="w-full h-96 object-cover"
                />

                <button
                  onClick={() =>
                    setBlackImage(
                      blackImage === blackImages.length - 1
                        ? 0
                        : blackImage + 1
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
                >
                  ›
                </button>

              </div>

              <h3 className="text-xl mb-2">
                AllSaints Tierra Oversized Crew Neck Logo T-Shirt
              </h3>

              <p className="text-gray-900 font-medium mb-2">
                S/ 489
              </p>

              <p className="text-gray-500">
                Disponible · Talla M
              </p>
            </div>

{/* PRODUCTO 2 */}
<div className="bg-white border border-gray-200 p-8">
  <div className="relative mb-4">

    <button
      onClick={() =>
        setAllSaintsWhiteImage(
          allSaintsWhiteImage === 0
            ? allSaintsWhiteImages.length - 1
            : allSaintsWhiteImage - 1
        )
      }
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
    >
      ‹
    </button>

    <Image
      src={allSaintsWhiteImages[allSaintsWhiteImage]}
      alt="AllSaints Descent Oversized Graphic T-Shirt"
      width={600}
      height={800}
      className="w-full h-96 object-cover"
    />

    <button
      onClick={() =>
        setAllSaintsWhiteImage(
          allSaintsWhiteImage === allSaintsWhiteImages.length - 1
            ? 0
            : allSaintsWhiteImage + 1
        )
      }
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
    >
      ›
    </button>

  </div>

  <h3 className="text-xl mb-2">
    AllSaints Descent Oversized Graphic T-Shirt
  </h3>

  <p className="text-gray-900 font-medium mb-2">
    S/ 459
  </p>

  <p className="text-gray-500">
    Disponible · Talla M
  </p>
</div>
            <div className="bg-white border border-gray-200 p-8">
              <div className="relative mb-4">
                <button
                  onClick={() =>
                    setGreenOliveImage(
                      greenOliveImage === 0
                        ? greenOliveImages.length - 1
                        : greenOliveImage - 1
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
                >
                  ‹
                </button>

                <Image
                  src={greenOliveImages[greenOliveImage]}
                  alt="Calvin Klein Bold Logo Graphic Tee"
                  width={600}
                  height={800}
                  className="w-full h-96 object-cover"
                />

                <button
                  onClick={() =>
                    setGreenOliveImage(
                      greenOliveImage === greenOliveImages.length - 1
                        ? 0
                        : greenOliveImage + 1
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
                >
                  ›
                </button>
              </div>

              <h3 className="text-xl mb-2">
                Calvin Klein Bold Logo Graphic Tee
              </h3>

              <p className="text-gray-900 font-medium mb-2">
                S/ 139
              </p>

              <p className="text-gray-500">
                Disponible · Talla L
              </p>
            </div>
            {/* PRODUCTO 4 */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="relative mb-4">

                <button
                  onClick={() =>
                    setWhiteImage(
                      whiteImage === 0
                        ? whiteImages.length - 1
                        : whiteImage - 1
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
                >
                  ‹
                </button>

                <Image
                  src={whiteImages[whiteImage]}
                  alt="Calvin Klein Stacked Logo Easy Tee"
                  width={600}
                  height={800}
                  className="w-full h-96 object-cover"
                />

                <button
                  onClick={() =>
                    setWhiteImage(
                      whiteImage === whiteImages.length - 1
                        ? 0
                        : whiteImage + 1
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
                >
                  ›
                </button>

              </div>

              <h3 className="text-xl mb-2">
                Calvin Klein Stacked Logo Easy Tee
              </h3>

              <p className="text-gray-900 font-medium mb-2">
                S/ 139
              </p>

              <p className="text-gray-500">
                Disponible · Tallas M y L
              </p>
            </div>
            {/* PRODUCTO 5 */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="relative mb-4">

                <button
                  onClick={() =>
                    setBeigeImage(
                      beigeImage === 0
                        ? beigeImages.length - 1
                        : beigeImage - 1
                    )
                  }
                  className="absolute left-8 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
                >
                  ‹
                </button>

                <Image
                  src={beigeImages[beigeImage]}
                  alt="Calvin Klein Bold Logo Graphic Tee Relaxed T-Shirt"
                  width={600}
                  height={800}
                  className="w-full h-96 object-cover"
                />

                <button
                  onClick={() =>
                    setBeigeImage(
                      beigeImage === beigeImages.length - 1
                        ? 0
                        : beigeImage + 1
                    )
                  }
                  className="absolute right-8 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
                >
                  ›
                </button>

              </div>

              <h3 className="text-xl mb-2">
                Calvin Klein Bold Logo Graphic Tee Relaxed T-Shirt
              </h3>

              <p className="text-gray-900 font-medium mb-2">
                S/ 139
              </p>

              <p className="text-gray-500">
                Disponible · Talla L
              </p>
              <button
  onClick={() => window.open("/size-guide", "_blank")}
  className="mt-3 text-sm underline text-gray-600 hover:text-black"
>
  Ver guía de tallas
</button>
            </div>

          </div>
        </div>
      </section>
      <section id="carteras" className="px-8 py-24 bg-zinc-50">
        <h2 className="text-4xl font-light text-center mb-12">
          CARTERAS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* LONGCHAMP NAVY */}
    <div className="bg-white border border-gray-200 p-8">

      <div className="relative mb-4">

        <button
          onClick={() =>
            setNavyBagImage(
              navyBagImage === 0
                ? navyBagImages.length - 1
                : navyBagImage - 1
            )
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
        >
          ‹
        </button>

        <Image
          src={navyBagImages[navyBagImage]}
          alt="Longchamp Le Pliage Original M Navy"
          width={600}
          height={800}
          className="w-full h-[500px] object-contain"
        />

        <button
          onClick={() =>
            setNavyBagImage(
              navyBagImage === navyBagImages.length - 1
                ? 0
                : navyBagImage + 1
            )
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
        >
          ›
        </button>

      </div>

      <h3 className="text-xl mb-2">
        Longchamp Le Pliage Original M
      </h3>

      <p className="text-gray-900 font-medium mb-2">
        S/ 949
      </p>

      <p className="text-gray-500">
        Color Navy · Size M
      </p>

    </div>

    {/* LONGCHAMP PAPER */}
    <div className="bg-white border border-gray-200 p-8">

      <div className="relative mb-4">

        <button
          onClick={() =>
            setPaperBagImage(
              paperBagImage === 0
                ? paperBagImages.length - 1
                : paperBagImage - 1
            )
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
        >
          ‹
        </button>

        <Image
          src={paperBagImages[paperBagImage]}
          alt="Longchamp Le Pliage Original M Paper"
          width={600}
          height={800}
          className="w-full h-[500px] object-contain"
        />

        <button
          onClick={() =>
            setPaperBagImage(
              paperBagImage === paperBagImages.length - 1
                ? 0
                : paperBagImage + 1
            )
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 px-3 text-3xl text-gray-600 hover:text-black"
        >
          ›
        </button>

      </div>

      <h3 className="text-xl mb-2">
        Longchamp Le Pliage Original M
      </h3>

      <p className="text-gray-900 font-medium mb-2">
        S/ 949
      </p>

      <p className="text-gray-500">
        Color Paper · Size M
      </p>

    </div>

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
