import "./App.css";
import Benefits from "./components/Benefits";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Member from "./components/Member";
import Navbar from "./components/Navbar";
import Paid from "./components/Paid";
import Promote from "./components/Promote";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <Benefits />
        <Works />
        <Promote />
        <Paid />
        <Testimonials />
        <Member />
        <Faq />
      </div>
    </>
  );
}

export default App;
