import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { getTipoEquipo  } from '../services/TipoEquipoServices'


export default function TipoEquipoComponents({title}) {
const [tipoEquipo, setTipoEquipo]= useState([])
const [query, setQuery ] = useState(true)
const [loading, setLoading ] = useState(true)
const [error, setError ] = useState(false)
  
const listTipoEquipo = async () => {
  try{
    setError(false)
    setLoading(true)
    const { data } = await getTipoEquipo(query)
    console.log(data)
    setTipoEquipo(data)
    setLoading(false)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }catch(e){
    console(e)
    setError(true)
    setLoading(false)
  }
}

useEffect(() => {
  listTipoEquipo()
}, [query])

function changeSwitch() {
  setQuery(!query)
}

return (
  <>
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                <input type="text" className="form-control" id="recipient-name"/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Send message</button>
          </div>
        </div>
      </div>
    </div>

    <div className="form-check form-switch">
      <input 
        className="form-check-input" 
        type="checkbox" 
        role="switch" 
        id="flexSwitchCheckChecked" 
        checked = {query}
        onChange={changeSwitch}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Activos</label>
    </div>  
      <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Agregar</button>      
        {
          error && 
          (
            <div className="alert alert-danger" role="alert">
              Ha ocurrido un error
            </div>
          )
        }

      <div className='table-responsive'>
        {
          loading 
          ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
          ) :
          (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Fecha Creación</th>
                  <th scope="col">Fecha Actulización</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  tipoEquipo.map((tipoEquipo, index) => {
                    return(
                      <tr key={tipoEquipo._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{tipoEquipo.nombre}</td>
                        <td>{tipoEquipo.estado ? 'Activo' : 'Inactivo'}</td>
                        <td>{dayjs (tipoEquipo.fecheCreacion).format('YYYY-MM-DD')}</td>
                        <td>{dayjs (tipoEquipo.fechaActualizacion).format('YYYY-MM-DD')}</td>
                        <td>
                          <button type="button" className="btn btn-warning">Editar</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          )
        }
      </div>
  </>
  )
}
