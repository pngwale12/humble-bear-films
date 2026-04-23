import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
}
