import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import Card from '../Card/Card'

const ProductoBuscado = () => {

    const {articulo} = useParams()
    const [productos, setProductos] = useState([])
    const [encontrado, setEncontrado] = useState("")


    const getProductosBuscados = () => {
        Axios.get(`http://localhost:4000/productos/busqueda/${articulo}`)
        .then(data => {
            if(data.data.length <= 0){
                setEncontrado(false);
            }else{
                setEncontrado(true)
                setProductos(data.data)
            }
        })
    }

    useEffect(getProductosBuscados,[])

  if(encontrado === true){
    return(
        <section className='productos'>
            <div className='card__container'>
                {productos.map(val => {
                        return(
                            <Card prod={val} key={val.id_art}/>
                        )
                    })
                }
            </div>
        </section>
    )
  }else if(encontrado === false){
    return(
        <div className='productoNotFound'>
            <h1>UPS! No se han encontrado productos...</h1>
        </div>
    )
  }else if(encontrado === ""){
   return(
    <div class="lds-dual-ring"></div>
   )
  }
}

export default ProductoBuscado