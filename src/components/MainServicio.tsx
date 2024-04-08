import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainServicio ({ idioma } : IdiomaProps) {
    return (
        <>
            <main>
                <div className="banner__container">
                    <div className="banner_left">
                        <h1>{ idioma == "es" ? "Servicio Alpha" : "Alpha Service" }</h1>
                    </div>
                    <div className="banner_right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712187062/alpha/images/servicioalpha_d8u3va.jpg" />
                    </div>
                </div>
                <div id='premium' className="display__title">
                    <h2>{ idioma == "es" ? "Servicio Premium Alpha" : "Alpha Premium Service" }</h2>
                </div>
                <div className="container__servicio">
                    <div className="servicio__left">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712187808/alpha/images/Servicio1_vpdvoi.png" />
                        <p><b>{ idioma == "es" ? "Informes mensuales" : "Monthly reports" }</b> { idioma == "es" ? " sobre el contexto global, político, económico e impacto empresarial, reporte financiero e informe sectorial" : " on the global, political, economic and business impact context, financial report and sectoral report" }</p>
                    </div>
                    <div className="servicio__right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712187805/alpha/images/Servicio2_gnwhy9.png" />
                        <p><b>{ idioma == "es" ? "Informes analíticos" : "Analytical reports" }</b>{ idioma == "es" ? " con mayor incidencia en perspectivas" : " with greater impact on perspectives" }</p>
                    </div>
                </div>
                <div className="container__servicio">
                    <div className="servicio__left">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712187886/alpha/images/Servicio3_poifuz.jpg" />
                        <p><b>{ idioma == "es" ? "1 reunión" : "1 meeting" }</b>{ idioma == "es" ? " con clientes de la empresa para presentar la coyuntura macroeconómica, política y social del país" : " with company clients to present the macroeconomic, political and social situation of the country" }</p>
                    </div>
                    <div className="servicio__right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712187890/alpha/images/Servicio4_berlbw.png" />
                        <p><b>{ idioma == "es" ? "4 reuniones anuales " : "4 annual meetings " }</b>{ idioma == "es" ? " presenciales con la empresa para presentación de los temas relevantes o discutir algún punto de interés para la dirección" : "in person with the company to present relevant topics or discuss any point of interest for management" }</p>
                    </div>
                </div>
                <div id='asistencia' className="display__title">
                    <h2>{ idioma == "es" ? "Asistencia Técnica Alpha" : "Alpha Technical Assistance" }</h2>
                </div>
                <div className="container__servicio">
                    <div className="servicio__left">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712188497/alpha/images/Servicio5_zvnu7q.png" />
                        <p>{ idioma == "es" ? "Diagnosticamos las " : "We diagnose the " } <b>{ idioma == "es" ? "áreas de la empresa y las variables" : "areas of the company and variables" }</b>{ idioma == "es" ? "  globales, económicas, sociales y políticas vinculadas al PyG, y modelamos los impactos principalmente sobre los ingresos, costos/gastos y gastos financieros informe sectorial" : " global, economic, social and political aspects linked to the P&L, and we model the impacts mainly on income, costs/expenses and financial expenses sector report" }</p>
                    </div>
                    <div className="servicio__right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712188490/alpha/images/Servicio6_uxq0pe.jpg" />
                        <p>{ idioma == "es" ? "Creamos " : "We create " } <b>{ idioma == "es" ? "información centralizada" : "centralized information" }</b>{ idioma == "es" ? " de base de datos, herramientas analíticas y reportes sobre la performance del PyG" : " database, analytical tools and reports on P&L performance" }</p>
                    </div>
                </div>
                <div className="container__servicio">
                    <div className="servicio__left">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712188501/alpha/images/Servicio7_ofce4n.png" />
                        <p>{ idioma == "es" ? "Desarrollamos e insertamos a " : "We develop and insert " }<b>{ idioma == "es" ? "plataformas digitales" : "digital platforms" }</b>{ idioma == "es" ? " existentes la información centralizada que impactan a las cuentas del PyG informe sectorial" : " existing centralized information that impacts P&L sector report accounts"}</p>
                    </div>
                    <div className="servicio__right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712188493/alpha/images/Servicio8_wtufja.jpg" />
                        <p>{ idioma == "es" ? "Fortalecemos " : "We strengthen "} <b>{ idioma == "es" ? "capacidades de los colaboradores" : "capabilities of collaborators" }</b>{ idioma == "es" ? " análisis, medición de impactos y seguimiento de variables globales, económicas, sociales y políticas sobre las finanzas y sostenibilidad de la empresa" : " analysis, measurement of impacts and monitoring of global, economic, social and political variables on the finances and sustainability of the company" }</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainServicio