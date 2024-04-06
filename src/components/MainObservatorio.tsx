import '../styles.css';

function MainObservatorio () {
    return (
        <main>
            <div className="banner__container">
                <div className="banner_center">
                    <h1>Economía Peruana</h1>
                </div>
            </div>
            <div id='actividad' className="container__economia">
                <div className="economia__left">
                    <h1>Actividad Económica</h1>
                    <p>El indicador líder de la Actividad Económica No Primaria prevé un ligero efecto rebote en los 2 primeros meses del año 2024, principalmente por la baja base de comparación por los conflictos sociales de los primeros meses del año pasado. Para los siguientes meses dicho rebote se irá diluyendo, y el indicador líder se encontrará alrededor de cero</p>
                </div>
                <div className="economia__right">
                    <h2>Crecimiento PBI No Primario y Proyecciones</h2>
                    <p>(Variación % real)</p>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183980/alpha/images/grafico1_ufb7of.png" />
                </div>
            </div>
            <div id='tipocambio' className="container__economia gray-bg">
                <div className="economia__left">
                    <h1>Tipo de Cambio: Fundamentos y otros factores</h1>
                    <p>El factor político desvió la explicación del comportamiento del Tipo de Cambio en sus fundamentos económicos como los términos de intercambio, diferenciales nacional e internacional de la productividad y la inflación, entre otros. Dicho desvío se ha disipado en los últimos trimestres, el comportamiento del Tipo de Cambio incorpora principalmente los fundamentos económicos</p>
                </div>
                <div className="economia__right">
                    <h2>Tipo de Cambio con Fundamentos Económicos: Sin político interno</h2>
                    <p>(S/ por US$)</p>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183983/alpha/images/grafico2_xiqbuk.png" />
                </div>
            </div>
            <div id='condiciones' className="container__economia">
                <div className="economia__left">
                    <h1>Condiciones Monetarias</h1>
                    <p>En Febrero 2024 el BCRP disminuyó su tasa de referencia a 6.25%, registrando el sexto recorte consecutivo después de un ciclo de tasas de interés altas para combatir la inflación. En el último mes la expectativa de inflación se ha anclado en aproximadamente 2.65%, propiciando que la tasa de interés real y el costo de financiamiento para las empresas continúen altas</p>
                </div>
                <div className="economia__right">
                    <h2>Tasa de Interés Real</h2>
                    <p>(Porcentaje)</p>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183986/alpha/images/grafico3_nsw067.png" />
                </div>
            </div>
            <div id='indicador' className="container__indicador gray-bg">
                <h1>Indicador de demanda</h1>
                <div className="container__condiciones">
                    <div className="condiciones__left">
                        <h2>Consumo Privado e Índice Big Data de Consumo</h2>
                        <p>(Var % interanual)</p>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183989/alpha/images/grafico4_ji5mxl.png" />
                        <p className='condicion__desc'>Mejora del Índice de Consumo en los dos primeros meses del 2024, en un contexto de descenso de la inflación y menores tasas de interés por recortes del BCRP. Se observa un avance del consumo familiar a raíz del aumento en la creación de empleo y la recuperación de los ingresos laborales, principalmente en Lima. Asimismo, se ha recuperado ligeramente la confianza del consumidor, aunque se mantiene en el tramo pesimista</p>
                    </div>
                    <div className="condiciones__right">
                        <h2>Inversión Bruta Fija e Índice Big Data de Inversión</h2>
                        <p>(Var % interanual)</p>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183999/alpha/images/grafico5_qzcj3i.png" />
                        <p className='condicion__desc'>El aumento del Índice de Inversión se debe en parte a un efecto base positivo, originado por un bajo nivel de comparación durante los primeros meses de 2023, marcados por la inestabilidad social que influyó en las decisiones de inversión. También se presenta un aumento en la inversión pública asociada a pagos que no se habrían realizado a fines del año 2023</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainObservatorio