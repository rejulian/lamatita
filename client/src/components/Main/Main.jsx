import React from 'react'
import Hero from '../Hero/Hero'
import Destacado from './Destacado/Destacado'
import Ofertas from './Ofertas/Ofertas'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <main>
        <Hero/>
        <Ofertas/>
        <Destacado/>
        <div className='btn__verProd'>
          <Link to='/productos'>Ver todos los productos</Link>
        </div>
    </main>
  )
}

export default Main