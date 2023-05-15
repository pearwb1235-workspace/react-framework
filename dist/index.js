!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t(require("react"));
  else if ("function" == typeof define && define.amd) define(["React"], t);
  else {
    var r = "object" == typeof exports ? t(require("react")) : t(e.React);
    for (var o in r) ("object" == typeof exports ? exports : e)[o] = r[o];
  }
})(self, (e) =>
  (() => {
    "use strict";
    var t = {
        639: (t) => {
          t.exports = e;
        },
      },
      r = {};
    function o(e) {
      var n = r[e];
      if (void 0 !== n) return n.exports;
      var a = (r[e] = { exports: {} });
      return t[e](a, a.exports, o), a.exports;
    }
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
      (o.d = (e, t) => {
        for (var r in t)
          o.o(t, r) &&
            !o.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (o.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        o.r(n), o.d(n, { default: () => r });
        var e = o(639),
          t = o.n(e);
        function r() {
          return t().createElement(t().Fragment, null);
        }
      })(),
      n
    );
  })()
);
