var Zm = Object.defineProperty;
var Qm = (e, t, n) => t in e ? Zm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var B = (e, t, n) => Qm(e, typeof t != "symbol" ? t + "" : t, n);
import * as al from "react";
import fi, { useRef as xt, useEffect as Et, createContext as Ze, useState as _t, useContext as Yt, useMemo as Ne, forwardRef as Vi, useImperativeHandle as er, useId as nr, useInsertionEffect as uf, useCallback as ll, Children as Jm, isValidElement as hf, useLayoutEffect as ty, Fragment as df, createElement as ey, Component as ny, cloneElement as sy } from "react";
var Yi = { exports: {} }, Ns = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc;
function iy() {
  if (Oc) return Ns;
  Oc = 1;
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
  return Ns.Fragment = t, Ns.jsx = n, Ns.jsxs = n, Ns;
}
var Bs = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc;
function oy() {
  return Rc || (Rc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === Q ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case w:
          return "Fragment";
        case x:
          return "Portal";
        case P:
          return "Profiler";
        case A:
          return "StrictMode";
        case D:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case T:
            return (v.displayName || "Context") + ".Provider";
          case M:
            return (v._context.displayName || "Context") + ".Consumer";
          case C:
            var V = v.render;
            return v = v.displayName, v || (v = V.displayName || V.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case Z:
            return V = v.displayName || null, V !== null ? V : e(v.type) || "Memo";
          case W:
            V = v._payload, v = v._init;
            try {
              return e(v(V));
            } catch {
            }
        }
      return null;
    }
    function t(v) {
      return "" + v;
    }
    function n(v) {
      try {
        t(v);
        var V = !1;
      } catch {
        V = !0;
      }
      if (V) {
        V = console;
        var H = V.error, st = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return H.call(
          V,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          st
        ), t(v);
      }
    }
    function s() {
    }
    function i() {
      if (Y === 0) {
        E = console.log, G = console.info, $ = console.warn, F = console.error, ct = console.group, ut = console.groupCollapsed, dt = console.groupEnd;
        var v = {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        };
        Object.defineProperties(console, {
          info: v,
          log: v,
          warn: v,
          error: v,
          group: v,
          groupCollapsed: v,
          groupEnd: v
        });
      }
      Y++;
    }
    function o() {
      if (Y--, Y === 0) {
        var v = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: X({}, v, { value: E }),
          info: X({}, v, { value: G }),
          warn: X({}, v, { value: $ }),
          error: X({}, v, { value: F }),
          group: X({}, v, { value: ct }),
          groupCollapsed: X({}, v, { value: ut }),
          groupEnd: X({}, v, { value: dt })
        });
      }
      0 > Y && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function r(v) {
      if (ft === void 0)
        try {
          throw Error();
        } catch (H) {
          var V = H.stack.trim().match(/\n( *(at )?)/);
          ft = V && V[1] || "", yt = -1 < H.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < H.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ft + v + yt;
    }
    function a(v, V) {
      if (!v || lt) return "";
      var H = gt.get(v);
      if (H !== void 0) return H;
      lt = !0, H = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var st = null;
      st = J.H, J.H = null, i();
      try {
        var Lt = {
          DetermineComponentFrameRoot: function() {
            try {
              if (V) {
                var Te = function() {
                  throw Error();
                };
                if (Object.defineProperty(Te.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Te, []);
                  } catch (le) {
                    var Qt = le;
                  }
                  Reflect.construct(v, [], Te);
                } else {
                  try {
                    Te.call();
                  } catch (le) {
                    Qt = le;
                  }
                  v.call(Te.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (le) {
                  Qt = le;
                }
                (Te = v()) && typeof Te.catch == "function" && Te.catch(function() {
                });
              }
            } catch (le) {
              if (le && Qt && typeof le.stack == "string")
                return [le.stack, Qt.stack];
            }
            return [null, null];
          }
        };
        Lt.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var vt = Object.getOwnPropertyDescriptor(
          Lt.DetermineComponentFrameRoot,
          "name"
        );
        vt && vt.configurable && Object.defineProperty(
          Lt.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var at = Lt.DetermineComponentFrameRoot(), qt = at[0], ye = at[1];
        if (qt && ye) {
          var zt = qt.split(`
`), Pe = ye.split(`
`);
          for (at = vt = 0; vt < zt.length && !zt[vt].includes(
            "DetermineComponentFrameRoot"
          ); )
            vt++;
          for (; at < Pe.length && !Pe[at].includes(
            "DetermineComponentFrameRoot"
          ); )
            at++;
          if (vt === zt.length || at === Pe.length)
            for (vt = zt.length - 1, at = Pe.length - 1; 1 <= vt && 0 <= at && zt[vt] !== Pe[at]; )
              at--;
          for (; 1 <= vt && 0 <= at; vt--, at--)
            if (zt[vt] !== Pe[at]) {
              if (vt !== 1 || at !== 1)
                do
                  if (vt--, at--, 0 > at || zt[vt] !== Pe[at]) {
                    var Oe = `
` + zt[vt].replace(
                      " at new ",
                      " at "
                    );
                    return v.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", v.displayName)), typeof v == "function" && gt.set(v, Oe), Oe;
                  }
                while (1 <= vt && 0 <= at);
              break;
            }
        }
      } finally {
        lt = !1, J.H = st, o(), Error.prepareStackTrace = H;
      }
      return zt = (zt = v ? v.displayName || v.name : "") ? r(zt) : "", typeof v == "function" && gt.set(v, zt), zt;
    }
    function l(v) {
      if (v == null) return "";
      if (typeof v == "function") {
        var V = v.prototype;
        return a(
          v,
          !(!V || !V.isReactComponent)
        );
      }
      if (typeof v == "string") return r(v);
      switch (v) {
        case D:
          return r("Suspense");
        case I:
          return r("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case C:
            return v = a(v.render, !1), v;
          case Z:
            return l(v.type);
          case W:
            V = v._payload, v = v._init;
            try {
              return l(v(V));
            } catch {
            }
        }
      return "";
    }
    function c() {
      var v = J.A;
      return v === null ? null : v.getOwner();
    }
    function u(v) {
      if (ot.call(v, "key")) {
        var V = Object.getOwnPropertyDescriptor(v, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function h(v, V) {
      function H() {
        $t || ($t = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          V
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: H,
        configurable: !0
      });
    }
    function d() {
      var v = e(this.type);
      return Dt[v] || (Dt[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function f(v, V, H, st, Lt, vt) {
      return H = vt.ref, v = {
        $$typeof: _,
        type: v,
        key: V,
        props: vt,
        _owner: Lt
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function p(v, V, H, st, Lt, vt) {
      if (typeof v == "string" || typeof v == "function" || v === w || v === P || v === A || v === D || v === I || v === U || typeof v == "object" && v !== null && (v.$$typeof === W || v.$$typeof === Z || v.$$typeof === T || v.$$typeof === M || v.$$typeof === C || v.$$typeof === O || v.getModuleId !== void 0)) {
        var at = V.children;
        if (at !== void 0)
          if (st)
            if (j(at)) {
              for (st = 0; st < at.length; st++)
                g(at[st], v);
              Object.freeze && Object.freeze(at);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else g(at, v);
      } else
        at = "", (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (at += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), v === null ? st = "null" : j(v) ? st = "array" : v !== void 0 && v.$$typeof === _ ? (st = "<" + (e(v.type) || "Unknown") + " />", at = " Did you accidentally export a JSX literal instead of a component?") : st = typeof v, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          st,
          at
        );
      if (ot.call(V, "key")) {
        at = e(v);
        var qt = Object.keys(V).filter(function(zt) {
          return zt !== "key";
        });
        st = 0 < qt.length ? "{key: someKey, " + qt.join(": ..., ") + ": ...}" : "{key: someKey}", Ct[at + st] || (qt = 0 < qt.length ? "{" + qt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          st,
          at,
          qt,
          at
        ), Ct[at + st] = !0);
      }
      if (at = null, H !== void 0 && (n(H), at = "" + H), u(V) && (n(V.key), at = "" + V.key), "key" in V) {
        H = {};
        for (var ye in V)
          ye !== "key" && (H[ye] = V[ye]);
      } else H = V;
      return at && h(
        H,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), f(v, at, vt, Lt, c(), H);
    }
    function g(v, V) {
      if (typeof v == "object" && v && v.$$typeof !== Kt) {
        if (j(v))
          for (var H = 0; H < v.length; H++) {
            var st = v[H];
            m(st) && y(st, V);
          }
        else if (m(v))
          v._store && (v._store.validated = 1);
        else if (v === null || typeof v != "object" ? H = null : (H = z && v[z] || v["@@iterator"], H = typeof H == "function" ? H : null), typeof H == "function" && H !== v.entries && (H = H.call(v), H !== v))
          for (; !(v = H.next()).done; )
            m(v.value) && y(v.value, V);
      }
    }
    function m(v) {
      return typeof v == "object" && v !== null && v.$$typeof === _;
    }
    function y(v, V) {
      if (v._store && !v._store.validated && v.key == null && (v._store.validated = 1, V = b(V), !Pt[V])) {
        Pt[V] = !0;
        var H = "";
        v && v._owner != null && v._owner !== c() && (H = null, typeof v._owner.tag == "number" ? H = e(v._owner.type) : typeof v._owner.name == "string" && (H = v._owner.name), H = " It was passed a child from " + H + ".");
        var st = J.getCurrentStack;
        J.getCurrentStack = function() {
          var Lt = l(v.type);
          return st && (Lt += st() || ""), Lt;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          V,
          H
        ), J.getCurrentStack = st;
      }
    }
    function b(v) {
      var V = "", H = c();
      return H && (H = e(H.type)) && (V = `

Check the render method of \`` + H + "`."), V || (v = e(v)) && (V = `

Check the top-level render call using <` + v + ">."), V;
    }
    var S = fi, _ = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), T = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), z = Symbol.iterator, Q = Symbol.for("react.client.reference"), J = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ot = Object.prototype.hasOwnProperty, X = Object.assign, O = Symbol.for("react.client.reference"), j = Array.isArray, Y = 0, E, G, $, F, ct, ut, dt;
    s.__reactDisabledLog = !0;
    var ft, yt, lt = !1, gt = new (typeof WeakMap == "function" ? WeakMap : Map)(), Kt = Symbol.for("react.client.reference"), $t, Dt = {}, Ct = {}, Pt = {};
    Bs.Fragment = w, Bs.jsx = function(v, V, H, st, Lt) {
      return p(v, V, H, !1, st, Lt);
    }, Bs.jsxs = function(v, V, H, st, Lt) {
      return p(v, V, H, !0, st, Lt);
    };
  }()), Bs;
}
var Lc;
function ry() {
  return Lc || (Lc = 1, process.env.NODE_ENV === "production" ? Yi.exports = iy() : Yi.exports = oy()), Yi.exports;
}
var L = ry();
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Fi(e) {
  return e + 0.5 | 0;
}
const vn = (e, t, n) => Math.max(Math.min(e, n), t);
function Ks(e) {
  return vn(Fi(e * 2.55), 0, 255);
}
function An(e) {
  return vn(Fi(e * 255), 0, 255);
}
function on(e) {
  return vn(Fi(e / 2.55) / 100, 0, 1);
}
function Ic(e) {
  return vn(Fi(e * 100), 0, 100);
}
const Me = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, la = [..."0123456789ABCDEF"], ay = (e) => la[e & 15], ly = (e) => la[(e & 240) >> 4] + la[e & 15], Ki = (e) => (e & 240) >> 4 === (e & 15), cy = (e) => Ki(e.r) && Ki(e.g) && Ki(e.b) && Ki(e.a);
function uy(e) {
  var t = e.length, n;
  return e[0] === "#" && (t === 4 || t === 5 ? n = {
    r: 255 & Me[e[1]] * 17,
    g: 255 & Me[e[2]] * 17,
    b: 255 & Me[e[3]] * 17,
    a: t === 5 ? Me[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (n = {
    r: Me[e[1]] << 4 | Me[e[2]],
    g: Me[e[3]] << 4 | Me[e[4]],
    b: Me[e[5]] << 4 | Me[e[6]],
    a: t === 9 ? Me[e[7]] << 4 | Me[e[8]] : 255
  })), n;
}
const hy = (e, t) => e < 255 ? t(e) : "";
function dy(e) {
  var t = cy(e) ? ay : ly;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + hy(e.a, t) : void 0;
}
const fy = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ff(e, t, n) {
  const s = t * Math.min(n, 1 - n), i = (o, r = (o + e / 30) % 12) => n - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [i(0), i(8), i(4)];
}
function py(e, t, n) {
  const s = (i, o = (i + e / 60) % 6) => n - n * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function gy(e, t, n) {
  const s = ff(e, 1, 0.5);
  let i;
  for (t + n > 1 && (i = 1 / (t + n), t *= i, n *= i), i = 0; i < 3; i++)
    s[i] *= 1 - t - n, s[i] += t;
  return s;
}
function my(e, t, n, s, i) {
  return e === i ? (t - n) / s + (t < n ? 6 : 0) : t === i ? (n - e) / s + 2 : (e - t) / s + 4;
}
function cl(e) {
  const n = e.r / 255, s = e.g / 255, i = e.b / 255, o = Math.max(n, s, i), r = Math.min(n, s, i), a = (o + r) / 2;
  let l, c, u;
  return o !== r && (u = o - r, c = a > 0.5 ? u / (2 - o - r) : u / (o + r), l = my(n, s, i, u, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function ul(e, t, n, s) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, s)).map(An);
}
function hl(e, t, n) {
  return ul(ff, e, t, n);
}
function yy(e, t, n) {
  return ul(gy, e, t, n);
}
function by(e, t, n) {
  return ul(py, e, t, n);
}
function pf(e) {
  return (e % 360 + 360) % 360;
}
function xy(e) {
  const t = fy.exec(e);
  let n = 255, s;
  if (!t)
    return;
  t[5] !== s && (n = t[6] ? Ks(+t[5]) : An(+t[5]));
  const i = pf(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = yy(i, o, r) : t[1] === "hsv" ? s = by(i, o, r) : s = hl(i, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: n
  };
}
function vy(e, t) {
  var n = cl(e);
  n[0] = pf(n[0] + t), n = hl(n), e.r = n[0], e.g = n[1], e.b = n[2];
}
function _y(e) {
  if (!e)
    return;
  const t = cl(e), n = t[0], s = Ic(t[1]), i = Ic(t[2]);
  return e.a < 255 ? `hsla(${n}, ${s}%, ${i}%, ${on(e.a)})` : `hsl(${n}, ${s}%, ${i}%)`;
}
const Vc = {
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
}, Fc = {
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
function Sy() {
  const e = {}, t = Object.keys(Fc), n = Object.keys(Vc);
  let s, i, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], i = 0; i < n.length; i++)
      o = n[i], a = a.replace(o, Vc[o]);
    o = parseInt(Fc[r], 16), e[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let Xi;
function wy(e) {
  Xi || (Xi = Sy(), Xi.transparent = [0, 0, 0, 0]);
  const t = Xi[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Ay = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Py(e) {
  const t = Ay.exec(e);
  let n = 255, s, i, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      n = t[8] ? Ks(r) : vn(r * 255, 0, 255);
    }
    return s = +t[1], i = +t[3], o = +t[5], s = 255 & (t[2] ? Ks(s) : vn(s, 0, 255)), i = 255 & (t[4] ? Ks(i) : vn(i, 0, 255)), o = 255 & (t[6] ? Ks(o) : vn(o, 0, 255)), {
      r: s,
      g: i,
      b: o,
      a: n
    };
  }
}
function Ty(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${on(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const Dr = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, us = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function My(e, t, n) {
  const s = us(on(e.r)), i = us(on(e.g)), o = us(on(e.b));
  return {
    r: An(Dr(s + n * (us(on(t.r)) - s))),
    g: An(Dr(i + n * (us(on(t.g)) - i))),
    b: An(Dr(o + n * (us(on(t.b)) - o))),
    a: e.a + n * (t.a - e.a)
  };
}
function Gi(e, t, n) {
  if (e) {
    let s = cl(e);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * n, t === 0 ? 360 : 1)), s = hl(s), e.r = s[0], e.g = s[1], e.b = s[2];
  }
}
function gf(e, t) {
  return e && Object.assign(t || {}, e);
}
function Nc(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = An(e[3]))) : (t = gf(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = An(t.a)), t;
}
function Dy(e) {
  return e.charAt(0) === "r" ? Py(e) : xy(e);
}
class pi {
  constructor(t) {
    if (t instanceof pi)
      return t;
    const n = typeof t;
    let s;
    n === "object" ? s = Nc(t) : n === "string" && (s = uy(t) || wy(t) || Dy(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = gf(this._rgb);
    return t && (t.a = on(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Nc(t);
  }
  rgbString() {
    return this._valid ? Ty(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? dy(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? _y(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const s = this.rgb, i = t.rgb;
      let o;
      const r = n === o ? 0.5 : n, a = 2 * r - 1, l = s.a - i.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * i.r + 0.5, s.g = 255 & c * s.g + o * i.g + 0.5, s.b = 255 & c * s.b + o * i.b + 0.5, s.a = r * s.a + (1 - r) * i.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = My(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new pi(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = An(t), this;
  }
  clearer(t) {
    const n = this._rgb;
    return n.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, n = Fi(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return Gi(this._rgb, 2, t), this;
  }
  darken(t) {
    return Gi(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Gi(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Gi(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return vy(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function Je() {
}
const Cy = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function mt(e) {
  return e == null;
}
function Vt(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function pt(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function Ht(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function be(e, t) {
  return Ht(e) ? e : t;
}
function ht(e, t) {
  return typeof e > "u" ? t : e;
}
const ky = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t, mf = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function Tt(e, t, n) {
  if (e && typeof e.call == "function")
    return e.apply(n, t);
}
function St(e, t, n, s) {
  let i, o, r;
  if (Vt(e))
    for (o = e.length, i = 0; i < o; i++)
      t.call(n, e[i], i);
  else if (pt(e))
    for (r = Object.keys(e), o = r.length, i = 0; i < o; i++)
      t.call(n, e[r[i]], r[i]);
}
function Oo(e, t) {
  let n, s, i, o;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (n = 0, s = e.length; n < s; ++n)
    if (i = e[n], o = t[n], i.datasetIndex !== o.datasetIndex || i.index !== o.index)
      return !1;
  return !0;
}
function Ro(e) {
  if (Vt(e))
    return e.map(Ro);
  if (pt(e)) {
    const t = /* @__PURE__ */ Object.create(null), n = Object.keys(e), s = n.length;
    let i = 0;
    for (; i < s; ++i)
      t[n[i]] = Ro(e[n[i]]);
    return t;
  }
  return e;
}
function yf(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function Ey(e, t, n, s) {
  if (!yf(e))
    return;
  const i = t[e], o = n[e];
  pt(i) && pt(o) ? gi(i, o, s) : t[e] = Ro(o);
}
function gi(e, t, n) {
  const s = Vt(t) ? t : [
    t
  ], i = s.length;
  if (!pt(e))
    return e;
  n = n || {};
  const o = n.merger || Ey;
  let r;
  for (let a = 0; a < i; ++a) {
    if (r = s[a], !pt(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, u = l.length; c < u; ++c)
      o(l[c], e, r, n);
  }
  return e;
}
function ni(e, t) {
  return gi(e, t, {
    merger: Oy
  });
}
function Oy(e, t, n) {
  if (!yf(e))
    return;
  const s = t[e], i = n[e];
  pt(s) && pt(i) ? ni(s, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Ro(i));
}
const Bc = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function Ry(e) {
  const t = e.split("."), n = [];
  let s = "";
  for (const i of t)
    s += i, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (n.push(s), s = "");
  return n;
}
function Ly(e) {
  const t = Ry(e);
  return (n) => {
    for (const s of t) {
      if (s === "")
        break;
      n = n && n[s];
    }
    return n;
  };
}
function Mn(e, t) {
  return (Bc[t] || (Bc[t] = Ly(t)))(e);
}
function dl(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const mi = (e) => typeof e < "u", Dn = (e) => typeof e == "function", jc = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
};
function Iy(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const Rt = Math.PI, Ot = 2 * Rt, Vy = Ot + Rt, Lo = Number.POSITIVE_INFINITY, Fy = Rt / 180, Ut = Rt / 2, Nn = Rt / 4, $c = Rt * 2 / 3, _n = Math.log10, Ue = Math.sign;
function si(e, t, n) {
  return Math.abs(e - t) < n;
}
function Hc(e) {
  const t = Math.round(e);
  e = si(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(_n(e))), s = e / n;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * n;
}
function Ny(e) {
  const t = [], n = Math.sqrt(e);
  let s;
  for (s = 1; s < n; s++)
    e % s === 0 && (t.push(s), t.push(e / s));
  return n === (n | 0) && t.push(n), t.sort((i, o) => i - o).pop(), t;
}
function ws(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function By(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function bf(e, t, n) {
  let s, i, o;
  for (s = 0, i = e.length; s < i; s++)
    o = e[s][n], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Ie(e) {
  return e * (Rt / 180);
}
function fl(e) {
  return e * (180 / Rt);
}
function zc(e) {
  if (!Ht(e))
    return;
  let t = 1, n = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, n++;
  return n;
}
function xf(e, t) {
  const n = t.x - e.x, s = t.y - e.y, i = Math.sqrt(n * n + s * s);
  let o = Math.atan2(s, n);
  return o < -0.5 * Rt && (o += Ot), {
    angle: o,
    distance: i
  };
}
function ca(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function jy(e, t) {
  return (e - t + Vy) % Ot - Rt;
}
function ve(e) {
  return (e % Ot + Ot) % Ot;
}
function yi(e, t, n, s) {
  const i = ve(e), o = ve(t), r = ve(n), a = ve(o - i), l = ve(r - i), c = ve(i - o), u = ve(i - r);
  return i === o || i === r || s && o === r || a > l && c < u;
}
function Zt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function $y(e) {
  return Zt(e, -32768, 32767);
}
function rn(e, t, n, s = 1e-6) {
  return e >= Math.min(t, n) - s && e <= Math.max(t, n) + s;
}
function pl(e, t, n) {
  n = n || ((r) => e[r] < t);
  let s = e.length - 1, i = 0, o;
  for (; s - i > 1; )
    o = i + s >> 1, n(o) ? i = o : s = o;
  return {
    lo: i,
    hi: s
  };
}
const an = (e, t, n, s) => pl(e, n, s ? (i) => {
  const o = e[i][t];
  return o < n || o === n && e[i + 1][t] === n;
} : (i) => e[i][t] < n), Hy = (e, t, n) => pl(e, n, (s) => e[s][t] >= n);
function zy(e, t, n) {
  let s = 0, i = e.length;
  for (; s < i && e[s] < t; )
    s++;
  for (; i > s && e[i - 1] > n; )
    i--;
  return s > 0 || i < e.length ? e.slice(s, i) : e;
}
const vf = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Wy(e, t) {
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
  }), vf.forEach((n) => {
    const s = "_onData" + dl(n), i = e[n];
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
function Wc(e, t) {
  const n = e._chartjs;
  if (!n)
    return;
  const s = n.listeners, i = s.indexOf(t);
  i !== -1 && s.splice(i, 1), !(s.length > 0) && (vf.forEach((o) => {
    delete e[o];
  }), delete e._chartjs);
}
function _f(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const Sf = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function wf(e, t) {
  let n = [], s = !1;
  return function(...i) {
    n = i, s || (s = !0, Sf.call(window, () => {
      s = !1, e.apply(t, n);
    }));
  };
}
function Uy(e, t) {
  let n;
  return function(...s) {
    return t ? (clearTimeout(n), n = setTimeout(e, t, s)) : e.apply(this, s), t;
  };
}
const gl = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", se = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2, Yy = (e, t, n, s) => e === (s ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function Af(e, t, n) {
  const s = t.length;
  let i = 0, o = s;
  if (e._sorted) {
    const { iScale: r, _parsed: a } = e, l = r.axis, { min: c, max: u, minDefined: h, maxDefined: d } = r.getUserBounds();
    h && (i = Zt(Math.min(
      // @ts-expect-error Need to type _parsed
      an(a, l, c).lo,
      // @ts-expect-error Need to fix types on _lookupByKey
      n ? s : an(t, l, r.getPixelForValue(c)).lo
    ), 0, s - 1)), d ? o = Zt(Math.max(
      // @ts-expect-error Need to type _parsed
      an(a, r.axis, u, !0).hi + 1,
      // @ts-expect-error Need to fix types on _lookupByKey
      n ? 0 : an(t, l, r.getPixelForValue(u), !0).hi + 1
    ), i, s) - i : o = s - i;
  }
  return {
    start: i,
    count: o
  };
}
function Pf(e) {
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
const qi = (e) => e === 0 || e === 1, Uc = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * Ot / n)), Yc = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * Ot / n) + 1, ii = {
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
  easeInSine: (e) => -Math.cos(e * Ut) + 1,
  easeOutSine: (e) => Math.sin(e * Ut),
  easeInOutSine: (e) => -0.5 * (Math.cos(Rt * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => qi(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => qi(e) ? e : Uc(e, 0.075, 0.3),
  easeOutElastic: (e) => qi(e) ? e : Yc(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return qi(e) ? e : e < 0.5 ? 0.5 * Uc(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * Yc(e * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (e) => 1 - ii.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? ii.easeInBounce(e * 2) * 0.5 : ii.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function ml(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Kc(e) {
  return ml(e) ? e : new pi(e);
}
function Cr(e) {
  return ml(e) ? e : new pi(e).saturate(0.5).darken(0.1).hexString();
}
const Ky = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Xy = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Gy(e) {
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
      properties: Xy
    },
    numbers: {
      type: "number",
      properties: Ky
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
function qy(e) {
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
const Xc = /* @__PURE__ */ new Map();
function Zy(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let s = Xc.get(n);
  return s || (s = new Intl.NumberFormat(e, t), Xc.set(n, s)), s;
}
function Ni(e, t, n) {
  return Zy(t, n).format(e);
}
const Tf = {
  values(e) {
    return Vt(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0)
      return "0";
    const s = this.chart.options.locale;
    let i, o = e;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), o = Qy(e, n);
    }
    const r = _n(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: i,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Ni(e, s, l);
  },
  logarithmic(e, t, n) {
    if (e === 0)
      return "0";
    const s = n[t].significand || e / Math.pow(10, Math.floor(_n(e)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(s) || t > 0.8 * n.length ? Tf.numeric.call(this, e, t, n) : "";
  }
};
function Qy(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var sr = {
  formatters: Tf
};
function Jy(e) {
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
      callback: sr.formatters.values,
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
const ts = /* @__PURE__ */ Object.create(null), ua = /* @__PURE__ */ Object.create(null);
function oi(e, t) {
  if (!t)
    return e;
  const n = t.split(".");
  for (let s = 0, i = n.length; s < i; ++s) {
    const o = n[s];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function kr(e, t, n) {
  return typeof t == "string" ? gi(oi(e, t), n) : gi(oi(e, ""), t);
}
class tb {
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, i) => Cr(i.backgroundColor), this.hoverBorderColor = (s, i) => Cr(i.borderColor), this.hoverColor = (s, i) => Cr(i.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(n);
  }
  set(t, n) {
    return kr(this, t, n);
  }
  get(t) {
    return oi(this, t);
  }
  describe(t, n) {
    return kr(ua, t, n);
  }
  override(t, n) {
    return kr(ts, t, n);
  }
  route(t, n, s, i) {
    const o = oi(this, t), r = oi(this, s), a = "_" + n;
    Object.defineProperties(o, {
      [a]: {
        value: o[n],
        writable: !0
      },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[i];
          return pt(l) ? Object.assign({}, c, l) : ht(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var Ft = /* @__PURE__ */ new tb({
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
  Gy,
  qy,
  Jy
]);
function eb(e) {
  return !e || mt(e.size) || mt(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function Io(e, t, n, s, i) {
  let o = t[i];
  return o || (o = t[i] = e.measureText(i).width, n.push(i)), o > s && (s = o), s;
}
function nb(e, t, n, s) {
  s = s || {};
  let i = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (i = s.data = {}, o = s.garbageCollect = [], s.font = t), e.save(), e.font = t;
  let r = 0;
  const a = n.length;
  let l, c, u, h, d;
  for (l = 0; l < a; l++)
    if (h = n[l], h != null && !Vt(h))
      r = Io(e, i, o, r, h);
    else if (Vt(h))
      for (c = 0, u = h.length; c < u; c++)
        d = h[c], d != null && !Vt(d) && (r = Io(e, i, o, r, d));
  e.restore();
  const f = o.length / 2;
  if (f > n.length) {
    for (l = 0; l < f; l++)
      delete i[o[l]];
    o.splice(0, f);
  }
  return r;
}
function Bn(e, t, n) {
  const s = e.currentDevicePixelRatio, i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - i) * s) / s + i;
}
function Gc(e, t) {
  !t && !e || (t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore());
}
function ha(e, t, n, s) {
  Mf(e, t, n, s, null);
}
function Mf(e, t, n, s, i) {
  let o, r, a, l, c, u, h, d;
  const f = t.pointStyle, p = t.rotation, g = t.radius;
  let m = (p || 0) * Fy;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(n, s), e.rotate(m), e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), e.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (e.beginPath(), f) {
      // Default includes circle
      default:
        i ? e.ellipse(n, s, i / 2, g, 0, 0, Ot) : e.arc(n, s, g, 0, Ot), e.closePath();
        break;
      case "triangle":
        u = i ? i / 2 : g, e.moveTo(n + Math.sin(m) * u, s - Math.cos(m) * g), m += $c, e.lineTo(n + Math.sin(m) * u, s - Math.cos(m) * g), m += $c, e.lineTo(n + Math.sin(m) * u, s - Math.cos(m) * g), e.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, r = Math.cos(m + Nn) * l, h = Math.cos(m + Nn) * (i ? i / 2 - c : l), a = Math.sin(m + Nn) * l, d = Math.sin(m + Nn) * (i ? i / 2 - c : l), e.arc(n - h, s - a, c, m - Rt, m - Ut), e.arc(n + d, s - r, c, m - Ut, m), e.arc(n + h, s + a, c, m, m + Ut), e.arc(n - d, s + r, c, m + Ut, m + Rt), e.closePath();
        break;
      case "rect":
        if (!p) {
          l = Math.SQRT1_2 * g, u = i ? i / 2 : l, e.rect(n - u, s - l, 2 * u, 2 * l);
          break;
        }
        m += Nn;
      /* falls through */
      case "rectRot":
        h = Math.cos(m) * (i ? i / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, d = Math.sin(m) * (i ? i / 2 : g), e.moveTo(n - h, s - a), e.lineTo(n + d, s - r), e.lineTo(n + h, s + a), e.lineTo(n - d, s + r), e.closePath();
        break;
      case "crossRot":
        m += Nn;
      /* falls through */
      case "cross":
        h = Math.cos(m) * (i ? i / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, d = Math.sin(m) * (i ? i / 2 : g), e.moveTo(n - h, s - a), e.lineTo(n + h, s + a), e.moveTo(n + d, s - r), e.lineTo(n - d, s + r);
        break;
      case "star":
        h = Math.cos(m) * (i ? i / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, d = Math.sin(m) * (i ? i / 2 : g), e.moveTo(n - h, s - a), e.lineTo(n + h, s + a), e.moveTo(n + d, s - r), e.lineTo(n - d, s + r), m += Nn, h = Math.cos(m) * (i ? i / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, d = Math.sin(m) * (i ? i / 2 : g), e.moveTo(n - h, s - a), e.lineTo(n + h, s + a), e.moveTo(n + d, s - r), e.lineTo(n - d, s + r);
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
function ln(e, t, n) {
  return n = n || 0.5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n;
}
function ir(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function or(e) {
  e.restore();
}
function sb(e, t, n, s, i) {
  if (!t)
    return e.lineTo(n.x, n.y);
  if (i === "middle") {
    const o = (t.x + n.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, n.y);
  } else i === "after" != !!s ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function ib(e, t, n, s) {
  if (!t)
    return e.lineTo(n.x, n.y);
  e.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? n.cp2x : n.cp1x, s ? n.cp2y : n.cp1y, n.x, n.y);
}
function ob(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), mt(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function rb(e, t, n, s, i) {
  if (i.strikethrough || i.underline) {
    const o = e.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = n - o.actualBoundingBoxAscent, c = n + o.actualBoundingBoxDescent, u = i.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(r, u), e.lineTo(a, u), e.stroke();
  }
}
function ab(e, t) {
  const n = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = n;
}
function es(e, t, n, s, i, o = {}) {
  const r = Vt(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = i.string, ob(e, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && ab(e, o.backdrop), a && (o.strokeColor && (e.strokeStyle = o.strokeColor), mt(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, n, s, o.maxWidth)), e.fillText(c, n, s, o.maxWidth), rb(e, n, s, c, o), s += Number(i.lineHeight);
  e.restore();
}
function bi(e, t) {
  const { x: n, y: s, w: i, h: o, radius: r } = t;
  e.arc(n + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * Rt, Rt, !0), e.lineTo(n, s + o - r.bottomLeft), e.arc(n + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, Rt, Ut, !0), e.lineTo(n + i - r.bottomRight, s + o), e.arc(n + i - r.bottomRight, s + o - r.bottomRight, r.bottomRight, Ut, 0, !0), e.lineTo(n + i, s + r.topRight), e.arc(n + i - r.topRight, s + r.topRight, r.topRight, 0, -Ut, !0), e.lineTo(n + r.topLeft, s);
}
const lb = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, cb = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function ub(e, t) {
  const n = ("" + e).match(lb);
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
const hb = (e) => +e || 0;
function yl(e, t) {
  const n = {}, s = pt(t), i = s ? Object.keys(t) : t, o = pt(e) ? s ? (r) => ht(e[r], e[t[r]]) : (r) => e[r] : () => e;
  for (const r of i)
    n[r] = hb(o(r));
  return n;
}
function Df(e) {
  return yl(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Gn(e) {
  return yl(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function ae(e) {
  const t = Df(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Xt(e, t) {
  e = e || {}, t = t || Ft.font;
  let n = ht(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let s = ht(e.style, t.style);
  s && !("" + s).match(cb) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const i = {
    family: ht(e.family, t.family),
    lineHeight: ub(ht(e.lineHeight, t.lineHeight), n),
    size: n,
    style: s,
    weight: ht(e.weight, t.weight),
    string: ""
  };
  return i.string = eb(i), i;
}
function Xs(e, t, n, s) {
  let i, o, r;
  for (i = 0, o = e.length; i < o; ++i)
    if (r = e[i], r !== void 0 && r !== void 0)
      return r;
}
function db(e, t, n) {
  const { min: s, max: i } = e, o = mf(t, (i - s) / 2), r = (a, l) => n && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(i, o)
  };
}
function On(e, t) {
  return Object.assign(Object.create(e), t);
}
function bl(e, t = [
  ""
], n, s, i = () => e[0]) {
  const o = n || e;
  typeof s > "u" && (s = Of("_fallback", e));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: s,
    _getTarget: i,
    override: (a) => bl([
      a,
      ...e
    ], t, o, s)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete e[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return kf(a, l, () => vb(l, t, e, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
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
    has(a, l) {
      return Zc(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return Zc(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const u = a._storage || (a._storage = i());
      return a[l] = u[l] = c, delete a._keys, !0;
    }
  });
}
function As(e, t, n, s) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Cf(e, s),
    setContext: (o) => As(e, o, n, s),
    override: (o) => As(e.override(o), t, n, s)
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
      return kf(o, r, () => pb(o, r, a));
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
function Cf(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: n = t.scriptable, _indexable: s = t.indexable, _allKeys: i = t.allKeys } = e;
  return {
    allKeys: i,
    scriptable: n,
    indexable: s,
    isScriptable: Dn(n) ? n : () => n,
    isIndexable: Dn(s) ? s : () => s
  };
}
const fb = (e, t) => e ? e + dl(t) : t, xl = (e, t) => pt(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function kf(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const s = n();
  return e[t] = s, s;
}
function pb(e, t, n) {
  const { _proxy: s, _context: i, _subProxy: o, _descriptors: r } = e;
  let a = s[t];
  return Dn(a) && r.isScriptable(t) && (a = gb(t, a, e, n)), Vt(a) && a.length && (a = mb(t, a, e, r.isIndexable)), xl(t, a) && (a = As(a, i, o && o[t], r)), a;
}
function gb(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _stack: a } = n;
  if (a.has(e))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
  a.add(e);
  let l = t(o, r || s);
  return a.delete(e), xl(e, l) && (l = vl(i._scopes, i, e, l)), l;
}
function mb(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _descriptors: a } = n;
  if (typeof o.index < "u" && s(e))
    return t[o.index % t.length];
  if (pt(t[0])) {
    const l = t, c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const h = vl(c, i, e, u);
      t.push(As(h, o, r && r[e], a));
    }
  }
  return t;
}
function Ef(e, t, n) {
  return Dn(e) ? e(t, n) : e;
}
const yb = (e, t) => e === !0 ? t : typeof e == "string" ? Mn(t, e) : void 0;
function bb(e, t, n, s, i) {
  for (const o of t) {
    const r = yb(n, o);
    if (r) {
      e.add(r);
      const a = Ef(r._fallback, n, i);
      if (typeof a < "u" && a !== n && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && n !== s)
      return null;
  }
  return !1;
}
function vl(e, t, n, s) {
  const i = t._rootScopes, o = Ef(t._fallback, n, s), r = [
    ...e,
    ...i
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = qc(a, r, n, o || n, s);
  return l === null || typeof o < "u" && o !== n && (l = qc(a, r, o, l, s), l === null) ? !1 : bl(Array.from(a), [
    ""
  ], i, o, () => xb(t, n, s));
}
function qc(e, t, n, s, i) {
  for (; n; )
    n = bb(e, t, n, s, i);
  return n;
}
function xb(e, t, n) {
  const s = e._getTarget();
  t in s || (s[t] = {});
  const i = s[t];
  return Vt(i) && pt(n) ? n : i || {};
}
function vb(e, t, n, s) {
  let i;
  for (const o of t)
    if (i = Of(fb(o, e), n), typeof i < "u")
      return xl(e, i) ? vl(n, s, e, i) : i;
}
function Of(e, t) {
  for (const n of t) {
    if (!n)
      continue;
    const s = n[e];
    if (typeof s < "u")
      return s;
  }
}
function Zc(e) {
  let t = e._keys;
  return t || (t = e._keys = _b(e._scopes)), t;
}
function _b(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const s of Object.keys(n).filter((i) => !i.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function Rf(e, t, n, s) {
  const { iScale: i } = e, { key: o = "r" } = this._parsing, r = new Array(s);
  let a, l, c, u;
  for (a = 0, l = s; a < l; ++a)
    c = a + n, u = t[c], r[a] = {
      r: i.parse(Mn(u, o), c)
    };
  return r;
}
const Sb = Number.EPSILON || 1e-14, Ps = (e, t) => t < e.length && !e[t].skip && e[t], Lf = (e) => e === "x" ? "y" : "x";
function wb(e, t, n, s) {
  const i = e.skip ? t : e, o = t, r = n.skip ? t : n, a = ca(o, i), l = ca(r, o);
  let c = a / (a + l), u = l / (a + l);
  c = isNaN(c) ? 0 : c, u = isNaN(u) ? 0 : u;
  const h = s * c, d = s * u;
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
function Ab(e, t, n) {
  const s = e.length;
  let i, o, r, a, l, c = Ps(e, 0);
  for (let u = 0; u < s - 1; ++u)
    if (l = c, c = Ps(e, u + 1), !(!l || !c)) {
      if (si(t[u], 0, Sb)) {
        n[u] = n[u + 1] = 0;
        continue;
      }
      i = n[u] / t[u], o = n[u + 1] / t[u], a = Math.pow(i, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), n[u] = i * r * t[u], n[u + 1] = o * r * t[u]);
    }
}
function Pb(e, t, n = "x") {
  const s = Lf(n), i = e.length;
  let o, r, a, l = Ps(e, 0);
  for (let c = 0; c < i; ++c) {
    if (r = a, a = l, l = Ps(e, c + 1), !a)
      continue;
    const u = a[n], h = a[s];
    r && (o = (u - r[n]) / 3, a[`cp1${n}`] = u - o, a[`cp1${s}`] = h - o * t[c]), l && (o = (l[n] - u) / 3, a[`cp2${n}`] = u + o, a[`cp2${s}`] = h + o * t[c]);
  }
}
function Tb(e, t = "x") {
  const n = Lf(t), s = e.length, i = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Ps(e, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Ps(e, r + 1), !!l) {
      if (c) {
        const u = c[t] - l[t];
        i[r] = u !== 0 ? (c[n] - l[n]) / u : 0;
      }
      o[r] = a ? c ? Ue(i[r - 1]) !== Ue(i[r]) ? 0 : (i[r - 1] + i[r]) / 2 : i[r - 1] : i[r];
    }
  Ab(e, i, o), Pb(e, o, t);
}
function Zi(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function Mb(e, t) {
  let n, s, i, o, r, a = ln(e[0], t);
  for (n = 0, s = e.length; n < s; ++n)
    r = o, o = a, a = n < s - 1 && ln(e[n + 1], t), o && (i = e[n], r && (i.cp1x = Zi(i.cp1x, t.left, t.right), i.cp1y = Zi(i.cp1y, t.top, t.bottom)), a && (i.cp2x = Zi(i.cp2x, t.left, t.right), i.cp2y = Zi(i.cp2y, t.top, t.bottom)));
}
function Db(e, t, n, s, i) {
  let o, r, a, l;
  if (t.spanGaps && (e = e.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Tb(e, i);
  else {
    let c = s ? e[e.length - 1] : e[0];
    for (o = 0, r = e.length; o < r; ++o)
      a = e[o], l = wb(c, a, e[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && Mb(e, n);
}
function _l() {
  return typeof window < "u" && typeof document < "u";
}
function Sl(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Vo(e, t, n) {
  let s;
  return typeof e == "string" ? (s = parseInt(e, 10), e.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[n])) : s = e, s;
}
const rr = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function Cb(e, t) {
  return rr(e).getPropertyValue(t);
}
const kb = [
  "top",
  "right",
  "bottom",
  "left"
];
function qn(e, t, n) {
  const s = {};
  n = n ? "-" + n : "";
  for (let i = 0; i < 4; i++) {
    const o = kb[i];
    s[o] = parseFloat(e[t + "-" + o + n]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Eb = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Ob(e, t) {
  const n = e.touches, s = n && n.length ? n[0] : e, { offsetX: i, offsetY: o } = s;
  let r = !1, a, l;
  if (Eb(i, o, e.target))
    a = i, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = s.clientX - c.left, l = s.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function zn(e, t) {
  if ("native" in e)
    return e;
  const { canvas: n, currentDevicePixelRatio: s } = t, i = rr(n), o = i.boxSizing === "border-box", r = qn(i, "padding"), a = qn(i, "border", "width"), { x: l, y: c, box: u } = Ob(e, n), h = r.left + (u && a.left), d = r.top + (u && a.top);
  let { width: f, height: p } = t;
  return o && (f -= r.width + a.width, p -= r.height + a.height), {
    x: Math.round((l - h) / f * n.width / s),
    y: Math.round((c - d) / p * n.height / s)
  };
}
function Rb(e, t, n) {
  let s, i;
  if (t === void 0 || n === void 0) {
    const o = e && Sl(e);
    if (!o)
      t = e.clientWidth, n = e.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = rr(o), l = qn(a, "border", "width"), c = qn(a, "padding");
      t = r.width - c.width - l.width, n = r.height - c.height - l.height, s = Vo(a.maxWidth, o, "clientWidth"), i = Vo(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: n,
    maxWidth: s || Lo,
    maxHeight: i || Lo
  };
}
const Qi = (e) => Math.round(e * 10) / 10;
function Lb(e, t, n, s) {
  const i = rr(e), o = qn(i, "margin"), r = Vo(i.maxWidth, e, "clientWidth") || Lo, a = Vo(i.maxHeight, e, "clientHeight") || Lo, l = Rb(e, t, n);
  let { width: c, height: u } = l;
  if (i.boxSizing === "content-box") {
    const d = qn(i, "border", "width"), f = qn(i, "padding");
    c -= f.width + d.width, u -= f.height + d.height;
  }
  return c = Math.max(0, c - o.width), u = Math.max(0, s ? c / s : u - o.height), c = Qi(Math.min(c, r, l.maxWidth)), u = Qi(Math.min(u, a, l.maxHeight)), c && !u && (u = Qi(c / 2)), (t !== void 0 || n !== void 0) && s && l.height && u > l.height && (u = l.height, c = Qi(Math.floor(u * s))), {
    width: c,
    height: u
  };
}
function Qc(e, t, n) {
  const s = t || 1, i = Math.floor(e.height * s), o = Math.floor(e.width * s);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const r = e.canvas;
  return r.style && (n || !r.style.height && !r.style.width) && (r.style.height = `${e.height}px`, r.style.width = `${e.width}px`), e.currentDevicePixelRatio !== s || r.height !== i || r.width !== o ? (e.currentDevicePixelRatio = s, r.height = i, r.width = o, e.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Ib = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    _l() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
}();
function Jc(e, t) {
  const n = Cb(e, t), s = n && n.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Wn(e, t, n, s) {
  return {
    x: e.x + n * (t.x - e.x),
    y: e.y + n * (t.y - e.y)
  };
}
function Vb(e, t, n, s) {
  return {
    x: e.x + n * (t.x - e.x),
    y: s === "middle" ? n < 0.5 ? e.y : t.y : s === "after" ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y
  };
}
function Fb(e, t, n, s) {
  const i = {
    x: e.cp2x,
    y: e.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Wn(e, i, n), a = Wn(i, o, n), l = Wn(o, t, n), c = Wn(r, a, n), u = Wn(a, l, n);
  return Wn(c, u, n);
}
const Nb = function(e, t) {
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
}, Bb = function() {
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
function vs(e, t, n) {
  return e ? Nb(t, n) : Bb();
}
function If(e, t) {
  let n, s;
  (t === "ltr" || t === "rtl") && (n = e.canvas.style, s = [
    n.getPropertyValue("direction"),
    n.getPropertyPriority("direction")
  ], n.setProperty("direction", t, "important"), e.prevTextDirection = s);
}
function Vf(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
function Ff(e) {
  return e === "angle" ? {
    between: yi,
    compare: jy,
    normalize: ve
  } : {
    between: rn,
    compare: (t, n) => t - n,
    normalize: (t) => t
  };
}
function tu({ start: e, end: t, count: n, loop: s, style: i }) {
  return {
    start: e % n,
    end: t % n,
    loop: s && (t - e + 1) % n === 0,
    style: i
  };
}
function jb(e, t, n) {
  const { property: s, start: i, end: o } = n, { between: r, normalize: a } = Ff(s), l = t.length;
  let { start: c, end: u, loop: h } = e, d, f;
  if (h) {
    for (c += l, u += l, d = 0, f = l; d < f && r(a(t[c % l][s]), i, o); ++d)
      c--, u--;
    c %= l, u %= l;
  }
  return u < c && (u += l), {
    start: c,
    end: u,
    loop: h,
    style: e.style
  };
}
function Nf(e, t, n) {
  if (!n)
    return [
      e
    ];
  const { property: s, start: i, end: o } = n, r = t.length, { compare: a, between: l, normalize: c } = Ff(s), { start: u, end: h, loop: d, style: f } = jb(e, t, n), p = [];
  let g = !1, m = null, y, b, S;
  const _ = () => l(i, S, y) && a(i, S) !== 0, x = () => a(o, y) === 0 || l(o, S, y), w = () => g || _(), A = () => !g || x();
  for (let P = u, M = u; P <= h; ++P)
    b = t[P % r], !b.skip && (y = c(b[s]), y !== S && (g = l(y, i, o), m === null && w() && (m = a(y, i) === 0 ? P : M), m !== null && A() && (p.push(tu({
      start: m,
      end: P,
      loop: d,
      count: r,
      style: f
    })), m = null), M = P, S = y));
  return m !== null && p.push(tu({
    start: m,
    end: h,
    loop: d,
    count: r,
    style: f
  })), p;
}
function Bf(e, t) {
  const n = [], s = e.segments;
  for (let i = 0; i < s.length; i++) {
    const o = Nf(s[i], e.points, t);
    o.length && n.push(...o);
  }
  return n;
}
function $b(e, t, n, s) {
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
function Hb(e, t, n, s) {
  const i = e.length, o = [];
  let r = t, a = e[t], l;
  for (l = t + 1; l <= n; ++l) {
    const c = e[l % i];
    c.skip || c.stop ? a.skip || (s = !1, o.push({
      start: t % i,
      end: (l - 1) % i,
      loop: s
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % i,
    end: r % i,
    loop: s
  }), o;
}
function zb(e, t) {
  const n = e.points, s = e.options.spanGaps, i = n.length;
  if (!i)
    return [];
  const o = !!e._loop, { start: r, end: a } = $b(n, i, o, s);
  if (s === !0)
    return eu(e, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], n, t);
  const l = a < r ? a + i : a, c = !!e._fullLoop && r === 0 && a === i - 1;
  return eu(e, Hb(n, r, l, c), n, t);
}
function eu(e, t, n, s) {
  return !s || !s.setContext || !n ? t : Wb(e, t, n, s);
}
function Wb(e, t, n, s) {
  const i = e._chart.getContext(), o = nu(e.options), { _datasetIndex: r, options: { spanGaps: a } } = e, l = n.length, c = [];
  let u = o, h = t[0].start, d = h;
  function f(p, g, m, y) {
    const b = a ? -1 : 1;
    if (p !== g) {
      for (p += l; n[p % l].skip; )
        p -= b;
      for (; n[g % l].skip; )
        g += b;
      p % l !== g % l && (c.push({
        start: p % l,
        end: g % l,
        loop: m,
        style: y
      }), u = y, h = g % l);
    }
  }
  for (const p of t) {
    h = a ? h : p.start;
    let g = n[h % l], m;
    for (d = h + 1; d <= p.end; d++) {
      const y = n[d % l];
      m = nu(s.setContext(On(i, {
        type: "segment",
        p0: g,
        p1: y,
        p0DataIndex: (d - 1) % l,
        p1DataIndex: d % l,
        datasetIndex: r
      }))), Ub(m, u) && f(h, d - 1, p.loop, u), g = y, u = m;
    }
    h < d - 1 && f(h, d - 1, p.loop, u);
  }
  return c;
}
function nu(e) {
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
function Ub(e, t) {
  if (!t)
    return !1;
  const n = [], s = function(i, o) {
    return ml(o) ? (n.includes(o) || n.push(o), n.indexOf(o)) : o;
  };
  return JSON.stringify(e, s) !== JSON.stringify(t, s);
}
/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
class Yb {
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
    this._request || (this._running = !0, this._request = Sf.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((s, i) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
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
var tn = /* @__PURE__ */ new Yb();
const su = "transparent", Kb = {
  boolean(e, t, n) {
    return n > 0.5 ? t : e;
  },
  color(e, t, n) {
    const s = Kc(e || su), i = s.valid && Kc(t || su);
    return i && i.valid ? i.mix(s, n).hexString() : t;
  },
  number(e, t, n) {
    return e + (t - e) * n;
  }
};
class Xb {
  constructor(t, n, s, i) {
    const o = n[s];
    i = Xs([
      t.to,
      i,
      o,
      t.from
    ]);
    const r = Xs([
      t.from,
      o,
      i
    ]);
    this._active = !0, this._fn = t.fn || Kb[t.type || typeof r], this._easing = ii[t.easing] || ii.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = n, this._prop = s, this._from = r, this._to = i, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, n, s) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Xs([
        t.to,
        n,
        i,
        t.from
      ]), this._from = Xs([
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
    let l;
    if (this._active = o !== a && (r || n < s), !this._active) {
      this._target[i] = a, this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[i] = o;
      return;
    }
    l = n / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[i] = this._fn(o, a, l);
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
class jf {
  constructor(t, n) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(n);
  }
  configure(t) {
    if (!pt(t))
      return;
    const n = Object.keys(Ft.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const o = t[i];
      if (!pt(o))
        return;
      const r = {};
      for (const a of n)
        r[a] = o[a];
      (Vt(o.properties) && o.properties || [
        i
      ]).forEach((a) => {
        (a === i || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, n) {
    const s = n.options, i = qb(t, s);
    if (!i)
      return [];
    const o = this._createAnimations(i, s);
    return s.$shared && Gb(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, n) {
    const s = this._properties, i = [], o = t.$animations || (t.$animations = {}), r = Object.keys(n), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        i.push(...this._animateOptions(t, n));
        continue;
      }
      const u = n[c];
      let h = o[c];
      const d = s.get(c);
      if (h)
        if (d && h.active()) {
          h.update(d, u, a);
          continue;
        } else
          h.cancel();
      if (!d || !d.duration) {
        t[c] = u;
        continue;
      }
      o[c] = h = new Xb(d, t, c, u), i.push(h);
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
      return tn.add(this._chart, s), !0;
  }
}
function Gb(e, t) {
  const n = [], s = Object.keys(t);
  for (let i = 0; i < s.length; i++) {
    const o = e[s[i]];
    o && o.active() && n.push(o.wait());
  }
  return Promise.all(n);
}
function qb(e, t) {
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
function iu(e, t) {
  const n = e && e.options || {}, s = n.reverse, i = n.min === void 0 ? t : 0, o = n.max === void 0 ? t : 0;
  return {
    start: s ? o : i,
    end: s ? i : o
  };
}
function Zb(e, t, n) {
  if (n === !1)
    return !1;
  const s = iu(e, n), i = iu(t, n);
  return {
    top: i.end,
    right: s.end,
    bottom: i.start,
    left: s.start
  };
}
function Qb(e) {
  let t, n, s, i;
  return pt(e) ? (t = e.top, n = e.right, s = e.bottom, i = e.left) : t = n = s = i = e, {
    top: t,
    right: n,
    bottom: s,
    left: i,
    disabled: e === !1
  };
}
function $f(e, t) {
  const n = [], s = e._getSortedDatasetMetas(t);
  let i, o;
  for (i = 0, o = s.length; i < o; ++i)
    n.push(s[i].index);
  return n;
}
function ou(e, t, n, s = {}) {
  const i = e.keys, o = s.mode === "single";
  let r, a, l, c;
  if (t === null)
    return;
  let u = !1;
  for (r = 0, a = i.length; r < a; ++r) {
    if (l = +i[r], l === n) {
      if (u = !0, s.all)
        continue;
      break;
    }
    c = e.values[l], Ht(c) && (o || t === 0 || Ue(t) === Ue(c)) && (t += c);
  }
  return !u && !s.all ? 0 : t;
}
function Jb(e, t) {
  const { iScale: n, vScale: s } = t, i = n.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(e), a = new Array(r.length);
  let l, c, u;
  for (l = 0, c = r.length; l < c; ++l)
    u = r[l], a[l] = {
      [i]: u,
      [o]: e[u]
    };
  return a;
}
function Er(e, t) {
  const n = e && e.options.stacked;
  return n || n === void 0 && t.stack !== void 0;
}
function t0(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function e0(e) {
  const { min: t, max: n, minDefined: s, maxDefined: i } = e.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY
  };
}
function n0(e, t, n) {
  const s = e[t] || (e[t] = {});
  return s[n] || (s[n] = {});
}
function ru(e, t, n, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const o = e[i.index];
    if (n && o > 0 || !n && o < 0)
      return i.index;
  }
  return null;
}
function au(e, t) {
  const { chart: n, _cachedMeta: s } = e, i = n._stacks || (n._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, u = t0(o, r, s), h = t.length;
  let d;
  for (let f = 0; f < h; ++f) {
    const p = t[f], { [l]: g, [c]: m } = p, y = p._stacks || (p._stacks = {});
    d = y[c] = n0(i, u, g), d[a] = m, d._top = ru(d, r, !0, s.type), d._bottom = ru(d, r, !1, s.type);
    const b = d._visualValues || (d._visualValues = {});
    b[a] = m;
  }
}
function Or(e, t) {
  const n = e.scales;
  return Object.keys(n).filter((s) => n[s].axis === t).shift();
}
function s0(e, t) {
  return On(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function i0(e, t, n) {
  return On(e, {
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
function js(e, t) {
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
const Rr = (e) => e === "reset" || e === "none", lu = (e, t) => t ? e : Object.assign({}, e), o0 = (e, t, n) => e && !t.hidden && t._stacked && {
  keys: $f(n, !0),
  values: null
};
class Fe {
  constructor(t, n) {
    this.chart = t, this._ctx = t.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Er(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && js(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, n = this._cachedMeta, s = this.getDataset(), i = (h, d, f, p) => h === "x" ? d : h === "r" ? p : f, o = n.xAxisID = ht(s.xAxisID, Or(t, "x")), r = n.yAxisID = ht(s.yAxisID, Or(t, "y")), a = n.rAxisID = ht(s.rAxisID, Or(t, "r")), l = n.indexAxis, c = n.iAxisID = i(l, o, r, a), u = n.vAxisID = i(l, r, o, a);
    n.xScale = this.getScaleForId(o), n.yScale = this.getScaleForId(r), n.rScale = this.getScaleForId(a), n.iScale = this.getScaleForId(c), n.vScale = this.getScaleForId(u);
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
    this._data && Wc(this._data, this), t._stacked && js(t);
  }
  _dataCheck() {
    const t = this.getDataset(), n = t.data || (t.data = []), s = this._data;
    if (pt(n)) {
      const i = this._cachedMeta;
      this._data = Jb(n, i);
    } else if (s !== n) {
      if (s) {
        Wc(s, this);
        const i = this._cachedMeta;
        js(i), i._parsed = [];
      }
      n && Object.isExtensible(n) && Wy(n, this), this._syncList = [], this._data = n;
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
    n._stacked = Er(n.vScale, n), n.stack !== s.stack && (i = !0, js(n), n.stack = s.stack), this._resyncElements(t), (i || o !== n._stacked) && (au(this, n._parsed), n._stacked = Er(n.vScale, n));
  }
  configure() {
    const t = this.chart.config, n = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), n, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, n) {
    const { _cachedMeta: s, _data: i } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let l = t === 0 && n === i.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], u, h, d;
    if (this._parsing === !1)
      s._parsed = i, s._sorted = !0, d = i;
    else {
      Vt(i[t]) ? d = this.parseArrayData(s, i, t, n) : pt(i[t]) ? d = this.parseObjectData(s, i, t, n) : d = this.parsePrimitiveData(s, i, t, n);
      const f = () => h[a] === null || c && h[a] < c[a];
      for (u = 0; u < n; ++u)
        s._parsed[u + t] = h = d[u], l && (f() && (l = !1), c = h);
      s._sorted = l;
    }
    r && au(this, d);
  }
  parsePrimitiveData(t, n, s, i) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), u = o === r, h = new Array(i);
    let d, f, p;
    for (d = 0, f = i; d < f; ++d)
      p = d + s, h[d] = {
        [a]: u || o.parse(c[p], p),
        [l]: r.parse(n[p], p)
      };
    return h;
  }
  parseArrayData(t, n, s, i) {
    const { xScale: o, yScale: r } = t, a = new Array(i);
    let l, c, u, h;
    for (l = 0, c = i; l < c; ++l)
      u = l + s, h = n[u], a[l] = {
        x: o.parse(h[0], u),
        y: r.parse(h[1], u)
      };
    return a;
  }
  parseObjectData(t, n, s, i) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(i);
    let u, h, d, f;
    for (u = 0, h = i; u < h; ++u)
      d = u + s, f = n[d], c[u] = {
        x: o.parse(Mn(f, a), d),
        y: r.parse(Mn(f, l), d)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, s) {
    const i = this.chart, o = this._cachedMeta, r = n[t.axis], a = {
      keys: $f(i, !0),
      values: n._stacks[t.axis]._visualValues
    };
    return ou(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, n, s, i) {
    const o = s[n.axis];
    let r = o === null ? NaN : o;
    const a = i && s._stacks[n.axis];
    i && a && (i.values = a, r = ou(i, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, n) {
    const s = this._cachedMeta, i = s._parsed, o = s._sorted && t === s.iScale, r = i.length, a = this._getOtherScale(t), l = o0(n, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: h } = e0(a);
    let d, f;
    function p() {
      f = i[d];
      const g = f[a.axis];
      return !Ht(f[t.axis]) || u > g || h < g;
    }
    for (d = 0; d < r && !(!p() && (this.updateRangeFromParsed(c, t, f, l), o)); ++d)
      ;
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!p()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed, s = [];
    let i, o, r;
    for (i = 0, o = n.length; i < o; ++i)
      r = n[i][t.axis], Ht(r) && s.push(r);
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
    this.update(t || "default"), n._clip = Qb(ht(this.options.clip, Zb(n.xScale, n.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, n = this.chart, s = this._cachedMeta, i = s.data || [], o = n.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || i.length - a, c = this.options.drawActiveElementsOnTop;
    let u;
    for (s.dataset && s.dataset.draw(t, o, a, l), u = a; u < a + l; ++u) {
      const h = i[u];
      h.hidden || (h.active && c ? r.push(h) : h.draw(t, o));
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
      o = r.$context || (r.$context = i0(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = i.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = s0(this.chart.getContext(), this.index)), o.dataset = i, o.index = o.datasetIndex = this.index;
    return o.active = !!n, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", s) {
    const i = n === "active", o = this._cachedDataOpts, r = t + "-" + n, a = o[r], l = this.enableOptionSharing && mi(s);
    if (a)
      return lu(a, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, t), h = i ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), u), f = Object.keys(Ft.elements[t]), p = () => this.getContext(s, i, n), g = c.resolveNamedOptions(d, f, p, h);
    return g.$shared && (g.$shared = l, o[r] = Object.freeze(lu(g, l))), g;
  }
  _resolveAnimations(t, n, s) {
    const i = this.chart, o = this._cachedDataOpts, r = `animation-${n}`, a = o[r];
    if (a)
      return a;
    let l;
    if (i.options.animation !== !1) {
      const u = this.chart.config, h = u.datasetAnimationScopeKeys(this._type, n), d = u.getOptionScopes(this.getDataset(), h);
      l = u.createResolver(d, this.getContext(t, s, n));
    }
    const c = new jf(i, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, n) {
    return !n || Rr(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const s = this.resolveDataElementOptions(t, n), i = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(n, o) || o !== i;
    return this.updateSharedOptions(o, n, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, n, s, i) {
    Rr(i) ? Object.assign(t, s) : this._resolveAnimations(n, i).update(t, s);
  }
  updateSharedOptions(t, n, s) {
    t && !Rr(n) && this._resolveAnimations(void 0, n).update(t, s);
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
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const i = s.length, o = n.length, r = Math.min(o, i);
    r && this.parse(0, r), o > i ? this._insertElements(i, o - i, t) : o < i && this._removeElements(o, i - o);
  }
  _insertElements(t, n, s = !0) {
    const i = this._cachedMeta, o = i.data, r = t + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= r; a--)
        c[a] = c[a - n];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(i._parsed), this.parse(t, n), s && this.updateElements(o, t, n, "reset");
  }
  updateElements(t, n, s, i) {
  }
  _removeElements(t, n) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const i = s._parsed.splice(t, n);
      s._stacked && js(s, i);
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
B(Fe, "defaults", {}), B(Fe, "datasetElementType", null), B(Fe, "dataElementType", null);
function r0(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t);
    let s = [];
    for (let i = 0, o = n.length; i < o; i++)
      s = s.concat(n[i].controller.getAllParsedValues(e));
    e._cache.$bar = _f(s.sort((i, o) => i - o));
  }
  return e._cache.$bar;
}
function a0(e) {
  const t = e.iScale, n = r0(t, e.type);
  let s = t._length, i, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (mi(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (i = 0, o = n.length; i < o; ++i)
    r = t.getPixelForValue(n[i]), l();
  for (a = void 0, i = 0, o = t.ticks.length; i < o; ++i)
    r = t.getPixelForTick(i), l();
  return s;
}
function l0(e, t, n, s) {
  const i = n.barThickness;
  let o, r;
  return mt(i) ? (o = t.min * n.categoryPercentage, r = n.barPercentage) : (o = i * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[e] - o / 2
  };
}
function c0(e, t, n, s) {
  const i = t.pixels, o = i[e];
  let r = e > 0 ? i[e - 1] : null, a = e < i.length - 1 ? i[e + 1] : null;
  const l = n.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
  const c = o - (o - Math.min(r, a)) / 2 * l;
  return {
    chunk: Math.abs(a - r) / 2 * l / s,
    ratio: n.barPercentage,
    start: c
  };
}
function u0(e, t, n, s) {
  const i = n.parse(e[0], s), o = n.parse(e[1], s), r = Math.min(i, o), a = Math.max(i, o);
  let l = r, c = a;
  Math.abs(r) > Math.abs(a) && (l = a, c = r), t[n.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: i,
    end: o,
    min: r,
    max: a
  };
}
function Hf(e, t, n, s) {
  return Vt(e) ? u0(e, t, n, s) : t[n.axis] = n.parse(e, s), t;
}
function cu(e, t, n, s) {
  const i = e.iScale, o = e.vScale, r = i.getLabels(), a = i === o, l = [];
  let c, u, h, d;
  for (c = n, u = n + s; c < u; ++c)
    d = t[c], h = {}, h[i.axis] = a || i.parse(r[c], c), l.push(Hf(d, h, o, c));
  return l;
}
function Lr(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function h0(e, t, n) {
  return e !== 0 ? Ue(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
}
function d0(e) {
  let t, n, s, i, o;
  return e.horizontal ? (t = e.base > e.x, n = "left", s = "right") : (t = e.base < e.y, n = "bottom", s = "top"), t ? (i = "end", o = "start") : (i = "start", o = "end"), {
    start: n,
    end: s,
    reverse: t,
    top: i,
    bottom: o
  };
}
function f0(e, t, n, s) {
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
  const { start: r, end: a, reverse: l, top: c, bottom: u } = d0(e);
  i === "middle" && n && (e.enableBorderRadius = !0, (n._top || 0) === s ? i = c : (n._bottom || 0) === s ? i = u : (o[uu(u, r, a, l)] = !0, i = c)), o[uu(i, r, a, l)] = !0, e.borderSkipped = o;
}
function uu(e, t, n, s) {
  return s ? (e = p0(e, t, n), e = hu(e, n, t)) : e = hu(e, t, n), e;
}
function p0(e, t, n) {
  return e === t ? n : e === n ? t : e;
}
function hu(e, t, n) {
  return e === "start" ? t : e === "end" ? n : e;
}
function g0(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === "auto" ? n === 1 ? 0.33 : 0 : t;
}
class yo extends Fe {
  parsePrimitiveData(t, n, s, i) {
    return cu(t, n, s, i);
  }
  parseArrayData(t, n, s, i) {
    return cu(t, n, s, i);
  }
  parseObjectData(t, n, s, i) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, u = r.axis === "x" ? a : l, h = [];
    let d, f, p, g;
    for (d = s, f = s + i; d < f; ++d)
      g = n[d], p = {}, p[o.axis] = o.parse(Mn(g, c), d), h.push(Hf(Mn(g, u), p, r, d));
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
    const n = this._cachedMeta, { iScale: s, vScale: i } = n, o = this.getParsed(t), r = o._custom, a = Lr(r) ? "[" + r.start + ", " + r.end + "]" : "" + i.getLabelForValue(o[i.axis]);
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
    const o = i === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), u = this._getRuler(), { sharedOptions: h, includeOptions: d } = this._getSharedOptions(n, i);
    for (let f = n; f < n + s; f++) {
      const p = this.getParsed(f), g = o || mt(p[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, u), y = (p._stacks || {})[a.axis], b = {
        horizontal: c,
        base: g.base,
        enableBorderRadius: !y || Lr(p._custom) || r === y._top || r === y._bottom,
        x: c ? g.head : m.center,
        y: c ? m.center : g.head,
        height: c ? m.size : Math.abs(g.size),
        width: c ? Math.abs(g.size) : m.size
      };
      d && (b.options = h || this.resolveDataElementOptions(f, t[f].active ? "active" : i));
      const S = b.options || t[f].options;
      f0(b, S, y, r), g0(b, S, u.ratio), this.updateElement(t[f], f, b, i);
    }
  }
  _getStacks(t, n) {
    const { iScale: s } = this._cachedMeta, i = s.getMatchingVisibleMetas(this._type).filter((u) => u.controller.options.grouped), o = s.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(n), l = a && a[s.axis], c = (u) => {
      const h = u._parsed.find((f) => f[s.axis] === l), d = h && h[u.vScale.axis];
      if (mt(d) || isNaN(d))
        return !0;
    };
    for (const u of i)
      if (!(n !== void 0 && c(u)) && ((o === !1 || r.indexOf(u.stack) === -1 || o === void 0 && u.stack === void 0) && r.push(u.stack), u.index === t))
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
      min: a || a0(n),
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
    const { _cachedMeta: { vScale: n, _stacked: s, index: i }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, u = Lr(c);
    let h = l[n.axis], d = 0, f = s ? this.applyStack(n, l, s) : h, p, g;
    f !== h && (d = f - h, f = h), u && (h = c.barStart, f = c.barEnd - c.barStart, h !== 0 && Ue(h) !== Ue(c.barEnd) && (d = 0), d += h);
    const m = !mt(o) && !u ? o : d;
    let y = n.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? p = n.getPixelForValue(d + f) : p = y, g = p - y, Math.abs(g) < r) {
      g = h0(g, n, a) * r, h === a && (y -= g / 2);
      const b = n.getPixelForDecimal(0), S = n.getPixelForDecimal(1), _ = Math.min(b, S), x = Math.max(b, S);
      y = Math.max(Math.min(y, x), _), p = y + g, s && !u && (l._stacks[n.axis]._visualValues[i] = n.getValueForPixel(p) - n.getValueForPixel(y));
    }
    if (y === n.getPixelForValue(a)) {
      const b = Ue(g) * n.getLineWidthForValue(a) / 2;
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
    const s = n.scale, i = this.options, o = i.skipNull, r = ht(i.maxBarThickness, 1 / 0);
    let a, l;
    if (n.grouped) {
      const c = o ? this._getStackCount(t) : n.stackCount, u = i.barThickness === "flex" ? c0(t, n, i, c) : l0(t, n, i, c), h = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      a = u.start + u.chunk * h + u.chunk / 2, l = Math.min(r, u.chunk * u.ratio);
    } else
      a = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(r, n.min * n.ratio);
    return {
      base: a - l / 2,
      head: a + l / 2,
      center: a,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, n = t.vScale, s = t.data, i = s.length;
    let o = 0;
    for (; o < i; ++o)
      this.getParsed(o)[n.axis] !== null && !s[o].hidden && s[o].draw(this._ctx);
  }
}
B(yo, "id", "bar"), B(yo, "defaults", {
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
}), B(yo, "overrides", {
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
class bo extends Fe {
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
      o[r]._custom = ht(a[2], this.resolveDataElementOptions(r + s).radius);
    }
    return o;
  }
  parseObjectData(t, n, s, i) {
    const o = super.parseObjectData(t, n, s, i);
    for (let r = 0; r < o.length; r++) {
      const a = n[s + r];
      o[r]._custom = ht(a && a.r && +a.r, this.resolveDataElementOptions(r + s).radius);
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
    const n = this._cachedMeta, s = this.chart.data.labels || [], { xScale: i, yScale: o } = n, r = this.getParsed(t), a = i.getLabelForValue(r.x), l = o.getLabelForValue(r.y), c = r._custom;
    return {
      label: s[t] || "",
      value: "(" + a + ", " + l + (c ? ", " + c : "") + ")"
    };
  }
  update(t) {
    const n = this._cachedMeta.data;
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", { iScale: r, vScale: a } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(n, i), u = r.axis, h = a.axis;
    for (let d = n; d < n + s; d++) {
      const f = t[d], p = !o && this.getParsed(d), g = {}, m = g[u] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(p[u]), y = g[h] = o ? a.getBasePixel() : a.getPixelForValue(p[h]);
      g.skip = isNaN(m) || isNaN(y), c && (g.options = l || this.resolveDataElementOptions(d, f.active ? "active" : i), o && (g.options.radius = 0)), this.updateElement(f, d, g, i);
    }
  }
  resolveDataElementOptions(t, n) {
    const s = this.getParsed(t);
    let i = super.resolveDataElementOptions(t, n);
    i.$shared && (i = Object.assign({}, i, {
      $shared: !1
    }));
    const o = i.radius;
    return n !== "active" && (i.radius = 0), i.radius += ht(s && s._custom, o), i;
  }
}
B(bo, "id", "bubble"), B(bo, "defaults", {
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
}), B(bo, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function m0(e, t, n) {
  let s = 1, i = 1, o = 0, r = 0;
  if (t < Ot) {
    const a = e, l = a + t, c = Math.cos(a), u = Math.sin(a), h = Math.cos(l), d = Math.sin(l), f = (S, _, x) => yi(S, a, l, !0) ? 1 : Math.max(_, _ * n, x, x * n), p = (S, _, x) => yi(S, a, l, !0) ? -1 : Math.min(_, _ * n, x, x * n), g = f(0, c, h), m = f(Ut, u, d), y = p(Rt, c, h), b = p(Rt + Ut, u, d);
    s = (g - y) / 2, i = (m - b) / 2, o = -(g + y) / 2, r = -(m + b) / 2;
  }
  return {
    ratioX: s,
    ratioY: i,
    offsetX: o,
    offsetY: r
  };
}
class Yn extends Fe {
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
      let o = (l) => +s[l];
      if (pt(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +Mn(s[c], l);
      }
      let r, a;
      for (r = t, a = t + n; r < a; ++r)
        i._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return Ie(this.options.rotation - 90);
  }
  _getCircumference() {
    return Ie(this.options.circumference);
  }
  _getRotationExtents() {
    let t = Ot, n = -Ot;
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
    const n = this.chart, { chartArea: s } = n, i = this._cachedMeta, o = i.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(ky(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: u, rotation: h } = this._getRotationExtents(), { ratioX: d, ratioY: f, offsetX: p, offsetY: g } = m0(h, u, l), m = (s.width - r) / d, y = (s.height - r) / f, b = Math.max(Math.min(m, y) / 2, 0), S = mf(this.options.radius, b), _ = Math.max(S * l, 0), x = (S - _) / this._getVisibleDatasetWeightTotal();
    this.offsetX = p * S, this.offsetY = g * S, i.total = this.calculateTotal(), this.outerRadius = S - x * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, n) {
    const s = this.options, i = this._cachedMeta, o = this._getCircumference();
    return n && s.animation.animateRotate || !this.chart.getDataVisibility(t) || i._parsed[t] === null || i.data[t].hidden ? 0 : this.calculateCircumference(i._parsed[t] * o / Ot);
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, u = (a.left + a.right) / 2, h = (a.top + a.bottom) / 2, d = o && c.animateScale, f = d ? 0 : this.innerRadius, p = d ? 0 : this.outerRadius, { sharedOptions: g, includeOptions: m } = this._getSharedOptions(n, i);
    let y = this._getRotation(), b;
    for (b = 0; b < n; ++b)
      y += this._circumference(b, o);
    for (b = n; b < n + s; ++b) {
      const S = this._circumference(b, o), _ = t[b], x = {
        x: u + this.offsetX,
        y: h + this.offsetY,
        startAngle: y,
        endAngle: y + S,
        circumference: S,
        outerRadius: p,
        innerRadius: f
      };
      m && (x.options = g || this.resolveDataElementOptions(b, _.active ? "active" : i)), y += S, this.updateElement(_, b, x, i);
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
    return n > 0 && !isNaN(t) ? Ot * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart, i = s.data.labels || [], o = Ni(n._parsed[t], s.options.locale);
    return {
      label: i[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const s = this.chart;
    let i, o, r, a, l;
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
      l = a.resolveDataElementOptions(i), l.borderAlign !== "inner" && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
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
    return Math.max(ht(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
B(Yn, "id", "doughnut"), B(Yn, "defaults", {
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
}), B(Yn, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), B(Yn, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const n = t.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: s, color: i } } = t.legend.options;
            return n.labels.map((o, r) => {
              const l = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: i,
                lineWidth: l.borderWidth,
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
class xo extends Fe {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const n = this._cachedMeta, { dataset: s, data: i = [], _dataset: o } = n, r = this.chart._animationsDisabled;
    let { start: a, count: l } = Af(n, i, r);
    this._drawStart = a, this._drawCount = l, Pf(n) && (a = 0, l = i.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = i;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(i, a, l, t);
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: u, includeOptions: h } = this._getSharedOptions(n, i), d = r.axis, f = a.axis, { spanGaps: p, segment: g } = this.options, m = ws(p) ? p : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || o || i === "none", b = n + s, S = t.length;
    let _ = n > 0 && this.getParsed(n - 1);
    for (let x = 0; x < S; ++x) {
      const w = t[x], A = y ? w : {};
      if (x < n || x >= b) {
        A.skip = !0;
        continue;
      }
      const P = this.getParsed(x), M = mt(P[f]), T = A[d] = r.getPixelForValue(P[d], x), C = A[f] = o || M ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, P, l) : P[f], x);
      A.skip = isNaN(T) || isNaN(C) || M, A.stop = x > 0 && Math.abs(P[d] - _[d]) > m, g && (A.parsed = P, A.raw = c.data[x]), h && (A.options = u || this.resolveDataElementOptions(x, w.active ? "active" : i)), y || this.updateElement(w, x, A, i), _ = P;
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
B(xo, "id", "line"), B(xo, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), B(xo, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class ri extends Fe {
  constructor(t, n) {
    super(t, n), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart, i = s.data.labels || [], o = Ni(n._parsed[t].r, s.options.locale);
    return {
      label: i[t] || "",
      value: o
    };
  }
  parseObjectData(t, n, s, i) {
    return Rf.bind(this)(t, n, s, i);
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
    const o = i === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, u = c.xCenter, h = c.yCenter, d = c.getIndexAngle(0) - 0.5 * Rt;
    let f = d, p;
    const g = 360 / this.countVisibleElements();
    for (p = 0; p < n; ++p)
      f += this._computeAngle(p, i, g);
    for (p = n; p < n + s; p++) {
      const m = t[p];
      let y = f, b = f + this._computeAngle(p, i, g), S = r.getDataVisibility(p) ? c.getDistanceFromCenterForValue(this.getParsed(p).r) : 0;
      f = b, o && (l.animateScale && (S = 0), l.animateRotate && (y = b = d));
      const _ = {
        x: u,
        y: h,
        innerRadius: 0,
        outerRadius: S,
        startAngle: y,
        endAngle: b,
        options: this.resolveDataElementOptions(p, m.active ? "active" : i)
      };
      this.updateElement(m, p, _, i);
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
    return this.chart.getDataVisibility(t) ? Ie(this.resolveDataElementOptions(t, n).angle || s) : 0;
  }
}
B(ri, "id", "polarArea"), B(ri, "defaults", {
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
}), B(ri, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const n = t.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: s, color: i } } = t.legend.options;
            return n.labels.map((o, r) => {
              const l = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: i,
                lineWidth: l.borderWidth,
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
class da extends Yn {
}
B(da, "id", "pie"), B(da, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class vo extends Fe {
  getLabelAndValue(t) {
    const n = this._cachedMeta.vScale, s = this.getParsed(t);
    return {
      label: n.getLabels()[t],
      value: "" + n.getLabelForValue(s[n.axis])
    };
  }
  parseObjectData(t, n, s, i) {
    return Rf.bind(this)(t, n, s, i);
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
      const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : i), u = o.getPointPositionForValue(a, this.getParsed(a).r), h = r ? o.xCenter : u.x, d = r ? o.yCenter : u.y, f = {
        x: h,
        y: d,
        angle: u.angle,
        skip: isNaN(h) || isNaN(d),
        options: c
      };
      this.updateElement(l, a, f, i);
    }
  }
}
B(vo, "id", "radar"), B(vo, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), B(vo, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class _o extends Fe {
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart.data.labels || [], { xScale: i, yScale: o } = n, r = this.getParsed(t), a = i.getLabelForValue(r.x), l = o.getLabelForValue(r.y);
    return {
      label: s[t] || "",
      value: "(" + a + ", " + l + ")"
    };
  }
  update(t) {
    const n = this._cachedMeta, { data: s = [] } = n, i = this.chart._animationsDisabled;
    let { start: o, count: r } = Af(n, s, i);
    if (this._drawStart = o, this._drawCount = r, Pf(n) && (o = 0, r = s.length), this.options.showLine) {
      this.datasetElementType || this.addElements();
      const { dataset: a, _dataset: l } = n;
      a._chart = this.chart, a._datasetIndex = this.index, a._decimated = !!l._decimated, a.points = s;
      const c = this.resolveDatasetElementOptions(t);
      c.segment = this.options.segment, this.updateElement(a, void 0, {
        animated: !i,
        options: c
      }, t);
    } else this.datasetElementType && (delete n.dataset, this.datasetElementType = !1);
    this.updateElements(s, o, r, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, u = this.resolveDataElementOptions(n, i), h = this.getSharedOptions(u), d = this.includeOptions(i, h), f = r.axis, p = a.axis, { spanGaps: g, segment: m } = this.options, y = ws(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || i === "none";
    let S = n > 0 && this.getParsed(n - 1);
    for (let _ = n; _ < n + s; ++_) {
      const x = t[_], w = this.getParsed(_), A = b ? x : {}, P = mt(w[p]), M = A[f] = r.getPixelForValue(w[f], _), T = A[p] = o || P ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, w, l) : w[p], _);
      A.skip = isNaN(M) || isNaN(T) || P, A.stop = _ > 0 && Math.abs(w[f] - S[f]) > y, m && (A.parsed = w, A.raw = c.data[_]), d && (A.options = h || this.resolveDataElementOptions(_, x.active ? "active" : i)), b || this.updateElement(x, _, A, i), S = w;
    }
    this.updateSharedOptions(h, i, u);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, n = t.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let l = n.length - 1; l >= 0; --l)
        a = Math.max(a, n[l].size(this.resolveDataElementOptions(l)) / 2);
      return a > 0 && a;
    }
    const s = t.dataset, i = s.options && s.options.borderWidth || 0;
    if (!n.length)
      return i;
    const o = n[0].size(this.resolveDataElementOptions(0)), r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(i, o, r) / 2;
  }
}
B(_o, "id", "scatter"), B(_o, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), B(_o, "overrides", {
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
var y0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: yo,
  BubbleController: bo,
  DoughnutController: Yn,
  LineController: xo,
  PieController: da,
  PolarAreaController: ri,
  RadarController: vo,
  ScatterController: _o
});
function jn() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class wl {
  constructor(t) {
    B(this, "options");
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
    Object.assign(wl.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return jn();
  }
  parse() {
    return jn();
  }
  format() {
    return jn();
  }
  add() {
    return jn();
  }
  diff() {
    return jn();
  }
  startOf() {
    return jn();
  }
  endOf() {
    return jn();
  }
}
var b0 = {
  _date: wl
};
function x0(e, t, n, s) {
  const { controller: i, data: o, _sorted: r } = e, a = i._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? Hy : an;
    if (s) {
      if (i._sharedOptions) {
        const c = o[0], u = typeof c.getRange == "function" && c.getRange(t);
        if (u) {
          const h = l(o, t, n - u), d = l(o, t, n + u);
          return {
            lo: h.lo,
            hi: d.hi
          };
        }
      }
    } else return l(o, t, n);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function ar(e, t, n, s, i) {
  const o = e.getSortedVisibleDatasetMetas(), r = n[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: u } = o[a], { lo: h, hi: d } = x0(o[a], t, r, i);
    for (let f = h; f <= d; ++f) {
      const p = u[f];
      p.skip || s(p, c, f);
    }
  }
}
function v0(e) {
  const t = e.indexOf("x") !== -1, n = e.indexOf("y") !== -1;
  return function(s, i) {
    const o = t ? Math.abs(s.x - i.x) : 0, r = n ? Math.abs(s.y - i.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Ir(e, t, n, s, i) {
  const o = [];
  return !i && !e.isPointInArea(t) || ar(e, n, t, function(a, l, c) {
    !i && !ln(a, e.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function _0(e, t, n, s) {
  let i = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: u } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: h } = xf(r, {
      x: t.x,
      y: t.y
    });
    yi(h, c, u) && i.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return ar(e, n, t, o), i;
}
function S0(e, t, n, s, i, o) {
  let r = [];
  const a = v0(n);
  let l = Number.POSITIVE_INFINITY;
  function c(u, h, d) {
    const f = u.inRange(t.x, t.y, i);
    if (s && !f)
      return;
    const p = u.getCenterPoint(i);
    if (!(!!o || e.isPointInArea(p)) && !f)
      return;
    const m = a(t, p);
    m < l ? (r = [
      {
        element: u,
        datasetIndex: h,
        index: d
      }
    ], l = m) : m === l && r.push({
      element: u,
      datasetIndex: h,
      index: d
    });
  }
  return ar(e, n, t, c), r;
}
function Vr(e, t, n, s, i, o) {
  return !o && !e.isPointInArea(t) ? [] : n === "r" && !s ? _0(e, t, n, i) : S0(e, t, n, s, i, o);
}
function du(e, t, n, s, i) {
  const o = [], r = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return ar(e, n, t, (l, c, u) => {
    l[r] && l[r](t[n], i) && (o.push({
      element: l,
      datasetIndex: c,
      index: u
    }), a = a || l.inRange(t.x, t.y, i));
  }), s && !a ? [] : o;
}
var w0 = {
  modes: {
    index(e, t, n, s) {
      const i = zn(t, e), o = n.axis || "x", r = n.includeInvisible || !1, a = n.intersect ? Ir(e, i, o, s, r) : Vr(e, i, o, !1, s, r), l = [];
      return a.length ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
        const u = a[0].index, h = c.data[u];
        h && !h.skip && l.push({
          element: h,
          datasetIndex: c.index,
          index: u
        });
      }), l) : [];
    },
    dataset(e, t, n, s) {
      const i = zn(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      let a = n.intersect ? Ir(e, i, o, s, r) : Vr(e, i, o, !1, s, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = e.getDatasetMeta(l).data;
        a = [];
        for (let u = 0; u < c.length; ++u)
          a.push({
            element: c[u],
            datasetIndex: l,
            index: u
          });
      }
      return a;
    },
    point(e, t, n, s) {
      const i = zn(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return Ir(e, i, o, s, r);
    },
    nearest(e, t, n, s) {
      const i = zn(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return Vr(e, i, o, n.intersect, s, r);
    },
    x(e, t, n, s) {
      const i = zn(t, e);
      return du(e, i, "x", n.intersect, s);
    },
    y(e, t, n, s) {
      const i = zn(t, e);
      return du(e, i, "y", n.intersect, s);
    }
  }
};
const zf = [
  "left",
  "top",
  "right",
  "bottom"
];
function $s(e, t) {
  return e.filter((n) => n.pos === t);
}
function fu(e, t) {
  return e.filter((n) => zf.indexOf(n.pos) === -1 && n.box.axis === t);
}
function Hs(e, t) {
  return e.sort((n, s) => {
    const i = t ? s : n, o = t ? n : s;
    return i.weight === o.weight ? i.index - o.index : i.weight - o.weight;
  });
}
function A0(e) {
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
function P0(e) {
  const t = {};
  for (const n of e) {
    const { stack: s, pos: i, stackWeight: o } = n;
    if (!s || !zf.includes(i))
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
function T0(e, t) {
  const n = P0(e), { vBoxMaxWidth: s, hBoxMaxHeight: i } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box, c = n[a.stack], u = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = u ? u * s : l && t.availableWidth, a.height = i) : (a.width = s, a.height = u ? u * i : l && t.availableHeight);
  }
  return n;
}
function M0(e) {
  const t = A0(e), n = Hs(t.filter((c) => c.box.fullSize), !0), s = Hs($s(t, "left"), !0), i = Hs($s(t, "right")), o = Hs($s(t, "top"), !0), r = Hs($s(t, "bottom")), a = fu(t, "x"), l = fu(t, "y");
  return {
    fullSize: n,
    leftAndTop: s.concat(o),
    rightAndBottom: i.concat(l).concat(r).concat(a),
    chartArea: $s(t, "chartArea"),
    vertical: s.concat(i).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function pu(e, t, n, s) {
  return Math.max(e[n], t[n]) + Math.max(e[s], t[s]);
}
function Wf(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function D0(e, t, n, s) {
  const { pos: i, box: o } = n, r = e.maxPadding;
  if (!pt(i)) {
    n.size && (e[i] -= n.size);
    const h = s[n.stack] || {
      size: 0,
      count: 1
    };
    h.size = Math.max(h.size, n.horizontal ? o.height : o.width), n.size = h.size / h.count, e[i] += n.size;
  }
  o.getPadding && Wf(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - pu(r, e, "left", "right")), l = Math.max(0, t.outerHeight - pu(r, e, "top", "bottom")), c = a !== e.w, u = l !== e.h;
  return e.w = a, e.h = l, n.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function C0(e) {
  const t = e.maxPadding;
  function n(s) {
    const i = Math.max(t[s] - e[s], 0);
    return e[s] += i, i;
  }
  e.y += n("top"), e.x += n("left"), n("right"), n("bottom");
}
function k0(e, t) {
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
function Gs(e, t, n, s) {
  const i = [];
  let o, r, a, l, c, u;
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    a = e[o], l = a.box, l.update(a.width || t.w, a.height || t.h, k0(a.horizontal, t));
    const { same: h, other: d } = D0(t, n, a, s);
    c |= h && i.length, u = u || d, l.fullSize || i.push(a);
  }
  return c && Gs(i, t, n, s) || u;
}
function Ji(e, t, n, s, i) {
  e.top = n, e.left = t, e.right = t + s, e.bottom = n + i, e.width = s, e.height = i;
}
function gu(e, t, n, s) {
  const i = n.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, u = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const h = t.w * u, d = c.size || l.height;
      mi(c.start) && (r = c.start), l.fullSize ? Ji(l, i.left, r, n.outerWidth - i.right - i.left, d) : Ji(l, t.left + c.placed, r, h, d), c.start = r, c.placed += h, r = l.bottom;
    } else {
      const h = t.h * u, d = c.size || l.width;
      mi(c.start) && (o = c.start), l.fullSize ? Ji(l, o, i.top, d, n.outerHeight - i.bottom - i.top) : Ji(l, o, t.top + c.placed, d, h), c.start = o, c.placed += h, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var oe = {
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
    const i = ae(e.options.layout.padding), o = Math.max(t - i.width, 0), r = Math.max(n - i.height, 0), a = M0(e.boxes), l = a.vertical, c = a.horizontal;
    St(e.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const u = l.reduce((g, m) => m.box.options && m.box.options.display === !1 ? g : g + 1, 0) || 1, h = Object.freeze({
      outerWidth: t,
      outerHeight: n,
      padding: i,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / u,
      hBoxMaxHeight: r / 2
    }), d = Object.assign({}, i);
    Wf(d, ae(s));
    const f = Object.assign({
      maxPadding: d,
      w: o,
      h: r,
      x: i.left,
      y: i.top
    }, i), p = T0(l.concat(c), h);
    Gs(a.fullSize, f, h, p), Gs(l, f, h, p), Gs(c, f, h, p) && Gs(l, f, h, p), C0(f), gu(a.leftAndTop, f, h, p), f.x += f.w, f.y += f.h, gu(a.rightAndBottom, f, h, p), e.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, St(a.chartArea, (g) => {
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
class Uf {
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
class E0 extends Uf {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const So = "$chartjs", O0 = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, mu = (e) => e === null || e === "";
function R0(e, t) {
  const n = e.style, s = e.getAttribute("height"), i = e.getAttribute("width");
  if (e[So] = {
    initial: {
      height: s,
      width: i,
      style: {
        display: n.display,
        height: n.height,
        width: n.width
      }
    }
  }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", mu(i)) {
    const o = Jc(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (mu(s))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const o = Jc(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const Yf = Ib ? {
  passive: !0
} : !1;
function L0(e, t, n) {
  e && e.addEventListener(t, n, Yf);
}
function I0(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, Yf);
}
function V0(e, t) {
  const n = O0[e.type] || e.type, { x: s, y: i } = zn(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null
  };
}
function Fo(e, t) {
  for (const n of e)
    if (n === t || n.contains(t))
      return !0;
}
function F0(e, t, n) {
  const s = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Fo(a.addedNodes, s), r = r && !Fo(a.removedNodes, s);
    r && n();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
function N0(e, t, n) {
  const s = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Fo(a.removedNodes, s), r = r && !Fo(a.addedNodes, s);
    r && n();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
const xi = /* @__PURE__ */ new Map();
let yu = 0;
function Kf() {
  const e = window.devicePixelRatio;
  e !== yu && (yu = e, xi.forEach((t, n) => {
    n.currentDevicePixelRatio !== e && t();
  }));
}
function B0(e, t) {
  xi.size || window.addEventListener("resize", Kf), xi.set(e, t);
}
function j0(e) {
  xi.delete(e), xi.size || window.removeEventListener("resize", Kf);
}
function $0(e, t, n) {
  const s = e.canvas, i = s && Sl(s);
  if (!i)
    return;
  const o = wf((a, l) => {
    const c = i.clientWidth;
    n(a, l), c < i.clientWidth && n();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || o(c, u);
  });
  return r.observe(i), B0(e, o), r;
}
function Fr(e, t, n) {
  n && n.disconnect(), t === "resize" && j0(e);
}
function H0(e, t, n) {
  const s = e.canvas, i = wf((o) => {
    e.ctx !== null && n(V0(o, e));
  }, e);
  return L0(s, t, i), i;
}
class z0 extends Uf {
  acquireContext(t, n) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (R0(t, n), s) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[So])
      return !1;
    const s = n[So].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      mt(r) ? n.removeAttribute(o) : n.setAttribute(o, r);
    });
    const i = s.style || {};
    return Object.keys(i).forEach((o) => {
      n.style[o] = i[o];
    }), n.width = n.width, delete n[So], !0;
  }
  addEventListener(t, n, s) {
    this.removeEventListener(t, n);
    const i = t.$proxies || (t.$proxies = {}), r = {
      attach: F0,
      detach: N0,
      resize: $0
    }[n] || H0;
    i[n] = r(t, n, s);
  }
  removeEventListener(t, n) {
    const s = t.$proxies || (t.$proxies = {}), i = s[n];
    if (!i)
      return;
    ({
      attach: Fr,
      detach: Fr,
      resize: Fr
    }[n] || I0)(t, n, i), s[n] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, s, i) {
    return Lb(t, n, s, i);
  }
  isAttached(t) {
    const n = t && Sl(t);
    return !!(n && n.isConnected);
  }
}
function W0(e) {
  return !_l() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? E0 : z0;
}
var mo;
let dn = (mo = class {
  constructor() {
    B(this, "x");
    B(this, "y");
    B(this, "active", !1);
    B(this, "options");
    B(this, "$animations");
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
    return ws(this.x) && ws(this.y);
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
}, B(mo, "defaults", {}), B(mo, "defaultRoutes"), mo);
function U0(e, t) {
  const n = e.options.ticks, s = Y0(e), i = Math.min(n.maxTicksLimit || s, s), o = n.major.enabled ? X0(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > i)
    return G0(t, c, o, r / i), c;
  const u = K0(o, t, i);
  if (r > 0) {
    let h, d;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (to(t, c, u, mt(f) ? 0 : a - f, a), h = 0, d = r - 1; h < d; h++)
      to(t, c, u, o[h], o[h + 1]);
    return to(t, c, u, l, mt(f) ? t.length : l + f), c;
  }
  return to(t, c, u), c;
}
function Y0(e) {
  const t = e.options.offset, n = e._tickSize(), s = e._length / n + (t ? 0 : 1), i = e._maxLength / n;
  return Math.floor(Math.min(s, i));
}
function K0(e, t, n) {
  const s = q0(e), i = t.length / n;
  if (!s)
    return Math.max(i, 1);
  const o = Ny(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > i)
      return l;
  }
  return Math.max(i, 1);
}
function X0(e) {
  const t = [];
  let n, s;
  for (n = 0, s = e.length; n < s; n++)
    e[n].major && t.push(n);
  return t;
}
function G0(e, t, n, s) {
  let i = 0, o = n[0], r;
  for (s = Math.ceil(s), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), i++, o = n[i * s]);
}
function to(e, t, n, s, i) {
  const o = ht(s, 0), r = Math.min(ht(i, e.length), e.length);
  let a = 0, l, c, u;
  for (n = Math.ceil(n), i && (l = i - s, n = l / Math.floor(l / n)), u = o; u < 0; )
    a++, u = Math.round(o + a * n);
  for (c = Math.max(o, 0); c < r; c++)
    c === u && (t.push(e[c]), a++, u = Math.round(o + a * n));
}
function q0(e) {
  const t = e.length;
  let n, s;
  if (t < 2)
    return !1;
  for (s = e[0], n = 1; n < t; ++n)
    if (e[n] - e[n - 1] !== s)
      return !1;
  return s;
}
const Z0 = (e) => e === "left" ? "right" : e === "right" ? "left" : e, bu = (e, t, n) => t === "top" || t === "left" ? e[t] + n : e[t] - n, xu = (e, t) => Math.min(t || e, e);
function vu(e, t) {
  const n = [], s = e.length / t, i = e.length;
  let o = 0;
  for (; o < i; o += s)
    n.push(e[Math.floor(o)]);
  return n;
}
function Q0(e, t, n) {
  const s = e.ticks.length, i = Math.min(t, s - 1), o = e._startPixel, r = e._endPixel, a = 1e-6;
  let l = e.getPixelForTick(i), c;
  if (!(n && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(i - 1)) / 2, l += i < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function J0(e, t) {
  St(e, (n) => {
    const s = n.gc, i = s.length / 2;
    let o;
    if (i > t) {
      for (o = 0; o < i; ++o)
        delete n.data[s[o]];
      s.splice(0, i);
    }
  });
}
function zs(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function _u(e, t) {
  if (!e.display)
    return 0;
  const n = Xt(e.font, t), s = ae(e.padding);
  return (Vt(e.text) ? e.text.length : 1) * n.lineHeight + s.height;
}
function tx(e, t) {
  return On(e, {
    scale: t,
    type: "scale"
  });
}
function ex(e, t, n) {
  return On(e, {
    tick: n,
    index: t,
    type: "tick"
  });
}
function nx(e, t, n) {
  let s = gl(e);
  return (n && t !== "right" || !n && t === "right") && (s = Z0(s)), s;
}
function sx(e, t, n, s) {
  const { top: i, left: o, bottom: r, right: a, chart: l } = e, { chartArea: c, scales: u } = l;
  let h = 0, d, f, p;
  const g = r - i, m = a - o;
  if (e.isHorizontal()) {
    if (f = se(s, o, a), pt(n)) {
      const y = Object.keys(n)[0], b = n[y];
      p = u[y].getPixelForValue(b) + g - t;
    } else n === "center" ? p = (c.bottom + c.top) / 2 + g - t : p = bu(e, n, t);
    d = a - o;
  } else {
    if (pt(n)) {
      const y = Object.keys(n)[0], b = n[y];
      f = u[y].getPixelForValue(b) - m + t;
    } else n === "center" ? f = (c.left + c.right) / 2 - m + t : f = bu(e, n, t);
    p = se(s, r, i), h = n === "left" ? -Ut : Ut;
  }
  return {
    titleX: f,
    titleY: p,
    maxWidth: d,
    rotation: h
  };
}
class ss extends dn {
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
    return t = be(t, Number.POSITIVE_INFINITY), n = be(n, Number.NEGATIVE_INFINITY), s = be(s, Number.POSITIVE_INFINITY), i = be(i, Number.NEGATIVE_INFINITY), {
      min: be(t, s),
      max: be(n, i),
      minDefined: Ht(t),
      maxDefined: Ht(n)
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
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), i || (n = Math.min(n, r.min)), o || (s = Math.max(s, r.max));
    return n = o && n > s ? s : n, s = i && n > s ? n : s, {
      min: be(n, be(s, n)),
      max: be(s, be(n, s))
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
    Tt(this.options.beforeUpdate, [
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
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = db(this, o, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? vu(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = U0(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, n, s;
    this.isHorizontal() ? (n = this.left, s = this.right) : (n = this.top, s = this.bottom, t = !t), this._startPixel = n, this._endPixel = s, this._reversePixels = t, this._length = s - n, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Tt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Tt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Tt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Tt(this.options[t], [
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
    Tt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let s, i, o;
    for (s = 0, i = t.length; s < i; s++)
      o = t[s], o.label = Tt(n.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    Tt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Tt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, n = t.ticks, s = xu(this.ticks.length, t.ticks.maxTicksLimit), i = n.minRotation || 0, o = n.maxRotation;
    let r = i, a, l, c;
    if (!this._isVisible() || !n.display || i >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(), h = u.widest.width, d = u.highest.height, f = Zt(this.chart.width - h, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), h + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - zs(t.grid) - n.padding - _u(t.title, this.chart.options.font), c = Math.sqrt(h * h + d * d), r = fl(Math.min(Math.asin(Zt((u.highest.height + 6) / a, -1, 1)), Math.asin(Zt(l / c, -1, 1)) - Math.asin(Zt(d / c, -1, 1)))), r = Math.max(i, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    Tt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Tt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: n, options: { ticks: s, title: i, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = _u(i, n.options.font);
      if (a ? (t.width = this.maxWidth, t.height = zs(o) + l) : (t.height = this.maxHeight, t.width = zs(o) + l), s.display && this.ticks.length) {
        const { first: c, last: u, widest: h, highest: d } = this._getLabelSizes(), f = s.padding * 2, p = Ie(this.labelRotation), g = Math.cos(p), m = Math.sin(p);
        if (a) {
          const y = s.mirror ? 0 : m * h.width + g * d.height;
          t.height = Math.min(this.maxHeight, t.height + y + f);
        } else {
          const y = s.mirror ? 0 : g * h.width + m * d.height;
          t.width = Math.min(this.maxWidth, t.width + y + f);
        }
        this._calculatePadding(c, u, m, g);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = n.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = n.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, n, s, i) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left, h = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, f = 0;
      l ? c ? (d = i * t.width, f = s * n.height) : (d = s * t.height, f = i * n.width) : o === "start" ? f = n.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, f = n.width / 2), this.paddingLeft = Math.max((d - u + r) * this.width / (this.width - u), 0), this.paddingRight = Math.max((f - h + r) * this.width / (this.width - h), 0);
    } else {
      let u = n.height / 2, h = t.height / 2;
      o === "start" ? (u = 0, h = t.height) : o === "end" && (u = n.height, h = 0), this.paddingTop = u + r, this.paddingBottom = h + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    Tt(this.options.afterFit, [
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
      mt(t[n].label) && (t.splice(n, 1), s--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let s = this.ticks;
      n < s.length && (s = vu(s, n)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, n, s) {
    const { ctx: i, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(n / xu(n, s));
    let c = 0, u = 0, h, d, f, p, g, m, y, b, S, _, x;
    for (h = 0; h < n; h += l) {
      if (p = t[h].label, g = this._resolveTickFontOptions(h), i.font = m = g.string, y = o[m] = o[m] || {
        data: {},
        gc: []
      }, b = g.lineHeight, S = _ = 0, !mt(p) && !Vt(p))
        S = Io(i, y.data, y.gc, S, p), _ = b;
      else if (Vt(p))
        for (d = 0, f = p.length; d < f; ++d)
          x = p[d], !mt(x) && !Vt(x) && (S = Io(i, y.data, y.gc, S, x), _ += b);
      r.push(S), a.push(_), c = Math.max(S, c), u = Math.max(_, u);
    }
    J0(o, n);
    const w = r.indexOf(c), A = a.indexOf(u), P = (M) => ({
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
    return $y(this._alignToPixels ? Bn(this.chart, n, 0) : n);
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
      return s.$context || (s.$context = ex(this.getContext(), t, s));
    }
    return this.$context || (this.$context = tx(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, n = Ie(this.labelRotation), s = Math.abs(Math.cos(n)), i = Math.abs(Math.sin(n)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * i ? a / s : l / i : l * i < a * s ? l / s : a / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis, s = this.chart, i = this.options, { grid: o, position: r, border: a } = i, l = o.offset, c = this.isHorizontal(), h = this.ticks.length + (l ? 1 : 0), d = zs(o), f = [], p = a.setContext(this.getContext()), g = p.display ? p.width : 0, m = g / 2, y = function(U) {
      return Bn(s, U, g);
    };
    let b, S, _, x, w, A, P, M, T, C, D, I;
    if (r === "top")
      b = y(this.bottom), A = this.bottom - d, M = b - m, C = y(t.top) + m, I = t.bottom;
    else if (r === "bottom")
      b = y(this.top), C = t.top, I = y(t.bottom) - m, A = b + m, M = this.top + d;
    else if (r === "left")
      b = y(this.right), w = this.right - d, P = b - m, T = y(t.left) + m, D = t.right;
    else if (r === "right")
      b = y(this.left), T = t.left, D = y(t.right) - m, w = b + m, P = this.left + d;
    else if (n === "x") {
      if (r === "center")
        b = y((t.top + t.bottom) / 2 + 0.5);
      else if (pt(r)) {
        const U = Object.keys(r)[0], z = r[U];
        b = y(this.chart.scales[U].getPixelForValue(z));
      }
      C = t.top, I = t.bottom, A = b + m, M = A + d;
    } else if (n === "y") {
      if (r === "center")
        b = y((t.left + t.right) / 2);
      else if (pt(r)) {
        const U = Object.keys(r)[0], z = r[U];
        b = y(this.chart.scales[U].getPixelForValue(z));
      }
      w = b - m, P = w - d, T = t.left, D = t.right;
    }
    const Z = ht(i.ticks.maxTicksLimit, h), W = Math.max(1, Math.ceil(h / Z));
    for (S = 0; S < h; S += W) {
      const U = this.getContext(S), z = o.setContext(U), Q = a.setContext(U), J = z.lineWidth, ot = z.color, X = Q.dash || [], O = Q.dashOffset, j = z.tickWidth, Y = z.tickColor, E = z.tickBorderDash || [], G = z.tickBorderDashOffset;
      _ = Q0(this, S, l), _ !== void 0 && (x = Bn(s, _, J), c ? w = P = T = D = x : A = M = C = I = x, f.push({
        tx1: w,
        ty1: A,
        tx2: P,
        ty2: M,
        x1: T,
        y1: C,
        x2: D,
        y2: I,
        width: J,
        color: ot,
        borderDash: X,
        borderDashOffset: O,
        tickWidth: j,
        tickColor: Y,
        tickBorderDash: E,
        tickBorderDashOffset: G
      }));
    }
    return this._ticksLength = h, this._borderValue = b, f;
  }
  _computeLabelItems(t) {
    const n = this.axis, s = this.options, { position: i, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: u, mirror: h } = o, d = zs(s.grid), f = d + u, p = h ? -u : f, g = -Ie(this.labelRotation), m = [];
    let y, b, S, _, x, w, A, P, M, T, C, D, I = "middle";
    if (i === "top")
      w = this.bottom - p, A = this._getXAxisLabelAlignment();
    else if (i === "bottom")
      w = this.top + p, A = this._getXAxisLabelAlignment();
    else if (i === "left") {
      const W = this._getYAxisLabelAlignment(d);
      A = W.textAlign, x = W.x;
    } else if (i === "right") {
      const W = this._getYAxisLabelAlignment(d);
      A = W.textAlign, x = W.x;
    } else if (n === "x") {
      if (i === "center")
        w = (t.top + t.bottom) / 2 + f;
      else if (pt(i)) {
        const W = Object.keys(i)[0], U = i[W];
        w = this.chart.scales[W].getPixelForValue(U) + f;
      }
      A = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (i === "center")
        x = (t.left + t.right) / 2 - f;
      else if (pt(i)) {
        const W = Object.keys(i)[0], U = i[W];
        x = this.chart.scales[W].getPixelForValue(U);
      }
      A = this._getYAxisLabelAlignment(d).textAlign;
    }
    n === "y" && (l === "start" ? I = "top" : l === "end" && (I = "bottom"));
    const Z = this._getLabelSizes();
    for (y = 0, b = a.length; y < b; ++y) {
      S = a[y], _ = S.label;
      const W = o.setContext(this.getContext(y));
      P = this.getPixelForTick(y) + o.labelOffset, M = this._resolveTickFontOptions(y), T = M.lineHeight, C = Vt(_) ? _.length : 1;
      const U = C / 2, z = W.color, Q = W.textStrokeColor, J = W.textStrokeWidth;
      let ot = A;
      r ? (x = P, A === "inner" && (y === b - 1 ? ot = this.options.reverse ? "left" : "right" : y === 0 ? ot = this.options.reverse ? "right" : "left" : ot = "center"), i === "top" ? c === "near" || g !== 0 ? D = -C * T + T / 2 : c === "center" ? D = -Z.highest.height / 2 - U * T + T : D = -Z.highest.height + T / 2 : c === "near" || g !== 0 ? D = T / 2 : c === "center" ? D = Z.highest.height / 2 - U * T : D = Z.highest.height - C * T, h && (D *= -1), g !== 0 && !W.showLabelBackdrop && (x += T / 2 * Math.sin(g))) : (w = P, D = (1 - C) * T / 2);
      let X;
      if (W.showLabelBackdrop) {
        const O = ae(W.backdropPadding), j = Z.heights[y], Y = Z.widths[y];
        let E = D - O.top, G = 0 - O.left;
        switch (I) {
          case "middle":
            E -= j / 2;
            break;
          case "bottom":
            E -= j;
            break;
        }
        switch (A) {
          case "center":
            G -= Y / 2;
            break;
          case "right":
            G -= Y;
            break;
          case "inner":
            y === b - 1 ? G -= Y : y > 0 && (G -= Y / 2);
            break;
        }
        X = {
          left: G,
          top: E,
          width: Y + O.width,
          height: j + O.height,
          color: W.backdropColor
        };
      }
      m.push({
        label: _,
        font: M,
        textOffset: D,
        options: {
          rotation: g,
          color: z,
          strokeColor: Q,
          strokeWidth: J,
          textAlign: ot,
          textBaseline: I,
          translation: [
            x,
            w
          ],
          backdrop: X
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-Ie(this.labelRotation))
      return t === "top" ? "left" : "right";
    let i = "center";
    return n.align === "start" ? i = "left" : n.align === "end" ? i = "right" : n.align === "inner" && (i = "inner"), i;
  }
  _getYAxisLabelAlignment(t) {
    const { position: n, ticks: { crossAlign: s, mirror: i, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, u;
    return n === "left" ? i ? (u = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", u += l / 2) : (c = "right", u += l)) : (u = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", u -= l / 2) : (c = "left", u = this.left)) : n === "right" ? i ? (u = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", u -= l / 2) : (c = "left", u -= l)) : (u = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", u += l / 2) : (c = "right", u = this.right)) : c = "right", {
      textAlign: c,
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
    const a = (l, c, u) => {
      !u.width || !u.color || (s.save(), s.lineWidth = u.width, s.strokeStyle = u.color, s.setLineDash(u.borderDash || []), s.lineDashOffset = u.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (n.display)
      for (o = 0, r = i.length; o < r; ++o) {
        const l = i[o];
        n.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), n.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: n, options: { border: s, grid: i } } = this, o = s.setContext(this.getContext()), r = s.display ? o.width : 0;
    if (!r)
      return;
    const a = i.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, u, h, d;
    this.isHorizontal() ? (c = Bn(t, this.left, r) - r / 2, u = Bn(t, this.right, a) + a / 2, h = d = l) : (h = Bn(t, this.top, r) - r / 2, d = Bn(t, this.bottom, a) + a / 2, c = u = l), n.save(), n.lineWidth = o.width, n.strokeStyle = o.color, n.beginPath(), n.moveTo(c, h), n.lineTo(u, d), n.stroke(), n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, i = this._computeLabelArea();
    i && ir(s, i);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, u = r.textOffset;
      es(s, c, 0, u, l, a);
    }
    i && or(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: n, title: s, reverse: i } } = this;
    if (!s.display)
      return;
    const o = Xt(s.font), r = ae(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    n === "bottom" || n === "center" || pt(n) ? (l += r.bottom, Vt(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: u, maxWidth: h, rotation: d } = sx(this, l, n, a);
    es(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: h,
      rotation: d,
      textAlign: nx(a, n, i),
      textBaseline: "middle",
      translation: [
        c,
        u
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, n = t.ticks && t.ticks.z || 0, s = ht(t.grid && t.grid.z, -1), i = ht(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== ss.prototype.draw ? [
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
    return Xt(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class eo {
  constructor(t, n, s) {
    this.type = t, this.scope = n, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let s;
    rx(n) && (s = this.register(n));
    const i = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in i || (i[o] = t, ix(t, r, s), this.override && Ft.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items, s = t.id, i = this.scope;
    s in n && delete n[s], i && s in Ft[i] && (delete Ft[i][s], this.override && delete ts[s]);
  }
}
function ix(e, t, n) {
  const s = gi(/* @__PURE__ */ Object.create(null), [
    n ? Ft.get(n) : {},
    Ft.get(t),
    e.defaults
  ]);
  Ft.set(t, s), e.defaultRoutes && ox(t, e.defaultRoutes), e.descriptors && Ft.describe(t, e.descriptors);
}
function ox(e, t) {
  Object.keys(t).forEach((n) => {
    const s = n.split("."), i = s.pop(), o = [
      e
    ].concat(s).join("."), r = t[n].split("."), a = r.pop(), l = r.join(".");
    Ft.route(o, i, l, a);
  });
}
function rx(e) {
  return "id" in e && "defaults" in e;
}
class ax {
  constructor() {
    this.controllers = new eo(Fe, "datasets", !0), this.elements = new eo(dn, "elements"), this.plugins = new eo(Object, "plugins"), this.scales = new eo(ss, "scales"), this._typedRegistries = [
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
      s || o.isForType(i) || o === this.plugins && i.id ? this._exec(t, o, i) : St(i, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, n, s) {
    const i = dl(t);
    Tt(s["before" + i], [], s), n[t](s), Tt(s["after" + i], [], s);
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
var He = /* @__PURE__ */ new ax();
class lx {
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
      const r = o.plugin, a = r[s], l = [
        n,
        i,
        o.options
      ];
      if (Tt(a, l, r) === !1 && i.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    mt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const n = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const s = t && t.config, i = ht(s.options && s.options.plugins, {}), o = cx(s);
    return i === !1 && !n ? [] : hx(t, o, i, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [], s = this._cache, i = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(i(n, s), t, "stop"), this._notify(i(s, n), t, "start");
  }
}
function cx(e) {
  const t = {}, n = [], s = Object.keys(He.plugins.items);
  for (let o = 0; o < s.length; o++)
    n.push(He.getPlugin(s[o]));
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
function ux(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function hx(e, { plugins: t, localIds: n }, s, i) {
  const o = [], r = e.getContext();
  for (const a of t) {
    const l = a.id, c = ux(s[l], i);
    c !== null && o.push({
      plugin: a,
      options: dx(e.config, {
        plugin: a,
        local: n[l]
      }, c, r)
    });
  }
  return o;
}
function dx(e, { plugin: t, local: n }, s, i) {
  const o = e.pluginScopeKeys(t), r = e.getOptionScopes(s, o);
  return n && t.defaults && r.push(t.defaults), e.createResolver(r, i, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function fa(e, t) {
  const n = Ft.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x";
}
function fx(e, t) {
  let n = e;
  return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"), n;
}
function px(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Su(e) {
  if (e === "x" || e === "y" || e === "r")
    return e;
}
function gx(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function pa(e, ...t) {
  if (Su(e))
    return e;
  for (const n of t) {
    const s = n.axis || gx(n.position) || e.length > 1 && Su(e[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function wu(e, t, n) {
  if (n[t + "AxisID"] === e)
    return {
      axis: t
    };
}
function mx(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((s) => s.xAxisID === e || s.yAxisID === e);
    if (n.length)
      return wu(e, "x", n[0]) || wu(e, "y", n[0]);
  }
  return {};
}
function yx(e, t) {
  const n = ts[e.type] || {
    scales: {}
  }, s = t.scales || {}, i = fa(e.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!pt(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = pa(r, a, mx(r, e), Ft.scales[a.type]), c = px(l, i), u = n.scales || {};
    o[r] = ni(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      u[l],
      u[c]
    ]);
  }), e.data.datasets.forEach((r) => {
    const a = r.type || e.type, l = r.indexAxis || fa(a, t), u = (ts[a] || {}).scales || {};
    Object.keys(u).forEach((h) => {
      const d = fx(h, l), f = r[d + "AxisID"] || d;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), ni(o[f], [
        {
          axis: d
        },
        s[f],
        u[h]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    ni(a, [
      Ft.scales[a.type],
      Ft.scale
    ]);
  }), o;
}
function Xf(e) {
  const t = e.options || (e.options = {});
  t.plugins = ht(t.plugins, {}), t.scales = yx(e, t);
}
function Gf(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function bx(e) {
  return e = e || {}, e.data = Gf(e.data), Xf(e), e;
}
const Au = /* @__PURE__ */ new Map(), qf = /* @__PURE__ */ new Set();
function no(e, t) {
  let n = Au.get(e);
  return n || (n = t(), Au.set(e, n), qf.add(n)), n;
}
const Ws = (e, t, n) => {
  const s = Mn(t, n);
  s !== void 0 && e.add(s);
};
class xx {
  constructor(t) {
    this._config = bx(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Gf(t);
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
    this.clearCache(), Xf(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return no(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, n) {
    return no(`${t}.transition.${n}`, () => [
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
    return no(`${t}-${n}`, () => [
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
    return no(`${s}-plugin-${n}`, () => [
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
    const l = /* @__PURE__ */ new Set();
    n.forEach((u) => {
      t && (l.add(t), u.forEach((h) => Ws(l, t, h))), u.forEach((h) => Ws(l, i, h)), u.forEach((h) => Ws(l, ts[o] || {}, h)), u.forEach((h) => Ws(l, Ft, h)), u.forEach((h) => Ws(l, ua, h));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), qf.has(n) && r.set(n, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [
      t,
      ts[n] || {},
      Ft.datasets[n] || {},
      {
        type: n
      },
      Ft,
      ua
    ];
  }
  resolveNamedOptions(t, n, s, i = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Pu(this._resolverCache, t, i);
    let l = r;
    if (_x(r, n)) {
      o.$shared = !1, s = Dn(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = As(r, s, c);
    }
    for (const c of n)
      o[c] = l[c];
    return o;
  }
  createResolver(t, n, s = [
    ""
  ], i) {
    const { resolver: o } = Pu(this._resolverCache, t, s);
    return pt(n) ? As(o, n, void 0, i) : o;
  }
}
function Pu(e, t, n) {
  let s = e.get(t);
  s || (s = /* @__PURE__ */ new Map(), e.set(t, s));
  const i = n.join();
  let o = s.get(i);
  return o || (o = {
    resolver: bl(t, n),
    subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(i, o)), o;
}
const vx = (e) => pt(e) && Object.getOwnPropertyNames(e).some((t) => Dn(e[t]));
function _x(e, t) {
  const { isScriptable: n, isIndexable: s } = Cf(e);
  for (const i of t) {
    const o = n(i), r = s(i), a = (r || o) && e[i];
    if (o && (Dn(a) || vx(a)) || r && Vt(a))
      return !0;
  }
  return !1;
}
var Sx = "4.4.7";
const wx = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Tu(e, t) {
  return e === "top" || e === "bottom" || wx.indexOf(e) === -1 && t === "x";
}
function Mu(e, t) {
  return function(n, s) {
    return n[e] === s[e] ? n[t] - s[t] : n[e] - s[e];
  };
}
function Du(e) {
  const t = e.chart, n = t.options.animation;
  t.notifyPlugins("afterRender"), Tt(n && n.onComplete, [
    e
  ], t);
}
function Ax(e) {
  const t = e.chart, n = t.options.animation;
  Tt(n && n.onProgress, [
    e
  ], t);
}
function Zf(e) {
  return _l() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const wo = {}, Cu = (e) => {
  const t = Zf(e);
  return Object.values(wo).filter((n) => n.canvas === t).pop();
};
function Px(e, t, n) {
  const s = Object.keys(e);
  for (const i of s) {
    const o = +i;
    if (o >= t) {
      const r = e[i];
      delete e[i], (n > 0 || o > t) && (e[o + n] = r);
    }
  }
}
function Tx(e, t, n, s) {
  return !n || e.type === "mouseout" ? null : s ? t : e;
}
function so(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function Mx(e, t) {
  const { xScale: n, yScale: s } = e;
  return n && s ? {
    left: so(n, t, "left"),
    right: so(n, t, "right"),
    top: so(s, t, "top"),
    bottom: so(s, t, "bottom")
  } : t;
}
class ze {
  static register(...t) {
    He.add(...t), ku();
  }
  static unregister(...t) {
    He.remove(...t), ku();
  }
  constructor(t, n) {
    const s = this.config = new xx(n), i = Zf(t), o = Cu(i);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || W0(i))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(i, r.aspectRatio), l = a && a.canvas, c = l && l.height, u = l && l.width;
    if (this.id = Cy(), this.ctx = a, this.canvas = l, this.width = u, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new lx(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Uy((h) => this.update(h), r.resizeDelay || 0), this._dataChanges = [], wo[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    tn.listen(this, "complete", Du), tn.listen(this, "progress", Ax), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: n }, width: s, height: i, _aspectRatio: o } = this;
    return mt(t) ? n && o ? o : i ? s / i : null : t;
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
    return He;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Qc(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Gc(this.canvas, this.ctx), this;
  }
  stop() {
    return tn.stop(this), this;
  }
  resize(t, n) {
    tn.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: n
    } : this._resize(t, n);
  }
  _resize(t, n) {
    const s = this.options, i = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(i, t, n, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Qc(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), Tt(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    St(n, (s, i) => {
      s.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, n = t.scales, s = this.scales, i = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    n && (o = o.concat(Object.keys(n).map((r) => {
      const a = n[r], l = pa(r, a), c = l === "r", u = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), St(o, (r) => {
      const a = r.options, l = a.id, c = pa(l, a), u = ht(a.type, r.dtype);
      (a.position === void 0 || Tu(a.position, c) !== Tu(r.dposition)) && (a.position = r.dposition), i[l] = !0;
      let h = null;
      if (l in s && s[l].type === u)
        h = s[l];
      else {
        const d = He.getScale(u);
        h = new d({
          id: l,
          type: u,
          ctx: this.ctx,
          chart: this
        }), s[h.id] = h;
      }
      h.init(a, t);
    }), St(i, (r, a) => {
      r || delete s[a];
    }), St(s, (r) => {
      oe.configure(this, r, r.options), oe.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, n = this.data.datasets.length, s = t.length;
    if (t.sort((i, o) => i.index - o.index), s > n) {
      for (let i = n; i < s; ++i)
        this._destroyDatasetMeta(i);
      t.splice(n, s - n);
    }
    this._sortedMetasets = t.slice(0).sort(Mu("order", "index"));
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || fa(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = He.getController(a), { datasetElementType: c, dataElementType: u } = Ft.datasets[a];
        Object.assign(l, {
          dataElementType: He.getElement(u),
          datasetElementType: c && He.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    St(this.data.datasets, (t, n) => {
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
    for (let c = 0, u = this.data.datasets.length; c < u; c++) {
      const { controller: h } = this.getDatasetMeta(c), d = !i && o.indexOf(h) === -1;
      h.buildOrUpdateElements(d), r = Math.max(+h.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), i || St(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Mu("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    St(this.scales, (t) => {
      oe.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, n = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!jc(n, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, n = this._getUniformDataChanges() || [];
    for (const { method: s, start: i, count: o } of n) {
      const r = s === "_removeElements" ? -o : o;
      Px(t, i, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const n = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), i = s(0);
    for (let o = 1; o < n; o++)
      if (!jc(i, s(o)))
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
    oe.update(this, this.width, this.height, t);
    const n = this.chartArea, s = n.width <= 0 || n.height <= 0;
    this._layers = [], St(this.boxes, (i) => {
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
        this._updateDataset(n, Dn(t) ? t({
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
    }) !== !1 && (tn.has(this) ? this.attached && !tn.running(this) && tn.start(this) : (this.draw(), Du({
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
    const n = this.ctx, s = t._clip, i = !s.disabled, o = Mx(t, this.chartArea), r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (i && ir(n, {
      left: s.left === !1 ? 0 : o.left - s.left,
      right: s.right === !1 ? this.width : o.right + s.right,
      top: s.top === !1 ? 0 : o.top - s.top,
      bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
    }), t.controller.draw(), i && or(n), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return ln(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, n, s, i) {
    const o = w0.modes[n];
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
    return this.$context || (this.$context = On(null, {
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
    mi(n) ? (o.data[n].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
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
    for (this.stop(), tn.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: n } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Gc(t, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), delete wo[this.id], this.notifyPlugins("afterDestroy");
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
    St(this.options.events, (o) => s(o, i));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, n = this.platform, s = (l, c) => {
      n.addEventListener(this, l, c), t[l] = c;
    }, i = (l, c) => {
      t[l] && (n.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
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
    St(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._listeners = {}, St(this._responsiveListeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, n, s) {
    const i = s ? "set" : "remove";
    let o, r, a, l;
    for (n === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + i + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[i + "HoverStyle"](r.element, r.datasetIndex, r.index);
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
    !Oo(s, n) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, n));
  }
  notifyPlugins(t, n, s) {
    return this._plugins.notify(this, t, n, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, n, s) {
    const i = this.options.hover, o = (l, c) => l.filter((u) => !c.some((h) => u.datasetIndex === h.datasetIndex && u.index === h.index)), r = o(n, t), a = s ? t : o(t, n);
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
    const { _active: i = [], options: o } = this, r = n, a = this._getActiveElements(t, i, s, r), l = Iy(t), c = Tx(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, Tt(o.onHover, [
      t,
      a,
      this
    ], this), l && Tt(o.onClick, [
      t,
      a,
      this
    ], this));
    const u = !Oo(a, i);
    return (u || n) && (this._active = a, this._updateHoverStyles(a, i, n)), this._lastEvent = c, u;
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
B(ze, "defaults", Ft), B(ze, "instances", wo), B(ze, "overrides", ts), B(ze, "registry", He), B(ze, "version", Sx), B(ze, "getChart", Cu);
function ku() {
  return St(ze.instances, (e) => e._plugins.invalidate());
}
function Dx(e, t, n) {
  const { startAngle: s, pixelMargin: i, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = i / a;
  e.beginPath(), e.arc(o, r, a, s - c, n + c), l > i ? (c = i / l, e.arc(o, r, l, n + c, s - c, !0)) : e.arc(o, r, i, n + Ut, s - Ut), e.closePath(), e.clip();
}
function Cx(e) {
  return yl(e, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function kx(e, t, n, s) {
  const i = Cx(e.options.borderRadius), o = (n - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (n - Math.min(o, l)) * s / 2;
    return Zt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(i.outerStart),
    outerEnd: a(i.outerEnd),
    innerStart: Zt(i.innerStart, 0, r),
    innerEnd: Zt(i.innerEnd, 0, r)
  };
}
function hs(e, t, n, s) {
  return {
    x: n + e * Math.cos(t),
    y: s + e * Math.sin(t)
  };
}
function No(e, t, n, s, i, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: u } = t, h = Math.max(t.outerRadius + s + n - c, 0), d = u > 0 ? u + s + n + c : 0;
  let f = 0;
  const p = i - l;
  if (s) {
    const W = u > 0 ? u - s : 0, U = h > 0 ? h - s : 0, z = (W + U) / 2, Q = z !== 0 ? p * z / (z + s) : p;
    f = (p - Q) / 2;
  }
  const g = Math.max(1e-3, p * h - n / Rt) / h, m = (p - g) / 2, y = l + m + f, b = i - m - f, { outerStart: S, outerEnd: _, innerStart: x, innerEnd: w } = kx(t, d, h, b - y), A = h - S, P = h - _, M = y + S / A, T = b - _ / P, C = d + x, D = d + w, I = y + x / C, Z = b - w / D;
  if (e.beginPath(), o) {
    const W = (M + T) / 2;
    if (e.arc(r, a, h, M, W), e.arc(r, a, h, W, T), _ > 0) {
      const J = hs(P, T, r, a);
      e.arc(J.x, J.y, _, T, b + Ut);
    }
    const U = hs(D, b, r, a);
    if (e.lineTo(U.x, U.y), w > 0) {
      const J = hs(D, Z, r, a);
      e.arc(J.x, J.y, w, b + Ut, Z + Math.PI);
    }
    const z = (b - w / d + (y + x / d)) / 2;
    if (e.arc(r, a, d, b - w / d, z, !0), e.arc(r, a, d, z, y + x / d, !0), x > 0) {
      const J = hs(C, I, r, a);
      e.arc(J.x, J.y, x, I + Math.PI, y - Ut);
    }
    const Q = hs(A, y, r, a);
    if (e.lineTo(Q.x, Q.y), S > 0) {
      const J = hs(A, M, r, a);
      e.arc(J.x, J.y, S, y - Ut, M);
    }
  } else {
    e.moveTo(r, a);
    const W = Math.cos(M) * h + r, U = Math.sin(M) * h + a;
    e.lineTo(W, U);
    const z = Math.cos(T) * h + r, Q = Math.sin(T) * h + a;
    e.lineTo(z, Q);
  }
  e.closePath();
}
function Ex(e, t, n, s, i) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    No(e, t, n, s, l, i);
    for (let c = 0; c < o; ++c)
      e.fill();
    isNaN(a) || (l = r + (a % Ot || Ot));
  }
  return No(e, t, n, s, l, i), e.fill(), l;
}
function Ox(e, t, n, s, i) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: u, borderDash: h, borderDashOffset: d } = l, f = l.borderAlign === "inner";
  if (!c)
    return;
  e.setLineDash(h || []), e.lineDashOffset = d, f ? (e.lineWidth = c * 2, e.lineJoin = u || "round") : (e.lineWidth = c, e.lineJoin = u || "bevel");
  let p = t.endAngle;
  if (o) {
    No(e, t, n, s, p, i);
    for (let g = 0; g < o; ++g)
      e.stroke();
    isNaN(a) || (p = r + (a % Ot || Ot));
  }
  f && Dx(e, t, p), o || (No(e, t, n, s, p, i), e.stroke());
}
class qs extends dn {
  constructor(n) {
    super();
    B(this, "circumference");
    B(this, "endAngle");
    B(this, "fullCircles");
    B(this, "innerRadius");
    B(this, "outerRadius");
    B(this, "pixelMargin");
    B(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, n && Object.assign(this, n);
  }
  inRange(n, s, i) {
    const o = this.getProps([
      "x",
      "y"
    ], i), { angle: r, distance: a } = xf(o, {
      x: n,
      y: s
    }), { startAngle: l, endAngle: c, innerRadius: u, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), f = (this.options.spacing + this.options.borderWidth) / 2, p = ht(d, c - l), g = yi(r, l, c) && l !== c, m = p >= Ot || g, y = rn(a, u + f, h + f);
    return m && y;
  }
  getCenterPoint(n) {
    const { x: s, y: i, startAngle: o, endAngle: r, innerRadius: a, outerRadius: l } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], n), { offset: c, spacing: u } = this.options, h = (o + r) / 2, d = (a + l + u + c) / 2;
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
    if (this.pixelMargin = s.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > Ot ? Math.floor(i / Ot) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    n.save();
    const l = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(l) * o, Math.sin(l) * o);
    const c = 1 - Math.sin(Math.min(Rt, i || 0)), u = o * c;
    n.fillStyle = s.backgroundColor, n.strokeStyle = s.borderColor, Ex(n, this, u, r, a), Ox(n, this, u, r, a), n.restore();
  }
}
B(qs, "id", "arc"), B(qs, "defaults", {
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
}), B(qs, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), B(qs, "descriptors", {
  _scriptable: !0,
  _indexable: (n) => n !== "borderDash"
});
function Qf(e, t, n = t) {
  e.lineCap = ht(n.borderCapStyle, t.borderCapStyle), e.setLineDash(ht(n.borderDash, t.borderDash)), e.lineDashOffset = ht(n.borderDashOffset, t.borderDashOffset), e.lineJoin = ht(n.borderJoinStyle, t.borderJoinStyle), e.lineWidth = ht(n.borderWidth, t.borderWidth), e.strokeStyle = ht(n.borderColor, t.borderColor);
}
function Rx(e, t, n) {
  e.lineTo(n.x, n.y);
}
function Lx(e) {
  return e.stepped ? sb : e.tension || e.cubicInterpolationMode === "monotone" ? ib : Rx;
}
function Jf(e, t, n = {}) {
  const s = e.length, { start: i = 0, end: o = s - 1 } = n, { start: r, end: a } = t, l = Math.max(i, r), c = Math.min(o, a), u = i < r && o < r || i > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !u ? s + c - l : c - l
  };
}
function Ix(e, t, n, s) {
  const { points: i, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Jf(i, n, s), u = Lx(o);
  let { move: h = !0, reverse: d } = s || {}, f, p, g;
  for (f = 0; f <= c; ++f)
    p = i[(a + (d ? c - f : f)) % r], !p.skip && (h ? (e.moveTo(p.x, p.y), h = !1) : u(e, g, p, d, o.stepped), g = p);
  return l && (p = i[(a + (d ? c : 0)) % r], u(e, g, p, d, o.stepped)), !!l;
}
function Vx(e, t, n, s) {
  const i = t.points, { count: o, start: r, ilen: a } = Jf(i, n, s), { move: l = !0, reverse: c } = s || {};
  let u = 0, h = 0, d, f, p, g, m, y;
  const b = (_) => (r + (c ? a - _ : _)) % o, S = () => {
    g !== m && (e.lineTo(u, m), e.lineTo(u, g), e.lineTo(u, y));
  };
  for (l && (f = i[b(0)], e.moveTo(f.x, f.y)), d = 0; d <= a; ++d) {
    if (f = i[b(d)], f.skip)
      continue;
    const _ = f.x, x = f.y, w = _ | 0;
    w === p ? (x < g ? g = x : x > m && (m = x), u = (h * u + _) / ++h) : (S(), e.lineTo(_, x), p = w, h = 0, g = m = x), y = x;
  }
  S();
}
function ga(e) {
  const t = e.options, n = t.borderDash && t.borderDash.length;
  return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !n ? Vx : Ix;
}
function Fx(e) {
  return e.stepped ? Vb : e.tension || e.cubicInterpolationMode === "monotone" ? Fb : Wn;
}
function Nx(e, t, n, s) {
  let i = t._path;
  i || (i = t._path = new Path2D(), t.path(i, n, s) && i.closePath()), Qf(e, t.options), e.stroke(i);
}
function Bx(e, t, n, s) {
  const { segments: i, options: o } = t, r = ga(t);
  for (const a of i)
    Qf(e, o, a.style), e.beginPath(), r(e, t, a, {
      start: n,
      end: n + s - 1
    }) && e.closePath(), e.stroke();
}
const jx = typeof Path2D == "function";
function $x(e, t, n, s) {
  jx && !t.options.segment ? Nx(e, t, n, s) : Bx(e, t, n, s);
}
class Sn extends dn {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const i = s.spanGaps ? this._loop : this._fullLoop;
      Db(this._points, s, t, i, n), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = zb(this, this.options.segment));
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
    const s = this.options, i = t[n], o = this.points, r = Bf(this, {
      property: n,
      start: i,
      end: i
    });
    if (!r.length)
      return;
    const a = [], l = Fx(s);
    let c, u;
    for (c = 0, u = r.length; c < u; ++c) {
      const { start: h, end: d } = r[c], f = o[h], p = o[d];
      if (f === p) {
        a.push(f);
        continue;
      }
      const g = Math.abs((i - f[n]) / (p[n] - f[n])), m = l(f, p, g, s.stepped);
      m[n] = t[n], a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, n, s) {
    return ga(this)(t, this, n, s);
  }
  path(t, n, s) {
    const i = this.segments, o = ga(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), $x(t, this, s, i), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
B(Sn, "id", "line"), B(Sn, "defaults", {
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
}), B(Sn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), B(Sn, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Eu(e, t, n, s) {
  const i = e.options, { [n]: o } = e.getProps([
    n
  ], s);
  return Math.abs(t - o) < i.radius + i.hitRadius;
}
class Ao extends dn {
  constructor(n) {
    super();
    B(this, "parsed");
    B(this, "skip");
    B(this, "stop");
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
    return Eu(this, n, "x", s);
  }
  inYRange(n, s) {
    return Eu(this, n, "y", s);
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
    this.skip || i.radius < 0.1 || !ln(this, s, this.size(i) / 2) || (n.strokeStyle = i.borderColor, n.lineWidth = i.borderWidth, n.fillStyle = i.backgroundColor, ha(n, i, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
B(Ao, "id", "point"), /**
* @type {any}
*/
B(Ao, "defaults", {
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
B(Ao, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function tp(e, t) {
  const { x: n, y: s, base: i, width: o, height: r } = e.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, l, c, u, h;
  return e.horizontal ? (h = r / 2, a = Math.min(n, i), l = Math.max(n, i), c = s - h, u = s + h) : (h = o / 2, a = n - h, l = n + h, c = Math.min(s, i), u = Math.max(s, i)), {
    left: a,
    top: c,
    right: l,
    bottom: u
  };
}
function wn(e, t, n, s) {
  return e ? 0 : Zt(t, n, s);
}
function Hx(e, t, n) {
  const s = e.options.borderWidth, i = e.borderSkipped, o = Df(s);
  return {
    t: wn(i.top, o.top, 0, n),
    r: wn(i.right, o.right, 0, t),
    b: wn(i.bottom, o.bottom, 0, n),
    l: wn(i.left, o.left, 0, t)
  };
}
function zx(e, t, n) {
  const { enableBorderRadius: s } = e.getProps([
    "enableBorderRadius"
  ]), i = e.options.borderRadius, o = Gn(i), r = Math.min(t, n), a = e.borderSkipped, l = s || pt(i);
  return {
    topLeft: wn(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: wn(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: wn(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: wn(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function Wx(e) {
  const t = tp(e), n = t.right - t.left, s = t.bottom - t.top, i = Hx(e, n / 2, s / 2), o = zx(e, n / 2, s / 2);
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
function Nr(e, t, n, s) {
  const i = t === null, o = n === null, a = e && !(i && o) && tp(e, s);
  return a && (i || rn(t, a.left, a.right)) && (o || rn(n, a.top, a.bottom));
}
function Ux(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function Yx(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function Br(e, t, n = {}) {
  const s = e.x !== n.x ? -t : 0, i = e.y !== n.y ? -t : 0, o = (e.x + e.w !== n.x + n.w ? t : 0) - s, r = (e.y + e.h !== n.y + n.h ? t : 0) - i;
  return {
    x: e.x + s,
    y: e.y + i,
    w: e.w + o,
    h: e.h + r,
    radius: e.radius
  };
}
class Po extends dn {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: n, options: { borderColor: s, backgroundColor: i } } = this, { inner: o, outer: r } = Wx(this), a = Ux(r.radius) ? bi : Yx;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, Br(r, n, o)), t.clip(), a(t, Br(o, -n, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, Br(o, n)), t.fillStyle = i, t.fill(), t.restore();
  }
  inRange(t, n, s) {
    return Nr(this, t, n, s);
  }
  inXRange(t, n) {
    return Nr(this, t, null, n);
  }
  inYRange(t, n) {
    return Nr(this, null, t, n);
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
B(Po, "id", "bar"), B(Po, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), B(Po, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
var Kx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: qs,
  BarElement: Po,
  LineElement: Sn,
  PointElement: Ao
});
const ma = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], Ou = /* @__PURE__ */ ma.map((e) => e.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function ep(e) {
  return ma[e % ma.length];
}
function np(e) {
  return Ou[e % Ou.length];
}
function Xx(e, t) {
  return e.borderColor = ep(t), e.backgroundColor = np(t), ++t;
}
function Gx(e, t) {
  return e.backgroundColor = e.data.map(() => ep(t++)), t;
}
function qx(e, t) {
  return e.backgroundColor = e.data.map(() => np(t++)), t;
}
function Zx(e) {
  let t = 0;
  return (n, s) => {
    const i = e.getDatasetMeta(s).controller;
    i instanceof Yn ? t = Gx(n, t) : i instanceof ri ? t = qx(n, t) : i && (t = Xx(n, t));
  };
}
function Ru(e) {
  let t;
  for (t in e)
    if (e[t].borderColor || e[t].backgroundColor)
      return !0;
  return !1;
}
function Qx(e) {
  return e && (e.borderColor || e.backgroundColor);
}
function Jx() {
  return Ft.borderColor !== "rgba(0,0,0,0.1)" || Ft.backgroundColor !== "rgba(0,0,0,0.1)";
}
var tv = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(e, t, n) {
    if (!n.enabled)
      return;
    const { data: { datasets: s }, options: i } = e.config, { elements: o } = i, r = Ru(s) || Qx(i) || o && Ru(o) || Jx();
    if (!n.forceOverride && r)
      return;
    const a = Zx(e);
    s.forEach(a);
  }
};
function ev(e, t, n, s, i) {
  const o = i.samples || s;
  if (o >= n)
    return e.slice(t, t + n);
  const r = [], a = (n - 2) / (o - 2);
  let l = 0;
  const c = t + n - 1;
  let u = t, h, d, f, p, g;
  for (r[l++] = e[u], h = 0; h < o - 2; h++) {
    let m = 0, y = 0, b;
    const S = Math.floor((h + 1) * a) + 1 + t, _ = Math.min(Math.floor((h + 2) * a) + 1, n) + t, x = _ - S;
    for (b = S; b < _; b++)
      m += e[b].x, y += e[b].y;
    m /= x, y /= x;
    const w = Math.floor(h * a) + 1 + t, A = Math.min(Math.floor((h + 1) * a) + 1, n) + t, { x: P, y: M } = e[u];
    for (f = p = -1, b = w; b < A; b++)
      p = 0.5 * Math.abs((P - m) * (e[b].y - M) - (P - e[b].x) * (y - M)), p > f && (f = p, d = e[b], g = b);
    r[l++] = d, u = g;
  }
  return r[l++] = e[c], r;
}
function nv(e, t, n, s) {
  let i = 0, o = 0, r, a, l, c, u, h, d, f, p, g;
  const m = [], y = t + n - 1, b = e[t].x, _ = e[y].x - b;
  for (r = t; r < t + n; ++r) {
    a = e[r], l = (a.x - b) / _ * s, c = a.y;
    const x = l | 0;
    if (x === u)
      c < p ? (p = c, h = r) : c > g && (g = c, d = r), i = (o * i + a.x) / ++o;
    else {
      const w = r - 1;
      if (!mt(h) && !mt(d)) {
        const A = Math.min(h, d), P = Math.max(h, d);
        A !== f && A !== w && m.push({
          ...e[A],
          x: i
        }), P !== f && P !== w && m.push({
          ...e[P],
          x: i
        });
      }
      r > 0 && w !== f && m.push(e[w]), m.push(a), u = x, o = 0, p = g = c, h = d = f = r;
    }
  }
  return m;
}
function sp(e) {
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
function Lu(e) {
  e.data.datasets.forEach((t) => {
    sp(t);
  });
}
function sv(e, t) {
  const n = t.length;
  let s = 0, i;
  const { iScale: o } = e, { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
  return l && (s = Zt(an(t, o.axis, r).lo, 0, n - 1)), c ? i = Zt(an(t, o.axis, a).hi + 1, s, n) - s : i = n - s, {
    start: s,
    count: i
  };
}
var iv = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (e, t, n) => {
    if (!n.enabled) {
      Lu(e);
      return;
    }
    const s = e.width;
    e.data.datasets.forEach((i, o) => {
      const { _data: r, indexAxis: a } = i, l = e.getDatasetMeta(o), c = r || i.data;
      if (Xs([
        a,
        e.options.indexAxis
      ]) === "y" || !l.controller.supportsDecimation)
        return;
      const u = e.scales[l.xAxisID];
      if (u.type !== "linear" && u.type !== "time" || e.options.parsing)
        return;
      let { start: h, count: d } = sv(l, c);
      const f = n.threshold || 4 * s;
      if (d <= f) {
        sp(i);
        return;
      }
      mt(r) && (i._data = c, delete i.data, Object.defineProperty(i, "data", {
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
          p = ev(c, h, d, s, n);
          break;
        case "min-max":
          p = nv(c, h, d, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`);
      }
      i._decimated = p;
    });
  },
  destroy(e) {
    Lu(e);
  }
};
function ov(e, t, n) {
  const s = e.segments, i = e.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = Al(l, c, i);
    const u = ya(n, i[l], i[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: u,
        start: i[l],
        end: i[c]
      });
      continue;
    }
    const h = Bf(t, u);
    for (const d of h) {
      const f = ya(n, o[d.start], o[d.end], d.loop), p = Nf(a, i, f);
      for (const g of p)
        r.push({
          source: g,
          target: d,
          start: {
            [n]: Iu(u, f, "start", Math.max)
          },
          end: {
            [n]: Iu(u, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function ya(e, t, n, s) {
  if (s)
    return;
  let i = t[e], o = n[e];
  return e === "angle" && (i = ve(i), o = ve(o)), {
    property: e,
    start: i,
    end: o
  };
}
function rv(e, t) {
  const { x: n = null, y: s = null } = e || {}, i = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Al(r, a, i);
    const l = i[r], c = i[a];
    s !== null ? (o.push({
      x: l.x,
      y: s
    }), o.push({
      x: c.x,
      y: s
    })) : n !== null && (o.push({
      x: n,
      y: l.y
    }), o.push({
      x: n,
      y: c.y
    }));
  }), o;
}
function Al(e, t, n) {
  for (; t > e; t--) {
    const s = n[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function Iu(e, t, n, s) {
  return e && t ? s(e[n], t[n]) : e ? e[n] : t ? t[n] : 0;
}
function ip(e, t) {
  let n = [], s = !1;
  return Vt(e) ? (s = !0, n = e) : n = rv(e, t), n.length ? new Sn({
    points: n,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function Vu(e) {
  return e && e.fill !== !1;
}
function av(e, t, n) {
  let i = e[t].fill;
  const o = [
    t
  ];
  let r;
  if (!n)
    return i;
  for (; i !== !1 && o.indexOf(i) === -1; ) {
    if (!Ht(i))
      return i;
    if (r = e[i], !r)
      return !1;
    if (r.visible)
      return i;
    o.push(i), i = r.fill;
  }
  return !1;
}
function lv(e, t, n) {
  const s = dv(e);
  if (pt(s))
    return isNaN(s.value) ? !1 : s;
  let i = parseFloat(s);
  return Ht(i) && Math.floor(i) === i ? cv(s[0], t, i, n) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function cv(e, t, n, s) {
  return (e === "-" || e === "+") && (n = t + n), n === t || n < 0 || n >= s ? !1 : n;
}
function uv(e, t) {
  let n = null;
  return e === "start" ? n = t.bottom : e === "end" ? n = t.top : pt(e) ? n = t.getPixelForValue(e.value) : t.getBasePixel && (n = t.getBasePixel()), n;
}
function hv(e, t, n) {
  let s;
  return e === "start" ? s = n : e === "end" ? s = t.options.reverse ? t.min : t.max : pt(e) ? s = e.value : s = t.getBaseValue(), s;
}
function dv(e) {
  const t = e.options, n = t.fill;
  let s = ht(n && n.target, n);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function fv(e) {
  const { scale: t, index: n, line: s } = e, i = [], o = s.segments, r = s.points, a = pv(t, n);
  a.push(ip({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let u = c.start; u <= c.end; u++)
      gv(i, r[u], a);
  }
  return new Sn({
    points: i,
    options: {}
  });
}
function pv(e, t) {
  const n = [], s = e.getMatchingVisibleMetas("line");
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (o.index === t)
      break;
    o.hidden || n.unshift(o.dataset);
  }
  return n;
}
function gv(e, t, n) {
  const s = [];
  for (let i = 0; i < n.length; i++) {
    const o = n[i], { first: r, last: a, point: l } = mv(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (e.push(l), !a)
        break;
    }
  }
  e.push(...s);
}
function mv(e, t, n) {
  const s = e.interpolate(t, n);
  if (!s)
    return {};
  const i = s[n], o = e.segments, r = e.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const u = o[c], h = r[u.start][n], d = r[u.end][n];
    if (rn(i, h, d)) {
      a = i === h, l = i === d;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: s
  };
}
class op {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, n, s) {
    const { x: i, y: o, radius: r } = this;
    return n = n || {
      start: 0,
      end: Ot
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
function yv(e) {
  const { chart: t, fill: n, line: s } = e;
  if (Ht(n))
    return bv(t, n);
  if (n === "stack")
    return fv(e);
  if (n === "shape")
    return !0;
  const i = xv(e);
  return i instanceof op ? i : ip(i, s);
}
function bv(e, t) {
  const n = e.getDatasetMeta(t);
  return n && e.isDatasetVisible(t) ? n.dataset : null;
}
function xv(e) {
  return (e.scale || {}).getPointPositionForValue ? _v(e) : vv(e);
}
function vv(e) {
  const { scale: t = {}, fill: n } = e, s = uv(n, t);
  if (Ht(s)) {
    const i = t.isHorizontal();
    return {
      x: i ? s : null,
      y: i ? null : s
    };
  }
  return null;
}
function _v(e) {
  const { scale: t, fill: n } = e, s = t.options, i = t.getLabels().length, o = s.reverse ? t.max : t.min, r = hv(n, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new op({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < i; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function jr(e, t, n) {
  const s = yv(t), { line: i, scale: o, axis: r } = t, a = i.options, l = a.fill, c = a.backgroundColor, { above: u = c, below: h = c } = l || {};
  s && i.points.length && (ir(e, n), Sv(e, {
    line: i,
    target: s,
    above: u,
    below: h,
    area: n,
    scale: o,
    axis: r
  }), or(e));
}
function Sv(e, t) {
  const { line: n, target: s, above: i, below: o, area: r, scale: a } = t, l = n._loop ? "angle" : t.axis;
  e.save(), l === "x" && o !== i && (Fu(e, s, r.top), Nu(e, {
    line: n,
    target: s,
    color: i,
    scale: a,
    property: l
  }), e.restore(), e.save(), Fu(e, s, r.bottom)), Nu(e, {
    line: n,
    target: s,
    color: o,
    scale: a,
    property: l
  }), e.restore();
}
function Fu(e, t, n) {
  const { segments: s, points: i } = t;
  let o = !0, r = !1;
  e.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, u = i[l], h = i[Al(l, c, i)];
    o ? (e.moveTo(u.x, u.y), o = !1) : (e.lineTo(u.x, n), e.lineTo(u.x, u.y)), r = !!t.pathSegment(e, a, {
      move: r
    }), r ? e.closePath() : e.lineTo(h.x, n);
  }
  e.lineTo(t.first().x, n), e.closePath(), e.clip();
}
function Nu(e, t) {
  const { line: n, target: s, property: i, color: o, scale: r } = t, a = ov(n, s, i);
  for (const { source: l, target: c, start: u, end: h } of a) {
    const { style: { backgroundColor: d = o } = {} } = l, f = s !== !0;
    e.save(), e.fillStyle = d, wv(e, r, f && ya(i, u, h)), e.beginPath();
    const p = !!n.pathSegment(e, l);
    let g;
    if (f) {
      p ? e.closePath() : Bu(e, s, h, i);
      const m = !!s.pathSegment(e, c, {
        move: p,
        reverse: !0
      });
      g = p && m, g || Bu(e, s, u, i);
    }
    e.closePath(), e.fill(g ? "evenodd" : "nonzero"), e.restore();
  }
}
function wv(e, t, n) {
  const { top: s, bottom: i } = t.chart.chartArea, { property: o, start: r, end: a } = n || {};
  o === "x" && (e.beginPath(), e.rect(r, s, a - r, i - s), e.clip());
}
function Bu(e, t, n, s) {
  const i = t.interpolate(n, s);
  i && e.lineTo(i.x, i.y);
}
var Av = {
  id: "filler",
  afterDatasetsUpdate(e, t, n) {
    const s = (e.data.datasets || []).length, i = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = e.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Sn && (l = {
        visible: e.isDatasetVisible(r),
        index: r,
        fill: lv(a, r, s),
        chart: e,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, i.push(l);
    for (r = 0; r < s; ++r)
      l = i[r], !(!l || l.fill === !1) && (l.fill = av(i, r, n.propagate));
  },
  beforeDraw(e, t, n) {
    const s = n.drawTime === "beforeDraw", i = e.getSortedVisibleDatasetMetas(), o = e.chartArea;
    for (let r = i.length - 1; r >= 0; --r) {
      const a = i[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && jr(e.ctx, a, o));
    }
  },
  beforeDatasetsDraw(e, t, n) {
    if (n.drawTime !== "beforeDatasetsDraw")
      return;
    const s = e.getSortedVisibleDatasetMetas();
    for (let i = s.length - 1; i >= 0; --i) {
      const o = s[i].$filler;
      Vu(o) && jr(e.ctx, o, e.chartArea);
    }
  },
  beforeDatasetDraw(e, t, n) {
    const s = t.meta.$filler;
    !Vu(s) || n.drawTime !== "beforeDatasetDraw" || jr(e.ctx, s, e.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const ju = (e, t) => {
  let { boxHeight: n = t, boxWidth: s = t } = e;
  return e.usePointStyle && (n = Math.min(n, t), s = e.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: n,
    itemHeight: Math.max(t, n)
  };
}, Pv = (e, t) => e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class $u extends dn {
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
    let n = Tt(t.generateLabels, [
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
    const s = t.labels, i = Xt(s.font), o = i.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = ju(s, o);
    let c, u;
    n.font = i.string, this.isHorizontal() ? (c = this.maxWidth, u = this._fitRows(r, o, a, l) + 10) : (u = this.maxHeight, c = this._fitCols(r, i, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(u, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, n, s, i) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], u = i + a;
    let h = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let d = -1, f = -u;
    return this.legendItems.forEach((p, g) => {
      const m = s + n / 2 + o.measureText(p.text).width;
      (g === 0 || c[c.length - 1] + m + 2 * a > r) && (h += u, c[c.length - (g > 0 ? 0 : 1)] = 0, f += u, d++), l[g] = {
        left: 0,
        top: f,
        row: d,
        width: m,
        height: i
      }, c[c.length - 1] += m + a;
    }), h;
  }
  _fitCols(t, n, s, i) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], u = r - t;
    let h = a, d = 0, f = 0, p = 0, g = 0;
    return this.legendItems.forEach((m, y) => {
      const { itemWidth: b, itemHeight: S } = Tv(s, n, o, m, i);
      y > 0 && f + S + 2 * a > u && (h += d + a, c.push({
        width: d,
        height: f
      }), p += d + a, g++, d = f = 0), l[y] = {
        left: p,
        top: f,
        col: g,
        width: b,
        height: S
      }, d = Math.max(d, b), f += S + a;
    }), h += d, c.push({
      width: d,
      height: f
    }), h;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: n, options: { align: s, labels: { padding: i }, rtl: o } } = this, r = vs(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = se(s, this.left + i, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row && (a = c.row, l = se(s, this.left + i, this.right - this.lineWidths[a])), c.top += this.top + t + i, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + i;
    } else {
      let a = 0, l = se(s, this.top + t + i, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a && (a = c.col, l = se(s, this.top + t + i, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + i, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + i;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ir(t, this), this._draw(), or(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: s, ctx: i } = this, { align: o, labels: r } = t, a = Ft.color, l = vs(t.rtl, this.left, this.width), c = Xt(r.font), { padding: u } = r, h = c.size, d = h / 2;
    let f;
    this.drawTitle(), i.textAlign = l.textAlign("left"), i.textBaseline = "middle", i.lineWidth = 0.5, i.font = c.string;
    const { boxWidth: p, boxHeight: g, itemHeight: m } = ju(r, h), y = function(w, A, P) {
      if (isNaN(p) || p <= 0 || isNaN(g) || g < 0)
        return;
      i.save();
      const M = ht(P.lineWidth, 1);
      if (i.fillStyle = ht(P.fillStyle, a), i.lineCap = ht(P.lineCap, "butt"), i.lineDashOffset = ht(P.lineDashOffset, 0), i.lineJoin = ht(P.lineJoin, "miter"), i.lineWidth = M, i.strokeStyle = ht(P.strokeStyle, a), i.setLineDash(ht(P.lineDash, [])), r.usePointStyle) {
        const T = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: P.pointStyle,
          rotation: P.rotation,
          borderWidth: M
        }, C = l.xPlus(w, p / 2), D = A + d;
        Mf(i, T, C, D, r.pointStyleWidth && p);
      } else {
        const T = A + Math.max((h - g) / 2, 0), C = l.leftForLtr(w, p), D = Gn(P.borderRadius);
        i.beginPath(), Object.values(D).some((I) => I !== 0) ? bi(i, {
          x: C,
          y: T,
          w: p,
          h: g,
          radius: D
        }) : i.rect(C, T, p, g), i.fill(), M !== 0 && i.stroke();
      }
      i.restore();
    }, b = function(w, A, P) {
      es(i, P.text, w, A + m / 2, c, {
        strikethrough: P.hidden,
        textAlign: l.textAlign(P.textAlign)
      });
    }, S = this.isHorizontal(), _ = this._computeTitleHeight();
    S ? f = {
      x: se(o, this.left + u, this.right - s[0]),
      y: this.top + u + _,
      line: 0
    } : f = {
      x: this.left + u,
      y: se(o, this.top + _ + u, this.bottom - n[0].height),
      line: 0
    }, If(this.ctx, t.textDirection);
    const x = m + u;
    this.legendItems.forEach((w, A) => {
      i.strokeStyle = w.fontColor, i.fillStyle = w.fontColor;
      const P = i.measureText(w.text).width, M = l.textAlign(w.textAlign || (w.textAlign = r.textAlign)), T = p + d + P;
      let C = f.x, D = f.y;
      l.setWidth(this.width), S ? A > 0 && C + T + u > this.right && (D = f.y += x, f.line++, C = f.x = se(o, this.left + u, this.right - s[f.line])) : A > 0 && D + x > this.bottom && (C = f.x = C + n[f.line].width + u, f.line++, D = f.y = se(o, this.top + _ + u, this.bottom - n[f.line].height));
      const I = l.x(C);
      if (y(I, D, w), C = Yy(M, C + p + d, S ? C + T : this.right, t.rtl), b(l.x(C), D, w), S)
        f.x += T + u;
      else if (typeof w.text != "string") {
        const Z = c.lineHeight;
        f.y += rp(w, Z) + u;
      } else
        f.y += x;
    }), Vf(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, n = t.title, s = Xt(n.font), i = ae(n.padding);
    if (!n.display)
      return;
    const o = vs(t.rtl, this.left, this.width), r = this.ctx, a = n.position, l = s.size / 2, c = i.top + l;
    let u, h = this.left, d = this.width;
    if (this.isHorizontal())
      d = Math.max(...this.lineWidths), u = this.top + c, h = se(t.align, h, this.right - d);
    else {
      const p = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
      u = c + se(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
    }
    const f = se(a, h, h + d);
    r.textAlign = o.textAlign(gl(a)), r.textBaseline = "middle", r.strokeStyle = n.color, r.fillStyle = n.color, r.font = s.string, es(r, n.text, f, u, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, n = Xt(t.font), s = ae(t.padding);
    return t.display ? n.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, n) {
    let s, i, o;
    if (rn(t, this.left, this.right) && rn(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (i = o[s], rn(t, i.left, i.left + i.width) && rn(n, i.top, i.top + i.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!Cv(t.type, n))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const i = this._hoveredItem, o = Pv(i, s);
      i && !o && Tt(n.onLeave, [
        t,
        i,
        this
      ], this), this._hoveredItem = s, s && !o && Tt(n.onHover, [
        t,
        s,
        this
      ], this);
    } else s && Tt(n.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function Tv(e, t, n, s, i) {
  const o = Mv(s, e, t, n), r = Dv(i, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function Mv(e, t, n, s) {
  let i = e.text;
  return i && typeof i != "string" && (i = i.reduce((o, r) => o.length > r.length ? o : r)), t + n.size / 2 + s.measureText(i).width;
}
function Dv(e, t, n) {
  let s = e;
  return typeof t.text != "string" && (s = rp(t, n)), s;
}
function rp(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function Cv(e, t) {
  return !!((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup"));
}
var kv = {
  id: "legend",
  _element: $u,
  start(e, t, n) {
    const s = e.legend = new $u({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    oe.configure(e, s, n), oe.addBox(e, s);
  },
  stop(e) {
    oe.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const s = e.legend;
    oe.configure(e, s, n), s.options = n;
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
        return e._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0), u = ae(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: i || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index
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
class Pl extends dn {
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
    const i = Vt(s.text) ? s.text.length : 1;
    this._padding = ae(s.padding);
    const o = i * Xt(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: n, left: s, bottom: i, right: o, options: r } = this, a = r.align;
    let l = 0, c, u, h;
    return this.isHorizontal() ? (u = se(a, s, o), h = n + t, c = o - s) : (r.position === "left" ? (u = s + t, h = se(a, i, n), l = Rt * -0.5) : (u = o - t, h = se(a, n, i), l = Rt * 0.5), c = i - n), {
      titleX: u,
      titleY: h,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, n = this.options;
    if (!n.display)
      return;
    const s = Xt(n.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    es(t, n.text, 0, 0, s, {
      color: n.color,
      maxWidth: l,
      rotation: c,
      textAlign: gl(n.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function Ev(e, t) {
  const n = new Pl({
    ctx: e.ctx,
    options: t,
    chart: e
  });
  oe.configure(e, n, t), oe.addBox(e, n), e.titleBlock = n;
}
var Ov = {
  id: "title",
  _element: Pl,
  start(e, t, n) {
    Ev(e, n);
  },
  stop(e) {
    const t = e.titleBlock;
    oe.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, n) {
    const s = e.titleBlock;
    oe.configure(e, s, n), s.options = n;
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
const io = /* @__PURE__ */ new WeakMap();
var Rv = {
  id: "subtitle",
  start(e, t, n) {
    const s = new Pl({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    oe.configure(e, s, n), oe.addBox(e, s), io.set(e, s);
  },
  stop(e) {
    oe.removeBox(e, io.get(e)), io.delete(e);
  },
  beforeUpdate(e, t, n) {
    const s = io.get(e);
    oe.configure(e, s, n), s.options = n;
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
const Zs = {
  average(e) {
    if (!e.length)
      return !1;
    let t, n, s = /* @__PURE__ */ new Set(), i = 0, o = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const a = e[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        s.add(l.x), i += l.y, ++o;
      }
    }
    return o === 0 || s.size === 0 ? !1 : {
      x: [
        ...s
      ].reduce((a, l) => a + l) / s.size,
      y: i / o
    };
  },
  nearest(e, t) {
    if (!e.length)
      return !1;
    let n = t.x, s = t.y, i = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = e.length; o < r; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), u = ca(t, c);
        u < i && (i = u, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      n = l.x, s = l.y;
    }
    return {
      x: n,
      y: s
    };
  }
};
function je(e, t) {
  return t && (Vt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function en(e) {
  return (typeof e == "string" || e instanceof String) && e.indexOf(`
`) > -1 ? e.split(`
`) : e;
}
function Lv(e, t) {
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
function Hu(e, t) {
  const n = e.chart.ctx, { body: s, footer: i, title: o } = e, { boxWidth: r, boxHeight: a } = t, l = Xt(t.bodyFont), c = Xt(t.titleFont), u = Xt(t.footerFont), h = o.length, d = i.length, f = s.length, p = ae(t.padding);
  let g = p.height, m = 0, y = s.reduce((_, x) => _ + x.before.length + x.lines.length + x.after.length, 0);
  if (y += e.beforeBody.length + e.afterBody.length, h && (g += h * c.lineHeight + (h - 1) * t.titleSpacing + t.titleMarginBottom), y) {
    const _ = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    g += f * _ + (y - f) * l.lineHeight + (y - 1) * t.bodySpacing;
  }
  d && (g += t.footerMarginTop + d * u.lineHeight + (d - 1) * t.footerSpacing);
  let b = 0;
  const S = function(_) {
    m = Math.max(m, n.measureText(_).width + b);
  };
  return n.save(), n.font = c.string, St(e.title, S), n.font = l.string, St(e.beforeBody.concat(e.afterBody), S), b = t.displayColors ? r + 2 + t.boxPadding : 0, St(s, (_) => {
    St(_.before, S), St(_.lines, S), St(_.after, S);
  }), b = 0, n.font = u.string, St(e.footer, S), n.restore(), m += p.width, {
    width: m,
    height: g
  };
}
function Iv(e, t) {
  const { y: n, height: s } = t;
  return n < s / 2 ? "top" : n > e.height - s / 2 ? "bottom" : "center";
}
function Vv(e, t, n, s) {
  const { x: i, width: o } = s, r = n.caretSize + n.caretPadding;
  if (e === "left" && i + o + r > t.width || e === "right" && i - o - r < 0)
    return !0;
}
function Fv(e, t, n, s) {
  const { x: i, width: o } = n, { width: r, chartArea: { left: a, right: l } } = e;
  let c = "center";
  return s === "center" ? c = i <= (a + l) / 2 ? "left" : "right" : i <= o / 2 ? c = "left" : i >= r - o / 2 && (c = "right"), Vv(c, e, t, n) && (c = "center"), c;
}
function zu(e, t, n) {
  const s = n.yAlign || t.yAlign || Iv(e, n);
  return {
    xAlign: n.xAlign || t.xAlign || Fv(e, t, n, s),
    yAlign: s
  };
}
function Nv(e, t) {
  let { x: n, width: s } = e;
  return t === "right" ? n -= s : t === "center" && (n -= s / 2), n;
}
function Bv(e, t, n) {
  let { y: s, height: i } = e;
  return t === "top" ? s += n : t === "bottom" ? s -= i + n : s -= i / 2, s;
}
function Wu(e, t, n, s) {
  const { caretSize: i, caretPadding: o, cornerRadius: r } = e, { xAlign: a, yAlign: l } = n, c = i + o, { topLeft: u, topRight: h, bottomLeft: d, bottomRight: f } = Gn(r);
  let p = Nv(t, a);
  const g = Bv(t, l, c);
  return l === "center" ? a === "left" ? p += c : a === "right" && (p -= c) : a === "left" ? p -= Math.max(u, d) + i : a === "right" && (p += Math.max(h, f) + i), {
    x: Zt(p, 0, s.width - t.width),
    y: Zt(g, 0, s.height - t.height)
  };
}
function oo(e, t, n) {
  const s = ae(n.padding);
  return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - s.right : e.x + s.left;
}
function Uu(e) {
  return je([], en(e));
}
function jv(e, t, n) {
  return On(e, {
    tooltip: t,
    tooltipItems: n,
    type: "tooltip"
  });
}
function Yu(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const ap = {
  beforeTitle: Je,
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
  afterTitle: Je,
  beforeBody: Je,
  beforeLabel: Je,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return mt(n) || (t += n), t;
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
  afterLabel: Je,
  afterBody: Je,
  beforeFooter: Je,
  footer: Je,
  afterFooter: Je
};
function he(e, t, n, s) {
  const i = e[t].call(n, s);
  return typeof i > "u" ? ap[t].call(n, s) : i;
}
class ba extends dn {
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
    const n = this.chart, s = this.options.setContext(this.getContext()), i = s.enabled && n.options.animation && s.animations, o = new jf(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = jv(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, n) {
    const { callbacks: s } = n, i = he(s, "beforeTitle", this, t), o = he(s, "title", this, t), r = he(s, "afterTitle", this, t);
    let a = [];
    return a = je(a, en(i)), a = je(a, en(o)), a = je(a, en(r)), a;
  }
  getBeforeBody(t, n) {
    return Uu(he(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: s } = n, i = [];
    return St(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Yu(s, o);
      je(r.before, en(he(a, "beforeLabel", this, o))), je(r.lines, he(a, "label", this, o)), je(r.after, en(he(a, "afterLabel", this, o))), i.push(r);
    }), i;
  }
  getAfterBody(t, n) {
    return Uu(he(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: s } = n, i = he(s, "beforeFooter", this, t), o = he(s, "footer", this, t), r = he(s, "afterFooter", this, t);
    let a = [];
    return a = je(a, en(i)), a = je(a, en(o)), a = je(a, en(r)), a;
  }
  _createItems(t) {
    const n = this._active, s = this.chart.data, i = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = n.length; l < c; ++l)
      a.push(Lv(this.chart, n[l]));
    return t.filter && (a = a.filter((u, h, d) => t.filter(u, h, d, s))), t.itemSort && (a = a.sort((u, h) => t.itemSort(u, h, s))), St(a, (u) => {
      const h = Yu(t.callbacks, u);
      i.push(he(h, "labelColor", this, u)), o.push(he(h, "labelPointStyle", this, u)), r.push(he(h, "labelTextColor", this, u));
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
      const a = Zs[s.position].call(this, i, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = Hu(this, s), c = Object.assign({}, a, l), u = zu(this.chart, s, c), h = Wu(s, c, u, this.chart);
      this.xAlign = u.xAlign, this.yAlign = u.yAlign, o = {
        opacity: 1,
        x: h.x,
        y: h.y,
        width: l.width,
        height: l.height,
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
    const { xAlign: i, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: u, bottomRight: h } = Gn(a), { x: d, y: f } = t, { width: p, height: g } = n;
    let m, y, b, S, _, x;
    return o === "center" ? (_ = f + g / 2, i === "left" ? (m = d, y = m - r, S = _ + r, x = _ - r) : (m = d + p, y = m + r, S = _ - r, x = _ + r), b = m) : (i === "left" ? y = d + Math.max(l, u) + r : i === "right" ? y = d + p - Math.max(c, h) - r : y = this.caretX, o === "top" ? (S = f, _ = S - r, m = y - r, b = y + r) : (S = f + g, _ = S + r, m = y + r, b = y - r), x = S), {
      x1: m,
      x2: y,
      x3: b,
      y1: S,
      y2: _,
      y3: x
    };
  }
  drawTitle(t, n, s) {
    const i = this.title, o = i.length;
    let r, a, l;
    if (o) {
      const c = vs(s.rtl, this.x, this.width);
      for (t.x = oo(this, s.titleAlign, s), n.textAlign = c.textAlign(s.titleAlign), n.textBaseline = "middle", r = Xt(s.titleFont), a = s.titleSpacing, n.fillStyle = s.titleColor, n.font = r.string, l = 0; l < o; ++l)
        n.fillText(i[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, n, s, i, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, u = Xt(o.bodyFont), h = oo(this, "left", o), d = i.x(h), f = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0, p = n.y + f;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = i.leftForLtr(d, c) + c / 2, y = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, ha(t, g, m, y), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, ha(t, g, m, y);
    } else {
      t.lineWidth = pt(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const g = i.leftForLtr(d, c), m = i.leftForLtr(i.xPlus(d, 1), c - 2), y = Gn(r.borderRadius);
      Object.values(y).some((b) => b !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, bi(t, {
        x: g,
        y: p,
        w: c,
        h: l,
        radius: y
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), bi(t, {
        x: m,
        y: p + 1,
        w: c - 2,
        h: l - 2,
        radius: y
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, p, c, l), t.strokeRect(g, p, c, l), t.fillStyle = r.backgroundColor, t.fillRect(m, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, n, s) {
    const { body: i } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: u } = s, h = Xt(s.bodyFont);
    let d = h.lineHeight, f = 0;
    const p = vs(s.rtl, this.x, this.width), g = function(P) {
      n.fillText(P, p.x(t.x + f), t.y + d / 2), t.y += d + o;
    }, m = p.textAlign(r);
    let y, b, S, _, x, w, A;
    for (n.textAlign = r, n.textBaseline = "middle", n.font = h.string, t.x = oo(this, m, s), n.fillStyle = s.bodyColor, St(this.beforeBody, g), f = a && m !== "right" ? r === "center" ? c / 2 + u : c + 2 + u : 0, _ = 0, w = i.length; _ < w; ++_) {
      for (y = i[_], b = this.labelTextColors[_], n.fillStyle = b, St(y.before, g), S = y.lines, a && S.length && (this._drawColorBox(n, t, _, p, s), d = Math.max(h.lineHeight, l)), x = 0, A = S.length; x < A; ++x)
        g(S[x]), d = h.lineHeight;
      St(y.after, g);
    }
    f = 0, d = h.lineHeight, St(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, n, s) {
    const i = this.footer, o = i.length;
    let r, a;
    if (o) {
      const l = vs(s.rtl, this.x, this.width);
      for (t.x = oo(this, s.footerAlign, s), t.y += s.footerMarginTop, n.textAlign = l.textAlign(s.footerAlign), n.textBaseline = "middle", r = Xt(s.footerFont), n.fillStyle = s.footerColor, n.font = r.string, a = 0; a < o; ++a)
        n.fillText(i[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, n, s, i) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: u } = s, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: p } = Gn(i.cornerRadius);
    n.fillStyle = i.backgroundColor, n.strokeStyle = i.borderColor, n.lineWidth = i.borderWidth, n.beginPath(), n.moveTo(a + h, l), r === "top" && this.drawCaret(t, n, s, i), n.lineTo(a + c - d, l), n.quadraticCurveTo(a + c, l, a + c, l + d), r === "center" && o === "right" && this.drawCaret(t, n, s, i), n.lineTo(a + c, l + u - p), n.quadraticCurveTo(a + c, l + u, a + c - p, l + u), r === "bottom" && this.drawCaret(t, n, s, i), n.lineTo(a + f, l + u), n.quadraticCurveTo(a, l + u, a, l + u - f), r === "center" && o === "left" && this.drawCaret(t, n, s, i), n.lineTo(a, l + h), n.quadraticCurveTo(a, l, a + h, l), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart, s = this.$animations, i = s && s.x, o = s && s.y;
    if (i || o) {
      const r = Zs[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Hu(this, t), l = Object.assign({}, r, this._size), c = zu(n, t, l), u = Wu(t, l, c, n);
      (i._to !== u.x || o._to !== u.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, u));
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
    const r = ae(n.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    n.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, i, n), If(t, n.textDirection), o.y += r.top, this.drawTitle(o, t, n), this.drawBody(o, t, n), this.drawFooter(o, t, n), Vf(t, n.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const s = this._active, i = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !Oo(s, i), r = this._positionChanged(i, n);
    (o || r) && (this._active = i, this._eventPosition = n, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, n, s = !0) {
    if (n && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options, o = this._active || [], r = this._getActiveElements(t, o, n, s), a = this._positionChanged(r, t), l = n || !Oo(r, o) || a;
    return l && (this._active = r, (i.enabled || i.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, n))), l;
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
    const { caretX: s, caretY: i, options: o } = this, r = Zs[o.position].call(this, t, n);
    return r !== !1 && (s !== r.x || i !== r.y);
  }
}
B(ba, "positioners", Zs);
var $v = {
  id: "tooltip",
  _element: ba,
  positioners: Zs,
  afterInit(e, t, n) {
    n && (e.tooltip = new ba({
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
    callbacks: ap
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
}, Hv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: tv,
  Decimation: iv,
  Filler: Av,
  Legend: kv,
  SubTitle: Rv,
  Title: Ov,
  Tooltip: $v
});
const zv = (e, t, n, s) => (typeof t == "string" ? (n = e.push(t) - 1, s.unshift({
  index: n,
  label: t
})) : isNaN(t) && (n = null), n);
function Wv(e, t, n, s) {
  const i = e.indexOf(t);
  if (i === -1)
    return zv(e, t, n, s);
  const o = e.lastIndexOf(t);
  return i !== o ? n : i;
}
const Uv = (e, t) => e === null ? null : Zt(Math.round(e), 0, t);
function Ku(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class xa extends ss {
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
    if (mt(t))
      return null;
    const s = this.getLabels();
    return n = isFinite(n) && s[n] === t ? n : Wv(s, t, ht(n, t), this._addedLabels), Uv(n, s.length - 1);
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
    return Ku.call(this, t);
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
B(xa, "id", "category"), B(xa, "defaults", {
  ticks: {
    callback: Ku
  }
});
function Yv(e, t) {
  const n = [], { bounds: i, step: o, min: r, max: a, precision: l, count: c, maxTicks: u, maxDigits: h, includeBounds: d } = e, f = o || 1, p = u - 1, { min: g, max: m } = t, y = !mt(r), b = !mt(a), S = !mt(c), _ = (m - g) / (h + 1);
  let x = Hc((m - g) / p / f) * f, w, A, P, M;
  if (x < 1e-14 && !y && !b)
    return [
      {
        value: g
      },
      {
        value: m
      }
    ];
  M = Math.ceil(m / x) - Math.floor(g / x), M > p && (x = Hc(M * x / p / f) * f), mt(l) || (w = Math.pow(10, l), x = Math.ceil(x * w) / w), i === "ticks" ? (A = Math.floor(g / x) * x, P = Math.ceil(m / x) * x) : (A = g, P = m), y && b && o && By((a - r) / o, x / 1e3) ? (M = Math.round(Math.min((a - r) / x, u)), x = (a - r) / M, A = r, P = a) : S ? (A = y ? r : A, P = b ? a : P, M = c - 1, x = (P - A) / M) : (M = (P - A) / x, si(M, Math.round(M), x / 1e3) ? M = Math.round(M) : M = Math.ceil(M));
  const T = Math.max(zc(x), zc(A));
  w = Math.pow(10, mt(l) ? T : l), A = Math.round(A * w) / w, P = Math.round(P * w) / w;
  let C = 0;
  for (y && (d && A !== r ? (n.push({
    value: r
  }), A < r && C++, si(Math.round((A + C * x) * w) / w, r, Xu(r, _, e)) && C++) : A < r && C++); C < M; ++C) {
    const D = Math.round((A + C * x) * w) / w;
    if (b && D > a)
      break;
    n.push({
      value: D
    });
  }
  return b && d && P !== a ? n.length && si(n[n.length - 1].value, a, Xu(a, _, e)) ? n[n.length - 1].value = a : n.push({
    value: a
  }) : (!b || P === a) && n.push({
    value: P
  }), n;
}
function Xu(e, t, { horizontal: n, minRotation: s }) {
  const i = Ie(s), o = (n ? Math.sin(i) : Math.cos(i)) || 1e-3, r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class Bo extends ss {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    return mt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: n, maxDefined: s } = this.getUserBounds();
    let { min: i, max: o } = this;
    const r = (l) => i = n ? i : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = Ue(i), c = Ue(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (i === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(i - l);
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
    }, o = this._range || this, r = Yv(i, o);
    return t.bounds === "ticks" && bf(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
    return Ni(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class va extends Bo {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = Ht(t) ? t : 0, this.max = Ht(n) ? n : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), n = t ? this.width : this.height, s = Ie(this.options.ticks.minRotation), i = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, o.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
B(va, "id", "linear"), B(va, "defaults", {
  ticks: {
    callback: sr.formatters.numeric
  }
});
const vi = (e) => Math.floor(_n(e)), $n = (e, t) => Math.pow(10, vi(e) + t);
function Gu(e) {
  return e / Math.pow(10, vi(e)) === 1;
}
function qu(e, t, n) {
  const s = Math.pow(10, n), i = Math.floor(e / s);
  return Math.ceil(t / s) - i;
}
function Kv(e, t) {
  const n = t - e;
  let s = vi(n);
  for (; qu(e, t, s) > 10; )
    s++;
  for (; qu(e, t, s) < 10; )
    s--;
  return Math.min(s, vi(e));
}
function Xv(e, { min: t, max: n }) {
  t = be(e.min, t);
  const s = [], i = vi(t);
  let o = Kv(t, n), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = i > o ? Math.pow(10, i) : 0, c = Math.round((t - l) * r) / r, u = Math.floor((t - l) / a / 10) * a * 10;
  let h = Math.floor((c - u) / Math.pow(10, o)), d = be(e.min, Math.round((l + u + h * Math.pow(10, o)) * r) / r);
  for (; d < n; )
    s.push({
      value: d,
      major: Gu(d),
      significand: h
    }), h >= 10 ? h = h < 15 ? 15 : 20 : h++, h >= 20 && (o++, h = 2, r = o >= 0 ? 1 : r), d = Math.round((l + u + h * Math.pow(10, o)) * r) / r;
  const f = be(e.max, d);
  return s.push({
    value: f,
    major: Gu(f),
    significand: h
  }), s;
}
class _a extends ss {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    const s = Bo.prototype.parse.apply(this, [
      t,
      n
    ]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return Ht(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = Ht(t) ? Math.max(0, t) : null, this.max = Ht(n) ? Math.max(0, n) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !Ht(this._userMin) && (this.min = t === $n(this.min, 0) ? $n(this.min, -1) : $n(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let s = this.min, i = this.max;
    const o = (a) => s = t ? s : a, r = (a) => i = n ? i : a;
    s === i && (s <= 0 ? (o(1), r(10)) : (o($n(s, -1)), r($n(i, 1)))), s <= 0 && o($n(i, -1)), i <= 0 && r($n(s, 1)), this.min = s, this.max = i;
  }
  buildTicks() {
    const t = this.options, n = {
      min: this._userMin,
      max: this._userMax
    }, s = Xv(n, this);
    return t.bounds === "ticks" && bf(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : Ni(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = _n(t), this._valueRange = _n(this.max) - _n(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (_n(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
B(_a, "id", "logarithmic"), B(_a, "defaults", {
  ticks: {
    callback: sr.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Sa(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = ae(t.backdropPadding);
    return ht(t.font && t.font.size, Ft.font.size) + n.height;
  }
  return 0;
}
function Gv(e, t, n) {
  return n = Vt(n) ? n : [
    n
  ], {
    w: nb(e, t.string, n),
    h: n.length * t.lineHeight
  };
}
function Zu(e, t, n, s, i) {
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
function qv(e) {
  const t = {
    l: e.left + e._padding.left,
    r: e.right - e._padding.right,
    t: e.top + e._padding.top,
    b: e.bottom - e._padding.bottom
  }, n = Object.assign({}, t), s = [], i = [], o = e._pointLabels.length, r = e.options.pointLabels, a = r.centerPointLabels ? Rt / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(e.getPointLabelContext(l));
    i[l] = c.padding;
    const u = e.getPointPosition(l, e.drawingArea + i[l], a), h = Xt(c.font), d = Gv(e.ctx, h, e._pointLabels[l]);
    s[l] = d;
    const f = ve(e.getIndexAngle(l) + a), p = Math.round(fl(f)), g = Zu(p, u.x, d.w, 0, 180), m = Zu(p, u.y, d.h, 90, 270);
    Zv(n, t, f, g, m);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b), e._pointLabelItems = t_(e, s, i);
}
function Zv(e, t, n, s, i) {
  const o = Math.abs(Math.sin(n)), r = Math.abs(Math.cos(n));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, e.l = Math.min(e.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, e.r = Math.max(e.r, t.r + a)), i.start < t.t ? (l = (t.t - i.start) / r, e.t = Math.min(e.t, t.t - l)) : i.end > t.b && (l = (i.end - t.b) / r, e.b = Math.max(e.b, t.b + l));
}
function Qv(e, t, n) {
  const s = e.drawingArea, { extra: i, additionalAngle: o, padding: r, size: a } = n, l = e.getPointPosition(t, s + i + r, o), c = Math.round(fl(ve(l.angle + Ut))), u = s_(l.y, a.h, c), h = e_(c), d = n_(l.x, a.w, h);
  return {
    visible: !0,
    x: l.x,
    y: u,
    textAlign: h,
    left: d,
    top: u,
    right: d + a.w,
    bottom: u + a.h
  };
}
function Jv(e, t) {
  if (!t)
    return !0;
  const { left: n, top: s, right: i, bottom: o } = e;
  return !(ln({
    x: n,
    y: s
  }, t) || ln({
    x: n,
    y: o
  }, t) || ln({
    x: i,
    y: s
  }, t) || ln({
    x: i,
    y: o
  }, t));
}
function t_(e, t, n) {
  const s = [], i = e._pointLabels.length, o = e.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: Sa(o) / 2,
    additionalAngle: r ? Rt / i : 0
  };
  let c;
  for (let u = 0; u < i; u++) {
    l.padding = n[u], l.size = t[u];
    const h = Qv(e, u, l);
    s.push(h), a === "auto" && (h.visible = Jv(h, c), h.visible && (c = h));
  }
  return s;
}
function e_(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function n_(e, t, n) {
  return n === "right" ? e -= t : n === "center" && (e -= t / 2), e;
}
function s_(e, t, n) {
  return n === 90 || n === 270 ? e -= t / 2 : (n > 270 || n < 90) && (e -= t), e;
}
function i_(e, t, n) {
  const { left: s, top: i, right: o, bottom: r } = n, { backdropColor: a } = t;
  if (!mt(a)) {
    const l = Gn(t.borderRadius), c = ae(t.backdropPadding);
    e.fillStyle = a;
    const u = s - c.left, h = i - c.top, d = o - s + c.width, f = r - i + c.height;
    Object.values(l).some((p) => p !== 0) ? (e.beginPath(), bi(e, {
      x: u,
      y: h,
      w: d,
      h: f,
      radius: l
    }), e.fill()) : e.fillRect(u, h, d, f);
  }
}
function o_(e, t) {
  const { ctx: n, options: { pointLabels: s } } = e;
  for (let i = t - 1; i >= 0; i--) {
    const o = e._pointLabelItems[i];
    if (!o.visible)
      continue;
    const r = s.setContext(e.getPointLabelContext(i));
    i_(n, r, o);
    const a = Xt(r.font), { x: l, y: c, textAlign: u } = o;
    es(n, e._pointLabels[i], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: u,
      textBaseline: "middle"
    });
  }
}
function lp(e, t, n, s) {
  const { ctx: i } = e;
  if (n)
    i.arc(e.xCenter, e.yCenter, t, 0, Ot);
  else {
    let o = e.getPointPosition(0, t);
    i.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      o = e.getPointPosition(r, t), i.lineTo(o.x, o.y);
  }
}
function r_(e, t, n, s, i) {
  const o = e.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || n < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(i.dash || []), o.lineDashOffset = i.dashOffset, o.beginPath(), lp(e, n, r, s), o.closePath(), o.stroke(), o.restore());
}
function a_(e, t, n) {
  return On(e, {
    label: n,
    index: t,
    type: "pointLabel"
  });
}
class Qs extends Bo {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = ae(Sa(this.options) / 2), n = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + n / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(n, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    this.min = Ht(t) && !isNaN(t) ? t : 0, this.max = Ht(n) && !isNaN(n) ? n : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Sa(this.options));
  }
  generateTickLabels(t) {
    Bo.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((n, s) => {
      const i = Tt(this.options.pointLabels.callback, [
        n,
        s
      ], this);
      return i || i === 0 ? i : "";
    }).filter((n, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? qv(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, s, i) {
    this.xCenter += Math.floor((t - n) / 2), this.yCenter += Math.floor((s - i) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, s, i));
  }
  getIndexAngle(t) {
    const n = Ot / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return ve(t * n + Ie(s));
  }
  getDistanceFromCenterForValue(t) {
    if (mt(t))
      return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (mt(t))
      return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const s = n[t];
      return a_(this.getContext(), t, s);
    }
  }
  getPointPosition(t, n, s = 0) {
    const i = this.getIndexAngle(t) - Ut + s;
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
      s.save(), s.beginPath(), lp(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, n = this.options, { angleLines: s, grid: i, border: o } = n, r = this._pointLabels.length;
    let a, l, c;
    if (n.pointLabels.display && o_(this, r), i.display && this.ticks.forEach((u, h) => {
      if (h !== 0 || h === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(u.value);
        const d = this.getContext(h), f = i.setContext(d), p = o.setContext(d);
        r_(this, f, l, r, p);
      }
    }), s.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const u = s.setContext(this.getPointLabelContext(a)), { color: h, lineWidth: d } = u;
        !d || !h || (t.lineWidth = d, t.strokeStyle = h, t.setLineDash(u.borderDash), t.lineDashOffset = u.borderDashOffset, l = this.getDistanceFromCenterForValue(n.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
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
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(i), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && this.min >= 0 && !n.reverse)
        return;
      const c = s.setContext(this.getContext(l)), u = Xt(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = u.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const h = ae(c.backdropPadding);
        t.fillRect(-r / 2 - h.left, -o - u.size / 2 - h.top, r + h.width, u.size + h.height);
      }
      es(t, a.label, 0, -o, u, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
B(Qs, "id", "radialLinear"), B(Qs, "defaults", {
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
    callback: sr.formatters.numeric
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
}), B(Qs, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), B(Qs, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const lr = {
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
}, pe = /* @__PURE__ */ Object.keys(lr);
function Qu(e, t) {
  return e - t;
}
function Ju(e, t) {
  if (mt(t))
    return null;
  const n = e._adapter, { parser: s, round: i, isoWeekday: o } = e._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), Ht(r) || (r = typeof s == "string" ? n.parse(r, s) : n.parse(r)), r === null ? null : (i && (r = i === "week" && (ws(o) || o === !0) ? n.startOf(r, "isoWeek", o) : n.startOf(r, i)), +r);
}
function th(e, t, n, s) {
  const i = pe.length;
  for (let o = pe.indexOf(e); o < i - 1; ++o) {
    const r = lr[pe[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((n - t) / (a * r.size)) <= s)
      return pe[o];
  }
  return pe[i - 1];
}
function l_(e, t, n, s, i) {
  for (let o = pe.length - 1; o >= pe.indexOf(n); o--) {
    const r = pe[o];
    if (lr[r].common && e._adapter.diff(i, s, r) >= t - 1)
      return r;
  }
  return pe[n ? pe.indexOf(n) : 0];
}
function c_(e) {
  for (let t = pe.indexOf(e) + 1, n = pe.length; t < n; ++t)
    if (lr[pe[t]].common)
      return pe[t];
}
function eh(e, t, n) {
  if (!n)
    e[t] = !0;
  else if (n.length) {
    const { lo: s, hi: i } = pl(n, t), o = n[s] >= t ? n[s] : n[i];
    e[o] = !0;
  }
}
function u_(e, t, n, s) {
  const i = e._adapter, o = +i.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +i.add(a, 1, s))
    l = n[a], l >= 0 && (t[l].major = !0);
  return t;
}
function nh(e, t, n) {
  const s = [], i = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], i[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !n ? s : u_(e, s, i, n);
}
class _i extends ss {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, n = {}) {
    const s = t.time || (t.time = {}), i = this._adapter = new b0._date(t.adapters.date);
    i.init(n), ni(s.displayFormats, i.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = n.normalized;
  }
  parse(t, n) {
    return t === void 0 ? null : Ju(this, t);
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
    function l(c) {
      !r && !isNaN(c.min) && (i = Math.min(i, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), i = Ht(i) && !isNaN(i) ? i : +n.startOf(Date.now(), s), o = Ht(o) && !isNaN(o) ? o : +n.endOf(Date.now(), s) + 1, this.min = Math.min(i, o - 1), this.max = Math.max(i + 1, o);
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
    const o = this.min, r = this.max, a = zy(i, o, r);
    return this._unit = n.unit || (s.autoSkip ? th(n.minUnit, this.min, this.max, this._getLabelCapacity(o)) : l_(this, a.length, n.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : c_(this._unit), this.initOffsets(i), t.reverse && a.reverse(), nh(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0, s = 0, i, o;
    this.options.offset && t.length && (i = this.getDecimalForValue(t[0]), t.length === 1 ? n = 1 - i : n = (this.getDecimalForValue(t[1]) - i) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    n = Zt(n, 0, r), s = Zt(s, 0, r), this._offsets = {
      start: n,
      end: s,
      factor: 1 / (n + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, n = this.min, s = this.max, i = this.options, o = i.time, r = o.unit || th(o.minUnit, n, s, this._getLabelCapacity(n)), a = ht(i.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = ws(l) || l === !0, u = {};
    let h = n, d, f;
    if (c && (h = +t.startOf(h, "isoWeek", l)), h = +t.startOf(h, c ? "day" : r), t.diff(s, n, r) > 1e5 * a)
      throw new Error(n + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const p = i.ticks.source === "data" && this.getDataTimestamps();
    for (d = h, f = 0; d < s; d = +t.add(d, a, r), f++)
      eh(u, d, p);
    return (d === s || i.bounds === "ticks" || f === 1) && eh(u, d, p), Object.keys(u).sort(Qu).map((g) => +g);
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
      return Tt(r, [
        t,
        n,
        s
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, u = l && a[l], h = c && a[c], d = s[n], f = c && h && d && d.major;
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
    const n = this.options.ticks, s = this.ctx.measureText(t).width, i = Ie(this.isHorizontal() ? n.maxRotation : n.minRotation), o = Math.cos(i), r = Math.sin(i), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const n = this.options.time, s = n.displayFormats, i = s[n.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, nh(this, [
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
      t.push(Ju(this, i[n]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return _f(t.sort(Qu));
  }
}
B(_i, "id", "time"), B(_i, "defaults", {
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
function ro(e, t, n) {
  let s = 0, i = e.length - 1, o, r, a, l;
  n ? (t >= e[s].pos && t <= e[i].pos && ({ lo: s, hi: i } = an(e, "pos", t)), { pos: o, time: a } = e[s], { pos: r, time: l } = e[i]) : (t >= e[s].time && t <= e[i].time && ({ lo: s, hi: i } = an(e, "time", t)), { time: o, pos: a } = e[s], { time: r, pos: l } = e[i]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class wa extends _i {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), n = this._table = this.buildLookupTable(t);
    this._minPos = ro(n, this.min), this._tableRange = ro(n, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: s } = this, i = [], o = [];
    let r, a, l, c, u;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= n && c <= s && i.push(c);
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
      u = i[r + 1], l = i[r - 1], c = i[r], Math.round((u + l) / 2) !== c && o.push({
        time: c,
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
    return (ro(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets, s = this.getDecimalForPixel(t) / n.factor - n.end;
    return ro(this._table, s * this._tableRange + this._minPos, !0);
  }
}
B(wa, "id", "timeseries"), B(wa, "defaults", _i.defaults);
var h_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: xa,
  LinearScale: va,
  LogarithmicScale: _a,
  RadialLinearScale: Qs,
  TimeScale: _i,
  TimeSeriesScale: wa
});
const d_ = [
  y0,
  Kx,
  Hv,
  h_
];
ze.register(...d_);
const Rk = ({
  data: e,
  backgroundColor: t,
  borderColor: n,
  borderWidth: s,
  barThickness: i,
  labelFillStyle: o,
  xTicksColor: r,
  yTicksColor: a,
  className: l = "",
  style: c = {}
}) => {
  const u = xt(null), h = xt(null);
  return Et(() => {
    var g;
    h.current && h.current.destroy();
    const d = (g = u.current) == null ? void 0 : g.getContext("2d"), f = Math.max(...e.map((m) => m.value)), p = Math.ceil(f / 100) * 100 + 50;
    if (d)
      return h.current = new ze(d, {
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
            m.data.datasets.forEach((b, S) => {
              m.getDatasetMeta(S).data.forEach((x, w) => {
                const A = b.data[w] + "";
                y.fillStyle = o || "#000000", y.textAlign = "center", y.textBaseline = "bottom", y.font = "10px Arial", y.fillText(A, x.x, x.y - 5);
              });
            });
          }
        }]
      }), () => {
        h.current && h.current.destroy();
      };
  }, [e]), /* @__PURE__ */ L.jsx("canvas", { ref: u, className: l, style: c });
}, wt = (e) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      e();
    });
  });
}, Tl = (e, t, n, s) => t + n > s ? {
  top: "auto",
  bottom: `${s - e}px`,
  marginBottom: "-1px"
} : {
  top: `${t}px`,
  bottom: "auto",
  marginTop: "-1px"
}, Ml = (e, t, n, s, i) => t + n - i > s ? {
  left: "auto",
  right: `${s - t}px`
} : {
  left: `${e}px`,
  right: "auto"
};
function De(e) {
  const [t, n, s] = e.split(".").map((o) => parseInt(o, 10)), i = new Date(t, n - 1, s);
  return i && i.getFullYear() === t && i.getMonth() === n - 1 && i.getDate() === s;
}
function ds(e = 0) {
  const t = /* @__PURE__ */ new Date();
  t.setDate(t.getDate() + e);
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0");
  return `${n}.${s}.${i}`;
}
var cp = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.TYPE1 = "type1", e))(cp || {}), Si = /* @__PURE__ */ ((e) => (e.START_DATE = "startDate", e.END_DATE = "endDate", e))(Si || {});
const up = Ze(void 0), f_ = ({
  children: e,
  selectedValue: t = [ds(), ds()],
  updateSelectedValue: n,
  afterUpdate: s,
  className: i = "",
  style: o = {},
  ...r
}) => {
  const [a, l] = _t(t[0]), [c, u] = _t(t[1]);
  Et(() => {
    l(t[0]), u(t[1]);
  }, [t]);
  const h = [a, c], d = [`${c}~`], f = [`~${a}`], p = (b) => {
    n(b);
  }, y = {
    setStartDateRange: (b) => {
      l(b), p([b, c]), s == null || s([b, c], "START");
    },
    setEndDateRange: (b) => {
      u(b), p([a, b]), s == null || s([a, b], "END");
    },
    selectedRange: h
  };
  return /* @__PURE__ */ L.jsx(up.Provider, { value: y, children: /* @__PURE__ */ L.jsx("div", { className: `h_single_datepicker_range_area ${i}`, style: o, ...r, children: e({
    startDate: a,
    setStartDate: l,
    endDate: c,
    setEndDate: u,
    startDisableDatesRange: d,
    endDisabledDatesRange: f
  }) }) });
};
f_.displayName = "HSingleDatePickerRangeArea";
const hp = () => Yt(up) || {
  setStartDateRange: () => {
  },
  setEndDateRange: () => {
  },
  selectedRange: []
};
var ao = { exports: {} }, ee = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sh;
function p_() {
  if (sh) return ee;
  sh = 1;
  var e = fi;
  function t(l) {
    var c = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      c += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        c += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function o(l, c, u) {
    var h = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: i,
      key: h == null ? null : "" + h,
      children: l,
      containerInfo: c,
      implementation: u
    };
  }
  var r = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function a(l, c) {
    if (l === "font") return "";
    if (typeof c == "string")
      return c === "use-credentials" ? c : "";
  }
  return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, ee.createPortal = function(l, c) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!c || c.nodeType !== 1 && c.nodeType !== 9 && c.nodeType !== 11)
      throw Error(t(299));
    return o(l, c, null, u);
  }, ee.flushSync = function(l) {
    var c = r.T, u = s.p;
    try {
      if (r.T = null, s.p = 2, l) return l();
    } finally {
      r.T = c, s.p = u, s.d.f();
    }
  }, ee.preconnect = function(l, c) {
    typeof l == "string" && (c ? (c = c.crossOrigin, c = typeof c == "string" ? c === "use-credentials" ? c : "" : void 0) : c = null, s.d.C(l, c));
  }, ee.prefetchDNS = function(l) {
    typeof l == "string" && s.d.D(l);
  }, ee.preinit = function(l, c) {
    if (typeof l == "string" && c && typeof c.as == "string") {
      var u = c.as, h = a(u, c.crossOrigin), d = typeof c.integrity == "string" ? c.integrity : void 0, f = typeof c.fetchPriority == "string" ? c.fetchPriority : void 0;
      u === "style" ? s.d.S(
        l,
        typeof c.precedence == "string" ? c.precedence : void 0,
        {
          crossOrigin: h,
          integrity: d,
          fetchPriority: f
        }
      ) : u === "script" && s.d.X(l, {
        crossOrigin: h,
        integrity: d,
        fetchPriority: f,
        nonce: typeof c.nonce == "string" ? c.nonce : void 0
      });
    }
  }, ee.preinitModule = function(l, c) {
    if (typeof l == "string")
      if (typeof c == "object" && c !== null) {
        if (c.as == null || c.as === "script") {
          var u = a(
            c.as,
            c.crossOrigin
          );
          s.d.M(l, {
            crossOrigin: u,
            integrity: typeof c.integrity == "string" ? c.integrity : void 0,
            nonce: typeof c.nonce == "string" ? c.nonce : void 0
          });
        }
      } else c == null && s.d.M(l);
  }, ee.preload = function(l, c) {
    if (typeof l == "string" && typeof c == "object" && c !== null && typeof c.as == "string") {
      var u = c.as, h = a(u, c.crossOrigin);
      s.d.L(l, u, {
        crossOrigin: h,
        integrity: typeof c.integrity == "string" ? c.integrity : void 0,
        nonce: typeof c.nonce == "string" ? c.nonce : void 0,
        type: typeof c.type == "string" ? c.type : void 0,
        fetchPriority: typeof c.fetchPriority == "string" ? c.fetchPriority : void 0,
        referrerPolicy: typeof c.referrerPolicy == "string" ? c.referrerPolicy : void 0,
        imageSrcSet: typeof c.imageSrcSet == "string" ? c.imageSrcSet : void 0,
        imageSizes: typeof c.imageSizes == "string" ? c.imageSizes : void 0,
        media: typeof c.media == "string" ? c.media : void 0
      });
    }
  }, ee.preloadModule = function(l, c) {
    if (typeof l == "string")
      if (c) {
        var u = a(c.as, c.crossOrigin);
        s.d.m(l, {
          as: typeof c.as == "string" && c.as !== "script" ? c.as : void 0,
          crossOrigin: u,
          integrity: typeof c.integrity == "string" ? c.integrity : void 0
        });
      } else s.d.m(l);
  }, ee.requestFormReset = function(l) {
    s.d.r(l);
  }, ee.unstable_batchedUpdates = function(l, c) {
    return l(c);
  }, ee.useFormState = function(l, c, u) {
    return r.H.useFormState(l, c, u);
  }, ee.useFormStatus = function() {
    return r.H.useHostTransitionStatus();
  }, ee.version = "19.0.0", ee;
}
var ne = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ih;
function g_() {
  return ih || (ih = 1, process.env.NODE_ENV !== "production" && function() {
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
        $$typeof: c,
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
    var a = fi, l = {
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
    }, c = Symbol.for("react.portal"), u = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, ne.createPortal = function(h, d) {
      var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return n(h, d, null, f);
    }, ne.flushSync = function(h) {
      var d = u.T, f = l.p;
      try {
        if (u.T = null, l.p = 2, h)
          return h();
      } finally {
        u.T = d, l.p = f, l.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ne.preconnect = function(h, d) {
      typeof h == "string" && h ? d != null && typeof d != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        o(d)
      ) : d != null && typeof d.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        i(d.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(h)
      ), typeof h == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, l.d.C(h, d));
    }, ne.prefetchDNS = function(h) {
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
      typeof h == "string" && l.d.D(h);
    }, ne.preinit = function(h, d) {
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
        f === "style" ? l.d.S(
          h,
          typeof d.precedence == "string" ? d.precedence : void 0,
          {
            crossOrigin: p,
            integrity: g,
            fetchPriority: m
          }
        ) : f === "script" && l.d.X(h, {
          crossOrigin: p,
          integrity: g,
          fetchPriority: m,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0
        });
      }
    }, ne.preinitModule = function(h, d) {
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
      ), l.d.M(h, {
        crossOrigin: f,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      })) : d == null && l.d.M(h));
    }, ne.preload = function(h, d) {
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
        l.d.L(h, f, {
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
    }, ne.preloadModule = function(h, d) {
      var f = "";
      typeof h == "string" && h || (f += " The `href` argument encountered was " + i(h) + "."), d !== void 0 && typeof d != "object" ? f += " The `options` argument encountered was " + i(d) + "." : d && "as" in d && typeof d.as != "string" && (f += " The `as` option encountered was " + i(d.as) + "."), f && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        f
      ), typeof h == "string" && (d ? (f = s(
        d.as,
        d.crossOrigin
      ), l.d.m(h, {
        as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
        crossOrigin: f,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0
      })) : l.d.m(h));
    }, ne.requestFormReset = function(h) {
      l.d.r(h);
    }, ne.unstable_batchedUpdates = function(h, d) {
      return h(d);
    }, ne.useFormState = function(h, d, f) {
      return r().useFormState(h, d, f);
    }, ne.useFormStatus = function() {
      return r().useHostTransitionStatus();
    }, ne.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ne;
}
var oh;
function m_() {
  if (oh) return ao.exports;
  oh = 1;
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
  return process.env.NODE_ENV === "production" ? (e(), ao.exports = p_()) : ao.exports = g_(), ao.exports;
}
var de = m_();
const dp = Ze(void 0), fe = (e) => e.replace(/\./g, "-"), y_ = ({
  children: e,
  selectedValue: t = ds(),
  dayFormat: n = ["일", "월", "화", "수", "목", "금", "토"],
  monthLength: s = 4,
  yearLength: i = 3,
  yearBeforeAfterLength: o = 4,
  type: r = cp.DEFAULT,
  isDisabled: a = !1,
  disabledDates: l = [],
  disabledDatesRange: c = [],
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
  const { selectedRange: y, setStartDateRange: b, setEndDateRange: S } = hp(), _ = (q) => {
    if (y.length === 0)
      return !1;
    const K = fe(q);
    return new Date(fe(y[0])) <= new Date(K) && new Date(K) <= new Date(fe(y[1]));
  }, x = (q) => {
    if (y.length === 0)
      return !1;
    const [K, tt] = y[0].split("."), [rt, k] = y[1].split("."), R = `${K}-${tt}`, N = `${rt}-${k}`;
    return new Date(R) <= new Date(fe(q)) && new Date(fe(q)) <= new Date(N);
  }, w = (q) => {
    if (y.length === 0)
      return !1;
    const [K] = y[0].split("."), [tt] = y[1].split("."), rt = `${K}`, k = `${tt}`;
    return new Date(rt) <= new Date(fe(q)) && new Date(fe(q)) <= new Date(k);
  }, A = (q) => {
    const K = fe(q), tt = l.includes(q), rt = c.some((k) => {
      const [R, N] = k.split("~");
      if (R.length === 0 && N.length > 0)
        return new Date(K) < new Date(fe(N));
      if (R.length > 0 && N.length === 0)
        return new Date(fe(R)) < new Date(K);
      if (R.length > 0 && N.length > 0)
        return new Date(fe(R)) < new Date(K) && new Date(K) < new Date(fe(N));
    });
    return tt || rt;
  }, P = (q) => {
    const K = fe(q);
    return c.some((tt) => {
      const [rt, k] = tt.split("~");
      if (rt.length === 0 && k.length > 0)
        return new Date(K) < /* @__PURE__ */ new Date(
          `${k.split(".")[0]}-${k.split(".")[1]}`
        );
      if (rt.length > 0 && k.length === 0)
        return /* @__PURE__ */ new Date(`${rt.split(".")[0]}-${rt.split(".")[1]}`) < new Date(K);
      if (rt.length > 0 && k.length > 0)
        return /* @__PURE__ */ new Date(`${rt.split(".")[0]}-${rt.split(".")[1]}`) < new Date(K) && new Date(K) < /* @__PURE__ */ new Date(`${k.split(".")[0]}-${k.split(".")[1]}`);
    });
  }, M = (q) => {
    const K = fe(q);
    return c.some((tt) => {
      const [rt, k] = tt.split("~");
      if (rt.length === 0 && k.length > 0)
        return new Date(K).getFullYear() < (/* @__PURE__ */ new Date(`${k.split(".")[0]}`)).getFullYear();
      if (rt.length > 0 && k.length === 0)
        return (/* @__PURE__ */ new Date(`${rt.split(".")[0]}`)).getFullYear() < new Date(K).getFullYear();
      if (rt.length > 0 && k.length > 0)
        return (/* @__PURE__ */ new Date(`${rt.split(".")[0]}`)).getFullYear() < new Date(K).getFullYear() && new Date(K).getFullYear() < (/* @__PURE__ */ new Date(`${k.split(".")[0]}`)).getFullYear();
    });
  }, [T, C] = _t({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    minusWidth: 0,
    clientWidth: 0,
    clientHeight: 0
  }), [D, I] = _t(!1), Z = () => {
    if (I(!0), Q(!1), U(!1), !ot.current)
      return;
    const { bottom: q, left: K, right: tt, top: rt, width: k } = ot.current.getBoundingClientRect();
    C({
      bottom: q,
      left: K,
      right: tt,
      top: rt,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      minusWidth: k
    });
  }, [W, U] = _t(!1);
  Et(() => {
    W ? (window.addEventListener("click", Y), window.addEventListener("scroll", O), window.addEventListener("resize", j), Array.isArray(h) && h.forEach((q) => {
      const K = document.querySelector(q);
      K instanceof HTMLElement && K.addEventListener("scroll", O);
    })) : (window.removeEventListener("click", Y), window.removeEventListener("scroll", O), window.removeEventListener("resize", j), Array.isArray(h) && h.forEach((q) => {
      const K = document.querySelector(q);
      K instanceof HTMLElement && K.removeEventListener(
        "scroll",
        O
      );
    }));
  }, [W]);
  const [z, Q] = _t(!1), J = () => {
    if (Q(!0), I(!1), U(!1), !ot.current)
      return;
    const { bottom: q, left: K, right: tt, top: rt, width: k } = ot.current.getBoundingClientRect();
    C({
      bottom: q,
      left: K,
      right: tt,
      top: rt,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      minusWidth: k
    });
  }, ot = xt(null), X = xt(null), O = () => {
    if (!ot.current)
      return;
    const { top: q, bottom: K, left: tt, right: rt, width: k } = ot.current.getBoundingClientRect();
    C((R) => ({
      ...R,
      top: q,
      bottom: K,
      left: tt,
      right: rt,
      minusWidth: k
    }));
  }, j = () => {
    C((q) => ({
      ...q,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    }));
  }, Y = (q) => {
    const K = q.target;
    if (!(K instanceof HTMLElement))
      return;
    const tt = K.closest(".inp_datepicker");
    if (tt) {
      tt !== X.current && (I(!1), U(!1), Q(!1), d());
      return;
    }
    K.closest(".h_calendar_area") || K.closest(".h_calendar_month_area") || K.closest(".h_calendar_year_area") || (I(!1), U(!1), Q(!1), d());
  }, E = (q) => {
    switch (u) {
      case Si.START_DATE:
        b(q);
        break;
      case Si.END_DATE:
        S(q);
        break;
    }
  }, G = (q) => {
    if (q instanceof KeyboardEvent && q.key !== "Enter")
      return;
    const K = q.target;
    if (!(K instanceof HTMLInputElement))
      return;
    const tt = K.value, rt = (/* @__PURE__ */ new Date()).getFullYear() % 100;
    switch (tt.length) {
      // 4- 2311(2023.01.01) // 2325(2023.02.05)
      case 4:
        (() => {
          const k = tt.toString();
          let R = parseInt(k.slice(0, 2), 10);
          R > rt ? R += 1900 : R += 2e3;
          const N = k.slice(2, 3).padStart(2, "0"), et = k.slice(3).padStart(2, "0");
          if (!De(`${R}.${N}.${et}`) || A(`${R}.${N}.${et}`)) {
            const ce = $;
            wt(() => {
              de.flushSync(() => {
                F("");
              }), wt(() => {
                F(ce), E(ce);
              });
            });
            return;
          }
          dt(R), yt(Number(N)), wt(() => {
            de.flushSync(() => {
              F("");
            }), wt(() => {
              F(`${R}.${N}.${et}`), E(`${R}.${N}.${et}`);
            });
          });
        })();
        break;
      // 5 - 23.21(2023.02.01) // 232.1(2023.02.01) // 23210(2023.02.10) // 23101(2023.01.01) // 23131(2023.01.31)
      case 5:
        (() => {
          const k = tt.replace(/\./g, ""), R = rt >= parseInt(k.slice(0, 2)) ? 2e3 + parseInt(k.slice(0, 2)) : 1900 + parseInt(k.slice(0, 2));
          let N = "", et = "";
          if (k.length === 5 ? (N = k.slice(2, 3).toString().padStart(2, "0"), et = k.slice(3)) : k.length === 4 && (N = "0" + k.charAt(2), et = "0" + k.charAt(3)), !De(`${R}.${N}.${et}`) || A(`${R}.${N}.${et}`)) {
            const ce = $;
            wt(() => {
              de.flushSync(() => {
                F("");
              }), wt(() => {
                F(ce), E(ce);
              });
            });
            return;
          }
          dt(R), yt(Number(N)), wt(() => {
            de.flushSync(() => {
              F("");
            }), wt(() => {
              F(`${R}.${N}.${et}`), E(`${R}.${N}.${et}`);
            });
          });
        })();
        break;
      // 6 - 202321(2023.02.01) // 23.2.1(2023.02.01) // 23.210(2023.02.10) // 232.10(2023.02.10)
      case 6:
        (() => {
          let k = "", R = "", N = "";
          if (tt.includes(".")) {
            const et = tt.replace(/\./g, "");
            k = rt >= parseInt(et.slice(0, 2)) ? (2e3 + parseInt(et.slice(0, 2))).toString() : (1900 + parseInt(et.slice(0, 2))).toString(), R = et.slice(2, 3).toString().padStart(2, "0"), N = et.slice(3).toString().padStart(2, "0");
          } else
            k = tt.slice(0, 2), R = tt.slice(2, 4).toString().padStart(2, "0"), N = tt.slice(4, 6).toString().padStart(2, "0"), De(`${k}.${R}.${N}`) || (k = `${k}${R}`, R = N.toString().split("")[0].padStart(2, "0"), N = N.toString().split("")[1].padStart(2, "0"));
          if (!De(`${k}.${R}.${N}`) || A(`${k}.${R}.${N}`)) {
            const et = $;
            wt(() => {
              de.flushSync(() => {
                F("");
              }), wt(() => {
                F(et), E(et);
              });
            });
            return;
          }
          dt(Number(k)), yt(Number(R)), wt(() => {
            de.flushSync(() => {
              F("");
            }), wt(() => {
              F(`${k}.${R}.${N}`), E(`${k}.${R}.${N}`);
            });
          });
        })();
        break;
      // 7 - 20232.1(2023.02.01) // 2023.21(2023.02.01) // 20.0511(2020.05.11) // 2023201(2023.02.01) // 2023101(2023.01.01) // 2023130(2023.01.30)
      case 7:
        (() => {
          let k = "", R = "", N = "";
          if (tt.includes(".")) {
            const et = tt.replace(/\./g, "");
            k = rt >= parseInt(et.slice(0, 2)) ? (2e3 + parseInt(et.slice(0, 2))).toString() : (1900 + parseInt(et.slice(0, 2))).toString(), R = et.slice(2, 4).padStart(2, "0"), N = et.slice(4, 6).padStart(2, "0"), De(`${k}.${R}.${N}`) || (k = `${k.slice(2)}${R}`, R = `${N.split("")[0].padStart(2, "0")}`, N = `${N.split("")[1].padStart(2, "0")}`);
          } else
            k = tt.slice(0, 4), R = tt.slice(4, 5).toString().padStart(2, "0"), N = tt.slice(5).toString().padStart(2, "0");
          if (!De(`${k}.${R}.${N}`) || A(`${k}.${R}.${N}`)) {
            const et = $;
            wt(() => {
              de.flushSync(() => {
                F("");
              }), wt(() => {
                F(et), E(et);
              });
            });
            return;
          }
          dt(Number(k)), yt(Number(R)), wt(() => {
            de.flushSync(() => {
              F("");
            }), wt(() => {
              F(`${k}.${R}.${N}`), E(`${k}.${R}.${N}`);
            });
          });
        })();
        break;
      // 8 - 20230212(2023.02.12) // 2023.2.1(2023.02.01) // 20.02.05(2020.02.05) // 2023.021(2023.02.01) // 20232.11(2023.02.11)
      case 8:
        (() => {
          let k = "", R = "", N = "";
          if (tt.includes(".")) {
            const et = tt.replace(/\./g, "");
            et.length === 6 ? (k = rt >= parseInt(et.slice(0, 2)) ? (2e3 + parseInt(
              et.slice(0, 2)
            )).toString() : (1900 + parseInt(
              et.slice(0, 2)
            )).toString(), R = et.slice(2, 4).padStart(2, "0"), N = et.slice(4, 6).padStart(2, "0"), De(`${k}.${R}.${N}`) || (k = `${k.slice(2)}${R}`, R = `${N.split("")[0].padStart(2, "0")}`, N = `${N.split("")[1].padStart(2, "0")}`)) : (k = et.slice(0, 4), R = et.slice(4, 5).padStart(2, "0"), N = et.slice(5).padStart(2, "0"), De(`${k}.${R}.${N}`) || (R = N.split("")[0].padStart(2, "0"), N = N.split("")[1].padStart(2, "0")));
          } else
            k = tt.slice(0, 4), R = tt.slice(4, 6), N = tt.slice(6, 8);
          if (!De(`${k}.${R}.${N}`) || A(`${k}.${R}.${N}`)) {
            const et = $;
            wt(() => {
              de.flushSync(() => {
                F("");
              }), wt(() => {
                F(et), E(et);
              });
            });
            return;
          }
          dt(Number(k)), yt(Number(R)), wt(() => {
            de.flushSync(() => {
              F("");
            }), wt(() => {
              F(`${k}.${R}.${N}`), E(`${k}.${R}.${N}`);
            });
          });
        })();
        break;
      // 9 - 2023.02.1(2023.02.01) // 2023.0212(2023.02.12) // 202302.12(2023.02.12) // 2023.2.11(2023.02.11) // 2023.02.1(2023.02.01) // 2023.19.1(2023.09.01)
      case 9:
        (() => {
          let k = "", R = "", N = "";
          if (tt.includes(".")) {
            const et = tt.replace(/\./g, "");
            if (k = et.slice(0, 4), R = et.slice(4, 5).padStart(2, "0"), N = et.slice(5).padStart(2, "0"), !De(`${k}.${R}.${N}`)) {
              const [ce, ...Fn] = N.split("");
              R = ce.padStart(2, "0"), N = Fn.join("").padStart(2, "0");
            }
          }
          if (!De(`${k}.${R}.${N}`) || A(`${k}.${R}.${N}`)) {
            const et = $;
            wt(() => {
              de.flushSync(() => {
                F("");
              }), wt(() => {
                F(et), E(et);
              });
            });
            return;
          }
          dt(Number(k)), yt(Number(R)), wt(() => {
            de.flushSync(() => {
              F("");
            }), wt(() => {
              F(`${k}.${R}.${N}`), E(`${k}.${R}.${N}`);
            });
          });
        })();
        break;
      // 10 - 2023.02.12
      case 10:
      default:
        (() => {
          if (!De(tt) || A(tt)) {
            const et = $;
            wt(() => {
              de.flushSync(() => {
                F("");
              }), wt(() => {
                F(et), E(et);
              });
            });
            return;
          }
          const [k, R, N] = tt.split(".");
          dt(Number(k)), yt(Number(R)), wt(() => {
            de.flushSync(() => {
              F("");
            }), wt(() => {
              F(`${k}.${R}.${N}`), E(`${k}.${R}.${N}`);
            });
          });
        })();
        break;
    }
  }, [$, F] = _t(t);
  Et(() => {
    F(t);
  }, [t]);
  const ct = (q) => {
    F(q), U(!1), Q(!1), I(!1), f(q);
  }, [ut, dt] = _t(
    Number($ == null ? void 0 : $.split(".")[0]) || (/* @__PURE__ */ new Date()).getFullYear()
  ), [ft, yt] = _t(
    Number($ == null ? void 0 : $.split(".")[1]) || (/* @__PURE__ */ new Date()).getMonth() + 1
  ), lt = (q) => {
    const K = ft + q;
    K > 12 ? (yt(1), dt((tt) => tt + 1)) : K < 1 ? (yt(12), dt((tt) => tt - 1)) : yt(K);
  }, [gt, Kt] = _t(ut), $t = (q) => {
    Kt((K) => K + q);
  }, [Dt, Ct] = _t(ut), [Pt, v] = _t(Dt - o), [V, H] = _t(Dt + o), st = (q) => {
    v((K) => K + q), H((K) => K + q);
  };
  Et(() => {
    Kt(ut), Ct(ut);
  }, [ut]);
  const Lt = () => {
    X.current && (X.current.addEventListener(
      "keyup",
      G
    ), X.current.addEventListener(
      "blur",
      G
    ));
  }, vt = () => {
    X.current && (X.current.removeEventListener(
      "keyup",
      G
    ), X.current.removeEventListener(
      "blur",
      G
    ));
  }, at = () => {
    if (W || z || D)
      switch (!0) {
        case W:
          U(!0), Q(!1), I(!1);
          break;
        case z:
          U(!1), Q(!0), I(!1);
          break;
        case D:
          U(!1), Q(!1), I(!0);
          break;
      }
    else
      U(!0), Q(!1), I(!1);
    if (!ot.current)
      return;
    const { bottom: q, left: K, right: tt, top: rt, width: k } = ot.current.getBoundingClientRect();
    C({
      bottom: q,
      left: K,
      right: tt,
      top: rt,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      minusWidth: k
    });
  }, ye = (() => {
    const [q, K] = ds().split("."), rt = Array.from({ length: 12 }, (R, N) => N + 1).map((R) => {
      var N, et, ce, Fn;
      return {
        year: String(gt),
        month: String(R),
        isActive: Number($.split(".")[0]) === gt && ft === R,
        inRange: x(
          `${String(gt)}.${String(
            R
          ).padStart(2, "0")}`
        ),
        isDisabled: P(
          `${String(gt)}.${String(
            R
          ).padStart(2, "0")}`
        ),
        isCurrentMonth: gt === Number(q) && R === Number(K),
        isStartMonth: Number((N = y[0]) == null ? void 0 : N.split(".")[0]) === gt && Number((et = y[0]) == null ? void 0 : et.split(".")[1]) === R,
        isEndMonth: Number((ce = y[1]) == null ? void 0 : ce.split(".")[0]) === gt && Number((Fn = y[1]) == null ? void 0 : Fn.split(".")[1]) === R
      };
    }), k = [];
    for (let R = 0; R < rt.length; R += s)
      k.push(rt.slice(R, R + s));
    return k;
  })(), zt = Ne(() => o * 2 + 1, [o]), Oe = (() => {
    const [q] = ds().split("."), K = [];
    for (let k = Pt; k <= V; k++)
      K.push(k);
    const tt = K.map((k) => {
      var R, N;
      return {
        year: String(k),
        isActive: Number($.split(".")[0]) === k,
        inRange: w(String(k)),
        // Todo
        isDisabled: M(String(k)),
        isCurrentYear: k === Number(q),
        isStartYear: Number((R = y[0]) == null ? void 0 : R.split(".")[0]) === k,
        isEndYear: Number((N = y[1]) == null ? void 0 : N.split(".")[0]) === k
      };
    }), rt = [];
    for (let k = 0; k < tt.length; k += i)
      rt.push(tt.slice(k, k + i));
    return rt;
  })(), Qt = ((q, K) => {
    var Pc, Tc, Mc, Dc, Cc, kc;
    const [tt, rt, k] = ds().split("."), [R, N, et] = ($ == null ? void 0 : $.split(".")) || [null, null, null], ce = Number(R) === q && Number(N) === K, Fn = new Date(q, K, 0).getDate(), Ac = [];
    let Mr = Array(7).fill(null);
    for (let Re = 1; Re <= Fn; Re++) {
      const Ec = new Date(q, K - 1, Re).getDay();
      Mr[Ec] = {
        year: String(q),
        month: String(K).padStart(2, "0"),
        date: String(Re),
        isActive: ce && Number(et) === Re,
        inRange: _(
          `${String(q)}.${String(K).padStart(
            2,
            "0"
          )}.${String(Re).padStart(2, "0")}`
        ),
        isDisabled: A(
          `${String(q)}.${String(K).padStart(
            2,
            "0"
          )}.${String(Re).padStart(2, "0")}`
        ),
        isCurrentDate: Number(tt) === q && Number(rt) === K && Number(k) === Re,
        isStartDate: Number((Pc = y[0]) == null ? void 0 : Pc.split(".")[0]) === q && Number((Tc = y[0]) == null ? void 0 : Tc.split(".")[1]) === K && Number((Mc = y[0]) == null ? void 0 : Mc.split(".")[2]) === Re,
        isEndDate: Number((Dc = y[1]) == null ? void 0 : Dc.split(".")[0]) === q && Number((Cc = y[1]) == null ? void 0 : Cc.split(".")[1]) === K && Number((kc = y[1]) == null ? void 0 : kc.split(".")[2]) === Re
      }, (Ec === 6 || Re === Fn) && (Ac.push(Mr), Mr = Array(7).fill(null));
    }
    return Ac;
  })(ut, ft), le = (q) => {
    const [K, tt] = q.split(".");
    dt(Number(K)), yt(Number(tt)), Q(!1), I(!1), U(!0);
  }, as = (q) => {
    dt(Number(q)), I(!1), Q(!0), U(!1);
  }, gn = xt(null), ls = xt(null), mn = xt(null), In = Ne(() => a, [a]), cs = {
    selectedDatePickerValue: $,
    clickedDatePickerInput: at,
    updateSelectedDatePickerValue: ct,
    // setSelectedDatePickerValue
    updateNowMonth: lt,
    // setNowMonth
    updateYearForYearCalendar: st,
    // setYearForYearCalendar
    updateYearForMonthCalendar: $t,
    // setYearForMonthCalendar
    yearsArrLength: zt,
    updateIsActiveYearCalendar: Z,
    // setIsActiveYearCalendar
    updateIsActiveMonthCalendar: J,
    // setIsActiveMonthCalendar
    setNowMonthByMonthCalendar: le,
    setNowYearByYearCalendar: as,
    calendarInputButtonRef: X,
    // calendarInput
    calendarInputAreaRef: ot,
    // calendarInputArea
    calendarPosition: T,
    calendarAreaRef: gn,
    // calendarArea
    calendarMonthAreaRef: ls,
    // calendarMonthArea
    calendarYearAreaRef: mn,
    // calendarYearArea
    type: r,
    // calendarType
    focusInDatePickerInput: Lt,
    focusOutDatePickerInput: vt,
    rangeType: u,
    isDisabledValue: In
    // isDisabled
  }, Vn = () => {
    I(!1), Q(!1), U(!1);
  };
  return /* @__PURE__ */ L.jsx(dp.Provider, { value: cs, children: /* @__PURE__ */ L.jsx("div", { className: `h_single_datepicker_area ${r} ${p}`, style: g, ...m, children: e({
    isActiveCalendar: W,
    isActiveMonthCalendar: z,
    isActiveYearCalendar: D,
    dayFormat: n,
    monthDates: Qt,
    nowYear: ut,
    nowMonth: ft,
    months: ye,
    years: Oe,
    startYear: Pt,
    endYear: V,
    yearForYearCalendar: Dt,
    yearForMonthCalendar: gt,
    closeAllCalendar: Vn
  }) }) });
};
y_.displayName = "HSingleDatePickerArea";
const Gt = () => {
  const e = Yt(dp);
  if (!e)
    throw new Error("useHSingleDatePickerAreaContext must be used within a HSingleDatePickerAreaProvider");
  return e;
}, b_ = ({
  children: e,
  childrenTableHead: t,
  className: n = "",
  tableClassName: s = "",
  tableHeadClassName: i = "",
  tableBodyClassName: o = "",
  style: r = {},
  ...a
}) => {
  const { type: l } = Gt();
  return /* @__PURE__ */ L.jsx("div", { className: `h_calendar ${l} ${n}`, style: r, ...a, children: /* @__PURE__ */ L.jsxs("table", { className: `h_calendar_table ${s}`, children: [
    /* @__PURE__ */ L.jsx("caption", { children: /* @__PURE__ */ L.jsx("span", { className: "blind", children: "Dates" }) }),
    /* @__PURE__ */ L.jsx("thead", { className: `calendar_head ${i}`, children: t }),
    /* @__PURE__ */ L.jsx("tbody", { className: `calendar_body ${o}`, children: e })
  ] }) });
};
b_.displayName = "HSingleDatePickerCalendar";
const x_ = ({
  value: e,
  children: t,
  className: n = "",
  style: s = {},
  disabled: i = !1
}) => {
  const { type: o, updateSelectedDatePickerValue: r, rangeType: a } = Gt(), { setStartDateRange: l, setEndDateRange: c } = hp(), u = () => {
    switch (r(e), a) {
      case Si.START_DATE:
        l(e);
        break;
      case Si.END_DATE:
        c(e);
        break;
    }
  };
  return /* @__PURE__ */ L.jsx(
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
x_.displayName = "HSingleDatePickerCalendarDateButton";
const v_ = ({
  children: e,
  className: t = "",
  style: n = {},
  ...s
}) => {
  const { type: i, calendarPosition: o, calendarAreaRef: r } = Gt(), [a, l] = _t({});
  return Et(() => {
    if (!o)
      return;
    const {
      bottom: c,
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
    l({
      position: "fixed",
      zIndex: "220",
      ...Tl(d, c, m, p),
      ...Ml(u, h, y, f, g)
    });
  }, [o, r]), /* @__PURE__ */ L.jsx(
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
v_.displayName = "HSingleDatePickerCalendarArea";
const __ = ({
  children: e,
  className: t = "",
  style: n = {},
  ...s
}) => {
  const { type: i, calendarPosition: o, calendarMonthAreaRef: r } = Gt(), [a, l] = _t({});
  return Et(() => {
    if (!o)
      return;
    const {
      bottom: c,
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
    l({
      position: "fixed",
      zIndex: "220",
      ...Tl(d, c, m, p),
      ...Ml(u, h, y, f, g)
    });
  }, [o, r]), /* @__PURE__ */ L.jsx(
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
__.displayName = "HSingleDatePickerCalendarMonthArea";
const S_ = ({
  children: e,
  className: t = "",
  tableClassName: n = "",
  style: s = {},
  childrenTableHead: i
}) => {
  const { type: o } = Gt();
  return /* @__PURE__ */ L.jsx("div", { className: `h_calendar_month ${o} ${t}`, style: s, children: /* @__PURE__ */ L.jsxs("table", { className: `h_calendar_month_table ${n}`, children: [
    /* @__PURE__ */ L.jsx("caption", { children: /* @__PURE__ */ L.jsx("span", { className: "blind", children: "Months" }) }),
    /* @__PURE__ */ L.jsx("thead", { children: i }),
    /* @__PURE__ */ L.jsx("tbody", { children: e })
  ] }) });
};
S_.displayName = "HSingleDatePickerCalendarMonth";
const w_ = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateIsActiveMonthCalendar: o } = Gt();
  return /* @__PURE__ */ L.jsx(
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
w_.displayName = "HSingleDatePickerMonthButton";
const A_ = ({
  value: e,
  children: t,
  className: n = "",
  style: s = {},
  disabled: i = !1
}) => {
  const { type: o, setNowMonthByMonthCalendar: r } = Gt(), a = () => {
    r(e);
  };
  return /* @__PURE__ */ L.jsx(
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
A_.displayName = "HSingleDatePickerCalendarMonthButton";
const P_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdSxCQMhFABQFQS73Ai3QWa4USytQkbIBukUG0dJRsgIN4KlWEjUIuRyen4t8kH8IE8E//8I/SOMMZPW+pJy3IO898+YnuO6guAPWkMISxOWkBBixSMoneERVIUtVIQQtINQtIE96AN7UYYjKAVxzk1xP+VbMLaMMYsAkZ8qpZwJIY+YzhG/KKUL59w24QjefEcP3hUAFBdLDoKrRd7Ch211hJuNXMOg0VHC4GH1jWNZ3lBPJKyUuqf8DUy8w9O6XZwQAAAAAElFTkSuQmCC", cr = () => /* @__PURE__ */ L.jsx("span", { children: /* @__PURE__ */ L.jsx("img", { src: P_, alt: "왼쪽 화살표" }) });
cr.displayName = "IconArrowLeft";
const T_ = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForMonthCalendar: i } = Gt();
  return /* @__PURE__ */ L.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_month_prev ${s} ${t}`,
      onClick: () => i(-1),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ L.jsx(cr, {})
    }
  );
};
T_.displayName = "HSingleDatePickerMonthPrevButton";
const M_ = ({
  children: e,
  childrenTableHead: t,
  childrenTableBody: n,
  className: s = "",
  tableClassName: i = "",
  style: o = {}
}) => {
  const { type: r } = Gt();
  return /* @__PURE__ */ L.jsxs("div", { className: `h_calendar_year ${r} ${s}`, style: o, children: [
    e,
    /* @__PURE__ */ L.jsxs("table", { className: `h_calendar_year_table ${i}`, children: [
      /* @__PURE__ */ L.jsx("caption", { children: /* @__PURE__ */ L.jsx("span", { className: "blind", children: "Years" }) }),
      /* @__PURE__ */ L.jsx("thead", { children: t }),
      /* @__PURE__ */ L.jsx("tbody", { children: n })
    ] })
  ] });
};
M_.displayName = "HSingleDatePickerCalendarYear";
const D_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBpdS9FcIgEADgHEVqR8gIruAGjiAllRnFCh40uIEjZIWMkBHseQ88LfKi8nOnFBx3730cDdd1/yzn3NkYM3CMsNaOKaWLEGLiYNH3/RUAZjwPHAzPzXu/CyFM2HmP6RJjPCillib8BcM24WD4LFAx5G6j4Cyk4CJs4Sqs4SYsYUGBUso7hnlbI3XET+Cx24n11BxqdiyhKqyhImyhLKSgL0hFb5CDVshFL4jD6ojxxkHr0lqP3PH4AAMhEevOZzQ6AAAAAElFTkSuQmCC", ur = () => /* @__PURE__ */ L.jsx("span", { children: /* @__PURE__ */ L.jsx("img", { src: D_, alt: "오른쪽 화살표" }) });
ur.displayName = "IconArrowRight";
const C_ = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateNowMonth: o } = Gt();
  return /* @__PURE__ */ L.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_next ${i} ${t}`,
      disabled: s,
      onClick: () => o(1),
      style: n,
      children: e || i === "type1" && /* @__PURE__ */ L.jsx(ur, {})
    }
  );
};
C_.displayName = "HSingleDatePickerNextButton";
const k_ = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateNowMonth: o } = Gt();
  return /* @__PURE__ */ L.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_prev ${i} ${t}`,
      disabled: s,
      onClick: () => o(-1),
      style: n,
      children: e || i === "type1" && /* @__PURE__ */ L.jsx(cr, {})
    }
  );
};
k_.displayName = "HSingleDatePickerPrevButton";
const E_ = ({
  children: e,
  className: t = "",
  style: n = {},
  ...s
}) => {
  const { calendarYearAreaRef: i, type: o, calendarPosition: r } = Gt(), [a, l] = _t({});
  return Et(() => {
    if (!r)
      return;
    const {
      bottom: c,
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
    l({
      position: "fixed",
      zIndex: "220",
      ...Tl(d, c, m, p),
      ...Ml(u, h, y, f, g)
    });
  }, [r, i]), /* @__PURE__ */ L.jsx(
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
E_.displayName = "HSingleDatePickerCalendarYearArea";
const O_ = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateIsActiveYearCalendar: o } = Gt();
  return /* @__PURE__ */ L.jsx(
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
O_.displayName = "HSingleDatePickerYearButton";
const R_ = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForYearCalendar: i, yearsArrLength: o } = Gt();
  return /* @__PURE__ */ L.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_year_next ${s} ${t}`,
      onClick: () => i(o),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ L.jsx(ur, {})
    }
  );
};
R_.displayName = "HSingleDatePickerYearNextButton";
const L_ = ({
  children: e,
  className: t = "",
  value: n,
  disabled: s = !1,
  style: i = {}
}) => {
  const { type: o, setNowYearByYearCalendar: r } = Gt(), a = () => {
    r(n);
  };
  return /* @__PURE__ */ L.jsx(
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
L_.displayName = "HSingleDatePickerCalendarYearButton";
const fp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB7ZnRbYNADIZ9iAceM8J1g3aDdJL2CcRTlQ3aEfqE4KXqBO0G7QbpBmUEFgDii4gURbkAZ0cOkj/pMNKPJf9wdzIAoCiKokhRluW/GxAINd8RAw0LNCwQiWDhGJ9QVdULhue+71fgxw6xhjDsWL4xpsEa3rIs+z6ne6cQJr1iuFT8uUJCseCvw4UPHPMMwFA83oGHtm2bU7HrulUcx9vh/A5mMiX/6BrvjRxdxGma/vk03EH2Mc/zGgKYkn+4xsfiFzF1G62BRg1ESAZwjj4mSdJAINR8B8lA6Nznyncsfg2oAWnUgDRqQBoWA9h633NrUyEbwGbrC1veLRbzw6XNgeMJrN0Bi1kzapMhG8B+ZoPvDL94uuHSWMBH3LsBwozVobuQNGpAGjUgjRqQRg1IM/pZhfoD4tp4DWCz9RlF0RMw/ISggh3ru08zlxKLorBwA3B8AFMU5UbZAevho9IdayVBAAAAAElFTkSuQmCC", Jt = [];
for (let e = 0; e < 256; ++e)
  Jt.push((e + 256).toString(16).slice(1));
function I_(e, t = 0) {
  return (Jt[e[t + 0]] + Jt[e[t + 1]] + Jt[e[t + 2]] + Jt[e[t + 3]] + "-" + Jt[e[t + 4]] + Jt[e[t + 5]] + "-" + Jt[e[t + 6]] + Jt[e[t + 7]] + "-" + Jt[e[t + 8]] + Jt[e[t + 9]] + "-" + Jt[e[t + 10]] + Jt[e[t + 11]] + Jt[e[t + 12]] + Jt[e[t + 13]] + Jt[e[t + 14]] + Jt[e[t + 15]]).toLowerCase();
}
let $r;
const V_ = new Uint8Array(16);
function F_() {
  if (!$r) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    $r = crypto.getRandomValues.bind(crypto);
  }
  return $r(V_);
}
const N_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), rh = { randomUUID: N_ };
function B_(e, t, n) {
  var i;
  if (rh.randomUUID && !e)
    return rh.randomUUID();
  e = e || {};
  const s = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? F_();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, I_(s);
}
function ah() {
  return B_();
}
const pp = ({ className: e }) => /* @__PURE__ */ L.jsx("img", { src: fp, alt: "달력 이미지", className: e });
pp.displayName = "IconCalendar";
const j_ = ({
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
    calendarInputAreaRef: l,
    calendarInputButtonRef: c,
    type: u,
    selectedDatePickerValue: h,
    clickedDatePickerInput: d,
    focusInDatePickerInput: f,
    focusOutDatePickerInput: p,
    isDisabledValue: g,
    updateSelectedDatePickerValue: m
  } = Gt(), [y, b] = _t(ah());
  return Et(() => {
    b(ah()), m(h);
  }, [h]), /* @__PURE__ */ L.jsxs(
    "div",
    {
      ref: l,
      className: `h_inp_datepicker_area ${u} ${n}`,
      style: o,
      ...a,
      children: [
        e ? /* @__PURE__ */ L.jsx("img", { className: `icon_calendar ${i}`, src: fp, alt: "달력 이미지" }) : u === "type1" && /* @__PURE__ */ L.jsx(pp, { className: i }),
        /* @__PURE__ */ L.jsx(
          "input",
          {
            id: y,
            ref: c,
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
j_.displayName = "HSingleDatePickerInput";
const $_ = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForMonthCalendar: i } = Gt();
  return /* @__PURE__ */ L.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_month_next ${s} ${t}`,
      onClick: () => i(1),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ L.jsx(ur, {})
    }
  );
};
$_.displayName = "HSingleDatePickerMonthNextButton";
const H_ = ({ children: e, className: t = "", style: n = {} }) => {
  const { type: s, updateIsActiveYearCalendar: i } = Gt();
  return /* @__PURE__ */ L.jsx(
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
H_.displayName = "HSingleDatePickerMonthYearButton";
const z_ = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForYearCalendar: i, yearsArrLength: o } = Gt();
  return /* @__PURE__ */ L.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_year_prev ${s} ${t}`,
      onClick: () => i(-1 * o),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ L.jsx(cr, {})
    }
  );
};
z_.displayName = "HSingleDatePickerYearPrevButton";
const gp = Ze(void 0), W_ = Vi(({
  children: e,
  initialSelectedValue: t = null,
  onBlurDropdown: n = () => {
  },
  onChangeSelectedValue: s = () => {
  },
  scrollEventRefs: i = [],
  disabled: o = !1,
  style: r,
  ...a
}, l) => {
  const c = xt(null), u = xt(null), h = xt(null), [d, f] = _t(t), [p, g] = _t(!1), [m, y] = _t(0), [b, S] = _t({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    clientWidth: 0,
    clientHeight: 0
  });
  er(l, () => ({
    selectedValue: d,
    dropdownAreaWidth: m,
    isActiveList: p
  }));
  const _ = () => {
    if (g((z) => !z), !c.current)
      return;
    const { bottom: D, left: I, right: Z, top: W, width: U } = c.current.getBoundingClientRect();
    y(U), S({
      top: W,
      bottom: D,
      left: I,
      right: Z,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    });
  }, x = () => {
    if (!c.current)
      return;
    const { top: D, bottom: I, left: Z, right: W } = c.current.getBoundingClientRect();
    S((U) => ({
      ...U,
      top: D,
      bottom: I,
      left: Z,
      right: W
    }));
  }, w = () => {
    S((D) => ({
      ...D,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    }));
  }, A = (D) => {
    const I = D.target;
    if (!(I instanceof HTMLElement))
      return;
    const Z = I.closest(
      ".h_dropdown_button"
    );
    if (Z) {
      Z !== u.current && (g(!1), n());
      return;
    }
    const W = I.closest(".h_dropdown_list");
    W || (g(!1), n()), W !== h.current && (g(!1), n());
  }, P = (D, I) => {
    f(I), g(!1), s(I);
  };
  Et(() => (p ? (window.addEventListener("scroll", x), Array.isArray(i) && i.forEach((D) => {
    const I = document.querySelector(D);
    I instanceof HTMLElement && I.addEventListener("scroll", x);
  }), window.addEventListener("resize", w), window.addEventListener("click", A)) : (window.removeEventListener("scroll", x), Array.isArray(i) && i.forEach((D) => {
    const I = document.querySelector(D);
    I instanceof HTMLElement && I.removeEventListener(
      "scroll",
      x
    );
  }), window.removeEventListener("resize", w), window.removeEventListener("click", A)), () => {
    window.removeEventListener("scroll", x), window.removeEventListener("resize", w), window.removeEventListener("click", A);
  }), [p]);
  const [M, T] = _t(o);
  Et(() => {
    T(o);
  }, [o]);
  const C = {
    onClickedDropdownButton: _,
    isActiveList: p,
    listPosition: b,
    dropdownListRef: h,
    dropdownButtonRef: u,
    onClickedDropdownItemButton: P,
    isButtonDisabled: M
  };
  return /* @__PURE__ */ L.jsx(gp.Provider, { value: C, children: /* @__PURE__ */ L.jsx("div", { ref: c, className: "h_dropdown_area", style: r, ...a, children: e({ isActiveList: p, dropdownAreaWidth: m }) }) });
});
W_.displayName = "HDropdownArea";
const U_ = ({ children: e }) => /* @__PURE__ */ L.jsx("div", { className: "h_dropdown_item", children: e });
U_.displayName = "HDropdownItem";
const Dl = () => {
  const e = Yt(gp);
  if (!e)
    throw new Error("useHDropdownAreaContext must be used within a HDropdownAreaProvider");
  return e;
}, Y_ = ({ children: e, ...t }) => {
  const { onClickedDropdownButton: n, dropdownButtonRef: s, isButtonDisabled: i } = Dl();
  return /* @__PURE__ */ L.jsx(
    "button",
    {
      type: "button",
      ref: s,
      onClick: n,
      disabled: i,
      className: "h_dropdown_button",
      ...t,
      children: e
    }
  );
};
Y_.displayName = "HDropdownButton";
const K_ = ({
  children: e,
  disabled: t = !1,
  optionValue: n,
  onClick: s,
  className: i,
  ...o
}) => {
  const { onClickedDropdownItemButton: r } = Dl();
  return /* @__PURE__ */ L.jsx(
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
K_.displayName = "HDropdownItemButton";
/*!
 * OverlayScrollbars
 * Version: 2.11.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */
const xe = (e, t) => {
  const { o: n, i: s, u: i } = e;
  let o = n, r;
  const a = (u, h) => {
    const d = o, f = u, p = h || (s ? !s(d, f) : d !== f);
    return (p || i) && (o = f, r = d), [o, p, r];
  };
  return [t ? (u) => a(t(o, r), u) : a, (u) => [o, !!u, r]];
}, X_ = typeof window < "u" && typeof HTMLElement < "u" && !!window.document, ge = X_ ? window : {}, mp = Math.max, G_ = Math.min, Aa = Math.round, jo = Math.abs, lh = Math.sign, yp = ge.cancelAnimationFrame, Cl = ge.requestAnimationFrame, $o = ge.setTimeout, Pa = ge.clearTimeout, hr = (e) => typeof ge[e] < "u" ? ge[e] : void 0, q_ = hr("MutationObserver"), ch = hr("IntersectionObserver"), Ho = hr("ResizeObserver"), Js = hr("ScrollTimeline"), kl = (e) => e === void 0, dr = (e) => e === null, Ye = (e) => typeof e == "number", Bi = (e) => typeof e == "string", El = (e) => typeof e == "boolean", Ee = (e) => typeof e == "function", qe = (e) => Array.isArray(e), zo = (e) => typeof e == "object" && !qe(e) && !dr(e), Ol = (e) => {
  const t = !!e && e.length, n = Ye(t) && t > -1 && t % 1 == 0;
  return qe(e) || !Ee(e) && n ? t > 0 && zo(e) ? t - 1 in e : !0 : !1;
}, Wo = (e) => !!e && e.constructor === Object, Uo = (e) => e instanceof HTMLElement, fr = (e) => e instanceof Element;
function At(e, t) {
  if (Ol(e))
    for (let n = 0; n < e.length && t(e[n], n, e) !== !1; n++)
      ;
  else e && At(Object.keys(e), (n) => t(e[n], n, e));
  return e;
}
const bp = (e, t) => e.indexOf(t) >= 0, wi = (e, t) => e.concat(t), Bt = (e, t, n) => (!Bi(t) && Ol(t) ? Array.prototype.push.apply(e, t) : e.push(t), e), Rn = (e) => Array.from(e || []), Rl = (e) => qe(e) ? e : !Bi(e) && Ol(e) ? Rn(e) : [e], Ta = (e) => !!e && !e.length, Ma = (e) => Rn(new Set(e)), we = (e, t, n) => {
  At(e, (i) => i ? i.apply(void 0, t || []) : !0), !n && (e.length = 0);
}, xp = "paddingTop", vp = "paddingRight", _p = "paddingLeft", Sp = "paddingBottom", wp = "marginLeft", Ap = "marginRight", Pp = "marginBottom", Tp = "overflowX", Mp = "overflowY", pr = "width", gr = "height", xn = "visible", Kn = "hidden", Ts = "scroll", Z_ = (e) => {
  const t = String(e || "");
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}, mr = (e, t, n, s) => {
  if (e && t) {
    let i = !0;
    return At(n, (o) => {
      const r = e[o], a = t[o];
      r !== a && (i = !1);
    }), i;
  }
  return !1;
}, Dp = (e, t) => mr(e, t, ["w", "h"]), To = (e, t) => mr(e, t, ["x", "y"]), Q_ = (e, t) => mr(e, t, ["t", "r", "b", "l"]), Zn = () => {
}, it = (e, ...t) => e.bind(0, ...t), fs = (e) => {
  let t;
  const n = e ? $o : Cl, s = e ? Pa : yp;
  return [(i) => {
    s(t), t = n(() => i(), Ee(e) ? e() : e);
  }, () => s(t)];
}, Da = (e, t) => {
  const { _: n, p: s, v: i, S: o } = t || {};
  let r, a, l, c, u = Zn;
  const h = function(m) {
    u(), Pa(r), c = r = a = void 0, u = Zn, e.apply(this, m);
  }, d = (g) => o && a ? o(a, g) : g, f = () => {
    u !== Zn && h(d(l) || l);
  }, p = function() {
    const m = Rn(arguments), y = Ee(n) ? n() : n;
    if (Ye(y) && y >= 0) {
      const S = Ee(s) ? s() : s, _ = Ye(S) && S >= 0, x = y > 0 ? $o : Cl, w = y > 0 ? Pa : yp, P = d(m) || m, M = h.bind(0, P);
      let T;
      u(), i && !c ? (M(), c = !0, T = x(() => c = void 0, y)) : (T = x(M, y), _ && !r && (r = $o(f, S))), u = () => w(T), a = l = P;
    } else
      h(m);
  };
  return p.m = f, p;
}, Cp = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Be = (e) => e ? Object.keys(e) : [], bt = (e, t, n, s, i, o, r) => {
  const a = [t, n, s, i, o, r];
  return (typeof e != "object" || dr(e)) && !Ee(e) && (e = {}), At(a, (l) => {
    At(l, (c, u) => {
      const h = l[u];
      if (e === h)
        return !0;
      const d = qe(h);
      if (h && Wo(h)) {
        const f = e[u];
        let p = f;
        d && !qe(f) ? p = [] : !d && !Wo(f) && (p = {}), e[u] = bt(p, h);
      } else
        e[u] = d ? h.slice() : h;
    });
  }), e;
}, kp = (e, t) => At(bt({}, e), (n, s, i) => {
  n === void 0 ? delete i[s] : n && Wo(n) && (i[s] = kp(n));
}), Ll = (e) => !Be(e).length, Ep = (e, t, n) => mp(e, G_(t, n)), Qn = (e) => Ma((qe(e) ? e : (e || "").split(" ")).filter((t) => t)), Il = (e, t) => e && e.getAttribute(t), uh = (e, t) => e && e.hasAttribute(t), nn = (e, t, n) => {
  At(Qn(t), (s) => {
    e && e.setAttribute(s, String(n || ""));
  });
}, $e = (e, t) => {
  At(Qn(t), (n) => e && e.removeAttribute(n));
}, yr = (e, t) => {
  const n = Qn(Il(e, t)), s = it(nn, e, t), i = (o, r) => {
    const a = new Set(n);
    return At(Qn(o), (l) => {
      a[r](l);
    }), Rn(a).join(" ");
  };
  return {
    O: (o) => s(i(o, "delete")),
    $: (o) => s(i(o, "add")),
    C: (o) => {
      const r = Qn(o);
      return r.reduce((a, l) => a && n.includes(l), r.length > 0);
    }
  };
}, Op = (e, t, n) => (yr(e, t).O(n), it(Vl, e, t, n)), Vl = (e, t, n) => (yr(e, t).$(n), it(Op, e, t, n)), Yo = (e, t, n, s) => (s ? Vl : Op)(e, t, n), Fl = (e, t, n) => yr(e, t).C(n), Rp = (e) => yr(e, "class"), Lp = (e, t) => {
  Rp(e).O(t);
}, Nl = (e, t) => (Rp(e).$(t), it(Lp, e, t)), Ip = (e, t) => {
  const n = t ? fr(t) && t : document;
  return n ? Rn(n.querySelectorAll(e)) : [];
}, J_ = (e, t) => {
  const n = t ? fr(t) && t : document;
  return n && n.querySelector(e);
}, Ca = (e, t) => fr(e) && e.matches(t), Vp = (e) => Ca(e, "body"), ka = (e) => e ? Rn(e.childNodes) : [], Ai = (e) => e && e.parentElement, ps = (e, t) => fr(e) && e.closest(t), Ea = (e) => document.activeElement, tS = (e, t, n) => {
  const s = ps(e, t), i = e && J_(n, s), o = ps(i, t) === s;
  return s && i ? s === e || i === e || o && ps(ps(e, n), t) !== s : !1;
}, Ms = (e) => {
  At(Rl(e), (t) => {
    const n = Ai(t);
    t && n && n.removeChild(t);
  });
}, _e = (e, t) => it(Ms, e && t && At(Rl(t), (n) => {
  n && e.appendChild(n);
}));
let Fp;
const eS = () => Fp, nS = (e) => {
  Fp = e;
}, _s = (e) => {
  const t = document.createElement("div");
  return nn(t, "class", e), t;
}, Np = (e) => {
  const t = _s(), n = eS(), s = e.trim();
  return t.innerHTML = n ? n.createHTML(s) : s, At(ka(t), (i) => Ms(i));
}, hh = (e, t) => e.getPropertyValue(t) || e[t] || "", Bp = (e) => {
  const t = e || 0;
  return isFinite(t) ? t : 0;
}, lo = (e) => Bp(parseFloat(e || "")), Oa = (e) => Math.round(e * 1e4) / 1e4, jp = (e) => `${Oa(Bp(e))}px`;
function Pi(e, t) {
  e && t && At(t, (n, s) => {
    try {
      const i = e.style, o = dr(n) || El(n) ? "" : Ye(n) ? jp(n) : n;
      s.indexOf("--") === 0 ? i.setProperty(s, o) : i[s] = o;
    } catch {
    }
  });
}
function un(e, t, n) {
  const s = Bi(t);
  let i = s ? "" : {};
  if (e) {
    const o = ge.getComputedStyle(e, n) || e.style;
    i = s ? hh(o, t) : Rn(t).reduce((r, a) => (r[a] = hh(o, a), r), i);
  }
  return i;
}
const dh = (e, t, n) => {
  const s = t ? `${t}-` : "", i = n ? `-${n}` : "", o = `${s}top${i}`, r = `${s}right${i}`, a = `${s}bottom${i}`, l = `${s}left${i}`, c = un(e, [o, r, a, l]);
  return {
    t: lo(c[o]),
    r: lo(c[r]),
    b: lo(c[a]),
    l: lo(c[l])
  };
}, Hr = (e, t) => `translate${zo(e) ? `(${e.x},${e.y})` : `${t ? "X" : "Y"}(${e})`}`, sS = (e) => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length), iS = {
  w: 0,
  h: 0
}, br = (e, t) => t ? {
  w: t[`${e}Width`],
  h: t[`${e}Height`]
} : iS, oS = (e) => br("inner", e || ge), Ss = it(br, "offset"), $p = it(br, "client"), Ko = it(br, "scroll"), Bl = (e) => {
  const t = parseFloat(un(e, pr)) || 0, n = parseFloat(un(e, gr)) || 0;
  return {
    w: t - Aa(t),
    h: n - Aa(n)
  };
}, zr = (e) => e.getBoundingClientRect(), rS = (e) => !!e && sS(e), Ra = (e) => !!(e && (e[gr] || e[pr])), Hp = (e, t) => {
  const n = Ra(e);
  return !Ra(t) && n;
}, fh = (e, t, n, s) => {
  At(Qn(t), (i) => {
    e && e.removeEventListener(i, n, s);
  });
}, It = (e, t, n, s) => {
  var i;
  const o = (i = s && s.H) != null ? i : !0, r = s && s.I || !1, a = s && s.A || !1, l = {
    passive: o,
    capture: r
  };
  return it(we, Qn(t).map((c) => {
    const u = a ? (h) => {
      fh(e, c, u, r), n && n(h);
    } : n;
    return e && e.addEventListener(c, u, l), it(fh, e, c, u, r);
  }));
}, zp = (e) => e.stopPropagation(), La = (e) => e.preventDefault(), Wp = (e) => zp(e) || La(e), We = (e, t) => {
  const { x: n, y: s } = Ye(t) ? {
    x: t,
    y: t
  } : t || {};
  Ye(n) && (e.scrollLeft = n), Ye(s) && (e.scrollTop = s);
}, Se = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
}), Up = () => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
}), aS = (e, t) => {
  const { D: n, M: s } = e, { w: i, h: o } = t, r = (h, d, f) => {
    let p = lh(h) * f, g = lh(d) * f;
    if (p === g) {
      const m = jo(h), y = jo(d);
      g = m > y ? 0 : g, p = m < y ? 0 : p;
    }
    return p = p === g ? 0 : p, [p + 0, g + 0];
  }, [a, l] = r(n.x, s.x, i), [c, u] = r(n.y, s.y, o);
  return {
    D: {
      x: a,
      y: c
    },
    M: {
      x: l,
      y: u
    }
  };
}, Wr = ({ D: e, M: t }) => {
  const n = (s, i) => s === 0 && s <= i;
  return {
    x: n(e.x, t.x),
    y: n(e.y, t.y)
  };
}, ph = ({ D: e, M: t }, n) => {
  const s = (i, o, r) => Ep(0, 1, (i - r) / (i - o) || 0);
  return {
    x: s(e.x, t.x, n.x),
    y: s(e.y, t.y, n.y)
  };
}, Ia = (e) => {
  e && e.focus && e.focus({
    preventScroll: !0
  });
}, gh = (e, t) => {
  At(Rl(t), e);
}, Va = (e) => {
  const t = /* @__PURE__ */ new Map(), n = (o, r) => {
    if (o) {
      const a = t.get(o);
      gh((l) => {
        a && a[l ? "delete" : "clear"](l);
      }, r);
    } else
      t.forEach((a) => {
        a.clear();
      }), t.clear();
  }, s = (o, r) => {
    if (Bi(o)) {
      const c = t.get(o) || /* @__PURE__ */ new Set();
      return t.set(o, c), gh((u) => {
        Ee(u) && c.add(u);
      }, r), it(n, o, r);
    }
    El(r) && r && n();
    const a = Be(o), l = [];
    return At(a, (c) => {
      const u = o[c];
      u && Bt(l, s(c, u));
    }), it(we, l);
  }, i = (o, r) => {
    At(Rn(t.get(o)), (a) => {
      r && !Ta(r) ? a.apply(0, r) : a();
    });
  };
  return s(e || {}), [s, n, i];
}, Yp = {}, Kp = {}, lS = (e) => {
  At(e, (t) => At(t, (n, s) => {
    Yp[s] = t[s];
  }));
}, Xp = (e, t, n) => Be(e).map((s) => {
  const { static: i, instance: o } = e[s], [r, a, l] = n || [], c = n ? o : i;
  if (c) {
    const u = n ? c(r, a, t) : c(t);
    return (l || Kp)[s] = u;
  }
}), ji = (e) => Kp[e], cS = "__osOptionsValidationPlugin", Rs = "data-overlayscrollbars", Mo = "os-environment", co = `${Mo}-scrollbar-hidden`, Ur = `${Rs}-initialize`, Do = "noClipping", mh = `${Rs}-body`, Pn = Rs, uS = "host", sn = `${Rs}-viewport`, hS = Tp, dS = Mp, fS = "arrange", Gp = "measuring", pS = "scrolling", qp = "scrollbarHidden", gS = "noContent", Fa = `${Rs}-padding`, yh = `${Rs}-content`, jl = "os-size-observer", mS = `${jl}-appear`, yS = `${jl}-listener`, bS = "os-trinsic-observer", xS = "os-theme-none", Ae = "os-scrollbar", vS = `${Ae}-rtl`, _S = `${Ae}-horizontal`, SS = `${Ae}-vertical`, Zp = `${Ae}-track`, $l = `${Ae}-handle`, wS = `${Ae}-visible`, AS = `${Ae}-cornerless`, bh = `${Ae}-interaction`, xh = `${Ae}-unusable`, Na = `${Ae}-auto-hide`, vh = `${Na}-hidden`, _h = `${Ae}-wheel`, PS = `${Zp}-interactive`, TS = `${$l}-interactive`, MS = "__osSizeObserverPlugin", DS = (e, t) => {
  const { T: n } = t, [s, i] = e("showNativeOverlaidScrollbars");
  return [s && n.x && n.y, i];
}, Ds = (e) => e.indexOf(xn) === 0, CS = (e, t) => {
  const n = (i, o, r, a) => {
    const l = i === xn ? Kn : i.replace(`${xn}-`, ""), c = Ds(i), u = Ds(r);
    return !o && !a ? Kn : c && u ? xn : c ? o && a ? l : o ? xn : Kn : o ? l : u && a ? xn : Kn;
  }, s = {
    x: n(t.x, e.x, t.y, e.y),
    y: n(t.y, e.y, t.x, e.x)
  };
  return {
    k: s,
    R: {
      x: s.x === Ts,
      y: s.y === Ts
    }
  };
}, Qp = "__osScrollbarsHidingPlugin", kS = "__osClickScrollPlugin", Sh = (e) => JSON.stringify(e, (t, n) => {
  if (Ee(n))
    throw 0;
  return n;
}), wh = (e, t) => e ? `${t}`.split(".").reduce((n, s) => n && Cp(n, s) ? n[s] : void 0, e) : void 0, ES = {
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
}, Jp = (e, t) => {
  const n = {}, s = wi(Be(t), Be(e));
  return At(s, (i) => {
    const o = e[i], r = t[i];
    if (zo(o) && zo(r))
      bt(n[i] = {}, Jp(o, r)), Ll(n[i]) && delete n[i];
    else if (Cp(t, i) && r !== o) {
      let a = !0;
      if (qe(o) || qe(r))
        try {
          Sh(o) === Sh(r) && (a = !1);
        } catch {
        }
      a && (n[i] = r);
    }
  }), n;
}, Ah = (e, t, n) => (s) => [wh(e, s), n || wh(t, s) !== void 0];
let tg;
const OS = () => tg, RS = (e) => {
  tg = e;
};
let Yr;
const LS = () => {
  const e = (_, x, w) => {
    _e(document.body, _), _e(document.body, _);
    const A = $p(_), P = Ss(_), M = Bl(x);
    return w && Ms(_), {
      x: P.h - A.h + M.h,
      y: P.w - A.w + M.w
    };
  }, t = (_) => {
    let x = !1;
    const w = Nl(_, co);
    try {
      x = un(_, "scrollbar-width") === "none" || un(_, "display", "::-webkit-scrollbar") === "none";
    } catch {
    }
    return w(), x;
  }, n = `.${Mo}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${Mo} div{width:200%;height:200%;margin:10px 0}.${co}{scrollbar-width:none!important}.${co}::-webkit-scrollbar,.${co}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`, i = Np(`<div class="${Mo}"><div></div><style>${n}</style></div>`)[0], o = i.firstChild, r = i.lastChild, a = OS();
  a && (r.nonce = a);
  const [l, , c] = Va(), [u, h] = xe({
    o: e(i, o),
    i: To
  }, it(e, i, o, !0)), [d] = h(), f = t(i), p = {
    x: d.x === 0,
    y: d.y === 0
  }, g = {
    elements: {
      host: null,
      padding: !f,
      viewport: (_) => f && Vp(_) && _,
      content: !1
    },
    scrollbars: {
      slot: !0
    },
    cancel: {
      nativeScrollbarsOverlaid: !1,
      body: null
    }
  }, m = bt({}, ES), y = it(bt, {}, m), b = it(bt, {}, g), S = {
    N: d,
    T: p,
    P: f,
    G: !!Js,
    K: it(l, "r"),
    Z: b,
    tt: (_) => bt(g, _) && b(),
    nt: y,
    ot: (_) => bt(m, _) && y(),
    st: bt({}, g),
    et: bt({}, m)
  };
  if ($e(i, "style"), Ms(i), It(ge, "resize", () => {
    c("r", []);
  }), Ee(ge.matchMedia) && !f && (!p.x || !p.y)) {
    const _ = (x) => {
      const w = ge.matchMedia(`(resolution: ${ge.devicePixelRatio}dppx)`);
      It(w, "change", () => {
        x(), _(x);
      }, {
        A: !0
      });
    };
    _(() => {
      const [x, w] = u();
      bt(S.N, x), c("r", [w]);
    });
  }
  return S;
}, Qe = () => (Yr || (Yr = LS()), Yr), IS = (e, t, n) => {
  let s = !1;
  const i = n ? /* @__PURE__ */ new WeakMap() : !1, o = () => {
    s = !0;
  }, r = (a) => {
    if (i && n) {
      const l = n.map((c) => {
        const [u, h] = c || [];
        return [h && u ? (a || Ip)(u, e) : [], h];
      });
      At(l, (c) => At(c[0], (u) => {
        const h = c[1], d = i.get(u) || [];
        if (e.contains(u) && h) {
          const p = It(u, h, (g) => {
            s ? (p(), i.delete(u)) : t(g);
          });
          i.set(u, Bt(d, p));
        } else
          we(d), i.delete(u);
      }));
    }
  };
  return r(), [o, r];
}, Ph = (e, t, n, s) => {
  let i = !1;
  const { ct: o, rt: r, lt: a, it: l, ut: c, _t: u } = s || {}, h = Da(() => i && n(!0), {
    _: 33,
    p: 99
  }), [d, f] = IS(e, h, a), p = o || [], g = r || [], m = wi(p, g), y = (S, _) => {
    if (!Ta(_)) {
      const x = c || Zn, w = u || Zn, A = [], P = [];
      let M = !1, T = !1;
      if (At(_, (C) => {
        const { attributeName: D, target: I, type: Z, oldValue: W, addedNodes: U, removedNodes: z } = C, Q = Z === "attributes", J = Z === "childList", ot = e === I, X = Q && D, O = X && Il(I, D || ""), j = Bi(O) ? O : null, Y = X && W !== j, E = bp(g, D) && Y;
        if (t && (J || !ot)) {
          const G = Q && Y, $ = G && l && Ca(I, l), ct = ($ ? !x(I, D, W, j) : !Q || G) && !w(C, !!$, e, s);
          At(U, (ut) => Bt(A, ut)), At(z, (ut) => Bt(A, ut)), T = T || ct;
        }
        !t && ot && Y && !x(I, D, W, j) && (Bt(P, D), M = M || E);
      }), f((C) => Ma(A).reduce((D, I) => (Bt(D, Ip(C, I)), Ca(I, C) ? Bt(D, I) : D), [])), t)
        return !S && T && n(!1), [!1];
      if (!Ta(P) || M) {
        const C = [Ma(P), M];
        return !S && n.apply(0, C), C;
      }
    }
  }, b = new q_(it(y, !1));
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
}, eg = (e, t, n) => {
  const { dt: s } = n || {}, i = ji(MS), [o] = xe({
    o: !1,
    u: !0
  });
  return () => {
    const r = [], l = Np(`<div class="${jl}"><div class="${yS}"></div></div>`)[0], c = l.firstChild, u = (h) => {
      const d = h instanceof ResizeObserverEntry;
      let f = !1, p = !1;
      if (d) {
        const [g, , m] = o(h.contentRect), y = Ra(g);
        p = Hp(g, m), f = !p && !y;
      } else
        p = h === !0;
      f || t({
        ft: !0,
        dt: p
      });
    };
    if (Ho) {
      const h = new Ho((d) => u(d.pop()));
      h.observe(c), Bt(r, () => {
        h.disconnect();
      });
    } else if (i) {
      const [h, d] = i(c, u, s);
      Bt(r, wi([Nl(l, mS), It(l, "animationstart", h)], d));
    } else
      return Zn;
    return it(we, Bt(r, _e(e, l)));
  };
}, VS = (e, t) => {
  let n;
  const s = (l) => l.h === 0 || l.isIntersecting || l.intersectionRatio > 0, i = _s(bS), [o] = xe({
    o: !1
  }), r = (l, c) => {
    if (l) {
      const u = o(s(l)), [, h] = u;
      return h && !c && t(u) && [u];
    }
  }, a = (l, c) => r(c.pop(), l);
  return [() => {
    const l = [];
    if (ch)
      n = new ch(it(a, !1), {
        root: e
      }), n.observe(i), Bt(l, () => {
        n.disconnect();
      });
    else {
      const c = () => {
        const u = Ss(i);
        r(u);
      };
      Bt(l, eg(i, c)()), c();
    }
    return it(we, Bt(l, _e(e, i)));
  }, () => n && a(!0, n.takeRecords())];
}, FS = (e, t, n, s) => {
  let i, o, r, a, l, c;
  const u = `[${Pn}]`, h = `[${sn}]`, d = ["id", "class", "style", "open", "wrap", "cols", "rows"], { vt: f, ht: p, U: g, gt: m, bt: y, L: b, wt: S, yt: _, St: x, Ot: w } = e, A = (E) => un(E, "direction") === "rtl", P = {
    $t: !1,
    F: A(f)
  }, M = Qe(), T = ji(Qp), [C] = xe({
    i: Dp,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const E = T && T.V(e, t, P, M, n).W, $ = !(S && b) && Fl(p, Pn, Do), F = !b && _(fS), ct = F && Se(m), ut = ct && w(), dt = x(Gp, $), ft = F && E && E()[0], yt = Ko(g), lt = Bl(g);
    return ft && ft(), We(m, ct), ut && ut(), $ && dt(), {
      w: yt.w + lt.w,
      h: yt.h + lt.h
    };
  }), D = Da(s, {
    _: () => i,
    p: () => o,
    S(E, G) {
      const [$] = E, [F] = G;
      return [wi(Be($), Be(F)).reduce((ct, ut) => (ct[ut] = $[ut] || F[ut], ct), {})];
    }
  }), I = (E) => {
    const G = A(f);
    bt(E, {
      Ct: c !== G
    }), bt(P, {
      F: G
    }), c = G;
  }, Z = (E, G) => {
    const [$, F] = E, ct = {
      xt: F
    };
    return bt(P, {
      $t: $
    }), !G && s(ct), ct;
  }, W = ({ ft: E, dt: G }) => {
    const F = !(E && !G) && M.P ? D : s, ct = {
      ft: E || G,
      dt: G
    };
    I(ct), F(ct);
  }, U = (E, G) => {
    const [, $] = C(), F = {
      Ht: $
    };
    return I(F), $ && !G && (E ? s : D)(F), F;
  }, z = (E, G, $) => {
    const F = {
      Et: G
    };
    return I(F), G && !$ && D(F), F;
  }, [Q, J] = y ? VS(p, Z) : [], ot = !b && eg(p, W, {
    dt: !0
  }), [X, O] = Ph(p, !1, z, {
    rt: d,
    ct: d
  }), j = b && Ho && new Ho((E) => {
    const G = E[E.length - 1].contentRect;
    W({
      ft: !0,
      dt: Hp(G, l)
    }), l = G;
  }), Y = Da(() => {
    const [, E] = C();
    s({
      Ht: E
    });
  }, {
    _: 222,
    v: !0
  });
  return [() => {
    j && j.observe(p);
    const E = ot && ot(), G = Q && Q(), $ = X(), F = M.K((ct) => {
      ct ? D({
        zt: ct
      }) : Y();
    });
    return () => {
      j && j.disconnect(), E && E(), G && G(), a && a(), $(), F();
    };
  }, ({ It: E, At: G, Dt: $ }) => {
    const F = {}, [ct] = E("update.ignoreMutation"), [ut, dt] = E("update.attributes"), [ft, yt] = E("update.elementEvents"), [lt, gt] = E("update.debounce"), Kt = yt || dt, $t = G || $, Dt = (Ct) => Ee(ct) && ct(Ct);
    if (Kt) {
      r && r(), a && a();
      const [Ct, Pt] = Ph(y || g, !0, U, {
        ct: wi(d, ut || []),
        lt: ft,
        it: u,
        _t: (v, V) => {
          const { target: H, attributeName: st } = v;
          return (!V && st && !b ? tS(H, u, h) : !1) || !!ps(H, `.${Ae}`) || !!Dt(v);
        }
      });
      a = Ct(), r = Pt;
    }
    if (gt)
      if (D.m(), qe(lt)) {
        const Ct = lt[0], Pt = lt[1];
        i = Ye(Ct) && Ct, o = Ye(Pt) && Pt;
      } else Ye(lt) ? (i = lt, o = !1) : (i = !1, o = !1);
    if ($t) {
      const Ct = O(), Pt = J && J(), v = r && r();
      Ct && bt(F, z(Ct[0], Ct[1], $t)), Pt && bt(F, Z(Pt[0], $t)), v && bt(F, U(v[0], $t));
    }
    return I(F), F;
  }, P];
}, ng = (e, t) => Ee(t) ? t.apply(0, e) : t, NS = (e, t, n, s) => {
  const i = kl(s) ? n : s;
  return ng(e, i) || t.apply(0, e);
}, sg = (e, t, n, s) => {
  const i = kl(s) ? n : s, o = ng(e, i);
  return !!o && (Uo(o) ? o : t.apply(0, e));
}, BS = (e, t) => {
  const { nativeScrollbarsOverlaid: n, body: s } = t || {}, { T: i, P: o, Z: r } = Qe(), { nativeScrollbarsOverlaid: a, body: l } = r().cancel, c = n ?? a, u = kl(s) ? l : s, h = (i.x || i.y) && c, d = e && (dr(u) ? !o : u);
  return !!h || !!d;
}, jS = (e, t, n, s) => {
  const i = "--os-viewport-percent", o = "--os-scroll-percent", r = "--os-scroll-direction", { Z: a } = Qe(), { scrollbars: l } = a(), { slot: c } = l, { vt: u, ht: h, U: d, Mt: f, gt: p, wt: g, L: m } = t, { scrollbars: y } = f ? {} : e, { slot: b } = y || {}, S = [], _ = [], x = [], w = sg([u, h, d], () => m && g ? u : h, c, b), A = (X) => {
    if (Js) {
      let O = null, j = [];
      const Y = new Js({
        source: p,
        axis: X
      }), E = () => {
        O && O.cancel(), O = null;
      };
      return {
        Rt: ($) => {
          const { Tt: F } = n, ct = Wr(F)[X], ut = X === "x", dt = [Hr(0, ut), Hr(`calc(100cq${ut ? "w" : "h"} + -100%)`, ut)], ft = ct ? dt : dt.reverse();
          return j[0] === ft[0] && j[1] === ft[1] || (E(), j = ft, O = $.kt.animate({
            clear: ["left"],
            transform: ft
          }, {
            timeline: Y
          })), E;
        }
      };
    }
  }, P = {
    x: A("x"),
    y: A("y")
  }, M = () => {
    const { Vt: X, Lt: O } = n, j = (Y, E) => Ep(0, 1, Y / (Y + E) || 0);
    return {
      x: j(O.x, X.x),
      y: j(O.y, X.y)
    };
  }, T = (X, O, j) => {
    const Y = j ? Nl : Lp;
    At(X, (E) => {
      Y(E.Ut, O);
    });
  }, C = (X, O) => {
    At(X, (j) => {
      const [Y, E] = O(j);
      Pi(Y, E);
    });
  }, D = (X, O, j) => {
    const Y = El(j), E = Y ? j : !0, G = Y ? !j : !0;
    E && T(_, X, O), G && T(x, X, O);
  }, I = () => {
    const X = M(), O = (j) => (Y) => [Y.Ut, {
      [i]: Oa(j) + ""
    }];
    C(_, O(X.x)), C(x, O(X.y));
  }, Z = () => {
    if (!Js) {
      const { Tt: X } = n, O = ph(X, Se(p)), j = (Y) => (E) => [E.Ut, {
        [o]: Oa(Y) + ""
      }];
      C(_, j(O.x)), C(x, j(O.y));
    }
  }, W = () => {
    const { Tt: X } = n, O = Wr(X), j = (Y) => (E) => [E.Ut, {
      [r]: Y ? "0" : "1"
    }];
    C(_, j(O.x)), C(x, j(O.y)), Js && (_.forEach(P.x.Rt), x.forEach(P.y.Rt));
  }, U = () => {
    if (m && !g) {
      const { Vt: X, Tt: O } = n, j = Wr(O), Y = ph(O, Se(p)), E = (G) => {
        const { Ut: $ } = G, F = Ai($) === d && $, ct = (ut, dt, ft) => {
          const yt = dt * ut;
          return jp(ft ? yt : -yt);
        };
        return [F, F && {
          transform: Hr({
            x: ct(Y.x, X.x, j.x),
            y: ct(Y.y, X.y, j.y)
          })
        }];
      };
      C(_, E), C(x, E);
    }
  }, z = (X) => {
    const O = X ? "x" : "y", Y = _s(`${Ae} ${X ? _S : SS}`), E = _s(Zp), G = _s($l), $ = {
      Ut: Y,
      Pt: E,
      kt: G
    }, F = P[O];
    return Bt(X ? _ : x, $), Bt(S, [_e(Y, E), _e(E, G), it(Ms, Y), F && F.Rt($), s($, D, X)]), $;
  }, Q = it(z, !0), J = it(z, !1), ot = () => (_e(w, _[0].Ut), _e(w, x[0].Ut), it(we, S));
  return Q(), J(), [{
    Nt: I,
    qt: Z,
    Bt: W,
    Ft: U,
    jt: D,
    Xt: {
      Yt: _,
      Wt: Q,
      Jt: it(C, _)
    },
    Gt: {
      Yt: x,
      Wt: J,
      Jt: it(C, x)
    }
  }, ot];
}, $S = (e, t, n, s) => (i, o, r) => {
  const { ht: a, U: l, L: c, gt: u, Kt: h, Ot: d } = t, { Ut: f, Pt: p, kt: g } = i, [m, y] = fs(333), [b, S] = fs(444), _ = (A) => {
    Ee(u.scrollBy) && u.scrollBy({
      behavior: "smooth",
      left: A.x,
      top: A.y
    });
  }, x = () => {
    const A = "pointerup pointercancel lostpointercapture", P = `client${r ? "X" : "Y"}`, M = r ? pr : gr, T = r ? "left" : "top", C = r ? "w" : "h", D = r ? "x" : "y", I = (W, U) => (z) => {
      const { Vt: Q } = n, J = Ss(p)[C] - Ss(g)[C], X = U * z / J * Q[D];
      We(u, {
        [D]: W + X
      });
    }, Z = [];
    return It(p, "pointerdown", (W) => {
      const U = ps(W.target, `.${$l}`) === g, z = U ? g : p, Q = e.scrollbars, J = Q[U ? "dragScroll" : "clickScroll"], { button: ot, isPrimary: X, pointerType: O } = W, { pointers: j } = Q;
      if (ot === 0 && X && J && (j || []).includes(O)) {
        we(Z), S();
        const E = !U && (W.shiftKey || J === "instant"), G = it(zr, g), $ = it(zr, p), F = (V, H) => (V || G())[T] - (H || $())[T], ct = Aa(zr(u)[M]) / Ss(u)[C] || 1, ut = I(Se(u)[D], 1 / ct), dt = W[P], ft = G(), yt = $(), lt = ft[M], gt = F(ft, yt) + lt / 2, Kt = dt - yt[T], $t = U ? 0 : Kt - gt, Dt = (V) => {
          we(v), z.releasePointerCapture(V.pointerId);
        }, Ct = U || E, Pt = d(), v = [It(h, A, Dt), It(h, "selectstart", (V) => La(V), {
          H: !1
        }), It(p, A, Dt), Ct && It(p, "pointermove", (V) => ut($t + (V[P] - dt))), Ct && (() => {
          const V = Se(u);
          Pt();
          const H = Se(u), st = {
            x: H.x - V.x,
            y: H.y - V.y
          };
          (jo(st.x) > 3 || jo(st.y) > 3) && (d(), We(u, V), _(st), b(Pt));
        })];
        if (z.setPointerCapture(W.pointerId), E)
          ut($t);
        else if (!U) {
          const V = ji(kS);
          if (V) {
            const H = V(ut, $t, lt, (st) => {
              st ? Pt() : Bt(v, Pt);
            });
            Bt(v, H), Bt(Z, it(H, !0));
          }
        }
      }
    });
  };
  let w = !0;
  return it(we, [It(g, "pointermove pointerleave", s), It(f, "pointerenter", () => {
    o(bh, !0);
  }), It(f, "pointerleave pointercancel", () => {
    o(bh, !1);
  }), !c && It(f, "mousedown", () => {
    const A = Ea();
    (uh(A, sn) || uh(A, Pn) || A === document.body) && $o(it(Ia, l), 25);
  }), It(f, "wheel", (A) => {
    const { deltaX: P, deltaY: M, deltaMode: T } = A;
    w && T === 0 && Ai(f) === a && _({
      x: P,
      y: M
    }), w = !1, o(_h, !0), m(() => {
      w = !0, o(_h);
    }), La(A);
  }, {
    H: !1,
    I: !0
  }), It(f, "pointerdown", it(It, h, "click", Wp, {
    A: !0,
    I: !0,
    H: !1
  }), {
    I: !0
  }), x(), y, S]);
}, HS = (e, t, n, s, i, o) => {
  let r, a, l, c, u, h = Zn, d = 0;
  const f = ["mouse", "pen"], p = (O) => f.includes(O.pointerType), [g, m] = fs(), [y, b] = fs(100), [S, _] = fs(100), [x, w] = fs(() => d), [A, P] = jS(e, i, s, $S(t, i, s, (O) => p(O) && Q())), { ht: M, Qt: T, wt: C } = i, { jt: D, Nt: I, qt: Z, Bt: W, Ft: U } = A, z = (O, j) => {
    if (w(), O)
      D(vh);
    else {
      const Y = it(D, vh, !0);
      d > 0 && !j ? x(Y) : Y();
    }
  }, Q = () => {
    (l ? !r : !c) && (z(!0), y(() => {
      z(!1);
    }));
  }, J = (O) => {
    D(Na, O, !0), D(Na, O, !1);
  }, ot = (O) => {
    p(O) && (r = l, l && z(!0));
  }, X = [w, b, _, m, () => h(), It(M, "pointerover", ot, {
    A: !0
  }), It(M, "pointerenter", ot), It(M, "pointerleave", (O) => {
    p(O) && (r = !1, l && z(!1));
  }), It(M, "pointermove", (O) => {
    p(O) && a && Q();
  }), It(T, "scroll", (O) => {
    g(() => {
      Z(), Q();
    }), o(O), U();
  })];
  return [() => it(we, Bt(X, P())), ({ It: O, Dt: j, Zt: Y, tn: E }) => {
    const { nn: G, sn: $, en: F, cn: ct } = E || {}, { Ct: ut, dt } = Y || {}, { F: ft } = n, { T: yt } = Qe(), { k: lt, rn: gt } = s, [Kt, $t] = O("showNativeOverlaidScrollbars"), [Dt, Ct] = O("scrollbars.theme"), [Pt, v] = O("scrollbars.visibility"), [V, H] = O("scrollbars.autoHide"), [st, Lt] = O("scrollbars.autoHideSuspend"), [vt] = O("scrollbars.autoHideDelay"), [at, qt] = O("scrollbars.dragScroll"), [ye, zt] = O("scrollbars.clickScroll"), [Pe, Oe] = O("overflow"), Te = dt && !j, Qt = gt.x || gt.y, le = G || $ || ct || ut || j, as = F || v || Oe, gn = Kt && yt.x && yt.y, ls = (mn, In, cs) => {
      const Vn = mn.includes(Ts) && (Pt === xn || Pt === "auto" && In === Ts);
      return D(wS, Vn, cs), Vn;
    };
    if (d = vt, Te && (st && Qt ? (J(!1), h(), S(() => {
      h = It(T, "scroll", it(J, !0), {
        A: !0
      });
    })) : J(!0)), $t && D(xS, gn), Ct && (D(u), D(Dt, !0), u = Dt), Lt && !st && J(!0), H && (a = V === "move", l = V === "leave", c = V === "never", z(c, !0)), qt && D(TS, at), zt && D(PS, !!ye), as) {
      const mn = ls(Pe.x, lt.x, !0), In = ls(Pe.y, lt.y, !1);
      D(AS, !(mn && In));
    }
    le && (Z(), I(), U(), ct && W(), D(xh, !gt.x, !0), D(xh, !gt.y, !1), D(vS, ft && !C));
  }, {}, A];
}, zS = (e) => {
  const t = Qe(), { Z: n, P: s } = t, { elements: i } = n(), { padding: o, viewport: r, content: a } = i, l = Uo(e), c = l ? {} : e, { elements: u } = c, { padding: h, viewport: d, content: f } = u || {}, p = l ? e : c.target, g = Vp(p), m = p.ownerDocument, y = m.documentElement, b = () => m.defaultView || ge, S = it(NS, [p]), _ = it(sg, [p]), x = it(_s, ""), w = it(S, x, r), A = it(_, x, a), P = (lt) => {
    const gt = Ss(lt), Kt = Ko(lt), $t = un(lt, Tp), Dt = un(lt, Mp);
    return Kt.w - gt.w > 0 && !Ds($t) || Kt.h - gt.h > 0 && !Ds(Dt);
  }, M = w(d), T = M === p, C = T && g, D = !T && A(f), I = !T && M === D, Z = C ? y : M, W = C ? Z : p, U = !T && _(x, o, h), z = !I && D, Q = [z, Z, U, W].map((lt) => Uo(lt) && !Ai(lt) && lt), J = (lt) => lt && bp(Q, lt), ot = !J(Z) && P(Z) ? Z : p, X = C ? y : Z, j = {
    vt: p,
    ht: W,
    U: Z,
    ln: U,
    bt: z,
    gt: X,
    Qt: C ? m : Z,
    an: g ? y : ot,
    Kt: m,
    wt: g,
    Mt: l,
    L: T,
    un: b,
    yt: (lt) => Fl(Z, sn, lt),
    St: (lt, gt) => Yo(Z, sn, lt, gt),
    Ot: () => Yo(X, sn, pS, !0)
  }, { vt: Y, ht: E, ln: G, U: $, bt: F } = j, ct = [() => {
    $e(E, [Pn, Ur]), $e(Y, Ur), g && $e(y, [Ur, Pn]);
  }];
  let ut = ka([F, $, G, E, Y].find((lt) => lt && !J(lt)));
  const dt = C ? Y : F || $, ft = it(we, ct);
  return [j, () => {
    const lt = b(), gt = Ea(), Kt = (v) => {
      _e(Ai(v), ka(v)), Ms(v);
    }, $t = (v) => It(v, "focusin focusout focus blur", Wp, {
      I: !0,
      H: !1
    }), Dt = "tabindex", Ct = Il($, Dt), Pt = $t(gt);
    return nn(E, Pn, T ? "" : uS), nn(G, Fa, ""), nn($, sn, ""), nn(F, yh, ""), T || (nn($, Dt, Ct || "-1"), g && nn(y, mh, "")), _e(dt, ut), _e(E, G), _e(G || E, !T && $), _e($, F), Bt(ct, [Pt, () => {
      const v = Ea(), V = J($), H = V && v === $ ? Y : v, st = $t(H);
      $e(G, Fa), $e(F, yh), $e($, sn), g && $e(y, mh), Ct ? nn($, Dt, Ct) : $e($, Dt), J(F) && Kt(F), V && Kt($), J(G) && Kt(G), Ia(H), st();
    }]), s && !T && (Vl($, sn, qp), Bt(ct, it($e, $, sn))), Ia(!T && g && gt === Y && lt.top === lt ? $ : gt), Pt(), ut = 0, ft;
  }, ft];
}, WS = ({ bt: e }) => ({ Zt: t, _n: n, Dt: s }) => {
  const { xt: i } = t || {}, { $t: o } = n;
  e && (i || s) && Pi(e, {
    [gr]: o && "100%"
  });
}, US = ({ ht: e, ln: t, U: n, L: s }, i) => {
  const [o, r] = xe({
    i: Q_,
    o: dh()
  }, it(dh, e, "padding", ""));
  return ({ It: a, Zt: l, _n: c, Dt: u }) => {
    let [h, d] = r(u);
    const { P: f } = Qe(), { ft: p, Ht: g, Ct: m } = l || {}, { F: y } = c, [b, S] = a("paddingAbsolute");
    (p || d || (u || g)) && ([h, d] = o(u));
    const x = !s && (S || m || d);
    if (x) {
      const w = !b || !t && !f, A = h.r + h.l, P = h.t + h.b, M = {
        [Ap]: w && !y ? -A : 0,
        [Pp]: w ? -P : 0,
        [wp]: w && y ? -A : 0,
        top: w ? -h.t : 0,
        right: w ? y ? -h.r : "auto" : 0,
        left: w ? y ? "auto" : -h.l : 0,
        [pr]: w && `calc(100% + ${A}px)`
      }, T = {
        [xp]: w ? h.t : 0,
        [vp]: w ? h.r : 0,
        [Sp]: w ? h.b : 0,
        [_p]: w ? h.l : 0
      };
      Pi(t || n, M), Pi(n, T), bt(i, {
        ln: h,
        dn: !w,
        j: t ? T : bt({}, M, T)
      });
    }
    return {
      fn: x
    };
  };
}, YS = (e, t) => {
  const n = Qe(), { ht: s, ln: i, U: o, L: r, Qt: a, gt: l, wt: c, St: u, un: h } = e, { P: d } = n, f = c && r, p = it(mp, 0), g = {
    display: () => !1,
    direction: (O) => O !== "ltr",
    flexDirection: (O) => O.endsWith("-reverse"),
    writingMode: (O) => O !== "horizontal-tb"
  }, m = Be(g), y = {
    i: Dp,
    o: {
      w: 0,
      h: 0
    }
  }, b = {
    i: To,
    o: {}
  }, S = (O) => {
    u(Gp, !f && O);
  }, _ = (O) => {
    if (!m.some((dt) => {
      const ft = O[dt];
      return ft && g[dt](ft);
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
    S(!0);
    const Y = Se(l), E = u(gS, !0), G = It(a, Ts, (dt) => {
      const ft = Se(l);
      dt.isTrusted && ft.x === Y.x && ft.y === Y.y && zp(dt);
    }, {
      I: !0,
      A: !0
    });
    We(l, {
      x: 0,
      y: 0
    }), E();
    const $ = Se(l), F = Ko(l);
    We(l, {
      x: F.w,
      y: F.h
    });
    const ct = Se(l);
    We(l, {
      x: ct.x - $.x < 1 && -F.w,
      y: ct.y - $.y < 1 && -F.h
    });
    const ut = Se(l);
    return We(l, Y), Cl(() => G()), {
      D: $,
      M: ut
    };
  }, x = (O, j) => {
    const Y = ge.devicePixelRatio % 1 !== 0 ? 1 : 0, E = {
      w: p(O.w - j.w),
      h: p(O.h - j.h)
    };
    return {
      w: E.w > Y ? E.w : 0,
      h: E.h > Y ? E.h : 0
    };
  }, [w, A] = xe(y, it(Bl, o)), [P, M] = xe(y, it(Ko, o)), [T, C] = xe(y), [D] = xe(b), [I, Z] = xe(y), [W] = xe(b), [U] = xe({
    i: (O, j) => mr(O, j, m),
    o: {}
  }, () => rS(o) ? un(o, m) : {}), [z, Q] = xe({
    i: (O, j) => To(O.D, j.D) && To(O.M, j.M),
    o: Up()
  }), J = ji(Qp), ot = (O, j) => `${j ? hS : dS}${Z_(O)}`, X = (O) => {
    const j = (E) => [xn, Kn, Ts].map((G) => ot(G, E)), Y = j(!0).concat(j()).join(" ");
    u(Y), u(Be(O).map((E) => ot(O[E], E === "x")).join(" "), !0);
  };
  return ({ It: O, Zt: j, _n: Y, Dt: E }, { fn: G }) => {
    const { ft: $, Ht: F, Ct: ct, dt: ut, zt: dt } = j || {}, ft = J && J.V(e, t, Y, n, O), { Y: yt, W: lt, J: gt } = ft || {}, [Kt, $t] = DS(O, n), [Dt, Ct] = O("overflow"), Pt = Ds(Dt.x), v = Ds(Dt.y);
    let V = A(E), H = M(E), st = C(E), Lt = Z(E);
    $t && d && u(qp, !Kt);
    {
      Fl(s, Pn, Do) && S(!0);
      const [tt] = lt ? lt() : [], [rt] = V = w(E), [k] = H = P(E), R = $p(o), N = f && oS(h()), et = {
        w: p(k.w + rt.w),
        h: p(k.h + rt.h)
      }, ce = {
        w: p((N ? N.w : R.w + p(R.w - k.w)) + rt.w),
        h: p((N ? N.h : R.h + p(R.h - k.h)) + rt.h)
      };
      tt && tt(), Lt = I(ce), st = T(x(et, ce), E);
    }
    const [vt, at] = Lt, [qt, ye] = st, [zt, Pe] = H, [Oe, Te] = V, [Qt, le] = D({
      x: qt.w > 0,
      y: qt.h > 0
    }), as = Pt && v && (Qt.x || Qt.y) || Pt && Qt.x && !Qt.y || v && Qt.y && !Qt.x, gn = CS(Qt, Dt), [ls, mn] = W(gn.k), [In, cs] = U(E), Vn = ct || ut || cs || le || E, [q, K] = Vn ? z(_(In), E) : Q();
    return mn && X(gn.k), gt && yt && Pi(o, gt(gn, Y, yt(gn, zt, Oe))), S(!1), Yo(s, Pn, Do, as), Yo(i, Fa, Do, as), bt(t, {
      k: ls,
      Lt: {
        x: vt.w,
        y: vt.h
      },
      Vt: {
        x: qt.w,
        y: qt.h
      },
      rn: Qt,
      Tt: aS(q, qt)
    }), {
      en: mn,
      nn: at,
      sn: ye,
      cn: K || ye,
      pn: Vn
    };
  };
}, KS = (e) => {
  const [t, n, s] = zS(e), i = {
    ln: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    dn: !1,
    j: {
      [Ap]: 0,
      [Pp]: 0,
      [wp]: 0,
      [xp]: 0,
      [vp]: 0,
      [Sp]: 0,
      [_p]: 0
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
      x: Kn,
      y: Kn
    },
    rn: {
      x: !1,
      y: !1
    },
    Tt: Up()
  }, { vt: o, gt: r, L: a, Ot: l } = t, { P: c, T: u } = Qe(), h = !c && (u.x || u.y), d = [WS(t), US(t, i), YS(t, i)];
  return [n, (f) => {
    const p = {}, m = h && Se(r), y = m && l();
    return At(d, (b) => {
      bt(p, b(f, p) || {});
    }), We(r, m), y && y(), !a && We(o, 0), p;
  }, i, t, s];
}, XS = (e, t, n, s, i) => {
  let o = !1;
  const r = Ah(t, {}), [a, l, c, u, h] = KS(e), [d, f, p] = FS(u, c, r, (_) => {
    S({}, _);
  }), [g, m, , y] = HS(e, t, p, c, u, i), b = (_) => Be(_).some((x) => !!_[x]), S = (_, x) => {
    if (n())
      return !1;
    const { vn: w, Dt: A, At: P, hn: M } = _, T = w || {}, C = !!A || !o, D = {
      It: Ah(t, T, C),
      vn: T,
      Dt: C
    };
    if (M)
      return m(D), !1;
    const I = x || f(bt({}, D, {
      At: P
    })), Z = l(bt({}, D, {
      _n: p,
      Zt: I
    }));
    m(bt({}, D, {
      Zt: I,
      tn: Z
    }));
    const W = b(I), U = b(Z), z = W || U || !Ll(T) || C;
    return o = !0, z && s(_, {
      Zt: I,
      tn: Z
    }), z;
  };
  return [() => {
    const { an: _, gt: x, Ot: w } = u, A = Se(_), P = [d(), a(), g()], M = w();
    return We(x, A), M(), it(we, P);
  }, S, () => ({
    gn: p,
    bn: c
  }), {
    wn: u,
    yn: y
  }, h];
}, Hl = /* @__PURE__ */ new WeakMap(), GS = (e, t) => {
  Hl.set(e, t);
}, qS = (e) => {
  Hl.delete(e);
}, ig = (e) => Hl.get(e), Ve = (e, t, n) => {
  const { nt: s } = Qe(), i = Uo(e), o = i ? e : e.target, r = ig(o);
  if (t && !r) {
    let a = !1;
    const l = [], c = {}, u = (T) => {
      const C = kp(T), D = ji(cS);
      return D ? D(C, !0) : C;
    }, h = bt({}, s(), u(t)), [d, f, p] = Va(), [g, m, y] = Va(n), b = (T, C) => {
      y(T, C), p(T, C);
    }, [S, _, x, w, A] = XS(e, h, () => a, ({ vn: T, Dt: C }, { Zt: D, tn: I }) => {
      const { ft: Z, Ct: W, xt: U, Ht: z, Et: Q, dt: J } = D, { nn: ot, sn: X, en: O, cn: j } = I;
      b("updated", [M, {
        updateHints: {
          sizeChanged: !!Z,
          directionChanged: !!W,
          heightIntrinsicChanged: !!U,
          overflowEdgeChanged: !!ot,
          overflowAmountChanged: !!X,
          overflowStyleChanged: !!O,
          scrollCoordinatesChanged: !!j,
          contentMutation: !!z,
          hostMutation: !!Q,
          appear: !!J
        },
        changedOptions: T || {},
        force: !!C
      }]);
    }, (T) => b("scroll", [M, T])), P = (T) => {
      qS(o), we(l), a = !0, b("destroyed", [M, T]), f(), m();
    }, M = {
      options(T, C) {
        if (T) {
          const D = C ? s() : {}, I = Jp(h, bt(D, u(T)));
          Ll(I) || (bt(h, I), _({
            vn: I
          }));
        }
        return bt({}, h);
      },
      on: g,
      off: (T, C) => {
        T && C && m(T, C);
      },
      state() {
        const { gn: T, bn: C } = x(), { F: D } = T, { Lt: I, Vt: Z, k: W, rn: U, ln: z, dn: Q, Tt: J } = C;
        return bt({}, {
          overflowEdge: I,
          overflowAmount: Z,
          overflowStyle: W,
          hasOverflow: U,
          scrollCoordinates: {
            start: J.D,
            end: J.M
          },
          padding: z,
          paddingAbsolute: Q,
          directionRTL: D,
          destroyed: a
        });
      },
      elements() {
        const { vt: T, ht: C, ln: D, U: I, bt: Z, gt: W, Qt: U } = w.wn, { Xt: z, Gt: Q } = w.yn, J = (X) => {
          const { kt: O, Pt: j, Ut: Y } = X;
          return {
            scrollbar: Y,
            track: j,
            handle: O
          };
        }, ot = (X) => {
          const { Yt: O, Wt: j } = X, Y = J(O[0]);
          return bt({}, Y, {
            clone: () => {
              const E = J(j());
              return _({
                hn: !0
              }), E;
            }
          });
        };
        return bt({}, {
          target: T,
          host: C,
          padding: D || I,
          viewport: I,
          content: Z || I,
          scrollOffsetElement: W,
          scrollEventElement: U,
          scrollbarHorizontal: ot(z),
          scrollbarVertical: ot(Q)
        });
      },
      update: (T) => _({
        Dt: T,
        At: !0
      }),
      destroy: it(P, !1),
      plugin: (T) => c[Be(T)[0]]
    };
    return Bt(l, [A]), GS(o, M), Xp(Yp, Ve, [M, d, c]), BS(w.wn.wt, !i && e.cancel) ? (P(!0), M) : (Bt(l, S()), b("initialized", [M]), M.update(), M);
  }
  return r;
};
Ve.plugin = (e) => {
  const t = qe(e), n = t ? e : [e], s = n.map((i) => Xp(i, Ve)[0]);
  return lS(n), t ? s : s[0];
};
Ve.valid = (e) => {
  const t = e && e.elements, n = Ee(t) && t();
  return Wo(n) && !!ig(n.target);
};
Ve.env = () => {
  const { N: e, T: t, P: n, G: s, st: i, et: o, Z: r, tt: a, nt: l, ot: c } = Qe();
  return bt({}, {
    scrollbarsSize: e,
    scrollbarsOverlaid: t,
    scrollbarsHiding: n,
    scrollTimeline: s,
    staticDefaultInitialization: i,
    staticDefaultOptions: o,
    getDefaultInitialization: r,
    setDefaultInitialization: a,
    getDefaultOptions: l,
    setDefaultOptions: c
  });
};
Ve.nonce = RS;
Ve.trustedTypePolicy = nS;
const ZS = () => {
  if (typeof window > "u") {
    const c = () => {
    };
    return [c, c];
  }
  let e, t;
  const n = window, s = typeof n.requestIdleCallback == "function", i = n.requestAnimationFrame, o = n.cancelAnimationFrame, r = s ? n.requestIdleCallback : i, a = s ? n.cancelIdleCallback : o, l = () => {
    a(e), o(t);
  };
  return [
    (c, u) => {
      l(), e = r(
        s ? () => {
          l(), t = i(c);
        } : c,
        typeof u == "object" ? u : { timeout: 2233 }
      );
    },
    l
  ];
}, QS = (e) => {
  const { options: t, events: n, defer: s } = e || {}, [i, o] = Ne(ZS, []), r = xt(null), a = xt(s), l = xt(t), c = xt(n);
  return Et(() => {
    a.current = s;
  }, [s]), Et(() => {
    const { current: u } = r;
    l.current = t, Ve.valid(u) && u.options(t || {}, !0);
  }, [t]), Et(() => {
    const { current: u } = r;
    c.current = n, Ve.valid(u) && u.on(n || {}, !0);
  }, [n]), Et(
    () => () => {
      var u;
      o(), (u = r.current) == null || u.destroy();
    },
    []
  ), Ne(
    () => [
      (u) => {
        const h = r.current;
        if (Ve.valid(h))
          return;
        const d = a.current, f = l.current || {}, p = c.current || {}, g = () => r.current = Ve(u, f, p);
        d ? i(g, d) : g();
      },
      () => r.current
    ],
    []
  );
}, JS = (e, t) => {
  const { element: n = "div", options: s, events: i, defer: o, children: r, ...a } = e, l = n, c = xt(null), u = xt(null), [h, d] = QS({ options: s, events: i, defer: o });
  return Et(() => {
    const { current: f } = c, { current: p } = u;
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
  }, [h, n]), er(
    t,
    () => ({
      osInstance: d,
      getElement: () => c.current
    }),
    []
  ), // @ts-ignore
  /* @__PURE__ */ fi.createElement(l, { "data-overlayscrollbars-initialize": "", ref: c, ...a }, n === "body" ? r : /* @__PURE__ */ fi.createElement("div", { "data-overlayscrollbars-contents": "", ref: u }, r));
}, tw = Vi(JS), og = ({
  children: e,
  maxHeight: t,
  options: n,
  onScroll: s = () => {
  },
  onScrollEndX: i = () => {
  },
  onScrollEndY: o = () => {
  }
}) => {
  const r = (u) => {
    console.debug("initialized:", u);
  }, a = (u) => {
    console.debug("destroyed:", u);
  }, l = (u) => {
    console.debug("updated:", u);
  }, c = (u) => {
    s({
      x: u.elements().viewport.scrollLeft,
      y: u.elements().viewport.scrollTop
    }), u.state().hasOverflow.x && u.state().overflowAmount.x === u.elements().viewport.scrollLeft && i(u), u.state().hasOverflow.y && u.state().overflowAmount.y === u.elements().viewport.scrollTop && o(u);
  };
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    /* @__PURE__ */ L.jsx(
      tw,
      {
        className: "h-overlay-scroll",
        style: {
          maxHeight: t === 0 ? "none" : `${t}px`
        },
        options: {
          ...n
        },
        events: {
          initialized: r,
          destroyed: a,
          updated: l,
          scroll: c
        },
        defer: !0,
        children: e
      }
    )
  );
};
og.displayName = "HScrollbars";
const ew = ({ children: e, listWidth: t }) => {
  const { isActiveList: n, listPosition: s, dropdownListRef: i } = Dl(), o = (c, u, h, d) => u + h > d ? {
    top: "auto",
    bottom: `${d - c}px`,
    marginBottom: "-1px"
  } : {
    top: `${u}px`,
    bottom: "auto",
    marginTop: "-1px"
  }, r = (c, u, h, d) => u + h > d ? {
    left: "auto",
    right: `${d - u}px`
  } : {
    left: `${c}px`,
    right: "auto"
  }, [a, l] = _t({});
  return Et(() => {
    (() => {
      if (!s) {
        l({
          position: "fixed"
        });
        return;
      }
      const { bottom: c, left: u, right: h, top: d, clientWidth: f, clientHeight: p } = s;
      if (!i.current) {
        l({});
        return;
      }
      const { height: g, width: m } = i.current.getBoundingClientRect();
      l({
        position: "fixed",
        zIndex: "220",
        ...o(d, c, g, p),
        ...r(u, h, m, f),
        width: `${t}px`
      });
    })();
  }, [s]), /* @__PURE__ */ L.jsx(L.Fragment, { children: n && /* @__PURE__ */ L.jsx(
    "div",
    {
      ref: i,
      style: a,
      className: "h_dropdown_list",
      children: /* @__PURE__ */ L.jsx(og, { maxHeight: 300, children: e })
    }
  ) });
};
ew.displayName = "HDropdownList";
var rg = typeof global == "object" && global && global.Object === Object && global, nw = typeof self == "object" && self && self.Object === Object && self, fn = rg || nw || Function("return this")(), Cs = fn.Symbol, ag = Object.prototype, sw = ag.hasOwnProperty, iw = ag.toString, Us = Cs ? Cs.toStringTag : void 0;
function ow(e) {
  var t = sw.call(e, Us), n = e[Us];
  try {
    e[Us] = void 0;
    var s = !0;
  } catch {
  }
  var i = iw.call(e);
  return s && (t ? e[Us] = n : delete e[Us]), i;
}
var rw = Object.prototype, aw = rw.toString;
function lw(e) {
  return aw.call(e);
}
var cw = "[object Null]", uw = "[object Undefined]", Th = Cs ? Cs.toStringTag : void 0;
function $i(e) {
  return e == null ? e === void 0 ? uw : cw : Th && Th in Object(e) ? ow(e) : lw(e);
}
function Ti(e) {
  return e != null && typeof e == "object";
}
var Xo = Array.isArray;
function lg(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var hw = "[object AsyncFunction]", dw = "[object Function]", fw = "[object GeneratorFunction]", pw = "[object Proxy]";
function cg(e) {
  if (!lg(e))
    return !1;
  var t = $i(e);
  return t == dw || t == fw || t == hw || t == pw;
}
var Kr = fn["__core-js_shared__"], Mh = function() {
  var e = /[^.]+$/.exec(Kr && Kr.keys && Kr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function gw(e) {
  return !!Mh && Mh in e;
}
var mw = Function.prototype, yw = mw.toString;
function is(e) {
  if (e != null) {
    try {
      return yw.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var bw = /[\\^$.*+?()[\]{}|]/g, xw = /^\[object .+?Constructor\]$/, vw = Function.prototype, _w = Object.prototype, Sw = vw.toString, ww = _w.hasOwnProperty, Aw = RegExp(
  "^" + Sw.call(ww).replace(bw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Pw(e) {
  if (!lg(e) || gw(e))
    return !1;
  var t = cg(e) ? Aw : xw;
  return t.test(is(e));
}
function Tw(e, t) {
  return e == null ? void 0 : e[t];
}
function Ls(e, t) {
  var n = Tw(e, t);
  return Pw(n) ? n : void 0;
}
var Ba = Ls(fn, "WeakMap"), Mw = 9007199254740991, Dw = /^(?:0|[1-9]\d*)$/;
function Cw(e, t) {
  var n = typeof e;
  return t = t ?? Mw, !!t && (n == "number" || n != "symbol" && Dw.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ug(e, t) {
  return e === t || e !== e && t !== t;
}
var kw = 9007199254740991;
function hg(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kw;
}
function Ew(e) {
  return e != null && hg(e.length) && !cg(e);
}
var Ow = Object.prototype;
function Rw(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Ow;
  return e === n;
}
function Lw(e, t) {
  for (var n = -1, s = Array(e); ++n < e; )
    s[n] = t(n);
  return s;
}
var Iw = "[object Arguments]";
function Dh(e) {
  return Ti(e) && $i(e) == Iw;
}
var dg = Object.prototype, Vw = dg.hasOwnProperty, Fw = dg.propertyIsEnumerable, Nw = Dh(/* @__PURE__ */ function() {
  return arguments;
}()) ? Dh : function(e) {
  return Ti(e) && Vw.call(e, "callee") && !Fw.call(e, "callee");
};
function Bw() {
  return !1;
}
var fg = typeof exports == "object" && exports && !exports.nodeType && exports, Ch = fg && typeof module == "object" && module && !module.nodeType && module, jw = Ch && Ch.exports === fg, kh = jw ? fn.Buffer : void 0, $w = kh ? kh.isBuffer : void 0, ja = $w || Bw, Hw = "[object Arguments]", zw = "[object Array]", Ww = "[object Boolean]", Uw = "[object Date]", Yw = "[object Error]", Kw = "[object Function]", Xw = "[object Map]", Gw = "[object Number]", qw = "[object Object]", Zw = "[object RegExp]", Qw = "[object Set]", Jw = "[object String]", tA = "[object WeakMap]", eA = "[object ArrayBuffer]", nA = "[object DataView]", sA = "[object Float32Array]", iA = "[object Float64Array]", oA = "[object Int8Array]", rA = "[object Int16Array]", aA = "[object Int32Array]", lA = "[object Uint8Array]", cA = "[object Uint8ClampedArray]", uA = "[object Uint16Array]", hA = "[object Uint32Array]", kt = {};
kt[sA] = kt[iA] = kt[oA] = kt[rA] = kt[aA] = kt[lA] = kt[cA] = kt[uA] = kt[hA] = !0;
kt[Hw] = kt[zw] = kt[eA] = kt[Ww] = kt[nA] = kt[Uw] = kt[Yw] = kt[Kw] = kt[Xw] = kt[Gw] = kt[qw] = kt[Zw] = kt[Qw] = kt[Jw] = kt[tA] = !1;
function dA(e) {
  return Ti(e) && hg(e.length) && !!kt[$i(e)];
}
function fA(e) {
  return function(t) {
    return e(t);
  };
}
var pg = typeof exports == "object" && exports && !exports.nodeType && exports, ai = pg && typeof module == "object" && module && !module.nodeType && module, pA = ai && ai.exports === pg, Xr = pA && rg.process, Eh = function() {
  try {
    var e = ai && ai.require && ai.require("util").types;
    return e || Xr && Xr.binding && Xr.binding("util");
  } catch {
  }
}(), Oh = Eh && Eh.isTypedArray, gg = Oh ? fA(Oh) : dA, gA = Object.prototype, mA = gA.hasOwnProperty;
function yA(e, t) {
  var n = Xo(e), s = !n && Nw(e), i = !n && !s && ja(e), o = !n && !s && !i && gg(e), r = n || s || i || o, a = r ? Lw(e.length, String) : [], l = a.length;
  for (var c in e)
    mA.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Cw(c, l))) && a.push(c);
  return a;
}
function bA(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var xA = bA(Object.keys, Object), vA = Object.prototype, _A = vA.hasOwnProperty;
function SA(e) {
  if (!Rw(e))
    return xA(e);
  var t = [];
  for (var n in Object(e))
    _A.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function wA(e) {
  return Ew(e) ? yA(e) : SA(e);
}
var Mi = Ls(Object, "create");
function AA() {
  this.__data__ = Mi ? Mi(null) : {}, this.size = 0;
}
function PA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var TA = "__lodash_hash_undefined__", MA = Object.prototype, DA = MA.hasOwnProperty;
function CA(e) {
  var t = this.__data__;
  if (Mi) {
    var n = t[e];
    return n === TA ? void 0 : n;
  }
  return DA.call(t, e) ? t[e] : void 0;
}
var kA = Object.prototype, EA = kA.hasOwnProperty;
function OA(e) {
  var t = this.__data__;
  return Mi ? t[e] !== void 0 : EA.call(t, e);
}
var RA = "__lodash_hash_undefined__";
function LA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Mi && t === void 0 ? RA : t, this;
}
function ns(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ns.prototype.clear = AA;
ns.prototype.delete = PA;
ns.prototype.get = CA;
ns.prototype.has = OA;
ns.prototype.set = LA;
function IA() {
  this.__data__ = [], this.size = 0;
}
function xr(e, t) {
  for (var n = e.length; n--; )
    if (ug(e[n][0], t))
      return n;
  return -1;
}
var VA = Array.prototype, FA = VA.splice;
function NA(e) {
  var t = this.__data__, n = xr(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : FA.call(t, n, 1), --this.size, !0;
}
function BA(e) {
  var t = this.__data__, n = xr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function jA(e) {
  return xr(this.__data__, e) > -1;
}
function $A(e, t) {
  var n = this.__data__, s = xr(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
pn.prototype.clear = IA;
pn.prototype.delete = NA;
pn.prototype.get = BA;
pn.prototype.has = jA;
pn.prototype.set = $A;
var Di = Ls(fn, "Map");
function HA() {
  this.size = 0, this.__data__ = {
    hash: new ns(),
    map: new (Di || pn)(),
    string: new ns()
  };
}
function zA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function vr(e, t) {
  var n = e.__data__;
  return zA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function WA(e) {
  var t = vr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function UA(e) {
  return vr(this, e).get(e);
}
function YA(e) {
  return vr(this, e).has(e);
}
function KA(e, t) {
  var n = vr(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function os(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
os.prototype.clear = HA;
os.prototype.delete = WA;
os.prototype.get = UA;
os.prototype.has = YA;
os.prototype.set = KA;
function XA(e, t) {
  for (var n = -1, s = t.length, i = e.length; ++n < s; )
    e[i + n] = t[n];
  return e;
}
function GA() {
  this.__data__ = new pn(), this.size = 0;
}
function qA(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function ZA(e) {
  return this.__data__.get(e);
}
function QA(e) {
  return this.__data__.has(e);
}
var JA = 200;
function tP(e, t) {
  var n = this.__data__;
  if (n instanceof pn) {
    var s = n.__data__;
    if (!Di || s.length < JA - 1)
      return s.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new os(s);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Tn(e) {
  var t = this.__data__ = new pn(e);
  this.size = t.size;
}
Tn.prototype.clear = GA;
Tn.prototype.delete = qA;
Tn.prototype.get = ZA;
Tn.prototype.has = QA;
Tn.prototype.set = tP;
function eP(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, i = 0, o = []; ++n < s; ) {
    var r = e[n];
    t(r, n, e) && (o[i++] = r);
  }
  return o;
}
function nP() {
  return [];
}
var sP = Object.prototype, iP = sP.propertyIsEnumerable, Rh = Object.getOwnPropertySymbols, oP = Rh ? function(e) {
  return e == null ? [] : (e = Object(e), eP(Rh(e), function(t) {
    return iP.call(e, t);
  }));
} : nP;
function rP(e, t, n) {
  var s = t(e);
  return Xo(e) ? s : XA(s, n(e));
}
function Lh(e) {
  return rP(e, wA, oP);
}
var $a = Ls(fn, "DataView"), Ha = Ls(fn, "Promise"), za = Ls(fn, "Set"), Ih = "[object Map]", aP = "[object Object]", Vh = "[object Promise]", Fh = "[object Set]", Nh = "[object WeakMap]", Bh = "[object DataView]", lP = is($a), cP = is(Di), uP = is(Ha), hP = is(za), dP = is(Ba), bn = $i;
($a && bn(new $a(new ArrayBuffer(1))) != Bh || Di && bn(new Di()) != Ih || Ha && bn(Ha.resolve()) != Vh || za && bn(new za()) != Fh || Ba && bn(new Ba()) != Nh) && (bn = function(e) {
  var t = $i(e), n = t == aP ? e.constructor : void 0, s = n ? is(n) : "";
  if (s)
    switch (s) {
      case lP:
        return Bh;
      case cP:
        return Ih;
      case uP:
        return Vh;
      case hP:
        return Fh;
      case dP:
        return Nh;
    }
  return t;
});
var jh = fn.Uint8Array, fP = "__lodash_hash_undefined__";
function pP(e) {
  return this.__data__.set(e, fP), this;
}
function gP(e) {
  return this.__data__.has(e);
}
function Go(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new os(); ++t < n; )
    this.add(e[t]);
}
Go.prototype.add = Go.prototype.push = pP;
Go.prototype.has = gP;
function mP(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function yP(e, t) {
  return e.has(t);
}
var bP = 1, xP = 2;
function mg(e, t, n, s, i, o) {
  var r = n & bP, a = e.length, l = t.length;
  if (a != l && !(r && l > a))
    return !1;
  var c = o.get(e), u = o.get(t);
  if (c && u)
    return c == t && u == e;
  var h = -1, d = !0, f = n & xP ? new Go() : void 0;
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
      if (!mP(t, function(y, b) {
        if (!yP(f, b) && (p === y || i(p, y, n, s, o)))
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
function vP(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s, i) {
    n[++t] = [i, s];
  }), n;
}
function _P(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s) {
    n[++t] = s;
  }), n;
}
var SP = 1, wP = 2, AP = "[object Boolean]", PP = "[object Date]", TP = "[object Error]", MP = "[object Map]", DP = "[object Number]", CP = "[object RegExp]", kP = "[object Set]", EP = "[object String]", OP = "[object Symbol]", RP = "[object ArrayBuffer]", LP = "[object DataView]", $h = Cs ? Cs.prototype : void 0, Gr = $h ? $h.valueOf : void 0;
function IP(e, t, n, s, i, o, r) {
  switch (n) {
    case LP:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case RP:
      return !(e.byteLength != t.byteLength || !o(new jh(e), new jh(t)));
    case AP:
    case PP:
    case DP:
      return ug(+e, +t);
    case TP:
      return e.name == t.name && e.message == t.message;
    case CP:
    case EP:
      return e == t + "";
    case MP:
      var a = vP;
    case kP:
      var l = s & SP;
      if (a || (a = _P), e.size != t.size && !l)
        return !1;
      var c = r.get(e);
      if (c)
        return c == t;
      s |= wP, r.set(e, t);
      var u = mg(a(e), a(t), s, i, o, r);
      return r.delete(e), u;
    case OP:
      if (Gr)
        return Gr.call(e) == Gr.call(t);
  }
  return !1;
}
var VP = 1, FP = Object.prototype, NP = FP.hasOwnProperty;
function BP(e, t, n, s, i, o) {
  var r = n & VP, a = Lh(e), l = a.length, c = Lh(t), u = c.length;
  if (l != u && !r)
    return !1;
  for (var h = l; h--; ) {
    var d = a[h];
    if (!(r ? d in t : NP.call(t, d)))
      return !1;
  }
  var f = o.get(e), p = o.get(t);
  if (f && p)
    return f == t && p == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var m = r; ++h < l; ) {
    d = a[h];
    var y = e[d], b = t[d];
    if (s)
      var S = r ? s(b, y, d, t, e, o) : s(y, b, d, e, t, o);
    if (!(S === void 0 ? y === b || i(y, b, n, s, o) : S)) {
      g = !1;
      break;
    }
    m || (m = d == "constructor");
  }
  if (g && !m) {
    var _ = e.constructor, x = t.constructor;
    _ != x && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof x == "function" && x instanceof x) && (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var jP = 1, Hh = "[object Arguments]", zh = "[object Array]", uo = "[object Object]", $P = Object.prototype, Wh = $P.hasOwnProperty;
function HP(e, t, n, s, i, o) {
  var r = Xo(e), a = Xo(t), l = r ? zh : bn(e), c = a ? zh : bn(t);
  l = l == Hh ? uo : l, c = c == Hh ? uo : c;
  var u = l == uo, h = c == uo, d = l == c;
  if (d && ja(e)) {
    if (!ja(t))
      return !1;
    r = !0, u = !1;
  }
  if (d && !u)
    return o || (o = new Tn()), r || gg(e) ? mg(e, t, n, s, i, o) : IP(e, t, l, n, s, i, o);
  if (!(n & jP)) {
    var f = u && Wh.call(e, "__wrapped__"), p = h && Wh.call(t, "__wrapped__");
    if (f || p) {
      var g = f ? e.value() : e, m = p ? t.value() : t;
      return o || (o = new Tn()), i(g, m, n, s, o);
    }
  }
  return d ? (o || (o = new Tn()), BP(e, t, n, s, i, o)) : !1;
}
function yg(e, t, n, s, i) {
  return e === t ? !0 : e == null || t == null || !Ti(e) && !Ti(t) ? e !== e && t !== t : HP(e, t, n, s, yg, i);
}
function Wa(e, t) {
  return yg(e, t);
}
const Lk = (e, t) => Wa(e, t), Ik = ({ data: e, backgroundColor: t, borderColor: n, borderWidth: s, labelFillStyle: i, legendLabelsColor: o }) => {
  const r = xt(null), a = xt(null);
  return Et(() => {
    var c;
    a.current && a.current.destroy();
    const l = (c = r.current) == null ? void 0 : c.getContext("2d");
    if (l)
      return a.current = new ze(l, {
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
                  const y = m.innerRadius + (m.outerRadius - m.innerRadius) / 2, b = m.startAngle, S = m.endAngle, _ = b + (S - b) / 2, x = y * Math.cos(_), w = y * Math.sin(_);
                  h.save(), h.translate(m.x, m.y), h.fillStyle = i || "#000000", h.font = "12px Arial", h.textAlign = "center", h.textBaseline = "middle";
                  const A = (parseFloat(f.data[m.$context.index] + "") / d * 100).toFixed(1) + "%";
                  h.fillText(A, x, w), h.restore();
                });
              });
            }
          }
        ]
      }), () => {
        a.current && a.current.destroy();
      };
  }, [e]), /* @__PURE__ */ L.jsx("canvas", { ref: r });
}, zl = Ze({});
function Wl(e) {
  const t = xt(null);
  return t.current === null && (t.current = e()), t.current;
}
const _r = /* @__PURE__ */ Ze(null), Ul = Ze({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class zP extends al.Component {
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
function WP({ children: e, isPresent: t, anchorX: n }) {
  const s = nr(), i = xt(null), o = xt({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: r } = Yt(Ul);
  return uf(() => {
    const { width: a, height: l, top: c, left: u, right: h } = o.current;
    if (t || !i.current || !a || !l)
      return;
    const d = n === "left" ? `left: ${u}` : `right: ${h}`;
    i.current.dataset.motionPopId = s;
    const f = document.createElement("style");
    return r && (f.nonce = r), document.head.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${d}px !important;
            top: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(f);
    };
  }, [t]), L.jsx(zP, { isPresent: t, childRef: i, sizeRef: o, children: al.cloneElement(e, { ref: i }) });
}
const UP = ({ children: e, initial: t, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r, anchorX: a }) => {
  const l = Wl(YP), c = nr(), u = ll((d) => {
    l.set(d, !0);
    for (const f of l.values())
      if (!f)
        return;
    s && s();
  }, [l, s]), h = Ne(
    () => ({
      id: c,
      initial: t,
      isPresent: n,
      custom: i,
      onExitComplete: u,
      register: (d) => (l.set(d, !1), () => l.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    o ? [Math.random(), u] : [n, u]
  );
  return Ne(() => {
    l.forEach((d, f) => l.set(f, !1));
  }, [n]), al.useEffect(() => {
    !n && !l.size && s && s();
  }, [n]), r === "popLayout" && (e = L.jsx(WP, { isPresent: n, anchorX: a, children: e })), L.jsx(_r.Provider, { value: h, children: e });
};
function YP() {
  return /* @__PURE__ */ new Map();
}
function bg(e = !0) {
  const t = Yt(_r);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = t, o = nr();
  Et(() => {
    e && i(o);
  }, [e]);
  const r = ll(() => e && s && s(o), [o, s, e]);
  return !n && s ? [!1, r] : [!0];
}
const ho = (e) => e.key || "";
function Uh(e) {
  const t = [];
  return Jm.forEach(e, (n) => {
    hf(n) && t.push(n);
  }), t;
}
const Yl = typeof window < "u", xg = Yl ? ty : Et, vg = ({ children: e, custom: t, initial: n = !0, onExitComplete: s, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left" }) => {
  const [l, c] = bg(r), u = Ne(() => Uh(e), [e]), h = r && !l ? [] : u.map(ho), d = xt(!0), f = xt(u), p = Wl(() => /* @__PURE__ */ new Map()), [g, m] = _t(u), [y, b] = _t(u);
  xg(() => {
    d.current = !1, f.current = u;
    for (let x = 0; x < y.length; x++) {
      const w = ho(y[x]);
      h.includes(w) ? p.delete(w) : p.get(w) !== !0 && p.set(w, !1);
    }
  }, [y, h.length, h.join("-")]);
  const S = [];
  if (u !== g) {
    let x = [...u];
    for (let w = 0; w < y.length; w++) {
      const A = y[w], P = ho(A);
      h.includes(P) || (x.splice(w, 0, A), S.push(A));
    }
    return o === "wait" && S.length && (x = S), b(Uh(x)), m(u), null;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && y.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: _ } = Yt(zl);
  return L.jsx(L.Fragment, { children: y.map((x) => {
    const w = ho(x), A = r && !l ? !1 : u === y || h.includes(w), P = () => {
      if (p.has(w))
        p.set(w, !0);
      else
        return;
      let M = !0;
      p.forEach((T) => {
        T || (M = !1);
      }), M && (_ == null || _(), b(f.current), r && (c == null || c()), s && s());
    };
    return L.jsx(UP, { isPresent: A, initial: !d.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: i, mode: o, onExitComplete: A ? void 0 : P, anchorX: a, children: x }, w);
  }) });
}, me = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let Is = me, Cn = me;
process.env.NODE_ENV !== "production" && (Is = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Cn = (e, t) => {
  if (!e)
    throw new Error(t);
});
// @__NO_SIDE_EFFECTS__
function Kl(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ks = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const s = t - e;
  return s === 0 ? 1 : (n - e) / s;
}, Ke = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, cn = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, KP = {
  useManualTiming: !1
}, fo = [
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
], Yh = {
  value: null
};
function XP(e, t) {
  let n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = 0;
  function c(h) {
    r.has(h) && (u.schedule(h), e()), l++, h(a);
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
      i = !0, [n, s] = [s, n], n.forEach(c), t && Yh.value && Yh.value.frameloop[t].push(l), l = 0, n.clear(), i = !1, o && (o = !1, u.process(h));
    }
  };
  return u;
}
const GP = 40;
function _g(e, t) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = fo.reduce((y, b) => (y[b] = XP(o, t ? b : void 0), y), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: h, postRender: d } = r, f = () => {
    const y = performance.now();
    n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, GP), 1), i.timestamp = y, i.isProcessing = !0, a.process(i), l.process(i), c.process(i), u.process(i), h.process(i), d.process(i), i.isProcessing = !1, n && t && (s = !1, e(f));
  }, p = () => {
    n = !0, s = !0, i.isProcessing || e(f);
  };
  return { schedule: fo.reduce((y, b) => {
    const S = r[b];
    return y[b] = (_, x = !1, w = !1) => (n || p(), S.schedule(_, x, w)), y;
  }, {}), cancel: (y) => {
    for (let b = 0; b < fo.length; b++)
      r[fo[b]].cancel(y);
  }, state: i, steps: r };
}
const { schedule: Mt, cancel: kn, state: te, steps: qr } = _g(typeof requestAnimationFrame < "u" ? requestAnimationFrame : me, !0), Sg = Ze({ strict: !1 }), Kh = {
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
}, Es = {};
for (const e in Kh)
  Es[e] = {
    isEnabled: (t) => Kh[e].some((n) => !!t[n])
  };
function qP(e) {
  for (const t in e)
    Es[t] = {
      ...Es[t],
      ...e[t]
    };
}
const ZP = /* @__PURE__ */ new Set([
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
function qo(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ZP.has(e);
}
let wg = (e) => !qo(e);
function QP(e) {
  e && (wg = (t) => t.startsWith("on") ? !qo(t) : e(t));
}
try {
  QP(require("@emotion/is-prop-valid").default);
} catch {
}
function JP(e, t, n) {
  const s = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (wg(i) || n === !0 && qo(i) || !t && !qo(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (s[i] = e[i]);
  return s;
}
const Xh = /* @__PURE__ */ new Set();
function Sr(e, t, n) {
  e || Xh.has(t) || (console.warn(t), Xh.add(t));
}
function tT(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...s) => (process.env.NODE_ENV !== "production" && Sr(!1, "motion() is deprecated. Use motion.create() instead."), e(...s));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
  });
}
const wr = /* @__PURE__ */ Ze({});
function Ar(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Ci(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Xl = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Gl = ["initial", ...Xl];
function Pr(e) {
  return Ar(e.animate) || Gl.some((t) => Ci(e[t]));
}
function Ag(e) {
  return !!(Pr(e) || e.variants);
}
function eT(e, t) {
  if (Pr(e)) {
    const { initial: n, animate: s } = e;
    return {
      initial: n === !1 || Ci(n) ? n : void 0,
      animate: Ci(s) ? s : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function nT(e) {
  const { initial: t, animate: n } = eT(e, Yt(wr));
  return Ne(() => ({ initial: t, animate: n }), [Gh(t), Gh(n)]);
}
function Gh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const sT = Symbol.for("motionComponentSymbol");
function gs(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function iT(e, t, n) {
  return ll(
    (s) => {
      s && e.onMount && e.onMount(s), t && (s ? t.mount(s) : t.unmount()), n && (typeof n == "function" ? n(s) : gs(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const ql = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), oT = "framerAppearId", Pg = "data-" + ql(oT), { schedule: Zl } = _g(queueMicrotask, !1), Tg = Ze({});
function rT(e, t, n, s, i) {
  var o, r;
  const { visualElement: a } = Yt(wr), l = Yt(Sg), c = Yt(_r), u = Yt(Ul).reducedMotion, h = xt(null);
  s = s || l.renderer, !h.current && s && (h.current = s(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const d = h.current, f = Yt(Tg);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && aT(h.current, n, i, f);
  const p = xt(!1);
  uf(() => {
    d && p.current && d.update(n, c);
  });
  const g = n[Pg], m = xt(!!g && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, g)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, g)));
  return xg(() => {
    d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Zl.render(d.render), m.current && d.animationState && d.animationState.animateChanges());
  }), Et(() => {
    d && (!m.current && d.animationState && d.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      var y;
      (y = window.MotionHandoffMarkAsComplete) === null || y === void 0 || y.call(window, g);
    }), m.current = !1));
  }), d;
}
function aT(e, t, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Mg(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!r || a && gs(a),
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
    layoutScroll: l,
    layoutRoot: c
  });
}
function Mg(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Mg(e.parent);
}
function lT({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: s, Component: i }) {
  var o, r;
  e && qP(e);
  function a(c, u) {
    let h;
    const d = {
      ...Yt(Ul),
      ...c,
      layoutId: cT(c)
    }, { isStatic: f } = d, p = nT(c), g = s(c, f);
    if (!f && Yl) {
      uT(d, e);
      const m = hT(d);
      h = m.MeasureLayout, p.visualElement = rT(i, g, d, t, m.ProjectionNode);
    }
    return L.jsxs(wr.Provider, { value: p, children: [h && p.visualElement ? L.jsx(h, { visualElement: p.visualElement, ...d }) : null, n(i, c, iT(g, p.visualElement, u), g, f, p.visualElement)] });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(r = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && r !== void 0 ? r : ""})`}`;
  const l = Vi(a);
  return l[sT] = i, l;
}
function cT({ layoutId: e }) {
  const t = Yt(zl).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function uT(e, t) {
  const n = Yt(Sg).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Is(!1, s) : Cn(!1, s);
  }
}
function hT(e) {
  const { drag: t, layout: n } = Es;
  if (!t && !n)
    return {};
  const s = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
const Dg = (e) => (t) => typeof t == "string" && t.startsWith(e), Ql = /* @__PURE__ */ Dg("--"), dT = /* @__PURE__ */ Dg("var(--"), Jl = (e) => dT(e) ? fT.test(e.split("/*")[0].trim()) : !1, fT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, ki = {};
function pT(e) {
  for (const t in e)
    ki[t] = e[t], Ql(t) && (ki[t].isCSSVariable = !0);
}
const Vs = [
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
], rs = new Set(Vs);
function Cg(e, { layout: t, layoutId: n }) {
  return rs.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ki[e] || e === "opacity");
}
const re = (e) => !!(e && e.getVelocity), kg = (e, t) => t && typeof e == "number" ? t.transform(e) : e, hn = (e, t, n) => n > t ? t : n < e ? e : n, Fs = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ei = {
  ...Fs,
  transform: (e) => hn(0, 1, e)
}, po = {
  ...Fs,
  default: 1
}, Hi = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), yn = /* @__PURE__ */ Hi("deg"), Xe = /* @__PURE__ */ Hi("%"), nt = /* @__PURE__ */ Hi("px"), gT = /* @__PURE__ */ Hi("vh"), mT = /* @__PURE__ */ Hi("vw"), qh = {
  ...Xe,
  parse: (e) => Xe.parse(e) / 100,
  transform: (e) => Xe.transform(e * 100)
}, yT = {
  // Border props
  borderWidth: nt,
  borderTopWidth: nt,
  borderRightWidth: nt,
  borderBottomWidth: nt,
  borderLeftWidth: nt,
  borderRadius: nt,
  radius: nt,
  borderTopLeftRadius: nt,
  borderTopRightRadius: nt,
  borderBottomRightRadius: nt,
  borderBottomLeftRadius: nt,
  // Positioning props
  width: nt,
  maxWidth: nt,
  height: nt,
  maxHeight: nt,
  top: nt,
  right: nt,
  bottom: nt,
  left: nt,
  // Spacing props
  padding: nt,
  paddingTop: nt,
  paddingRight: nt,
  paddingBottom: nt,
  paddingLeft: nt,
  margin: nt,
  marginTop: nt,
  marginRight: nt,
  marginBottom: nt,
  marginLeft: nt,
  // Misc
  backgroundPositionX: nt,
  backgroundPositionY: nt
}, bT = {
  rotate: yn,
  rotateX: yn,
  rotateY: yn,
  rotateZ: yn,
  scale: po,
  scaleX: po,
  scaleY: po,
  scaleZ: po,
  skew: yn,
  skewX: yn,
  skewY: yn,
  distance: nt,
  translateX: nt,
  translateY: nt,
  translateZ: nt,
  x: nt,
  y: nt,
  z: nt,
  perspective: nt,
  transformPerspective: nt,
  opacity: Ei,
  originX: qh,
  originY: qh,
  originZ: nt
}, Zh = {
  ...Fs,
  transform: Math.round
}, tc = {
  ...yT,
  ...bT,
  zIndex: Zh,
  size: nt,
  // SVG
  fillOpacity: Ei,
  strokeOpacity: Ei,
  numOctaves: Zh
}, xT = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, vT = Vs.length;
function _T(e, t, n) {
  let s = "", i = !0;
  for (let o = 0; o < vT; o++) {
    const r = Vs[o], a = e[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = kg(a, tc[r]);
      if (!l) {
        i = !1;
        const u = xT[r] || r;
        s += `${u}(${c}) `;
      }
      n && (t[r] = c);
    }
  }
  return s = s.trim(), n ? s = n(t, i ? "" : s) : i && (s = "none"), s;
}
function ec(e, t, n) {
  const { style: s, vars: i, transformOrigin: o } = e;
  let r = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (rs.has(l)) {
      r = !0;
      continue;
    } else if (Ql(l)) {
      i[l] = c;
      continue;
    } else {
      const u = kg(c, tc[l]);
      l.startsWith("origin") ? (a = !0, o[l] = u) : s[l] = u;
    }
  }
  if (t.transform || (r || n ? s.transform = _T(t, e.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    s.transformOrigin = `${l} ${c} ${u}`;
  }
}
const nc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Eg(e, t, n) {
  for (const s in t)
    !re(t[s]) && !Cg(s, n) && (e[s] = t[s]);
}
function ST({ transformTemplate: e }, t) {
  return Ne(() => {
    const n = nc();
    return ec(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function wT(e, t) {
  const n = e.style || {}, s = {};
  return Eg(s, n, e), Object.assign(s, ST(e, t)), s;
}
function AT(e, t) {
  const n = {}, s = wT(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const PT = [
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
function sc(e) {
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
      !!(PT.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const TT = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, MT = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function DT(e, t, n = 1, s = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? TT : MT;
  e[o.offset] = nt.transform(-s);
  const r = nt.transform(t), a = nt.transform(n);
  e[o.array] = `${r} ${a}`;
}
function Qh(e, t, n) {
  return typeof e == "string" ? e : nt.transform(t + n * e);
}
function CT(e, t, n) {
  const s = Qh(t, e.x, e.width), i = Qh(n, e.y, e.height);
  return `${s} ${i}`;
}
function ic(e, {
  attrX: t,
  attrY: n,
  attrScale: s,
  originX: i,
  originY: o,
  pathLength: r,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, h) {
  if (ec(e, c, h), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: f, dimensions: p } = e;
  d.transform && (p && (f.transform = d.transform), delete d.transform), p && (i !== void 0 || o !== void 0 || f.transform) && (f.transformOrigin = CT(p, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), r !== void 0 && DT(d, r, a, l, !1);
}
const Og = () => ({
  ...nc(),
  attrs: {}
}), oc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function kT(e, t, n, s) {
  const i = Ne(() => {
    const o = Og();
    return ic(o, t, oc(s), e.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    Eg(o, e.style, e), i.style = { ...o, ...i.style };
  }
  return i;
}
function ET(e = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (sc(n) ? kT : AT)(s, o, r, n), c = JP(s, typeof n == "string", e), u = n !== df ? { ...c, ...l, ref: i } : {}, { children: h } = s, d = Ne(() => re(h) ? h.get() : h, [h]);
    return ey(n, {
      ...u,
      children: d
    });
  };
}
function Jh(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, s) => {
    t[0][s] = n.get(), t[1][s] = n.getVelocity();
  }), t;
}
function rc(e, t, n, s) {
  if (typeof t == "function") {
    const [i, o] = Jh(s);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, o] = Jh(s);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const Ua = (e) => Array.isArray(e), OT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), RT = (e) => Ua(e) ? e[e.length - 1] || 0 : e;
function Co(e) {
  const t = re(e) ? e.get() : e;
  return OT(t) ? t.toValue() : t;
}
function LT({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, s, i, o) {
  const r = {
    latestValues: IT(s, i, o, e),
    renderState: t()
  };
  return n && (r.onMount = (a) => n({ props: s, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const Rg = (e) => (t, n) => {
  const s = Yt(wr), i = Yt(_r), o = () => LT(e, t, s, i);
  return n ? o() : Wl(o);
};
function IT(e, t, n, s) {
  const i = {}, o = s(e, {});
  for (const d in o)
    i[d] = Co(o[d]);
  let { initial: r, animate: a } = e;
  const l = Pr(e), c = Ag(e);
  t && c && !l && e.inherit !== !1 && (r === void 0 && (r = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? a : r;
  if (h && typeof h != "boolean" && !Ar(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let f = 0; f < d.length; f++) {
      const p = rc(e, d[f]);
      if (p) {
        const { transitionEnd: g, transition: m, ...y } = p;
        for (const b in y) {
          let S = y[b];
          if (Array.isArray(S)) {
            const _ = u ? S.length - 1 : 0;
            S = S[_];
          }
          S !== null && (i[b] = S);
        }
        for (const b in g)
          i[b] = g[b];
      }
    }
  }
  return i;
}
function ac(e, t, n) {
  var s;
  const { style: i } = e, o = {};
  for (const r in i)
    (re(i[r]) || t.style && re(t.style[r]) || Cg(r, e) || ((s = n == null ? void 0 : n.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (o[r] = i[r]);
  return o;
}
const VT = {
  useVisualState: Rg({
    scrapeMotionValuesFromProps: ac,
    createRenderState: nc
  })
};
function Lg(e, t) {
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
function Ig(e, { style: t, vars: n }, s, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(s));
  for (const o in n)
    e.style.setProperty(o, n[o]);
}
const Vg = /* @__PURE__ */ new Set([
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
function Fg(e, t, n, s) {
  Ig(e, t, void 0, s);
  for (const i in t.attrs)
    e.setAttribute(Vg.has(i) ? i : ql(i), t.attrs[i]);
}
function Ng(e, t, n) {
  const s = ac(e, t, n);
  for (const i in e)
    if (re(e[i]) || re(t[i])) {
      const o = Vs.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = e[i];
    }
  return s;
}
const td = ["x", "y", "width", "height", "cx", "cy", "r"], FT = {
  useVisualState: Rg({
    scrapeMotionValuesFromProps: Ng,
    createRenderState: Og,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: s, latestValues: i }) => {
      if (!n)
        return;
      let o = !!e.drag;
      if (!o) {
        for (const a in i)
          if (rs.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let r = !t;
      if (t)
        for (let a = 0; a < td.length; a++) {
          const l = td[a];
          e[l] !== t[l] && (r = !0);
        }
      r && Mt.read(() => {
        Lg(n, s), Mt.render(() => {
          ic(s, i, oc(n.tagName), e.transformTemplate), Fg(n, s);
        });
      });
    }
  })
};
function NT(e, t) {
  return function(s, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const r = {
      ...sc(s) ? FT : VT,
      preloadedFeatures: e,
      useRender: ET(i),
      createVisualElement: t,
      Component: s
    };
    return lT(r);
  };
}
function Oi(e, t, n) {
  const s = e.getProps();
  return rc(s, t, n !== void 0 ? n : s.custom, e);
}
const BT = /* @__PURE__ */ Kl(() => window.ScrollTimeline !== void 0);
class jT {
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
      if (BT() && i.attachTimeline)
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
class $T extends jT {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function lc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Ya = 2e4;
function Bg(e) {
  let t = 0;
  const n = 50;
  let s = e.next(t);
  for (; !s.done && t < Ya; )
    t += n, s = e.next(t);
  return t >= Ya ? 1 / 0 : t;
}
function cc(e) {
  return typeof e == "function";
}
function ed(e, t) {
  e.timeline = t, e.onfinish = null;
}
const uc = (e) => Array.isArray(e) && typeof e[0] == "number", HT = {
  linearEasing: void 0
};
function zT(e, t) {
  const n = /* @__PURE__ */ Kl(e);
  return () => {
    var s;
    return (s = HT[t]) !== null && s !== void 0 ? s : n();
  };
}
const Zo = /* @__PURE__ */ zT(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), jg = (e, t, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let o = 0; o < i; o++)
    s += e(/* @__PURE__ */ ks(0, i - 1, o)) + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
};
function $g(e) {
  return !!(typeof e == "function" && Zo() || !e || typeof e == "string" && (e in Ka || Zo()) || uc(e) || Array.isArray(e) && e.every($g));
}
const ti = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`, Ka = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ti([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ti([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ti([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ti([0.33, 1.53, 0.69, 0.99])
};
function Hg(e, t) {
  if (e)
    return typeof e == "function" && Zo() ? jg(e, t) : uc(e) ? ti(e) : Array.isArray(e) ? e.map((n) => Hg(n, t) || Ka.easeOut) : Ka[e];
}
const Le = {
  x: !1,
  y: !1
};
function zg() {
  return Le.x || Le.y;
}
function WT(e, t, n) {
  var s;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let i = document;
    const o = (s = void 0) !== null && s !== void 0 ? s : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function Wg(e, t) {
  const n = WT(e), s = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: s.signal
  };
  return [n, i, () => s.abort()];
}
function nd(e) {
  return !(e.pointerType === "touch" || zg());
}
function UT(e, t, n = {}) {
  const [s, i, o] = Wg(e, n), r = (a) => {
    if (!nd(a))
      return;
    const { target: l } = a, c = t(l, a);
    if (typeof c != "function" || !l)
      return;
    const u = (h) => {
      nd(h) && (c(h), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, i);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
const Ug = (e, t) => t ? e === t ? !0 : Ug(e, t.parentElement) : !1, hc = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, YT = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function KT(e) {
  return YT.has(e.tagName) || e.tabIndex !== -1;
}
const ei = /* @__PURE__ */ new WeakSet();
function sd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Zr(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const XT = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const s = sd(() => {
    if (ei.has(n))
      return;
    Zr(n, "down");
    const i = sd(() => {
      Zr(n, "up");
    }), o = () => Zr(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", s, t), n.addEventListener("blur", () => n.removeEventListener("keydown", s), t);
};
function id(e) {
  return hc(e) && !zg();
}
function GT(e, t, n = {}) {
  const [s, i, o] = Wg(e, n), r = (a) => {
    const l = a.currentTarget;
    if (!id(a) || ei.has(l))
      return;
    ei.add(l);
    const c = t(l, a), u = (f, p) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), !(!id(f) || !ei.has(l)) && (ei.delete(l), typeof c == "function" && c(f, { success: p }));
    }, h = (f) => {
      u(f, n.useGlobalTarget || Ug(l, f.target));
    }, d = (f) => {
      u(f, !1);
    };
    window.addEventListener("pointerup", h, i), window.addEventListener("pointercancel", d, i);
  };
  return s.forEach((a) => {
    !KT(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i), a.addEventListener("focus", (c) => XT(c, i), i);
  }), o;
}
function qT(e) {
  return e === "x" || e === "y" ? Le[e] ? null : (Le[e] = !0, () => {
    Le[e] = !1;
  }) : Le.x || Le.y ? null : (Le.x = Le.y = !0, () => {
    Le.x = Le.y = !1;
  });
}
const Yg = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Vs
]);
let ko;
function ZT() {
  ko = void 0;
}
const Ge = {
  now: () => (ko === void 0 && Ge.set(te.isProcessing || KP.useManualTiming ? te.timestamp : performance.now()), ko),
  set: (e) => {
    ko = e, queueMicrotask(ZT);
  }
};
function dc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function fc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class pc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return dc(this.subscriptions, t), () => fc(this.subscriptions, t);
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
function Kg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const od = 30, QT = (e) => !isNaN(parseFloat(e));
class JT {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "12.4.3", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
      const o = Ge.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ge.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = QT(this.current));
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
    return process.env.NODE_ENV !== "production" && Sr(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new pc());
    const s = this.events[t].add(n);
    return t === "change" ? () => {
      s(), Mt.read(() => {
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
    const t = Ge.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > od)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, od);
    return Kg(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Ri(e, t) {
  return new JT(e, t);
}
function tM(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ri(n));
}
function eM(e, t) {
  const n = Oi(e, t);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = RT(o[r]);
    tM(e, r, a);
  }
}
function nM(e) {
  return !!(re(e) && e.add);
}
function Xa(e, t) {
  const n = e.getValue("willChange");
  if (nM(n))
    return n.add(t);
}
function Xg(e) {
  return e.props[Pg];
}
const Gg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, sM = 1e-7, iM = 12;
function oM(e, t, n, s, i) {
  let o, r, a = 0;
  do
    r = t + (n - t) / 2, o = Gg(r, s, i) - e, o > 0 ? n = r : t = r;
  while (Math.abs(o) > sM && ++a < iM);
  return r;
}
function zi(e, t, n, s) {
  if (e === t && n === s)
    return me;
  const i = (o) => oM(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Gg(i(o), t, s);
}
const qg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Zg = (e) => (t) => 1 - e(1 - t), Qg = /* @__PURE__ */ zi(0.33, 1.53, 0.69, 0.99), gc = /* @__PURE__ */ Zg(Qg), Jg = /* @__PURE__ */ qg(gc), tm = (e) => (e *= 2) < 1 ? 0.5 * gc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), mc = (e) => 1 - Math.sin(Math.acos(e)), em = Zg(mc), nm = qg(mc), sm = (e) => /^0[^.\s]+$/u.test(e);
function rM(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || sm(e) : !0;
}
const li = (e) => Math.round(e * 1e5) / 1e5, yc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function aM(e) {
  return e == null;
}
const lM = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, bc = (e, t) => (n) => !!(typeof n == "string" && lM.test(n) && n.startsWith(e) || t && !aM(n) && Object.prototype.hasOwnProperty.call(n, t)), im = (e, t, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, o, r, a] = s.match(yc);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, cM = (e) => hn(0, 255, e), Qr = {
  ...Fs,
  transform: (e) => Math.round(cM(e))
}, Xn = {
  test: /* @__PURE__ */ bc("rgb", "red"),
  parse: /* @__PURE__ */ im("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: s = 1 }) => "rgba(" + Qr.transform(e) + ", " + Qr.transform(t) + ", " + Qr.transform(n) + ", " + li(Ei.transform(s)) + ")"
};
function uM(e) {
  let t = "", n = "", s = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), s = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), s = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, s += s, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Ga = {
  test: /* @__PURE__ */ bc("#"),
  parse: uM,
  transform: Xn.transform
}, ms = {
  test: /* @__PURE__ */ bc("hsl", "hue"),
  parse: /* @__PURE__ */ im("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(e) + ", " + Xe.transform(li(t)) + ", " + Xe.transform(li(n)) + ", " + li(Ei.transform(s)) + ")"
}, ie = {
  test: (e) => Xn.test(e) || Ga.test(e) || ms.test(e),
  parse: (e) => Xn.test(e) ? Xn.parse(e) : ms.test(e) ? ms.parse(e) : Ga.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Xn.transform(e) : ms.transform(e)
}, hM = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function dM(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(yc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(hM)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const om = "number", rm = "color", fM = "var", pM = "var(", rd = "${}", gM = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Li(e) {
  const t = e.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = t.replace(gM, (l) => (ie.test(l) ? (s.color.push(o), i.push(rm), n.push(ie.parse(l))) : l.startsWith(pM) ? (s.var.push(o), i.push(fM), n.push(l)) : (s.number.push(o), i.push(om), n.push(parseFloat(l))), ++o, rd)).split(rd);
  return { values: n, split: a, indexes: s, types: i };
}
function am(e) {
  return Li(e).values;
}
function lm(e) {
  const { split: t, types: n } = Li(e), s = t.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += t[r], i[r] !== void 0) {
        const a = n[r];
        a === om ? o += li(i[r]) : a === rm ? o += ie.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const mM = (e) => typeof e == "number" ? 0 : e;
function yM(e) {
  const t = am(e);
  return lm(e)(t.map(mM));
}
const En = {
  test: dM,
  parse: am,
  createTransformer: lm,
  getAnimatableNone: yM
}, bM = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function xM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [s] = n.match(yc) || [];
  if (!s)
    return e;
  const i = n.replace(s, "");
  let o = bM.has(t) ? 1 : 0;
  return s !== n && (o *= 100), t + "(" + o + i + ")";
}
const vM = /\b([a-z-]*)\(.*?\)/gu, qa = {
  ...En,
  getAnimatableNone: (e) => {
    const t = e.match(vM);
    return t ? t.map(xM).join(" ") : e;
  }
}, _M = {
  ...tc,
  // Color props
  color: ie,
  backgroundColor: ie,
  outlineColor: ie,
  fill: ie,
  stroke: ie,
  // Border props
  borderColor: ie,
  borderTopColor: ie,
  borderRightColor: ie,
  borderBottomColor: ie,
  borderLeftColor: ie,
  filter: qa,
  WebkitFilter: qa
}, xc = (e) => _M[e];
function cm(e, t) {
  let n = xc(e);
  return n !== qa && (n = En), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const SM = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function wM(e, t, n) {
  let s = 0, i;
  for (; s < e.length && !i; ) {
    const o = e[s];
    typeof o == "string" && !SM.has(o) && Li(o).values.length && (i = e[s]), s++;
  }
  if (i && n)
    for (const o of t)
      e[o] = cm(n, i);
}
const ad = (e) => e === Fs || e === nt, ld = (e, t) => parseFloat(e.split(", ")[t]), cd = (e, t) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const i = s.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return ld(i[1], t);
  {
    const o = s.match(/^matrix\((.+)\)$/u);
    return o ? ld(o[1], e) : 0;
  }
}, AM = /* @__PURE__ */ new Set(["x", "y", "z"]), PM = Vs.filter((e) => !AM.has(e));
function TM(e) {
  const t = [];
  return PM.forEach((n) => {
    const s = e.getValue(n);
    s !== void 0 && (t.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Os = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: cd(4, 13),
  y: cd(5, 14)
};
Os.translateX = Os.x;
Os.translateY = Os.y;
const Jn = /* @__PURE__ */ new Set();
let Za = !1, Qa = !1;
function um() {
  if (Qa) {
    const e = Array.from(Jn).filter((s) => s.needsMeasurement), t = new Set(e.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    t.forEach((s) => {
      const i = TM(s);
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
  Qa = !1, Za = !1, Jn.forEach((e) => e.complete()), Jn.clear();
}
function hm() {
  Jn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Qa = !0);
  });
}
function MM() {
  hm(), um();
}
class vc {
  constructor(t, n, s, i, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Jn.add(this), Za || (Za = !0, Mt.read(hm), Mt.resolveKeyframes(um))) : (this.readKeyframes(), this.complete());
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
            const l = s.readValue(n, a);
            l != null && (t[0] = l);
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Jn.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Jn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const dm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), DM = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function CM(e) {
  const t = DM.exec(e);
  if (!t)
    return [,];
  const [, n, s, i] = t;
  return [`--${n ?? s}`, i];
}
const kM = 4;
function fm(e, t, n = 1) {
  Cn(n <= kM, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [s, i] = CM(e);
  if (!s)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return dm(r) ? parseFloat(r) : r;
  }
  return Jl(i) ? fm(i, t, n + 1) : i;
}
const pm = (e) => (t) => t.test(e), EM = {
  test: (e) => e === "auto",
  parse: (e) => e
}, gm = [Fs, nt, Xe, yn, mT, gT, EM], ud = (e) => gm.find(pm(e));
class mm extends vc {
  constructor(t, n, s, i, o) {
    super(t, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), Jl(c))) {
        const u = fm(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Yg.has(s) || t.length !== 2)
      return;
    const [i, o] = t, r = ud(i), a = ud(o);
    if (r !== a)
      if (ad(r) && ad(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, s = [];
    for (let i = 0; i < t.length; i++)
      rM(t[i]) && s.push(i);
    s.length && wM(t, s, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: s } = this;
    if (!t || !t.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Os[s](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    i[r] = Os[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const hd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(En.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function OM(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function RM(e, t, n, s) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], r = hd(i, t), a = hd(o, t);
  return Is(r === a, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : OM(e) || (n === "spring" || cc(n)) && s;
}
const LM = (e) => e !== null;
function Tr(e, { repeat: t, repeatType: n = "loop" }, s) {
  const i = e.filter(LM), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || s === void 0 ? i[o] : s;
}
const IM = 40;
class ym {
  constructor({ autoplay: t = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Ge.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > IM ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && MM(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Ge.now(), this.hasAttemptedResolve = !0;
    const { name: s, type: i, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !RM(t, s, i, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(Tr(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const jt = (e, t, n) => e + (t - e) * n;
function Jr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function VM({ hue: e, saturation: t, lightness: n, alpha: s }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!t)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    i = Jr(l, a, e + 1 / 3), o = Jr(l, a, e), r = Jr(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
function Qo(e, t) {
  return (n) => n > 0 ? t : e;
}
const ta = (e, t, n) => {
  const s = e * e, i = n * (t * t - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, FM = [Ga, Xn, ms], NM = (e) => FM.find((t) => t.test(e));
function dd(e) {
  const t = NM(e);
  if (Is(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === ms && (n = VM(n)), n;
}
const fd = (e, t) => {
  const n = dd(e), s = dd(t);
  if (!n || !s)
    return Qo(e, t);
  const i = { ...n };
  return (o) => (i.red = ta(n.red, s.red, o), i.green = ta(n.green, s.green, o), i.blue = ta(n.blue, s.blue, o), i.alpha = jt(n.alpha, s.alpha, o), Xn.transform(i));
}, BM = (e, t) => (n) => t(e(n)), Wi = (...e) => e.reduce(BM), Ja = /* @__PURE__ */ new Set(["none", "hidden"]);
function jM(e, t) {
  return Ja.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function $M(e, t) {
  return (n) => jt(e, t, n);
}
function _c(e) {
  return typeof e == "number" ? $M : typeof e == "string" ? Jl(e) ? Qo : ie.test(e) ? fd : WM : Array.isArray(e) ? bm : typeof e == "object" ? ie.test(e) ? fd : HM : Qo;
}
function bm(e, t) {
  const n = [...e], s = n.length, i = e.map((o, r) => _c(o)(o, t[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function HM(e, t) {
  const n = { ...e, ...t }, s = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (s[i] = _c(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function zM(e, t) {
  var n;
  const s = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const r = t.types[o], a = e.indexes[r][i[r]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    s[o] = l, i[r]++;
  }
  return s;
}
const WM = (e, t) => {
  const n = En.createTransformer(t), s = Li(e), i = Li(t);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Ja.has(e) && !i.values.length || Ja.has(t) && !s.values.length ? jM(e, t) : Wi(bm(zM(s, i), i.values), n) : (Is(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Qo(e, t));
};
function xm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? jt(e, t, n) : _c(e)(e, t);
}
const UM = 5;
function vm(e, t, n) {
  const s = Math.max(t - UM, 0);
  return Kg(n - e(s), t - s);
}
const Nt = {
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
}, pd = 1e-3;
function YM({ duration: e = Nt.duration, bounce: t = Nt.bounce, velocity: n = Nt.velocity, mass: s = Nt.mass }) {
  let i, o;
  Is(e <= /* @__PURE__ */ Ke(Nt.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - t;
  r = hn(Nt.minDamping, Nt.maxDamping, r), e = hn(Nt.minDuration, Nt.maxDuration, /* @__PURE__ */ cn(e)), r < 1 ? (i = (c) => {
    const u = c * r, h = u * e, d = u - n, f = tl(c, r), p = Math.exp(-h);
    return pd - d / f * p;
  }, o = (c) => {
    const h = c * r * e, d = h * n + n, f = Math.pow(r, 2) * Math.pow(c, 2) * e, p = Math.exp(-h), g = tl(Math.pow(c, 2), r);
    return (-i(c) + pd > 0 ? -1 : 1) * ((d - f) * p) / g;
  }) : (i = (c) => {
    const u = Math.exp(-c * e), h = (c - n) * e + 1;
    return -1e-3 + u * h;
  }, o = (c) => {
    const u = Math.exp(-c * e), h = (n - c) * (e * e);
    return u * h;
  });
  const a = 5 / e, l = XM(i, o, a);
  if (e = /* @__PURE__ */ Ke(e), isNaN(l))
    return {
      stiffness: Nt.stiffness,
      damping: Nt.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * s;
    return {
      stiffness: c,
      damping: r * 2 * Math.sqrt(s * c),
      duration: e
    };
  }
}
const KM = 12;
function XM(e, t, n) {
  let s = n;
  for (let i = 1; i < KM; i++)
    s = s - e(s) / t(s);
  return s;
}
function tl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const GM = ["duration", "bounce"], qM = ["stiffness", "damping", "mass"];
function gd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function ZM(e) {
  let t = {
    velocity: Nt.velocity,
    stiffness: Nt.stiffness,
    damping: Nt.damping,
    mass: Nt.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!gd(e, qM) && gd(e, GM))
    if (e.visualDuration) {
      const n = e.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * hn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: Nt.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = YM(e);
      t = {
        ...t,
        ...n,
        mass: Nt.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function _m(e = Nt.visualDuration, t = Nt.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: c, mass: u, duration: h, velocity: d, isResolvedFromDuration: f } = ZM({
    ...n,
    velocity: -/* @__PURE__ */ cn(n.velocity || 0)
  }), p = d || 0, g = c / (2 * Math.sqrt(l * u)), m = r - o, y = /* @__PURE__ */ cn(Math.sqrt(l / u)), b = Math.abs(m) < 5;
  s || (s = b ? Nt.restSpeed.granular : Nt.restSpeed.default), i || (i = b ? Nt.restDelta.granular : Nt.restDelta.default);
  let S;
  if (g < 1) {
    const x = tl(y, g);
    S = (w) => {
      const A = Math.exp(-g * y * w);
      return r - A * ((p + g * y * m) / x * Math.sin(x * w) + m * Math.cos(x * w));
    };
  } else if (g === 1)
    S = (x) => r - Math.exp(-y * x) * (m + (p + y * m) * x);
  else {
    const x = y * Math.sqrt(g * g - 1);
    S = (w) => {
      const A = Math.exp(-g * y * w), P = Math.min(x * w, 300);
      return r - A * ((p + g * y * m) * Math.sinh(P) + x * m * Math.cosh(P)) / x;
    };
  }
  const _ = {
    calculatedDuration: f && h || null,
    next: (x) => {
      const w = S(x);
      if (f)
        a.done = x >= h;
      else {
        let A = 0;
        g < 1 && (A = x === 0 ? /* @__PURE__ */ Ke(p) : vm(S, x, w));
        const P = Math.abs(A) <= s, M = Math.abs(r - w) <= i;
        a.done = P && M;
      }
      return a.value = a.done ? r : w, a;
    },
    toString: () => {
      const x = Math.min(Bg(_), Ya), w = jg((A) => _.next(x * A).value, x, 30);
      return x + "ms " + w;
    }
  };
  return _;
}
function md({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const h = e[0], d = {
    done: !1,
    value: h
  }, f = (P) => a !== void 0 && P < a || l !== void 0 && P > l, p = (P) => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
  let g = n * t;
  const m = h + g, y = r === void 0 ? m : r(m);
  y !== m && (g = y - h);
  const b = (P) => -g * Math.exp(-P / s), S = (P) => y + b(P), _ = (P) => {
    const M = b(P), T = S(P);
    d.done = Math.abs(M) <= c, d.value = d.done ? y : T;
  };
  let x, w;
  const A = (P) => {
    f(d.value) && (x = P, w = _m({
      keyframes: [d.value, p(d.value)],
      velocity: vm(S, P, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: c,
      restSpeed: u
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (P) => {
      let M = !1;
      return !w && x === void 0 && (M = !0, _(P), A(P)), x !== void 0 && P >= x ? w.next(P - x) : (!M && _(P), d);
    }
  };
}
const QM = /* @__PURE__ */ zi(0.42, 0, 1, 1), JM = /* @__PURE__ */ zi(0, 0, 0.58, 1), Sm = /* @__PURE__ */ zi(0.42, 0, 0.58, 1), tD = (e) => Array.isArray(e) && typeof e[0] != "number", yd = {
  linear: me,
  easeIn: QM,
  easeInOut: Sm,
  easeOut: JM,
  circIn: mc,
  circInOut: nm,
  circOut: em,
  backIn: gc,
  backInOut: Jg,
  backOut: Qg,
  anticipate: tm
}, bd = (e) => {
  if (uc(e)) {
    Cn(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, s, i] = e;
    return zi(t, n, s, i);
  } else if (typeof e == "string")
    return Cn(yd[e] !== void 0, `Invalid easing type '${e}'`), yd[e];
  return e;
};
function eD(e, t, n) {
  const s = [], i = n || xm, o = e.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(e[r], e[r + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[r] || me : t;
      a = Wi(l, a);
    }
    s.push(a);
  }
  return s;
}
function nD(e, t, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = e.length;
  if (Cn(o === t.length, "Both input and output ranges must be the same length"), o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const r = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = eD(t, s, i), l = a.length, c = (u) => {
    if (r && u < e[0])
      return t[0];
    let h = 0;
    if (l > 1)
      for (; h < e.length - 2 && !(u < e[h + 1]); h++)
        ;
    const d = /* @__PURE__ */ ks(e[h], e[h + 1], u);
    return a[h](d);
  };
  return n ? (u) => c(hn(e[0], e[o - 1], u)) : c;
}
function sD(e, t) {
  const n = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const i = /* @__PURE__ */ ks(0, t, s);
    e.push(jt(n, 1, i));
  }
}
function iD(e) {
  const t = [0];
  return sD(t, e.length - 1), t;
}
function oD(e, t) {
  return e.map((n) => n * t);
}
function rD(e, t) {
  return e.map(() => t || Sm).splice(0, e.length - 1);
}
function ci({ duration: e = 300, keyframes: t, times: n, ease: s = "easeInOut" }) {
  const i = tD(s) ? s.map(bd) : bd(s), o = {
    done: !1,
    value: t[0]
  }, r = oD(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : iD(t),
    e
  ), a = nD(r, t, {
    ease: Array.isArray(i) ? i : rD(t, i)
  });
  return {
    calculatedDuration: e,
    next: (l) => (o.value = a(l), o.done = l >= e, o)
  };
}
const aD = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Mt.update(t, !0),
    stop: () => kn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => te.isProcessing ? te.timestamp : Ge.now()
  };
}, lD = {
  decay: md,
  inertia: md,
  tween: ci,
  keyframes: ci,
  spring: _m
}, cD = (e) => e / 100;
class Sc extends ym {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options, r = (i == null ? void 0 : i.KeyframeResolver) || vc, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new r(o, a, n, s, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = this.options, a = cc(n) ? n : lD[n] || ci;
    let l, c;
    process.env.NODE_ENV !== "production" && a !== ci && Cn(t.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), a !== ci && typeof t[0] != "number" && (l = Wi(cD, xm(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    o === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = Bg(u));
    const { calculatedDuration: h } = u, d = h + i, f = d * (s + 1) - i;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
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
    const { finalKeyframe: i, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: h } = s;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: f, repeatType: p, repeatDelay: g, onUpdate: m } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const y = this.currentTime - d * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? y < 0 : y > u;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let S = this.currentTime, _ = o;
    if (f) {
      const P = Math.min(this.currentTime, u) / h;
      let M = Math.floor(P), T = P % 1;
      !T && P >= 1 && (T = 1), T === 1 && M--, M = Math.min(M, f + 1), !!(M % 2) && (p === "reverse" ? (T = 1 - T, g && (T -= g / h)) : p === "mirror" && (_ = r)), S = hn(0, 1, T) * h;
    }
    const x = b ? { done: !1, value: l[0] } : _.next(S);
    a && (x.value = a(x.value));
    let { done: w } = x;
    !b && c !== null && (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && w);
    return A && i !== void 0 && (x.value = Tr(l, this.options, i)), m && m(x.value), A && this.finish(), x;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ cn(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ cn(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Ke(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ cn(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = aD, onPlay: n, startTime: s } = this.options;
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
const uD = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function hD(e, t, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = Hg(a, i);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: s,
    duration: i,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const dD = /* @__PURE__ */ Kl(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Jo = 10, fD = 2e4;
function pD(e) {
  return cc(e.type) || e.type === "spring" || !$g(e.ease);
}
function gD(e, t) {
  const n = new Sc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !s.done && o < fD; )
    s = n.sample(o), i.push(s.value), o += Jo;
  return {
    times: void 0,
    keyframes: i,
    duration: o - Jo,
    ease: "linear"
  };
}
const wm = {
  anticipate: tm,
  backInOut: Jg,
  circInOut: nm
};
function mD(e) {
  return e in wm;
}
class xd extends ym {
  constructor(t) {
    super(t);
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options;
    this.resolver = new mm(o, (r, a) => this.onKeyframesResolved(r, a), n, s, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: s = 300, times: i, ease: o, type: r, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && Zo() && mD(o) && (o = wm[o]), pD(this.options)) {
      const { onComplete: h, onUpdate: d, motionValue: f, element: p, ...g } = this.options, m = gD(t, g);
      t = m.keyframes, t.length === 1 && (t[1] = t[0]), s = m.duration, i = m.times, o = m.ease, r = "keyframes";
    }
    const u = hD(a.owner.current, l, t, { ...this.options, duration: s, times: i, ease: o });
    return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (ed(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: h } = this.options;
      a.set(Tr(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ cn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ cn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.currentTime = /* @__PURE__ */ Ke(t);
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
        return me;
      const { animation: s } = n;
      ed(s, t);
    }
    return me;
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
      const { motionValue: c, onUpdate: u, onComplete: h, element: d, ...f } = this.options, p = new Sc({
        ...f,
        keyframes: s,
        duration: i,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), g = /* @__PURE__ */ Ke(this.time);
      c.setWithVelocity(p.sample(g - Jo).value, p.sample(g).value, Jo);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
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
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return dD() && s && uD.has(s) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !i && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const yD = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, bD = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), xD = {
  type: "keyframes",
  duration: 0.8
}, vD = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, _D = (e, { keyframes: t }) => t.length > 2 ? xD : rs.has(e) ? e.startsWith("scale") ? bD(t[1]) : yD : vD;
function SD({ when: e, delay: t, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const wc = (e, t, n, s = {}, i, o) => (r) => {
  const a = lc(s, e) || {}, l = a.delay || s.delay || 0;
  let { elapsed: c = 0 } = s;
  c = c - /* @__PURE__ */ Ke(l);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
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
  SD(a) || (u = {
    ...u,
    ..._D(e, u)
  }), u.duration && (u.duration = /* @__PURE__ */ Ke(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Ke(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (h = !0)), h && !o && t.get() !== void 0) {
    const d = Tr(u.keyframes, a);
    if (d !== void 0)
      return Mt.update(() => {
        u.onUpdate(d), u.onComplete();
      }), new $T([]);
  }
  return !o && xd.supports(u) ? new xd(u) : new Sc(u);
};
function wD({ protectedKeys: e, needsAnimating: t }, n) {
  const s = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, s;
}
function Am(e, t, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var o;
  let { transition: r = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  s && (r = s);
  const c = [], u = i && e.animationState && e.animationState.getState()[i];
  for (const h in l) {
    const d = e.getValue(h, (o = e.latestValues[h]) !== null && o !== void 0 ? o : null), f = l[h];
    if (f === void 0 || u && wD(u, h))
      continue;
    const p = {
      delay: n,
      ...lc(r || {}, h)
    };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const y = Xg(e);
      if (y) {
        const b = window.MotionHandoffAnimation(y, h, Mt);
        b !== null && (p.startTime = b, g = !0);
      }
    }
    Xa(e, h), d.start(wc(h, d, f, e.shouldReduceMotion && Yg.has(h) ? { type: !1 } : p, e, g));
    const m = d.animation;
    m && c.push(m);
  }
  return a && Promise.all(c).then(() => {
    Mt.update(() => {
      a && eM(e, a);
    });
  }), c;
}
function el(e, t, n = {}) {
  var s;
  const i = Oi(e, t, n.type === "exit" ? (s = e.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = i ? () => Promise.all(Am(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: h, staggerDirection: d } = o;
    return AD(e, t, u + c, h, d, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [r, a] : [a, r];
    return c().then(() => u());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function AD(e, t, n = 0, s = 0, i = 1, o) {
  const r = [], a = (e.variantChildren.size - 1) * s, l = i === 1 ? (c = 0) => c * s : (c = 0) => a - c * s;
  return Array.from(e.variantChildren).sort(PD).forEach((c, u) => {
    c.notify("AnimationStart", t), r.push(el(c, t, {
      ...o,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(r);
}
function PD(e, t) {
  return e.sortNodePosition(t);
}
function TD(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let s;
  if (Array.isArray(t)) {
    const i = t.map((o) => el(e, o, n));
    s = Promise.all(i);
  } else if (typeof t == "string")
    s = el(e, t, n);
  else {
    const i = typeof t == "function" ? Oi(e, t, n.custom) : t;
    s = Promise.all(Am(e, i, n));
  }
  return s.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Pm(e, t) {
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
const MD = Gl.length;
function Tm(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Tm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < MD; n++) {
    const s = Gl[n], i = e.props[s];
    (Ci(i) || i === !1) && (t[s] = i);
  }
  return t;
}
const DD = [...Xl].reverse(), CD = Xl.length;
function kD(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: s }) => TD(e, n, s)));
}
function ED(e) {
  let t = kD(e), n = vd(), s = !0;
  const i = (l) => (c, u) => {
    var h;
    const d = Oi(e, u, l === "exit" ? (h = e.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
    if (d) {
      const { transition: f, transitionEnd: p, ...g } = d;
      c = { ...c, ...g, ...p };
    }
    return c;
  };
  function o(l) {
    t = l(e);
  }
  function r(l) {
    const { props: c } = e, u = Tm(e.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let f = {}, p = 1 / 0;
    for (let m = 0; m < CD; m++) {
      const y = DD[m], b = n[y], S = c[y] !== void 0 ? c[y] : u[y], _ = Ci(S), x = y === l ? b.isActive : null;
      x === !1 && (p = m);
      let w = S === u[y] && S !== c[y] && _;
      if (w && s && e.manuallyAnimateOnMount && (w = !1), b.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && x === null || // If we didn't and don't have any defined prop for this animation type
      !S && !b.prevProp || // Or if the prop doesn't define an animation
      Ar(S) || typeof S == "boolean")
        continue;
      const A = OD(b.prevProp, S);
      let P = A || // If we're making this variant active, we want to always make it active
      y === l && b.isActive && !w && _ || // If we removed a higher-priority variant (i is in reverse order)
      m > p && _, M = !1;
      const T = Array.isArray(S) ? S : [S];
      let C = T.reduce(i(y), {});
      x === !1 && (C = {});
      const { prevResolvedValues: D = {} } = b, I = {
        ...D,
        ...C
      }, Z = (z) => {
        P = !0, d.has(z) && (M = !0, d.delete(z)), b.needsAnimating[z] = !0;
        const Q = e.getValue(z);
        Q && (Q.liveStyle = !1);
      };
      for (const z in I) {
        const Q = C[z], J = D[z];
        if (f.hasOwnProperty(z))
          continue;
        let ot = !1;
        Ua(Q) && Ua(J) ? ot = !Pm(Q, J) : ot = Q !== J, ot ? Q != null ? Z(z) : d.add(z) : Q !== void 0 && d.has(z) ? Z(z) : b.protectedKeys[z] = !0;
      }
      b.prevProp = S, b.prevResolvedValues = C, b.isActive && (f = { ...f, ...C }), s && e.blockInitialAnimation && (P = !1), P && (!(w && A) || M) && h.push(...T.map((z) => ({
        animation: z,
        options: { type: y }
      })));
    }
    if (d.size) {
      const m = {};
      if (typeof c.initial != "boolean") {
        const y = Oi(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        y && y.transition && (m.transition = y.transition);
      }
      d.forEach((y) => {
        const b = e.getBaseTarget(y), S = e.getValue(y);
        S && (S.liveStyle = !0), m[y] = b ?? null;
      }), h.push({ animation: m });
    }
    let g = !!h.length;
    return s && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (g = !1), s = !1, g ? t(h) : Promise.resolve();
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((d) => {
      var f;
      return (f = d.animationState) === null || f === void 0 ? void 0 : f.setActive(l, c);
    }), n[l].isActive = c;
    const h = r(l);
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
      n = vd(), s = !0;
    }
  };
}
function OD(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Pm(t, e) : !1;
}
function Hn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function vd() {
  return {
    animate: Hn(!0),
    whileInView: Hn(),
    whileHover: Hn(),
    whileTap: Hn(),
    whileDrag: Hn(),
    whileFocus: Hn(),
    exit: Hn()
  };
}
class Ln {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class RD extends Ln {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = ED(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ar(t) && (this.unmountControls = t.subscribe(this.node));
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
let LD = 0;
class ID extends Ln {
  constructor() {
    super(...arguments), this.id = LD++;
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
const VD = {
  animation: {
    Feature: RD
  },
  exit: {
    Feature: ID
  }
};
function Ii(e, t, n, s = { passive: !0 }) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n);
}
function Ui(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const FD = (e) => (t) => hc(t) && e(t, Ui(t));
function ui(e, t, n, s) {
  return Ii(e, t, FD(n), s);
}
const _d = (e, t) => Math.abs(e - t);
function ND(e, t) {
  const n = _d(e.x, t.x), s = _d(e.y, t.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Mm {
  constructor(t, n, { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = na(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = ND(h.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = h, { timestamp: g } = te;
      this.history.push({ ...p, timestamp: g });
      const { onStart: m, onMove: y } = this.handlers;
      d || (m && m(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, d) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = ea(d, this.transformPagePoint), Mt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, d) => {
      this.end();
      const { onEnd: f, onSessionEnd: p, resumeAnimation: g } = this.handlers;
      if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const m = na(h.type === "pointercancel" ? this.lastMoveEventInfo : ea(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(h, m), p && p(h, m);
    }, !hc(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
    const r = Ui(t), a = ea(r, this.transformPagePoint), { point: l } = a, { timestamp: c } = te;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, na(a, this.history)), this.removeListeners = Wi(ui(this.contextWindow, "pointermove", this.handlePointerMove), ui(this.contextWindow, "pointerup", this.handlePointerUp), ui(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), kn(this.updatePoint);
  }
}
function ea(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Sd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function na({ point: e }, t) {
  return {
    point: e,
    delta: Sd(e, Dm(t)),
    offset: Sd(e, BD(t)),
    velocity: jD(t, 0.1)
  };
}
function BD(e) {
  return e[0];
}
function Dm(e) {
  return e[e.length - 1];
}
function jD(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, s = null;
  const i = Dm(e);
  for (; n >= 0 && (s = e[n], !(i.timestamp - s.timestamp > /* @__PURE__ */ Ke(t))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ cn(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
const Cm = 1e-4, $D = 1 - Cm, HD = 1 + Cm, km = 0.01, zD = 0 - km, WD = 0 + km;
function ue(e) {
  return e.max - e.min;
}
function UD(e, t, n) {
  return Math.abs(e - t) <= n;
}
function wd(e, t, n, s = 0.5) {
  e.origin = s, e.originPoint = jt(t.min, t.max, e.origin), e.scale = ue(n) / ue(t), e.translate = jt(n.min, n.max, e.origin) - e.originPoint, (e.scale >= $D && e.scale <= HD || isNaN(e.scale)) && (e.scale = 1), (e.translate >= zD && e.translate <= WD || isNaN(e.translate)) && (e.translate = 0);
}
function hi(e, t, n, s) {
  wd(e.x, t.x, n.x, s ? s.originX : void 0), wd(e.y, t.y, n.y, s ? s.originY : void 0);
}
function Ad(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ue(t);
}
function YD(e, t, n) {
  Ad(e.x, t.x, n.x), Ad(e.y, t.y, n.y);
}
function Pd(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ue(t);
}
function di(e, t, n) {
  Pd(e.x, t.x, n.x), Pd(e.y, t.y, n.y);
}
function KD(e, { min: t, max: n }, s) {
  return t !== void 0 && e < t ? e = s ? jt(t, e, s.min) : Math.max(e, t) : n !== void 0 && e > n && (e = s ? jt(n, e, s.max) : Math.min(e, n)), e;
}
function Td(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function XD(e, { top: t, left: n, bottom: s, right: i }) {
  return {
    x: Td(e.x, n, i),
    y: Td(e.y, t, s)
  };
}
function Md(e, t) {
  let n = t.min - e.min, s = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, s] = [s, n]), { min: n, max: s };
}
function GD(e, t) {
  return {
    x: Md(e.x, t.x),
    y: Md(e.y, t.y)
  };
}
function qD(e, t) {
  let n = 0.5;
  const s = ue(e), i = ue(t);
  return i > s ? n = /* @__PURE__ */ ks(t.min, t.max - s, e.min) : s > i && (n = /* @__PURE__ */ ks(e.min, e.max - i, t.min)), hn(0, 1, n);
}
function ZD(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const nl = 0.35;
function QD(e = nl) {
  return e === !1 ? e = 0 : e === !0 && (e = nl), {
    x: Dd(e, "left", "right"),
    y: Dd(e, "top", "bottom")
  };
}
function Dd(e, t, n) {
  return {
    min: Cd(e, t),
    max: Cd(e, n)
  };
}
function Cd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const kd = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ys = () => ({
  x: kd(),
  y: kd()
}), Ed = () => ({ min: 0, max: 0 }), Wt = () => ({
  x: Ed(),
  y: Ed()
});
function ke(e) {
  return [e("x"), e("y")];
}
function Em({ top: e, left: t, right: n, bottom: s }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: s }
  };
}
function JD({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function tC(e, t) {
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
function sa(e) {
  return e === void 0 || e === 1;
}
function sl({ scale: e, scaleX: t, scaleY: n }) {
  return !sa(e) || !sa(t) || !sa(n);
}
function Un(e) {
  return sl(e) || Om(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Om(e) {
  return Od(e.x) || Od(e.y);
}
function Od(e) {
  return e && e !== "0%";
}
function tr(e, t, n) {
  const s = e - n, i = t * s;
  return n + i;
}
function Rd(e, t, n, s, i) {
  return i !== void 0 && (e = tr(e, i, s)), tr(e, n, s) + t;
}
function il(e, t = 0, n = 1, s, i) {
  e.min = Rd(e.min, t, n, s, i), e.max = Rd(e.max, t, n, s, i);
}
function Rm(e, { x: t, y: n }) {
  il(e.x, t.translate, t.scale, t.originPoint), il(e.y, n.translate, n.scale, n.originPoint);
}
const Ld = 0.999999999999, Id = 1.0000000000001;
function eC(e, t, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && xs(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (t.x *= r.x.scale, t.y *= r.y.scale, Rm(e, r)), s && Un(o.latestValues) && xs(e, o.latestValues));
  }
  t.x < Id && t.x > Ld && (t.x = 1), t.y < Id && t.y > Ld && (t.y = 1);
}
function bs(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Vd(e, t, n, s, i = 0.5) {
  const o = jt(e.min, e.max, i);
  il(e, t, n, o, s);
}
function xs(e, t) {
  Vd(e.x, t.x, t.scaleX, t.scale, t.originX), Vd(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Lm(e, t) {
  return Em(tC(e.getBoundingClientRect(), t));
}
function nC(e, t, n) {
  const s = Lm(e, n), { scroll: i } = t;
  return i && (bs(s.x, i.offset.x), bs(s.y, i.offset.y)), s;
}
const Im = ({ current: e }) => e ? e.ownerDocument.defaultView : null, sC = /* @__PURE__ */ new WeakMap();
class iC {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Wt(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (u) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ui(u).point);
    }, o = (u, h) => {
      const { drag: d, dragPropagation: f, onDragStart: p } = this.getProps();
      if (d && !f && (this.openDragLock && this.openDragLock(), this.openDragLock = qT(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ke((m) => {
        let y = this.getAxisMotionValue(m).get() || 0;
        if (Xe.test(y)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const S = b.layout.layoutBox[m];
            S && (y = ue(S) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[m] = y;
      }), p && Mt.postRender(() => p(u, h)), Xa(this.visualElement, "transform");
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", !0);
    }, r = (u, h) => {
      const { dragPropagation: d, dragDirectionLock: f, onDirectionLock: p, onDrag: g } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: m } = h;
      if (f && this.currentDirection === null) {
        this.currentDirection = oC(m), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, m), this.updateAxis("y", h.point, m), this.visualElement.render(), g && g(u, h);
    }, a = (u, h) => this.stop(u, h), l = () => ke((u) => {
      var h;
      return this.getAnimationState(u) === "paused" && ((h = this.getAxisMotionValue(u).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Mm(t, {
      onSessionStart: i,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: Im(this.visualElement)
    });
  }
  stop(t, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && Mt.postRender(() => o(t, n));
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
    if (!s || !go(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let r = this.originPoint[t] + s[t];
    this.constraints && this.constraints[t] && (r = KD(r, this.constraints[t], this.elastic[t])), o.set(r);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
    n && gs(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = XD(i.layoutBox, n) : this.constraints = !1, this.elastic = QD(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && ke((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = ZD(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !gs(t))
      return !1;
    const s = t.current;
    Cn(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = nC(s, i.root, this.visualElement.getTransformPagePoint());
    let r = GD(i.layout.layoutBox, o);
    if (n) {
      const a = n(JD(r));
      this.hasMutatedConstraints = !!a, a && (r = Em(a));
    }
    return r;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = ke((u) => {
      if (!go(u, n, this.currentDirection))
        return;
      let h = l && l[u] || {};
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
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const s = this.getAxisMotionValue(t);
    return Xa(this.visualElement, t), s.start(wc(t, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ke((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ke((t) => {
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
    ke((n) => {
      const { drag: s } = this.getProps();
      if (!go(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - jt(r, a, 0.5));
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
    if (!gs(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ke((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = qD({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), ke((r) => {
      if (!go(r, t, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: c } = this.constraints[r];
      a.set(jt(l, c, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    sC.set(this.visualElement, this);
    const t = this.visualElement.current, n = ui(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      gs(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), Mt.read(s);
    const r = Ii(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (ke((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += l[u].translate, h.set(h.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = nl, dragMomentum: a = !0 } = t;
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
function go(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function oC(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class rC extends Ln {
  constructor(t) {
    super(t), this.removeGroupControls = me, this.removeListeners = me, this.controls = new iC(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || me;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Fd = (e) => (t, n) => {
  e && Mt.postRender(() => e(t, n));
};
class aC extends Ln {
  constructor() {
    super(...arguments), this.removePointerDownListener = me;
  }
  onPointerDown(t) {
    this.session = new Mm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Im(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Fd(t),
      onStart: Fd(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && Mt.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ui(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Eo = {
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
function Nd(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ys = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (nt.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Nd(e, t.target.x), s = Nd(e, t.target.y);
    return `${n}% ${s}%`;
  }
}, lC = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const s = e, i = En.parse(e);
    if (i.length > 5)
      return s;
    const o = En.createTransformer(e), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    i[0 + r] /= a, i[1 + r] /= l;
    const c = jt(a, l, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= c), typeof i[3 + r] == "number" && (i[3 + r] /= c), o(i);
  }
};
class cC extends ny {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = t;
    pT(uC), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Eo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, r = s.projection;
    return r && (r.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? r.promote() : r.relegate() || Mt.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Zl.postRender(() => {
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
function Vm(e) {
  const [t, n] = bg(), s = Yt(zl);
  return L.jsx(cC, { ...e, layoutGroup: s, switchLayoutGroup: Yt(Tg), isPresent: t, safeToRemove: n });
}
const uC = {
  borderRadius: {
    ...Ys,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ys,
  borderTopRightRadius: Ys,
  borderBottomLeftRadius: Ys,
  borderBottomRightRadius: Ys,
  boxShadow: lC
};
function hC(e, t, n) {
  const s = re(e) ? e : Ri(e);
  return s.start(wc("", s, t, n)), s.animation;
}
function dC(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const fC = (e, t) => e.depth - t.depth;
class pC {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    dc(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    fc(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(fC), this.isDirty = !1, this.children.forEach(t);
  }
}
function gC(e, t) {
  const n = Ge.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= t && (kn(s), e(o - t));
  };
  return Mt.read(s, !0), () => kn(s);
}
const Fm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], mC = Fm.length, Bd = (e) => typeof e == "string" ? parseFloat(e) : e, jd = (e) => typeof e == "number" || nt.test(e);
function yC(e, t, n, s, i, o) {
  i ? (e.opacity = jt(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    bC(s)
  ), e.opacityExit = jt(t.opacity !== void 0 ? t.opacity : 1, 0, xC(s))) : o && (e.opacity = jt(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let r = 0; r < mC; r++) {
    const a = `border${Fm[r]}Radius`;
    let l = $d(t, a), c = $d(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || jd(l) === jd(c) ? (e[a] = Math.max(jt(Bd(l), Bd(c), s), 0), (Xe.test(c) || Xe.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = jt(t.rotate || 0, n.rotate || 0, s));
}
function $d(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const bC = /* @__PURE__ */ Nm(0, 0.5, em), xC = /* @__PURE__ */ Nm(0.5, 0.95, me);
function Nm(e, t, n) {
  return (s) => s < e ? 0 : s > t ? 1 : n(/* @__PURE__ */ ks(e, t, s));
}
function Hd(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ce(e, t) {
  Hd(e.x, t.x), Hd(e.y, t.y);
}
function zd(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Wd(e, t, n, s, i) {
  return e -= t, e = tr(e, 1 / n, s), i !== void 0 && (e = tr(e, 1 / i, s)), e;
}
function vC(e, t = 0, n = 1, s = 0.5, i, o = e, r = e) {
  if (Xe.test(t) && (t = parseFloat(t), t = jt(r.min, r.max, t / 100) - r.min), typeof t != "number")
    return;
  let a = jt(o.min, o.max, s);
  e === o && (a -= t), e.min = Wd(e.min, t, n, a, i), e.max = Wd(e.max, t, n, a, i);
}
function Ud(e, t, [n, s, i], o, r) {
  vC(e, t[n], t[s], t[i], t.scale, o, r);
}
const _C = ["x", "scaleX", "originX"], SC = ["y", "scaleY", "originY"];
function Yd(e, t, n, s) {
  Ud(e.x, t, _C, n ? n.x : void 0, s ? s.x : void 0), Ud(e.y, t, SC, n ? n.y : void 0, s ? s.y : void 0);
}
function Kd(e) {
  return e.translate === 0 && e.scale === 1;
}
function Bm(e) {
  return Kd(e.x) && Kd(e.y);
}
function Xd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function wC(e, t) {
  return Xd(e.x, t.x) && Xd(e.y, t.y);
}
function Gd(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function jm(e, t) {
  return Gd(e.x, t.x) && Gd(e.y, t.y);
}
function qd(e) {
  return ue(e.x) / ue(e.y);
}
function Zd(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class AC {
  constructor() {
    this.members = [];
  }
  add(t) {
    dc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (fc(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function PC(e, t, n) {
  let s = "";
  const i = e.x.translate / t.x, o = e.y.translate / t.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (t.x !== 1 || t.y !== 1) && (s += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: h, rotateY: d, skewX: f, skewY: p } = n;
    c && (s = `perspective(${c}px) ${s}`), u && (s += `rotate(${u}deg) `), h && (s += `rotateX(${h}deg) `), d && (s += `rotateY(${d}deg) `), f && (s += `skewX(${f}deg) `), p && (s += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const ia = ["", "X", "Y", "Z"], TC = { visibility: "hidden" }, Qd = 1e3;
let MC = 0;
function oa(e, t, n, s) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), s && (s[e] = 0));
}
function $m(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Xg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Mt, !(i || o));
  }
  const { parent: s } = e;
  s && !s.hasCheckedOptimisedAppear && $m(s);
}
function Hm({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = t == null ? void 0 : t()) {
      this.id = MC++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(kC), this.nodes.forEach(IC), this.nodes.forEach(VC), this.nodes.forEach(EC);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new pC());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new pc()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
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
      this.isSVG = dC(r), this.instance = r;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let h;
        const d = () => this.root.updateBlockedByResize = !1;
        e(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = gC(d, 250), Eo.hasAnimatedSinceResize && (Eo.hasAnimatedSinceResize = !1, this.nodes.forEach(tf));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || u.getDefaultTransition() || $C, { onLayoutAnimationStart: m, onLayoutAnimationComplete: y } = u.getProps(), b = !this.targetLayout || !jm(this.targetLayout, p), S = !d && f;
        if (this.options.layoutRoot || this.resumeFrom || S || d && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, S);
          const _ = {
            ...lc(g, "layout"),
            onPlay: m,
            onComplete: y
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0, _.type = !1), this.startAnimation(_);
        } else
          d || tf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, kn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(FC), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && $m(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Jd);
        return;
      }
      this.isUpdating || this.nodes.forEach(RC), this.isUpdating = !1, this.nodes.forEach(LC), this.nodes.forEach(DC), this.nodes.forEach(CC), this.clearAllSnapshots();
      const a = Ge.now();
      te.delta = hn(0, 1e3 / 60, a - te.timestamp), te.timestamp = a, te.isProcessing = !0, qr.update.process(te), qr.preRender.process(te), qr.render.process(te), te.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Zl.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(OC), this.sharedNodes.forEach(NC);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Mt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Mt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ue(this.snapshot.measuredBox.x) && !ue(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Wt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Bm(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      r && (a || Un(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), HC(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var r;
      const { visualElement: a } = this.options;
      if (!a)
        return Wt();
      const l = a.measureViewportBox();
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(zC))) {
        const { scroll: u } = this.root;
        u && (bs(l.x, u.offset.x), bs(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      var a;
      const l = Wt();
      if (Ce(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: h, options: d } = u;
        u !== this.root && h && d.layoutScroll && (h.wasRoot && Ce(l, r), bs(l.x, h.offset.x), bs(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(r, a = !1) {
      const l = Wt();
      Ce(l, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && xs(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Un(u.latestValues) && xs(l, u.latestValues);
      }
      return Un(this.latestValues) && xs(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = Wt();
      Ce(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Un(c.latestValues))
          continue;
        sl(c.latestValues) && c.updateSnapshot();
        const u = Wt(), h = c.measurePageBox();
        Ce(u, h), Yd(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Un(this.latestValues) && Yd(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== te.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(r || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (this.resolvedRelativeTargetAt = te.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Wt(), this.relativeTargetOrigin = Wt(), di(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Ce(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Wt(), this.targetWithTransforms = Wt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), YD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ce(this.target, this.layout.layoutBox), Rm(this.target, this.targetDelta)) : Ce(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Wt(), this.relativeTargetOrigin = Wt(), di(this.relativeTargetOrigin, this.target, f.target), Ce(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || sl(this.parent.latestValues) || Om(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === te.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || h))
        return;
      Ce(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, f = this.treeScale.y;
      eC(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Wt());
      const { target: p } = a;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (zd(this.prevProjectionDelta.x, this.projectionDelta.x), zd(this.prevProjectionDelta.y, this.projectionDelta.y)), hi(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !Zd(this.projectionDelta.x, this.prevProjectionDelta.x) || !Zd(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
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
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ys(), this.projectionDelta = ys(), this.projectionDeltaWithTransform = ys();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, h = ys();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = Wt(), f = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, g = f !== p, m = this.getStack(), y = !m || m.members.length <= 1, b = !!(g && !y && this.options.crossfade === !0 && !this.path.some(jC));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (_) => {
        const x = _ / 1e3;
        ef(h.x, r.x, x), ef(h.y, r.y, x), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (di(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), BC(this.relativeTarget, this.relativeTargetOrigin, d, x), S && wC(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = Wt()), Ce(S, this.relativeTarget)), g && (this.animationValues = u, yC(u, c, this.latestValues, x, b, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = x;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (kn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Mt.update(() => {
        Eo.hasAnimatedSinceResize = !0, this.currentAnimation = hC(0, Qd, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Qd), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = r;
      if (!(!a || !l || !c)) {
        if (this !== r && this.layout && c && zm(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Wt();
          const h = ue(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const d = ue(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + d;
        }
        Ce(a, l), xs(a, u), hi(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new AC()), this.sharedNodes.get(r).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
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
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
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
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && oa("z", r, c, this.animationValues);
      for (let u = 0; u < ia.length; u++)
        oa(`rotate${ia[u]}`, r, c, this.animationValues), oa(`skew${ia[u]}`, r, c, this.animationValues);
      r.render();
      for (const u in c)
        r.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return TC;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Co(r == null ? void 0 : r.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = Co(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !Un(this.latestValues) && (g.transform = u ? u({}, "") : "none", this.hasProjected = !1), g;
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), c.transform = PC(this.projectionDeltaWithTransform, this.treeScale, d), u && (c.transform = u(d, c.transform));
      const { x: f, y: p } = this.projectionDelta;
      c.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`, h.animationValues ? c.opacity = h === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const g in ki) {
        if (d[g] === void 0)
          continue;
        const { correct: m, applyTo: y, isCSSVariable: b } = ki[g], S = c.transform === "none" ? d[g] : m(d[g], h);
        if (y) {
          const _ = y.length;
          for (let x = 0; x < _; x++)
            c[y[x]] = S;
        } else
          b ? this.options.visualElement.renderState.vars[g] = S : c[g] = S;
      }
      return this.options.layoutId && (c.pointerEvents = h === this ? Co(r == null ? void 0 : r.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Jd), this.root.sharedNodes.clear();
    }
  };
}
function DC(e) {
  e.updateLayout();
}
function CC(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = e.layout, { animationType: o } = e.options, r = n.source !== e.layout.source;
    o === "size" ? ke((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], f = ue(d);
      d.min = s[h].min, d.max = d.min + f;
    }) : zm(o, n.layoutBox, s) && ke((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], f = ue(s[h]);
      d.max = d.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[h].max = e.relativeTarget[h].min + f);
    });
    const a = ys();
    hi(a, s, n.layoutBox);
    const l = ys();
    r ? hi(l, e.applyTransform(i, !0), n.measuredBox) : hi(l, s, n.layoutBox);
    const c = !Bm(a);
    let u = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: f } = h;
        if (d && f) {
          const p = Wt();
          di(p, n.layoutBox, d.layoutBox);
          const g = Wt();
          di(g, s, f.layoutBox), jm(p, g) || (u = !0), h.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = p, e.relativeParent = h);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: s } = e.options;
    s && s();
  }
  e.options.transition = void 0;
}
function kC(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function EC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function OC(e) {
  e.clearSnapshot();
}
function Jd(e) {
  e.clearMeasurements();
}
function RC(e) {
  e.isLayoutDirty = !1;
}
function LC(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function tf(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function IC(e) {
  e.resolveTargetDelta();
}
function VC(e) {
  e.calcProjection();
}
function FC(e) {
  e.resetSkewAndRotation();
}
function NC(e) {
  e.removeLeadSnapshot();
}
function ef(e, t, n) {
  e.translate = jt(t.translate, 0, n), e.scale = jt(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function nf(e, t, n, s) {
  e.min = jt(t.min, n.min, s), e.max = jt(t.max, n.max, s);
}
function BC(e, t, n, s) {
  nf(e.x, t.x, n.x, s), nf(e.y, t.y, n.y, s);
}
function jC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const $C = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, sf = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), of = sf("applewebkit/") && !sf("chrome/") ? Math.round : me;
function rf(e) {
  e.min = of(e.min), e.max = of(e.max);
}
function HC(e) {
  rf(e.x), rf(e.y);
}
function zm(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !UD(qd(t), qd(n), 0.2);
}
function zC(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const WC = Hm({
  attachResizeListener: (e, t) => Ii(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ra = {
  current: void 0
}, Wm = Hm({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ra.current) {
      const e = new WC({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ra.current = e;
    }
    return ra.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), UC = {
  pan: {
    Feature: aC
  },
  drag: {
    Feature: rC,
    ProjectionNode: Wm,
    MeasureLayout: Vm
  }
};
function af(e, t, n) {
  const { props: s } = e;
  e.animationState && s.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && Mt.postRender(() => o(t, Ui(t)));
}
class YC extends Ln {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = UT(t, (n, s) => (af(this.node, s, "Start"), (i) => af(this.node, i, "End"))));
  }
  unmount() {
  }
}
class KC extends Ln {
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
    this.unmount = Wi(Ii(this.node.current, "focus", () => this.onFocus()), Ii(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function lf(e, t, n) {
  const { props: s } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && s.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && Mt.postRender(() => o(t, Ui(t)));
}
class XC extends Ln {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = GT(t, (n, s) => (lf(this.node, s, "Start"), (i, { success: o }) => lf(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const ol = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap(), GC = (e) => {
  const t = ol.get(e.target);
  t && t(e);
}, qC = (e) => {
  e.forEach(GC);
};
function ZC({ root: e, ...t }) {
  const n = e || document;
  aa.has(n) || aa.set(n, {});
  const s = aa.get(n), i = JSON.stringify(t);
  return s[i] || (s[i] = new IntersectionObserver(qC, { root: e, ...t })), s[i];
}
function QC(e, t, n) {
  const s = ZC(t);
  return ol.set(e, n), s.observe(e), () => {
    ol.delete(e), s.unobserve(e);
  };
}
const JC = {
  some: 0,
  all: 1
};
class tk extends Ln {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = t, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : JC[i]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, o && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), d = c ? u : h;
      d && d(l);
    };
    return QC(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(ek(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function ek({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const nk = {
  inView: {
    Feature: tk
  },
  tap: {
    Feature: XC
  },
  focus: {
    Feature: KC
  },
  hover: {
    Feature: YC
  }
}, sk = {
  layout: {
    ProjectionNode: Wm,
    MeasureLayout: Vm
  }
}, rl = { current: null }, Um = { current: !1 };
function ik() {
  if (Um.current = !0, !!Yl)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => rl.current = e.matches;
      e.addListener(t), t();
    } else
      rl.current = !1;
}
const ok = [...gm, ie, En], rk = (e) => ok.find(pm(e)), ak = /* @__PURE__ */ new WeakMap();
function lk(e, t, n) {
  for (const s in t) {
    const i = t[s], o = n[s];
    if (re(i))
      e.addValue(s, i), process.env.NODE_ENV === "development" && Sr(i.version === "12.4.3", `Attempting to mix Motion versions ${i.version} with 12.4.3 may not work as expected.`);
    else if (re(o))
      e.addValue(s, Ri(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(s)) {
        const r = e.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = e.getStaticValue(s);
        e.addValue(s, Ri(r !== void 0 ? r : i, { owner: e }));
      }
  }
  for (const s in n)
    t[s] === void 0 && e.removeValue(s);
  return t;
}
const cf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class ck {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = vc, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = Ge.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, Mt.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: u } = r;
    this.onUpdate = u, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = s, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Pr(n), this.isVariantNode = Ag(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: h, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const p = d[f];
      l[f] !== void 0 && re(p) && p.set(l[f], !1);
    }
  }
  mount(t) {
    this.current = t, ak.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Um.current || ik(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : rl.current, process.env.NODE_ENV !== "production" && Sr(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), kn(this.notifyUpdate), kn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const s = rs.has(t);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && Mt.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in Es) {
      const n = Es[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Wt();
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
    for (let s = 0; s < cf.length; s++) {
      const i = cf[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = t[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = lk(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return s === void 0 && n !== void 0 && (s = Ri(n === null ? void 0 : n, { owner: this }), this.addValue(t, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var s;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (s = this.getBaseTargetFromProps(this.props, t)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (dm(i) || sm(i)) ? i = parseFloat(i) : !rk(i) && En.test(n) && (i = cm(t, n)), this.setBaseTarget(t, re(i) ? i.get() : i)), re(i) ? i.get() : i;
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
      const r = rc(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (i = r[t]);
    }
    if (s && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !re(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new pc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Ym extends ck {
  constructor() {
    super(...arguments), this.KeyframeResolver = mm;
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
    re(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function uk(e) {
  return window.getComputedStyle(e);
}
class hk extends Ym {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Ig;
  }
  readValueFromInstance(t, n) {
    if (rs.has(n)) {
      const s = xc(n);
      return s && s.default || 0;
    } else {
      const s = uk(t), i = (Ql(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Lm(t, n);
  }
  build(t, n, s) {
    ec(t, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return ac(t, n, s);
  }
}
class dk extends Ym {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Wt, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && Lg(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (rs.has(n)) {
      const s = xc(n);
      return s && s.default || 0;
    }
    return n = Vg.has(n) ? n : ql(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return Ng(t, n, s);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && Mt.postRender(this.updateDimensions);
  }
  build(t, n, s) {
    ic(t, n, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(t, n, s, i) {
    Fg(t, n, s, i);
  }
  mount(t) {
    this.isSVGTag = oc(t.tagName), super.mount(t);
  }
}
const fk = (e, t) => sc(e) ? new dk(t) : new hk(t, {
  allowProjection: e !== df
}), pk = /* @__PURE__ */ NT({
  ...VD,
  ...nk,
  ...UC,
  ...sk
}, fk), Km = /* @__PURE__ */ tT(pk), Xm = Ze(void 0), Gm = ({
  children: e,
  onClose: t = () => {
  }
}) => {
  const [n, s] = _t(!0), i = () => {
    s(!1), t();
  };
  return /* @__PURE__ */ L.jsx(Xm.Provider, { value: { handleClose: i, isVisible: n, setIsVisible: s }, children: e });
};
Gm.displayName = "HToastPopupProvider";
const gk = ({ children: e, onClose: t }) => /* @__PURE__ */ L.jsx(Gm, { onClose: t, children: /* @__PURE__ */ L.jsx(
  Km.div,
  {
    initial: { opacity: 0, y: 50, height: 0 },
    animate: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.3 },
    layout: !0,
    children: e
  }
) });
gk.displayName = "HToastPopupArea";
const qm = () => {
  const e = Yt(Xm);
  if (!e)
    throw new Error("useToastContext must be used within a ToastPopupProvider");
  return e;
}, mk = ({
  duration: e = 3e3,
  className: t,
  children: n
}) => {
  const { setIsVisible: s, isVisible: i, handleClose: o } = qm();
  return Et(() => {
    const r = setTimeout(() => {
      s(!1), o();
    }, e);
    return () => clearTimeout(r);
  }, [e]), /* @__PURE__ */ L.jsx(vg, { children: i && /* @__PURE__ */ L.jsx(
    Km.div,
    {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: 0.3 },
      className: `rounded-lg shadow-lg overflow-hidden w-full md:w-96 text-[#888] bg-black/70 ${t}`,
      role: "alert",
      "aria-live": "assertive",
      children: n
    }
  ) });
};
mk.displayName = "HToastPopup";
const yk = ({
  className: e,
  children: t,
  style: n
}) => /* @__PURE__ */ L.jsx("div", { style: n, className: `fixed bottom-4 right-4 z-[200] p-4 space-y-4 flex flex-col ${e}`, children: /* @__PURE__ */ L.jsx(vg, { children: /* @__PURE__ */ L.jsx(L.Fragment, { children: t }) }) });
yk.displayName = "HToastPopupContainer";
const bk = ({ children: e, className: t }) => {
  const { handleClose: n } = qm();
  return /* @__PURE__ */ L.jsx(
    "button",
    {
      type: "button",
      onClick: n,
      className: `focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full p-1 text-[#fff] ${t}`,
      "aria-label": "Close",
      children: e
    }
  );
};
bk.displayName = "HToastPopupCloseButton";
const xk = ({ target: e, children: t, className: n, style: s }) => {
  const i = (a) => {
    var l;
    (l = e.current) == null || l.show(a);
  }, o = (a) => {
    var l;
    (l = e.current) == null || l.updatePosition(a);
  }, r = () => {
    var a;
    (a = e.current) == null || a.hide();
  };
  return /* @__PURE__ */ L.jsx(
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
xk.displayName = "HTooltipArea";
const vk = Vi((e, t) => {
  const [n, s] = _t(!1), [i, o] = _t({
    x: 0,
    y: 0
  });
  er(t, () => ({
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
  return n ? /* @__PURE__ */ L.jsx(
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
vk.displayName = "HTooltip";
const _k = Vi((e, t) => {
  const {
    backdrop: n,
    escBeforeFunc: s,
    escAfterFunc: i,
    onBackdropClick: o,
    children: r,
    className: a,
    style: l
  } = e, c = xt(null), u = async () => {
    c.current && c.current.close();
  }, h = () => {
    c.current && c.current.showModal();
  };
  er(t, () => ({
    open: h,
    closeFunc: u
  })), Et(() => (n && document.documentElement.style.setProperty("--modal-backdrop-color", n), () => {
    n && document.documentElement.style.removeProperty("--modal-backdrop-color");
  }), [n]);
  const d = async (p) => {
    p.key === "Escape" && (p.preventDefault(), s && await s(), u(), i && await i());
  }, f = (p) => {
    p.target === c.current && (o == null || o(p));
  };
  return /* @__PURE__ */ L.jsx(
    "dialog",
    {
      ref: c,
      className: `h-modal ${a}`,
      onKeyDown: d,
      onClick: f,
      style: l,
      children: r && r(u)
    }
  );
});
_k.displayName = "HModal";
const Sk = ({
  target: e,
  beforeFunc: t,
  afterFunc: n,
  children: s,
  className: i,
  style: o,
  disabled: r = !1
}) => {
  const a = async () => {
    var l;
    t && await t(), (l = e.current) == null || l.open(), n && n();
  };
  return /* @__PURE__ */ L.jsx("button", { onClick: a, type: "button", className: i, style: o, disabled: r, children: s || "모달 열기" });
};
Sk.displayName = "HModalOpenButton";
const wk = ({
  target: e,
  beforeFunc: t,
  afterFunc: n,
  children: s,
  className: i,
  style: o
}) => {
  const r = async () => {
    var a;
    t && await t(), (a = e.current) == null || a.closeFunc(), n && n();
  };
  return /* @__PURE__ */ L.jsx("button", { onClick: r, type: "button", className: i, style: o, children: s || "닫기" });
};
wk.displayName = "HModalCloseButton";
const Ak = "button", Pk = (e) => {
  const {
    isAuth: t,
    noAuthList: n,
    originalEventTarget: s = Ak,
    originalEventTargetEvent: i = null,
    onAuthVerificationResult: o,
    children: r
  } = e, a = xt(null), l = xt(void 0), c = xt(null), u = () => t ? !(n != null && n.includes(t)) : !0;
  function h(p) {
    var m;
    console.debug(p);
    const g = (m = a.current) == null ? void 0 : m.querySelector(s);
    g && (g.removeEventListener("click", l.current, {
      capture: !0
    }), g.click(), g.addEventListener("click", l.current, {
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
    if (!r || !hf(r)) return r;
    const p = r, g = p.props, m = i ? g[i] : g.onClick;
    return c.current = m || null, sy(p, {
      // ...가능하면 onClick 다시 세팅, etc.
    });
  })();
  return Et(() => {
    const p = a.current;
    if (!p) return;
    const g = p.querySelector(s);
    if (g)
      return l.current = d, g.addEventListener("click", l.current, {
        capture: !0
      }), () => {
        g.removeEventListener(
          "click",
          l.current,
          { capture: !0 }
        );
      };
  }, [t, n, s, i, o, d]), /* @__PURE__ */ L.jsx("div", { ref: a, children: f });
};
Pk.displayName = "AuthVerifyWrapper";
function Tk(e) {
  const {
    data: t,
    value: n,
    inputValue: s,
    onChange: i,
    name: o,
    className: r,
    labelClassName: a,
    inputClassName: l,
    labelStyle: c,
    disabled: u,
    readOnly: h,
    required: d,
    children: f
  } = e, p = nr(), g = n.some((y) => Wa(y, t)), m = () => {
    i(g ? n.filter((y) => !Wa(y, t)) : [...n, t]);
  };
  return /* @__PURE__ */ L.jsxs("div", { className: r, children: [
    /* @__PURE__ */ L.jsx("label", { htmlFor: p, className: a, style: c, children: f }),
    /* @__PURE__ */ L.jsx(
      "input",
      {
        id: p,
        type: "checkbox",
        name: o,
        checked: g,
        onChange: m,
        disabled: u,
        readOnly: h,
        required: d,
        className: `h-input-checkbox ${l}`,
        value: s
      }
    )
  ] });
}
Tk.displayName = "HInputCheckbox";
const Fk = ({ children: e, style: t, className: n }) => /* @__PURE__ */ L.jsx("div", { style: { position: "relative", ...t }, className: n, children: e }), Nk = ({ value: e, style: t, className: n }) => /* @__PURE__ */ L.jsx("div", { style: {
  width: `${e}%`,
  height: "100%",
  ...t
}, className: n });
function Mk(e) {
  return e.tag === "textarea";
}
function Dk(e) {
  return !e.tag || e.tag === "input";
}
const Bk = (e) => {
  const { maxLength: t, onUpdateModelValue: n, value: s } = e, i = s && s.length > t ? s.slice(0, t) : s || "", [o, r] = _t(i.length);
  Et(() => {
    if (s && s.length > t) {
      const h = s.slice(0, t);
      r(h.length), n && n(h);
    } else
      r(s ? s.length : 0);
  }, [s, t, n]);
  const a = xt(null), l = xt(null), c = (h) => {
    let d = h.target.value;
    d.length > t && (d = d.slice(0, t), a.current && (a.current.value = d)), r(d.length), n && n(d);
  }, u = (h) => {
    let d = h.target.value;
    d.length > t && (d = d.slice(0, t), l.current && (l.current.value = d)), r(d.length), n && n(d);
  };
  return Mk(e) ? /* @__PURE__ */ L.jsx("div", { children: e.children({
    currentLength: o,
    maxLength: t,
    inputRef: l,
    onChange: u,
    value: i
  }) }) : Dk(e) ? /* @__PURE__ */ L.jsx("div", { children: e.children({
    currentLength: o,
    maxLength: t,
    inputRef: a,
    onChange: c,
    value: i
  }) }) : null;
};
export {
  cp as CALENDAR_TYPES,
  Si as DATE_AREA_TYPE,
  Rk as HBarChart,
  Pk as HCheckAuth,
  W_ as HDropdownArea,
  Y_ as HDropdownButton,
  U_ as HDropdownItem,
  K_ as HDropdownItemButton,
  ew as HDropdownList,
  Tk as HInputCheckbox,
  _k as HModal,
  wk as HModalCloseButton,
  Sk as HModalOpenButton,
  Ik as HPieChart,
  Fk as HProgress,
  Nk as HProgressBar,
  og as HScrollbars,
  y_ as HSingleDatePickerArea,
  b_ as HSingleDatePickerCalendar,
  v_ as HSingleDatePickerCalendarArea,
  x_ as HSingleDatePickerCalendarDateButton,
  S_ as HSingleDatePickerCalendarMonth,
  __ as HSingleDatePickerCalendarMonthArea,
  A_ as HSingleDatePickerCalendarMonthButton,
  M_ as HSingleDatePickerCalendarYear,
  E_ as HSingleDatePickerCalendarYearArea,
  L_ as HSingleDatePickerCalendarYearButton,
  j_ as HSingleDatePickerInput,
  w_ as HSingleDatePickerMonthButton,
  $_ as HSingleDatePickerMonthNextButton,
  T_ as HSingleDatePickerMonthPrevButton,
  H_ as HSingleDatePickerMonthYearButton,
  C_ as HSingleDatePickerNextButton,
  k_ as HSingleDatePickerPrevButton,
  f_ as HSingleDatePickerRangeArea,
  O_ as HSingleDatePickerYearButton,
  R_ as HSingleDatePickerYearNextButton,
  z_ as HSingleDatePickerYearPrevButton,
  Bk as HTextCounterArea,
  mk as HToastPopup,
  gk as HToastPopupArea,
  bk as HToastPopupCloseButton,
  yk as HToastPopupContainer,
  vk as HTooltip,
  xk as HTooltipArea,
  Lk as checkEqual
};
