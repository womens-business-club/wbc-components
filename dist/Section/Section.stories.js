"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Section = _interopRequireDefault(require("./Section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Section',
  component: _Section.default
};
exports.default = _default;

var Template = function Template() {
  return /*#__PURE__*/_react.default.createElement(_Section.default, {
    bg: "primary"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Section"));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  bg: 'primary'
};