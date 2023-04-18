import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { getUsuario } from '../services/UsuarioServices'

export default function UsuarioComponents({title}) {

const [Usuario, setUsuario]= useState([])
  
const listUsuario = async () => {
  try{
    const { data } = await getUsuario(true)
    console.log(data)
    setUsuario(data)
  }catch(e){
    console(e)
  }
}


useEffect(() => {
  listUsuario()
}, [])

  return (
    <>
    
      <div className='table-responsive'>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha Creación</th>
              <th scope="col">Fecha Actulización</th>
            </tr>
          </thead>
          <tbody>
            {
              Usuario.map((Usuario, index) => {
                return(
                  <tr key={Usuario._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{Usuario.nombre}</td>
                    <td>{Usuario.correo}</td>
                    <td>{Usuario.estado ? 'Activo' : 'Inactivo'}</td>
                    <td>{dayjs (Usuario.fecheCreacion).format('YYYY-MM-DD')}</td>
                    <td>{dayjs (Usuario.fechaActualizacion
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