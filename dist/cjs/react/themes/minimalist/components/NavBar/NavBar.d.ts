import React from 'react';
export interface INavBarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    marginTop?: string;
    boxShadow?: string;
    backdropFilter?: string;
    position?: any;
    display?: string;
    left?: string;
    transform?: string;
    borderRadius?: string;
    links?: any;
}
export declare const NavBar: React.FC<INavBarProps>;
