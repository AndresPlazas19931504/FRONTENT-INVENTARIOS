import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { createTipoEquipo, getTipoEquipo  } from '../services/TipoEquipoServices'
import ModalTipoEquipo from './iu/TipoEquipo/ModalTipoEquipo'

export default function TipoEquipoComponents({}) {

const title = ("Tipo Equipo")
const [tipoEquipo, setTipoEquipo]= useState([])
const [query, setQuery ] = useState(true)
const [loading, setLoading ] = useState(true)
const [error, setError ] = useState(false)
const [tipoEquipos, setTipoEquipos] = useState({
  nombre: '',
  estado: true
})

const [LoadingSave, setLoadingSave] = useState(false)

const listTipoEquipo = async () => {
  try{
    setError(false)
    setLoading(true)
    const { data } = await getTipoEquipo(query)
    console.log(data)
    setTipoEquipo(data)
    
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
  listTipoEquipo()
}, [query])

const changeSwitch = () => {
  setQuery(!query)
}

const handleChange = e => {
  setTipoEquipos({
    ...tipoEquipos,
    [e.target.name] : e.target.value
  })
}

const saveTipoEquipo = async () => {
  try{
    setError(false)
    setLoadingSave(true)
    const response = await createTipoEquipo(tipoEquipos)
    console.log(response)
    setTipoEquipos({nombre: ''})
    listTipoEquipo()
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
  setTipoEquipos({nombre:''})
}

return (
  <>
    <ModalTipoEquipo
      title = {title}
      closeModal = {closeModal}
      handleChange = {handleChange}
      tipoEquipos = {tipoEquipos}
      LoadingSave = {LoadingSave}
      saveTipoEquipo = {saveTipoEquipo}
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