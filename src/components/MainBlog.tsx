import '../styles.css';

function MainBlog() {
    return (
        <>
            <main>
                <div className="gray-bg banner__blog">
                    <div className="banner__blog__title">
                        <h1>Blog Alpha</h1>
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
                <div className="container__blog">
                    
                </div>
            </main>
        </>
    )
}

export default MainBlog