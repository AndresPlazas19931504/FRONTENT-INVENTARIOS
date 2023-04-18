import React from 'react'
import NavBar from '../components/iu/NavBar'
import { Route, Routes } from 'react-router-dom'
import EstadoEquipoComponents from '../components/EstadoEquipoComponents'
import TipoEquipoComponents from '../components/TipoEquipoComponents'
import UsuarioComponents from '../components/UsuarioComponents'
import MarcasComponents from '../components/MarcasComponents'
import InventarioComponents from '../components/InventarioComponents'
import Footer from '../components/iu/Footer'
import NotFound from '../components/iu/NotFound'

export default function AppRouter() {
  return (
    <>
        <div>
            <NavBar/>
            <div className='container'>
            <Routes>
                <Route path='/Equipo' element={<TipoEquipoComponents/>} />
                <Route path='/Estados' element={<EstadoEquipoComponents/>} />
                <Route path='/Usuarios' element={<UsuarioComponents/>} />
                <Route path='/Marcas' element={<MarcasComponents/>} />
                <Route path='/Inventario' element={<InventarioComponents/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
            </div>
        </div>
        <Footer/>
    </>
  )
}
