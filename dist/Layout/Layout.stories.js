"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithNavAndFooter = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _index = _interopRequireDefault(require("./index"));

var _index2 = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Layout',
  component: _index.default // argTypes: {
  //     fluid: {control: 'bool'}
  // },

};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_index.default, args, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "mt-5"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement("p", null, "This is a layout"))));
};

var WithNavAndFooterTemplate = function WithNavAndFooterTemplate(args) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index2.Navbar, {
    title: "Example"
  }), /*#__PURE__*/_react.default.createElement(_index.default, args, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "mt-5"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement("p", null, "This is a layout")))), /*#__PURE__*/_react.default.createElement(_index2.Footer, {
    email: "EMAIL",
    phone: "PHONE"
  }));
};

var Default = Template.bind({});
exports.Default = Default;
var WithNavAndFooter = WithNavAndFooterTemplate.bind({});
exports.WithNavAndFooter = WithNavAndFooter;
Default.args = {
  fluid: false,
  footer: true,
  websiteTitle: 'Default',
  showWebsiteTitle: true,
  pageTitle: 'Page Title',
  jumbotronBg: 'warning',
  navBg: 'danger',
  navBorder: true,
  seoDescription: 'This is a description',
  seoUrl: 'http://www.example.com',
  footerEmail: 'hello@womensbusiness.club',
  footerPhone: '555 555 555'
};