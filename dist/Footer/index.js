"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Section = _interopRequireDefault(require("../Section"));

var _footerTop = _interopRequireDefault(require("./footer-top.svg"));

var _reactBootstrap = require("react-bootstrap");

var _facebook = _interopRequireDefault(require("./facebook.svg"));

var _instagram = _interopRequireDefault(require("./instagram.svg"));

var _youtube = _interopRequireDefault(require("./youtube.svg"));

var _linkedin = _interopRequireDefault(require("./linkedin.svg"));

var _twitter = _interopRequireDefault(require("./twitter.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var email = _ref.email,
      phone = _ref.phone,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_Section.default, {
    bg: "none",
    color: "dark",
    className: "mt-5",
    style: {
      background: "url(".concat(_footerTop.default, ") no-repeat"),
      backgroundSize: 'cover',
      paddingTop: '13rem',
      paddingBottom: '6.5rem'
    }
  }, children, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "mt-4"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "text-dark text-md-right"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Contact"), /*#__PURE__*/_react.default.createElement("p", null, email, /*#__PURE__*/_react.default.createElement("br", null), phone))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "mt-5"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    xs: 12,
    md: 6,
    className: "text-dark"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://womensbusiness.club",
    target: "_blank",
    rel: "noreferrer",
    className: "text-dark"
  }, "Women's Business Club"), ' ', "\xA9 ", new Date().getFullYear())), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "text-md-right"
  }, /*#__PURE__*/_react.default.createElement(SocialLink, {
    url: "https://www.facebook.com/wombizclub",
    service: "facebook",
    img: _facebook.default
  }), /*#__PURE__*/_react.default.createElement(SocialLink, {
    url: "https://instagram.com/wombizclub",
    service: "instagram",
    img: _instagram.default
  }), /*#__PURE__*/_react.default.createElement(SocialLink, {
    url: "https://www.youtube.com/user/wombizclub",
    service: "youtube",
    img: _youtube.default
  }), /*#__PURE__*/_react.default.createElement(SocialLink, {
    url: "https://www.linkedin.com/company/women's-business-club/",
    service: "linkedin",
    img: _linkedin.default
  }), /*#__PURE__*/_react.default.createElement(SocialLink, {
    url: "https://twitter.com/wombizclub",
    service: "twitter",
    img: _twitter.default
  }))));
}; // Make sure the icon filename is the same as the service here.


var SocialLink = function SocialLink(_ref2) {
  var url = _ref2.url,
      service = _ref2.service,
      img = _ref2.img;
  return /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer",
    className: "ml-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: img,
    alt: service
  }));
};

var _default = Footer;
exports.default = _default;