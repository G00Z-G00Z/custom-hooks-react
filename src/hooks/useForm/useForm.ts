// Credito a Fernando Herrera en su curso de: React Native Aplicaciones Nativas para IOS y Android
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
