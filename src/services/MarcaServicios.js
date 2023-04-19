import { axiosConfig } from "../configuration/axiosConfiguracion"

const createMarca = (data = {}) => {
    return axiosConfig.post('marca', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
const getMarca = (estado) => {
    return axiosConfig.get('marca?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const updateMarca = (idMarca, data) => {
    return axiosConfig.put('marca/${idMarca}', data, {} , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const deleteMarca = (idMarca) => {
    return axiosConfig.delete('marca/${idMarca}', {} , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    getMarca,
    createMarca,
    updateMarca,
    deleteMarca
}