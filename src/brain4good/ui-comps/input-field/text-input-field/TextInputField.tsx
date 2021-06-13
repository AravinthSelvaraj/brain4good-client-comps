import React, { ReactElement, useState } from "react";

import { IInputField } from "../InputField";
import "./text-input-field.css";

interface ITextInputField extends IInputField {
    defaultValue?: string
    type?: "text" | "password"
}

export const TextInputField: React.FC<ITextInputField> = ({ name, label, type, defaultValue = "" }: ITextInputField): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="input-field text">
            <label htmlFor={name}>{label}</label>
            <input className="wide" type={type}
                name={name} value={value}
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                }} />
        </div>
    );
};