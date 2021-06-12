import React, { ReactElement } from "react";

import { IInputField } from "../InputField";

import "./submit-input-field.css";

interface ISubmitInputField extends IInputField {
    btnType?: string
}

const generateInputClassNameString = (btnType: string): string => {
    return `submit-input-field-input ${btnType} mt8`;
}

export const SubmitInputField: React.FC<ISubmitInputField> = ({ name, label, btnType = "primary" }: ISubmitInputField): ReactElement => {
    return (
        <div className="submit-input-field">
            <input className={generateInputClassNameString(btnType)} type="submit"
                name={name} value={label} />
        </div>
    );
};