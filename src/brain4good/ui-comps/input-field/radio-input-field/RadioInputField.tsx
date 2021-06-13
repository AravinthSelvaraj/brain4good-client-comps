import React, { ReactElement, useState } from "react";
import { ListLayout } from "../../layout/ListLayout";

import { IInputField, IInputFieldOption } from "../InputField";
import { RadioInputFieldOption } from "./radio-input-field-option/RadioInputFieldOption";
import "./radio-input-field.css";

interface IRadioInputField extends IInputField {
    defaultValue?: string
    options: IInputFieldOption[]
}

export const RadioInputField: React.FC<IRadioInputField> = ({ name, label, options, defaultValue }: IRadioInputField): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="input-field radio pad-tb-8">
            <label>{label}</label>
            <ListLayout>
                {(() => {
                    return options.map((option, index) =>
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
                    )
                })()}
            </ListLayout>
        </div>
    );
};