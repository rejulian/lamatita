import React from 'react'
import OfertasCard from './OfertasCard'

const Ofertas = () => {
  return (
    <section className='ofertas'>
        <div >
            <h1 className='ofertas__title' id='ofertas'>¡OFERTAS!</h1>
        </div>
        <div className='ofertas__container'>
            <OfertasCard img={'https://res.cloudinary.com/tuko/image/upload/v1675895660/lamatita/Enero_Mesa_de_trabajo_1_copia_24_lrursw.png'}/>
            <OfertasCard img={'https://res.cloudinary.com/tuko/image/upload/v1675895711/lamatita/PromoDNI_Mesa_de_trabajo_1_copia_5_payr4e.png'}/>
            <OfertasCard img={'https://res.cloudinary.com/tuko/image/upload/v1675895737/lamatita/PromoDNI_Mesa_de_trabajo_1_copia_23_yy68eg.png'}/>
        </div>
    </section>
  )
}

export default Ofertas