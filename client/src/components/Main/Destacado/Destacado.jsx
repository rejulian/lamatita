import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Card from '../../Card/Card'

const Destacado = () => {

    const [productos, setProductos] = useState([])

    const getProductos = () =>{
      Axios.get('http://localhost:4000/')
      .then(data => setProductos(data.data))   
    }
  
    useEffect(getProductos,[])

  return (
    <section className='destacado'>
        <div><h1>Productos destacados</h1></div>
        <div className='card__container'>
          {productos.map(val=>{
            return(
              <Card prod={val} key={val.id_art}/>
            )
          })}
        </div>
    </section>
  )
}

export default Destacado