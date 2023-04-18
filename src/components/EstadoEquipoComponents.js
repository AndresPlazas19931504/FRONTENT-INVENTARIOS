import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { getEstadoEquipo } from '../services/EstadoEquipoServices'

export default function EstadoEquipoComponents({title}) {

const [estadoEquipo, setEstadoEquipo]= useState([])
  
const listEstadoEquipo = async () => {
  try{
    const { data } = await getEstadoEquipo(true)
    console.log(data)
    setEstadoEquipo(data)
  }catch(e){
    console(e)
  }
}


useEffect(() => {
  listEstadoEquipo()
}, [])

  return (
    <>
    
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
              estadoEquipo.map((estadoEquipo, index) => {
                return(
                  <tr key={estadoEquipo._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{estadoEquipo.nombre}</td>
                    <td>{estadoEquipo.estado ? 'Activo' : 'Inactivo'}</td>
                    <td>{dayjs (estadoEquipo.fecheCreacion).format('YYYY-MM-DD')}</td>
                    <td>{dayjs (estadoEquipo.fechaActualizacion
).format('YYYY-MM-DD')}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

