import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-primary flex items-center justify-center gap-20">
      <div>
        <Image
          src="/logo.png"
          alt="Logo da plataforma Busca Pet. É um cachorro com uma lupa, simbolizando a busca por um pet perdido."
          width={100}
          height={100}
        ></Image>
      </div>
      <h2 className="text-3xl font-bold">BuscaPet</h2>
    </div>
  );
}
