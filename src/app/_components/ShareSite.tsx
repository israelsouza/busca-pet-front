"use client";
import { Copy } from "lucide-react";

export default function ShareSite() {
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copiado para a área de transferência!");
    } catch (error) {
      console.error("Erro ao copiar link:", error);
      alert("Não foi possível copiar o link. Tente novamente.");
    }
  }

  return (
    <button
      onClick={copyToClipboard}
      className="flex justify-center items-center mt-6 px-6 py-3 font-medium rounded-full transition-all duration-300 ease-out cursor-pointer active:scale-95 bg-[#F2D9B6] text-gray-800 hover:bg-white hover:text-gray-800 hover:shadow-lg hover:scale-105 border-2 border-[#F2D9B6] hover:border-gray-800"
    >
      <span className="mr-2">Compartilhar com os amigos</span> <Copy />
    </button>
  );
}
