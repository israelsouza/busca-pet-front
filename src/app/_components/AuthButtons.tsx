export default function AuthButtons({ isMobile }: { isMobile?: boolean }) {
  const baseClass =
    "font-medium rounded-full transition-all duration-300 ease-out cursor-pointer active:scale-95 text-center";
  const btnCadastrar = `${baseClass} border-2 border-white/80 bg-transparent text-gray-800 hover:bg-white/20 hover:text-white`;
  const btnLogin = `${baseClass} bg-white text-gray-800 hover:bg-gray-800 hover:text-white hover:shadow-lg`;

  const sizeClasses = isMobile
    ? "w-full py-3 text-lg"
    : "px-6 py-2 text-lg max-[1120px]:text-base max-[1120px]:px-4 hover:scale-105";

  return (
    <>
      <button className={`${btnCadastrar} ${sizeClasses}`}>Cadastrar</button>
      <button className={`${btnLogin} ${sizeClasses}`}>Login</button>
    </>
  );
}
