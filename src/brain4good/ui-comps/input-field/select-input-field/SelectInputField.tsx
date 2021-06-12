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
        <div className="select-input-field mt8 mb16">
            <label htmlFor="role">{label}</label>
            <div>
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
        </div>
    );
};