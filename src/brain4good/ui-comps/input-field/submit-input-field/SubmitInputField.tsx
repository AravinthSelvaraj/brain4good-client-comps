import React, { ReactElement } from "react";

import { IInputField } from "../InputField";

import "./submit-input-field.css";

interface ISubmitInputField extends IInputField {
    btnType?: string
}

export const SubmitInputField: React.FC<ISubmitInputField> = ({ name, label, btnType = "primary" }: ISubmitInputField): ReactElement => {
    return (
        <div className="submit-input-field">
            <input className={`${btnType} mt8`} type="submit"
                name={name} value={label} />
        </div>
    );
};