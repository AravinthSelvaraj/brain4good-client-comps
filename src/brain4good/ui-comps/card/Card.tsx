import React, { ReactElement } from "react";

import "./card.css";

type Props = {
    children?: JSX.Element | JSX.Element[],
};

const Card: React.FC<Props> = ({ children }: Props): ReactElement => (
    <div className="card">
        {children}
    </div>
);

export default Card;