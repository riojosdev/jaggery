"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
const react_1 = __importStar(require("react"));
const react_helmet_1 = require("react-helmet");
const NavBar = (props) => {
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
            return (0, react_1.createElement)('a', {
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
    return (react_1.default.createElement("div", Object.assign({ style: _style }, props),
        react_1.default.createElement(react_helmet_1.Helmet, null,
            react_1.default.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
            react_1.default.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }),
            react_1.default.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap", rel: "stylesheet" })),
        pages));
};
exports.NavBar = NavBar;
//# sourceMappingURL=NavBar.js.map