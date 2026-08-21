import '../styles.css';
import { Link } from 'react-router-dom';

interface IdiomaProps {
    idioma: string;
}

const Hero = ({ idioma } : IdiomaProps) => {

    const fecha = new Date(); 
    fecha.setMonth(fecha.getMonth() - 1); 

    return (
        <>
            <main>
                <div className="hero-container">
                    <img 
                        src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/hero/hero"
                    />
                    <div className="hero-text">
                        <h1>Alpha</h1>
                        <h4>
                            {idioma == "es" ? "Asesoría Estratégica" : "Strategic Consulting"}
                        </h4>
                        <p>{ idioma == "es" ? "Generación de confianza y alta capacidad de análisis" : "Generation of trust and high capacity for analysis"}</p>
                        <Link to={"/#contactar"}>
                            <button className="hero-btn">{idioma == "es" ? "Escríbenos" : "Contact us"}</button>
                        </Link>
                    </div>
                </div>
            </main>
            <section>
                <Link to={"/#contactar"} className='container__portada'>
                    <div className="left__portada">
                        <div className="logo__portada">
                            <img src="/favicon.svg" alt="Logo Alpha" />
                            <h1>ALPHA</h1>
                            <h4>
                                {idioma == "es" ? "asesoría estratégica" : "strategic consulting"}
                            </h4>
                        </div>
                        <h2>
                            {idioma == "es" ? "A nivel global regresa la incertidumbre del conflicto. A nivel local optimismo en el nuevo gobierno." : "Global"}
                        </h2>
                        <p>{ idioma == "es" ? "Informe "+ fecha.toLocaleDateString('es-ES',{ month: 'long', year: 'numeric'}) : "Report "+ fecha.toLocaleDateString('en-EN',{ month: 'long', year: 'numeric'}) }</p>
                    </div>
                    <div className="right__portada">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1787328919/alpha/Portada%20Informes/Julio_2026_l9i5xk.png" alt="Earth" />
                    </div>
                </Link>
                <div className="container">
                    <div className="container__graph">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1787329216/alpha/Portada%20Informes/Informe_Alpha_Julio_2026.pptx_rjk9zo.svg" alt="Informe Alpha Julio 2026" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;