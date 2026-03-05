import Link from 'next/link';
import Header from '../_components/Header'
import { FcGoogle } from "react-icons/fc";


export default function Register() {
  return (
    <main className="h-screen flex">
      <div className="w-full md:w-1/2 flex flex-col">
        <Header />
        <div className="bg-secundary text-center flex-1 flex items-center justify-around flex-col">
          <div>
            <h2 className="text-2xl">
              Cadastre-se e ajude a construir finais felizes para pets perdidos!
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-primary p-4 rounded-4xl w-80">
              <button>Cadastre-se com o email</button>
            </div>
            <div className="bg-primary p-4 rounded-4xl w-80">
              <button className="flex items-center">
                
                Cadastre-se com o Google
              </button>
            </div>
            <div className="bg-primary p-4 rounded-4xl w-80">
              <button>Cadastre-se com o Facebook</button>
            </div>
          </div>

          <div>
            <p>
              Já tem cadastro? Faça o <Link href={"/login"}>login</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2 bg-[url('/forms/coelho.png')] bg-no-repeat bg-cover bg-center"></div>
    </main>
  );
}
