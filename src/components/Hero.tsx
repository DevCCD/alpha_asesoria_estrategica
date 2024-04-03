import '../styles.css';

import globe from '../assets/hero.svg'

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
                        <p>Generación de confianza y alta capacidad de análisis.</p>
                        <button className="hero-btn">Escríbenos</button>
                    </div>
                </div>
            </main>
            <section>
                <div className="container">
                    <h1 className="display">Tasa de Interés Real</h1>
                    <p>¿Cómo impacta actualmente y en perspectiva a la empresa y a tus inversiones personales?</p>
                    <button className="section-btn">Escríbenos</button>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922014/alpha/images/tasa_pdrrci.png" />
                </div>
            </section>
        </>
    )
}

export default Hero