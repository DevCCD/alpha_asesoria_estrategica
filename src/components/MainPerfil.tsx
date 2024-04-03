import { IoMdMail } from 'react-icons/io';
import '../styles.css';
import { Link } from 'react-router-dom';

function MainPerfil() {
    return (
        <main>
            <div className="banner__container bg-profile">
                <div className="banner_left banner__info">
                    <h1>Luis Carranza</h1>
                    <h3>Director</h3>
                    <Link to="mailto:"><i><IoMdMail /></i></Link>
                </div>
                <div className="banner_right banner__image">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922064/alpha/images/luis-carranza-profile_gxfus2.png" alt="Imagen Profile" />
                </div>
            </div>
            <div className="container__acercade">
                <div className="container__exp">
                    <div className="line"></div>
                    <h4>ACERCA DE LUIS</h4>
                    <p>Doctor en Economía por la Universidad de Minnesota, Estados Unidos. Luis Carranza es director de Alpha Analítica y del Instituto de Gobierno y Gestión Pública de la Universidad de San Martín de Porres. Ha sido presidente ejecutivo de CAF, Ministro de Economía y Finanzas del Perú en dos oportunidades, viceministro de Hacienda y director del Banco Central de Reserva del Perú, jefe para América Latina y Mercados Emergentes del BBVA, consultor del BID, economista del FMI y asistente de investigación en la Reserva Federal de Minneapolis.
                    <br />
                    <br />
                    Luis Carranza es director de Alpha Analítica y se desempeña como Director del Instituto de Gobierno y Gestión Pública de la Universidad de San Martín de Porres. Entre los años 2017 y 2021 fue presidente ejecutivo del Banco de Desarrollo de América Latina (CAF), e impulsó la integración regional y el cierre de brechas en infraestructura. En el ámbito público, ha sido ministro de Economía y Finanzas del Perú en los periodos Julio 2006 – Julio 2008 y Enero – Diciembre 2009. También ha sido viceministro de Hacienda y director del Banco Central de Reserva del Perú. Asimismo, ha sido economista jefe para América Latina y Mercados Emergentes del Banco Bilbao Vizcaya Argentaria (BBVA) y consultor del Banco Interamericano de Desarrollo (BID) en temas de tributación, gasto público, reglas fiscales y crecimiento económico, trabajando para países como Guatemala, Panamá, Costa Rica, Honduras, El Salvador y Jamaica, República Dominicana, entre otros. Fue economista del Fondo Monetario Internacional (FMI) y asistente de investigación en la Reserva Federal de Minneapolis. En el ámbito de la infraestructura privada, creó el primer fondo de infraestructura de Perú, del cual fue presidente ejecutivo hasta 2017. Actualmente, el fondo se encuentra en período de desinversión. En el ámbito académico, ha sido profesor en la Universidad de Navarra de España y la Universidad San Martín de Porres del Perú. Es autor de publicaciones y trabajos de investigación sobre reglas fiscales, crecimiento, presupuesto público, mercados de créditos y política monetaria en economías dolarizadas. Doctor en Economía en la Universidad de Minnesota y economista de la Pontificia Universidad Católica del Perú.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default MainPerfil;