import Image from "next/image";

export default function SizeGuide() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-light text-center mb-16">
        Guía de Tallas
      </h1>

      <section className="mb-20">
        <h2 className="text-3xl mb-8 text-center">
          AllSaints
        </h2>

        <Image
          src="/size-guide/allsaints-size-guide.png"
          alt="Guía AllSaints"
          width={1600}
          height={900}
          className="w-full border"
        />
      </section>

      <section>
        <h2 className="text-3xl mb-8 text-center">
          Calvin Klein
        </h2>

        <Image
          src="/size-guide/ck-size-guide.png"
          alt="Guía Calvin Klein"
          width={1600}
          height={900}
          className="w-full border"
        />
      </section>
    </main>
  );
}
