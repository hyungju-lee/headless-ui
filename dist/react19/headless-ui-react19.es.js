var l0 = Object.defineProperty;
var u0 = (e, t, n) => t in e ? l0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var z = (e, t, n) => u0(e, typeof t != "symbol" ? t + "" : t, n);
import * as yl from "react";
import re, { useRef as bt, useEffect as vt, createContext as Pe, useState as yt, useContext as Tt, useMemo as Ge, forwardRef as ri, useImperativeHandle as zs, useId as Kr, useInsertionEffect as Up, useCallback as bl, Children as h0, isValidElement as Yp, useLayoutEffect as d0, Fragment as Gp, createElement as Kp, Component as f0, cloneElement as p0, useDebugValue as Uu } from "react";
var Po = { exports: {} }, yi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yu;
function g0() {
  if (Yu) return yi;
  Yu = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(s, i, o) {
    var r = null;
    if (o !== void 0 && (r = "" + o), i.key !== void 0 && (r = "" + i.key), "key" in i) {
      o = {};
      for (var a in i)
        a !== "key" && (o[a] = i[a]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: s,
      key: r,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return yi.Fragment = t, yi.jsx = n, yi.jsxs = n, yi;
}
var bi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gu;
function m0() {
  return Gu || (Gu = 1, process.env.NODE_ENV !== "production" && function() {
    function e(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === Q ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case w:
          return "Fragment";
        case v:
          return "Portal";
        case P:
          return "Profiler";
        case A:
          return "StrictMode";
        case C:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case T:
            return (S.displayName || "Context") + ".Provider";
          case M:
            return (S._context.displayName || "Context") + ".Consumer";
          case D:
            var $ = S.render;
            return S = S.displayName, S || (S = $.displayName || $.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case G:
            return $ = S.displayName || null, $ !== null ? $ : e(S.type) || "Memo";
          case W:
            $ = S._payload, S = S._init;
            try {
              return e(S($));
            } catch {
            }
        }
      return null;
    }
    function t(S) {
      return "" + S;
    }
    function n(S) {
      try {
        t(S);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var Y = $.error, ot = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return Y.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ot
        ), t(S);
      }
    }
    function s() {
    }
    function i() {
      if (U === 0) {
        O = console.log, X = console.info, V = console.warn, N = console.error, nt = console.group, ct = console.groupCollapsed, ht = console.groupEnd;
        var S = {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        };
        Object.defineProperties(console, {
          info: S,
          log: S,
          warn: S,
          error: S,
          group: S,
          groupCollapsed: S,
          groupEnd: S
        });
      }
      U++;
    }
    function o() {
      if (U--, U === 0) {
        var S = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: K({}, S, { value: O }),
          info: K({}, S, { value: X }),
          warn: K({}, S, { value: V }),
          error: K({}, S, { value: N }),
          group: K({}, S, { value: nt }),
          groupCollapsed: K({}, S, { value: ct }),
          groupEnd: K({}, S, { value: ht })
        });
      }
      0 > U && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function r(S) {
      if (lt === void 0)
        try {
          throw Error();
        } catch (Y) {
          var $ = Y.stack.trim().match(/\n( *(at )?)/);
          lt = $ && $[1] || "", _t = -1 < Y.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < Y.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + lt + S + _t;
    }
    function a(S, $) {
      if (!S || ut) return "";
      var Y = xt.get(S);
      if (Y !== void 0) return Y;
      ut = !0, Y = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var ot = null;
      ot = q.H, q.H = null, i();
      try {
        var Ft = {
          DetermineComponentFrameRoot: function() {
            try {
              if ($) {
                var Me = function() {
                  throw Error();
                };
                if (Object.defineProperty(Me.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Me, []);
                  } catch (Gt) {
                    var Xe = Gt;
                  }
                  Reflect.construct(S, [], Me);
                } else {
                  try {
                    Me.call();
                  } catch (Gt) {
                    Xe = Gt;
                  }
                  S.call(Me.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Gt) {
                  Xe = Gt;
                }
                (Me = S()) && typeof Me.catch == "function" && Me.catch(function() {
                });
              }
            } catch (Gt) {
              if (Gt && Xe && typeof Gt.stack == "string")
                return [Gt.stack, Xe.stack];
            }
            return [null, null];
          }
        };
        Ft.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var St = Object.getOwnPropertyDescriptor(
          Ft.DetermineComponentFrameRoot,
          "name"
        );
        St && St.configurable && Object.defineProperty(
          Ft.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var at = Ft.DetermineComponentFrameRoot(), ge = at[0], ae = at[1];
        if (ge && ae) {
          var zt = ge.split(`
`), Te = ae.split(`
`);
          for (at = St = 0; St < zt.length && !zt[St].includes(
            "DetermineComponentFrameRoot"
          ); )
            St++;
          for (; at < Te.length && !Te[at].includes(
            "DetermineComponentFrameRoot"
          ); )
            at++;
          if (St === zt.length || at === Te.length)
            for (St = zt.length - 1, at = Te.length - 1; 1 <= St && 0 <= at && zt[St] !== Te[at]; )
              at--;
          for (; 1 <= St && 0 <= at; St--, at--)
            if (zt[St] !== Te[at]) {
              if (St !== 1 || at !== 1)
                do
                  if (St--, at--, 0 > at || zt[St] !== Te[at]) {
                    var je = `
` + zt[St].replace(
                      " at new ",
                      " at "
                    );
                    return S.displayName && je.includes("<anonymous>") && (je = je.replace("<anonymous>", S.displayName)), typeof S == "function" && xt.set(S, je), je;
                  }
                while (1 <= St && 0 <= at);
              break;
            }
        }
      } finally {
        ut = !1, q.H = ot, o(), Error.prepareStackTrace = Y;
      }
      return zt = (zt = S ? S.displayName || S.name : "") ? r(zt) : "", typeof S == "function" && xt.set(S, zt), zt;
    }
    function c(S) {
      if (S == null) return "";
      if (typeof S == "function") {
        var $ = S.prototype;
        return a(
          S,
          !(!$ || !$.isReactComponent)
        );
      }
      if (typeof S == "string") return r(S);
      switch (S) {
        case C:
          return r("Suspense");
        case I:
          return r("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case D:
            return S = a(S.render, !1), S;
          case G:
            return c(S.type);
          case W:
            $ = S._payload, S = S._init;
            try {
              return c(S($));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var S = q.A;
      return S === null ? null : S.getOwner();
    }
    function u(S) {
      if (st.call(S, "key")) {
        var $ = Object.getOwnPropertyDescriptor(S, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function h(S, $) {
      function Y() {
        Vt || (Vt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: Y,
        configurable: !0
      });
    }
    function d() {
      var S = e(this.type);
      return Rt[S] || (Rt[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function f(S, $, Y, ot, Ft, St) {
      return Y = St.ref, S = {
        $$typeof: x,
        type: S,
        key: $,
        props: St,
        _owner: Ft
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function p(S, $, Y, ot, Ft, St) {
      if (typeof S == "string" || typeof S == "function" || S === w || S === P || S === A || S === C || S === I || S === H || typeof S == "object" && S !== null && (S.$$typeof === W || S.$$typeof === G || S.$$typeof === T || S.$$typeof === M || S.$$typeof === D || S.$$typeof === k || S.getModuleId !== void 0)) {
        var at = $.children;
        if (at !== void 0)
          if (ot)
            if (B(at)) {
              for (ot = 0; ot < at.length; ot++)
                g(at[ot], S);
              Object.freeze && Object.freeze(at);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else g(at, S);
      } else
        at = "", (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (at += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), S === null ? ot = "null" : B(S) ? ot = "array" : S !== void 0 && S.$$typeof === x ? (ot = "<" + (e(S.type) || "Unknown") + " />", at = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof S, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          ot,
          at
        );
      if (st.call($, "key")) {
        at = e(S);
        var ge = Object.keys($).filter(function(zt) {
          return zt !== "key";
        });
        ot = 0 < ge.length ? "{key: someKey, " + ge.join(": ..., ") + ": ...}" : "{key: someKey}", Dt[at + ot] || (ge = 0 < ge.length ? "{" + ge.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ot,
          at,
          ge,
          at
        ), Dt[at + ot] = !0);
      }
      if (at = null, Y !== void 0 && (n(Y), at = "" + Y), u($) && (n($.key), at = "" + $.key), "key" in $) {
        Y = {};
        for (var ae in $)
          ae !== "key" && (Y[ae] = $[ae]);
      } else Y = $;
      return at && h(
        Y,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), f(S, at, St, Ft, l(), Y);
    }
    function g(S, $) {
      if (typeof S == "object" && S && S.$$typeof !== Qt) {
        if (B(S))
          for (var Y = 0; Y < S.length; Y++) {
            var ot = S[Y];
            m(ot) && y(ot, $);
          }
        else if (m(S))
          S._store && (S._store.validated = 1);
        else if (S === null || typeof S != "object" ? Y = null : (Y = j && S[j] || S["@@iterator"], Y = typeof Y == "function" ? Y : null), typeof Y == "function" && Y !== S.entries && (Y = Y.call(S), Y !== S))
          for (; !(S = Y.next()).done; )
            m(S.value) && y(S.value, $);
      }
    }
    function m(S) {
      return typeof S == "object" && S !== null && S.$$typeof === x;
    }
    function y(S, $) {
      if (S._store && !S._store.validated && S.key == null && (S._store.validated = 1, $ = b($), !kt[$])) {
        kt[$] = !0;
        var Y = "";
        S && S._owner != null && S._owner !== l() && (Y = null, typeof S._owner.tag == "number" ? Y = e(S._owner.type) : typeof S._owner.name == "string" && (Y = S._owner.name), Y = " It was passed a child from " + Y + ".");
        var ot = q.getCurrentStack;
        q.getCurrentStack = function() {
          var Ft = c(S.type);
          return ot && (Ft += ot() || ""), Ft;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          $,
          Y
        ), q.getCurrentStack = ot;
      }
    }
    function b(S) {
      var $ = "", Y = l();
      return Y && (Y = e(Y.type)) && ($ = `

Check the render method of \`` + Y + "`."), $ || (S = e(S)) && ($ = `

Check the top-level render call using <` + S + ">."), $;
    }
    var _ = re, x = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), T = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), j = Symbol.iterator, Q = Symbol.for("react.client.reference"), q = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, st = Object.prototype.hasOwnProperty, K = Object.assign, k = Symbol.for("react.client.reference"), B = Array.isArray, U = 0, O, X, V, N, nt, ct, ht;
    s.__reactDisabledLog = !0;
    var lt, _t, ut = !1, xt = new (typeof WeakMap == "function" ? WeakMap : Map)(), Qt = Symbol.for("react.client.reference"), Vt, Rt = {}, Dt = {}, kt = {};
    bi.Fragment = w, bi.jsx = function(S, $, Y, ot, Ft) {
      return p(S, $, Y, !1, ot, Ft);
    }, bi.jsxs = function(S, $, Y, ot, Ft) {
      return p(S, $, Y, !0, ot, Ft);
    };
  }()), bi;
}
var Ku;
function y0() {
  return Ku || (Ku = 1, process.env.NODE_ENV === "production" ? Po.exports = g0() : Po.exports = m0()), Po.exports;
}
var E = y0();
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function mo(e) {
  return e + 0.5 | 0;
}
const On = (e, t, n) => Math.max(Math.min(e, n), t);
function Ti(e) {
  return On(mo(e * 2.55), 0, 255);
}
function Nn(e) {
  return On(mo(e * 255), 0, 255);
}
function bn(e) {
  return On(mo(e / 2.55) / 100, 0, 1);
}
function Xu(e) {
  return On(mo(e * 100), 0, 100);
}
const Le = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, hc = [..."0123456789ABCDEF"], b0 = (e) => hc[e & 15], v0 = (e) => hc[(e & 240) >> 4] + hc[e & 15], To = (e) => (e & 240) >> 4 === (e & 15), x0 = (e) => To(e.r) && To(e.g) && To(e.b) && To(e.a);
function _0(e) {
  var t = e.length, n;
  return e[0] === "#" && (t === 4 || t === 5 ? n = {
    r: 255 & Le[e[1]] * 17,
    g: 255 & Le[e[2]] * 17,
    b: 255 & Le[e[3]] * 17,
    a: t === 5 ? Le[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (n = {
    r: Le[e[1]] << 4 | Le[e[2]],
    g: Le[e[3]] << 4 | Le[e[4]],
    b: Le[e[5]] << 4 | Le[e[6]],
    a: t === 9 ? Le[e[7]] << 4 | Le[e[8]] : 255
  })), n;
}
const w0 = (e, t) => e < 255 ? t(e) : "";
function S0(e) {
  var t = x0(e) ? b0 : v0;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + w0(e.a, t) : void 0;
}
const A0 = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Xp(e, t, n) {
  const s = t * Math.min(n, 1 - n), i = (o, r = (o + e / 30) % 12) => n - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [i(0), i(8), i(4)];
}
function P0(e, t, n) {
  const s = (i, o = (i + e / 60) % 6) => n - n * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function T0(e, t, n) {
  const s = Xp(e, 1, 0.5);
  let i;
  for (t + n > 1 && (i = 1 / (t + n), t *= i, n *= i), i = 0; i < 3; i++)
    s[i] *= 1 - t - n, s[i] += t;
  return s;
}
function M0(e, t, n, s, i) {
  return e === i ? (t - n) / s + (t < n ? 6 : 0) : t === i ? (n - e) / s + 2 : (e - t) / s + 4;
}
function vl(e) {
  const n = e.r / 255, s = e.g / 255, i = e.b / 255, o = Math.max(n, s, i), r = Math.min(n, s, i), a = (o + r) / 2;
  let c, l, u;
  return o !== r && (u = o - r, l = a > 0.5 ? u / (2 - o - r) : u / (o + r), c = M0(n, s, i, u, o), c = c * 60 + 0.5), [c | 0, l || 0, a];
}
function xl(e, t, n, s) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, s)).map(Nn);
}
function _l(e, t, n) {
  return xl(Xp, e, t, n);
}
function C0(e, t, n) {
  return xl(T0, e, t, n);
}
function k0(e, t, n) {
  return xl(P0, e, t, n);
}
function qp(e) {
  return (e % 360 + 360) % 360;
}
function D0(e) {
  const t = A0.exec(e);
  let n = 255, s;
  if (!t)
    return;
  t[5] !== s && (n = t[6] ? Ti(+t[5]) : Nn(+t[5]));
  const i = qp(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = C0(i, o, r) : t[1] === "hsv" ? s = k0(i, o, r) : s = _l(i, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: n
  };
}
function E0(e, t) {
  var n = vl(e);
  n[0] = qp(n[0] + t), n = _l(n), e.r = n[0], e.g = n[1], e.b = n[2];
}
function O0(e) {
  if (!e)
    return;
  const t = vl(e), n = t[0], s = Xu(t[1]), i = Xu(t[2]);
  return e.a < 255 ? `hsla(${n}, ${s}%, ${i}%, ${bn(e.a)})` : `hsl(${n}, ${s}%, ${i}%)`;
}
const qu = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, Zu = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function R0() {
  const e = {}, t = Object.keys(Zu), n = Object.keys(qu);
  let s, i, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], i = 0; i < n.length; i++)
      o = n[i], a = a.replace(o, qu[o]);
    o = parseInt(Zu[r], 16), e[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let Mo;
function L0(e) {
  Mo || (Mo = R0(), Mo.transparent = [0, 0, 0, 0]);
  const t = Mo[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const I0 = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function N0(e) {
  const t = I0.exec(e);
  let n = 255, s, i, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      n = t[8] ? Ti(r) : On(r * 255, 0, 255);
    }
    return s = +t[1], i = +t[3], o = +t[5], s = 255 & (t[2] ? Ti(s) : On(s, 0, 255)), i = 255 & (t[4] ? Ti(i) : On(i, 0, 255)), o = 255 & (t[6] ? Ti(o) : On(o, 0, 255)), {
      r: s,
      g: i,
      b: o,
      a: n
    };
  }
}
function $0(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${bn(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const Ma = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, Ms = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function V0(e, t, n) {
  const s = Ms(bn(e.r)), i = Ms(bn(e.g)), o = Ms(bn(e.b));
  return {
    r: Nn(Ma(s + n * (Ms(bn(t.r)) - s))),
    g: Nn(Ma(i + n * (Ms(bn(t.g)) - i))),
    b: Nn(Ma(o + n * (Ms(bn(t.b)) - o))),
    a: e.a + n * (t.a - e.a)
  };
}
function Co(e, t, n) {
  if (e) {
    let s = vl(e);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * n, t === 0 ? 360 : 1)), s = _l(s), e.r = s[0], e.g = s[1], e.b = s[2];
  }
}
function Zp(e, t) {
  return e && Object.assign(t || {}, e);
}
function Qu(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = Nn(e[3]))) : (t = Zp(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = Nn(t.a)), t;
}
function F0(e) {
  return e.charAt(0) === "r" ? N0(e) : D0(e);
}
class Gi {
  constructor(t) {
    if (t instanceof Gi)
      return t;
    const n = typeof t;
    let s;
    n === "object" ? s = Qu(t) : n === "string" && (s = _0(t) || L0(t) || F0(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Zp(this._rgb);
    return t && (t.a = bn(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Qu(t);
  }
  rgbString() {
    return this._valid ? $0(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? S0(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? O0(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const s = this.rgb, i = t.rgb;
      let o;
      const r = n === o ? 0.5 : n, a = 2 * r - 1, c = s.a - i.a, l = ((a * c === -1 ? a : (a + c) / (1 + a * c)) + 1) / 2;
      o = 1 - l, s.r = 255 & l * s.r + o * i.r + 0.5, s.g = 255 & l * s.g + o * i.g + 0.5, s.b = 255 & l * s.b + o * i.b + 0.5, s.a = r * s.a + (1 - r) * i.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = V0(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new Gi(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Nn(t), this;
  }
  clearer(t) {
    const n = this._rgb;
    return n.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, n = mo(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = n, this;
  }
  opaquer(t) {
    const n = this._rgb;
    return n.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return Co(this._rgb, 2, t), this;
  }
  darken(t) {
    return Co(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Co(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Co(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return E0(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function dn() {
}
const j0 = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function gt(e) {
  return e == null;
}
function Bt(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function mt(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function Kt(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function Ce(e, t) {
  return Kt(e) ? e : t;
}
function ft(e, t) {
  return typeof e > "u" ? t : e;
}
const B0 = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t, Qp = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function Et(e, t, n) {
  if (e && typeof e.call == "function")
    return e.apply(n, t);
}
function Pt(e, t, n, s) {
  let i, o, r;
  if (Bt(e))
    for (o = e.length, i = 0; i < o; i++)
      t.call(n, e[i], i);
  else if (mt(e))
    for (r = Object.keys(e), o = r.length, i = 0; i < o; i++)
      t.call(n, e[r[i]], r[i]);
}
function vr(e, t) {
  let n, s, i, o;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (n = 0, s = e.length; n < s; ++n)
    if (i = e[n], o = t[n], i.datasetIndex !== o.datasetIndex || i.index !== o.index)
      return !1;
  return !0;
}
function xr(e) {
  if (Bt(e))
    return e.map(xr);
  if (mt(e)) {
    const t = /* @__PURE__ */ Object.create(null), n = Object.keys(e), s = n.length;
    let i = 0;
    for (; i < s; ++i)
      t[n[i]] = xr(e[n[i]]);
    return t;
  }
  return e;
}
function Jp(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function H0(e, t, n, s) {
  if (!Jp(e))
    return;
  const i = t[e], o = n[e];
  mt(i) && mt(o) ? Ki(i, o, s) : t[e] = xr(o);
}
function Ki(e, t, n) {
  const s = Bt(t) ? t : [
    t
  ], i = s.length;
  if (!mt(e))
    return e;
  n = n || {};
  const o = n.merger || H0;
  let r;
  for (let a = 0; a < i; ++a) {
    if (r = s[a], !mt(r))
      continue;
    const c = Object.keys(r);
    for (let l = 0, u = c.length; l < u; ++l)
      o(c[l], e, r, n);
  }
  return e;
}
function Ni(e, t) {
  return Ki(e, t, {
    merger: z0
  });
}
function z0(e, t, n) {
  if (!Jp(e))
    return;
  const s = t[e], i = n[e];
  mt(s) && mt(i) ? Ni(s, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = xr(i));
}
const Ju = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function W0(e) {
  const t = e.split("."), n = [];
  let s = "";
  for (const i of t)
    s += i, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (n.push(s), s = "");
  return n;
}
function U0(e) {
  const t = W0(e);
  return (n) => {
    for (const s of t) {
      if (s === "")
        break;
      n = n && n[s];
    }
    return n;
  };
}
function jn(e, t) {
  return (Ju[t] || (Ju[t] = U0(t)))(e);
}
function wl(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Xi = (e) => typeof e < "u", Bn = (e) => typeof e == "function", th = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
};
function Y0(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const $t = Math.PI, Nt = 2 * $t, G0 = Nt + $t, _r = Number.POSITIVE_INFINITY, K0 = $t / 180, qt = $t / 2, qn = $t / 4, eh = $t * 2 / 3, Rn = Math.log10, sn = Math.sign;
function $i(e, t, n) {
  return Math.abs(e - t) < n;
}
function nh(e) {
  const t = Math.round(e);
  e = $i(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(Rn(e))), s = e / n;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * n;
}
function X0(e) {
  const t = [], n = Math.sqrt(e);
  let s;
  for (s = 1; s < n; s++)
    e % s === 0 && (t.push(s), t.push(e / s));
  return n === (n | 0) && t.push(n), t.sort((i, o) => i - o).pop(), t;
}
function q0(e) {
  return typeof e == "symbol" || typeof e == "object" && e !== null && !(Symbol.toPrimitive in e || "toString" in e || "valueOf" in e);
}
function Ws(e) {
  return !q0(e) && !isNaN(parseFloat(e)) && isFinite(e);
}
function Z0(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function tg(e, t, n) {
  let s, i, o;
  for (s = 0, i = e.length; s < i; s++)
    o = e[s][n], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function ze(e) {
  return e * ($t / 180);
}
function Sl(e) {
  return e * (180 / $t);
}
function sh(e) {
  if (!Kt(e))
    return;
  let t = 1, n = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, n++;
  return n;
}
function eg(e, t) {
  const n = t.x - e.x, s = t.y - e.y, i = Math.sqrt(n * n + s * s);
  let o = Math.atan2(s, n);
  return o < -0.5 * $t && (o += Nt), {
    angle: o,
    distance: i
  };
}
function dc(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Q0(e, t) {
  return (e - t + G0) % Nt - $t;
}
function De(e) {
  return (e % Nt + Nt) % Nt;
}
function qi(e, t, n, s) {
  const i = De(e), o = De(t), r = De(n), a = De(o - i), c = De(r - i), l = De(i - o), u = De(i - r);
  return i === o || i === r || s && o === r || a > c && l < u;
}
function ne(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function J0(e) {
  return ne(e, -32768, 32767);
}
function vn(e, t, n, s = 1e-6) {
  return e >= Math.min(t, n) - s && e <= Math.max(t, n) + s;
}
function Al(e, t, n) {
  n = n || ((r) => e[r] < t);
  let s = e.length - 1, i = 0, o;
  for (; s - i > 1; )
    o = i + s >> 1, n(o) ? i = o : s = o;
  return {
    lo: i,
    hi: s
  };
}
const xn = (e, t, n, s) => Al(e, n, s ? (i) => {
  const o = e[i][t];
  return o < n || o === n && e[i + 1][t] === n;
} : (i) => e[i][t] < n), tv = (e, t, n) => Al(e, n, (s) => e[s][t] >= n);
function ev(e, t, n) {
  let s = 0, i = e.length;
  for (; s < i && e[s] < t; )
    s++;
  for (; i > s && e[i - 1] > n; )
    i--;
  return s > 0 || i < e.length ? e.slice(s, i) : e;
}
const ng = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function nv(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), ng.forEach((n) => {
    const s = "_onData" + wl(n), i = e[n];
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = i.apply(this, o);
        return e._chartjs.listeners.forEach((a) => {
          typeof a[s] == "function" && a[s](...o);
        }), r;
      }
    });
  });
}
function ih(e, t) {
  const n = e._chartjs;
  if (!n)
    return;
  const s = n.listeners, i = s.indexOf(t);
  i !== -1 && s.splice(i, 1), !(s.length > 0) && (ng.forEach((o) => {
    delete e[o];
  }), delete e._chartjs);
}
function sg(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const ig = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function og(e, t) {
  let n = [], s = !1;
  return function(...i) {
    n = i, s || (s = !0, ig.call(window, () => {
      s = !1, e.apply(t, n);
    }));
  };
}
function sv(e, t) {
  let n;
  return function(...s) {
    return t ? (clearTimeout(n), n = setTimeout(e, t, s)) : e.apply(this, s), t;
  };
}
const Pl = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", ue = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2, iv = (e, t, n, s) => e === (s ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function rg(e, t, n) {
  const s = t.length;
  let i = 0, o = s;
  if (e._sorted) {
    const { iScale: r, vScale: a, _parsed: c } = e, l = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null, u = r.axis, { min: h, max: d, minDefined: f, maxDefined: p } = r.getUserBounds();
    if (f) {
      if (i = Math.min(
        // @ts-expect-error Need to type _parsed
        xn(c, u, h).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        n ? s : xn(t, u, r.getPixelForValue(h)).lo
      ), l) {
        const g = c.slice(0, i + 1).reverse().findIndex((m) => !gt(m[a.axis]));
        i -= Math.max(0, g);
      }
      i = ne(i, 0, s - 1);
    }
    if (p) {
      let g = Math.max(
        // @ts-expect-error Need to type _parsed
        xn(c, r.axis, d, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        n ? 0 : xn(t, u, r.getPixelForValue(d), !0).hi + 1
      );
      if (l) {
        const m = c.slice(g - 1).findIndex((y) => !gt(y[a.axis]));
        g += Math.max(0, m);
      }
      o = ne(g, i, s) - i;
    } else
      o = s - i;
  }
  return {
    start: i,
    count: o
  };
}
function ag(e) {
  const { xScale: t, yScale: n, _scaleRanges: s } = e, i = {
    xmin: t.min,
    xmax: t.max,
    ymin: n.min,
    ymax: n.max
  };
  if (!s)
    return e._scaleRanges = i, !0;
  const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== n.min || s.ymax !== n.max;
  return Object.assign(s, i), o;
}
const ko = (e) => e === 0 || e === 1, oh = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * Nt / n)), rh = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * Nt / n) + 1, Vi = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => -e * (e - 2),
  easeInOutQuad: (e) => (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => (e -= 1) * e * e + 1,
  easeInOutCubic: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
  easeInOutQuart: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
  easeInOutQuint: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
  easeInSine: (e) => -Math.cos(e * qt) + 1,
  easeOutSine: (e) => Math.sin(e * qt),
  easeInOutSine: (e) => -0.5 * (Math.cos($t * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => ko(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => ko(e) ? e : oh(e, 0.075, 0.3),
  easeOutElastic: (e) => ko(e) ? e : rh(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return ko(e) ? e : e < 0.5 ? 0.5 * oh(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * rh(e * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(e) {
    return e * e * ((1.70158 + 1) * e - 1.70158);
  },
  easeOutBack(e) {
    return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
  },
  easeInOutBack(e) {
    let t = 1.70158;
    return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  },
  easeInBounce: (e) => 1 - Vi.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? Vi.easeInBounce(e * 2) * 0.5 : Vi.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function Tl(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function ah(e) {
  return Tl(e) ? e : new Gi(e);
}
function Ca(e) {
  return Tl(e) ? e : new Gi(e).saturate(0.5).darken(0.1).hexString();
}
const ov = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], rv = [
  "color",
  "borderColor",
  "backgroundColor"
];
function av(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), e.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), e.set("animations", {
    colors: {
      type: "color",
      properties: rv
    },
    numbers: {
      type: "number",
      properties: ov
    }
  }), e.describe("animations", {
    _fallback: "animation"
  }), e.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function cv(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const ch = /* @__PURE__ */ new Map();
function lv(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let s = ch.get(n);
  return s || (s = new Intl.NumberFormat(e, t), ch.set(n, s)), s;
}
function yo(e, t, n) {
  return lv(t, n).format(e);
}
const cg = {
  values(e) {
    return Bt(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0)
      return "0";
    const s = this.chart.options.locale;
    let i, o = e;
    if (n.length > 1) {
      const l = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (l < 1e-4 || l > 1e15) && (i = "scientific"), o = uv(e, n);
    }
    const r = Rn(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), c = {
      notation: i,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(c, this.options.ticks.format), yo(e, s, c);
  },
  logarithmic(e, t, n) {
    if (e === 0)
      return "0";
    const s = n[t].significand || e / Math.pow(10, Math.floor(Rn(e)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(s) || t > 0.8 * n.length ? cg.numeric.call(this, e, t, n) : "";
  }
};
function uv(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var Xr = {
  formatters: cg
};
function hv(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Xr.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), e.route("scale.ticks", "color", "", "color"), e.route("scale.grid", "color", "", "borderColor"), e.route("scale.border", "color", "", "borderColor"), e.route("scale.title", "color", "", "color"), e.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), e.describe("scales", {
    _fallback: "scale"
  }), e.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const ms = /* @__PURE__ */ Object.create(null), fc = /* @__PURE__ */ Object.create(null);
function Fi(e, t) {
  if (!t)
    return e;
  const n = t.split(".");
  for (let s = 0, i = n.length; s < i; ++s) {
    const o = n[s];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function ka(e, t, n) {
  return typeof t == "string" ? Ki(Fi(e, t), n) : Ki(Fi(e, ""), t);
}
class dv {
  constructor(t, n) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (s, i) => Ca(i.backgroundColor), this.hoverBorderColor = (s, i) => Ca(i.borderColor), this.hoverColor = (s, i) => Ca(i.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(n);
  }
  set(t, n) {
    return ka(this, t, n);
  }
  get(t) {
    return Fi(this, t);
  }
  describe(t, n) {
    return ka(fc, t, n);
  }
  override(t, n) {
    return ka(ms, t, n);
  }
  route(t, n, s, i) {
    const o = Fi(this, t), r = Fi(this, s), a = "_" + n;
    Object.defineProperties(o, {
      [a]: {
        value: o[n],
        writable: !0
      },
      [n]: {
        enumerable: !0,
        get() {
          const c = this[a], l = r[i];
          return mt(c) ? Object.assign({}, l, c) : ft(c, l);
        },
        set(c) {
          this[a] = c;
        }
      }
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var Ht = /* @__PURE__ */ new dv({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  av,
  cv,
  hv
]);
function fv(e) {
  return !e || gt(e.size) || gt(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function wr(e, t, n, s, i) {
  let o = t[i];
  return o || (o = t[i] = e.measureText(i).width, n.push(i)), o > s && (s = o), s;
}
function pv(e, t, n, s) {
  s = s || {};
  let i = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (i = s.data = {}, o = s.garbageCollect = [], s.font = t), e.save(), e.font = t;
  let r = 0;
  const a = n.length;
  let c, l, u, h, d;
  for (c = 0; c < a; c++)
    if (h = n[c], h != null && !Bt(h))
      r = wr(e, i, o, r, h);
    else if (Bt(h))
      for (l = 0, u = h.length; l < u; l++)
        d = h[l], d != null && !Bt(d) && (r = wr(e, i, o, r, d));
  e.restore();
  const f = o.length / 2;
  if (f > n.length) {
    for (c = 0; c < f; c++)
      delete i[o[c]];
    o.splice(0, f);
  }
  return r;
}
function Zn(e, t, n) {
  const s = e.currentDevicePixelRatio, i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - i) * s) / s + i;
}
function lh(e, t) {
  !t && !e || (t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore());
}
function pc(e, t, n, s) {
  lg(e, t, n, s, null);
}
function lg(e, t, n, s, i) {
  let o, r, a, c, l, u, h, d;
  const f = t.pointStyle, p = t.rotation, g = t.radius;
  let m = (p || 0) * K0;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(n, s), e.rotate(m), e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), e.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (e.beginPath(), f) {
      // Default includes circle
      default:
        i ? e.ellipse(n, s, i / 2, g, 0, 0, Nt) : e.arc(n, s, g, 0, Nt), e.closePath();
        break;
      case "triangle":
        u = i ? i / 2 : g, e.moveTo(n + Math.sin(m) * u, s - Math.cos(m) * g), m += eh, e.lineTo(n + Math.sin(m) * u, s - Math.cos(m) * g), m += eh, e.lineTo(n + Math.sin(m) * u, s - Math.cos(m) * g), e.closePath();
        break;
      case "rectRounded":
        l = g * 0.516, c = g - l, r = Math.cos(m + qn) * c, h = Math.cos(m + qn) * (i ? i / 2 - l : c), a = Math.sin(m + qn) * c, d = Math.sin(m + qn) * (i ? i / 2 - l : c), e.arc(n - h, s - a, l, m - $t, m - qt), e.arc(n + d, s - r, l, m - qt, m), e.arc(n + h, s + a, l, m, m + qt), e.arc(n - d, s + r, l, m + qt, m + $t), e.closePath();
        break;
      case "rect":
        if (!p) {
          c = Math.SQRT1_2 * g, u = i ? i / 2 : c, e.rect(n - u, s - c, 2 * u, 2 * c);
          break;
        }
        m += qn;
      /* falls through */
      case "rectRot":
        h = Math.cos(m) * (i ? i / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, d = Math.sin(m) * (i ? i / 2 : g), e.moveTo(n - h, s - a), e.lineTo(n + d, s - r), e.lineTo(n + h, s + a), e.lineTo(n - d, s + r), e.closePath();
        break;
      case "crossRot":
        m += qn;
      /* falls through */
      case "cross":
        h = Math.cos(m) * (i ? i / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, d = Math.sin(m) * (i ? i / 2 : g), e.moveTo(n - h, s - a), e.lineTo(n + h, s + a), e.moveTo(n + d, s - r), e.lineTo(n - d, s + r);
        break;
      case "star":
        h = Math.cos(m) * (i ? i / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, d = Math.sin(m) * (i ? i / 2 : g), e.moveTo(n - h, s - a), e.lineTo(n + h, s + a), e.moveTo(n + d, s - r), e.lineTo(n - d, s + r), m += qn, h = Math.cos(m) * (i ? i / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, d = Math.sin(m) * (i ? i / 2 : g), e.moveTo(n - h, s - a), e.lineTo(n + h, s + a), e.moveTo(n + d, s - r), e.lineTo(n - d, s + r);
        break;
      case "line":
        r = i ? i / 2 : Math.cos(m) * g, a = Math.sin(m) * g, e.moveTo(n - r, s - a), e.lineTo(n + r, s + a);
        break;
      case "dash":
        e.moveTo(n, s), e.lineTo(n + Math.cos(m) * (i ? i / 2 : g), s + Math.sin(m) * g);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function _n(e, t, n) {
  return n = n || 0.5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n;
}
function qr(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function Zr(e) {
  e.restore();
}
function gv(e, t, n, s, i) {
  if (!t)
    return e.lineTo(n.x, n.y);
  if (i === "middle") {
    const o = (t.x + n.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, n.y);
  } else i === "after" != !!s ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function mv(e, t, n, s) {
  if (!t)
    return e.lineTo(n.x, n.y);
  e.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? n.cp2x : n.cp1x, s ? n.cp2y : n.cp1y, n.x, n.y);
}
function yv(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), gt(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function bv(e, t, n, s, i) {
  if (i.strikethrough || i.underline) {
    const o = e.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, c = n - o.actualBoundingBoxAscent, l = n + o.actualBoundingBoxDescent, u = i.strikethrough ? (c + l) / 2 : l;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(r, u), e.lineTo(a, u), e.stroke();
  }
}
function vv(e, t) {
  const n = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = n;
}
function ys(e, t, n, s, i, o = {}) {
  const r = Bt(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let c, l;
  for (e.save(), e.font = i.string, yv(e, o), c = 0; c < r.length; ++c)
    l = r[c], o.backdrop && vv(e, o.backdrop), a && (o.strokeColor && (e.strokeStyle = o.strokeColor), gt(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(l, n, s, o.maxWidth)), e.fillText(l, n, s, o.maxWidth), bv(e, n, s, l, o), s += Number(i.lineHeight);
  e.restore();
}
function Zi(e, t) {
  const { x: n, y: s, w: i, h: o, radius: r } = t;
  e.arc(n + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * $t, $t, !0), e.lineTo(n, s + o - r.bottomLeft), e.arc(n + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, $t, qt, !0), e.lineTo(n + i - r.bottomRight, s + o), e.arc(n + i - r.bottomRight, s + o - r.bottomRight, r.bottomRight, qt, 0, !0), e.lineTo(n + i, s + r.topRight), e.arc(n + i - r.topRight, s + r.topRight, r.topRight, 0, -qt, !0), e.lineTo(n + r.topLeft, s);
}
const xv = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, _v = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function wv(e, t) {
  const n = ("" + e).match(xv);
  if (!n || n[1] === "normal")
    return t * 1.2;
  switch (e = +n[2], n[3]) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const Sv = (e) => +e || 0;
function Ml(e, t) {
  const n = {}, s = mt(t), i = s ? Object.keys(t) : t, o = mt(e) ? s ? (r) => ft(e[r], e[t[r]]) : (r) => e[r] : () => e;
  for (const r of i)
    n[r] = Sv(o(r));
  return n;
}
function ug(e) {
  return Ml(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function us(e) {
  return Ml(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function pe(e) {
  const t = ug(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Jt(e, t) {
  e = e || {}, t = t || Ht.font;
  let n = ft(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let s = ft(e.style, t.style);
  s && !("" + s).match(_v) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const i = {
    family: ft(e.family, t.family),
    lineHeight: wv(ft(e.lineHeight, t.lineHeight), n),
    size: n,
    style: s,
    weight: ft(e.weight, t.weight),
    string: ""
  };
  return i.string = fv(i), i;
}
function Mi(e, t, n, s) {
  let i, o, r;
  for (i = 0, o = e.length; i < o; ++i)
    if (r = e[i], r !== void 0 && r !== void 0)
      return r;
}
function Av(e, t, n) {
  const { min: s, max: i } = e, o = Qp(t, (i - s) / 2), r = (a, c) => n && a === 0 ? 0 : a + c;
  return {
    min: r(s, -Math.abs(o)),
    max: r(i, o)
  };
}
function Un(e, t) {
  return Object.assign(Object.create(e), t);
}
function Cl(e, t = [
  ""
], n, s, i = () => e[0]) {
  const o = n || e;
  typeof s > "u" && (s = pg("_fallback", e));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: s,
    _getTarget: i,
    override: (a) => Cl([
      a,
      ...e
    ], t, o, s)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, c) {
      return delete a[c], delete a._keys, delete e[0][c], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, c) {
      return dg(a, c, () => Ov(c, t, e, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, c) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], c);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, c) {
      return hh(a).includes(c);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return hh(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, c, l) {
      const u = a._storage || (a._storage = i());
      return a[c] = u[c] = l, delete a._keys, !0;
    }
  });
}
function Us(e, t, n, s) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: hg(e, s),
    setContext: (o) => Us(e, o, n, s),
    override: (o) => Us(e.override(o), t, n, s)
  };
  return new Proxy(i, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, r, a) {
      return dg(o, r, () => Tv(o, r, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(e, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(e, r);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    /**
    * A trap for the in operator.
    */
    has(o, r) {
      return Reflect.has(e, r);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    /**
    * A trap for setting property values.
    */
    set(o, r, a) {
      return e[r] = a, delete o[r], !0;
    }
  });
}
function hg(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: n = t.scriptable, _indexable: s = t.indexable, _allKeys: i = t.allKeys } = e;
  return {
    allKeys: i,
    scriptable: n,
    indexable: s,
    isScriptable: Bn(n) ? n : () => n,
    isIndexable: Bn(s) ? s : () => s
  };
}
const Pv = (e, t) => e ? e + wl(t) : t, kl = (e, t) => mt(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function dg(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const s = n();
  return e[t] = s, s;
}
function Tv(e, t, n) {
  const { _proxy: s, _context: i, _subProxy: o, _descriptors: r } = e;
  let a = s[t];
  return Bn(a) && r.isScriptable(t) && (a = Mv(t, a, e, n)), Bt(a) && a.length && (a = Cv(t, a, e, r.isIndexable)), kl(t, a) && (a = Us(a, i, o && o[t], r)), a;
}
function Mv(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _stack: a } = n;
  if (a.has(e))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
  a.add(e);
  let c = t(o, r || s);
  return a.delete(e), kl(e, c) && (c = Dl(i._scopes, i, e, c)), c;
}
function Cv(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _descriptors: a } = n;
  if (typeof o.index < "u" && s(e))
    return t[o.index % t.length];
  if (mt(t[0])) {
    const c = t, l = i._scopes.filter((u) => u !== c);
    t = [];
    for (const u of c) {
      const h = Dl(l, i, e, u);
      t.push(Us(h, o, r && r[e], a));
    }
  }
  return t;
}
function fg(e, t, n) {
  return Bn(e) ? e(t, n) : e;
}
const kv = (e, t) => e === !0 ? t : typeof e == "string" ? jn(t, e) : void 0;
function Dv(e, t, n, s, i) {
  for (const o of t) {
    const r = kv(n, o);
    if (r) {
      e.add(r);
      const a = fg(r._fallback, n, i);
      if (typeof a < "u" && a !== n && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && n !== s)
      return null;
  }
  return !1;
}
function Dl(e, t, n, s) {
  const i = t._rootScopes, o = fg(t._fallback, n, s), r = [
    ...e,
    ...i
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let c = uh(a, r, n, o || n, s);
  return c === null || typeof o < "u" && o !== n && (c = uh(a, r, o, c, s), c === null) ? !1 : Cl(Array.from(a), [
    ""
  ], i, o, () => Ev(t, n, s));
}
function uh(e, t, n, s, i) {
  for (; n; )
    n = Dv(e, t, n, s, i);
  return n;
}
function Ev(e, t, n) {
  const s = e._getTarget();
  t in s || (s[t] = {});
  const i = s[t];
  return Bt(i) && mt(n) ? n : i || {};
}
function Ov(e, t, n, s) {
  let i;
  for (const o of t)
    if (i = pg(Pv(o, e), n), typeof i < "u")
      return kl(e, i) ? Dl(n, s, e, i) : i;
}
function pg(e, t) {
  for (const n of t) {
    if (!n)
      continue;
    const s = n[e];
    if (typeof s < "u")
      return s;
  }
}
function hh(e) {
  let t = e._keys;
  return t || (t = e._keys = Rv(e._scopes)), t;
}
function Rv(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const s of Object.keys(n).filter((i) => !i.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function gg(e, t, n, s) {
  const { iScale: i } = e, { key: o = "r" } = this._parsing, r = new Array(s);
  let a, c, l, u;
  for (a = 0, c = s; a < c; ++a)
    l = a + n, u = t[l], r[a] = {
      r: i.parse(jn(u, o), l)
    };
  return r;
}
const Lv = Number.EPSILON || 1e-14, Ys = (e, t) => t < e.length && !e[t].skip && e[t], mg = (e) => e === "x" ? "y" : "x";
function Iv(e, t, n, s) {
  const i = e.skip ? t : e, o = t, r = n.skip ? t : n, a = dc(o, i), c = dc(r, o);
  let l = a / (a + c), u = c / (a + c);
  l = isNaN(l) ? 0 : l, u = isNaN(u) ? 0 : u;
  const h = s * l, d = s * u;
  return {
    previous: {
      x: o.x - h * (r.x - i.x),
      y: o.y - h * (r.y - i.y)
    },
    next: {
      x: o.x + d * (r.x - i.x),
      y: o.y + d * (r.y - i.y)
    }
  };
}
function Nv(e, t, n) {
  const s = e.length;
  let i, o, r, a, c, l = Ys(e, 0);
  for (let u = 0; u < s - 1; ++u)
    if (c = l, l = Ys(e, u + 1), !(!c || !l)) {
      if ($i(t[u], 0, Lv)) {
        n[u] = n[u + 1] = 0;
        continue;
      }
      i = n[u] / t[u], o = n[u + 1] / t[u], a = Math.pow(i, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), n[u] = i * r * t[u], n[u + 1] = o * r * t[u]);
    }
}
function $v(e, t, n = "x") {
  const s = mg(n), i = e.length;
  let o, r, a, c = Ys(e, 0);
  for (let l = 0; l < i; ++l) {
    if (r = a, a = c, c = Ys(e, l + 1), !a)
      continue;
    const u = a[n], h = a[s];
    r && (o = (u - r[n]) / 3, a[`cp1${n}`] = u - o, a[`cp1${s}`] = h - o * t[l]), c && (o = (c[n] - u) / 3, a[`cp2${n}`] = u + o, a[`cp2${s}`] = h + o * t[l]);
  }
}
function Vv(e, t = "x") {
  const n = mg(t), s = e.length, i = Array(s).fill(0), o = Array(s);
  let r, a, c, l = Ys(e, 0);
  for (r = 0; r < s; ++r)
    if (a = c, c = l, l = Ys(e, r + 1), !!c) {
      if (l) {
        const u = l[t] - c[t];
        i[r] = u !== 0 ? (l[n] - c[n]) / u : 0;
      }
      o[r] = a ? l ? sn(i[r - 1]) !== sn(i[r]) ? 0 : (i[r - 1] + i[r]) / 2 : i[r - 1] : i[r];
    }
  Nv(e, i, o), $v(e, o, t);
}
function Do(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function Fv(e, t) {
  let n, s, i, o, r, a = _n(e[0], t);
  for (n = 0, s = e.length; n < s; ++n)
    r = o, o = a, a = n < s - 1 && _n(e[n + 1], t), o && (i = e[n], r && (i.cp1x = Do(i.cp1x, t.left, t.right), i.cp1y = Do(i.cp1y, t.top, t.bottom)), a && (i.cp2x = Do(i.cp2x, t.left, t.right), i.cp2y = Do(i.cp2y, t.top, t.bottom)));
}
function jv(e, t, n, s, i) {
  let o, r, a, c;
  if (t.spanGaps && (e = e.filter((l) => !l.skip)), t.cubicInterpolationMode === "monotone")
    Vv(e, i);
  else {
    let l = s ? e[e.length - 1] : e[0];
    for (o = 0, r = e.length; o < r; ++o)
      a = e[o], c = Iv(l, a, e[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = c.previous.x, a.cp1y = c.previous.y, a.cp2x = c.next.x, a.cp2y = c.next.y, l = a;
  }
  t.capBezierPoints && Fv(e, n);
}
function El() {
  return typeof window < "u" && typeof document < "u";
}
function Ol(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Sr(e, t, n) {
  let s;
  return typeof e == "string" ? (s = parseInt(e, 10), e.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[n])) : s = e, s;
}
const Qr = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function Bv(e, t) {
  return Qr(e).getPropertyValue(t);
}
const Hv = [
  "top",
  "right",
  "bottom",
  "left"
];
function hs(e, t, n) {
  const s = {};
  n = n ? "-" + n : "";
  for (let i = 0; i < 4; i++) {
    const o = Hv[i];
    s[o] = parseFloat(e[t + "-" + o + n]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const zv = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Wv(e, t) {
  const n = e.touches, s = n && n.length ? n[0] : e, { offsetX: i, offsetY: o } = s;
  let r = !1, a, c;
  if (zv(i, o, e.target))
    a = i, c = o;
  else {
    const l = t.getBoundingClientRect();
    a = s.clientX - l.left, c = s.clientY - l.top, r = !0;
  }
  return {
    x: a,
    y: c,
    box: r
  };
}
function ns(e, t) {
  if ("native" in e)
    return e;
  const { canvas: n, currentDevicePixelRatio: s } = t, i = Qr(n), o = i.boxSizing === "border-box", r = hs(i, "padding"), a = hs(i, "border", "width"), { x: c, y: l, box: u } = Wv(e, n), h = r.left + (u && a.left), d = r.top + (u && a.top);
  let { width: f, height: p } = t;
  return o && (f -= r.width + a.width, p -= r.height + a.height), {
    x: Math.round((c - h) / f * n.width / s),
    y: Math.round((l - d) / p * n.height / s)
  };
}
function Uv(e, t, n) {
  let s, i;
  if (t === void 0 || n === void 0) {
    const o = e && Ol(e);
    if (!o)
      t = e.clientWidth, n = e.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Qr(o), c = hs(a, "border", "width"), l = hs(a, "padding");
      t = r.width - l.width - c.width, n = r.height - l.height - c.height, s = Sr(a.maxWidth, o, "clientWidth"), i = Sr(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: n,
    maxWidth: s || _r,
    maxHeight: i || _r
  };
}
const Eo = (e) => Math.round(e * 10) / 10;
function Yv(e, t, n, s) {
  const i = Qr(e), o = hs(i, "margin"), r = Sr(i.maxWidth, e, "clientWidth") || _r, a = Sr(i.maxHeight, e, "clientHeight") || _r, c = Uv(e, t, n);
  let { width: l, height: u } = c;
  if (i.boxSizing === "content-box") {
    const d = hs(i, "border", "width"), f = hs(i, "padding");
    l -= f.width + d.width, u -= f.height + d.height;
  }
  return l = Math.max(0, l - o.width), u = Math.max(0, s ? l / s : u - o.height), l = Eo(Math.min(l, r, c.maxWidth)), u = Eo(Math.min(u, a, c.maxHeight)), l && !u && (u = Eo(l / 2)), (t !== void 0 || n !== void 0) && s && c.height && u > c.height && (u = c.height, l = Eo(Math.floor(u * s))), {
    width: l,
    height: u
  };
}
function dh(e, t, n) {
  const s = t || 1, i = Math.floor(e.height * s), o = Math.floor(e.width * s);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const r = e.canvas;
  return r.style && (n || !r.style.height && !r.style.width) && (r.style.height = `${e.height}px`, r.style.width = `${e.width}px`), e.currentDevicePixelRatio !== s || r.height !== i || r.width !== o ? (e.currentDevicePixelRatio = s, r.height = i, r.width = o, e.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Gv = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    El() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
}();
function fh(e, t) {
  const n = Bv(e, t), s = n && n.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function ss(e, t, n, s) {
  return {
    x: e.x + n * (t.x - e.x),
    y: e.y + n * (t.y - e.y)
  };
}
function Kv(e, t, n, s) {
  return {
    x: e.x + n * (t.x - e.x),
    y: s === "middle" ? n < 0.5 ? e.y : t.y : s === "after" ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y
  };
}
function Xv(e, t, n, s) {
  const i = {
    x: e.cp2x,
    y: e.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = ss(e, i, n), a = ss(i, o, n), c = ss(o, t, n), l = ss(r, a, n), u = ss(a, c, n);
  return ss(l, u, n);
}
const qv = function(e, t) {
  return {
    x(n) {
      return e + e + t - n;
    },
    setWidth(n) {
      t = n;
    },
    textAlign(n) {
      return n === "center" ? n : n === "right" ? "left" : "right";
    },
    xPlus(n, s) {
      return n - s;
    },
    leftForLtr(n, s) {
      return n - s;
    }
  };
}, Zv = function() {
  return {
    x(e) {
      return e;
    },
    setWidth(e) {
    },
    textAlign(e) {
      return e;
    },
    xPlus(e, t) {
      return e + t;
    },
    leftForLtr(e, t) {
      return e;
    }
  };
};
function js(e, t, n) {
  return e ? qv(t, n) : Zv();
}
function yg(e, t) {
  let n, s;
  (t === "ltr" || t === "rtl") && (n = e.canvas.style, s = [
    n.getPropertyValue("direction"),
    n.getPropertyPriority("direction")
  ], n.setProperty("direction", t, "important"), e.prevTextDirection = s);
}
function bg(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
function vg(e) {
  return e === "angle" ? {
    between: qi,
    compare: Q0,
    normalize: De
  } : {
    between: vn,
    compare: (t, n) => t - n,
    normalize: (t) => t
  };
}
function ph({ start: e, end: t, count: n, loop: s, style: i }) {
  return {
    start: e % n,
    end: t % n,
    loop: s && (t - e + 1) % n === 0,
    style: i
  };
}
function Qv(e, t, n) {
  const { property: s, start: i, end: o } = n, { between: r, normalize: a } = vg(s), c = t.length;
  let { start: l, end: u, loop: h } = e, d, f;
  if (h) {
    for (l += c, u += c, d = 0, f = c; d < f && r(a(t[l % c][s]), i, o); ++d)
      l--, u--;
    l %= c, u %= c;
  }
  return u < l && (u += c), {
    start: l,
    end: u,
    loop: h,
    style: e.style
  };
}
function xg(e, t, n) {
  if (!n)
    return [
      e
    ];
  const { property: s, start: i, end: o } = n, r = t.length, { compare: a, between: c, normalize: l } = vg(s), { start: u, end: h, loop: d, style: f } = Qv(e, t, n), p = [];
  let g = !1, m = null, y, b, _;
  const x = () => c(i, _, y) && a(i, _) !== 0, v = () => a(o, y) === 0 || c(o, _, y), w = () => g || x(), A = () => !g || v();
  for (let P = u, M = u; P <= h; ++P)
    b = t[P % r], !b.skip && (y = l(b[s]), y !== _ && (g = c(y, i, o), m === null && w() && (m = a(y, i) === 0 ? P : M), m !== null && A() && (p.push(ph({
      start: m,
      end: P,
      loop: d,
      count: r,
      style: f
    })), m = null), M = P, _ = y));
  return m !== null && p.push(ph({
    start: m,
    end: h,
    loop: d,
    count: r,
    style: f
  })), p;
}
function _g(e, t) {
  const n = [], s = e.segments;
  for (let i = 0; i < s.length; i++) {
    const o = xg(s[i], e.points, t);
    o.length && n.push(...o);
  }
  return n;
}
function Jv(e, t, n, s) {
  let i = 0, o = t - 1;
  if (n && !s)
    for (; i < t && !e[i].skip; )
      i++;
  for (; i < t && e[i].skip; )
    i++;
  for (i %= t, n && (o += i); o > i && e[o % t].skip; )
    o--;
  return o %= t, {
    start: i,
    end: o
  };
}
function tx(e, t, n, s) {
  const i = e.length, o = [];
  let r = t, a = e[t], c;
  for (c = t + 1; c <= n; ++c) {
    const l = e[c % i];
    l.skip || l.stop ? a.skip || (s = !1, o.push({
      start: t % i,
      end: (c - 1) % i,
      loop: s
    }), t = r = l.stop ? c : null) : (r = c, a.skip && (t = c)), a = l;
  }
  return r !== null && o.push({
    start: t % i,
    end: r % i,
    loop: s
  }), o;
}
function ex(e, t) {
  const n = e.points, s = e.options.spanGaps, i = n.length;
  if (!i)
    return [];
  const o = !!e._loop, { start: r, end: a } = Jv(n, i, o, s);
  if (s === !0)
    return gh(e, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], n, t);
  const c = a < r ? a + i : a, l = !!e._fullLoop && r === 0 && a === i - 1;
  return gh(e, tx(n, r, c, l), n, t);
}
function gh(e, t, n, s) {
  return !s || !s.setContext || !n ? t : nx(e, t, n, s);
}
function nx(e, t, n, s) {
  const i = e._chart.getContext(), o = mh(e.options), { _datasetIndex: r, options: { spanGaps: a } } = e, c = n.length, l = [];
  let u = o, h = t[0].start, d = h;
  function f(p, g, m, y) {
    const b = a ? -1 : 1;
    if (p !== g) {
      for (p += c; n[p % c].skip; )
        p -= b;
      for (; n[g % c].skip; )
        g += b;
      p % c !== g % c && (l.push({
        start: p % c,
        end: g % c,
        loop: m,
        style: y
      }), u = y, h = g % c);
    }
  }
  for (const p of t) {
    h = a ? h : p.start;
    let g = n[h % c], m;
    for (d = h + 1; d <= p.end; d++) {
      const y = n[d % c];
      m = mh(s.setContext(Un(i, {
        type: "segment",
        p0: g,
        p1: y,
        p0DataIndex: (d - 1) % c,
        p1DataIndex: d % c,
        datasetIndex: r
      }))), sx(m, u) && f(h, d - 1, p.loop, u), g = y, u = m;
    }
    h < d - 1 && f(h, d - 1, p.loop, u);
  }
  return l;
}
function mh(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor
  };
}
function sx(e, t) {
  if (!t)
    return !1;
  const n = [], s = function(i, o) {
    return Tl(o) ? (n.includes(o) || n.push(o), n.indexOf(o)) : o;
  };
  return JSON.stringify(e, s) !== JSON.stringify(t, s);
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class ix {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, n, s, i) {
    const o = n.listeners[i], r = n.duration;
    o.forEach((a) => a({
      chart: t,
      initial: n.initial,
      numSteps: r,
      currentStep: Math.min(s - n.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = ig.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((s, i) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let r = o.length - 1, a = !1, c;
      for (; r >= 0; --r)
        c = o[r], c._active ? (c._total > s.duration && (s.duration = c._total), c.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (i.draw(), this._notify(i, s, t, "progress")), o.length || (s.running = !1, this._notify(i, s, t, "complete"), s.initial = !1), n += o.length;
    }), this._lastDate = t, n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let s = n.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, n.set(t, s)), s;
  }
  listen(t, n, s) {
    this._getAnims(t).listeners[n].push(s);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n && (n.running = !0, n.start = Date.now(), n.duration = n.items.reduce((s, i) => Math.max(s, i._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length)
      return;
    const s = n.items;
    let i = s.length - 1;
    for (; i >= 0; --i)
      s[i].cancel();
    n.items = [], this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var fn = /* @__PURE__ */ new ix();
const yh = "transparent", ox = {
  boolean(e, t, n) {
    return n > 0.5 ? t : e;
  },
  color(e, t, n) {
    const s = ah(e || yh), i = s.valid && ah(t || yh);
    return i && i.valid ? i.mix(s, n).hexString() : t;
  },
  number(e, t, n) {
    return e + (t - e) * n;
  }
};
class rx {
  constructor(t, n, s, i) {
    const o = n[s];
    i = Mi([
      t.to,
      i,
      o,
      t.from
    ]);
    const r = Mi([
      t.from,
      o,
      i
    ]);
    this._active = !0, this._fn = t.fn || ox[t.type || typeof r], this._easing = Vi[t.easing] || Vi.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = n, this._prop = s, this._from = r, this._to = i, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, n, s) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Mi([
        t.to,
        n,
        i,
        t.from
      ]), this._from = Mi([
        t.from,
        i,
        n
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const n = t - this._start, s = this._duration, i = this._prop, o = this._from, r = this._loop, a = this._to;
    let c;
    if (this._active = o !== a && (r || n < s), !this._active) {
      this._target[i] = a, this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[i] = o;
      return;
    }
    c = n / s % 2, c = r && c > 1 ? 2 - c : c, c = this._easing(Math.min(1, Math.max(0, c))), this._target[i] = this._fn(o, a, c);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, s) => {
      t.push({
        res: n,
        rej: s
      });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej", s = this._promises || [];
    for (let i = 0; i < s.length; i++)
      s[i][n]();
  }
}
class wg {
  constructor(t, n) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(n);
  }
  configure(t) {
    if (!mt(t))
      return;
    const n = Object.keys(Ht.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const o = t[i];
      if (!mt(o))
        return;
      const r = {};
      for (const a of n)
        r[a] = o[a];
      (Bt(o.properties) && o.properties || [
        i
      ]).forEach((a) => {
        (a === i || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, n) {
    const s = n.options, i = cx(t, s);
    if (!i)
      return [];
    const o = this._createAnimations(i, s);
    return s.$shared && ax(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, n) {
    const s = this._properties, i = [], o = t.$animations || (t.$animations = {}), r = Object.keys(n), a = Date.now();
    let c;
    for (c = r.length - 1; c >= 0; --c) {
      const l = r[c];
      if (l.charAt(0) === "$")
        continue;
      if (l === "options") {
        i.push(...this._animateOptions(t, n));
        continue;
      }
      const u = n[l];
      let h = o[l];
      const d = s.get(l);
      if (h)
        if (d && h.active()) {
          h.update(d, u, a);
          continue;
        } else
          h.cancel();
      if (!d || !d.duration) {
        t[l] = u;
        continue;
      }
      o[l] = h = new rx(d, t, l, u), i.push(h);
    }
    return i;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const s = this._createAnimations(t, n);
    if (s.length)
      return fn.add(this._chart, s), !0;
  }
}
function ax(e, t) {
  const n = [], s = Object.keys(t);
  for (let i = 0; i < s.length; i++) {
    const o = e[s[i]];
    o && o.active() && n.push(o.wait());
  }
  return Promise.all(n);
}
function cx(e, t) {
  if (!t)
    return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return n.$shared && (e.options = n = Object.assign({}, n, {
    $shared: !1,
    $animations: {}
  })), n;
}
function bh(e, t) {
  const n = e && e.options || {}, s = n.reverse, i = n.min === void 0 ? t : 0, o = n.max === void 0 ? t : 0;
  return {
    start: s ? o : i,
    end: s ? i : o
  };
}
function lx(e, t, n) {
  if (n === !1)
    return !1;
  const s = bh(e, n), i = bh(t, n);
  return {
    top: i.end,
    right: s.end,
    bottom: i.start,
    left: s.start
  };
}
function ux(e) {
  let t, n, s, i;
  return mt(e) ? (t = e.top, n = e.right, s = e.bottom, i = e.left) : t = n = s = i = e, {
    top: t,
    right: n,
    bottom: s,
    left: i,
    disabled: e === !1
  };
}
function Sg(e, t) {
  const n = [], s = e._getSortedDatasetMetas(t);
  let i, o;
  for (i = 0, o = s.length; i < o; ++i)
    n.push(s[i].index);
  return n;
}
function vh(e, t, n, s = {}) {
  const i = e.keys, o = s.mode === "single";
  let r, a, c, l;
  if (t === null)
    return;
  let u = !1;
  for (r = 0, a = i.length; r < a; ++r) {
    if (c = +i[r], c === n) {
      if (u = !0, s.all)
        continue;
      break;
    }
    l = e.values[c], Kt(l) && (o || t === 0 || sn(t) === sn(l)) && (t += l);
  }
  return !u && !s.all ? 0 : t;
}
function hx(e, t) {
  const { iScale: n, vScale: s } = t, i = n.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(e), a = new Array(r.length);
  let c, l, u;
  for (c = 0, l = r.length; c < l; ++c)
    u = r[c], a[c] = {
      [i]: u,
      [o]: e[u]
    };
  return a;
}
function Da(e, t) {
  const n = e && e.options.stacked;
  return n || n === void 0 && t.stack !== void 0;
}
function dx(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function fx(e) {
  const { min: t, max: n, minDefined: s, maxDefined: i } = e.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY
  };
}
function px(e, t, n) {
  const s = e[t] || (e[t] = {});
  return s[n] || (s[n] = {});
}
function xh(e, t, n, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const o = e[i.index];
    if (n && o > 0 || !n && o < 0)
      return i.index;
  }
  return null;
}
function _h(e, t) {
  const { chart: n, _cachedMeta: s } = e, i = n._stacks || (n._stacks = {}), { iScale: o, vScale: r, index: a } = s, c = o.axis, l = r.axis, u = dx(o, r, s), h = t.length;
  let d;
  for (let f = 0; f < h; ++f) {
    const p = t[f], { [c]: g, [l]: m } = p, y = p._stacks || (p._stacks = {});
    d = y[l] = px(i, u, g), d[a] = m, d._top = xh(d, r, !0, s.type), d._bottom = xh(d, r, !1, s.type);
    const b = d._visualValues || (d._visualValues = {});
    b[a] = m;
  }
}
function Ea(e, t) {
  const n = e.scales;
  return Object.keys(n).filter((s) => n[s].axis === t).shift();
}
function gx(e, t) {
  return Un(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function mx(e, t, n) {
  return Un(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data"
  });
}
function vi(e, t) {
  const n = e.controller.index, s = e.vScale && e.vScale.axis;
  if (s) {
    t = t || e._parsed;
    for (const i of t) {
      const o = i._stacks;
      if (!o || o[s] === void 0 || o[s][n] === void 0)
        return;
      delete o[s][n], o[s]._visualValues !== void 0 && o[s]._visualValues[n] !== void 0 && delete o[s]._visualValues[n];
    }
  }
}
const Oa = (e) => e === "reset" || e === "none", wh = (e, t) => t ? e : Object.assign({}, e), yx = (e, t, n) => e && !t.hidden && t._stacked && {
  keys: Sg(n, !0),
  values: null
};
class Ue {
  constructor(t, n) {
    this.chart = t, this._ctx = t.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Da(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && vi(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, n = this._cachedMeta, s = this.getDataset(), i = (h, d, f, p) => h === "x" ? d : h === "r" ? p : f, o = n.xAxisID = ft(s.xAxisID, Ea(t, "x")), r = n.yAxisID = ft(s.yAxisID, Ea(t, "y")), a = n.rAxisID = ft(s.rAxisID, Ea(t, "r")), c = n.indexAxis, l = n.iAxisID = i(c, o, r, a), u = n.vAxisID = i(c, r, o, a);
    n.xScale = this.getScaleForId(o), n.yScale = this.getScaleForId(r), n.rScale = this.getScaleForId(a), n.iScale = this.getScaleForId(l), n.vScale = this.getScaleForId(u);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && ih(this._data, this), t._stacked && vi(t);
  }
  _dataCheck() {
    const t = this.getDataset(), n = t.data || (t.data = []), s = this._data;
    if (mt(n)) {
      const i = this._cachedMeta;
      this._data = hx(n, i);
    } else if (s !== n) {
      if (s) {
        ih(s, this);
        const i = this._cachedMeta;
        vi(i), i._parsed = [];
      }
      n && Object.isExtensible(n) && nv(n, this), this._syncList = [], this._data = n;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta, s = this.getDataset();
    let i = !1;
    this._dataCheck();
    const o = n._stacked;
    n._stacked = Da(n.vScale, n), n.stack !== s.stack && (i = !0, vi(n), n.stack = s.stack), this._resyncElements(t), (i || o !== n._stacked) && (_h(this, n._parsed), n._stacked = Da(n.vScale, n));
  }
  configure() {
    const t = this.chart.config, n = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), n, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, n) {
    const { _cachedMeta: s, _data: i } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let c = t === 0 && n === i.length ? !0 : s._sorted, l = t > 0 && s._parsed[t - 1], u, h, d;
    if (this._parsing === !1)
      s._parsed = i, s._sorted = !0, d = i;
    else {
      Bt(i[t]) ? d = this.parseArrayData(s, i, t, n) : mt(i[t]) ? d = this.parseObjectData(s, i, t, n) : d = this.parsePrimitiveData(s, i, t, n);
      const f = () => h[a] === null || l && h[a] < l[a];
      for (u = 0; u < n; ++u)
        s._parsed[u + t] = h = d[u], c && (f() && (c = !1), l = h);
      s._sorted = c;
    }
    r && _h(this, d);
  }
  parsePrimitiveData(t, n, s, i) {
    const { iScale: o, vScale: r } = t, a = o.axis, c = r.axis, l = o.getLabels(), u = o === r, h = new Array(i);
    let d, f, p;
    for (d = 0, f = i; d < f; ++d)
      p = d + s, h[d] = {
        [a]: u || o.parse(l[p], p),
        [c]: r.parse(n[p], p)
      };
    return h;
  }
  parseArrayData(t, n, s, i) {
    const { xScale: o, yScale: r } = t, a = new Array(i);
    let c, l, u, h;
    for (c = 0, l = i; c < l; ++c)
      u = c + s, h = n[u], a[c] = {
        x: o.parse(h[0], u),
        y: r.parse(h[1], u)
      };
    return a;
  }
  parseObjectData(t, n, s, i) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: c = "y" } = this._parsing, l = new Array(i);
    let u, h, d, f;
    for (u = 0, h = i; u < h; ++u)
      d = u + s, f = n[d], l[u] = {
        x: o.parse(jn(f, a), d),
        y: r.parse(jn(f, c), d)
      };
    return l;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, s) {
    const i = this.chart, o = this._cachedMeta, r = n[t.axis], a = {
      keys: Sg(i, !0),
      values: n._stacks[t.axis]._visualValues
    };
    return vh(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, n, s, i) {
    const o = s[n.axis];
    let r = o === null ? NaN : o;
    const a = i && s._stacks[n.axis];
    i && a && (i.values = a, r = vh(i, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, n) {
    const s = this._cachedMeta, i = s._parsed, o = s._sorted && t === s.iScale, r = i.length, a = this._getOtherScale(t), c = yx(n, s, this.chart), l = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: h } = fx(a);
    let d, f;
    function p() {
      f = i[d];
      const g = f[a.axis];
      return !Kt(f[t.axis]) || u > g || h < g;
    }
    for (d = 0; d < r && !(!p() && (this.updateRangeFromParsed(l, t, f, c), o)); ++d)
      ;
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!p()) {
          this.updateRangeFromParsed(l, t, f, c);
          break;
        }
    }
    return l;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed, s = [];
    let i, o, r;
    for (i = 0, o = n.length; i < o; ++i)
      r = n[i][t.axis], Kt(r) && s.push(r);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = n.iScale, i = n.vScale, o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: i ? "" + i.getLabelForValue(o[i.axis]) : ""
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"), n._clip = ux(ft(this.options.clip, lx(n.xScale, n.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, n = this.chart, s = this._cachedMeta, i = s.data || [], o = n.chartArea, r = [], a = this._drawStart || 0, c = this._drawCount || i.length - a, l = this.options.drawActiveElementsOnTop;
    let u;
    for (s.dataset && s.dataset.draw(t, o, a, c), u = a; u < a + c; ++u) {
      const h = i[u];
      h.hidden || (h.active && l ? r.push(h) : h.draw(t, o));
    }
    for (u = 0; u < r.length; ++u)
      r[u].draw(t, o);
  }
  getStyle(t, n) {
    const s = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, n, s) {
    const i = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = mx(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = i.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = gx(this.chart.getContext(), this.index)), o.dataset = i, o.index = o.datasetIndex = this.index;
    return o.active = !!n, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", s) {
    const i = n === "active", o = this._cachedDataOpts, r = t + "-" + n, a = o[r], c = this.enableOptionSharing && Xi(s);
    if (a)
      return wh(a, c);
    const l = this.chart.config, u = l.datasetElementScopeKeys(this._type, t), h = i ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = l.getOptionScopes(this.getDataset(), u), f = Object.keys(Ht.elements[t]), p = () => this.getContext(s, i, n), g = l.resolveNamedOptions(d, f, p, h);
    return g.$shared && (g.$shared = c, o[r] = Object.freeze(wh(g, c))), g;
  }
  _resolveAnimations(t, n, s) {
    const i = this.chart, o = this._cachedDataOpts, r = `animation-${n}`, a = o[r];
    if (a)
      return a;
    let c;
    if (i.options.animation !== !1) {
      const u = this.chart.config, h = u.datasetAnimationScopeKeys(this._type, n), d = u.getOptionScopes(this.getDataset(), h);
      c = u.createResolver(d, this.getContext(t, s, n));
    }
    const l = new wg(i, c && c.animations);
    return c && c._cacheable && (o[r] = Object.freeze(l)), l;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, n) {
    return !n || Oa(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const s = this.resolveDataElementOptions(t, n), i = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(n, o) || o !== i;
    return this.updateSharedOptions(o, n, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, n, s, i) {
    Oa(i) ? Object.assign(t, s) : this._resolveAnimations(n, i).update(t, s);
  }
  updateSharedOptions(t, n, s) {
    t && !Oa(n) && this._resolveAnimations(void 0, n).update(t, s);
  }
  _setStyle(t, n, s, i) {
    t.active = i;
    const o = this.getStyle(n, i);
    this._resolveAnimations(n, s, i).update(t, {
      options: !i && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, n, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, n, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data, s = this._cachedMeta.data;
    for (const [a, c, l] of this._syncList)
      this[a](c, l);
    this._syncList = [];
    const i = s.length, o = n.length, r = Math.min(o, i);
    r && this.parse(0, r), o > i ? this._insertElements(i, o - i, t) : o < i && this._removeElements(o, i - o);
  }
  _insertElements(t, n, s = !0) {
    const i = this._cachedMeta, o = i.data, r = t + n;
    let a;
    const c = (l) => {
      for (l.length += n, a = l.length - 1; a >= r; a--)
        l[a] = l[a - n];
    };
    for (c(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && c(i._parsed), this.parse(t, n), s && this.updateElements(o, t, n, "reset");
  }
  updateElements(t, n, s, i) {
  }
  _removeElements(t, n) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const i = s._parsed.splice(t, n);
      s._stacked && vi(s, i);
    }
    s.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [n, s, i] = t;
      this[n](s, i);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, n) {
    n && this._sync([
      "_removeElements",
      t,
      n
    ]);
    const s = arguments.length - 2;
    s && this._sync([
      "_insertElements",
      t,
      s
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
z(Ue, "defaults", {}), z(Ue, "datasetElementType", null), z(Ue, "dataElementType", null);
function bx(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t);
    let s = [];
    for (let i = 0, o = n.length; i < o; i++)
      s = s.concat(n[i].controller.getAllParsedValues(e));
    e._cache.$bar = sg(s.sort((i, o) => i - o));
  }
  return e._cache.$bar;
}
function vx(e) {
  const t = e.iScale, n = bx(t, e.type);
  let s = t._length, i, o, r, a;
  const c = () => {
    r === 32767 || r === -32768 || (Xi(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (i = 0, o = n.length; i < o; ++i)
    r = t.getPixelForValue(n[i]), c();
  for (a = void 0, i = 0, o = t.ticks.length; i < o; ++i)
    r = t.getPixelForTick(i), c();
  return s;
}
function xx(e, t, n, s) {
  const i = n.barThickness;
  let o, r;
  return gt(i) ? (o = t.min * n.categoryPercentage, r = n.barPercentage) : (o = i * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[e] - o / 2
  };
}
function _x(e, t, n, s) {
  const i = t.pixels, o = i[e];
  let r = e > 0 ? i[e - 1] : null, a = e < i.length - 1 ? i[e + 1] : null;
  const c = n.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
  const l = o - (o - Math.min(r, a)) / 2 * c;
  return {
    chunk: Math.abs(a - r) / 2 * c / s,
    ratio: n.barPercentage,
    start: l
  };
}
function wx(e, t, n, s) {
  const i = n.parse(e[0], s), o = n.parse(e[1], s), r = Math.min(i, o), a = Math.max(i, o);
  let c = r, l = a;
  Math.abs(r) > Math.abs(a) && (c = a, l = r), t[n.axis] = l, t._custom = {
    barStart: c,
    barEnd: l,
    start: i,
    end: o,
    min: r,
    max: a
  };
}
function Ag(e, t, n, s) {
  return Bt(e) ? wx(e, t, n, s) : t[n.axis] = n.parse(e, s), t;
}
function Sh(e, t, n, s) {
  const i = e.iScale, o = e.vScale, r = i.getLabels(), a = i === o, c = [];
  let l, u, h, d;
  for (l = n, u = n + s; l < u; ++l)
    d = t[l], h = {}, h[i.axis] = a || i.parse(r[l], l), c.push(Ag(d, h, o, l));
  return c;
}
function Ra(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function Sx(e, t, n) {
  return e !== 0 ? sn(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
}
function Ax(e) {
  let t, n, s, i, o;
  return e.horizontal ? (t = e.base > e.x, n = "left", s = "right") : (t = e.base < e.y, n = "bottom", s = "top"), t ? (i = "end", o = "start") : (i = "start", o = "end"), {
    start: n,
    end: s,
    reverse: t,
    top: i,
    bottom: o
  };
}
function Px(e, t, n, s) {
  let i = t.borderSkipped;
  const o = {};
  if (!i) {
    e.borderSkipped = o;
    return;
  }
  if (i === !0) {
    e.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: r, end: a, reverse: c, top: l, bottom: u } = Ax(e);
  i === "middle" && n && (e.enableBorderRadius = !0, (n._top || 0) === s ? i = l : (n._bottom || 0) === s ? i = u : (o[Ah(u, r, a, c)] = !0, i = l)), o[Ah(i, r, a, c)] = !0, e.borderSkipped = o;
}
function Ah(e, t, n, s) {
  return s ? (e = Tx(e, t, n), e = Ph(e, n, t)) : e = Ph(e, t, n), e;
}
function Tx(e, t, n) {
  return e === t ? n : e === n ? t : e;
}
function Ph(e, t, n) {
  return e === "start" ? t : e === "end" ? n : e;
}
function Mx(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === "auto" ? n === 1 ? 0.33 : 0 : t;
}
class Jo extends Ue {
  parsePrimitiveData(t, n, s, i) {
    return Sh(t, n, s, i);
  }
  parseArrayData(t, n, s, i) {
    return Sh(t, n, s, i);
  }
  parseObjectData(t, n, s, i) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: c = "y" } = this._parsing, l = o.axis === "x" ? a : c, u = r.axis === "x" ? a : c, h = [];
    let d, f, p, g;
    for (d = s, f = s + i; d < f; ++d)
      g = n[d], p = {}, p[o.axis] = o.parse(jn(g, l), d), h.push(Ag(jn(g, u), p, r, d));
    return h;
  }
  updateRangeFromParsed(t, n, s, i) {
    super.updateRangeFromParsed(t, n, s, i);
    const o = s._custom;
    o && n === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, { iScale: s, vScale: i } = n, o = this.getParsed(t), r = o._custom, a = Ra(r) ? "[" + r.start + ", " + r.end + "]" : "" + i.getLabelForValue(o[i.axis]);
    return {
      label: "" + s.getLabelForValue(o[s.axis]),
      value: a
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const n = this._cachedMeta;
    this.updateElements(n.data, 0, n.data.length, t);
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", { index: r, _cachedMeta: { vScale: a } } = this, c = a.getBasePixel(), l = a.isHorizontal(), u = this._getRuler(), { sharedOptions: h, includeOptions: d } = this._getSharedOptions(n, i);
    for (let f = n; f < n + s; f++) {
      const p = this.getParsed(f), g = o || gt(p[a.axis]) ? {
        base: c,
        head: c
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, u), y = (p._stacks || {})[a.axis], b = {
        horizontal: l,
        base: g.base,
        enableBorderRadius: !y || Ra(p._custom) || r === y._top || r === y._bottom,
        x: l ? g.head : m.center,
        y: l ? m.center : g.head,
        height: l ? m.size : Math.abs(g.size),
        width: l ? Math.abs(g.size) : m.size
      };
      d && (b.options = h || this.resolveDataElementOptions(f, t[f].active ? "active" : i));
      const _ = b.options || t[f].options;
      Px(b, _, y, r), Mx(b, _, u.ratio), this.updateElement(t[f], f, b, i);
    }
  }
  _getStacks(t, n) {
    const { iScale: s } = this._cachedMeta, i = s.getMatchingVisibleMetas(this._type).filter((u) => u.controller.options.grouped), o = s.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(n), c = a && a[s.axis], l = (u) => {
      const h = u._parsed.find((f) => f[s.axis] === c), d = h && h[u.vScale.axis];
      if (gt(d) || isNaN(d))
        return !0;
    };
    for (const u of i)
      if (!(n !== void 0 && l(u)) && ((o === !1 || r.indexOf(u.stack) === -1 || o === void 0 && u.stack === void 0) && r.push(u.stack), u.index === t))
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, n, s) {
    const i = this._getStacks(t, s), o = n !== void 0 ? i.indexOf(n) : -1;
    return o === -1 ? i.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, n = this._cachedMeta, s = n.iScale, i = [];
    let o, r;
    for (o = 0, r = n.data.length; o < r; ++o)
      i.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
    const a = t.barThickness;
    return {
      min: a || vx(n),
      pixels: i,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: n, _stacked: s, index: i }, options: { base: o, minBarLength: r } } = this, a = o || 0, c = this.getParsed(t), l = c._custom, u = Ra(l);
    let h = c[n.axis], d = 0, f = s ? this.applyStack(n, c, s) : h, p, g;
    f !== h && (d = f - h, f = h), u && (h = l.barStart, f = l.barEnd - l.barStart, h !== 0 && sn(h) !== sn(l.barEnd) && (d = 0), d += h);
    const m = !gt(o) && !u ? o : d;
    let y = n.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? p = n.getPixelForValue(d + f) : p = y, g = p - y, Math.abs(g) < r) {
      g = Sx(g, n, a) * r, h === a && (y -= g / 2);
      const b = n.getPixelForDecimal(0), _ = n.getPixelForDecimal(1), x = Math.min(b, _), v = Math.max(b, _);
      y = Math.max(Math.min(y, v), x), p = y + g, s && !u && (c._stacks[n.axis]._visualValues[i] = n.getValueForPixel(p) - n.getValueForPixel(y));
    }
    if (y === n.getPixelForValue(a)) {
      const b = sn(g) * n.getLineWidthForValue(a) / 2;
      y += b, g -= b;
    }
    return {
      size: g,
      base: y,
      head: p,
      center: p + g / 2
    };
  }
  _calculateBarIndexPixels(t, n) {
    const s = n.scale, i = this.options, o = i.skipNull, r = ft(i.maxBarThickness, 1 / 0);
    let a, c;
    if (n.grouped) {
      const l = o ? this._getStackCount(t) : n.stackCount, u = i.barThickness === "flex" ? _x(t, n, i, l) : xx(t, n, i, l), h = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      a = u.start + u.chunk * h + u.chunk / 2, c = Math.min(r, u.chunk * u.ratio);
    } else
      a = s.getPixelForValue(this.getParsed(t)[s.axis], t), c = Math.min(r, n.min * n.ratio);
    return {
      base: a - c / 2,
      head: a + c / 2,
      center: a,
      size: c
    };
  }
  draw() {
    const t = this._cachedMeta, n = t.vScale, s = t.data, i = s.length;
    let o = 0;
    for (; o < i; ++o)
      this.getParsed(o)[n.axis] !== null && !s[o].hidden && s[o].draw(this._ctx);
  }
}
z(Jo, "id", "bar"), z(Jo, "defaults", {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
}), z(Jo, "overrides", {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
});
class tr extends Ue {
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(t, n, s, i) {
    const o = super.parsePrimitiveData(t, n, s, i);
    for (let r = 0; r < o.length; r++)
      o[r]._custom = this.resolveDataElementOptions(r + s).radius;
    return o;
  }
  parseArrayData(t, n, s, i) {
    const o = super.parseArrayData(t, n, s, i);
    for (let r = 0; r < o.length; r++) {
      const a = n[s + r];
      o[r]._custom = ft(a[2], this.resolveDataElementOptions(r + s).radius);
    }
    return o;
  }
  parseObjectData(t, n, s, i) {
    const o = super.parseObjectData(t, n, s, i);
    for (let r = 0; r < o.length; r++) {
      const a = n[s + r];
      o[r]._custom = ft(a && a.r && +a.r, this.resolveDataElementOptions(r + s).radius);
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let n = 0;
    for (let s = t.length - 1; s >= 0; --s)
      n = Math.max(n, t[s].size(this.resolveDataElementOptions(s)) / 2);
    return n > 0 && n;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart.data.labels || [], { xScale: i, yScale: o } = n, r = this.getParsed(t), a = i.getLabelForValue(r.x), c = o.getLabelForValue(r.y), l = r._custom;
    return {
      label: s[t] || "",
      value: "(" + a + ", " + c + (l ? ", " + l : "") + ")"
    };
  }
  update(t) {
    const n = this._cachedMeta.data;
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", { iScale: r, vScale: a } = this._cachedMeta, { sharedOptions: c, includeOptions: l } = this._getSharedOptions(n, i), u = r.axis, h = a.axis;
    for (let d = n; d < n + s; d++) {
      const f = t[d], p = !o && this.getParsed(d), g = {}, m = g[u] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(p[u]), y = g[h] = o ? a.getBasePixel() : a.getPixelForValue(p[h]);
      g.skip = isNaN(m) || isNaN(y), l && (g.options = c || this.resolveDataElementOptions(d, f.active ? "active" : i), o && (g.options.radius = 0)), this.updateElement(f, d, g, i);
    }
  }
  resolveDataElementOptions(t, n) {
    const s = this.getParsed(t);
    let i = super.resolveDataElementOptions(t, n);
    i.$shared && (i = Object.assign({}, i, {
      $shared: !1
    }));
    const o = i.radius;
    return n !== "active" && (i.radius = 0), i.radius += ft(s && s._custom, o), i;
  }
}
z(tr, "id", "bubble"), z(tr, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "borderWidth",
        "radius"
      ]
    }
  }
}), z(tr, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function Cx(e, t, n) {
  let s = 1, i = 1, o = 0, r = 0;
  if (t < Nt) {
    const a = e, c = a + t, l = Math.cos(a), u = Math.sin(a), h = Math.cos(c), d = Math.sin(c), f = (_, x, v) => qi(_, a, c, !0) ? 1 : Math.max(x, x * n, v, v * n), p = (_, x, v) => qi(_, a, c, !0) ? -1 : Math.min(x, x * n, v, v * n), g = f(0, l, h), m = f(qt, u, d), y = p($t, l, h), b = p($t + qt, u, d);
    s = (g - y) / 2, i = (m - b) / 2, o = -(g + y) / 2, r = -(m + b) / 2;
  }
  return {
    ratioX: s,
    ratioY: i,
    offsetX: o,
    offsetY: r
  };
}
class rs extends Ue {
  constructor(t, n) {
    super(t, n), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, n) {
    const s = this.getDataset().data, i = this._cachedMeta;
    if (this._parsing === !1)
      i._parsed = s;
    else {
      let o = (c) => +s[c];
      if (mt(s[t])) {
        const { key: c = "value" } = this._parsing;
        o = (l) => +jn(s[l], c);
      }
      let r, a;
      for (r = t, a = t + n; r < a; ++r)
        i._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return ze(this.options.rotation - 90);
  }
  _getCircumference() {
    return ze(this.options.circumference);
  }
  _getRotationExtents() {
    let t = Nt, n = -Nt;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
        const i = this.chart.getDatasetMeta(s).controller, o = i._getRotation(), r = i._getCircumference();
        t = Math.min(t, o), n = Math.max(n, o + r);
      }
    return {
      rotation: t,
      circumference: n - t
    };
  }
  update(t) {
    const n = this.chart, { chartArea: s } = n, i = this._cachedMeta, o = i.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), c = Math.min(B0(this.options.cutout, a), 1), l = this._getRingWeight(this.index), { circumference: u, rotation: h } = this._getRotationExtents(), { ratioX: d, ratioY: f, offsetX: p, offsetY: g } = Cx(h, u, c), m = (s.width - r) / d, y = (s.height - r) / f, b = Math.max(Math.min(m, y) / 2, 0), _ = Qp(this.options.radius, b), x = Math.max(_ * c, 0), v = (_ - x) / this._getVisibleDatasetWeightTotal();
    this.offsetX = p * _, this.offsetY = g * _, i.total = this.calculateTotal(), this.outerRadius = _ - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * l, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, n) {
    const s = this.options, i = this._cachedMeta, o = this._getCircumference();
    return n && s.animation.animateRotate || !this.chart.getDataVisibility(t) || i._parsed[t] === null || i.data[t].hidden ? 0 : this.calculateCircumference(i._parsed[t] * o / Nt);
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", r = this.chart, a = r.chartArea, l = r.options.animation, u = (a.left + a.right) / 2, h = (a.top + a.bottom) / 2, d = o && l.animateScale, f = d ? 0 : this.innerRadius, p = d ? 0 : this.outerRadius, { sharedOptions: g, includeOptions: m } = this._getSharedOptions(n, i);
    let y = this._getRotation(), b;
    for (b = 0; b < n; ++b)
      y += this._circumference(b, o);
    for (b = n; b < n + s; ++b) {
      const _ = this._circumference(b, o), x = t[b], v = {
        x: u + this.offsetX,
        y: h + this.offsetY,
        startAngle: y,
        endAngle: y + _,
        circumference: _,
        outerRadius: p,
        innerRadius: f
      };
      m && (v.options = g || this.resolveDataElementOptions(b, x.active ? "active" : i)), y += _, this.updateElement(x, b, v, i);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, n = t.data;
    let s = 0, i;
    for (i = 0; i < n.length; i++) {
      const o = t._parsed[i];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(i) && !n[i].hidden && (s += Math.abs(o));
    }
    return s;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? Nt * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart, i = s.data.labels || [], o = yo(n._parsed[t], s.options.locale);
    return {
      label: i[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const s = this.chart;
    let i, o, r, a, c;
    if (!t) {
      for (i = 0, o = s.data.datasets.length; i < o; ++i)
        if (s.isDatasetVisible(i)) {
          r = s.getDatasetMeta(i), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (i = 0, o = t.length; i < o; ++i)
      c = a.resolveDataElementOptions(i), c.borderAlign !== "inner" && (n = Math.max(n, c.borderWidth || 0, c.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let s = 0, i = t.length; s < i; ++s) {
      const o = this.resolveDataElementOptions(s);
      n = Math.max(n, o.offset || 0, o.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (n += this._getRingWeight(s));
    return n;
  }
  _getRingWeight(t) {
    return Math.max(ft(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
z(rs, "id", "doughnut"), z(rs, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), z(rs, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), z(rs, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const n = t.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: s, color: i } } = t.legend.options;
            return n.labels.map((o, r) => {
              const c = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: c.backgroundColor,
                strokeStyle: c.borderColor,
                fontColor: i,
                lineWidth: c.borderWidth,
                pointStyle: s,
                hidden: !t.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(t, n, s) {
        s.chart.toggleDataVisibility(n.index), s.chart.update();
      }
    }
  }
});
class er extends Ue {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const n = this._cachedMeta, { dataset: s, data: i = [], _dataset: o } = n, r = this.chart._animationsDisabled;
    let { start: a, count: c } = rg(n, i, r);
    this._drawStart = a, this._drawCount = c, ag(n) && (a = 0, c = i.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = i;
    const l = this.resolveDatasetElementOptions(t);
    this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: l
    }, t), this.updateElements(i, a, c, t);
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", { iScale: r, vScale: a, _stacked: c, _dataset: l } = this._cachedMeta, { sharedOptions: u, includeOptions: h } = this._getSharedOptions(n, i), d = r.axis, f = a.axis, { spanGaps: p, segment: g } = this.options, m = Ws(p) ? p : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || o || i === "none", b = n + s, _ = t.length;
    let x = n > 0 && this.getParsed(n - 1);
    for (let v = 0; v < _; ++v) {
      const w = t[v], A = y ? w : {};
      if (v < n || v >= b) {
        A.skip = !0;
        continue;
      }
      const P = this.getParsed(v), M = gt(P[f]), T = A[d] = r.getPixelForValue(P[d], v), D = A[f] = o || M ? a.getBasePixel() : a.getPixelForValue(c ? this.applyStack(a, P, c) : P[f], v);
      A.skip = isNaN(T) || isNaN(D) || M, A.stop = v > 0 && Math.abs(P[d] - x[d]) > m, g && (A.parsed = P, A.raw = l.data[v]), h && (A.options = u || this.resolveDataElementOptions(v, w.active ? "active" : i)), y || this.updateElement(w, v, A, i), x = P;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, n = t.dataset, s = n.options && n.options.borderWidth || 0, i = t.data || [];
    if (!i.length)
      return s;
    const o = i[0].size(this.resolveDataElementOptions(0)), r = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
    return Math.max(s, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
z(er, "id", "line"), z(er, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), z(er, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class ji extends Ue {
  constructor(t, n) {
    super(t, n), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart, i = s.data.labels || [], o = yo(n._parsed[t].r, s.options.locale);
    return {
      label: i[t] || "",
      value: o
    };
  }
  parseObjectData(t, n, s, i) {
    return gg.bind(this)(t, n, s, i);
  }
  update(t) {
    const n = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(n, 0, n.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta, n = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return t.data.forEach((s, i) => {
      const o = this.getParsed(i).r;
      !isNaN(o) && this.chart.getDataVisibility(i) && (o < n.min && (n.min = o), o > n.max && (n.max = o));
    }), n;
  }
  _updateRadius() {
    const t = this.chart, n = t.chartArea, s = t.options, i = Math.min(n.right - n.left, n.bottom - n.top), o = Math.max(i / 2, 0), r = Math.max(s.cutoutPercentage ? o / 100 * s.cutoutPercentage : 1, 0), a = (o - r) / t.getVisibleDatasetCount();
    this.outerRadius = o - a * this.index, this.innerRadius = this.outerRadius - a;
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", r = this.chart, c = r.options.animation, l = this._cachedMeta.rScale, u = l.xCenter, h = l.yCenter, d = l.getIndexAngle(0) - 0.5 * $t;
    let f = d, p;
    const g = 360 / this.countVisibleElements();
    for (p = 0; p < n; ++p)
      f += this._computeAngle(p, i, g);
    for (p = n; p < n + s; p++) {
      const m = t[p];
      let y = f, b = f + this._computeAngle(p, i, g), _ = r.getDataVisibility(p) ? l.getDistanceFromCenterForValue(this.getParsed(p).r) : 0;
      f = b, o && (c.animateScale && (_ = 0), c.animateRotate && (y = b = d));
      const x = {
        x: u,
        y: h,
        innerRadius: 0,
        outerRadius: _,
        startAngle: y,
        endAngle: b,
        options: this.resolveDataElementOptions(p, m.active ? "active" : i)
      };
      this.updateElement(m, p, x, i);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let n = 0;
    return t.data.forEach((s, i) => {
      !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && n++;
    }), n;
  }
  _computeAngle(t, n, s) {
    return this.chart.getDataVisibility(t) ? ze(this.resolveDataElementOptions(t, n).angle || s) : 0;
  }
}
z(ji, "id", "polarArea"), z(ji, "defaults", {
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !0
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius"
      ]
    }
  },
  indexAxis: "r",
  startAngle: 0
}), z(ji, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const n = t.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: s, color: i } } = t.legend.options;
            return n.labels.map((o, r) => {
              const c = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: c.backgroundColor,
                strokeStyle: c.borderColor,
                fontColor: i,
                lineWidth: c.borderWidth,
                pointStyle: s,
                hidden: !t.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(t, n, s) {
        s.chart.toggleDataVisibility(n.index), s.chart.update();
      }
    }
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      beginAtZero: !0,
      grid: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      startAngle: 0
    }
  }
});
class gc extends rs {
}
z(gc, "id", "pie"), z(gc, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class nr extends Ue {
  getLabelAndValue(t) {
    const n = this._cachedMeta.vScale, s = this.getParsed(t);
    return {
      label: n.getLabels()[t],
      value: "" + n.getLabelForValue(s[n.axis])
    };
  }
  parseObjectData(t, n, s, i) {
    return gg.bind(this)(t, n, s, i);
  }
  update(t) {
    const n = this._cachedMeta, s = n.dataset, i = n.data || [], o = n.iScale.getLabels();
    if (s.points = i, t !== "resize") {
      const r = this.resolveDatasetElementOptions(t);
      this.options.showLine || (r.borderWidth = 0);
      const a = {
        _loop: !0,
        _fullLoop: o.length === i.length,
        options: r
      };
      this.updateElement(s, void 0, a, t);
    }
    this.updateElements(i, 0, i.length, t);
  }
  updateElements(t, n, s, i) {
    const o = this._cachedMeta.rScale, r = i === "reset";
    for (let a = n; a < n + s; a++) {
      const c = t[a], l = this.resolveDataElementOptions(a, c.active ? "active" : i), u = o.getPointPositionForValue(a, this.getParsed(a).r), h = r ? o.xCenter : u.x, d = r ? o.yCenter : u.y, f = {
        x: h,
        y: d,
        angle: u.angle,
        skip: isNaN(h) || isNaN(d),
        options: l
      };
      this.updateElement(c, a, f, i);
    }
  }
}
z(nr, "id", "radar"), z(nr, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), z(nr, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class sr extends Ue {
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart.data.labels || [], { xScale: i, yScale: o } = n, r = this.getParsed(t), a = i.getLabelForValue(r.x), c = o.getLabelForValue(r.y);
    return {
      label: s[t] || "",
      value: "(" + a + ", " + c + ")"
    };
  }
  update(t) {
    const n = this._cachedMeta, { data: s = [] } = n, i = this.chart._animationsDisabled;
    let { start: o, count: r } = rg(n, s, i);
    if (this._drawStart = o, this._drawCount = r, ag(n) && (o = 0, r = s.length), this.options.showLine) {
      this.datasetElementType || this.addElements();
      const { dataset: a, _dataset: c } = n;
      a._chart = this.chart, a._datasetIndex = this.index, a._decimated = !!c._decimated, a.points = s;
      const l = this.resolveDatasetElementOptions(t);
      l.segment = this.options.segment, this.updateElement(a, void 0, {
        animated: !i,
        options: l
      }, t);
    } else this.datasetElementType && (delete n.dataset, this.datasetElementType = !1);
    this.updateElements(s, o, r, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", { iScale: r, vScale: a, _stacked: c, _dataset: l } = this._cachedMeta, u = this.resolveDataElementOptions(n, i), h = this.getSharedOptions(u), d = this.includeOptions(i, h), f = r.axis, p = a.axis, { spanGaps: g, segment: m } = this.options, y = Ws(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || i === "none";
    let _ = n > 0 && this.getParsed(n - 1);
    for (let x = n; x < n + s; ++x) {
      const v = t[x], w = this.getParsed(x), A = b ? v : {}, P = gt(w[p]), M = A[f] = r.getPixelForValue(w[f], x), T = A[p] = o || P ? a.getBasePixel() : a.getPixelForValue(c ? this.applyStack(a, w, c) : w[p], x);
      A.skip = isNaN(M) || isNaN(T) || P, A.stop = x > 0 && Math.abs(w[f] - _[f]) > y, m && (A.parsed = w, A.raw = l.data[x]), d && (A.options = h || this.resolveDataElementOptions(x, v.active ? "active" : i)), b || this.updateElement(v, x, A, i), _ = w;
    }
    this.updateSharedOptions(h, i, u);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, n = t.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let c = n.length - 1; c >= 0; --c)
        a = Math.max(a, n[c].size(this.resolveDataElementOptions(c)) / 2);
      return a > 0 && a;
    }
    const s = t.dataset, i = s.options && s.options.borderWidth || 0;
    if (!n.length)
      return i;
    const o = n[0].size(this.resolveDataElementOptions(0)), r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(i, o, r) / 2;
  }
}
z(sr, "id", "scatter"), z(sr, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), z(sr, "overrides", {
  interaction: {
    mode: "point"
  },
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
var kx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: Jo,
  BubbleController: tr,
  DoughnutController: rs,
  LineController: er,
  PieController: gc,
  PolarAreaController: ji,
  RadarController: nr,
  ScatterController: sr
});
function Qn() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Rl {
  constructor(t) {
    z(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(Rl.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return Qn();
  }
  parse() {
    return Qn();
  }
  format() {
    return Qn();
  }
  add() {
    return Qn();
  }
  diff() {
    return Qn();
  }
  startOf() {
    return Qn();
  }
  endOf() {
    return Qn();
  }
}
var Dx = {
  _date: Rl
};
function Ex(e, t, n, s) {
  const { controller: i, data: o, _sorted: r } = e, a = i._cachedMeta.iScale, c = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? tv : xn;
    if (s) {
      if (i._sharedOptions) {
        const u = o[0], h = typeof u.getRange == "function" && u.getRange(t);
        if (h) {
          const d = l(o, t, n - h), f = l(o, t, n + h);
          return {
            lo: d.lo,
            hi: f.hi
          };
        }
      }
    } else {
      const u = l(o, t, n);
      if (c) {
        const { vScale: h } = i._cachedMeta, { _parsed: d } = e, f = d.slice(0, u.lo + 1).reverse().findIndex((g) => !gt(g[h.axis]));
        u.lo -= Math.max(0, f);
        const p = d.slice(u.hi).findIndex((g) => !gt(g[h.axis]));
        u.hi += Math.max(0, p);
      }
      return u;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Jr(e, t, n, s, i) {
  const o = e.getSortedVisibleDatasetMetas(), r = n[t];
  for (let a = 0, c = o.length; a < c; ++a) {
    const { index: l, data: u } = o[a], { lo: h, hi: d } = Ex(o[a], t, r, i);
    for (let f = h; f <= d; ++f) {
      const p = u[f];
      p.skip || s(p, l, f);
    }
  }
}
function Ox(e) {
  const t = e.indexOf("x") !== -1, n = e.indexOf("y") !== -1;
  return function(s, i) {
    const o = t ? Math.abs(s.x - i.x) : 0, r = n ? Math.abs(s.y - i.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function La(e, t, n, s, i) {
  const o = [];
  return !i && !e.isPointInArea(t) || Jr(e, n, t, function(a, c, l) {
    !i && !_n(a, e.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: c,
      index: l
    });
  }, !0), o;
}
function Rx(e, t, n, s) {
  let i = [];
  function o(r, a, c) {
    const { startAngle: l, endAngle: u } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: h } = eg(r, {
      x: t.x,
      y: t.y
    });
    qi(h, l, u) && i.push({
      element: r,
      datasetIndex: a,
      index: c
    });
  }
  return Jr(e, n, t, o), i;
}
function Lx(e, t, n, s, i, o) {
  let r = [];
  const a = Ox(n);
  let c = Number.POSITIVE_INFINITY;
  function l(u, h, d) {
    const f = u.inRange(t.x, t.y, i);
    if (s && !f)
      return;
    const p = u.getCenterPoint(i);
    if (!(!!o || e.isPointInArea(p)) && !f)
      return;
    const m = a(t, p);
    m < c ? (r = [
      {
        element: u,
        datasetIndex: h,
        index: d
      }
    ], c = m) : m === c && r.push({
      element: u,
      datasetIndex: h,
      index: d
    });
  }
  return Jr(e, n, t, l), r;
}
function Ia(e, t, n, s, i, o) {
  return !o && !e.isPointInArea(t) ? [] : n === "r" && !s ? Rx(e, t, n, i) : Lx(e, t, n, s, i, o);
}
function Th(e, t, n, s, i) {
  const o = [], r = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Jr(e, n, t, (c, l, u) => {
    c[r] && c[r](t[n], i) && (o.push({
      element: c,
      datasetIndex: l,
      index: u
    }), a = a || c.inRange(t.x, t.y, i));
  }), s && !a ? [] : o;
}
var Ix = {
  modes: {
    index(e, t, n, s) {
      const i = ns(t, e), o = n.axis || "x", r = n.includeInvisible || !1, a = n.intersect ? La(e, i, o, s, r) : Ia(e, i, o, !1, s, r), c = [];
      return a.length ? (e.getSortedVisibleDatasetMetas().forEach((l) => {
        const u = a[0].index, h = l.data[u];
        h && !h.skip && c.push({
          element: h,
          datasetIndex: l.index,
          index: u
        });
      }), c) : [];
    },
    dataset(e, t, n, s) {
      const i = ns(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      let a = n.intersect ? La(e, i, o, s, r) : Ia(e, i, o, !1, s, r);
      if (a.length > 0) {
        const c = a[0].datasetIndex, l = e.getDatasetMeta(c).data;
        a = [];
        for (let u = 0; u < l.length; ++u)
          a.push({
            element: l[u],
            datasetIndex: c,
            index: u
          });
      }
      return a;
    },
    point(e, t, n, s) {
      const i = ns(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return La(e, i, o, s, r);
    },
    nearest(e, t, n, s) {
      const i = ns(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return Ia(e, i, o, n.intersect, s, r);
    },
    x(e, t, n, s) {
      const i = ns(t, e);
      return Th(e, i, "x", n.intersect, s);
    },
    y(e, t, n, s) {
      const i = ns(t, e);
      return Th(e, i, "y", n.intersect, s);
    }
  }
};
const Pg = [
  "left",
  "top",
  "right",
  "bottom"
];
function xi(e, t) {
  return e.filter((n) => n.pos === t);
}
function Mh(e, t) {
  return e.filter((n) => Pg.indexOf(n.pos) === -1 && n.box.axis === t);
}
function _i(e, t) {
  return e.sort((n, s) => {
    const i = t ? s : n, o = t ? n : s;
    return i.weight === o.weight ? i.index - o.index : i.weight - o.weight;
  });
}
function Nx(e) {
  const t = [];
  let n, s, i, o, r, a;
  for (n = 0, s = (e || []).length; n < s; ++n)
    i = e[n], { position: o, options: { stack: r, stackWeight: a = 1 } } = i, t.push({
      index: n,
      box: i,
      pos: o,
      horizontal: i.isHorizontal(),
      weight: i.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function $x(e) {
  const t = {};
  for (const n of e) {
    const { stack: s, pos: i, stackWeight: o } = n;
    if (!s || !Pg.includes(i))
      continue;
    const r = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function Vx(e, t) {
  const n = $x(e), { vBoxMaxWidth: s, hBoxMaxHeight: i } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: c } = a.box, l = n[a.stack], u = l && a.stackWeight / l.weight;
    a.horizontal ? (a.width = u ? u * s : c && t.availableWidth, a.height = i) : (a.width = s, a.height = u ? u * i : c && t.availableHeight);
  }
  return n;
}
function Fx(e) {
  const t = Nx(e), n = _i(t.filter((l) => l.box.fullSize), !0), s = _i(xi(t, "left"), !0), i = _i(xi(t, "right")), o = _i(xi(t, "top"), !0), r = _i(xi(t, "bottom")), a = Mh(t, "x"), c = Mh(t, "y");
  return {
    fullSize: n,
    leftAndTop: s.concat(o),
    rightAndBottom: i.concat(c).concat(r).concat(a),
    chartArea: xi(t, "chartArea"),
    vertical: s.concat(i).concat(c),
    horizontal: o.concat(r).concat(a)
  };
}
function Ch(e, t, n, s) {
  return Math.max(e[n], t[n]) + Math.max(e[s], t[s]);
}
function Tg(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function jx(e, t, n, s) {
  const { pos: i, box: o } = n, r = e.maxPadding;
  if (!mt(i)) {
    n.size && (e[i] -= n.size);
    const h = s[n.stack] || {
      size: 0,
      count: 1
    };
    h.size = Math.max(h.size, n.horizontal ? o.height : o.width), n.size = h.size / h.count, e[i] += n.size;
  }
  o.getPadding && Tg(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Ch(r, e, "left", "right")), c = Math.max(0, t.outerHeight - Ch(r, e, "top", "bottom")), l = a !== e.w, u = c !== e.h;
  return e.w = a, e.h = c, n.horizontal ? {
    same: l,
    other: u
  } : {
    same: u,
    other: l
  };
}
function Bx(e) {
  const t = e.maxPadding;
  function n(s) {
    const i = Math.max(t[s] - e[s], 0);
    return e[s] += i, i;
  }
  e.y += n("top"), e.x += n("left"), n("right"), n("bottom");
}
function Hx(e, t) {
  const n = t.maxPadding;
  function s(i) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return i.forEach((r) => {
      o[r] = Math.max(t[r], n[r]);
    }), o;
  }
  return s(e ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Ci(e, t, n, s) {
  const i = [];
  let o, r, a, c, l, u;
  for (o = 0, r = e.length, l = 0; o < r; ++o) {
    a = e[o], c = a.box, c.update(a.width || t.w, a.height || t.h, Hx(a.horizontal, t));
    const { same: h, other: d } = jx(t, n, a, s);
    l |= h && i.length, u = u || d, c.fullSize || i.push(a);
  }
  return l && Ci(i, t, n, s) || u;
}
function Oo(e, t, n, s, i) {
  e.top = n, e.left = t, e.right = t + s, e.bottom = n + i, e.width = s, e.height = i;
}
function kh(e, t, n, s) {
  const i = n.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const c = a.box, l = s[a.stack] || {
      placed: 0,
      weight: 1
    }, u = a.stackWeight / l.weight || 1;
    if (a.horizontal) {
      const h = t.w * u, d = l.size || c.height;
      Xi(l.start) && (r = l.start), c.fullSize ? Oo(c, i.left, r, n.outerWidth - i.right - i.left, d) : Oo(c, t.left + l.placed, r, h, d), l.start = r, l.placed += h, r = c.bottom;
    } else {
      const h = t.h * u, d = l.size || c.width;
      Xi(l.start) && (o = l.start), c.fullSize ? Oo(c, o, i.top, d, n.outerHeight - i.bottom - i.top) : Oo(c, o, t.top + l.placed, d, h), l.start = o, l.placed += h, o = c.right;
    }
  }
  t.x = o, t.y = r;
}
var de = {
  addBox(e, t) {
    e.boxes || (e.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(n) {
            t.draw(n);
          }
        }
      ];
    }, e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    t.fullSize = n.fullSize, t.position = n.position, t.weight = n.weight;
  },
  update(e, t, n, s) {
    if (!e)
      return;
    const i = pe(e.options.layout.padding), o = Math.max(t - i.width, 0), r = Math.max(n - i.height, 0), a = Fx(e.boxes), c = a.vertical, l = a.horizontal;
    Pt(e.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const u = c.reduce((g, m) => m.box.options && m.box.options.display === !1 ? g : g + 1, 0) || 1, h = Object.freeze({
      outerWidth: t,
      outerHeight: n,
      padding: i,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / u,
      hBoxMaxHeight: r / 2
    }), d = Object.assign({}, i);
    Tg(d, pe(s));
    const f = Object.assign({
      maxPadding: d,
      w: o,
      h: r,
      x: i.left,
      y: i.top
    }, i), p = Vx(c.concat(l), h);
    Ci(a.fullSize, f, h, p), Ci(c, f, h, p), Ci(l, f, h, p) && Ci(c, f, h, p), Bx(f), kh(a.leftAndTop, f, h, p), f.x += f.w, f.y += f.h, kh(a.rightAndBottom, f, h, p), e.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, Pt(a.chartArea, (g) => {
      const m = g.box;
      Object.assign(m, e.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Mg {
  acquireContext(t, n) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, s) {
  }
  removeEventListener(t, n, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, s, i) {
    return n = Math.max(0, n || t.width), s = s || t.height, {
      width: n,
      height: Math.max(0, i ? Math.floor(n / i) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class zx extends Mg {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const ir = "$chartjs", Wx = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Dh = (e) => e === null || e === "";
function Ux(e, t) {
  const n = e.style, s = e.getAttribute("height"), i = e.getAttribute("width");
  if (e[ir] = {
    initial: {
      height: s,
      width: i,
      style: {
        display: n.display,
        height: n.height,
        width: n.width
      }
    }
  }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", Dh(i)) {
    const o = fh(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (Dh(s))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const o = fh(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const Cg = Gv ? {
  passive: !0
} : !1;
function Yx(e, t, n) {
  e && e.addEventListener(t, n, Cg);
}
function Gx(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, Cg);
}
function Kx(e, t) {
  const n = Wx[e.type] || e.type, { x: s, y: i } = ns(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null
  };
}
function Ar(e, t) {
  for (const n of e)
    if (n === t || n.contains(t))
      return !0;
}
function Xx(e, t, n) {
  const s = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ar(a.addedNodes, s), r = r && !Ar(a.removedNodes, s);
    r && n();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
function qx(e, t, n) {
  const s = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ar(a.removedNodes, s), r = r && !Ar(a.addedNodes, s);
    r && n();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
const Qi = /* @__PURE__ */ new Map();
let Eh = 0;
function kg() {
  const e = window.devicePixelRatio;
  e !== Eh && (Eh = e, Qi.forEach((t, n) => {
    n.currentDevicePixelRatio !== e && t();
  }));
}
function Zx(e, t) {
  Qi.size || window.addEventListener("resize", kg), Qi.set(e, t);
}
function Qx(e) {
  Qi.delete(e), Qi.size || window.removeEventListener("resize", kg);
}
function Jx(e, t, n) {
  const s = e.canvas, i = s && Ol(s);
  if (!i)
    return;
  const o = og((a, c) => {
    const l = i.clientWidth;
    n(a, c), l < i.clientWidth && n();
  }, window), r = new ResizeObserver((a) => {
    const c = a[0], l = c.contentRect.width, u = c.contentRect.height;
    l === 0 && u === 0 || o(l, u);
  });
  return r.observe(i), Zx(e, o), r;
}
function Na(e, t, n) {
  n && n.disconnect(), t === "resize" && Qx(e);
}
function t_(e, t, n) {
  const s = e.canvas, i = og((o) => {
    e.ctx !== null && n(Kx(o, e));
  }, e);
  return Yx(s, t, i), i;
}
class e_ extends Mg {
  acquireContext(t, n) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Ux(t, n), s) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[ir])
      return !1;
    const s = n[ir].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      gt(r) ? n.removeAttribute(o) : n.setAttribute(o, r);
    });
    const i = s.style || {};
    return Object.keys(i).forEach((o) => {
      n.style[o] = i[o];
    }), n.width = n.width, delete n[ir], !0;
  }
  addEventListener(t, n, s) {
    this.removeEventListener(t, n);
    const i = t.$proxies || (t.$proxies = {}), r = {
      attach: Xx,
      detach: qx,
      resize: Jx
    }[n] || t_;
    i[n] = r(t, n, s);
  }
  removeEventListener(t, n) {
    const s = t.$proxies || (t.$proxies = {}), i = s[n];
    if (!i)
      return;
    ({
      attach: Na,
      detach: Na,
      resize: Na
    }[n] || Gx)(t, n, i), s[n] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, s, i) {
    return Yv(t, n, s, i);
  }
  isAttached(t) {
    const n = t && Ol(t);
    return !!(n && n.isConnected);
  }
}
function n_(e) {
  return !El() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? zx : e_;
}
var Qo;
let Pn = (Qo = class {
  constructor() {
    z(this, "x");
    z(this, "y");
    z(this, "active", !1);
    z(this, "options");
    z(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: n, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: n,
      y: s
    };
  }
  hasValue() {
    return Ws(this.x) && Ws(this.y);
  }
  getProps(t, n) {
    const s = this.$animations;
    if (!n || !s)
      return this;
    const i = {};
    return t.forEach((o) => {
      i[o] = s[o] && s[o].active() ? s[o]._to : this[o];
    }), i;
  }
}, z(Qo, "defaults", {}), z(Qo, "defaultRoutes"), Qo);
function s_(e, t) {
  const n = e.options.ticks, s = i_(e), i = Math.min(n.maxTicksLimit || s, s), o = n.major.enabled ? r_(t) : [], r = o.length, a = o[0], c = o[r - 1], l = [];
  if (r > i)
    return a_(t, l, o, r / i), l;
  const u = o_(o, t, i);
  if (r > 0) {
    let h, d;
    const f = r > 1 ? Math.round((c - a) / (r - 1)) : null;
    for (Ro(t, l, u, gt(f) ? 0 : a - f, a), h = 0, d = r - 1; h < d; h++)
      Ro(t, l, u, o[h], o[h + 1]);
    return Ro(t, l, u, c, gt(f) ? t.length : c + f), l;
  }
  return Ro(t, l, u), l;
}
function i_(e) {
  const t = e.options.offset, n = e._tickSize(), s = e._length / n + (t ? 0 : 1), i = e._maxLength / n;
  return Math.floor(Math.min(s, i));
}
function o_(e, t, n) {
  const s = c_(e), i = t.length / n;
  if (!s)
    return Math.max(i, 1);
  const o = X0(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const c = o[r];
    if (c > i)
      return c;
  }
  return Math.max(i, 1);
}
function r_(e) {
  const t = [];
  let n, s;
  for (n = 0, s = e.length; n < s; n++)
    e[n].major && t.push(n);
  return t;
}
function a_(e, t, n, s) {
  let i = 0, o = n[0], r;
  for (s = Math.ceil(s), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), i++, o = n[i * s]);
}
function Ro(e, t, n, s, i) {
  const o = ft(s, 0), r = Math.min(ft(i, e.length), e.length);
  let a = 0, c, l, u;
  for (n = Math.ceil(n), i && (c = i - s, n = c / Math.floor(c / n)), u = o; u < 0; )
    a++, u = Math.round(o + a * n);
  for (l = Math.max(o, 0); l < r; l++)
    l === u && (t.push(e[l]), a++, u = Math.round(o + a * n));
}
function c_(e) {
  const t = e.length;
  let n, s;
  if (t < 2)
    return !1;
  for (s = e[0], n = 1; n < t; ++n)
    if (e[n] - e[n - 1] !== s)
      return !1;
  return s;
}
const l_ = (e) => e === "left" ? "right" : e === "right" ? "left" : e, Oh = (e, t, n) => t === "top" || t === "left" ? e[t] + n : e[t] - n, Rh = (e, t) => Math.min(t || e, e);
function Lh(e, t) {
  const n = [], s = e.length / t, i = e.length;
  let o = 0;
  for (; o < i; o += s)
    n.push(e[Math.floor(o)]);
  return n;
}
function u_(e, t, n) {
  const s = e.ticks.length, i = Math.min(t, s - 1), o = e._startPixel, r = e._endPixel, a = 1e-6;
  let c = e.getPixelForTick(i), l;
  if (!(n && (s === 1 ? l = Math.max(c - o, r - c) : t === 0 ? l = (e.getPixelForTick(1) - c) / 2 : l = (c - e.getPixelForTick(i - 1)) / 2, c += i < t ? l : -l, c < o - a || c > r + a)))
    return c;
}
function h_(e, t) {
  Pt(e, (n) => {
    const s = n.gc, i = s.length / 2;
    let o;
    if (i > t) {
      for (o = 0; o < i; ++o)
        delete n.data[s[o]];
      s.splice(0, i);
    }
  });
}
function wi(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Ih(e, t) {
  if (!e.display)
    return 0;
  const n = Jt(e.font, t), s = pe(e.padding);
  return (Bt(e.text) ? e.text.length : 1) * n.lineHeight + s.height;
}
function d_(e, t) {
  return Un(e, {
    scale: t,
    type: "scale"
  });
}
function f_(e, t, n) {
  return Un(e, {
    tick: n,
    index: t,
    type: "tick"
  });
}
function p_(e, t, n) {
  let s = Pl(e);
  return (n && t !== "right" || !n && t === "right") && (s = l_(s)), s;
}
function g_(e, t, n, s) {
  const { top: i, left: o, bottom: r, right: a, chart: c } = e, { chartArea: l, scales: u } = c;
  let h = 0, d, f, p;
  const g = r - i, m = a - o;
  if (e.isHorizontal()) {
    if (f = ue(s, o, a), mt(n)) {
      const y = Object.keys(n)[0], b = n[y];
      p = u[y].getPixelForValue(b) + g - t;
    } else n === "center" ? p = (l.bottom + l.top) / 2 + g - t : p = Oh(e, n, t);
    d = a - o;
  } else {
    if (mt(n)) {
      const y = Object.keys(n)[0], b = n[y];
      f = u[y].getPixelForValue(b) - m + t;
    } else n === "center" ? f = (l.left + l.right) / 2 - m + t : f = Oh(e, n, t);
    p = ue(s, r, i), h = n === "left" ? -qt : qt;
  }
  return {
    titleX: f,
    titleY: p,
    maxWidth: d,
    rotation: h
  };
}
class xs extends Pn {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: s, _suggestedMax: i } = this;
    return t = Ce(t, Number.POSITIVE_INFINITY), n = Ce(n, Number.NEGATIVE_INFINITY), s = Ce(s, Number.POSITIVE_INFINITY), i = Ce(i, Number.NEGATIVE_INFINITY), {
      min: Ce(t, s),
      max: Ce(n, i),
      minDefined: Kt(t),
      maxDefined: Kt(n)
    };
  }
  getMinMax(t) {
    let { min: n, max: s, minDefined: i, maxDefined: o } = this.getUserBounds(), r;
    if (i && o)
      return {
        min: n,
        max: s
      };
    const a = this.getMatchingVisibleMetas();
    for (let c = 0, l = a.length; c < l; ++c)
      r = a[c].controller.getMinMax(this, t), i || (n = Math.min(n, r.min)), o || (s = Math.max(s, r.max));
    return n = o && n > s ? s : n, s = i && n > s ? n : s, {
      min: Ce(n, Ce(s, n)),
      max: Ce(s, Ce(n, s))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    Et(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, n, s) {
    const { beginAtZero: i, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = n, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Av(this, o, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const c = a < this.ticks.length;
    this._convertTicksToLabels(c ? Lh(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = s_(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), c && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, n, s;
    this.isHorizontal() ? (n = this.left, s = this.right) : (n = this.top, s = this.bottom, t = !t), this._startPixel = n, this._endPixel = s, this._reversePixels = t, this._length = s - n, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Et(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Et(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Et(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Et(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Et(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let s, i, o;
    for (s = 0, i = t.length; s < i; s++)
      o = t[s], o.label = Et(n.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    Et(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Et(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, n = t.ticks, s = Rh(this.ticks.length, t.ticks.maxTicksLimit), i = n.minRotation || 0, o = n.maxRotation;
    let r = i, a, c, l;
    if (!this._isVisible() || !n.display || i >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(), h = u.widest.width, d = u.highest.height, f = ne(this.chart.width - h, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), h + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), c = this.maxHeight - wi(t.grid) - n.padding - Ih(t.title, this.chart.options.font), l = Math.sqrt(h * h + d * d), r = Sl(Math.min(Math.asin(ne((u.highest.height + 6) / a, -1, 1)), Math.asin(ne(c / l, -1, 1)) - Math.asin(ne(d / l, -1, 1)))), r = Math.max(i, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    Et(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Et(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: n, options: { ticks: s, title: i, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const c = Ih(i, n.options.font);
      if (a ? (t.width = this.maxWidth, t.height = wi(o) + c) : (t.height = this.maxHeight, t.width = wi(o) + c), s.display && this.ticks.length) {
        const { first: l, last: u, widest: h, highest: d } = this._getLabelSizes(), f = s.padding * 2, p = ze(this.labelRotation), g = Math.cos(p), m = Math.sin(p);
        if (a) {
          const y = s.mirror ? 0 : m * h.width + g * d.height;
          t.height = Math.min(this.maxHeight, t.height + y + f);
        } else {
          const y = s.mirror ? 0 : g * h.width + m * d.height;
          t.width = Math.min(this.maxWidth, t.width + y + f);
        }
        this._calculatePadding(l, u, m, g);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = n.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = n.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, n, s, i) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, c = this.labelRotation !== 0, l = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left, h = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, f = 0;
      c ? l ? (d = i * t.width, f = s * n.height) : (d = s * t.height, f = i * n.width) : o === "start" ? f = n.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, f = n.width / 2), this.paddingLeft = Math.max((d - u + r) * this.width / (this.width - u), 0), this.paddingRight = Math.max((f - h + r) * this.width / (this.width - h), 0);
    } else {
      let u = n.height / 2, h = t.height / 2;
      o === "start" ? (u = 0, h = t.height) : o === "end" && (u = n.height, h = 0), this.paddingTop = u + r, this.paddingBottom = h + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    Et(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, s;
    for (n = 0, s = t.length; n < s; n++)
      gt(t[n].label) && (t.splice(n, 1), s--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let s = this.ticks;
      n < s.length && (s = Lh(s, n)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, n, s) {
    const { ctx: i, _longestTextCache: o } = this, r = [], a = [], c = Math.floor(n / Rh(n, s));
    let l = 0, u = 0, h, d, f, p, g, m, y, b, _, x, v;
    for (h = 0; h < n; h += c) {
      if (p = t[h].label, g = this._resolveTickFontOptions(h), i.font = m = g.string, y = o[m] = o[m] || {
        data: {},
        gc: []
      }, b = g.lineHeight, _ = x = 0, !gt(p) && !Bt(p))
        _ = wr(i, y.data, y.gc, _, p), x = b;
      else if (Bt(p))
        for (d = 0, f = p.length; d < f; ++d)
          v = p[d], !gt(v) && !Bt(v) && (_ = wr(i, y.data, y.gc, _, v), x += b);
      r.push(_), a.push(x), l = Math.max(_, l), u = Math.max(x, u);
    }
    h_(o, n);
    const w = r.indexOf(l), A = a.indexOf(u), P = (M) => ({
      width: r[M] || 0,
      height: a[M] || 0
    });
    return {
      first: P(0),
      last: P(n - 1),
      widest: P(w),
      highest: P(A),
      widths: r,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return J0(this._alignToPixels ? Zn(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const s = n[t];
      return s.$context || (s.$context = f_(this.getContext(), t, s));
    }
    return this.$context || (this.$context = d_(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, n = ze(this.labelRotation), s = Math.abs(Math.cos(n)), i = Math.abs(Math.sin(n)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, c = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? c * s > a * i ? a / s : c / i : c * i < a * s ? c / s : a / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis, s = this.chart, i = this.options, { grid: o, position: r, border: a } = i, c = o.offset, l = this.isHorizontal(), h = this.ticks.length + (c ? 1 : 0), d = wi(o), f = [], p = a.setContext(this.getContext()), g = p.display ? p.width : 0, m = g / 2, y = function(H) {
      return Zn(s, H, g);
    };
    let b, _, x, v, w, A, P, M, T, D, C, I;
    if (r === "top")
      b = y(this.bottom), A = this.bottom - d, M = b - m, D = y(t.top) + m, I = t.bottom;
    else if (r === "bottom")
      b = y(this.top), D = t.top, I = y(t.bottom) - m, A = b + m, M = this.top + d;
    else if (r === "left")
      b = y(this.right), w = this.right - d, P = b - m, T = y(t.left) + m, C = t.right;
    else if (r === "right")
      b = y(this.left), T = t.left, C = y(t.right) - m, w = b + m, P = this.left + d;
    else if (n === "x") {
      if (r === "center")
        b = y((t.top + t.bottom) / 2 + 0.5);
      else if (mt(r)) {
        const H = Object.keys(r)[0], j = r[H];
        b = y(this.chart.scales[H].getPixelForValue(j));
      }
      D = t.top, I = t.bottom, A = b + m, M = A + d;
    } else if (n === "y") {
      if (r === "center")
        b = y((t.left + t.right) / 2);
      else if (mt(r)) {
        const H = Object.keys(r)[0], j = r[H];
        b = y(this.chart.scales[H].getPixelForValue(j));
      }
      w = b - m, P = w - d, T = t.left, C = t.right;
    }
    const G = ft(i.ticks.maxTicksLimit, h), W = Math.max(1, Math.ceil(h / G));
    for (_ = 0; _ < h; _ += W) {
      const H = this.getContext(_), j = o.setContext(H), Q = a.setContext(H), q = j.lineWidth, st = j.color, K = Q.dash || [], k = Q.dashOffset, B = j.tickWidth, U = j.tickColor, O = j.tickBorderDash || [], X = j.tickBorderDashOffset;
      x = u_(this, _, c), x !== void 0 && (v = Zn(s, x, q), l ? w = P = T = C = v : A = M = D = I = v, f.push({
        tx1: w,
        ty1: A,
        tx2: P,
        ty2: M,
        x1: T,
        y1: D,
        x2: C,
        y2: I,
        width: q,
        color: st,
        borderDash: K,
        borderDashOffset: k,
        tickWidth: B,
        tickColor: U,
        tickBorderDash: O,
        tickBorderDashOffset: X
      }));
    }
    return this._ticksLength = h, this._borderValue = b, f;
  }
  _computeLabelItems(t) {
    const n = this.axis, s = this.options, { position: i, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: c, crossAlign: l, padding: u, mirror: h } = o, d = wi(s.grid), f = d + u, p = h ? -u : f, g = -ze(this.labelRotation), m = [];
    let y, b, _, x, v, w, A, P, M, T, D, C, I = "middle";
    if (i === "top")
      w = this.bottom - p, A = this._getXAxisLabelAlignment();
    else if (i === "bottom")
      w = this.top + p, A = this._getXAxisLabelAlignment();
    else if (i === "left") {
      const W = this._getYAxisLabelAlignment(d);
      A = W.textAlign, v = W.x;
    } else if (i === "right") {
      const W = this._getYAxisLabelAlignment(d);
      A = W.textAlign, v = W.x;
    } else if (n === "x") {
      if (i === "center")
        w = (t.top + t.bottom) / 2 + f;
      else if (mt(i)) {
        const W = Object.keys(i)[0], H = i[W];
        w = this.chart.scales[W].getPixelForValue(H) + f;
      }
      A = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (i === "center")
        v = (t.left + t.right) / 2 - f;
      else if (mt(i)) {
        const W = Object.keys(i)[0], H = i[W];
        v = this.chart.scales[W].getPixelForValue(H);
      }
      A = this._getYAxisLabelAlignment(d).textAlign;
    }
    n === "y" && (c === "start" ? I = "top" : c === "end" && (I = "bottom"));
    const G = this._getLabelSizes();
    for (y = 0, b = a.length; y < b; ++y) {
      _ = a[y], x = _.label;
      const W = o.setContext(this.getContext(y));
      P = this.getPixelForTick(y) + o.labelOffset, M = this._resolveTickFontOptions(y), T = M.lineHeight, D = Bt(x) ? x.length : 1;
      const H = D / 2, j = W.color, Q = W.textStrokeColor, q = W.textStrokeWidth;
      let st = A;
      r ? (v = P, A === "inner" && (y === b - 1 ? st = this.options.reverse ? "left" : "right" : y === 0 ? st = this.options.reverse ? "right" : "left" : st = "center"), i === "top" ? l === "near" || g !== 0 ? C = -D * T + T / 2 : l === "center" ? C = -G.highest.height / 2 - H * T + T : C = -G.highest.height + T / 2 : l === "near" || g !== 0 ? C = T / 2 : l === "center" ? C = G.highest.height / 2 - H * T : C = G.highest.height - D * T, h && (C *= -1), g !== 0 && !W.showLabelBackdrop && (v += T / 2 * Math.sin(g))) : (w = P, C = (1 - D) * T / 2);
      let K;
      if (W.showLabelBackdrop) {
        const k = pe(W.backdropPadding), B = G.heights[y], U = G.widths[y];
        let O = C - k.top, X = 0 - k.left;
        switch (I) {
          case "middle":
            O -= B / 2;
            break;
          case "bottom":
            O -= B;
            break;
        }
        switch (A) {
          case "center":
            X -= U / 2;
            break;
          case "right":
            X -= U;
            break;
          case "inner":
            y === b - 1 ? X -= U : y > 0 && (X -= U / 2);
            break;
        }
        K = {
          left: X,
          top: O,
          width: U + k.width,
          height: B + k.height,
          color: W.backdropColor
        };
      }
      m.push({
        label: x,
        font: M,
        textOffset: C,
        options: {
          rotation: g,
          color: j,
          strokeColor: Q,
          strokeWidth: q,
          textAlign: st,
          textBaseline: I,
          translation: [
            v,
            w
          ],
          backdrop: K
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-ze(this.labelRotation))
      return t === "top" ? "left" : "right";
    let i = "center";
    return n.align === "start" ? i = "left" : n.align === "end" ? i = "right" : n.align === "inner" && (i = "inner"), i;
  }
  _getYAxisLabelAlignment(t) {
    const { position: n, ticks: { crossAlign: s, mirror: i, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, c = r.widest.width;
    let l, u;
    return n === "left" ? i ? (u = this.right + o, s === "near" ? l = "left" : s === "center" ? (l = "center", u += c / 2) : (l = "right", u += c)) : (u = this.right - a, s === "near" ? l = "right" : s === "center" ? (l = "center", u -= c / 2) : (l = "left", u = this.left)) : n === "right" ? i ? (u = this.left + o, s === "near" ? l = "right" : s === "center" ? (l = "center", u -= c / 2) : (l = "left", u -= c)) : (u = this.left + a, s === "near" ? l = "left" : s === "center" ? (l = "center", u += c / 2) : (l = "right", u = this.right)) : l = "right", {
      textAlign: l,
      x: u
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, n = this.options.position;
    if (n === "left" || n === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (n === "top" || n === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: n }, left: s, top: i, width: o, height: r } = this;
    n && (t.save(), t.fillStyle = n, t.fillRect(s, i, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display)
      return 0;
    const i = this.ticks.findIndex((o) => o.value === t);
    return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid, s = this.ctx, i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (c, l, u) => {
      !u.width || !u.color || (s.save(), s.lineWidth = u.width, s.strokeStyle = u.color, s.setLineDash(u.borderDash || []), s.lineDashOffset = u.borderDashOffset, s.beginPath(), s.moveTo(c.x, c.y), s.lineTo(l.x, l.y), s.stroke(), s.restore());
    };
    if (n.display)
      for (o = 0, r = i.length; o < r; ++o) {
        const c = i[o];
        n.drawOnChartArea && a({
          x: c.x1,
          y: c.y1
        }, {
          x: c.x2,
          y: c.y2
        }, c), n.drawTicks && a({
          x: c.tx1,
          y: c.ty1
        }, {
          x: c.tx2,
          y: c.ty2
        }, {
          color: c.tickColor,
          width: c.tickWidth,
          borderDash: c.tickBorderDash,
          borderDashOffset: c.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: n, options: { border: s, grid: i } } = this, o = s.setContext(this.getContext()), r = s.display ? o.width : 0;
    if (!r)
      return;
    const a = i.setContext(this.getContext(0)).lineWidth, c = this._borderValue;
    let l, u, h, d;
    this.isHorizontal() ? (l = Zn(t, this.left, r) - r / 2, u = Zn(t, this.right, a) + a / 2, h = d = c) : (h = Zn(t, this.top, r) - r / 2, d = Zn(t, this.bottom, a) + a / 2, l = u = c), n.save(), n.lineWidth = o.width, n.strokeStyle = o.color, n.beginPath(), n.moveTo(l, h), n.lineTo(u, d), n.stroke(), n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, i = this._computeLabelArea();
    i && qr(s, i);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, c = r.font, l = r.label, u = r.textOffset;
      ys(s, l, 0, u, c, a);
    }
    i && Zr(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: n, title: s, reverse: i } } = this;
    if (!s.display)
      return;
    const o = Jt(s.font), r = pe(s.padding), a = s.align;
    let c = o.lineHeight / 2;
    n === "bottom" || n === "center" || mt(n) ? (c += r.bottom, Bt(s.text) && (c += o.lineHeight * (s.text.length - 1))) : c += r.top;
    const { titleX: l, titleY: u, maxWidth: h, rotation: d } = g_(this, c, n, a);
    ys(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: h,
      rotation: d,
      textAlign: p_(a, n, i),
      textBaseline: "middle",
      translation: [
        l,
        u
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, n = t.ticks && t.ticks.z || 0, s = ft(t.grid && t.grid.z, -1), i = ft(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== xs.prototype.draw ? [
      {
        z: n,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: s,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: i,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: n,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", i = [];
    let o, r;
    for (o = 0, r = n.length; o < r; ++o) {
      const a = n[o];
      a[s] === this.id && (!t || a.type === t) && i.push(a);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return Jt(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Lo {
  constructor(t, n, s) {
    this.type = t, this.scope = n, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let s;
    b_(n) && (s = this.register(n));
    const i = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in i || (i[o] = t, m_(t, r, s), this.override && Ht.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items, s = t.id, i = this.scope;
    s in n && delete n[s], i && s in Ht[i] && (delete Ht[i][s], this.override && delete ms[s]);
  }
}
function m_(e, t, n) {
  const s = Ki(/* @__PURE__ */ Object.create(null), [
    n ? Ht.get(n) : {},
    Ht.get(t),
    e.defaults
  ]);
  Ht.set(t, s), e.defaultRoutes && y_(t, e.defaultRoutes), e.descriptors && Ht.describe(t, e.descriptors);
}
function y_(e, t) {
  Object.keys(t).forEach((n) => {
    const s = n.split("."), i = s.pop(), o = [
      e
    ].concat(s).join("."), r = t[n].split("."), a = r.pop(), c = r.join(".");
    Ht.route(o, i, c, a);
  });
}
function b_(e) {
  return "id" in e && "defaults" in e;
}
class v_ {
  constructor() {
    this.controllers = new Lo(Ue, "datasets", !0), this.elements = new Lo(Pn, "elements"), this.plugins = new Lo(Object, "plugins"), this.scales = new Lo(xs, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, s) {
    [
      ...n
    ].forEach((i) => {
      const o = s || this._getRegistryForType(i);
      s || o.isForType(i) || o === this.plugins && i.id ? this._exec(t, o, i) : Pt(i, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, n, s) {
    const i = wl(t);
    Et(s["before" + i], [], s), n[t](s), Et(s["after" + i], [], s);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const s = this._typedRegistries[n];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, n, s) {
    const i = n.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return i;
  }
}
var Je = /* @__PURE__ */ new v_();
class x_ {
  constructor() {
    this._init = [];
  }
  notify(t, n, s, i) {
    n === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = i ? this._descriptors(t).filter(i) : this._descriptors(t), r = this._notify(o, t, n, s);
    return n === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, n, s, i) {
    i = i || {};
    for (const o of t) {
      const r = o.plugin, a = r[s], c = [
        n,
        i,
        o.options
      ];
      if (Et(a, c, r) === !1 && i.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    gt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const n = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const s = t && t.config, i = ft(s.options && s.options.plugins, {}), o = __(s);
    return i === !1 && !n ? [] : S_(t, o, i, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [], s = this._cache, i = (o, r) => o.filter((a) => !r.some((c) => a.plugin.id === c.plugin.id));
    this._notify(i(n, s), t, "stop"), this._notify(i(s, n), t, "start");
  }
}
function __(e) {
  const t = {}, n = [], s = Object.keys(Je.plugins.items);
  for (let o = 0; o < s.length; o++)
    n.push(Je.getPlugin(s[o]));
  const i = e.plugins || [];
  for (let o = 0; o < i.length; o++) {
    const r = i[o];
    n.indexOf(r) === -1 && (n.push(r), t[r.id] = !0);
  }
  return {
    plugins: n,
    localIds: t
  };
}
function w_(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function S_(e, { plugins: t, localIds: n }, s, i) {
  const o = [], r = e.getContext();
  for (const a of t) {
    const c = a.id, l = w_(s[c], i);
    l !== null && o.push({
      plugin: a,
      options: A_(e.config, {
        plugin: a,
        local: n[c]
      }, l, r)
    });
  }
  return o;
}
function A_(e, { plugin: t, local: n }, s, i) {
  const o = e.pluginScopeKeys(t), r = e.getOptionScopes(s, o);
  return n && t.defaults && r.push(t.defaults), e.createResolver(r, i, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function mc(e, t) {
  const n = Ht.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x";
}
function P_(e, t) {
  let n = e;
  return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"), n;
}
function T_(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Nh(e) {
  if (e === "x" || e === "y" || e === "r")
    return e;
}
function M_(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function yc(e, ...t) {
  if (Nh(e))
    return e;
  for (const n of t) {
    const s = n.axis || M_(n.position) || e.length > 1 && Nh(e[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function $h(e, t, n) {
  if (n[t + "AxisID"] === e)
    return {
      axis: t
    };
}
function C_(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((s) => s.xAxisID === e || s.yAxisID === e);
    if (n.length)
      return $h(e, "x", n[0]) || $h(e, "y", n[0]);
  }
  return {};
}
function k_(e, t) {
  const n = ms[e.type] || {
    scales: {}
  }, s = t.scales || {}, i = mc(e.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!mt(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const c = yc(r, a, C_(r, e), Ht.scales[a.type]), l = T_(c, i), u = n.scales || {};
    o[r] = Ni(/* @__PURE__ */ Object.create(null), [
      {
        axis: c
      },
      a,
      u[c],
      u[l]
    ]);
  }), e.data.datasets.forEach((r) => {
    const a = r.type || e.type, c = r.indexAxis || mc(a, t), u = (ms[a] || {}).scales || {};
    Object.keys(u).forEach((h) => {
      const d = P_(h, c), f = r[d + "AxisID"] || d;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Ni(o[f], [
        {
          axis: d
        },
        s[f],
        u[h]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Ni(a, [
      Ht.scales[a.type],
      Ht.scale
    ]);
  }), o;
}
function Dg(e) {
  const t = e.options || (e.options = {});
  t.plugins = ft(t.plugins, {}), t.scales = k_(e, t);
}
function Eg(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function D_(e) {
  return e = e || {}, e.data = Eg(e.data), Dg(e), e;
}
const Vh = /* @__PURE__ */ new Map(), Og = /* @__PURE__ */ new Set();
function Io(e, t) {
  let n = Vh.get(e);
  return n || (n = t(), Vh.set(e, n), Og.add(n)), n;
}
const Si = (e, t, n) => {
  const s = jn(t, n);
  s !== void 0 && e.add(s);
};
class E_ {
  constructor(t) {
    this._config = D_(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Eg(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Dg(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Io(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, n) {
    return Io(`${t}.transition.${n}`, () => [
      [
        `datasets.${t}.transitions.${n}`,
        `transitions.${n}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return Io(`${t}-${n}`, () => [
      [
        `datasets.${t}.elements.${n}`,
        `datasets.${t}`,
        `elements.${n}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id, s = this.type;
    return Io(`${s}-plugin-${n}`, () => [
      [
        `plugins.${n}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, n) {
    const s = this._scopeCache;
    let i = s.get(t);
    return (!i || n) && (i = /* @__PURE__ */ new Map(), s.set(t, i)), i;
  }
  getOptionScopes(t, n, s) {
    const { options: i, type: o } = this, r = this._cachedScopes(t, s), a = r.get(n);
    if (a)
      return a;
    const c = /* @__PURE__ */ new Set();
    n.forEach((u) => {
      t && (c.add(t), u.forEach((h) => Si(c, t, h))), u.forEach((h) => Si(c, i, h)), u.forEach((h) => Si(c, ms[o] || {}, h)), u.forEach((h) => Si(c, Ht, h)), u.forEach((h) => Si(c, fc, h));
    });
    const l = Array.from(c);
    return l.length === 0 && l.push(/* @__PURE__ */ Object.create(null)), Og.has(n) && r.set(n, l), l;
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [
      t,
      ms[n] || {},
      Ht.datasets[n] || {},
      {
        type: n
      },
      Ht,
      fc
    ];
  }
  resolveNamedOptions(t, n, s, i = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Fh(this._resolverCache, t, i);
    let c = r;
    if (R_(r, n)) {
      o.$shared = !1, s = Bn(s) ? s() : s;
      const l = this.createResolver(t, s, a);
      c = Us(r, s, l);
    }
    for (const l of n)
      o[l] = c[l];
    return o;
  }
  createResolver(t, n, s = [
    ""
  ], i) {
    const { resolver: o } = Fh(this._resolverCache, t, s);
    return mt(n) ? Us(o, n, void 0, i) : o;
  }
}
function Fh(e, t, n) {
  let s = e.get(t);
  s || (s = /* @__PURE__ */ new Map(), e.set(t, s));
  const i = n.join();
  let o = s.get(i);
  return o || (o = {
    resolver: Cl(t, n),
    subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(i, o)), o;
}
const O_ = (e) => mt(e) && Object.getOwnPropertyNames(e).some((t) => Bn(e[t]));
function R_(e, t) {
  const { isScriptable: n, isIndexable: s } = hg(e);
  for (const i of t) {
    const o = n(i), r = s(i), a = (r || o) && e[i];
    if (o && (Bn(a) || O_(a)) || r && Bt(a))
      return !0;
  }
  return !1;
}
var L_ = "4.4.8";
const I_ = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function jh(e, t) {
  return e === "top" || e === "bottom" || I_.indexOf(e) === -1 && t === "x";
}
function Bh(e, t) {
  return function(n, s) {
    return n[e] === s[e] ? n[t] - s[t] : n[e] - s[e];
  };
}
function Hh(e) {
  const t = e.chart, n = t.options.animation;
  t.notifyPlugins("afterRender"), Et(n && n.onComplete, [
    e
  ], t);
}
function N_(e) {
  const t = e.chart, n = t.options.animation;
  Et(n && n.onProgress, [
    e
  ], t);
}
function Rg(e) {
  return El() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const or = {}, zh = (e) => {
  const t = Rg(e);
  return Object.values(or).filter((n) => n.canvas === t).pop();
};
function $_(e, t, n) {
  const s = Object.keys(e);
  for (const i of s) {
    const o = +i;
    if (o >= t) {
      const r = e[i];
      delete e[i], (n > 0 || o > t) && (e[o + n] = r);
    }
  }
}
function V_(e, t, n, s) {
  return !n || e.type === "mouseout" ? null : s ? t : e;
}
function No(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function F_(e, t) {
  const { xScale: n, yScale: s } = e;
  return n && s ? {
    left: No(n, t, "left"),
    right: No(n, t, "right"),
    top: No(s, t, "top"),
    bottom: No(s, t, "bottom")
  } : t;
}
class tn {
  static register(...t) {
    Je.add(...t), Wh();
  }
  static unregister(...t) {
    Je.remove(...t), Wh();
  }
  constructor(t, n) {
    const s = this.config = new E_(n), i = Rg(t), o = zh(i);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || n_(i))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(i, r.aspectRatio), c = a && a.canvas, l = c && c.height, u = c && c.width;
    if (this.id = j0(), this.ctx = a, this.canvas = c, this.width = u, this.height = l, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new x_(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = sv((h) => this.update(h), r.resizeDelay || 0), this._dataChanges = [], or[this.id] = this, !a || !c) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    fn.listen(this, "complete", Hh), fn.listen(this, "progress", N_), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: n }, width: s, height: i, _aspectRatio: o } = this;
    return gt(t) ? n && o ? o : i ? s / i : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Je;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : dh(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return lh(this.canvas, this.ctx), this;
  }
  stop() {
    return fn.stop(this), this;
  }
  resize(t, n) {
    fn.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: n
    } : this._resize(t, n);
  }
  _resize(t, n) {
    const s = this.options, i = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(i, t, n, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), c = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, dh(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), Et(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(c) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    Pt(n, (s, i) => {
      s.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, n = t.scales, s = this.scales, i = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    n && (o = o.concat(Object.keys(n).map((r) => {
      const a = n[r], c = yc(r, a), l = c === "r", u = c === "x";
      return {
        options: a,
        dposition: l ? "chartArea" : u ? "bottom" : "left",
        dtype: l ? "radialLinear" : u ? "category" : "linear"
      };
    }))), Pt(o, (r) => {
      const a = r.options, c = a.id, l = yc(c, a), u = ft(a.type, r.dtype);
      (a.position === void 0 || jh(a.position, l) !== jh(r.dposition)) && (a.position = r.dposition), i[c] = !0;
      let h = null;
      if (c in s && s[c].type === u)
        h = s[c];
      else {
        const d = Je.getScale(u);
        h = new d({
          id: c,
          type: u,
          ctx: this.ctx,
          chart: this
        }), s[h.id] = h;
      }
      h.init(a, t);
    }), Pt(i, (r, a) => {
      r || delete s[a];
    }), Pt(s, (r) => {
      de.configure(this, r, r.options), de.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, n = this.data.datasets.length, s = t.length;
    if (t.sort((i, o) => i.index - o.index), s > n) {
      for (let i = n; i < s; ++i)
        this._destroyDatasetMeta(i);
      t.splice(n, s - n);
    }
    this._sortedMetasets = t.slice(0).sort(Bh("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: n } } = this;
    t.length > n.length && delete this._stacks, t.forEach((s, i) => {
      n.filter((o) => o === s._dataset).length === 0 && this._destroyDatasetMeta(i);
    });
  }
  buildOrUpdateControllers() {
    const t = [], n = this.data.datasets;
    let s, i;
    for (this._removeUnreferencedMetasets(), s = 0, i = n.length; s < i; s++) {
      const o = n[s];
      let r = this.getDatasetMeta(s);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || mc(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const c = Je.getController(a), { datasetElementType: l, dataElementType: u } = Ht.datasets[a];
        Object.assign(c, {
          dataElementType: Je.getElement(u),
          datasetElementType: l && Je.getElement(l)
        }), r.controller = new c(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    Pt(this.data.datasets, (t, n) => {
      this.getDatasetMeta(n).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const n = this.config;
    n.update();
    const s = this._options = n.createResolver(n.chartOptionScopes(), this.getContext()), i = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let l = 0, u = this.data.datasets.length; l < u; l++) {
      const { controller: h } = this.getDatasetMeta(l), d = !i && o.indexOf(h) === -1;
      h.buildOrUpdateElements(d), r = Math.max(+h.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), i || Pt(o, (l) => {
      l.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Bh("z", "_idx"));
    const { _active: a, _lastEvent: c } = this;
    c ? this._eventHandler(c, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    Pt(this.scales, (t) => {
      de.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, n = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!th(n, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, n = this._getUniformDataChanges() || [];
    for (const { method: s, start: i, count: o } of n) {
      const r = s === "_removeElements" ? -o : o;
      $_(t, i, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const n = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), i = s(0);
    for (let o = 1; o < n; o++)
      if (!th(i, s(o)))
        return;
    return Array.from(i).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    de.update(this, this.width, this.height, t);
    const n = this.chartArea, s = n.width <= 0 || n.height <= 0;
    this._layers = [], Pt(this.boxes, (i) => {
      s && i.position === "chartArea" || (i.configure && i.configure(), this._layers.push(...i._layers()));
    }, this), this._layers.forEach((i, o) => {
      i._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let n = 0, s = this.data.datasets.length; n < s; ++n)
        this.getDatasetMeta(n).controller.configure();
      for (let n = 0, s = this.data.datasets.length; n < s; ++n)
        this._updateDataset(n, Bn(t) ? t({
          datasetIndex: n
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, n) {
    const s = this.getDatasetMeta(t), i = {
      meta: s,
      index: t,
      mode: n,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", i) !== !1 && (s.controller._update(n), i.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", i));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (fn.has(this) ? this.attached && !fn.running(this) && fn.start(this) : (this.draw(), Hh({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: i } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(s, i);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const n = this._layers;
    for (t = 0; t < n.length && n[t].z <= 0; ++t)
      n[t].draw(this.chartArea);
    for (this._drawDatasets(); t < n.length; ++t)
      n[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const n = this._sortedMetasets, s = [];
    let i, o;
    for (i = 0, o = n.length; i < o; ++i) {
      const r = n[i];
      (!t || r.visible) && s.push(r);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let n = t.length - 1; n >= 0; --n)
      this._drawDataset(t[n]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const n = this.ctx, s = t._clip, i = !s.disabled, o = F_(t, this.chartArea), r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (i && qr(n, {
      left: s.left === !1 ? 0 : o.left - s.left,
      right: s.right === !1 ? this.width : o.right + s.right,
      top: s.top === !1 ? 0 : o.top - s.top,
      bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
    }), t.controller.draw(), i && Zr(n), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return _n(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, n, s, i) {
    const o = Ix.modes[n];
    return typeof o == "function" ? o(this, t, s, i) : [];
  }
  getDatasetMeta(t) {
    const n = this.data.datasets[t], s = this._metasets;
    let i = s.filter((o) => o && o._dataset === n).pop();
    return i || (i = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: n && n.order || 0,
      index: t,
      _dataset: n,
      _parsed: [],
      _sorted: !1
    }, s.push(i)), i;
  }
  getContext() {
    return this.$context || (this.$context = Un(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const n = this.data.datasets[t];
    if (!n)
      return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !n.hidden;
  }
  setDatasetVisibility(t, n) {
    const s = this.getDatasetMeta(t);
    s.hidden = !n;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, n, s) {
    const i = s ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, i);
    Xi(n) ? (o.data[n].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
      visible: s
    }), this.update((a) => a.datasetIndex === t ? i : void 0));
  }
  hide(t, n) {
    this._updateVisibility(t, n, !1);
  }
  show(t, n) {
    this._updateVisibility(t, n, !0);
  }
  _destroyDatasetMeta(t) {
    const n = this._metasets[t];
    n && n.controller && n.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, n;
    for (this.stop(), fn.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: n } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), lh(t, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), delete or[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, n = this.platform, s = (o, r) => {
      n.addEventListener(this, o, r), t[o] = r;
    }, i = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    Pt(this.options.events, (o) => s(o, i));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, n = this.platform, s = (c, l) => {
      n.addEventListener(this, c, l), t[c] = l;
    }, i = (c, l) => {
      t[c] && (n.removeEventListener(this, c, l), delete t[c]);
    }, o = (c, l) => {
      this.canvas && this.resize(c, l);
    };
    let r;
    const a = () => {
      i("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r);
    };
    r = () => {
      this.attached = !1, i("resize", o), this._stop(), this._resize(0, 0), s("attach", a);
    }, n.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    Pt(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._listeners = {}, Pt(this._responsiveListeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, n, s) {
    const i = s ? "set" : "remove";
    let o, r, a, c;
    for (n === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + i + "DatasetHoverStyle"]()), a = 0, c = t.length; a < c; ++a) {
      r = t[a];
      const l = r && this.getDatasetMeta(r.datasetIndex).controller;
      l && l[i + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const n = this._active || [], s = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !vr(s, n) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, n));
  }
  notifyPlugins(t, n, s) {
    return this._plugins.notify(this, t, n, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, n, s) {
    const i = this.options.hover, o = (c, l) => c.filter((u) => !l.some((h) => u.datasetIndex === h.datasetIndex && u.index === h.index)), r = o(n, t), a = s ? t : o(t, n);
    r.length && this.updateHoverStyle(r, i.mode, !1), a.length && i.mode && this.updateHoverStyle(a, i.mode, !0);
  }
  _eventHandler(t, n) {
    const s = {
      event: t,
      replay: n,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, i = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, i) === !1)
      return;
    const o = this._handleEvent(t, n, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, i), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, n, s) {
    const { _active: i = [], options: o } = this, r = n, a = this._getActiveElements(t, i, s, r), c = Y0(t), l = V_(t, this._lastEvent, s, c);
    s && (this._lastEvent = null, Et(o.onHover, [
      t,
      a,
      this
    ], this), c && Et(o.onClick, [
      t,
      a,
      this
    ], this));
    const u = !vr(a, i);
    return (u || n) && (this._active = a, this._updateHoverStyles(a, i, n)), this._lastEvent = l, u;
  }
  _getActiveElements(t, n, s, i) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return n;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, i);
  }
}
z(tn, "defaults", Ht), z(tn, "instances", or), z(tn, "overrides", ms), z(tn, "registry", Je), z(tn, "version", L_), z(tn, "getChart", zh);
function Wh() {
  return Pt(tn.instances, (e) => e._plugins.invalidate());
}
function j_(e, t, n) {
  const { startAngle: s, pixelMargin: i, x: o, y: r, outerRadius: a, innerRadius: c } = t;
  let l = i / a;
  e.beginPath(), e.arc(o, r, a, s - l, n + l), c > i ? (l = i / c, e.arc(o, r, c, n + l, s - l, !0)) : e.arc(o, r, i, n + qt, s - qt), e.closePath(), e.clip();
}
function B_(e) {
  return Ml(e, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function H_(e, t, n, s) {
  const i = B_(e.options.borderRadius), o = (n - t) / 2, r = Math.min(o, s * t / 2), a = (c) => {
    const l = (n - Math.min(o, c)) * s / 2;
    return ne(c, 0, Math.min(o, l));
  };
  return {
    outerStart: a(i.outerStart),
    outerEnd: a(i.outerEnd),
    innerStart: ne(i.innerStart, 0, r),
    innerEnd: ne(i.innerEnd, 0, r)
  };
}
function Cs(e, t, n, s) {
  return {
    x: n + e * Math.cos(t),
    y: s + e * Math.sin(t)
  };
}
function Pr(e, t, n, s, i, o) {
  const { x: r, y: a, startAngle: c, pixelMargin: l, innerRadius: u } = t, h = Math.max(t.outerRadius + s + n - l, 0), d = u > 0 ? u + s + n + l : 0;
  let f = 0;
  const p = i - c;
  if (s) {
    const W = u > 0 ? u - s : 0, H = h > 0 ? h - s : 0, j = (W + H) / 2, Q = j !== 0 ? p * j / (j + s) : p;
    f = (p - Q) / 2;
  }
  const g = Math.max(1e-3, p * h - n / $t) / h, m = (p - g) / 2, y = c + m + f, b = i - m - f, { outerStart: _, outerEnd: x, innerStart: v, innerEnd: w } = H_(t, d, h, b - y), A = h - _, P = h - x, M = y + _ / A, T = b - x / P, D = d + v, C = d + w, I = y + v / D, G = b - w / C;
  if (e.beginPath(), o) {
    const W = (M + T) / 2;
    if (e.arc(r, a, h, M, W), e.arc(r, a, h, W, T), x > 0) {
      const q = Cs(P, T, r, a);
      e.arc(q.x, q.y, x, T, b + qt);
    }
    const H = Cs(C, b, r, a);
    if (e.lineTo(H.x, H.y), w > 0) {
      const q = Cs(C, G, r, a);
      e.arc(q.x, q.y, w, b + qt, G + Math.PI);
    }
    const j = (b - w / d + (y + v / d)) / 2;
    if (e.arc(r, a, d, b - w / d, j, !0), e.arc(r, a, d, j, y + v / d, !0), v > 0) {
      const q = Cs(D, I, r, a);
      e.arc(q.x, q.y, v, I + Math.PI, y - qt);
    }
    const Q = Cs(A, y, r, a);
    if (e.lineTo(Q.x, Q.y), _ > 0) {
      const q = Cs(A, M, r, a);
      e.arc(q.x, q.y, _, y - qt, M);
    }
  } else {
    e.moveTo(r, a);
    const W = Math.cos(M) * h + r, H = Math.sin(M) * h + a;
    e.lineTo(W, H);
    const j = Math.cos(T) * h + r, Q = Math.sin(T) * h + a;
    e.lineTo(j, Q);
  }
  e.closePath();
}
function z_(e, t, n, s, i) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let c = t.endAngle;
  if (o) {
    Pr(e, t, n, s, c, i);
    for (let l = 0; l < o; ++l)
      e.fill();
    isNaN(a) || (c = r + (a % Nt || Nt));
  }
  return Pr(e, t, n, s, c, i), e.fill(), c;
}
function W_(e, t, n, s, i) {
  const { fullCircles: o, startAngle: r, circumference: a, options: c } = t, { borderWidth: l, borderJoinStyle: u, borderDash: h, borderDashOffset: d } = c, f = c.borderAlign === "inner";
  if (!l)
    return;
  e.setLineDash(h || []), e.lineDashOffset = d, f ? (e.lineWidth = l * 2, e.lineJoin = u || "round") : (e.lineWidth = l, e.lineJoin = u || "bevel");
  let p = t.endAngle;
  if (o) {
    Pr(e, t, n, s, p, i);
    for (let g = 0; g < o; ++g)
      e.stroke();
    isNaN(a) || (p = r + (a % Nt || Nt));
  }
  f && j_(e, t, p), o || (Pr(e, t, n, s, p, i), e.stroke());
}
class ki extends Pn {
  constructor(n) {
    super();
    z(this, "circumference");
    z(this, "endAngle");
    z(this, "fullCircles");
    z(this, "innerRadius");
    z(this, "outerRadius");
    z(this, "pixelMargin");
    z(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, n && Object.assign(this, n);
  }
  inRange(n, s, i) {
    const o = this.getProps([
      "x",
      "y"
    ], i), { angle: r, distance: a } = eg(o, {
      x: n,
      y: s
    }), { startAngle: c, endAngle: l, innerRadius: u, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), f = (this.options.spacing + this.options.borderWidth) / 2, p = ft(d, l - c), g = qi(r, c, l) && c !== l, m = p >= Nt || g, y = vn(a, u + f, h + f);
    return m && y;
  }
  getCenterPoint(n) {
    const { x: s, y: i, startAngle: o, endAngle: r, innerRadius: a, outerRadius: c } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], n), { offset: l, spacing: u } = this.options, h = (o + r) / 2, d = (a + c + u + l) / 2;
    return {
      x: s + Math.cos(h) * d,
      y: i + Math.sin(h) * d
    };
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n);
  }
  draw(n) {
    const { options: s, circumference: i } = this, o = (s.offset || 0) / 4, r = (s.spacing || 0) / 2, a = s.circular;
    if (this.pixelMargin = s.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > Nt ? Math.floor(i / Nt) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    n.save();
    const c = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(c) * o, Math.sin(c) * o);
    const l = 1 - Math.sin(Math.min($t, i || 0)), u = o * l;
    n.fillStyle = s.backgroundColor, n.strokeStyle = s.borderColor, z_(n, this, u, r, a), W_(n, this, u, r, a), n.restore();
  }
}
z(ki, "id", "arc"), z(ki, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), z(ki, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), z(ki, "descriptors", {
  _scriptable: !0,
  _indexable: (n) => n !== "borderDash"
});
function Lg(e, t, n = t) {
  e.lineCap = ft(n.borderCapStyle, t.borderCapStyle), e.setLineDash(ft(n.borderDash, t.borderDash)), e.lineDashOffset = ft(n.borderDashOffset, t.borderDashOffset), e.lineJoin = ft(n.borderJoinStyle, t.borderJoinStyle), e.lineWidth = ft(n.borderWidth, t.borderWidth), e.strokeStyle = ft(n.borderColor, t.borderColor);
}
function U_(e, t, n) {
  e.lineTo(n.x, n.y);
}
function Y_(e) {
  return e.stepped ? gv : e.tension || e.cubicInterpolationMode === "monotone" ? mv : U_;
}
function Ig(e, t, n = {}) {
  const s = e.length, { start: i = 0, end: o = s - 1 } = n, { start: r, end: a } = t, c = Math.max(i, r), l = Math.min(o, a), u = i < r && o < r || i > a && o > a;
  return {
    count: s,
    start: c,
    loop: t.loop,
    ilen: l < c && !u ? s + l - c : l - c
  };
}
function G_(e, t, n, s) {
  const { points: i, options: o } = t, { count: r, start: a, loop: c, ilen: l } = Ig(i, n, s), u = Y_(o);
  let { move: h = !0, reverse: d } = s || {}, f, p, g;
  for (f = 0; f <= l; ++f)
    p = i[(a + (d ? l - f : f)) % r], !p.skip && (h ? (e.moveTo(p.x, p.y), h = !1) : u(e, g, p, d, o.stepped), g = p);
  return c && (p = i[(a + (d ? l : 0)) % r], u(e, g, p, d, o.stepped)), !!c;
}
function K_(e, t, n, s) {
  const i = t.points, { count: o, start: r, ilen: a } = Ig(i, n, s), { move: c = !0, reverse: l } = s || {};
  let u = 0, h = 0, d, f, p, g, m, y;
  const b = (x) => (r + (l ? a - x : x)) % o, _ = () => {
    g !== m && (e.lineTo(u, m), e.lineTo(u, g), e.lineTo(u, y));
  };
  for (c && (f = i[b(0)], e.moveTo(f.x, f.y)), d = 0; d <= a; ++d) {
    if (f = i[b(d)], f.skip)
      continue;
    const x = f.x, v = f.y, w = x | 0;
    w === p ? (v < g ? g = v : v > m && (m = v), u = (h * u + x) / ++h) : (_(), e.lineTo(x, v), p = w, h = 0, g = m = v), y = v;
  }
  _();
}
function bc(e) {
  const t = e.options, n = t.borderDash && t.borderDash.length;
  return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !n ? K_ : G_;
}
function X_(e) {
  return e.stepped ? Kv : e.tension || e.cubicInterpolationMode === "monotone" ? Xv : ss;
}
function q_(e, t, n, s) {
  let i = t._path;
  i || (i = t._path = new Path2D(), t.path(i, n, s) && i.closePath()), Lg(e, t.options), e.stroke(i);
}
function Z_(e, t, n, s) {
  const { segments: i, options: o } = t, r = bc(t);
  for (const a of i)
    Lg(e, o, a.style), e.beginPath(), r(e, t, a, {
      start: n,
      end: n + s - 1
    }) && e.closePath(), e.stroke();
}
const Q_ = typeof Path2D == "function";
function J_(e, t, n, s) {
  Q_ && !t.options.segment ? q_(e, t, n, s) : Z_(e, t, n, s);
}
class Ln extends Pn {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const i = s.spanGaps ? this._loop : this._fullLoop;
      jv(this._points, s, t, i, n), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = ex(this, this.options.segment));
  }
  first() {
    const t = this.segments, n = this.points;
    return t.length && n[t[0].start];
  }
  last() {
    const t = this.segments, n = this.points, s = t.length;
    return s && n[t[s - 1].end];
  }
  interpolate(t, n) {
    const s = this.options, i = t[n], o = this.points, r = _g(this, {
      property: n,
      start: i,
      end: i
    });
    if (!r.length)
      return;
    const a = [], c = X_(s);
    let l, u;
    for (l = 0, u = r.length; l < u; ++l) {
      const { start: h, end: d } = r[l], f = o[h], p = o[d];
      if (f === p) {
        a.push(f);
        continue;
      }
      const g = Math.abs((i - f[n]) / (p[n] - f[n])), m = c(f, p, g, s.stepped);
      m[n] = t[n], a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, n, s) {
    return bc(this)(t, this, n, s);
  }
  path(t, n, s) {
    const i = this.segments, o = bc(this);
    let r = this._loop;
    n = n || 0, s = s || this.points.length - n;
    for (const a of i)
      r &= o(t, this, a, {
        start: n,
        end: n + s - 1
      });
    return !!r;
  }
  draw(t, n, s, i) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), J_(t, this, s, i), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
z(Ln, "id", "line"), z(Ln, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), z(Ln, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), z(Ln, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Uh(e, t, n, s) {
  const i = e.options, { [n]: o } = e.getProps([
    n
  ], s);
  return Math.abs(t - o) < i.radius + i.hitRadius;
}
class rr extends Pn {
  constructor(n) {
    super();
    z(this, "parsed");
    z(this, "skip");
    z(this, "stop");
    this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, n && Object.assign(this, n);
  }
  inRange(n, s, i) {
    const o = this.options, { x: r, y: a } = this.getProps([
      "x",
      "y"
    ], i);
    return Math.pow(n - r, 2) + Math.pow(s - a, 2) < Math.pow(o.hitRadius + o.radius, 2);
  }
  inXRange(n, s) {
    return Uh(this, n, "x", s);
  }
  inYRange(n, s) {
    return Uh(this, n, "y", s);
  }
  getCenterPoint(n) {
    const { x: s, y: i } = this.getProps([
      "x",
      "y"
    ], n);
    return {
      x: s,
      y: i
    };
  }
  size(n) {
    n = n || this.options || {};
    let s = n.radius || 0;
    s = Math.max(s, s && n.hoverRadius || 0);
    const i = s && n.borderWidth || 0;
    return (s + i) * 2;
  }
  draw(n, s) {
    const i = this.options;
    this.skip || i.radius < 0.1 || !_n(this, s, this.size(i) / 2) || (n.strokeStyle = i.borderColor, n.lineWidth = i.borderWidth, n.fillStyle = i.backgroundColor, pc(n, i, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
z(rr, "id", "point"), /**
* @type {any}
*/
z(rr, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
z(rr, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function Ng(e, t) {
  const { x: n, y: s, base: i, width: o, height: r } = e.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, c, l, u, h;
  return e.horizontal ? (h = r / 2, a = Math.min(n, i), c = Math.max(n, i), l = s - h, u = s + h) : (h = o / 2, a = n - h, c = n + h, l = Math.min(s, i), u = Math.max(s, i)), {
    left: a,
    top: l,
    right: c,
    bottom: u
  };
}
function In(e, t, n, s) {
  return e ? 0 : ne(t, n, s);
}
function tw(e, t, n) {
  const s = e.options.borderWidth, i = e.borderSkipped, o = ug(s);
  return {
    t: In(i.top, o.top, 0, n),
    r: In(i.right, o.right, 0, t),
    b: In(i.bottom, o.bottom, 0, n),
    l: In(i.left, o.left, 0, t)
  };
}
function ew(e, t, n) {
  const { enableBorderRadius: s } = e.getProps([
    "enableBorderRadius"
  ]), i = e.options.borderRadius, o = us(i), r = Math.min(t, n), a = e.borderSkipped, c = s || mt(i);
  return {
    topLeft: In(!c || a.top || a.left, o.topLeft, 0, r),
    topRight: In(!c || a.top || a.right, o.topRight, 0, r),
    bottomLeft: In(!c || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: In(!c || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function nw(e) {
  const t = Ng(e), n = t.right - t.left, s = t.bottom - t.top, i = tw(e, n / 2, s / 2), o = ew(e, n / 2, s / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: n,
      h: s,
      radius: o
    },
    inner: {
      x: t.left + i.l,
      y: t.top + i.t,
      w: n - i.l - i.r,
      h: s - i.t - i.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(i.t, i.l)),
        topRight: Math.max(0, o.topRight - Math.max(i.t, i.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(i.b, i.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(i.b, i.r))
      }
    }
  };
}
function $a(e, t, n, s) {
  const i = t === null, o = n === null, a = e && !(i && o) && Ng(e, s);
  return a && (i || vn(t, a.left, a.right)) && (o || vn(n, a.top, a.bottom));
}
function sw(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function iw(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function Va(e, t, n = {}) {
  const s = e.x !== n.x ? -t : 0, i = e.y !== n.y ? -t : 0, o = (e.x + e.w !== n.x + n.w ? t : 0) - s, r = (e.y + e.h !== n.y + n.h ? t : 0) - i;
  return {
    x: e.x + s,
    y: e.y + i,
    w: e.w + o,
    h: e.h + r,
    radius: e.radius
  };
}
class ar extends Pn {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: n, options: { borderColor: s, backgroundColor: i } } = this, { inner: o, outer: r } = nw(this), a = sw(r.radius) ? Zi : iw;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, Va(r, n, o)), t.clip(), a(t, Va(o, -n, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, Va(o, n)), t.fillStyle = i, t.fill(), t.restore();
  }
  inRange(t, n, s) {
    return $a(this, t, n, s);
  }
  inXRange(t, n) {
    return $a(this, t, null, n);
  }
  inYRange(t, n) {
    return $a(this, null, t, n);
  }
  getCenterPoint(t) {
    const { x: n, y: s, base: i, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (n + i) / 2 : n,
      y: o ? s : (s + i) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
z(ar, "id", "bar"), z(ar, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), z(ar, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
var ow = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: ki,
  BarElement: ar,
  LineElement: Ln,
  PointElement: rr
});
const vc = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], Yh = /* @__PURE__ */ vc.map((e) => e.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function $g(e) {
  return vc[e % vc.length];
}
function Vg(e) {
  return Yh[e % Yh.length];
}
function rw(e, t) {
  return e.borderColor = $g(t), e.backgroundColor = Vg(t), ++t;
}
function aw(e, t) {
  return e.backgroundColor = e.data.map(() => $g(t++)), t;
}
function cw(e, t) {
  return e.backgroundColor = e.data.map(() => Vg(t++)), t;
}
function lw(e) {
  let t = 0;
  return (n, s) => {
    const i = e.getDatasetMeta(s).controller;
    i instanceof rs ? t = aw(n, t) : i instanceof ji ? t = cw(n, t) : i && (t = rw(n, t));
  };
}
function Gh(e) {
  let t;
  for (t in e)
    if (e[t].borderColor || e[t].backgroundColor)
      return !0;
  return !1;
}
function uw(e) {
  return e && (e.borderColor || e.backgroundColor);
}
function hw() {
  return Ht.borderColor !== "rgba(0,0,0,0.1)" || Ht.backgroundColor !== "rgba(0,0,0,0.1)";
}
var dw = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(e, t, n) {
    if (!n.enabled)
      return;
    const { data: { datasets: s }, options: i } = e.config, { elements: o } = i, r = Gh(s) || uw(i) || o && Gh(o) || hw();
    if (!n.forceOverride && r)
      return;
    const a = lw(e);
    s.forEach(a);
  }
};
function fw(e, t, n, s, i) {
  const o = i.samples || s;
  if (o >= n)
    return e.slice(t, t + n);
  const r = [], a = (n - 2) / (o - 2);
  let c = 0;
  const l = t + n - 1;
  let u = t, h, d, f, p, g;
  for (r[c++] = e[u], h = 0; h < o - 2; h++) {
    let m = 0, y = 0, b;
    const _ = Math.floor((h + 1) * a) + 1 + t, x = Math.min(Math.floor((h + 2) * a) + 1, n) + t, v = x - _;
    for (b = _; b < x; b++)
      m += e[b].x, y += e[b].y;
    m /= v, y /= v;
    const w = Math.floor(h * a) + 1 + t, A = Math.min(Math.floor((h + 1) * a) + 1, n) + t, { x: P, y: M } = e[u];
    for (f = p = -1, b = w; b < A; b++)
      p = 0.5 * Math.abs((P - m) * (e[b].y - M) - (P - e[b].x) * (y - M)), p > f && (f = p, d = e[b], g = b);
    r[c++] = d, u = g;
  }
  return r[c++] = e[l], r;
}
function pw(e, t, n, s) {
  let i = 0, o = 0, r, a, c, l, u, h, d, f, p, g;
  const m = [], y = t + n - 1, b = e[t].x, x = e[y].x - b;
  for (r = t; r < t + n; ++r) {
    a = e[r], c = (a.x - b) / x * s, l = a.y;
    const v = c | 0;
    if (v === u)
      l < p ? (p = l, h = r) : l > g && (g = l, d = r), i = (o * i + a.x) / ++o;
    else {
      const w = r - 1;
      if (!gt(h) && !gt(d)) {
        const A = Math.min(h, d), P = Math.max(h, d);
        A !== f && A !== w && m.push({
          ...e[A],
          x: i
        }), P !== f && P !== w && m.push({
          ...e[P],
          x: i
        });
      }
      r > 0 && w !== f && m.push(e[w]), m.push(a), u = v, o = 0, p = g = l, h = d = f = r;
    }
  }
  return m;
}
function Fg(e) {
  if (e._decimated) {
    const t = e._data;
    delete e._decimated, delete e._data, Object.defineProperty(e, "data", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  }
}
function Kh(e) {
  e.data.datasets.forEach((t) => {
    Fg(t);
  });
}
function gw(e, t) {
  const n = t.length;
  let s = 0, i;
  const { iScale: o } = e, { min: r, max: a, minDefined: c, maxDefined: l } = o.getUserBounds();
  return c && (s = ne(xn(t, o.axis, r).lo, 0, n - 1)), l ? i = ne(xn(t, o.axis, a).hi + 1, s, n) - s : i = n - s, {
    start: s,
    count: i
  };
}
var mw = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (e, t, n) => {
    if (!n.enabled) {
      Kh(e);
      return;
    }
    const s = e.width;
    e.data.datasets.forEach((i, o) => {
      const { _data: r, indexAxis: a } = i, c = e.getDatasetMeta(o), l = r || i.data;
      if (Mi([
        a,
        e.options.indexAxis
      ]) === "y" || !c.controller.supportsDecimation)
        return;
      const u = e.scales[c.xAxisID];
      if (u.type !== "linear" && u.type !== "time" || e.options.parsing)
        return;
      let { start: h, count: d } = gw(c, l);
      const f = n.threshold || 4 * s;
      if (d <= f) {
        Fg(i);
        return;
      }
      gt(r) && (i._data = l, delete i.data, Object.defineProperty(i, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(g) {
          this._data = g;
        }
      }));
      let p;
      switch (n.algorithm) {
        case "lttb":
          p = fw(l, h, d, s, n);
          break;
        case "min-max":
          p = pw(l, h, d, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`);
      }
      i._decimated = p;
    });
  },
  destroy(e) {
    Kh(e);
  }
};
function yw(e, t, n) {
  const s = e.segments, i = e.points, o = t.points, r = [];
  for (const a of s) {
    let { start: c, end: l } = a;
    l = Ll(c, l, i);
    const u = xc(n, i[c], i[l], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: u,
        start: i[c],
        end: i[l]
      });
      continue;
    }
    const h = _g(t, u);
    for (const d of h) {
      const f = xc(n, o[d.start], o[d.end], d.loop), p = xg(a, i, f);
      for (const g of p)
        r.push({
          source: g,
          target: d,
          start: {
            [n]: Xh(u, f, "start", Math.max)
          },
          end: {
            [n]: Xh(u, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function xc(e, t, n, s) {
  if (s)
    return;
  let i = t[e], o = n[e];
  return e === "angle" && (i = De(i), o = De(o)), {
    property: e,
    start: i,
    end: o
  };
}
function bw(e, t) {
  const { x: n = null, y: s = null } = e || {}, i = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Ll(r, a, i);
    const c = i[r], l = i[a];
    s !== null ? (o.push({
      x: c.x,
      y: s
    }), o.push({
      x: l.x,
      y: s
    })) : n !== null && (o.push({
      x: n,
      y: c.y
    }), o.push({
      x: n,
      y: l.y
    }));
  }), o;
}
function Ll(e, t, n) {
  for (; t > e; t--) {
    const s = n[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function Xh(e, t, n, s) {
  return e && t ? s(e[n], t[n]) : e ? e[n] : t ? t[n] : 0;
}
function jg(e, t) {
  let n = [], s = !1;
  return Bt(e) ? (s = !0, n = e) : n = bw(e, t), n.length ? new Ln({
    points: n,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function qh(e) {
  return e && e.fill !== !1;
}
function vw(e, t, n) {
  let i = e[t].fill;
  const o = [
    t
  ];
  let r;
  if (!n)
    return i;
  for (; i !== !1 && o.indexOf(i) === -1; ) {
    if (!Kt(i))
      return i;
    if (r = e[i], !r)
      return !1;
    if (r.visible)
      return i;
    o.push(i), i = r.fill;
  }
  return !1;
}
function xw(e, t, n) {
  const s = Aw(e);
  if (mt(s))
    return isNaN(s.value) ? !1 : s;
  let i = parseFloat(s);
  return Kt(i) && Math.floor(i) === i ? _w(s[0], t, i, n) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function _w(e, t, n, s) {
  return (e === "-" || e === "+") && (n = t + n), n === t || n < 0 || n >= s ? !1 : n;
}
function ww(e, t) {
  let n = null;
  return e === "start" ? n = t.bottom : e === "end" ? n = t.top : mt(e) ? n = t.getPixelForValue(e.value) : t.getBasePixel && (n = t.getBasePixel()), n;
}
function Sw(e, t, n) {
  let s;
  return e === "start" ? s = n : e === "end" ? s = t.options.reverse ? t.min : t.max : mt(e) ? s = e.value : s = t.getBaseValue(), s;
}
function Aw(e) {
  const t = e.options, n = t.fill;
  let s = ft(n && n.target, n);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function Pw(e) {
  const { scale: t, index: n, line: s } = e, i = [], o = s.segments, r = s.points, a = Tw(t, n);
  a.push(jg({
    x: null,
    y: t.bottom
  }, s));
  for (let c = 0; c < o.length; c++) {
    const l = o[c];
    for (let u = l.start; u <= l.end; u++)
      Mw(i, r[u], a);
  }
  return new Ln({
    points: i,
    options: {}
  });
}
function Tw(e, t) {
  const n = [], s = e.getMatchingVisibleMetas("line");
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (o.index === t)
      break;
    o.hidden || n.unshift(o.dataset);
  }
  return n;
}
function Mw(e, t, n) {
  const s = [];
  for (let i = 0; i < n.length; i++) {
    const o = n[i], { first: r, last: a, point: c } = Cw(o, t, "x");
    if (!(!c || r && a)) {
      if (r)
        s.unshift(c);
      else if (e.push(c), !a)
        break;
    }
  }
  e.push(...s);
}
function Cw(e, t, n) {
  const s = e.interpolate(t, n);
  if (!s)
    return {};
  const i = s[n], o = e.segments, r = e.points;
  let a = !1, c = !1;
  for (let l = 0; l < o.length; l++) {
    const u = o[l], h = r[u.start][n], d = r[u.end][n];
    if (vn(i, h, d)) {
      a = i === h, c = i === d;
      break;
    }
  }
  return {
    first: a,
    last: c,
    point: s
  };
}
class Bg {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, n, s) {
    const { x: i, y: o, radius: r } = this;
    return n = n || {
      start: 0,
      end: Nt
    }, t.arc(i, o, r, n.end, n.start, !0), !s.bounds;
  }
  interpolate(t) {
    const { x: n, y: s, radius: i } = this, o = t.angle;
    return {
      x: n + Math.cos(o) * i,
      y: s + Math.sin(o) * i,
      angle: o
    };
  }
}
function kw(e) {
  const { chart: t, fill: n, line: s } = e;
  if (Kt(n))
    return Dw(t, n);
  if (n === "stack")
    return Pw(e);
  if (n === "shape")
    return !0;
  const i = Ew(e);
  return i instanceof Bg ? i : jg(i, s);
}
function Dw(e, t) {
  const n = e.getDatasetMeta(t);
  return n && e.isDatasetVisible(t) ? n.dataset : null;
}
function Ew(e) {
  return (e.scale || {}).getPointPositionForValue ? Rw(e) : Ow(e);
}
function Ow(e) {
  const { scale: t = {}, fill: n } = e, s = ww(n, t);
  if (Kt(s)) {
    const i = t.isHorizontal();
    return {
      x: i ? s : null,
      y: i ? null : s
    };
  }
  return null;
}
function Rw(e) {
  const { scale: t, fill: n } = e, s = t.options, i = t.getLabels().length, o = s.reverse ? t.max : t.min, r = Sw(n, t, o), a = [];
  if (s.grid.circular) {
    const c = t.getPointPositionForValue(0, o);
    return new Bg({
      x: c.x,
      y: c.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let c = 0; c < i; ++c)
    a.push(t.getPointPositionForValue(c, r));
  return a;
}
function Fa(e, t, n) {
  const s = kw(t), { line: i, scale: o, axis: r } = t, a = i.options, c = a.fill, l = a.backgroundColor, { above: u = l, below: h = l } = c || {};
  s && i.points.length && (qr(e, n), Lw(e, {
    line: i,
    target: s,
    above: u,
    below: h,
    area: n,
    scale: o,
    axis: r
  }), Zr(e));
}
function Lw(e, t) {
  const { line: n, target: s, above: i, below: o, area: r, scale: a } = t, c = n._loop ? "angle" : t.axis;
  e.save(), c === "x" && o !== i && (Zh(e, s, r.top), Qh(e, {
    line: n,
    target: s,
    color: i,
    scale: a,
    property: c
  }), e.restore(), e.save(), Zh(e, s, r.bottom)), Qh(e, {
    line: n,
    target: s,
    color: o,
    scale: a,
    property: c
  }), e.restore();
}
function Zh(e, t, n) {
  const { segments: s, points: i } = t;
  let o = !0, r = !1;
  e.beginPath();
  for (const a of s) {
    const { start: c, end: l } = a, u = i[c], h = i[Ll(c, l, i)];
    o ? (e.moveTo(u.x, u.y), o = !1) : (e.lineTo(u.x, n), e.lineTo(u.x, u.y)), r = !!t.pathSegment(e, a, {
      move: r
    }), r ? e.closePath() : e.lineTo(h.x, n);
  }
  e.lineTo(t.first().x, n), e.closePath(), e.clip();
}
function Qh(e, t) {
  const { line: n, target: s, property: i, color: o, scale: r } = t, a = yw(n, s, i);
  for (const { source: c, target: l, start: u, end: h } of a) {
    const { style: { backgroundColor: d = o } = {} } = c, f = s !== !0;
    e.save(), e.fillStyle = d, Iw(e, r, f && xc(i, u, h)), e.beginPath();
    const p = !!n.pathSegment(e, c);
    let g;
    if (f) {
      p ? e.closePath() : Jh(e, s, h, i);
      const m = !!s.pathSegment(e, l, {
        move: p,
        reverse: !0
      });
      g = p && m, g || Jh(e, s, u, i);
    }
    e.closePath(), e.fill(g ? "evenodd" : "nonzero"), e.restore();
  }
}
function Iw(e, t, n) {
  const { top: s, bottom: i } = t.chart.chartArea, { property: o, start: r, end: a } = n || {};
  o === "x" && (e.beginPath(), e.rect(r, s, a - r, i - s), e.clip());
}
function Jh(e, t, n, s) {
  const i = t.interpolate(n, s);
  i && e.lineTo(i.x, i.y);
}
var Nw = {
  id: "filler",
  afterDatasetsUpdate(e, t, n) {
    const s = (e.data.datasets || []).length, i = [];
    let o, r, a, c;
    for (r = 0; r < s; ++r)
      o = e.getDatasetMeta(r), a = o.dataset, c = null, a && a.options && a instanceof Ln && (c = {
        visible: e.isDatasetVisible(r),
        index: r,
        fill: xw(a, r, s),
        chart: e,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = c, i.push(c);
    for (r = 0; r < s; ++r)
      c = i[r], !(!c || c.fill === !1) && (c.fill = vw(i, r, n.propagate));
  },
  beforeDraw(e, t, n) {
    const s = n.drawTime === "beforeDraw", i = e.getSortedVisibleDatasetMetas(), o = e.chartArea;
    for (let r = i.length - 1; r >= 0; --r) {
      const a = i[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && Fa(e.ctx, a, o));
    }
  },
  beforeDatasetsDraw(e, t, n) {
    if (n.drawTime !== "beforeDatasetsDraw")
      return;
    const s = e.getSortedVisibleDatasetMetas();
    for (let i = s.length - 1; i >= 0; --i) {
      const o = s[i].$filler;
      qh(o) && Fa(e.ctx, o, e.chartArea);
    }
  },
  beforeDatasetDraw(e, t, n) {
    const s = t.meta.$filler;
    !qh(s) || n.drawTime !== "beforeDatasetDraw" || Fa(e.ctx, s, e.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const td = (e, t) => {
  let { boxHeight: n = t, boxWidth: s = t } = e;
  return e.usePointStyle && (n = Math.min(n, t), s = e.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: n,
    itemHeight: Math.max(t, n)
  };
}, $w = (e, t) => e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class ed extends Pn {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, n, s) {
    this.maxWidth = t, this.maxHeight = n, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = Et(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (n = n.filter((s) => t.filter(s, this.chart.data))), t.sort && (n = n.sort((s, i) => t.sort(s, i, this.chart.data))), this.options.reverse && n.reverse(), this.legendItems = n;
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels, i = Jt(s.font), o = i.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: c } = td(s, o);
    let l, u;
    n.font = i.string, this.isHorizontal() ? (l = this.maxWidth, u = this._fitRows(r, o, a, c) + 10) : (u = this.maxHeight, l = this._fitCols(r, i, a, c) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(u, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, n, s, i) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, c = this.legendHitBoxes = [], l = this.lineWidths = [
      0
    ], u = i + a;
    let h = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let d = -1, f = -u;
    return this.legendItems.forEach((p, g) => {
      const m = s + n / 2 + o.measureText(p.text).width;
      (g === 0 || l[l.length - 1] + m + 2 * a > r) && (h += u, l[l.length - (g > 0 ? 0 : 1)] = 0, f += u, d++), c[g] = {
        left: 0,
        top: f,
        row: d,
        width: m,
        height: i
      }, l[l.length - 1] += m + a;
    }), h;
  }
  _fitCols(t, n, s, i) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, c = this.legendHitBoxes = [], l = this.columnSizes = [], u = r - t;
    let h = a, d = 0, f = 0, p = 0, g = 0;
    return this.legendItems.forEach((m, y) => {
      const { itemWidth: b, itemHeight: _ } = Vw(s, n, o, m, i);
      y > 0 && f + _ + 2 * a > u && (h += d + a, l.push({
        width: d,
        height: f
      }), p += d + a, g++, d = f = 0), c[y] = {
        left: p,
        top: f,
        col: g,
        width: b,
        height: _
      }, d = Math.max(d, b), f += _ + a;
    }), h += d, l.push({
      width: d,
      height: f
    }), h;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: n, options: { align: s, labels: { padding: i }, rtl: o } } = this, r = js(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, c = ue(s, this.left + i, this.right - this.lineWidths[a]);
      for (const l of n)
        a !== l.row && (a = l.row, c = ue(s, this.left + i, this.right - this.lineWidths[a])), l.top += this.top + t + i, l.left = r.leftForLtr(r.x(c), l.width), c += l.width + i;
    } else {
      let a = 0, c = ue(s, this.top + t + i, this.bottom - this.columnSizes[a].height);
      for (const l of n)
        l.col !== a && (a = l.col, c = ue(s, this.top + t + i, this.bottom - this.columnSizes[a].height)), l.top = c, l.left += this.left + i, l.left = r.leftForLtr(r.x(l.left), l.width), c += l.height + i;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      qr(t, this), this._draw(), Zr(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: s, ctx: i } = this, { align: o, labels: r } = t, a = Ht.color, c = js(t.rtl, this.left, this.width), l = Jt(r.font), { padding: u } = r, h = l.size, d = h / 2;
    let f;
    this.drawTitle(), i.textAlign = c.textAlign("left"), i.textBaseline = "middle", i.lineWidth = 0.5, i.font = l.string;
    const { boxWidth: p, boxHeight: g, itemHeight: m } = td(r, h), y = function(w, A, P) {
      if (isNaN(p) || p <= 0 || isNaN(g) || g < 0)
        return;
      i.save();
      const M = ft(P.lineWidth, 1);
      if (i.fillStyle = ft(P.fillStyle, a), i.lineCap = ft(P.lineCap, "butt"), i.lineDashOffset = ft(P.lineDashOffset, 0), i.lineJoin = ft(P.lineJoin, "miter"), i.lineWidth = M, i.strokeStyle = ft(P.strokeStyle, a), i.setLineDash(ft(P.lineDash, [])), r.usePointStyle) {
        const T = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: P.pointStyle,
          rotation: P.rotation,
          borderWidth: M
        }, D = c.xPlus(w, p / 2), C = A + d;
        lg(i, T, D, C, r.pointStyleWidth && p);
      } else {
        const T = A + Math.max((h - g) / 2, 0), D = c.leftForLtr(w, p), C = us(P.borderRadius);
        i.beginPath(), Object.values(C).some((I) => I !== 0) ? Zi(i, {
          x: D,
          y: T,
          w: p,
          h: g,
          radius: C
        }) : i.rect(D, T, p, g), i.fill(), M !== 0 && i.stroke();
      }
      i.restore();
    }, b = function(w, A, P) {
      ys(i, P.text, w, A + m / 2, l, {
        strikethrough: P.hidden,
        textAlign: c.textAlign(P.textAlign)
      });
    }, _ = this.isHorizontal(), x = this._computeTitleHeight();
    _ ? f = {
      x: ue(o, this.left + u, this.right - s[0]),
      y: this.top + u + x,
      line: 0
    } : f = {
      x: this.left + u,
      y: ue(o, this.top + x + u, this.bottom - n[0].height),
      line: 0
    }, yg(this.ctx, t.textDirection);
    const v = m + u;
    this.legendItems.forEach((w, A) => {
      i.strokeStyle = w.fontColor, i.fillStyle = w.fontColor;
      const P = i.measureText(w.text).width, M = c.textAlign(w.textAlign || (w.textAlign = r.textAlign)), T = p + d + P;
      let D = f.x, C = f.y;
      c.setWidth(this.width), _ ? A > 0 && D + T + u > this.right && (C = f.y += v, f.line++, D = f.x = ue(o, this.left + u, this.right - s[f.line])) : A > 0 && C + v > this.bottom && (D = f.x = D + n[f.line].width + u, f.line++, C = f.y = ue(o, this.top + x + u, this.bottom - n[f.line].height));
      const I = c.x(D);
      if (y(I, C, w), D = iv(M, D + p + d, _ ? D + T : this.right, t.rtl), b(c.x(D), C, w), _)
        f.x += T + u;
      else if (typeof w.text != "string") {
        const G = l.lineHeight;
        f.y += Hg(w, G) + u;
      } else
        f.y += v;
    }), bg(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, n = t.title, s = Jt(n.font), i = pe(n.padding);
    if (!n.display)
      return;
    const o = js(t.rtl, this.left, this.width), r = this.ctx, a = n.position, c = s.size / 2, l = i.top + c;
    let u, h = this.left, d = this.width;
    if (this.isHorizontal())
      d = Math.max(...this.lineWidths), u = this.top + l, h = ue(t.align, h, this.right - d);
    else {
      const p = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
      u = l + ue(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
    }
    const f = ue(a, h, h + d);
    r.textAlign = o.textAlign(Pl(a)), r.textBaseline = "middle", r.strokeStyle = n.color, r.fillStyle = n.color, r.font = s.string, ys(r, n.text, f, u, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, n = Jt(t.font), s = pe(t.padding);
    return t.display ? n.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, n) {
    let s, i, o;
    if (vn(t, this.left, this.right) && vn(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (i = o[s], vn(t, i.left, i.left + i.width) && vn(n, i.top, i.top + i.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!Bw(t.type, n))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const i = this._hoveredItem, o = $w(i, s);
      i && !o && Et(n.onLeave, [
        t,
        i,
        this
      ], this), this._hoveredItem = s, s && !o && Et(n.onHover, [
        t,
        s,
        this
      ], this);
    } else s && Et(n.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function Vw(e, t, n, s, i) {
  const o = Fw(s, e, t, n), r = jw(i, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function Fw(e, t, n, s) {
  let i = e.text;
  return i && typeof i != "string" && (i = i.reduce((o, r) => o.length > r.length ? o : r)), t + n.size / 2 + s.measureText(i).width;
}
function jw(e, t, n) {
  let s = e;
  return typeof t.text != "string" && (s = Hg(t, n)), s;
}
function Hg(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function Bw(e, t) {
  return !!((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup"));
}
var Hw = {
  id: "legend",
  _element: ed,
  start(e, t, n) {
    const s = e.legend = new ed({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    de.configure(e, s, n), de.addBox(e, s);
  },
  stop(e) {
    de.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const s = e.legend;
    de.configure(e, s, n), s.options = n;
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const s = t.datasetIndex, i = n.chart;
      i.isDatasetVisible(s) ? (i.hide(s), t.hidden = !0) : (i.show(s), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets, { labels: { usePointStyle: n, pointStyle: s, textAlign: i, color: o, useBorderRadius: r, borderRadius: a } } = e.legend.options;
        return e._getSortedDatasetMetas().map((c) => {
          const l = c.controller.getStyle(n ? 0 : void 0), u = pe(l.borderWidth);
          return {
            text: t[c.index].label,
            fillStyle: l.backgroundColor,
            fontColor: o,
            hidden: !c.visible,
            lineCap: l.borderCapStyle,
            lineDash: l.borderDash,
            lineDashOffset: l.borderDashOffset,
            lineJoin: l.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
            strokeStyle: l.borderColor,
            pointStyle: s || l.pointStyle,
            rotation: l.rotation,
            textAlign: i || l.textAlign,
            borderRadius: r && (a || l.borderRadius),
            datasetIndex: c.index
          };
        }, this);
      }
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(e)
    }
  }
};
class Il extends Pn {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, n) {
    const s = this.options;
    if (this.left = 0, this.top = 0, !s.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = n;
    const i = Bt(s.text) ? s.text.length : 1;
    this._padding = pe(s.padding);
    const o = i * Jt(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: n, left: s, bottom: i, right: o, options: r } = this, a = r.align;
    let c = 0, l, u, h;
    return this.isHorizontal() ? (u = ue(a, s, o), h = n + t, l = o - s) : (r.position === "left" ? (u = s + t, h = ue(a, i, n), c = $t * -0.5) : (u = o - t, h = ue(a, n, i), c = $t * 0.5), l = i - n), {
      titleX: u,
      titleY: h,
      maxWidth: l,
      rotation: c
    };
  }
  draw() {
    const t = this.ctx, n = this.options;
    if (!n.display)
      return;
    const s = Jt(n.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: c, rotation: l } = this._drawArgs(o);
    ys(t, n.text, 0, 0, s, {
      color: n.color,
      maxWidth: c,
      rotation: l,
      textAlign: Pl(n.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function zw(e, t) {
  const n = new Il({
    ctx: e.ctx,
    options: t,
    chart: e
  });
  de.configure(e, n, t), de.addBox(e, n), e.titleBlock = n;
}
var Ww = {
  id: "title",
  _element: Il,
  start(e, t, n) {
    zw(e, n);
  },
  stop(e) {
    const t = e.titleBlock;
    de.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, n) {
    const s = e.titleBlock;
    de.configure(e, s, n), s.options = n;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const $o = /* @__PURE__ */ new WeakMap();
var Uw = {
  id: "subtitle",
  start(e, t, n) {
    const s = new Il({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    de.configure(e, s, n), de.addBox(e, s), $o.set(e, s);
  },
  stop(e) {
    de.removeBox(e, $o.get(e)), $o.delete(e);
  },
  beforeUpdate(e, t, n) {
    const s = $o.get(e);
    de.configure(e, s, n), s.options = n;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "normal"
    },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Di = {
  average(e) {
    if (!e.length)
      return !1;
    let t, n, s = /* @__PURE__ */ new Set(), i = 0, o = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const a = e[t].element;
      if (a && a.hasValue()) {
        const c = a.tooltipPosition();
        s.add(c.x), i += c.y, ++o;
      }
    }
    return o === 0 || s.size === 0 ? !1 : {
      x: [
        ...s
      ].reduce((a, c) => a + c) / s.size,
      y: i / o
    };
  },
  nearest(e, t) {
    if (!e.length)
      return !1;
    let n = t.x, s = t.y, i = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = e.length; o < r; ++o) {
      const c = e[o].element;
      if (c && c.hasValue()) {
        const l = c.getCenterPoint(), u = dc(t, l);
        u < i && (i = u, a = c);
      }
    }
    if (a) {
      const c = a.tooltipPosition();
      n = c.x, s = c.y;
    }
    return {
      x: n,
      y: s
    };
  }
};
function Ze(e, t) {
  return t && (Bt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function pn(e) {
  return (typeof e == "string" || e instanceof String) && e.indexOf(`
`) > -1 ? e.split(`
`) : e;
}
function Yw(e, t) {
  const { element: n, datasetIndex: s, index: i } = t, o = e.getDatasetMeta(s).controller, { label: r, value: a } = o.getLabelAndValue(i);
  return {
    chart: e,
    label: r,
    parsed: o.getParsed(i),
    raw: e.data.datasets[s].data[i],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: i,
    datasetIndex: s,
    element: n
  };
}
function nd(e, t) {
  const n = e.chart.ctx, { body: s, footer: i, title: o } = e, { boxWidth: r, boxHeight: a } = t, c = Jt(t.bodyFont), l = Jt(t.titleFont), u = Jt(t.footerFont), h = o.length, d = i.length, f = s.length, p = pe(t.padding);
  let g = p.height, m = 0, y = s.reduce((x, v) => x + v.before.length + v.lines.length + v.after.length, 0);
  if (y += e.beforeBody.length + e.afterBody.length, h && (g += h * l.lineHeight + (h - 1) * t.titleSpacing + t.titleMarginBottom), y) {
    const x = t.displayColors ? Math.max(a, c.lineHeight) : c.lineHeight;
    g += f * x + (y - f) * c.lineHeight + (y - 1) * t.bodySpacing;
  }
  d && (g += t.footerMarginTop + d * u.lineHeight + (d - 1) * t.footerSpacing);
  let b = 0;
  const _ = function(x) {
    m = Math.max(m, n.measureText(x).width + b);
  };
  return n.save(), n.font = l.string, Pt(e.title, _), n.font = c.string, Pt(e.beforeBody.concat(e.afterBody), _), b = t.displayColors ? r + 2 + t.boxPadding : 0, Pt(s, (x) => {
    Pt(x.before, _), Pt(x.lines, _), Pt(x.after, _);
  }), b = 0, n.font = u.string, Pt(e.footer, _), n.restore(), m += p.width, {
    width: m,
    height: g
  };
}
function Gw(e, t) {
  const { y: n, height: s } = t;
  return n < s / 2 ? "top" : n > e.height - s / 2 ? "bottom" : "center";
}
function Kw(e, t, n, s) {
  const { x: i, width: o } = s, r = n.caretSize + n.caretPadding;
  if (e === "left" && i + o + r > t.width || e === "right" && i - o - r < 0)
    return !0;
}
function Xw(e, t, n, s) {
  const { x: i, width: o } = n, { width: r, chartArea: { left: a, right: c } } = e;
  let l = "center";
  return s === "center" ? l = i <= (a + c) / 2 ? "left" : "right" : i <= o / 2 ? l = "left" : i >= r - o / 2 && (l = "right"), Kw(l, e, t, n) && (l = "center"), l;
}
function sd(e, t, n) {
  const s = n.yAlign || t.yAlign || Gw(e, n);
  return {
    xAlign: n.xAlign || t.xAlign || Xw(e, t, n, s),
    yAlign: s
  };
}
function qw(e, t) {
  let { x: n, width: s } = e;
  return t === "right" ? n -= s : t === "center" && (n -= s / 2), n;
}
function Zw(e, t, n) {
  let { y: s, height: i } = e;
  return t === "top" ? s += n : t === "bottom" ? s -= i + n : s -= i / 2, s;
}
function id(e, t, n, s) {
  const { caretSize: i, caretPadding: o, cornerRadius: r } = e, { xAlign: a, yAlign: c } = n, l = i + o, { topLeft: u, topRight: h, bottomLeft: d, bottomRight: f } = us(r);
  let p = qw(t, a);
  const g = Zw(t, c, l);
  return c === "center" ? a === "left" ? p += l : a === "right" && (p -= l) : a === "left" ? p -= Math.max(u, d) + i : a === "right" && (p += Math.max(h, f) + i), {
    x: ne(p, 0, s.width - t.width),
    y: ne(g, 0, s.height - t.height)
  };
}
function Vo(e, t, n) {
  const s = pe(n.padding);
  return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - s.right : e.x + s.left;
}
function od(e) {
  return Ze([], pn(e));
}
function Qw(e, t, n) {
  return Un(e, {
    tooltip: t,
    tooltipItems: n,
    type: "tooltip"
  });
}
function rd(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const zg = {
  beforeTitle: dn,
  title(e) {
    if (e.length > 0) {
      const t = e[0], n = t.chart.data.labels, s = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (s > 0 && t.dataIndex < s)
        return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: dn,
  beforeBody: dn,
  beforeLabel: dn,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return gt(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      pointStyle: n.pointStyle,
      rotation: n.rotation
    };
  },
  afterLabel: dn,
  afterBody: dn,
  beforeFooter: dn,
  footer: dn,
  afterFooter: dn
};
function ye(e, t, n, s) {
  const i = e[t].call(n, s);
  return typeof i > "u" ? zg[t].call(n, s) : i;
}
class _c extends Pn {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const n = this.chart, s = this.options.setContext(this.getContext()), i = s.enabled && n.options.animation && s.animations, o = new wg(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Qw(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, n) {
    const { callbacks: s } = n, i = ye(s, "beforeTitle", this, t), o = ye(s, "title", this, t), r = ye(s, "afterTitle", this, t);
    let a = [];
    return a = Ze(a, pn(i)), a = Ze(a, pn(o)), a = Ze(a, pn(r)), a;
  }
  getBeforeBody(t, n) {
    return od(ye(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: s } = n, i = [];
    return Pt(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = rd(s, o);
      Ze(r.before, pn(ye(a, "beforeLabel", this, o))), Ze(r.lines, ye(a, "label", this, o)), Ze(r.after, pn(ye(a, "afterLabel", this, o))), i.push(r);
    }), i;
  }
  getAfterBody(t, n) {
    return od(ye(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: s } = n, i = ye(s, "beforeFooter", this, t), o = ye(s, "footer", this, t), r = ye(s, "afterFooter", this, t);
    let a = [];
    return a = Ze(a, pn(i)), a = Ze(a, pn(o)), a = Ze(a, pn(r)), a;
  }
  _createItems(t) {
    const n = this._active, s = this.chart.data, i = [], o = [], r = [];
    let a = [], c, l;
    for (c = 0, l = n.length; c < l; ++c)
      a.push(Yw(this.chart, n[c]));
    return t.filter && (a = a.filter((u, h, d) => t.filter(u, h, d, s))), t.itemSort && (a = a.sort((u, h) => t.itemSort(u, h, s))), Pt(a, (u) => {
      const h = rd(t.callbacks, u);
      i.push(ye(h, "labelColor", this, u)), o.push(ye(h, "labelPointStyle", this, u)), r.push(ye(h, "labelTextColor", this, u));
    }), this.labelColors = i, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, n) {
    const s = this.options.setContext(this.getContext()), i = this._active;
    let o, r = [];
    if (!i.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = Di[s.position].call(this, i, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const c = this._size = nd(this, s), l = Object.assign({}, a, c), u = sd(this.chart, s, l), h = id(s, l, u, this.chart);
      this.xAlign = u.xAlign, this.yAlign = u.yAlign, o = {
        opacity: 1,
        x: h.x,
        y: h.y,
        width: c.width,
        height: c.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: n
    });
  }
  drawCaret(t, n, s, i) {
    const o = this.getCaretPosition(t, s, i);
    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, n, s) {
    const { xAlign: i, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: c, topRight: l, bottomLeft: u, bottomRight: h } = us(a), { x: d, y: f } = t, { width: p, height: g } = n;
    let m, y, b, _, x, v;
    return o === "center" ? (x = f + g / 2, i === "left" ? (m = d, y = m - r, _ = x + r, v = x - r) : (m = d + p, y = m + r, _ = x - r, v = x + r), b = m) : (i === "left" ? y = d + Math.max(c, u) + r : i === "right" ? y = d + p - Math.max(l, h) - r : y = this.caretX, o === "top" ? (_ = f, x = _ - r, m = y - r, b = y + r) : (_ = f + g, x = _ + r, m = y + r, b = y - r), v = _), {
      x1: m,
      x2: y,
      x3: b,
      y1: _,
      y2: x,
      y3: v
    };
  }
  drawTitle(t, n, s) {
    const i = this.title, o = i.length;
    let r, a, c;
    if (o) {
      const l = js(s.rtl, this.x, this.width);
      for (t.x = Vo(this, s.titleAlign, s), n.textAlign = l.textAlign(s.titleAlign), n.textBaseline = "middle", r = Jt(s.titleFont), a = s.titleSpacing, n.fillStyle = s.titleColor, n.font = r.string, c = 0; c < o; ++c)
        n.fillText(i[c], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, c + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, n, s, i, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: c, boxWidth: l } = o, u = Jt(o.bodyFont), h = Vo(this, "left", o), d = i.x(h), f = c < u.lineHeight ? (u.lineHeight - c) / 2 : 0, p = n.y + f;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(l, c) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = i.leftForLtr(d, l) + l / 2, y = p + c / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, pc(t, g, m, y), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, pc(t, g, m, y);
    } else {
      t.lineWidth = mt(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const g = i.leftForLtr(d, l), m = i.leftForLtr(i.xPlus(d, 1), l - 2), y = us(r.borderRadius);
      Object.values(y).some((b) => b !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Zi(t, {
        x: g,
        y: p,
        w: l,
        h: c,
        radius: y
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Zi(t, {
        x: m,
        y: p + 1,
        w: l - 2,
        h: c - 2,
        radius: y
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, p, l, c), t.strokeRect(g, p, l, c), t.fillStyle = r.backgroundColor, t.fillRect(m, p + 1, l - 2, c - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, n, s) {
    const { body: i } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: c, boxWidth: l, boxPadding: u } = s, h = Jt(s.bodyFont);
    let d = h.lineHeight, f = 0;
    const p = js(s.rtl, this.x, this.width), g = function(P) {
      n.fillText(P, p.x(t.x + f), t.y + d / 2), t.y += d + o;
    }, m = p.textAlign(r);
    let y, b, _, x, v, w, A;
    for (n.textAlign = r, n.textBaseline = "middle", n.font = h.string, t.x = Vo(this, m, s), n.fillStyle = s.bodyColor, Pt(this.beforeBody, g), f = a && m !== "right" ? r === "center" ? l / 2 + u : l + 2 + u : 0, x = 0, w = i.length; x < w; ++x) {
      for (y = i[x], b = this.labelTextColors[x], n.fillStyle = b, Pt(y.before, g), _ = y.lines, a && _.length && (this._drawColorBox(n, t, x, p, s), d = Math.max(h.lineHeight, c)), v = 0, A = _.length; v < A; ++v)
        g(_[v]), d = h.lineHeight;
      Pt(y.after, g);
    }
    f = 0, d = h.lineHeight, Pt(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, n, s) {
    const i = this.footer, o = i.length;
    let r, a;
    if (o) {
      const c = js(s.rtl, this.x, this.width);
      for (t.x = Vo(this, s.footerAlign, s), t.y += s.footerMarginTop, n.textAlign = c.textAlign(s.footerAlign), n.textBaseline = "middle", r = Jt(s.footerFont), n.fillStyle = s.footerColor, n.font = r.string, a = 0; a < o; ++a)
        n.fillText(i[a], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, n, s, i) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: c } = t, { width: l, height: u } = s, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: p } = us(i.cornerRadius);
    n.fillStyle = i.backgroundColor, n.strokeStyle = i.borderColor, n.lineWidth = i.borderWidth, n.beginPath(), n.moveTo(a + h, c), r === "top" && this.drawCaret(t, n, s, i), n.lineTo(a + l - d, c), n.quadraticCurveTo(a + l, c, a + l, c + d), r === "center" && o === "right" && this.drawCaret(t, n, s, i), n.lineTo(a + l, c + u - p), n.quadraticCurveTo(a + l, c + u, a + l - p, c + u), r === "bottom" && this.drawCaret(t, n, s, i), n.lineTo(a + f, c + u), n.quadraticCurveTo(a, c + u, a, c + u - f), r === "center" && o === "left" && this.drawCaret(t, n, s, i), n.lineTo(a, c + h), n.quadraticCurveTo(a, c, a + h, c), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart, s = this.$animations, i = s && s.x, o = s && s.y;
    if (i || o) {
      const r = Di[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = nd(this, t), c = Object.assign({}, r, this._size), l = sd(n, t, c), u = id(t, c, l, n);
      (i._to !== u.x || o._to !== u.y) && (this.xAlign = l.xAlign, this.yAlign = l.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, u));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(n);
    const i = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const r = pe(n.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    n.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, i, n), yg(t, n.textDirection), o.y += r.top, this.drawTitle(o, t, n), this.drawBody(o, t, n), this.drawFooter(o, t, n), bg(t, n.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const s = this._active, i = t.map(({ datasetIndex: a, index: c }) => {
      const l = this.chart.getDatasetMeta(a);
      if (!l)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: l.data[c],
        index: c
      };
    }), o = !vr(s, i), r = this._positionChanged(i, n);
    (o || r) && (this._active = i, this._eventPosition = n, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, n, s = !0) {
    if (n && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options, o = this._active || [], r = this._getActiveElements(t, o, n, s), a = this._positionChanged(r, t), c = n || !vr(r, o) || a;
    return c && (this._active = r, (i.enabled || i.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, n))), c;
  }
  _getActiveElements(t, n, s, i) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!i)
      return n.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, n) {
    const { caretX: s, caretY: i, options: o } = this, r = Di[o.position].call(this, t, n);
    return r !== !1 && (s !== r.x || i !== r.y);
  }
}
z(_c, "positioners", Di);
var Jw = {
  id: "tooltip",
  _element: _c,
  positioners: Di,
  afterInit(e, t, n) {
    n && (e.tooltip = new _c({
      chart: e,
      options: n
    }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = {
        tooltip: t
      };
      if (e.notifyPlugins("beforeTooltipDraw", {
        ...n,
        cancelable: !0
      }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: zg
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
}, tS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: dw,
  Decimation: mw,
  Filler: Nw,
  Legend: Hw,
  SubTitle: Uw,
  Title: Ww,
  Tooltip: Jw
});
const eS = (e, t, n, s) => (typeof t == "string" ? (n = e.push(t) - 1, s.unshift({
  index: n,
  label: t
})) : isNaN(t) && (n = null), n);
function nS(e, t, n, s) {
  const i = e.indexOf(t);
  if (i === -1)
    return eS(e, t, n, s);
  const o = e.lastIndexOf(t);
  return i !== o ? n : i;
}
const sS = (e, t) => e === null ? null : ne(Math.round(e), 0, t);
function ad(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class wc extends xs {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const n = this._addedLabels;
    if (n.length) {
      const s = this.getLabels();
      for (const { index: i, label: o } of n)
        s[i] === o && s.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, n) {
    if (gt(t))
      return null;
    const s = this.getLabels();
    return n = isFinite(n) && s[n] === t ? n : nS(s, t, ft(n, t), this._addedLabels), sS(n, s.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let { min: s, max: i } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (s = 0), n || (i = this.getLabels().length - 1)), this.min = s, this.max = i;
  }
  buildTicks() {
    const t = this.min, n = this.max, s = this.options.offset, i = [];
    let o = this.getLabels();
    o = t === 0 && n === o.length - 1 ? o : o.slice(t, n + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let r = t; r <= n; r++)
      i.push({
        value: r
      });
    return i;
  }
  getLabelForValue(t) {
    return ad.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
z(wc, "id", "category"), z(wc, "defaults", {
  ticks: {
    callback: ad
  }
});
function iS(e, t) {
  const n = [], { bounds: i, step: o, min: r, max: a, precision: c, count: l, maxTicks: u, maxDigits: h, includeBounds: d } = e, f = o || 1, p = u - 1, { min: g, max: m } = t, y = !gt(r), b = !gt(a), _ = !gt(l), x = (m - g) / (h + 1);
  let v = nh((m - g) / p / f) * f, w, A, P, M;
  if (v < 1e-14 && !y && !b)
    return [
      {
        value: g
      },
      {
        value: m
      }
    ];
  M = Math.ceil(m / v) - Math.floor(g / v), M > p && (v = nh(M * v / p / f) * f), gt(c) || (w = Math.pow(10, c), v = Math.ceil(v * w) / w), i === "ticks" ? (A = Math.floor(g / v) * v, P = Math.ceil(m / v) * v) : (A = g, P = m), y && b && o && Z0((a - r) / o, v / 1e3) ? (M = Math.round(Math.min((a - r) / v, u)), v = (a - r) / M, A = r, P = a) : _ ? (A = y ? r : A, P = b ? a : P, M = l - 1, v = (P - A) / M) : (M = (P - A) / v, $i(M, Math.round(M), v / 1e3) ? M = Math.round(M) : M = Math.ceil(M));
  const T = Math.max(sh(v), sh(A));
  w = Math.pow(10, gt(c) ? T : c), A = Math.round(A * w) / w, P = Math.round(P * w) / w;
  let D = 0;
  for (y && (d && A !== r ? (n.push({
    value: r
  }), A < r && D++, $i(Math.round((A + D * v) * w) / w, r, cd(r, x, e)) && D++) : A < r && D++); D < M; ++D) {
    const C = Math.round((A + D * v) * w) / w;
    if (b && C > a)
      break;
    n.push({
      value: C
    });
  }
  return b && d && P !== a ? n.length && $i(n[n.length - 1].value, a, cd(a, x, e)) ? n[n.length - 1].value = a : n.push({
    value: a
  }) : (!b || P === a) && n.push({
    value: P
  }), n;
}
function cd(e, t, { horizontal: n, minRotation: s }) {
  const i = ze(s), o = (n ? Math.sin(i) : Math.cos(i)) || 1e-3, r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class Tr extends xs {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    return gt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: n, maxDefined: s } = this.getUserBounds();
    let { min: i, max: o } = this;
    const r = (c) => i = n ? i : c, a = (c) => o = s ? o : c;
    if (t) {
      const c = sn(i), l = sn(o);
      c < 0 && l < 0 ? a(0) : c > 0 && l > 0 && r(0);
    }
    if (i === o) {
      let c = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + c), t || r(i - c);
    }
    this.min = i, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: s } = t, i;
    return s ? (i = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, i > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`), i = 1e3)) : (i = this.computeTickLimit(), n = n || 11), n && (i = Math.min(n, i)), i;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, n = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const i = {
      maxTicks: s,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: n.precision,
      step: n.stepSize,
      count: n.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: n.minRotation || 0,
      includeBounds: n.includeBounds !== !1
    }, o = this._range || this, r = iS(i, o);
    return t.bounds === "ticks" && tg(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let n = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const i = (s - n) / Math.max(t.length - 1, 1) / 2;
      n -= i, s += i;
    }
    this._startValue = n, this._endValue = s, this._valueRange = s - n;
  }
  getLabelForValue(t) {
    return yo(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Sc extends Tr {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = Kt(t) ? t : 0, this.max = Kt(n) ? n : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), n = t ? this.width : this.height, s = ze(this.options.ticks.minRotation), i = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, o.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
z(Sc, "id", "linear"), z(Sc, "defaults", {
  ticks: {
    callback: Xr.formatters.numeric
  }
});
const Ji = (e) => Math.floor(Rn(e)), Jn = (e, t) => Math.pow(10, Ji(e) + t);
function ld(e) {
  return e / Math.pow(10, Ji(e)) === 1;
}
function ud(e, t, n) {
  const s = Math.pow(10, n), i = Math.floor(e / s);
  return Math.ceil(t / s) - i;
}
function oS(e, t) {
  const n = t - e;
  let s = Ji(n);
  for (; ud(e, t, s) > 10; )
    s++;
  for (; ud(e, t, s) < 10; )
    s--;
  return Math.min(s, Ji(e));
}
function rS(e, { min: t, max: n }) {
  t = Ce(e.min, t);
  const s = [], i = Ji(t);
  let o = oS(t, n), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), c = i > o ? Math.pow(10, i) : 0, l = Math.round((t - c) * r) / r, u = Math.floor((t - c) / a / 10) * a * 10;
  let h = Math.floor((l - u) / Math.pow(10, o)), d = Ce(e.min, Math.round((c + u + h * Math.pow(10, o)) * r) / r);
  for (; d < n; )
    s.push({
      value: d,
      major: ld(d),
      significand: h
    }), h >= 10 ? h = h < 15 ? 15 : 20 : h++, h >= 20 && (o++, h = 2, r = o >= 0 ? 1 : r), d = Math.round((c + u + h * Math.pow(10, o)) * r) / r;
  const f = Ce(e.max, d);
  return s.push({
    value: f,
    major: ld(f),
    significand: h
  }), s;
}
class Ac extends xs {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    const s = Tr.prototype.parse.apply(this, [
      t,
      n
    ]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return Kt(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = Kt(t) ? Math.max(0, t) : null, this.max = Kt(n) ? Math.max(0, n) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !Kt(this._userMin) && (this.min = t === Jn(this.min, 0) ? Jn(this.min, -1) : Jn(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let s = this.min, i = this.max;
    const o = (a) => s = t ? s : a, r = (a) => i = n ? i : a;
    s === i && (s <= 0 ? (o(1), r(10)) : (o(Jn(s, -1)), r(Jn(i, 1)))), s <= 0 && o(Jn(i, -1)), i <= 0 && r(Jn(s, 1)), this.min = s, this.max = i;
  }
  buildTicks() {
    const t = this.options, n = {
      min: this._userMin,
      max: this._userMax
    }, s = rS(n, this);
    return t.bounds === "ticks" && tg(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : yo(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = Rn(t), this._valueRange = Rn(this.max) - Rn(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Rn(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
z(Ac, "id", "logarithmic"), z(Ac, "defaults", {
  ticks: {
    callback: Xr.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Pc(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = pe(t.backdropPadding);
    return ft(t.font && t.font.size, Ht.font.size) + n.height;
  }
  return 0;
}
function aS(e, t, n) {
  return n = Bt(n) ? n : [
    n
  ], {
    w: pv(e, t.string, n),
    h: n.length * t.lineHeight
  };
}
function hd(e, t, n, s, i) {
  return e === s || e === i ? {
    start: t - n / 2,
    end: t + n / 2
  } : e < s || e > i ? {
    start: t - n,
    end: t
  } : {
    start: t,
    end: t + n
  };
}
function cS(e) {
  const t = {
    l: e.left + e._padding.left,
    r: e.right - e._padding.right,
    t: e.top + e._padding.top,
    b: e.bottom - e._padding.bottom
  }, n = Object.assign({}, t), s = [], i = [], o = e._pointLabels.length, r = e.options.pointLabels, a = r.centerPointLabels ? $t / o : 0;
  for (let c = 0; c < o; c++) {
    const l = r.setContext(e.getPointLabelContext(c));
    i[c] = l.padding;
    const u = e.getPointPosition(c, e.drawingArea + i[c], a), h = Jt(l.font), d = aS(e.ctx, h, e._pointLabels[c]);
    s[c] = d;
    const f = De(e.getIndexAngle(c) + a), p = Math.round(Sl(f)), g = hd(p, u.x, d.w, 0, 180), m = hd(p, u.y, d.h, 90, 270);
    lS(n, t, f, g, m);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b), e._pointLabelItems = dS(e, s, i);
}
function lS(e, t, n, s, i) {
  const o = Math.abs(Math.sin(n)), r = Math.abs(Math.cos(n));
  let a = 0, c = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, e.l = Math.min(e.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, e.r = Math.max(e.r, t.r + a)), i.start < t.t ? (c = (t.t - i.start) / r, e.t = Math.min(e.t, t.t - c)) : i.end > t.b && (c = (i.end - t.b) / r, e.b = Math.max(e.b, t.b + c));
}
function uS(e, t, n) {
  const s = e.drawingArea, { extra: i, additionalAngle: o, padding: r, size: a } = n, c = e.getPointPosition(t, s + i + r, o), l = Math.round(Sl(De(c.angle + qt))), u = gS(c.y, a.h, l), h = fS(l), d = pS(c.x, a.w, h);
  return {
    visible: !0,
    x: c.x,
    y: u,
    textAlign: h,
    left: d,
    top: u,
    right: d + a.w,
    bottom: u + a.h
  };
}
function hS(e, t) {
  if (!t)
    return !0;
  const { left: n, top: s, right: i, bottom: o } = e;
  return !(_n({
    x: n,
    y: s
  }, t) || _n({
    x: n,
    y: o
  }, t) || _n({
    x: i,
    y: s
  }, t) || _n({
    x: i,
    y: o
  }, t));
}
function dS(e, t, n) {
  const s = [], i = e._pointLabels.length, o = e.options, { centerPointLabels: r, display: a } = o.pointLabels, c = {
    extra: Pc(o) / 2,
    additionalAngle: r ? $t / i : 0
  };
  let l;
  for (let u = 0; u < i; u++) {
    c.padding = n[u], c.size = t[u];
    const h = uS(e, u, c);
    s.push(h), a === "auto" && (h.visible = hS(h, l), h.visible && (l = h));
  }
  return s;
}
function fS(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function pS(e, t, n) {
  return n === "right" ? e -= t : n === "center" && (e -= t / 2), e;
}
function gS(e, t, n) {
  return n === 90 || n === 270 ? e -= t / 2 : (n > 270 || n < 90) && (e -= t), e;
}
function mS(e, t, n) {
  const { left: s, top: i, right: o, bottom: r } = n, { backdropColor: a } = t;
  if (!gt(a)) {
    const c = us(t.borderRadius), l = pe(t.backdropPadding);
    e.fillStyle = a;
    const u = s - l.left, h = i - l.top, d = o - s + l.width, f = r - i + l.height;
    Object.values(c).some((p) => p !== 0) ? (e.beginPath(), Zi(e, {
      x: u,
      y: h,
      w: d,
      h: f,
      radius: c
    }), e.fill()) : e.fillRect(u, h, d, f);
  }
}
function yS(e, t) {
  const { ctx: n, options: { pointLabels: s } } = e;
  for (let i = t - 1; i >= 0; i--) {
    const o = e._pointLabelItems[i];
    if (!o.visible)
      continue;
    const r = s.setContext(e.getPointLabelContext(i));
    mS(n, r, o);
    const a = Jt(r.font), { x: c, y: l, textAlign: u } = o;
    ys(n, e._pointLabels[i], c, l + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: u,
      textBaseline: "middle"
    });
  }
}
function Wg(e, t, n, s) {
  const { ctx: i } = e;
  if (n)
    i.arc(e.xCenter, e.yCenter, t, 0, Nt);
  else {
    let o = e.getPointPosition(0, t);
    i.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      o = e.getPointPosition(r, t), i.lineTo(o.x, o.y);
  }
}
function bS(e, t, n, s, i) {
  const o = e.ctx, r = t.circular, { color: a, lineWidth: c } = t;
  !r && !s || !a || !c || n < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = c, o.setLineDash(i.dash || []), o.lineDashOffset = i.dashOffset, o.beginPath(), Wg(e, n, r, s), o.closePath(), o.stroke(), o.restore());
}
function vS(e, t, n) {
  return Un(e, {
    label: n,
    index: t,
    type: "pointLabel"
  });
}
class Ei extends Tr {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = pe(Pc(this.options) / 2), n = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + n / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(n, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    this.min = Kt(t) && !isNaN(t) ? t : 0, this.max = Kt(n) && !isNaN(n) ? n : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Pc(this.options));
  }
  generateTickLabels(t) {
    Tr.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((n, s) => {
      const i = Et(this.options.pointLabels.callback, [
        n,
        s
      ], this);
      return i || i === 0 ? i : "";
    }).filter((n, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? cS(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, s, i) {
    this.xCenter += Math.floor((t - n) / 2), this.yCenter += Math.floor((s - i) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, s, i));
  }
  getIndexAngle(t) {
    const n = Nt / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return De(t * n + ze(s));
  }
  getDistanceFromCenterForValue(t) {
    if (gt(t))
      return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (gt(t))
      return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const s = n[t];
      return vS(this.getContext(), t, s);
    }
  }
  getPointPosition(t, n, s = 0) {
    const i = this.getIndexAngle(t) - qt + s;
    return {
      x: Math.cos(i) * n + this.xCenter,
      y: Math.sin(i) * n + this.yCenter,
      angle: i
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: s, right: i, bottom: o } = this._pointLabelItems[t];
    return {
      left: n,
      top: s,
      right: i,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: n } } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(), s.beginPath(), Wg(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, n = this.options, { angleLines: s, grid: i, border: o } = n, r = this._pointLabels.length;
    let a, c, l;
    if (n.pointLabels.display && yS(this, r), i.display && this.ticks.forEach((u, h) => {
      if (h !== 0 || h === 0 && this.min < 0) {
        c = this.getDistanceFromCenterForValue(u.value);
        const d = this.getContext(h), f = i.setContext(d), p = o.setContext(d);
        bS(this, f, c, r, p);
      }
    }), s.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const u = s.setContext(this.getPointLabelContext(a)), { color: h, lineWidth: d } = u;
        !d || !h || (t.lineWidth = d, t.strokeStyle = h, t.setLineDash(u.borderDash), t.lineDashOffset = u.borderDashOffset, c = this.getDistanceFromCenterForValue(n.reverse ? this.min : this.max), l = this.getPointPosition(a, c), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, n = this.options, s = n.ticks;
    if (!s.display)
      return;
    const i = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(i), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, c) => {
      if (c === 0 && this.min >= 0 && !n.reverse)
        return;
      const l = s.setContext(this.getContext(c)), u = Jt(l.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[c].value), l.showLabelBackdrop) {
        t.font = u.string, r = t.measureText(a.label).width, t.fillStyle = l.backdropColor;
        const h = pe(l.backdropPadding);
        t.fillRect(-r / 2 - h.left, -o - u.size / 2 - h.top, r + h.width, u.size + h.height);
      }
      ys(t, a.label, 0, -o, u, {
        color: l.color,
        strokeColor: l.textStrokeColor,
        strokeWidth: l.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
z(Ei, "id", "radialLinear"), z(Ei, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: Xr.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(t) {
      return t;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), z(Ei, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), z(Ei, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const ta = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, xe = /* @__PURE__ */ Object.keys(ta);
function dd(e, t) {
  return e - t;
}
function fd(e, t) {
  if (gt(t))
    return null;
  const n = e._adapter, { parser: s, round: i, isoWeekday: o } = e._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), Kt(r) || (r = typeof s == "string" ? n.parse(r, s) : n.parse(r)), r === null ? null : (i && (r = i === "week" && (Ws(o) || o === !0) ? n.startOf(r, "isoWeek", o) : n.startOf(r, i)), +r);
}
function pd(e, t, n, s) {
  const i = xe.length;
  for (let o = xe.indexOf(e); o < i - 1; ++o) {
    const r = ta[xe[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((n - t) / (a * r.size)) <= s)
      return xe[o];
  }
  return xe[i - 1];
}
function xS(e, t, n, s, i) {
  for (let o = xe.length - 1; o >= xe.indexOf(n); o--) {
    const r = xe[o];
    if (ta[r].common && e._adapter.diff(i, s, r) >= t - 1)
      return r;
  }
  return xe[n ? xe.indexOf(n) : 0];
}
function _S(e) {
  for (let t = xe.indexOf(e) + 1, n = xe.length; t < n; ++t)
    if (ta[xe[t]].common)
      return xe[t];
}
function gd(e, t, n) {
  if (!n)
    e[t] = !0;
  else if (n.length) {
    const { lo: s, hi: i } = Al(n, t), o = n[s] >= t ? n[s] : n[i];
    e[o] = !0;
  }
}
function wS(e, t, n, s) {
  const i = e._adapter, o = +i.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, c;
  for (a = o; a <= r; a = +i.add(a, 1, s))
    c = n[a], c >= 0 && (t[c].major = !0);
  return t;
}
function md(e, t, n) {
  const s = [], i = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], i[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !n ? s : wS(e, s, i, n);
}
class to extends xs {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, n = {}) {
    const s = t.time || (t.time = {}), i = this._adapter = new Dx._date(t.adapters.date);
    i.init(n), Ni(s.displayFormats, i.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = n.normalized;
  }
  parse(t, n) {
    return t === void 0 ? null : fd(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, n = this._adapter, s = t.time.unit || "day";
    let { min: i, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function c(l) {
      !r && !isNaN(l.min) && (i = Math.min(i, l.min)), !a && !isNaN(l.max) && (o = Math.max(o, l.max));
    }
    (!r || !a) && (c(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && c(this.getMinMax(!1))), i = Kt(i) && !isNaN(i) ? i : +n.startOf(Date.now(), s), o = Kt(o) && !isNaN(o) ? o : +n.endOf(Date.now(), s) + 1, this.min = Math.min(i, o - 1), this.max = Math.max(i + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (n = t[0], s = t[t.length - 1]), {
      min: n,
      max: s
    };
  }
  buildTicks() {
    const t = this.options, n = t.time, s = t.ticks, i = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && i.length && (this.min = this._userMin || i[0], this.max = this._userMax || i[i.length - 1]);
    const o = this.min, r = this.max, a = ev(i, o, r);
    return this._unit = n.unit || (s.autoSkip ? pd(n.minUnit, this.min, this.max, this._getLabelCapacity(o)) : xS(this, a.length, n.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : _S(this._unit), this.initOffsets(i), t.reverse && a.reverse(), md(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0, s = 0, i, o;
    this.options.offset && t.length && (i = this.getDecimalForValue(t[0]), t.length === 1 ? n = 1 - i : n = (this.getDecimalForValue(t[1]) - i) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    n = ne(n, 0, r), s = ne(s, 0, r), this._offsets = {
      start: n,
      end: s,
      factor: 1 / (n + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, n = this.min, s = this.max, i = this.options, o = i.time, r = o.unit || pd(o.minUnit, n, s, this._getLabelCapacity(n)), a = ft(i.ticks.stepSize, 1), c = r === "week" ? o.isoWeekday : !1, l = Ws(c) || c === !0, u = {};
    let h = n, d, f;
    if (l && (h = +t.startOf(h, "isoWeek", c)), h = +t.startOf(h, l ? "day" : r), t.diff(s, n, r) > 1e5 * a)
      throw new Error(n + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const p = i.ticks.source === "data" && this.getDataTimestamps();
    for (d = h, f = 0; d < s; d = +t.add(d, a, r), f++)
      gd(u, d, p);
    return (d === s || i.bounds === "ticks" || f === 1) && gd(u, d, p), Object.keys(u).sort(dd).map((g) => +g);
  }
  getLabelForValue(t) {
    const n = this._adapter, s = this.options.time;
    return s.tooltipFormat ? n.format(t, s.tooltipFormat) : n.format(t, s.displayFormats.datetime);
  }
  format(t, n) {
    const i = this.options.time.displayFormats, o = this._unit, r = n || i[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, n, s, i) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return Et(r, [
        t,
        n,
        s
      ], this);
    const a = o.time.displayFormats, c = this._unit, l = this._majorUnit, u = c && a[c], h = l && a[l], d = s[n], f = l && h && d && d.major;
    return this._adapter.format(t, i || (f ? h : u));
  }
  generateTickLabels(t) {
    let n, s, i;
    for (n = 0, s = t.length; n < s; ++n)
      i = t[n], i.label = this._tickFormatFunction(i.value, n, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + s) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets, s = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks, s = this.ctx.measureText(t).width, i = ze(this.isHorizontal() ? n.maxRotation : n.minRotation), o = Math.cos(i), r = Math.sin(i), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const n = this.options.time, s = n.displayFormats, i = s[n.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, md(this, [
      t
    ], this._majorUnit), i), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], n, s;
    if (t.length)
      return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return this._cache.data = i[0].controller.getAllParsedValues(this);
    for (n = 0, s = i.length; n < s; ++n)
      t = t.concat(i[n].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, s;
    if (t.length)
      return t;
    const i = this.getLabels();
    for (n = 0, s = i.length; n < s; ++n)
      t.push(fd(this, i[n]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return sg(t.sort(dd));
  }
}
z(to, "id", "time"), z(to, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Fo(e, t, n) {
  let s = 0, i = e.length - 1, o, r, a, c;
  n ? (t >= e[s].pos && t <= e[i].pos && ({ lo: s, hi: i } = xn(e, "pos", t)), { pos: o, time: a } = e[s], { pos: r, time: c } = e[i]) : (t >= e[s].time && t <= e[i].time && ({ lo: s, hi: i } = xn(e, "time", t)), { time: o, pos: a } = e[s], { time: r, pos: c } = e[i]);
  const l = r - o;
  return l ? a + (c - a) * (t - o) / l : a;
}
class Tc extends to {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), n = this._table = this.buildLookupTable(t);
    this._minPos = Fo(n, this.min), this._tableRange = Fo(n, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: s } = this, i = [], o = [];
    let r, a, c, l, u;
    for (r = 0, a = t.length; r < a; ++r)
      l = t[r], l >= n && l <= s && i.push(l);
    if (i.length < 2)
      return [
        {
          time: n,
          pos: 0
        },
        {
          time: s,
          pos: 1
        }
      ];
    for (r = 0, a = i.length; r < a; ++r)
      u = i[r + 1], c = i[r - 1], l = i[r], Math.round((u + c) / 2) !== l && o.push({
        time: l,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, n = this.max;
    let s = super.getDataTimestamps();
    return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(n) || s.length === 1) && s.push(n), s.sort((i, o) => i - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const n = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return n.length && s.length ? t = this.normalize(n.concat(s)) : t = n.length ? n : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Fo(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets, s = this.getDecimalForPixel(t) / n.factor - n.end;
    return Fo(this._table, s * this._tableRange + this._minPos, !0);
  }
}
z(Tc, "id", "timeseries"), z(Tc, "defaults", to.defaults);
var SS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: wc,
  LinearScale: Sc,
  LogarithmicScale: Ac,
  RadialLinearScale: Ei,
  TimeScale: to,
  TimeSeriesScale: Tc
});
const AS = [
  kx,
  ow,
  tS,
  SS
];
tn.register(...AS);
const wR = ({
  data: e,
  backgroundColor: t,
  borderColor: n,
  borderWidth: s,
  barThickness: i,
  labelFillStyle: o,
  xTicksColor: r,
  yTicksColor: a,
  className: c = "",
  style: l = {}
}) => {
  const u = bt(null), h = bt(null);
  return vt(() => {
    var g;
    h.current && h.current.destroy();
    const d = (g = u.current) == null ? void 0 : g.getContext("2d"), f = Math.max(...e.map((m) => m.value)), p = Math.ceil(f / 100) * 100 + 50;
    if (d)
      return h.current = new tn(d, {
        type: "bar",
        data: {
          labels: e.map((m) => m.label),
          datasets: [
            {
              data: e.map((m) => m.value),
              backgroundColor: t || Array.from({ length: e.length }, (m, y) => y % 2 === 0 ? "#4CAF50" : "#2196F3"),
              borderColor: n || Array.from({ length: e.length }, (m, y) => y % 2 === 0 ? "#45a049" : "#1e88e5"),
              borderWidth: s || 1,
              barThickness: i || 20
            }
          ]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: {
            legend: {
              display: !1
            },
            tooltip: {
              enabled: !0,
              callbacks: {
                label: (m) => `${m.parsed.y}`
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: r || "#000"
              }
            },
            y: {
              beginAtZero: !0,
              max: p,
              ticks: {
                stepSize: p / 4,
                // Adjusted step size
                callback: (m) => m.toLocaleString(),
                color: a || "#000"
              }
            }
          },
          animation: {
            duration: 1e3,
            easing: "easeInOutQuart"
          },
          layout: {
            padding: {
              top: 20,
              // Increased top padding
              right: 10,
              bottom: 10,
              left: 10
            }
          }
        },
        plugins: [{
          id: "data-labels",
          afterDraw: (m) => {
            const y = m.ctx;
            m.data.datasets.forEach((b, _) => {
              m.getDatasetMeta(_).data.forEach((v, w) => {
                const A = b.data[w] + "";
                y.fillStyle = o || "#000000", y.textAlign = "center", y.textBaseline = "bottom", y.font = "10px Arial", y.fillText(A, v.x, v.y - 5);
              });
            });
          }
        }]
      }), () => {
        h.current && h.current.destroy();
      };
  }, [e]), /* @__PURE__ */ E.jsx("canvas", { ref: u, className: c, style: l });
}, Mt = (e) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      e();
    });
  });
}, Nl = (e, t, n, s) => t + n > s ? {
  top: "auto",
  bottom: `${s - e}px`,
  marginBottom: "-1px"
} : {
  top: `${t}px`,
  bottom: "auto",
  marginTop: "-1px"
}, $l = (e, t, n, s, i) => t + n - i > s ? {
  left: "auto",
  right: `${s - t}px`
} : {
  left: `${e}px`,
  right: "auto"
};
function Ie(e) {
  const [t, n, s] = e.split(".").map((o) => parseInt(o, 10)), i = new Date(t, n - 1, s);
  return i && i.getFullYear() === t && i.getMonth() === n - 1 && i.getDate() === s;
}
function Ds(e = 0) {
  const t = /* @__PURE__ */ new Date();
  t.setDate(t.getDate() + e);
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0");
  return `${n}.${s}.${i}`;
}
var Ug = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.TYPE1 = "type1", e))(Ug || {}), eo = /* @__PURE__ */ ((e) => (e.START_DATE = "startDate", e.END_DATE = "endDate", e))(eo || {});
const Yg = Pe(void 0), PS = ({
  children: e,
  selectedValue: t = [Ds(), Ds()],
  updateSelectedValue: n,
  afterUpdate: s,
  className: i = "",
  style: o = {},
  ...r
}) => {
  const [a, c] = yt(t[0]), [l, u] = yt(t[1]);
  vt(() => {
    c(t[0]), u(t[1]);
  }, [t]);
  const h = [a, l], d = [`${l}~`], f = [`~${a}`], p = (b) => {
    n(b);
  }, y = {
    setStartDateRange: (b) => {
      c(b), p([b, l]), s == null || s([b, l], "START");
    },
    setEndDateRange: (b) => {
      u(b), p([a, b]), s == null || s([a, b], "END");
    },
    selectedRange: h
  };
  return /* @__PURE__ */ E.jsx(Yg.Provider, { value: y, children: /* @__PURE__ */ E.jsx("div", { className: `h_single_datepicker_range_area ${i}`, style: o, ...r, children: e({
    startDate: a,
    setStartDate: c,
    endDate: l,
    setEndDate: u,
    startDisableDatesRange: d,
    endDisabledDatesRange: f
  }) }) });
};
PS.displayName = "HSingleDatePickerRangeArea";
const Gg = () => Tt(Yg) || {
  setStartDateRange: () => {
  },
  setEndDateRange: () => {
  },
  selectedRange: []
};
var jo = { exports: {} }, ce = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yd;
function TS() {
  if (yd) return ce;
  yd = 1;
  var e = re;
  function t(c) {
    var l = "https://react.dev/errors/" + c;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        l += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + c + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {
  }
  var s = {
    d: {
      f: n,
      r: function() {
        throw Error(t(522));
      },
      D: n,
      C: n,
      L: n,
      m: n,
      X: n,
      S: n,
      M: n
    },
    p: 0,
    findDOMNode: null
  }, i = Symbol.for("react.portal");
  function o(c, l, u) {
    var h = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: i,
      key: h == null ? null : "" + h,
      children: c,
      containerInfo: l,
      implementation: u
    };
  }
  var r = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function a(c, l) {
    if (c === "font") return "";
    if (typeof l == "string")
      return l === "use-credentials" ? l : "";
  }
  return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, ce.createPortal = function(c, l) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
      throw Error(t(299));
    return o(c, l, null, u);
  }, ce.flushSync = function(c) {
    var l = r.T, u = s.p;
    try {
      if (r.T = null, s.p = 2, c) return c();
    } finally {
      r.T = l, s.p = u, s.d.f();
    }
  }, ce.preconnect = function(c, l) {
    typeof c == "string" && (l ? (l = l.crossOrigin, l = typeof l == "string" ? l === "use-credentials" ? l : "" : void 0) : l = null, s.d.C(c, l));
  }, ce.prefetchDNS = function(c) {
    typeof c == "string" && s.d.D(c);
  }, ce.preinit = function(c, l) {
    if (typeof c == "string" && l && typeof l.as == "string") {
      var u = l.as, h = a(u, l.crossOrigin), d = typeof l.integrity == "string" ? l.integrity : void 0, f = typeof l.fetchPriority == "string" ? l.fetchPriority : void 0;
      u === "style" ? s.d.S(
        c,
        typeof l.precedence == "string" ? l.precedence : void 0,
        {
          crossOrigin: h,
          integrity: d,
          fetchPriority: f
        }
      ) : u === "script" && s.d.X(c, {
        crossOrigin: h,
        integrity: d,
        fetchPriority: f,
        nonce: typeof l.nonce == "string" ? l.nonce : void 0
      });
    }
  }, ce.preinitModule = function(c, l) {
    if (typeof c == "string")
      if (typeof l == "object" && l !== null) {
        if (l.as == null || l.as === "script") {
          var u = a(
            l.as,
            l.crossOrigin
          );
          s.d.M(c, {
            crossOrigin: u,
            integrity: typeof l.integrity == "string" ? l.integrity : void 0,
            nonce: typeof l.nonce == "string" ? l.nonce : void 0
          });
        }
      } else l == null && s.d.M(c);
  }, ce.preload = function(c, l) {
    if (typeof c == "string" && typeof l == "object" && l !== null && typeof l.as == "string") {
      var u = l.as, h = a(u, l.crossOrigin);
      s.d.L(c, u, {
        crossOrigin: h,
        integrity: typeof l.integrity == "string" ? l.integrity : void 0,
        nonce: typeof l.nonce == "string" ? l.nonce : void 0,
        type: typeof l.type == "string" ? l.type : void 0,
        fetchPriority: typeof l.fetchPriority == "string" ? l.fetchPriority : void 0,
        referrerPolicy: typeof l.referrerPolicy == "string" ? l.referrerPolicy : void 0,
        imageSrcSet: typeof l.imageSrcSet == "string" ? l.imageSrcSet : void 0,
        imageSizes: typeof l.imageSizes == "string" ? l.imageSizes : void 0,
        media: typeof l.media == "string" ? l.media : void 0
      });
    }
  }, ce.preloadModule = function(c, l) {
    if (typeof c == "string")
      if (l) {
        var u = a(l.as, l.crossOrigin);
        s.d.m(c, {
          as: typeof l.as == "string" && l.as !== "script" ? l.as : void 0,
          crossOrigin: u,
          integrity: typeof l.integrity == "string" ? l.integrity : void 0
        });
      } else s.d.m(c);
  }, ce.requestFormReset = function(c) {
    s.d.r(c);
  }, ce.unstable_batchedUpdates = function(c, l) {
    return c(l);
  }, ce.useFormState = function(c, l, u) {
    return r.H.useFormState(c, l, u);
  }, ce.useFormStatus = function() {
    return r.H.useHostTransitionStatus();
  }, ce.version = "19.0.0", ce;
}
var le = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bd;
function MS() {
  return bd || (bd = 1, process.env.NODE_ENV !== "production" && function() {
    function e() {
    }
    function t(h) {
      return "" + h;
    }
    function n(h, d, f) {
      var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        t(p);
        var g = !1;
      } catch {
        g = !0;
      }
      return g && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object"
      ), t(p)), {
        $$typeof: l,
        key: p == null ? null : "" + p,
        children: h,
        containerInfo: d,
        implementation: f
      };
    }
    function s(h, d) {
      if (h === "font") return "";
      if (typeof d == "string")
        return d === "use-credentials" ? d : "";
    }
    function i(h) {
      return h === null ? "`null`" : h === void 0 ? "`undefined`" : h === "" ? "an empty string" : 'something with type "' + typeof h + '"';
    }
    function o(h) {
      return h === null ? "`null`" : h === void 0 ? "`undefined`" : h === "" ? "an empty string" : typeof h == "string" ? JSON.stringify(h) : typeof h == "number" ? "`" + h + "`" : 'something with type "' + typeof h + '"';
    }
    function r() {
      var h = u.H;
      return h === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), h;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var a = re, c = {
      d: {
        f: e,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: e,
        C: e,
        L: e,
        m: e,
        X: e,
        S: e,
        M: e
      },
      p: 0,
      findDOMNode: null
    }, l = Symbol.for("react.portal"), u = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, le.createPortal = function(h, d) {
      var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return n(h, d, null, f);
    }, le.flushSync = function(h) {
      var d = u.T, f = c.p;
      try {
        if (u.T = null, c.p = 2, h)
          return h();
      } finally {
        u.T = d, c.p = f, c.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, le.preconnect = function(h, d) {
      typeof h == "string" && h ? d != null && typeof d != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        o(d)
      ) : d != null && typeof d.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        i(d.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(h)
      ), typeof h == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, c.d.C(h, d));
    }, le.prefetchDNS = function(h) {
      if (typeof h != "string" || !h)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          i(h)
        );
      else if (1 < arguments.length) {
        var d = arguments[1];
        typeof d == "object" && d.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          o(d)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          o(d)
        );
      }
      typeof h == "string" && c.d.D(h);
    }, le.preinit = function(h, d) {
      if (typeof h == "string" && h ? d == null || typeof d != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        o(d)
      ) : d.as !== "style" && d.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        o(d.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(h)
      ), typeof h == "string" && d && typeof d.as == "string") {
        var f = d.as, p = s(f, d.crossOrigin), g = typeof d.integrity == "string" ? d.integrity : void 0, m = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
        f === "style" ? c.d.S(
          h,
          typeof d.precedence == "string" ? d.precedence : void 0,
          {
            crossOrigin: p,
            integrity: g,
            fetchPriority: m
          }
        ) : f === "script" && c.d.X(h, {
          crossOrigin: p,
          integrity: g,
          fetchPriority: m,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0
        });
      }
    }, le.preinitModule = function(h, d) {
      var f = "";
      if (typeof h == "string" && h || (f += " The `href` argument encountered was " + i(h) + "."), d !== void 0 && typeof d != "object" ? f += " The `options` argument encountered was " + i(d) + "." : d && "as" in d && d.as !== "script" && (f += " The `as` option encountered was " + o(d.as) + "."), f)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          f
        );
      else
        switch (f = d && typeof d.as == "string" ? d.as : "script", f) {
          case "script":
            break;
          default:
            f = o(f), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              f,
              h
            );
        }
      typeof h == "string" && (typeof d == "object" && d !== null ? (d.as == null || d.as === "script") && (f = s(
        d.as,
        d.crossOrigin
      ), c.d.M(h, {
        crossOrigin: f,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      })) : d == null && c.d.M(h));
    }, le.preload = function(h, d) {
      var f = "";
      if (typeof h == "string" && h || (f += " The `href` argument encountered was " + i(h) + "."), d == null || typeof d != "object" ? f += " The `options` argument encountered was " + i(d) + "." : typeof d.as == "string" && d.as || (f += " The `as` option encountered was " + i(d.as) + "."), f && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        f
      ), typeof h == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
        f = d.as;
        var p = s(
          f,
          d.crossOrigin
        );
        c.d.L(h, f, {
          crossOrigin: p,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0,
          type: typeof d.type == "string" ? d.type : void 0,
          fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
          referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
          imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
          imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
          media: typeof d.media == "string" ? d.media : void 0
        });
      }
    }, le.preloadModule = function(h, d) {
      var f = "";
      typeof h == "string" && h || (f += " The `href` argument encountered was " + i(h) + "."), d !== void 0 && typeof d != "object" ? f += " The `options` argument encountered was " + i(d) + "." : d && "as" in d && typeof d.as != "string" && (f += " The `as` option encountered was " + i(d.as) + "."), f && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        f
      ), typeof h == "string" && (d ? (f = s(
        d.as,
        d.crossOrigin
      ), c.d.m(h, {
        as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
        crossOrigin: f,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0
      })) : c.d.m(h));
    }, le.requestFormReset = function(h) {
      c.d.r(h);
    }, le.unstable_batchedUpdates = function(h, d) {
      return h(d);
    }, le.useFormState = function(h, d, f) {
      return r().useFormState(h, d, f);
    }, le.useFormStatus = function() {
      return r().useHostTransitionStatus();
    }, le.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), le;
}
var vd;
function CS() {
  if (vd) return jo.exports;
  vd = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (e(), jo.exports = TS()) : jo.exports = MS(), jo.exports;
}
var be = CS();
const Kg = Pe(void 0), ve = (e) => e.replace(/\./g, "-"), kS = ({
  children: e,
  selectedValue: t = Ds(),
  dayFormat: n = ["일", "월", "화", "수", "목", "금", "토"],
  monthLength: s = 4,
  yearLength: i = 3,
  yearBeforeAfterLength: o = 4,
  type: r = Ug.DEFAULT,
  isDisabled: a = !1,
  disabledDates: c = [],
  disabledDatesRange: l = [],
  rangeType: u = "",
  scrollEventRefs: h = void 0,
  onBlur: d = () => {
  },
  updateSelectedValue: f = () => {
  },
  className: p = "",
  style: g = {},
  ...m
}) => {
  const { selectedRange: y, setStartDateRange: b, setEndDateRange: _ } = Gg(), x = (J) => {
    if (y.length === 0)
      return !1;
    const Z = ve(J);
    return new Date(ve(y[0])) <= new Date(Z) && new Date(Z) <= new Date(ve(y[1]));
  }, v = (J) => {
    if (y.length === 0)
      return !1;
    const [Z, et] = y[0].split("."), [dt, R] = y[1].split("."), L = `${Z}-${et}`, F = `${dt}-${R}`;
    return new Date(L) <= new Date(ve(J)) && new Date(ve(J)) <= new Date(F);
  }, w = (J) => {
    if (y.length === 0)
      return !1;
    const [Z] = y[0].split("."), [et] = y[1].split("."), dt = `${Z}`, R = `${et}`;
    return new Date(dt) <= new Date(ve(J)) && new Date(ve(J)) <= new Date(R);
  }, A = (J) => {
    const Z = ve(J), et = c.includes(J), dt = l.some((R) => {
      const [L, F] = R.split("~");
      if (L.length === 0 && F.length > 0)
        return new Date(Z) < new Date(ve(F));
      if (L.length > 0 && F.length === 0)
        return new Date(ve(L)) < new Date(Z);
      if (L.length > 0 && F.length > 0)
        return new Date(ve(L)) < new Date(Z) && new Date(Z) < new Date(ve(F));
    });
    return et || dt;
  }, P = (J) => {
    const Z = ve(J);
    return l.some((et) => {
      const [dt, R] = et.split("~");
      if (dt.length === 0 && R.length > 0)
        return new Date(Z) < /* @__PURE__ */ new Date(
          `${R.split(".")[0]}-${R.split(".")[1]}`
        );
      if (dt.length > 0 && R.length === 0)
        return /* @__PURE__ */ new Date(`${dt.split(".")[0]}-${dt.split(".")[1]}`) < new Date(Z);
      if (dt.length > 0 && R.length > 0)
        return /* @__PURE__ */ new Date(`${dt.split(".")[0]}-${dt.split(".")[1]}`) < new Date(Z) && new Date(Z) < /* @__PURE__ */ new Date(`${R.split(".")[0]}-${R.split(".")[1]}`);
    });
  }, M = (J) => {
    const Z = ve(J);
    return l.some((et) => {
      const [dt, R] = et.split("~");
      if (dt.length === 0 && R.length > 0)
        return new Date(Z).getFullYear() < (/* @__PURE__ */ new Date(`${R.split(".")[0]}`)).getFullYear();
      if (dt.length > 0 && R.length === 0)
        return (/* @__PURE__ */ new Date(`${dt.split(".")[0]}`)).getFullYear() < new Date(Z).getFullYear();
      if (dt.length > 0 && R.length > 0)
        return (/* @__PURE__ */ new Date(`${dt.split(".")[0]}`)).getFullYear() < new Date(Z).getFullYear() && new Date(Z).getFullYear() < (/* @__PURE__ */ new Date(`${R.split(".")[0]}`)).getFullYear();
    });
  }, [T, D] = yt({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    minusWidth: 0,
    clientWidth: 0,
    clientHeight: 0
  }), [C, I] = yt(!1), G = () => {
    if (I(!0), Q(!1), H(!1), !st.current)
      return;
    const { bottom: J, left: Z, right: et, top: dt, width: R } = st.current.getBoundingClientRect();
    D({
      bottom: J,
      left: Z,
      right: et,
      top: dt,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      minusWidth: R
    });
  }, [W, H] = yt(!1);
  vt(() => {
    W ? (window.addEventListener("click", U), window.addEventListener("scroll", k), window.addEventListener("resize", B), Array.isArray(h) && h.forEach((J) => {
      const Z = document.querySelector(J);
      Z instanceof HTMLElement && Z.addEventListener("scroll", k);
    })) : (window.removeEventListener("click", U), window.removeEventListener("scroll", k), window.removeEventListener("resize", B), Array.isArray(h) && h.forEach((J) => {
      const Z = document.querySelector(J);
      Z instanceof HTMLElement && Z.removeEventListener(
        "scroll",
        k
      );
    }));
  }, [W]);
  const [j, Q] = yt(!1), q = () => {
    if (Q(!0), I(!1), H(!1), !st.current)
      return;
    const { bottom: J, left: Z, right: et, top: dt, width: R } = st.current.getBoundingClientRect();
    D({
      bottom: J,
      left: Z,
      right: et,
      top: dt,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      minusWidth: R
    });
  }, st = bt(null), K = bt(null), k = () => {
    if (!st.current)
      return;
    const { top: J, bottom: Z, left: et, right: dt, width: R } = st.current.getBoundingClientRect();
    D((L) => ({
      ...L,
      top: J,
      bottom: Z,
      left: et,
      right: dt,
      minusWidth: R
    }));
  }, B = () => {
    D((J) => ({
      ...J,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    }));
  }, U = (J) => {
    const Z = J.target;
    if (!(Z instanceof HTMLElement))
      return;
    const et = Z.closest(".inp_datepicker");
    if (et) {
      et !== K.current && (I(!1), H(!1), Q(!1), d());
      return;
    }
    Z.closest(".h_calendar_area") || Z.closest(".h_calendar_month_area") || Z.closest(".h_calendar_year_area") || (I(!1), H(!1), Q(!1), d());
  }, O = (J) => {
    switch (u) {
      case eo.START_DATE:
        b(J);
        break;
      case eo.END_DATE:
        _(J);
        break;
    }
  }, X = (J) => {
    if (J instanceof KeyboardEvent && J.key !== "Enter")
      return;
    const Z = J.target;
    if (!(Z instanceof HTMLInputElement))
      return;
    const et = Z.value, dt = (/* @__PURE__ */ new Date()).getFullYear() % 100;
    switch (et.length) {
      // 4- 2311(2023.01.01) // 2325(2023.02.05)
      case 4:
        (() => {
          const R = et.toString();
          let L = parseInt(R.slice(0, 2), 10);
          L > dt ? L += 1900 : L += 2e3;
          const F = R.slice(2, 3).padStart(2, "0"), tt = R.slice(3).padStart(2, "0");
          if (!Ie(`${L}.${F}.${tt}`) || A(`${L}.${F}.${tt}`)) {
            const se = V;
            Mt(() => {
              be.flushSync(() => {
                N("");
              }), Mt(() => {
                N(se), O(se);
              });
            });
            return;
          }
          ht(L), _t(Number(F)), Mt(() => {
            be.flushSync(() => {
              N("");
            }), Mt(() => {
              N(`${L}.${F}.${tt}`), O(`${L}.${F}.${tt}`);
            });
          });
        })();
        break;
      // 5 - 23.21(2023.02.01) // 232.1(2023.02.01) // 23210(2023.02.10) // 23101(2023.01.01) // 23131(2023.01.31)
      case 5:
        (() => {
          const R = et.replace(/\./g, ""), L = dt >= parseInt(R.slice(0, 2)) ? 2e3 + parseInt(R.slice(0, 2)) : 1900 + parseInt(R.slice(0, 2));
          let F = "", tt = "";
          if (R.length === 5 ? (F = R.slice(2, 3).toString().padStart(2, "0"), tt = R.slice(3)) : R.length === 4 && (F = "0" + R.charAt(2), tt = "0" + R.charAt(3)), !Ie(`${L}.${F}.${tt}`) || A(`${L}.${F}.${tt}`)) {
            const se = V;
            Mt(() => {
              be.flushSync(() => {
                N("");
              }), Mt(() => {
                N(se), O(se);
              });
            });
            return;
          }
          ht(L), _t(Number(F)), Mt(() => {
            be.flushSync(() => {
              N("");
            }), Mt(() => {
              N(`${L}.${F}.${tt}`), O(`${L}.${F}.${tt}`);
            });
          });
        })();
        break;
      // 6 - 202321(2023.02.01) // 23.2.1(2023.02.01) // 23.210(2023.02.10) // 232.10(2023.02.10)
      case 6:
        (() => {
          let R = "", L = "", F = "";
          if (et.includes(".")) {
            const tt = et.replace(/\./g, "");
            R = dt >= parseInt(tt.slice(0, 2)) ? (2e3 + parseInt(tt.slice(0, 2))).toString() : (1900 + parseInt(tt.slice(0, 2))).toString(), L = tt.slice(2, 3).toString().padStart(2, "0"), F = tt.slice(3).toString().padStart(2, "0");
          } else
            R = et.slice(0, 2), L = et.slice(2, 4).toString().padStart(2, "0"), F = et.slice(4, 6).toString().padStart(2, "0"), Ie(`${R}.${L}.${F}`) || (R = `${R}${L}`, L = F.toString().split("")[0].padStart(2, "0"), F = F.toString().split("")[1].padStart(2, "0"));
          if (!Ie(`${R}.${L}.${F}`) || A(`${R}.${L}.${F}`)) {
            const tt = V;
            Mt(() => {
              be.flushSync(() => {
                N("");
              }), Mt(() => {
                N(tt), O(tt);
              });
            });
            return;
          }
          ht(Number(R)), _t(Number(L)), Mt(() => {
            be.flushSync(() => {
              N("");
            }), Mt(() => {
              N(`${R}.${L}.${F}`), O(`${R}.${L}.${F}`);
            });
          });
        })();
        break;
      // 7 - 20232.1(2023.02.01) // 2023.21(2023.02.01) // 20.0511(2020.05.11) // 2023201(2023.02.01) // 2023101(2023.01.01) // 2023130(2023.01.30)
      case 7:
        (() => {
          let R = "", L = "", F = "";
          if (et.includes(".")) {
            const tt = et.replace(/\./g, "");
            R = dt >= parseInt(tt.slice(0, 2)) ? (2e3 + parseInt(tt.slice(0, 2))).toString() : (1900 + parseInt(tt.slice(0, 2))).toString(), L = tt.slice(2, 4).padStart(2, "0"), F = tt.slice(4, 6).padStart(2, "0"), Ie(`${R}.${L}.${F}`) || (R = `${R.slice(2)}${L}`, L = `${F.split("")[0].padStart(2, "0")}`, F = `${F.split("")[1].padStart(2, "0")}`);
          } else
            R = et.slice(0, 4), L = et.slice(4, 5).toString().padStart(2, "0"), F = et.slice(5).toString().padStart(2, "0");
          if (!Ie(`${R}.${L}.${F}`) || A(`${R}.${L}.${F}`)) {
            const tt = V;
            Mt(() => {
              be.flushSync(() => {
                N("");
              }), Mt(() => {
                N(tt), O(tt);
              });
            });
            return;
          }
          ht(Number(R)), _t(Number(L)), Mt(() => {
            be.flushSync(() => {
              N("");
            }), Mt(() => {
              N(`${R}.${L}.${F}`), O(`${R}.${L}.${F}`);
            });
          });
        })();
        break;
      // 8 - 20230212(2023.02.12) // 2023.2.1(2023.02.01) // 20.02.05(2020.02.05) // 2023.021(2023.02.01) // 20232.11(2023.02.11)
      case 8:
        (() => {
          let R = "", L = "", F = "";
          if (et.includes(".")) {
            const tt = et.replace(/\./g, "");
            tt.length === 6 ? (R = dt >= parseInt(tt.slice(0, 2)) ? (2e3 + parseInt(
              tt.slice(0, 2)
            )).toString() : (1900 + parseInt(
              tt.slice(0, 2)
            )).toString(), L = tt.slice(2, 4).padStart(2, "0"), F = tt.slice(4, 6).padStart(2, "0"), Ie(`${R}.${L}.${F}`) || (R = `${R.slice(2)}${L}`, L = `${F.split("")[0].padStart(2, "0")}`, F = `${F.split("")[1].padStart(2, "0")}`)) : (R = tt.slice(0, 4), L = tt.slice(4, 5).padStart(2, "0"), F = tt.slice(5).padStart(2, "0"), Ie(`${R}.${L}.${F}`) || (L = F.split("")[0].padStart(2, "0"), F = F.split("")[1].padStart(2, "0")));
          } else
            R = et.slice(0, 4), L = et.slice(4, 6), F = et.slice(6, 8);
          if (!Ie(`${R}.${L}.${F}`) || A(`${R}.${L}.${F}`)) {
            const tt = V;
            Mt(() => {
              be.flushSync(() => {
                N("");
              }), Mt(() => {
                N(tt), O(tt);
              });
            });
            return;
          }
          ht(Number(R)), _t(Number(L)), Mt(() => {
            be.flushSync(() => {
              N("");
            }), Mt(() => {
              N(`${R}.${L}.${F}`), O(`${R}.${L}.${F}`);
            });
          });
        })();
        break;
      // 9 - 2023.02.1(2023.02.01) // 2023.0212(2023.02.12) // 202302.12(2023.02.12) // 2023.2.11(2023.02.11) // 2023.02.1(2023.02.01) // 2023.19.1(2023.09.01)
      case 9:
        (() => {
          let R = "", L = "", F = "";
          if (et.includes(".")) {
            const tt = et.replace(/\./g, "");
            if (R = tt.slice(0, 4), L = tt.slice(4, 5).padStart(2, "0"), F = tt.slice(5).padStart(2, "0"), !Ie(`${R}.${L}.${F}`)) {
              const [se, ...hn] = F.split("");
              L = se.padStart(2, "0"), F = hn.join("").padStart(2, "0");
            }
          }
          if (!Ie(`${R}.${L}.${F}`) || A(`${R}.${L}.${F}`)) {
            const tt = V;
            Mt(() => {
              be.flushSync(() => {
                N("");
              }), Mt(() => {
                N(tt), O(tt);
              });
            });
            return;
          }
          ht(Number(R)), _t(Number(L)), Mt(() => {
            be.flushSync(() => {
              N("");
            }), Mt(() => {
              N(`${R}.${L}.${F}`), O(`${R}.${L}.${F}`);
            });
          });
        })();
        break;
      // 10 - 2023.02.12
      case 10:
      default:
        (() => {
          if (!Ie(et) || A(et)) {
            const tt = V;
            Mt(() => {
              be.flushSync(() => {
                N("");
              }), Mt(() => {
                N(tt), O(tt);
              });
            });
            return;
          }
          const [R, L, F] = et.split(".");
          ht(Number(R)), _t(Number(L)), Mt(() => {
            be.flushSync(() => {
              N("");
            }), Mt(() => {
              N(`${R}.${L}.${F}`), O(`${R}.${L}.${F}`);
            });
          });
        })();
        break;
    }
  }, [V, N] = yt(t);
  vt(() => {
    N(t);
  }, [t]);
  const nt = (J) => {
    N(J), H(!1), Q(!1), I(!1), f(J);
  }, [ct, ht] = yt(
    Number(V == null ? void 0 : V.split(".")[0]) || (/* @__PURE__ */ new Date()).getFullYear()
  ), [lt, _t] = yt(
    Number(V == null ? void 0 : V.split(".")[1]) || (/* @__PURE__ */ new Date()).getMonth() + 1
  ), ut = (J) => {
    const Z = lt + J;
    Z > 12 ? (_t(1), ht((et) => et + 1)) : Z < 1 ? (_t(12), ht((et) => et - 1)) : _t(Z);
  }, [xt, Qt] = yt(ct), Vt = (J) => {
    Qt((Z) => Z + J);
  }, [Rt, Dt] = yt(ct), [kt, S] = yt(Rt - o), [$, Y] = yt(Rt + o), ot = (J) => {
    S((Z) => Z + J), Y((Z) => Z + J);
  };
  vt(() => {
    Qt(ct), Dt(ct);
  }, [ct]);
  const Ft = () => {
    K.current && (K.current.addEventListener(
      "keyup",
      X
    ), K.current.addEventListener(
      "blur",
      X
    ));
  }, St = () => {
    K.current && (K.current.removeEventListener(
      "keyup",
      X
    ), K.current.removeEventListener(
      "blur",
      X
    ));
  }, at = () => {
    if (W || j || C)
      switch (!0) {
        case W:
          H(!0), Q(!1), I(!1);
          break;
        case j:
          H(!1), Q(!0), I(!1);
          break;
        case C:
          H(!1), Q(!1), I(!0);
          break;
      }
    else
      H(!0), Q(!1), I(!1);
    if (!st.current)
      return;
    const { bottom: J, left: Z, right: et, top: dt, width: R } = st.current.getBoundingClientRect();
    D({
      bottom: J,
      left: Z,
      right: et,
      top: dt,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      minusWidth: R
    });
  }, ae = (() => {
    const [J, Z] = Ds().split("."), dt = Array.from({ length: 12 }, (L, F) => F + 1).map((L) => {
      var F, tt, se, hn;
      return {
        year: String(xt),
        month: String(L),
        isActive: Number(V.split(".")[0]) === xt && lt === L,
        inRange: v(
          `${String(xt)}.${String(
            L
          ).padStart(2, "0")}`
        ),
        isDisabled: P(
          `${String(xt)}.${String(
            L
          ).padStart(2, "0")}`
        ),
        isCurrentMonth: xt === Number(J) && L === Number(Z),
        isStartMonth: Number((F = y[0]) == null ? void 0 : F.split(".")[0]) === xt && Number((tt = y[0]) == null ? void 0 : tt.split(".")[1]) === L,
        isEndMonth: Number((se = y[1]) == null ? void 0 : se.split(".")[0]) === xt && Number((hn = y[1]) == null ? void 0 : hn.split(".")[1]) === L
      };
    }), R = [];
    for (let L = 0; L < dt.length; L += s)
      R.push(dt.slice(L, L + s));
    return R;
  })(), zt = Ge(() => o * 2 + 1, [o]), je = (() => {
    const [J] = Ds().split("."), Z = [];
    for (let R = kt; R <= $; R++)
      Z.push(R);
    const et = Z.map((R) => {
      var L, F;
      return {
        year: String(R),
        isActive: Number(V.split(".")[0]) === R,
        inRange: w(String(R)),
        // Todo
        isDisabled: M(String(R)),
        isCurrentYear: R === Number(J),
        isStartYear: Number((L = y[0]) == null ? void 0 : L.split(".")[0]) === R,
        isEndYear: Number((F = y[1]) == null ? void 0 : F.split(".")[0]) === R
      };
    }), dt = [];
    for (let R = 0; R < et.length; R += i)
      dt.push(et.slice(R, R + i));
    return dt;
  })(), Xe = ((J, Z) => {
    var Vu, Fu, ju, Bu, Hu, zu;
    const [et, dt, R] = Ds().split("."), [L, F, tt] = (V == null ? void 0 : V.split(".")) || [null, null, null], se = Number(L) === J && Number(F) === Z, hn = new Date(J, Z, 0).getDate(), mi = [];
    let Ta = Array(7).fill(null);
    for (let Be = 1; Be <= hn; Be++) {
      const Wu = new Date(J, Z - 1, Be).getDay();
      Ta[Wu] = {
        year: String(J),
        month: String(Z).padStart(2, "0"),
        date: String(Be),
        isActive: se && Number(tt) === Be,
        inRange: x(
          `${String(J)}.${String(Z).padStart(
            2,
            "0"
          )}.${String(Be).padStart(2, "0")}`
        ),
        isDisabled: A(
          `${String(J)}.${String(Z).padStart(
            2,
            "0"
          )}.${String(Be).padStart(2, "0")}`
        ),
        isCurrentDate: Number(et) === J && Number(dt) === Z && Number(R) === Be,
        isStartDate: Number((Vu = y[0]) == null ? void 0 : Vu.split(".")[0]) === J && Number((Fu = y[0]) == null ? void 0 : Fu.split(".")[1]) === Z && Number((ju = y[0]) == null ? void 0 : ju.split(".")[2]) === Be,
        isEndDate: Number((Bu = y[1]) == null ? void 0 : Bu.split(".")[0]) === J && Number((Hu = y[1]) == null ? void 0 : Hu.split(".")[1]) === Z && Number((zu = y[1]) == null ? void 0 : zu.split(".")[2]) === Be
      }, (Wu === 6 || Be === hn) && (mi.push(Ta), Ta = Array(7).fill(null));
    }
    return mi;
  })(ct, lt), Gt = (J) => {
    const [Z, et] = J.split(".");
    ht(Number(Z)), _t(Number(et)), Q(!1), I(!1), H(!0);
  }, gi = (J) => {
    ht(Number(J)), I(!1), Q(!0), H(!1);
  }, As = bt(null), Ps = bt(null), qe = bt(null), Kn = Ge(() => a, [a]), Xn = {
    selectedDatePickerValue: V,
    clickedDatePickerInput: at,
    updateSelectedDatePickerValue: nt,
    // setSelectedDatePickerValue
    updateNowMonth: ut,
    // setNowMonth
    updateYearForYearCalendar: ot,
    // setYearForYearCalendar
    updateYearForMonthCalendar: Vt,
    // setYearForMonthCalendar
    yearsArrLength: zt,
    updateIsActiveYearCalendar: G,
    // setIsActiveYearCalendar
    updateIsActiveMonthCalendar: q,
    // setIsActiveMonthCalendar
    setNowMonthByMonthCalendar: Gt,
    setNowYearByYearCalendar: gi,
    calendarInputButtonRef: K,
    // calendarInput
    calendarInputAreaRef: st,
    // calendarInputArea
    calendarPosition: T,
    calendarAreaRef: As,
    // calendarArea
    calendarMonthAreaRef: Ps,
    // calendarMonthArea
    calendarYearAreaRef: qe,
    // calendarYearArea
    type: r,
    // calendarType
    focusInDatePickerInput: Ft,
    focusOutDatePickerInput: St,
    rangeType: u,
    isDisabledValue: Kn
    // isDisabled
  }, Ts = () => {
    I(!1), Q(!1), H(!1);
  };
  return /* @__PURE__ */ E.jsx(Kg.Provider, { value: Xn, children: /* @__PURE__ */ E.jsx("div", { className: `h_single_datepicker_area ${r} ${p}`, style: g, ...m, children: e({
    isActiveCalendar: W,
    isActiveMonthCalendar: j,
    isActiveYearCalendar: C,
    dayFormat: n,
    monthDates: Xe,
    nowYear: ct,
    nowMonth: lt,
    months: ae,
    years: je,
    startYear: kt,
    endYear: $,
    yearForYearCalendar: Rt,
    yearForMonthCalendar: xt,
    closeAllCalendar: Ts
  }) }) });
};
kS.displayName = "HSingleDatePickerArea";
const te = () => {
  const e = Tt(Kg);
  if (!e)
    throw new Error("useHSingleDatePickerAreaContext must be used within a HSingleDatePickerAreaProvider");
  return e;
}, DS = ({
  children: e,
  childrenTableHead: t,
  className: n = "",
  tableClassName: s = "",
  tableHeadClassName: i = "",
  tableBodyClassName: o = "",
  style: r = {},
  ...a
}) => {
  const { type: c } = te();
  return /* @__PURE__ */ E.jsx("div", { className: `h_calendar ${c} ${n}`, style: r, ...a, children: /* @__PURE__ */ E.jsxs("table", { className: `h_calendar_table ${s}`, children: [
    /* @__PURE__ */ E.jsx("caption", { children: /* @__PURE__ */ E.jsx("span", { className: "blind", children: "Dates" }) }),
    /* @__PURE__ */ E.jsx("thead", { className: `calendar_head ${i}`, children: t }),
    /* @__PURE__ */ E.jsx("tbody", { className: `calendar_body ${o}`, children: e })
  ] }) });
};
DS.displayName = "HSingleDatePickerCalendar";
const ES = ({
  value: e,
  children: t,
  className: n = "",
  style: s = {},
  disabled: i = !1
}) => {
  const { type: o, updateSelectedDatePickerValue: r, rangeType: a } = te(), { setStartDateRange: c, setEndDateRange: l } = Gg(), u = () => {
    switch (r(e), a) {
      case eo.START_DATE:
        c(e);
        break;
      case eo.END_DATE:
        l(e);
        break;
    }
  };
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_common ${o} ${n}`,
      style: s,
      onClick: u,
      disabled: i,
      children: t
    }
  );
};
ES.displayName = "HSingleDatePickerCalendarDateButton";
const OS = ({
  children: e,
  className: t = "",
  style: n = {},
  ...s
}) => {
  const { type: i, calendarPosition: o, calendarAreaRef: r } = te(), [a, c] = yt({});
  return vt(() => {
    if (!o)
      return;
    const {
      bottom: l,
      left: u,
      right: h,
      top: d,
      clientWidth: f,
      clientHeight: p,
      minusWidth: g
    } = o;
    if (!r.current)
      return;
    const { height: m, width: y } = r.current.getBoundingClientRect();
    c({
      position: "fixed",
      zIndex: "220",
      ...Nl(d, l, m, p),
      ...$l(u, h, y, f, g)
    });
  }, [o, r]), /* @__PURE__ */ E.jsx(
    "div",
    {
      ref: r,
      className: `h_calendar_area ${i} ${t}`,
      style: {
        position: "fixed",
        ...n,
        ...a
      },
      ...s,
      children: e
    }
  );
};
OS.displayName = "HSingleDatePickerCalendarArea";
const RS = ({
  children: e,
  className: t = "",
  style: n = {},
  ...s
}) => {
  const { type: i, calendarPosition: o, calendarMonthAreaRef: r } = te(), [a, c] = yt({});
  return vt(() => {
    if (!o)
      return;
    const {
      bottom: l,
      left: u,
      right: h,
      top: d,
      clientWidth: f,
      clientHeight: p,
      minusWidth: g
    } = o;
    if (!r.current)
      return;
    const { height: m, width: y } = r.current.getBoundingClientRect();
    c({
      position: "fixed",
      zIndex: "220",
      ...Nl(d, l, m, p),
      ...$l(u, h, y, f, g)
    });
  }, [o, r]), /* @__PURE__ */ E.jsx(
    "div",
    {
      ref: r,
      className: `h_calendar_month_area ${i} ${t}`,
      style: {
        position: "fixed",
        ...n,
        ...a
      },
      ...s,
      children: e
    }
  );
};
RS.displayName = "HSingleDatePickerCalendarMonthArea";
const LS = ({
  children: e,
  className: t = "",
  tableClassName: n = "",
  style: s = {},
  childrenTableHead: i
}) => {
  const { type: o } = te();
  return /* @__PURE__ */ E.jsx("div", { className: `h_calendar_month ${o} ${t}`, style: s, children: /* @__PURE__ */ E.jsxs("table", { className: `h_calendar_month_table ${n}`, children: [
    /* @__PURE__ */ E.jsx("caption", { children: /* @__PURE__ */ E.jsx("span", { className: "blind", children: "Months" }) }),
    /* @__PURE__ */ E.jsx("thead", { children: i }),
    /* @__PURE__ */ E.jsx("tbody", { children: e })
  ] }) });
};
LS.displayName = "HSingleDatePickerCalendarMonth";
const IS = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateIsActiveMonthCalendar: o } = te();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_month ${i} ${t}`,
      onClick: o,
      style: n,
      disabled: s,
      children: e
    }
  );
};
IS.displayName = "HSingleDatePickerMonthButton";
const NS = ({
  value: e,
  children: t,
  className: n = "",
  style: s = {},
  disabled: i = !1
}) => {
  const { type: o, setNowMonthByMonthCalendar: r } = te(), a = () => {
    r(e);
  };
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_common ${o} ${n}`,
      onClick: a,
      disabled: i,
      style: s,
      children: t
    }
  );
};
NS.displayName = "HSingleDatePickerCalendarMonthButton";
const $S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdSxCQMhFABQFQS73Ai3QWa4USytQkbIBukUG0dJRsgIN4KlWEjUIuRyen4t8kH8IE8E//8I/SOMMZPW+pJy3IO898+YnuO6guAPWkMISxOWkBBixSMoneERVIUtVIQQtINQtIE96AN7UYYjKAVxzk1xP+VbMLaMMYsAkZ8qpZwJIY+YzhG/KKUL59w24QjefEcP3hUAFBdLDoKrRd7Ch211hJuNXMOg0VHC4GH1jWNZ3lBPJKyUuqf8DUy8w9O6XZwQAAAAAElFTkSuQmCC", ea = () => /* @__PURE__ */ E.jsx("span", { children: /* @__PURE__ */ E.jsx("img", { src: $S, alt: "왼쪽 화살표" }) });
ea.displayName = "IconArrowLeft";
const VS = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForMonthCalendar: i } = te();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_month_prev ${s} ${t}`,
      onClick: () => i(-1),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ E.jsx(ea, {})
    }
  );
};
VS.displayName = "HSingleDatePickerMonthPrevButton";
const FS = ({
  children: e,
  childrenTableHead: t,
  childrenTableBody: n,
  className: s = "",
  tableClassName: i = "",
  style: o = {}
}) => {
  const { type: r } = te();
  return /* @__PURE__ */ E.jsxs("div", { className: `h_calendar_year ${r} ${s}`, style: o, children: [
    e,
    /* @__PURE__ */ E.jsxs("table", { className: `h_calendar_year_table ${i}`, children: [
      /* @__PURE__ */ E.jsx("caption", { children: /* @__PURE__ */ E.jsx("span", { className: "blind", children: "Years" }) }),
      /* @__PURE__ */ E.jsx("thead", { children: t }),
      /* @__PURE__ */ E.jsx("tbody", { children: n })
    ] })
  ] });
};
FS.displayName = "HSingleDatePickerCalendarYear";
const jS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBpdS9FcIgEADgHEVqR8gIruAGjiAllRnFCh40uIEjZIWMkBHseQ88LfKi8nOnFBx3730cDdd1/yzn3NkYM3CMsNaOKaWLEGLiYNH3/RUAZjwPHAzPzXu/CyFM2HmP6RJjPCillib8BcM24WD4LFAx5G6j4Cyk4CJs4Sqs4SYsYUGBUso7hnlbI3XET+Cx24n11BxqdiyhKqyhImyhLKSgL0hFb5CDVshFL4jD6ojxxkHr0lqP3PH4AAMhEevOZzQ6AAAAAElFTkSuQmCC", na = () => /* @__PURE__ */ E.jsx("span", { children: /* @__PURE__ */ E.jsx("img", { src: jS, alt: "오른쪽 화살표" }) });
na.displayName = "IconArrowRight";
const BS = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateNowMonth: o } = te();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_next ${i} ${t}`,
      disabled: s,
      onClick: () => o(1),
      style: n,
      children: e || i === "type1" && /* @__PURE__ */ E.jsx(na, {})
    }
  );
};
BS.displayName = "HSingleDatePickerNextButton";
const HS = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateNowMonth: o } = te();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_prev ${i} ${t}`,
      disabled: s,
      onClick: () => o(-1),
      style: n,
      children: e || i === "type1" && /* @__PURE__ */ E.jsx(ea, {})
    }
  );
};
HS.displayName = "HSingleDatePickerPrevButton";
const zS = ({
  children: e,
  className: t = "",
  style: n = {},
  ...s
}) => {
  const { calendarYearAreaRef: i, type: o, calendarPosition: r } = te(), [a, c] = yt({});
  return vt(() => {
    if (!r)
      return;
    const {
      bottom: l,
      left: u,
      right: h,
      top: d,
      clientWidth: f,
      clientHeight: p,
      minusWidth: g
    } = r;
    if (!i.current)
      return;
    const { height: m, width: y } = i.current.getBoundingClientRect();
    c({
      position: "fixed",
      zIndex: "220",
      ...Nl(d, l, m, p),
      ...$l(u, h, y, f, g)
    });
  }, [r, i]), /* @__PURE__ */ E.jsx(
    "div",
    {
      ref: i,
      className: `h_calendar_year_area ${o} ${t}`,
      style: {
        position: "fixed",
        ...n,
        ...a
      },
      ...s,
      children: e
    }
  );
};
zS.displayName = "HSingleDatePickerCalendarYearArea";
const WS = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateIsActiveYearCalendar: o } = te();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_year ${i} ${t}`,
      onClick: o,
      style: n,
      disabled: s,
      children: e
    }
  );
};
WS.displayName = "HSingleDatePickerYearButton";
const US = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForYearCalendar: i, yearsArrLength: o } = te();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_year_next ${s} ${t}`,
      onClick: () => i(o),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ E.jsx(na, {})
    }
  );
};
US.displayName = "HSingleDatePickerYearNextButton";
const YS = ({
  children: e,
  className: t = "",
  value: n,
  disabled: s = !1,
  style: i = {}
}) => {
  const { type: o, setNowYearByYearCalendar: r } = te(), a = () => {
    r(n);
  };
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_common ${o} ${t}`,
      onClick: a,
      disabled: s,
      style: i,
      children: e
    }
  );
};
YS.displayName = "HSingleDatePickerCalendarYearButton";
const Xg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB7ZnRbYNADIZ9iAceM8J1g3aDdJL2CcRTlQ3aEfqE4KXqBO0G7QbpBmUEFgDii4gURbkAZ0cOkj/pMNKPJf9wdzIAoCiKokhRluW/GxAINd8RAw0LNCwQiWDhGJ9QVdULhue+71fgxw6xhjDsWL4xpsEa3rIs+z6ne6cQJr1iuFT8uUJCseCvw4UPHPMMwFA83oGHtm2bU7HrulUcx9vh/A5mMiX/6BrvjRxdxGma/vk03EH2Mc/zGgKYkn+4xsfiFzF1G62BRg1ESAZwjj4mSdJAINR8B8lA6Nznyncsfg2oAWnUgDRqQBoWA9h633NrUyEbwGbrC1veLRbzw6XNgeMJrN0Bi1kzapMhG8B+ZoPvDL94uuHSWMBH3LsBwozVobuQNGpAGjUgjRqQRg1IM/pZhfoD4tp4DWCz9RlF0RMw/ISggh3ru08zlxKLorBwA3B8AFMU5UbZAevho9IdayVBAAAAAElFTkSuQmCC", ie = [];
for (let e = 0; e < 256; ++e)
  ie.push((e + 256).toString(16).slice(1));
function GS(e, t = 0) {
  return (ie[e[t + 0]] + ie[e[t + 1]] + ie[e[t + 2]] + ie[e[t + 3]] + "-" + ie[e[t + 4]] + ie[e[t + 5]] + "-" + ie[e[t + 6]] + ie[e[t + 7]] + "-" + ie[e[t + 8]] + ie[e[t + 9]] + "-" + ie[e[t + 10]] + ie[e[t + 11]] + ie[e[t + 12]] + ie[e[t + 13]] + ie[e[t + 14]] + ie[e[t + 15]]).toLowerCase();
}
let ja;
const KS = new Uint8Array(16);
function XS() {
  if (!ja) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ja = crypto.getRandomValues.bind(crypto);
  }
  return ja(KS);
}
const qS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xd = { randomUUID: qS };
function ZS(e, t, n) {
  var i;
  if (xd.randomUUID && !e)
    return xd.randomUUID();
  e = e || {};
  const s = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? XS();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, GS(s);
}
function _d() {
  return ZS();
}
const qg = ({ className: e }) => /* @__PURE__ */ E.jsx("img", { src: Xg, alt: "달력 이미지", className: e });
qg.displayName = "IconCalendar";
const QS = ({
  reactiveImage: e = !1,
  placeholder: t = "",
  className: n = "",
  inputClassName: s = "",
  iconClassName: i = "",
  style: o = {},
  inputName: r = "",
  ...a
}) => {
  const {
    calendarInputAreaRef: c,
    calendarInputButtonRef: l,
    type: u,
    selectedDatePickerValue: h,
    clickedDatePickerInput: d,
    focusInDatePickerInput: f,
    focusOutDatePickerInput: p,
    isDisabledValue: g,
    updateSelectedDatePickerValue: m
  } = te(), [y, b] = yt(_d());
  return vt(() => {
    b(_d()), m(h);
  }, [h]), /* @__PURE__ */ E.jsxs(
    "div",
    {
      ref: c,
      className: `h_inp_datepicker_area ${u} ${n}`,
      style: o,
      ...a,
      children: [
        e ? /* @__PURE__ */ E.jsx("img", { className: `icon_calendar ${i}`, src: Xg, alt: "달력 이미지" }) : u === "type1" && /* @__PURE__ */ E.jsx(qg, { className: i }),
        /* @__PURE__ */ E.jsx(
          "input",
          {
            id: y,
            ref: l,
            type: "text",
            className: `inp_datepicker ${s}`,
            defaultValue: h,
            disabled: g,
            placeholder: t,
            onClick: d,
            onKeyUp: f,
            onBlur: p,
            onChange: () => {
            },
            name: r
          },
          y
        )
      ]
    }
  );
};
QS.displayName = "HSingleDatePickerInput";
const JS = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForMonthCalendar: i } = te();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_month_next ${s} ${t}`,
      onClick: () => i(1),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ E.jsx(na, {})
    }
  );
};
JS.displayName = "HSingleDatePickerMonthNextButton";
const tA = ({ children: e, className: t = "", style: n = {} }) => {
  const { type: s, updateIsActiveYearCalendar: i } = te();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_year_in_month ${s} ${t}`,
      onClick: i,
      style: n,
      children: e
    }
  );
};
tA.displayName = "HSingleDatePickerMonthYearButton";
const eA = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForYearCalendar: i, yearsArrLength: o } = te();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_year_prev ${s} ${t}`,
      onClick: () => i(-1 * o),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ E.jsx(ea, {})
    }
  );
};
eA.displayName = "HSingleDatePickerYearPrevButton";
const Zg = Pe(void 0), nA = ri(({
  children: e,
  initialSelectedValue: t = null,
  onBlurDropdown: n = () => {
  },
  onChangeSelectedValue: s = () => {
  },
  scrollEventRefs: i = [],
  disabled: o = !1,
  style: r,
  className: a = "",
  ...c
}, l) => {
  const u = bt(null), h = bt(null), d = bt(null), [f, p] = yt(t), [g, m] = yt(!1), [y, b] = yt(0), [_, x] = yt({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    clientWidth: 0,
    clientHeight: 0
  });
  zs(l, () => ({
    selectedValue: f,
    dropdownAreaWidth: y,
    isActiveList: g
  }));
  const v = () => {
    if (m((Q) => !Q), !u.current)
      return;
    const { bottom: I, left: G, right: W, top: H, width: j } = u.current.getBoundingClientRect();
    b(j), x({
      top: H,
      bottom: I,
      left: G,
      right: W,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    });
  }, w = () => {
    if (!u.current)
      return;
    const { top: I, bottom: G, left: W, right: H } = u.current.getBoundingClientRect();
    x((j) => ({
      ...j,
      top: I,
      bottom: G,
      left: W,
      right: H
    }));
  }, A = () => {
    x((I) => ({
      ...I,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    }));
  }, P = (I) => {
    const G = I.target;
    if (!(G instanceof HTMLElement))
      return;
    const W = G.closest(
      ".h_dropdown_button"
    );
    if (W) {
      W !== h.current && (m(!1), n());
      return;
    }
    const H = G.closest(".h_dropdown_list");
    H || (m(!1), n()), H !== d.current && (m(!1), n());
  }, M = (I, G) => {
    p(G), m(!1), s(G);
  };
  vt(() => (g ? (window.addEventListener("scroll", w), Array.isArray(i) && i.forEach((I) => {
    const G = document.querySelector(I);
    G instanceof HTMLElement && G.addEventListener("scroll", w);
  }), window.addEventListener("resize", A), window.addEventListener("click", P)) : (window.removeEventListener("scroll", w), Array.isArray(i) && i.forEach((I) => {
    const G = document.querySelector(I);
    G instanceof HTMLElement && G.removeEventListener(
      "scroll",
      w
    );
  }), window.removeEventListener("resize", A), window.removeEventListener("click", P)), () => {
    window.removeEventListener("scroll", w), window.removeEventListener("resize", A), window.removeEventListener("click", P);
  }), [g]);
  const [T, D] = yt(o);
  vt(() => {
    D(o);
  }, [o]);
  const C = {
    onClickedDropdownButton: v,
    isActiveList: g,
    listPosition: _,
    dropdownListRef: d,
    dropdownButtonRef: h,
    onClickedDropdownItemButton: M,
    isButtonDisabled: T
  };
  return /* @__PURE__ */ E.jsx(Zg.Provider, { value: C, children: /* @__PURE__ */ E.jsx("div", { ref: u, className: `h_dropdown_area ${a}`, style: r, ...c, children: e({ isActiveList: g, dropdownAreaWidth: y }) }) });
});
nA.displayName = "HDropdownArea";
const sA = ({ children: e, className: t = "" }) => /* @__PURE__ */ E.jsx("div", { className: `h_dropdown_item ${t}`, children: e });
sA.displayName = "HDropdownItem";
const Vl = () => {
  const e = Tt(Zg);
  if (!e)
    throw new Error("useHDropdownAreaContext must be used within a HDropdownAreaProvider");
  return e;
}, iA = ({ children: e, className: t = "", ...n }) => {
  const { onClickedDropdownButton: s, dropdownButtonRef: i, isButtonDisabled: o } = Vl();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      ref: i,
      onClick: s,
      disabled: o,
      className: `h_dropdown_button ${t}`,
      ...n,
      children: e
    }
  );
};
iA.displayName = "HDropdownButton";
const oA = ({
  children: e,
  disabled: t = !1,
  optionValue: n,
  onClick: s,
  className: i = "",
  ...o
}) => {
  const { onClickedDropdownItemButton: r } = Vl();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      disabled: t,
      onClick: (a) => {
        r(a, n), s == null || s(a, n);
      },
      className: `h_dropdown_item_button ${i}`,
      ...o,
      children: e
    }
  );
};
oA.displayName = "HDropdownItemButton";
/*!
 * OverlayScrollbars
 * Version: 2.11.1
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */
const ke = (e, t) => {
  const { o: n, i: s, u: i } = e;
  let o = n, r;
  const a = (u, h) => {
    const d = o, f = u, p = h || (s ? !s(d, f) : d !== f);
    return (p || i) && (o = f, r = d), [o, p, r];
  };
  return [t ? (u) => a(t(o, r), u) : a, (u) => [o, !!u, r]];
}, rA = typeof window < "u" && typeof HTMLElement < "u" && !!window.document, we = rA ? window : {}, Qg = Math.max, aA = Math.min, Mc = Math.round, Mr = Math.abs, wd = Math.sign, Jg = we.cancelAnimationFrame, Fl = we.requestAnimationFrame, Cr = we.setTimeout, Cc = we.clearTimeout, sa = (e) => typeof we[e] < "u" ? we[e] : void 0, cA = sa("MutationObserver"), Sd = sa("IntersectionObserver"), Es = sa("ResizeObserver"), Oi = sa("ScrollTimeline"), jl = (e) => e === void 0, ia = (e) => e === null, on = (e) => typeof e == "number", bo = (e) => typeof e == "string", oa = (e) => typeof e == "boolean", Ve = (e) => typeof e == "function", ln = (e) => Array.isArray(e), kr = (e) => typeof e == "object" && !ln(e) && !ia(e), Bl = (e) => {
  const t = !!e && e.length, n = on(t) && t > -1 && t % 1 == 0;
  return ln(e) || !Ve(e) && n ? t > 0 && kr(e) ? t - 1 in e : !0 : !1;
}, Dr = (e) => !!e && e.constructor === Object, Er = (e) => e instanceof HTMLElement, ra = (e) => e instanceof Element;
function Ct(e, t) {
  if (Bl(e))
    for (let n = 0; n < e.length && t(e[n], n, e) !== !1; n++)
      ;
  else e && Ct(Object.keys(e), (n) => t(e[n], n, e));
  return e;
}
const tm = (e, t) => e.indexOf(t) >= 0, no = (e, t) => e.concat(t), Ut = (e, t, n) => (!bo(t) && Bl(t) ? Array.prototype.push.apply(e, t) : e.push(t), e), Yn = (e) => Array.from(e || []), Hl = (e) => ln(e) ? e : !bo(e) && Bl(e) ? Yn(e) : [e], kc = (e) => !!e && !e.length, Dc = (e) => Yn(new Set(e)), Oe = (e, t, n) => {
  Ct(e, (i) => i ? i.apply(void 0, t || []) : !0), n || (e.length = 0);
}, em = "paddingTop", nm = "paddingRight", sm = "paddingLeft", im = "paddingBottom", om = "marginLeft", rm = "marginRight", am = "marginBottom", cm = "overflowX", lm = "overflowY", aa = "width", ca = "height", En = "visible", as = "hidden", Gs = "scroll", lA = (e) => {
  const t = String(e || "");
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}, la = (e, t, n, s) => {
  if (e && t) {
    let i = !0;
    return Ct(n, (o) => {
      const r = e[o], a = t[o];
      r !== a && (i = !1);
    }), i;
  }
  return !1;
}, um = (e, t) => la(e, t, ["w", "h"]), cr = (e, t) => la(e, t, ["x", "y"]), uA = (e, t) => la(e, t, ["t", "r", "b", "l"]), $n = () => {
}, rt = (e, ...t) => e.bind(0, ...t), Os = (e) => {
  let t;
  const n = e ? Cr : Fl, s = e ? Cc : Jg;
  return [(i) => {
    s(t), t = n(() => i(), Ve(e) ? e() : e);
  }, () => s(t)];
}, Or = (e, t) => {
  const { _: n, p: s, v: i, S: o } = t || {};
  let r, a, c, l, u = $n;
  const h = function(m) {
    u(), Cc(r), l = r = a = void 0, u = $n, e.apply(this, m);
  }, d = (g) => o && a ? o(a, g) : g, f = () => {
    u !== $n && h(d(c) || c);
  }, p = function() {
    const m = Yn(arguments), y = Ve(n) ? n() : n;
    if (on(y) && y >= 0) {
      const _ = Ve(s) ? s() : s, x = on(_) && _ >= 0, v = y > 0 ? Cr : Fl, w = y > 0 ? Cc : Jg, P = d(m) || m, M = h.bind(0, P);
      let T;
      u(), i && !l ? (M(), l = !0, T = v(() => l = void 0, y)) : (T = v(M, y), x && !r && (r = Cr(f, _))), u = () => w(T), a = c = P;
    } else
      h(m);
  };
  return p.m = f, p;
}, hm = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Ke = (e) => e ? Object.keys(e) : [], wt = (e, t, n, s, i, o, r) => {
  const a = [t, n, s, i, o, r];
  return (typeof e != "object" || ia(e)) && !Ve(e) && (e = {}), Ct(a, (c) => {
    Ct(c, (l, u) => {
      const h = c[u];
      if (e === h)
        return !0;
      const d = ln(h);
      if (h && Dr(h)) {
        const f = e[u];
        let p = f;
        d && !ln(f) ? p = [] : !d && !Dr(f) && (p = {}), e[u] = wt(p, h);
      } else
        e[u] = d ? h.slice() : h;
    });
  }), e;
}, dm = (e, t) => Ct(wt({}, e), (n, s, i) => {
  n === void 0 ? delete i[s] : n && Dr(n) && (i[s] = dm(n));
}), zl = (e) => !Ke(e).length, fm = (e, t, n) => Qg(e, aA(t, n)), ds = (e) => Dc((ln(e) ? e : (e || "").split(" ")).filter((t) => t)), Wl = (e, t) => e && e.getAttribute(t), Ad = (e, t) => e && e.hasAttribute(t), gn = (e, t, n) => {
  Ct(ds(t), (s) => {
    e && e.setAttribute(s, String(n || ""));
  });
}, Qe = (e, t) => {
  Ct(ds(t), (n) => e && e.removeAttribute(n));
}, ua = (e, t) => {
  const n = ds(Wl(e, t)), s = rt(gn, e, t), i = (o, r) => {
    const a = new Set(n);
    return Ct(ds(o), (c) => {
      a[r](c);
    }), Yn(a).join(" ");
  };
  return {
    O: (o) => s(i(o, "delete")),
    $: (o) => s(i(o, "add")),
    C: (o) => {
      const r = ds(o);
      return r.reduce((a, c) => a && n.includes(c), r.length > 0);
    }
  };
}, pm = (e, t, n) => (ua(e, t).O(n), rt(Ul, e, t, n)), Ul = (e, t, n) => (ua(e, t).$(n), rt(pm, e, t, n)), Rr = (e, t, n, s) => (s ? Ul : pm)(e, t, n), Yl = (e, t, n) => ua(e, t).C(n), gm = (e) => ua(e, "class"), mm = (e, t) => {
  gm(e).O(t);
}, Gl = (e, t) => (gm(e).$(t), rt(mm, e, t)), ym = (e, t) => {
  const n = t ? ra(t) && t : document;
  return n ? Yn(n.querySelectorAll(e)) : [];
}, hA = (e, t) => {
  const n = t ? ra(t) && t : document;
  return n && n.querySelector(e);
}, Ec = (e, t) => ra(e) && e.matches(t), bm = (e) => Ec(e, "body"), Oc = (e) => e ? Yn(e.childNodes) : [], so = (e) => e && e.parentElement, Rs = (e, t) => ra(e) && e.closest(t), Rc = (e) => document.activeElement, dA = (e, t, n) => {
  const s = Rs(e, t), i = e && hA(n, s), o = Rs(i, t) === s;
  return s && i ? s === e || i === e || o && Rs(Rs(e, n), t) !== s : !1;
}, Ks = (e) => {
  Ct(Hl(e), (t) => {
    const n = so(t);
    t && n && n.removeChild(t);
  });
}, _e = (e, t) => rt(Ks, e && t && Ct(Hl(t), (n) => {
  n && e.appendChild(n);
}));
let vm;
const fA = () => vm, pA = (e) => {
  vm = e;
}, Bs = (e) => {
  const t = document.createElement("div");
  return gn(t, "class", e), t;
}, xm = (e) => {
  const t = Bs(), n = fA(), s = e.trim();
  return t.innerHTML = n ? n.createHTML(s) : s, Ct(Oc(t), (i) => Ks(i));
}, Pd = (e, t) => e.getPropertyValue(t) || e[t] || "", _m = (e) => {
  const t = e || 0;
  return isFinite(t) ? t : 0;
}, Bo = (e) => _m(parseFloat(e || "")), Lc = (e) => Math.round(e * 1e4) / 1e4, wm = (e) => `${Lc(_m(e))}px`;
function io(e, t) {
  e && t && Ct(t, (n, s) => {
    try {
      const i = e.style, o = ia(n) || oa(n) ? "" : on(n) ? wm(n) : n;
      s.indexOf("--") === 0 ? i.setProperty(s, o) : i[s] = o;
    } catch {
    }
  });
}
function Sn(e, t, n) {
  const s = bo(t);
  let i = s ? "" : {};
  if (e) {
    const o = we.getComputedStyle(e, n) || e.style;
    i = s ? Pd(o, t) : Yn(t).reduce((r, a) => (r[a] = Pd(o, a), r), i);
  }
  return i;
}
const Td = (e, t, n) => {
  const s = t ? `${t}-` : "", i = n ? `-${n}` : "", o = `${s}top${i}`, r = `${s}right${i}`, a = `${s}bottom${i}`, c = `${s}left${i}`, l = Sn(e, [o, r, a, c]);
  return {
    t: Bo(l[o]),
    r: Bo(l[r]),
    b: Bo(l[a]),
    l: Bo(l[c])
  };
}, Ba = (e, t) => `translate${kr(e) ? `(${e.x},${e.y})` : `${t ? "X" : "Y"}(${e})`}`, gA = (e) => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length), mA = {
  w: 0,
  h: 0
}, ha = (e, t) => t ? {
  w: t[`${e}Width`],
  h: t[`${e}Height`]
} : mA, yA = (e) => ha("inner", e || we), Hs = rt(ha, "offset"), Sm = rt(ha, "client"), Lr = rt(ha, "scroll"), Kl = (e) => {
  const t = parseFloat(Sn(e, aa)) || 0, n = parseFloat(Sn(e, ca)) || 0;
  return {
    w: t - Mc(t),
    h: n - Mc(n)
  };
}, Ha = (e) => e.getBoundingClientRect(), bA = (e) => !!e && gA(e), Ic = (e) => !!(e && (e[ca] || e[aa])), Am = (e, t) => {
  const n = Ic(e);
  return !Ic(t) && n;
}, Md = (e, t, n, s) => {
  Ct(ds(t), (i) => {
    e && e.removeEventListener(i, n, s);
  });
}, jt = (e, t, n, s) => {
  var i;
  const o = (i = s && s.H) != null ? i : !0, r = s && s.I || !1, a = s && s.A || !1, c = {
    passive: o,
    capture: r
  };
  return rt(Oe, ds(t).map((l) => {
    const u = a ? (h) => {
      Md(e, l, u, r), n && n(h);
    } : n;
    return e && e.addEventListener(l, u, c), rt(Md, e, l, u, r);
  }));
}, Pm = (e) => e.stopPropagation(), Nc = (e) => e.preventDefault(), Tm = (e) => Pm(e) || Nc(e), nn = (e, t) => {
  const { x: n, y: s } = on(t) ? {
    x: t,
    y: t
  } : t || {};
  on(n) && (e.scrollLeft = n), on(s) && (e.scrollTop = s);
}, Ee = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
}), Mm = () => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
}), vA = (e, t) => {
  const { D: n, M: s } = e, { w: i, h: o } = t, r = (h, d, f) => {
    let p = wd(h) * f, g = wd(d) * f;
    if (p === g) {
      const m = Mr(h), y = Mr(d);
      g = m > y ? 0 : g, p = m < y ? 0 : p;
    }
    return p = p === g ? 0 : p, [p + 0, g + 0];
  }, [a, c] = r(n.x, s.x, i), [l, u] = r(n.y, s.y, o);
  return {
    D: {
      x: a,
      y: l
    },
    M: {
      x: c,
      y: u
    }
  };
}, za = ({ D: e, M: t }) => {
  const n = (s, i) => s === 0 && s <= i;
  return {
    x: n(e.x, t.x),
    y: n(e.y, t.y)
  };
}, Cd = ({ D: e, M: t }, n) => {
  const s = (i, o, r) => fm(0, 1, (i - r) / (i - o) || 0);
  return {
    x: s(e.x, t.x, n.x),
    y: s(e.y, t.y, n.y)
  };
}, $c = (e) => {
  e && e.focus && e.focus({
    preventScroll: !0
  });
}, kd = (e, t) => {
  Ct(Hl(t), e);
}, Vc = (e) => {
  const t = /* @__PURE__ */ new Map(), n = (o, r) => {
    if (o) {
      const a = t.get(o);
      kd((c) => {
        a && a[c ? "delete" : "clear"](c);
      }, r);
    } else
      t.forEach((a) => {
        a.clear();
      }), t.clear();
  }, s = (o, r) => {
    if (bo(o)) {
      const l = t.get(o) || /* @__PURE__ */ new Set();
      return t.set(o, l), kd((u) => {
        Ve(u) && l.add(u);
      }, r), rt(n, o, r);
    }
    oa(r) && r && n();
    const a = Ke(o), c = [];
    return Ct(a, (l) => {
      const u = o[l];
      u && Ut(c, s(l, u));
    }), rt(Oe, c);
  }, i = (o, r) => {
    Ct(Yn(t.get(o)), (a) => {
      r && !kc(r) ? a.apply(0, r) : a();
    });
  };
  return s(e || {}), [s, n, i];
}, Cm = {}, km = {}, xA = (e) => {
  Ct(e, (t) => Ct(t, (n, s) => {
    Cm[s] = t[s];
  }));
}, Dm = (e, t, n) => Ke(e).map((s) => {
  const { static: i, instance: o } = e[s], [r, a, c] = n || [], l = n ? o : i;
  if (l) {
    const u = n ? l(r, a, t) : l(t);
    return (c || km)[s] = u;
  }
}), vo = (e) => km[e], _A = "__osOptionsValidationPlugin", ai = "data-overlayscrollbars", lr = "os-environment", Ho = `${lr}-scrollbar-hidden`, Wa = `${ai}-initialize`, ur = "noClipping", Dd = `${ai}-body`, Vn = ai, wA = "host", mn = `${ai}-viewport`, SA = cm, AA = lm, PA = "arrange", Em = "measuring", TA = "scrolling", Om = "scrollbarHidden", MA = "noContent", Fc = `${ai}-padding`, Ed = `${ai}-content`, Xl = "os-size-observer", CA = `${Xl}-appear`, kA = `${Xl}-listener`, DA = "os-trinsic-observer", EA = "os-theme-none", Re = "os-scrollbar", OA = `${Re}-rtl`, RA = `${Re}-horizontal`, LA = `${Re}-vertical`, Rm = `${Re}-track`, ql = `${Re}-handle`, IA = `${Re}-visible`, NA = `${Re}-cornerless`, Od = `${Re}-interaction`, Rd = `${Re}-unusable`, jc = `${Re}-auto-hide`, Ld = `${jc}-hidden`, Id = `${Re}-wheel`, $A = `${Rm}-interactive`, VA = `${ql}-interactive`, FA = "__osSizeObserverPlugin", jA = (e, t) => {
  const { T: n } = t, [s, i] = e("showNativeOverlaidScrollbars");
  return [s && n.x && n.y, i];
}, Xs = (e) => e.indexOf(En) === 0, BA = (e, t) => {
  const n = (i, o, r, a) => {
    const c = i === En ? as : i.replace(`${En}-`, ""), l = Xs(i), u = Xs(r);
    return !o && !a ? as : l && u ? En : l ? o && a ? c : o ? En : as : o ? c : u && a ? En : as;
  }, s = {
    x: n(t.x, e.x, t.y, e.y),
    y: n(t.y, e.y, t.x, e.x)
  };
  return {
    k: s,
    R: {
      x: s.x === Gs,
      y: s.y === Gs
    }
  };
}, Lm = "__osScrollbarsHidingPlugin", HA = "__osClickScrollPlugin", Nd = (e) => JSON.stringify(e, (t, n) => {
  if (Ve(n))
    throw 0;
  return n;
}), $d = (e, t) => e ? `${t}`.split(".").reduce((n, s) => n && hm(n, s) ? n[s] : void 0, e) : void 0, zA = {
  paddingAbsolute: !1,
  showNativeOverlaidScrollbars: !1,
  update: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    autoHideSuspend: !1,
    dragScroll: !0,
    clickScroll: !1,
    pointers: ["mouse", "touch", "pen"]
  }
}, Im = (e, t) => {
  const n = {}, s = no(Ke(t), Ke(e));
  return Ct(s, (i) => {
    const o = e[i], r = t[i];
    if (kr(o) && kr(r))
      wt(n[i] = {}, Im(o, r)), zl(n[i]) && delete n[i];
    else if (hm(t, i) && r !== o) {
      let a = !0;
      if (ln(o) || ln(r))
        try {
          Nd(o) === Nd(r) && (a = !1);
        } catch {
        }
      a && (n[i] = r);
    }
  }), n;
}, Vd = (e, t, n) => (s) => [$d(e, s), n || $d(t, s) !== void 0];
let Nm;
const WA = () => Nm, UA = (e) => {
  Nm = e;
};
let Ua;
const YA = () => {
  const e = (x, v, w) => {
    _e(document.body, x), _e(document.body, x);
    const A = Sm(x), P = Hs(x), M = Kl(v);
    return w && Ks(x), {
      x: P.h - A.h + M.h,
      y: P.w - A.w + M.w
    };
  }, t = (x) => {
    let v = !1;
    const w = Gl(x, Ho);
    try {
      v = Sn(x, "scrollbar-width") === "none" || Sn(x, "display", "::-webkit-scrollbar") === "none";
    } catch {
    }
    return w(), v;
  }, n = `.${lr}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${lr} div{width:200%;height:200%;margin:10px 0}.${Ho}{scrollbar-width:none!important}.${Ho}::-webkit-scrollbar,.${Ho}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`, i = xm(`<div class="${lr}"><div></div><style>${n}</style></div>`)[0], o = i.firstChild, r = i.lastChild, a = WA();
  a && (r.nonce = a);
  const [c, , l] = Vc(), [u, h] = ke({
    o: e(i, o),
    i: cr
  }, rt(e, i, o, !0)), [d] = h(), f = t(i), p = {
    x: d.x === 0,
    y: d.y === 0
  }, g = {
    elements: {
      host: null,
      padding: !f,
      viewport: (x) => f && bm(x) && x,
      content: !1
    },
    scrollbars: {
      slot: !0
    },
    cancel: {
      nativeScrollbarsOverlaid: !1,
      body: null
    }
  }, m = wt({}, zA), y = rt(wt, {}, m), b = rt(wt, {}, g), _ = {
    N: d,
    T: p,
    P: f,
    G: !!Oi,
    K: rt(c, "r"),
    Z: b,
    tt: (x) => wt(g, x) && b(),
    nt: y,
    ot: (x) => wt(m, x) && y(),
    st: wt({}, g),
    et: wt({}, m)
  };
  if (Qe(i, "style"), Ks(i), jt(we, "resize", () => {
    l("r", []);
  }), Ve(we.matchMedia) && !f && (!p.x || !p.y)) {
    const x = (v) => {
      const w = we.matchMedia(`(resolution: ${we.devicePixelRatio}dppx)`);
      jt(w, "change", () => {
        v(), x(v);
      }, {
        A: !0
      });
    };
    x(() => {
      const [v, w] = u();
      wt(_.N, v), l("r", [w]);
    });
  }
  return _;
}, un = () => (Ua || (Ua = YA()), Ua), GA = (e, t, n) => {
  let s = !1;
  const i = n ? /* @__PURE__ */ new WeakMap() : !1, o = () => {
    s = !0;
  }, r = (a) => {
    if (i && n) {
      const c = n.map((l) => {
        const [u, h] = l || [];
        return [h && u ? (a || ym)(u, e) : [], h];
      });
      Ct(c, (l) => Ct(l[0], (u) => {
        const h = l[1], d = i.get(u) || [];
        if (e.contains(u) && h) {
          const p = jt(u, h, (g) => {
            s ? (p(), i.delete(u)) : t(g);
          });
          i.set(u, Ut(d, p));
        } else
          Oe(d), i.delete(u);
      }));
    }
  };
  return r(), [o, r];
}, Fd = (e, t, n, s) => {
  let i = !1;
  const { ct: o, rt: r, lt: a, it: c, ut: l, ft: u } = s || {}, h = Or(() => i && n(!0), {
    _: 33,
    p: 99
  }), [d, f] = GA(e, h, a), p = o || [], g = r || [], m = no(p, g), y = (_, x) => {
    if (!kc(x)) {
      const v = l || $n, w = u || $n, A = [], P = [];
      let M = !1, T = !1;
      if (Ct(x, (D) => {
        const { attributeName: C, target: I, type: G, oldValue: W, addedNodes: H, removedNodes: j } = D, Q = G === "attributes", q = G === "childList", st = e === I, K = Q && C, k = K && Wl(I, C || ""), B = bo(k) ? k : null, U = K && W !== B, O = tm(g, C) && U;
        if (t && (q || !st)) {
          const X = Q && U, V = X && c && Ec(I, c), nt = (V ? !v(I, C, W, B) : !Q || X) && !w(D, !!V, e, s);
          Ct(H, (ct) => Ut(A, ct)), Ct(j, (ct) => Ut(A, ct)), T = T || nt;
        }
        !t && st && U && !v(I, C, W, B) && (Ut(P, C), M = M || O);
      }), f((D) => Dc(A).reduce((C, I) => (Ut(C, ym(D, I)), Ec(I, D) ? Ut(C, I) : C), [])), t)
        return !_ && T && n(!1), [!1];
      if (!kc(P) || M) {
        const D = [Dc(P), M];
        return _ || n.apply(0, D), D;
      }
    }
  }, b = new cA(rt(y, !1));
  return [() => (b.observe(e, {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: m,
    subtree: t,
    childList: t,
    characterData: t
  }), i = !0, () => {
    i && (d(), b.disconnect(), i = !1);
  }), () => {
    if (i)
      return h.m(), y(!0, b.takeRecords());
  }];
};
let ts = null;
const $m = (e, t, n) => {
  const { _t: s } = n || {}, i = vo(FA), [o] = ke({
    o: !1,
    u: !0
  });
  return () => {
    const r = [], c = xm(`<div class="${Xl}"><div class="${kA}"></div></div>`)[0], l = c.firstChild, u = (h) => {
      const d = h instanceof ResizeObserverEntry;
      let f = !1, p = !1;
      if (d) {
        const [g, , m] = o(h.contentRect), y = Ic(g);
        p = Am(g, m), f = !p && !y;
      } else
        p = h === !0;
      f || t({
        dt: !0,
        _t: p
      });
    };
    if (Es) {
      if (!oa(ts)) {
        const p = new Es($n);
        p.observe(e, {
          get box() {
            ts = !0;
          }
        }), ts = ts || !1, p.disconnect();
      }
      const h = Or(u, {
        _: 0,
        p: 0
      }), d = (p) => h(p.pop()), f = new Es(d);
      if (f.observe(ts ? e : l), Ut(r, [() => f.disconnect(), !ts && _e(e, c)]), ts) {
        const p = new Es(d);
        p.observe(e, {
          box: "border-box"
        }), Ut(r, () => p.disconnect());
      }
    } else if (i) {
      const [h, d] = i(l, u, s);
      Ut(r, no([Gl(c, CA), jt(c, "animationstart", h), _e(e, c)], d));
    } else
      return $n;
    return rt(Oe, r);
  };
}, KA = (e, t) => {
  let n;
  const s = (c) => c.h === 0 || c.isIntersecting || c.intersectionRatio > 0, i = Bs(DA), [o] = ke({
    o: !1
  }), r = (c, l) => {
    if (c) {
      const u = o(s(c)), [, h] = u;
      return h && !l && t(u) && [u];
    }
  }, a = (c, l) => r(l.pop(), c);
  return [() => {
    const c = [];
    if (Sd)
      n = new Sd(rt(a, !1), {
        root: e
      }), n.observe(i), Ut(c, () => {
        n.disconnect();
      });
    else {
      const l = () => {
        const u = Hs(i);
        r(u);
      };
      Ut(c, $m(i, l)()), l();
    }
    return rt(Oe, Ut(c, _e(e, i)));
  }, () => n && a(!0, n.takeRecords())];
}, XA = (e, t, n, s) => {
  let i, o, r, a, c, l;
  const u = `[${Vn}]`, h = `[${mn}]`, d = ["id", "class", "style", "open", "wrap", "cols", "rows"], { vt: f, ht: p, U: g, gt: m, bt: y, L: b, wt: _, yt: x, St: v, Ot: w } = e, A = (O) => Sn(O, "direction") === "rtl", P = {
    $t: !1,
    F: A(f)
  }, M = un(), T = vo(Lm), [D] = ke({
    i: um,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const O = T && T.V(e, t, P, M, n).W, V = !(_ && b) && Yl(p, Vn, ur), N = !b && x(PA), nt = N && Ee(m), ct = nt && w(), ht = v(Em, V), lt = N && O && O()[0], _t = Lr(g), ut = Kl(g);
    return lt && lt(), nn(m, nt), ct && ct(), V && ht(), {
      w: _t.w + ut.w,
      h: _t.h + ut.h
    };
  }), C = Or(s, {
    _: () => i,
    p: () => o,
    S(O, X) {
      const [V] = O, [N] = X;
      return [no(Ke(V), Ke(N)).reduce((nt, ct) => (nt[ct] = V[ct] || N[ct], nt), {})];
    }
  }), I = (O) => {
    const X = A(f);
    wt(O, {
      Ct: l !== X
    }), wt(P, {
      F: X
    }), l = X;
  }, G = (O, X) => {
    const [V, N] = O, nt = {
      xt: N
    };
    return wt(P, {
      $t: V
    }), X || s(nt), nt;
  }, W = ({ dt: O, _t: X }) => {
    const N = !(O && !X) && M.P ? C : s, nt = {
      dt: O || X,
      _t: X
    };
    I(nt), N(nt);
  }, H = (O, X) => {
    const [, V] = D(), N = {
      Ht: V
    };
    return I(N), V && !X && (O ? s : C)(N), N;
  }, j = (O, X, V) => {
    const N = {
      Et: X
    };
    return I(N), X && !V && C(N), N;
  }, [Q, q] = y ? KA(p, G) : [], st = !b && $m(p, W, {
    _t: !0
  }), [K, k] = Fd(p, !1, j, {
    rt: d,
    ct: d
  }), B = b && Es && new Es((O) => {
    const X = O[O.length - 1].contentRect;
    W({
      dt: !0,
      _t: Am(X, c)
    }), c = X;
  }), U = Or(() => {
    const [, O] = D();
    s({
      Ht: O
    });
  }, {
    _: 222,
    v: !0
  });
  return [() => {
    B && B.observe(p);
    const O = st && st(), X = Q && Q(), V = K(), N = M.K((nt) => {
      nt ? C({
        zt: nt
      }) : U();
    });
    return () => {
      B && B.disconnect(), O && O(), X && X(), a && a(), V(), N();
    };
  }, ({ It: O, At: X, Dt: V }) => {
    const N = {}, [nt] = O("update.ignoreMutation"), [ct, ht] = O("update.attributes"), [lt, _t] = O("update.elementEvents"), [ut, xt] = O("update.debounce"), Qt = _t || ht, Vt = X || V, Rt = (Dt) => Ve(nt) && nt(Dt);
    if (Qt) {
      r && r(), a && a();
      const [Dt, kt] = Fd(y || g, !0, H, {
        ct: no(d, ct || []),
        lt,
        it: u,
        ft: (S, $) => {
          const { target: Y, attributeName: ot } = S;
          return (!$ && ot && !b ? dA(Y, u, h) : !1) || !!Rs(Y, `.${Re}`) || !!Rt(S);
        }
      });
      a = Dt(), r = kt;
    }
    if (xt)
      if (C.m(), ln(ut)) {
        const Dt = ut[0], kt = ut[1];
        i = on(Dt) && Dt, o = on(kt) && kt;
      } else on(ut) ? (i = ut, o = !1) : (i = !1, o = !1);
    if (Vt) {
      const Dt = k(), kt = q && q(), S = r && r();
      Dt && wt(N, j(Dt[0], Dt[1], Vt)), kt && wt(N, G(kt[0], Vt)), S && wt(N, H(S[0], Vt));
    }
    return I(N), N;
  }, P];
}, Vm = (e, t) => Ve(t) ? t.apply(0, e) : t, qA = (e, t, n, s) => {
  const i = jl(s) ? n : s;
  return Vm(e, i) || t.apply(0, e);
}, Fm = (e, t, n, s) => {
  const i = jl(s) ? n : s, o = Vm(e, i);
  return !!o && (Er(o) ? o : t.apply(0, e));
}, ZA = (e, t) => {
  const { nativeScrollbarsOverlaid: n, body: s } = t || {}, { T: i, P: o, Z: r } = un(), { nativeScrollbarsOverlaid: a, body: c } = r().cancel, l = n ?? a, u = jl(s) ? c : s, h = (i.x || i.y) && l, d = e && (ia(u) ? !o : u);
  return !!h || !!d;
}, QA = (e, t, n, s) => {
  const i = "--os-viewport-percent", o = "--os-scroll-percent", r = "--os-scroll-direction", { Z: a } = un(), { scrollbars: c } = a(), { slot: l } = c, { vt: u, ht: h, U: d, Mt: f, gt: p, wt: g, L: m } = t, { scrollbars: y } = f ? {} : e, { slot: b } = y || {}, _ = [], x = [], v = [], w = Fm([u, h, d], () => m && g ? u : h, l, b), A = (K) => {
    if (Oi) {
      let k = null, B = [];
      const U = new Oi({
        source: p,
        axis: K
      }), O = () => {
        k && k.cancel(), k = null;
      };
      return {
        Rt: (V) => {
          const { Tt: N } = n, nt = za(N)[K], ct = K === "x", ht = [Ba(0, ct), Ba(`calc(100cq${ct ? "w" : "h"} + -100%)`, ct)], lt = nt ? ht : ht.reverse();
          return B[0] === lt[0] && B[1] === lt[1] || (O(), B = lt, k = V.kt.animate({
            clear: ["left"],
            transform: lt
          }, {
            timeline: U
          })), O;
        }
      };
    }
  }, P = {
    x: A("x"),
    y: A("y")
  }, M = () => {
    const { Vt: K, Lt: k } = n, B = (U, O) => fm(0, 1, U / (U + O) || 0);
    return {
      x: B(k.x, K.x),
      y: B(k.y, K.y)
    };
  }, T = (K, k, B) => {
    const U = B ? Gl : mm;
    Ct(K, (O) => {
      U(O.Ut, k);
    });
  }, D = (K, k) => {
    Ct(K, (B) => {
      const [U, O] = k(B);
      io(U, O);
    });
  }, C = (K, k, B) => {
    const U = oa(B), O = U ? B : !0, X = U ? !B : !0;
    O && T(x, K, k), X && T(v, K, k);
  }, I = () => {
    const K = M(), k = (B) => (U) => [U.Ut, {
      [i]: Lc(B) + ""
    }];
    D(x, k(K.x)), D(v, k(K.y));
  }, G = () => {
    if (!Oi) {
      const { Tt: K } = n, k = Cd(K, Ee(p)), B = (U) => (O) => [O.Ut, {
        [o]: Lc(U) + ""
      }];
      D(x, B(k.x)), D(v, B(k.y));
    }
  }, W = () => {
    const { Tt: K } = n, k = za(K), B = (U) => (O) => [O.Ut, {
      [r]: U ? "0" : "1"
    }];
    D(x, B(k.x)), D(v, B(k.y)), Oi && (x.forEach(P.x.Rt), v.forEach(P.y.Rt));
  }, H = () => {
    if (m && !g) {
      const { Vt: K, Tt: k } = n, B = za(k), U = Cd(k, Ee(p)), O = (X) => {
        const { Ut: V } = X, N = so(V) === d && V, nt = (ct, ht, lt) => {
          const _t = ht * ct;
          return wm(lt ? _t : -_t);
        };
        return [N, N && {
          transform: Ba({
            x: nt(U.x, K.x, B.x),
            y: nt(U.y, K.y, B.y)
          })
        }];
      };
      D(x, O), D(v, O);
    }
  }, j = (K) => {
    const k = K ? "x" : "y", U = Bs(`${Re} ${K ? RA : LA}`), O = Bs(Rm), X = Bs(ql), V = {
      Ut: U,
      Pt: O,
      kt: X
    }, N = P[k];
    return Ut(K ? x : v, V), Ut(_, [_e(U, O), _e(O, X), rt(Ks, U), N && N.Rt(V), s(V, C, K)]), V;
  }, Q = rt(j, !0), q = rt(j, !1), st = () => (_e(w, x[0].Ut), _e(w, v[0].Ut), rt(Oe, _));
  return Q(), q(), [{
    Nt: I,
    qt: G,
    Bt: W,
    Ft: H,
    jt: C,
    Xt: {
      Yt: x,
      Wt: Q,
      Jt: rt(D, x)
    },
    Gt: {
      Yt: v,
      Wt: q,
      Jt: rt(D, v)
    }
  }, st];
}, JA = (e, t, n, s) => (i, o, r) => {
  const { ht: a, U: c, L: l, gt: u, Kt: h, Ot: d } = t, { Ut: f, Pt: p, kt: g } = i, [m, y] = Os(333), [b, _] = Os(444), x = (A) => {
    Ve(u.scrollBy) && u.scrollBy({
      behavior: "smooth",
      left: A.x,
      top: A.y
    });
  }, v = () => {
    const A = "pointerup pointercancel lostpointercapture", P = `client${r ? "X" : "Y"}`, M = r ? aa : ca, T = r ? "left" : "top", D = r ? "w" : "h", C = r ? "x" : "y", I = (W, H) => (j) => {
      const { Vt: Q } = n, q = Hs(p)[D] - Hs(g)[D], K = H * j / q * Q[C];
      nn(u, {
        [C]: W + K
      });
    }, G = [];
    return jt(p, "pointerdown", (W) => {
      const H = Rs(W.target, `.${ql}`) === g, j = H ? g : p, Q = e.scrollbars, q = Q[H ? "dragScroll" : "clickScroll"], { button: st, isPrimary: K, pointerType: k } = W, { pointers: B } = Q;
      if (st === 0 && K && q && (B || []).includes(k)) {
        Oe(G), _();
        const O = !H && (W.shiftKey || q === "instant"), X = rt(Ha, g), V = rt(Ha, p), N = ($, Y) => ($ || X())[T] - (Y || V())[T], nt = Mc(Ha(u)[M]) / Hs(u)[D] || 1, ct = I(Ee(u)[C], 1 / nt), ht = W[P], lt = X(), _t = V(), ut = lt[M], xt = N(lt, _t) + ut / 2, Qt = ht - _t[T], Vt = H ? 0 : Qt - xt, Rt = ($) => {
          Oe(S), j.releasePointerCapture($.pointerId);
        }, Dt = H || O, kt = d(), S = [jt(h, A, Rt), jt(h, "selectstart", ($) => Nc($), {
          H: !1
        }), jt(p, A, Rt), Dt && jt(p, "pointermove", ($) => ct(Vt + ($[P] - ht))), Dt && (() => {
          const $ = Ee(u);
          kt();
          const Y = Ee(u), ot = {
            x: Y.x - $.x,
            y: Y.y - $.y
          };
          (Mr(ot.x) > 3 || Mr(ot.y) > 3) && (d(), nn(u, $), x(ot), b(kt));
        })];
        if (j.setPointerCapture(W.pointerId), O)
          ct(Vt);
        else if (!H) {
          const $ = vo(HA);
          if ($) {
            const Y = $(ct, Vt, ut, (ot) => {
              ot ? kt() : Ut(S, kt);
            });
            Ut(S, Y), Ut(G, rt(Y, !0));
          }
        }
      }
    });
  };
  let w = !0;
  return rt(Oe, [jt(g, "pointermove pointerleave", s), jt(f, "pointerenter", () => {
    o(Od, !0);
  }), jt(f, "pointerleave pointercancel", () => {
    o(Od, !1);
  }), !l && jt(f, "mousedown", () => {
    const A = Rc();
    (Ad(A, mn) || Ad(A, Vn) || A === document.body) && Cr(rt($c, c), 25);
  }), jt(f, "wheel", (A) => {
    const { deltaX: P, deltaY: M, deltaMode: T } = A;
    w && T === 0 && so(f) === a && x({
      x: P,
      y: M
    }), w = !1, o(Id, !0), m(() => {
      w = !0, o(Id);
    }), Nc(A);
  }, {
    H: !1,
    I: !0
  }), jt(f, "pointerdown", rt(jt, h, "click", Tm, {
    A: !0,
    I: !0,
    H: !1
  }), {
    I: !0
  }), v(), y, _]);
}, t1 = (e, t, n, s, i, o) => {
  let r, a, c, l, u, h = $n, d = 0;
  const f = ["mouse", "pen"], p = (k) => f.includes(k.pointerType), [g, m] = Os(), [y, b] = Os(100), [_, x] = Os(100), [v, w] = Os(() => d), [A, P] = QA(e, i, s, JA(t, i, s, (k) => p(k) && Q())), { ht: M, Qt: T, wt: D } = i, { jt: C, Nt: I, qt: G, Bt: W, Ft: H } = A, j = (k, B) => {
    if (w(), k)
      C(Ld);
    else {
      const U = rt(C, Ld, !0);
      d > 0 && !B ? v(U) : U();
    }
  }, Q = () => {
    (c ? !r : !l) && (j(!0), y(() => {
      j(!1);
    }));
  }, q = (k) => {
    C(jc, k, !0), C(jc, k, !1);
  }, st = (k) => {
    p(k) && (r = c, c && j(!0));
  }, K = [w, b, x, m, () => h(), jt(M, "pointerover", st, {
    A: !0
  }), jt(M, "pointerenter", st), jt(M, "pointerleave", (k) => {
    p(k) && (r = !1, c && j(!1));
  }), jt(M, "pointermove", (k) => {
    p(k) && a && Q();
  }), jt(T, "scroll", (k) => {
    g(() => {
      G(), Q();
    }), o(k), H();
  })];
  return [() => rt(Oe, Ut(K, P())), ({ It: k, Dt: B, Zt: U, tn: O }) => {
    const { nn: X, sn: V, en: N, cn: nt } = O || {}, { Ct: ct, _t: ht } = U || {}, { F: lt } = n, { T: _t } = un(), { k: ut, rn: xt } = s, [Qt, Vt] = k("showNativeOverlaidScrollbars"), [Rt, Dt] = k("scrollbars.theme"), [kt, S] = k("scrollbars.visibility"), [$, Y] = k("scrollbars.autoHide"), [ot, Ft] = k("scrollbars.autoHideSuspend"), [St] = k("scrollbars.autoHideDelay"), [at, ge] = k("scrollbars.dragScroll"), [ae, zt] = k("scrollbars.clickScroll"), [Te, je] = k("overflow"), Me = ht && !B, Xe = xt.x || xt.y, Gt = X || V || nt || ct || B, gi = N || S || je, As = Qt && _t.x && _t.y, Ps = (qe, Kn, Xn) => {
      const Ts = qe.includes(Gs) && (kt === En || kt === "auto" && Kn === Gs);
      return C(IA, Ts, Xn), Ts;
    };
    if (d = St, Me && (ot && Xe ? (q(!1), h(), _(() => {
      h = jt(T, "scroll", rt(q, !0), {
        A: !0
      });
    })) : q(!0)), Vt && C(EA, As), Dt && (C(u), C(Rt, !0), u = Rt), Ft && !ot && q(!0), Y && (a = $ === "move", c = $ === "leave", l = $ === "never", j(l, !0)), ge && C(VA, at), zt && C($A, !!ae), gi) {
      const qe = Ps(Te.x, ut.x, !0), Kn = Ps(Te.y, ut.y, !1);
      C(NA, !(qe && Kn));
    }
    Gt && (G(), I(), H(), nt && W(), C(Rd, !xt.x, !0), C(Rd, !xt.y, !1), C(OA, lt && !D));
  }, {}, A];
}, e1 = (e) => {
  const t = un(), { Z: n, P: s } = t, { elements: i } = n(), { padding: o, viewport: r, content: a } = i, c = Er(e), l = c ? {} : e, { elements: u } = l, { padding: h, viewport: d, content: f } = u || {}, p = c ? e : l.target, g = bm(p), m = p.ownerDocument, y = m.documentElement, b = () => m.defaultView || we, _ = rt(qA, [p]), x = rt(Fm, [p]), v = rt(Bs, ""), w = rt(_, v, r), A = rt(x, v, a), P = (ut) => {
    const xt = Hs(ut), Qt = Lr(ut), Vt = Sn(ut, cm), Rt = Sn(ut, lm);
    return Qt.w - xt.w > 0 && !Xs(Vt) || Qt.h - xt.h > 0 && !Xs(Rt);
  }, M = w(d), T = M === p, D = T && g, C = !T && A(f), I = !T && M === C, G = D ? y : M, W = D ? G : p, H = !T && x(v, o, h), j = !I && C, Q = [j, G, H, W].map((ut) => Er(ut) && !so(ut) && ut), q = (ut) => ut && tm(Q, ut), st = !q(G) && P(G) ? G : p, K = D ? y : G, B = {
    vt: p,
    ht: W,
    U: G,
    ln: H,
    bt: j,
    gt: K,
    Qt: D ? m : G,
    an: g ? y : st,
    Kt: m,
    wt: g,
    Mt: c,
    L: T,
    un: b,
    yt: (ut) => Yl(G, mn, ut),
    St: (ut, xt) => Rr(G, mn, ut, xt),
    Ot: () => Rr(K, mn, TA, !0)
  }, { vt: U, ht: O, ln: X, U: V, bt: N } = B, nt = [() => {
    Qe(O, [Vn, Wa]), Qe(U, Wa), g && Qe(y, [Wa, Vn]);
  }];
  let ct = Oc([N, V, X, O, U].find((ut) => ut && !q(ut)));
  const ht = D ? U : N || V, lt = rt(Oe, nt);
  return [B, () => {
    const ut = b(), xt = Rc(), Qt = (S) => {
      _e(so(S), Oc(S)), Ks(S);
    }, Vt = (S) => jt(S, "focusin focusout focus blur", Tm, {
      I: !0,
      H: !1
    }), Rt = "tabindex", Dt = Wl(V, Rt), kt = Vt(xt);
    return gn(O, Vn, T ? "" : wA), gn(X, Fc, ""), gn(V, mn, ""), gn(N, Ed, ""), T || (gn(V, Rt, Dt || "-1"), g && gn(y, Dd, "")), _e(ht, ct), _e(O, X), _e(X || O, !T && V), _e(V, N), Ut(nt, [kt, () => {
      const S = Rc(), $ = q(V), Y = $ && S === V ? U : S, ot = Vt(Y);
      Qe(X, Fc), Qe(N, Ed), Qe(V, mn), g && Qe(y, Dd), Dt ? gn(V, Rt, Dt) : Qe(V, Rt), q(N) && Qt(N), $ && Qt(V), q(X) && Qt(X), $c(Y), ot();
    }]), s && !T && (Ul(V, mn, Om), Ut(nt, rt(Qe, V, mn))), $c(!T && g && xt === U && ut.top === ut ? V : xt), kt(), ct = 0, lt;
  }, lt];
}, n1 = ({ bt: e }) => ({ Zt: t, fn: n, Dt: s }) => {
  const { xt: i } = t || {}, { $t: o } = n;
  e && (i || s) && io(e, {
    [ca]: o && "100%"
  });
}, s1 = ({ ht: e, ln: t, U: n, L: s }, i) => {
  const [o, r] = ke({
    i: uA,
    o: Td()
  }, rt(Td, e, "padding", ""));
  return ({ It: a, Zt: c, fn: l, Dt: u }) => {
    let [h, d] = r(u);
    const { P: f } = un(), { dt: p, Ht: g, Ct: m } = c || {}, { F: y } = l, [b, _] = a("paddingAbsolute");
    (p || d || (u || g)) && ([h, d] = o(u));
    const v = !s && (_ || m || d);
    if (v) {
      const w = !b || !t && !f, A = h.r + h.l, P = h.t + h.b, M = {
        [rm]: w && !y ? -A : 0,
        [am]: w ? -P : 0,
        [om]: w && y ? -A : 0,
        top: w ? -h.t : 0,
        right: w ? y ? -h.r : "auto" : 0,
        left: w ? y ? "auto" : -h.l : 0,
        [aa]: w && `calc(100% + ${A}px)`
      }, T = {
        [em]: w ? h.t : 0,
        [nm]: w ? h.r : 0,
        [im]: w ? h.b : 0,
        [sm]: w ? h.l : 0
      };
      io(t || n, M), io(n, T), wt(i, {
        ln: h,
        _n: !w,
        j: t ? T : wt({}, M, T)
      });
    }
    return {
      dn: v
    };
  };
}, i1 = (e, t) => {
  const n = un(), { ht: s, ln: i, U: o, L: r, Qt: a, gt: c, wt: l, St: u, un: h } = e, { P: d } = n, f = l && r, p = rt(Qg, 0), g = {
    display: () => !1,
    direction: (k) => k !== "ltr",
    flexDirection: (k) => k.endsWith("-reverse"),
    writingMode: (k) => k !== "horizontal-tb"
  }, m = Ke(g), y = {
    i: um,
    o: {
      w: 0,
      h: 0
    }
  }, b = {
    i: cr,
    o: {}
  }, _ = (k) => {
    u(Em, !f && k);
  }, x = (k) => {
    if (!m.some((ht) => {
      const lt = k[ht];
      return lt && g[ht](lt);
    }))
      return {
        D: {
          x: 0,
          y: 0
        },
        M: {
          x: 1,
          y: 1
        }
      };
    _(!0);
    const U = Ee(c), O = u(MA, !0), X = jt(a, Gs, (ht) => {
      const lt = Ee(c);
      ht.isTrusted && lt.x === U.x && lt.y === U.y && Pm(ht);
    }, {
      I: !0,
      A: !0
    });
    nn(c, {
      x: 0,
      y: 0
    }), O();
    const V = Ee(c), N = Lr(c);
    nn(c, {
      x: N.w,
      y: N.h
    });
    const nt = Ee(c);
    nn(c, {
      x: nt.x - V.x < 1 && -N.w,
      y: nt.y - V.y < 1 && -N.h
    });
    const ct = Ee(c);
    return nn(c, U), Fl(() => X()), {
      D: V,
      M: ct
    };
  }, v = (k, B) => {
    const U = we.devicePixelRatio % 1 !== 0 ? 1 : 0, O = {
      w: p(k.w - B.w),
      h: p(k.h - B.h)
    };
    return {
      w: O.w > U ? O.w : 0,
      h: O.h > U ? O.h : 0
    };
  }, [w, A] = ke(y, rt(Kl, o)), [P, M] = ke(y, rt(Lr, o)), [T, D] = ke(y), [C] = ke(b), [I, G] = ke(y), [W] = ke(b), [H] = ke({
    i: (k, B) => la(k, B, m),
    o: {}
  }, () => bA(o) ? Sn(o, m) : {}), [j, Q] = ke({
    i: (k, B) => cr(k.D, B.D) && cr(k.M, B.M),
    o: Mm()
  }), q = vo(Lm), st = (k, B) => `${B ? SA : AA}${lA(k)}`, K = (k) => {
    const B = (O) => [En, as, Gs].map((X) => st(X, O)), U = B(!0).concat(B()).join(" ");
    u(U), u(Ke(k).map((O) => st(k[O], O === "x")).join(" "), !0);
  };
  return ({ It: k, Zt: B, fn: U, Dt: O }, { dn: X }) => {
    const { dt: V, Ht: N, Ct: nt, _t: ct, zt: ht } = B || {}, lt = q && q.V(e, t, U, n, k), { Y: _t, W: ut, J: xt } = lt || {}, [Qt, Vt] = jA(k, n), [Rt, Dt] = k("overflow"), kt = Xs(Rt.x), S = Xs(Rt.y), $ = V || X || N || nt || ht || Vt;
    let Y = A(O), ot = M(O), Ft = D(O), St = G(O);
    if (Vt && d && u(Om, !Qt), $) {
      Yl(s, Vn, ur) && _(!0);
      const [R] = ut ? ut() : [], [L] = Y = w(O), [F] = ot = P(O), tt = Sm(o), se = f && yA(h()), hn = {
        w: p(F.w + L.w),
        h: p(F.h + L.h)
      }, mi = {
        w: p((se ? se.w : tt.w + p(tt.w - F.w)) + L.w),
        h: p((se ? se.h : tt.h + p(tt.h - F.h)) + L.h)
      };
      R && R(), St = I(mi), Ft = T(v(hn, mi), O);
    }
    const [at, ge] = St, [ae, zt] = Ft, [Te, je] = ot, [Me, Xe] = Y, [Gt, gi] = C({
      x: ae.w > 0,
      y: ae.h > 0
    }), As = kt && S && (Gt.x || Gt.y) || kt && Gt.x && !Gt.y || S && Gt.y && !Gt.x, Ps = X || nt || ht || Xe || je || ge || zt || Dt || Vt || $, qe = BA(Gt, Rt), [Kn, Xn] = W(qe.k), [Ts, J] = H(O), Z = nt || ct || J || gi || O, [et, dt] = Z ? j(x(Ts), O) : Q();
    return Ps && (Xn && K(qe.k), xt && _t && io(o, xt(qe, U, _t(qe, Te, Me)))), _(!1), Rr(s, Vn, ur, As), Rr(i, Fc, ur, As), wt(t, {
      k: Kn,
      Lt: {
        x: at.w,
        y: at.h
      },
      Vt: {
        x: ae.w,
        y: ae.h
      },
      rn: Gt,
      Tt: vA(et, ae)
    }), {
      en: Xn,
      nn: ge,
      sn: zt,
      cn: dt || zt,
      pn: Z
    };
  };
}, o1 = (e) => {
  const [t, n, s] = e1(e), i = {
    ln: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    _n: !1,
    j: {
      [rm]: 0,
      [am]: 0,
      [om]: 0,
      [em]: 0,
      [nm]: 0,
      [im]: 0,
      [sm]: 0
    },
    Lt: {
      x: 0,
      y: 0
    },
    Vt: {
      x: 0,
      y: 0
    },
    k: {
      x: as,
      y: as
    },
    rn: {
      x: !1,
      y: !1
    },
    Tt: Mm()
  }, { vt: o, gt: r, L: a, Ot: c } = t, { P: l, T: u } = un(), h = !l && (u.x || u.y), d = [n1(t), s1(t, i), i1(t, i)];
  return [n, (f) => {
    const p = {}, m = h && Ee(r), y = m && c();
    return Ct(d, (b) => {
      wt(p, b(f, p) || {});
    }), nn(r, m), y && y(), a || nn(o, 0), p;
  }, i, t, s];
}, r1 = (e, t, n, s, i) => {
  let o = !1;
  const r = Vd(t, {}), [a, c, l, u, h] = o1(e), [d, f, p] = XA(u, l, r, (x) => {
    _({}, x);
  }), [g, m, , y] = t1(e, t, p, l, u, i), b = (x) => Ke(x).some((v) => !!x[v]), _ = (x, v) => {
    if (n())
      return !1;
    const { vn: w, Dt: A, At: P, hn: M } = x, T = w || {}, D = !!A || !o, C = {
      It: Vd(t, T, D),
      vn: T,
      Dt: D
    };
    if (M)
      return m(C), !1;
    const I = v || f(wt({}, C, {
      At: P
    })), G = c(wt({}, C, {
      fn: p,
      Zt: I
    }));
    m(wt({}, C, {
      Zt: I,
      tn: G
    }));
    const W = b(I), H = b(G), j = W || H || !zl(T) || D;
    return o = !0, j && s(x, {
      Zt: I,
      tn: G
    }), j;
  };
  return [() => {
    const { an: x, gt: v, Ot: w } = u, A = Ee(x), P = [d(), a(), g()], M = w();
    return nn(v, A), M(), rt(Oe, P);
  }, _, () => ({
    gn: p,
    bn: l
  }), {
    wn: u,
    yn: y
  }, h];
}, Zl = /* @__PURE__ */ new WeakMap(), a1 = (e, t) => {
  Zl.set(e, t);
}, c1 = (e) => {
  Zl.delete(e);
}, jm = (e) => Zl.get(e), We = (e, t, n) => {
  const { nt: s } = un(), i = Er(e), o = i ? e : e.target, r = jm(o);
  if (t && !r) {
    let a = !1;
    const c = [], l = {}, u = (T) => {
      const D = dm(T), C = vo(_A);
      return C ? C(D, !0) : D;
    }, h = wt({}, s(), u(t)), [d, f, p] = Vc(), [g, m, y] = Vc(n), b = (T, D) => {
      y(T, D), p(T, D);
    }, [_, x, v, w, A] = r1(e, h, () => a, ({ vn: T, Dt: D }, { Zt: C, tn: I }) => {
      const { dt: G, Ct: W, xt: H, Ht: j, Et: Q, _t: q } = C, { nn: st, sn: K, en: k, cn: B } = I;
      b("updated", [M, {
        updateHints: {
          sizeChanged: !!G,
          directionChanged: !!W,
          heightIntrinsicChanged: !!H,
          overflowEdgeChanged: !!st,
          overflowAmountChanged: !!K,
          overflowStyleChanged: !!k,
          scrollCoordinatesChanged: !!B,
          contentMutation: !!j,
          hostMutation: !!Q,
          appear: !!q
        },
        changedOptions: T || {},
        force: !!D
      }]);
    }, (T) => b("scroll", [M, T])), P = (T) => {
      c1(o), Oe(c), a = !0, b("destroyed", [M, T]), f(), m();
    }, M = {
      options(T, D) {
        if (T) {
          const C = D ? s() : {}, I = Im(h, wt(C, u(T)));
          zl(I) || (wt(h, I), x({
            vn: I
          }));
        }
        return wt({}, h);
      },
      on: g,
      off: (T, D) => {
        T && D && m(T, D);
      },
      state() {
        const { gn: T, bn: D } = v(), { F: C } = T, { Lt: I, Vt: G, k: W, rn: H, ln: j, _n: Q, Tt: q } = D;
        return wt({}, {
          overflowEdge: I,
          overflowAmount: G,
          overflowStyle: W,
          hasOverflow: H,
          scrollCoordinates: {
            start: q.D,
            end: q.M
          },
          padding: j,
          paddingAbsolute: Q,
          directionRTL: C,
          destroyed: a
        });
      },
      elements() {
        const { vt: T, ht: D, ln: C, U: I, bt: G, gt: W, Qt: H } = w.wn, { Xt: j, Gt: Q } = w.yn, q = (K) => {
          const { kt: k, Pt: B, Ut: U } = K;
          return {
            scrollbar: U,
            track: B,
            handle: k
          };
        }, st = (K) => {
          const { Yt: k, Wt: B } = K, U = q(k[0]);
          return wt({}, U, {
            clone: () => {
              const O = q(B());
              return x({
                hn: !0
              }), O;
            }
          });
        };
        return wt({}, {
          target: T,
          host: D,
          padding: C || I,
          viewport: I,
          content: G || I,
          scrollOffsetElement: W,
          scrollEventElement: H,
          scrollbarHorizontal: st(j),
          scrollbarVertical: st(Q)
        });
      },
      update: (T) => x({
        Dt: T,
        At: !0
      }),
      destroy: rt(P, !1),
      plugin: (T) => l[Ke(T)[0]]
    };
    return Ut(c, [A]), a1(o, M), Dm(Cm, We, [M, d, l]), ZA(w.wn.wt, !i && e.cancel) ? (P(!0), M) : (Ut(c, _()), b("initialized", [M]), M.update(), M);
  }
  return r;
};
We.plugin = (e) => {
  const t = ln(e), n = t ? e : [e], s = n.map((i) => Dm(i, We)[0]);
  return xA(n), t ? s : s[0];
};
We.valid = (e) => {
  const t = e && e.elements, n = Ve(t) && t();
  return Dr(n) && !!jm(n.target);
};
We.env = () => {
  const { N: e, T: t, P: n, G: s, st: i, et: o, Z: r, tt: a, nt: c, ot: l } = un();
  return wt({}, {
    scrollbarsSize: e,
    scrollbarsOverlaid: t,
    scrollbarsHiding: n,
    scrollTimeline: s,
    staticDefaultInitialization: i,
    staticDefaultOptions: o,
    getDefaultInitialization: r,
    setDefaultInitialization: a,
    getDefaultOptions: c,
    setDefaultOptions: l
  });
};
We.nonce = UA;
We.trustedTypePolicy = pA;
const l1 = () => {
  if (typeof window > "u") {
    const l = () => {
    };
    return [l, l];
  }
  let e, t;
  const n = window, s = typeof n.requestIdleCallback == "function", i = n.requestAnimationFrame, o = n.cancelAnimationFrame, r = s ? n.requestIdleCallback : i, a = s ? n.cancelIdleCallback : o, c = () => {
    a(e), o(t);
  };
  return [
    (l, u) => {
      c(), e = r(
        s ? () => {
          c(), t = i(l);
        } : l,
        typeof u == "object" ? u : { timeout: 2233 }
      );
    },
    c
  ];
}, u1 = (e) => {
  const { options: t, events: n, defer: s } = e || {}, [i, o] = Ge(l1, []), r = bt(null), a = bt(s), c = bt(t), l = bt(n);
  return vt(() => {
    a.current = s;
  }, [s]), vt(() => {
    const { current: u } = r;
    c.current = t, We.valid(u) && u.options(t || {}, !0);
  }, [t]), vt(() => {
    const { current: u } = r;
    l.current = n, We.valid(u) && u.on(n || {}, !0);
  }, [n]), vt(
    () => () => {
      var u;
      o(), (u = r.current) == null || u.destroy();
    },
    []
  ), Ge(
    () => [
      (u) => {
        const h = r.current;
        if (We.valid(h))
          return;
        const d = a.current, f = c.current || {}, p = l.current || {}, g = () => r.current = We(u, f, p);
        d ? i(g, d) : g();
      },
      () => r.current
    ],
    []
  );
}, h1 = (e, t) => {
  const { element: n = "div", options: s, events: i, defer: o, children: r, ...a } = e, c = n, l = bt(null), u = bt(null), [h, d] = u1({ options: s, events: i, defer: o });
  return vt(() => {
    const { current: f } = l, { current: p } = u;
    if (!f)
      return;
    const g = f;
    return h(
      n === "body" ? {
        target: g,
        cancel: {
          body: null
        }
      } : {
        target: g,
        elements: {
          viewport: p,
          content: p
        }
      }
    ), () => {
      var m;
      return (m = d()) == null ? void 0 : m.destroy();
    };
  }, [h, n]), zs(
    t,
    () => ({
      osInstance: d,
      getElement: () => l.current
    }),
    []
  ), // @ts-ignore
  /* @__PURE__ */ re.createElement(c, { "data-overlayscrollbars-initialize": "", ref: l, ...a }, n === "body" ? r : /* @__PURE__ */ re.createElement("div", { "data-overlayscrollbars-contents": "", ref: u }, r));
}, d1 = ri(h1), Bm = ({
  children: e,
  maxHeight: t,
  options: n,
  onScroll: s = () => {
  },
  onScrollEndX: i = () => {
  },
  onScrollEndY: o = () => {
  },
  className: r = "",
  style: a = {}
}) => {
  const c = (d) => {
    console.debug("initialized:", d);
  }, l = (d) => {
    console.debug("destroyed:", d);
  }, u = (d) => {
    console.debug("updated:", d);
  }, h = (d) => {
    s({
      x: d.elements().viewport.scrollLeft,
      y: d.elements().viewport.scrollTop
    }), d.state().hasOverflow.x && d.state().overflowAmount.x === d.elements().viewport.scrollLeft && i(d), d.state().hasOverflow.y && d.state().overflowAmount.y === d.elements().viewport.scrollTop && o(d);
  };
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    /* @__PURE__ */ E.jsx(
      d1,
      {
        className: `h-overlay-scroll ${r}`,
        style: {
          maxHeight: t === 0 ? "none" : `${t}px`,
          ...a
        },
        options: {
          ...n
        },
        events: {
          initialized: c,
          destroyed: l,
          updated: u,
          scroll: h
        },
        defer: !0,
        children: e
      }
    )
  );
};
Bm.displayName = "HScrollbars";
const f1 = ({ children: e, listWidth: t, className: n = "" }) => {
  const { isActiveList: s, listPosition: i, dropdownListRef: o } = Vl(), r = (u, h, d, f) => h + d > f ? {
    top: "auto",
    bottom: `${f - u}px`,
    marginBottom: "-1px"
  } : {
    top: `${h}px`,
    bottom: "auto",
    marginTop: "-1px"
  }, a = (u, h, d, f) => h + d > f ? {
    left: "auto",
    right: `${f - h}px`
  } : {
    left: `${u}px`,
    right: "auto"
  }, [c, l] = yt({});
  return vt(() => {
    (() => {
      if (!i) {
        l({
          position: "fixed"
        });
        return;
      }
      const { bottom: u, left: h, right: d, top: f, clientWidth: p, clientHeight: g } = i;
      if (!o.current) {
        l({});
        return;
      }
      const { height: m, width: y } = o.current.getBoundingClientRect();
      l({
        position: "fixed",
        zIndex: "220",
        ...r(f, u, m, g),
        ...a(h, d, y, p),
        width: `${t}px`
      });
    })();
  }, [i]), /* @__PURE__ */ E.jsx(E.Fragment, { children: s && /* @__PURE__ */ E.jsx(
    "div",
    {
      ref: o,
      style: c,
      className: `h_dropdown_list ${n}`,
      children: /* @__PURE__ */ E.jsx(Bm, { maxHeight: 300, children: e })
    }
  ) });
};
f1.displayName = "HDropdownList";
var Hm = typeof global == "object" && global && global.Object === Object && global, p1 = typeof self == "object" && self && self.Object === Object && self, Tn = Hm || p1 || Function("return this")(), qs = Tn.Symbol, zm = Object.prototype, g1 = zm.hasOwnProperty, m1 = zm.toString, Ai = qs ? qs.toStringTag : void 0;
function y1(e) {
  var t = g1.call(e, Ai), n = e[Ai];
  try {
    e[Ai] = void 0;
    var s = !0;
  } catch {
  }
  var i = m1.call(e);
  return s && (t ? e[Ai] = n : delete e[Ai]), i;
}
var b1 = Object.prototype, v1 = b1.toString;
function x1(e) {
  return v1.call(e);
}
var _1 = "[object Null]", w1 = "[object Undefined]", jd = qs ? qs.toStringTag : void 0;
function xo(e) {
  return e == null ? e === void 0 ? w1 : _1 : jd && jd in Object(e) ? y1(e) : x1(e);
}
function oo(e) {
  return e != null && typeof e == "object";
}
var Ir = Array.isArray;
function Wm(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var S1 = "[object AsyncFunction]", A1 = "[object Function]", P1 = "[object GeneratorFunction]", T1 = "[object Proxy]";
function Um(e) {
  if (!Wm(e))
    return !1;
  var t = xo(e);
  return t == A1 || t == P1 || t == S1 || t == T1;
}
var Ya = Tn["__core-js_shared__"], Bd = function() {
  var e = /[^.]+$/.exec(Ya && Ya.keys && Ya.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function M1(e) {
  return !!Bd && Bd in e;
}
var C1 = Function.prototype, k1 = C1.toString;
function _s(e) {
  if (e != null) {
    try {
      return k1.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var D1 = /[\\^$.*+?()[\]{}|]/g, E1 = /^\[object .+?Constructor\]$/, O1 = Function.prototype, R1 = Object.prototype, L1 = O1.toString, I1 = R1.hasOwnProperty, N1 = RegExp(
  "^" + L1.call(I1).replace(D1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $1(e) {
  if (!Wm(e) || M1(e))
    return !1;
  var t = Um(e) ? N1 : E1;
  return t.test(_s(e));
}
function V1(e, t) {
  return e == null ? void 0 : e[t];
}
function ci(e, t) {
  var n = V1(e, t);
  return $1(n) ? n : void 0;
}
var Bc = ci(Tn, "WeakMap"), F1 = 9007199254740991, j1 = /^(?:0|[1-9]\d*)$/;
function B1(e, t) {
  var n = typeof e;
  return t = t ?? F1, !!t && (n == "number" || n != "symbol" && j1.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ym(e, t) {
  return e === t || e !== e && t !== t;
}
var H1 = 9007199254740991;
function Gm(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= H1;
}
function z1(e) {
  return e != null && Gm(e.length) && !Um(e);
}
var W1 = Object.prototype;
function U1(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || W1;
  return e === n;
}
function Y1(e, t) {
  for (var n = -1, s = Array(e); ++n < e; )
    s[n] = t(n);
  return s;
}
var G1 = "[object Arguments]";
function Hd(e) {
  return oo(e) && xo(e) == G1;
}
var Km = Object.prototype, K1 = Km.hasOwnProperty, X1 = Km.propertyIsEnumerable, q1 = Hd(/* @__PURE__ */ function() {
  return arguments;
}()) ? Hd : function(e) {
  return oo(e) && K1.call(e, "callee") && !X1.call(e, "callee");
};
function Z1() {
  return !1;
}
var Xm = typeof exports == "object" && exports && !exports.nodeType && exports, zd = Xm && typeof module == "object" && module && !module.nodeType && module, Q1 = zd && zd.exports === Xm, Wd = Q1 ? Tn.Buffer : void 0, J1 = Wd ? Wd.isBuffer : void 0, Hc = J1 || Z1, tP = "[object Arguments]", eP = "[object Array]", nP = "[object Boolean]", sP = "[object Date]", iP = "[object Error]", oP = "[object Function]", rP = "[object Map]", aP = "[object Number]", cP = "[object Object]", lP = "[object RegExp]", uP = "[object Set]", hP = "[object String]", dP = "[object WeakMap]", fP = "[object ArrayBuffer]", pP = "[object DataView]", gP = "[object Float32Array]", mP = "[object Float64Array]", yP = "[object Int8Array]", bP = "[object Int16Array]", vP = "[object Int32Array]", xP = "[object Uint8Array]", _P = "[object Uint8ClampedArray]", wP = "[object Uint16Array]", SP = "[object Uint32Array]", It = {};
It[gP] = It[mP] = It[yP] = It[bP] = It[vP] = It[xP] = It[_P] = It[wP] = It[SP] = !0;
It[tP] = It[eP] = It[fP] = It[nP] = It[pP] = It[sP] = It[iP] = It[oP] = It[rP] = It[aP] = It[cP] = It[lP] = It[uP] = It[hP] = It[dP] = !1;
function AP(e) {
  return oo(e) && Gm(e.length) && !!It[xo(e)];
}
function PP(e) {
  return function(t) {
    return e(t);
  };
}
var qm = typeof exports == "object" && exports && !exports.nodeType && exports, Bi = qm && typeof module == "object" && module && !module.nodeType && module, TP = Bi && Bi.exports === qm, Ga = TP && Hm.process, Ud = function() {
  try {
    var e = Bi && Bi.require && Bi.require("util").types;
    return e || Ga && Ga.binding && Ga.binding("util");
  } catch {
  }
}(), Yd = Ud && Ud.isTypedArray, Zm = Yd ? PP(Yd) : AP, MP = Object.prototype, CP = MP.hasOwnProperty;
function kP(e, t) {
  var n = Ir(e), s = !n && q1(e), i = !n && !s && Hc(e), o = !n && !s && !i && Zm(e), r = n || s || i || o, a = r ? Y1(e.length, String) : [], c = a.length;
  for (var l in e)
    CP.call(e, l) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    B1(l, c))) && a.push(l);
  return a;
}
function DP(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var EP = DP(Object.keys, Object), OP = Object.prototype, RP = OP.hasOwnProperty;
function LP(e) {
  if (!U1(e))
    return EP(e);
  var t = [];
  for (var n in Object(e))
    RP.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function IP(e) {
  return z1(e) ? kP(e) : LP(e);
}
var ro = ci(Object, "create");
function NP() {
  this.__data__ = ro ? ro(null) : {}, this.size = 0;
}
function $P(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var VP = "__lodash_hash_undefined__", FP = Object.prototype, jP = FP.hasOwnProperty;
function BP(e) {
  var t = this.__data__;
  if (ro) {
    var n = t[e];
    return n === VP ? void 0 : n;
  }
  return jP.call(t, e) ? t[e] : void 0;
}
var HP = Object.prototype, zP = HP.hasOwnProperty;
function WP(e) {
  var t = this.__data__;
  return ro ? t[e] !== void 0 : zP.call(t, e);
}
var UP = "__lodash_hash_undefined__";
function YP(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ro && t === void 0 ? UP : t, this;
}
function bs(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
bs.prototype.clear = NP;
bs.prototype.delete = $P;
bs.prototype.get = BP;
bs.prototype.has = WP;
bs.prototype.set = YP;
function GP() {
  this.__data__ = [], this.size = 0;
}
function da(e, t) {
  for (var n = e.length; n--; )
    if (Ym(e[n][0], t))
      return n;
  return -1;
}
var KP = Array.prototype, XP = KP.splice;
function qP(e) {
  var t = this.__data__, n = da(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : XP.call(t, n, 1), --this.size, !0;
}
function ZP(e) {
  var t = this.__data__, n = da(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function QP(e) {
  return da(this.__data__, e) > -1;
}
function JP(e, t) {
  var n = this.__data__, s = da(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Mn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Mn.prototype.clear = GP;
Mn.prototype.delete = qP;
Mn.prototype.get = ZP;
Mn.prototype.has = QP;
Mn.prototype.set = JP;
var ao = ci(Tn, "Map");
function tT() {
  this.size = 0, this.__data__ = {
    hash: new bs(),
    map: new (ao || Mn)(),
    string: new bs()
  };
}
function eT(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function fa(e, t) {
  var n = e.__data__;
  return eT(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function nT(e) {
  var t = fa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sT(e) {
  return fa(this, e).get(e);
}
function iT(e) {
  return fa(this, e).has(e);
}
function oT(e, t) {
  var n = fa(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function ws(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ws.prototype.clear = tT;
ws.prototype.delete = nT;
ws.prototype.get = sT;
ws.prototype.has = iT;
ws.prototype.set = oT;
function rT(e, t) {
  for (var n = -1, s = t.length, i = e.length; ++n < s; )
    e[i + n] = t[n];
  return e;
}
function aT() {
  this.__data__ = new Mn(), this.size = 0;
}
function cT(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function lT(e) {
  return this.__data__.get(e);
}
function uT(e) {
  return this.__data__.has(e);
}
var hT = 200;
function dT(e, t) {
  var n = this.__data__;
  if (n instanceof Mn) {
    var s = n.__data__;
    if (!ao || s.length < hT - 1)
      return s.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ws(s);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Fn(e) {
  var t = this.__data__ = new Mn(e);
  this.size = t.size;
}
Fn.prototype.clear = aT;
Fn.prototype.delete = cT;
Fn.prototype.get = lT;
Fn.prototype.has = uT;
Fn.prototype.set = dT;
function fT(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, i = 0, o = []; ++n < s; ) {
    var r = e[n];
    t(r, n, e) && (o[i++] = r);
  }
  return o;
}
function pT() {
  return [];
}
var gT = Object.prototype, mT = gT.propertyIsEnumerable, Gd = Object.getOwnPropertySymbols, yT = Gd ? function(e) {
  return e == null ? [] : (e = Object(e), fT(Gd(e), function(t) {
    return mT.call(e, t);
  }));
} : pT;
function bT(e, t, n) {
  var s = t(e);
  return Ir(e) ? s : rT(s, n(e));
}
function Kd(e) {
  return bT(e, IP, yT);
}
var zc = ci(Tn, "DataView"), Wc = ci(Tn, "Promise"), Uc = ci(Tn, "Set"), Xd = "[object Map]", vT = "[object Object]", qd = "[object Promise]", Zd = "[object Set]", Qd = "[object WeakMap]", Jd = "[object DataView]", xT = _s(zc), _T = _s(ao), wT = _s(Wc), ST = _s(Uc), AT = _s(Bc), Dn = xo;
(zc && Dn(new zc(new ArrayBuffer(1))) != Jd || ao && Dn(new ao()) != Xd || Wc && Dn(Wc.resolve()) != qd || Uc && Dn(new Uc()) != Zd || Bc && Dn(new Bc()) != Qd) && (Dn = function(e) {
  var t = xo(e), n = t == vT ? e.constructor : void 0, s = n ? _s(n) : "";
  if (s)
    switch (s) {
      case xT:
        return Jd;
      case _T:
        return Xd;
      case wT:
        return qd;
      case ST:
        return Zd;
      case AT:
        return Qd;
    }
  return t;
});
var tf = Tn.Uint8Array, PT = "__lodash_hash_undefined__";
function TT(e) {
  return this.__data__.set(e, PT), this;
}
function MT(e) {
  return this.__data__.has(e);
}
function Nr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ws(); ++t < n; )
    this.add(e[t]);
}
Nr.prototype.add = Nr.prototype.push = TT;
Nr.prototype.has = MT;
function CT(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function kT(e, t) {
  return e.has(t);
}
var DT = 1, ET = 2;
function Qm(e, t, n, s, i, o) {
  var r = n & DT, a = e.length, c = t.length;
  if (a != c && !(r && c > a))
    return !1;
  var l = o.get(e), u = o.get(t);
  if (l && u)
    return l == t && u == e;
  var h = -1, d = !0, f = n & ET ? new Nr() : void 0;
  for (o.set(e, t), o.set(t, e); ++h < a; ) {
    var p = e[h], g = t[h];
    if (s)
      var m = r ? s(g, p, h, t, e, o) : s(p, g, h, e, t, o);
    if (m !== void 0) {
      if (m)
        continue;
      d = !1;
      break;
    }
    if (f) {
      if (!CT(t, function(y, b) {
        if (!kT(f, b) && (p === y || i(p, y, n, s, o)))
          return f.push(b);
      })) {
        d = !1;
        break;
      }
    } else if (!(p === g || i(p, g, n, s, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), d;
}
function OT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s, i) {
    n[++t] = [i, s];
  }), n;
}
function RT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s) {
    n[++t] = s;
  }), n;
}
var LT = 1, IT = 2, NT = "[object Boolean]", $T = "[object Date]", VT = "[object Error]", FT = "[object Map]", jT = "[object Number]", BT = "[object RegExp]", HT = "[object Set]", zT = "[object String]", WT = "[object Symbol]", UT = "[object ArrayBuffer]", YT = "[object DataView]", ef = qs ? qs.prototype : void 0, Ka = ef ? ef.valueOf : void 0;
function GT(e, t, n, s, i, o, r) {
  switch (n) {
    case YT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case UT:
      return !(e.byteLength != t.byteLength || !o(new tf(e), new tf(t)));
    case NT:
    case $T:
    case jT:
      return Ym(+e, +t);
    case VT:
      return e.name == t.name && e.message == t.message;
    case BT:
    case zT:
      return e == t + "";
    case FT:
      var a = OT;
    case HT:
      var c = s & LT;
      if (a || (a = RT), e.size != t.size && !c)
        return !1;
      var l = r.get(e);
      if (l)
        return l == t;
      s |= IT, r.set(e, t);
      var u = Qm(a(e), a(t), s, i, o, r);
      return r.delete(e), u;
    case WT:
      if (Ka)
        return Ka.call(e) == Ka.call(t);
  }
  return !1;
}
var KT = 1, XT = Object.prototype, qT = XT.hasOwnProperty;
function ZT(e, t, n, s, i, o) {
  var r = n & KT, a = Kd(e), c = a.length, l = Kd(t), u = l.length;
  if (c != u && !r)
    return !1;
  for (var h = c; h--; ) {
    var d = a[h];
    if (!(r ? d in t : qT.call(t, d)))
      return !1;
  }
  var f = o.get(e), p = o.get(t);
  if (f && p)
    return f == t && p == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var m = r; ++h < c; ) {
    d = a[h];
    var y = e[d], b = t[d];
    if (s)
      var _ = r ? s(b, y, d, t, e, o) : s(y, b, d, e, t, o);
    if (!(_ === void 0 ? y === b || i(y, b, n, s, o) : _)) {
      g = !1;
      break;
    }
    m || (m = d == "constructor");
  }
  if (g && !m) {
    var x = e.constructor, v = t.constructor;
    x != v && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof v == "function" && v instanceof v) && (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var QT = 1, nf = "[object Arguments]", sf = "[object Array]", zo = "[object Object]", JT = Object.prototype, of = JT.hasOwnProperty;
function tM(e, t, n, s, i, o) {
  var r = Ir(e), a = Ir(t), c = r ? sf : Dn(e), l = a ? sf : Dn(t);
  c = c == nf ? zo : c, l = l == nf ? zo : l;
  var u = c == zo, h = l == zo, d = c == l;
  if (d && Hc(e)) {
    if (!Hc(t))
      return !1;
    r = !0, u = !1;
  }
  if (d && !u)
    return o || (o = new Fn()), r || Zm(e) ? Qm(e, t, n, s, i, o) : GT(e, t, c, n, s, i, o);
  if (!(n & QT)) {
    var f = u && of.call(e, "__wrapped__"), p = h && of.call(t, "__wrapped__");
    if (f || p) {
      var g = f ? e.value() : e, m = p ? t.value() : t;
      return o || (o = new Fn()), i(g, m, n, s, o);
    }
  }
  return d ? (o || (o = new Fn()), ZT(e, t, n, s, i, o)) : !1;
}
function Jm(e, t, n, s, i) {
  return e === t ? !0 : e == null || t == null || !oo(e) && !oo(t) ? e !== e && t !== t : tM(e, t, n, s, Jm, i);
}
function Yc(e, t) {
  return Jm(e, t);
}
const SR = (e, t) => Yc(e, t), AR = ({ data: e, backgroundColor: t, borderColor: n, borderWidth: s, labelFillStyle: i, legendLabelsColor: o }) => {
  const r = bt(null), a = bt(null);
  return vt(() => {
    var l;
    a.current && a.current.destroy();
    const c = (l = r.current) == null ? void 0 : l.getContext("2d");
    if (c)
      return a.current = new tn(c, {
        type: "pie",
        data: {
          labels: e.map((u) => u.label),
          datasets: [
            {
              data: e.map((u) => u.value),
              backgroundColor: t || Array.from({ length: e.length }, (u, h) => h % 2 === 0 ? "#4CAF50" : "#2196F3"),
              borderColor: n || Array.from({ length: e.length }, (u, h) => h % 2 === 0 ? "#45a049" : "#1e88e5"),
              borderWidth: s || 1
            }
          ]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: {
            legend: {
              display: !0,
              position: "bottom",
              labels: {
                color: o || "#333"
              }
            },
            tooltip: {
              enabled: !0,
              callbacks: {
                label: (u) => `${u.label}: ${u.parsed}`
              }
            }
          },
          animation: {
            duration: 1e3,
            easing: "easeInOutQuart"
          },
          layout: {
            padding: {
              top: 20,
              right: 10,
              bottom: 10,
              left: 10
            }
          }
        },
        plugins: [
          {
            id: "percentage",
            afterDraw: (u) => {
              const h = u.ctx, d = u.data.datasets[0].data.reduce((f, p) => f + parseFloat(p + ""), 0);
              u.data.datasets.forEach((f, p) => {
                u.getDatasetMeta(p).data.forEach((m) => {
                  const y = m.innerRadius + (m.outerRadius - m.innerRadius) / 2, b = m.startAngle, _ = m.endAngle, x = b + (_ - b) / 2, v = y * Math.cos(x), w = y * Math.sin(x);
                  h.save(), h.translate(m.x, m.y), h.fillStyle = i || "#000000", h.font = "12px Arial", h.textAlign = "center", h.textBaseline = "middle";
                  const A = (parseFloat(f.data[m.$context.index] + "") / d * 100).toFixed(1) + "%";
                  h.fillText(A, v, w), h.restore();
                });
              });
            }
          }
        ]
      }), () => {
        a.current && a.current.destroy();
      };
  }, [e]), /* @__PURE__ */ E.jsx("canvas", { ref: r });
}, Ql = Pe({});
function Jl(e) {
  const t = bt(null);
  return t.current === null && (t.current = e()), t.current;
}
const pa = /* @__PURE__ */ Pe(null), tu = Pe({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class eM extends yl.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const s = n.offsetParent, i = s instanceof HTMLElement && s.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = i - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function nM({ children: e, isPresent: t, anchorX: n }) {
  const s = Kr(), i = bt(null), o = bt({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: r } = Tt(tu);
  return Up(() => {
    const { width: a, height: c, top: l, left: u, right: h } = o.current;
    if (t || !i.current || !a || !c)
      return;
    const d = n === "left" ? `left: ${u}` : `right: ${h}`;
    i.current.dataset.motionPopId = s;
    const f = document.createElement("style");
    return r && (f.nonce = r), document.head.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${c}px !important;
            ${d}px !important;
            top: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(f);
    };
  }, [t]), E.jsx(eM, { isPresent: t, childRef: i, sizeRef: o, children: yl.cloneElement(e, { ref: i }) });
}
const sM = ({ children: e, initial: t, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r, anchorX: a }) => {
  const c = Jl(iM), l = Kr(), u = bl((d) => {
    c.set(d, !0);
    for (const f of c.values())
      if (!f)
        return;
    s && s();
  }, [c, s]), h = Ge(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: i,
      onExitComplete: u,
      register: (d) => (c.set(d, !1), () => c.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    o ? [Math.random(), u] : [n, u]
  );
  return Ge(() => {
    c.forEach((d, f) => c.set(f, !1));
  }, [n]), yl.useEffect(() => {
    !n && !c.size && s && s();
  }, [n]), r === "popLayout" && (e = E.jsx(nM, { isPresent: n, anchorX: a, children: e })), E.jsx(pa.Provider, { value: h, children: e });
};
function iM() {
  return /* @__PURE__ */ new Map();
}
function ty(e = !0) {
  const t = Tt(pa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = t, o = Kr();
  vt(() => {
    if (e)
      return i(o);
  }, [e]);
  const r = bl(() => e && s && s(o), [o, s, e]);
  return !n && s ? [!1, r] : [!0];
}
const Wo = (e) => e.key || "";
function rf(e) {
  const t = [];
  return h0.forEach(e, (n) => {
    Yp(n) && t.push(n);
  }), t;
}
const eu = typeof window < "u", ey = eu ? d0 : vt, ny = ({ children: e, custom: t, initial: n = !0, onExitComplete: s, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left" }) => {
  const [c, l] = ty(r), u = Ge(() => rf(e), [e]), h = r && !c ? [] : u.map(Wo), d = bt(!0), f = bt(u), p = Jl(() => /* @__PURE__ */ new Map()), [g, m] = yt(u), [y, b] = yt(u);
  ey(() => {
    d.current = !1, f.current = u;
    for (let v = 0; v < y.length; v++) {
      const w = Wo(y[v]);
      h.includes(w) ? p.delete(w) : p.get(w) !== !0 && p.set(w, !1);
    }
  }, [y, h.length, h.join("-")]);
  const _ = [];
  if (u !== g) {
    let v = [...u];
    for (let w = 0; w < y.length; w++) {
      const A = y[w], P = Wo(A);
      h.includes(P) || (v.splice(w, 0, A), _.push(A));
    }
    return o === "wait" && _.length && (v = _), b(rf(v)), m(u), null;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && y.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: x } = Tt(Ql);
  return E.jsx(E.Fragment, { children: y.map((v) => {
    const w = Wo(v), A = r && !c ? !1 : u === y || h.includes(w), P = () => {
      if (p.has(w))
        p.set(w, !0);
      else
        return;
      let M = !0;
      p.forEach((T) => {
        T || (M = !1);
      }), M && (x == null || x(), b(f.current), r && (l == null || l()), s && s());
    };
    return E.jsx(sM, { isPresent: A, initial: !d.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: i, mode: o, onExitComplete: A ? void 0 : P, anchorX: a, children: v }, w);
  }) });
}, Ae = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let li = Ae, Hn = Ae;
process.env.NODE_ENV !== "production" && (li = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Hn = (e, t) => {
  if (!e)
    throw new Error(t);
});
// @__NO_SIDE_EFFECTS__
function nu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Zs = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const s = t - e;
  return s === 0 ? 1 : (n - e) / s;
}, rn = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, wn = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, oM = {
  useManualTiming: !1
}, Uo = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], af = {
  value: null
};
function rM(e, t) {
  let n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = 0;
  function l(h) {
    r.has(h) && (u.schedule(h), e()), c++, h(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (h, d = !1, f = !1) => {
      const g = f && i ? n : s;
      return d && r.add(h), g.has(h) || g.add(h), h;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (h) => {
      s.delete(h), r.delete(h);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (h) => {
      if (a = h, i) {
        o = !0;
        return;
      }
      i = !0, [n, s] = [s, n], n.forEach(l), t && af.value && af.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, o && (o = !1, u.process(h));
    }
  };
  return u;
}
const aM = 40;
function sy(e, t) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = Uo.reduce((y, b) => (y[b] = rM(o, t ? b : void 0), y), {}), { read: a, resolveKeyframes: c, update: l, preRender: u, render: h, postRender: d } = r, f = () => {
    const y = performance.now();
    n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, aM), 1), i.timestamp = y, i.isProcessing = !0, a.process(i), c.process(i), l.process(i), u.process(i), h.process(i), d.process(i), i.isProcessing = !1, n && t && (s = !1, e(f));
  }, p = () => {
    n = !0, s = !0, i.isProcessing || e(f);
  };
  return { schedule: Uo.reduce((y, b) => {
    const _ = r[b];
    return y[b] = (x, v = !1, w = !1) => (n || p(), _.schedule(x, v, w)), y;
  }, {}), cancel: (y) => {
    for (let b = 0; b < Uo.length; b++)
      r[Uo[b]].cancel(y);
  }, state: i, steps: r };
}
const { schedule: Ot, cancel: zn, state: oe, steps: Xa } = sy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ae, !0), iy = Pe({ strict: !1 }), cf = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Qs = {};
for (const e in cf)
  Qs[e] = {
    isEnabled: (t) => cf[e].some((n) => !!t[n])
  };
function cM(e) {
  for (const t in e)
    Qs[t] = {
      ...Qs[t],
      ...e[t]
    };
}
const lM = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function $r(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || lM.has(e);
}
let oy = (e) => !$r(e);
function uM(e) {
  e && (oy = (t) => t.startsWith("on") ? !$r(t) : e(t));
}
try {
  uM(require("@emotion/is-prop-valid").default);
} catch {
}
function hM(e, t, n) {
  const s = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (oy(i) || n === !0 && $r(i) || !t && !$r(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (s[i] = e[i]);
  return s;
}
const lf = /* @__PURE__ */ new Set();
function ga(e, t, n) {
  e || lf.has(t) || (console.warn(t), lf.add(t));
}
function dM(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...s) => (process.env.NODE_ENV !== "production" && ga(!1, "motion() is deprecated. Use motion.create() instead."), e(...s));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
  });
}
const ma = /* @__PURE__ */ Pe({});
function ya(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function co(e) {
  return typeof e == "string" || Array.isArray(e);
}
const su = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], iu = ["initial", ...su];
function ba(e) {
  return ya(e.animate) || iu.some((t) => co(e[t]));
}
function ry(e) {
  return !!(ba(e) || e.variants);
}
function fM(e, t) {
  if (ba(e)) {
    const { initial: n, animate: s } = e;
    return {
      initial: n === !1 || co(n) ? n : void 0,
      animate: co(s) ? s : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function pM(e) {
  const { initial: t, animate: n } = fM(e, Tt(ma));
  return Ge(() => ({ initial: t, animate: n }), [uf(t), uf(n)]);
}
function uf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const gM = Symbol.for("motionComponentSymbol");
function Ls(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function mM(e, t, n) {
  return bl(
    (s) => {
      s && e.onMount && e.onMount(s), t && (s ? t.mount(s) : t.unmount()), n && (typeof n == "function" ? n(s) : Ls(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const ou = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), yM = "framerAppearId", ay = "data-" + ou(yM), { schedule: ru } = sy(queueMicrotask, !1), cy = Pe({});
function bM(e, t, n, s, i) {
  var o, r;
  const { visualElement: a } = Tt(ma), c = Tt(iy), l = Tt(pa), u = Tt(tu).reducedMotion, h = bt(null);
  s = s || c.renderer, !h.current && s && (h.current = s(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const d = h.current, f = Tt(cy);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && vM(h.current, n, i, f);
  const p = bt(!1);
  Up(() => {
    d && p.current && d.update(n, l);
  });
  const g = n[ay], m = bt(!!g && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, g)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, g)));
  return ey(() => {
    d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), ru.render(d.render), m.current && d.animationState && d.animationState.animateChanges());
  }), vt(() => {
    d && (!m.current && d.animationState && d.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      var y;
      (y = window.MotionHandoffMarkAsComplete) === null || y === void 0 || y.call(window, g);
    }), m.current = !1));
  }), d;
}
function vM(e, t, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: c, layoutRoot: l } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : ly(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!r || a && Ls(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: s,
    layoutScroll: c,
    layoutRoot: l
  });
}
function ly(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : ly(e.parent);
}
function xM({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: s, Component: i }) {
  var o, r;
  e && cM(e);
  function a(l, u) {
    let h;
    const d = {
      ...Tt(tu),
      ...l,
      layoutId: _M(l)
    }, { isStatic: f } = d, p = pM(l), g = s(l, f);
    if (!f && eu) {
      wM(d, e);
      const m = SM(d);
      h = m.MeasureLayout, p.visualElement = bM(i, g, d, t, m.ProjectionNode);
    }
    return E.jsxs(ma.Provider, { value: p, children: [h && p.visualElement ? E.jsx(h, { visualElement: p.visualElement, ...d }) : null, n(i, l, mM(g, p.visualElement, u), g, f, p.visualElement)] });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(r = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && r !== void 0 ? r : ""})`}`;
  const c = ri(a);
  return c[gM] = i, c;
}
function _M({ layoutId: e }) {
  const t = Tt(Ql).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function wM(e, t) {
  const n = Tt(iy).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? li(!1, s) : Hn(!1, s);
  }
}
function SM(e) {
  const { drag: t, layout: n } = Qs;
  if (!t && !n)
    return {};
  const s = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
const uy = (e) => (t) => typeof t == "string" && t.startsWith(e), au = /* @__PURE__ */ uy("--"), AM = /* @__PURE__ */ uy("var(--"), cu = (e) => AM(e) ? PM.test(e.split("/*")[0].trim()) : !1, PM = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, lo = {};
function TM(e) {
  for (const t in e)
    lo[t] = e[t], au(t) && (lo[t].isCSSVariable = !0);
}
const ui = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ss = new Set(ui);
function hy(e, { layout: t, layoutId: n }) {
  return Ss.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!lo[e] || e === "opacity");
}
const fe = (e) => !!(e && e.getVelocity), dy = (e, t) => t && typeof e == "number" ? t.transform(e) : e, An = (e, t, n) => n > t ? t : n < e ? e : n, hi = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, uo = {
  ...hi,
  transform: (e) => An(0, 1, e)
}, Yo = {
  ...hi,
  default: 1
}, _o = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Cn = /* @__PURE__ */ _o("deg"), an = /* @__PURE__ */ _o("%"), it = /* @__PURE__ */ _o("px"), MM = /* @__PURE__ */ _o("vh"), CM = /* @__PURE__ */ _o("vw"), hf = {
  ...an,
  parse: (e) => an.parse(e) / 100,
  transform: (e) => an.transform(e * 100)
}, kM = {
  // Border props
  borderWidth: it,
  borderTopWidth: it,
  borderRightWidth: it,
  borderBottomWidth: it,
  borderLeftWidth: it,
  borderRadius: it,
  radius: it,
  borderTopLeftRadius: it,
  borderTopRightRadius: it,
  borderBottomRightRadius: it,
  borderBottomLeftRadius: it,
  // Positioning props
  width: it,
  maxWidth: it,
  height: it,
  maxHeight: it,
  top: it,
  right: it,
  bottom: it,
  left: it,
  // Spacing props
  padding: it,
  paddingTop: it,
  paddingRight: it,
  paddingBottom: it,
  paddingLeft: it,
  margin: it,
  marginTop: it,
  marginRight: it,
  marginBottom: it,
  marginLeft: it,
  // Misc
  backgroundPositionX: it,
  backgroundPositionY: it
}, DM = {
  rotate: Cn,
  rotateX: Cn,
  rotateY: Cn,
  rotateZ: Cn,
  scale: Yo,
  scaleX: Yo,
  scaleY: Yo,
  scaleZ: Yo,
  skew: Cn,
  skewX: Cn,
  skewY: Cn,
  distance: it,
  translateX: it,
  translateY: it,
  translateZ: it,
  x: it,
  y: it,
  z: it,
  perspective: it,
  transformPerspective: it,
  opacity: uo,
  originX: hf,
  originY: hf,
  originZ: it
}, df = {
  ...hi,
  transform: Math.round
}, lu = {
  ...kM,
  ...DM,
  zIndex: df,
  size: it,
  // SVG
  fillOpacity: uo,
  strokeOpacity: uo,
  numOctaves: df
}, EM = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, OM = ui.length;
function RM(e, t, n) {
  let s = "", i = !0;
  for (let o = 0; o < OM; o++) {
    const r = ui[o], a = e[r];
    if (a === void 0)
      continue;
    let c = !0;
    if (typeof a == "number" ? c = a === (r.startsWith("scale") ? 1 : 0) : c = parseFloat(a) === 0, !c || n) {
      const l = dy(a, lu[r]);
      if (!c) {
        i = !1;
        const u = EM[r] || r;
        s += `${u}(${l}) `;
      }
      n && (t[r] = l);
    }
  }
  return s = s.trim(), n ? s = n(t, i ? "" : s) : i && (s = "none"), s;
}
function uu(e, t, n) {
  const { style: s, vars: i, transformOrigin: o } = e;
  let r = !1, a = !1;
  for (const c in t) {
    const l = t[c];
    if (Ss.has(c)) {
      r = !0;
      continue;
    } else if (au(c)) {
      i[c] = l;
      continue;
    } else {
      const u = dy(l, lu[c]);
      c.startsWith("origin") ? (a = !0, o[c] = u) : s[c] = u;
    }
  }
  if (t.transform || (r || n ? s.transform = RM(t, e.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: c = "50%", originY: l = "50%", originZ: u = 0 } = o;
    s.transformOrigin = `${c} ${l} ${u}`;
  }
}
const hu = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function fy(e, t, n) {
  for (const s in t)
    !fe(t[s]) && !hy(s, n) && (e[s] = t[s]);
}
function LM({ transformTemplate: e }, t) {
  return Ge(() => {
    const n = hu();
    return uu(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function IM(e, t) {
  const n = e.style || {}, s = {};
  return fy(s, n, e), Object.assign(s, LM(e, t)), s;
}
function NM(e, t) {
  const n = {}, s = IM(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const $M = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function du(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!($M.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const VM = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, FM = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function jM(e, t, n = 1, s = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? VM : FM;
  e[o.offset] = it.transform(-s);
  const r = it.transform(t), a = it.transform(n);
  e[o.array] = `${r} ${a}`;
}
function ff(e, t, n) {
  return typeof e == "string" ? e : it.transform(t + n * e);
}
function BM(e, t, n) {
  const s = ff(t, e.x, e.width), i = ff(n, e.y, e.height);
  return `${s} ${i}`;
}
function fu(e, {
  attrX: t,
  attrY: n,
  attrScale: s,
  originX: i,
  originY: o,
  pathLength: r,
  pathSpacing: a = 1,
  pathOffset: c = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, u, h) {
  if (uu(e, l, h), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: f, dimensions: p } = e;
  d.transform && (p && (f.transform = d.transform), delete d.transform), p && (i !== void 0 || o !== void 0 || f.transform) && (f.transformOrigin = BM(p, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), r !== void 0 && jM(d, r, a, c, !1);
}
const py = () => ({
  ...hu(),
  attrs: {}
}), pu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function HM(e, t, n, s) {
  const i = Ge(() => {
    const o = py();
    return fu(o, t, pu(s), e.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    fy(o, e.style, e), i.style = { ...o, ...i.style };
  }
  return i;
}
function zM(e = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const c = (du(n) ? HM : NM)(s, o, r, n), l = hM(s, typeof n == "string", e), u = n !== Gp ? { ...l, ...c, ref: i } : {}, { children: h } = s, d = Ge(() => fe(h) ? h.get() : h, [h]);
    return Kp(n, {
      ...u,
      children: d
    });
  };
}
function pf(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, s) => {
    t[0][s] = n.get(), t[1][s] = n.getVelocity();
  }), t;
}
function gu(e, t, n, s) {
  if (typeof t == "function") {
    const [i, o] = pf(s);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, o] = pf(s);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const Gc = (e) => Array.isArray(e), WM = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), UM = (e) => Gc(e) ? e[e.length - 1] || 0 : e;
function hr(e) {
  const t = fe(e) ? e.get() : e;
  return WM(t) ? t.toValue() : t;
}
function YM({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, s, i, o) {
  const r = {
    latestValues: GM(s, i, o, e),
    renderState: t()
  };
  return n && (r.onMount = (a) => n({ props: s, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const gy = (e) => (t, n) => {
  const s = Tt(ma), i = Tt(pa), o = () => YM(e, t, s, i);
  return n ? o() : Jl(o);
};
function GM(e, t, n, s) {
  const i = {}, o = s(e, {});
  for (const d in o)
    i[d] = hr(o[d]);
  let { initial: r, animate: a } = e;
  const c = ba(e), l = ry(e);
  t && l && !c && e.inherit !== !1 && (r === void 0 && (r = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? a : r;
  if (h && typeof h != "boolean" && !ya(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let f = 0; f < d.length; f++) {
      const p = gu(e, d[f]);
      if (p) {
        const { transitionEnd: g, transition: m, ...y } = p;
        for (const b in y) {
          let _ = y[b];
          if (Array.isArray(_)) {
            const x = u ? _.length - 1 : 0;
            _ = _[x];
          }
          _ !== null && (i[b] = _);
        }
        for (const b in g)
          i[b] = g[b];
      }
    }
  }
  return i;
}
function mu(e, t, n) {
  var s;
  const { style: i } = e, o = {};
  for (const r in i)
    (fe(i[r]) || t.style && fe(t.style[r]) || hy(r, e) || ((s = n == null ? void 0 : n.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (o[r] = i[r]);
  return o;
}
const KM = {
  useVisualState: gy({
    scrapeMotionValuesFromProps: mu,
    createRenderState: hu
  })
};
function my(e, t) {
  try {
    t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
function yy(e, { style: t, vars: n }, s, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(s));
  for (const o in n)
    e.style.setProperty(o, n[o]);
}
const by = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function vy(e, t, n, s) {
  yy(e, t, void 0, s);
  for (const i in t.attrs)
    e.setAttribute(by.has(i) ? i : ou(i), t.attrs[i]);
}
function xy(e, t, n) {
  const s = mu(e, t, n);
  for (const i in e)
    if (fe(e[i]) || fe(t[i])) {
      const o = ui.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = e[i];
    }
  return s;
}
const gf = ["x", "y", "width", "height", "cx", "cy", "r"], XM = {
  useVisualState: gy({
    scrapeMotionValuesFromProps: xy,
    createRenderState: py,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: s, latestValues: i }) => {
      if (!n)
        return;
      let o = !!e.drag;
      if (!o) {
        for (const a in i)
          if (Ss.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let r = !t;
      if (t)
        for (let a = 0; a < gf.length; a++) {
          const c = gf[a];
          e[c] !== t[c] && (r = !0);
        }
      r && Ot.read(() => {
        my(n, s), Ot.render(() => {
          fu(s, i, pu(n.tagName), e.transformTemplate), vy(n, s);
        });
      });
    }
  })
};
function qM(e, t) {
  return function(s, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const r = {
      ...du(s) ? XM : KM,
      preloadedFeatures: e,
      useRender: zM(i),
      createVisualElement: t,
      Component: s
    };
    return xM(r);
  };
}
function ho(e, t, n) {
  const s = e.getProps();
  return gu(s, t, n !== void 0 ? n : s.custom, e);
}
const ZM = /* @__PURE__ */ nu(() => window.ScrollTimeline !== void 0);
class QM {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => "finished" in t ? t.finished : t));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let s = 0; s < this.animations.length; s++)
      this.animations[s][t] = n;
  }
  attachTimeline(t, n) {
    const s = this.animations.map((i) => {
      if (ZM() && i.attachTimeline)
        return i.attachTimeline(t);
      if (typeof n == "function")
        return n(i);
    });
    return () => {
      s.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class JM extends QM {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function yu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Kc = 2e4;
function _y(e) {
  let t = 0;
  const n = 50;
  let s = e.next(t);
  for (; !s.done && t < Kc; )
    t += n, s = e.next(t);
  return t >= Kc ? 1 / 0 : t;
}
function bu(e) {
  return typeof e == "function";
}
function mf(e, t) {
  e.timeline = t, e.onfinish = null;
}
const vu = (e) => Array.isArray(e) && typeof e[0] == "number", tC = {
  linearEasing: void 0
};
function eC(e, t) {
  const n = /* @__PURE__ */ nu(e);
  return () => {
    var s;
    return (s = tC[t]) !== null && s !== void 0 ? s : n();
  };
}
const Vr = /* @__PURE__ */ eC(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), wy = (e, t, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let o = 0; o < i; o++)
    s += e(/* @__PURE__ */ Zs(0, i - 1, o)) + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
};
function Sy(e) {
  return !!(typeof e == "function" && Vr() || !e || typeof e == "string" && (e in Xc || Vr()) || vu(e) || Array.isArray(e) && e.every(Sy));
}
const Ri = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`, Xc = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ri([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ri([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ri([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ri([0.33, 1.53, 0.69, 0.99])
};
function Ay(e, t) {
  if (e)
    return typeof e == "function" && Vr() ? wy(e, t) : vu(e) ? Ri(e) : Array.isArray(e) ? e.map((n) => Ay(n, t) || Xc.easeOut) : Xc[e];
}
const He = {
  x: !1,
  y: !1
};
function Py() {
  return He.x || He.y;
}
function nC(e, t, n) {
  var s;
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let i = document;
    const o = (s = void 0) !== null && s !== void 0 ? s : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function Ty(e, t) {
  const n = nC(e), s = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: s.signal
  };
  return [n, i, () => s.abort()];
}
function yf(e) {
  return !(e.pointerType === "touch" || Py());
}
function sC(e, t, n = {}) {
  const [s, i, o] = Ty(e, n), r = (a) => {
    if (!yf(a))
      return;
    const { target: c } = a, l = t(c, a);
    if (typeof l != "function" || !c)
      return;
    const u = (h) => {
      yf(h) && (l(h), c.removeEventListener("pointerleave", u));
    };
    c.addEventListener("pointerleave", u, i);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
function Fr(e, t) {
  const n = `${t}PointerCapture`;
  if (e.target instanceof Element && n in e.target && e.pointerId !== void 0)
    try {
      e.target[n](e.pointerId);
    } catch {
    }
}
const My = (e, t) => t ? e === t ? !0 : My(e, t.parentElement) : !1, xu = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, iC = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function oC(e) {
  return iC.has(e.tagName) || e.tabIndex !== -1;
}
const Li = /* @__PURE__ */ new WeakSet();
function bf(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function qa(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const rC = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const s = bf(() => {
    if (Li.has(n))
      return;
    qa(n, "down");
    const i = bf(() => {
      qa(n, "up");
    }), o = () => qa(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", s, t), n.addEventListener("blur", () => n.removeEventListener("keydown", s), t);
};
function vf(e) {
  return xu(e) && !Py();
}
function aC(e, t, n = {}) {
  const [s, i, o] = Ty(e, n), r = (a) => {
    const c = a.currentTarget;
    if (!c || !vf(a) || Li.has(c))
      return;
    Li.add(c), Fr(a, "set");
    const l = t(c, a), u = (f, p) => {
      c.removeEventListener("pointerup", h), c.removeEventListener("pointercancel", d), Fr(f, "release"), !(!vf(f) || !Li.has(c)) && (Li.delete(c), typeof l == "function" && l(f, { success: p }));
    }, h = (f) => {
      (f.isTrusted ? cC(f, c instanceof Element ? c.getBoundingClientRect() : {
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight
      }) : !1) ? u(f, !1) : u(f, !(c instanceof Element) || My(c, f.target));
    }, d = (f) => {
      u(f, !1);
    };
    c.addEventListener("pointerup", h, i), c.addEventListener("pointercancel", d, i), c.addEventListener("lostpointercapture", d, i);
  };
  return s.forEach((a) => {
    a = n.useGlobalTarget ? window : a;
    let c = !1;
    a instanceof HTMLElement && (c = !0, !oC(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0)), a.addEventListener("pointerdown", r, i), c && a.addEventListener("focus", (l) => rC(l, i), i);
  }), o;
}
function cC(e, t) {
  return e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom;
}
function lC(e) {
  return e === "x" || e === "y" ? He[e] ? null : (He[e] = !0, () => {
    He[e] = !1;
  }) : He.x || He.y ? null : (He.x = He.y = !0, () => {
    He.x = He.y = !1;
  });
}
const Cy = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ui
]);
let dr;
function uC() {
  dr = void 0;
}
const cn = {
  now: () => (dr === void 0 && cn.set(oe.isProcessing || oM.useManualTiming ? oe.timestamp : performance.now()), dr),
  set: (e) => {
    dr = e, queueMicrotask(uC);
  }
};
function _u(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function wu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Su {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return _u(this.subscriptions, t), () => wu(this.subscriptions, t);
  }
  notify(t, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(t, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function ky(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const xf = 30, hC = (e) => !isNaN(parseFloat(e));
class dC {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "12.4.7", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
      const o = cn.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = cn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = hC(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && ga(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Su());
    const s = this.events[t].add(n);
    return t === "change" ? () => {
      s(), Ot.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = cn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > xf)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, xf);
    return ky(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function fo(e, t) {
  return new dC(e, t);
}
function fC(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, fo(n));
}
function pC(e, t) {
  const n = ho(e, t);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = UM(o[r]);
    fC(e, r, a);
  }
}
function gC(e) {
  return !!(fe(e) && e.add);
}
function qc(e, t) {
  const n = e.getValue("willChange");
  if (gC(n))
    return n.add(t);
}
function Dy(e) {
  return e.props[ay];
}
const Ey = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, mC = 1e-7, yC = 12;
function bC(e, t, n, s, i) {
  let o, r, a = 0;
  do
    r = t + (n - t) / 2, o = Ey(r, s, i) - e, o > 0 ? n = r : t = r;
  while (Math.abs(o) > mC && ++a < yC);
  return r;
}
function wo(e, t, n, s) {
  if (e === t && n === s)
    return Ae;
  const i = (o) => bC(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Ey(i(o), t, s);
}
const Oy = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ry = (e) => (t) => 1 - e(1 - t), Ly = /* @__PURE__ */ wo(0.33, 1.53, 0.69, 0.99), Au = /* @__PURE__ */ Ry(Ly), Iy = /* @__PURE__ */ Oy(Au), Ny = (e) => (e *= 2) < 1 ? 0.5 * Au(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Pu = (e) => 1 - Math.sin(Math.acos(e)), $y = Ry(Pu), Vy = Oy(Pu), Fy = (e) => /^0[^.\s]+$/u.test(e);
function vC(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Fy(e) : !0;
}
const Hi = (e) => Math.round(e * 1e5) / 1e5, Tu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function xC(e) {
  return e == null;
}
const _C = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Mu = (e, t) => (n) => !!(typeof n == "string" && _C.test(n) && n.startsWith(e) || t && !xC(n) && Object.prototype.hasOwnProperty.call(n, t)), jy = (e, t, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, o, r, a] = s.match(Tu);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, wC = (e) => An(0, 255, e), Za = {
  ...hi,
  transform: (e) => Math.round(wC(e))
}, cs = {
  test: /* @__PURE__ */ Mu("rgb", "red"),
  parse: /* @__PURE__ */ jy("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: s = 1 }) => "rgba(" + Za.transform(e) + ", " + Za.transform(t) + ", " + Za.transform(n) + ", " + Hi(uo.transform(s)) + ")"
};
function SC(e) {
  let t = "", n = "", s = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), s = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), s = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, s += s, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Zc = {
  test: /* @__PURE__ */ Mu("#"),
  parse: SC,
  transform: cs.transform
}, Is = {
  test: /* @__PURE__ */ Mu("hsl", "hue"),
  parse: /* @__PURE__ */ jy("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(e) + ", " + an.transform(Hi(t)) + ", " + an.transform(Hi(n)) + ", " + Hi(uo.transform(s)) + ")"
}, he = {
  test: (e) => cs.test(e) || Zc.test(e) || Is.test(e),
  parse: (e) => cs.test(e) ? cs.parse(e) : Is.test(e) ? Is.parse(e) : Zc.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? cs.transform(e) : Is.transform(e)
}, AC = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function PC(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Tu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(AC)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const By = "number", Hy = "color", TC = "var", MC = "var(", _f = "${}", CC = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function po(e) {
  const t = e.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = t.replace(CC, (c) => (he.test(c) ? (s.color.push(o), i.push(Hy), n.push(he.parse(c))) : c.startsWith(MC) ? (s.var.push(o), i.push(TC), n.push(c)) : (s.number.push(o), i.push(By), n.push(parseFloat(c))), ++o, _f)).split(_f);
  return { values: n, split: a, indexes: s, types: i };
}
function zy(e) {
  return po(e).values;
}
function Wy(e) {
  const { split: t, types: n } = po(e), s = t.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += t[r], i[r] !== void 0) {
        const a = n[r];
        a === By ? o += Hi(i[r]) : a === Hy ? o += he.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const kC = (e) => typeof e == "number" ? 0 : e;
function DC(e) {
  const t = zy(e);
  return Wy(e)(t.map(kC));
}
const Wn = {
  test: PC,
  parse: zy,
  createTransformer: Wy,
  getAnimatableNone: DC
}, EC = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function OC(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [s] = n.match(Tu) || [];
  if (!s)
    return e;
  const i = n.replace(s, "");
  let o = EC.has(t) ? 1 : 0;
  return s !== n && (o *= 100), t + "(" + o + i + ")";
}
const RC = /\b([a-z-]*)\(.*?\)/gu, Qc = {
  ...Wn,
  getAnimatableNone: (e) => {
    const t = e.match(RC);
    return t ? t.map(OC).join(" ") : e;
  }
}, LC = {
  ...lu,
  // Color props
  color: he,
  backgroundColor: he,
  outlineColor: he,
  fill: he,
  stroke: he,
  // Border props
  borderColor: he,
  borderTopColor: he,
  borderRightColor: he,
  borderBottomColor: he,
  borderLeftColor: he,
  filter: Qc,
  WebkitFilter: Qc
}, Cu = (e) => LC[e];
function Uy(e, t) {
  let n = Cu(e);
  return n !== Qc && (n = Wn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const IC = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function NC(e, t, n) {
  let s = 0, i;
  for (; s < e.length && !i; ) {
    const o = e[s];
    typeof o == "string" && !IC.has(o) && po(o).values.length && (i = e[s]), s++;
  }
  if (i && n)
    for (const o of t)
      e[o] = Uy(n, i);
}
const wf = (e) => e === hi || e === it, Sf = (e, t) => parseFloat(e.split(", ")[t]), Af = (e, t) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const i = s.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return Sf(i[1], t);
  {
    const o = s.match(/^matrix\((.+)\)$/u);
    return o ? Sf(o[1], e) : 0;
  }
}, $C = /* @__PURE__ */ new Set(["x", "y", "z"]), VC = ui.filter((e) => !$C.has(e));
function FC(e) {
  const t = [];
  return VC.forEach((n) => {
    const s = e.getValue(n);
    s !== void 0 && (t.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Js = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Af(4, 13),
  y: Af(5, 14)
};
Js.translateX = Js.x;
Js.translateY = Js.y;
const fs = /* @__PURE__ */ new Set();
let Jc = !1, tl = !1;
function Yy() {
  if (tl) {
    const e = Array.from(fs).filter((s) => s.needsMeasurement), t = new Set(e.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    t.forEach((s) => {
      const i = FC(s);
      i.length && (n.set(s, i), s.render());
    }), e.forEach((s) => s.measureInitialState()), t.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([o, r]) => {
        var a;
        (a = s.getValue(o)) === null || a === void 0 || a.set(r);
      });
    }), e.forEach((s) => s.measureEndState()), e.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  tl = !1, Jc = !1, fs.forEach((e) => e.complete()), fs.clear();
}
function Gy() {
  fs.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (tl = !0);
  });
}
function jC() {
  Gy(), Yy();
}
class ku {
  constructor(t, n, s, i, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (fs.add(this), Jc || (Jc = !0, Ot.read(Gy), Ot.resolveKeyframes(Yy))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: s, motionValue: i } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const r = i == null ? void 0 : i.get(), a = t[t.length - 1];
          if (r !== void 0)
            t[0] = r;
          else if (s && n) {
            const c = s.readValue(n, a);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = a), i && r === void 0 && i.set(t[0]);
        } else
          t[o] = t[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), fs.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, fs.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ky = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), BC = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function HC(e) {
  const t = BC.exec(e);
  if (!t)
    return [,];
  const [, n, s, i] = t;
  return [`--${n ?? s}`, i];
}
const zC = 4;
function Xy(e, t, n = 1) {
  Hn(n <= zC, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [s, i] = HC(e);
  if (!s)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Ky(r) ? parseFloat(r) : r;
  }
  return cu(i) ? Xy(i, t, n + 1) : i;
}
const qy = (e) => (t) => t.test(e), WC = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Zy = [hi, it, an, Cn, CM, MM, WC], Pf = (e) => Zy.find(qy(e));
class Qy extends ku {
  constructor(t, n, s, i, o) {
    super(t, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let l = t[c];
      if (typeof l == "string" && (l = l.trim(), cu(l))) {
        const u = Xy(l, n.current);
        u !== void 0 && (t[c] = u), c === t.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !Cy.has(s) || t.length !== 2)
      return;
    const [i, o] = t, r = Pf(i), a = Pf(o);
    if (r !== a)
      if (wf(r) && wf(a))
        for (let c = 0; c < t.length; c++) {
          const l = t[c];
          typeof l == "string" && (t[c] = parseFloat(l));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, s = [];
    for (let i = 0; i < t.length; i++)
      vC(t[i]) && s.push(i);
    s.length && NC(t, s, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: s } = this;
    if (!t || !t.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Js[s](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: s, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(s);
    o && o.jump(this.measuredOrigin, !1);
    const r = i.length - 1, a = i[r];
    i[r] = Js[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([c, l]) => {
      n.getValue(c).set(l);
    }), this.resolveNoneKeyframes();
  }
}
const Tf = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Wn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function UC(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function YC(e, t, n, s) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], r = Tf(i, t), a = Tf(o, t);
  return li(r === a, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : UC(e) || (n === "spring" || bu(n)) && s;
}
const GC = (e) => e !== null;
function va(e, { repeat: t, repeatType: n = "loop" }, s) {
  const i = e.filter(GC), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || s === void 0 ? i[o] : s;
}
const KC = 40;
class Jy {
  constructor({ autoplay: t = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = cn.now(), this.options = {
      autoplay: t,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: o,
      repeatType: r,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > KC ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && jC(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = cn.now(), this.hasAttemptedResolve = !0;
    const { name: s, type: i, velocity: o, delay: r, onComplete: a, onUpdate: c, isGenerator: l } = this.options;
    if (!l && !YC(t, s, i, o))
      if (r)
        this.options.duration = 0;
      else {
        c && c(va(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...u
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const Yt = (e, t, n) => e + (t - e) * n;
function Qa(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function XC({ hue: e, saturation: t, lightness: n, alpha: s }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!t)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - a;
    i = Qa(c, a, e + 1 / 3), o = Qa(c, a, e), r = Qa(c, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
function jr(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ja = (e, t, n) => {
  const s = e * e, i = n * (t * t - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, qC = [Zc, cs, Is], ZC = (e) => qC.find((t) => t.test(e));
function Mf(e) {
  const t = ZC(e);
  if (li(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Is && (n = XC(n)), n;
}
const Cf = (e, t) => {
  const n = Mf(e), s = Mf(t);
  if (!n || !s)
    return jr(e, t);
  const i = { ...n };
  return (o) => (i.red = Ja(n.red, s.red, o), i.green = Ja(n.green, s.green, o), i.blue = Ja(n.blue, s.blue, o), i.alpha = Yt(n.alpha, s.alpha, o), cs.transform(i));
}, QC = (e, t) => (n) => t(e(n)), So = (...e) => e.reduce(QC), el = /* @__PURE__ */ new Set(["none", "hidden"]);
function JC(e, t) {
  return el.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function tk(e, t) {
  return (n) => Yt(e, t, n);
}
function Du(e) {
  return typeof e == "number" ? tk : typeof e == "string" ? cu(e) ? jr : he.test(e) ? Cf : sk : Array.isArray(e) ? tb : typeof e == "object" ? he.test(e) ? Cf : ek : jr;
}
function tb(e, t) {
  const n = [...e], s = n.length, i = e.map((o, r) => Du(o)(o, t[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function ek(e, t) {
  const n = { ...e, ...t }, s = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (s[i] = Du(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function nk(e, t) {
  var n;
  const s = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const r = t.types[o], a = e.indexes[r][i[r]], c = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    s[o] = c, i[r]++;
  }
  return s;
}
const sk = (e, t) => {
  const n = Wn.createTransformer(t), s = po(e), i = po(t);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? el.has(e) && !i.values.length || el.has(t) && !s.values.length ? JC(e, t) : So(tb(nk(s, i), i.values), n) : (li(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), jr(e, t));
};
function eb(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Yt(e, t, n) : Du(e)(e, t);
}
const ik = 5;
function nb(e, t, n) {
  const s = Math.max(t - ik, 0);
  return ky(n - e(s), t - s);
}
const Wt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, kf = 1e-3;
function ok({ duration: e = Wt.duration, bounce: t = Wt.bounce, velocity: n = Wt.velocity, mass: s = Wt.mass }) {
  let i, o;
  li(e <= /* @__PURE__ */ rn(Wt.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - t;
  r = An(Wt.minDamping, Wt.maxDamping, r), e = An(Wt.minDuration, Wt.maxDuration, /* @__PURE__ */ wn(e)), r < 1 ? (i = (l) => {
    const u = l * r, h = u * e, d = u - n, f = nl(l, r), p = Math.exp(-h);
    return kf - d / f * p;
  }, o = (l) => {
    const h = l * r * e, d = h * n + n, f = Math.pow(r, 2) * Math.pow(l, 2) * e, p = Math.exp(-h), g = nl(Math.pow(l, 2), r);
    return (-i(l) + kf > 0 ? -1 : 1) * ((d - f) * p) / g;
  }) : (i = (l) => {
    const u = Math.exp(-l * e), h = (l - n) * e + 1;
    return -1e-3 + u * h;
  }, o = (l) => {
    const u = Math.exp(-l * e), h = (n - l) * (e * e);
    return u * h;
  });
  const a = 5 / e, c = ak(i, o, a);
  if (e = /* @__PURE__ */ rn(e), isNaN(c))
    return {
      stiffness: Wt.stiffness,
      damping: Wt.damping,
      duration: e
    };
  {
    const l = Math.pow(c, 2) * s;
    return {
      stiffness: l,
      damping: r * 2 * Math.sqrt(s * l),
      duration: e
    };
  }
}
const rk = 12;
function ak(e, t, n) {
  let s = n;
  for (let i = 1; i < rk; i++)
    s = s - e(s) / t(s);
  return s;
}
function nl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ck = ["duration", "bounce"], lk = ["stiffness", "damping", "mass"];
function Df(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function uk(e) {
  let t = {
    velocity: Wt.velocity,
    stiffness: Wt.stiffness,
    damping: Wt.damping,
    mass: Wt.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Df(e, lk) && Df(e, ck))
    if (e.visualDuration) {
      const n = e.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * An(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: Wt.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = ok(e);
      t = {
        ...t,
        ...n,
        mass: Wt.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function sb(e = Wt.visualDuration, t = Wt.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: c, damping: l, mass: u, duration: h, velocity: d, isResolvedFromDuration: f } = uk({
    ...n,
    velocity: -/* @__PURE__ */ wn(n.velocity || 0)
  }), p = d || 0, g = l / (2 * Math.sqrt(c * u)), m = r - o, y = /* @__PURE__ */ wn(Math.sqrt(c / u)), b = Math.abs(m) < 5;
  s || (s = b ? Wt.restSpeed.granular : Wt.restSpeed.default), i || (i = b ? Wt.restDelta.granular : Wt.restDelta.default);
  let _;
  if (g < 1) {
    const v = nl(y, g);
    _ = (w) => {
      const A = Math.exp(-g * y * w);
      return r - A * ((p + g * y * m) / v * Math.sin(v * w) + m * Math.cos(v * w));
    };
  } else if (g === 1)
    _ = (v) => r - Math.exp(-y * v) * (m + (p + y * m) * v);
  else {
    const v = y * Math.sqrt(g * g - 1);
    _ = (w) => {
      const A = Math.exp(-g * y * w), P = Math.min(v * w, 300);
      return r - A * ((p + g * y * m) * Math.sinh(P) + v * m * Math.cosh(P)) / v;
    };
  }
  const x = {
    calculatedDuration: f && h || null,
    next: (v) => {
      const w = _(v);
      if (f)
        a.done = v >= h;
      else {
        let A = 0;
        g < 1 && (A = v === 0 ? /* @__PURE__ */ rn(p) : nb(_, v, w));
        const P = Math.abs(A) <= s, M = Math.abs(r - w) <= i;
        a.done = P && M;
      }
      return a.value = a.done ? r : w, a;
    },
    toString: () => {
      const v = Math.min(_y(x), Kc), w = wy((A) => x.next(v * A).value, v, 30);
      return v + "ms " + w;
    }
  };
  return x;
}
function Ef({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: c, restDelta: l = 0.5, restSpeed: u }) {
  const h = e[0], d = {
    done: !1,
    value: h
  }, f = (P) => a !== void 0 && P < a || c !== void 0 && P > c, p = (P) => a === void 0 ? c : c === void 0 || Math.abs(a - P) < Math.abs(c - P) ? a : c;
  let g = n * t;
  const m = h + g, y = r === void 0 ? m : r(m);
  y !== m && (g = y - h);
  const b = (P) => -g * Math.exp(-P / s), _ = (P) => y + b(P), x = (P) => {
    const M = b(P), T = _(P);
    d.done = Math.abs(M) <= l, d.value = d.done ? y : T;
  };
  let v, w;
  const A = (P) => {
    f(d.value) && (v = P, w = sb({
      keyframes: [d.value, p(d.value)],
      velocity: nb(_, P, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: l,
      restSpeed: u
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (P) => {
      let M = !1;
      return !w && v === void 0 && (M = !0, x(P), A(P)), v !== void 0 && P >= v ? w.next(P - v) : (!M && x(P), d);
    }
  };
}
const hk = /* @__PURE__ */ wo(0.42, 0, 1, 1), dk = /* @__PURE__ */ wo(0, 0, 0.58, 1), ib = /* @__PURE__ */ wo(0.42, 0, 0.58, 1), fk = (e) => Array.isArray(e) && typeof e[0] != "number", Of = {
  linear: Ae,
  easeIn: hk,
  easeInOut: ib,
  easeOut: dk,
  circIn: Pu,
  circInOut: Vy,
  circOut: $y,
  backIn: Au,
  backInOut: Iy,
  backOut: Ly,
  anticipate: Ny
}, Rf = (e) => {
  if (vu(e)) {
    Hn(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, s, i] = e;
    return wo(t, n, s, i);
  } else if (typeof e == "string")
    return Hn(Of[e] !== void 0, `Invalid easing type '${e}'`), Of[e];
  return e;
};
function pk(e, t, n) {
  const s = [], i = n || eb, o = e.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(e[r], e[r + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[r] || Ae : t;
      a = So(c, a);
    }
    s.push(a);
  }
  return s;
}
function gk(e, t, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = e.length;
  if (Hn(o === t.length, "Both input and output ranges must be the same length"), o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const r = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = pk(t, s, i), c = a.length, l = (u) => {
    if (r && u < e[0])
      return t[0];
    let h = 0;
    if (c > 1)
      for (; h < e.length - 2 && !(u < e[h + 1]); h++)
        ;
    const d = /* @__PURE__ */ Zs(e[h], e[h + 1], u);
    return a[h](d);
  };
  return n ? (u) => l(An(e[0], e[o - 1], u)) : l;
}
function mk(e, t) {
  const n = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const i = /* @__PURE__ */ Zs(0, t, s);
    e.push(Yt(n, 1, i));
  }
}
function yk(e) {
  const t = [0];
  return mk(t, e.length - 1), t;
}
function bk(e, t) {
  return e.map((n) => n * t);
}
function vk(e, t) {
  return e.map(() => t || ib).splice(0, e.length - 1);
}
function zi({ duration: e = 300, keyframes: t, times: n, ease: s = "easeInOut" }) {
  const i = fk(s) ? s.map(Rf) : Rf(s), o = {
    done: !1,
    value: t[0]
  }, r = bk(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : yk(t),
    e
  ), a = gk(r, t, {
    ease: Array.isArray(i) ? i : vk(t, i)
  });
  return {
    calculatedDuration: e,
    next: (c) => (o.value = a(c), o.done = c >= e, o)
  };
}
const xk = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Ot.update(t, !0),
    stop: () => zn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => oe.isProcessing ? oe.timestamp : cn.now()
  };
}, _k = {
  decay: Ef,
  inertia: Ef,
  tween: zi,
  keyframes: zi,
  spring: sb
}, wk = (e) => e / 100;
class Eu extends Jy {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: c } = this.options;
      c && c();
    };
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options, r = (i == null ? void 0 : i.KeyframeResolver) || ku, a = (c, l) => this.onKeyframesResolved(c, l);
    this.resolver = new r(o, a, n, s, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = this.options, a = bu(n) ? n : _k[n] || zi;
    let c, l;
    process.env.NODE_ENV !== "production" && a !== zi && Hn(t.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), a !== zi && typeof t[0] != "number" && (c = So(wk, eb(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    o === "mirror" && (l = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = _y(u));
    const { calculatedDuration: h } = u, d = h + i, f = d * (s + 1) - i;
    return {
      generator: u,
      mirroredGenerator: l,
      mapPercentToKeyframes: c,
      calculatedDuration: h,
      resolvedDuration: d,
      totalDuration: f
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: c, calculatedDuration: l, totalDuration: u, resolvedDuration: h } = s;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: f, repeatType: p, repeatDelay: g, onUpdate: m } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const y = this.currentTime - d * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? y < 0 : y > u;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let _ = this.currentTime, x = o;
    if (f) {
      const P = Math.min(this.currentTime, u) / h;
      let M = Math.floor(P), T = P % 1;
      !T && P >= 1 && (T = 1), T === 1 && M--, M = Math.min(M, f + 1), !!(M % 2) && (p === "reverse" ? (T = 1 - T, g && (T -= g / h)) : p === "mirror" && (x = r)), _ = An(0, 1, T) * h;
    }
    const v = b ? { done: !1, value: c[0] } : x.next(_);
    a && (v.value = a(v.value));
    let { done: w } = v;
    !b && l !== null && (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && w);
    return A && i !== void 0 && (v.value = va(c, this.options, i)), m && m(v.value), A && this.finish(), v;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ wn(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ wn(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ rn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ wn(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = xk, onPlay: n, startTime: s } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = s ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const Sk = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Ak(e, t, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: c } = {}) {
  const l = { [t]: n };
  c && (l.offset = c);
  const u = Ay(a, i);
  return Array.isArray(u) && (l.easing = u), e.animate(l, {
    delay: s,
    duration: i,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const Pk = /* @__PURE__ */ nu(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Br = 10, Tk = 2e4;
function Mk(e) {
  return bu(e.type) || e.type === "spring" || !Sy(e.ease);
}
function Ck(e, t) {
  const n = new Eu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !s.done && o < Tk; )
    s = n.sample(o), i.push(s.value), o += Br;
  return {
    times: void 0,
    keyframes: i,
    duration: o - Br,
    ease: "linear"
  };
}
const ob = {
  anticipate: Ny,
  backInOut: Iy,
  circInOut: Vy
};
function kk(e) {
  return e in ob;
}
class Lf extends Jy {
  constructor(t) {
    super(t);
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options;
    this.resolver = new Qy(o, (r, a) => this.onKeyframesResolved(r, a), n, s, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: s = 300, times: i, ease: o, type: r, motionValue: a, name: c, startTime: l } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && Vr() && kk(o) && (o = ob[o]), Mk(this.options)) {
      const { onComplete: h, onUpdate: d, motionValue: f, element: p, ...g } = this.options, m = Ck(t, g);
      t = m.keyframes, t.length === 1 && (t[1] = t[0]), s = m.duration, i = m.times, o = m.ease, r = "keyframes";
    }
    const u = Ak(a.owner.current, c, t, { ...this.options, duration: s, times: i, ease: o });
    return u.startTime = l ?? this.calcStartTime(), this.pendingTimeline ? (mf(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: h } = this.options;
      a.set(va(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: u,
      duration: s,
      times: i,
      type: r,
      ease: o,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ wn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ wn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.currentTime = /* @__PURE__ */ rn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Ae;
      const { animation: s } = n;
      mf(s, t);
    }
    return Ae;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: s, duration: i, type: o, ease: r, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: l, onUpdate: u, onComplete: h, element: d, ...f } = this.options, p = new Eu({
        ...f,
        keyframes: s,
        duration: i,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), g = /* @__PURE__ */ rn(this.time);
      l.setWithVelocity(p.sample(g - Br).value, p.sample(g).value, Br);
    }
    const { onStop: c } = this.options;
    c && c(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: s, repeatDelay: i, repeatType: o, damping: r, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: c, transformTemplate: l } = n.owner.getProps();
    return Pk() && s && Sk.has(s) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !c && !l && !i && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const Dk = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Ek = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Ok = {
  type: "keyframes",
  duration: 0.8
}, Rk = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Lk = (e, { keyframes: t }) => t.length > 2 ? Ok : Ss.has(e) ? e.startsWith("scale") ? Ek(t[1]) : Dk : Rk;
function Ik({ when: e, delay: t, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: c, elapsed: l, ...u }) {
  return !!Object.keys(u).length;
}
const Ou = (e, t, n, s = {}, i, o) => (r) => {
  const a = yu(s, e) || {}, c = a.delay || s.delay || 0;
  let { elapsed: l = 0 } = s;
  l = l - /* @__PURE__ */ rn(c);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -l,
    onUpdate: (d) => {
      t.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: o ? void 0 : i
  };
  Ik(a) || (u = {
    ...u,
    ...Lk(e, u)
  }), u.duration && (u.duration = /* @__PURE__ */ rn(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ rn(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (h = !0)), h && !o && t.get() !== void 0) {
    const d = va(u.keyframes, a);
    if (d !== void 0)
      return Ot.update(() => {
        u.onUpdate(d), u.onComplete();
      }), new JM([]);
  }
  return !o && Lf.supports(u) ? new Lf(u) : new Eu(u);
};
function Nk({ protectedKeys: e, needsAnimating: t }, n) {
  const s = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, s;
}
function rb(e, t, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var o;
  let { transition: r = e.getDefaultTransition(), transitionEnd: a, ...c } = t;
  s && (r = s);
  const l = [], u = i && e.animationState && e.animationState.getState()[i];
  for (const h in c) {
    const d = e.getValue(h, (o = e.latestValues[h]) !== null && o !== void 0 ? o : null), f = c[h];
    if (f === void 0 || u && Nk(u, h))
      continue;
    const p = {
      delay: n,
      ...yu(r || {}, h)
    };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const y = Dy(e);
      if (y) {
        const b = window.MotionHandoffAnimation(y, h, Ot);
        b !== null && (p.startTime = b, g = !0);
      }
    }
    qc(e, h), d.start(Ou(h, d, f, e.shouldReduceMotion && Cy.has(h) ? { type: !1 } : p, e, g));
    const m = d.animation;
    m && l.push(m);
  }
  return a && Promise.all(l).then(() => {
    Ot.update(() => {
      a && pC(e, a);
    });
  }), l;
}
function sl(e, t, n = {}) {
  var s;
  const i = ho(e, t, n.type === "exit" ? (s = e.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = i ? () => Promise.all(rb(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: h, staggerDirection: d } = o;
    return $k(e, t, u + l, h, d, n);
  } : () => Promise.resolve(), { when: c } = o;
  if (c) {
    const [l, u] = c === "beforeChildren" ? [r, a] : [a, r];
    return l().then(() => u());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function $k(e, t, n = 0, s = 0, i = 1, o) {
  const r = [], a = (e.variantChildren.size - 1) * s, c = i === 1 ? (l = 0) => l * s : (l = 0) => a - l * s;
  return Array.from(e.variantChildren).sort(Vk).forEach((l, u) => {
    l.notify("AnimationStart", t), r.push(sl(l, t, {
      ...o,
      delay: n + c(u)
    }).then(() => l.notify("AnimationComplete", t)));
  }), Promise.all(r);
}
function Vk(e, t) {
  return e.sortNodePosition(t);
}
function Fk(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let s;
  if (Array.isArray(t)) {
    const i = t.map((o) => sl(e, o, n));
    s = Promise.all(i);
  } else if (typeof t == "string")
    s = sl(e, t, n);
  else {
    const i = typeof t == "function" ? ho(e, t, n.custom) : t;
    s = Promise.all(rb(e, i, n));
  }
  return s.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function ab(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (t[s] !== e[s])
      return !1;
  return !0;
}
const jk = iu.length;
function cb(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? cb(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < jk; n++) {
    const s = iu[n], i = e.props[s];
    (co(i) || i === !1) && (t[s] = i);
  }
  return t;
}
const Bk = [...su].reverse(), Hk = su.length;
function zk(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: s }) => Fk(e, n, s)));
}
function Wk(e) {
  let t = zk(e), n = If(), s = !0;
  const i = (c) => (l, u) => {
    var h;
    const d = ho(e, u, c === "exit" ? (h = e.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
    if (d) {
      const { transition: f, transitionEnd: p, ...g } = d;
      l = { ...l, ...g, ...p };
    }
    return l;
  };
  function o(c) {
    t = c(e);
  }
  function r(c) {
    const { props: l } = e, u = cb(e.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let f = {}, p = 1 / 0;
    for (let m = 0; m < Hk; m++) {
      const y = Bk[m], b = n[y], _ = l[y] !== void 0 ? l[y] : u[y], x = co(_), v = y === c ? b.isActive : null;
      v === !1 && (p = m);
      let w = _ === u[y] && _ !== l[y] && x;
      if (w && s && e.manuallyAnimateOnMount && (w = !1), b.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && v === null || // If we didn't and don't have any defined prop for this animation type
      !_ && !b.prevProp || // Or if the prop doesn't define an animation
      ya(_) || typeof _ == "boolean")
        continue;
      const A = Uk(b.prevProp, _);
      let P = A || // If we're making this variant active, we want to always make it active
      y === c && b.isActive && !w && x || // If we removed a higher-priority variant (i is in reverse order)
      m > p && x, M = !1;
      const T = Array.isArray(_) ? _ : [_];
      let D = T.reduce(i(y), {});
      v === !1 && (D = {});
      const { prevResolvedValues: C = {} } = b, I = {
        ...C,
        ...D
      }, G = (j) => {
        P = !0, d.has(j) && (M = !0, d.delete(j)), b.needsAnimating[j] = !0;
        const Q = e.getValue(j);
        Q && (Q.liveStyle = !1);
      };
      for (const j in I) {
        const Q = D[j], q = C[j];
        if (f.hasOwnProperty(j))
          continue;
        let st = !1;
        Gc(Q) && Gc(q) ? st = !ab(Q, q) : st = Q !== q, st ? Q != null ? G(j) : d.add(j) : Q !== void 0 && d.has(j) ? G(j) : b.protectedKeys[j] = !0;
      }
      b.prevProp = _, b.prevResolvedValues = D, b.isActive && (f = { ...f, ...D }), s && e.blockInitialAnimation && (P = !1), P && (!(w && A) || M) && h.push(...T.map((j) => ({
        animation: j,
        options: { type: y }
      })));
    }
    if (d.size) {
      const m = {};
      if (typeof l.initial != "boolean") {
        const y = ho(e, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        y && y.transition && (m.transition = y.transition);
      }
      d.forEach((y) => {
        const b = e.getBaseTarget(y), _ = e.getValue(y);
        _ && (_.liveStyle = !0), m[y] = b ?? null;
      }), h.push({ animation: m });
    }
    let g = !!h.length;
    return s && (l.initial === !1 || l.initial === l.animate) && !e.manuallyAnimateOnMount && (g = !1), s = !1, g ? t(h) : Promise.resolve();
  }
  function a(c, l) {
    var u;
    if (n[c].isActive === l)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((d) => {
      var f;
      return (f = d.animationState) === null || f === void 0 ? void 0 : f.setActive(c, l);
    }), n[c].isActive = l;
    const h = r(c);
    for (const d in n)
      n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = If(), s = !0;
    }
  };
}
function Uk(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ab(t, e) : !1;
}
function es(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function If() {
  return {
    animate: es(!0),
    whileInView: es(),
    whileHover: es(),
    whileTap: es(),
    whileDrag: es(),
    whileFocus: es(),
    exit: es()
  };
}
class Gn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class Yk extends Gn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Wk(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ya(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let Gk = 0;
class Kk extends Gn {
  constructor() {
    super(...arguments), this.id = Gk++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === s)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Xk = {
  animation: {
    Feature: Yk
  },
  exit: {
    Feature: Kk
  }
};
function go(e, t, n, s = { passive: !0 }) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n);
}
function Ao(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const qk = (e) => (t) => xu(t) && e(t, Ao(t));
function Ns(e, t, n, s) {
  return go(e, t, qk(n), s);
}
function lb({ top: e, left: t, right: n, bottom: s }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: s }
  };
}
function Zk({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Qk(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), s = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
const ub = 1e-4, Jk = 1 - ub, tD = 1 + ub, hb = 0.01, eD = 0 - hb, nD = 0 + hb;
function me(e) {
  return e.max - e.min;
}
function sD(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Nf(e, t, n, s = 0.5) {
  e.origin = s, e.originPoint = Yt(t.min, t.max, e.origin), e.scale = me(n) / me(t), e.translate = Yt(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Jk && e.scale <= tD || isNaN(e.scale)) && (e.scale = 1), (e.translate >= eD && e.translate <= nD || isNaN(e.translate)) && (e.translate = 0);
}
function Wi(e, t, n, s) {
  Nf(e.x, t.x, n.x, s ? s.originX : void 0), Nf(e.y, t.y, n.y, s ? s.originY : void 0);
}
function $f(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + me(t);
}
function iD(e, t, n) {
  $f(e.x, t.x, n.x), $f(e.y, t.y, n.y);
}
function Vf(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + me(t);
}
function Ui(e, t, n) {
  Vf(e.x, t.x, n.x), Vf(e.y, t.y, n.y);
}
const Ff = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), $s = () => ({
  x: Ff(),
  y: Ff()
}), jf = () => ({ min: 0, max: 0 }), Xt = () => ({
  x: jf(),
  y: jf()
});
function $e(e) {
  return [e("x"), e("y")];
}
function tc(e) {
  return e === void 0 || e === 1;
}
function il({ scale: e, scaleX: t, scaleY: n }) {
  return !tc(e) || !tc(t) || !tc(n);
}
function is(e) {
  return il(e) || db(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function db(e) {
  return Bf(e.x) || Bf(e.y);
}
function Bf(e) {
  return e && e !== "0%";
}
function Hr(e, t, n) {
  const s = e - n, i = t * s;
  return n + i;
}
function Hf(e, t, n, s, i) {
  return i !== void 0 && (e = Hr(e, i, s)), Hr(e, n, s) + t;
}
function ol(e, t = 0, n = 1, s, i) {
  e.min = Hf(e.min, t, n, s, i), e.max = Hf(e.max, t, n, s, i);
}
function fb(e, { x: t, y: n }) {
  ol(e.x, t.translate, t.scale, t.originPoint), ol(e.y, n.translate, n.scale, n.originPoint);
}
const zf = 0.999999999999, Wf = 1.0000000000001;
function oD(e, t, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: c } = o.options;
    c && c.props.style && c.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && Fs(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (t.x *= r.x.scale, t.y *= r.y.scale, fb(e, r)), s && is(o.latestValues) && Fs(e, o.latestValues));
  }
  t.x < Wf && t.x > zf && (t.x = 1), t.y < Wf && t.y > zf && (t.y = 1);
}
function Vs(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Uf(e, t, n, s, i = 0.5) {
  const o = Yt(e.min, e.max, i);
  ol(e, t, n, o, s);
}
function Fs(e, t) {
  Uf(e.x, t.x, t.scaleX, t.scale, t.originX), Uf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function pb(e, t) {
  return lb(Qk(e.getBoundingClientRect(), t));
}
function rD(e, t, n) {
  const s = pb(e, n), { scroll: i } = t;
  return i && (Vs(s.x, i.offset.x), Vs(s.y, i.offset.y)), s;
}
const Yf = (e, t) => Math.abs(e - t);
function aD(e, t) {
  const n = Yf(e.x, t.x), s = Yf(e.y, t.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class gb {
  constructor(t, n, { transformPagePoint: s, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = nc(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, d = aD(u.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !d)
        return;
      const { point: f } = u, { timestamp: p } = oe;
      this.history.push({ ...f, timestamp: p });
      const { onStart: g, onMove: m } = this.handlers;
      h || (g && g(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, h) => {
      if (u.target instanceof Element && u.target.hasPointerCapture && u.pointerId !== void 0)
        try {
          if (!u.target.hasPointerCapture(u.pointerId))
            return;
        } catch {
        }
      this.lastMoveEvent = u, this.lastMoveEventInfo = ec(h, this.transformPagePoint), Ot.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, h) => {
      Fr(u, "release"), this.end();
      const { onEnd: d, onSessionEnd: f, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = nc(u.type === "pointercancel" || u.type === "lostpointercapture" ? this.lastMoveEventInfo : ec(h, this.transformPagePoint), this.history);
      this.startEvent && d && d(u, g), f && f(u, g);
    }, !xu(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = s;
    const o = Ao(t), r = ec(o, this.transformPagePoint), { point: a } = r, { timestamp: c } = oe;
    this.history = [{ ...a, timestamp: c }];
    const { onSessionStart: l } = n;
    l && l(t, nc(r, this.history)), Fr(t, "set"), this.removeListeners = So(Ns(t.currentTarget, "pointermove", this.handlePointerMove), Ns(t.currentTarget, "pointerup", this.handlePointerUp), Ns(t.currentTarget, "pointercancel", this.handlePointerUp), Ns(t.currentTarget, "lostpointercapture", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), zn(this.updatePoint);
  }
}
function ec(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Gf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function nc({ point: e }, t) {
  return {
    point: e,
    delta: Gf(e, mb(t)),
    offset: Gf(e, cD(t)),
    velocity: lD(t, 0.1)
  };
}
function cD(e) {
  return e[0];
}
function mb(e) {
  return e[e.length - 1];
}
function lD(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, s = null;
  const i = mb(e);
  for (; n >= 0 && (s = e[n], !(i.timestamp - s.timestamp > /* @__PURE__ */ rn(t))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ wn(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function uD(e, { min: t, max: n }, s) {
  return t !== void 0 && e < t ? e = s ? Yt(t, e, s.min) : Math.max(e, t) : n !== void 0 && e > n && (e = s ? Yt(n, e, s.max) : Math.min(e, n)), e;
}
function Kf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function hD(e, { top: t, left: n, bottom: s, right: i }) {
  return {
    x: Kf(e.x, n, i),
    y: Kf(e.y, t, s)
  };
}
function Xf(e, t) {
  let n = t.min - e.min, s = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, s] = [s, n]), { min: n, max: s };
}
function dD(e, t) {
  return {
    x: Xf(e.x, t.x),
    y: Xf(e.y, t.y)
  };
}
function fD(e, t) {
  let n = 0.5;
  const s = me(e), i = me(t);
  return i > s ? n = /* @__PURE__ */ Zs(t.min, t.max - s, e.min) : s > i && (n = /* @__PURE__ */ Zs(e.min, e.max - i, t.min)), An(0, 1, n);
}
function pD(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const rl = 0.35;
function gD(e = rl) {
  return e === !1 ? e = 0 : e === !0 && (e = rl), {
    x: qf(e, "left", "right"),
    y: qf(e, "top", "bottom")
  };
}
function qf(e, t, n) {
  return {
    min: Zf(e, t),
    max: Zf(e, n)
  };
}
function Zf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const mD = /* @__PURE__ */ new WeakMap();
class yD {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xt(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (u) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ao(u).point);
    }, o = (u, h) => {
      const { drag: d, dragPropagation: f, onDragStart: p } = this.getProps();
      if (d && !f && (this.openDragLock && this.openDragLock(), this.openDragLock = lC(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $e((m) => {
        let y = this.getAxisMotionValue(m).get() || 0;
        if (an.test(y)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const _ = b.layout.layoutBox[m];
            _ && (y = me(_) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[m] = y;
      }), p && Ot.postRender(() => p(u, h)), qc(this.visualElement, "transform");
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", !0);
    }, r = (u, h) => {
      const { dragPropagation: d, dragDirectionLock: f, onDirectionLock: p, onDrag: g } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: m } = h;
      if (f && this.currentDirection === null) {
        this.currentDirection = bD(m), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, m), this.updateAxis("y", h.point, m), this.visualElement.render(), g && g(u, h);
    }, a = (u, h) => this.stop(u, h), c = () => $e((u) => {
      var h;
      return this.getAnimationState(u) === "paused" && ((h = this.getAxisMotionValue(u).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new gb(t, {
      onSessionStart: i,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: l
    });
  }
  stop(t, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && Ot.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Go(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let r = this.originPoint[t] + s[t];
    this.constraints && this.constraints[t] && (r = uD(r, this.constraints[t], this.elastic[t])), o.set(r);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
    n && Ls(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = hD(i.layoutBox, n) : this.constraints = !1, this.elastic = gD(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && $e((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = pD(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ls(t))
      return !1;
    const s = t.current;
    Hn(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = rD(s, i.root, this.visualElement.getTransformPagePoint());
    let r = dD(i.layout.layoutBox, o);
    if (n) {
      const a = n(Zk(r));
      this.hasMutatedConstraints = !!a, a && (r = lb(a));
    }
    return r;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, l = $e((u) => {
      if (!Go(u, n, this.currentDirection))
        return;
      let h = c && c[u] || {};
      r && (h = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, f = i ? 40 : 1e7, p = {
        type: "inertia",
        velocity: s ? t[u] : 0,
        bounceStiffness: d,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(u, p);
    });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(t, n) {
    const s = this.getAxisMotionValue(t);
    return qc(this.visualElement, t), s.start(Ou(t, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    $e((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    $e((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(t, (s.initial ? s.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    $e((n) => {
      const { drag: s } = this.getProps();
      if (!Go(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - Yt(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!Ls(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    $e((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const c = a.get();
        i[r] = fD({ min: c, max: c }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), $e((r) => {
      if (!Go(r, t, null))
        return;
      const a = this.getAxisMotionValue(r), { min: c, max: l } = this.constraints[r];
      a.set(Yt(c, l, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    mD.set(this.visualElement, this);
    const t = this.visualElement.current, n = Ns(t, "pointerdown", (c) => {
      const { drag: l, dragListener: u = !0 } = this.getProps();
      l && u && this.start(c);
    }), s = () => {
      const { dragConstraints: c } = this.getProps();
      Ls(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), Ot.read(s);
    const r = go(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: l }) => {
      this.isDragging && l && ($e((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += c[u].translate, h.set(h.get() + c[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = rl, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function Go(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function bD(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class vD extends Gn {
  constructor(t) {
    super(t), this.removeGroupControls = Ae, this.removeListeners = Ae, this.controls = new yD(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ae;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qf = (e) => (t, n) => {
  e && Ot.postRender(() => e(t, n));
};
class xD extends Gn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ae;
  }
  onPointerDown(t) {
    this.session = new gb(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint()
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Qf(t),
      onStart: Qf(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && Ot.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ns(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const fr = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Jf(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Pi = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (it.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Jf(e, t.target.x), s = Jf(e, t.target.y);
    return `${n}% ${s}%`;
  }
}, _D = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const s = e, i = Wn.parse(e);
    if (i.length > 5)
      return s;
    const o = Wn.createTransformer(e), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, c = n.y.scale * t.y;
    i[0 + r] /= a, i[1 + r] /= c;
    const l = Yt(a, c, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= l), typeof i[3 + r] == "number" && (i[3 + r] /= l), o(i);
  }
};
class wD extends f0 {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = t;
    TM(SD), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), fr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, r = s.projection;
    return r && (r.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? r.promote() : r.relegate() || Ot.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), ru.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function yb(e) {
  const [t, n] = ty(), s = Tt(Ql);
  return E.jsx(wD, { ...e, layoutGroup: s, switchLayoutGroup: Tt(cy), isPresent: t, safeToRemove: n });
}
const SD = {
  borderRadius: {
    ...Pi,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Pi,
  borderTopRightRadius: Pi,
  borderBottomLeftRadius: Pi,
  borderBottomRightRadius: Pi,
  boxShadow: _D
};
function AD(e, t, n) {
  const s = fe(e) ? e : fo(e);
  return s.start(Ou("", s, t, n)), s.animation;
}
function PD(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const TD = (e, t) => e.depth - t.depth;
class MD {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    _u(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    wu(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(TD), this.isDirty = !1, this.children.forEach(t);
  }
}
function CD(e, t) {
  const n = cn.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= t && (zn(s), e(o - t));
  };
  return Ot.read(s, !0), () => zn(s);
}
const bb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], kD = bb.length, tp = (e) => typeof e == "string" ? parseFloat(e) : e, ep = (e) => typeof e == "number" || it.test(e);
function DD(e, t, n, s, i, o) {
  i ? (e.opacity = Yt(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    ED(s)
  ), e.opacityExit = Yt(t.opacity !== void 0 ? t.opacity : 1, 0, OD(s))) : o && (e.opacity = Yt(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let r = 0; r < kD; r++) {
    const a = `border${bb[r]}Radius`;
    let c = np(t, a), l = np(n, a);
    if (c === void 0 && l === void 0)
      continue;
    c || (c = 0), l || (l = 0), c === 0 || l === 0 || ep(c) === ep(l) ? (e[a] = Math.max(Yt(tp(c), tp(l), s), 0), (an.test(l) || an.test(c)) && (e[a] += "%")) : e[a] = l;
  }
  (t.rotate || n.rotate) && (e.rotate = Yt(t.rotate || 0, n.rotate || 0, s));
}
function np(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ED = /* @__PURE__ */ vb(0, 0.5, $y), OD = /* @__PURE__ */ vb(0.5, 0.95, Ae);
function vb(e, t, n) {
  return (s) => s < e ? 0 : s > t ? 1 : n(/* @__PURE__ */ Zs(e, t, s));
}
function sp(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ne(e, t) {
  sp(e.x, t.x), sp(e.y, t.y);
}
function ip(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function op(e, t, n, s, i) {
  return e -= t, e = Hr(e, 1 / n, s), i !== void 0 && (e = Hr(e, 1 / i, s)), e;
}
function RD(e, t = 0, n = 1, s = 0.5, i, o = e, r = e) {
  if (an.test(t) && (t = parseFloat(t), t = Yt(r.min, r.max, t / 100) - r.min), typeof t != "number")
    return;
  let a = Yt(o.min, o.max, s);
  e === o && (a -= t), e.min = op(e.min, t, n, a, i), e.max = op(e.max, t, n, a, i);
}
function rp(e, t, [n, s, i], o, r) {
  RD(e, t[n], t[s], t[i], t.scale, o, r);
}
const LD = ["x", "scaleX", "originX"], ID = ["y", "scaleY", "originY"];
function ap(e, t, n, s) {
  rp(e.x, t, LD, n ? n.x : void 0, s ? s.x : void 0), rp(e.y, t, ID, n ? n.y : void 0, s ? s.y : void 0);
}
function cp(e) {
  return e.translate === 0 && e.scale === 1;
}
function xb(e) {
  return cp(e.x) && cp(e.y);
}
function lp(e, t) {
  return e.min === t.min && e.max === t.max;
}
function ND(e, t) {
  return lp(e.x, t.x) && lp(e.y, t.y);
}
function up(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function _b(e, t) {
  return up(e.x, t.x) && up(e.y, t.y);
}
function hp(e) {
  return me(e.x) / me(e.y);
}
function dp(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class $D {
  constructor() {
    this.members = [];
  }
  add(t) {
    _u(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (wu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(t, n) {
    const s = this.lead;
    if (t !== s && (this.prevLead = s, this.lead = t, t.show(), s)) {
      s.instance && s.scheduleRender(), t.scheduleRender(), t.resumeFrom = s, n && (t.resumeFrom.preserveOpacity = !0), s.snapshot && (t.snapshot = s.snapshot, t.snapshot.latestValues = s.animationValues || s.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: s } = t;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function VD(e, t, n) {
  let s = "";
  const i = e.x.translate / t.x, o = e.y.translate / t.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (t.x !== 1 || t.y !== 1) && (s += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: l, rotate: u, rotateX: h, rotateY: d, skewX: f, skewY: p } = n;
    l && (s = `perspective(${l}px) ${s}`), u && (s += `rotate(${u}deg) `), h && (s += `rotateX(${h}deg) `), d && (s += `rotateY(${d}deg) `), f && (s += `skewX(${f}deg) `), p && (s += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x, c = e.y.scale * t.y;
  return (a !== 1 || c !== 1) && (s += `scale(${a}, ${c})`), s || "none";
}
const sc = ["", "X", "Y", "Z"], FD = { visibility: "hidden" }, fp = 1e3;
let jD = 0;
function ic(e, t, n, s) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), s && (s[e] = 0));
}
function wb(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Dy(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ot, !(i || o));
  }
  const { parent: s } = e;
  s && !s.hasCheckedOptimisedAppear && wb(s);
}
function Sb({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = t == null ? void 0 : t()) {
      this.id = jD++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(zD), this.nodes.forEach(KD), this.nodes.forEach(XD), this.nodes.forEach(WD);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new MD());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new Su()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const c = this.eventHandlers.get(r);
      c && c.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = PD(r), this.instance = r;
      const { layoutId: c, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (l || c) && (this.isLayoutDirty = !0), e) {
        let h;
        const d = () => this.root.updateBlockedByResize = !1;
        e(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = CD(d, 250), fr.hasAnimatedSinceResize && (fr.hasAnimatedSinceResize = !1, this.nodes.forEach(gp));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && u && (c || l) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || u.getDefaultTransition() || tE, { onLayoutAnimationStart: m, onLayoutAnimationComplete: y } = u.getProps(), b = !this.targetLayout || !_b(this.targetLayout, p), _ = !d && f;
        if (this.options.layoutRoot || this.resumeFrom || _ || d && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, _);
          const x = {
            ...yu(g, "layout"),
            onPlay: m,
            onComplete: y
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          d || gp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, zn(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(qD), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && wb(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c)
        return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(pp);
        return;
      }
      this.isUpdating || this.nodes.forEach(YD), this.isUpdating = !1, this.nodes.forEach(GD), this.nodes.forEach(BD), this.nodes.forEach(HD), this.clearAllSnapshots();
      const a = cn.now();
      oe.delta = An(0, 1e3 / 60, a - oe.timestamp), oe.timestamp = a, oe.isProcessing = !0, Xa.update.process(oe), Xa.preRender.process(oe), Xa.render.process(oe), oe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, ru.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(UD), this.sharedNodes.forEach(ZD);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ot.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ot.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !me(this.snapshot.measuredBox.x) && !me(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Xt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a) {
        const c = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !xb(this.projectionDelta), c = this.getTransformTemplate(), l = c ? c(this.latestValues, "") : void 0, u = l !== this.prevTransformTemplateValue;
      r && (a || is(this.latestValues) || u) && (i(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return r && (c = this.removeTransform(c)), eE(c), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var r;
      const { visualElement: a } = this.options;
      if (!a)
        return Xt();
      const c = a.measureViewportBox();
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(nE))) {
        const { scroll: u } = this.root;
        u && (Vs(c.x, u.offset.x), Vs(c.y, u.offset.y));
      }
      return c;
    }
    removeElementScroll(r) {
      var a;
      const c = Xt();
      if (Ne(c, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return c;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: h, options: d } = u;
        u !== this.root && h && d.layoutScroll && (h.wasRoot && Ne(c, r), Vs(c.x, h.offset.x), Vs(c.y, h.offset.y));
      }
      return c;
    }
    applyTransform(r, a = !1) {
      const c = Xt();
      Ne(c, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Fs(c, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), is(u.latestValues) && Fs(c, u.latestValues);
      }
      return is(this.latestValues) && Fs(c, this.latestValues), c;
    }
    removeTransform(r) {
      const a = Xt();
      Ne(a, r);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !is(l.latestValues))
          continue;
        il(l.latestValues) && l.updateSnapshot();
        const u = Xt(), h = l.measurePageBox();
        Ne(u, h), ap(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
      }
      return is(this.latestValues) && ap(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== oe.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== c;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (this.resolvedRelativeTargetAt = oe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xt(), this.relativeTargetOrigin = Xt(), Ui(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Xt(), this.targetWithTransforms = Xt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), iD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ne(this.target, this.layout.layoutBox), fb(this.target, this.targetDelta)) : Ne(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xt(), this.relativeTargetOrigin = Xt(), Ui(this.relativeTargetOrigin, this.target, f.target), Ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || il(this.parent.latestValues) || db(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), c = !!this.resumingFrom || this !== a;
      let l = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (l = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === oe.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || h))
        return;
      Ne(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, f = this.treeScale.y;
      oD(this.layoutCorrected, this.treeScale, this.path, c), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Xt());
      const { target: p } = a;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ip(this.prevProjectionDelta.x, this.projectionDelta.x), ip(this.prevProjectionDelta.y, this.projectionDelta.y)), Wi(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !dp(this.projectionDelta.x, this.prevProjectionDelta.x) || !dp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), r) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = $s(), this.projectionDelta = $s(), this.projectionDeltaWithTransform = $s();
    }
    setAnimationOrigin(r, a = !1) {
      const c = this.snapshot, l = c ? c.latestValues : {}, u = { ...this.latestValues }, h = $s();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = Xt(), f = c ? c.source : void 0, p = this.layout ? this.layout.source : void 0, g = f !== p, m = this.getStack(), y = !m || m.members.length <= 1, b = !!(g && !y && this.options.crossfade === !0 && !this.path.some(JD));
      this.animationProgress = 0;
      let _;
      this.mixTargetDelta = (x) => {
        const v = x / 1e3;
        mp(h.x, r.x, v), mp(h.y, r.y, v), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ui(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), QD(this.relativeTarget, this.relativeTargetOrigin, d, v), _ && ND(this.relativeTarget, _) && (this.isProjectionDirty = !1), _ || (_ = Xt()), Ne(_, this.relativeTarget)), g && (this.animationValues = u, DD(u, l, this.latestValues, v, b, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = v;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (zn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ot.update(() => {
        fr.hasAnimatedSinceResize = !0, this.currentAnimation = AD(0, fp, {
          ...r,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(fp), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: c, layout: l, latestValues: u } = r;
      if (!(!a || !c || !l)) {
        if (this !== r && this.layout && l && Ab(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          c = this.target || Xt();
          const h = me(this.layout.layoutBox.x);
          c.x.min = r.target.x.min, c.x.max = c.x.min + h;
          const d = me(this.layout.layoutBox.y);
          c.y.min = r.target.y.min, c.y.max = c.y.min + d;
        }
        Ne(a, c), Fs(a, u), Wi(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new $D()), this.sharedNodes.get(r).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: c } = {}) {
      const l = this.getStack();
      l && l.promote(this, c), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: c } = r;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0), !a)
        return;
      const l = {};
      c.z && ic("z", r, l, this.animationValues);
      for (let u = 0; u < sc.length; u++)
        ic(`rotate${sc[u]}`, r, l, this.animationValues), ic(`skew${sc[u]}`, r, l, this.animationValues);
      r.render();
      for (const u in l)
        r.setStaticValue(u, l[u]), this.animationValues && (this.animationValues[u] = l[u]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, c;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return FD;
      const l = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, l.opacity = "", l.pointerEvents = hr(r == null ? void 0 : r.pointerEvents) || "", l.transform = u ? u(this.latestValues, "") : "none", l;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = hr(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !is(this.latestValues) && (g.transform = u ? u({}, "") : "none", this.hasProjected = !1), g;
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), l.transform = VD(this.projectionDeltaWithTransform, this.treeScale, d), u && (l.transform = u(d, l.transform));
      const { x: f, y: p } = this.projectionDelta;
      l.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`, h.animationValues ? l.opacity = h === this ? (c = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : l.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const g in lo) {
        if (d[g] === void 0)
          continue;
        const { correct: m, applyTo: y, isCSSVariable: b } = lo[g], _ = l.transform === "none" ? d[g] : m(d[g], h);
        if (y) {
          const x = y.length;
          for (let v = 0; v < x; v++)
            l[y[v]] = _;
        } else
          b ? this.options.visualElement.renderState.vars[g] = _ : l[g] = _;
      }
      return this.options.layoutId && (l.pointerEvents = h === this ? hr(r == null ? void 0 : r.pointerEvents) || "" : "none"), l;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(pp), this.root.sharedNodes.clear();
    }
  };
}
function BD(e) {
  e.updateLayout();
}
function HD(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = e.layout, { animationType: o } = e.options, r = n.source !== e.layout.source;
    o === "size" ? $e((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], f = me(d);
      d.min = s[h].min, d.max = d.min + f;
    }) : Ab(o, n.layoutBox, s) && $e((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], f = me(s[h]);
      d.max = d.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[h].max = e.relativeTarget[h].min + f);
    });
    const a = $s();
    Wi(a, s, n.layoutBox);
    const c = $s();
    r ? Wi(c, e.applyTransform(i, !0), n.measuredBox) : Wi(c, s, n.layoutBox);
    const l = !xb(a);
    let u = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: f } = h;
        if (d && f) {
          const p = Xt();
          Ui(p, n.layoutBox, d.layoutBox);
          const g = Xt();
          Ui(g, s, f.layoutBox), _b(p, g) || (u = !0), h.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = p, e.relativeParent = h);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: s } = e.options;
    s && s();
  }
  e.options.transition = void 0;
}
function zD(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function WD(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function UD(e) {
  e.clearSnapshot();
}
function pp(e) {
  e.clearMeasurements();
}
function YD(e) {
  e.isLayoutDirty = !1;
}
function GD(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function gp(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function KD(e) {
  e.resolveTargetDelta();
}
function XD(e) {
  e.calcProjection();
}
function qD(e) {
  e.resetSkewAndRotation();
}
function ZD(e) {
  e.removeLeadSnapshot();
}
function mp(e, t, n) {
  e.translate = Yt(t.translate, 0, n), e.scale = Yt(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function yp(e, t, n, s) {
  e.min = Yt(t.min, n.min, s), e.max = Yt(t.max, n.max, s);
}
function QD(e, t, n, s) {
  yp(e.x, t.x, n.x, s), yp(e.y, t.y, n.y, s);
}
function JD(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const tE = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, bp = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), vp = bp("applewebkit/") && !bp("chrome/") ? Math.round : Ae;
function xp(e) {
  e.min = vp(e.min), e.max = vp(e.max);
}
function eE(e) {
  xp(e.x), xp(e.y);
}
function Ab(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !sD(hp(t), hp(n), 0.2);
}
function nE(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const sE = Sb({
  attachResizeListener: (e, t) => go(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), oc = {
  current: void 0
}, Pb = Sb({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!oc.current) {
      const e = new sE({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), oc.current = e;
    }
    return oc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), iE = {
  pan: {
    Feature: xD
  },
  drag: {
    Feature: vD,
    ProjectionNode: Pb,
    MeasureLayout: yb
  }
};
function _p(e, t, n) {
  const { props: s } = e;
  e.animationState && s.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && Ot.postRender(() => o(t, Ao(t)));
}
class oE extends Gn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = sC(t, (n, s) => (_p(this.node, s, "Start"), (i) => _p(this.node, i, "End"))));
  }
  unmount() {
  }
}
class rE extends Gn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = So(go(this.node.current, "focus", () => this.onFocus()), go(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function wp(e, t, n) {
  const { props: s } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && s.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && Ot.postRender(() => o(t, Ao(t)));
}
class aE extends Gn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = aC(t, (n, s) => (wp(this.node, s, "Start"), (i, { success: o }) => wp(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const al = /* @__PURE__ */ new WeakMap(), rc = /* @__PURE__ */ new WeakMap(), cE = (e) => {
  const t = al.get(e.target);
  t && t(e);
}, lE = (e) => {
  e.forEach(cE);
};
function uE({ root: e, ...t }) {
  const n = e || document;
  rc.has(n) || rc.set(n, {});
  const s = rc.get(n), i = JSON.stringify(t);
  return s[i] || (s[i] = new IntersectionObserver(lE, { root: e, ...t })), s[i];
}
function hE(e, t, n) {
  const s = uE(t);
  return al.set(e, n), s.observe(e), () => {
    al.delete(e), s.unobserve(e);
  };
}
const dE = {
  some: 0,
  all: 1
};
class fE extends Gn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = t, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : dE[i]
    }, a = (c) => {
      const { isIntersecting: l } = c;
      if (this.isInView === l || (this.isInView = l, o && !l && this.hasEnteredView))
        return;
      l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), d = l ? u : h;
      d && d(c);
    };
    return hE(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(pE(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function pE({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const gE = {
  inView: {
    Feature: fE
  },
  tap: {
    Feature: aE
  },
  focus: {
    Feature: rE
  },
  hover: {
    Feature: oE
  }
}, mE = {
  layout: {
    ProjectionNode: Pb,
    MeasureLayout: yb
  }
}, cl = { current: null }, Tb = { current: !1 };
function yE() {
  if (Tb.current = !0, !!eu)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => cl.current = e.matches;
      e.addListener(t), t();
    } else
      cl.current = !1;
}
const bE = [...Zy, he, Wn], vE = (e) => bE.find(qy(e)), xE = /* @__PURE__ */ new WeakMap();
function _E(e, t, n) {
  for (const s in t) {
    const i = t[s], o = n[s];
    if (fe(i))
      e.addValue(s, i), process.env.NODE_ENV === "development" && ga(i.version === "12.4.7", `Attempting to mix Motion versions ${i.version} with 12.4.7 may not work as expected.`);
    else if (fe(o))
      e.addValue(s, fo(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(s)) {
        const r = e.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = e.getStaticValue(s);
        e.addValue(s, fo(r !== void 0 ? r : i, { owner: e }));
      }
  }
  for (const s in n)
    t[s] === void 0 && e.removeValue(s);
  return t;
}
const Sp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class wE {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, s) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ku, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = cn.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, Ot.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: l, onUpdate: u } = r;
    this.onUpdate = u, this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = s, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = ba(n), this.isVariantNode = ry(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: h, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const p = d[f];
      c[f] !== void 0 && fe(p) && p.set(c[f], !1);
    }
  }
  mount(t) {
    this.current = t, xE.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Tb.current || yE(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : cl.current, process.env.NODE_ENV !== "production" && ga(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), zn(this.notifyUpdate), zn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const s = Ss.has(t);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && Ot.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), o(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Qs) {
      const n = Qs[t];
      if (!n)
        continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[t] && i && s(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xt();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < Sp.length; s++) {
      const i = Sp[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = t[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = _E(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const s = this.values.get(t);
    n !== s && (s && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let s = this.values.get(t);
    return s === void 0 && n !== void 0 && (s = fo(n === null ? void 0 : n, { owner: this }), this.addValue(t, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var s;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (s = this.getBaseTargetFromProps(this.props, t)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (Ky(i) || Fy(i)) ? i = parseFloat(i) : !vE(i) && Wn.test(n) && (i = Uy(t, n)), this.setBaseTarget(t, fe(i) ? i.get() : i)), fe(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: s } = this.props;
    let i;
    if (typeof s == "string" || typeof s == "object") {
      const r = gu(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (i = r[t]);
    }
    if (s && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !fe(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Su()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Mb extends wE {
  constructor() {
    super(...arguments), this.KeyframeResolver = Qy;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: s }) {
    delete n[t], delete s[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    fe(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function SE(e) {
  return window.getComputedStyle(e);
}
class AE extends Mb {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = yy;
  }
  readValueFromInstance(t, n) {
    if (Ss.has(n)) {
      const s = Cu(n);
      return s && s.default || 0;
    } else {
      const s = SE(t), i = (au(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return pb(t, n);
  }
  build(t, n, s) {
    uu(t, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return mu(t, n, s);
  }
}
class PE extends Mb {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Xt, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && my(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ss.has(n)) {
      const s = Cu(n);
      return s && s.default || 0;
    }
    return n = by.has(n) ? n : ou(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return xy(t, n, s);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && Ot.postRender(this.updateDimensions);
  }
  build(t, n, s) {
    fu(t, n, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(t, n, s, i) {
    vy(t, n, s, i);
  }
  mount(t) {
    this.isSVGTag = pu(t.tagName), super.mount(t);
  }
}
const TE = (e, t) => du(e) ? new PE(t) : new AE(t, {
  allowProjection: e !== Gp
}), ME = /* @__PURE__ */ qM({
  ...Xk,
  ...gE,
  ...iE,
  ...mE
}, TE), Cb = /* @__PURE__ */ dM(ME), kb = Pe(void 0), Db = ({
  children: e,
  onClose: t = () => {
  }
}) => {
  const [n, s] = yt(!0), i = () => {
    s(!1), t();
  };
  return /* @__PURE__ */ E.jsx(kb.Provider, { value: { handleClose: i, isVisible: n, setIsVisible: s }, children: e });
};
Db.displayName = "HToastPopupProvider";
const CE = ({ children: e, onClose: t, className: n = "", style: s = {} }) => /* @__PURE__ */ E.jsx(Db, { onClose: t, children: /* @__PURE__ */ E.jsx(
  Cb.div,
  {
    className: n,
    style: s,
    initial: { opacity: 0, y: 50, height: 0 },
    animate: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.3 },
    layout: !0,
    children: e
  }
) });
CE.displayName = "HToastPopupArea";
const Eb = () => {
  const e = Tt(kb);
  if (!e)
    throw new Error("useToastContext must be used within a ToastPopupProvider");
  return e;
}, kE = ({
  duration: e = 3e3,
  className: t = "",
  style: n = {},
  children: s
}) => {
  const { setIsVisible: i, isVisible: o, handleClose: r } = Eb();
  return vt(() => {
    const a = setTimeout(() => {
      i(!1), r();
    }, e);
    return () => clearTimeout(a);
  }, [e]), /* @__PURE__ */ E.jsx(ny, { children: o && /* @__PURE__ */ E.jsx(
    Cb.div,
    {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: 0.3 },
      className: `rounded-lg shadow-lg overflow-hidden w-full md:w-96 text-[#888] bg-black/70 ${t}`,
      role: "alert",
      "aria-live": "assertive",
      style: n,
      children: s
    }
  ) });
};
kE.displayName = "HToastPopup";
const DE = ({
  className: e = "",
  children: t,
  style: n = {}
}) => /* @__PURE__ */ E.jsx("div", { style: n, className: `fixed bottom-4 right-4 z-[200] p-4 space-y-4 flex flex-col ${e}`, children: /* @__PURE__ */ E.jsx(ny, { children: /* @__PURE__ */ E.jsx(E.Fragment, { children: t }) }) });
DE.displayName = "HToastPopupContainer";
const EE = ({ children: e, className: t = "", style: n = {} }) => {
  const { handleClose: s } = Eb();
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      onClick: s,
      className: `focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full p-1 text-[#fff] ${t}`,
      style: n,
      "aria-label": "Close",
      children: e
    }
  );
};
EE.displayName = "HToastPopupCloseButton";
const OE = ({ target: e, children: t, className: n = "", style: s = {} }) => {
  const i = (a) => {
    var c;
    (c = e.current) == null || c.show(a);
  }, o = (a) => {
    var c;
    (c = e.current) == null || c.updatePosition(a);
  }, r = () => {
    var a;
    (a = e.current) == null || a.hide();
  };
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      onMouseEnter: i,
      onMouseMove: o,
      onMouseLeave: r,
      className: n,
      style: s,
      children: t
    }
  );
};
OE.displayName = "HTooltipArea";
const RE = ri((e, t) => {
  const [n, s] = yt(!1), [i, o] = yt({
    x: 0,
    y: 0
  });
  zs(t, () => ({
    show(a) {
      o({ x: a.clientX, y: a.clientY }), s(!0);
    },
    hide() {
      s(!1);
    },
    updatePosition(a) {
      n && o({ x: a.clientX, y: a.clientY });
    }
  }));
  const r = {
    position: "fixed",
    // Changed from 'absolute' to 'fixed'
    top: i.y + 10,
    // Slight offset for better visibility
    left: i.x + 10,
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px",
    borderRadius: "4px",
    zIndex: 1e3,
    pointerEvents: "none"
    // Ensure tooltip doesn't intercept mouse events
  };
  return n ? /* @__PURE__ */ E.jsx(
    "div",
    {
      style: {
        ...r,
        ...e.style
      },
      className: e.className,
      children: e.children
    }
  ) : null;
});
RE.displayName = "HTooltip";
const LE = ri((e, t) => {
  const {
    backdrop: n,
    escBeforeFunc: s,
    escAfterFunc: i,
    onBackdropClick: o,
    children: r,
    className: a = "",
    style: c = {}
  } = e, l = bt(null), u = async () => {
    l.current && l.current.close();
  }, h = () => {
    l.current && l.current.showModal();
  };
  zs(t, () => ({
    open: h,
    closeFunc: u
  })), vt(() => (n && document.documentElement.style.setProperty("--modal-backdrop-color", n), () => {
    n && document.documentElement.style.removeProperty("--modal-backdrop-color");
  }), [n]);
  const d = async (p) => {
    p.key === "Escape" && (p.preventDefault(), s && await s(), u(), i && await i());
  }, f = (p) => {
    p.target === l.current && (o == null || o(p));
  };
  return /* @__PURE__ */ E.jsx(
    "dialog",
    {
      ref: l,
      className: `h-modal ${a}`,
      onKeyDown: d,
      onClick: f,
      style: c,
      children: r && r(u)
    }
  );
});
LE.displayName = "HModal";
const IE = ({
  target: e,
  beforeFunc: t,
  afterFunc: n,
  children: s,
  className: i = "",
  style: o = {},
  disabled: r = !1
}) => {
  const a = async () => {
    var c;
    t && await t(), (c = e.current) == null || c.open(), n && n();
  };
  return /* @__PURE__ */ E.jsx("button", { onClick: a, type: "button", className: i, style: o, disabled: r, children: s || "모달 열기" });
};
IE.displayName = "HModalOpenButton";
const NE = ({
  target: e,
  beforeFunc: t,
  afterFunc: n,
  children: s,
  className: i = "",
  style: o = {}
}) => {
  const r = async () => {
    var a;
    t && await t(), (a = e.current) == null || a.closeFunc(), n && n();
  };
  return /* @__PURE__ */ E.jsx("button", { onClick: r, type: "button", className: i, style: o, children: s || "닫기" });
};
NE.displayName = "HModalCloseButton";
const $E = "button", VE = (e) => {
  const {
    isAuth: t,
    noAuthList: n,
    originalEventTarget: s = $E,
    originalEventTargetEvent: i = null,
    onAuthVerificationResult: o,
    children: r
  } = e, a = bt(null), c = bt(void 0), l = bt(null), u = () => t ? !(n != null && n.includes(t)) : !0;
  function h(p) {
    var m;
    console.debug(p);
    const g = (m = a.current) == null ? void 0 : m.querySelector(s);
    g && (g.removeEventListener("click", c.current, {
      capture: !0
    }), g.click(), g.addEventListener("click", c.current, {
      capture: !0
    }));
  }
  function d(p) {
    p.preventDefault(), p.stopPropagation();
    const g = u();
    o == null || o({
      event: p,
      result: g,
      originalFunc: h
    });
  }
  const f = (() => {
    if (!r || !Yp(r)) return r;
    const p = r, g = p.props, m = i ? g[i] : g.onClick;
    return l.current = m || null, p0(p, {
      // ...가능하면 onClick 다시 세팅, etc.
    });
  })();
  return vt(() => {
    const p = a.current;
    if (!p) return;
    const g = p.querySelector(s);
    if (g)
      return c.current = d, g.addEventListener("click", c.current, {
        capture: !0
      }), () => {
        g.removeEventListener(
          "click",
          c.current,
          { capture: !0 }
        );
      };
  }, [t, n, s, i, o, d]), /* @__PURE__ */ E.jsx("div", { ref: a, className: e.className || "", style: e.style || {}, children: f });
};
VE.displayName = "AuthVerifyWrapper";
function FE(e) {
  const {
    data: t,
    value: n,
    inputValue: s,
    onChange: i,
    name: o,
    className: r = "",
    labelClassName: a = "",
    inputClassName: c = "",
    labelStyle: l = {},
    disabled: u,
    readOnly: h,
    required: d,
    children: f,
    style: p = {}
  } = e, g = Kr(), m = n.some((b) => Yc(b, t)), y = () => {
    i(m ? n.filter((b) => !Yc(b, t)) : [...n, t]);
  };
  return /* @__PURE__ */ E.jsxs("div", { className: r, style: p, children: [
    /* @__PURE__ */ E.jsx("label", { htmlFor: g, className: a, style: l, children: typeof f == "function" ? f({ isActive: m }) : f }),
    /* @__PURE__ */ E.jsx(
      "input",
      {
        id: g,
        type: "checkbox",
        name: o,
        checked: m,
        onChange: y,
        disabled: u,
        readOnly: h,
        required: d,
        className: `h-input-checkbox ${c || ""}`,
        value: s
      }
    )
  ] });
}
FE.displayName = "HInputCheckbox";
const TR = ({ children: e, style: t = {}, className: n = "" }) => /* @__PURE__ */ E.jsx("div", { style: { position: "relative", ...t }, className: n, children: e }), MR = ({ value: e, style: t = {}, className: n = "" }) => /* @__PURE__ */ E.jsx("div", { style: {
  width: `${e}%`,
  height: "100%",
  ...t
}, className: n });
function jE(e) {
  return e.tag === "textarea";
}
function BE(e) {
  return !e.tag || e.tag === "input";
}
const HE = ri((e, t) => {
  const { maxLength: n, onUpdateModelValue: s, value: i, className: o = "", style: r = {} } = e, a = i && i.length > n ? i.slice(0, n) : i || "", [c, l] = yt(a.length);
  vt(() => {
    if (i && i.length > n) {
      const p = i.slice(0, n);
      l(p.length), s && s(p);
    } else
      l(i ? i.length : 0);
  }, [i, n, s]);
  const u = bt(null), h = bt(null), d = (p) => {
    let g = p.target.value;
    g.length > n && (g = g.slice(0, n), u.current && (u.current.value = g)), l(g.length), s && s(g);
  }, f = (p) => {
    let g = p.target.value;
    g.length > n && (g = g.slice(0, n), h.current && (h.current.value = g)), l(g.length), s && s(g);
  };
  return jE(e) ? (zs(t, () => h.current), /* @__PURE__ */ E.jsx("div", { className: o, style: r, children: e.children({
    currentLength: c,
    maxLength: n,
    inputRef: h,
    onChange: f,
    value: a
  }) })) : BE(e) ? (zs(t, () => u.current), /* @__PURE__ */ E.jsx("div", { className: o, style: r, children: e.children({
    currentLength: c,
    maxLength: n,
    inputRef: u,
    onChange: d,
    value: a
  }) })) : null;
});
HE.displayName = "HTextCounterArea";
const Ob = Pe(void 0), zE = ({
  children: e,
  value: t = null,
  currentTime: n = 0
}) => {
  const [s, i] = yt(null), [o, r] = yt("");
  vt(() => {
    i(t);
  }, [t]), vt(() => {
    if (s)
      if (s.type.startsWith("image/")) {
        const c = new FileReader();
        c.onloadend = () => {
          r(c.result);
        }, c.readAsDataURL(s);
      } else if (s.type.startsWith("video/")) {
        const c = URL.createObjectURL(s), l = document.createElement("video");
        l.style.position = "absolute", l.style.left = "-9999px", l.preload = "metadata", l.src = c, l.addEventListener("loadeddata", () => {
          l.currentTime = n;
        }), l.addEventListener("seeked", () => {
          const u = document.createElement("canvas");
          u.width = l.videoWidth / 2, u.height = l.videoHeight / 2;
          const h = u.getContext("2d");
          h ? (h.drawImage(l, 0, 0, u.width, u.height), r(u.toDataURL("image/png"))) : r(""), l.remove(), URL.revokeObjectURL(c);
        }), l.addEventListener("error", () => {
          r(""), l.remove(), URL.revokeObjectURL(c);
        }), document.body.appendChild(l), l.load();
      } else
        r("");
    else
      r("");
  }, [s, n]);
  const a = () => {
    i(null);
  };
  return /* @__PURE__ */ E.jsx(Ob.Provider, { value: { file: s, setFile: i }, children: e({ thumbnail: o, fileRemoveHandler: a, file: s }) });
};
zE.displayName = "HSingleFileUploadArea";
const WE = ({
  id: e,
  name: t,
  sizeLimit: n = 1 / 0,
  accept: s,
  onSizeExceeded: i,
  onFileUploaded: o,
  onCorruptedFile: r,
  style: a = {},
  className: c = ""
}) => {
  const l = bt(null), { file: u, setFile: h } = Tt(Ob);
  vt(() => {
    if (l.current && u) {
      const f = new DataTransfer();
      f.items.add(u), l.current.files = f.files;
    } else
      l.current && (l.current.value = "");
  }, [u]);
  const d = (f) => {
    const p = f.target.files;
    if (!p || p.length === 0) return;
    const g = p[0];
    if (g.size > n) {
      if (i == null || i(n, g.size), l.current && u) {
        const m = new DataTransfer();
        m.items.add(u), l.current.files = m.files;
      } else
        l.current && (l.current.value = "");
      return;
    }
    if (g.size === 0) {
      if (r == null || r(g), l.current && u) {
        const m = new DataTransfer();
        m.items.add(u), l.current.files = m.files;
      } else
        l.current && (l.current.value = "");
      return;
    }
    o == null || o(g), h(g);
  };
  return /* @__PURE__ */ E.jsx(
    "input",
    {
      type: "file",
      id: e,
      name: t,
      ref: l,
      accept: s,
      onChange: d,
      className: c,
      style: a
    }
  );
};
WE.displayName = "HSingleFileUploadInput";
const Rb = Pe(void 0), UE = ({
  value: e,
  children: t,
  style: n = {},
  className: s = ""
}) => {
  const [i, o] = yt(null), [r, a] = yt([]);
  vt(() => {
    e && o(e);
  }, [e]), vt(() => {
    a([]), i !== null && i.length > 0 && i.forEach((u) => {
      if (u.type.startsWith("image/")) {
        const h = new FileReader();
        h.onloadend = () => {
          a((d) => [
            ...d,
            { file: u, thumbnail: h.result }
          ]);
        }, h.readAsDataURL(u);
      } else
        a((h) => [...h, { file: u, thumbnail: "" }]);
    });
  }, [i]);
  const c = (u) => {
    i !== null && i.length > 0 && o(i.filter((h) => h !== u));
  }, l = () => {
    o([]);
  };
  return /* @__PURE__ */ E.jsx(Rb.Provider, { value: { files: i, setFiles: o }, children: /* @__PURE__ */ E.jsx("div", { className: s, style: n, children: t({
    uploadedFilesInfo: r,
    fileRemoveHandler: c,
    allFileRemoveHandler: l
  }) }) });
};
UE.displayName = "HMultipleFileUploadArea";
const YE = ({
  id: e,
  name: t,
  totalSizeLimit: n = 1 / 0,
  lengthLimit: s = 1 / 0,
  sizeLimit: i = 1 / 0,
  accept: o,
  onTotalSizeExceeded: r,
  onLengthExceeded: a,
  onSizeExceeded: c,
  onFilesUploaded: l,
  onCorruptedFile: u,
  className: h = "",
  style: d = {}
}) => {
  const f = bt(null), p = Tt(Rb);
  if (!p)
    throw new Error("HMultipleFileUploadInput must be used within a HMultipleFileUploadArea");
  const { files: g, setFiles: m } = p;
  vt(() => {
    if (f.current && g !== null && g.length > 0) {
      const b = new DataTransfer();
      g.forEach((_) => b.items.add(_)), f.current.files = b.files;
    } else f.current && (f.current.value = "");
  }, [g]);
  const y = (b) => {
    const _ = b.target.files;
    if (!_ || _.length === 0)
      return;
    const x = Array.from(_), v = g ? g.length : 0, w = s - v;
    let A = x;
    x.length > w && (a == null || a(s, v + x.length), A = x.slice(0, w));
    const P = [], M = A.filter((C) => C.size > i ? (P.push(C), !1) : !0);
    P.length > 0 && (c == null || c(i, P));
    const T = [];
    let D = g ? g.reduce((C, I) => C + I.size, 0) : 0;
    for (const C of M) {
      if (C.size === 0) {
        u == null || u(C);
        continue;
      }
      if (D + C.size > n) {
        r == null || r(n, D + C.size);
        break;
      }
      D += C.size, T.push(C);
    }
    if (T.length > 0) {
      const C = [...g || [], ...T];
      m(C), l == null || l({ totalFiles: C, recentlyUploadedFiles: T });
    } else
      m([...g || []]);
    f.current && (f.current.value = "");
  };
  return /* @__PURE__ */ E.jsx(
    "input",
    {
      type: "file",
      id: e,
      name: t,
      multiple: !0,
      ref: f,
      accept: o,
      onChange: y,
      className: h,
      style: d
    }
  );
};
YE.displayName = "HMultipleFileUploadInput";
const Lb = Pe({
  open: !1,
  toggle: () => {
  }
});
function CR({ children: e, className: t = "", style: n = {} }) {
  const [s, i] = yt(!1), o = () => {
    i((r) => !r);
  };
  return /* @__PURE__ */ E.jsx(Lb.Provider, { value: { open: s, toggle: o }, children: /* @__PURE__ */ E.jsx("div", { className: `border rounded-lg overflow-hidden ${t}`, style: n, children: e }) });
}
function Ib() {
  return Tt(Lb);
}
var Nb = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ap = re.createContext && /* @__PURE__ */ re.createContext(Nb), GE = ["attr", "size", "title"];
function KE(e, t) {
  if (e == null) return {};
  var n = XE(e, t), s, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      s = o[i], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s]);
  }
  return n;
}
function XE(e, t) {
  if (e == null) return {};
  var n = {};
  for (var s in e)
    if (Object.prototype.hasOwnProperty.call(e, s)) {
      if (t.indexOf(s) >= 0) continue;
      n[s] = e[s];
    }
  return n;
}
function zr() {
  return zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, zr.apply(this, arguments);
}
function Pp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    t && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, s);
  }
  return n;
}
function Wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pp(Object(n), !0).forEach(function(s) {
      qE(e, s, n[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pp(Object(n)).forEach(function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(n, s));
    });
  }
  return e;
}
function qE(e, t, n) {
  return t = ZE(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ZE(e) {
  var t = QE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function QE(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var s = n.call(e, t);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $b(e) {
  return e && e.map((t, n) => /* @__PURE__ */ re.createElement(t.tag, Wr({
    key: n
  }, t.attr), $b(t.child)));
}
function JE(e) {
  return (t) => /* @__PURE__ */ re.createElement(tO, zr({
    attr: Wr({}, e.attr)
  }, t), $b(e.child));
}
function tO(e) {
  var t = (n) => {
    var {
      attr: s,
      size: i,
      title: o
    } = e, r = KE(e, GE), a = i || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ re.createElement("svg", zr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, s, r, {
      className: c,
      style: Wr(Wr({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ re.createElement("title", null, o), e.children);
  };
  return Ap !== void 0 ? /* @__PURE__ */ re.createElement(Ap.Consumer, null, (n) => t(n)) : t(Nb);
}
function eO(e) {
  return JE({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "6 9 12 15 18 9" }, child: [] }] })(e);
}
function kR({ children: e, className: t = "", style: n = {} }) {
  const { open: s, toggle: i } = Ib();
  return /* @__PURE__ */ E.jsxs(
    "button",
    {
      onClick: i,
      className: `w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none ${t}`,
      style: n,
      "aria-expanded": s,
      children: [
        e,
        /* @__PURE__ */ E.jsx(
          eO,
          {
            className: `transform transition-transform duration-200 ${s ? "rotate-180" : "rotate-0"}`,
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function DR({ children: e, className: t = "", style: n = {} }) {
  const { open: s } = Ib();
  return (
    // max-height transition을 통해 open 상태에 따라 애니메이션 효과 적용 (max-h-96 값은 내용에 맞게 조절)
    /* @__PURE__ */ E.jsx(
      "div",
      {
        className: `transition-all duration-200 ease-in-out overflow-hidden ${t} ${s ? "max-h-96" : "max-h-0"}`,
        style: n,
        children: /* @__PURE__ */ E.jsx("div", { className: "p-4 border-t bg-white", children: e })
      }
    )
  );
}
function nO({
  type: e,
  children: t,
  className: n = "",
  style: s = {},
  arrowClassName: i = "",
  arrowStyle: o = {}
}) {
  const r = "relative max-w-xs p-3 my-1 rounded-lg", a = e === "me" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-gray-900 self-start", c = e === "me" ? /* @__PURE__ */ E.jsx(
    "div",
    {
      className: `
                absolute top-0 right-0 transform translate-x-[50%]
          w-0 h-0
          border-l-8 border-l-transparent
          border-r-8 border-r-transparent
          border-t-8 border-t-blue-500
          ${i}
                `,
      style: o
    }
  ) : /* @__PURE__ */ E.jsx(
    "div",
    {
      className: `
                absolute top-0 left-0 transform translate-x-[-50%]
          w-0 h-0
          border-l-8 border-l-transparent
          border-r-8 border-r-transparent
          border-t-8 border-t-gray-200
          ${n}
                `,
      style: o
    }
  );
  return /* @__PURE__ */ E.jsxs("div", { className: `${r} ${a} ${n}`, style: s, children: [
    c,
    t
  ] });
}
nO.displayName = "HChatBubble";
var Se = function() {
  return Se = Object.assign || function(t) {
    for (var n, s = 1, i = arguments.length; s < i; s++) {
      n = arguments[s];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Se.apply(this, arguments);
};
function ti(e, t, n) {
  if (n || arguments.length === 2) for (var s = 0, i = t.length, o; s < i; s++)
    (o || !(s in t)) && (o || (o = Array.prototype.slice.call(t, 0, s)), o[s] = t[s]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function sO(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var iO = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, oO = /* @__PURE__ */ sO(
  function(e) {
    return iO.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Lt = "-ms-", Yi = "-moz-", At = "-webkit-", Vb = "comm", xa = "rule", Ru = "decl", rO = "@import", Fb = "@keyframes", aO = "@layer", jb = Math.abs, Lu = String.fromCharCode, ll = Object.assign;
function cO(e, t) {
  return ee(e, 0) ^ 45 ? (((t << 2 ^ ee(e, 0)) << 2 ^ ee(e, 1)) << 2 ^ ee(e, 2)) << 2 ^ ee(e, 3) : 0;
}
function Bb(e) {
  return e.trim();
}
function yn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function pt(e, t, n) {
  return e.replace(t, n);
}
function pr(e, t, n) {
  return e.indexOf(t, n);
}
function ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function ei(e, t, n) {
  return e.slice(t, n);
}
function en(e) {
  return e.length;
}
function Hb(e) {
  return e.length;
}
function Ii(e, t) {
  return t.push(e), e;
}
function lO(e, t) {
  return e.map(t).join("");
}
function Tp(e, t) {
  return e.filter(function(n) {
    return !yn(n, t);
  });
}
var _a = 1, ni = 1, zb = 0, Fe = 0, Zt = 0, di = "";
function wa(e, t, n, s, i, o, r, a) {
  return { value: e, root: t, parent: n, type: s, props: i, children: o, line: _a, column: ni, length: r, return: "", siblings: a };
}
function kn(e, t) {
  return ll(wa("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ks(e) {
  for (; e.root; )
    e = kn(e.root, { children: [e] });
  Ii(e, e.siblings);
}
function uO() {
  return Zt;
}
function hO() {
  return Zt = Fe > 0 ? ee(di, --Fe) : 0, ni--, Zt === 10 && (ni = 1, _a--), Zt;
}
function Ye() {
  return Zt = Fe < zb ? ee(di, Fe++) : 0, ni++, Zt === 10 && (ni = 1, _a++), Zt;
}
function ps() {
  return ee(di, Fe);
}
function gr() {
  return Fe;
}
function Sa(e, t) {
  return ei(di, e, t);
}
function ul(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function dO(e) {
  return _a = ni = 1, zb = en(di = e), Fe = 0, [];
}
function fO(e) {
  return di = "", e;
}
function ac(e) {
  return Bb(Sa(Fe - 1, hl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pO(e) {
  for (; (Zt = ps()) && Zt < 33; )
    Ye();
  return ul(e) > 2 || ul(Zt) > 3 ? "" : " ";
}
function gO(e, t) {
  for (; --t && Ye() && !(Zt < 48 || Zt > 102 || Zt > 57 && Zt < 65 || Zt > 70 && Zt < 97); )
    ;
  return Sa(e, gr() + (t < 6 && ps() == 32 && Ye() == 32));
}
function hl(e) {
  for (; Ye(); )
    switch (Zt) {
      // ] ) " '
      case e:
        return Fe;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && hl(Zt);
        break;
      // (
      case 40:
        e === 41 && hl(e);
        break;
      // \
      case 92:
        Ye();
        break;
    }
  return Fe;
}
function mO(e, t) {
  for (; Ye() && e + Zt !== 57; )
    if (e + Zt === 84 && ps() === 47)
      break;
  return "/*" + Sa(t, Fe - 1) + "*" + Lu(e === 47 ? e : Ye());
}
function yO(e) {
  for (; !ul(ps()); )
    Ye();
  return Sa(e, Fe);
}
function bO(e) {
  return fO(mr("", null, null, null, [""], e = dO(e), 0, [0], e));
}
function mr(e, t, n, s, i, o, r, a, c) {
  for (var l = 0, u = 0, h = r, d = 0, f = 0, p = 0, g = 1, m = 1, y = 1, b = 0, _ = "", x = i, v = o, w = s, A = _; m; )
    switch (p = b, b = Ye()) {
      // (
      case 40:
        if (p != 108 && ee(A, h - 1) == 58) {
          pr(A += pt(ac(b), "&", "&\f"), "&\f", jb(l ? a[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        A += ac(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        A += pO(p);
        break;
      // \
      case 92:
        A += gO(gr() - 1, 7);
        continue;
      // /
      case 47:
        switch (ps()) {
          case 42:
          case 47:
            Ii(vO(mO(Ye(), gr()), t, n, c), c);
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * g:
        a[l++] = en(A) * y;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            m = 0;
          // ;
          case 59 + u:
            y == -1 && (A = pt(A, /\f/g, "")), f > 0 && en(A) - h && Ii(f > 32 ? Cp(A + ";", s, n, h - 1, c) : Cp(pt(A, " ", "") + ";", s, n, h - 2, c), c);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (Ii(w = Mp(A, t, n, l, u, i, a, _, x = [], v = [], h, o), o), b === 123)
              if (u === 0)
                mr(A, t, w, w, x, o, h, a, v);
              else
                switch (d === 99 && ee(A, 3) === 110 ? 100 : d) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mr(e, w, w, s && Ii(Mp(e, w, w, 0, 0, i, a, _, i, x = [], h, v), v), i, v, h, a, s ? x : v);
                    break;
                  default:
                    mr(A, w, w, w, [""], v, 0, a, v);
                }
        }
        l = u = f = 0, g = y = 1, _ = A = "", h = r;
        break;
      // :
      case 58:
        h = 1 + en(A), f = p;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && hO() == 125)
            continue;
        }
        switch (A += Lu(b), b * g) {
          // &
          case 38:
            y = u > 0 ? 1 : (A += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (en(A) - 1) * y, y = 1;
            break;
          // @
          case 64:
            ps() === 45 && (A += ac(Ye())), d = ps(), u = h = en(_ = A += yO(gr())), b++;
            break;
          // -
          case 45:
            p === 45 && en(A) == 2 && (g = 0);
        }
    }
  return o;
}
function Mp(e, t, n, s, i, o, r, a, c, l, u, h) {
  for (var d = i - 1, f = i === 0 ? o : [""], p = Hb(f), g = 0, m = 0, y = 0; g < s; ++g)
    for (var b = 0, _ = ei(e, d + 1, d = jb(m = r[g])), x = e; b < p; ++b)
      (x = Bb(m > 0 ? f[b] + " " + _ : pt(_, /&\f/g, f[b]))) && (c[y++] = x);
  return wa(e, t, n, i === 0 ? xa : a, c, l, u, h);
}
function vO(e, t, n, s) {
  return wa(e, t, n, Vb, Lu(uO()), ei(e, 2, -2), 0, s);
}
function Cp(e, t, n, s, i) {
  return wa(e, t, n, Ru, ei(e, 0, s), ei(e, s + 1, -1), s, i);
}
function Wb(e, t, n) {
  switch (cO(e, t)) {
    // color-adjust
    case 5103:
      return At + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return At + e + e;
    // tab-size
    case 4789:
      return Yi + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return At + e + Yi + e + Lt + e + e;
    // writing-mode
    case 5936:
      switch (ee(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return At + e + Lt + pt(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return At + e + Lt + pt(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return At + e + Lt + pt(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return At + e + Lt + e + e;
    // order
    case 6165:
      return At + e + Lt + "flex-" + e + e;
    // align-items
    case 5187:
      return At + e + pt(e, /(\w+).+(:[^]+)/, At + "box-$1$2" + Lt + "flex-$1$2") + e;
    // align-self
    case 5443:
      return At + e + Lt + "flex-item-" + pt(e, /flex-|-self/g, "") + (yn(e, /flex-|baseline/) ? "" : Lt + "grid-row-" + pt(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return At + e + Lt + "flex-line-pack" + pt(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return At + e + Lt + pt(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return At + e + Lt + pt(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return At + "box-" + pt(e, "-grow", "") + At + e + Lt + pt(e, "grow", "positive") + e;
    // transition
    case 4554:
      return At + pt(e, /([^-])(transform)/g, "$1" + At + "$2") + e;
    // cursor
    case 6187:
      return pt(pt(pt(e, /(zoom-|grab)/, At + "$1"), /(image-set)/, At + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return pt(e, /(image-set\([^]*)/, At + "$1$`$1");
    // justify-content
    case 4968:
      return pt(pt(e, /(.+:)(flex-)?(.*)/, At + "box-pack:$3" + Lt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + At + e + e;
    // justify-self
    case 4200:
      if (!yn(e, /flex-|baseline/)) return Lt + "grid-column-align" + ei(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Lt + pt(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(s, i) {
        return t = i, yn(s.props, /grid-\w+-end/);
      }) ? ~pr(e + (n = n[t].value), "span", 0) ? e : Lt + pt(e, "-start", "") + e + Lt + "grid-row-span:" + (~pr(n, "span", 0) ? yn(n, /\d+/) : +yn(n, /\d+/) - +yn(e, /\d+/)) + ";" : Lt + pt(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(s) {
        return yn(s.props, /grid-\w+-start/);
      }) ? e : Lt + pt(pt(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return pt(e, /(.+)-inline(.+)/, At + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (en(e) - 1 - t > 6)
        switch (ee(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (ee(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return pt(e, /(.+:)(.+)-([^]+)/, "$1" + At + "$2-$3$1" + Yi + (ee(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~pr(e, "stretch", 0) ? Wb(pt(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return pt(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(s, i, o, r, a, c, l) {
        return Lt + i + ":" + o + l + (r ? Lt + i + "-span:" + (a ? c : +c - +o) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (ee(e, t + 6) === 121)
        return pt(e, ":", ":" + At) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (ee(e, ee(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return pt(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + At + (ee(e, 14) === 45 ? "inline-" : "") + "box$3$1" + At + "$2$3$1" + Lt + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return pt(e, ":", ":" + Lt) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return pt(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ur(e, t) {
  for (var n = "", s = 0; s < e.length; s++)
    n += t(e[s], s, e, t) || "";
  return n;
}
function xO(e, t, n, s) {
  switch (e.type) {
    case aO:
      if (e.children.length) break;
    case rO:
    case Ru:
      return e.return = e.return || e.value;
    case Vb:
      return "";
    case Fb:
      return e.return = e.value + "{" + Ur(e.children, s) + "}";
    case xa:
      if (!en(e.value = e.props.join(","))) return "";
  }
  return en(n = Ur(e.children, s)) ? e.return = e.value + "{" + n + "}" : "";
}
function _O(e) {
  var t = Hb(e);
  return function(n, s, i, o) {
    for (var r = "", a = 0; a < t; a++)
      r += e[a](n, s, i, o) || "";
    return r;
  };
}
function wO(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function SO(e, t, n, s) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ru:
        e.return = Wb(e.value, e.length, n);
        return;
      case Fb:
        return Ur([kn(e, { value: pt(e.value, "@", "@" + At) })], s);
      case xa:
        if (e.length)
          return lO(n = e.props, function(i) {
            switch (yn(i, s = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                ks(kn(e, { props: [pt(i, /:(read-\w+)/, ":" + Yi + "$1")] })), ks(kn(e, { props: [i] })), ll(e, { props: Tp(n, s) });
                break;
              // :placeholder
              case "::placeholder":
                ks(kn(e, { props: [pt(i, /:(plac\w+)/, ":" + At + "input-$1")] })), ks(kn(e, { props: [pt(i, /:(plac\w+)/, ":" + Yi + "$1")] })), ks(kn(e, { props: [pt(i, /:(plac\w+)/, Lt + "input-$1")] })), ks(kn(e, { props: [i] })), ll(e, { props: Tp(n, s) });
                break;
            }
            return "";
          });
    }
}
var AO = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, vs = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ub = "active", Yb = "data-styled-version", Aa = "6.1.15", Iu = `/*!sc*/
`, Yr = typeof window < "u" && "HTMLElement" in window, PO = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), kp = /invalid hook call/i, Ko = /* @__PURE__ */ new Set(), TO = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", s = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        kp.test(r) ? (o = !1, Ko.delete(s)) : i.apply(void 0, ti([r], a, !1));
      }, bt(), o && !Ko.has(s) && (console.warn(s), Ko.add(s));
    } catch (r) {
      kp.test(r.message) && Ko.delete(s);
    } finally {
      console.error = i;
    }
  }
}, Pa = Object.freeze([]), si = Object.freeze({});
function MO(e, t, n) {
  return n === void 0 && (n = si), e.theme !== n.theme && e.theme || t || n.theme;
}
var dl = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), CO = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, kO = /(^-|-$)/g;
function Dp(e) {
  return e.replace(CO, "-").replace(kO, "");
}
var DO = /(a)(d)/gi, Xo = 52, Ep = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function fl(e) {
  var t, n = "";
  for (t = Math.abs(e); t > Xo; t = t / Xo | 0) n = Ep(t % Xo) + n;
  return (Ep(t % Xo) + n).replace(DO, "$1-$2");
}
var cc, Gb = 5381, os = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Kb = function(e) {
  return os(Gb, e);
};
function EO(e) {
  return fl(Kb(e) >>> 0);
}
function Xb(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function lc(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var qb = typeof Symbol == "function" && Symbol.for, Zb = qb ? Symbol.for("react.memo") : 60115, OO = qb ? Symbol.for("react.forward_ref") : 60112, RO = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, LO = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Qb = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, IO = ((cc = {})[OO] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, cc[Zb] = Qb, cc);
function Op(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Zb ? Qb : "$$typeof" in e ? IO[e.$$typeof] : RO;
  var t;
}
var NO = Object.defineProperty, $O = Object.getOwnPropertyNames, Rp = Object.getOwnPropertySymbols, VO = Object.getOwnPropertyDescriptor, FO = Object.getPrototypeOf, Lp = Object.prototype;
function Jb(e, t, n) {
  if (typeof t != "string") {
    if (Lp) {
      var s = FO(t);
      s && s !== Lp && Jb(e, s, n);
    }
    var i = $O(t);
    Rp && (i = i.concat(Rp(t)));
    for (var o = Op(e), r = Op(t), a = 0; a < i.length; ++a) {
      var c = i[a];
      if (!(c in LO || n && n[c] || r && c in r || o && c in o)) {
        var l = VO(t, c);
        try {
          NO(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function ii(e) {
  return typeof e == "function";
}
function Nu(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ls(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Ip(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], s = 1; s < e.length; s++) n += e[s];
  return n;
}
function oi(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function pl(e, t, n) {
  if (n === void 0 && (n = !1), !n && !oi(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var s = 0; s < t.length; s++) e[s] = pl(e[s], t[s]);
  else if (oi(t)) for (var s in t) e[s] = pl(e[s], t[s]);
  return e;
}
function $u(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var jO = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function BO() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], s = [], i = 1, o = e.length; i < o; i += 1) s.push(e[i]);
  return s.forEach(function(r) {
    n = n.replace(/%[a-z]/, r);
  }), n;
}
function fi(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(BO.apply(void 0, ti([jO[e]], t, !1)).trim());
}
var HO = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, s = 0; s < t; s++) n += this.groupSizes[s];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var s = this.groupSizes, i = s.length, o = i; t >= o; ) if ((o <<= 1) < 0) throw fi(16, "".concat(t));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(s), this.length = o;
      for (var r = i; r < o; r++) this.groupSizes[r] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), c = (r = 0, n.length); r < c; r++) this.tag.insertRule(a, n[r]) && (this.groupSizes[t]++, a++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], s = this.indexOfGroup(t), i = s + n;
      this.groupSizes[t] = 0;
      for (var o = s; o < i; o++) this.tag.deleteRule(s);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var s = this.groupSizes[t], i = this.indexOfGroup(t), o = i + s, r = i; r < o; r++) n += "".concat(this.tag.getRule(r)).concat(Iu);
    return n;
  }, e;
}(), zO = 1 << 30, yr = /* @__PURE__ */ new Map(), Gr = /* @__PURE__ */ new Map(), br = 1, qo = function(e) {
  if (yr.has(e)) return yr.get(e);
  for (; Gr.has(br); ) br++;
  var t = br++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > zO)) throw fi(16, "".concat(t));
  return yr.set(e, t), Gr.set(t, e), t;
}, WO = function(e, t) {
  br = t + 1, yr.set(e, t), Gr.set(t, e);
}, UO = "style[".concat(vs, "][").concat(Yb, '="').concat(Aa, '"]'), YO = new RegExp("^".concat(vs, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), GO = function(e, t, n) {
  for (var s, i = n.split(","), o = 0, r = i.length; o < r; o++) (s = i[o]) && e.registerName(t, s);
}, KO = function(e, t) {
  for (var n, s = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Iu), i = [], o = 0, r = s.length; o < r; o++) {
    var a = s[o].trim();
    if (a) {
      var c = a.match(YO);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (WO(u, l), GO(e, u, c[3]), e.getTag().insertRules(l, i)), i.length = 0;
      } else i.push(a);
    }
  }
}, Np = function(e) {
  for (var t = document.querySelectorAll(UO), n = 0, s = t.length; n < s; n++) {
    var i = t[n];
    i && i.getAttribute(vs) !== Ub && (KO(e, i), i.parentNode && i.parentNode.removeChild(i));
  }
};
function XO() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var t0 = function(e) {
  var t = document.head, n = e || t, s = document.createElement("style"), i = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(vs, "]")));
    return c[c.length - 1];
  }(n), o = i !== void 0 ? i.nextSibling : null;
  s.setAttribute(vs, Ub), s.setAttribute(Yb, Aa);
  var r = XO();
  return r && s.setAttribute("nonce", r), n.insertBefore(s, o), s;
}, qO = function() {
  function e(t) {
    this.element = t0(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var s = document.styleSheets, i = 0, o = s.length; i < o; i++) {
        var r = s[i];
        if (r.ownerNode === n) return r;
      }
      throw fi(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), ZO = function() {
  function e(t) {
    this.element = t0(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var s = document.createTextNode(n);
      return this.element.insertBefore(s, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), QO = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), $p = Yr, JO = { isServer: !Yr, useCSSOMInjection: !PO }, e0 = function() {
  function e(t, n, s) {
    t === void 0 && (t = si), n === void 0 && (n = {});
    var i = this;
    this.options = Se(Se({}, JO), t), this.gs = n, this.names = new Map(s), this.server = !!t.isServer, !this.server && Yr && $p && ($p = !1, Np(this)), $u(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, c = "", l = function(h) {
          var d = function(y) {
            return Gr.get(y);
          }(h);
          if (d === void 0) return "continue";
          var f = o.names.get(d), p = r.getGroup(h);
          if (f === void 0 || !f.size || p.length === 0) return "continue";
          var g = "".concat(vs, ".g").concat(h, '[id="').concat(d, '"]'), m = "";
          f !== void 0 && f.forEach(function(y) {
            y.length > 0 && (m += "".concat(y, ","));
          }), c += "".concat(p).concat(g, '{content:"').concat(m, '"}').concat(Iu);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(i);
    });
  }
  return e.registerId = function(t) {
    return qo(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Yr && Np(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Se(Se({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var s = n.useCSSOMInjection, i = n.target;
      return n.isServer ? new QO(i) : s ? new qO(i) : new ZO(i);
    }(this.options), new HO(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (qo(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var s = /* @__PURE__ */ new Set();
      s.add(n), this.names.set(t, s);
    }
  }, e.prototype.insertRules = function(t, n, s) {
    this.registerName(t, n), this.getTag().insertRules(qo(t), s);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(qo(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), tR = /&/g, eR = /^\s*\/\/.*$/gm;
function n0(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(s) {
      return "".concat(t, " ").concat(s);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = n0(n.children, t)), n;
  });
}
function nR(e) {
  var t, n, s, i = si, o = i.options, r = o === void 0 ? si : o, a = i.plugins, c = a === void 0 ? Pa : a, l = function(d, f, p) {
    return p.startsWith(n) && p.endsWith(n) && p.replaceAll(n, "").length > 0 ? ".".concat(t) : d;
  }, u = c.slice();
  u.push(function(d) {
    d.type === xa && d.value.includes("&") && (d.props[0] = d.props[0].replace(tR, n).replace(s, l));
  }), r.prefix && u.push(SO), u.push(xO);
  var h = function(d, f, p, g) {
    f === void 0 && (f = ""), p === void 0 && (p = ""), g === void 0 && (g = "&"), t = g, n = f, s = new RegExp("\\".concat(n, "\\b"), "g");
    var m = d.replace(eR, ""), y = bO(p || f ? "".concat(p, " ").concat(f, " { ").concat(m, " }") : m);
    r.namespace && (y = n0(y, r.namespace));
    var b = [];
    return Ur(y, _O(u.concat(wO(function(_) {
      return b.push(_);
    })))), b;
  };
  return h.hash = c.length ? c.reduce(function(d, f) {
    return f.name || fi(15), os(d, f.name);
  }, Gb).toString() : "", h;
}
var sR = new e0(), gl = nR(), s0 = re.createContext({ shouldForwardProp: void 0, styleSheet: sR, stylis: gl });
s0.Consumer;
re.createContext(void 0);
function Vp() {
  return Tt(s0);
}
var Fp = function() {
  function e(t, n) {
    var s = this;
    this.inject = function(i, o) {
      o === void 0 && (o = gl);
      var r = s.name + o.hash;
      i.hasNameForId(s.id, r) || i.insertRules(s.id, r, o(s.rules, r, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, $u(this, function() {
      throw fi(12, String(s.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = gl), this.name + t.hash;
  }, e;
}(), iR = function(e) {
  return e >= "A" && e <= "Z";
};
function jp(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var s = e[n];
    if (n === 1 && s === "-" && e[0] === "-") return e;
    iR(s) ? t += "-" + s.toLowerCase() : t += s;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var i0 = function(e) {
  return e == null || e === !1 || e === "";
}, o0 = function(e) {
  var t, n, s = [];
  for (var i in e) {
    var o = e[i];
    e.hasOwnProperty(i) && !i0(o) && (Array.isArray(o) && o.isCss || ii(o) ? s.push("".concat(jp(i), ":"), o, ";") : oi(o) ? s.push.apply(s, ti(ti(["".concat(i, " {")], o0(o), !1), ["}"], !1)) : s.push("".concat(jp(i), ": ").concat((t = i, (n = o) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in AO || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return s;
};
function gs(e, t, n, s) {
  if (i0(e)) return [];
  if (Nu(e)) return [".".concat(e.styledComponentId)];
  if (ii(e)) {
    if (!ii(o = e) || o.prototype && o.prototype.isReactComponent || !t) return [e];
    var i = e(t);
    return process.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof Fp || oi(i) || i === null || console.error("".concat(Xb(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), gs(i, t, n, s);
  }
  var o;
  return e instanceof Fp ? n ? (e.inject(n, s), [e.getName(s)]) : [e] : oi(e) ? o0(e) : Array.isArray(e) ? Array.prototype.concat.apply(Pa, e.map(function(r) {
    return gs(r, t, n, s);
  })) : [e.toString()];
}
function oR(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ii(n) && !Nu(n)) return !1;
  }
  return !0;
}
var rR = Kb(Aa), aR = function() {
  function e(t, n, s) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (s === void 0 || s.isStatic) && oR(t), this.componentId = n, this.baseHash = os(rR, n), this.baseStyle = s, e0.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, s) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, s) : "";
    if (this.isStatic && !s.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) i = ls(i, this.staticRulesId);
    else {
      var o = Ip(gs(this.rules, t, n, s)), r = fl(os(this.baseHash, o) >>> 0);
      if (!n.hasNameForId(this.componentId, r)) {
        var a = s(o, ".".concat(r), void 0, this.componentId);
        n.insertRules(this.componentId, r, a);
      }
      i = ls(i, r), this.staticRulesId = r;
    }
    else {
      for (var c = os(this.baseHash, s.hash), l = "", u = 0; u < this.rules.length; u++) {
        var h = this.rules[u];
        if (typeof h == "string") l += h, process.env.NODE_ENV !== "production" && (c = os(c, h));
        else if (h) {
          var d = Ip(gs(h, t, n, s));
          c = os(c, d + u), l += d;
        }
      }
      if (l) {
        var f = fl(c >>> 0);
        n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, s(l, ".".concat(f), void 0, this.componentId)), i = ls(i, f);
      }
    }
    return i;
  }, e;
}(), r0 = re.createContext(void 0);
r0.Consumer;
var uc = {}, Bp = /* @__PURE__ */ new Set();
function cR(e, t, n) {
  var s = Nu(e), i = e, o = !lc(e), r = t.attrs, a = r === void 0 ? Pa : r, c = t.componentId, l = c === void 0 ? function(x, v) {
    var w = typeof x != "string" ? "sc" : Dp(x);
    uc[w] = (uc[w] || 0) + 1;
    var A = "".concat(w, "-").concat(EO(Aa + w + uc[w]));
    return v ? "".concat(v, "-").concat(A) : A;
  }(t.displayName, t.parentComponentId) : c, u = t.displayName, h = u === void 0 ? function(x) {
    return lc(x) ? "styled.".concat(x) : "Styled(".concat(Xb(x), ")");
  }(e) : u, d = t.displayName && t.componentId ? "".concat(Dp(t.displayName), "-").concat(t.componentId) : t.componentId || l, f = s && i.attrs ? i.attrs.concat(a).filter(Boolean) : a, p = t.shouldForwardProp;
  if (s && i.shouldForwardProp) {
    var g = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var m = t.shouldForwardProp;
      p = function(x, v) {
        return g(x, v) && m(x, v);
      };
    } else p = g;
  }
  var y = new aR(n, d, s ? i.componentStyle : void 0);
  function b(x, v) {
    return function(w, A, P) {
      var M = w.attrs, T = w.componentStyle, D = w.defaultProps, C = w.foldedComponentIds, I = w.styledComponentId, G = w.target, W = re.useContext(r0), H = Vp(), j = w.shouldForwardProp || H.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Uu(I);
      var Q = MO(A, W, D) || si, q = function(O, X, V) {
        for (var N, nt = Se(Se({}, X), { className: void 0, theme: V }), ct = 0; ct < O.length; ct += 1) {
          var ht = ii(N = O[ct]) ? N(nt) : N;
          for (var lt in ht) nt[lt] = lt === "className" ? ls(nt[lt], ht[lt]) : lt === "style" ? Se(Se({}, nt[lt]), ht[lt]) : ht[lt];
        }
        return X.className && (nt.className = ls(nt.className, X.className)), nt;
      }(M, A, Q), st = q.as || G, K = {};
      for (var k in q) q[k] === void 0 || k[0] === "$" || k === "as" || k === "theme" && q.theme === Q || (k === "forwardedAs" ? K.as = q.forwardedAs : j && !j(k, st) || (K[k] = q[k], j || process.env.NODE_ENV !== "development" || oO(k) || Bp.has(k) || !dl.has(st) || (Bp.add(k), console.warn('styled-components: it looks like an unknown prop "'.concat(k, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var B = function(O, X) {
        var V = Vp(), N = O.generateAndInjectStyles(X, V.styleSheet, V.stylis);
        return process.env.NODE_ENV !== "production" && Uu(N), N;
      }(T, q);
      process.env.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(B);
      var U = ls(C, I);
      return B && (U += " " + B), q.className && (U += " " + q.className), K[lc(st) && !dl.has(st) ? "class" : "className"] = U, P && (K.ref = P), Kp(st, K);
    }(_, x, v);
  }
  b.displayName = h;
  var _ = re.forwardRef(b);
  return _.attrs = f, _.componentStyle = y, _.displayName = h, _.shouldForwardProp = p, _.foldedComponentIds = s ? ls(i.foldedComponentIds, i.styledComponentId) : "", _.styledComponentId = d, _.target = s ? i.target : e, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = s ? function(v) {
      for (var w = [], A = 1; A < arguments.length; A++) w[A - 1] = arguments[A];
      for (var P = 0, M = w; P < M.length; P++) pl(v, M[P], !0);
      return v;
    }({}, i.defaultProps, x) : x;
  } }), process.env.NODE_ENV !== "production" && (TO(h, d), _.warnTooManyClasses = /* @__PURE__ */ function(x, v) {
    var w = {}, A = !1;
    return function(P) {
      if (!A && (w[P] = !0, Object.keys(w).length >= 200)) {
        var M = v ? ' with the id of "'.concat(v, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(x).concat(M, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), A = !0, w = {};
      }
    };
  }(h, d)), $u(_, function() {
    return ".".concat(_.styledComponentId);
  }), o && Jb(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), _;
}
function Hp(e, t) {
  for (var n = [e[0]], s = 0, i = t.length; s < i; s += 1) n.push(t[s], e[s + 1]);
  return n;
}
var zp = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function lR(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ii(e) || oi(e)) return zp(gs(Hp(Pa, ti([e], t, !0))));
  var s = e;
  return t.length === 0 && s.length === 1 && typeof s[0] == "string" ? gs(s) : zp(gs(Hp(s, t)));
}
function ml(e, t, n) {
  if (n === void 0 && (n = si), !t) throw fi(1, t);
  var s = function(i) {
    for (var o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
    return e(t, n, lR.apply(void 0, ti([i], o, !1)));
  };
  return s.attrs = function(i) {
    return ml(e, t, Se(Se({}, n), { attrs: Array.prototype.concat(n.attrs, i).filter(Boolean) }));
  }, s.withConfig = function(i) {
    return ml(e, t, Se(Se({}, n), i));
  }, s;
}
var a0 = function(e) {
  return ml(cR, e);
}, c0 = a0;
dl.forEach(function(e) {
  c0[e] = a0(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Zo = "__sc-".concat(vs, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Zo] || (window[Zo] = 0), window[Zo] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Zo] += 1);
const uR = c0.div`
    @keyframes dotBounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-6px);
        }
    }

    .animate-dot1 {
        animation: dotBounce 1s infinite;
    }

    .animate-dot2 {
        animation: dotBounce 1s infinite;
        animation-delay: 0.2s;
    }

    .animate-dot3 {
        animation: dotBounce 1s infinite;
        animation-delay: 0.4s;
    }
`, hR = ({ className: e = "", style: t = {}, divClassName: n = "", divStyle: s = {} }) => /* @__PURE__ */ E.jsxs(uR, { className: `flex items-center justify-center space-x-1 ${n}`, style: s, children: [
  /* @__PURE__ */ E.jsx("span", { className: `w-2 h-2 bg-gray-400 rounded-full animate-dot1 ${e}`, style: t }),
  /* @__PURE__ */ E.jsx("span", { className: `w-2 h-2 bg-gray-400 rounded-full animate-dot2 ${e}`, style: t }),
  /* @__PURE__ */ E.jsx("span", { className: `w-2 h-2 bg-gray-400 rounded-full animate-dot3 ${e}`, style: t })
] });
hR.displayName = "HChatBubbleLoading";
function Wp(e) {
  return Object.fromEntries(new URLSearchParams(e));
}
const pi = Pe(
  null
), dR = ({
  modelValue: e,
  countPerPage: t = 10,
  totalCount: n = 0,
  type: s = "",
  queryStringKey: i,
  onPageChange: o,
  children: r,
  className: a = "",
  style: c = {}
}) => {
  const [l, u] = yt(e + 1);
  vt(() => {
    u(e + 1);
  }, [e]), vt(() => {
    const y = Wp(window.location.search);
    if (y[i]) {
      const b = parseInt(y[i], 10);
      u(b + 1);
    }
  }, [i]), vt(() => {
    const y = (b) => {
      const _ = Wp(window.location.search), x = parseInt(_[i] || "0", 10);
      l !== x && u(x);
    };
    return window.addEventListener("popstate", y), () => {
      window.removeEventListener("popstate", y);
    };
  }, [l, i]);
  const h = Math.ceil(n / t), d = (() => {
    const y = Math.floor(e / t) * t, b = Math.min(y + t - 1, h - 1), _ = [];
    for (let x = y; x <= b; x++)
      _.push(x + 1);
    return _;
  })(), f = (y) => {
    let b = y;
    b < 1 ? b = 1 : b > h && (b = h), b !== l && u(b);
  }, p = (y) => {
    o && o(y - 1);
  }, g = s, m = {
    movePage: f,
    lastPageIndex: h,
    activePageIndex: l,
    clickPaginationButtonHandler: p,
    classNameValue: g
  };
  return /* @__PURE__ */ E.jsx(pi.Provider, { value: m, children: /* @__PURE__ */ E.jsx("div", { className: `h_pagination_area ${g} ${a}`, style: c, children: r({ lastPageIndex: h, paginatedItems: d }) }) });
};
dR.displayName = "HPaginationArea";
const fR = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const s = Tt(pi);
  if (!s) return null;
  const { movePage: i, activePageIndex: o, clickPaginationButtonHandler: r, classNameValue: a } = s, c = () => {
    const l = o + 1;
    i(l), r(l);
  };
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_next ${a} ${t}`,
      onClick: c,
      style: n,
      children: e || ">"
    }
  );
};
fR.displayName = "HPaginationNextButton";
const pR = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const s = Tt(pi);
  if (!s) return null;
  const { movePage: i, clickPaginationButtonHandler: o, classNameValue: r } = s, a = () => {
    i(1), o(1);
  };
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_first ${r} ${t}`,
      onClick: a,
      style: n,
      children: e || "<<"
    }
  );
};
pR.displayName = "HPaginationFirstButton";
const gR = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const s = Tt(pi);
  if (!s) return null;
  const { movePage: i, lastPageIndex: o, clickPaginationButtonHandler: r, classNameValue: a } = s, c = () => {
    i(o), r(o);
  };
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_last ${a} ${t}`,
      onClick: c,
      style: n,
      children: e || ">>"
    }
  );
};
gR.displayName = "HPaginationLastButton";
const mR = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const s = Tt(pi);
  if (!s) return null;
  const { movePage: i, activePageIndex: o, clickPaginationButtonHandler: r, classNameValue: a } = s, c = () => {
    const l = o - 1;
    i(l), r(l);
  };
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_prev ${a} ${t}`,
      onClick: c,
      style: n,
      children: e || "<"
    }
  );
};
mR.displayName = "HPaginationPrevButton";
const yR = ({
  pageIndex: e,
  children: t,
  className: n = "",
  style: s = {}
}) => {
  const i = Tt(pi);
  if (!i) return null;
  const {
    movePage: o,
    activePageIndex: r,
    clickPaginationButtonHandler: a,
    classNameValue: c
  } = i, l = e === r, u = () => {
    o(e), a(e);
  };
  return /* @__PURE__ */ E.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_num ${c} ${l ? "is_active" : ""} ${n}`,
      onClick: u,
      style: s,
      children: t({ isActive: l })
    }
  );
};
yR.displayName = "HPaginationNumberButton";
export {
  Ug as CALENDAR_TYPES,
  eo as DATE_AREA_TYPE,
  CR as HAccordionArea,
  kR as HAccordionButton,
  DR as HAccordionItem,
  wR as HBarChart,
  nO as HChatBubble,
  hR as HChatBubbleLoading,
  VE as HCheckAuth,
  nA as HDropdownArea,
  iA as HDropdownButton,
  sA as HDropdownItem,
  oA as HDropdownItemButton,
  f1 as HDropdownList,
  FE as HInputCheckbox,
  LE as HModal,
  NE as HModalCloseButton,
  IE as HModalOpenButton,
  UE as HMultipleFileUploadArea,
  YE as HMultipleFileUploadInput,
  dR as HPaginationArea,
  pR as HPaginationFirstButton,
  gR as HPaginationLastButton,
  fR as HPaginationNextButton,
  yR as HPaginationNumberButton,
  mR as HPaginationPrevButton,
  AR as HPieChart,
  TR as HProgress,
  MR as HProgressBar,
  Bm as HScrollbars,
  kS as HSingleDatePickerArea,
  DS as HSingleDatePickerCalendar,
  OS as HSingleDatePickerCalendarArea,
  ES as HSingleDatePickerCalendarDateButton,
  LS as HSingleDatePickerCalendarMonth,
  RS as HSingleDatePickerCalendarMonthArea,
  NS as HSingleDatePickerCalendarMonthButton,
  FS as HSingleDatePickerCalendarYear,
  zS as HSingleDatePickerCalendarYearArea,
  YS as HSingleDatePickerCalendarYearButton,
  QS as HSingleDatePickerInput,
  IS as HSingleDatePickerMonthButton,
  JS as HSingleDatePickerMonthNextButton,
  VS as HSingleDatePickerMonthPrevButton,
  tA as HSingleDatePickerMonthYearButton,
  BS as HSingleDatePickerNextButton,
  HS as HSingleDatePickerPrevButton,
  PS as HSingleDatePickerRangeArea,
  WS as HSingleDatePickerYearButton,
  US as HSingleDatePickerYearNextButton,
  eA as HSingleDatePickerYearPrevButton,
  zE as HSingleFileUploadArea,
  WE as HSingleFileUploadInput,
  HE as HTextCounterArea,
  kE as HToastPopup,
  CE as HToastPopupArea,
  EE as HToastPopupCloseButton,
  DE as HToastPopupContainer,
  RE as HTooltip,
  OE as HTooltipArea,
  SR as checkEqual
};
