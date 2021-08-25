"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _logo = _interopRequireDefault(require("./logo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(_ref) {
  var title = _ref.title,
      bg = _ref.bg,
      border = _ref.border,
      brandImage = _ref.brandImage,
      children = _ref.children,
      collapse = _ref.collapse;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    bg: bg ? bg : 'dark',
    variant: "dark",
    expand: "sm",
    style: {
      marginBottom: '-1px'
    },
    className: border && 'navbar-border-bottom'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, title && !brandImage && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, {
    href: "/",
    className: "font-weight-bold"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    style: {
      width: '50px',
      marginRight: '1rem'
    }
  }), title), brandImage && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, {
    href: "/",
    className: "navbar-custom-brand-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: brandImage
  })), collapse ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "ml-auto"
  }, children))) : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "ml-auto"
  }, children))));
};

var _default = NavBar;
exports.default = _default;