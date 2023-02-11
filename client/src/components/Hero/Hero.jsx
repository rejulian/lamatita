import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero = () => {
  return (
    <section className='hero'>
        <h1>Bienvenidos a La Matita</h1>
        <a href="#ofertas" className='arrow-down'><ArrowDownwardIcon sx={{ fontSize: 50 }} /></a>
    </section>
  )
}

export default Hero