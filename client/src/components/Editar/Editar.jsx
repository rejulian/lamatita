import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TextField, InputLabel, Select, MenuItem,Box, FormControl, Button } from '@mui/material'
import Axios from 'axios'

const Editar = () => {

    const [producto, setProducto] = useState({})
    const [newImg,setNewImg] = useState('')
    const [newWeb, setNewWeb] = useState(1)

    const {codigo} = useParams()

    const getProducto = () =>{
        Axios.get(`http://localhost:4000/producto/codigo/${codigo}`)
        .then(data=>{
            setProducto(data.data)
            setNewImg(data.data[0].foto)
        })
    }

    const handleSubmit = () => { 
        Axios.post('http://localhost:4000/editar',{
            codigo,
            newImg,
            newWeb
        })
        .then(alert('producto actualizado'))
    }

    useEffect(getProducto,[codigo])

  if(producto.length > 0){
    return (
        <div className='editar'>
            <form className='editar__form' onSubmit={handleSubmit}>
                <p className='editar__form__text'><strong>Articulo:</strong> {producto[0].articulo}</p>
                <TextField value={newImg} id="outlined-basic" label="URL de la imagen" variant="outlined" className='editar__input' onChange={e => setNewImg(e.target.value)}/>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth className='editar__input'>
                        <InputLabel id="demo-simple-select-label">Mostrar</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={newWeb}
                        label="Age"
                        onChange={e => setNewWeb(e.target.value)}
                        >
                        <MenuItem value={1}>Habilitar</MenuItem>
                        <MenuItem value={0}>Deshabilitar</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button variant="contained" type='submit'>Aplicar</Button>
            </form>
        </div>
      )
  }else{
    return(
        <h1 style={{paddingTop: '100px'}}>loading...</h1>
    )
  }
}

export default Editar