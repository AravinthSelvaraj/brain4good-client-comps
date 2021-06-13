import React, { ReactElement, useState } from "react";

import { IInputField, IInputFieldOption } from "../InputField";
import "./select-input-field.css";

interface ISelectInputField extends IInputField {
    defaultValue?: string
    options?: IInputFieldOption[]
}

export const SelectInputField: React.FC<ISelectInputField> = ({ name, label, options = [], defaultValue }: ISelectInputField): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="select-input-field">
            <label htmlFor="role">{label}</label>
            <span className="down-arrow">&nbsp;</span>
            <select name={name} value={value} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setValue(event.target.value);
            }}>
                {
                    options.map((option, index) =>
                        <option key={index} value={option.value}>{option.label}</option>
                    )
                }
            </select>
        </div>
    );
};