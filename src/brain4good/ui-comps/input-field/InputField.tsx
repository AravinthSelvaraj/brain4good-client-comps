import React, { ReactElement } from "react";

import { TextInputField } from "./text-input-field/TextInputField";
import { CheckboxInputField } from "./checkbox-input-field/CheckboxInputField";
import { SubmitInputField } from "./submit-input-field/SubmitInputField";
import { RadioInputField } from "./radio-input-field/RadioInputField";
import { SelectInputField } from "./select-input-field/SelectInputField";

import "./input-field.css";

export interface IInputFieldOption {
    value: string
    label: string
    selected?: boolean
}

export interface IInputField {
    name: string
    label: string
    defaultValue?: string | boolean
}

type InputFieldProps = {
    name: string
    label: string
    type: 'submit' | 'checkbox' | 'radio' | 'select' | 'text' | 'password'
    defaultValue?: string | boolean
    btnType?: string
    options?: IInputFieldOption[]
    optionLayout?: 'horizontal' | 'vertical'
}

export const InputField: React.FC<InputFieldProps> = ({ name, label, type, defaultValue,
    btnType, options, optionLayout }: InputFieldProps): ReactElement => {
    if (type === 'submit') {
        return (
            <SubmitInputField name={name} label={label} btnType={btnType} />
        );
    }
    if (type === 'checkbox') {
        return (
            <CheckboxInputField name={name} label={label}
                defaultValue={defaultValue as boolean} />
        );
    }
    if (type === 'radio') {
        return (
            <RadioInputField name={name} label={label}
                options={options as unknown as IInputFieldOption[]}
                defaultValue={defaultValue as string}
                optionLayout={optionLayout} />
        );
    }
    if (type === 'select') {
        return (
            <SelectInputField name={name} label={label} options={options}
                defaultValue={defaultValue as string} />
        );
    }
    if (type === 'text' || type === 'password') {
        return (
            <TextInputField name={name} label={label} type={type}
                defaultValue={defaultValue as string} />
        );
    }
    throw Error('Sorry! Type not yet implemented');
}