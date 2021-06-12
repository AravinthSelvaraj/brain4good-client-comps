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
        <div className="radio-input-field mt8 mb16"
            onClick={() => {
                if (onSelect) {
                    onSelect(value);
                }
            }}>
            <div className={`radio-input-field-option${selected ? ' checked' : ''} mt8`}>
                <input className="hidden" type="radio" name={name} value={value} />
                <label htmlFor="gender">
                    <span className="radio-span"></span>
                    <span className="label-span">{label}</span>
                </label>
            </div>
        </div>
    );
}