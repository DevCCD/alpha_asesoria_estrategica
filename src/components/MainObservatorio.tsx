import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainObservatorio ({ idioma } : IdiomaProps) {
    return (
        <main>
            <div className="banner__container">
                <div className="banner_center">
                    <h1>{ idioma == "es" ? "Economía Peruana" : "Peruvian Economy" }</h1>
                </div>
            </div>
            <div className="container__economia">
                <div className='invisible__top' id='actividad' />
                <div className="economia__left">
                    <h1>{ idioma == "es" ? " Actividad Económica" : "Economic activity" }</h1>
                    <p>{ idioma == "es" ? "El indicador líder de la Actividad Económica No Primaria prevé un ligero efecto rebote en los 2 primeros meses del año 2024, principalmente por la baja base de comparación por los conflictos sociales de los primeros meses del año pasado. Para los siguientes meses dicho rebote se irá diluyendo, y el indicador líder se encontrará alrededor de cero" : "The leading indicator of Non-Primary Economic Activity foresees a slight rebound effect in the first 2 months of 2024, mainly due to the low comparison base due to the social conflicts of the first months of last year. For the following months, this rebound will be diluted, and the leading indicator will be around zero" }</p>
                </div>
                <div className="economia__right">
                    <h2>{ idioma == "es" ? "Crecimiento PBI No Primario y Proyecciones" : "Non-Primary GDP Growth and Projections" }</h2>
                    <p>{ idioma == "es" ? "(Variación % real)" : "(Actual % variation)" }</p>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183980/alpha/images/grafico1_ufb7of.png" />
                </div>
            </div>
            <div className="container__economia gray-bg">
                <div className='invisible__top' id='tipocambio' />
                <div className="economia__left">
                    <h1>{ idioma == "es" ? "Tipo de Cambio: Fundamentos y otros factores" : "Exchange Rate: Fundamentals and other factors" }</h1>
                    <p>{ idioma == "es" ? "El factor político desvió la explicación del comportamiento del Tipo de Cambio en sus fundamentos económicos como los términos de intercambio, diferenciales nacional e internacional de la productividad y la inflación, entre otros. Dicho desvío se ha disipado en los últimos trimestres, el comportamiento del Tipo de Cambio incorpora principalmente los fundamentos económicos" : "The political factor diverted the explanation of the behavior of the Exchange Rate from its economic foundations such as the terms of trade, national and international productivity differentials and inflation, among others. This deviation has dissipated in recent quarters, the behavior of the Exchange Rate mainly incorporates economic fundamentals" }</p>
                </div>
                <div className="economia__right">
                    <h2>{ idioma == "es" ? "Tipo de Cambio con Fundamentos Económicos: Sin político interno" : "Exchange Rate with Economic Fundamentals: Without internal politics" }</h2>
                    <p>{ idioma == "es" ? "(S/ por US$)" : "(S/ per US$)" }</p>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183983/alpha/images/grafico2_xiqbuk.png" />
                </div>
            </div>
            <div className="container__economia">
                <div className='invisible__top' id='condiciones' />
                <div className="economia__left">
                    <h1>{ idioma == "es" ? "Condiciones Monetarias" : "Monetary Conditions" }</h1>
                    <p>{ idioma == "es" ? "En Febrero 2024 el BCRP disminuyó su tasa de referencia a 6.25%, registrando el sexto recorte consecutivo después de un ciclo de tasas de interés altas para combatir la inflación. En el último mes la expectativa de inflación se ha anclado en aproximadamente 2.65%, propiciando que la tasa de interés real y el costo de financiamiento para las empresas continúen altas" : "In February 2024, the BCRP decreased its reference rate to 6.25%, registering the sixth consecutive cut after a cycle of high interest rates to combat inflation. In the last month, inflation expectations have been anchored at approximately 2.65%, causing the real interest rate and the cost of financing for companies to remain high" }</p>
                </div>
                <div className="economia__right">
                    <h2>{ idioma == "es" ? "Tasa de Interés Real" : "Real Interest Rate" }</h2>
                    <p>{ idioma == "es" ? "(Porcentaje)" : "(Percentage)" }</p>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183986/alpha/images/grafico3_nsw067.png" />
                </div>
            </div>
            <div className="container__indicador gray-bg">
                <div className='invisible__top' id='indicador' />
                <h1>{ idioma == "es" ? "Indicador de demanda" : "Demand indicator" }</h1>
                <div className="container__condiciones">
                    <div className="condiciones__left">
                        <h2>{ idioma == "es" ? "Consumo Privado e Índice Big Data de Consumo" : "Private Consumption and Big Data Consumer Index" }</h2>
                        <p>{ idioma == "es" ? "(Var % interanual)" : "(Interannual % change)" }</p>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183989/alpha/images/grafico4_ji5mxl.png" />
                        <p className='condicion__desc'>{ idioma == "es" ? "Mejora del Índice de Consumo en los dos primeros meses del 2024, en un contexto de descenso de la inflación y menores tasas de interés por recortes del BCRP. Se observa un avance del consumo familiar a raíz del aumento en la creación de empleo y la recuperación de los ingresos laborales, principalmente en Lima. Asimismo, se ha recuperado ligeramente la confianza del consumidor, aunque se mantiene en el tramo pesimista" : "Improvement in the Consumption Index in the first two months of 2024, in a context of declining inflation and lower interest rates due to BCRP cuts. An increase in family consumption is observed as a result of the increase in job creation and the recovery of labor income, mainly in Lima. Likewise, consumer confidence has recovered slightly, although it remains in the pessimistic range" }</p>
                    </div>
                    <div className="condiciones__right">
                        <h2>{ idioma == "es" ? "Inversión Bruta Fija e Índice Big Data de Inversión" : "Gross Fixed Investment and Big Data Investment Index" }</h2>
                        <p>{ idioma == "es" ? "(Var % interanual)" : "(Interannual % change)" }</p>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712183999/alpha/images/grafico5_qzcj3i.png" />
                        <p className='condicion__desc'>{ idioma == "es" ? "El aumento del Índice de Inversión se debe en parte a un efecto base positivo, originado por un bajo nivel de comparación durante los primeros meses de 2023, marcados por la inestabilidad social que influyó en las decisiones de inversión. También se presenta un aumento en la inversión pública asociada a pagos que no se habrían realizado a fines del año 2023" : "The increase in the Investment Index is due in part to a positive base effect, caused by a low level of comparison during the first months of 2023, marked by social instability that influenced investment decisions. There is also an increase in public investment associated with payments that would not have been made at the end of 2023" }</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainObservatorio