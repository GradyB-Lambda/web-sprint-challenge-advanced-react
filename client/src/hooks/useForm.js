// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValues) => {
    const [valuesAtCheckout, setValue] = useState(initialValues);

    const handleChanges = (event) => {
        setValue({...valuesAtCheckout,
            [event.target.name]: event.target.value,
        })
    }
    return [valuesAtCheckout, handleChanges]

}