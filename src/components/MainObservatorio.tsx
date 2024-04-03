import '../styles.css';

function MainObservatorio () {
    return (
        <main>
            <div className="banner__container">
                <div className="banner_center">
                    <h1>Economía Peruana</h1>
                </div>
            </div>
            <div className="container__economia">
                <div className="economia__left">
                    <h1>Actividad Económica</h1>
                    <p>El indicador líder de la Actividad Económica No Primaria prevé un ligero efecto rebote en los 2 primeros meses del año 2024, principalmente por la baja base de comparación por los conflictos sociales de los primeros meses del año pasado. Para los siguientes meses dicho rebote se irá diluyendo, y el indicador líder se encontrará alrededor de cero.</p>
                </div>
                <div className="economia__right">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712095273/alpha/images/pbi_bpgcoy.png" />
                </div>
            </div>
            <div className="container__economia gray-bg">
                <div className="economia__left">
                    <h1>Tipo de Cambio: Fundamentos y otros factores</h1>
                    <p>El factor político desvió la explicación del comportamiento del Tipo de Cambio en sus fundamentos económicos como los términos de intercambio, diferenciales nacional e internacional de la productividad y la inflación, entre otros. Dicho desvío se ha disipado en los últimos trimestres, el comportamiento del Tipo de Cambio incorpora principalmente los fundamentos económicos.</p>
                </div>
                <div className="economia__right">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712095313/alpha/images/tipocambio_w2k25g.png" />
                </div>
            </div>
            <div className="container__economia">
                <div className="economia__left">
                    <h1>Condiciones Monetarias</h1>
                    <p>En Febrero 2024 el BCRP disminuyó su tasa de referencia a 6.25%, registrando el sexto recorte consecutivo después de un ciclo de tasas de interés altas para combatir la inflación. En el último mes la expectativa de inflación se ha anclado en aproximadamente 2.65%, propiciando que la tasa de interés real y el costo de financiamiento para las empresas continúen altas.</p>
                </div>
                <div className="economia__right">
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712095372/alpha/images/condiciones_axuv4r.png" />
                </div>
            </div>
            <div className="container__indicador gray-bg">
                <h1>Indicador de demanda</h1>
                <div className="container__condiciones">
                    <div className="condiciones__left">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712095406/alpha/images/consumo_ttz4bd.png" />
                        <p>Mejora del Índice de Consumo en los dos primeros meses del 2024, en un contexto de descenso de la inflación y menores tasas de interés por recortes del BCRP. Se observa un avance del consumo familiar a raíz del aumento en la creación de empleo y la recuperación de los ingresos laborales, principalmente en Lima. Asimismo, se ha recuperado ligeramente la confianza del consumidor, aunque se mantiene en el tramo pesimista.</p>
                    </div>
                    <div className="condiciones__right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712095404/alpha/images/inversion_ndpfkx.png" />
                        <p>El aumento del Índice de Inversión se debe en parte a un efecto base positivo, originado por un bajo nivel de comparación durante los primeros meses de 2023, marcados por la inestabilidad social que influyó en las decisiones de inversión. También se presenta un aumento en la inversión pública asociada a pagos que no se habrían realizado a fines del año 2023.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainObservatorio;