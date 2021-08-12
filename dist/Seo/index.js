"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Seo = function Seo(_ref) {
  var title = _ref.title,
      websiteTitle = _ref.websiteTitle,
      description = _ref.description,
      url = _ref.url,
      statcounterProject = _ref.statcounterProject,
      statcounterSecurity = _ref.statcounterSecurity,
      enableManychat = _ref.enableManychat;
  var pageTitle = title ? "".concat(title, " - ").concat(websiteTitle) : websiteTitle;
  var image = "/img/og-image.png";
  var favicon = "/img/favion.svg"; // 1200 pixels x 627 pixels

  return /*#__PURE__*/_react.default.createElement(_reactHelmet.default, null, /*#__PURE__*/_react.default.createElement("title", null, pageTitle), /*#__PURE__*/_react.default.createElement("link", {
    rel: "icon",
    href: favicon
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "image",
    content: image
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:url",
    content: url
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:description",
    content: description
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:image",
    content: image
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:creator",
    content: "wombizclub"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:description",
    content: description
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:image",
    content: image
  }), /*#__PURE__*/_react.default.createElement("script", {
    type: "text/javascript"
  }, "\n                    var sc_project=".concat(statcounterProject, "; \n                    var sc_invisible=1; \n                    var sc_security=\"").concat(statcounterSecurity, "\"; \n                ")), /*#__PURE__*/_react.default.createElement("script", {
    type: "text/javascript",
    src: "https://www.statcounter.com/counter/counter.js",
    async: true
  }), /*#__PURE__*/_react.default.createElement("noscript", null, "\n                    <div class=\"statcounter\"><a title=\"Web Analytics\"\n                    href=\"https://statcounter.com/\" target=\"_blank\"><img\n                    class=\"statcounter\"\n                    src=\"https://c.statcounter.com/".concat(statcounterProject, "/0/").concat(statcounterSecurity, "/1/\"\n                    alt=\"Web Analytics\"></a></div>\n                ")), /*#__PURE__*/_react.default.createElement("script", null, "\n                    !function(f,b,e,v,n,t,s)\n                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n                    n.queue=[];t=b.createElement(e);t.async=!0;\n                    t.src=v;s=b.getElementsByTagName(e)[0];\n                    s.parentNode.insertBefore(t,s)}(window, document,'script',\n                    'https://connect.facebook.net/en_US/fbevents.js');\n                    fbq('init', '273163263693055');\n                    fbq('track', 'PageView');\n                "), /*#__PURE__*/_react.default.createElement("noscript", null, "\n                    <img height=\"1\" width=\"1\" style=\"display:none\"\n                    src=\"https://www.facebook.com/tr?id=273163263693055&ev=PageView&noscript=1\"\n                    />\n                "), enableManychat && /*#__PURE__*/_react.default.createElement("script", {
    src: "//widget.manychat.com/100627041859174.js",
    async: "async"
  }), /*#__PURE__*/_react.default.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-112106197-1"
  }), /*#__PURE__*/_react.default.createElement("script", null, "\n                    window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());  gtag('config', 'UA-112106197-1');\n                "), /*#__PURE__*/_react.default.createElement("script", {
    type: "text/javascript"
  }, "\n                    _linkedin_partner_id = \"86082\";\n                    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];\n                    window._linkedin_data_partner_ids.push(_linkedin_partner_id);\n                "), /*#__PURE__*/_react.default.createElement("script", {
    type: "text/javascript"
  }, "\n                    (function(){var s = document.getElementsByTagName(\"script\")[0];\n                    var b = document.createElement(\"script\");\n                    b.type = \"text/javascript\";b.async = true;\n                    b.src = \"https://snap.licdn.com/li.lms-analytics/insight.min.js\";\n                    s.parentNode.insertBefore(b, s);})();\n                "), /*#__PURE__*/_react.default.createElement("noscript", null, "\n                    <img height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https://dc.ads.linkedin.com/collect/?pid=86082&fmt=gif\" />\n                "));
};

var _default = Seo;
exports.default = _default;