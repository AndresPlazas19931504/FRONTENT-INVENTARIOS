import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { createUsuario, getUsuario, updateUsuario } from '../services/UsuarioServices'
import ModalUsuarios from './iu/TipoEquipo/ModalUsuarios'

export default function UsuarioComponents({}) {

const title = ("Usuario")  
const [Usuario, setUsuario]= useState([])
const [query, setQuery ] = useState(true)
const [loading, setLoading ] = useState(true)
const [error, setError ] = useState(false)
const [Usuarios, setUsuarios] = useState({
  nombre: '',
  estado: true
})

const [LoadingSave, setLoadingSave] = useState(false)

const [id, setId] = useState('')

const listUsuario = async () => {
  try{
    setError(false)
    setLoading(true)
    const { data } = await getUsuario(query)
    console.log(data)
    setUsuario(data)

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
  listUsuario()
}, [query])

const changeSwitch = () => {
  setQuery(!query)
}

const handleChange = e => {
  setUsuarios({
    ...Usuarios,
    [e.target.name] : e.target.value
  })
}

const saveUsuario = async () => {
  try{
    setError(false)
    setLoadingSave(true)
    const response = await createUsuario(Usuario)
    console.log(response)
    setUsuarios({nombre: ''})
    listUsuario()
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
  setUsuarios({nombre:''})
  if(id)setId('')
}

const selectUsuario = (evt) => {
  evt.preventDefault()
  setId(evt.target.id)
  const tEq = Usuario.filter(Usuarios => Usuarios._id === evt.target.id)
  setUsuarios({...tEq[0]})
}

const editUsuario = async () => {
  try{
    setError(false)
    setLoadingSave(true)
    const response = await updateUsuario(id, Usuarios)
    console.log(response)
    setUsuario({nombre: ''})
    listUsuario()
    setTimeout(() => {
      setLoadingSave(false)
    }, 500)
  }catch(e){
    console.log(e)
    setError(true)
    setLoadingSave(false)
  }
}
  return (
    <>
      <ModalUsuarios
      title = {title}
      closeModal = {closeModal}
      handleChange = {handleChange}
      Usuarios = {Usuarios}
      LoadingSave = {LoadingSave}
      saveUsuario = {saveUsuario}
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
                  Object.values (Usuario).map((Usuarios, index) => {
                    return (
                      <tr key={Usuarios._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{Usuarios.nombre}</td>
                        <td>{Usuarios.email}</td>
                        <td>{Usuarios.estado ? 'Activo' : 'Inactivo'}</td>
                        <td>{dayjs(Usuarios.fechaCreacion).format('YYYY-MM-DD')}</td>
                        <td>{dayjs(Usuarios.fechaActualizacion).format('YYYY-MM-DD')}</td>
                        <td>
                          <button 
                            onClick={selectUsuario}
                            type="button" 
                            className="btn btn-success"
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModalEdit" 
                            id={Usuarios._id}
                          >
                            Editar
                          </button>
                        </td>
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