import { useEffect } from 'react';
import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainObservatorio ({ idioma } : IdiomaProps) {
    useEffect(() => {
        document.title = idioma == "es" ? "Alpha | Observatorio" : "Alpha | Observatory"
    }, [])

    return (
        <main>
            <div className="banner__container">
                <div className="banner_center">
                    <h1>{ idioma == "es" ? "Economía Peruana" : "Peruvian Economy" }</h1>
                </div>
            </div>
            <div className="container__economia">
                <div className='invisible__top' id='observatorio1' />
                <div className="economia__left">
                    <h1>{ idioma == "es" ? "Indicador de Actividad Económica (IAE)" : "Economic Activity Indicator (EAI)" }</h1>
                    <p>{ idioma == "es" ? "El indicador de Actividad Económica después de estar gran parte del 2023 en el área desfavorable por las continuas caídas de la actividad, empezando el 2024 tuvo una recuperación explicada mayormente por un efecto rebote por la caída de la actividad a principios del año pasado debido a los conflictos sociales. En marzo del 2024 el indicador estuvo al límite de las dos áreas y se espera una recuperación a partir de abril." : "The Economic Activity indicator, after being in the unfavorable area for much of 2023 due to the continuous falls in activity, began in 2024 with a recovery mainly explained by a rebound effect due to the fall in activity at the beginning of last year due to the social conflicts. In March 2024, the indicator was at the limit of the two areas and a recovery is expected from April." }</p>
                </div>
                <div className="economia__right">
                    <h2>{ idioma == "es" ? "Indicador de Actividad Económica" : "Economic Activity Indicator" }</h2>
                    <p>{ idioma == "es" ? "(Diciembre 2023=50)" : "(December 2023=50)" }</p>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712783551/alpha/images/Graficos%20Observatorio/ActividadEconomica.png" />
                </div>
            </div>
            <div className="container__economia gray-bg">
                <div className='invisible__top' id='observatorio2' />
                <div className="economia__left">
                    <h1>{ idioma == "es" ? "Indicador de Condiciones Externas (ICE)" : "External Conditions Indicator (ECI)" }</h1>
                    <p>{ idioma == "es" ? "El factor político desvió la explicación del comportamiento del Tipo de Cambio en sus fundamentos económicos como los términos de intercambio, diferenciales nacional e internacional de la productividad y la inflación, entre otros. Dicho desvío se ha disipado en los últimos trimestres, el comportamiento del Tipo de Cambio incorpora principalmente los fundamentos económicos" : "The political factor diverted the explanation of the behavior of the Exchange Rate from its economic foundations such as the terms of trade, national and international productivity differentials and inflation, among others. This deviation has dissipated in recent quarters, the behavior of the Exchange Rate mainly incorporates economic fundamentals" }</p>
                </div>
                <div className="economia__right">
                    <h2>{ idioma == "es" ? "Tipo de Cambio: Fundamentos Económicos y otros factores" : "Exchange Rate: Economic Fundamentals and Other Factors" }</h2>
                    <p>{ idioma == "es" ? "(S/ por US$)" : "(S/ per US$)" }</p>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712784232/alpha/images/Graficos%20Observatorio/TipoDeCambio.png" />
                </div>
            </div>
            <div className="container__economia">
                <div className='invisible__top' id='observatorio3' />
                <div className="economia__left">
                    <h1>{ idioma == "es" ? "Indicador de Condiciones Monetarias (ICM)" : "Monetary Conditions Indicator (MCI)" }</h1>
                    <p>{ idioma == "es" ? "En Febrero 2024 el BCRP disminuyó su tasa de referencia a 6.25%, registrando el sexto recorte consecutivo después de un ciclo de tasas de interés altas para combatir la inflación. En el último mes la expectativa de inflación se ha anclado en aproximadamente 2.65%, propiciando que la tasa de interés real y el costo de financiamiento para las empresas continúen altas" : "In February 2024, the BCRP decreased its reference rate to 6.25%, registering the sixth consecutive cut after a cycle of high interest rates to combat inflation. In the last month, inflation expectations have been anchored at approximately 2.65%, causing the real interest rate and the cost of financing for companies to remain high" }</p>
                </div>
                <div className="economia__right">
                    <h2>{ idioma == "es" ? "Tasa de Interés Real" : "Real Interest Rate" }</h2>
                    <p>{ idioma == "es" ? "(Porcentaje)" : "(Percentage)" }</p>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712783131/alpha/images/Graficos%20Observatorio/TasaInteresReal.png" />
                </div>
            </div>
            <div className="container__economia gray-bg">
                <div className='invisible__top' id='observatorio4' />
                <div className="economia__left">
                    <h1>{ idioma == "es" ? "Indicador de Condiciones Crediticias (ICC)" : "Credit Conditions Indicator (CCI)" }</h1>
                    <p>{ idioma == "es" ? "En Febrero 2024 el BCRP disminuyó su tasa de referencia a 6.25%, registrando el sexto recorte consecutivo después de un ciclo de tasas de interés altas para combatir la inflación. En el último mes la expectativa de inflación se ha anclado en aproximadamente 2.65%, propiciando que la tasa de interés real y el costo de financiamiento para las empresas continúen altas" : "In February 2024, the BCRP decreased its reference rate to 6.25%, registering the sixth consecutive cut after a cycle of high interest rates to combat inflation. In the last month, inflation expectations have been anchored at approximately 2.65%, causing the real interest rate and the cost of financing for companies to remain high" }</p>
                </div>
                <div className="economia__right">
                    <h2>{ idioma == "es" ? "Tasa de Interés Real" : "Real Interest Rate" }</h2>
                    <p>{ idioma == "es" ? "(Porcentaje)" : "(Percentage)" }</p>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712783131/alpha/images/Graficos%20Observatorio/TasaInteresReal.png" />
                </div>
            </div>
        </main>
    )
}

export default MainObservatorio