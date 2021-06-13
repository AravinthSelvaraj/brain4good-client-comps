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
        <div className="input-field select">
            <label htmlFor="role">{label}</label>
            <span className="down-arrow">&nbsp;</span>
            <select className="mt8 wide" name={name} value={value} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
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