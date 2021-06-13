import React, { ReactElement } from "react";

type Props = {
    splitType?: 'equal' | 'content'
    children: JSX.Element[],
};

export const ColumnLayout: React.FC<Props> = ({ splitType = 'equal', children }: Props): ReactElement => {
    const wideClass = splitType === 'content' ? 'wide-content' : `wide-${children?.length}`;
    return (
        <div className="column-layout">
            {(() => {
                return children?.map((child, index) => {
                    const mlClass = index !== 0 ? ' ml20' : '';
                    return <div key={index} className={`${wideClass} inline-block${mlClass}`}>{child}</div>
                });
            })()}
        </div>
    );
};