import React from 'react'

const Card = ({prod}) => {
  return (
    <div className='card'>
        <div>
            <img src={prod.foto} alt="Foto Articulo" />
        </div>
        <div className='card__text'>
            <p>{prod.articulo}</p>
            <p><strong>${prod.costo}</strong></p>
            <a href={`https://api.whatsapp.com/send?phone=3364346500&text=Hola!, queria obtener mas informacion sobre: ${prod.articulo}`} rel="noreferrer" target='_blank'>Consultar</a>
        </div>
    </div>
  )
}

export default Card