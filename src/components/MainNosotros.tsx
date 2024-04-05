import { Link } from 'react-router-dom';
import '../styles.css';
import equipo from '../data/equipo';

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
                {equipo.map((eq) => (
                <div key={eq._id} className="card__person">
                    <div className="profile__image">
                        <img src={eq.imageUrl} />
                    </div>
                    <h2 className="nombre__card">{eq.nombre}</h2>
                    <h3 className="cargo__card">{eq.cargo}</h3>
                    <p>{eq.descripcion}</p>
                    <Link to={`/nosotros/perfil/${eq._id}`}>Leer más...</Link>
                </div>
                ))}
            </div>
        </main>
    )
}

export default MainNosotros;