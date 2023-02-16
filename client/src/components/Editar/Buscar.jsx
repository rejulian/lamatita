import React, { useState } from 'react'
import { TextField,Button} from '@mui/material'
import Axios from 'axios'

const Buscar = () => {

    const [codigoBuscado, setCodigoBuscado] = useState()
    // const [producto, setProducto] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        Axios.get(`http://localhost:4000/producto/codigo/${codigoBuscado}`)
        .then(data=>window.location.href = `http://localhost:3000/editar/${data.data[0].codigo}`)
    }

  return (
    <div className='buscarProductoAEditar'>
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Codigo de producto a buscar" variant="outlined" className='editar__input' onChange={e => setCodigoBuscado(e.target.value)}/>
            <Button variant="contained" type='submit'>Buscar</Button>
        </form>
    </div>
  )
}

export default Buscar