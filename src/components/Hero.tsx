import '../styles.css';

import globe from '../assets/hero.svg'
import { Link } from 'react-router-dom';

const Hero = ({ idioma } ) => {
    return (
        <>
            <main>
                <div className="hero-container">
                    <img 
                        src={globe}
                    />
                    <div className="hero-text">
                        <h1>Alpha</h1>
                        <h4>
                            {idioma == "es" ? "Asesoría Estratégica" : "Strategic Consulting"}
                        </h4>
                        <p>{ idioma == "es" ? "Generación de confianza y alta capacidad de análisis" : "Generation of trust and high capacity for analysis"}</p>
                        <Link to={"/#contacto"}>
                            <button className="hero-btn">{idioma == "es" ? "Escríbenos" : "Contact us"}</button>
                        </Link>
                    </div>
                </div>
            </main>
            <section>
                <div className="container">
                    <h1 className="display">{idioma=="es" ? "Tasa de Interés Real" :  "Real Interest Rate" }</h1>
                    <p>{idioma == "es" ? "¿Cómo impacta actualmente y en perspectiva a la empresa y a tus inversiones personales?" : "How does it currently and in perspective impact the company and your personal investments?"}</p>
                    <Link to={"/#contacto"}>
                        <button className="section-btn">Escríbenos</button>
                    </Link>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183986/alpha/images/grafico3_nsw067.png" />
                </div>
            </section>
        </>
    );
};

export default Hero;