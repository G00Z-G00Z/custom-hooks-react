import React, { useEffect, useRef, useState } from 'react'

type apiData<T> = {
    data : (T | null), 
    loading : boolean, 
    error : (Error | null)
}

export const useFetch = <T>(url : string) : apiData<T> => {

    const isMounted = useRef(true)
    
    const emptyData : apiData<T> =  {
        data: null,
        loading: true,
        error: null
    }

    const [state, setState] = useState(emptyData)

    useEffect(() => {

        return () => {
            isMounted.current = false
        }
    }, [])


    useEffect(() => {

        setState(emptyData)


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
            .catch((error : Error ) => {
                setState(
                    {
                        data: null,
                        loading: false,
                        error
                    }
                )
            })

    }, [url])

    return state
}
