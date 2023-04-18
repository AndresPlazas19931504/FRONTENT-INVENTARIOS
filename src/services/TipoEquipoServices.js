import { axiosConfig } from "../configuration/axiosConfiguracion"

const createTipoEquipo = (data = {}) => {
    return axiosConfig.post('tipoEquipo', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const getTipoEquipo = (estado) => {
    return axiosConfig.get('tipoEquipo?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const updateTipoEquipo = (idTipoEquipo, data) => {
    return axiosConfig.put('tipoEquipo/${idTipoEquipo}', data, {} , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const deleteTipoEquipo = (idTipoEquipo) => {
    return axiosConfig.delete('tipoEquipo/${idTipoEquipo}', {} , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    createTipoEquipo,
    getTipoEquipo,
    updateTipoEquipo,
    deleteTipoEquipo
}