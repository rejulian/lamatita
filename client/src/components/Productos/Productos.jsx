import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Card from '../Card/Card'

const Productos = () => {

    const [productos, setProductos] = useState([])
    const [limit, setLimit] = useState(4)
    const [offset, setOffset] = useState(0)

    const getAllProducts = () => {
        Axios.get(`http://localhost:4000/productos?limit=4&offset=${offset}`)
        .then(data => {
            if(productos.length === 0){
                setProductos(data.data)
            } else{
                let newArr = data.data
                setProductos(productos.concat(newArr))
            }
        })
    }

    useEffect(getAllProducts,[offset])

  return (
    <section className='productos'>
        <div className='card__container'>
            {productos.map(val => {
                return(
                    <Card prod={val} key={val.id_art}/>
                )
            })}
        </div>
        <div className='productos__btn'>
            <button onClick={()=>{
                setOffset(limit)
                setLimit(limit+4)
            }} >CARGAR MAS</button>
        </div>
    </section>
  )
}

export default Productos