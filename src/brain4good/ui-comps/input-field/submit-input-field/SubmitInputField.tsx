import React, { ReactElement } from "react";

import "./submit-input-field.css";

type Props = {
    name: string,
    label: string,
    btnType?: string
};

const generateInputClassNameString = (btnType: string): string => {
    return `submit-input-field-input ${btnType} mt8`;
}

const SubmitInputField: React.FC<Props> = ({ name, label, btnType = "primary" }: Props): ReactElement => {
    return (
        <div className="submit-input-field">
            <input className={generateInputClassNameString(btnType)} type="submit"
                name={name} value={label} />
        </div>
    );
};

export default SubmitInputField;