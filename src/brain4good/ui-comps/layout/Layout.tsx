import React, { ReactElement } from "react";
import { ListLayout } from "./ListLayout";
import { ColumnLayout } from "./ColumnLayout";

type Props = {
    type?: 'horizontal' | 'vertical'
    splitType?: 'equal' | 'content'
    children: JSX.Element[]
};

export const Layout: React.FC<Props> = ({ type = 'horizontal', splitType, children }: Props): ReactElement => {
    if (type === 'horizontal') {
        return (
            <ListLayout>{children}</ListLayout>
        );
    }
    if (type === 'vertical') {
        return (
            <ColumnLayout splitType={splitType}>{children}</ColumnLayout>
        );
    }
    throw Error('Sorry! Type not yet implemented');
};