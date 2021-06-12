import React, { ReactElement } from "react";

import TextInputField from "./text-input-field/TextInputField";
import CheckboxInputField from "./checkbox-input-field/CheckboxInputField";
import SubmitInputField from "./submit-input-field/SubmitInputField";

import "./input-field.css";

type Props = {
    name: string,
    label: string,
    type: string,
    defaultValue?: string
    btnType?: string,
};

const InputField: React.FC<Props> = ({ name, label, type, defaultValue, btnType }: Props): ReactElement => {
    if (type === "submit") {
        return (
            <SubmitInputField name={name} label={label} btnType={btnType} />
        );
    }
    if (type === "checkbox") {
        return (
            <CheckboxInputField name={name} label={label} type={type} defaultValue={defaultValue} />
        );
    }
    return (
        <TextInputField name={name} label={label} type={type} defaultValue={defaultValue} />
    );
};

export default InputField;