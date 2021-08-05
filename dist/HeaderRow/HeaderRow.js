"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderRow = function HeaderRow(_ref) {
  var title = _ref.title,
      page = _ref.page;
  return page ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "mt-5"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement("h1", null, title))) : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "mt-7"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "mb-0"
  }, title), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mt-0"
  })));
};

var _default = HeaderRow;
exports.default = _default;