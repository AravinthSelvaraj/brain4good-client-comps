import React, { ReactElement } from "react";

import { IInputFieldOption } from "../../InputField";
import "./radio-input-field-option.css";

export interface IRadioInputFieldOption extends IInputFieldOption {
    name: string
    selectedValue?: string
    onSelect?: (value: string) => void
}

export const RadioInputFieldOption: React.FC<IRadioInputFieldOption> = ({ value, label, name, selected = false, onSelect }: IRadioInputFieldOption): ReactElement => {
    return (
        <div className={`field-option${selected ? ' checked' : ''}`}
            onClick={() => {
                if (onSelect) {
                    onSelect(value);
                }
            }}>
            <input className="hidden" type="radio" name={name} value={value} />
            <span></span>
            <label htmlFor="gender">{label}</label>
        </div>
    );
}