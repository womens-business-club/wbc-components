"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("react-bootstrap/Container"));

var _Jumbotron = _interopRequireDefault(require("react-bootstrap/Jumbotron"));

var _Seo = _interopRequireDefault(require("../Seo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Layout = function Layout(_ref) {
  var fluid = _ref.fluid,
      footer = _ref.footer,
      children = _ref.children,
      websiteTitle = _ref.websiteTitle,
      pageTitle = _ref.pageTitle,
      jumbotronBg = _ref.jumbotronBg,
      style = _ref.style,
      seoDescription = _ref.seoDescription,
      seoUrl = _ref.seoUrl,
      seoStatcounterProject = _ref.seoStatcounterProject,
      seoStatcounterSecurity = _ref.seoStatcounterSecurity,
      seoEnableManychat = _ref.seoEnableManychat;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Seo.default, {
    title: pageTitle,
    websiteTitle: websiteTitle,
    description: seoDescription,
    url: seoUrl,
    statcounterProject: seoStatcounterProject,
    statcounterSecurity: seoStatcounterSecurity,
    enableManychat: seoEnableManychat
  }), pageTitle && /*#__PURE__*/React.createElement(_Jumbotron.default, {
    className: jumbotronBg ? "bg-".concat(jumbotronBg, " text-white rounded-0") : "bg-dark text-white rounded-0"
  }, /*#__PURE__*/React.createElement(_Container.default, null, /*#__PURE__*/React.createElement("h1", {
    className: "display-4 font-weight-bold"
  }, pageTitle))), /*#__PURE__*/React.createElement(_Container.default, {
    style: _objectSpread(_objectSpread({}, style), {}, {
      overflow: 'hidden'
    }),
    fluid: fluid
  }, children));
};

var _default = Layout;
exports.default = _default;