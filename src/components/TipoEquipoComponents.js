import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import NavBar from './iu/NavBar'
import Footer from './iu/Footer'
import { getTipoEquipo } from '../services/TipoEquipoServices'

export default function TipoEquipoComponents({title}) {

const [tipoEquipo, setTipoEquipo]= useState([])
  
const listTipoEquipo = async () => {
  try{
    const { data } = await getTipoEquipo(true)
    console.log(data)
    setTipoEquipo(data)
  }catch(e){
    console(e)
  }
}


useEffect(() => {
  listTipoEquipo()
}, [])

  return (
    <>
    <NavBar/>
      <div className='table-responsive'>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha Creación</th>
              <th scope="col">Fecha Actulización</th>
            </tr>
          </thead>
          <tbody>
            {
              tipoEquipo.map((tipoEquipo, index) => {
                return(
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{tipoEquipo.nombre}</td>
                    <td>{tipoEquipo.estado ? 'Activo' : 'Inactivo'}</td>
                    <td>{dayjs (tipoEquipo.fecheCreacion).format('YYYY-MM-DD')}</td>
                    <td>{dayjs (tipoEquipo.fechaActualizacion
).format('YYYY-MM-DD')}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    <Footer/>
    </>
  )
}
