import { useState } from "react";

export function useForm(initialFormValues, validateOnChange = false, validate) {
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});
    const [errorsEnable, setErrorsEnable] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // lấy toàn bộ giá trị đã lưu, thay key bằng giá trị mới
        setValues({
            ...values,
            [name]: value,
        });
        if (validateOnChange) {
            validate({ [name]: value });
        }
    };

    const resetForm = () => {
        setValues(initialFormValues);
        setErrors({});
        setErrorsEnable({});
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        errorsEnable,
        setErrorsEnable,
        handleInputChange,
        resetForm,
    };
}

export function Form(props) {
    const { children, ...others } = props;
    return (
        <form autoComplete="false" {...others}>
            {children}
        </form>
    );
}
