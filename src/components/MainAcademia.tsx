import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CAMPUS_LOGIN_URL, CAMPUS_SIGNUP_URL } from '../data/campus';
import GuiaIngresoModal from './GuiaIngresoModal';
import '../styles.css';
import '../styles/academia.css';

interface IdiomaProps {
    idioma: string;
}

const CLOUD = "https://res.cloudinary.com/ccdcloudy/image/upload";

function MainAcademia({ idioma } : IdiomaProps) {
    const es = idioma == "es";
    const [guiaAbierta, setGuiaAbierta] = useState(false);

    useEffect(() => {
        document.title = es ? "Alpha | Academia" : "Alpha | Academy"
    }, [es])

    const pasos = [
        { titulo: es ? "Revisa los cursos" : "Review the courses", texto: es ? "Identifica los cursos disponibles." : "Find the available courses." },
        { titulo: es ? "Crea tu cuenta gratuita" : "Create your free account", texto: es ? "Regístrate una sola vez." : "Sign up just once." },
        { titulo: es ? "Entra al campus" : "Enter the campus", texto: es ? "Accede y comienza tu primera clase." : "Log in and start your first class." },
    ];

    const objetivos = [
        { img: `${CLOUD}/v1712119865/alpha/images/objetivo1_v30kqa.png`, titulo: es ? "Cerrar la brecha de formación" : "Closing the training gap", texto: es ? "Fortalecer la formación de estudiantes y docentes de la carrera de Economía en universidades públicas de provincias." : "Strengthen the training of students and teachers of the Economics degree at provincial public universities." },
        { img: `${CLOUD}/v1712120361/alpha/images/objetivo2_sxorg3.jpg`, titulo: es ? "Formar economistas de primer nivel" : "Training top-level economists", texto: es ? "Integrar los fundamentos teóricos con la capacidad de aplicar conocimientos a la realidad social y económica." : "Combine theoretical foundations with the ability to apply knowledge to social and economic reality." },
        { img: `${CLOUD}/v1712120513/alpha/images/objetivo3_qw3u9u.jpg`, titulo: es ? "Beneficiarios" : "Beneficiaries", texto: es ? "Docentes y estudiantes de Economía, así como alumnos de otras carreras que incluyan cursos de Economía." : "Teachers and students of Economics, as well as students of other majors that include Economics courses." },
        { img: `${CLOUD}/v1712120608/alpha/images/objetivo4_lnoc2v.jpg`, titulo: es ? "Impacto" : "Impact", texto: es ? "Contribuir al desarrollo regional mediante capital humano, productividad y crecimiento sostenible." : "Contribute to regional development through human capital, productivity and sustainable growth." },
    ];

    const beneficios = [
        { img: "v1712176046/alpha/images/beneficios1_wrijut.jpg", titulo: es ? "Acceso gratuito" : "Free access", texto: es ? "Sin costo para universidades, docentes y estudiantes beneficiarios." : "No cost for beneficiary universities, teachers and students." },
        { img: "v1712176046/alpha/images/beneficios2_w8o7zg.jpg", titulo: es ? "26 cursos clave" : "26 key courses", texto: es ? "Una ruta complementaria para la carrera de Economía." : "A complementary path for the Economics degree." },
        { img: "v1712176047/alpha/images/beneficios3_mhe082.jpg", titulo: es ? "Clases asincrónicas" : "Asynchronous classes", texto: es ? "Acceso flexible a clases virtuales de los cursos base." : "Flexible access to virtual classes of the base courses." },
        { img: "v1712176788/alpha/images/beneficios4_zyyugx.jpg", titulo: es ? "Asesorías" : "Advising", texto: es ? "Acompañamiento de docentes internacionales a docentes locales." : "Support from international teachers to local teachers." },
        { img: "v1712176789/alpha/images/beneficios5_cerg95.jpg", titulo: es ? "Certificación" : "Certification", texto: es ? "Reconocimiento de participación según las condiciones del curso." : "Recognition of participation according to each course's conditions." },
        { img: "v1712176790/alpha/images/beneficios6_h6ifb8.jpg", titulo: es ? "Plataforma virtual" : "Virtual platform", texto: es ? "Videos, foros, evaluaciones y materiales en un solo campus." : "Videos, forums, assessments and materials in a single campus." },
        { img: "v1712176791/alpha/images/beneficios7_xhjyke.jpg", titulo: es ? "Foros por curso" : "Course forums", texto: es ? "Espacios de participación vinculados con cada asignatura." : "Participation spaces linked to each subject." },
        { img: "v1712176794/alpha/images/beneficios8_xbb8dm.jpg", titulo: es ? "Biblioteca virtual" : "Virtual library", texto: es ? "Recursos complementarios disponibles para el aprendizaje." : "Complementary resources available for learning." },
        { img: "v1712176795/alpha/images/beneficios9_e9jm6b.jpg", titulo: es ? "Proyección académica" : "Academic outlook", texto: es ? "Identificación de candidatos a maestrías en universidades españolas." : "Identification of candidates for master's degrees at Spanish universities." },
        { img: "v1712176799/alpha/images/beneficios10_i6yxox.jpg", titulo: es ? "Investigación aplicada" : "Applied research", texto: es ? "Oportunidades de investigación y publicaciones en política pública." : "Research opportunities and publications in public policy." },
    ];

    const cursosActuales = es
        ? ["Macroeconomía I", "Microeconomía I", "Econometría I"]
        : ["Macroeconomics I", "Microeconomics I", "Econometrics I"];

    const cursosPreparacion = [
        { titulo: es ? "Previo a Facultad" : "Prior to Faculty", cursos: es ? ["Introducción a la Economía", "Estadística", "Matemática básica"] : ["Introduction to Economics", "Statistics", "Basic mathematics"] },
        { titulo: es ? "I Semestre" : "I Semester", cursos: es ? ["Matemáticas I", "Finanzas I"] : ["Mathematics I", "Finance I"] },
        { titulo: es ? "II Semestre" : "II Semester", cursos: es ? ["Macroeconomía II", "Microeconomía II", "Matemáticas II", "Econometría II", "Finanzas II"] : ["Macroeconomics II", "Microeconomics II", "Mathematics II", "Econometrics II", "Finance II"] },
        { titulo: es ? "III Semestre" : "III Semester", cursos: es ? ["Crecimiento Económico", "Teoría y Política Monetaria", "Comercio Internacional", "Diseño y Evaluación Social de Proyectos", "Matemáticas III", "Finanzas III"] : ["Economic growth", "Monetary Theory and Policy", "International Trade", "Design and Social Evaluation of Projects", "Mathematics III", "Finance III"] },
        { titulo: es ? "IV al V Semestre" : "IV to V Semester", cursos: es ? ["Macroeconomía Dinámica", "Organización Industrial", "Economía Pública", "Desarrollo Económico", "Recursos Naturales y Medio Ambiente", "Economía Laboral", "Sistemas e Instituciones Financieras"] : ["Dynamic Macroeconomics", "Industrial organization", "Public Economy", "Economic development", "Natural Resources and Environment", "Labor Economics", "Financial Systems and Institutions"] },
    ];

    const programas = [
        {
            id: "publica",
            img: `${CLOUD}/v1712177686/alpha/images/cursos6_ij8obi.jpg`,
            contain: false,
            semestres: es ? "VI al X Semestre" : "VI to X Semester",
            titulo: es ? "Gestión de Inversión Pública" : "Public Investment Management",
            items: es
                ? ["Gerencia de Proyectos", "Invierte.pe y Programación Multianual de Inversiones", "Presupuesto y Tesorería", "Contrataciones", "Auditoría y Control", "APP y OxI"]
                : ["Project Management", "Invierte.pe and Multiannual Investment Programming", "Budget and Treasury", "Procurement", "Audit and Control", "PPP and Works for Taxes"],
        },
        {
            id: "aprendo",
            img: `${CLOUD}/v1712177688/alpha/images/programa_haciendo_nlc2oc.png`,
            contain: true,
            semestres: es ? "VIII al X Semestre" : "VIII to X Semester",
            titulo: es ? "Programa Aprendo Haciendo en Inversión Pública" : "Learn by Doing Program in Public Investment",
            items: es
                ? ["Fortalecimiento de capacidades en Gestión de Inversión Pública", "Pasantías", "Prácticas preprofesionales", "Observatorio permanente del programa"]
                : ["Capacity building in Public Investment Management", "Internships", "Pre-professional practices", "Permanent observatory of the program"],
        },
    ];

    const directores = [
        {
            nombre: "Luis Carranza",
            grado: "PhD. Universidad de Minnesota · USMP",
            img: `${CLOUD}/v1712263882/alpha/images/Luis-Carranza_zlm0nc.jpg`,
            texto: es ? "Autor de publicaciones sobre reglas fiscales, infraestructura pública, sostenibilidad fiscal, inversión y política monetaria." : "Author of publications on fiscal rules, public infrastructure, fiscal sustainability, investment and monetary policy.",
        },
        {
            nombre: "José Enrique Galdon Sánchez",
            grado: "PhD. Universidad de Minnesota · Universidad Pública de Navarra",
            img: `${CLOUD}/f_auto,q_auto/v1/alpha/images/pgtdnoqhfm1ttwsiouns`,
            texto: es ? "Autor de investigaciones sobre política monetaria, servicios, volatilidad cambiaria, productividad y mercado laboral." : "Author of research on monetary policy, services, exchange rate volatility, productivity and the labor market.",
        },
    ];

    const faqs = [
        { p: es ? "¿Los cursos tienen algún costo?" : "Do the courses have any cost?", r: es ? "No. Los cursos señalados como disponibles son gratuitos para los estudiantes y docentes beneficiarios." : "No. Courses marked as available are free for beneficiary students and teachers." },
        { p: es ? "¿Necesito registrarme?" : "Do I need to register?", r: es ? "Sí. Debes crear una cuenta antes de ingresar al campus. El registro se realiza una sola vez." : "Yes. You must create an account before entering the campus. Registration is done only once." },
        { p: es ? "¿Todos los cursos de la lista ya están disponibles?" : "Are all the listed courses already available?", r: es ? "No. La página diferencia los cursos actualmente disponibles de aquellos que se encuentran en preparación." : "No. The page distinguishes the courses currently available from those in preparation." },
        { p: es ? "¿Dónde se llevan los cursos?" : "Where are the courses taken?", r: es ? "El aprendizaje se desarrolla en el campus virtual de Alpha, donde se encuentran los videos, materiales, foros y evaluaciones." : "Learning takes place on Alpha's virtual campus, where the videos, materials, forums and assessments are found." },
    ];

    return (
        <main className="acad">
            {/* Hero */}
            <section className="acad-hero">
                <div className="acad-hero__text">
                    <span className="acad-eyebrow">{es ? "ACADEMIA ALPHA" : "ALPHA ACADEMY"}</span>
                    <h1>{es ? "Academia" : "Academy"}</h1>
                    <p>{es
                        ? "Cursos gratuitos para estudiantes y docentes de Economía. Revisa la oferta disponible, crea tu cuenta y comienza a estudiar en el campus virtual."
                        : "Free courses for Economics students and teachers. Review the available offer, create your account and start studying on the virtual campus."}</p>
                    <div className="acad-hero__actions">
                        <a className="acad-btn acad-btn--light" href="#cursos">{es ? "Ver cursos gratuitos" : "See free courses"}</a>
                        <button type="button" className="acad-btn acad-btn--outline" onClick={() => setGuiaAbierta(true)}>{es ? "¿Cómo ingreso?" : "How do I get in?"}</button>
                    </div>
                </div>
                <div className="acad-hero__img">
                    <img src={`${CLOUD}/v1711922036/alpha/images/academia_xbwykz.jpg`} alt="" />
                </div>
            </section>

            {/* 3 pasos */}
            <section className="acad-steps">
                {pasos.map((paso, i) => (
                    <div className="acad-steps__item" key={i}>
                        <span className="acad-steps__num">{i + 1}</span>
                        <div>
                            <strong>{paso.titulo}</strong>
                            <p>{paso.texto}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Objetivos */}
            <section className="acad-section" id="objetivos">
                <h2>{es ? "Objetivos" : "Goals"}</h2>
                <p className="acad-lead">{es
                    ? "Una propuesta de formación complementaria para fortalecer conocimientos, ampliar oportunidades académicas y acercar recursos especializados a las regiones."
                    : "A complementary training proposal to strengthen knowledge, broaden academic opportunities and bring specialized resources to the regions."}</p>
                <div className="acad-objetivos">
                    {objetivos.map((o) => (
                        <article key={o.titulo} className="acad-objetivo" style={{ backgroundImage: `url(${o.img})` }}>
                            <div>
                                <h3>{o.titulo}</h3>
                                <p>{o.texto}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Beneficios */}
            <section className="acad-section acad-section--tint" id="beneficios">
                <h2>{es ? "Beneficios" : "Benefits"}</h2>
                <div className="acad-beneficios">
                    {beneficios.map((b) => (
                        <article key={b.titulo} className="acad-card">
                            <img src={`${CLOUD}/${b.img}`} alt="" loading="lazy" />
                            <h3>{b.titulo}</h3>
                            <p>{b.texto}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Cursos */}
            <section className="acad-section" id="cursos">
                <h2>{es ? "Cursos de Economía" : "Economics courses"}</h2>
                <div className="acad-actuales">
                    <img src={`${CLOUD}/f_auto,q_auto/v1/alpha/images/capacidades/current_course`} alt="" loading="lazy" />
                    <div className="acad-actuales__body">
                        <span className="acad-eyebrow">{es ? "DISPONIBLES AHORA · GRATUITOS" : "AVAILABLE NOW · FREE"}</span>
                        <h3>{es ? "Cursos actuales" : "Current courses"}</h3>
                        <p>{es ? "Ingresa al campus para estudiar los cursos que ya se encuentran habilitados." : "Enter the campus to study the courses that are already enabled."}</p>
                        <ul className="acad-chips">
                            {cursosActuales.map((c) => <li key={c}>{c}</li>)}
                        </ul>
                        <a className="acad-btn acad-btn--light" href={CAMPUS_LOGIN_URL} target="_blank" rel="noopener noreferrer">{es ? "Comenzar un curso" : "Start a course"}</a>
                    </div>
                </div>

                <div className="acad-preparacion__head">
                    <div>
                        <span className="acad-eyebrow acad-eyebrow--dark">{es ? "PRÓXIMA OFERTA" : "COMING SOON"}</span>
                        <h3>{es ? "Cursos en preparación" : "Courses in preparation"}</h3>
                    </div>
                    <p>{es ? "Estos cursos todavía no se encuentran habilitados en el campus." : "These courses are not yet enabled on the campus."}</p>
                </div>
                <div className="acad-preparacion">
                    {cursosPreparacion.map((g) => (
                        <article key={g.titulo} className="acad-curso">
                            <h4>{g.titulo}</h4>
                            <ul>
                                {g.cursos.map((c) => <li key={c}>{c}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            {/* Programas */}
            <section className="acad-section acad-section--dark" id="programas">
                <h2>{es ? "Programas de Inversión Pública" : "Public Investment Programs"}</h2>
                <div className="acad-programas">
                    {programas.map((p) => (
                        <article key={p.id} className="acad-programa">
                            <span className="invisible__top" id={p.id} />
                            <img src={p.img} alt="" loading="lazy" className={p.contain ? "acad-programa__img--contain" : undefined} />
                            <div>
                                <span className="acad-eyebrow acad-eyebrow--dark">{p.semestres}</span>
                                <h3>{p.titulo}</h3>
                                <ul>
                                    {p.items.map((it) => <li key={it}>{it}</li>)}
                                </ul>
                                <Link className="acad-btn acad-btn--primary" to="/contacto#contacto">{es ? "Solicitar información" : "Request information"}</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Directores */}
            <section className="acad-section" id="docentes">
                <h2>{es ? "Directores Académicos" : "Academic Directors"}</h2>
                <div className="acad-directores">
                    {directores.map((d) => (
                        <article key={d.nombre} className="acad-director">
                            <img src={d.img} alt={d.nombre} loading="lazy" />
                            <div>
                                <h3>{d.nombre}</h3>
                                <strong>{d.grado}</strong>
                                <p>{d.texto}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Cierre + FAQ */}
            <section className="acad-cierre">
                <h2>{es ? "Empieza en tres pasos" : "Start in three steps"}</h2>
                <p>{es
                    ? "Revisa los cursos disponibles, crea gratuitamente tu usuario y entra al campus. Si ya tienes una cuenta, puedes ingresar directamente."
                    : "Review the available courses, create your user for free and enter the campus. If you already have an account, you can log in directly."}</p>
                <div className="acad-cierre__actions">
                    <a className="acad-btn acad-btn--primary" href={CAMPUS_SIGNUP_URL} target="_blank" rel="noopener noreferrer">{es ? "Crear mi cuenta gratuita" : "Create my free account"}</a>
                    <a className="acad-btn acad-btn--ghost" href={CAMPUS_LOGIN_URL} target="_blank" rel="noopener noreferrer">{es ? "Ya tengo una cuenta" : "I already have an account"}</a>
                </div>
            </section>
            <section className="acad-faq">
                <h2>{es ? "Preguntas frecuentes" : "Frequently asked questions"}</h2>
                {faqs.map((f) => (
                    <div key={f.p} className="acad-faq__item">
                        <h3>{f.p}</h3>
                        <p>{f.r}</p>
                    </div>
                ))}
            </section>

            {guiaAbierta && <GuiaIngresoModal idioma={idioma} onClose={() => setGuiaAbierta(false)} />}
        </main>
    )
}

export default MainAcademia
