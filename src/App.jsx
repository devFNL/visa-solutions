import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import How from "./How";
import Benefits from "./Benefits";
import Requirements from "./Requirements";
import Process from "./Process";
import Included from "./Included";
import Cover from "./Cover";

function App() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="how">
        <How />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="requirements">
        <Requirements />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="included">
        <Included />
      </section>
      <section id="cover">
        <Cover />
      </section>
    </>
  );
}

export default App;
