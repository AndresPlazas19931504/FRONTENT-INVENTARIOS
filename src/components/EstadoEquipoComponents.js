import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { createEstadoEquipo, getEstadoEquipo } from '../services/EstadoEquipoServices'
import ModalEstadoEquipo from './iu/TipoEquipo/ModalEstadoEquipo'

export default function EstadoEquipoComponents({}) {

const title = ("Estado Equipo")
const [estadoEquipo, setEstadoEquipo]= useState([])
const [query, setQuery ] = useState(true)
const [loading, setLoading ] = useState(true)
const [error, setError ] = useState(false)
const [estadoEquipos, setEstadoEquipos] = useState({
  nombre: '',
  estado: true
})

const [LoadingSave, setLoadingSave] = useState(false)

const listEstadoEquipo = async () => {
  try{
    setError(false)
    setLoading(true)
    const { data } = await getEstadoEquipo(query)
    console.log(data)
    setEstadoEquipo(data)

    setTimeout(() => {
      setLoading(false)
    }, 500)

  }catch(e){
    console.log(e)
    setError(true)
    setLoading(false)
  }
}

useEffect(() => {
  listEstadoEquipo()
}, [query])

function changeSwitch() {
  setQuery(!query)
}

const handleChange = e => {
  setEstadoEquipos({
    ...estadoEquipos,
    [e.target.name] : e.target.value
  })
}

const saveEstadoEquipo = async () => {
  try{
    setError(false)
    setLoadingSave(true)
    const response = await createEstadoEquipo(estadoEquipos)
    console.log(response)
    setEstadoEquipos({nombre: ''})
    listEstadoEquipo()
    setTimeout(() => {
      setLoadingSave(false)
    }, 500)
  }catch(e){
    console.log(e)
    setError(true)
    setLoading(false)
  }
}

const closeModal = () => {
  setEstadoEquipos({nombre:''})
}

return (
    <>
      <ModalEstadoEquipo
      title = {title}
      closeModal = {closeModal}
      handleChange = {handleChange}
      estadoEquipos = {estadoEquipos}
      LoadingSave = {LoadingSave}
      saveEstadoEquipo = {saveEstadoEquipo}
    />
     <div className="form-check form-switch">
      <input 
        className="form-check-input" 
        type="checkbox" 
        role="switch" 
        id="flexSwitchCheckChecked" 
        checked = {query}
        onChange={ changeSwitch }
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Activos</label>
    </div>  
    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Agregar</button>      
      {
        error && 
        (
          <div className="alert alert-danger" role="alert">
            Sucedio un Error contacte a su administrador
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
                estadoEquipo.map((estadoEquipo, index) => {
                  return(
                    <tr key={estadoEquipo._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{estadoEquipo.nombre}</td>
                      <td>{estadoEquipo.estado ? 'Activo' : 'Inactivo'}</td>
                      <td>{dayjs (estadoEquipo.fecheCreacion).format('YYYY-MM-DD')}</td>
                      <td>{dayjs (estadoEquipo.fechaActualizacion).format('YYYY-MM-DD')}</td>
                      <td>
                        <button type="button" className="btn btn-warning">Editar</button>
                      </td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
      )
    }
  </div>
  </>)
}

