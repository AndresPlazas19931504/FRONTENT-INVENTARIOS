import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="p-3 text-bg-dark">
      <ul className="nav nav-pills">
        <NavLink tabIndex={1} className='nav-item nav-link' to='/Equipo'>
          Tipo Equipos
        </NavLink>
        <NavLink tabIndex={2} className='nav-link btn btn-dark' to='/Estados'>
          Estado Equipos
        </NavLink>
        <NavLink tabIndex={3} className='nav-item nav-link' to='/Usuarios'>
          Usuarios
        </NavLink>
        <NavLink tabIndex={4} className='nav-item nav-link' to='/Marcas'>
          Marcas
        </NavLink>
        <NavLink tabIndex={5} className='nav-item nav-link' to='/Inventario'>
          Inventario
        </NavLink>
      </ul>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          </form>
    </header>
  )
}
