import { IoMdClose } from 'react-icons/io';
import './index.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface IdiomaProps {
    idioma: string;
}

function Modal({ idioma }: IdiomaProps) {
    useEffect(() => {
        document.title = idioma === "es" ? "Alpha | Inicio de sesión" : "Alpha | Login";
    }, [idioma]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = 'https://www.alphaasesoriaestrategica.com/campus/moodle/login/';
    };

    return (
        <div className="modal__container">
            <div className="__modal">
                <div className="modal__header">
                    <Link to="/">
                        <IoMdClose id='close__modal' />
                    </Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal__body">
                        <h2>{idioma === "es" ? "Inicio de sesión - Campus" : "Campus - Login"}</h2>
                        <p>{idioma === "es" ? "Serás redirigido a la plataforma oficial del campus." : "You will be redirected to the official campus platform."}</p>
                    </div>
                    <div className="modal__footer">
                        <button type="submit" className="btn__login">
                            {idioma === "es" ? "Ir al campus" : "Go to campus"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;