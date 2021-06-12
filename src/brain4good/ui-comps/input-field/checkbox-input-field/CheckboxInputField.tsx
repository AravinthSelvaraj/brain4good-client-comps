import React, { ReactElement, useState } from "react";

import "./checkbox-input-field.css";

type Props = {
    name: string,
    label: string,
    type: string,
    defaultValue?: string
};

const CheckboxInputField: React.FC<Props> = ({ name, label, type, defaultValue = "" }: Props): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="checkbox-input-field">
            <input className="checkbox-input-field mr8 r4 fl" type={type}
                name={name} value={value}
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                }} />
            <label htmlFor={name} className="checkbox-input-field-label">{label}</label>
        </div>
    );
};

export default CheckboxInputField;