import Image from "next/image";

export default function EmConstrucao() {
  return (
    <div>
      <div className="bg-[#efa355] p-1 flex flex-col items-center">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>

      <div className="flex flex-col items-center justify-center mt-50">
        <h1 className="text-4xl font-bold">Página em Construção</h1>
        <p className="mt-4 text-lg">
          Estamos trabalhando para trazer essa página em breve!
        </p>
      </div>
    </div>
  );
}
