import '../styles.css';
import '../styles/tabs.scss';
import { blog }from '../data/blog.tsx';
import { libro } from '../data/blog.tsx';
import { paper } from '../data/blog.tsx';
import { useEffect } from 'react';

interface IdiomaProps {
    idioma: string;
}

function MainBlog({ idioma }: IdiomaProps) {

    useEffect(() => {
        document.title = idioma === "es" ? "Alpha | Blog Alpha" : "Alpha | Alpha Blog";
    }, [idioma]);

    const openTab = (evt: React.MouseEvent<HTMLButtonElement>, cityName: string) => {
        const tabcontent = document.getElementsByClassName("tabcontent");
        const tablinks = document.getElementsByClassName("tablinks");
        
        if (tabcontent) {
            for (let i = 0; i < tabcontent.length; i++) {
                const element = tabcontent[i] as HTMLElement; // Type assertion
                element.style.display = "none";
            }
        }

        if (tablinks) {
            for (let i = 0; i < tablinks.length; i++) {
                const element = tablinks[i] as HTMLElement; // Type assertion
                element.className = element.className.replace(" active", "");
            }
        }

        const cityElement = document.getElementById(cityName);
        if (cityElement) {
            cityElement.style.display = "block";
        }

        if (evt.currentTarget) {
            evt.currentTarget.className += " active";
        }
    };

    return (
        <>
            <main>
                <div className="gray-bg banner__blog">
                    <div className="banner__blog__title">
                        <h1>{ idioma === "es" ? "Blog Alpha" : "Alpha Blog" }</h1>
                        <p>{ idioma === "es" ? "Publicaciones sobre nuestra gente, nuestras capacidades, nuestra investigación y el constante cambio de nuestra empresa" : "Posts about our people, our capabilities, our research and the ever-changing face of our company" }</p>
                    </div>
                </div>
                <div className="container__publi">
                    <div className="tab">
                        <button className="tablinks active" onClick={(e) => openTab(e, 'tab1')}>PUBLICACIONES</button>
                        <button className="tablinks" onClick={(e) => openTab(e, 'tab2')}>LIBROS</button>
                        <button className="tablinks" onClick={(e) => openTab(e, 'tab3')}>OTROS</button>
                    </div>
                </div>

                <div id="tab1" className="tabcontent" style={{ display: 'block' }}>
                    <div className="contenedor-cards">
                        {blog.map((bl) => (
                        <div key={bl._idBlog} className="card__blog">
                            <a target="_blank" href={bl.url}>
                            <img src={bl.urlImage} alt="Imagen Publicacion" />
                            <h3>{bl.title}</h3>
                            <p>{bl.description}</p>
                            </a>
                        </div>
                        ))}
                    </div>
                </div>

                <div id="tab2" className="tabcontent" style={{ display: 'none' }}>
                    <div className="contenedor-cards">
                        {libro.map((li) => (
                        <div key={li._idLibro} className="card__blog libro">
                            <a target="_blank" href={li.url}>
                                <img src={li.urlImage} alt="Imagen Libro" />
                                <p>{li.description}</p>
                            </a>
                        </div>
                        ))}
                    </div> 
                </div>

                <div id="tab3" className="tabcontent" style={{ display: 'none' }}>
                    <div className="contenedor-cards">
                        {paper.map((pa) => (
                        <div key={pa._idPaper} className="card__blog">
                            <a target="_blank" href={pa.url}>
                            <img src={pa.urlImage} alt="Imagen Papers" />
                            <h3>{pa.title}</h3>
                            <p>{pa.description}</p>
                            </a>
                        </div>
                        ))}
                    </div> 
                </div>
                
            </main>
        </>
    );
}

export default MainBlog;
