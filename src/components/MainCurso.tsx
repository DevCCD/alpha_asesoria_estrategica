import { useEffect } from "react";
import { useParams } from "react-router-dom";

import cursos, { Curso } from "../data/cursos";

interface IdiomaProps {
    idioma: string;
}

function MainCurso({ idioma } : IdiomaProps) {
    const params = useParams<{ _id: string }>();
    const idCurso = params._id;

    const curso: Curso = cursos.find(item => item._id === idCurso);

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Curso" : "Alpha | Course"
    }, [])
    
    if (!curso) {
        return <div>Curso no encontrado</div>;
    }

    const cur = cursos[parseInt(curso._id)];

    
    return (
        <main>
            <div className="white-bg banner__blog">
                <div className="banner__blog__title">
                    <h1>{curso.nombre}</h1>
                </div>
            </div>
            <div className="container__modulos">
                {cur.modulos.map((modu)=> (
                    <div key={modu._id}>
                        <h3>{modu.nombre}</h3>
                        {modu.materiales.map((ma)=> (
                            <div key={ma._id}>
                                <h4>{ma.nombre}</h4>
                                <p>{ma.url}</p>
                            </div>
                        ))}

                        {modu.ejercicios.map((ej)=> (
                            <div key={ej._id}>
                                <h4>{ej.nombre}</h4>
                                <p>{ej.url}</p>
                            </div>
                        ))}

                        {modu.videos.map((vi)=> (
                            <div key={vi._id}>
                                <h4>{vi.nombre}</h4>
                                <p>{vi.url}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    )
}

export default MainCurso;
