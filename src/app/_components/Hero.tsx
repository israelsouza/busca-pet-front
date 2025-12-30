export default function Hero() {
  return (
    <main className="relative flex bg-[url('/hero.png')] bg-no-repeat bg-cover bg-center min-h-[400px] h-[60vh] md:h-[500px] lg:h-[600px] bg-amber-800 items-center justify-center md:justify-start px-6 md:px-16 lg:px-24">
      {/* Overlay para melhorar contraste */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

      <div className="relative z-10 flex flex-col text-center md:text-left max-w-[90%] md:max-w-[550px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          Juntos por Eles!
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          Encontre seu pet perdido ou ajude a reunir famílias.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          Cadastre, busque e traga esperança para quem precisa!
        </p>
      </div>
    </main>
  );
}
