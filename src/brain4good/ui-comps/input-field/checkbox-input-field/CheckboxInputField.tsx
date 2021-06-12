import React, { ReactElement, useState } from "react";

import { IInputField } from "../InputField";
import "./checkbox-input-field.css";

interface ICheckboxInputField extends IInputField {
    defaultValue?: boolean
}

export const CheckboxInputField: React.FC<ICheckboxInputField> = ({ name, label, defaultValue = false }: ICheckboxInputField): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="checkbox-input-field">
            <input className="checkbox-input-field mr8 r4 fl" type="checkbox"
                name={name} checked={value}
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue(event.target.checked);
                }} />
            <label htmlFor={name} className="checkbox-input-field-label">{label}</label>
        </div>
    );
};