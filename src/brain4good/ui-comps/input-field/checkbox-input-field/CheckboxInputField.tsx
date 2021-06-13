import React, { ReactElement, useState } from "react";

import { IInputField } from "../InputField";
import "./checkbox-input-field.css";

interface ICheckboxInputField extends IInputField {
    defaultValue?: boolean
}

export const CheckboxInputField: React.FC<ICheckboxInputField> = ({ name, label, defaultValue = false }: ICheckboxInputField): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="input-field checkbox pad-tb-8" onClick={() => {
            setValue(!value);
        }}>
            <input className="mr8 r4 fl" type="checkbox"
                name={name} checked={value} readOnly />
            <label htmlFor={name}>{label}</label>
        </div>
    );
};