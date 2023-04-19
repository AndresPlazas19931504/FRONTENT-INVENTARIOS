import { axiosConfig } from "../configuration/axiosConfiguracion"

const createUsuario = (data = {}) => {
    return axiosConfig.post('usuario', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const getUsuario = (estado) => {
    return axiosConfig.get('usuario?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const updateUsuario = (idUsuario, data) => {
    return axiosConfig.put('usuario/${idUsuario}', data, {} , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const deleteUsuario = (idUsuario) => {
    return axiosConfig.delete('usuario/${idUsuario}', {} , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
}