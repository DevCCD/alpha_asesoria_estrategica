import '../styles.css';

import globe from '../assets/hero.svg'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <>
            <main>
                <div className="hero-container">
                    <img 
                        src={globe}    
                    />
                    <div className="hero-text">
                        <h1>Alpha</h1>
                        <h4>Asesoría Estratégica</h4>
                        <p>Generación de confianza y alta capacidad de análisis</p>
                        <Link to={"/#contacto"}>
                            <button className="hero-btn">Escríbenos</button>
                        </Link>
                    </div>
                </div>
            </main>
            <section>
                <div className="container">
                    <h1 className="display">Tasa de Interés Real</h1>
                    <p>¿Cómo impacta actualmente y en perspectiva a la empresa y a tus inversiones personales?</p>
                    <Link to={"/#contacto"}>
                        <button className="section-btn">Escríbenos</button>
                    </Link>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183986/alpha/images/grafico3_nsw067.png" />
                </div>
            </section>
        </>
    )
}

export default Hero