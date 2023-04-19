import { axiosConfig } from "../configuration/axiosConfiguracion"

const createEstadoEquipo = (data = {}) => {
    return axiosConfig.post('estadoEquipo', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const getEstadoEquipo = (estado) => {
    return axiosConfig.get('estadoEquipo?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const updateEstadoEquipo = (idEstadoEquipo, data) => {
    return axiosConfig.put('estadoEquipo/${idEstadoEquipo}', data, {} , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const deleteEstadoEquipo = (idEstadoEquipo) => {
    return axiosConfig.delete('estadoEquipo/${idEstadoEquipo}', {} , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    getEstadoEquipo,
    createEstadoEquipo,
    updateEstadoEquipo,
    deleteEstadoEquipo
}