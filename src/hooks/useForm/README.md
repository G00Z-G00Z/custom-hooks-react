# useForm

This is a hook, used for making working and reactive forms.

It solves the problem of having a element that is a state, used as a value for an input form

**The input must have the name, and value property set to a state to use it!!**

Example:

```
type formValues = {[key: string] : any}

type formData = {
    values : formValues, 
    handleInputChange : Function, 
    resetForm : Function
}

export const useForm = (initialState : formValues = {} ) : formData

{values , handleInputChange, resetForm} = useForm({name : "", description: "", age : 0})
const {formValues, handleInputChange} = useForm(fields)

const { name, age, description } = formValues



<input
                        type='text'
                        name='name'
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    ></input>
```

The handleInputChange function, must go into the input element, as a 'onChange' prop
