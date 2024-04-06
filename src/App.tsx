import './styles.css';

import  Navbar  from './components/Navbar'; 
import Hero from './components/Hero';
import Footer from './components/Footer';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function App() {
  const [idioma] = useAtom(idiomaAtom);

  return (
    <>
      <Navbar />
      <Hero idioma = {idioma} />
      <Footer idioma = {idioma}/>
    </>
  )
}

export default App