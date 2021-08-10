"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    style: containerStyle
  }, children));
};

var _default = Section;
exports.default = _default;