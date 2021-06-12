import React, { ReactElement } from "react";

import { TextInputField } from "./text-input-field/TextInputField";
import { CheckboxInputField } from "./checkbox-input-field/CheckboxInputField";
import { SubmitInputField } from "./submit-input-field/SubmitInputField";

import "./input-field.css";

export interface IInputField {
    name: string
    label: string
    defaultValue?: string | boolean
}

type InputFieldProps = {
    name: string
    label: string
    type: 'submit' | 'checkbox' | "text" | "password"
    defaultValue?: string | boolean
    btnType?: string
}

export const InputField: React.FC<InputFieldProps> = ({ name, label, type, defaultValue, btnType }: InputFieldProps): ReactElement => {
    if (type === 'submit') {
        return (
            <SubmitInputField name={name} label={label} btnType={btnType} />
        );
    }
    if (type === 'checkbox') {
        return (
            <CheckboxInputField name={name} label={label} defaultValue={defaultValue as boolean} />
        );
    }
    if (type === 'text' || type === 'password') {
        return (
            <TextInputField name={name} label={label} type={type} defaultValue={defaultValue as string} />
        );
    }
    return (
        <span>Invalid type is given</span>
    )
}