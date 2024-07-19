"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
const react_1 = __importDefault(require("react"));
const NavBar = (props) => {
    const { children
    // backgroundColor, color, style
     } = props;
    // let _style: React.CSSProperties = style || {};
    let _style = {
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
    return (react_1.default.createElement("div", Object.assign({ style: _style }, props), children));
};
exports.NavBar = NavBar;
//# sourceMappingURL=NavBar.js.map