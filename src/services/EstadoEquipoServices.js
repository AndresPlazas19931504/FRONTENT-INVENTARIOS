import { axiosConfig } from "../configuration/axiosConfiguracion"

const getEstadoEquipo = (estado) => {
    return axiosConfig.get('estadoEquipo?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const createEstadoEquipo = () => {
    //implementarlo
}

export {
    getEstadoEquipo,
    createEstadoEquipo
}