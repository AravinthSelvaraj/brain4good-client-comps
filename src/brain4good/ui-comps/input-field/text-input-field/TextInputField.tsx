import React, { ReactElement, useState } from "react";

import { IInputField } from "../InputField";
import "./text-input-field.css";

interface ITextInputField extends IInputField {
    defaultValue?: string
    type?: string
}

export const TextInputField: React.FC<ITextInputField> = ({ name, label, type, defaultValue = "" }: ITextInputField): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="input-field">
            <label htmlFor={name} className="input-field-label">{label}</label>
            <input className="input-field-input mt8 mb16" type={type}
                name={name} value={value}
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                }} />
        </div>
    );
};