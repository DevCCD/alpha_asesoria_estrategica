import { useEffect } from 'react';
import '../styles.css';
import '../styles/carousel.css';
/* Slider */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IdiomaProps {
    idioma: string;
}

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function Arrow(props: ArrowProps) {
    const { className, style, onClick} = props;
    return (
        <div 
            className={className}
            style={{...style, display: "flex", background: "#ccc", borderRadius: "50%" }}
            onClick={onClick}
        />
    )
}

function MainRepositorio({ idioma } : IdiomaProps) {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
                {
                    breakpoint: 1690,
                    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 1440,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                    }
                },
                {
                    breakpoint: 870,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        };

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
                    <h2>{idioma == "es" ? "Informes Mensuales" : "Monthly Reports"}</h2>
                    {/* <div id="cCarousel">

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
                    </div> */}
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe Alpha Mayo 2024</h3>
                                    <a href='#'>Descargar</a>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe Alpha Mayo 2024</h3>
                                    <a href='#'>Descargar</a>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe Alpha Mayo 2024</h3>
                                    <a href='#'>Descargar</a>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe Alpha Mayo 2024</h3>
                                    <a href='#'>Descargar</a>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe Alpha Mayo 2024</h3>
                                    <a href='#'>Descargar</a>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe Alpha Mayo 2024</h3>
                                    <a href='#'>Descargar</a>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe Alpha Mayo 2024</h3>
                                    <a href='#'>Descargar</a>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="cCarousel-item">
                                <img src="https://img.freepik.com/vector-gratis/fondo-vector-degradado-azul-claro-invierno_53876-128352.jpg" alt="Moon" />
                                <div className="infos">
                                    <h3>Informe Alpha Mayo 2024</h3>
                                    <a href='#'>Descargar</a>
                                </div>
                            </article>
                        </div>
                    </Slider>
                </div>
                </section>
                {/* <section className='section__carousel'>
                    <h2>{idioma == "es" ? "Informes Analíticos" : "Analytical Reports" }</h2>
                    <div id="cCarousel2">

                        <div className="arrow" id="prev2"><FaChevronLeft/></div>
                        <div className="arrow" id="next2"><FaChevronRight/></div>

                        <div id="carousel-vp2">
                            <div id="cCarousel-inner2">

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
                </section> */}
                <section className='section__carousel'>
                    <h2>{idioma == "es" ? "Reuniones Anuales" : "Annual Meetings"}</h2>
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
                    <h2>{idioma == "es" ? "Reunión con Clientes" : "Meeting with Clients"}</h2>
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