"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Section = function Section(_ref) {
  var bg = _ref.bg,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      fluid = _ref.fluid;
  var removeEdges = {
    marginRight: "-15px",
    marginLeft: "-15px"
  };

  var containerStyle = function containerStyle() {
    if (fluid) {
      return {
        marginRight: "-15px",
        marginLeft: "-15px"
      };
    } else {
      return {};
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    className: "section bg-".concat(bg, " ").concat(className)
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    fluid: fluid,
    style: fluid && _objectSpread({}, removeEdges)
  }, children));
};

var _default = Section;
exports.default = _default;