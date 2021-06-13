import React, { ReactElement } from "react";

type Props = {
    children: JSX.Element[],
};

export const ListLayout: React.FC<Props> = ({ children }: Props): ReactElement => {
    return (
        <div className="list-layout">
            {(() => {
                return children?.map((child, index) => {
                    return <div key={index} className={`list-item wide${index !== 0 ? ' mt8' : ''}`}>{child}</div>
                });
            })()}
        </div>
    );
};