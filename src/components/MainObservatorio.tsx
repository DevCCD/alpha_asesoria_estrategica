import { useEffect, useState } from 'react';
import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

interface Observatorio {
    _id: string;
    tituloES: string;
    tituloEN: string;
    descripcionES: string;
    descripcionEN: string;
    grafico: string;
    titutloGraficoES: string;
    titutloGraficoEN: string;
    subtitutloGraficoES: string;
    subtitutloGraficoEN: string;
    sourceES: string;
    sourceEN: string;
    etiqueta: string;
    bg: string;
}

function MainObservatorio ({ idioma } : IdiomaProps) {

    const [observatorio, setObserv] = useState<Observatorio[]>([]);

    useEffect(() => {
        const fetchObserv = async () => {
            try {
                const response = await fetch('http://localhost:3000/observatorio');
                const data: Observatorio[] = await response.json();
                setObserv(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchObserv();
    }, []);

    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Observatorio" : "Alpha | Observatory"
    }, [idioma])

    return (
        <main>
            <div className="banner__container">
                <div className="banner_center">
                    <h1>{ idioma == "es" ? "Economía Peruana" : "Peruvian Economy" }</h1>
                </div>
            </div>
            {observatorio.map((ob) => (
                <div className={`container__economia ${ob.bg}`} key={ob._id}>
                    <div className='invisible__top' id={ob.etiqueta} />
                    <div className="economia__left">
                        <h1>{ idioma == "es" ? ob.tituloES : ob.tituloEN }</h1>
                        <p>{ idioma == "es" ? ob.descripcionES : ob.descripcionEN }</p>
                    </div>
                    <div className="economia__right">
                        <h2>{ idioma == "es" ? ob.titutloGraficoES : ob.titutloGraficoEN }</h2>
                        <p>{ idioma == "es" ? ob.subtitutloGraficoES : ob.subtitutloGraficoEN }</p>
                        <img src={ob.grafico} />
                        <div className='fuente__observatorio'>
                            <sub className='nota__fuente'></sub>
                            <sub>{idioma == "es" ? ob.sourceES : ob.sourceEN }</sub>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default MainObservatorio