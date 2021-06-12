import React, { ReactElement } from "react";

import "./container.css";

type Props = {
    children?: JSX.Element,
};

const Container: React.FC<Props> = ({ children }: Props): ReactElement => (
    <div className="container pad10">
        {children}
    </div>
);

export default Container;