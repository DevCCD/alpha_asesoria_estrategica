import { Link } from 'react-router-dom';
import '../styles.css';

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
                <div className="card">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922064/alpha/images/luis-carranza-profile_gxfus2.png" className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">Luis Carranza</h3>
                    <p className="card-subtitle">Director</p>
                    <p className="card-description">Doctor en Economía por la Universidad de Minnesota, Estados Unidos. Luis Carranza
                        es director de Alpha Analítica y del Instituto de Gobierno y Gestión Pública de la Universidad de San Martín
                        de Porres. Ha sido presidente ejecutivo de CAF, Ministro de Economía y Finanzas del Perú en dos
                        oportunidades, viceministro de Hacienda y director del Banco Central de Reserva del Perú, jefe para América
                        Latina y Mercados Emergentes del BBVA, consultor del BID, economista del FMI y asistente de investigación en
                        la Reserva Federal de Minneapolis.</p>
                    <Link to="/nosotros/perfil" className="read-more">Leer más</Link>
                    </div>
                </div>
                <div className="card">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712179510/alpha/images/RUDY-LAGUNA_xvqcn2.png" className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">Rudy Laguna</h3>
                    <p className="card-subtitle">Corporativo Local</p>
                    <p className="card-description">Máster en tributación y política fiscal por la Universidad Autónoma de Madrid de
                        España y la Universidad de Lima. Rudy Laguna es Director del Centro para la Competitividad y el Desarrollo.
                        Ha sido director de Electro Sur Este, presidente del Comité Pro Conectividad de Proinversión, consultor del
                        Ministerio de Economía y Finanzas y co-líder en proyectos de investigación en tributación y política fiscal
                        para países de América Latina por el BID. Creador del Sistema de Administración del Desarrollo (SAD) y
                        experiencia en la creación e implementación de mecanismos innovadores para la política fiscal.</p>
                    <a href="#" className="read-more">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712179539/alpha/images/jorge-velarde-profile_sblrlp.png" className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">Jorge Velarde</h3>
                    <p className="card-subtitle">Financiamiento y jurídico corporativo </p>
                    <p className="card-description">Máster en leyes por Georgetown University Law Center, Estados Unidos. Jorge
                        Velarde es un alto ejecutivo bancario y asesor legal con amplia experiencia en estructuración y gestión de
                        activos en mercados latinoamericanos. Director de fondos e inversiones de impacto de CAF. Ha sido miembro
                        de la junta de CAF-Asset Management Corporation (CAF-AM), encargada de manejar fondos de capital que
                        coinvierten con CAF en transacciones de financiamiento de proyectos de infraestructura. Ha sido asesor legal
                        y oficial de cumplimiento en Standard Chartered Bank y en el Banco Financiero del Perú.</p>
                    <a href="#" className="read-more">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <img src="/ImagenesAAE/Miguel.png" className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">Miguel Marín</h3>
                    <p className="card-subtitle">Corporativo Global</p>
                    <p className="card-description">Posgrado en economía avanzada y administración de empresas por el IESE Business
                        School, University of Navarra, España. Miguel Marín es socio fundador y CEO de Análisis Económico Integral
                        (AEI), consultoría estratégica con sede en Madrid (España) especializada en asuntos públicos y análisis
                        económico, con más de 20 años en el ámbito público y privado europeo. Marín ha sido asesor en la Comisión
                        Económica y de Asuntos Monetarios del Parlamento Europeo, tiene experiencia como asesor de grandes empresas
                        del IBEX 35 y colaborador con principales think tanks y centros de estudios europeo, como el Instituto de
                        Estudios Económicos, el Martens Centre y The European House Ambrosetti, entre otros.</p>
                    <a href="#" className="read-more">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <img src="/ImagenesAAE/Manuel.png" className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">Manuel Balmaseda</h3>
                    <p className="card-subtitle">Corporativo Global</p>
                    <p className="card-description">Doctor en economía por la Universidad Northwestern, Estados Unidos. Manuel
                        Balmaseda es director de Instituto Español de Banca y Finanzas, Founding Partner ARGIA GT&E, Past President
                        of NABE. Ha sido economista jefe de CEMEX y, del BBVA, para España y Europa y para Mercados de Capital.
                        Colabora con el FMI, la OCDE, la Secretaría General Sudamericana y otras organizaciones privadas en temas
                        relacionados con las perspectivas económicas y la acción política en los Estados Unidos, la zona euro,
                        América Latina y España, y en cuestiones relacionadas con el sector de la construcción, los mercados
                        inmobiliarios y la evolución fiscal y monetaria.</p>
                    <a href="#" className="read-more">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <img src="/ImagenesAAE/Piero.png" className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">Piero Calderón</h3>
                    <p className="card-subtitle">Financiamiento y jurídico corporativo </p>
                    <p className="card-description">Máster en trading y gestión de carteras por el Instituto IBT de España. Máster en
                        Dirección de Negocios por la Escuela de Organización Industrial (EOI) de España. Diplomas en finanzas
                        corporativas, en trading, dirección de empresas por universidades peruanas y españolas. Ingeniero Mecánico
                        de la Pontificia Universidad Católica del Perú. Actualmente se desempeña como Gerente General de empresa de
                        trading de contratos de futuros realizando operaciones de trading en futuros de commodities y de índices
                        bursátiles. Anteriormente ocupó varias jefaturas en áreas comerciales y técnicas de Ferreyros.</p>
                    <a href="#" className="read-more">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <img src="/ImagenesAAE/Jose-Suarez.png" className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">José Suarez-Lledó</h3>
                    <p className="card-subtitle">Financiamiento y jurídico corporativo </p>
                    <p className="card-description">Doctorado en Economía por la Universidad de Pennsylvania. Maestría en Ciencias
                        Económicas por la Universidad de Pennsylvania. Diplomas en Machine Learning para especialización en trading,
                        gestión de inversiones con python y especialización en aprendizaje automático, curso de trading algorítmico
                        y en ciencia de datos. Licenciado en Economía por la Universidad de Navarra. Actualmente se desempeña como
                        cofundador de Bquant que es un programa único en formación en métodos cuantitativos para el análisis de
                        mercado y el desarrollo de estrategias de inversión, utilizados en fondos y entidades financieras de primer
                        nivel. Anteriormente fue director de Moody's Analiticsdel equipo de análisis económico y de crédito al
                        consumo.</p>
                    <a href="#" className="read-more">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <img src="/ImagenesAAE/Enrique.png" className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">Enrique Castillo</h3>
                    <p className="card-subtitle">Corporativo Global</p>
                    <p className="card-description">Posgrado en economía avanzada y administración de empresas por el IESE Business
                        School, University of Navarra, España. Miguel Marín es socio fundador y CEO de Análisis Económico Integral
                        (AEI), consultoría estratégica con sede en Madrid (España) especializada en asuntos públicos y análisis
                        económico, con más de 20 años en el ámbito público y privado europeo. Marín ha sido asesor en la Comisión
                        Económica y de Asuntos Monetarios del Parlamento Europeo, tiene experiencia como asesor de grandes empresas
                        del IBEX 35 y colaborador con principales think tanks y centros de estudios europeo, como el Instituto de
                        Estudios Económicos, el Martens Centre y The European House Ambrosetti, entre otros.</p>
                    <a href="#" className="read-more">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <img src="/ImagenesAAE/Jose-Enrique.png" className="card-img" />
                    <div className="card-content">
                    <h3 className="card-title">José Enrique Galdón</h3>
                    <p className="card-subtitle">Corporativo Global
                    </p>
                    <p className="card-description">Doctor en economía por la Universidad Northwestern, Estados Unidos. Manuel
                        Balmaseda es director de Instituto Español de Banca y Finanzas, Founding Partner ARGIA GT&E, Past President
                        of NABE. Ha sido economista jefe de CEMEX y, del BBVA, para España y Europa y para Mercados de Capital.
                        Colabora con el FMI, la OCDE, la Secretaría General Sudamericana y otras organizaciones privadas en temas
                        relacionados con las perspectivas económicas y la acción política en los Estados Unidos, la zona euro,
                        América Latina y España, y en cuestiones relacionadas con el sector de la construcción, los mercados
                        inmobiliarios y la evolución fiscal y monetaria.</p>
                    <a href="#" className="read-more">Leer más</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainExperiencia