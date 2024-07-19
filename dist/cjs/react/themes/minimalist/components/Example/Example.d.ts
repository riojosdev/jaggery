import React from 'react';
export interface IExampleProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}
export declare const Example: React.FunctionComponent<IExampleProps>;
