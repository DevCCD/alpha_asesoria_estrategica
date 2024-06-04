interface Modulo {
    _id: string;
    nombre: string;
    materiales: Material[];
    videos: Video[];
    ejercicios: Ejercicio[];
}

interface Material {
    _id: string;
    nombre: string;
    url: string;
}

interface Video {
    _id: string;
    nombre: string;
    url: string;
}

interface Ejercicio {
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
    },
    {
        "_id": "1",
        "nombre": "Microeconomía I",
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
    },
    {
        "_id": "2",
        "nombre": "Matemáticas I",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "imagen": "https://4kwallpapers.com/images/wallpapers/macos-ventura-macos-13-macos-2022-stock-dark-mode-5k-retina-3840x2160-8133.jpg",
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
    },
    {
        "_id": "3",
        "nombre": "Econometría I",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "imagen": "https://www.10wallpaper.com/wallpaper/medium/2306/Graphic_MacOS_Sonoma_Curve_Ripple_5K_Background_medium.jpg",
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
    },
    {
        "_id": "4",
        "nombre": "Finanzas I",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "imagen": "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwbWFjJTIwb3N8ZW58MHx8MHx8fDA%3D",
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