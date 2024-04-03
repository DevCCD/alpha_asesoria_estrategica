import { Link } from 'react-router-dom';
import '../styles.css';

function MainNosotros() {
    return ( 
        <main>
            <div className="banner__container">
                <div className="banner_center mapimage">
                    <h1>Nuestros Aliados</h1>
                </div>
            </div>
            <div className="display__title">
                <h2 className="gray-bg">Empresas</h2>
            </div>
            <div className="container__empresas">
                <div className="sub__container__empresas">
                    <div>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712098337/alpha/images/logoccd_ublvsl.png" alt="CCD" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712098336/alpha/images/logoanalisis_economico_integral_cover_necqnm.png" alt="AEI" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712098340/alpha/images/logoglobalgradient_enjkcg.png" alt="Global Gradient" />
                    </div>
                </div>
            </div>
            <div className="display__title">
                <h2 className="gray-bg">Nuestro Equipo</h2>
            </div>
            <div className="container__equipo">
                <div className="card__person">
                    <div className="profile__image"></div>
                    <h2 className="nombre__card">Luis Carranza</h2>
                    <h3 className="cargo__card">Director</h3>
                    <p>Doctor en Economía por la Universidad de Minnesota, Estados Unidos. Luis Carranza es director de Alpha Analítica y del Instituto de Gobierno y Gestión Pública de la Universidad de San Martín de Porres. Ha sido presidente ejecutivo de CAF, Ministro de Economía y Finanzas del Perú en dos oportunidades, viceministro de Hacienda y director del Banco Central de Reserva del Perú, jefe para América Latina y Mercados Emergentes del BBVA, consultor del BID, economista del FMI y asistente de investigación en la Reserva Federal de Minneapolis.</p>
                    <Link to="/nosotros/perfil">Leer más...</Link>
                </div>
            </div>
        </main>
    )
}

export default MainNosotros;