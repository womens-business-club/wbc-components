"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Navbar',
  component: _index.default // argTypes: {
  //     bg: {control: 'dropdown'}
  // },

};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_index.default, args, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "#home"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "#link"
  }, "Link"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavDropdown, {
    title: "Locations",
    id: "basic-nav-dropdown"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavDropdown.Item, {
    href: "/about"
  }, "Example 1"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavDropdown.Item, {
    href: "/success-story"
  }, "Success Story")));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  bg: '',
  title: 'Navbar Title',
  border: true,

  /** Max height: 50px */
  brandImage: 'http://placehold.co/200x50'
};