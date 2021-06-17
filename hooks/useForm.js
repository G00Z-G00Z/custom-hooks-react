import React, { useState } from 'react'

export const useForm = (initialState = {}) => {


    const [values, setValues] = useState(initialState)

    const resetForm = () => {
        setValues(initialState)
    }


    const handleInputChange = (e) => {
        e.preventDefault()
        const { target } = e
        setValues({
            ...values,
            [target.name]: target.value
        })
    }


    return { values, handleInputChange, resetForm }
}
