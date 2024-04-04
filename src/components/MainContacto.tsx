import '../styles.css';
import { FaFacebookF, FaLinkedinIn, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';

function MainContacto () {
    return (
        <main>
            <div className="banner__container">
                <div className="banner_center">
                    <h1>Contacto</h1>
                </div>
            </div>
            <div className="container__contactos" id="contacto">
                <aside>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712100491/alpha/images/contacto_aside_wkuz1g.svg" alt="aside1" />
                </aside>
                <div className="info__contact">
                    <h1>Alpha Consultoría Estratégica</h1>
                    <h3>Si tiene consultas específicas o requiere más información, le invitamos a ponerse en contacto con nosotros a través de nuestras redes sociales. Estamos a su disposición para atender sus inquietudes y proporcionarle la asistencia que necesite. Será un placer atenderle y brindarle el apoyo necesario.</h3>
                    <h1>Teléfono principal</h1>
                    <div>
                        <a href="tel:+51999999999"><i><FaPhone /></i>+51 999 999 999</a>
                    </div>
                    <h1>Nuestras Redes</h1>
                    <div className="social__list">
                        <a href=""><i><IoMdMail /></i>Email</a>
                        <a href=""><i><FaXTwitter /></i>Twitter</a>
                        <a href=""><i><FaFacebookF /></i>Facebook</a>
                        <a href=""><i><FaLinkedinIn /></i>LinkedIn</a>
                        <a href=""><i><IoLogoWhatsapp /></i>Whatsapp</a>
                    </div>
                </div>
            </div>
            <div className="container__trabaja" id="trabaja">
                <div className="info__trabaja">
                    <h3>Trabaja con nosotros</h3>
                    <h1>¡Creemos en tu potencial, experiencia y habilidades blandas!</h1>
                    <p>Se parte de la institución líder del país en competitividad, con más de una década impulsando el desarrollo nacional, regional, provincial, distrital y comunal.</p>
                    <div className="form-container">
                        <form>
                        <div className="input-group">
                            <div>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Nombre" required />
                            </div>
                            <div>
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" id="apellido" name="apellido" placeholder="Apellido" required />
                            </div>
                        </div>
                        <div className="input-full">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                        <button className="hero-btn" type="submit">Enviar</button>
                        </form>
                        <div className="message">
                        No olvide adjuntar su CV en el correo*
                        </div>
                    </div>
                </div>
                <aside>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712100493/alpha/images/aside_trabajo_vyurtg.svg" alt="aside2" />
                </aside>
            </div>
        </main>
    )
}

export default MainContacto;