import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:4000'
export async function readProduct () {
    try {
        return await axios.get('http://localhost:4000/products')
    } catch (error) {
        return []
    }
}

export async function readSingleProduct () {
    try {
        return await axios.get('')
    } catch (error) {
        return []
    }
}


export async function updateProduct () {
    try {
        return await axios.get('')
    } catch (error) {
        return []
    }
}



export async function deleteProduct () {
    try {
        return await axios.get('')
    } catch (error) {
        return []
    }
}