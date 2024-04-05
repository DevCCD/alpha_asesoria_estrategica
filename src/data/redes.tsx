import { FaFacebookF, FaLinkedinIn, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const redes = [
    {
        "_id": 0,
        "nombre": "Phone",
        "url": "tel:+51999999999",
        "icono": FaPhone
    },
    {
        "_id": 1,
        "nombre": "Mail",
        "url": "mailto:administracion@alphaasesoriaestrategica.com",
        "icono": IoMdMail
    },
    {
        "_id": 2,
        "nombre": "Twitter",
        "url": "https://twitter.com/",
        "icono": FaXTwitter
    },
    {
        "_id": 3,
        "nombre": "Facebook",
        "url": "https://www.facebook.com/",
        "icono": FaFacebookF
    },
    {
        "_id": 4,
        "nombre": "LinkedIn",
        "url": "https://www.linkedin.com/",
        "icono": FaLinkedinIn
    }
]

export default redes