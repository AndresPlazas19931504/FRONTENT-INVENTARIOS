import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { getMarca } from '../services/MarcaServicios'

export default function MarcaComponents({title}) {

const [Marca, setMarca]= useState([])
  
const listMarca = async () => {
  try{
    const { data } = await getMarca(true)
    console.log(data)
    setMarca(data)
  }catch(e){
    console(e)
  }
}


useEffect(() => {
  listMarca()
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
              Marca.map((Marca, index) => {
                return(
                  <tr key={Marca._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{Marca.nombre}</td>
                    <td>{Marca.estado ? 'Activo' : 'Inactivo'}</td>
                    <td>{dayjs (Marca.fecheCreacion).format('YYYY-MM-DD')}</td>
                    <td>{dayjs (Marca.fechaActualizacion
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
