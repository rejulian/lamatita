import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import Card from '../Card/Card'

const Categorias = () => {

  const {categoria} = useParams()
  
  const [productos, setProductos] = useState([])

  const getProductosRubro = () => {
    Axios.get(`http://localhost:4000/productos/${categoria}`)
    .then(data => setProductos(data.data))
  }

  useEffect(getProductosRubro,[categoria])

  return (
    <section className='productos'>
      <div className='card__container'>
        {productos.map(val => {
          return(
            <Card prod={val} key={val.id_art}/>
          )
        })}
      </div>
    </section>
  )
}

export default Categorias