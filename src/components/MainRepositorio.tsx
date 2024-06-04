import { useEffect } from 'react';
import '../styles.css';
import '../styles/carousel.css';
/* import '../js/carousel__informes.js'; */

interface IdiomaProps {
    idioma: string;
}

function MainRepositorio({ idioma } : IdiomaProps) {

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Repositorio" : "Alpha | Repository"
    }, [idioma])

    return (
        <>
            <main>
                <div className="banner__container">
                    <div className="banner_center">
                        <h1>{ idioma == "es" ? "Repositorio" : "Repository" }</h1>
                    </div>
                </div>
                <div className="welcome__container">
                    <div className="banner__repo__title">
                        <h1>{ idioma == "es" ? "Bienvenido" : "Welcome" }</h1>
                        <p>{ idioma == "es" ? "En este entorno encontrarás información estratégica para las mejores decisiones económicas y financieras." : "In this environment you will find strategic information for the best economic and financial decisions." }</p>
                    </div>
                </div>
                <section className='section__carousel'>
                    <div id="cCarousel">
                        <div className="arrow" id="prev"><i className="fa-solid fa-chevron-left"></i></div>
                        <div className="arrow" id="next"><i className="fa-solid fa-chevron-right"></i></div>

                        <div id="carousel-vp">
                        <div id="cCarousel-inner">

                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe 1</h3>
                                    <button type="button">Descargar</button>
                                </div>
                            </article>

                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe 1</h3>
                                    <button type="button">Descargar</button>
                                </div>
                            </article>

                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe 1</h3>
                                    <button type="button">Descargar</button>
                                </div>
                            </article>

                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe 1</h3>
                                    <button type="button">Descargar</button>
                                </div>
                            </article>

                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe 1</h3>
                                    <button type="button">Descargar</button>
                                </div>
                            </article>

                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe 1</h3>
                                    <button type="button">Descargar</button>
                                </div>
                            </article>

                        </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MainRepositorio