import React, { ReactElement } from "react";

type Props = {
    children?: JSX.Element | JSX.Element[],
};

const Form: React.FC<Props> = ({ children }: Props): ReactElement => (
    <form className="form">
        {children}
    </form>
);

export default Form;