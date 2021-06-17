import React, { useState } from 'react'

type formValues = {[key: string] : any}

type formData = {
    values : formValues, 
    handleInputChange : Function, 
    resetForm : Function
}

export const useForm = (initialState : formValues = {} ) : formData => {

    const [values, setValues] = useState(initialState)

    const resetForm = () : void => {
        setValues(initialState)
    }

    interface inputWithNames {
        target : {
            name : string, 
            value : any
        }, 
        preventDefault : Function
    }

    const handleInputChange = (e :inputWithNames) => {
        e.preventDefault()
        const  target  :  {
            name : string, 
            value : string}
         = e.target
        setValues({
            ...values,
            [target.name]: target.value
        })
    }


    return { values, handleInputChange, resetForm }
}