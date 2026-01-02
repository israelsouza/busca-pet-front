import Image from "next/image";
import ShareSite from "./ShareSite";

export default function Cooperate() {
  return (
    <section>
      <div
        id="cooperate"
        className="flex flex-col min-[672px]:flex-row max-w-[1200px] mx-auto items-center gap-10 p-10"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center min-[672px]:text-left">
            Ajude mais pets!
          </h2>
          <p className="max-w-[600px] ">
            Seu engajamento faz a diferença! Compartilhe nosso site com amigos,
            vizinhos e grupos locais. Quanto mais pessoas participarem, maior a
            chance de reencontros felizes.
          </p>
          <ShareSite />
        </div>
        <div>
          <Image
            src="/cooperate.png"
            alt="Cooperate"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
