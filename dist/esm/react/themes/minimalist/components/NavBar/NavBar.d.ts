import React from 'react';
export interface INavBarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    backgroundColor?: string;
    color?: string;
}
export declare const NavBar: React.FunctionComponent<INavBarProps>;
