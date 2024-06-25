import { IoMdMail } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface IdiomaProps {
    idioma: string;
}

interface Perfil {
    _id: string;
    nombre: string;
    cargo: string;
    descripcion: string;
    descripcionLarga: string;
    imageUrl: string;
    url: string;
}

function MainPerfil({ idioma } : IdiomaProps) {
    
    const [perfil, setOnePerfil] = useState<Perfil[]>([]);

    const params = useParams<{ _id: string }>();
    const idPerfil = params._id;
    
    useEffect(() => {
        if (perfil) {
            document.title = "Alpha | " + perfil[0]?.nombre;
        }
    }, [perfil]);

    useEffect(() => {
        const fetchOnePerfil = async () => {
            try {
                const response = await fetch('http://localhost:3000/profile?_id='+idPerfil);
                const data: Perfil[] = await response.json();
                setOnePerfil(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchOnePerfil();
    }, [idPerfil]);


    return (
        <main>
            <div className="banner__container bg-profile">
                <div className="banner_left banner__info">
                    <h1>{perfil[0]?.nombre}</h1>
                    <h3>{perfil[0]?.cargo}</h3>
                    <Link to={perfil[0]?.url}><i><IoMdMail /></i></Link>
                </div>
                <div className="banner_right banner__image">
                    <img src={perfil[0]?.imageUrl} alt="Perfil" />
                </div>
            </div>
            <div className="container__acercade">
                <div className="container__exp">
                    <div className="line"></div>
                    <h4>{ idioma == "es" ? "ACERCA DE" : "ABOUT" }</h4>
                    <p>{perfil[0]?.descripcionLarga}</p>
                </div>
            </div>
        </main>
    )
}

export default MainPerfil;
