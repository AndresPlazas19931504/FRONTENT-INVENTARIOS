import { axiosConfig } from "../configuration/axiosConfiguracion"

const getUsuario = (estado) => {
    return axiosConfig.get('usuario?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const createUsuario = () => {
    //implementarlo
}

export {
    getUsuario,
    createUsuario
}