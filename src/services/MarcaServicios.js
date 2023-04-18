import { axiosConfig } from "../configuration/axiosConfiguracion"

const getMarca = (estado) => {
    return axiosConfig.get('marca?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const createMarca = () => {
    //implementarlo
}

export {
    getMarca,
    createMarca
}