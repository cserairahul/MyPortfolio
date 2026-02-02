import { useState } from 'react'
import Home from "./Component/Home/Home";
import Projects from "./Component/Projects/Projects";
import About from './Component/About/About';
import Certificates from './Component/Certificates/Certificates';
import Contact from './Component/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App
