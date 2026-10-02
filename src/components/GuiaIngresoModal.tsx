import { useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CAMPUS_LOGIN_URL, GUIA_INGRESO_PDF } from '../data/campus';
import '../styles/guiaModal.css';

interface GuiaIngresoModalProps {
    idioma: string;
    onClose: () => void;
}

function GuiaIngresoModal({ idioma, onClose }: GuiaIngresoModalProps) {
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const previousFocus = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
            previousFocus?.focus();
        };
    }, [onClose]);

    const titulo = idioma == "es" ? "¿Cómo ingreso al campus?" : "How do I access the campus?";

    return (
        <div className="guia-modal" onClick={onClose}>
            <div className="guia-modal__dialog" role="dialog" aria-modal="true" aria-label={titulo} onClick={(e) => e.stopPropagation()}>
                <div className="guia-modal__header">
                    <h3>{titulo}</h3>
                    <button ref={closeRef} type="button" className="guia-modal__close" onClick={onClose} aria-label={idioma == "es" ? "Cerrar" : "Close"}>
                        <IoMdClose />
                    </button>
                </div>
                <iframe className="guia-modal__pdf" src={`${GUIA_INGRESO_PDF}#view=FitH`} title={titulo} />
                {/* Los visores móviles no muestran PDFs embebidos: se ofrece abrir la guía */}
                <div className="guia-modal__fallback">
                    <p>{idioma == "es" ? "Guía visual paso a paso para crear tu cuenta en el campus (3–5 minutos)." : "Step-by-step visual guide to create your campus account (3–5 minutes)."}</p>
                    <a className="guia-modal__campus" href={GUIA_INGRESO_PDF} target="_blank" rel="noopener noreferrer">
                        {idioma == "es" ? "Ver guía (PDF)" : "View guide (PDF)"}
                    </a>
                </div>
                <div className="guia-modal__footer">
                    <a href={GUIA_INGRESO_PDF} target="_blank" rel="noopener noreferrer">
                        {idioma == "es" ? "Abrir / descargar guía (PDF)" : "Open / download guide (PDF)"}
                    </a>
                    <a className="guia-modal__campus" href={CAMPUS_LOGIN_URL} target="_blank" rel="noopener noreferrer">
                        {idioma == "es" ? "Ir al campus" : "Go to campus"}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default GuiaIngresoModal;
