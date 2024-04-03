import './styles.css';

import  Navbar  from './components/Navbar'; 
import Footer from './components/Footer';
import MainObservatorio from './components/MainObservatorio';

function Observatorio() {
    return (
        <>
            <Navbar />
            <MainObservatorio />
            <Footer />
        </>
    )
}

export default Observatorio;
