export interface Modulo {
    _id: string;
    nombre: string;
    materiales: Material[];
    videos: Video[];
    ejercicios: Ejercicio[];
}

export interface Material {
    _id: string;
    nombre: string;
    url: string;
}

export interface Video {
    _id: string;
    nombre: string;
    url: string;
}

export interface Ejercicio {
    _id: string;
    nombre: string;
    url: string;
}

export interface Curso {
    _id: string;
    nombre: string;
    imagen: string;
    modulos: Modulo[];
}

const cursos = [
    {
        "_id": "0",
        "nombre": "Macroeconomía I",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "imagen": "https://512pixels.net/downloads/macos-wallpapers/10-3.png",
        "modulos": [
            {
                "_id": "0",
                "nombre": "Modulo 1",
                "materiales": [
                    {
                        "_id": "0",
                        "nombre": "Material 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": "1",
                        "nombre": "Material 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ],
                "videos": [
                    {
                        "_id": "0",
                        "nombre": "Video 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": "1",
                        "nombre": "Video 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ],
                "ejercicios": [
                    {
                        "_id": "0",
                        "nombre": "Ejercicio 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": "1",
                        "nombre": "Ejercicio 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ]
            },
            {
                "_id": 1,
                "nombre": "Modulo 2",
                "materiales": [
                    {
                        "_id": 0,
                        "nombre": "Material 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": 1,
                        "nombre": "Material 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ],
                "videos": [
                    {
                        "_id": 0,
                        "nombre": "Video 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": 1,
                        "nombre": "Video 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ],
                "ejercicios": [
                    {
                        "_id": 0,
                        "nombre": "Ejercicio 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": 1,
                        "nombre": "Ejercicio 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ]
            }
        ]
    },
    {
        "_id": "1",
        "nombre": "Macroeconomía II",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "imagen": "https://www.muycomputer.com/wp-content/uploads/2021/06/Monterey-1.jpg",
        "modulos": [
            {
                "_id": "0",
                "nombre": "Modulo 1",
                "materiales": [
                    {
                        "_id": "0",
                        "nombre": "Material 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": "1",
                        "nombre": "Material 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ],
                "videos": [
                    {
                        "_id": "0",
                        "nombre": "Video 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": "1",
                        "nombre": "Video 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ],
                "ejercicios": [
                    {
                        "_id": "0",
                        "nombre": "Ejercicio 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": "1",
                        "nombre": "Ejercicio 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ]
            },
            {
                "_id": "1",
                "nombre": "Modulo 2",
                "materiales": [
                    {
                        "_id": "0",
                        "nombre": "Material 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": "1",
                        "nombre": "Material 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ],
                "videos": [
                    {
                        "_id": "0",
                        "nombre": "Video 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": "1",
                        "nombre": "Video 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ],
                "ejercicios": [
                    {
                        "_id": "0",
                        "nombre": "Ejercicio 1",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    },
                    {
                        "_id": "1",
                        "nombre": "Ejercicio 2",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                ]
            }
        ]
    }
]

export default cursos;