import React from 'react';

export interface INavBarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    backgroundColor?: string;
    color?: string;
}

export const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
    const {
        children
        // backgroundColor, color, style
    } = props;

    // let _style: React.CSSProperties = style || {};
    let _style: React.CSSProperties = {
        width: '100%',
        height: '100px',
        marginTop: '0px',
        boxShadow: '0px 1px 4px #000000',
        backdropFilter: 'blur(5px)',
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.45)'
    };

    /** Override Defaults */
    // if (backgroundColor) _style.backgroundColor = backgroundColor;
    // if (color) _style.color = color;

    // TODO: make editable css stylings using inline props arguments
    // ? this should be used as a template for all other components
    return (
        <div style={_style} {...props}>
            {children}
        </div>
    );
};
