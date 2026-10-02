import { useLayoutEffect, useState } from 'react';
import { IoArrowForwardOutline, IoSchoolOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { CAMPUS_LOGIN_URL } from '../data/campus';
import '../styles/topbar.css';

const STORAGE_KEY = 'alpha-topbar-cursos-cerrada';

interface TopBarProps {
    idioma: string;
}

const yaCerrada = () => {
    try {
        return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
        return false;
    }
};

function TopBar({ idioma }: TopBarProps) {
    const [visible, setVisible] = useState(() => !yaCerrada());

    // Reserva el espacio de la barra en navbar y contenido mientras esté visible
    useLayoutEffect(() => {
        document.body.classList.toggle('has-topbar', visible);
        return () => document.body.classList.remove('has-topbar');
    }, [visible]);

    const cerrar = () => {
        try {
            sessionStorage.setItem(STORAGE_KEY, '1');
        } catch { /* sin storage: se cierra solo en esta vista */ }
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="topbar" role="region" aria-label={idioma == "es" ? "Aviso de cursos gratuitos" : "Free courses notice"}>
            <a className="topbar__link" href={CAMPUS_LOGIN_URL} target="_blank" rel="noopener noreferrer">
                <i className="topbar__icon"><IoSchoolOutline /></i>
                <span>
                    <strong>{idioma == "es" ? "Cursos gratuitos" : "Free courses"}</strong>
                    <span className="topbar__extra">{idioma == "es" ? " de Economía · Crea tu cuenta y estudia en el Campus Alpha" : " in Economics · Create your account and study on the Alpha Campus"}</span>
                </span>
                <span className="topbar__cta">{idioma == "es" ? "Ir al campus" : "Go to campus"} <IoArrowForwardOutline /></span>
            </a>
            <button type="button" className="topbar__close" onClick={cerrar} aria-label={idioma == "es" ? "Cerrar aviso" : "Close notice"}>
                <IoMdClose />
            </button>
        </div>
    );
}

export default TopBar;
