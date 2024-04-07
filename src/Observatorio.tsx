import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainObservatorio from './components/MainObservatorio';

import { idiomaAtom } from './atom/idiomaAtom';
import { useAtom } from "jotai";

function Observatorio() {
    const [idioma] = useAtom(idiomaAtom);

    return (
        <>
            <Navbar />
            <MainObservatorio />
            <Footer idioma = {idioma}/>
        </>
    )
}

export default Observatorio;
