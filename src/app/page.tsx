import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Packages />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
