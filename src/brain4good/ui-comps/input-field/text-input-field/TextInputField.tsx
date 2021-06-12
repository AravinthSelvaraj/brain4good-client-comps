import React, { ReactElement, useState } from "react";

import "./text-input-field.css";

type Props = {
    name: string,
    label: string,
    type: string,
    defaultValue?: string
};

const TextInputField: React.FC<Props> = ({ name, label, type, defaultValue = "" }: Props): ReactElement => {
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

export default TextInputField;