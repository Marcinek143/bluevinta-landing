import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import PainPoints from "@/components/sections/PainPoints";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <div className="bg-background-light text-text-main">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <PainPoints />
        <Services />
        <WhyUs />
        <Process />
        <Industries />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
