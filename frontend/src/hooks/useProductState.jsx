import { useState } from 'react'
export default function useProductState(initialState){
    const [state, setState] = useState(initialState)

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    return [state, handleChange]
}