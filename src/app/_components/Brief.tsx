import Image from "next/image";

const BRIEFS = [
  {
    id: 1,
    title: "Ana, SP",
    description:
      "Graças ao site, reencontrei meu cachorro em apenas dois dias! A comunidade é incrível e ajudou a espalhar a mensagem.",
    photo: "/avatars/personF_3.jpg",
  },
  {
    id: 2,
    title: "Carlos, RJ",
    description:
      "Encontrei uma gatinha perdida e consegui devolver para a família dela em menos de uma semana. Que alegria poder ajudar!",
    photo: "/avatars/personM_1.jpg",
  },
  {
    id: 3,
    title: "Mariana, MG",
    description:
      "Minha cachorrinha fugiu durante uma tempestade. Com a ajuda do site, ela voltou pra casa sã e salva. Sou muito grata!",
    photo: "/avatars/personF_1.jpg",
  },
  {
    id: 4,
    title: "Pedro, BA",
    description:
      "Cadastrei meu gato perdido e em três dias recebi uma mensagem de quem o encontrou. Plataforma sensacional e fácil de usar!",
    photo: "/avatars/personM_3.jpg",
  },
  {
    id: 5,
    title: "Julia, PR",
    description:
      "Ajudei a reunir um filhote com sua dona. A emoção do reencontro foi indescritível. Todos deveriam conhecer esse site!",
    photo: "/avatars/personF_2.jpg",
  },
  {
    id: 6,
    title: "Roberto, RS",
    description:
      "Depois de semanas procurando, finalmente reencontrei meu Border Collie graças às pessoas maravilhosas dessa comunidade.",
    photo: "/avatars/personM_2.jpg",
  },
];

export default function Brief() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 md:text-black mb-12">
          Histórias de Reencontro
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRIEFS.map((brief) => (
            <div
              key={brief.id}
              className="bg-[#e8d5c4] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 rounded-full bg-gray-800 mb-4 overflow-hidden">
                <Image
                  src={brief.photo}
                  alt={brief.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 md:text-black mb-3">
                {brief.title}
              </h3>
              <p className="text-gray-700 md:text-black text-sm leading-relaxed">
                {brief.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
