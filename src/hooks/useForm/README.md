# useForm

This is a hook, used for making working and reactive forms.

It solves the problem of having a element that is a state, used as a value for an input form

**The input must have the name, and value property set to a state to use it!!**

Example:

```
type formValues = {[key: string] : any}

const fields : formValues = {name : "", description: "", age : 0}
const {values , handleInputChange, resetForm} = useForm(fields)
const { name, age, description } = values



<input
                        type='text'
                        name='name'
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={name}
                        onChange={e => handleInputChange(e)}
                    ></input>
```

The handleInputChange function, must go into the input element, as a 'onChange' prop
