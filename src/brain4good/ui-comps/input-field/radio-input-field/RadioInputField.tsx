import React, { ReactElement, useState } from "react";

import { IInputField, IInputFieldOption } from "../InputField";
import { RadioInputFieldOption } from "./radio-input-field-option/RadioInputFieldOption";
import "./radio-input-field.css";

interface IRadioInputField extends IInputField {
    defaultValue?: string
    options?: IInputFieldOption[]
}

export const RadioInputField: React.FC<IRadioInputField> = ({ name, label, options, defaultValue }: IRadioInputField): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="radio-input-field mt8 mb16">
            {(() => {
                return options ? options.map((option, index) =>
                    <RadioInputFieldOption key={index} name={name} label={option.label}
                        value={option.value} selected={option.value === value}
                        onSelect={(v: string) => {
                            if (value === v) {
                                setValue(undefined);
                            }
                            else {
                                setValue(v);
                            }
                        }} />
                ) : <RadioInputFieldOption name={name} label={label}
                    value={name} selected={false} />
            })()}
        </div>
    );
};