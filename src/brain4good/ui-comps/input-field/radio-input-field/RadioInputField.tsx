import React, { ReactElement, useState } from "react";
import { Layout } from "../../layout/Layout";

import { IInputField, IInputFieldOption } from "../InputField";
import { RadioInputFieldOption } from "./radio-input-field-option/RadioInputFieldOption";
import "./radio-input-field.css";

interface IRadioInputField extends IInputField {
    defaultValue?: string
    options: IInputFieldOption[]
    optionLayout?: 'horizontal' | 'vertical'
}

export const RadioInputField: React.FC<IRadioInputField> = ({ name, label, options, optionLayout, defaultValue }: IRadioInputField): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div className="input-field radio pad-tb-8">
            <label>{label}</label>
            <Layout type={optionLayout} splitType='content'>
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
            </Layout>
        </div>
    );
};