import React, { createElement
// useState
 } from 'react';
import { Helmet } from 'react-helmet';
export const NavBar = (props) => {
    // const [hover, setHover] = useState<Boolean>(false);
    const { 
    // children,
    color, width, height, position, display, marginTop, boxShadow, 
    // backdropFilter,
    backgroundColor, left, transform, borderRadius, links } = props;
    let _style = {
        width: width ? width : '85%',
        height: height ? height : '65px',
        marginTop: marginTop ? marginTop : '15px',
        boxShadow: boxShadow ? boxShadow : '2px 3.4px 2px rgba(0, 0, 0, 0.2)',
        // backdropFilter: backdropFilter ? backdropFilter : 'blur(7px)',
        position: position ? position : 'fixed',
        backgroundColor: backgroundColor ? backgroundColor : 'rgba(255, 255, 255, 0.26)',
        color: color ? color : 'black',
        display: display ? display : 'flex',
        left: left ? left : '50%',
        transform: transform ? transform : 'translate(-50%, 0)',
        borderRadius: borderRadius ? borderRadius : '0.9rem',
        justifyContent: 'center'
    };
    let url_styles = {
        padding: '21px',
        fontSize: '16px',
        fontFamily: '"Exo 2", sans-serif',
        fontOpticalSizing: 'auto',
        fontWeight: '10px',
        fontStyle: 'normal',
        color: 'black',
        textDecoration: 'none'
    };
    function MouseOver(e) {
        e.target.style.color = 'white';
    }
    function MouseOut(e) {
        e.target.style.color = 'black';
    }
    let pages;
    if (links) {
        pages = links.map((site) => {
            return createElement('a', {
                href: site.url,
                className: `nav_urls_${site.name}`,
                key: site.name,
                style: url_styles,
                onMouseEnter: (e) => MouseOver(e),
                onMouseLeave: (e) => MouseOut(e)
            }, site.name);
        });
    }
    // TODO: make the component responsive
    return (React.createElement("div", Object.assign({ style: _style }, props),
        React.createElement(Helmet, null,
            React.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
            React.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }),
            React.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap", rel: "stylesheet" })),
        pages));
};
//# sourceMappingURL=NavBar.js.map