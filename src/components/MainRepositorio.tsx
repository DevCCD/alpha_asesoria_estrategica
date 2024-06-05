import { useEffect } from 'react';
import '../styles.css';
import '../styles/carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
                    <h2>Informes Mensuales</h2>
                    <div id="cCarousel">

                        <div className="arrow" id="prev"><FaChevronLeft/></div>
                        <div className="arrow" id="next"><FaChevronRight/></div>

                        <div id="carousel-vp">
                            <div id="cCarousel-inner">

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe Alpha Mayo 2024</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe Alpha Abril 2024</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe 1</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe 1</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe 1</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe 1</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='section__carousel'>
                    <h2>Informes Analíticos</h2>
                    <div id="cCarousel">

                        <div className="arrow" id="prev"><FaChevronLeft/></div>
                        <div className="arrow" id="next"><FaChevronRight/></div>

                        <div id="carousel-vp">
                            <div id="cCarousel-inner">

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe Alpha Mayo 2024</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe Alpha Abril 2024</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe 1</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe 1</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe 1</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                                <article className="cCarousel-item">
                                    <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                    <div className="infos">
                                        <h3>Informe 1</h3>
                                        <a>Descargar</a>
                                    </div>
                                </article>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='section__carousel'>
                    <h2>Reuniones Anuales</h2>
                    <div className='reunion__anual'>

                        <div className="card__reunion">
                            <div className="card__calendar">
                                <div className="top__calendar"></div>
                                <div className="card__calendar__date">
                                    <p>Feb</p>
                                    <p>2024</p>
                                </div>
                            </div>
                            <div className="card__info__reunion">
                                <p>Reunión Anual (15 de feb del 2024)</p>
                                <a href="">Ver reunión</a>
                            </div>
                        </div>

                        <div className="card__reunion">
                            <div className="card__calendar">
                                <div className="top__calendar"></div>
                                <div className="card__calendar__date">
                                    <p>Feb</p>
                                    <p>2024</p>
                                </div>
                            </div>
                            <div className="card__info__reunion">
                                <p>Reunión Anual (15 de feb del 2024)</p>
                                <a href="">Ver reunión</a>
                            </div>
                        </div>

                    </div>
                </section>
                <section className='section__carousel'>
                    <h2>Reunión con Clientes</h2>
                    <div className='reunion__anual'>

                        <div className="card__reunion">
                            <div className="card__calendar">
                                <div className="top__calendar"></div>
                                <div className="card__calendar__date">
                                    <p>Feb</p>
                                    <p>2024</p>
                                </div>
                            </div>
                            <div className="card__info__reunion">
                                <p>Reunión Anual (15 de feb del 2024)</p>
                                <a href="">Ver reunión</a>
                            </div>
                        </div>

                        <div className="card__reunion">
                            <div className="card__calendar">
                                <div className="top__calendar"></div>
                                <div className="card__calendar__date">
                                    <p>Feb</p>
                                    <p>2024</p>
                                </div>
                            </div>
                            <div className="card__info__reunion">
                                <p>Reunión Anual (15 de feb del 2024)</p>
                                <a href="">Ver reunión</a>
                            </div>
                        </div>

                        <div className="card__reunion">
                            <div className="card__calendar">
                                <div className="top__calendar"></div>
                                <div className="card__calendar__date">
                                    <p>Feb</p>
                                    <p>2024</p>
                                </div>
                            </div>
                            <div className="card__info__reunion">
                                <p>Reunión Anual (15 de feb del 2024)</p>
                                <a href="">Ver reunión</a>
                            </div>
                        </div>

                        <div className="card__reunion">
                            <div className="card__calendar">
                                <div className="top__calendar"></div>
                                <div className="card__calendar__date">
                                    <p>Feb</p>
                                    <p>2024</p>
                                </div>
                            </div>
                            <div className="card__info__reunion">
                                <p>Reunión Anual (15 de feb del 2024)</p>
                                <a href="">Ver reunión</a>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default MainRepositorio;