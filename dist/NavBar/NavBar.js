"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _navBottom = _interopRequireDefault(require("./nav-bottom.svg"));

var _logo = _interopRequireDefault(require("./logo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(_ref) {
  var title = _ref.title,
      navBg = _ref.navBg;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    bg: navBg ? navBg : 'dark',
    variant: "dark",
    expand: "lg",
    style: {
      marginBottom: '-1px'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, title && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    style: {
      width: '50px',
      marginRight: '1rem'
    }
  }), title), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "ml-auto"
  }))));
};

var _default = NavBar;
exports.default = _default;