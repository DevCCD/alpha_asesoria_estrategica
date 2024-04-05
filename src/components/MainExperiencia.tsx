import { Link } from 'react-router-dom';
import '../styles.css';
import equipo from '../data/equipo';

function MainExperiencia () {
    return (
        <main>
            <div className="container__macro container__objetivos">
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia1_emm5de.jpg" />
                    <div>
                        <h1>Crecimiento en entorno cambiante</h1>
                        <p>Generamos pensamiento estratégico para empresas en un entorno económico, social  y político cambiante con diversidad de riesgos
                        </p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160419/alpha/images/experiencia2_foqbin.jpg"  />
                    <div>
                        <h1>Amplia experiencia</h1>
                        <p>Brindamos servicio premium limitado basado en la experiencia y trayectoria de su equipo fundador</p>
                    </div>
                </div>
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia3_dxjgot.jpg" />
                    <div>
                        <h1>Servicio creador de valor</h1>
                        <p>Aportamos valor a la empresa analizando independientemente las decisiones estratégicas
                        </p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia4_bzgkw9.jpg"  />
                    <div>
                        <h1>Experiencia en entidades decisoras</h1>
                        <p>Equipo con experiencia en gestión pública local e internacional, con desempeño en importantes cargos en Ministerios y Bancos Centrales</p>
                    </div>
                </div>
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia5_rxeb3c.jpg" />
                    <div>
                        <h1>Organismos líderes en economía</h1>
                        <p>Equipo con trayectoria internacional relevante, habiendo trabajado en FMI, FED, BID y CAF
                        </p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia6_qqgsod.jpg"  />
                    <div>
                        <h1>Conglomerados</h1>
                        <p>Fuertes conexiones con agencias de desarrollo internacionales y con conglomerados internacionales</p>
                    </div>
                </div>
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia7_sj7lbd.jpg" />
                    <div>
                        <h1>Experiencia multisectorial</h1>
                        <p>Equipo con experiencia en directorios de empresas en múltiples sectores
                        </p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160430/alpha/images/experiencia8_hwjmsi.png"  />
                    <div>
                        <h1>Banca internacional</h1>
                        <p>Sector bancario nacional e internacional: BBVA Perú, BBVA, ICO, Bankia, GS</p>
                    </div>
                </div>
                <div className="grid__macro_2 grid__micro_2">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia9_mmvhwo.jpg" />
                    <div>
                        <h1>Política y efecto empresarial</h1>
                        <p>Equipo experto en manejo de comunicación política, manejo de crisis y prospectiva política
                        </p>
                    </div>
                </div>
                <div className="grid__macro_3 grid__micro_1">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712160420/alpha/images/experiencia10_fgpgxv.jpg"  />
                    <div>
                        <h1>Solidez analítica</h1>
                        <p>Mundo académico: IE University, Universidad de Navarra, USMP, IESE BS, CEU-San Pablo</p>
                    </div>
                </div>
            </div>
            <div className="display__title">
                <h2>Nuestro Equipo</h2>
            </div>
            <div className="nuestro-equipo">
                {equipo.map((eq) => (
                <div key={eq._id} className="card">
                    <img src={eq.imageUrl} className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">{eq.nombre}</h3>
                    <p className="card-subtitle">{eq.cargo}</p>
                    <p className="card-description">{eq.descripcion}</p>
                    <Link to={`/nosotros/perfil/${eq._id}`} className="read-more">Leer más</Link>
                    </div>
                </div>
                ))}
            </div>
        </main>
    )
}

export default MainExperiencia