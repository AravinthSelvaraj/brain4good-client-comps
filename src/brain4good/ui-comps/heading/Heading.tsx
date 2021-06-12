import React, { ReactElement } from "react";

import "./heading.css";

type Props = {
    children: string,
};

const Heading: React.FC<Props> = ({ children }: Props): ReactElement => (
    <span className="heading">{children}</span>
);

export default Heading;