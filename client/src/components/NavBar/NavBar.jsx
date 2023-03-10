import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [categories, setCategories] = useState([])
    const [busqueda, setBusqueda] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        window.location.href = `http://localhost:3000/productos/busqueda/${busqueda}`
    }

    const getCategories = () => {
        Axios.get('http://localhost:4000/nav')
        .then(data=>setCategories(data.data))
    }

    useEffect(getCategories,[])

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img className='nav__logo' src="https://res.cloudinary.com/tuko/image/upload/v1675713893/lamatita/logo_bjg4ig.jpg" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                        <ul className="dropdown-menu">
                            {categories.map((val)=>{
                                return(
                                    <li key={val.rubro}><Link className="dropdown-item" to={`/rubro/${val.rubro}`} >{val.rubro}</Link></li>
                                )
                            })}
                            
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://api.whatsapp.com/send?phone=3364346500" target='_blank'>Contacto</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Acciones</a>
                        <ul className="dropdown-menu">
                           <li><Link className="dropdown-item" to={`/buscarArticulo`}>Editar</Link></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2" value={busqueda} type="search" placeholder="Buscar" aria-label="Buscar" onChange={e => setBusqueda(e.target.value)}/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default NavBar