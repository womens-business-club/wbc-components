"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _Layout = _interopRequireDefault(require("./Layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Layout',
  component: _Layout.default // argTypes: {
  //     fluid: {control: 'bool'}
  // },

};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, args, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "mt-5"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement("p", null, "This is a layout"))));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  fluid: false,
  footer: true,
  title: 'Default',
  pageTitle: 'Page Title',
  jumbotronBg: ''
};