import React, { ReactElement } from "react";

import { IInputField } from "../InputField";

import "./submit-input-field.css";

interface ISubmitInputField extends IInputField {
    btnType?: string
}

export const SubmitInputField: React.FC<ISubmitInputField> = ({ name, label, btnType = "primary" }: ISubmitInputField): ReactElement => {
    return (
        <div className="input-field submit">
            <input className={`btn ${btnType} wide`} type="submit"
                name={name} value={label} />
        </div>
    );
};