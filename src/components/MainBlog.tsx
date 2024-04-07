import '../styles.css';
import blog from '../data/blog.tsx'

interface IdiomaProps {
    idioma: string;
}

function MainBlog({ idioma } : IdiomaProps) {
    return (
        <>
            <main>
                <div className="gray-bg banner__blog">
                    <div className="banner__blog__title">
                        <h1>{ idioma == "es" ? "Blog Alpha" : "Alpha Blog" }</h1>
                        <p>Publicaciones sobre nuestra gente, nuestras capacidades, nuestra investigación y el rostro en constante cambio de nuestra empresa</p>
                    </div>
                </div>
                <div className="container__publi">
                    <div className='container__title__blog'>
                        <div className="title__publi">
                            <p>PUBLICACIONES</p>
                        </div>
                        <div className="title__tags">
                            Buscar por: <span>Tema | Fecha</span>
                        </div>
                    </div>
                    <div className="subrayado__blog"></div>
                </div>
                <div className="contenedor-cards">
                    {blog.map((bl) => (
                    <div key={bl._idBlog} className="card__blog">
                        <a target="_blank" href={bl.url}>
                        <img src={bl.urlImage} alt="Imagen del artículo 1" />
                        <h3>{bl.title}</h3>
                        <p>{bl.description}</p>
                        </a>
                    </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default MainBlog