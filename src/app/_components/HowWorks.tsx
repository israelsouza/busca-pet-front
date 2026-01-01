import Box from "./Box";

export default function HowWorks() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#F2D9B6]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 md:text-black mb-12">
          Como Funciona
        </h2>

        <Box
          title="1 - Cadastre-se"
          description="Crie uma conta em poucos passos e tenha acesso à nossa plataforma. Com seu cadastro, você poderá registrar pets perdidos ou encontrados e se conectar com outras pessoas que possam ajudar."
        />
        <Box
          title="2 - Faça uma publicação"
          description="Insira as informações do pet, como nome, raça, cor e local onde foi perdido ou encontrado. Adicione fotos para facilitar a identificação e aumente as chances de um reencontro rápido."
        />
        <Box
          title="3 - Fique de olho em seu e-mail"
          description="Quando alguém encontrar um pet semelhante ao que você cadastrou ou quiser entrar em contato sobre um animal encontrado, você receberá uma notificação por e-mail. Fique atento para não perder nenhuma atualização!"
        />
      </div>
    </section>
  );
}
