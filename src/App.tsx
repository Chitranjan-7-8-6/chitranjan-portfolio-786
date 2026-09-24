import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-void font-body text-cream-dim">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;
