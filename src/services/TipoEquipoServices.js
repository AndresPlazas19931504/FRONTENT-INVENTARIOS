import { axiosConfig } from "../configuration/axiosConfiguracion"

const getTipoEquipo = (estado) => {
    return axiosConfig.get('tipoEquipo?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const createTipoEquipo = () => {
    //implementarlo
}

export {
    getTipoEquipo,
    createTipoEquipo
}