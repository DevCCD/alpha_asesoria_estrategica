import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainCapacidades({ idioma } : IdiomaProps) {
    return (
        <>
            <main>
                <div className="banner__container">
                    <div className="banner_left">
                        <h1>{ idioma == "es" ? "Capacidades" : "Capabilities" }</h1>
                    </div>
                    <div className="banner_right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922019/alpha/images/capacidades_db0zfc.jpg" loading="lazy" alt="Imagen Capacidades" />
                    </div>
                </div>
                <div className="slogan__slogan">
                    <h3>Dotamos a las empresas de un servicio permanente de inteligencia económica, política y social  que aporte valor a la compañía a través del enriquecimiento de las decisiones y del ensanchamiento de los ámbitos técnicos en los que está presente</h3>
                </div>
                <div className="display__title">
                    <h2>Ofrecemos</h2>
                </div>
                <div className="container__capacidades">
                    <div className="grid__capacidades_1">
                        <div>
                            <h3>El talento como ventaja competitiva</h3>
                            <p>Fortalecemos el perfil técnico/intelectual de los colaboradores claves de la compañía hacia el exterior a través de la creación de herramientas exclusivas de generación de contenidos y reuniones internas</p>
                        </div>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922080/alpha/images/talento_kg1kex.jpg" loading="lazy" alt="Talento" />
                    </div>
                    <div className="grid__capacidades_2">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922084/alpha/images/riesgos_pws6sq.jpg" loading="lazy" alt="Riesgos" />
                        <div>
                            <h3>Identificación de riesgos y oportunidades</h3>
                            <p>Fortalecemos el conocimiento de la alta dirección del contexto global, económico, social y político del país. De esta manera se podrá plantear mejores estrategias tanto ofensivas como defensivas, tomando en consideración la interacción con otros stakeholders</p>
                        </div>
                    </div>
                    <div className="grid__capacidades_3">
                        <div>
                            <h3>Contactos globales</h3>
                            <p>Ponemos a disposición de la empresa los contactos de Alpha Analítica, lo que permitirá un acceso más directo a los tomares de decisiones a nivel global.</p>
                        </div>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922055/alpha/images/contactos_qirrsd.jpg" loading="lazy" alt="Contactos" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainCapacidades