# useForm

> Credito a Fernando Herrera en su curso de: React Native Aplicaciones Nativas para IOS y Android en Udemy

This hooks allows to keep a state in a form. To use it, you pass a initial State, and you recive every key of the object, the object itself and an *onChange* function. 

The *onChange* option, receives the new value, and the attribute that you want to change


```tsx
import { useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {
	const [formulario, setFormulario] = useState<T>(initialState);

	const onChange = (newValue: string, campo: keyof T) => {
		setFormulario({
			...formulario,
			[campo]: newValue,
		});
	};

	return {
		...formulario,
		formulario,
		onChange,
	};
};

```



Example:

```tsx
export const Formularios = () => {
	const { email, password, onChange, formulario } = useForm({
		password: "871984",
		email: "josifj@uiwfh.com",
	});

	return (
		<>
			<h3>Formularios</h3>
			<input
				type="text"
				className="form-control my-2"
				placeholder="Tu password"
				value={password}
				onChange={(e) => onChange(e.target.value, "password")}
			/>
			<input
				type="email"
				className="form-control"
				placeholder="Tu email"
				value={email}
				onChange={(e) => onChange(e.target.value, "email")}
			/>
			<p>
				<pre>{JSON.stringify(formulario)}</pre>
			</p>
		</>
	);
};

```

The handleInputChange function, must go into the input element, as a 'onChange' prop
