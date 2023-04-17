import React from 'react'

export default function NavBar() {
  return (
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-8 text-secondary">Inicio</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Estado EQuipos</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Marcas</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Usuarios</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Tipo EQuipos</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Inventario</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        </form>
      </div>
    </div>
  </header>
  )
}
