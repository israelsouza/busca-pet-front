import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Brief from "./_components/Brief";
import HowWorks from "./_components/HowWorks";
import Cooperate from "./_components/Cooperate";
import Footer from "@/components/Footer";

export default function EmConstrucao() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brief />
        <HowWorks />
        <Cooperate />
      </main>
      <Footer />
    </>
  );
}
