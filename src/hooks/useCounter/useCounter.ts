import { useState } from "react"

type Counter = {
    counter : number, 
    increment : Function, 
    decrement : Function, 
    reset : Function
}

export const useCounter = (initialValue : number = 0) : Counter => {
    
    const [counter, setState] = useState(initialValue)

    const increment = (factor : number = 1) : void => { setState(counter + factor) }
    const decrement = (factor : number = 1) : void => { setState(counter - factor) }
    const reset = () : void => { setState(initialValue) }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}

