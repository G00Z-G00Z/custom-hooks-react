import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {


    const isMounted = useRef(true)
    const [state, setState] = useState(
        {
            data: null,
            loading: true,
            error: null
        }
    )

    useEffect(() => {

        return () => {
            isMounted.current = false
        }
    }, [])


    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        })


        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current)
                    setState({
                        data,
                        error: null,
                        loading: false
                    })
            })
            .catch(e => {
                setState(
                    {
                        data: null,
                        loading: false,
                        error: "No se pudo regresar la info"
                    }
                )
            })

    }, [url])

    return state
}
