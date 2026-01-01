"use client";
export default function ShareSite() {
  const compartilhar = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Busca pet",
          text: "Confira este site, que ajuda a encontrar seus pets perdidos!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch (error) {
        console.error("Erro ao copiar link:", error);
      }
    }
  };

  return (
    <button
      onClick={compartilhar}
      className="mt-6 px-6 py-3 font-medium rounded-full transition-all duration-300 ease-out cursor-pointer active:scale-95 bg-[#F2D9B6] text-gray-800 hover:bg-white hover:text-gray-800 hover:shadow-lg hover:scale-105 border-2 border-[#F2D9B6] hover:border-gray-800"
    >
      Compartilhar com os amigos
    </button>
  );
}
