import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainConsultoria({ idioma } : IdiomaProps) {
    return(
        <>
            <main>
                <div className="banner__container">
                    <div className="banner_left">
                        <h1>{ idioma == "es" ? "Consultoría" : "Consultancy" }</h1>
                    </div>
                    <div className="banner_right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922353/alpha/images/consultoria_m05zps.jpg" alt="Imagen Capacidades" />
                    </div>
                </div>
                <div className="display__title" id="macro">
                    <h2>Macro</h2>
                </div>
                <div className="container__macro">
                    <div className="grid__macro_1">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922070/alpha/images/macro1_iqavtp.jpg" alt="Talento" />
                        <div>
                            <p>Análisis, Impactos, escenarios y proyecciones económicas</p>
                        </div>
                    </div>
                    <div className="grid__macro_2">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922047/alpha/images/macro2_joytzd.jpg" alt="Riesgos" />
                        <div>
                            <p>Análisis de políticas fiscal, monetario y comercial y efectos sobre las organizaciones y países</p>
                        </div>
                    </div>
                    <div className="grid__macro_3">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922039/alpha/images/macro3_syp9pk.jpg" alt="Contactos" />
                        <div>
                            <p>Instrumentos innovadores fiscales</p>
                        </div>
                    </div>
                </div>
                <div className="display__title" id="micro">
                    <h2>Micro</h2>
                </div>
                <div className="container__macro">
                    <div className="grid__macro_1 grid__micro_1">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922073/alpha/images/micro1_i3wgrh.jpg" alt="Talento" />
                        <div>
                            <h1>Regulación y optimización de procesos</h1>
                            <p>La regulación y optimización de procesos se centra en establecer normativas y mejorar la eficiencia en las operaciones industriales y empresariales. Este enfoque busca garantizar el cumplimiento de estándares mientras se maximiza la productividad y se reducen los costos operativos.</p>
                        </div>
                    </div>
                    <div className="grid__macro_2 grid__micro_2">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922042/alpha/images/micro2_ke1xf3.jpg" alt="Riesgos" />
                        <div>
                            <h1>Impactos, escenarios y proyecciones en industrias</h1>
                            <p>Evalúa las consecuencias, posibles situaciones futuras y previsiones en diversos sectores económicos, permitiendo una mejor toma de decisiones y planificación estratégica.</p>
                        </div>
                    </div>
                    <div className="grid__macro_3 grid__micro_1">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922077/alpha/images/micro3_dxjqmq.jpg" alt="Contactos" />
                        <div>
                            <h1>Competitividad industrial</h1>
                            <p>Capacidad de las empresas y sectores productivos para generar bienes y servicios de alta calidad, a costos competitivos, para mantener y mejorar su posición en el mercado nacional e internacional.</p>
                        </div>
                    </div>
                </div>
                <div className="display__title" id="estructuracion">
                    <h2>Estructuración y financiamiento de proyectos</h2>
                </div>
                <div className="container__estruc">
                    {/* <!-- izquierda --> */}
                    <div className="imagen__estruc">
                        <h1>Estructuración y gestión de activos</h1>
                    </div>
                    {/* <!-- derecha --> */}
                    <div className="subcontainer__estruc">
                        <div>
                            <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712081994/alpha/images/estrucfin2_rjngvq.jpg" alt="" />
                            <p>Fondos, inversiones y transacciones de financiamiento de proyectos de infraestructura locales y transfronterizos</p>
                        </div>

                        <p className="estruc__down">Conexiones con agencias de desarrollo internacionales y con conglomerados internacionales</p>
                    </div>
                </div>
                <div className="display__title" id="ifd">
                    <h2>Instrumentos Financieros Derivados (IFD)</h2>
                </div>
                <div className="container__capacidades container__instrumentos">
                    <div className="grid__capacidades_1">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712082771/alpha/images/ifd1_cn9uwl.jpg" loading="lazy" alt="Analisis" />
                        <div>
                            <p>Análisis y recomendación de mejores estrategias para la organización</p>
                        </div>
                    </div>
                    <div className="grid__capacidades_2">
                        <div>
                            <p>Impactos, escenarios y proyecciones IFD</p>
                        </div>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712082769/alpha/images/ifd2_djkzcj.webp" loading="lazy" alt="Proyeccciones" />
                    </div>
                    <div className="grid__capacidades_3">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712082999/alpha/images/ifd3_i0pfi9.jpg" loading="lazy" alt="Tributación" />
                        <div>
                            <p>Tributación IFD</p>
                        </div>
                    </div>
                </div>
                <div className="display__title" id="peritajes">
                    <h2>Peritaje Económico Financiero</h2>
                </div>
                <div className="container__macro">
                    <div className="grid__macro_1">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712089909/alpha/images/tangible_kikozn.png" alt="Tangible" />
                        <div>
                            <p>Cuantificación y evaluación de tangibles e intangibles</p>
                        </div>
                    </div>
                    <div className="grid__macro_2">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712091505/alpha/images/manzano_ikvmp7.png" alt="Controversias" />
                        <div>
                            <p>Controversias y compensaciones</p>
                        </div>
                    </div>
                    <div className="grid__macro_3">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712090612/alpha/images/lucro_wlgf3p.jpg" alt="Lucro" />
                        <div>
                            <p>Daño emergente y lucro cesante</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainConsultoria;