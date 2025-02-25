var ty = Object.defineProperty;
var ey = (e, t, n) => t in e ? ty(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var j = (e, t, n) => ey(e, typeof t != "symbol" ? t + "" : t, n);
import * as hl from "react";
import bi, { useRef as mt, useEffect as _t, createContext as Ee, useState as bt, useContext as Wt, useMemo as Ne, forwardRef as Fs, useImperativeHandle as Ts, useId as rr, useInsertionEffect as df, useCallback as dl, Children as ny, isValidElement as ff, useLayoutEffect as sy, Fragment as pf, createElement as iy, Component as oy, cloneElement as ry } from "react";
var qi = { exports: {} }, Ws = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc;
function ay() {
  if (Lc) return Ws;
  Lc = 1;
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
  return Ws.Fragment = t, Ws.jsx = n, Ws.jsxs = n, Ws;
}
var Us = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic;
function ly() {
  return Ic || (Ic = 1, process.env.NODE_ENV !== "production" && function() {
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
        case T:
          return "Profiler";
        case A:
          return "StrictMode";
        case C:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case M:
            return (v.displayName || "Context") + ".Provider";
          case P:
            return (v._context.displayName || "Context") + ".Consumer";
          case D:
            var F = v.render;
            return v = v.displayName, v || (v = F.displayName || F.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case Z:
            return F = v.displayName || null, F !== null ? F : e(v.type) || "Memo";
          case W:
            F = v._payload, v = v._init;
            try {
              return e(v(F));
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
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var H = F.error, st = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return H.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          st
        ), t(v);
      }
    }
    function s() {
    }
    function i() {
      if (Y === 0) {
        k = console.log, X = console.info, B = console.warn, V = console.error, at = console.group, ut = console.groupCollapsed, dt = console.groupEnd;
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
          log: G({}, v, { value: k }),
          info: G({}, v, { value: X }),
          warn: G({}, v, { value: B }),
          error: G({}, v, { value: V }),
          group: G({}, v, { value: at }),
          groupCollapsed: G({}, v, { value: ut }),
          groupEnd: G({}, v, { value: dt })
        });
      }
      0 > Y && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function r(v) {
      if (pt === void 0)
        try {
          throw Error();
        } catch (H) {
          var F = H.stack.trim().match(/\n( *(at )?)/);
          pt = F && F[1] || "", xt = -1 < H.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < H.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + pt + v + xt;
    }
    function a(v, F) {
      if (!v || lt) return "";
      var H = yt.get(v);
      if (H !== void 0) return H;
      lt = !0, H = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var st = null;
      st = J.H, J.H = null, i();
      try {
        var It = {
          DetermineComponentFrameRoot: function() {
            try {
              if (F) {
                var xe = function() {
                  throw Error();
                };
                if (Object.defineProperty(xe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(xe, []);
                  } catch (zt) {
                    var je = zt;
                  }
                  Reflect.construct(v, [], xe);
                } else {
                  try {
                    xe.call();
                  } catch (zt) {
                    je = zt;
                  }
                  v.call(xe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (zt) {
                  je = zt;
                }
                (xe = v()) && typeof xe.catch == "function" && xe.catch(function() {
                });
              }
            } catch (zt) {
              if (zt && je && typeof zt.stack == "string")
                return [zt.stack, je.stack];
            }
            return [null, null];
          }
        };
        It.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var St = Object.getOwnPropertyDescriptor(
          It.DetermineComponentFrameRoot,
          "name"
        );
        St && St.configurable && Object.defineProperty(
          It.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var rt = It.DetermineComponentFrameRoot(), ce = rt[0], ee = rt[1];
        if (ce && ee) {
          var Bt = ce.split(`
`), be = ee.split(`
`);
          for (rt = St = 0; St < Bt.length && !Bt[St].includes(
            "DetermineComponentFrameRoot"
          ); )
            St++;
          for (; rt < be.length && !be[rt].includes(
            "DetermineComponentFrameRoot"
          ); )
            rt++;
          if (St === Bt.length || rt === be.length)
            for (St = Bt.length - 1, rt = be.length - 1; 1 <= St && 0 <= rt && Bt[St] !== be[rt]; )
              rt--;
          for (; 1 <= St && 0 <= rt; St--, rt--)
            if (Bt[St] !== be[rt]) {
              if (St !== 1 || rt !== 1)
                do
                  if (St--, rt--, 0 > rt || Bt[St] !== be[rt]) {
                    var Oe = `
` + Bt[St].replace(
                      " at new ",
                      " at "
                    );
                    return v.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", v.displayName)), typeof v == "function" && yt.set(v, Oe), Oe;
                  }
                while (1 <= St && 0 <= rt);
              break;
            }
        }
      } finally {
        lt = !1, J.H = st, o(), Error.prepareStackTrace = H;
      }
      return Bt = (Bt = v ? v.displayName || v.name : "") ? r(Bt) : "", typeof v == "function" && yt.set(v, Bt), Bt;
    }
    function l(v) {
      if (v == null) return "";
      if (typeof v == "function") {
        var F = v.prototype;
        return a(
          v,
          !(!F || !F.isReactComponent)
        );
      }
      if (typeof v == "string") return r(v);
      switch (v) {
        case C:
          return r("Suspense");
        case I:
          return r("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case D:
            return v = a(v.render, !1), v;
          case Z:
            return l(v.type);
          case W:
            F = v._payload, v = v._init;
            try {
              return l(v(F));
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
        var F = Object.getOwnPropertyDescriptor(v, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function h(v, F) {
      function H() {
        Lt || (Lt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: H,
        configurable: !0
      });
    }
    function d() {
      var v = e(this.type);
      return kt[v] || (kt[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function f(v, F, H, st, It, St) {
      return H = St.ref, v = {
        $$typeof: _,
        type: v,
        key: F,
        props: St,
        _owner: It
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
    function p(v, F, H, st, It, St) {
      if (typeof v == "string" || typeof v == "function" || v === w || v === T || v === A || v === C || v === I || v === U || typeof v == "object" && v !== null && (v.$$typeof === W || v.$$typeof === Z || v.$$typeof === M || v.$$typeof === P || v.$$typeof === D || v.$$typeof === O || v.getModuleId !== void 0)) {
        var rt = F.children;
        if (rt !== void 0)
          if (st)
            if ($(rt)) {
              for (st = 0; st < rt.length; st++)
                g(rt[st], v);
              Object.freeze && Object.freeze(rt);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else g(rt, v);
      } else
        rt = "", (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (rt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), v === null ? st = "null" : $(v) ? st = "array" : v !== void 0 && v.$$typeof === _ ? (st = "<" + (e(v.type) || "Unknown") + " />", rt = " Did you accidentally export a JSX literal instead of a component?") : st = typeof v, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          st,
          rt
        );
      if (ot.call(F, "key")) {
        rt = e(v);
        var ce = Object.keys(F).filter(function(Bt) {
          return Bt !== "key";
        });
        st = 0 < ce.length ? "{key: someKey, " + ce.join(": ..., ") + ": ...}" : "{key: someKey}", Mt[rt + st] || (ce = 0 < ce.length ? "{" + ce.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          st,
          rt,
          ce,
          rt
        ), Mt[rt + st] = !0);
      }
      if (rt = null, H !== void 0 && (n(H), rt = "" + H), u(F) && (n(F.key), rt = "" + F.key), "key" in F) {
        H = {};
        for (var ee in F)
          ee !== "key" && (H[ee] = F[ee]);
      } else H = F;
      return rt && h(
        H,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), f(v, rt, St, It, c(), H);
    }
    function g(v, F) {
      if (typeof v == "object" && v && v.$$typeof !== Gt) {
        if ($(v))
          for (var H = 0; H < v.length; H++) {
            var st = v[H];
            m(st) && y(st, F);
          }
        else if (m(v))
          v._store && (v._store.validated = 1);
        else if (v === null || typeof v != "object" ? H = null : (H = z && v[z] || v["@@iterator"], H = typeof H == "function" ? H : null), typeof H == "function" && H !== v.entries && (H = H.call(v), H !== v))
          for (; !(v = H.next()).done; )
            m(v.value) && y(v.value, F);
      }
    }
    function m(v) {
      return typeof v == "object" && v !== null && v.$$typeof === _;
    }
    function y(v, F) {
      if (v._store && !v._store.validated && v.key == null && (v._store.validated = 1, F = b(F), !Pt[F])) {
        Pt[F] = !0;
        var H = "";
        v && v._owner != null && v._owner !== c() && (H = null, typeof v._owner.tag == "number" ? H = e(v._owner.type) : typeof v._owner.name == "string" && (H = v._owner.name), H = " It was passed a child from " + H + ".");
        var st = J.getCurrentStack;
        J.getCurrentStack = function() {
          var It = l(v.type);
          return st && (It += st() || ""), It;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          H
        ), J.getCurrentStack = st;
      }
    }
    function b(v) {
      var F = "", H = c();
      return H && (H = e(H.type)) && (F = `

Check the render method of \`` + H + "`."), F || (v = e(v)) && (F = `

Check the top-level render call using <` + v + ">."), F;
    }
    var S = bi, _ = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), M = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), z = Symbol.iterator, Q = Symbol.for("react.client.reference"), J = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ot = Object.prototype.hasOwnProperty, G = Object.assign, O = Symbol.for("react.client.reference"), $ = Array.isArray, Y = 0, k, X, B, V, at, ut, dt;
    s.__reactDisabledLog = !0;
    var pt, xt, lt = !1, yt = new (typeof WeakMap == "function" ? WeakMap : Map)(), Gt = Symbol.for("react.client.reference"), Lt, kt = {}, Mt = {}, Pt = {};
    Us.Fragment = w, Us.jsx = function(v, F, H, st, It) {
      return p(v, F, H, !1, st, It);
    }, Us.jsxs = function(v, F, H, st, It) {
      return p(v, F, H, !0, st, It);
    };
  }()), Us;
}
var Fc;
function cy() {
  return Fc || (Fc = 1, process.env.NODE_ENV === "production" ? qi.exports = ay() : qi.exports = ly()), qi.exports;
}
var R = cy();
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function $i(e) {
  return e + 0.5 | 0;
}
const vn = (e, t, n) => Math.max(Math.min(e, n), t);
function Js(e) {
  return vn($i(e * 2.55), 0, 255);
}
function An(e) {
  return vn($i(e * 255), 0, 255);
}
function an(e) {
  return vn($i(e / 2.55) / 100, 0, 1);
}
function Vc(e) {
  return vn($i(e * 100), 0, 100);
}
const Pe = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, fa = [..."0123456789ABCDEF"], uy = (e) => fa[e & 15], hy = (e) => fa[(e & 240) >> 4] + fa[e & 15], Zi = (e) => (e & 240) >> 4 === (e & 15), dy = (e) => Zi(e.r) && Zi(e.g) && Zi(e.b) && Zi(e.a);
function fy(e) {
  var t = e.length, n;
  return e[0] === "#" && (t === 4 || t === 5 ? n = {
    r: 255 & Pe[e[1]] * 17,
    g: 255 & Pe[e[2]] * 17,
    b: 255 & Pe[e[3]] * 17,
    a: t === 5 ? Pe[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (n = {
    r: Pe[e[1]] << 4 | Pe[e[2]],
    g: Pe[e[3]] << 4 | Pe[e[4]],
    b: Pe[e[5]] << 4 | Pe[e[6]],
    a: t === 9 ? Pe[e[7]] << 4 | Pe[e[8]] : 255
  })), n;
}
const py = (e, t) => e < 255 ? t(e) : "";
function gy(e) {
  var t = dy(e) ? uy : hy;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + py(e.a, t) : void 0;
}
const my = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function gf(e, t, n) {
  const s = t * Math.min(n, 1 - n), i = (o, r = (o + e / 30) % 12) => n - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [i(0), i(8), i(4)];
}
function yy(e, t, n) {
  const s = (i, o = (i + e / 60) % 6) => n - n * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function by(e, t, n) {
  const s = gf(e, 1, 0.5);
  let i;
  for (t + n > 1 && (i = 1 / (t + n), t *= i, n *= i), i = 0; i < 3; i++)
    s[i] *= 1 - t - n, s[i] += t;
  return s;
}
function xy(e, t, n, s, i) {
  return e === i ? (t - n) / s + (t < n ? 6 : 0) : t === i ? (n - e) / s + 2 : (e - t) / s + 4;
}
function fl(e) {
  const n = e.r / 255, s = e.g / 255, i = e.b / 255, o = Math.max(n, s, i), r = Math.min(n, s, i), a = (o + r) / 2;
  let l, c, u;
  return o !== r && (u = o - r, c = a > 0.5 ? u / (2 - o - r) : u / (o + r), l = xy(n, s, i, u, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function pl(e, t, n, s) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, s)).map(An);
}
function gl(e, t, n) {
  return pl(gf, e, t, n);
}
function vy(e, t, n) {
  return pl(by, e, t, n);
}
function _y(e, t, n) {
  return pl(yy, e, t, n);
}
function mf(e) {
  return (e % 360 + 360) % 360;
}
function Sy(e) {
  const t = my.exec(e);
  let n = 255, s;
  if (!t)
    return;
  t[5] !== s && (n = t[6] ? Js(+t[5]) : An(+t[5]));
  const i = mf(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = vy(i, o, r) : t[1] === "hsv" ? s = _y(i, o, r) : s = gl(i, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: n
  };
}
function wy(e, t) {
  var n = fl(e);
  n[0] = mf(n[0] + t), n = gl(n), e.r = n[0], e.g = n[1], e.b = n[2];
}
function Ay(e) {
  if (!e)
    return;
  const t = fl(e), n = t[0], s = Vc(t[1]), i = Vc(t[2]);
  return e.a < 255 ? `hsla(${n}, ${s}%, ${i}%, ${an(e.a)})` : `hsl(${n}, ${s}%, ${i}%)`;
}
const Nc = {
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
}, Bc = {
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
function Ty() {
  const e = {}, t = Object.keys(Bc), n = Object.keys(Nc);
  let s, i, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], i = 0; i < n.length; i++)
      o = n[i], a = a.replace(o, Nc[o]);
    o = parseInt(Bc[r], 16), e[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let Qi;
function Py(e) {
  Qi || (Qi = Ty(), Qi.transparent = [0, 0, 0, 0]);
  const t = Qi[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const My = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Cy(e) {
  const t = My.exec(e);
  let n = 255, s, i, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      n = t[8] ? Js(r) : vn(r * 255, 0, 255);
    }
    return s = +t[1], i = +t[3], o = +t[5], s = 255 & (t[2] ? Js(s) : vn(s, 0, 255)), i = 255 & (t[4] ? Js(i) : vn(i, 0, 255)), o = 255 & (t[6] ? Js(o) : vn(o, 0, 255)), {
      r: s,
      g: i,
      b: o,
      a: n
    };
  }
}
function Dy(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${an(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const Rr = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, us = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function ky(e, t, n) {
  const s = us(an(e.r)), i = us(an(e.g)), o = us(an(e.b));
  return {
    r: An(Rr(s + n * (us(an(t.r)) - s))),
    g: An(Rr(i + n * (us(an(t.g)) - i))),
    b: An(Rr(o + n * (us(an(t.b)) - o))),
    a: e.a + n * (t.a - e.a)
  };
}
function Ji(e, t, n) {
  if (e) {
    let s = fl(e);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * n, t === 0 ? 360 : 1)), s = gl(s), e.r = s[0], e.g = s[1], e.b = s[2];
  }
}
function yf(e, t) {
  return e && Object.assign(t || {}, e);
}
function jc(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = An(e[3]))) : (t = yf(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = An(t.a)), t;
}
function Ey(e) {
  return e.charAt(0) === "r" ? Cy(e) : Sy(e);
}
class xi {
  constructor(t) {
    if (t instanceof xi)
      return t;
    const n = typeof t;
    let s;
    n === "object" ? s = jc(t) : n === "string" && (s = fy(t) || Py(t) || Ey(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = yf(this._rgb);
    return t && (t.a = an(t.a)), t;
  }
  set rgb(t) {
    this._rgb = jc(t);
  }
  rgbString() {
    return this._valid ? Dy(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? gy(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Ay(this._rgb) : void 0;
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
    return t && (this._rgb = ky(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new xi(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = An(t), this;
  }
  clearer(t) {
    const n = this._rgb;
    return n.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, n = $i(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return Ji(this._rgb, 2, t), this;
  }
  darken(t) {
    return Ji(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Ji(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Ji(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return wy(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function en() {
}
const Oy = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function ft(e) {
  return e == null;
}
function Vt(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function gt(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function Ut(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function ve(e, t) {
  return Ut(e) ? e : t;
}
function ht(e, t) {
  return typeof e > "u" ? t : e;
}
const Ry = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t, bf = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function Ct(e, t, n) {
  if (e && typeof e.call == "function")
    return e.apply(n, t);
}
function wt(e, t, n, s) {
  let i, o, r;
  if (Vt(e))
    for (o = e.length, i = 0; i < o; i++)
      t.call(n, e[i], i);
  else if (gt(e))
    for (r = Object.keys(e), o = r.length, i = 0; i < o; i++)
      t.call(n, e[r[i]], r[i]);
}
function Fo(e, t) {
  let n, s, i, o;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (n = 0, s = e.length; n < s; ++n)
    if (i = e[n], o = t[n], i.datasetIndex !== o.datasetIndex || i.index !== o.index)
      return !1;
  return !0;
}
function Vo(e) {
  if (Vt(e))
    return e.map(Vo);
  if (gt(e)) {
    const t = /* @__PURE__ */ Object.create(null), n = Object.keys(e), s = n.length;
    let i = 0;
    for (; i < s; ++i)
      t[n[i]] = Vo(e[n[i]]);
    return t;
  }
  return e;
}
function xf(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function Ly(e, t, n, s) {
  if (!xf(e))
    return;
  const i = t[e], o = n[e];
  gt(i) && gt(o) ? vi(i, o, s) : t[e] = Vo(o);
}
function vi(e, t, n) {
  const s = Vt(t) ? t : [
    t
  ], i = s.length;
  if (!gt(e))
    return e;
  n = n || {};
  const o = n.merger || Ly;
  let r;
  for (let a = 0; a < i; ++a) {
    if (r = s[a], !gt(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, u = l.length; c < u; ++c)
      o(l[c], e, r, n);
  }
  return e;
}
function li(e, t) {
  return vi(e, t, {
    merger: Iy
  });
}
function Iy(e, t, n) {
  if (!xf(e))
    return;
  const s = t[e], i = n[e];
  gt(s) && gt(i) ? li(s, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Vo(i));
}
const $c = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function Fy(e) {
  const t = e.split("."), n = [];
  let s = "";
  for (const i of t)
    s += i, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (n.push(s), s = "");
  return n;
}
function Vy(e) {
  const t = Fy(e);
  return (n) => {
    for (const s of t) {
      if (s === "")
        break;
      n = n && n[s];
    }
    return n;
  };
}
function Cn(e, t) {
  return ($c[t] || ($c[t] = Vy(t)))(e);
}
function ml(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const _i = (e) => typeof e < "u", Dn = (e) => typeof e == "function", Hc = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
};
function Ny(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const Rt = Math.PI, Ot = 2 * Rt, By = Ot + Rt, No = Number.POSITIVE_INFINITY, jy = Rt / 180, Kt = Rt / 2, Nn = Rt / 4, zc = Rt * 2 / 3, _n = Math.log10, Ke = Math.sign;
function ci(e, t, n) {
  return Math.abs(e - t) < n;
}
function Wc(e) {
  const t = Math.round(e);
  e = ci(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(_n(e))), s = e / n;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * n;
}
function $y(e) {
  const t = [], n = Math.sqrt(e);
  let s;
  for (s = 1; s < n; s++)
    e % s === 0 && (t.push(s), t.push(e / s));
  return n === (n | 0) && t.push(n), t.sort((i, o) => i - o).pop(), t;
}
function Hy(e) {
  return typeof e == "symbol" || typeof e == "object" && e !== null && !(Symbol.toPrimitive in e || "toString" in e || "valueOf" in e);
}
function Ps(e) {
  return !Hy(e) && !isNaN(parseFloat(e)) && isFinite(e);
}
function zy(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function vf(e, t, n) {
  let s, i, o;
  for (s = 0, i = e.length; s < i; s++)
    o = e[s][n], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Ie(e) {
  return e * (Rt / 180);
}
function yl(e) {
  return e * (180 / Rt);
}
function Uc(e) {
  if (!Ut(e))
    return;
  let t = 1, n = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, n++;
  return n;
}
function _f(e, t) {
  const n = t.x - e.x, s = t.y - e.y, i = Math.sqrt(n * n + s * s);
  let o = Math.atan2(s, n);
  return o < -0.5 * Rt && (o += Ot), {
    angle: o,
    distance: i
  };
}
function pa(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Wy(e, t) {
  return (e - t + By) % Ot - Rt;
}
function Se(e) {
  return (e % Ot + Ot) % Ot;
}
function Si(e, t, n, s) {
  const i = Se(e), o = Se(t), r = Se(n), a = Se(o - i), l = Se(r - i), c = Se(i - o), u = Se(i - r);
  return i === o || i === r || s && o === r || a > l && c < u;
}
function Zt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Uy(e) {
  return Zt(e, -32768, 32767);
}
function ln(e, t, n, s = 1e-6) {
  return e >= Math.min(t, n) - s && e <= Math.max(t, n) + s;
}
function bl(e, t, n) {
  n = n || ((r) => e[r] < t);
  let s = e.length - 1, i = 0, o;
  for (; s - i > 1; )
    o = i + s >> 1, n(o) ? i = o : s = o;
  return {
    lo: i,
    hi: s
  };
}
const cn = (e, t, n, s) => bl(e, n, s ? (i) => {
  const o = e[i][t];
  return o < n || o === n && e[i + 1][t] === n;
} : (i) => e[i][t] < n), Yy = (e, t, n) => bl(e, n, (s) => e[s][t] >= n);
function Ky(e, t, n) {
  let s = 0, i = e.length;
  for (; s < i && e[s] < t; )
    s++;
  for (; i > s && e[i - 1] > n; )
    i--;
  return s > 0 || i < e.length ? e.slice(s, i) : e;
}
const Sf = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Gy(e, t) {
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
  }), Sf.forEach((n) => {
    const s = "_onData" + ml(n), i = e[n];
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
function Yc(e, t) {
  const n = e._chartjs;
  if (!n)
    return;
  const s = n.listeners, i = s.indexOf(t);
  i !== -1 && s.splice(i, 1), !(s.length > 0) && (Sf.forEach((o) => {
    delete e[o];
  }), delete e._chartjs);
}
function wf(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const Af = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function Tf(e, t) {
  let n = [], s = !1;
  return function(...i) {
    n = i, s || (s = !0, Af.call(window, () => {
      s = !1, e.apply(t, n);
    }));
  };
}
function Xy(e, t) {
  let n;
  return function(...s) {
    return t ? (clearTimeout(n), n = setTimeout(e, t, s)) : e.apply(this, s), t;
  };
}
const xl = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", ie = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2, qy = (e, t, n, s) => e === (s ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function Pf(e, t, n) {
  const s = t.length;
  let i = 0, o = s;
  if (e._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = e, c = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null, u = r.axis, { min: h, max: d, minDefined: f, maxDefined: p } = r.getUserBounds();
    if (f) {
      if (i = Math.min(
        // @ts-expect-error Need to type _parsed
        cn(l, u, h).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        n ? s : cn(t, u, r.getPixelForValue(h)).lo
      ), c) {
        const g = l.slice(0, i + 1).reverse().findIndex((m) => !ft(m[a.axis]));
        i -= Math.max(0, g);
      }
      i = Zt(i, 0, s - 1);
    }
    if (p) {
      let g = Math.max(
        // @ts-expect-error Need to type _parsed
        cn(l, r.axis, d, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        n ? 0 : cn(t, u, r.getPixelForValue(d), !0).hi + 1
      );
      if (c) {
        const m = l.slice(g - 1).findIndex((y) => !ft(y[a.axis]));
        g += Math.max(0, m);
      }
      o = Zt(g, i, s) - i;
    } else
      o = s - i;
  }
  return {
    start: i,
    count: o
  };
}
function Mf(e) {
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
const to = (e) => e === 0 || e === 1, Kc = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * Ot / n)), Gc = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * Ot / n) + 1, ui = {
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
  easeInSine: (e) => -Math.cos(e * Kt) + 1,
  easeOutSine: (e) => Math.sin(e * Kt),
  easeInOutSine: (e) => -0.5 * (Math.cos(Rt * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => to(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => to(e) ? e : Kc(e, 0.075, 0.3),
  easeOutElastic: (e) => to(e) ? e : Gc(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return to(e) ? e : e < 0.5 ? 0.5 * Kc(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * Gc(e * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (e) => 1 - ui.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? ui.easeInBounce(e * 2) * 0.5 : ui.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function vl(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Xc(e) {
  return vl(e) ? e : new xi(e);
}
function Lr(e) {
  return vl(e) ? e : new xi(e).saturate(0.5).darken(0.1).hexString();
}
const Zy = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Qy = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Jy(e) {
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
      properties: Qy
    },
    numbers: {
      type: "number",
      properties: Zy
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
function tb(e) {
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
const qc = /* @__PURE__ */ new Map();
function eb(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let s = qc.get(n);
  return s || (s = new Intl.NumberFormat(e, t), qc.set(n, s)), s;
}
function Hi(e, t, n) {
  return eb(t, n).format(e);
}
const Cf = {
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
      (c < 1e-4 || c > 1e15) && (i = "scientific"), o = nb(e, n);
    }
    const r = _n(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: i,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Hi(e, s, l);
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
    ].includes(s) || t > 0.8 * n.length ? Cf.numeric.call(this, e, t, n) : "";
  }
};
function nb(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var ar = {
  formatters: Cf
};
function sb(e) {
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
      callback: ar.formatters.values,
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
const ts = /* @__PURE__ */ Object.create(null), ga = /* @__PURE__ */ Object.create(null);
function hi(e, t) {
  if (!t)
    return e;
  const n = t.split(".");
  for (let s = 0, i = n.length; s < i; ++s) {
    const o = n[s];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function Ir(e, t, n) {
  return typeof t == "string" ? vi(hi(e, t), n) : vi(hi(e, ""), t);
}
class ib {
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, i) => Lr(i.backgroundColor), this.hoverBorderColor = (s, i) => Lr(i.borderColor), this.hoverColor = (s, i) => Lr(i.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(n);
  }
  set(t, n) {
    return Ir(this, t, n);
  }
  get(t) {
    return hi(this, t);
  }
  describe(t, n) {
    return Ir(ga, t, n);
  }
  override(t, n) {
    return Ir(ts, t, n);
  }
  route(t, n, s, i) {
    const o = hi(this, t), r = hi(this, s), a = "_" + n;
    Object.defineProperties(o, {
      [a]: {
        value: o[n],
        writable: !0
      },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[i];
          return gt(l) ? Object.assign({}, c, l) : ht(l, c);
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
var Nt = /* @__PURE__ */ new ib({
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
  Jy,
  tb,
  sb
]);
function ob(e) {
  return !e || ft(e.size) || ft(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function Bo(e, t, n, s, i) {
  let o = t[i];
  return o || (o = t[i] = e.measureText(i).width, n.push(i)), o > s && (s = o), s;
}
function rb(e, t, n, s) {
  s = s || {};
  let i = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (i = s.data = {}, o = s.garbageCollect = [], s.font = t), e.save(), e.font = t;
  let r = 0;
  const a = n.length;
  let l, c, u, h, d;
  for (l = 0; l < a; l++)
    if (h = n[l], h != null && !Vt(h))
      r = Bo(e, i, o, r, h);
    else if (Vt(h))
      for (c = 0, u = h.length; c < u; c++)
        d = h[c], d != null && !Vt(d) && (r = Bo(e, i, o, r, d));
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
function Zc(e, t) {
  !t && !e || (t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore());
}
function ma(e, t, n, s) {
  Df(e, t, n, s, null);
}
function Df(e, t, n, s, i) {
  let o, r, a, l, c, u, h, d;
  const f = t.pointStyle, p = t.rotation, g = t.radius;
  let m = (p || 0) * jy;
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
        u = i ? i / 2 : g, e.moveTo(n + Math.sin(m) * u, s - Math.cos(m) * g), m += zc, e.lineTo(n + Math.sin(m) * u, s - Math.cos(m) * g), m += zc, e.lineTo(n + Math.sin(m) * u, s - Math.cos(m) * g), e.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, r = Math.cos(m + Nn) * l, h = Math.cos(m + Nn) * (i ? i / 2 - c : l), a = Math.sin(m + Nn) * l, d = Math.sin(m + Nn) * (i ? i / 2 - c : l), e.arc(n - h, s - a, c, m - Rt, m - Kt), e.arc(n + d, s - r, c, m - Kt, m), e.arc(n + h, s + a, c, m, m + Kt), e.arc(n - d, s + r, c, m + Kt, m + Rt), e.closePath();
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
function un(e, t, n) {
  return n = n || 0.5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n;
}
function lr(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function cr(e) {
  e.restore();
}
function ab(e, t, n, s, i) {
  if (!t)
    return e.lineTo(n.x, n.y);
  if (i === "middle") {
    const o = (t.x + n.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, n.y);
  } else i === "after" != !!s ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function lb(e, t, n, s) {
  if (!t)
    return e.lineTo(n.x, n.y);
  e.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? n.cp2x : n.cp1x, s ? n.cp2y : n.cp1y, n.x, n.y);
}
function cb(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), ft(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function ub(e, t, n, s, i) {
  if (i.strikethrough || i.underline) {
    const o = e.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = n - o.actualBoundingBoxAscent, c = n + o.actualBoundingBoxDescent, u = i.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(r, u), e.lineTo(a, u), e.stroke();
  }
}
function hb(e, t) {
  const n = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = n;
}
function es(e, t, n, s, i, o = {}) {
  const r = Vt(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = i.string, cb(e, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && hb(e, o.backdrop), a && (o.strokeColor && (e.strokeStyle = o.strokeColor), ft(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, n, s, o.maxWidth)), e.fillText(c, n, s, o.maxWidth), ub(e, n, s, c, o), s += Number(i.lineHeight);
  e.restore();
}
function wi(e, t) {
  const { x: n, y: s, w: i, h: o, radius: r } = t;
  e.arc(n + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * Rt, Rt, !0), e.lineTo(n, s + o - r.bottomLeft), e.arc(n + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, Rt, Kt, !0), e.lineTo(n + i - r.bottomRight, s + o), e.arc(n + i - r.bottomRight, s + o - r.bottomRight, r.bottomRight, Kt, 0, !0), e.lineTo(n + i, s + r.topRight), e.arc(n + i - r.topRight, s + r.topRight, r.topRight, 0, -Kt, !0), e.lineTo(n + r.topLeft, s);
}
const db = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, fb = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function pb(e, t) {
  const n = ("" + e).match(db);
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
const gb = (e) => +e || 0;
function _l(e, t) {
  const n = {}, s = gt(t), i = s ? Object.keys(t) : t, o = gt(e) ? s ? (r) => ht(e[r], e[t[r]]) : (r) => e[r] : () => e;
  for (const r of i)
    n[r] = gb(o(r));
  return n;
}
function kf(e) {
  return _l(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function qn(e) {
  return _l(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function le(e) {
  const t = kf(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Xt(e, t) {
  e = e || {}, t = t || Nt.font;
  let n = ht(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let s = ht(e.style, t.style);
  s && !("" + s).match(fb) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const i = {
    family: ht(e.family, t.family),
    lineHeight: pb(ht(e.lineHeight, t.lineHeight), n),
    size: n,
    style: s,
    weight: ht(e.weight, t.weight),
    string: ""
  };
  return i.string = ob(i), i;
}
function ti(e, t, n, s) {
  let i, o, r;
  for (i = 0, o = e.length; i < o; ++i)
    if (r = e[i], r !== void 0 && r !== void 0)
      return r;
}
function mb(e, t, n) {
  const { min: s, max: i } = e, o = bf(t, (i - s) / 2), r = (a, l) => n && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(i, o)
  };
}
function Rn(e, t) {
  return Object.assign(Object.create(e), t);
}
function Sl(e, t = [
  ""
], n, s, i = () => e[0]) {
  const o = n || e;
  typeof s > "u" && (s = Lf("_fallback", e));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: s,
    _getTarget: i,
    override: (a) => Sl([
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
      return Of(a, l, () => Ab(l, t, e, a));
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
      return Jc(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return Jc(a);
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
function Ms(e, t, n, s) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Ef(e, s),
    setContext: (o) => Ms(e, o, n, s),
    override: (o) => Ms(e.override(o), t, n, s)
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
      return Of(o, r, () => bb(o, r, a));
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
function Ef(e, t = {
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
const yb = (e, t) => e ? e + ml(t) : t, wl = (e, t) => gt(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Of(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const s = n();
  return e[t] = s, s;
}
function bb(e, t, n) {
  const { _proxy: s, _context: i, _subProxy: o, _descriptors: r } = e;
  let a = s[t];
  return Dn(a) && r.isScriptable(t) && (a = xb(t, a, e, n)), Vt(a) && a.length && (a = vb(t, a, e, r.isIndexable)), wl(t, a) && (a = Ms(a, i, o && o[t], r)), a;
}
function xb(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _stack: a } = n;
  if (a.has(e))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
  a.add(e);
  let l = t(o, r || s);
  return a.delete(e), wl(e, l) && (l = Al(i._scopes, i, e, l)), l;
}
function vb(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _descriptors: a } = n;
  if (typeof o.index < "u" && s(e))
    return t[o.index % t.length];
  if (gt(t[0])) {
    const l = t, c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const h = Al(c, i, e, u);
      t.push(Ms(h, o, r && r[e], a));
    }
  }
  return t;
}
function Rf(e, t, n) {
  return Dn(e) ? e(t, n) : e;
}
const _b = (e, t) => e === !0 ? t : typeof e == "string" ? Cn(t, e) : void 0;
function Sb(e, t, n, s, i) {
  for (const o of t) {
    const r = _b(n, o);
    if (r) {
      e.add(r);
      const a = Rf(r._fallback, n, i);
      if (typeof a < "u" && a !== n && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && n !== s)
      return null;
  }
  return !1;
}
function Al(e, t, n, s) {
  const i = t._rootScopes, o = Rf(t._fallback, n, s), r = [
    ...e,
    ...i
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Qc(a, r, n, o || n, s);
  return l === null || typeof o < "u" && o !== n && (l = Qc(a, r, o, l, s), l === null) ? !1 : Sl(Array.from(a), [
    ""
  ], i, o, () => wb(t, n, s));
}
function Qc(e, t, n, s, i) {
  for (; n; )
    n = Sb(e, t, n, s, i);
  return n;
}
function wb(e, t, n) {
  const s = e._getTarget();
  t in s || (s[t] = {});
  const i = s[t];
  return Vt(i) && gt(n) ? n : i || {};
}
function Ab(e, t, n, s) {
  let i;
  for (const o of t)
    if (i = Lf(yb(o, e), n), typeof i < "u")
      return wl(e, i) ? Al(n, s, e, i) : i;
}
function Lf(e, t) {
  for (const n of t) {
    if (!n)
      continue;
    const s = n[e];
    if (typeof s < "u")
      return s;
  }
}
function Jc(e) {
  let t = e._keys;
  return t || (t = e._keys = Tb(e._scopes)), t;
}
function Tb(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const s of Object.keys(n).filter((i) => !i.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function If(e, t, n, s) {
  const { iScale: i } = e, { key: o = "r" } = this._parsing, r = new Array(s);
  let a, l, c, u;
  for (a = 0, l = s; a < l; ++a)
    c = a + n, u = t[c], r[a] = {
      r: i.parse(Cn(u, o), c)
    };
  return r;
}
const Pb = Number.EPSILON || 1e-14, Cs = (e, t) => t < e.length && !e[t].skip && e[t], Ff = (e) => e === "x" ? "y" : "x";
function Mb(e, t, n, s) {
  const i = e.skip ? t : e, o = t, r = n.skip ? t : n, a = pa(o, i), l = pa(r, o);
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
function Cb(e, t, n) {
  const s = e.length;
  let i, o, r, a, l, c = Cs(e, 0);
  for (let u = 0; u < s - 1; ++u)
    if (l = c, c = Cs(e, u + 1), !(!l || !c)) {
      if (ci(t[u], 0, Pb)) {
        n[u] = n[u + 1] = 0;
        continue;
      }
      i = n[u] / t[u], o = n[u + 1] / t[u], a = Math.pow(i, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), n[u] = i * r * t[u], n[u + 1] = o * r * t[u]);
    }
}
function Db(e, t, n = "x") {
  const s = Ff(n), i = e.length;
  let o, r, a, l = Cs(e, 0);
  for (let c = 0; c < i; ++c) {
    if (r = a, a = l, l = Cs(e, c + 1), !a)
      continue;
    const u = a[n], h = a[s];
    r && (o = (u - r[n]) / 3, a[`cp1${n}`] = u - o, a[`cp1${s}`] = h - o * t[c]), l && (o = (l[n] - u) / 3, a[`cp2${n}`] = u + o, a[`cp2${s}`] = h + o * t[c]);
  }
}
function kb(e, t = "x") {
  const n = Ff(t), s = e.length, i = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Cs(e, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Cs(e, r + 1), !!l) {
      if (c) {
        const u = c[t] - l[t];
        i[r] = u !== 0 ? (c[n] - l[n]) / u : 0;
      }
      o[r] = a ? c ? Ke(i[r - 1]) !== Ke(i[r]) ? 0 : (i[r - 1] + i[r]) / 2 : i[r - 1] : i[r];
    }
  Cb(e, i, o), Db(e, o, t);
}
function eo(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function Eb(e, t) {
  let n, s, i, o, r, a = un(e[0], t);
  for (n = 0, s = e.length; n < s; ++n)
    r = o, o = a, a = n < s - 1 && un(e[n + 1], t), o && (i = e[n], r && (i.cp1x = eo(i.cp1x, t.left, t.right), i.cp1y = eo(i.cp1y, t.top, t.bottom)), a && (i.cp2x = eo(i.cp2x, t.left, t.right), i.cp2y = eo(i.cp2y, t.top, t.bottom)));
}
function Ob(e, t, n, s, i) {
  let o, r, a, l;
  if (t.spanGaps && (e = e.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    kb(e, i);
  else {
    let c = s ? e[e.length - 1] : e[0];
    for (o = 0, r = e.length; o < r; ++o)
      a = e[o], l = Mb(c, a, e[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && Eb(e, n);
}
function Tl() {
  return typeof window < "u" && typeof document < "u";
}
function Pl(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function jo(e, t, n) {
  let s;
  return typeof e == "string" ? (s = parseInt(e, 10), e.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[n])) : s = e, s;
}
const ur = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function Rb(e, t) {
  return ur(e).getPropertyValue(t);
}
const Lb = [
  "top",
  "right",
  "bottom",
  "left"
];
function Zn(e, t, n) {
  const s = {};
  n = n ? "-" + n : "";
  for (let i = 0; i < 4; i++) {
    const o = Lb[i];
    s[o] = parseFloat(e[t + "-" + o + n]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Ib = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Fb(e, t) {
  const n = e.touches, s = n && n.length ? n[0] : e, { offsetX: i, offsetY: o } = s;
  let r = !1, a, l;
  if (Ib(i, o, e.target))
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
function Wn(e, t) {
  if ("native" in e)
    return e;
  const { canvas: n, currentDevicePixelRatio: s } = t, i = ur(n), o = i.boxSizing === "border-box", r = Zn(i, "padding"), a = Zn(i, "border", "width"), { x: l, y: c, box: u } = Fb(e, n), h = r.left + (u && a.left), d = r.top + (u && a.top);
  let { width: f, height: p } = t;
  return o && (f -= r.width + a.width, p -= r.height + a.height), {
    x: Math.round((l - h) / f * n.width / s),
    y: Math.round((c - d) / p * n.height / s)
  };
}
function Vb(e, t, n) {
  let s, i;
  if (t === void 0 || n === void 0) {
    const o = e && Pl(e);
    if (!o)
      t = e.clientWidth, n = e.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = ur(o), l = Zn(a, "border", "width"), c = Zn(a, "padding");
      t = r.width - c.width - l.width, n = r.height - c.height - l.height, s = jo(a.maxWidth, o, "clientWidth"), i = jo(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: n,
    maxWidth: s || No,
    maxHeight: i || No
  };
}
const no = (e) => Math.round(e * 10) / 10;
function Nb(e, t, n, s) {
  const i = ur(e), o = Zn(i, "margin"), r = jo(i.maxWidth, e, "clientWidth") || No, a = jo(i.maxHeight, e, "clientHeight") || No, l = Vb(e, t, n);
  let { width: c, height: u } = l;
  if (i.boxSizing === "content-box") {
    const d = Zn(i, "border", "width"), f = Zn(i, "padding");
    c -= f.width + d.width, u -= f.height + d.height;
  }
  return c = Math.max(0, c - o.width), u = Math.max(0, s ? c / s : u - o.height), c = no(Math.min(c, r, l.maxWidth)), u = no(Math.min(u, a, l.maxHeight)), c && !u && (u = no(c / 2)), (t !== void 0 || n !== void 0) && s && l.height && u > l.height && (u = l.height, c = no(Math.floor(u * s))), {
    width: c,
    height: u
  };
}
function tu(e, t, n) {
  const s = t || 1, i = Math.floor(e.height * s), o = Math.floor(e.width * s);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const r = e.canvas;
  return r.style && (n || !r.style.height && !r.style.width) && (r.style.height = `${e.height}px`, r.style.width = `${e.width}px`), e.currentDevicePixelRatio !== s || r.height !== i || r.width !== o ? (e.currentDevicePixelRatio = s, r.height = i, r.width = o, e.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Bb = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    Tl() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
}();
function eu(e, t) {
  const n = Rb(e, t), s = n && n.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Un(e, t, n, s) {
  return {
    x: e.x + n * (t.x - e.x),
    y: e.y + n * (t.y - e.y)
  };
}
function jb(e, t, n, s) {
  return {
    x: e.x + n * (t.x - e.x),
    y: s === "middle" ? n < 0.5 ? e.y : t.y : s === "after" ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y
  };
}
function $b(e, t, n, s) {
  const i = {
    x: e.cp2x,
    y: e.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Un(e, i, n), a = Un(i, o, n), l = Un(o, t, n), c = Un(r, a, n), u = Un(a, l, n);
  return Un(c, u, n);
}
const Hb = function(e, t) {
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
}, zb = function() {
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
function Ss(e, t, n) {
  return e ? Hb(t, n) : zb();
}
function Vf(e, t) {
  let n, s;
  (t === "ltr" || t === "rtl") && (n = e.canvas.style, s = [
    n.getPropertyValue("direction"),
    n.getPropertyPriority("direction")
  ], n.setProperty("direction", t, "important"), e.prevTextDirection = s);
}
function Nf(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
function Bf(e) {
  return e === "angle" ? {
    between: Si,
    compare: Wy,
    normalize: Se
  } : {
    between: ln,
    compare: (t, n) => t - n,
    normalize: (t) => t
  };
}
function nu({ start: e, end: t, count: n, loop: s, style: i }) {
  return {
    start: e % n,
    end: t % n,
    loop: s && (t - e + 1) % n === 0,
    style: i
  };
}
function Wb(e, t, n) {
  const { property: s, start: i, end: o } = n, { between: r, normalize: a } = Bf(s), l = t.length;
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
function jf(e, t, n) {
  if (!n)
    return [
      e
    ];
  const { property: s, start: i, end: o } = n, r = t.length, { compare: a, between: l, normalize: c } = Bf(s), { start: u, end: h, loop: d, style: f } = Wb(e, t, n), p = [];
  let g = !1, m = null, y, b, S;
  const _ = () => l(i, S, y) && a(i, S) !== 0, x = () => a(o, y) === 0 || l(o, S, y), w = () => g || _(), A = () => !g || x();
  for (let T = u, P = u; T <= h; ++T)
    b = t[T % r], !b.skip && (y = c(b[s]), y !== S && (g = l(y, i, o), m === null && w() && (m = a(y, i) === 0 ? T : P), m !== null && A() && (p.push(nu({
      start: m,
      end: T,
      loop: d,
      count: r,
      style: f
    })), m = null), P = T, S = y));
  return m !== null && p.push(nu({
    start: m,
    end: h,
    loop: d,
    count: r,
    style: f
  })), p;
}
function $f(e, t) {
  const n = [], s = e.segments;
  for (let i = 0; i < s.length; i++) {
    const o = jf(s[i], e.points, t);
    o.length && n.push(...o);
  }
  return n;
}
function Ub(e, t, n, s) {
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
function Yb(e, t, n, s) {
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
function Kb(e, t) {
  const n = e.points, s = e.options.spanGaps, i = n.length;
  if (!i)
    return [];
  const o = !!e._loop, { start: r, end: a } = Ub(n, i, o, s);
  if (s === !0)
    return su(e, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], n, t);
  const l = a < r ? a + i : a, c = !!e._fullLoop && r === 0 && a === i - 1;
  return su(e, Yb(n, r, l, c), n, t);
}
function su(e, t, n, s) {
  return !s || !s.setContext || !n ? t : Gb(e, t, n, s);
}
function Gb(e, t, n, s) {
  const i = e._chart.getContext(), o = iu(e.options), { _datasetIndex: r, options: { spanGaps: a } } = e, l = n.length, c = [];
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
      m = iu(s.setContext(Rn(i, {
        type: "segment",
        p0: g,
        p1: y,
        p0DataIndex: (d - 1) % l,
        p1DataIndex: d % l,
        datasetIndex: r
      }))), Xb(m, u) && f(h, d - 1, p.loop, u), g = y, u = m;
    }
    h < d - 1 && f(h, d - 1, p.loop, u);
  }
  return c;
}
function iu(e) {
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
function Xb(e, t) {
  if (!t)
    return !1;
  const n = [], s = function(i, o) {
    return vl(o) ? (n.includes(o) || n.push(o), n.indexOf(o)) : o;
  };
  return JSON.stringify(e, s) !== JSON.stringify(t, s);
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class qb {
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
    this._request || (this._running = !0, this._request = Af.call(window, () => {
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
var nn = /* @__PURE__ */ new qb();
const ou = "transparent", Zb = {
  boolean(e, t, n) {
    return n > 0.5 ? t : e;
  },
  color(e, t, n) {
    const s = Xc(e || ou), i = s.valid && Xc(t || ou);
    return i && i.valid ? i.mix(s, n).hexString() : t;
  },
  number(e, t, n) {
    return e + (t - e) * n;
  }
};
class Qb {
  constructor(t, n, s, i) {
    const o = n[s];
    i = ti([
      t.to,
      i,
      o,
      t.from
    ]);
    const r = ti([
      t.from,
      o,
      i
    ]);
    this._active = !0, this._fn = t.fn || Zb[t.type || typeof r], this._easing = ui[t.easing] || ui.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = n, this._prop = s, this._from = r, this._to = i, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, n, s) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = ti([
        t.to,
        n,
        i,
        t.from
      ]), this._from = ti([
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
class Hf {
  constructor(t, n) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(n);
  }
  configure(t) {
    if (!gt(t))
      return;
    const n = Object.keys(Nt.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const o = t[i];
      if (!gt(o))
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
    const s = n.options, i = t0(t, s);
    if (!i)
      return [];
    const o = this._createAnimations(i, s);
    return s.$shared && Jb(t.options.$animations, s).then(() => {
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
      o[c] = h = new Qb(d, t, c, u), i.push(h);
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
      return nn.add(this._chart, s), !0;
  }
}
function Jb(e, t) {
  const n = [], s = Object.keys(t);
  for (let i = 0; i < s.length; i++) {
    const o = e[s[i]];
    o && o.active() && n.push(o.wait());
  }
  return Promise.all(n);
}
function t0(e, t) {
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
function ru(e, t) {
  const n = e && e.options || {}, s = n.reverse, i = n.min === void 0 ? t : 0, o = n.max === void 0 ? t : 0;
  return {
    start: s ? o : i,
    end: s ? i : o
  };
}
function e0(e, t, n) {
  if (n === !1)
    return !1;
  const s = ru(e, n), i = ru(t, n);
  return {
    top: i.end,
    right: s.end,
    bottom: i.start,
    left: s.start
  };
}
function n0(e) {
  let t, n, s, i;
  return gt(e) ? (t = e.top, n = e.right, s = e.bottom, i = e.left) : t = n = s = i = e, {
    top: t,
    right: n,
    bottom: s,
    left: i,
    disabled: e === !1
  };
}
function zf(e, t) {
  const n = [], s = e._getSortedDatasetMetas(t);
  let i, o;
  for (i = 0, o = s.length; i < o; ++i)
    n.push(s[i].index);
  return n;
}
function au(e, t, n, s = {}) {
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
    c = e.values[l], Ut(c) && (o || t === 0 || Ke(t) === Ke(c)) && (t += c);
  }
  return !u && !s.all ? 0 : t;
}
function s0(e, t) {
  const { iScale: n, vScale: s } = t, i = n.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(e), a = new Array(r.length);
  let l, c, u;
  for (l = 0, c = r.length; l < c; ++l)
    u = r[l], a[l] = {
      [i]: u,
      [o]: e[u]
    };
  return a;
}
function Fr(e, t) {
  const n = e && e.options.stacked;
  return n || n === void 0 && t.stack !== void 0;
}
function i0(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function o0(e) {
  const { min: t, max: n, minDefined: s, maxDefined: i } = e.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY
  };
}
function r0(e, t, n) {
  const s = e[t] || (e[t] = {});
  return s[n] || (s[n] = {});
}
function lu(e, t, n, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const o = e[i.index];
    if (n && o > 0 || !n && o < 0)
      return i.index;
  }
  return null;
}
function cu(e, t) {
  const { chart: n, _cachedMeta: s } = e, i = n._stacks || (n._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, u = i0(o, r, s), h = t.length;
  let d;
  for (let f = 0; f < h; ++f) {
    const p = t[f], { [l]: g, [c]: m } = p, y = p._stacks || (p._stacks = {});
    d = y[c] = r0(i, u, g), d[a] = m, d._top = lu(d, r, !0, s.type), d._bottom = lu(d, r, !1, s.type);
    const b = d._visualValues || (d._visualValues = {});
    b[a] = m;
  }
}
function Vr(e, t) {
  const n = e.scales;
  return Object.keys(n).filter((s) => n[s].axis === t).shift();
}
function a0(e, t) {
  return Rn(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function l0(e, t, n) {
  return Rn(e, {
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
function Ys(e, t) {
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
const Nr = (e) => e === "reset" || e === "none", uu = (e, t) => t ? e : Object.assign({}, e), c0 = (e, t, n) => e && !t.hidden && t._stacked && {
  keys: zf(n, !0),
  values: null
};
class Ve {
  constructor(t, n) {
    this.chart = t, this._ctx = t.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Fr(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Ys(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, n = this._cachedMeta, s = this.getDataset(), i = (h, d, f, p) => h === "x" ? d : h === "r" ? p : f, o = n.xAxisID = ht(s.xAxisID, Vr(t, "x")), r = n.yAxisID = ht(s.yAxisID, Vr(t, "y")), a = n.rAxisID = ht(s.rAxisID, Vr(t, "r")), l = n.indexAxis, c = n.iAxisID = i(l, o, r, a), u = n.vAxisID = i(l, r, o, a);
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
    this._data && Yc(this._data, this), t._stacked && Ys(t);
  }
  _dataCheck() {
    const t = this.getDataset(), n = t.data || (t.data = []), s = this._data;
    if (gt(n)) {
      const i = this._cachedMeta;
      this._data = s0(n, i);
    } else if (s !== n) {
      if (s) {
        Yc(s, this);
        const i = this._cachedMeta;
        Ys(i), i._parsed = [];
      }
      n && Object.isExtensible(n) && Gy(n, this), this._syncList = [], this._data = n;
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
    n._stacked = Fr(n.vScale, n), n.stack !== s.stack && (i = !0, Ys(n), n.stack = s.stack), this._resyncElements(t), (i || o !== n._stacked) && (cu(this, n._parsed), n._stacked = Fr(n.vScale, n));
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
      Vt(i[t]) ? d = this.parseArrayData(s, i, t, n) : gt(i[t]) ? d = this.parseObjectData(s, i, t, n) : d = this.parsePrimitiveData(s, i, t, n);
      const f = () => h[a] === null || c && h[a] < c[a];
      for (u = 0; u < n; ++u)
        s._parsed[u + t] = h = d[u], l && (f() && (l = !1), c = h);
      s._sorted = l;
    }
    r && cu(this, d);
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
        x: o.parse(Cn(f, a), d),
        y: r.parse(Cn(f, l), d)
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
      keys: zf(i, !0),
      values: n._stacks[t.axis]._visualValues
    };
    return au(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, n, s, i) {
    const o = s[n.axis];
    let r = o === null ? NaN : o;
    const a = i && s._stacks[n.axis];
    i && a && (i.values = a, r = au(i, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, n) {
    const s = this._cachedMeta, i = s._parsed, o = s._sorted && t === s.iScale, r = i.length, a = this._getOtherScale(t), l = c0(n, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: h } = o0(a);
    let d, f;
    function p() {
      f = i[d];
      const g = f[a.axis];
      return !Ut(f[t.axis]) || u > g || h < g;
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
      r = n[i][t.axis], Ut(r) && s.push(r);
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
    this.update(t || "default"), n._clip = n0(ht(this.options.clip, e0(n.xScale, n.yScale, this.getMaxOverflow())));
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
      o = r.$context || (r.$context = l0(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = i.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = a0(this.chart.getContext(), this.index)), o.dataset = i, o.index = o.datasetIndex = this.index;
    return o.active = !!n, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", s) {
    const i = n === "active", o = this._cachedDataOpts, r = t + "-" + n, a = o[r], l = this.enableOptionSharing && _i(s);
    if (a)
      return uu(a, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, t), h = i ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), u), f = Object.keys(Nt.elements[t]), p = () => this.getContext(s, i, n), g = c.resolveNamedOptions(d, f, p, h);
    return g.$shared && (g.$shared = l, o[r] = Object.freeze(uu(g, l))), g;
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
    const c = new Hf(i, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, n) {
    return !n || Nr(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const s = this.resolveDataElementOptions(t, n), i = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(n, o) || o !== i;
    return this.updateSharedOptions(o, n, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, n, s, i) {
    Nr(i) ? Object.assign(t, s) : this._resolveAnimations(n, i).update(t, s);
  }
  updateSharedOptions(t, n, s) {
    t && !Nr(n) && this._resolveAnimations(void 0, n).update(t, s);
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
      s._stacked && Ys(s, i);
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
j(Ve, "defaults", {}), j(Ve, "datasetElementType", null), j(Ve, "dataElementType", null);
function u0(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t);
    let s = [];
    for (let i = 0, o = n.length; i < o; i++)
      s = s.concat(n[i].controller.getAllParsedValues(e));
    e._cache.$bar = wf(s.sort((i, o) => i - o));
  }
  return e._cache.$bar;
}
function h0(e) {
  const t = e.iScale, n = u0(t, e.type);
  let s = t._length, i, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (_i(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (i = 0, o = n.length; i < o; ++i)
    r = t.getPixelForValue(n[i]), l();
  for (a = void 0, i = 0, o = t.ticks.length; i < o; ++i)
    r = t.getPixelForTick(i), l();
  return s;
}
function d0(e, t, n, s) {
  const i = n.barThickness;
  let o, r;
  return ft(i) ? (o = t.min * n.categoryPercentage, r = n.barPercentage) : (o = i * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[e] - o / 2
  };
}
function f0(e, t, n, s) {
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
function p0(e, t, n, s) {
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
function Wf(e, t, n, s) {
  return Vt(e) ? p0(e, t, n, s) : t[n.axis] = n.parse(e, s), t;
}
function hu(e, t, n, s) {
  const i = e.iScale, o = e.vScale, r = i.getLabels(), a = i === o, l = [];
  let c, u, h, d;
  for (c = n, u = n + s; c < u; ++c)
    d = t[c], h = {}, h[i.axis] = a || i.parse(r[c], c), l.push(Wf(d, h, o, c));
  return l;
}
function Br(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function g0(e, t, n) {
  return e !== 0 ? Ke(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
}
function m0(e) {
  let t, n, s, i, o;
  return e.horizontal ? (t = e.base > e.x, n = "left", s = "right") : (t = e.base < e.y, n = "bottom", s = "top"), t ? (i = "end", o = "start") : (i = "start", o = "end"), {
    start: n,
    end: s,
    reverse: t,
    top: i,
    bottom: o
  };
}
function y0(e, t, n, s) {
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
  const { start: r, end: a, reverse: l, top: c, bottom: u } = m0(e);
  i === "middle" && n && (e.enableBorderRadius = !0, (n._top || 0) === s ? i = c : (n._bottom || 0) === s ? i = u : (o[du(u, r, a, l)] = !0, i = c)), o[du(i, r, a, l)] = !0, e.borderSkipped = o;
}
function du(e, t, n, s) {
  return s ? (e = b0(e, t, n), e = fu(e, n, t)) : e = fu(e, t, n), e;
}
function b0(e, t, n) {
  return e === t ? n : e === n ? t : e;
}
function fu(e, t, n) {
  return e === "start" ? t : e === "end" ? n : e;
}
function x0(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === "auto" ? n === 1 ? 0.33 : 0 : t;
}
class _o extends Ve {
  parsePrimitiveData(t, n, s, i) {
    return hu(t, n, s, i);
  }
  parseArrayData(t, n, s, i) {
    return hu(t, n, s, i);
  }
  parseObjectData(t, n, s, i) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, u = r.axis === "x" ? a : l, h = [];
    let d, f, p, g;
    for (d = s, f = s + i; d < f; ++d)
      g = n[d], p = {}, p[o.axis] = o.parse(Cn(g, c), d), h.push(Wf(Cn(g, u), p, r, d));
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
    const n = this._cachedMeta, { iScale: s, vScale: i } = n, o = this.getParsed(t), r = o._custom, a = Br(r) ? "[" + r.start + ", " + r.end + "]" : "" + i.getLabelForValue(o[i.axis]);
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
      const p = this.getParsed(f), g = o || ft(p[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, u), y = (p._stacks || {})[a.axis], b = {
        horizontal: c,
        base: g.base,
        enableBorderRadius: !y || Br(p._custom) || r === y._top || r === y._bottom,
        x: c ? g.head : m.center,
        y: c ? m.center : g.head,
        height: c ? m.size : Math.abs(g.size),
        width: c ? Math.abs(g.size) : m.size
      };
      d && (b.options = h || this.resolveDataElementOptions(f, t[f].active ? "active" : i));
      const S = b.options || t[f].options;
      y0(b, S, y, r), x0(b, S, u.ratio), this.updateElement(t[f], f, b, i);
    }
  }
  _getStacks(t, n) {
    const { iScale: s } = this._cachedMeta, i = s.getMatchingVisibleMetas(this._type).filter((u) => u.controller.options.grouped), o = s.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(n), l = a && a[s.axis], c = (u) => {
      const h = u._parsed.find((f) => f[s.axis] === l), d = h && h[u.vScale.axis];
      if (ft(d) || isNaN(d))
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
      min: a || h0(n),
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
    const { _cachedMeta: { vScale: n, _stacked: s, index: i }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, u = Br(c);
    let h = l[n.axis], d = 0, f = s ? this.applyStack(n, l, s) : h, p, g;
    f !== h && (d = f - h, f = h), u && (h = c.barStart, f = c.barEnd - c.barStart, h !== 0 && Ke(h) !== Ke(c.barEnd) && (d = 0), d += h);
    const m = !ft(o) && !u ? o : d;
    let y = n.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? p = n.getPixelForValue(d + f) : p = y, g = p - y, Math.abs(g) < r) {
      g = g0(g, n, a) * r, h === a && (y -= g / 2);
      const b = n.getPixelForDecimal(0), S = n.getPixelForDecimal(1), _ = Math.min(b, S), x = Math.max(b, S);
      y = Math.max(Math.min(y, x), _), p = y + g, s && !u && (l._stacks[n.axis]._visualValues[i] = n.getValueForPixel(p) - n.getValueForPixel(y));
    }
    if (y === n.getPixelForValue(a)) {
      const b = Ke(g) * n.getLineWidthForValue(a) / 2;
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
      const c = o ? this._getStackCount(t) : n.stackCount, u = i.barThickness === "flex" ? f0(t, n, i, c) : d0(t, n, i, c), h = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
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
j(_o, "id", "bar"), j(_o, "defaults", {
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
}), j(_o, "overrides", {
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
class So extends Ve {
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
j(So, "id", "bubble"), j(So, "defaults", {
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
}), j(So, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function v0(e, t, n) {
  let s = 1, i = 1, o = 0, r = 0;
  if (t < Ot) {
    const a = e, l = a + t, c = Math.cos(a), u = Math.sin(a), h = Math.cos(l), d = Math.sin(l), f = (S, _, x) => Si(S, a, l, !0) ? 1 : Math.max(_, _ * n, x, x * n), p = (S, _, x) => Si(S, a, l, !0) ? -1 : Math.min(_, _ * n, x, x * n), g = f(0, c, h), m = f(Kt, u, d), y = p(Rt, c, h), b = p(Rt + Kt, u, d);
    s = (g - y) / 2, i = (m - b) / 2, o = -(g + y) / 2, r = -(m + b) / 2;
  }
  return {
    ratioX: s,
    ratioY: i,
    offsetX: o,
    offsetY: r
  };
}
class Kn extends Ve {
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
      if (gt(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +Cn(s[c], l);
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
    const n = this.chart, { chartArea: s } = n, i = this._cachedMeta, o = i.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(Ry(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: u, rotation: h } = this._getRotationExtents(), { ratioX: d, ratioY: f, offsetX: p, offsetY: g } = v0(h, u, l), m = (s.width - r) / d, y = (s.height - r) / f, b = Math.max(Math.min(m, y) / 2, 0), S = bf(this.options.radius, b), _ = Math.max(S * l, 0), x = (S - _) / this._getVisibleDatasetWeightTotal();
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
    const n = this._cachedMeta, s = this.chart, i = s.data.labels || [], o = Hi(n._parsed[t], s.options.locale);
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
j(Kn, "id", "doughnut"), j(Kn, "defaults", {
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
}), j(Kn, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), j(Kn, "overrides", {
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
class wo extends Ve {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const n = this._cachedMeta, { dataset: s, data: i = [], _dataset: o } = n, r = this.chart._animationsDisabled;
    let { start: a, count: l } = Pf(n, i, r);
    this._drawStart = a, this._drawCount = l, Mf(n) && (a = 0, l = i.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = i;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(i, a, l, t);
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: u, includeOptions: h } = this._getSharedOptions(n, i), d = r.axis, f = a.axis, { spanGaps: p, segment: g } = this.options, m = Ps(p) ? p : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || o || i === "none", b = n + s, S = t.length;
    let _ = n > 0 && this.getParsed(n - 1);
    for (let x = 0; x < S; ++x) {
      const w = t[x], A = y ? w : {};
      if (x < n || x >= b) {
        A.skip = !0;
        continue;
      }
      const T = this.getParsed(x), P = ft(T[f]), M = A[d] = r.getPixelForValue(T[d], x), D = A[f] = o || P ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, T, l) : T[f], x);
      A.skip = isNaN(M) || isNaN(D) || P, A.stop = x > 0 && Math.abs(T[d] - _[d]) > m, g && (A.parsed = T, A.raw = c.data[x]), h && (A.options = u || this.resolveDataElementOptions(x, w.active ? "active" : i)), y || this.updateElement(w, x, A, i), _ = T;
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
j(wo, "id", "line"), j(wo, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), j(wo, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class di extends Ve {
  constructor(t, n) {
    super(t, n), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart, i = s.data.labels || [], o = Hi(n._parsed[t].r, s.options.locale);
    return {
      label: i[t] || "",
      value: o
    };
  }
  parseObjectData(t, n, s, i) {
    return If.bind(this)(t, n, s, i);
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
j(di, "id", "polarArea"), j(di, "defaults", {
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
}), j(di, "overrides", {
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
class ya extends Kn {
}
j(ya, "id", "pie"), j(ya, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class Ao extends Ve {
  getLabelAndValue(t) {
    const n = this._cachedMeta.vScale, s = this.getParsed(t);
    return {
      label: n.getLabels()[t],
      value: "" + n.getLabelForValue(s[n.axis])
    };
  }
  parseObjectData(t, n, s, i) {
    return If.bind(this)(t, n, s, i);
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
j(Ao, "id", "radar"), j(Ao, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), j(Ao, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class To extends Ve {
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart.data.labels || [], { xScale: i, yScale: o } = n, r = this.getParsed(t), a = i.getLabelForValue(r.x), l = o.getLabelForValue(r.y);
    return {
      label: s[t] || "",
      value: "(" + a + ", " + l + ")"
    };
  }
  update(t) {
    const n = this._cachedMeta, { data: s = [] } = n, i = this.chart._animationsDisabled;
    let { start: o, count: r } = Pf(n, s, i);
    if (this._drawStart = o, this._drawCount = r, Mf(n) && (o = 0, r = s.length), this.options.showLine) {
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
    const o = i === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, u = this.resolveDataElementOptions(n, i), h = this.getSharedOptions(u), d = this.includeOptions(i, h), f = r.axis, p = a.axis, { spanGaps: g, segment: m } = this.options, y = Ps(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || i === "none";
    let S = n > 0 && this.getParsed(n - 1);
    for (let _ = n; _ < n + s; ++_) {
      const x = t[_], w = this.getParsed(_), A = b ? x : {}, T = ft(w[p]), P = A[f] = r.getPixelForValue(w[f], _), M = A[p] = o || T ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, w, l) : w[p], _);
      A.skip = isNaN(P) || isNaN(M) || T, A.stop = _ > 0 && Math.abs(w[f] - S[f]) > y, m && (A.parsed = w, A.raw = c.data[_]), d && (A.options = h || this.resolveDataElementOptions(_, x.active ? "active" : i)), b || this.updateElement(x, _, A, i), S = w;
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
j(To, "id", "scatter"), j(To, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), j(To, "overrides", {
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
var _0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: _o,
  BubbleController: So,
  DoughnutController: Kn,
  LineController: wo,
  PieController: ya,
  PolarAreaController: di,
  RadarController: Ao,
  ScatterController: To
});
function jn() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Ml {
  constructor(t) {
    j(this, "options");
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
    Object.assign(Ml.prototype, t);
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
var S0 = {
  _date: Ml
};
function w0(e, t, n, s) {
  const { controller: i, data: o, _sorted: r } = e, a = i._cachedMeta.iScale, l = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Yy : cn;
    if (s) {
      if (i._sharedOptions) {
        const u = o[0], h = typeof u.getRange == "function" && u.getRange(t);
        if (h) {
          const d = c(o, t, n - h), f = c(o, t, n + h);
          return {
            lo: d.lo,
            hi: f.hi
          };
        }
      }
    } else {
      const u = c(o, t, n);
      if (l) {
        const { vScale: h } = i._cachedMeta, { _parsed: d } = e, f = d.slice(0, u.lo + 1).reverse().findIndex((g) => !ft(g[h.axis]));
        u.lo -= Math.max(0, f);
        const p = d.slice(u.hi).findIndex((g) => !ft(g[h.axis]));
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
function hr(e, t, n, s, i) {
  const o = e.getSortedVisibleDatasetMetas(), r = n[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: u } = o[a], { lo: h, hi: d } = w0(o[a], t, r, i);
    for (let f = h; f <= d; ++f) {
      const p = u[f];
      p.skip || s(p, c, f);
    }
  }
}
function A0(e) {
  const t = e.indexOf("x") !== -1, n = e.indexOf("y") !== -1;
  return function(s, i) {
    const o = t ? Math.abs(s.x - i.x) : 0, r = n ? Math.abs(s.y - i.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function jr(e, t, n, s, i) {
  const o = [];
  return !i && !e.isPointInArea(t) || hr(e, n, t, function(a, l, c) {
    !i && !un(a, e.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function T0(e, t, n, s) {
  let i = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: u } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: h } = _f(r, {
      x: t.x,
      y: t.y
    });
    Si(h, c, u) && i.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return hr(e, n, t, o), i;
}
function P0(e, t, n, s, i, o) {
  let r = [];
  const a = A0(n);
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
  return hr(e, n, t, c), r;
}
function $r(e, t, n, s, i, o) {
  return !o && !e.isPointInArea(t) ? [] : n === "r" && !s ? T0(e, t, n, i) : P0(e, t, n, s, i, o);
}
function pu(e, t, n, s, i) {
  const o = [], r = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return hr(e, n, t, (l, c, u) => {
    l[r] && l[r](t[n], i) && (o.push({
      element: l,
      datasetIndex: c,
      index: u
    }), a = a || l.inRange(t.x, t.y, i));
  }), s && !a ? [] : o;
}
var M0 = {
  modes: {
    index(e, t, n, s) {
      const i = Wn(t, e), o = n.axis || "x", r = n.includeInvisible || !1, a = n.intersect ? jr(e, i, o, s, r) : $r(e, i, o, !1, s, r), l = [];
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
      const i = Wn(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      let a = n.intersect ? jr(e, i, o, s, r) : $r(e, i, o, !1, s, r);
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
      const i = Wn(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return jr(e, i, o, s, r);
    },
    nearest(e, t, n, s) {
      const i = Wn(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return $r(e, i, o, n.intersect, s, r);
    },
    x(e, t, n, s) {
      const i = Wn(t, e);
      return pu(e, i, "x", n.intersect, s);
    },
    y(e, t, n, s) {
      const i = Wn(t, e);
      return pu(e, i, "y", n.intersect, s);
    }
  }
};
const Uf = [
  "left",
  "top",
  "right",
  "bottom"
];
function Ks(e, t) {
  return e.filter((n) => n.pos === t);
}
function gu(e, t) {
  return e.filter((n) => Uf.indexOf(n.pos) === -1 && n.box.axis === t);
}
function Gs(e, t) {
  return e.sort((n, s) => {
    const i = t ? s : n, o = t ? n : s;
    return i.weight === o.weight ? i.index - o.index : i.weight - o.weight;
  });
}
function C0(e) {
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
function D0(e) {
  const t = {};
  for (const n of e) {
    const { stack: s, pos: i, stackWeight: o } = n;
    if (!s || !Uf.includes(i))
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
function k0(e, t) {
  const n = D0(e), { vBoxMaxWidth: s, hBoxMaxHeight: i } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box, c = n[a.stack], u = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = u ? u * s : l && t.availableWidth, a.height = i) : (a.width = s, a.height = u ? u * i : l && t.availableHeight);
  }
  return n;
}
function E0(e) {
  const t = C0(e), n = Gs(t.filter((c) => c.box.fullSize), !0), s = Gs(Ks(t, "left"), !0), i = Gs(Ks(t, "right")), o = Gs(Ks(t, "top"), !0), r = Gs(Ks(t, "bottom")), a = gu(t, "x"), l = gu(t, "y");
  return {
    fullSize: n,
    leftAndTop: s.concat(o),
    rightAndBottom: i.concat(l).concat(r).concat(a),
    chartArea: Ks(t, "chartArea"),
    vertical: s.concat(i).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function mu(e, t, n, s) {
  return Math.max(e[n], t[n]) + Math.max(e[s], t[s]);
}
function Yf(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function O0(e, t, n, s) {
  const { pos: i, box: o } = n, r = e.maxPadding;
  if (!gt(i)) {
    n.size && (e[i] -= n.size);
    const h = s[n.stack] || {
      size: 0,
      count: 1
    };
    h.size = Math.max(h.size, n.horizontal ? o.height : o.width), n.size = h.size / h.count, e[i] += n.size;
  }
  o.getPadding && Yf(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - mu(r, e, "left", "right")), l = Math.max(0, t.outerHeight - mu(r, e, "top", "bottom")), c = a !== e.w, u = l !== e.h;
  return e.w = a, e.h = l, n.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function R0(e) {
  const t = e.maxPadding;
  function n(s) {
    const i = Math.max(t[s] - e[s], 0);
    return e[s] += i, i;
  }
  e.y += n("top"), e.x += n("left"), n("right"), n("bottom");
}
function L0(e, t) {
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
function ei(e, t, n, s) {
  const i = [];
  let o, r, a, l, c, u;
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    a = e[o], l = a.box, l.update(a.width || t.w, a.height || t.h, L0(a.horizontal, t));
    const { same: h, other: d } = O0(t, n, a, s);
    c |= h && i.length, u = u || d, l.fullSize || i.push(a);
  }
  return c && ei(i, t, n, s) || u;
}
function so(e, t, n, s, i) {
  e.top = n, e.left = t, e.right = t + s, e.bottom = n + i, e.width = s, e.height = i;
}
function yu(e, t, n, s) {
  const i = n.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, u = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const h = t.w * u, d = c.size || l.height;
      _i(c.start) && (r = c.start), l.fullSize ? so(l, i.left, r, n.outerWidth - i.right - i.left, d) : so(l, t.left + c.placed, r, h, d), c.start = r, c.placed += h, r = l.bottom;
    } else {
      const h = t.h * u, d = c.size || l.width;
      _i(c.start) && (o = c.start), l.fullSize ? so(l, o, i.top, d, n.outerHeight - i.bottom - i.top) : so(l, o, t.top + c.placed, d, h), c.start = o, c.placed += h, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var re = {
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
    const i = le(e.options.layout.padding), o = Math.max(t - i.width, 0), r = Math.max(n - i.height, 0), a = E0(e.boxes), l = a.vertical, c = a.horizontal;
    wt(e.boxes, (g) => {
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
    Yf(d, le(s));
    const f = Object.assign({
      maxPadding: d,
      w: o,
      h: r,
      x: i.left,
      y: i.top
    }, i), p = k0(l.concat(c), h);
    ei(a.fullSize, f, h, p), ei(l, f, h, p), ei(c, f, h, p) && ei(l, f, h, p), R0(f), yu(a.leftAndTop, f, h, p), f.x += f.w, f.y += f.h, yu(a.rightAndBottom, f, h, p), e.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, wt(a.chartArea, (g) => {
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
class Kf {
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
class I0 extends Kf {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Po = "$chartjs", F0 = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, bu = (e) => e === null || e === "";
function V0(e, t) {
  const n = e.style, s = e.getAttribute("height"), i = e.getAttribute("width");
  if (e[Po] = {
    initial: {
      height: s,
      width: i,
      style: {
        display: n.display,
        height: n.height,
        width: n.width
      }
    }
  }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", bu(i)) {
    const o = eu(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (bu(s))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const o = eu(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const Gf = Bb ? {
  passive: !0
} : !1;
function N0(e, t, n) {
  e && e.addEventListener(t, n, Gf);
}
function B0(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, Gf);
}
function j0(e, t) {
  const n = F0[e.type] || e.type, { x: s, y: i } = Wn(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null
  };
}
function $o(e, t) {
  for (const n of e)
    if (n === t || n.contains(t))
      return !0;
}
function $0(e, t, n) {
  const s = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || $o(a.addedNodes, s), r = r && !$o(a.removedNodes, s);
    r && n();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
function H0(e, t, n) {
  const s = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || $o(a.removedNodes, s), r = r && !$o(a.addedNodes, s);
    r && n();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
const Ai = /* @__PURE__ */ new Map();
let xu = 0;
function Xf() {
  const e = window.devicePixelRatio;
  e !== xu && (xu = e, Ai.forEach((t, n) => {
    n.currentDevicePixelRatio !== e && t();
  }));
}
function z0(e, t) {
  Ai.size || window.addEventListener("resize", Xf), Ai.set(e, t);
}
function W0(e) {
  Ai.delete(e), Ai.size || window.removeEventListener("resize", Xf);
}
function U0(e, t, n) {
  const s = e.canvas, i = s && Pl(s);
  if (!i)
    return;
  const o = Tf((a, l) => {
    const c = i.clientWidth;
    n(a, l), c < i.clientWidth && n();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || o(c, u);
  });
  return r.observe(i), z0(e, o), r;
}
function Hr(e, t, n) {
  n && n.disconnect(), t === "resize" && W0(e);
}
function Y0(e, t, n) {
  const s = e.canvas, i = Tf((o) => {
    e.ctx !== null && n(j0(o, e));
  }, e);
  return N0(s, t, i), i;
}
class K0 extends Kf {
  acquireContext(t, n) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (V0(t, n), s) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[Po])
      return !1;
    const s = n[Po].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      ft(r) ? n.removeAttribute(o) : n.setAttribute(o, r);
    });
    const i = s.style || {};
    return Object.keys(i).forEach((o) => {
      n.style[o] = i[o];
    }), n.width = n.width, delete n[Po], !0;
  }
  addEventListener(t, n, s) {
    this.removeEventListener(t, n);
    const i = t.$proxies || (t.$proxies = {}), r = {
      attach: $0,
      detach: H0,
      resize: U0
    }[n] || Y0;
    i[n] = r(t, n, s);
  }
  removeEventListener(t, n) {
    const s = t.$proxies || (t.$proxies = {}), i = s[n];
    if (!i)
      return;
    ({
      attach: Hr,
      detach: Hr,
      resize: Hr
    }[n] || B0)(t, n, i), s[n] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, s, i) {
    return Nb(t, n, s, i);
  }
  isAttached(t) {
    const n = t && Pl(t);
    return !!(n && n.isConnected);
  }
}
function G0(e) {
  return !Tl() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? I0 : K0;
}
var vo;
let pn = (vo = class {
  constructor() {
    j(this, "x");
    j(this, "y");
    j(this, "active", !1);
    j(this, "options");
    j(this, "$animations");
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
    return Ps(this.x) && Ps(this.y);
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
}, j(vo, "defaults", {}), j(vo, "defaultRoutes"), vo);
function X0(e, t) {
  const n = e.options.ticks, s = q0(e), i = Math.min(n.maxTicksLimit || s, s), o = n.major.enabled ? Q0(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > i)
    return J0(t, c, o, r / i), c;
  const u = Z0(o, t, i);
  if (r > 0) {
    let h, d;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (io(t, c, u, ft(f) ? 0 : a - f, a), h = 0, d = r - 1; h < d; h++)
      io(t, c, u, o[h], o[h + 1]);
    return io(t, c, u, l, ft(f) ? t.length : l + f), c;
  }
  return io(t, c, u), c;
}
function q0(e) {
  const t = e.options.offset, n = e._tickSize(), s = e._length / n + (t ? 0 : 1), i = e._maxLength / n;
  return Math.floor(Math.min(s, i));
}
function Z0(e, t, n) {
  const s = tx(e), i = t.length / n;
  if (!s)
    return Math.max(i, 1);
  const o = $y(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > i)
      return l;
  }
  return Math.max(i, 1);
}
function Q0(e) {
  const t = [];
  let n, s;
  for (n = 0, s = e.length; n < s; n++)
    e[n].major && t.push(n);
  return t;
}
function J0(e, t, n, s) {
  let i = 0, o = n[0], r;
  for (s = Math.ceil(s), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), i++, o = n[i * s]);
}
function io(e, t, n, s, i) {
  const o = ht(s, 0), r = Math.min(ht(i, e.length), e.length);
  let a = 0, l, c, u;
  for (n = Math.ceil(n), i && (l = i - s, n = l / Math.floor(l / n)), u = o; u < 0; )
    a++, u = Math.round(o + a * n);
  for (c = Math.max(o, 0); c < r; c++)
    c === u && (t.push(e[c]), a++, u = Math.round(o + a * n));
}
function tx(e) {
  const t = e.length;
  let n, s;
  if (t < 2)
    return !1;
  for (s = e[0], n = 1; n < t; ++n)
    if (e[n] - e[n - 1] !== s)
      return !1;
  return s;
}
const ex = (e) => e === "left" ? "right" : e === "right" ? "left" : e, vu = (e, t, n) => t === "top" || t === "left" ? e[t] + n : e[t] - n, _u = (e, t) => Math.min(t || e, e);
function Su(e, t) {
  const n = [], s = e.length / t, i = e.length;
  let o = 0;
  for (; o < i; o += s)
    n.push(e[Math.floor(o)]);
  return n;
}
function nx(e, t, n) {
  const s = e.ticks.length, i = Math.min(t, s - 1), o = e._startPixel, r = e._endPixel, a = 1e-6;
  let l = e.getPixelForTick(i), c;
  if (!(n && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(i - 1)) / 2, l += i < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function sx(e, t) {
  wt(e, (n) => {
    const s = n.gc, i = s.length / 2;
    let o;
    if (i > t) {
      for (o = 0; o < i; ++o)
        delete n.data[s[o]];
      s.splice(0, i);
    }
  });
}
function Xs(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function wu(e, t) {
  if (!e.display)
    return 0;
  const n = Xt(e.font, t), s = le(e.padding);
  return (Vt(e.text) ? e.text.length : 1) * n.lineHeight + s.height;
}
function ix(e, t) {
  return Rn(e, {
    scale: t,
    type: "scale"
  });
}
function ox(e, t, n) {
  return Rn(e, {
    tick: n,
    index: t,
    type: "tick"
  });
}
function rx(e, t, n) {
  let s = xl(e);
  return (n && t !== "right" || !n && t === "right") && (s = ex(s)), s;
}
function ax(e, t, n, s) {
  const { top: i, left: o, bottom: r, right: a, chart: l } = e, { chartArea: c, scales: u } = l;
  let h = 0, d, f, p;
  const g = r - i, m = a - o;
  if (e.isHorizontal()) {
    if (f = ie(s, o, a), gt(n)) {
      const y = Object.keys(n)[0], b = n[y];
      p = u[y].getPixelForValue(b) + g - t;
    } else n === "center" ? p = (c.bottom + c.top) / 2 + g - t : p = vu(e, n, t);
    d = a - o;
  } else {
    if (gt(n)) {
      const y = Object.keys(n)[0], b = n[y];
      f = u[y].getPixelForValue(b) - m + t;
    } else n === "center" ? f = (c.left + c.right) / 2 - m + t : f = vu(e, n, t);
    p = ie(s, r, i), h = n === "left" ? -Kt : Kt;
  }
  return {
    titleX: f,
    titleY: p,
    maxWidth: d,
    rotation: h
  };
}
class ss extends pn {
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
    return t = ve(t, Number.POSITIVE_INFINITY), n = ve(n, Number.NEGATIVE_INFINITY), s = ve(s, Number.POSITIVE_INFINITY), i = ve(i, Number.NEGATIVE_INFINITY), {
      min: ve(t, s),
      max: ve(n, i),
      minDefined: Ut(t),
      maxDefined: Ut(n)
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
      min: ve(n, ve(s, n)),
      max: ve(s, ve(n, s))
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
    Ct(this.options.beforeUpdate, [
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
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = mb(this, o, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Su(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = X0(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, n, s;
    this.isHorizontal() ? (n = this.left, s = this.right) : (n = this.top, s = this.bottom, t = !t), this._startPixel = n, this._endPixel = s, this._reversePixels = t, this._length = s - n, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Ct(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Ct(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Ct(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Ct(this.options[t], [
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
    Ct(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let s, i, o;
    for (s = 0, i = t.length; s < i; s++)
      o = t[s], o.label = Ct(n.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    Ct(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Ct(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, n = t.ticks, s = _u(this.ticks.length, t.ticks.maxTicksLimit), i = n.minRotation || 0, o = n.maxRotation;
    let r = i, a, l, c;
    if (!this._isVisible() || !n.display || i >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(), h = u.widest.width, d = u.highest.height, f = Zt(this.chart.width - h, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), h + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Xs(t.grid) - n.padding - wu(t.title, this.chart.options.font), c = Math.sqrt(h * h + d * d), r = yl(Math.min(Math.asin(Zt((u.highest.height + 6) / a, -1, 1)), Math.asin(Zt(l / c, -1, 1)) - Math.asin(Zt(d / c, -1, 1)))), r = Math.max(i, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    Ct(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Ct(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: n, options: { ticks: s, title: i, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = wu(i, n.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Xs(o) + l) : (t.height = this.maxHeight, t.width = Xs(o) + l), s.display && this.ticks.length) {
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
    Ct(this.options.afterFit, [
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
      ft(t[n].label) && (t.splice(n, 1), s--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let s = this.ticks;
      n < s.length && (s = Su(s, n)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, n, s) {
    const { ctx: i, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(n / _u(n, s));
    let c = 0, u = 0, h, d, f, p, g, m, y, b, S, _, x;
    for (h = 0; h < n; h += l) {
      if (p = t[h].label, g = this._resolveTickFontOptions(h), i.font = m = g.string, y = o[m] = o[m] || {
        data: {},
        gc: []
      }, b = g.lineHeight, S = _ = 0, !ft(p) && !Vt(p))
        S = Bo(i, y.data, y.gc, S, p), _ = b;
      else if (Vt(p))
        for (d = 0, f = p.length; d < f; ++d)
          x = p[d], !ft(x) && !Vt(x) && (S = Bo(i, y.data, y.gc, S, x), _ += b);
      r.push(S), a.push(_), c = Math.max(S, c), u = Math.max(_, u);
    }
    sx(o, n);
    const w = r.indexOf(c), A = a.indexOf(u), T = (P) => ({
      width: r[P] || 0,
      height: a[P] || 0
    });
    return {
      first: T(0),
      last: T(n - 1),
      widest: T(w),
      highest: T(A),
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
    return Uy(this._alignToPixels ? Bn(this.chart, n, 0) : n);
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
      return s.$context || (s.$context = ox(this.getContext(), t, s));
    }
    return this.$context || (this.$context = ix(this.chart.getContext(), this));
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
    const n = this.axis, s = this.chart, i = this.options, { grid: o, position: r, border: a } = i, l = o.offset, c = this.isHorizontal(), h = this.ticks.length + (l ? 1 : 0), d = Xs(o), f = [], p = a.setContext(this.getContext()), g = p.display ? p.width : 0, m = g / 2, y = function(U) {
      return Bn(s, U, g);
    };
    let b, S, _, x, w, A, T, P, M, D, C, I;
    if (r === "top")
      b = y(this.bottom), A = this.bottom - d, P = b - m, D = y(t.top) + m, I = t.bottom;
    else if (r === "bottom")
      b = y(this.top), D = t.top, I = y(t.bottom) - m, A = b + m, P = this.top + d;
    else if (r === "left")
      b = y(this.right), w = this.right - d, T = b - m, M = y(t.left) + m, C = t.right;
    else if (r === "right")
      b = y(this.left), M = t.left, C = y(t.right) - m, w = b + m, T = this.left + d;
    else if (n === "x") {
      if (r === "center")
        b = y((t.top + t.bottom) / 2 + 0.5);
      else if (gt(r)) {
        const U = Object.keys(r)[0], z = r[U];
        b = y(this.chart.scales[U].getPixelForValue(z));
      }
      D = t.top, I = t.bottom, A = b + m, P = A + d;
    } else if (n === "y") {
      if (r === "center")
        b = y((t.left + t.right) / 2);
      else if (gt(r)) {
        const U = Object.keys(r)[0], z = r[U];
        b = y(this.chart.scales[U].getPixelForValue(z));
      }
      w = b - m, T = w - d, M = t.left, C = t.right;
    }
    const Z = ht(i.ticks.maxTicksLimit, h), W = Math.max(1, Math.ceil(h / Z));
    for (S = 0; S < h; S += W) {
      const U = this.getContext(S), z = o.setContext(U), Q = a.setContext(U), J = z.lineWidth, ot = z.color, G = Q.dash || [], O = Q.dashOffset, $ = z.tickWidth, Y = z.tickColor, k = z.tickBorderDash || [], X = z.tickBorderDashOffset;
      _ = nx(this, S, l), _ !== void 0 && (x = Bn(s, _, J), c ? w = T = M = C = x : A = P = D = I = x, f.push({
        tx1: w,
        ty1: A,
        tx2: T,
        ty2: P,
        x1: M,
        y1: D,
        x2: C,
        y2: I,
        width: J,
        color: ot,
        borderDash: G,
        borderDashOffset: O,
        tickWidth: $,
        tickColor: Y,
        tickBorderDash: k,
        tickBorderDashOffset: X
      }));
    }
    return this._ticksLength = h, this._borderValue = b, f;
  }
  _computeLabelItems(t) {
    const n = this.axis, s = this.options, { position: i, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: u, mirror: h } = o, d = Xs(s.grid), f = d + u, p = h ? -u : f, g = -Ie(this.labelRotation), m = [];
    let y, b, S, _, x, w, A, T, P, M, D, C, I = "middle";
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
      else if (gt(i)) {
        const W = Object.keys(i)[0], U = i[W];
        w = this.chart.scales[W].getPixelForValue(U) + f;
      }
      A = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (i === "center")
        x = (t.left + t.right) / 2 - f;
      else if (gt(i)) {
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
      T = this.getPixelForTick(y) + o.labelOffset, P = this._resolveTickFontOptions(y), M = P.lineHeight, D = Vt(_) ? _.length : 1;
      const U = D / 2, z = W.color, Q = W.textStrokeColor, J = W.textStrokeWidth;
      let ot = A;
      r ? (x = T, A === "inner" && (y === b - 1 ? ot = this.options.reverse ? "left" : "right" : y === 0 ? ot = this.options.reverse ? "right" : "left" : ot = "center"), i === "top" ? c === "near" || g !== 0 ? C = -D * M + M / 2 : c === "center" ? C = -Z.highest.height / 2 - U * M + M : C = -Z.highest.height + M / 2 : c === "near" || g !== 0 ? C = M / 2 : c === "center" ? C = Z.highest.height / 2 - U * M : C = Z.highest.height - D * M, h && (C *= -1), g !== 0 && !W.showLabelBackdrop && (x += M / 2 * Math.sin(g))) : (w = T, C = (1 - D) * M / 2);
      let G;
      if (W.showLabelBackdrop) {
        const O = le(W.backdropPadding), $ = Z.heights[y], Y = Z.widths[y];
        let k = C - O.top, X = 0 - O.left;
        switch (I) {
          case "middle":
            k -= $ / 2;
            break;
          case "bottom":
            k -= $;
            break;
        }
        switch (A) {
          case "center":
            X -= Y / 2;
            break;
          case "right":
            X -= Y;
            break;
          case "inner":
            y === b - 1 ? X -= Y : y > 0 && (X -= Y / 2);
            break;
        }
        G = {
          left: X,
          top: k,
          width: Y + O.width,
          height: $ + O.height,
          color: W.backdropColor
        };
      }
      m.push({
        label: _,
        font: P,
        textOffset: C,
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
          backdrop: G
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
    i && lr(s, i);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, u = r.textOffset;
      es(s, c, 0, u, l, a);
    }
    i && cr(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: n, title: s, reverse: i } } = this;
    if (!s.display)
      return;
    const o = Xt(s.font), r = le(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    n === "bottom" || n === "center" || gt(n) ? (l += r.bottom, Vt(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: u, maxWidth: h, rotation: d } = ax(this, l, n, a);
    es(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: h,
      rotation: d,
      textAlign: rx(a, n, i),
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
class oo {
  constructor(t, n, s) {
    this.type = t, this.scope = n, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let s;
    ux(n) && (s = this.register(n));
    const i = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in i || (i[o] = t, lx(t, r, s), this.override && Nt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items, s = t.id, i = this.scope;
    s in n && delete n[s], i && s in Nt[i] && (delete Nt[i][s], this.override && delete ts[s]);
  }
}
function lx(e, t, n) {
  const s = vi(/* @__PURE__ */ Object.create(null), [
    n ? Nt.get(n) : {},
    Nt.get(t),
    e.defaults
  ]);
  Nt.set(t, s), e.defaultRoutes && cx(t, e.defaultRoutes), e.descriptors && Nt.describe(t, e.descriptors);
}
function cx(e, t) {
  Object.keys(t).forEach((n) => {
    const s = n.split("."), i = s.pop(), o = [
      e
    ].concat(s).join("."), r = t[n].split("."), a = r.pop(), l = r.join(".");
    Nt.route(o, i, l, a);
  });
}
function ux(e) {
  return "id" in e && "defaults" in e;
}
class hx {
  constructor() {
    this.controllers = new oo(Ve, "datasets", !0), this.elements = new oo(pn, "elements"), this.plugins = new oo(Object, "plugins"), this.scales = new oo(ss, "scales"), this._typedRegistries = [
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
      s || o.isForType(i) || o === this.plugins && i.id ? this._exec(t, o, i) : wt(i, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, n, s) {
    const i = ml(t);
    Ct(s["before" + i], [], s), n[t](s), Ct(s["after" + i], [], s);
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
var We = /* @__PURE__ */ new hx();
class dx {
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
      if (Ct(a, l, r) === !1 && i.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    ft(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const n = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const s = t && t.config, i = ht(s.options && s.options.plugins, {}), o = fx(s);
    return i === !1 && !n ? [] : gx(t, o, i, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [], s = this._cache, i = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(i(n, s), t, "stop"), this._notify(i(s, n), t, "start");
  }
}
function fx(e) {
  const t = {}, n = [], s = Object.keys(We.plugins.items);
  for (let o = 0; o < s.length; o++)
    n.push(We.getPlugin(s[o]));
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
function px(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function gx(e, { plugins: t, localIds: n }, s, i) {
  const o = [], r = e.getContext();
  for (const a of t) {
    const l = a.id, c = px(s[l], i);
    c !== null && o.push({
      plugin: a,
      options: mx(e.config, {
        plugin: a,
        local: n[l]
      }, c, r)
    });
  }
  return o;
}
function mx(e, { plugin: t, local: n }, s, i) {
  const o = e.pluginScopeKeys(t), r = e.getOptionScopes(s, o);
  return n && t.defaults && r.push(t.defaults), e.createResolver(r, i, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function ba(e, t) {
  const n = Nt.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x";
}
function yx(e, t) {
  let n = e;
  return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"), n;
}
function bx(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Au(e) {
  if (e === "x" || e === "y" || e === "r")
    return e;
}
function xx(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function xa(e, ...t) {
  if (Au(e))
    return e;
  for (const n of t) {
    const s = n.axis || xx(n.position) || e.length > 1 && Au(e[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function Tu(e, t, n) {
  if (n[t + "AxisID"] === e)
    return {
      axis: t
    };
}
function vx(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((s) => s.xAxisID === e || s.yAxisID === e);
    if (n.length)
      return Tu(e, "x", n[0]) || Tu(e, "y", n[0]);
  }
  return {};
}
function _x(e, t) {
  const n = ts[e.type] || {
    scales: {}
  }, s = t.scales || {}, i = ba(e.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!gt(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = xa(r, a, vx(r, e), Nt.scales[a.type]), c = bx(l, i), u = n.scales || {};
    o[r] = li(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      u[l],
      u[c]
    ]);
  }), e.data.datasets.forEach((r) => {
    const a = r.type || e.type, l = r.indexAxis || ba(a, t), u = (ts[a] || {}).scales || {};
    Object.keys(u).forEach((h) => {
      const d = yx(h, l), f = r[d + "AxisID"] || d;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), li(o[f], [
        {
          axis: d
        },
        s[f],
        u[h]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    li(a, [
      Nt.scales[a.type],
      Nt.scale
    ]);
  }), o;
}
function qf(e) {
  const t = e.options || (e.options = {});
  t.plugins = ht(t.plugins, {}), t.scales = _x(e, t);
}
function Zf(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function Sx(e) {
  return e = e || {}, e.data = Zf(e.data), qf(e), e;
}
const Pu = /* @__PURE__ */ new Map(), Qf = /* @__PURE__ */ new Set();
function ro(e, t) {
  let n = Pu.get(e);
  return n || (n = t(), Pu.set(e, n), Qf.add(n)), n;
}
const qs = (e, t, n) => {
  const s = Cn(t, n);
  s !== void 0 && e.add(s);
};
class wx {
  constructor(t) {
    this._config = Sx(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Zf(t);
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
    this.clearCache(), qf(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return ro(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, n) {
    return ro(`${t}.transition.${n}`, () => [
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
    return ro(`${t}-${n}`, () => [
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
    return ro(`${s}-plugin-${n}`, () => [
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
      t && (l.add(t), u.forEach((h) => qs(l, t, h))), u.forEach((h) => qs(l, i, h)), u.forEach((h) => qs(l, ts[o] || {}, h)), u.forEach((h) => qs(l, Nt, h)), u.forEach((h) => qs(l, ga, h));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Qf.has(n) && r.set(n, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [
      t,
      ts[n] || {},
      Nt.datasets[n] || {},
      {
        type: n
      },
      Nt,
      ga
    ];
  }
  resolveNamedOptions(t, n, s, i = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Mu(this._resolverCache, t, i);
    let l = r;
    if (Tx(r, n)) {
      o.$shared = !1, s = Dn(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Ms(r, s, c);
    }
    for (const c of n)
      o[c] = l[c];
    return o;
  }
  createResolver(t, n, s = [
    ""
  ], i) {
    const { resolver: o } = Mu(this._resolverCache, t, s);
    return gt(n) ? Ms(o, n, void 0, i) : o;
  }
}
function Mu(e, t, n) {
  let s = e.get(t);
  s || (s = /* @__PURE__ */ new Map(), e.set(t, s));
  const i = n.join();
  let o = s.get(i);
  return o || (o = {
    resolver: Sl(t, n),
    subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(i, o)), o;
}
const Ax = (e) => gt(e) && Object.getOwnPropertyNames(e).some((t) => Dn(e[t]));
function Tx(e, t) {
  const { isScriptable: n, isIndexable: s } = Ef(e);
  for (const i of t) {
    const o = n(i), r = s(i), a = (r || o) && e[i];
    if (o && (Dn(a) || Ax(a)) || r && Vt(a))
      return !0;
  }
  return !1;
}
var Px = "4.4.8";
const Mx = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Cu(e, t) {
  return e === "top" || e === "bottom" || Mx.indexOf(e) === -1 && t === "x";
}
function Du(e, t) {
  return function(n, s) {
    return n[e] === s[e] ? n[t] - s[t] : n[e] - s[e];
  };
}
function ku(e) {
  const t = e.chart, n = t.options.animation;
  t.notifyPlugins("afterRender"), Ct(n && n.onComplete, [
    e
  ], t);
}
function Cx(e) {
  const t = e.chart, n = t.options.animation;
  Ct(n && n.onProgress, [
    e
  ], t);
}
function Jf(e) {
  return Tl() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const Mo = {}, Eu = (e) => {
  const t = Jf(e);
  return Object.values(Mo).filter((n) => n.canvas === t).pop();
};
function Dx(e, t, n) {
  const s = Object.keys(e);
  for (const i of s) {
    const o = +i;
    if (o >= t) {
      const r = e[i];
      delete e[i], (n > 0 || o > t) && (e[o + n] = r);
    }
  }
}
function kx(e, t, n, s) {
  return !n || e.type === "mouseout" ? null : s ? t : e;
}
function ao(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function Ex(e, t) {
  const { xScale: n, yScale: s } = e;
  return n && s ? {
    left: ao(n, t, "left"),
    right: ao(n, t, "right"),
    top: ao(s, t, "top"),
    bottom: ao(s, t, "bottom")
  } : t;
}
class Ue {
  static register(...t) {
    We.add(...t), Ou();
  }
  static unregister(...t) {
    We.remove(...t), Ou();
  }
  constructor(t, n) {
    const s = this.config = new wx(n), i = Jf(t), o = Eu(i);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || G0(i))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(i, r.aspectRatio), l = a && a.canvas, c = l && l.height, u = l && l.width;
    if (this.id = Oy(), this.ctx = a, this.canvas = l, this.width = u, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new dx(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Xy((h) => this.update(h), r.resizeDelay || 0), this._dataChanges = [], Mo[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    nn.listen(this, "complete", ku), nn.listen(this, "progress", Cx), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: n }, width: s, height: i, _aspectRatio: o } = this;
    return ft(t) ? n && o ? o : i ? s / i : null : t;
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
    return We;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : tu(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Zc(this.canvas, this.ctx), this;
  }
  stop() {
    return nn.stop(this), this;
  }
  resize(t, n) {
    nn.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: n
    } : this._resize(t, n);
  }
  _resize(t, n) {
    const s = this.options, i = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(i, t, n, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, tu(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), Ct(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    wt(n, (s, i) => {
      s.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, n = t.scales, s = this.scales, i = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    n && (o = o.concat(Object.keys(n).map((r) => {
      const a = n[r], l = xa(r, a), c = l === "r", u = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), wt(o, (r) => {
      const a = r.options, l = a.id, c = xa(l, a), u = ht(a.type, r.dtype);
      (a.position === void 0 || Cu(a.position, c) !== Cu(r.dposition)) && (a.position = r.dposition), i[l] = !0;
      let h = null;
      if (l in s && s[l].type === u)
        h = s[l];
      else {
        const d = We.getScale(u);
        h = new d({
          id: l,
          type: u,
          ctx: this.ctx,
          chart: this
        }), s[h.id] = h;
      }
      h.init(a, t);
    }), wt(i, (r, a) => {
      r || delete s[a];
    }), wt(s, (r) => {
      re.configure(this, r, r.options), re.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, n = this.data.datasets.length, s = t.length;
    if (t.sort((i, o) => i.index - o.index), s > n) {
      for (let i = n; i < s; ++i)
        this._destroyDatasetMeta(i);
      t.splice(n, s - n);
    }
    this._sortedMetasets = t.slice(0).sort(Du("order", "index"));
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || ba(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = We.getController(a), { datasetElementType: c, dataElementType: u } = Nt.datasets[a];
        Object.assign(l, {
          dataElementType: We.getElement(u),
          datasetElementType: c && We.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    wt(this.data.datasets, (t, n) => {
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
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), i || wt(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Du("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    wt(this.scales, (t) => {
      re.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, n = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!Hc(n, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, n = this._getUniformDataChanges() || [];
    for (const { method: s, start: i, count: o } of n) {
      const r = s === "_removeElements" ? -o : o;
      Dx(t, i, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const n = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), i = s(0);
    for (let o = 1; o < n; o++)
      if (!Hc(i, s(o)))
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
    re.update(this, this.width, this.height, t);
    const n = this.chartArea, s = n.width <= 0 || n.height <= 0;
    this._layers = [], wt(this.boxes, (i) => {
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
    }) !== !1 && (nn.has(this) ? this.attached && !nn.running(this) && nn.start(this) : (this.draw(), ku({
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
    const n = this.ctx, s = t._clip, i = !s.disabled, o = Ex(t, this.chartArea), r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (i && lr(n, {
      left: s.left === !1 ? 0 : o.left - s.left,
      right: s.right === !1 ? this.width : o.right + s.right,
      top: s.top === !1 ? 0 : o.top - s.top,
      bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
    }), t.controller.draw(), i && cr(n), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return un(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, n, s, i) {
    const o = M0.modes[n];
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
    return this.$context || (this.$context = Rn(null, {
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
    _i(n) ? (o.data[n].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
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
    for (this.stop(), nn.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: n } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Zc(t, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), delete Mo[this.id], this.notifyPlugins("afterDestroy");
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
    wt(this.options.events, (o) => s(o, i));
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
    wt(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._listeners = {}, wt(this._responsiveListeners, (t, n) => {
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
    !Fo(s, n) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, n));
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
    const { _active: i = [], options: o } = this, r = n, a = this._getActiveElements(t, i, s, r), l = Ny(t), c = kx(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, Ct(o.onHover, [
      t,
      a,
      this
    ], this), l && Ct(o.onClick, [
      t,
      a,
      this
    ], this));
    const u = !Fo(a, i);
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
j(Ue, "defaults", Nt), j(Ue, "instances", Mo), j(Ue, "overrides", ts), j(Ue, "registry", We), j(Ue, "version", Px), j(Ue, "getChart", Eu);
function Ou() {
  return wt(Ue.instances, (e) => e._plugins.invalidate());
}
function Ox(e, t, n) {
  const { startAngle: s, pixelMargin: i, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = i / a;
  e.beginPath(), e.arc(o, r, a, s - c, n + c), l > i ? (c = i / l, e.arc(o, r, l, n + c, s - c, !0)) : e.arc(o, r, i, n + Kt, s - Kt), e.closePath(), e.clip();
}
function Rx(e) {
  return _l(e, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Lx(e, t, n, s) {
  const i = Rx(e.options.borderRadius), o = (n - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
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
function Ho(e, t, n, s, i, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: u } = t, h = Math.max(t.outerRadius + s + n - c, 0), d = u > 0 ? u + s + n + c : 0;
  let f = 0;
  const p = i - l;
  if (s) {
    const W = u > 0 ? u - s : 0, U = h > 0 ? h - s : 0, z = (W + U) / 2, Q = z !== 0 ? p * z / (z + s) : p;
    f = (p - Q) / 2;
  }
  const g = Math.max(1e-3, p * h - n / Rt) / h, m = (p - g) / 2, y = l + m + f, b = i - m - f, { outerStart: S, outerEnd: _, innerStart: x, innerEnd: w } = Lx(t, d, h, b - y), A = h - S, T = h - _, P = y + S / A, M = b - _ / T, D = d + x, C = d + w, I = y + x / D, Z = b - w / C;
  if (e.beginPath(), o) {
    const W = (P + M) / 2;
    if (e.arc(r, a, h, P, W), e.arc(r, a, h, W, M), _ > 0) {
      const J = hs(T, M, r, a);
      e.arc(J.x, J.y, _, M, b + Kt);
    }
    const U = hs(C, b, r, a);
    if (e.lineTo(U.x, U.y), w > 0) {
      const J = hs(C, Z, r, a);
      e.arc(J.x, J.y, w, b + Kt, Z + Math.PI);
    }
    const z = (b - w / d + (y + x / d)) / 2;
    if (e.arc(r, a, d, b - w / d, z, !0), e.arc(r, a, d, z, y + x / d, !0), x > 0) {
      const J = hs(D, I, r, a);
      e.arc(J.x, J.y, x, I + Math.PI, y - Kt);
    }
    const Q = hs(A, y, r, a);
    if (e.lineTo(Q.x, Q.y), S > 0) {
      const J = hs(A, P, r, a);
      e.arc(J.x, J.y, S, y - Kt, P);
    }
  } else {
    e.moveTo(r, a);
    const W = Math.cos(P) * h + r, U = Math.sin(P) * h + a;
    e.lineTo(W, U);
    const z = Math.cos(M) * h + r, Q = Math.sin(M) * h + a;
    e.lineTo(z, Q);
  }
  e.closePath();
}
function Ix(e, t, n, s, i) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Ho(e, t, n, s, l, i);
    for (let c = 0; c < o; ++c)
      e.fill();
    isNaN(a) || (l = r + (a % Ot || Ot));
  }
  return Ho(e, t, n, s, l, i), e.fill(), l;
}
function Fx(e, t, n, s, i) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: u, borderDash: h, borderDashOffset: d } = l, f = l.borderAlign === "inner";
  if (!c)
    return;
  e.setLineDash(h || []), e.lineDashOffset = d, f ? (e.lineWidth = c * 2, e.lineJoin = u || "round") : (e.lineWidth = c, e.lineJoin = u || "bevel");
  let p = t.endAngle;
  if (o) {
    Ho(e, t, n, s, p, i);
    for (let g = 0; g < o; ++g)
      e.stroke();
    isNaN(a) || (p = r + (a % Ot || Ot));
  }
  f && Ox(e, t, p), o || (Ho(e, t, n, s, p, i), e.stroke());
}
class ni extends pn {
  constructor(n) {
    super();
    j(this, "circumference");
    j(this, "endAngle");
    j(this, "fullCircles");
    j(this, "innerRadius");
    j(this, "outerRadius");
    j(this, "pixelMargin");
    j(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, n && Object.assign(this, n);
  }
  inRange(n, s, i) {
    const o = this.getProps([
      "x",
      "y"
    ], i), { angle: r, distance: a } = _f(o, {
      x: n,
      y: s
    }), { startAngle: l, endAngle: c, innerRadius: u, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), f = (this.options.spacing + this.options.borderWidth) / 2, p = ht(d, c - l), g = Si(r, l, c) && l !== c, m = p >= Ot || g, y = ln(a, u + f, h + f);
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
    n.fillStyle = s.backgroundColor, n.strokeStyle = s.borderColor, Ix(n, this, u, r, a), Fx(n, this, u, r, a), n.restore();
  }
}
j(ni, "id", "arc"), j(ni, "defaults", {
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
}), j(ni, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), j(ni, "descriptors", {
  _scriptable: !0,
  _indexable: (n) => n !== "borderDash"
});
function tp(e, t, n = t) {
  e.lineCap = ht(n.borderCapStyle, t.borderCapStyle), e.setLineDash(ht(n.borderDash, t.borderDash)), e.lineDashOffset = ht(n.borderDashOffset, t.borderDashOffset), e.lineJoin = ht(n.borderJoinStyle, t.borderJoinStyle), e.lineWidth = ht(n.borderWidth, t.borderWidth), e.strokeStyle = ht(n.borderColor, t.borderColor);
}
function Vx(e, t, n) {
  e.lineTo(n.x, n.y);
}
function Nx(e) {
  return e.stepped ? ab : e.tension || e.cubicInterpolationMode === "monotone" ? lb : Vx;
}
function ep(e, t, n = {}) {
  const s = e.length, { start: i = 0, end: o = s - 1 } = n, { start: r, end: a } = t, l = Math.max(i, r), c = Math.min(o, a), u = i < r && o < r || i > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !u ? s + c - l : c - l
  };
}
function Bx(e, t, n, s) {
  const { points: i, options: o } = t, { count: r, start: a, loop: l, ilen: c } = ep(i, n, s), u = Nx(o);
  let { move: h = !0, reverse: d } = s || {}, f, p, g;
  for (f = 0; f <= c; ++f)
    p = i[(a + (d ? c - f : f)) % r], !p.skip && (h ? (e.moveTo(p.x, p.y), h = !1) : u(e, g, p, d, o.stepped), g = p);
  return l && (p = i[(a + (d ? c : 0)) % r], u(e, g, p, d, o.stepped)), !!l;
}
function jx(e, t, n, s) {
  const i = t.points, { count: o, start: r, ilen: a } = ep(i, n, s), { move: l = !0, reverse: c } = s || {};
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
function va(e) {
  const t = e.options, n = t.borderDash && t.borderDash.length;
  return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !n ? jx : Bx;
}
function $x(e) {
  return e.stepped ? jb : e.tension || e.cubicInterpolationMode === "monotone" ? $b : Un;
}
function Hx(e, t, n, s) {
  let i = t._path;
  i || (i = t._path = new Path2D(), t.path(i, n, s) && i.closePath()), tp(e, t.options), e.stroke(i);
}
function zx(e, t, n, s) {
  const { segments: i, options: o } = t, r = va(t);
  for (const a of i)
    tp(e, o, a.style), e.beginPath(), r(e, t, a, {
      start: n,
      end: n + s - 1
    }) && e.closePath(), e.stroke();
}
const Wx = typeof Path2D == "function";
function Ux(e, t, n, s) {
  Wx && !t.options.segment ? Hx(e, t, n, s) : zx(e, t, n, s);
}
class Sn extends pn {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const i = s.spanGaps ? this._loop : this._fullLoop;
      Ob(this._points, s, t, i, n), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Kb(this, this.options.segment));
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
    const s = this.options, i = t[n], o = this.points, r = $f(this, {
      property: n,
      start: i,
      end: i
    });
    if (!r.length)
      return;
    const a = [], l = $x(s);
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
    return va(this)(t, this, n, s);
  }
  path(t, n, s) {
    const i = this.segments, o = va(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), Ux(t, this, s, i), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
j(Sn, "id", "line"), j(Sn, "defaults", {
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
}), j(Sn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), j(Sn, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Ru(e, t, n, s) {
  const i = e.options, { [n]: o } = e.getProps([
    n
  ], s);
  return Math.abs(t - o) < i.radius + i.hitRadius;
}
class Co extends pn {
  constructor(n) {
    super();
    j(this, "parsed");
    j(this, "skip");
    j(this, "stop");
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
    return Ru(this, n, "x", s);
  }
  inYRange(n, s) {
    return Ru(this, n, "y", s);
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
    this.skip || i.radius < 0.1 || !un(this, s, this.size(i) / 2) || (n.strokeStyle = i.borderColor, n.lineWidth = i.borderWidth, n.fillStyle = i.backgroundColor, ma(n, i, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
j(Co, "id", "point"), /**
* @type {any}
*/
j(Co, "defaults", {
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
j(Co, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function np(e, t) {
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
function Yx(e, t, n) {
  const s = e.options.borderWidth, i = e.borderSkipped, o = kf(s);
  return {
    t: wn(i.top, o.top, 0, n),
    r: wn(i.right, o.right, 0, t),
    b: wn(i.bottom, o.bottom, 0, n),
    l: wn(i.left, o.left, 0, t)
  };
}
function Kx(e, t, n) {
  const { enableBorderRadius: s } = e.getProps([
    "enableBorderRadius"
  ]), i = e.options.borderRadius, o = qn(i), r = Math.min(t, n), a = e.borderSkipped, l = s || gt(i);
  return {
    topLeft: wn(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: wn(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: wn(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: wn(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function Gx(e) {
  const t = np(e), n = t.right - t.left, s = t.bottom - t.top, i = Yx(e, n / 2, s / 2), o = Kx(e, n / 2, s / 2);
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
function zr(e, t, n, s) {
  const i = t === null, o = n === null, a = e && !(i && o) && np(e, s);
  return a && (i || ln(t, a.left, a.right)) && (o || ln(n, a.top, a.bottom));
}
function Xx(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function qx(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function Wr(e, t, n = {}) {
  const s = e.x !== n.x ? -t : 0, i = e.y !== n.y ? -t : 0, o = (e.x + e.w !== n.x + n.w ? t : 0) - s, r = (e.y + e.h !== n.y + n.h ? t : 0) - i;
  return {
    x: e.x + s,
    y: e.y + i,
    w: e.w + o,
    h: e.h + r,
    radius: e.radius
  };
}
class Do extends pn {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: n, options: { borderColor: s, backgroundColor: i } } = this, { inner: o, outer: r } = Gx(this), a = Xx(r.radius) ? wi : qx;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, Wr(r, n, o)), t.clip(), a(t, Wr(o, -n, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, Wr(o, n)), t.fillStyle = i, t.fill(), t.restore();
  }
  inRange(t, n, s) {
    return zr(this, t, n, s);
  }
  inXRange(t, n) {
    return zr(this, t, null, n);
  }
  inYRange(t, n) {
    return zr(this, null, t, n);
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
j(Do, "id", "bar"), j(Do, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), j(Do, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
var Zx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: ni,
  BarElement: Do,
  LineElement: Sn,
  PointElement: Co
});
const _a = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], Lu = /* @__PURE__ */ _a.map((e) => e.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function sp(e) {
  return _a[e % _a.length];
}
function ip(e) {
  return Lu[e % Lu.length];
}
function Qx(e, t) {
  return e.borderColor = sp(t), e.backgroundColor = ip(t), ++t;
}
function Jx(e, t) {
  return e.backgroundColor = e.data.map(() => sp(t++)), t;
}
function tv(e, t) {
  return e.backgroundColor = e.data.map(() => ip(t++)), t;
}
function ev(e) {
  let t = 0;
  return (n, s) => {
    const i = e.getDatasetMeta(s).controller;
    i instanceof Kn ? t = Jx(n, t) : i instanceof di ? t = tv(n, t) : i && (t = Qx(n, t));
  };
}
function Iu(e) {
  let t;
  for (t in e)
    if (e[t].borderColor || e[t].backgroundColor)
      return !0;
  return !1;
}
function nv(e) {
  return e && (e.borderColor || e.backgroundColor);
}
function sv() {
  return Nt.borderColor !== "rgba(0,0,0,0.1)" || Nt.backgroundColor !== "rgba(0,0,0,0.1)";
}
var iv = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(e, t, n) {
    if (!n.enabled)
      return;
    const { data: { datasets: s }, options: i } = e.config, { elements: o } = i, r = Iu(s) || nv(i) || o && Iu(o) || sv();
    if (!n.forceOverride && r)
      return;
    const a = ev(e);
    s.forEach(a);
  }
};
function ov(e, t, n, s, i) {
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
    const w = Math.floor(h * a) + 1 + t, A = Math.min(Math.floor((h + 1) * a) + 1, n) + t, { x: T, y: P } = e[u];
    for (f = p = -1, b = w; b < A; b++)
      p = 0.5 * Math.abs((T - m) * (e[b].y - P) - (T - e[b].x) * (y - P)), p > f && (f = p, d = e[b], g = b);
    r[l++] = d, u = g;
  }
  return r[l++] = e[c], r;
}
function rv(e, t, n, s) {
  let i = 0, o = 0, r, a, l, c, u, h, d, f, p, g;
  const m = [], y = t + n - 1, b = e[t].x, _ = e[y].x - b;
  for (r = t; r < t + n; ++r) {
    a = e[r], l = (a.x - b) / _ * s, c = a.y;
    const x = l | 0;
    if (x === u)
      c < p ? (p = c, h = r) : c > g && (g = c, d = r), i = (o * i + a.x) / ++o;
    else {
      const w = r - 1;
      if (!ft(h) && !ft(d)) {
        const A = Math.min(h, d), T = Math.max(h, d);
        A !== f && A !== w && m.push({
          ...e[A],
          x: i
        }), T !== f && T !== w && m.push({
          ...e[T],
          x: i
        });
      }
      r > 0 && w !== f && m.push(e[w]), m.push(a), u = x, o = 0, p = g = c, h = d = f = r;
    }
  }
  return m;
}
function op(e) {
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
function Fu(e) {
  e.data.datasets.forEach((t) => {
    op(t);
  });
}
function av(e, t) {
  const n = t.length;
  let s = 0, i;
  const { iScale: o } = e, { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
  return l && (s = Zt(cn(t, o.axis, r).lo, 0, n - 1)), c ? i = Zt(cn(t, o.axis, a).hi + 1, s, n) - s : i = n - s, {
    start: s,
    count: i
  };
}
var lv = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (e, t, n) => {
    if (!n.enabled) {
      Fu(e);
      return;
    }
    const s = e.width;
    e.data.datasets.forEach((i, o) => {
      const { _data: r, indexAxis: a } = i, l = e.getDatasetMeta(o), c = r || i.data;
      if (ti([
        a,
        e.options.indexAxis
      ]) === "y" || !l.controller.supportsDecimation)
        return;
      const u = e.scales[l.xAxisID];
      if (u.type !== "linear" && u.type !== "time" || e.options.parsing)
        return;
      let { start: h, count: d } = av(l, c);
      const f = n.threshold || 4 * s;
      if (d <= f) {
        op(i);
        return;
      }
      ft(r) && (i._data = c, delete i.data, Object.defineProperty(i, "data", {
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
          p = ov(c, h, d, s, n);
          break;
        case "min-max":
          p = rv(c, h, d, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`);
      }
      i._decimated = p;
    });
  },
  destroy(e) {
    Fu(e);
  }
};
function cv(e, t, n) {
  const s = e.segments, i = e.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = Cl(l, c, i);
    const u = Sa(n, i[l], i[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: u,
        start: i[l],
        end: i[c]
      });
      continue;
    }
    const h = $f(t, u);
    for (const d of h) {
      const f = Sa(n, o[d.start], o[d.end], d.loop), p = jf(a, i, f);
      for (const g of p)
        r.push({
          source: g,
          target: d,
          start: {
            [n]: Vu(u, f, "start", Math.max)
          },
          end: {
            [n]: Vu(u, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Sa(e, t, n, s) {
  if (s)
    return;
  let i = t[e], o = n[e];
  return e === "angle" && (i = Se(i), o = Se(o)), {
    property: e,
    start: i,
    end: o
  };
}
function uv(e, t) {
  const { x: n = null, y: s = null } = e || {}, i = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Cl(r, a, i);
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
function Cl(e, t, n) {
  for (; t > e; t--) {
    const s = n[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function Vu(e, t, n, s) {
  return e && t ? s(e[n], t[n]) : e ? e[n] : t ? t[n] : 0;
}
function rp(e, t) {
  let n = [], s = !1;
  return Vt(e) ? (s = !0, n = e) : n = uv(e, t), n.length ? new Sn({
    points: n,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function Nu(e) {
  return e && e.fill !== !1;
}
function hv(e, t, n) {
  let i = e[t].fill;
  const o = [
    t
  ];
  let r;
  if (!n)
    return i;
  for (; i !== !1 && o.indexOf(i) === -1; ) {
    if (!Ut(i))
      return i;
    if (r = e[i], !r)
      return !1;
    if (r.visible)
      return i;
    o.push(i), i = r.fill;
  }
  return !1;
}
function dv(e, t, n) {
  const s = mv(e);
  if (gt(s))
    return isNaN(s.value) ? !1 : s;
  let i = parseFloat(s);
  return Ut(i) && Math.floor(i) === i ? fv(s[0], t, i, n) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function fv(e, t, n, s) {
  return (e === "-" || e === "+") && (n = t + n), n === t || n < 0 || n >= s ? !1 : n;
}
function pv(e, t) {
  let n = null;
  return e === "start" ? n = t.bottom : e === "end" ? n = t.top : gt(e) ? n = t.getPixelForValue(e.value) : t.getBasePixel && (n = t.getBasePixel()), n;
}
function gv(e, t, n) {
  let s;
  return e === "start" ? s = n : e === "end" ? s = t.options.reverse ? t.min : t.max : gt(e) ? s = e.value : s = t.getBaseValue(), s;
}
function mv(e) {
  const t = e.options, n = t.fill;
  let s = ht(n && n.target, n);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function yv(e) {
  const { scale: t, index: n, line: s } = e, i = [], o = s.segments, r = s.points, a = bv(t, n);
  a.push(rp({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let u = c.start; u <= c.end; u++)
      xv(i, r[u], a);
  }
  return new Sn({
    points: i,
    options: {}
  });
}
function bv(e, t) {
  const n = [], s = e.getMatchingVisibleMetas("line");
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (o.index === t)
      break;
    o.hidden || n.unshift(o.dataset);
  }
  return n;
}
function xv(e, t, n) {
  const s = [];
  for (let i = 0; i < n.length; i++) {
    const o = n[i], { first: r, last: a, point: l } = vv(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (e.push(l), !a)
        break;
    }
  }
  e.push(...s);
}
function vv(e, t, n) {
  const s = e.interpolate(t, n);
  if (!s)
    return {};
  const i = s[n], o = e.segments, r = e.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const u = o[c], h = r[u.start][n], d = r[u.end][n];
    if (ln(i, h, d)) {
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
class ap {
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
function _v(e) {
  const { chart: t, fill: n, line: s } = e;
  if (Ut(n))
    return Sv(t, n);
  if (n === "stack")
    return yv(e);
  if (n === "shape")
    return !0;
  const i = wv(e);
  return i instanceof ap ? i : rp(i, s);
}
function Sv(e, t) {
  const n = e.getDatasetMeta(t);
  return n && e.isDatasetVisible(t) ? n.dataset : null;
}
function wv(e) {
  return (e.scale || {}).getPointPositionForValue ? Tv(e) : Av(e);
}
function Av(e) {
  const { scale: t = {}, fill: n } = e, s = pv(n, t);
  if (Ut(s)) {
    const i = t.isHorizontal();
    return {
      x: i ? s : null,
      y: i ? null : s
    };
  }
  return null;
}
function Tv(e) {
  const { scale: t, fill: n } = e, s = t.options, i = t.getLabels().length, o = s.reverse ? t.max : t.min, r = gv(n, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new ap({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < i; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function Ur(e, t, n) {
  const s = _v(t), { line: i, scale: o, axis: r } = t, a = i.options, l = a.fill, c = a.backgroundColor, { above: u = c, below: h = c } = l || {};
  s && i.points.length && (lr(e, n), Pv(e, {
    line: i,
    target: s,
    above: u,
    below: h,
    area: n,
    scale: o,
    axis: r
  }), cr(e));
}
function Pv(e, t) {
  const { line: n, target: s, above: i, below: o, area: r, scale: a } = t, l = n._loop ? "angle" : t.axis;
  e.save(), l === "x" && o !== i && (Bu(e, s, r.top), ju(e, {
    line: n,
    target: s,
    color: i,
    scale: a,
    property: l
  }), e.restore(), e.save(), Bu(e, s, r.bottom)), ju(e, {
    line: n,
    target: s,
    color: o,
    scale: a,
    property: l
  }), e.restore();
}
function Bu(e, t, n) {
  const { segments: s, points: i } = t;
  let o = !0, r = !1;
  e.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, u = i[l], h = i[Cl(l, c, i)];
    o ? (e.moveTo(u.x, u.y), o = !1) : (e.lineTo(u.x, n), e.lineTo(u.x, u.y)), r = !!t.pathSegment(e, a, {
      move: r
    }), r ? e.closePath() : e.lineTo(h.x, n);
  }
  e.lineTo(t.first().x, n), e.closePath(), e.clip();
}
function ju(e, t) {
  const { line: n, target: s, property: i, color: o, scale: r } = t, a = cv(n, s, i);
  for (const { source: l, target: c, start: u, end: h } of a) {
    const { style: { backgroundColor: d = o } = {} } = l, f = s !== !0;
    e.save(), e.fillStyle = d, Mv(e, r, f && Sa(i, u, h)), e.beginPath();
    const p = !!n.pathSegment(e, l);
    let g;
    if (f) {
      p ? e.closePath() : $u(e, s, h, i);
      const m = !!s.pathSegment(e, c, {
        move: p,
        reverse: !0
      });
      g = p && m, g || $u(e, s, u, i);
    }
    e.closePath(), e.fill(g ? "evenodd" : "nonzero"), e.restore();
  }
}
function Mv(e, t, n) {
  const { top: s, bottom: i } = t.chart.chartArea, { property: o, start: r, end: a } = n || {};
  o === "x" && (e.beginPath(), e.rect(r, s, a - r, i - s), e.clip());
}
function $u(e, t, n, s) {
  const i = t.interpolate(n, s);
  i && e.lineTo(i.x, i.y);
}
var Cv = {
  id: "filler",
  afterDatasetsUpdate(e, t, n) {
    const s = (e.data.datasets || []).length, i = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = e.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Sn && (l = {
        visible: e.isDatasetVisible(r),
        index: r,
        fill: dv(a, r, s),
        chart: e,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, i.push(l);
    for (r = 0; r < s; ++r)
      l = i[r], !(!l || l.fill === !1) && (l.fill = hv(i, r, n.propagate));
  },
  beforeDraw(e, t, n) {
    const s = n.drawTime === "beforeDraw", i = e.getSortedVisibleDatasetMetas(), o = e.chartArea;
    for (let r = i.length - 1; r >= 0; --r) {
      const a = i[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && Ur(e.ctx, a, o));
    }
  },
  beforeDatasetsDraw(e, t, n) {
    if (n.drawTime !== "beforeDatasetsDraw")
      return;
    const s = e.getSortedVisibleDatasetMetas();
    for (let i = s.length - 1; i >= 0; --i) {
      const o = s[i].$filler;
      Nu(o) && Ur(e.ctx, o, e.chartArea);
    }
  },
  beforeDatasetDraw(e, t, n) {
    const s = t.meta.$filler;
    !Nu(s) || n.drawTime !== "beforeDatasetDraw" || Ur(e.ctx, s, e.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Hu = (e, t) => {
  let { boxHeight: n = t, boxWidth: s = t } = e;
  return e.usePointStyle && (n = Math.min(n, t), s = e.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: n,
    itemHeight: Math.max(t, n)
  };
}, Dv = (e, t) => e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class zu extends pn {
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
    let n = Ct(t.generateLabels, [
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
    const s = t.labels, i = Xt(s.font), o = i.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Hu(s, o);
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
      const { itemWidth: b, itemHeight: S } = kv(s, n, o, m, i);
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
    const t = this._computeTitleHeight(), { legendHitBoxes: n, options: { align: s, labels: { padding: i }, rtl: o } } = this, r = Ss(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = ie(s, this.left + i, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row && (a = c.row, l = ie(s, this.left + i, this.right - this.lineWidths[a])), c.top += this.top + t + i, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + i;
    } else {
      let a = 0, l = ie(s, this.top + t + i, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a && (a = c.col, l = ie(s, this.top + t + i, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + i, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + i;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      lr(t, this), this._draw(), cr(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: s, ctx: i } = this, { align: o, labels: r } = t, a = Nt.color, l = Ss(t.rtl, this.left, this.width), c = Xt(r.font), { padding: u } = r, h = c.size, d = h / 2;
    let f;
    this.drawTitle(), i.textAlign = l.textAlign("left"), i.textBaseline = "middle", i.lineWidth = 0.5, i.font = c.string;
    const { boxWidth: p, boxHeight: g, itemHeight: m } = Hu(r, h), y = function(w, A, T) {
      if (isNaN(p) || p <= 0 || isNaN(g) || g < 0)
        return;
      i.save();
      const P = ht(T.lineWidth, 1);
      if (i.fillStyle = ht(T.fillStyle, a), i.lineCap = ht(T.lineCap, "butt"), i.lineDashOffset = ht(T.lineDashOffset, 0), i.lineJoin = ht(T.lineJoin, "miter"), i.lineWidth = P, i.strokeStyle = ht(T.strokeStyle, a), i.setLineDash(ht(T.lineDash, [])), r.usePointStyle) {
        const M = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: T.pointStyle,
          rotation: T.rotation,
          borderWidth: P
        }, D = l.xPlus(w, p / 2), C = A + d;
        Df(i, M, D, C, r.pointStyleWidth && p);
      } else {
        const M = A + Math.max((h - g) / 2, 0), D = l.leftForLtr(w, p), C = qn(T.borderRadius);
        i.beginPath(), Object.values(C).some((I) => I !== 0) ? wi(i, {
          x: D,
          y: M,
          w: p,
          h: g,
          radius: C
        }) : i.rect(D, M, p, g), i.fill(), P !== 0 && i.stroke();
      }
      i.restore();
    }, b = function(w, A, T) {
      es(i, T.text, w, A + m / 2, c, {
        strikethrough: T.hidden,
        textAlign: l.textAlign(T.textAlign)
      });
    }, S = this.isHorizontal(), _ = this._computeTitleHeight();
    S ? f = {
      x: ie(o, this.left + u, this.right - s[0]),
      y: this.top + u + _,
      line: 0
    } : f = {
      x: this.left + u,
      y: ie(o, this.top + _ + u, this.bottom - n[0].height),
      line: 0
    }, Vf(this.ctx, t.textDirection);
    const x = m + u;
    this.legendItems.forEach((w, A) => {
      i.strokeStyle = w.fontColor, i.fillStyle = w.fontColor;
      const T = i.measureText(w.text).width, P = l.textAlign(w.textAlign || (w.textAlign = r.textAlign)), M = p + d + T;
      let D = f.x, C = f.y;
      l.setWidth(this.width), S ? A > 0 && D + M + u > this.right && (C = f.y += x, f.line++, D = f.x = ie(o, this.left + u, this.right - s[f.line])) : A > 0 && C + x > this.bottom && (D = f.x = D + n[f.line].width + u, f.line++, C = f.y = ie(o, this.top + _ + u, this.bottom - n[f.line].height));
      const I = l.x(D);
      if (y(I, C, w), D = qy(P, D + p + d, S ? D + M : this.right, t.rtl), b(l.x(D), C, w), S)
        f.x += M + u;
      else if (typeof w.text != "string") {
        const Z = c.lineHeight;
        f.y += lp(w, Z) + u;
      } else
        f.y += x;
    }), Nf(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, n = t.title, s = Xt(n.font), i = le(n.padding);
    if (!n.display)
      return;
    const o = Ss(t.rtl, this.left, this.width), r = this.ctx, a = n.position, l = s.size / 2, c = i.top + l;
    let u, h = this.left, d = this.width;
    if (this.isHorizontal())
      d = Math.max(...this.lineWidths), u = this.top + c, h = ie(t.align, h, this.right - d);
    else {
      const p = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
      u = c + ie(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
    }
    const f = ie(a, h, h + d);
    r.textAlign = o.textAlign(xl(a)), r.textBaseline = "middle", r.strokeStyle = n.color, r.fillStyle = n.color, r.font = s.string, es(r, n.text, f, u, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, n = Xt(t.font), s = le(t.padding);
    return t.display ? n.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, n) {
    let s, i, o;
    if (ln(t, this.left, this.right) && ln(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (i = o[s], ln(t, i.left, i.left + i.width) && ln(n, i.top, i.top + i.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!Rv(t.type, n))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const i = this._hoveredItem, o = Dv(i, s);
      i && !o && Ct(n.onLeave, [
        t,
        i,
        this
      ], this), this._hoveredItem = s, s && !o && Ct(n.onHover, [
        t,
        s,
        this
      ], this);
    } else s && Ct(n.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function kv(e, t, n, s, i) {
  const o = Ev(s, e, t, n), r = Ov(i, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function Ev(e, t, n, s) {
  let i = e.text;
  return i && typeof i != "string" && (i = i.reduce((o, r) => o.length > r.length ? o : r)), t + n.size / 2 + s.measureText(i).width;
}
function Ov(e, t, n) {
  let s = e;
  return typeof t.text != "string" && (s = lp(t, n)), s;
}
function lp(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function Rv(e, t) {
  return !!((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup"));
}
var Lv = {
  id: "legend",
  _element: zu,
  start(e, t, n) {
    const s = e.legend = new zu({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    re.configure(e, s, n), re.addBox(e, s);
  },
  stop(e) {
    re.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const s = e.legend;
    re.configure(e, s, n), s.options = n;
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
          const c = l.controller.getStyle(n ? 0 : void 0), u = le(c.borderWidth);
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
class Dl extends pn {
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
    this._padding = le(s.padding);
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
    return this.isHorizontal() ? (u = ie(a, s, o), h = n + t, c = o - s) : (r.position === "left" ? (u = s + t, h = ie(a, i, n), l = Rt * -0.5) : (u = o - t, h = ie(a, n, i), l = Rt * 0.5), c = i - n), {
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
      textAlign: xl(n.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function Iv(e, t) {
  const n = new Dl({
    ctx: e.ctx,
    options: t,
    chart: e
  });
  re.configure(e, n, t), re.addBox(e, n), e.titleBlock = n;
}
var Fv = {
  id: "title",
  _element: Dl,
  start(e, t, n) {
    Iv(e, n);
  },
  stop(e) {
    const t = e.titleBlock;
    re.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, n) {
    const s = e.titleBlock;
    re.configure(e, s, n), s.options = n;
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
const lo = /* @__PURE__ */ new WeakMap();
var Vv = {
  id: "subtitle",
  start(e, t, n) {
    const s = new Dl({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    re.configure(e, s, n), re.addBox(e, s), lo.set(e, s);
  },
  stop(e) {
    re.removeBox(e, lo.get(e)), lo.delete(e);
  },
  beforeUpdate(e, t, n) {
    const s = lo.get(e);
    re.configure(e, s, n), s.options = n;
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
const si = {
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
        const c = l.getCenterPoint(), u = pa(t, c);
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
function He(e, t) {
  return t && (Vt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function sn(e) {
  return (typeof e == "string" || e instanceof String) && e.indexOf(`
`) > -1 ? e.split(`
`) : e;
}
function Nv(e, t) {
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
function Wu(e, t) {
  const n = e.chart.ctx, { body: s, footer: i, title: o } = e, { boxWidth: r, boxHeight: a } = t, l = Xt(t.bodyFont), c = Xt(t.titleFont), u = Xt(t.footerFont), h = o.length, d = i.length, f = s.length, p = le(t.padding);
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
  return n.save(), n.font = c.string, wt(e.title, S), n.font = l.string, wt(e.beforeBody.concat(e.afterBody), S), b = t.displayColors ? r + 2 + t.boxPadding : 0, wt(s, (_) => {
    wt(_.before, S), wt(_.lines, S), wt(_.after, S);
  }), b = 0, n.font = u.string, wt(e.footer, S), n.restore(), m += p.width, {
    width: m,
    height: g
  };
}
function Bv(e, t) {
  const { y: n, height: s } = t;
  return n < s / 2 ? "top" : n > e.height - s / 2 ? "bottom" : "center";
}
function jv(e, t, n, s) {
  const { x: i, width: o } = s, r = n.caretSize + n.caretPadding;
  if (e === "left" && i + o + r > t.width || e === "right" && i - o - r < 0)
    return !0;
}
function $v(e, t, n, s) {
  const { x: i, width: o } = n, { width: r, chartArea: { left: a, right: l } } = e;
  let c = "center";
  return s === "center" ? c = i <= (a + l) / 2 ? "left" : "right" : i <= o / 2 ? c = "left" : i >= r - o / 2 && (c = "right"), jv(c, e, t, n) && (c = "center"), c;
}
function Uu(e, t, n) {
  const s = n.yAlign || t.yAlign || Bv(e, n);
  return {
    xAlign: n.xAlign || t.xAlign || $v(e, t, n, s),
    yAlign: s
  };
}
function Hv(e, t) {
  let { x: n, width: s } = e;
  return t === "right" ? n -= s : t === "center" && (n -= s / 2), n;
}
function zv(e, t, n) {
  let { y: s, height: i } = e;
  return t === "top" ? s += n : t === "bottom" ? s -= i + n : s -= i / 2, s;
}
function Yu(e, t, n, s) {
  const { caretSize: i, caretPadding: o, cornerRadius: r } = e, { xAlign: a, yAlign: l } = n, c = i + o, { topLeft: u, topRight: h, bottomLeft: d, bottomRight: f } = qn(r);
  let p = Hv(t, a);
  const g = zv(t, l, c);
  return l === "center" ? a === "left" ? p += c : a === "right" && (p -= c) : a === "left" ? p -= Math.max(u, d) + i : a === "right" && (p += Math.max(h, f) + i), {
    x: Zt(p, 0, s.width - t.width),
    y: Zt(g, 0, s.height - t.height)
  };
}
function co(e, t, n) {
  const s = le(n.padding);
  return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - s.right : e.x + s.left;
}
function Ku(e) {
  return He([], sn(e));
}
function Wv(e, t, n) {
  return Rn(e, {
    tooltip: t,
    tooltipItems: n,
    type: "tooltip"
  });
}
function Gu(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const cp = {
  beforeTitle: en,
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
  afterTitle: en,
  beforeBody: en,
  beforeLabel: en,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return ft(n) || (t += n), t;
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
  afterLabel: en,
  afterBody: en,
  beforeFooter: en,
  footer: en,
  afterFooter: en
};
function he(e, t, n, s) {
  const i = e[t].call(n, s);
  return typeof i > "u" ? cp[t].call(n, s) : i;
}
class wa extends pn {
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
    const n = this.chart, s = this.options.setContext(this.getContext()), i = s.enabled && n.options.animation && s.animations, o = new Hf(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Wv(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, n) {
    const { callbacks: s } = n, i = he(s, "beforeTitle", this, t), o = he(s, "title", this, t), r = he(s, "afterTitle", this, t);
    let a = [];
    return a = He(a, sn(i)), a = He(a, sn(o)), a = He(a, sn(r)), a;
  }
  getBeforeBody(t, n) {
    return Ku(he(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: s } = n, i = [];
    return wt(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Gu(s, o);
      He(r.before, sn(he(a, "beforeLabel", this, o))), He(r.lines, he(a, "label", this, o)), He(r.after, sn(he(a, "afterLabel", this, o))), i.push(r);
    }), i;
  }
  getAfterBody(t, n) {
    return Ku(he(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: s } = n, i = he(s, "beforeFooter", this, t), o = he(s, "footer", this, t), r = he(s, "afterFooter", this, t);
    let a = [];
    return a = He(a, sn(i)), a = He(a, sn(o)), a = He(a, sn(r)), a;
  }
  _createItems(t) {
    const n = this._active, s = this.chart.data, i = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = n.length; l < c; ++l)
      a.push(Nv(this.chart, n[l]));
    return t.filter && (a = a.filter((u, h, d) => t.filter(u, h, d, s))), t.itemSort && (a = a.sort((u, h) => t.itemSort(u, h, s))), wt(a, (u) => {
      const h = Gu(t.callbacks, u);
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
      const a = si[s.position].call(this, i, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = Wu(this, s), c = Object.assign({}, a, l), u = Uu(this.chart, s, c), h = Yu(s, c, u, this.chart);
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
    const { xAlign: i, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: u, bottomRight: h } = qn(a), { x: d, y: f } = t, { width: p, height: g } = n;
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
      const c = Ss(s.rtl, this.x, this.width);
      for (t.x = co(this, s.titleAlign, s), n.textAlign = c.textAlign(s.titleAlign), n.textBaseline = "middle", r = Xt(s.titleFont), a = s.titleSpacing, n.fillStyle = s.titleColor, n.font = r.string, l = 0; l < o; ++l)
        n.fillText(i[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, n, s, i, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, u = Xt(o.bodyFont), h = co(this, "left", o), d = i.x(h), f = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0, p = n.y + f;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = i.leftForLtr(d, c) + c / 2, y = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, ma(t, g, m, y), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, ma(t, g, m, y);
    } else {
      t.lineWidth = gt(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const g = i.leftForLtr(d, c), m = i.leftForLtr(i.xPlus(d, 1), c - 2), y = qn(r.borderRadius);
      Object.values(y).some((b) => b !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, wi(t, {
        x: g,
        y: p,
        w: c,
        h: l,
        radius: y
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), wi(t, {
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
    const p = Ss(s.rtl, this.x, this.width), g = function(T) {
      n.fillText(T, p.x(t.x + f), t.y + d / 2), t.y += d + o;
    }, m = p.textAlign(r);
    let y, b, S, _, x, w, A;
    for (n.textAlign = r, n.textBaseline = "middle", n.font = h.string, t.x = co(this, m, s), n.fillStyle = s.bodyColor, wt(this.beforeBody, g), f = a && m !== "right" ? r === "center" ? c / 2 + u : c + 2 + u : 0, _ = 0, w = i.length; _ < w; ++_) {
      for (y = i[_], b = this.labelTextColors[_], n.fillStyle = b, wt(y.before, g), S = y.lines, a && S.length && (this._drawColorBox(n, t, _, p, s), d = Math.max(h.lineHeight, l)), x = 0, A = S.length; x < A; ++x)
        g(S[x]), d = h.lineHeight;
      wt(y.after, g);
    }
    f = 0, d = h.lineHeight, wt(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, n, s) {
    const i = this.footer, o = i.length;
    let r, a;
    if (o) {
      const l = Ss(s.rtl, this.x, this.width);
      for (t.x = co(this, s.footerAlign, s), t.y += s.footerMarginTop, n.textAlign = l.textAlign(s.footerAlign), n.textBaseline = "middle", r = Xt(s.footerFont), n.fillStyle = s.footerColor, n.font = r.string, a = 0; a < o; ++a)
        n.fillText(i[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, n, s, i) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: u } = s, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: p } = qn(i.cornerRadius);
    n.fillStyle = i.backgroundColor, n.strokeStyle = i.borderColor, n.lineWidth = i.borderWidth, n.beginPath(), n.moveTo(a + h, l), r === "top" && this.drawCaret(t, n, s, i), n.lineTo(a + c - d, l), n.quadraticCurveTo(a + c, l, a + c, l + d), r === "center" && o === "right" && this.drawCaret(t, n, s, i), n.lineTo(a + c, l + u - p), n.quadraticCurveTo(a + c, l + u, a + c - p, l + u), r === "bottom" && this.drawCaret(t, n, s, i), n.lineTo(a + f, l + u), n.quadraticCurveTo(a, l + u, a, l + u - f), r === "center" && o === "left" && this.drawCaret(t, n, s, i), n.lineTo(a, l + h), n.quadraticCurveTo(a, l, a + h, l), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart, s = this.$animations, i = s && s.x, o = s && s.y;
    if (i || o) {
      const r = si[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Wu(this, t), l = Object.assign({}, r, this._size), c = Uu(n, t, l), u = Yu(t, l, c, n);
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
    const r = le(n.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    n.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, i, n), Vf(t, n.textDirection), o.y += r.top, this.drawTitle(o, t, n), this.drawBody(o, t, n), this.drawFooter(o, t, n), Nf(t, n.textDirection), t.restore());
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
    }), o = !Fo(s, i), r = this._positionChanged(i, n);
    (o || r) && (this._active = i, this._eventPosition = n, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, n, s = !0) {
    if (n && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options, o = this._active || [], r = this._getActiveElements(t, o, n, s), a = this._positionChanged(r, t), l = n || !Fo(r, o) || a;
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
    const { caretX: s, caretY: i, options: o } = this, r = si[o.position].call(this, t, n);
    return r !== !1 && (s !== r.x || i !== r.y);
  }
}
j(wa, "positioners", si);
var Uv = {
  id: "tooltip",
  _element: wa,
  positioners: si,
  afterInit(e, t, n) {
    n && (e.tooltip = new wa({
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
    callbacks: cp
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
}, Yv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: iv,
  Decimation: lv,
  Filler: Cv,
  Legend: Lv,
  SubTitle: Vv,
  Title: Fv,
  Tooltip: Uv
});
const Kv = (e, t, n, s) => (typeof t == "string" ? (n = e.push(t) - 1, s.unshift({
  index: n,
  label: t
})) : isNaN(t) && (n = null), n);
function Gv(e, t, n, s) {
  const i = e.indexOf(t);
  if (i === -1)
    return Kv(e, t, n, s);
  const o = e.lastIndexOf(t);
  return i !== o ? n : i;
}
const Xv = (e, t) => e === null ? null : Zt(Math.round(e), 0, t);
function Xu(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class Aa extends ss {
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
    if (ft(t))
      return null;
    const s = this.getLabels();
    return n = isFinite(n) && s[n] === t ? n : Gv(s, t, ht(n, t), this._addedLabels), Xv(n, s.length - 1);
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
    return Xu.call(this, t);
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
j(Aa, "id", "category"), j(Aa, "defaults", {
  ticks: {
    callback: Xu
  }
});
function qv(e, t) {
  const n = [], { bounds: i, step: o, min: r, max: a, precision: l, count: c, maxTicks: u, maxDigits: h, includeBounds: d } = e, f = o || 1, p = u - 1, { min: g, max: m } = t, y = !ft(r), b = !ft(a), S = !ft(c), _ = (m - g) / (h + 1);
  let x = Wc((m - g) / p / f) * f, w, A, T, P;
  if (x < 1e-14 && !y && !b)
    return [
      {
        value: g
      },
      {
        value: m
      }
    ];
  P = Math.ceil(m / x) - Math.floor(g / x), P > p && (x = Wc(P * x / p / f) * f), ft(l) || (w = Math.pow(10, l), x = Math.ceil(x * w) / w), i === "ticks" ? (A = Math.floor(g / x) * x, T = Math.ceil(m / x) * x) : (A = g, T = m), y && b && o && zy((a - r) / o, x / 1e3) ? (P = Math.round(Math.min((a - r) / x, u)), x = (a - r) / P, A = r, T = a) : S ? (A = y ? r : A, T = b ? a : T, P = c - 1, x = (T - A) / P) : (P = (T - A) / x, ci(P, Math.round(P), x / 1e3) ? P = Math.round(P) : P = Math.ceil(P));
  const M = Math.max(Uc(x), Uc(A));
  w = Math.pow(10, ft(l) ? M : l), A = Math.round(A * w) / w, T = Math.round(T * w) / w;
  let D = 0;
  for (y && (d && A !== r ? (n.push({
    value: r
  }), A < r && D++, ci(Math.round((A + D * x) * w) / w, r, qu(r, _, e)) && D++) : A < r && D++); D < P; ++D) {
    const C = Math.round((A + D * x) * w) / w;
    if (b && C > a)
      break;
    n.push({
      value: C
    });
  }
  return b && d && T !== a ? n.length && ci(n[n.length - 1].value, a, qu(a, _, e)) ? n[n.length - 1].value = a : n.push({
    value: a
  }) : (!b || T === a) && n.push({
    value: T
  }), n;
}
function qu(e, t, { horizontal: n, minRotation: s }) {
  const i = Ie(s), o = (n ? Math.sin(i) : Math.cos(i)) || 1e-3, r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class zo extends ss {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    return ft(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: n, maxDefined: s } = this.getUserBounds();
    let { min: i, max: o } = this;
    const r = (l) => i = n ? i : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = Ke(i), c = Ke(o);
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
    }, o = this._range || this, r = qv(i, o);
    return t.bounds === "ticks" && vf(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
    return Hi(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Ta extends zo {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = Ut(t) ? t : 0, this.max = Ut(n) ? n : 1, this.handleTickRangeOptions();
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
j(Ta, "id", "linear"), j(Ta, "defaults", {
  ticks: {
    callback: ar.formatters.numeric
  }
});
const Ti = (e) => Math.floor(_n(e)), $n = (e, t) => Math.pow(10, Ti(e) + t);
function Zu(e) {
  return e / Math.pow(10, Ti(e)) === 1;
}
function Qu(e, t, n) {
  const s = Math.pow(10, n), i = Math.floor(e / s);
  return Math.ceil(t / s) - i;
}
function Zv(e, t) {
  const n = t - e;
  let s = Ti(n);
  for (; Qu(e, t, s) > 10; )
    s++;
  for (; Qu(e, t, s) < 10; )
    s--;
  return Math.min(s, Ti(e));
}
function Qv(e, { min: t, max: n }) {
  t = ve(e.min, t);
  const s = [], i = Ti(t);
  let o = Zv(t, n), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = i > o ? Math.pow(10, i) : 0, c = Math.round((t - l) * r) / r, u = Math.floor((t - l) / a / 10) * a * 10;
  let h = Math.floor((c - u) / Math.pow(10, o)), d = ve(e.min, Math.round((l + u + h * Math.pow(10, o)) * r) / r);
  for (; d < n; )
    s.push({
      value: d,
      major: Zu(d),
      significand: h
    }), h >= 10 ? h = h < 15 ? 15 : 20 : h++, h >= 20 && (o++, h = 2, r = o >= 0 ? 1 : r), d = Math.round((l + u + h * Math.pow(10, o)) * r) / r;
  const f = ve(e.max, d);
  return s.push({
    value: f,
    major: Zu(f),
    significand: h
  }), s;
}
class Pa extends ss {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    const s = zo.prototype.parse.apply(this, [
      t,
      n
    ]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return Ut(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = Ut(t) ? Math.max(0, t) : null, this.max = Ut(n) ? Math.max(0, n) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !Ut(this._userMin) && (this.min = t === $n(this.min, 0) ? $n(this.min, -1) : $n(this.min, 0)), this.handleTickRangeOptions();
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
    }, s = Qv(n, this);
    return t.bounds === "ticks" && vf(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : Hi(t, this.chart.options.locale, this.options.ticks.format);
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
j(Pa, "id", "logarithmic"), j(Pa, "defaults", {
  ticks: {
    callback: ar.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Ma(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = le(t.backdropPadding);
    return ht(t.font && t.font.size, Nt.font.size) + n.height;
  }
  return 0;
}
function Jv(e, t, n) {
  return n = Vt(n) ? n : [
    n
  ], {
    w: rb(e, t.string, n),
    h: n.length * t.lineHeight
  };
}
function Ju(e, t, n, s, i) {
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
function t_(e) {
  const t = {
    l: e.left + e._padding.left,
    r: e.right - e._padding.right,
    t: e.top + e._padding.top,
    b: e.bottom - e._padding.bottom
  }, n = Object.assign({}, t), s = [], i = [], o = e._pointLabels.length, r = e.options.pointLabels, a = r.centerPointLabels ? Rt / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(e.getPointLabelContext(l));
    i[l] = c.padding;
    const u = e.getPointPosition(l, e.drawingArea + i[l], a), h = Xt(c.font), d = Jv(e.ctx, h, e._pointLabels[l]);
    s[l] = d;
    const f = Se(e.getIndexAngle(l) + a), p = Math.round(yl(f)), g = Ju(p, u.x, d.w, 0, 180), m = Ju(p, u.y, d.h, 90, 270);
    e_(n, t, f, g, m);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b), e._pointLabelItems = i_(e, s, i);
}
function e_(e, t, n, s, i) {
  const o = Math.abs(Math.sin(n)), r = Math.abs(Math.cos(n));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, e.l = Math.min(e.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, e.r = Math.max(e.r, t.r + a)), i.start < t.t ? (l = (t.t - i.start) / r, e.t = Math.min(e.t, t.t - l)) : i.end > t.b && (l = (i.end - t.b) / r, e.b = Math.max(e.b, t.b + l));
}
function n_(e, t, n) {
  const s = e.drawingArea, { extra: i, additionalAngle: o, padding: r, size: a } = n, l = e.getPointPosition(t, s + i + r, o), c = Math.round(yl(Se(l.angle + Kt))), u = a_(l.y, a.h, c), h = o_(c), d = r_(l.x, a.w, h);
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
function s_(e, t) {
  if (!t)
    return !0;
  const { left: n, top: s, right: i, bottom: o } = e;
  return !(un({
    x: n,
    y: s
  }, t) || un({
    x: n,
    y: o
  }, t) || un({
    x: i,
    y: s
  }, t) || un({
    x: i,
    y: o
  }, t));
}
function i_(e, t, n) {
  const s = [], i = e._pointLabels.length, o = e.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: Ma(o) / 2,
    additionalAngle: r ? Rt / i : 0
  };
  let c;
  for (let u = 0; u < i; u++) {
    l.padding = n[u], l.size = t[u];
    const h = n_(e, u, l);
    s.push(h), a === "auto" && (h.visible = s_(h, c), h.visible && (c = h));
  }
  return s;
}
function o_(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function r_(e, t, n) {
  return n === "right" ? e -= t : n === "center" && (e -= t / 2), e;
}
function a_(e, t, n) {
  return n === 90 || n === 270 ? e -= t / 2 : (n > 270 || n < 90) && (e -= t), e;
}
function l_(e, t, n) {
  const { left: s, top: i, right: o, bottom: r } = n, { backdropColor: a } = t;
  if (!ft(a)) {
    const l = qn(t.borderRadius), c = le(t.backdropPadding);
    e.fillStyle = a;
    const u = s - c.left, h = i - c.top, d = o - s + c.width, f = r - i + c.height;
    Object.values(l).some((p) => p !== 0) ? (e.beginPath(), wi(e, {
      x: u,
      y: h,
      w: d,
      h: f,
      radius: l
    }), e.fill()) : e.fillRect(u, h, d, f);
  }
}
function c_(e, t) {
  const { ctx: n, options: { pointLabels: s } } = e;
  for (let i = t - 1; i >= 0; i--) {
    const o = e._pointLabelItems[i];
    if (!o.visible)
      continue;
    const r = s.setContext(e.getPointLabelContext(i));
    l_(n, r, o);
    const a = Xt(r.font), { x: l, y: c, textAlign: u } = o;
    es(n, e._pointLabels[i], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: u,
      textBaseline: "middle"
    });
  }
}
function up(e, t, n, s) {
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
function u_(e, t, n, s, i) {
  const o = e.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || n < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(i.dash || []), o.lineDashOffset = i.dashOffset, o.beginPath(), up(e, n, r, s), o.closePath(), o.stroke(), o.restore());
}
function h_(e, t, n) {
  return Rn(e, {
    label: n,
    index: t,
    type: "pointLabel"
  });
}
class ii extends zo {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = le(Ma(this.options) / 2), n = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + n / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(n, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    this.min = Ut(t) && !isNaN(t) ? t : 0, this.max = Ut(n) && !isNaN(n) ? n : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ma(this.options));
  }
  generateTickLabels(t) {
    zo.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((n, s) => {
      const i = Ct(this.options.pointLabels.callback, [
        n,
        s
      ], this);
      return i || i === 0 ? i : "";
    }).filter((n, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? t_(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, s, i) {
    this.xCenter += Math.floor((t - n) / 2), this.yCenter += Math.floor((s - i) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, s, i));
  }
  getIndexAngle(t) {
    const n = Ot / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return Se(t * n + Ie(s));
  }
  getDistanceFromCenterForValue(t) {
    if (ft(t))
      return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (ft(t))
      return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const s = n[t];
      return h_(this.getContext(), t, s);
    }
  }
  getPointPosition(t, n, s = 0) {
    const i = this.getIndexAngle(t) - Kt + s;
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
      s.save(), s.beginPath(), up(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, n = this.options, { angleLines: s, grid: i, border: o } = n, r = this._pointLabels.length;
    let a, l, c;
    if (n.pointLabels.display && c_(this, r), i.display && this.ticks.forEach((u, h) => {
      if (h !== 0 || h === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(u.value);
        const d = this.getContext(h), f = i.setContext(d), p = o.setContext(d);
        u_(this, f, l, r, p);
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
        const h = le(c.backdropPadding);
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
j(ii, "id", "radialLinear"), j(ii, "defaults", {
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
    callback: ar.formatters.numeric
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
}), j(ii, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), j(ii, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const dr = {
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
}, pe = /* @__PURE__ */ Object.keys(dr);
function th(e, t) {
  return e - t;
}
function eh(e, t) {
  if (ft(t))
    return null;
  const n = e._adapter, { parser: s, round: i, isoWeekday: o } = e._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), Ut(r) || (r = typeof s == "string" ? n.parse(r, s) : n.parse(r)), r === null ? null : (i && (r = i === "week" && (Ps(o) || o === !0) ? n.startOf(r, "isoWeek", o) : n.startOf(r, i)), +r);
}
function nh(e, t, n, s) {
  const i = pe.length;
  for (let o = pe.indexOf(e); o < i - 1; ++o) {
    const r = dr[pe[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((n - t) / (a * r.size)) <= s)
      return pe[o];
  }
  return pe[i - 1];
}
function d_(e, t, n, s, i) {
  for (let o = pe.length - 1; o >= pe.indexOf(n); o--) {
    const r = pe[o];
    if (dr[r].common && e._adapter.diff(i, s, r) >= t - 1)
      return r;
  }
  return pe[n ? pe.indexOf(n) : 0];
}
function f_(e) {
  for (let t = pe.indexOf(e) + 1, n = pe.length; t < n; ++t)
    if (dr[pe[t]].common)
      return pe[t];
}
function sh(e, t, n) {
  if (!n)
    e[t] = !0;
  else if (n.length) {
    const { lo: s, hi: i } = bl(n, t), o = n[s] >= t ? n[s] : n[i];
    e[o] = !0;
  }
}
function p_(e, t, n, s) {
  const i = e._adapter, o = +i.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +i.add(a, 1, s))
    l = n[a], l >= 0 && (t[l].major = !0);
  return t;
}
function ih(e, t, n) {
  const s = [], i = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], i[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !n ? s : p_(e, s, i, n);
}
class Pi extends ss {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, n = {}) {
    const s = t.time || (t.time = {}), i = this._adapter = new S0._date(t.adapters.date);
    i.init(n), li(s.displayFormats, i.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = n.normalized;
  }
  parse(t, n) {
    return t === void 0 ? null : eh(this, t);
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
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), i = Ut(i) && !isNaN(i) ? i : +n.startOf(Date.now(), s), o = Ut(o) && !isNaN(o) ? o : +n.endOf(Date.now(), s) + 1, this.min = Math.min(i, o - 1), this.max = Math.max(i + 1, o);
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
    const o = this.min, r = this.max, a = Ky(i, o, r);
    return this._unit = n.unit || (s.autoSkip ? nh(n.minUnit, this.min, this.max, this._getLabelCapacity(o)) : d_(this, a.length, n.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : f_(this._unit), this.initOffsets(i), t.reverse && a.reverse(), ih(this, a, this._majorUnit);
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
    const t = this._adapter, n = this.min, s = this.max, i = this.options, o = i.time, r = o.unit || nh(o.minUnit, n, s, this._getLabelCapacity(n)), a = ht(i.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = Ps(l) || l === !0, u = {};
    let h = n, d, f;
    if (c && (h = +t.startOf(h, "isoWeek", l)), h = +t.startOf(h, c ? "day" : r), t.diff(s, n, r) > 1e5 * a)
      throw new Error(n + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const p = i.ticks.source === "data" && this.getDataTimestamps();
    for (d = h, f = 0; d < s; d = +t.add(d, a, r), f++)
      sh(u, d, p);
    return (d === s || i.bounds === "ticks" || f === 1) && sh(u, d, p), Object.keys(u).sort(th).map((g) => +g);
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
      return Ct(r, [
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
    const n = this.options.time, s = n.displayFormats, i = s[n.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, ih(this, [
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
      t.push(eh(this, i[n]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return wf(t.sort(th));
  }
}
j(Pi, "id", "time"), j(Pi, "defaults", {
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
function uo(e, t, n) {
  let s = 0, i = e.length - 1, o, r, a, l;
  n ? (t >= e[s].pos && t <= e[i].pos && ({ lo: s, hi: i } = cn(e, "pos", t)), { pos: o, time: a } = e[s], { pos: r, time: l } = e[i]) : (t >= e[s].time && t <= e[i].time && ({ lo: s, hi: i } = cn(e, "time", t)), { time: o, pos: a } = e[s], { time: r, pos: l } = e[i]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Ca extends Pi {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), n = this._table = this.buildLookupTable(t);
    this._minPos = uo(n, this.min), this._tableRange = uo(n, this.max) - this._minPos, super.initOffsets(t);
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
    return (uo(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets, s = this.getDecimalForPixel(t) / n.factor - n.end;
    return uo(this._table, s * this._tableRange + this._minPos, !0);
  }
}
j(Ca, "id", "timeseries"), j(Ca, "defaults", Pi.defaults);
var g_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: Aa,
  LinearScale: Ta,
  LogarithmicScale: Pa,
  RadialLinearScale: ii,
  TimeScale: Pi,
  TimeSeriesScale: Ca
});
const m_ = [
  _0,
  Zx,
  Yv,
  g_
];
Ue.register(...m_);
const zk = ({
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
  const u = mt(null), h = mt(null);
  return _t(() => {
    var g;
    h.current && h.current.destroy();
    const d = (g = u.current) == null ? void 0 : g.getContext("2d"), f = Math.max(...e.map((m) => m.value)), p = Math.ceil(f / 100) * 100 + 50;
    if (d)
      return h.current = new Ue(d, {
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
  }, [e]), /* @__PURE__ */ R.jsx("canvas", { ref: u, className: l, style: c });
}, At = (e) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      e();
    });
  });
}, kl = (e, t, n, s) => t + n > s ? {
  top: "auto",
  bottom: `${s - e}px`,
  marginBottom: "-1px"
} : {
  top: `${t}px`,
  bottom: "auto",
  marginTop: "-1px"
}, El = (e, t, n, s, i) => t + n - i > s ? {
  left: "auto",
  right: `${s - t}px`
} : {
  left: `${e}px`,
  right: "auto"
};
function Me(e) {
  const [t, n, s] = e.split(".").map((o) => parseInt(o, 10)), i = new Date(t, n - 1, s);
  return i && i.getFullYear() === t && i.getMonth() === n - 1 && i.getDate() === s;
}
function ds(e = 0) {
  const t = /* @__PURE__ */ new Date();
  t.setDate(t.getDate() + e);
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0");
  return `${n}.${s}.${i}`;
}
var hp = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.TYPE1 = "type1", e))(hp || {}), Mi = /* @__PURE__ */ ((e) => (e.START_DATE = "startDate", e.END_DATE = "endDate", e))(Mi || {});
const dp = Ee(void 0), y_ = ({
  children: e,
  selectedValue: t = [ds(), ds()],
  updateSelectedValue: n,
  afterUpdate: s,
  className: i = "",
  style: o = {},
  ...r
}) => {
  const [a, l] = bt(t[0]), [c, u] = bt(t[1]);
  _t(() => {
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
  return /* @__PURE__ */ R.jsx(dp.Provider, { value: y, children: /* @__PURE__ */ R.jsx("div", { className: `h_single_datepicker_range_area ${i}`, style: o, ...r, children: e({
    startDate: a,
    setStartDate: l,
    endDate: c,
    setEndDate: u,
    startDisableDatesRange: d,
    endDisabledDatesRange: f
  }) }) });
};
y_.displayName = "HSingleDatePickerRangeArea";
const fp = () => Wt(dp) || {
  setStartDateRange: () => {
  },
  setEndDateRange: () => {
  },
  selectedRange: []
};
var ho = { exports: {} }, ne = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oh;
function b_() {
  if (oh) return ne;
  oh = 1;
  var e = bi;
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
  return ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, ne.createPortal = function(l, c) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!c || c.nodeType !== 1 && c.nodeType !== 9 && c.nodeType !== 11)
      throw Error(t(299));
    return o(l, c, null, u);
  }, ne.flushSync = function(l) {
    var c = r.T, u = s.p;
    try {
      if (r.T = null, s.p = 2, l) return l();
    } finally {
      r.T = c, s.p = u, s.d.f();
    }
  }, ne.preconnect = function(l, c) {
    typeof l == "string" && (c ? (c = c.crossOrigin, c = typeof c == "string" ? c === "use-credentials" ? c : "" : void 0) : c = null, s.d.C(l, c));
  }, ne.prefetchDNS = function(l) {
    typeof l == "string" && s.d.D(l);
  }, ne.preinit = function(l, c) {
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
  }, ne.preinitModule = function(l, c) {
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
  }, ne.preload = function(l, c) {
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
  }, ne.preloadModule = function(l, c) {
    if (typeof l == "string")
      if (c) {
        var u = a(c.as, c.crossOrigin);
        s.d.m(l, {
          as: typeof c.as == "string" && c.as !== "script" ? c.as : void 0,
          crossOrigin: u,
          integrity: typeof c.integrity == "string" ? c.integrity : void 0
        });
      } else s.d.m(l);
  }, ne.requestFormReset = function(l) {
    s.d.r(l);
  }, ne.unstable_batchedUpdates = function(l, c) {
    return l(c);
  }, ne.useFormState = function(l, c, u) {
    return r.H.useFormState(l, c, u);
  }, ne.useFormStatus = function() {
    return r.H.useHostTransitionStatus();
  }, ne.version = "19.0.0", ne;
}
var se = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rh;
function x_() {
  return rh || (rh = 1, process.env.NODE_ENV !== "production" && function() {
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
    var a = bi, l = {
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
    ), se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, se.createPortal = function(h, d) {
      var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return n(h, d, null, f);
    }, se.flushSync = function(h) {
      var d = u.T, f = l.p;
      try {
        if (u.T = null, l.p = 2, h)
          return h();
      } finally {
        u.T = d, l.p = f, l.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, se.preconnect = function(h, d) {
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
    }, se.prefetchDNS = function(h) {
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
    }, se.preinit = function(h, d) {
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
    }, se.preinitModule = function(h, d) {
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
    }, se.preload = function(h, d) {
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
    }, se.preloadModule = function(h, d) {
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
    }, se.requestFormReset = function(h) {
      l.d.r(h);
    }, se.unstable_batchedUpdates = function(h, d) {
      return h(d);
    }, se.useFormState = function(h, d, f) {
      return r().useFormState(h, d, f);
    }, se.useFormStatus = function() {
      return r().useHostTransitionStatus();
    }, se.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), se;
}
var ah;
function v_() {
  if (ah) return ho.exports;
  ah = 1;
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
  return process.env.NODE_ENV === "production" ? (e(), ho.exports = b_()) : ho.exports = x_(), ho.exports;
}
var de = v_();
const pp = Ee(void 0), fe = (e) => e.replace(/\./g, "-"), __ = ({
  children: e,
  selectedValue: t = ds(),
  dayFormat: n = ["일", "월", "화", "수", "목", "금", "토"],
  monthLength: s = 4,
  yearLength: i = 3,
  yearBeforeAfterLength: o = 4,
  type: r = hp.DEFAULT,
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
  const { selectedRange: y, setStartDateRange: b, setEndDateRange: S } = fp(), _ = (q) => {
    if (y.length === 0)
      return !1;
    const K = fe(q);
    return new Date(fe(y[0])) <= new Date(K) && new Date(K) <= new Date(fe(y[1]));
  }, x = (q) => {
    if (y.length === 0)
      return !1;
    const [K, et] = y[0].split("."), [ct, E] = y[1].split("."), L = `${K}-${et}`, N = `${ct}-${E}`;
    return new Date(L) <= new Date(fe(q)) && new Date(fe(q)) <= new Date(N);
  }, w = (q) => {
    if (y.length === 0)
      return !1;
    const [K] = y[0].split("."), [et] = y[1].split("."), ct = `${K}`, E = `${et}`;
    return new Date(ct) <= new Date(fe(q)) && new Date(fe(q)) <= new Date(E);
  }, A = (q) => {
    const K = fe(q), et = l.includes(q), ct = c.some((E) => {
      const [L, N] = E.split("~");
      if (L.length === 0 && N.length > 0)
        return new Date(K) < new Date(fe(N));
      if (L.length > 0 && N.length === 0)
        return new Date(fe(L)) < new Date(K);
      if (L.length > 0 && N.length > 0)
        return new Date(fe(L)) < new Date(K) && new Date(K) < new Date(fe(N));
    });
    return et || ct;
  }, T = (q) => {
    const K = fe(q);
    return c.some((et) => {
      const [ct, E] = et.split("~");
      if (ct.length === 0 && E.length > 0)
        return new Date(K) < /* @__PURE__ */ new Date(
          `${E.split(".")[0]}-${E.split(".")[1]}`
        );
      if (ct.length > 0 && E.length === 0)
        return /* @__PURE__ */ new Date(`${ct.split(".")[0]}-${ct.split(".")[1]}`) < new Date(K);
      if (ct.length > 0 && E.length > 0)
        return /* @__PURE__ */ new Date(`${ct.split(".")[0]}-${ct.split(".")[1]}`) < new Date(K) && new Date(K) < /* @__PURE__ */ new Date(`${E.split(".")[0]}-${E.split(".")[1]}`);
    });
  }, P = (q) => {
    const K = fe(q);
    return c.some((et) => {
      const [ct, E] = et.split("~");
      if (ct.length === 0 && E.length > 0)
        return new Date(K).getFullYear() < (/* @__PURE__ */ new Date(`${E.split(".")[0]}`)).getFullYear();
      if (ct.length > 0 && E.length === 0)
        return (/* @__PURE__ */ new Date(`${ct.split(".")[0]}`)).getFullYear() < new Date(K).getFullYear();
      if (ct.length > 0 && E.length > 0)
        return (/* @__PURE__ */ new Date(`${ct.split(".")[0]}`)).getFullYear() < new Date(K).getFullYear() && new Date(K).getFullYear() < (/* @__PURE__ */ new Date(`${E.split(".")[0]}`)).getFullYear();
    });
  }, [M, D] = bt({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    minusWidth: 0,
    clientWidth: 0,
    clientHeight: 0
  }), [C, I] = bt(!1), Z = () => {
    if (I(!0), Q(!1), U(!1), !ot.current)
      return;
    const { bottom: q, left: K, right: et, top: ct, width: E } = ot.current.getBoundingClientRect();
    D({
      bottom: q,
      left: K,
      right: et,
      top: ct,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      minusWidth: E
    });
  }, [W, U] = bt(!1);
  _t(() => {
    W ? (window.addEventListener("click", Y), window.addEventListener("scroll", O), window.addEventListener("resize", $), Array.isArray(h) && h.forEach((q) => {
      const K = document.querySelector(q);
      K instanceof HTMLElement && K.addEventListener("scroll", O);
    })) : (window.removeEventListener("click", Y), window.removeEventListener("scroll", O), window.removeEventListener("resize", $), Array.isArray(h) && h.forEach((q) => {
      const K = document.querySelector(q);
      K instanceof HTMLElement && K.removeEventListener(
        "scroll",
        O
      );
    }));
  }, [W]);
  const [z, Q] = bt(!1), J = () => {
    if (Q(!0), I(!1), U(!1), !ot.current)
      return;
    const { bottom: q, left: K, right: et, top: ct, width: E } = ot.current.getBoundingClientRect();
    D({
      bottom: q,
      left: K,
      right: et,
      top: ct,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      minusWidth: E
    });
  }, ot = mt(null), G = mt(null), O = () => {
    if (!ot.current)
      return;
    const { top: q, bottom: K, left: et, right: ct, width: E } = ot.current.getBoundingClientRect();
    D((L) => ({
      ...L,
      top: q,
      bottom: K,
      left: et,
      right: ct,
      minusWidth: E
    }));
  }, $ = () => {
    D((q) => ({
      ...q,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    }));
  }, Y = (q) => {
    const K = q.target;
    if (!(K instanceof HTMLElement))
      return;
    const et = K.closest(".inp_datepicker");
    if (et) {
      et !== G.current && (I(!1), U(!1), Q(!1), d());
      return;
    }
    K.closest(".h_calendar_area") || K.closest(".h_calendar_month_area") || K.closest(".h_calendar_year_area") || (I(!1), U(!1), Q(!1), d());
  }, k = (q) => {
    switch (u) {
      case Mi.START_DATE:
        b(q);
        break;
      case Mi.END_DATE:
        S(q);
        break;
    }
  }, X = (q) => {
    if (q instanceof KeyboardEvent && q.key !== "Enter")
      return;
    const K = q.target;
    if (!(K instanceof HTMLInputElement))
      return;
    const et = K.value, ct = (/* @__PURE__ */ new Date()).getFullYear() % 100;
    switch (et.length) {
      // 4- 2311(2023.01.01) // 2325(2023.02.05)
      case 4:
        (() => {
          const E = et.toString();
          let L = parseInt(E.slice(0, 2), 10);
          L > ct ? L += 1900 : L += 2e3;
          const N = E.slice(2, 3).padStart(2, "0"), tt = E.slice(3).padStart(2, "0");
          if (!Me(`${L}.${N}.${tt}`) || A(`${L}.${N}.${tt}`)) {
            const Qt = B;
            At(() => {
              de.flushSync(() => {
                V("");
              }), At(() => {
                V(Qt), k(Qt);
              });
            });
            return;
          }
          dt(L), xt(Number(N)), At(() => {
            de.flushSync(() => {
              V("");
            }), At(() => {
              V(`${L}.${N}.${tt}`), k(`${L}.${N}.${tt}`);
            });
          });
        })();
        break;
      // 5 - 23.21(2023.02.01) // 232.1(2023.02.01) // 23210(2023.02.10) // 23101(2023.01.01) // 23131(2023.01.31)
      case 5:
        (() => {
          const E = et.replace(/\./g, ""), L = ct >= parseInt(E.slice(0, 2)) ? 2e3 + parseInt(E.slice(0, 2)) : 1900 + parseInt(E.slice(0, 2));
          let N = "", tt = "";
          if (E.length === 5 ? (N = E.slice(2, 3).toString().padStart(2, "0"), tt = E.slice(3)) : E.length === 4 && (N = "0" + E.charAt(2), tt = "0" + E.charAt(3)), !Me(`${L}.${N}.${tt}`) || A(`${L}.${N}.${tt}`)) {
            const Qt = B;
            At(() => {
              de.flushSync(() => {
                V("");
              }), At(() => {
                V(Qt), k(Qt);
              });
            });
            return;
          }
          dt(L), xt(Number(N)), At(() => {
            de.flushSync(() => {
              V("");
            }), At(() => {
              V(`${L}.${N}.${tt}`), k(`${L}.${N}.${tt}`);
            });
          });
        })();
        break;
      // 6 - 202321(2023.02.01) // 23.2.1(2023.02.01) // 23.210(2023.02.10) // 232.10(2023.02.10)
      case 6:
        (() => {
          let E = "", L = "", N = "";
          if (et.includes(".")) {
            const tt = et.replace(/\./g, "");
            E = ct >= parseInt(tt.slice(0, 2)) ? (2e3 + parseInt(tt.slice(0, 2))).toString() : (1900 + parseInt(tt.slice(0, 2))).toString(), L = tt.slice(2, 3).toString().padStart(2, "0"), N = tt.slice(3).toString().padStart(2, "0");
          } else
            E = et.slice(0, 2), L = et.slice(2, 4).toString().padStart(2, "0"), N = et.slice(4, 6).toString().padStart(2, "0"), Me(`${E}.${L}.${N}`) || (E = `${E}${L}`, L = N.toString().split("")[0].padStart(2, "0"), N = N.toString().split("")[1].padStart(2, "0"));
          if (!Me(`${E}.${L}.${N}`) || A(`${E}.${L}.${N}`)) {
            const tt = B;
            At(() => {
              de.flushSync(() => {
                V("");
              }), At(() => {
                V(tt), k(tt);
              });
            });
            return;
          }
          dt(Number(E)), xt(Number(L)), At(() => {
            de.flushSync(() => {
              V("");
            }), At(() => {
              V(`${E}.${L}.${N}`), k(`${E}.${L}.${N}`);
            });
          });
        })();
        break;
      // 7 - 20232.1(2023.02.01) // 2023.21(2023.02.01) // 20.0511(2020.05.11) // 2023201(2023.02.01) // 2023101(2023.01.01) // 2023130(2023.01.30)
      case 7:
        (() => {
          let E = "", L = "", N = "";
          if (et.includes(".")) {
            const tt = et.replace(/\./g, "");
            E = ct >= parseInt(tt.slice(0, 2)) ? (2e3 + parseInt(tt.slice(0, 2))).toString() : (1900 + parseInt(tt.slice(0, 2))).toString(), L = tt.slice(2, 4).padStart(2, "0"), N = tt.slice(4, 6).padStart(2, "0"), Me(`${E}.${L}.${N}`) || (E = `${E.slice(2)}${L}`, L = `${N.split("")[0].padStart(2, "0")}`, N = `${N.split("")[1].padStart(2, "0")}`);
          } else
            E = et.slice(0, 4), L = et.slice(4, 5).toString().padStart(2, "0"), N = et.slice(5).toString().padStart(2, "0");
          if (!Me(`${E}.${L}.${N}`) || A(`${E}.${L}.${N}`)) {
            const tt = B;
            At(() => {
              de.flushSync(() => {
                V("");
              }), At(() => {
                V(tt), k(tt);
              });
            });
            return;
          }
          dt(Number(E)), xt(Number(L)), At(() => {
            de.flushSync(() => {
              V("");
            }), At(() => {
              V(`${E}.${L}.${N}`), k(`${E}.${L}.${N}`);
            });
          });
        })();
        break;
      // 8 - 20230212(2023.02.12) // 2023.2.1(2023.02.01) // 20.02.05(2020.02.05) // 2023.021(2023.02.01) // 20232.11(2023.02.11)
      case 8:
        (() => {
          let E = "", L = "", N = "";
          if (et.includes(".")) {
            const tt = et.replace(/\./g, "");
            tt.length === 6 ? (E = ct >= parseInt(tt.slice(0, 2)) ? (2e3 + parseInt(
              tt.slice(0, 2)
            )).toString() : (1900 + parseInt(
              tt.slice(0, 2)
            )).toString(), L = tt.slice(2, 4).padStart(2, "0"), N = tt.slice(4, 6).padStart(2, "0"), Me(`${E}.${L}.${N}`) || (E = `${E.slice(2)}${L}`, L = `${N.split("")[0].padStart(2, "0")}`, N = `${N.split("")[1].padStart(2, "0")}`)) : (E = tt.slice(0, 4), L = tt.slice(4, 5).padStart(2, "0"), N = tt.slice(5).padStart(2, "0"), Me(`${E}.${L}.${N}`) || (L = N.split("")[0].padStart(2, "0"), N = N.split("")[1].padStart(2, "0")));
          } else
            E = et.slice(0, 4), L = et.slice(4, 6), N = et.slice(6, 8);
          if (!Me(`${E}.${L}.${N}`) || A(`${E}.${L}.${N}`)) {
            const tt = B;
            At(() => {
              de.flushSync(() => {
                V("");
              }), At(() => {
                V(tt), k(tt);
              });
            });
            return;
          }
          dt(Number(E)), xt(Number(L)), At(() => {
            de.flushSync(() => {
              V("");
            }), At(() => {
              V(`${E}.${L}.${N}`), k(`${E}.${L}.${N}`);
            });
          });
        })();
        break;
      // 9 - 2023.02.1(2023.02.01) // 2023.0212(2023.02.12) // 202302.12(2023.02.12) // 2023.2.11(2023.02.11) // 2023.02.1(2023.02.01) // 2023.19.1(2023.09.01)
      case 9:
        (() => {
          let E = "", L = "", N = "";
          if (et.includes(".")) {
            const tt = et.replace(/\./g, "");
            if (E = tt.slice(0, 4), L = tt.slice(4, 5).padStart(2, "0"), N = tt.slice(5).padStart(2, "0"), !Me(`${E}.${L}.${N}`)) {
              const [Qt, ...tn] = N.split("");
              L = Qt.padStart(2, "0"), N = tn.join("").padStart(2, "0");
            }
          }
          if (!Me(`${E}.${L}.${N}`) || A(`${E}.${L}.${N}`)) {
            const tt = B;
            At(() => {
              de.flushSync(() => {
                V("");
              }), At(() => {
                V(tt), k(tt);
              });
            });
            return;
          }
          dt(Number(E)), xt(Number(L)), At(() => {
            de.flushSync(() => {
              V("");
            }), At(() => {
              V(`${E}.${L}.${N}`), k(`${E}.${L}.${N}`);
            });
          });
        })();
        break;
      // 10 - 2023.02.12
      case 10:
      default:
        (() => {
          if (!Me(et) || A(et)) {
            const tt = B;
            At(() => {
              de.flushSync(() => {
                V("");
              }), At(() => {
                V(tt), k(tt);
              });
            });
            return;
          }
          const [E, L, N] = et.split(".");
          dt(Number(E)), xt(Number(L)), At(() => {
            de.flushSync(() => {
              V("");
            }), At(() => {
              V(`${E}.${L}.${N}`), k(`${E}.${L}.${N}`);
            });
          });
        })();
        break;
    }
  }, [B, V] = bt(t);
  _t(() => {
    V(t);
  }, [t]);
  const at = (q) => {
    V(q), U(!1), Q(!1), I(!1), f(q);
  }, [ut, dt] = bt(
    Number(B == null ? void 0 : B.split(".")[0]) || (/* @__PURE__ */ new Date()).getFullYear()
  ), [pt, xt] = bt(
    Number(B == null ? void 0 : B.split(".")[1]) || (/* @__PURE__ */ new Date()).getMonth() + 1
  ), lt = (q) => {
    const K = pt + q;
    K > 12 ? (xt(1), dt((et) => et + 1)) : K < 1 ? (xt(12), dt((et) => et - 1)) : xt(K);
  }, [yt, Gt] = bt(ut), Lt = (q) => {
    Gt((K) => K + q);
  }, [kt, Mt] = bt(ut), [Pt, v] = bt(kt - o), [F, H] = bt(kt + o), st = (q) => {
    v((K) => K + q), H((K) => K + q);
  };
  _t(() => {
    Gt(ut), Mt(ut);
  }, [ut]);
  const It = () => {
    G.current && (G.current.addEventListener(
      "keyup",
      X
    ), G.current.addEventListener(
      "blur",
      X
    ));
  }, St = () => {
    G.current && (G.current.removeEventListener(
      "keyup",
      X
    ), G.current.removeEventListener(
      "blur",
      X
    ));
  }, rt = () => {
    if (W || z || C)
      switch (!0) {
        case W:
          U(!0), Q(!1), I(!1);
          break;
        case z:
          U(!1), Q(!0), I(!1);
          break;
        case C:
          U(!1), Q(!1), I(!0);
          break;
      }
    else
      U(!0), Q(!1), I(!1);
    if (!ot.current)
      return;
    const { bottom: q, left: K, right: et, top: ct, width: E } = ot.current.getBoundingClientRect();
    D({
      bottom: q,
      left: K,
      right: et,
      top: ct,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      minusWidth: E
    });
  }, ee = (() => {
    const [q, K] = ds().split("."), ct = Array.from({ length: 12 }, (L, N) => N + 1).map((L) => {
      var N, tt, Qt, tn;
      return {
        year: String(yt),
        month: String(L),
        isActive: Number(B.split(".")[0]) === yt && pt === L,
        inRange: x(
          `${String(yt)}.${String(
            L
          ).padStart(2, "0")}`
        ),
        isDisabled: T(
          `${String(yt)}.${String(
            L
          ).padStart(2, "0")}`
        ),
        isCurrentMonth: yt === Number(q) && L === Number(K),
        isStartMonth: Number((N = y[0]) == null ? void 0 : N.split(".")[0]) === yt && Number((tt = y[0]) == null ? void 0 : tt.split(".")[1]) === L,
        isEndMonth: Number((Qt = y[1]) == null ? void 0 : Qt.split(".")[0]) === yt && Number((tn = y[1]) == null ? void 0 : tn.split(".")[1]) === L
      };
    }), E = [];
    for (let L = 0; L < ct.length; L += s)
      E.push(ct.slice(L, L + s));
    return E;
  })(), Bt = Ne(() => o * 2 + 1, [o]), Oe = (() => {
    const [q] = ds().split("."), K = [];
    for (let E = Pt; E <= F; E++)
      K.push(E);
    const et = K.map((E) => {
      var L, N;
      return {
        year: String(E),
        isActive: Number(B.split(".")[0]) === E,
        inRange: w(String(E)),
        // Todo
        isDisabled: P(String(E)),
        isCurrentYear: E === Number(q),
        isStartYear: Number((L = y[0]) == null ? void 0 : L.split(".")[0]) === E,
        isEndYear: Number((N = y[1]) == null ? void 0 : N.split(".")[0]) === E
      };
    }), ct = [];
    for (let E = 0; E < et.length; E += i)
      ct.push(et.slice(E, E + i));
    return ct;
  })(), je = ((q, K) => {
    var Mc, Cc, Dc, kc, Ec, Oc;
    const [et, ct, E] = ds().split("."), [L, N, tt] = (B == null ? void 0 : B.split(".")) || [null, null, null], Qt = Number(L) === q && Number(N) === K, tn = new Date(q, K, 0).getDate(), zs = [];
    let Or = Array(7).fill(null);
    for (let Re = 1; Re <= tn; Re++) {
      const Rc = new Date(q, K - 1, Re).getDay();
      Or[Rc] = {
        year: String(q),
        month: String(K).padStart(2, "0"),
        date: String(Re),
        isActive: Qt && Number(tt) === Re,
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
        isCurrentDate: Number(et) === q && Number(ct) === K && Number(E) === Re,
        isStartDate: Number((Mc = y[0]) == null ? void 0 : Mc.split(".")[0]) === q && Number((Cc = y[0]) == null ? void 0 : Cc.split(".")[1]) === K && Number((Dc = y[0]) == null ? void 0 : Dc.split(".")[2]) === Re,
        isEndDate: Number((kc = y[1]) == null ? void 0 : kc.split(".")[0]) === q && Number((Ec = y[1]) == null ? void 0 : Ec.split(".")[1]) === K && Number((Oc = y[1]) == null ? void 0 : Oc.split(".")[2]) === Re
      }, (Rc === 6 || Re === tn) && (zs.push(Or), Or = Array(7).fill(null));
    }
    return zs;
  })(ut, pt), zt = (q) => {
    const [K, et] = q.split(".");
    dt(Number(K)), xt(Number(et)), Q(!1), I(!1), U(!0);
  }, Hs = (q) => {
    dt(Number(q)), I(!1), Q(!0), U(!1);
  }, as = mt(null), ls = mt(null), $e = mt(null), Fn = Ne(() => a, [a]), Vn = {
    selectedDatePickerValue: B,
    clickedDatePickerInput: rt,
    updateSelectedDatePickerValue: at,
    // setSelectedDatePickerValue
    updateNowMonth: lt,
    // setNowMonth
    updateYearForYearCalendar: st,
    // setYearForYearCalendar
    updateYearForMonthCalendar: Lt,
    // setYearForMonthCalendar
    yearsArrLength: Bt,
    updateIsActiveYearCalendar: Z,
    // setIsActiveYearCalendar
    updateIsActiveMonthCalendar: J,
    // setIsActiveMonthCalendar
    setNowMonthByMonthCalendar: zt,
    setNowYearByYearCalendar: Hs,
    calendarInputButtonRef: G,
    // calendarInput
    calendarInputAreaRef: ot,
    // calendarInputArea
    calendarPosition: M,
    calendarAreaRef: as,
    // calendarArea
    calendarMonthAreaRef: ls,
    // calendarMonthArea
    calendarYearAreaRef: $e,
    // calendarYearArea
    type: r,
    // calendarType
    focusInDatePickerInput: It,
    focusOutDatePickerInput: St,
    rangeType: u,
    isDisabledValue: Fn
    // isDisabled
  }, cs = () => {
    I(!1), Q(!1), U(!1);
  };
  return /* @__PURE__ */ R.jsx(pp.Provider, { value: Vn, children: /* @__PURE__ */ R.jsx("div", { className: `h_single_datepicker_area ${r} ${p}`, style: g, ...m, children: e({
    isActiveCalendar: W,
    isActiveMonthCalendar: z,
    isActiveYearCalendar: C,
    dayFormat: n,
    monthDates: je,
    nowYear: ut,
    nowMonth: pt,
    months: ee,
    years: Oe,
    startYear: Pt,
    endYear: F,
    yearForYearCalendar: kt,
    yearForMonthCalendar: yt,
    closeAllCalendar: cs
  }) }) });
};
__.displayName = "HSingleDatePickerArea";
const qt = () => {
  const e = Wt(pp);
  if (!e)
    throw new Error("useHSingleDatePickerAreaContext must be used within a HSingleDatePickerAreaProvider");
  return e;
}, S_ = ({
  children: e,
  childrenTableHead: t,
  className: n = "",
  tableClassName: s = "",
  tableHeadClassName: i = "",
  tableBodyClassName: o = "",
  style: r = {},
  ...a
}) => {
  const { type: l } = qt();
  return /* @__PURE__ */ R.jsx("div", { className: `h_calendar ${l} ${n}`, style: r, ...a, children: /* @__PURE__ */ R.jsxs("table", { className: `h_calendar_table ${s}`, children: [
    /* @__PURE__ */ R.jsx("caption", { children: /* @__PURE__ */ R.jsx("span", { className: "blind", children: "Dates" }) }),
    /* @__PURE__ */ R.jsx("thead", { className: `calendar_head ${i}`, children: t }),
    /* @__PURE__ */ R.jsx("tbody", { className: `calendar_body ${o}`, children: e })
  ] }) });
};
S_.displayName = "HSingleDatePickerCalendar";
const w_ = ({
  value: e,
  children: t,
  className: n = "",
  style: s = {},
  disabled: i = !1
}) => {
  const { type: o, updateSelectedDatePickerValue: r, rangeType: a } = qt(), { setStartDateRange: l, setEndDateRange: c } = fp(), u = () => {
    switch (r(e), a) {
      case Mi.START_DATE:
        l(e);
        break;
      case Mi.END_DATE:
        c(e);
        break;
    }
  };
  return /* @__PURE__ */ R.jsx(
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
w_.displayName = "HSingleDatePickerCalendarDateButton";
const A_ = ({
  children: e,
  className: t = "",
  style: n = {},
  ...s
}) => {
  const { type: i, calendarPosition: o, calendarAreaRef: r } = qt(), [a, l] = bt({});
  return _t(() => {
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
      ...kl(d, c, m, p),
      ...El(u, h, y, f, g)
    });
  }, [o, r]), /* @__PURE__ */ R.jsx(
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
A_.displayName = "HSingleDatePickerCalendarArea";
const T_ = ({
  children: e,
  className: t = "",
  style: n = {},
  ...s
}) => {
  const { type: i, calendarPosition: o, calendarMonthAreaRef: r } = qt(), [a, l] = bt({});
  return _t(() => {
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
      ...kl(d, c, m, p),
      ...El(u, h, y, f, g)
    });
  }, [o, r]), /* @__PURE__ */ R.jsx(
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
T_.displayName = "HSingleDatePickerCalendarMonthArea";
const P_ = ({
  children: e,
  className: t = "",
  tableClassName: n = "",
  style: s = {},
  childrenTableHead: i
}) => {
  const { type: o } = qt();
  return /* @__PURE__ */ R.jsx("div", { className: `h_calendar_month ${o} ${t}`, style: s, children: /* @__PURE__ */ R.jsxs("table", { className: `h_calendar_month_table ${n}`, children: [
    /* @__PURE__ */ R.jsx("caption", { children: /* @__PURE__ */ R.jsx("span", { className: "blind", children: "Months" }) }),
    /* @__PURE__ */ R.jsx("thead", { children: i }),
    /* @__PURE__ */ R.jsx("tbody", { children: e })
  ] }) });
};
P_.displayName = "HSingleDatePickerCalendarMonth";
const M_ = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateIsActiveMonthCalendar: o } = qt();
  return /* @__PURE__ */ R.jsx(
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
M_.displayName = "HSingleDatePickerMonthButton";
const C_ = ({
  value: e,
  children: t,
  className: n = "",
  style: s = {},
  disabled: i = !1
}) => {
  const { type: o, setNowMonthByMonthCalendar: r } = qt(), a = () => {
    r(e);
  };
  return /* @__PURE__ */ R.jsx(
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
C_.displayName = "HSingleDatePickerCalendarMonthButton";
const D_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdSxCQMhFABQFQS73Ai3QWa4USytQkbIBukUG0dJRsgIN4KlWEjUIuRyen4t8kH8IE8E//8I/SOMMZPW+pJy3IO898+YnuO6guAPWkMISxOWkBBixSMoneERVIUtVIQQtINQtIE96AN7UYYjKAVxzk1xP+VbMLaMMYsAkZ8qpZwJIY+YzhG/KKUL59w24QjefEcP3hUAFBdLDoKrRd7Ch211hJuNXMOg0VHC4GH1jWNZ3lBPJKyUuqf8DUy8w9O6XZwQAAAAAElFTkSuQmCC", fr = () => /* @__PURE__ */ R.jsx("span", { children: /* @__PURE__ */ R.jsx("img", { src: D_, alt: "왼쪽 화살표" }) });
fr.displayName = "IconArrowLeft";
const k_ = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForMonthCalendar: i } = qt();
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_month_prev ${s} ${t}`,
      onClick: () => i(-1),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ R.jsx(fr, {})
    }
  );
};
k_.displayName = "HSingleDatePickerMonthPrevButton";
const E_ = ({
  children: e,
  childrenTableHead: t,
  childrenTableBody: n,
  className: s = "",
  tableClassName: i = "",
  style: o = {}
}) => {
  const { type: r } = qt();
  return /* @__PURE__ */ R.jsxs("div", { className: `h_calendar_year ${r} ${s}`, style: o, children: [
    e,
    /* @__PURE__ */ R.jsxs("table", { className: `h_calendar_year_table ${i}`, children: [
      /* @__PURE__ */ R.jsx("caption", { children: /* @__PURE__ */ R.jsx("span", { className: "blind", children: "Years" }) }),
      /* @__PURE__ */ R.jsx("thead", { children: t }),
      /* @__PURE__ */ R.jsx("tbody", { children: n })
    ] })
  ] });
};
E_.displayName = "HSingleDatePickerCalendarYear";
const O_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBpdS9FcIgEADgHEVqR8gIruAGjiAllRnFCh40uIEjZIWMkBHseQ88LfKi8nOnFBx3730cDdd1/yzn3NkYM3CMsNaOKaWLEGLiYNH3/RUAZjwPHAzPzXu/CyFM2HmP6RJjPCillib8BcM24WD4LFAx5G6j4Cyk4CJs4Sqs4SYsYUGBUso7hnlbI3XET+Cx24n11BxqdiyhKqyhImyhLKSgL0hFb5CDVshFL4jD6ojxxkHr0lqP3PH4AAMhEevOZzQ6AAAAAElFTkSuQmCC", pr = () => /* @__PURE__ */ R.jsx("span", { children: /* @__PURE__ */ R.jsx("img", { src: O_, alt: "오른쪽 화살표" }) });
pr.displayName = "IconArrowRight";
const R_ = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateNowMonth: o } = qt();
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_next ${i} ${t}`,
      disabled: s,
      onClick: () => o(1),
      style: n,
      children: e || i === "type1" && /* @__PURE__ */ R.jsx(pr, {})
    }
  );
};
R_.displayName = "HSingleDatePickerNextButton";
const L_ = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateNowMonth: o } = qt();
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_prev ${i} ${t}`,
      disabled: s,
      onClick: () => o(-1),
      style: n,
      children: e || i === "type1" && /* @__PURE__ */ R.jsx(fr, {})
    }
  );
};
L_.displayName = "HSingleDatePickerPrevButton";
const I_ = ({
  children: e,
  className: t = "",
  style: n = {},
  ...s
}) => {
  const { calendarYearAreaRef: i, type: o, calendarPosition: r } = qt(), [a, l] = bt({});
  return _t(() => {
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
      ...kl(d, c, m, p),
      ...El(u, h, y, f, g)
    });
  }, [r, i]), /* @__PURE__ */ R.jsx(
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
I_.displayName = "HSingleDatePickerCalendarYearArea";
const F_ = ({
  children: e,
  className: t = "",
  style: n = {},
  disabled: s = !1
}) => {
  const { type: i, updateIsActiveYearCalendar: o } = qt();
  return /* @__PURE__ */ R.jsx(
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
F_.displayName = "HSingleDatePickerYearButton";
const V_ = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForYearCalendar: i, yearsArrLength: o } = qt();
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_year_next ${s} ${t}`,
      onClick: () => i(o),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ R.jsx(pr, {})
    }
  );
};
V_.displayName = "HSingleDatePickerYearNextButton";
const N_ = ({
  children: e,
  className: t = "",
  value: n,
  disabled: s = !1,
  style: i = {}
}) => {
  const { type: o, setNowYearByYearCalendar: r } = qt(), a = () => {
    r(n);
  };
  return /* @__PURE__ */ R.jsx(
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
N_.displayName = "HSingleDatePickerCalendarYearButton";
const gp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB7ZnRbYNADIZ9iAceM8J1g3aDdJL2CcRTlQ3aEfqE4KXqBO0G7QbpBmUEFgDii4gURbkAZ0cOkj/pMNKPJf9wdzIAoCiKokhRluW/GxAINd8RAw0LNCwQiWDhGJ9QVdULhue+71fgxw6xhjDsWL4xpsEa3rIs+z6ne6cQJr1iuFT8uUJCseCvw4UPHPMMwFA83oGHtm2bU7HrulUcx9vh/A5mMiX/6BrvjRxdxGma/vk03EH2Mc/zGgKYkn+4xsfiFzF1G62BRg1ESAZwjj4mSdJAINR8B8lA6Nznyncsfg2oAWnUgDRqQBoWA9h633NrUyEbwGbrC1veLRbzw6XNgeMJrN0Bi1kzapMhG8B+ZoPvDL94uuHSWMBH3LsBwozVobuQNGpAGjUgjRqQRg1IM/pZhfoD4tp4DWCz9RlF0RMw/ISggh3ru08zlxKLorBwA3B8AFMU5UbZAevho9IdayVBAAAAAElFTkSuQmCC", Jt = [];
for (let e = 0; e < 256; ++e)
  Jt.push((e + 256).toString(16).slice(1));
function B_(e, t = 0) {
  return (Jt[e[t + 0]] + Jt[e[t + 1]] + Jt[e[t + 2]] + Jt[e[t + 3]] + "-" + Jt[e[t + 4]] + Jt[e[t + 5]] + "-" + Jt[e[t + 6]] + Jt[e[t + 7]] + "-" + Jt[e[t + 8]] + Jt[e[t + 9]] + "-" + Jt[e[t + 10]] + Jt[e[t + 11]] + Jt[e[t + 12]] + Jt[e[t + 13]] + Jt[e[t + 14]] + Jt[e[t + 15]]).toLowerCase();
}
let Yr;
const j_ = new Uint8Array(16);
function $_() {
  if (!Yr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Yr = crypto.getRandomValues.bind(crypto);
  }
  return Yr(j_);
}
const H_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), lh = { randomUUID: H_ };
function z_(e, t, n) {
  var i;
  if (lh.randomUUID && !e)
    return lh.randomUUID();
  e = e || {};
  const s = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? $_();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, B_(s);
}
function ch() {
  return z_();
}
const mp = ({ className: e }) => /* @__PURE__ */ R.jsx("img", { src: gp, alt: "달력 이미지", className: e });
mp.displayName = "IconCalendar";
const W_ = ({
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
  } = qt(), [y, b] = bt(ch());
  return _t(() => {
    b(ch()), m(h);
  }, [h]), /* @__PURE__ */ R.jsxs(
    "div",
    {
      ref: l,
      className: `h_inp_datepicker_area ${u} ${n}`,
      style: o,
      ...a,
      children: [
        e ? /* @__PURE__ */ R.jsx("img", { className: `icon_calendar ${i}`, src: gp, alt: "달력 이미지" }) : u === "type1" && /* @__PURE__ */ R.jsx(mp, { className: i }),
        /* @__PURE__ */ R.jsx(
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
W_.displayName = "HSingleDatePickerInput";
const U_ = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForMonthCalendar: i } = qt();
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_month_next ${s} ${t}`,
      onClick: () => i(1),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ R.jsx(pr, {})
    }
  );
};
U_.displayName = "HSingleDatePickerMonthNextButton";
const Y_ = ({ children: e, className: t = "", style: n = {} }) => {
  const { type: s, updateIsActiveYearCalendar: i } = qt();
  return /* @__PURE__ */ R.jsx(
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
Y_.displayName = "HSingleDatePickerMonthYearButton";
const K_ = ({
  children: e,
  className: t = "",
  style: n = {}
}) => {
  const { type: s, updateYearForYearCalendar: i, yearsArrLength: o } = qt();
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      type: "button",
      className: `h_btn_calendar_year_prev ${s} ${t}`,
      onClick: () => i(-1 * o),
      style: n,
      children: e || s === "type1" && /* @__PURE__ */ R.jsx(fr, {})
    }
  );
};
K_.displayName = "HSingleDatePickerYearPrevButton";
const yp = Ee(void 0), G_ = Fs(({
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
  const c = mt(null), u = mt(null), h = mt(null), [d, f] = bt(t), [p, g] = bt(!1), [m, y] = bt(0), [b, S] = bt({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    clientWidth: 0,
    clientHeight: 0
  });
  Ts(l, () => ({
    selectedValue: d,
    dropdownAreaWidth: m,
    isActiveList: p
  }));
  const _ = () => {
    if (g((z) => !z), !c.current)
      return;
    const { bottom: C, left: I, right: Z, top: W, width: U } = c.current.getBoundingClientRect();
    y(U), S({
      top: W,
      bottom: C,
      left: I,
      right: Z,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    });
  }, x = () => {
    if (!c.current)
      return;
    const { top: C, bottom: I, left: Z, right: W } = c.current.getBoundingClientRect();
    S((U) => ({
      ...U,
      top: C,
      bottom: I,
      left: Z,
      right: W
    }));
  }, w = () => {
    S((C) => ({
      ...C,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    }));
  }, A = (C) => {
    const I = C.target;
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
  }, T = (C, I) => {
    f(I), g(!1), s(I);
  };
  _t(() => (p ? (window.addEventListener("scroll", x), Array.isArray(i) && i.forEach((C) => {
    const I = document.querySelector(C);
    I instanceof HTMLElement && I.addEventListener("scroll", x);
  }), window.addEventListener("resize", w), window.addEventListener("click", A)) : (window.removeEventListener("scroll", x), Array.isArray(i) && i.forEach((C) => {
    const I = document.querySelector(C);
    I instanceof HTMLElement && I.removeEventListener(
      "scroll",
      x
    );
  }), window.removeEventListener("resize", w), window.removeEventListener("click", A)), () => {
    window.removeEventListener("scroll", x), window.removeEventListener("resize", w), window.removeEventListener("click", A);
  }), [p]);
  const [P, M] = bt(o);
  _t(() => {
    M(o);
  }, [o]);
  const D = {
    onClickedDropdownButton: _,
    isActiveList: p,
    listPosition: b,
    dropdownListRef: h,
    dropdownButtonRef: u,
    onClickedDropdownItemButton: T,
    isButtonDisabled: P
  };
  return /* @__PURE__ */ R.jsx(yp.Provider, { value: D, children: /* @__PURE__ */ R.jsx("div", { ref: c, className: "h_dropdown_area", style: r, ...a, children: e({ isActiveList: p, dropdownAreaWidth: m }) }) });
});
G_.displayName = "HDropdownArea";
const X_ = ({ children: e }) => /* @__PURE__ */ R.jsx("div", { className: "h_dropdown_item", children: e });
X_.displayName = "HDropdownItem";
const Ol = () => {
  const e = Wt(yp);
  if (!e)
    throw new Error("useHDropdownAreaContext must be used within a HDropdownAreaProvider");
  return e;
}, q_ = ({ children: e, ...t }) => {
  const { onClickedDropdownButton: n, dropdownButtonRef: s, isButtonDisabled: i } = Ol();
  return /* @__PURE__ */ R.jsx(
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
q_.displayName = "HDropdownButton";
const Z_ = ({
  children: e,
  disabled: t = !1,
  optionValue: n,
  onClick: s,
  className: i,
  ...o
}) => {
  const { onClickedDropdownItemButton: r } = Ol();
  return /* @__PURE__ */ R.jsx(
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
Z_.displayName = "HDropdownItemButton";
/*!
 * OverlayScrollbars
 * Version: 2.11.1
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */
const _e = (e, t) => {
  const { o: n, i: s, u: i } = e;
  let o = n, r;
  const a = (u, h) => {
    const d = o, f = u, p = h || (s ? !s(d, f) : d !== f);
    return (p || i) && (o = f, r = d), [o, p, r];
  };
  return [t ? (u) => a(t(o, r), u) : a, (u) => [o, !!u, r]];
}, Q_ = typeof window < "u" && typeof HTMLElement < "u" && !!window.document, me = Q_ ? window : {}, bp = Math.max, J_ = Math.min, Da = Math.round, Wo = Math.abs, uh = Math.sign, xp = me.cancelAnimationFrame, Rl = me.requestAnimationFrame, Uo = me.setTimeout, ka = me.clearTimeout, gr = (e) => typeof me[e] < "u" ? me[e] : void 0, tS = gr("MutationObserver"), hh = gr("IntersectionObserver"), fs = gr("ResizeObserver"), oi = gr("ScrollTimeline"), Ll = (e) => e === void 0, mr = (e) => e === null, Ge = (e) => typeof e == "number", zi = (e) => typeof e == "string", yr = (e) => typeof e == "boolean", ke = (e) => typeof e == "function", Qe = (e) => Array.isArray(e), Yo = (e) => typeof e == "object" && !Qe(e) && !mr(e), Il = (e) => {
  const t = !!e && e.length, n = Ge(t) && t > -1 && t % 1 == 0;
  return Qe(e) || !ke(e) && n ? t > 0 && Yo(e) ? t - 1 in e : !0 : !1;
}, Ko = (e) => !!e && e.constructor === Object, Go = (e) => e instanceof HTMLElement, br = (e) => e instanceof Element;
function Tt(e, t) {
  if (Il(e))
    for (let n = 0; n < e.length && t(e[n], n, e) !== !1; n++)
      ;
  else e && Tt(Object.keys(e), (n) => t(e[n], n, e));
  return e;
}
const vp = (e, t) => e.indexOf(t) >= 0, Ci = (e, t) => e.concat(t), $t = (e, t, n) => (!zi(t) && Il(t) ? Array.prototype.push.apply(e, t) : e.push(t), e), Ln = (e) => Array.from(e || []), Fl = (e) => Qe(e) ? e : !zi(e) && Il(e) ? Ln(e) : [e], Ea = (e) => !!e && !e.length, Oa = (e) => Ln(new Set(e)), Ae = (e, t, n) => {
  Tt(e, (i) => i ? i.apply(void 0, t || []) : !0), n || (e.length = 0);
}, _p = "paddingTop", Sp = "paddingRight", wp = "paddingLeft", Ap = "paddingBottom", Tp = "marginLeft", Pp = "marginRight", Mp = "marginBottom", Cp = "overflowX", Dp = "overflowY", xr = "width", vr = "height", xn = "visible", Gn = "hidden", Ds = "scroll", eS = (e) => {
  const t = String(e || "");
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}, _r = (e, t, n, s) => {
  if (e && t) {
    let i = !0;
    return Tt(n, (o) => {
      const r = e[o], a = t[o];
      r !== a && (i = !1);
    }), i;
  }
  return !1;
}, kp = (e, t) => _r(e, t, ["w", "h"]), ko = (e, t) => _r(e, t, ["x", "y"]), nS = (e, t) => _r(e, t, ["t", "r", "b", "l"]), Tn = () => {
}, it = (e, ...t) => e.bind(0, ...t), ps = (e) => {
  let t;
  const n = e ? Uo : Rl, s = e ? ka : xp;
  return [(i) => {
    s(t), t = n(() => i(), ke(e) ? e() : e);
  }, () => s(t)];
}, Xo = (e, t) => {
  const { _: n, p: s, v: i, S: o } = t || {};
  let r, a, l, c, u = Tn;
  const h = function(m) {
    u(), ka(r), c = r = a = void 0, u = Tn, e.apply(this, m);
  }, d = (g) => o && a ? o(a, g) : g, f = () => {
    u !== Tn && h(d(l) || l);
  }, p = function() {
    const m = Ln(arguments), y = ke(n) ? n() : n;
    if (Ge(y) && y >= 0) {
      const S = ke(s) ? s() : s, _ = Ge(S) && S >= 0, x = y > 0 ? Uo : Rl, w = y > 0 ? ka : xp, T = d(m) || m, P = h.bind(0, T);
      let M;
      u(), i && !c ? (P(), c = !0, M = x(() => c = void 0, y)) : (M = x(P, y), _ && !r && (r = Uo(f, S))), u = () => w(M), a = l = T;
    } else
      h(m);
  };
  return p.m = f, p;
}, Ep = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Be = (e) => e ? Object.keys(e) : [], vt = (e, t, n, s, i, o, r) => {
  const a = [t, n, s, i, o, r];
  return (typeof e != "object" || mr(e)) && !ke(e) && (e = {}), Tt(a, (l) => {
    Tt(l, (c, u) => {
      const h = l[u];
      if (e === h)
        return !0;
      const d = Qe(h);
      if (h && Ko(h)) {
        const f = e[u];
        let p = f;
        d && !Qe(f) ? p = [] : !d && !Ko(f) && (p = {}), e[u] = vt(p, h);
      } else
        e[u] = d ? h.slice() : h;
    });
  }), e;
}, Op = (e, t) => Tt(vt({}, e), (n, s, i) => {
  n === void 0 ? delete i[s] : n && Ko(n) && (i[s] = Op(n));
}), Vl = (e) => !Be(e).length, Rp = (e, t, n) => bp(e, J_(t, n)), Qn = (e) => Oa((Qe(e) ? e : (e || "").split(" ")).filter((t) => t)), Nl = (e, t) => e && e.getAttribute(t), dh = (e, t) => e && e.hasAttribute(t), on = (e, t, n) => {
  Tt(Qn(t), (s) => {
    e && e.setAttribute(s, String(n || ""));
  });
}, ze = (e, t) => {
  Tt(Qn(t), (n) => e && e.removeAttribute(n));
}, Sr = (e, t) => {
  const n = Qn(Nl(e, t)), s = it(on, e, t), i = (o, r) => {
    const a = new Set(n);
    return Tt(Qn(o), (l) => {
      a[r](l);
    }), Ln(a).join(" ");
  };
  return {
    O: (o) => s(i(o, "delete")),
    $: (o) => s(i(o, "add")),
    C: (o) => {
      const r = Qn(o);
      return r.reduce((a, l) => a && n.includes(l), r.length > 0);
    }
  };
}, Lp = (e, t, n) => (Sr(e, t).O(n), it(Bl, e, t, n)), Bl = (e, t, n) => (Sr(e, t).$(n), it(Lp, e, t, n)), qo = (e, t, n, s) => (s ? Bl : Lp)(e, t, n), jl = (e, t, n) => Sr(e, t).C(n), Ip = (e) => Sr(e, "class"), Fp = (e, t) => {
  Ip(e).O(t);
}, $l = (e, t) => (Ip(e).$(t), it(Fp, e, t)), Vp = (e, t) => {
  const n = t ? br(t) && t : document;
  return n ? Ln(n.querySelectorAll(e)) : [];
}, sS = (e, t) => {
  const n = t ? br(t) && t : document;
  return n && n.querySelector(e);
}, Ra = (e, t) => br(e) && e.matches(t), Np = (e) => Ra(e, "body"), La = (e) => e ? Ln(e.childNodes) : [], Di = (e) => e && e.parentElement, gs = (e, t) => br(e) && e.closest(t), Ia = (e) => document.activeElement, iS = (e, t, n) => {
  const s = gs(e, t), i = e && sS(n, s), o = gs(i, t) === s;
  return s && i ? s === e || i === e || o && gs(gs(e, n), t) !== s : !1;
}, ks = (e) => {
  Tt(Fl(e), (t) => {
    const n = Di(t);
    t && n && n.removeChild(t);
  });
}, ge = (e, t) => it(ks, e && t && Tt(Fl(t), (n) => {
  n && e.appendChild(n);
}));
let Bp;
const oS = () => Bp, rS = (e) => {
  Bp = e;
}, ws = (e) => {
  const t = document.createElement("div");
  return on(t, "class", e), t;
}, jp = (e) => {
  const t = ws(), n = oS(), s = e.trim();
  return t.innerHTML = n ? n.createHTML(s) : s, Tt(La(t), (i) => ks(i));
}, fh = (e, t) => e.getPropertyValue(t) || e[t] || "", $p = (e) => {
  const t = e || 0;
  return isFinite(t) ? t : 0;
}, fo = (e) => $p(parseFloat(e || "")), Fa = (e) => Math.round(e * 1e4) / 1e4, Hp = (e) => `${Fa($p(e))}px`;
function ki(e, t) {
  e && t && Tt(t, (n, s) => {
    try {
      const i = e.style, o = mr(n) || yr(n) ? "" : Ge(n) ? Hp(n) : n;
      s.indexOf("--") === 0 ? i.setProperty(s, o) : i[s] = o;
    } catch {
    }
  });
}
function dn(e, t, n) {
  const s = zi(t);
  let i = s ? "" : {};
  if (e) {
    const o = me.getComputedStyle(e, n) || e.style;
    i = s ? fh(o, t) : Ln(t).reduce((r, a) => (r[a] = fh(o, a), r), i);
  }
  return i;
}
const ph = (e, t, n) => {
  const s = t ? `${t}-` : "", i = n ? `-${n}` : "", o = `${s}top${i}`, r = `${s}right${i}`, a = `${s}bottom${i}`, l = `${s}left${i}`, c = dn(e, [o, r, a, l]);
  return {
    t: fo(c[o]),
    r: fo(c[r]),
    b: fo(c[a]),
    l: fo(c[l])
  };
}, Kr = (e, t) => `translate${Yo(e) ? `(${e.x},${e.y})` : `${t ? "X" : "Y"}(${e})`}`, aS = (e) => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length), lS = {
  w: 0,
  h: 0
}, wr = (e, t) => t ? {
  w: t[`${e}Width`],
  h: t[`${e}Height`]
} : lS, cS = (e) => wr("inner", e || me), As = it(wr, "offset"), zp = it(wr, "client"), Zo = it(wr, "scroll"), Hl = (e) => {
  const t = parseFloat(dn(e, xr)) || 0, n = parseFloat(dn(e, vr)) || 0;
  return {
    w: t - Da(t),
    h: n - Da(n)
  };
}, Gr = (e) => e.getBoundingClientRect(), uS = (e) => !!e && aS(e), Va = (e) => !!(e && (e[vr] || e[xr])), Wp = (e, t) => {
  const n = Va(e);
  return !Va(t) && n;
}, gh = (e, t, n, s) => {
  Tt(Qn(t), (i) => {
    e && e.removeEventListener(i, n, s);
  });
}, Ft = (e, t, n, s) => {
  var i;
  const o = (i = s && s.H) != null ? i : !0, r = s && s.I || !1, a = s && s.A || !1, l = {
    passive: o,
    capture: r
  };
  return it(Ae, Qn(t).map((c) => {
    const u = a ? (h) => {
      gh(e, c, u, r), n && n(h);
    } : n;
    return e && e.addEventListener(c, u, l), it(gh, e, c, u, r);
  }));
}, Up = (e) => e.stopPropagation(), Na = (e) => e.preventDefault(), Yp = (e) => Up(e) || Na(e), Ye = (e, t) => {
  const { x: n, y: s } = Ge(t) ? {
    x: t,
    y: t
  } : t || {};
  Ge(n) && (e.scrollLeft = n), Ge(s) && (e.scrollTop = s);
}, we = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
}), Kp = () => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
}), hS = (e, t) => {
  const { D: n, M: s } = e, { w: i, h: o } = t, r = (h, d, f) => {
    let p = uh(h) * f, g = uh(d) * f;
    if (p === g) {
      const m = Wo(h), y = Wo(d);
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
}, Xr = ({ D: e, M: t }) => {
  const n = (s, i) => s === 0 && s <= i;
  return {
    x: n(e.x, t.x),
    y: n(e.y, t.y)
  };
}, mh = ({ D: e, M: t }, n) => {
  const s = (i, o, r) => Rp(0, 1, (i - r) / (i - o) || 0);
  return {
    x: s(e.x, t.x, n.x),
    y: s(e.y, t.y, n.y)
  };
}, Ba = (e) => {
  e && e.focus && e.focus({
    preventScroll: !0
  });
}, yh = (e, t) => {
  Tt(Fl(t), e);
}, ja = (e) => {
  const t = /* @__PURE__ */ new Map(), n = (o, r) => {
    if (o) {
      const a = t.get(o);
      yh((l) => {
        a && a[l ? "delete" : "clear"](l);
      }, r);
    } else
      t.forEach((a) => {
        a.clear();
      }), t.clear();
  }, s = (o, r) => {
    if (zi(o)) {
      const c = t.get(o) || /* @__PURE__ */ new Set();
      return t.set(o, c), yh((u) => {
        ke(u) && c.add(u);
      }, r), it(n, o, r);
    }
    yr(r) && r && n();
    const a = Be(o), l = [];
    return Tt(a, (c) => {
      const u = o[c];
      u && $t(l, s(c, u));
    }), it(Ae, l);
  }, i = (o, r) => {
    Tt(Ln(t.get(o)), (a) => {
      r && !Ea(r) ? a.apply(0, r) : a();
    });
  };
  return s(e || {}), [s, n, i];
}, Gp = {}, Xp = {}, dS = (e) => {
  Tt(e, (t) => Tt(t, (n, s) => {
    Gp[s] = t[s];
  }));
}, qp = (e, t, n) => Be(e).map((s) => {
  const { static: i, instance: o } = e[s], [r, a, l] = n || [], c = n ? o : i;
  if (c) {
    const u = n ? c(r, a, t) : c(t);
    return (l || Xp)[s] = u;
  }
}), Wi = (e) => Xp[e], fS = "__osOptionsValidationPlugin", Vs = "data-overlayscrollbars", Eo = "os-environment", po = `${Eo}-scrollbar-hidden`, qr = `${Vs}-initialize`, Oo = "noClipping", bh = `${Vs}-body`, Pn = Vs, pS = "host", rn = `${Vs}-viewport`, gS = Cp, mS = Dp, yS = "arrange", Zp = "measuring", bS = "scrolling", Qp = "scrollbarHidden", xS = "noContent", $a = `${Vs}-padding`, xh = `${Vs}-content`, zl = "os-size-observer", vS = `${zl}-appear`, _S = `${zl}-listener`, SS = "os-trinsic-observer", wS = "os-theme-none", Te = "os-scrollbar", AS = `${Te}-rtl`, TS = `${Te}-horizontal`, PS = `${Te}-vertical`, Jp = `${Te}-track`, Wl = `${Te}-handle`, MS = `${Te}-visible`, CS = `${Te}-cornerless`, vh = `${Te}-interaction`, _h = `${Te}-unusable`, Ha = `${Te}-auto-hide`, Sh = `${Ha}-hidden`, wh = `${Te}-wheel`, DS = `${Jp}-interactive`, kS = `${Wl}-interactive`, ES = "__osSizeObserverPlugin", OS = (e, t) => {
  const { T: n } = t, [s, i] = e("showNativeOverlaidScrollbars");
  return [s && n.x && n.y, i];
}, Es = (e) => e.indexOf(xn) === 0, RS = (e, t) => {
  const n = (i, o, r, a) => {
    const l = i === xn ? Gn : i.replace(`${xn}-`, ""), c = Es(i), u = Es(r);
    return !o && !a ? Gn : c && u ? xn : c ? o && a ? l : o ? xn : Gn : o ? l : u && a ? xn : Gn;
  }, s = {
    x: n(t.x, e.x, t.y, e.y),
    y: n(t.y, e.y, t.x, e.x)
  };
  return {
    k: s,
    R: {
      x: s.x === Ds,
      y: s.y === Ds
    }
  };
}, tg = "__osScrollbarsHidingPlugin", LS = "__osClickScrollPlugin", Ah = (e) => JSON.stringify(e, (t, n) => {
  if (ke(n))
    throw 0;
  return n;
}), Th = (e, t) => e ? `${t}`.split(".").reduce((n, s) => n && Ep(n, s) ? n[s] : void 0, e) : void 0, IS = {
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
}, eg = (e, t) => {
  const n = {}, s = Ci(Be(t), Be(e));
  return Tt(s, (i) => {
    const o = e[i], r = t[i];
    if (Yo(o) && Yo(r))
      vt(n[i] = {}, eg(o, r)), Vl(n[i]) && delete n[i];
    else if (Ep(t, i) && r !== o) {
      let a = !0;
      if (Qe(o) || Qe(r))
        try {
          Ah(o) === Ah(r) && (a = !1);
        } catch {
        }
      a && (n[i] = r);
    }
  }), n;
}, Ph = (e, t, n) => (s) => [Th(e, s), n || Th(t, s) !== void 0];
let ng;
const FS = () => ng, VS = (e) => {
  ng = e;
};
let Zr;
const NS = () => {
  const e = (_, x, w) => {
    ge(document.body, _), ge(document.body, _);
    const A = zp(_), T = As(_), P = Hl(x);
    return w && ks(_), {
      x: T.h - A.h + P.h,
      y: T.w - A.w + P.w
    };
  }, t = (_) => {
    let x = !1;
    const w = $l(_, po);
    try {
      x = dn(_, "scrollbar-width") === "none" || dn(_, "display", "::-webkit-scrollbar") === "none";
    } catch {
    }
    return w(), x;
  }, n = `.${Eo}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${Eo} div{width:200%;height:200%;margin:10px 0}.${po}{scrollbar-width:none!important}.${po}::-webkit-scrollbar,.${po}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`, i = jp(`<div class="${Eo}"><div></div><style>${n}</style></div>`)[0], o = i.firstChild, r = i.lastChild, a = FS();
  a && (r.nonce = a);
  const [l, , c] = ja(), [u, h] = _e({
    o: e(i, o),
    i: ko
  }, it(e, i, o, !0)), [d] = h(), f = t(i), p = {
    x: d.x === 0,
    y: d.y === 0
  }, g = {
    elements: {
      host: null,
      padding: !f,
      viewport: (_) => f && Np(_) && _,
      content: !1
    },
    scrollbars: {
      slot: !0
    },
    cancel: {
      nativeScrollbarsOverlaid: !1,
      body: null
    }
  }, m = vt({}, IS), y = it(vt, {}, m), b = it(vt, {}, g), S = {
    N: d,
    T: p,
    P: f,
    G: !!oi,
    K: it(l, "r"),
    Z: b,
    tt: (_) => vt(g, _) && b(),
    nt: y,
    ot: (_) => vt(m, _) && y(),
    st: vt({}, g),
    et: vt({}, m)
  };
  if (ze(i, "style"), ks(i), Ft(me, "resize", () => {
    c("r", []);
  }), ke(me.matchMedia) && !f && (!p.x || !p.y)) {
    const _ = (x) => {
      const w = me.matchMedia(`(resolution: ${me.devicePixelRatio}dppx)`);
      Ft(w, "change", () => {
        x(), _(x);
      }, {
        A: !0
      });
    };
    _(() => {
      const [x, w] = u();
      vt(S.N, x), c("r", [w]);
    });
  }
  return S;
}, Je = () => (Zr || (Zr = NS()), Zr), BS = (e, t, n) => {
  let s = !1;
  const i = n ? /* @__PURE__ */ new WeakMap() : !1, o = () => {
    s = !0;
  }, r = (a) => {
    if (i && n) {
      const l = n.map((c) => {
        const [u, h] = c || [];
        return [h && u ? (a || Vp)(u, e) : [], h];
      });
      Tt(l, (c) => Tt(c[0], (u) => {
        const h = c[1], d = i.get(u) || [];
        if (e.contains(u) && h) {
          const p = Ft(u, h, (g) => {
            s ? (p(), i.delete(u)) : t(g);
          });
          i.set(u, $t(d, p));
        } else
          Ae(d), i.delete(u);
      }));
    }
  };
  return r(), [o, r];
}, Mh = (e, t, n, s) => {
  let i = !1;
  const { ct: o, rt: r, lt: a, it: l, ut: c, ft: u } = s || {}, h = Xo(() => i && n(!0), {
    _: 33,
    p: 99
  }), [d, f] = BS(e, h, a), p = o || [], g = r || [], m = Ci(p, g), y = (S, _) => {
    if (!Ea(_)) {
      const x = c || Tn, w = u || Tn, A = [], T = [];
      let P = !1, M = !1;
      if (Tt(_, (D) => {
        const { attributeName: C, target: I, type: Z, oldValue: W, addedNodes: U, removedNodes: z } = D, Q = Z === "attributes", J = Z === "childList", ot = e === I, G = Q && C, O = G && Nl(I, C || ""), $ = zi(O) ? O : null, Y = G && W !== $, k = vp(g, C) && Y;
        if (t && (J || !ot)) {
          const X = Q && Y, B = X && l && Ra(I, l), at = (B ? !x(I, C, W, $) : !Q || X) && !w(D, !!B, e, s);
          Tt(U, (ut) => $t(A, ut)), Tt(z, (ut) => $t(A, ut)), M = M || at;
        }
        !t && ot && Y && !x(I, C, W, $) && ($t(T, C), P = P || k);
      }), f((D) => Oa(A).reduce((C, I) => ($t(C, Vp(D, I)), Ra(I, D) ? $t(C, I) : C), [])), t)
        return !S && M && n(!1), [!1];
      if (!Ea(T) || P) {
        const D = [Oa(T), P];
        return S || n.apply(0, D), D;
      }
    }
  }, b = new tS(it(y, !1));
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
let Hn = null;
const sg = (e, t, n) => {
  const { _t: s } = n || {}, i = Wi(ES), [o] = _e({
    o: !1,
    u: !0
  });
  return () => {
    const r = [], l = jp(`<div class="${zl}"><div class="${_S}"></div></div>`)[0], c = l.firstChild, u = (h) => {
      const d = h instanceof ResizeObserverEntry;
      let f = !1, p = !1;
      if (d) {
        const [g, , m] = o(h.contentRect), y = Va(g);
        p = Wp(g, m), f = !p && !y;
      } else
        p = h === !0;
      f || t({
        dt: !0,
        _t: p
      });
    };
    if (fs) {
      if (!yr(Hn)) {
        const p = new fs(Tn);
        p.observe(e, {
          get box() {
            Hn = !0;
          }
        }), Hn = Hn || !1, p.disconnect();
      }
      const h = Xo(u, {
        _: 0,
        p: 0
      }), d = (p) => h(p.pop()), f = new fs(d);
      if (f.observe(Hn ? e : c), $t(r, [() => f.disconnect(), !Hn && ge(e, l)]), Hn) {
        const p = new fs(d);
        p.observe(e, {
          box: "border-box"
        }), $t(r, () => p.disconnect());
      }
    } else if (i) {
      const [h, d] = i(c, u, s);
      $t(r, Ci([$l(l, vS), Ft(l, "animationstart", h), ge(e, l)], d));
    } else
      return Tn;
    return it(Ae, r);
  };
}, jS = (e, t) => {
  let n;
  const s = (l) => l.h === 0 || l.isIntersecting || l.intersectionRatio > 0, i = ws(SS), [o] = _e({
    o: !1
  }), r = (l, c) => {
    if (l) {
      const u = o(s(l)), [, h] = u;
      return h && !c && t(u) && [u];
    }
  }, a = (l, c) => r(c.pop(), l);
  return [() => {
    const l = [];
    if (hh)
      n = new hh(it(a, !1), {
        root: e
      }), n.observe(i), $t(l, () => {
        n.disconnect();
      });
    else {
      const c = () => {
        const u = As(i);
        r(u);
      };
      $t(l, sg(i, c)()), c();
    }
    return it(Ae, $t(l, ge(e, i)));
  }, () => n && a(!0, n.takeRecords())];
}, $S = (e, t, n, s) => {
  let i, o, r, a, l, c;
  const u = `[${Pn}]`, h = `[${rn}]`, d = ["id", "class", "style", "open", "wrap", "cols", "rows"], { vt: f, ht: p, U: g, gt: m, bt: y, L: b, wt: S, yt: _, St: x, Ot: w } = e, A = (k) => dn(k, "direction") === "rtl", T = {
    $t: !1,
    F: A(f)
  }, P = Je(), M = Wi(tg), [D] = _e({
    i: kp,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const k = M && M.V(e, t, T, P, n).W, B = !(S && b) && jl(p, Pn, Oo), V = !b && _(yS), at = V && we(m), ut = at && w(), dt = x(Zp, B), pt = V && k && k()[0], xt = Zo(g), lt = Hl(g);
    return pt && pt(), Ye(m, at), ut && ut(), B && dt(), {
      w: xt.w + lt.w,
      h: xt.h + lt.h
    };
  }), C = Xo(s, {
    _: () => i,
    p: () => o,
    S(k, X) {
      const [B] = k, [V] = X;
      return [Ci(Be(B), Be(V)).reduce((at, ut) => (at[ut] = B[ut] || V[ut], at), {})];
    }
  }), I = (k) => {
    const X = A(f);
    vt(k, {
      Ct: c !== X
    }), vt(T, {
      F: X
    }), c = X;
  }, Z = (k, X) => {
    const [B, V] = k, at = {
      xt: V
    };
    return vt(T, {
      $t: B
    }), X || s(at), at;
  }, W = ({ dt: k, _t: X }) => {
    const V = !(k && !X) && P.P ? C : s, at = {
      dt: k || X,
      _t: X
    };
    I(at), V(at);
  }, U = (k, X) => {
    const [, B] = D(), V = {
      Ht: B
    };
    return I(V), B && !X && (k ? s : C)(V), V;
  }, z = (k, X, B) => {
    const V = {
      Et: X
    };
    return I(V), X && !B && C(V), V;
  }, [Q, J] = y ? jS(p, Z) : [], ot = !b && sg(p, W, {
    _t: !0
  }), [G, O] = Mh(p, !1, z, {
    rt: d,
    ct: d
  }), $ = b && fs && new fs((k) => {
    const X = k[k.length - 1].contentRect;
    W({
      dt: !0,
      _t: Wp(X, l)
    }), l = X;
  }), Y = Xo(() => {
    const [, k] = D();
    s({
      Ht: k
    });
  }, {
    _: 222,
    v: !0
  });
  return [() => {
    $ && $.observe(p);
    const k = ot && ot(), X = Q && Q(), B = G(), V = P.K((at) => {
      at ? C({
        zt: at
      }) : Y();
    });
    return () => {
      $ && $.disconnect(), k && k(), X && X(), a && a(), B(), V();
    };
  }, ({ It: k, At: X, Dt: B }) => {
    const V = {}, [at] = k("update.ignoreMutation"), [ut, dt] = k("update.attributes"), [pt, xt] = k("update.elementEvents"), [lt, yt] = k("update.debounce"), Gt = xt || dt, Lt = X || B, kt = (Mt) => ke(at) && at(Mt);
    if (Gt) {
      r && r(), a && a();
      const [Mt, Pt] = Mh(y || g, !0, U, {
        ct: Ci(d, ut || []),
        lt: pt,
        it: u,
        ft: (v, F) => {
          const { target: H, attributeName: st } = v;
          return (!F && st && !b ? iS(H, u, h) : !1) || !!gs(H, `.${Te}`) || !!kt(v);
        }
      });
      a = Mt(), r = Pt;
    }
    if (yt)
      if (C.m(), Qe(lt)) {
        const Mt = lt[0], Pt = lt[1];
        i = Ge(Mt) && Mt, o = Ge(Pt) && Pt;
      } else Ge(lt) ? (i = lt, o = !1) : (i = !1, o = !1);
    if (Lt) {
      const Mt = O(), Pt = J && J(), v = r && r();
      Mt && vt(V, z(Mt[0], Mt[1], Lt)), Pt && vt(V, Z(Pt[0], Lt)), v && vt(V, U(v[0], Lt));
    }
    return I(V), V;
  }, T];
}, ig = (e, t) => ke(t) ? t.apply(0, e) : t, HS = (e, t, n, s) => {
  const i = Ll(s) ? n : s;
  return ig(e, i) || t.apply(0, e);
}, og = (e, t, n, s) => {
  const i = Ll(s) ? n : s, o = ig(e, i);
  return !!o && (Go(o) ? o : t.apply(0, e));
}, zS = (e, t) => {
  const { nativeScrollbarsOverlaid: n, body: s } = t || {}, { T: i, P: o, Z: r } = Je(), { nativeScrollbarsOverlaid: a, body: l } = r().cancel, c = n ?? a, u = Ll(s) ? l : s, h = (i.x || i.y) && c, d = e && (mr(u) ? !o : u);
  return !!h || !!d;
}, WS = (e, t, n, s) => {
  const i = "--os-viewport-percent", o = "--os-scroll-percent", r = "--os-scroll-direction", { Z: a } = Je(), { scrollbars: l } = a(), { slot: c } = l, { vt: u, ht: h, U: d, Mt: f, gt: p, wt: g, L: m } = t, { scrollbars: y } = f ? {} : e, { slot: b } = y || {}, S = [], _ = [], x = [], w = og([u, h, d], () => m && g ? u : h, c, b), A = (G) => {
    if (oi) {
      let O = null, $ = [];
      const Y = new oi({
        source: p,
        axis: G
      }), k = () => {
        O && O.cancel(), O = null;
      };
      return {
        Rt: (B) => {
          const { Tt: V } = n, at = Xr(V)[G], ut = G === "x", dt = [Kr(0, ut), Kr(`calc(100cq${ut ? "w" : "h"} + -100%)`, ut)], pt = at ? dt : dt.reverse();
          return $[0] === pt[0] && $[1] === pt[1] || (k(), $ = pt, O = B.kt.animate({
            clear: ["left"],
            transform: pt
          }, {
            timeline: Y
          })), k;
        }
      };
    }
  }, T = {
    x: A("x"),
    y: A("y")
  }, P = () => {
    const { Vt: G, Lt: O } = n, $ = (Y, k) => Rp(0, 1, Y / (Y + k) || 0);
    return {
      x: $(O.x, G.x),
      y: $(O.y, G.y)
    };
  }, M = (G, O, $) => {
    const Y = $ ? $l : Fp;
    Tt(G, (k) => {
      Y(k.Ut, O);
    });
  }, D = (G, O) => {
    Tt(G, ($) => {
      const [Y, k] = O($);
      ki(Y, k);
    });
  }, C = (G, O, $) => {
    const Y = yr($), k = Y ? $ : !0, X = Y ? !$ : !0;
    k && M(_, G, O), X && M(x, G, O);
  }, I = () => {
    const G = P(), O = ($) => (Y) => [Y.Ut, {
      [i]: Fa($) + ""
    }];
    D(_, O(G.x)), D(x, O(G.y));
  }, Z = () => {
    if (!oi) {
      const { Tt: G } = n, O = mh(G, we(p)), $ = (Y) => (k) => [k.Ut, {
        [o]: Fa(Y) + ""
      }];
      D(_, $(O.x)), D(x, $(O.y));
    }
  }, W = () => {
    const { Tt: G } = n, O = Xr(G), $ = (Y) => (k) => [k.Ut, {
      [r]: Y ? "0" : "1"
    }];
    D(_, $(O.x)), D(x, $(O.y)), oi && (_.forEach(T.x.Rt), x.forEach(T.y.Rt));
  }, U = () => {
    if (m && !g) {
      const { Vt: G, Tt: O } = n, $ = Xr(O), Y = mh(O, we(p)), k = (X) => {
        const { Ut: B } = X, V = Di(B) === d && B, at = (ut, dt, pt) => {
          const xt = dt * ut;
          return Hp(pt ? xt : -xt);
        };
        return [V, V && {
          transform: Kr({
            x: at(Y.x, G.x, $.x),
            y: at(Y.y, G.y, $.y)
          })
        }];
      };
      D(_, k), D(x, k);
    }
  }, z = (G) => {
    const O = G ? "x" : "y", Y = ws(`${Te} ${G ? TS : PS}`), k = ws(Jp), X = ws(Wl), B = {
      Ut: Y,
      Pt: k,
      kt: X
    }, V = T[O];
    return $t(G ? _ : x, B), $t(S, [ge(Y, k), ge(k, X), it(ks, Y), V && V.Rt(B), s(B, C, G)]), B;
  }, Q = it(z, !0), J = it(z, !1), ot = () => (ge(w, _[0].Ut), ge(w, x[0].Ut), it(Ae, S));
  return Q(), J(), [{
    Nt: I,
    qt: Z,
    Bt: W,
    Ft: U,
    jt: C,
    Xt: {
      Yt: _,
      Wt: Q,
      Jt: it(D, _)
    },
    Gt: {
      Yt: x,
      Wt: J,
      Jt: it(D, x)
    }
  }, ot];
}, US = (e, t, n, s) => (i, o, r) => {
  const { ht: a, U: l, L: c, gt: u, Kt: h, Ot: d } = t, { Ut: f, Pt: p, kt: g } = i, [m, y] = ps(333), [b, S] = ps(444), _ = (A) => {
    ke(u.scrollBy) && u.scrollBy({
      behavior: "smooth",
      left: A.x,
      top: A.y
    });
  }, x = () => {
    const A = "pointerup pointercancel lostpointercapture", T = `client${r ? "X" : "Y"}`, P = r ? xr : vr, M = r ? "left" : "top", D = r ? "w" : "h", C = r ? "x" : "y", I = (W, U) => (z) => {
      const { Vt: Q } = n, J = As(p)[D] - As(g)[D], G = U * z / J * Q[C];
      Ye(u, {
        [C]: W + G
      });
    }, Z = [];
    return Ft(p, "pointerdown", (W) => {
      const U = gs(W.target, `.${Wl}`) === g, z = U ? g : p, Q = e.scrollbars, J = Q[U ? "dragScroll" : "clickScroll"], { button: ot, isPrimary: G, pointerType: O } = W, { pointers: $ } = Q;
      if (ot === 0 && G && J && ($ || []).includes(O)) {
        Ae(Z), S();
        const k = !U && (W.shiftKey || J === "instant"), X = it(Gr, g), B = it(Gr, p), V = (F, H) => (F || X())[M] - (H || B())[M], at = Da(Gr(u)[P]) / As(u)[D] || 1, ut = I(we(u)[C], 1 / at), dt = W[T], pt = X(), xt = B(), lt = pt[P], yt = V(pt, xt) + lt / 2, Gt = dt - xt[M], Lt = U ? 0 : Gt - yt, kt = (F) => {
          Ae(v), z.releasePointerCapture(F.pointerId);
        }, Mt = U || k, Pt = d(), v = [Ft(h, A, kt), Ft(h, "selectstart", (F) => Na(F), {
          H: !1
        }), Ft(p, A, kt), Mt && Ft(p, "pointermove", (F) => ut(Lt + (F[T] - dt))), Mt && (() => {
          const F = we(u);
          Pt();
          const H = we(u), st = {
            x: H.x - F.x,
            y: H.y - F.y
          };
          (Wo(st.x) > 3 || Wo(st.y) > 3) && (d(), Ye(u, F), _(st), b(Pt));
        })];
        if (z.setPointerCapture(W.pointerId), k)
          ut(Lt);
        else if (!U) {
          const F = Wi(LS);
          if (F) {
            const H = F(ut, Lt, lt, (st) => {
              st ? Pt() : $t(v, Pt);
            });
            $t(v, H), $t(Z, it(H, !0));
          }
        }
      }
    });
  };
  let w = !0;
  return it(Ae, [Ft(g, "pointermove pointerleave", s), Ft(f, "pointerenter", () => {
    o(vh, !0);
  }), Ft(f, "pointerleave pointercancel", () => {
    o(vh, !1);
  }), !c && Ft(f, "mousedown", () => {
    const A = Ia();
    (dh(A, rn) || dh(A, Pn) || A === document.body) && Uo(it(Ba, l), 25);
  }), Ft(f, "wheel", (A) => {
    const { deltaX: T, deltaY: P, deltaMode: M } = A;
    w && M === 0 && Di(f) === a && _({
      x: T,
      y: P
    }), w = !1, o(wh, !0), m(() => {
      w = !0, o(wh);
    }), Na(A);
  }, {
    H: !1,
    I: !0
  }), Ft(f, "pointerdown", it(Ft, h, "click", Yp, {
    A: !0,
    I: !0,
    H: !1
  }), {
    I: !0
  }), x(), y, S]);
}, YS = (e, t, n, s, i, o) => {
  let r, a, l, c, u, h = Tn, d = 0;
  const f = ["mouse", "pen"], p = (O) => f.includes(O.pointerType), [g, m] = ps(), [y, b] = ps(100), [S, _] = ps(100), [x, w] = ps(() => d), [A, T] = WS(e, i, s, US(t, i, s, (O) => p(O) && Q())), { ht: P, Qt: M, wt: D } = i, { jt: C, Nt: I, qt: Z, Bt: W, Ft: U } = A, z = (O, $) => {
    if (w(), O)
      C(Sh);
    else {
      const Y = it(C, Sh, !0);
      d > 0 && !$ ? x(Y) : Y();
    }
  }, Q = () => {
    (l ? !r : !c) && (z(!0), y(() => {
      z(!1);
    }));
  }, J = (O) => {
    C(Ha, O, !0), C(Ha, O, !1);
  }, ot = (O) => {
    p(O) && (r = l, l && z(!0));
  }, G = [w, b, _, m, () => h(), Ft(P, "pointerover", ot, {
    A: !0
  }), Ft(P, "pointerenter", ot), Ft(P, "pointerleave", (O) => {
    p(O) && (r = !1, l && z(!1));
  }), Ft(P, "pointermove", (O) => {
    p(O) && a && Q();
  }), Ft(M, "scroll", (O) => {
    g(() => {
      Z(), Q();
    }), o(O), U();
  })];
  return [() => it(Ae, $t(G, T())), ({ It: O, Dt: $, Zt: Y, tn: k }) => {
    const { nn: X, sn: B, en: V, cn: at } = k || {}, { Ct: ut, _t: dt } = Y || {}, { F: pt } = n, { T: xt } = Je(), { k: lt, rn: yt } = s, [Gt, Lt] = O("showNativeOverlaidScrollbars"), [kt, Mt] = O("scrollbars.theme"), [Pt, v] = O("scrollbars.visibility"), [F, H] = O("scrollbars.autoHide"), [st, It] = O("scrollbars.autoHideSuspend"), [St] = O("scrollbars.autoHideDelay"), [rt, ce] = O("scrollbars.dragScroll"), [ee, Bt] = O("scrollbars.clickScroll"), [be, Oe] = O("overflow"), xe = dt && !$, je = yt.x || yt.y, zt = X || B || at || ut || $, Hs = V || v || Oe, as = Gt && xt.x && xt.y, ls = ($e, Fn, Vn) => {
      const cs = $e.includes(Ds) && (Pt === xn || Pt === "auto" && Fn === Ds);
      return C(MS, cs, Vn), cs;
    };
    if (d = St, xe && (st && je ? (J(!1), h(), S(() => {
      h = Ft(M, "scroll", it(J, !0), {
        A: !0
      });
    })) : J(!0)), Lt && C(wS, as), Mt && (C(u), C(kt, !0), u = kt), It && !st && J(!0), H && (a = F === "move", l = F === "leave", c = F === "never", z(c, !0)), ce && C(kS, rt), Bt && C(DS, !!ee), Hs) {
      const $e = ls(be.x, lt.x, !0), Fn = ls(be.y, lt.y, !1);
      C(CS, !($e && Fn));
    }
    zt && (Z(), I(), U(), at && W(), C(_h, !yt.x, !0), C(_h, !yt.y, !1), C(AS, pt && !D));
  }, {}, A];
}, KS = (e) => {
  const t = Je(), { Z: n, P: s } = t, { elements: i } = n(), { padding: o, viewport: r, content: a } = i, l = Go(e), c = l ? {} : e, { elements: u } = c, { padding: h, viewport: d, content: f } = u || {}, p = l ? e : c.target, g = Np(p), m = p.ownerDocument, y = m.documentElement, b = () => m.defaultView || me, S = it(HS, [p]), _ = it(og, [p]), x = it(ws, ""), w = it(S, x, r), A = it(_, x, a), T = (lt) => {
    const yt = As(lt), Gt = Zo(lt), Lt = dn(lt, Cp), kt = dn(lt, Dp);
    return Gt.w - yt.w > 0 && !Es(Lt) || Gt.h - yt.h > 0 && !Es(kt);
  }, P = w(d), M = P === p, D = M && g, C = !M && A(f), I = !M && P === C, Z = D ? y : P, W = D ? Z : p, U = !M && _(x, o, h), z = !I && C, Q = [z, Z, U, W].map((lt) => Go(lt) && !Di(lt) && lt), J = (lt) => lt && vp(Q, lt), ot = !J(Z) && T(Z) ? Z : p, G = D ? y : Z, $ = {
    vt: p,
    ht: W,
    U: Z,
    ln: U,
    bt: z,
    gt: G,
    Qt: D ? m : Z,
    an: g ? y : ot,
    Kt: m,
    wt: g,
    Mt: l,
    L: M,
    un: b,
    yt: (lt) => jl(Z, rn, lt),
    St: (lt, yt) => qo(Z, rn, lt, yt),
    Ot: () => qo(G, rn, bS, !0)
  }, { vt: Y, ht: k, ln: X, U: B, bt: V } = $, at = [() => {
    ze(k, [Pn, qr]), ze(Y, qr), g && ze(y, [qr, Pn]);
  }];
  let ut = La([V, B, X, k, Y].find((lt) => lt && !J(lt)));
  const dt = D ? Y : V || B, pt = it(Ae, at);
  return [$, () => {
    const lt = b(), yt = Ia(), Gt = (v) => {
      ge(Di(v), La(v)), ks(v);
    }, Lt = (v) => Ft(v, "focusin focusout focus blur", Yp, {
      I: !0,
      H: !1
    }), kt = "tabindex", Mt = Nl(B, kt), Pt = Lt(yt);
    return on(k, Pn, M ? "" : pS), on(X, $a, ""), on(B, rn, ""), on(V, xh, ""), M || (on(B, kt, Mt || "-1"), g && on(y, bh, "")), ge(dt, ut), ge(k, X), ge(X || k, !M && B), ge(B, V), $t(at, [Pt, () => {
      const v = Ia(), F = J(B), H = F && v === B ? Y : v, st = Lt(H);
      ze(X, $a), ze(V, xh), ze(B, rn), g && ze(y, bh), Mt ? on(B, kt, Mt) : ze(B, kt), J(V) && Gt(V), F && Gt(B), J(X) && Gt(X), Ba(H), st();
    }]), s && !M && (Bl(B, rn, Qp), $t(at, it(ze, B, rn))), Ba(!M && g && yt === Y && lt.top === lt ? B : yt), Pt(), ut = 0, pt;
  }, pt];
}, GS = ({ bt: e }) => ({ Zt: t, fn: n, Dt: s }) => {
  const { xt: i } = t || {}, { $t: o } = n;
  e && (i || s) && ki(e, {
    [vr]: o && "100%"
  });
}, XS = ({ ht: e, ln: t, U: n, L: s }, i) => {
  const [o, r] = _e({
    i: nS,
    o: ph()
  }, it(ph, e, "padding", ""));
  return ({ It: a, Zt: l, fn: c, Dt: u }) => {
    let [h, d] = r(u);
    const { P: f } = Je(), { dt: p, Ht: g, Ct: m } = l || {}, { F: y } = c, [b, S] = a("paddingAbsolute");
    (p || d || (u || g)) && ([h, d] = o(u));
    const x = !s && (S || m || d);
    if (x) {
      const w = !b || !t && !f, A = h.r + h.l, T = h.t + h.b, P = {
        [Pp]: w && !y ? -A : 0,
        [Mp]: w ? -T : 0,
        [Tp]: w && y ? -A : 0,
        top: w ? -h.t : 0,
        right: w ? y ? -h.r : "auto" : 0,
        left: w ? y ? "auto" : -h.l : 0,
        [xr]: w && `calc(100% + ${A}px)`
      }, M = {
        [_p]: w ? h.t : 0,
        [Sp]: w ? h.r : 0,
        [Ap]: w ? h.b : 0,
        [wp]: w ? h.l : 0
      };
      ki(t || n, P), ki(n, M), vt(i, {
        ln: h,
        _n: !w,
        j: t ? M : vt({}, P, M)
      });
    }
    return {
      dn: x
    };
  };
}, qS = (e, t) => {
  const n = Je(), { ht: s, ln: i, U: o, L: r, Qt: a, gt: l, wt: c, St: u, un: h } = e, { P: d } = n, f = c && r, p = it(bp, 0), g = {
    display: () => !1,
    direction: (O) => O !== "ltr",
    flexDirection: (O) => O.endsWith("-reverse"),
    writingMode: (O) => O !== "horizontal-tb"
  }, m = Be(g), y = {
    i: kp,
    o: {
      w: 0,
      h: 0
    }
  }, b = {
    i: ko,
    o: {}
  }, S = (O) => {
    u(Zp, !f && O);
  }, _ = (O) => {
    if (!m.some((dt) => {
      const pt = O[dt];
      return pt && g[dt](pt);
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
    const Y = we(l), k = u(xS, !0), X = Ft(a, Ds, (dt) => {
      const pt = we(l);
      dt.isTrusted && pt.x === Y.x && pt.y === Y.y && Up(dt);
    }, {
      I: !0,
      A: !0
    });
    Ye(l, {
      x: 0,
      y: 0
    }), k();
    const B = we(l), V = Zo(l);
    Ye(l, {
      x: V.w,
      y: V.h
    });
    const at = we(l);
    Ye(l, {
      x: at.x - B.x < 1 && -V.w,
      y: at.y - B.y < 1 && -V.h
    });
    const ut = we(l);
    return Ye(l, Y), Rl(() => X()), {
      D: B,
      M: ut
    };
  }, x = (O, $) => {
    const Y = me.devicePixelRatio % 1 !== 0 ? 1 : 0, k = {
      w: p(O.w - $.w),
      h: p(O.h - $.h)
    };
    return {
      w: k.w > Y ? k.w : 0,
      h: k.h > Y ? k.h : 0
    };
  }, [w, A] = _e(y, it(Hl, o)), [T, P] = _e(y, it(Zo, o)), [M, D] = _e(y), [C] = _e(b), [I, Z] = _e(y), [W] = _e(b), [U] = _e({
    i: (O, $) => _r(O, $, m),
    o: {}
  }, () => uS(o) ? dn(o, m) : {}), [z, Q] = _e({
    i: (O, $) => ko(O.D, $.D) && ko(O.M, $.M),
    o: Kp()
  }), J = Wi(tg), ot = (O, $) => `${$ ? gS : mS}${eS(O)}`, G = (O) => {
    const $ = (k) => [xn, Gn, Ds].map((X) => ot(X, k)), Y = $(!0).concat($()).join(" ");
    u(Y), u(Be(O).map((k) => ot(O[k], k === "x")).join(" "), !0);
  };
  return ({ It: O, Zt: $, fn: Y, Dt: k }, { dn: X }) => {
    const { dt: B, Ht: V, Ct: at, _t: ut, zt: dt } = $ || {}, pt = J && J.V(e, t, Y, n, O), { Y: xt, W: lt, J: yt } = pt || {}, [Gt, Lt] = OS(O, n), [kt, Mt] = O("overflow"), Pt = Es(kt.x), v = Es(kt.y), F = B || X || V || at || dt || Lt;
    let H = A(k), st = P(k), It = D(k), St = Z(k);
    if (Lt && d && u(Qp, !Gt), F) {
      jl(s, Pn, Oo) && S(!0);
      const [E] = lt ? lt() : [], [L] = H = w(k), [N] = st = T(k), tt = zp(o), Qt = f && cS(h()), tn = {
        w: p(N.w + L.w),
        h: p(N.h + L.h)
      }, zs = {
        w: p((Qt ? Qt.w : tt.w + p(tt.w - N.w)) + L.w),
        h: p((Qt ? Qt.h : tt.h + p(tt.h - N.h)) + L.h)
      };
      E && E(), St = I(zs), It = M(x(tn, zs), k);
    }
    const [rt, ce] = St, [ee, Bt] = It, [be, Oe] = st, [xe, je] = H, [zt, Hs] = C({
      x: ee.w > 0,
      y: ee.h > 0
    }), as = Pt && v && (zt.x || zt.y) || Pt && zt.x && !zt.y || v && zt.y && !zt.x, ls = X || at || dt || je || Oe || ce || Bt || Mt || Lt || F, $e = RS(zt, kt), [Fn, Vn] = W($e.k), [cs, q] = U(k), K = at || ut || q || Hs || k, [et, ct] = K ? z(_(cs), k) : Q();
    return ls && (Vn && G($e.k), yt && xt && ki(o, yt($e, Y, xt($e, be, xe)))), S(!1), qo(s, Pn, Oo, as), qo(i, $a, Oo, as), vt(t, {
      k: Fn,
      Lt: {
        x: rt.w,
        y: rt.h
      },
      Vt: {
        x: ee.w,
        y: ee.h
      },
      rn: zt,
      Tt: hS(et, ee)
    }), {
      en: Vn,
      nn: ce,
      sn: Bt,
      cn: ct || Bt,
      pn: K
    };
  };
}, ZS = (e) => {
  const [t, n, s] = KS(e), i = {
    ln: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    _n: !1,
    j: {
      [Pp]: 0,
      [Mp]: 0,
      [Tp]: 0,
      [_p]: 0,
      [Sp]: 0,
      [Ap]: 0,
      [wp]: 0
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
      x: Gn,
      y: Gn
    },
    rn: {
      x: !1,
      y: !1
    },
    Tt: Kp()
  }, { vt: o, gt: r, L: a, Ot: l } = t, { P: c, T: u } = Je(), h = !c && (u.x || u.y), d = [GS(t), XS(t, i), qS(t, i)];
  return [n, (f) => {
    const p = {}, m = h && we(r), y = m && l();
    return Tt(d, (b) => {
      vt(p, b(f, p) || {});
    }), Ye(r, m), y && y(), a || Ye(o, 0), p;
  }, i, t, s];
}, QS = (e, t, n, s, i) => {
  let o = !1;
  const r = Ph(t, {}), [a, l, c, u, h] = ZS(e), [d, f, p] = $S(u, c, r, (_) => {
    S({}, _);
  }), [g, m, , y] = YS(e, t, p, c, u, i), b = (_) => Be(_).some((x) => !!_[x]), S = (_, x) => {
    if (n())
      return !1;
    const { vn: w, Dt: A, At: T, hn: P } = _, M = w || {}, D = !!A || !o, C = {
      It: Ph(t, M, D),
      vn: M,
      Dt: D
    };
    if (P)
      return m(C), !1;
    const I = x || f(vt({}, C, {
      At: T
    })), Z = l(vt({}, C, {
      fn: p,
      Zt: I
    }));
    m(vt({}, C, {
      Zt: I,
      tn: Z
    }));
    const W = b(I), U = b(Z), z = W || U || !Vl(M) || D;
    return o = !0, z && s(_, {
      Zt: I,
      tn: Z
    }), z;
  };
  return [() => {
    const { an: _, gt: x, Ot: w } = u, A = we(_), T = [d(), a(), g()], P = w();
    return Ye(x, A), P(), it(Ae, T);
  }, S, () => ({
    gn: p,
    bn: c
  }), {
    wn: u,
    yn: y
  }, h];
}, Ul = /* @__PURE__ */ new WeakMap(), JS = (e, t) => {
  Ul.set(e, t);
}, tw = (e) => {
  Ul.delete(e);
}, rg = (e) => Ul.get(e), Fe = (e, t, n) => {
  const { nt: s } = Je(), i = Go(e), o = i ? e : e.target, r = rg(o);
  if (t && !r) {
    let a = !1;
    const l = [], c = {}, u = (M) => {
      const D = Op(M), C = Wi(fS);
      return C ? C(D, !0) : D;
    }, h = vt({}, s(), u(t)), [d, f, p] = ja(), [g, m, y] = ja(n), b = (M, D) => {
      y(M, D), p(M, D);
    }, [S, _, x, w, A] = QS(e, h, () => a, ({ vn: M, Dt: D }, { Zt: C, tn: I }) => {
      const { dt: Z, Ct: W, xt: U, Ht: z, Et: Q, _t: J } = C, { nn: ot, sn: G, en: O, cn: $ } = I;
      b("updated", [P, {
        updateHints: {
          sizeChanged: !!Z,
          directionChanged: !!W,
          heightIntrinsicChanged: !!U,
          overflowEdgeChanged: !!ot,
          overflowAmountChanged: !!G,
          overflowStyleChanged: !!O,
          scrollCoordinatesChanged: !!$,
          contentMutation: !!z,
          hostMutation: !!Q,
          appear: !!J
        },
        changedOptions: M || {},
        force: !!D
      }]);
    }, (M) => b("scroll", [P, M])), T = (M) => {
      tw(o), Ae(l), a = !0, b("destroyed", [P, M]), f(), m();
    }, P = {
      options(M, D) {
        if (M) {
          const C = D ? s() : {}, I = eg(h, vt(C, u(M)));
          Vl(I) || (vt(h, I), _({
            vn: I
          }));
        }
        return vt({}, h);
      },
      on: g,
      off: (M, D) => {
        M && D && m(M, D);
      },
      state() {
        const { gn: M, bn: D } = x(), { F: C } = M, { Lt: I, Vt: Z, k: W, rn: U, ln: z, _n: Q, Tt: J } = D;
        return vt({}, {
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
          directionRTL: C,
          destroyed: a
        });
      },
      elements() {
        const { vt: M, ht: D, ln: C, U: I, bt: Z, gt: W, Qt: U } = w.wn, { Xt: z, Gt: Q } = w.yn, J = (G) => {
          const { kt: O, Pt: $, Ut: Y } = G;
          return {
            scrollbar: Y,
            track: $,
            handle: O
          };
        }, ot = (G) => {
          const { Yt: O, Wt: $ } = G, Y = J(O[0]);
          return vt({}, Y, {
            clone: () => {
              const k = J($());
              return _({
                hn: !0
              }), k;
            }
          });
        };
        return vt({}, {
          target: M,
          host: D,
          padding: C || I,
          viewport: I,
          content: Z || I,
          scrollOffsetElement: W,
          scrollEventElement: U,
          scrollbarHorizontal: ot(z),
          scrollbarVertical: ot(Q)
        });
      },
      update: (M) => _({
        Dt: M,
        At: !0
      }),
      destroy: it(T, !1),
      plugin: (M) => c[Be(M)[0]]
    };
    return $t(l, [A]), JS(o, P), qp(Gp, Fe, [P, d, c]), zS(w.wn.wt, !i && e.cancel) ? (T(!0), P) : ($t(l, S()), b("initialized", [P]), P.update(), P);
  }
  return r;
};
Fe.plugin = (e) => {
  const t = Qe(e), n = t ? e : [e], s = n.map((i) => qp(i, Fe)[0]);
  return dS(n), t ? s : s[0];
};
Fe.valid = (e) => {
  const t = e && e.elements, n = ke(t) && t();
  return Ko(n) && !!rg(n.target);
};
Fe.env = () => {
  const { N: e, T: t, P: n, G: s, st: i, et: o, Z: r, tt: a, nt: l, ot: c } = Je();
  return vt({}, {
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
Fe.nonce = VS;
Fe.trustedTypePolicy = rS;
const ew = () => {
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
}, nw = (e) => {
  const { options: t, events: n, defer: s } = e || {}, [i, o] = Ne(ew, []), r = mt(null), a = mt(s), l = mt(t), c = mt(n);
  return _t(() => {
    a.current = s;
  }, [s]), _t(() => {
    const { current: u } = r;
    l.current = t, Fe.valid(u) && u.options(t || {}, !0);
  }, [t]), _t(() => {
    const { current: u } = r;
    c.current = n, Fe.valid(u) && u.on(n || {}, !0);
  }, [n]), _t(
    () => () => {
      var u;
      o(), (u = r.current) == null || u.destroy();
    },
    []
  ), Ne(
    () => [
      (u) => {
        const h = r.current;
        if (Fe.valid(h))
          return;
        const d = a.current, f = l.current || {}, p = c.current || {}, g = () => r.current = Fe(u, f, p);
        d ? i(g, d) : g();
      },
      () => r.current
    ],
    []
  );
}, sw = (e, t) => {
  const { element: n = "div", options: s, events: i, defer: o, children: r, ...a } = e, l = n, c = mt(null), u = mt(null), [h, d] = nw({ options: s, events: i, defer: o });
  return _t(() => {
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
  }, [h, n]), Ts(
    t,
    () => ({
      osInstance: d,
      getElement: () => c.current
    }),
    []
  ), // @ts-ignore
  /* @__PURE__ */ bi.createElement(l, { "data-overlayscrollbars-initialize": "", ref: c, ...a }, n === "body" ? r : /* @__PURE__ */ bi.createElement("div", { "data-overlayscrollbars-contents": "", ref: u }, r));
}, iw = Fs(sw), ag = ({
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
    /* @__PURE__ */ R.jsx(
      iw,
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
ag.displayName = "HScrollbars";
const ow = ({ children: e, listWidth: t }) => {
  const { isActiveList: n, listPosition: s, dropdownListRef: i } = Ol(), o = (c, u, h, d) => u + h > d ? {
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
  }, [a, l] = bt({});
  return _t(() => {
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
  }, [s]), /* @__PURE__ */ R.jsx(R.Fragment, { children: n && /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: i,
      style: a,
      className: "h_dropdown_list",
      children: /* @__PURE__ */ R.jsx(ag, { maxHeight: 300, children: e })
    }
  ) });
};
ow.displayName = "HDropdownList";
var lg = typeof global == "object" && global && global.Object === Object && global, rw = typeof self == "object" && self && self.Object === Object && self, gn = lg || rw || Function("return this")(), Os = gn.Symbol, cg = Object.prototype, aw = cg.hasOwnProperty, lw = cg.toString, Zs = Os ? Os.toStringTag : void 0;
function cw(e) {
  var t = aw.call(e, Zs), n = e[Zs];
  try {
    e[Zs] = void 0;
    var s = !0;
  } catch {
  }
  var i = lw.call(e);
  return s && (t ? e[Zs] = n : delete e[Zs]), i;
}
var uw = Object.prototype, hw = uw.toString;
function dw(e) {
  return hw.call(e);
}
var fw = "[object Null]", pw = "[object Undefined]", Ch = Os ? Os.toStringTag : void 0;
function Ui(e) {
  return e == null ? e === void 0 ? pw : fw : Ch && Ch in Object(e) ? cw(e) : dw(e);
}
function Ei(e) {
  return e != null && typeof e == "object";
}
var Qo = Array.isArray;
function ug(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var gw = "[object AsyncFunction]", mw = "[object Function]", yw = "[object GeneratorFunction]", bw = "[object Proxy]";
function hg(e) {
  if (!ug(e))
    return !1;
  var t = Ui(e);
  return t == mw || t == yw || t == gw || t == bw;
}
var Qr = gn["__core-js_shared__"], Dh = function() {
  var e = /[^.]+$/.exec(Qr && Qr.keys && Qr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xw(e) {
  return !!Dh && Dh in e;
}
var vw = Function.prototype, _w = vw.toString;
function is(e) {
  if (e != null) {
    try {
      return _w.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Sw = /[\\^$.*+?()[\]{}|]/g, ww = /^\[object .+?Constructor\]$/, Aw = Function.prototype, Tw = Object.prototype, Pw = Aw.toString, Mw = Tw.hasOwnProperty, Cw = RegExp(
  "^" + Pw.call(Mw).replace(Sw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Dw(e) {
  if (!ug(e) || xw(e))
    return !1;
  var t = hg(e) ? Cw : ww;
  return t.test(is(e));
}
function kw(e, t) {
  return e == null ? void 0 : e[t];
}
function Ns(e, t) {
  var n = kw(e, t);
  return Dw(n) ? n : void 0;
}
var za = Ns(gn, "WeakMap"), Ew = 9007199254740991, Ow = /^(?:0|[1-9]\d*)$/;
function Rw(e, t) {
  var n = typeof e;
  return t = t ?? Ew, !!t && (n == "number" || n != "symbol" && Ow.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function dg(e, t) {
  return e === t || e !== e && t !== t;
}
var Lw = 9007199254740991;
function fg(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lw;
}
function Iw(e) {
  return e != null && fg(e.length) && !hg(e);
}
var Fw = Object.prototype;
function Vw(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Fw;
  return e === n;
}
function Nw(e, t) {
  for (var n = -1, s = Array(e); ++n < e; )
    s[n] = t(n);
  return s;
}
var Bw = "[object Arguments]";
function kh(e) {
  return Ei(e) && Ui(e) == Bw;
}
var pg = Object.prototype, jw = pg.hasOwnProperty, $w = pg.propertyIsEnumerable, Hw = kh(/* @__PURE__ */ function() {
  return arguments;
}()) ? kh : function(e) {
  return Ei(e) && jw.call(e, "callee") && !$w.call(e, "callee");
};
function zw() {
  return !1;
}
var gg = typeof exports == "object" && exports && !exports.nodeType && exports, Eh = gg && typeof module == "object" && module && !module.nodeType && module, Ww = Eh && Eh.exports === gg, Oh = Ww ? gn.Buffer : void 0, Uw = Oh ? Oh.isBuffer : void 0, Wa = Uw || zw, Yw = "[object Arguments]", Kw = "[object Array]", Gw = "[object Boolean]", Xw = "[object Date]", qw = "[object Error]", Zw = "[object Function]", Qw = "[object Map]", Jw = "[object Number]", tA = "[object Object]", eA = "[object RegExp]", nA = "[object Set]", sA = "[object String]", iA = "[object WeakMap]", oA = "[object ArrayBuffer]", rA = "[object DataView]", aA = "[object Float32Array]", lA = "[object Float64Array]", cA = "[object Int8Array]", uA = "[object Int16Array]", hA = "[object Int32Array]", dA = "[object Uint8Array]", fA = "[object Uint8ClampedArray]", pA = "[object Uint16Array]", gA = "[object Uint32Array]", Et = {};
Et[aA] = Et[lA] = Et[cA] = Et[uA] = Et[hA] = Et[dA] = Et[fA] = Et[pA] = Et[gA] = !0;
Et[Yw] = Et[Kw] = Et[oA] = Et[Gw] = Et[rA] = Et[Xw] = Et[qw] = Et[Zw] = Et[Qw] = Et[Jw] = Et[tA] = Et[eA] = Et[nA] = Et[sA] = Et[iA] = !1;
function mA(e) {
  return Ei(e) && fg(e.length) && !!Et[Ui(e)];
}
function yA(e) {
  return function(t) {
    return e(t);
  };
}
var mg = typeof exports == "object" && exports && !exports.nodeType && exports, fi = mg && typeof module == "object" && module && !module.nodeType && module, bA = fi && fi.exports === mg, Jr = bA && lg.process, Rh = function() {
  try {
    var e = fi && fi.require && fi.require("util").types;
    return e || Jr && Jr.binding && Jr.binding("util");
  } catch {
  }
}(), Lh = Rh && Rh.isTypedArray, yg = Lh ? yA(Lh) : mA, xA = Object.prototype, vA = xA.hasOwnProperty;
function _A(e, t) {
  var n = Qo(e), s = !n && Hw(e), i = !n && !s && Wa(e), o = !n && !s && !i && yg(e), r = n || s || i || o, a = r ? Nw(e.length, String) : [], l = a.length;
  for (var c in e)
    vA.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Rw(c, l))) && a.push(c);
  return a;
}
function SA(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var wA = SA(Object.keys, Object), AA = Object.prototype, TA = AA.hasOwnProperty;
function PA(e) {
  if (!Vw(e))
    return wA(e);
  var t = [];
  for (var n in Object(e))
    TA.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function MA(e) {
  return Iw(e) ? _A(e) : PA(e);
}
var Oi = Ns(Object, "create");
function CA() {
  this.__data__ = Oi ? Oi(null) : {}, this.size = 0;
}
function DA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var kA = "__lodash_hash_undefined__", EA = Object.prototype, OA = EA.hasOwnProperty;
function RA(e) {
  var t = this.__data__;
  if (Oi) {
    var n = t[e];
    return n === kA ? void 0 : n;
  }
  return OA.call(t, e) ? t[e] : void 0;
}
var LA = Object.prototype, IA = LA.hasOwnProperty;
function FA(e) {
  var t = this.__data__;
  return Oi ? t[e] !== void 0 : IA.call(t, e);
}
var VA = "__lodash_hash_undefined__";
function NA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Oi && t === void 0 ? VA : t, this;
}
function ns(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ns.prototype.clear = CA;
ns.prototype.delete = DA;
ns.prototype.get = RA;
ns.prototype.has = FA;
ns.prototype.set = NA;
function BA() {
  this.__data__ = [], this.size = 0;
}
function Ar(e, t) {
  for (var n = e.length; n--; )
    if (dg(e[n][0], t))
      return n;
  return -1;
}
var jA = Array.prototype, $A = jA.splice;
function HA(e) {
  var t = this.__data__, n = Ar(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : $A.call(t, n, 1), --this.size, !0;
}
function zA(e) {
  var t = this.__data__, n = Ar(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function WA(e) {
  return Ar(this.__data__, e) > -1;
}
function UA(e, t) {
  var n = this.__data__, s = Ar(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function mn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
mn.prototype.clear = BA;
mn.prototype.delete = HA;
mn.prototype.get = zA;
mn.prototype.has = WA;
mn.prototype.set = UA;
var Ri = Ns(gn, "Map");
function YA() {
  this.size = 0, this.__data__ = {
    hash: new ns(),
    map: new (Ri || mn)(),
    string: new ns()
  };
}
function KA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Tr(e, t) {
  var n = e.__data__;
  return KA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function GA(e) {
  var t = Tr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function XA(e) {
  return Tr(this, e).get(e);
}
function qA(e) {
  return Tr(this, e).has(e);
}
function ZA(e, t) {
  var n = Tr(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function os(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
os.prototype.clear = YA;
os.prototype.delete = GA;
os.prototype.get = XA;
os.prototype.has = qA;
os.prototype.set = ZA;
function QA(e, t) {
  for (var n = -1, s = t.length, i = e.length; ++n < s; )
    e[i + n] = t[n];
  return e;
}
function JA() {
  this.__data__ = new mn(), this.size = 0;
}
function tT(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function eT(e) {
  return this.__data__.get(e);
}
function nT(e) {
  return this.__data__.has(e);
}
var sT = 200;
function iT(e, t) {
  var n = this.__data__;
  if (n instanceof mn) {
    var s = n.__data__;
    if (!Ri || s.length < sT - 1)
      return s.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new os(s);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Mn(e) {
  var t = this.__data__ = new mn(e);
  this.size = t.size;
}
Mn.prototype.clear = JA;
Mn.prototype.delete = tT;
Mn.prototype.get = eT;
Mn.prototype.has = nT;
Mn.prototype.set = iT;
function oT(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, i = 0, o = []; ++n < s; ) {
    var r = e[n];
    t(r, n, e) && (o[i++] = r);
  }
  return o;
}
function rT() {
  return [];
}
var aT = Object.prototype, lT = aT.propertyIsEnumerable, Ih = Object.getOwnPropertySymbols, cT = Ih ? function(e) {
  return e == null ? [] : (e = Object(e), oT(Ih(e), function(t) {
    return lT.call(e, t);
  }));
} : rT;
function uT(e, t, n) {
  var s = t(e);
  return Qo(e) ? s : QA(s, n(e));
}
function Fh(e) {
  return uT(e, MA, cT);
}
var Ua = Ns(gn, "DataView"), Ya = Ns(gn, "Promise"), Ka = Ns(gn, "Set"), Vh = "[object Map]", hT = "[object Object]", Nh = "[object Promise]", Bh = "[object Set]", jh = "[object WeakMap]", $h = "[object DataView]", dT = is(Ua), fT = is(Ri), pT = is(Ya), gT = is(Ka), mT = is(za), bn = Ui;
(Ua && bn(new Ua(new ArrayBuffer(1))) != $h || Ri && bn(new Ri()) != Vh || Ya && bn(Ya.resolve()) != Nh || Ka && bn(new Ka()) != Bh || za && bn(new za()) != jh) && (bn = function(e) {
  var t = Ui(e), n = t == hT ? e.constructor : void 0, s = n ? is(n) : "";
  if (s)
    switch (s) {
      case dT:
        return $h;
      case fT:
        return Vh;
      case pT:
        return Nh;
      case gT:
        return Bh;
      case mT:
        return jh;
    }
  return t;
});
var Hh = gn.Uint8Array, yT = "__lodash_hash_undefined__";
function bT(e) {
  return this.__data__.set(e, yT), this;
}
function xT(e) {
  return this.__data__.has(e);
}
function Jo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new os(); ++t < n; )
    this.add(e[t]);
}
Jo.prototype.add = Jo.prototype.push = bT;
Jo.prototype.has = xT;
function vT(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function _T(e, t) {
  return e.has(t);
}
var ST = 1, wT = 2;
function bg(e, t, n, s, i, o) {
  var r = n & ST, a = e.length, l = t.length;
  if (a != l && !(r && l > a))
    return !1;
  var c = o.get(e), u = o.get(t);
  if (c && u)
    return c == t && u == e;
  var h = -1, d = !0, f = n & wT ? new Jo() : void 0;
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
      if (!vT(t, function(y, b) {
        if (!_T(f, b) && (p === y || i(p, y, n, s, o)))
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
function AT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s, i) {
    n[++t] = [i, s];
  }), n;
}
function TT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s) {
    n[++t] = s;
  }), n;
}
var PT = 1, MT = 2, CT = "[object Boolean]", DT = "[object Date]", kT = "[object Error]", ET = "[object Map]", OT = "[object Number]", RT = "[object RegExp]", LT = "[object Set]", IT = "[object String]", FT = "[object Symbol]", VT = "[object ArrayBuffer]", NT = "[object DataView]", zh = Os ? Os.prototype : void 0, ta = zh ? zh.valueOf : void 0;
function BT(e, t, n, s, i, o, r) {
  switch (n) {
    case NT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case VT:
      return !(e.byteLength != t.byteLength || !o(new Hh(e), new Hh(t)));
    case CT:
    case DT:
    case OT:
      return dg(+e, +t);
    case kT:
      return e.name == t.name && e.message == t.message;
    case RT:
    case IT:
      return e == t + "";
    case ET:
      var a = AT;
    case LT:
      var l = s & PT;
      if (a || (a = TT), e.size != t.size && !l)
        return !1;
      var c = r.get(e);
      if (c)
        return c == t;
      s |= MT, r.set(e, t);
      var u = bg(a(e), a(t), s, i, o, r);
      return r.delete(e), u;
    case FT:
      if (ta)
        return ta.call(e) == ta.call(t);
  }
  return !1;
}
var jT = 1, $T = Object.prototype, HT = $T.hasOwnProperty;
function zT(e, t, n, s, i, o) {
  var r = n & jT, a = Fh(e), l = a.length, c = Fh(t), u = c.length;
  if (l != u && !r)
    return !1;
  for (var h = l; h--; ) {
    var d = a[h];
    if (!(r ? d in t : HT.call(t, d)))
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
var WT = 1, Wh = "[object Arguments]", Uh = "[object Array]", go = "[object Object]", UT = Object.prototype, Yh = UT.hasOwnProperty;
function YT(e, t, n, s, i, o) {
  var r = Qo(e), a = Qo(t), l = r ? Uh : bn(e), c = a ? Uh : bn(t);
  l = l == Wh ? go : l, c = c == Wh ? go : c;
  var u = l == go, h = c == go, d = l == c;
  if (d && Wa(e)) {
    if (!Wa(t))
      return !1;
    r = !0, u = !1;
  }
  if (d && !u)
    return o || (o = new Mn()), r || yg(e) ? bg(e, t, n, s, i, o) : BT(e, t, l, n, s, i, o);
  if (!(n & WT)) {
    var f = u && Yh.call(e, "__wrapped__"), p = h && Yh.call(t, "__wrapped__");
    if (f || p) {
      var g = f ? e.value() : e, m = p ? t.value() : t;
      return o || (o = new Mn()), i(g, m, n, s, o);
    }
  }
  return d ? (o || (o = new Mn()), zT(e, t, n, s, i, o)) : !1;
}
function xg(e, t, n, s, i) {
  return e === t ? !0 : e == null || t == null || !Ei(e) && !Ei(t) ? e !== e && t !== t : YT(e, t, n, s, xg, i);
}
function Ga(e, t) {
  return xg(e, t);
}
const Wk = (e, t) => Ga(e, t), Uk = ({ data: e, backgroundColor: t, borderColor: n, borderWidth: s, labelFillStyle: i, legendLabelsColor: o }) => {
  const r = mt(null), a = mt(null);
  return _t(() => {
    var c;
    a.current && a.current.destroy();
    const l = (c = r.current) == null ? void 0 : c.getContext("2d");
    if (l)
      return a.current = new Ue(l, {
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
  }, [e]), /* @__PURE__ */ R.jsx("canvas", { ref: r });
}, Yl = Ee({});
function Kl(e) {
  const t = mt(null);
  return t.current === null && (t.current = e()), t.current;
}
const Pr = /* @__PURE__ */ Ee(null), Gl = Ee({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class KT extends hl.Component {
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
function GT({ children: e, isPresent: t, anchorX: n }) {
  const s = rr(), i = mt(null), o = mt({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: r } = Wt(Gl);
  return df(() => {
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
  }, [t]), R.jsx(KT, { isPresent: t, childRef: i, sizeRef: o, children: hl.cloneElement(e, { ref: i }) });
}
const XT = ({ children: e, initial: t, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r, anchorX: a }) => {
  const l = Kl(qT), c = rr(), u = dl((d) => {
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
  }, [n]), hl.useEffect(() => {
    !n && !l.size && s && s();
  }, [n]), r === "popLayout" && (e = R.jsx(GT, { isPresent: n, anchorX: a, children: e })), R.jsx(Pr.Provider, { value: h, children: e });
};
function qT() {
  return /* @__PURE__ */ new Map();
}
function vg(e = !0) {
  const t = Wt(Pr);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = t, o = rr();
  _t(() => {
    if (e)
      return i(o);
  }, [e]);
  const r = dl(() => e && s && s(o), [o, s, e]);
  return !n && s ? [!1, r] : [!0];
}
const mo = (e) => e.key || "";
function Kh(e) {
  const t = [];
  return ny.forEach(e, (n) => {
    ff(n) && t.push(n);
  }), t;
}
const Xl = typeof window < "u", _g = Xl ? sy : _t, Sg = ({ children: e, custom: t, initial: n = !0, onExitComplete: s, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left" }) => {
  const [l, c] = vg(r), u = Ne(() => Kh(e), [e]), h = r && !l ? [] : u.map(mo), d = mt(!0), f = mt(u), p = Kl(() => /* @__PURE__ */ new Map()), [g, m] = bt(u), [y, b] = bt(u);
  _g(() => {
    d.current = !1, f.current = u;
    for (let x = 0; x < y.length; x++) {
      const w = mo(y[x]);
      h.includes(w) ? p.delete(w) : p.get(w) !== !0 && p.set(w, !1);
    }
  }, [y, h.length, h.join("-")]);
  const S = [];
  if (u !== g) {
    let x = [...u];
    for (let w = 0; w < y.length; w++) {
      const A = y[w], T = mo(A);
      h.includes(T) || (x.splice(w, 0, A), S.push(A));
    }
    return o === "wait" && S.length && (x = S), b(Kh(x)), m(u), null;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && y.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: _ } = Wt(Yl);
  return R.jsx(R.Fragment, { children: y.map((x) => {
    const w = mo(x), A = r && !l ? !1 : u === y || h.includes(w), T = () => {
      if (p.has(w))
        p.set(w, !0);
      else
        return;
      let P = !0;
      p.forEach((M) => {
        M || (P = !1);
      }), P && (_ == null || _(), b(f.current), r && (c == null || c()), s && s());
    };
    return R.jsx(XT, { isPresent: A, initial: !d.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: i, mode: o, onExitComplete: A ? void 0 : T, anchorX: a, children: x }, w);
  }) });
}, ye = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let Bs = ye, kn = ye;
process.env.NODE_ENV !== "production" && (Bs = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, kn = (e, t) => {
  if (!e)
    throw new Error(t);
});
// @__NO_SIDE_EFFECTS__
function ql(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Rs = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const s = t - e;
  return s === 0 ? 1 : (n - e) / s;
}, Xe = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, hn = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, ZT = {
  useManualTiming: !1
}, yo = [
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
], Gh = {
  value: null
};
function QT(e, t) {
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
      i = !0, [n, s] = [s, n], n.forEach(c), t && Gh.value && Gh.value.frameloop[t].push(l), l = 0, n.clear(), i = !1, o && (o = !1, u.process(h));
    }
  };
  return u;
}
const JT = 40;
function wg(e, t) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = yo.reduce((y, b) => (y[b] = QT(o, t ? b : void 0), y), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: h, postRender: d } = r, f = () => {
    const y = performance.now();
    n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, JT), 1), i.timestamp = y, i.isProcessing = !0, a.process(i), l.process(i), c.process(i), u.process(i), h.process(i), d.process(i), i.isProcessing = !1, n && t && (s = !1, e(f));
  }, p = () => {
    n = !0, s = !0, i.isProcessing || e(f);
  };
  return { schedule: yo.reduce((y, b) => {
    const S = r[b];
    return y[b] = (_, x = !1, w = !1) => (n || p(), S.schedule(_, x, w)), y;
  }, {}), cancel: (y) => {
    for (let b = 0; b < yo.length; b++)
      r[yo[b]].cancel(y);
  }, state: i, steps: r };
}
const { schedule: Dt, cancel: En, state: te, steps: ea } = wg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ye, !0), Ag = Ee({ strict: !1 }), Xh = {
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
}, Ls = {};
for (const e in Xh)
  Ls[e] = {
    isEnabled: (t) => Xh[e].some((n) => !!t[n])
  };
function tP(e) {
  for (const t in e)
    Ls[t] = {
      ...Ls[t],
      ...e[t]
    };
}
const eP = /* @__PURE__ */ new Set([
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
function tr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || eP.has(e);
}
let Tg = (e) => !tr(e);
function nP(e) {
  e && (Tg = (t) => t.startsWith("on") ? !tr(t) : e(t));
}
try {
  nP(require("@emotion/is-prop-valid").default);
} catch {
}
function sP(e, t, n) {
  const s = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (Tg(i) || n === !0 && tr(i) || !t && !tr(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (s[i] = e[i]);
  return s;
}
const qh = /* @__PURE__ */ new Set();
function Mr(e, t, n) {
  e || qh.has(t) || (console.warn(t), qh.add(t));
}
function iP(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...s) => (process.env.NODE_ENV !== "production" && Mr(!1, "motion() is deprecated. Use motion.create() instead."), e(...s));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
  });
}
const Cr = /* @__PURE__ */ Ee({});
function Dr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Li(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Zl = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ql = ["initial", ...Zl];
function kr(e) {
  return Dr(e.animate) || Ql.some((t) => Li(e[t]));
}
function Pg(e) {
  return !!(kr(e) || e.variants);
}
function oP(e, t) {
  if (kr(e)) {
    const { initial: n, animate: s } = e;
    return {
      initial: n === !1 || Li(n) ? n : void 0,
      animate: Li(s) ? s : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function rP(e) {
  const { initial: t, animate: n } = oP(e, Wt(Cr));
  return Ne(() => ({ initial: t, animate: n }), [Zh(t), Zh(n)]);
}
function Zh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const aP = Symbol.for("motionComponentSymbol");
function ms(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function lP(e, t, n) {
  return dl(
    (s) => {
      s && e.onMount && e.onMount(s), t && (s ? t.mount(s) : t.unmount()), n && (typeof n == "function" ? n(s) : ms(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Jl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), cP = "framerAppearId", Mg = "data-" + Jl(cP), { schedule: tc } = wg(queueMicrotask, !1), Cg = Ee({});
function uP(e, t, n, s, i) {
  var o, r;
  const { visualElement: a } = Wt(Cr), l = Wt(Ag), c = Wt(Pr), u = Wt(Gl).reducedMotion, h = mt(null);
  s = s || l.renderer, !h.current && s && (h.current = s(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const d = h.current, f = Wt(Cg);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && hP(h.current, n, i, f);
  const p = mt(!1);
  df(() => {
    d && p.current && d.update(n, c);
  });
  const g = n[Mg], m = mt(!!g && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, g)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, g)));
  return _g(() => {
    d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), tc.render(d.render), m.current && d.animationState && d.animationState.animateChanges());
  }), _t(() => {
    d && (!m.current && d.animationState && d.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      var y;
      (y = window.MotionHandoffMarkAsComplete) === null || y === void 0 || y.call(window, g);
    }), m.current = !1));
  }), d;
}
function hP(e, t, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Dg(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!r || a && ms(a),
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
function Dg(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Dg(e.parent);
}
function dP({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: s, Component: i }) {
  var o, r;
  e && tP(e);
  function a(c, u) {
    let h;
    const d = {
      ...Wt(Gl),
      ...c,
      layoutId: fP(c)
    }, { isStatic: f } = d, p = rP(c), g = s(c, f);
    if (!f && Xl) {
      pP(d, e);
      const m = gP(d);
      h = m.MeasureLayout, p.visualElement = uP(i, g, d, t, m.ProjectionNode);
    }
    return R.jsxs(Cr.Provider, { value: p, children: [h && p.visualElement ? R.jsx(h, { visualElement: p.visualElement, ...d }) : null, n(i, c, lP(g, p.visualElement, u), g, f, p.visualElement)] });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(r = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && r !== void 0 ? r : ""})`}`;
  const l = Fs(a);
  return l[aP] = i, l;
}
function fP({ layoutId: e }) {
  const t = Wt(Yl).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function pP(e, t) {
  const n = Wt(Ag).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Bs(!1, s) : kn(!1, s);
  }
}
function gP(e) {
  const { drag: t, layout: n } = Ls;
  if (!t && !n)
    return {};
  const s = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
const kg = (e) => (t) => typeof t == "string" && t.startsWith(e), ec = /* @__PURE__ */ kg("--"), mP = /* @__PURE__ */ kg("var(--"), nc = (e) => mP(e) ? yP.test(e.split("/*")[0].trim()) : !1, yP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ii = {};
function bP(e) {
  for (const t in e)
    Ii[t] = e[t], ec(t) && (Ii[t].isCSSVariable = !0);
}
const js = [
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
], rs = new Set(js);
function Eg(e, { layout: t, layoutId: n }) {
  return rs.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ii[e] || e === "opacity");
}
const ae = (e) => !!(e && e.getVelocity), Og = (e, t) => t && typeof e == "number" ? t.transform(e) : e, fn = (e, t, n) => n > t ? t : n < e ? e : n, $s = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Fi = {
  ...$s,
  transform: (e) => fn(0, 1, e)
}, bo = {
  ...$s,
  default: 1
}, Yi = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), yn = /* @__PURE__ */ Yi("deg"), qe = /* @__PURE__ */ Yi("%"), nt = /* @__PURE__ */ Yi("px"), xP = /* @__PURE__ */ Yi("vh"), vP = /* @__PURE__ */ Yi("vw"), Qh = {
  ...qe,
  parse: (e) => qe.parse(e) / 100,
  transform: (e) => qe.transform(e * 100)
}, _P = {
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
}, SP = {
  rotate: yn,
  rotateX: yn,
  rotateY: yn,
  rotateZ: yn,
  scale: bo,
  scaleX: bo,
  scaleY: bo,
  scaleZ: bo,
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
  opacity: Fi,
  originX: Qh,
  originY: Qh,
  originZ: nt
}, Jh = {
  ...$s,
  transform: Math.round
}, sc = {
  ..._P,
  ...SP,
  zIndex: Jh,
  size: nt,
  // SVG
  fillOpacity: Fi,
  strokeOpacity: Fi,
  numOctaves: Jh
}, wP = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, AP = js.length;
function TP(e, t, n) {
  let s = "", i = !0;
  for (let o = 0; o < AP; o++) {
    const r = js[o], a = e[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = Og(a, sc[r]);
      if (!l) {
        i = !1;
        const u = wP[r] || r;
        s += `${u}(${c}) `;
      }
      n && (t[r] = c);
    }
  }
  return s = s.trim(), n ? s = n(t, i ? "" : s) : i && (s = "none"), s;
}
function ic(e, t, n) {
  const { style: s, vars: i, transformOrigin: o } = e;
  let r = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (rs.has(l)) {
      r = !0;
      continue;
    } else if (ec(l)) {
      i[l] = c;
      continue;
    } else {
      const u = Og(c, sc[l]);
      l.startsWith("origin") ? (a = !0, o[l] = u) : s[l] = u;
    }
  }
  if (t.transform || (r || n ? s.transform = TP(t, e.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    s.transformOrigin = `${l} ${c} ${u}`;
  }
}
const oc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Rg(e, t, n) {
  for (const s in t)
    !ae(t[s]) && !Eg(s, n) && (e[s] = t[s]);
}
function PP({ transformTemplate: e }, t) {
  return Ne(() => {
    const n = oc();
    return ic(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function MP(e, t) {
  const n = e.style || {}, s = {};
  return Rg(s, n, e), Object.assign(s, PP(e, t)), s;
}
function CP(e, t) {
  const n = {}, s = MP(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const DP = [
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
function rc(e) {
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
      !!(DP.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const kP = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, EP = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function OP(e, t, n = 1, s = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? kP : EP;
  e[o.offset] = nt.transform(-s);
  const r = nt.transform(t), a = nt.transform(n);
  e[o.array] = `${r} ${a}`;
}
function td(e, t, n) {
  return typeof e == "string" ? e : nt.transform(t + n * e);
}
function RP(e, t, n) {
  const s = td(t, e.x, e.width), i = td(n, e.y, e.height);
  return `${s} ${i}`;
}
function ac(e, {
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
  if (ic(e, c, h), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: f, dimensions: p } = e;
  d.transform && (p && (f.transform = d.transform), delete d.transform), p && (i !== void 0 || o !== void 0 || f.transform) && (f.transformOrigin = RP(p, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), r !== void 0 && OP(d, r, a, l, !1);
}
const Lg = () => ({
  ...oc(),
  attrs: {}
}), lc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function LP(e, t, n, s) {
  const i = Ne(() => {
    const o = Lg();
    return ac(o, t, lc(s), e.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    Rg(o, e.style, e), i.style = { ...o, ...i.style };
  }
  return i;
}
function IP(e = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (rc(n) ? LP : CP)(s, o, r, n), c = sP(s, typeof n == "string", e), u = n !== pf ? { ...c, ...l, ref: i } : {}, { children: h } = s, d = Ne(() => ae(h) ? h.get() : h, [h]);
    return iy(n, {
      ...u,
      children: d
    });
  };
}
function ed(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, s) => {
    t[0][s] = n.get(), t[1][s] = n.getVelocity();
  }), t;
}
function cc(e, t, n, s) {
  if (typeof t == "function") {
    const [i, o] = ed(s);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, o] = ed(s);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const Xa = (e) => Array.isArray(e), FP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), VP = (e) => Xa(e) ? e[e.length - 1] || 0 : e;
function Ro(e) {
  const t = ae(e) ? e.get() : e;
  return FP(t) ? t.toValue() : t;
}
function NP({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, s, i, o) {
  const r = {
    latestValues: BP(s, i, o, e),
    renderState: t()
  };
  return n && (r.onMount = (a) => n({ props: s, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const Ig = (e) => (t, n) => {
  const s = Wt(Cr), i = Wt(Pr), o = () => NP(e, t, s, i);
  return n ? o() : Kl(o);
};
function BP(e, t, n, s) {
  const i = {}, o = s(e, {});
  for (const d in o)
    i[d] = Ro(o[d]);
  let { initial: r, animate: a } = e;
  const l = kr(e), c = Pg(e);
  t && c && !l && e.inherit !== !1 && (r === void 0 && (r = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? a : r;
  if (h && typeof h != "boolean" && !Dr(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let f = 0; f < d.length; f++) {
      const p = cc(e, d[f]);
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
function uc(e, t, n) {
  var s;
  const { style: i } = e, o = {};
  for (const r in i)
    (ae(i[r]) || t.style && ae(t.style[r]) || Eg(r, e) || ((s = n == null ? void 0 : n.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (o[r] = i[r]);
  return o;
}
const jP = {
  useVisualState: Ig({
    scrapeMotionValuesFromProps: uc,
    createRenderState: oc
  })
};
function Fg(e, t) {
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
function Vg(e, { style: t, vars: n }, s, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(s));
  for (const o in n)
    e.style.setProperty(o, n[o]);
}
const Ng = /* @__PURE__ */ new Set([
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
function Bg(e, t, n, s) {
  Vg(e, t, void 0, s);
  for (const i in t.attrs)
    e.setAttribute(Ng.has(i) ? i : Jl(i), t.attrs[i]);
}
function jg(e, t, n) {
  const s = uc(e, t, n);
  for (const i in e)
    if (ae(e[i]) || ae(t[i])) {
      const o = js.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = e[i];
    }
  return s;
}
const nd = ["x", "y", "width", "height", "cx", "cy", "r"], $P = {
  useVisualState: Ig({
    scrapeMotionValuesFromProps: jg,
    createRenderState: Lg,
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
        for (let a = 0; a < nd.length; a++) {
          const l = nd[a];
          e[l] !== t[l] && (r = !0);
        }
      r && Dt.read(() => {
        Fg(n, s), Dt.render(() => {
          ac(s, i, lc(n.tagName), e.transformTemplate), Bg(n, s);
        });
      });
    }
  })
};
function HP(e, t) {
  return function(s, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const r = {
      ...rc(s) ? $P : jP,
      preloadedFeatures: e,
      useRender: IP(i),
      createVisualElement: t,
      Component: s
    };
    return dP(r);
  };
}
function Vi(e, t, n) {
  const s = e.getProps();
  return cc(s, t, n !== void 0 ? n : s.custom, e);
}
const zP = /* @__PURE__ */ ql(() => window.ScrollTimeline !== void 0);
class WP {
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
      if (zP() && i.attachTimeline)
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
class UP extends WP {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function hc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const qa = 2e4;
function $g(e) {
  let t = 0;
  const n = 50;
  let s = e.next(t);
  for (; !s.done && t < qa; )
    t += n, s = e.next(t);
  return t >= qa ? 1 / 0 : t;
}
function dc(e) {
  return typeof e == "function";
}
function sd(e, t) {
  e.timeline = t, e.onfinish = null;
}
const fc = (e) => Array.isArray(e) && typeof e[0] == "number", YP = {
  linearEasing: void 0
};
function KP(e, t) {
  const n = /* @__PURE__ */ ql(e);
  return () => {
    var s;
    return (s = YP[t]) !== null && s !== void 0 ? s : n();
  };
}
const er = /* @__PURE__ */ KP(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Hg = (e, t, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let o = 0; o < i; o++)
    s += e(/* @__PURE__ */ Rs(0, i - 1, o)) + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
};
function zg(e) {
  return !!(typeof e == "function" && er() || !e || typeof e == "string" && (e in Za || er()) || fc(e) || Array.isArray(e) && e.every(zg));
}
const ri = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`, Za = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ri([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ri([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ri([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ri([0.33, 1.53, 0.69, 0.99])
};
function Wg(e, t) {
  if (e)
    return typeof e == "function" && er() ? Hg(e, t) : fc(e) ? ri(e) : Array.isArray(e) ? e.map((n) => Wg(n, t) || Za.easeOut) : Za[e];
}
const Le = {
  x: !1,
  y: !1
};
function Ug() {
  return Le.x || Le.y;
}
function GP(e, t, n) {
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
function Yg(e, t) {
  const n = GP(e), s = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: s.signal
  };
  return [n, i, () => s.abort()];
}
function id(e) {
  return !(e.pointerType === "touch" || Ug());
}
function XP(e, t, n = {}) {
  const [s, i, o] = Yg(e, n), r = (a) => {
    if (!id(a))
      return;
    const { target: l } = a, c = t(l, a);
    if (typeof c != "function" || !l)
      return;
    const u = (h) => {
      id(h) && (c(h), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, i);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
function nr(e, t) {
  const n = `${t}PointerCapture`;
  if (e.target instanceof Element && n in e.target && e.pointerId !== void 0)
    try {
      e.target[n](e.pointerId);
    } catch {
    }
}
const Kg = (e, t) => t ? e === t ? !0 : Kg(e, t.parentElement) : !1, pc = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, qP = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function ZP(e) {
  return qP.has(e.tagName) || e.tabIndex !== -1;
}
const ai = /* @__PURE__ */ new WeakSet();
function od(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function na(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const QP = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const s = od(() => {
    if (ai.has(n))
      return;
    na(n, "down");
    const i = od(() => {
      na(n, "up");
    }), o = () => na(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", s, t), n.addEventListener("blur", () => n.removeEventListener("keydown", s), t);
};
function rd(e) {
  return pc(e) && !Ug();
}
function JP(e, t, n = {}) {
  const [s, i, o] = Yg(e, n), r = (a) => {
    const l = a.currentTarget;
    if (!l || !rd(a) || ai.has(l))
      return;
    ai.add(l), nr(a, "set");
    const c = t(l, a), u = (f, p) => {
      l.removeEventListener("pointerup", h), l.removeEventListener("pointercancel", d), nr(f, "release"), !(!rd(f) || !ai.has(l)) && (ai.delete(l), typeof c == "function" && c(f, { success: p }));
    }, h = (f) => {
      (f.isTrusted ? tM(f, l instanceof Element ? l.getBoundingClientRect() : {
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight
      }) : !1) ? u(f, !1) : u(f, !(l instanceof Element) || Kg(l, f.target));
    }, d = (f) => {
      u(f, !1);
    };
    l.addEventListener("pointerup", h, i), l.addEventListener("pointercancel", d, i), l.addEventListener("lostpointercapture", d, i);
  };
  return s.forEach((a) => {
    a = n.useGlobalTarget ? window : a;
    let l = !1;
    a instanceof HTMLElement && (l = !0, !ZP(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0)), a.addEventListener("pointerdown", r, i), l && a.addEventListener("focus", (c) => QP(c, i), i);
  }), o;
}
function tM(e, t) {
  return e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom;
}
function eM(e) {
  return e === "x" || e === "y" ? Le[e] ? null : (Le[e] = !0, () => {
    Le[e] = !1;
  }) : Le.x || Le.y ? null : (Le.x = Le.y = !0, () => {
    Le.x = Le.y = !1;
  });
}
const Gg = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...js
]);
let Lo;
function nM() {
  Lo = void 0;
}
const Ze = {
  now: () => (Lo === void 0 && Ze.set(te.isProcessing || ZT.useManualTiming ? te.timestamp : performance.now()), Lo),
  set: (e) => {
    Lo = e, queueMicrotask(nM);
  }
};
function gc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function mc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class yc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return gc(this.subscriptions, t), () => mc(this.subscriptions, t);
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
function Xg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ad = 30, sM = (e) => !isNaN(parseFloat(e));
class iM {
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
      const o = Ze.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ze.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = sM(this.current));
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
    return process.env.NODE_ENV !== "production" && Mr(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new yc());
    const s = this.events[t].add(n);
    return t === "change" ? () => {
      s(), Dt.read(() => {
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
    const t = Ze.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ad)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ad);
    return Xg(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Ni(e, t) {
  return new iM(e, t);
}
function oM(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ni(n));
}
function rM(e, t) {
  const n = Vi(e, t);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = VP(o[r]);
    oM(e, r, a);
  }
}
function aM(e) {
  return !!(ae(e) && e.add);
}
function Qa(e, t) {
  const n = e.getValue("willChange");
  if (aM(n))
    return n.add(t);
}
function qg(e) {
  return e.props[Mg];
}
const Zg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, lM = 1e-7, cM = 12;
function uM(e, t, n, s, i) {
  let o, r, a = 0;
  do
    r = t + (n - t) / 2, o = Zg(r, s, i) - e, o > 0 ? n = r : t = r;
  while (Math.abs(o) > lM && ++a < cM);
  return r;
}
function Ki(e, t, n, s) {
  if (e === t && n === s)
    return ye;
  const i = (o) => uM(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Zg(i(o), t, s);
}
const Qg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Jg = (e) => (t) => 1 - e(1 - t), tm = /* @__PURE__ */ Ki(0.33, 1.53, 0.69, 0.99), bc = /* @__PURE__ */ Jg(tm), em = /* @__PURE__ */ Qg(bc), nm = (e) => (e *= 2) < 1 ? 0.5 * bc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), xc = (e) => 1 - Math.sin(Math.acos(e)), sm = Jg(xc), im = Qg(xc), om = (e) => /^0[^.\s]+$/u.test(e);
function hM(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || om(e) : !0;
}
const pi = (e) => Math.round(e * 1e5) / 1e5, vc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function dM(e) {
  return e == null;
}
const fM = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, _c = (e, t) => (n) => !!(typeof n == "string" && fM.test(n) && n.startsWith(e) || t && !dM(n) && Object.prototype.hasOwnProperty.call(n, t)), rm = (e, t, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, o, r, a] = s.match(vc);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, pM = (e) => fn(0, 255, e), sa = {
  ...$s,
  transform: (e) => Math.round(pM(e))
}, Xn = {
  test: /* @__PURE__ */ _c("rgb", "red"),
  parse: /* @__PURE__ */ rm("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: s = 1 }) => "rgba(" + sa.transform(e) + ", " + sa.transform(t) + ", " + sa.transform(n) + ", " + pi(Fi.transform(s)) + ")"
};
function gM(e) {
  let t = "", n = "", s = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), s = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), s = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, s += s, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Ja = {
  test: /* @__PURE__ */ _c("#"),
  parse: gM,
  transform: Xn.transform
}, ys = {
  test: /* @__PURE__ */ _c("hsl", "hue"),
  parse: /* @__PURE__ */ rm("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(e) + ", " + qe.transform(pi(t)) + ", " + qe.transform(pi(n)) + ", " + pi(Fi.transform(s)) + ")"
}, oe = {
  test: (e) => Xn.test(e) || Ja.test(e) || ys.test(e),
  parse: (e) => Xn.test(e) ? Xn.parse(e) : ys.test(e) ? ys.parse(e) : Ja.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Xn.transform(e) : ys.transform(e)
}, mM = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function yM(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(vc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(mM)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const am = "number", lm = "color", bM = "var", xM = "var(", ld = "${}", vM = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Bi(e) {
  const t = e.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = t.replace(vM, (l) => (oe.test(l) ? (s.color.push(o), i.push(lm), n.push(oe.parse(l))) : l.startsWith(xM) ? (s.var.push(o), i.push(bM), n.push(l)) : (s.number.push(o), i.push(am), n.push(parseFloat(l))), ++o, ld)).split(ld);
  return { values: n, split: a, indexes: s, types: i };
}
function cm(e) {
  return Bi(e).values;
}
function um(e) {
  const { split: t, types: n } = Bi(e), s = t.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += t[r], i[r] !== void 0) {
        const a = n[r];
        a === am ? o += pi(i[r]) : a === lm ? o += oe.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const _M = (e) => typeof e == "number" ? 0 : e;
function SM(e) {
  const t = cm(e);
  return um(e)(t.map(_M));
}
const On = {
  test: yM,
  parse: cm,
  createTransformer: um,
  getAnimatableNone: SM
}, wM = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function AM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [s] = n.match(vc) || [];
  if (!s)
    return e;
  const i = n.replace(s, "");
  let o = wM.has(t) ? 1 : 0;
  return s !== n && (o *= 100), t + "(" + o + i + ")";
}
const TM = /\b([a-z-]*)\(.*?\)/gu, tl = {
  ...On,
  getAnimatableNone: (e) => {
    const t = e.match(TM);
    return t ? t.map(AM).join(" ") : e;
  }
}, PM = {
  ...sc,
  // Color props
  color: oe,
  backgroundColor: oe,
  outlineColor: oe,
  fill: oe,
  stroke: oe,
  // Border props
  borderColor: oe,
  borderTopColor: oe,
  borderRightColor: oe,
  borderBottomColor: oe,
  borderLeftColor: oe,
  filter: tl,
  WebkitFilter: tl
}, Sc = (e) => PM[e];
function hm(e, t) {
  let n = Sc(e);
  return n !== tl && (n = On), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const MM = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function CM(e, t, n) {
  let s = 0, i;
  for (; s < e.length && !i; ) {
    const o = e[s];
    typeof o == "string" && !MM.has(o) && Bi(o).values.length && (i = e[s]), s++;
  }
  if (i && n)
    for (const o of t)
      e[o] = hm(n, i);
}
const cd = (e) => e === $s || e === nt, ud = (e, t) => parseFloat(e.split(", ")[t]), hd = (e, t) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const i = s.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return ud(i[1], t);
  {
    const o = s.match(/^matrix\((.+)\)$/u);
    return o ? ud(o[1], e) : 0;
  }
}, DM = /* @__PURE__ */ new Set(["x", "y", "z"]), kM = js.filter((e) => !DM.has(e));
function EM(e) {
  const t = [];
  return kM.forEach((n) => {
    const s = e.getValue(n);
    s !== void 0 && (t.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Is = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: hd(4, 13),
  y: hd(5, 14)
};
Is.translateX = Is.x;
Is.translateY = Is.y;
const Jn = /* @__PURE__ */ new Set();
let el = !1, nl = !1;
function dm() {
  if (nl) {
    const e = Array.from(Jn).filter((s) => s.needsMeasurement), t = new Set(e.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    t.forEach((s) => {
      const i = EM(s);
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
  nl = !1, el = !1, Jn.forEach((e) => e.complete()), Jn.clear();
}
function fm() {
  Jn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (nl = !0);
  });
}
function OM() {
  fm(), dm();
}
class wc {
  constructor(t, n, s, i, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Jn.add(this), el || (el = !0, Dt.read(fm), Dt.resolveKeyframes(dm))) : (this.readKeyframes(), this.complete());
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
const pm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), RM = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function LM(e) {
  const t = RM.exec(e);
  if (!t)
    return [,];
  const [, n, s, i] = t;
  return [`--${n ?? s}`, i];
}
const IM = 4;
function gm(e, t, n = 1) {
  kn(n <= IM, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [s, i] = LM(e);
  if (!s)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return pm(r) ? parseFloat(r) : r;
  }
  return nc(i) ? gm(i, t, n + 1) : i;
}
const mm = (e) => (t) => t.test(e), FM = {
  test: (e) => e === "auto",
  parse: (e) => e
}, ym = [$s, nt, qe, yn, vP, xP, FM], dd = (e) => ym.find(mm(e));
class bm extends wc {
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
      if (typeof c == "string" && (c = c.trim(), nc(c))) {
        const u = gm(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Gg.has(s) || t.length !== 2)
      return;
    const [i, o] = t, r = dd(i), a = dd(o);
    if (r !== a)
      if (cd(r) && cd(a))
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
      hM(t[i]) && s.push(i);
    s.length && CM(t, s, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: s } = this;
    if (!t || !t.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Is[s](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    i[r] = Is[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const fd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(On.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function VM(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function NM(e, t, n, s) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], r = fd(i, t), a = fd(o, t);
  return Bs(r === a, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : VM(e) || (n === "spring" || dc(n)) && s;
}
const BM = (e) => e !== null;
function Er(e, { repeat: t, repeatType: n = "loop" }, s) {
  const i = e.filter(BM), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || s === void 0 ? i[o] : s;
}
const jM = 40;
class xm {
  constructor({ autoplay: t = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Ze.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > jM ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && OM(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Ze.now(), this.hasAttemptedResolve = !0;
    const { name: s, type: i, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !NM(t, s, i, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(Er(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const Ht = (e, t, n) => e + (t - e) * n;
function ia(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function $M({ hue: e, saturation: t, lightness: n, alpha: s }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!t)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    i = ia(l, a, e + 1 / 3), o = ia(l, a, e), r = ia(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
function sr(e, t) {
  return (n) => n > 0 ? t : e;
}
const oa = (e, t, n) => {
  const s = e * e, i = n * (t * t - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, HM = [Ja, Xn, ys], zM = (e) => HM.find((t) => t.test(e));
function pd(e) {
  const t = zM(e);
  if (Bs(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === ys && (n = $M(n)), n;
}
const gd = (e, t) => {
  const n = pd(e), s = pd(t);
  if (!n || !s)
    return sr(e, t);
  const i = { ...n };
  return (o) => (i.red = oa(n.red, s.red, o), i.green = oa(n.green, s.green, o), i.blue = oa(n.blue, s.blue, o), i.alpha = Ht(n.alpha, s.alpha, o), Xn.transform(i));
}, WM = (e, t) => (n) => t(e(n)), Gi = (...e) => e.reduce(WM), sl = /* @__PURE__ */ new Set(["none", "hidden"]);
function UM(e, t) {
  return sl.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function YM(e, t) {
  return (n) => Ht(e, t, n);
}
function Ac(e) {
  return typeof e == "number" ? YM : typeof e == "string" ? nc(e) ? sr : oe.test(e) ? gd : XM : Array.isArray(e) ? vm : typeof e == "object" ? oe.test(e) ? gd : KM : sr;
}
function vm(e, t) {
  const n = [...e], s = n.length, i = e.map((o, r) => Ac(o)(o, t[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function KM(e, t) {
  const n = { ...e, ...t }, s = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (s[i] = Ac(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function GM(e, t) {
  var n;
  const s = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const r = t.types[o], a = e.indexes[r][i[r]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    s[o] = l, i[r]++;
  }
  return s;
}
const XM = (e, t) => {
  const n = On.createTransformer(t), s = Bi(e), i = Bi(t);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? sl.has(e) && !i.values.length || sl.has(t) && !s.values.length ? UM(e, t) : Gi(vm(GM(s, i), i.values), n) : (Bs(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), sr(e, t));
};
function _m(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Ht(e, t, n) : Ac(e)(e, t);
}
const qM = 5;
function Sm(e, t, n) {
  const s = Math.max(t - qM, 0);
  return Xg(n - e(s), t - s);
}
const jt = {
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
}, md = 1e-3;
function ZM({ duration: e = jt.duration, bounce: t = jt.bounce, velocity: n = jt.velocity, mass: s = jt.mass }) {
  let i, o;
  Bs(e <= /* @__PURE__ */ Xe(jt.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - t;
  r = fn(jt.minDamping, jt.maxDamping, r), e = fn(jt.minDuration, jt.maxDuration, /* @__PURE__ */ hn(e)), r < 1 ? (i = (c) => {
    const u = c * r, h = u * e, d = u - n, f = il(c, r), p = Math.exp(-h);
    return md - d / f * p;
  }, o = (c) => {
    const h = c * r * e, d = h * n + n, f = Math.pow(r, 2) * Math.pow(c, 2) * e, p = Math.exp(-h), g = il(Math.pow(c, 2), r);
    return (-i(c) + md > 0 ? -1 : 1) * ((d - f) * p) / g;
  }) : (i = (c) => {
    const u = Math.exp(-c * e), h = (c - n) * e + 1;
    return -1e-3 + u * h;
  }, o = (c) => {
    const u = Math.exp(-c * e), h = (n - c) * (e * e);
    return u * h;
  });
  const a = 5 / e, l = JM(i, o, a);
  if (e = /* @__PURE__ */ Xe(e), isNaN(l))
    return {
      stiffness: jt.stiffness,
      damping: jt.damping,
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
const QM = 12;
function JM(e, t, n) {
  let s = n;
  for (let i = 1; i < QM; i++)
    s = s - e(s) / t(s);
  return s;
}
function il(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const tC = ["duration", "bounce"], eC = ["stiffness", "damping", "mass"];
function yd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function nC(e) {
  let t = {
    velocity: jt.velocity,
    stiffness: jt.stiffness,
    damping: jt.damping,
    mass: jt.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!yd(e, eC) && yd(e, tC))
    if (e.visualDuration) {
      const n = e.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * fn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: jt.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = ZM(e);
      t = {
        ...t,
        ...n,
        mass: jt.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function wm(e = jt.visualDuration, t = jt.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: c, mass: u, duration: h, velocity: d, isResolvedFromDuration: f } = nC({
    ...n,
    velocity: -/* @__PURE__ */ hn(n.velocity || 0)
  }), p = d || 0, g = c / (2 * Math.sqrt(l * u)), m = r - o, y = /* @__PURE__ */ hn(Math.sqrt(l / u)), b = Math.abs(m) < 5;
  s || (s = b ? jt.restSpeed.granular : jt.restSpeed.default), i || (i = b ? jt.restDelta.granular : jt.restDelta.default);
  let S;
  if (g < 1) {
    const x = il(y, g);
    S = (w) => {
      const A = Math.exp(-g * y * w);
      return r - A * ((p + g * y * m) / x * Math.sin(x * w) + m * Math.cos(x * w));
    };
  } else if (g === 1)
    S = (x) => r - Math.exp(-y * x) * (m + (p + y * m) * x);
  else {
    const x = y * Math.sqrt(g * g - 1);
    S = (w) => {
      const A = Math.exp(-g * y * w), T = Math.min(x * w, 300);
      return r - A * ((p + g * y * m) * Math.sinh(T) + x * m * Math.cosh(T)) / x;
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
        g < 1 && (A = x === 0 ? /* @__PURE__ */ Xe(p) : Sm(S, x, w));
        const T = Math.abs(A) <= s, P = Math.abs(r - w) <= i;
        a.done = T && P;
      }
      return a.value = a.done ? r : w, a;
    },
    toString: () => {
      const x = Math.min($g(_), qa), w = Hg((A) => _.next(x * A).value, x, 30);
      return x + "ms " + w;
    }
  };
  return _;
}
function bd({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const h = e[0], d = {
    done: !1,
    value: h
  }, f = (T) => a !== void 0 && T < a || l !== void 0 && T > l, p = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let g = n * t;
  const m = h + g, y = r === void 0 ? m : r(m);
  y !== m && (g = y - h);
  const b = (T) => -g * Math.exp(-T / s), S = (T) => y + b(T), _ = (T) => {
    const P = b(T), M = S(T);
    d.done = Math.abs(P) <= c, d.value = d.done ? y : M;
  };
  let x, w;
  const A = (T) => {
    f(d.value) && (x = T, w = wm({
      keyframes: [d.value, p(d.value)],
      velocity: Sm(S, T, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: c,
      restSpeed: u
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (T) => {
      let P = !1;
      return !w && x === void 0 && (P = !0, _(T), A(T)), x !== void 0 && T >= x ? w.next(T - x) : (!P && _(T), d);
    }
  };
}
const sC = /* @__PURE__ */ Ki(0.42, 0, 1, 1), iC = /* @__PURE__ */ Ki(0, 0, 0.58, 1), Am = /* @__PURE__ */ Ki(0.42, 0, 0.58, 1), oC = (e) => Array.isArray(e) && typeof e[0] != "number", xd = {
  linear: ye,
  easeIn: sC,
  easeInOut: Am,
  easeOut: iC,
  circIn: xc,
  circInOut: im,
  circOut: sm,
  backIn: bc,
  backInOut: em,
  backOut: tm,
  anticipate: nm
}, vd = (e) => {
  if (fc(e)) {
    kn(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, s, i] = e;
    return Ki(t, n, s, i);
  } else if (typeof e == "string")
    return kn(xd[e] !== void 0, `Invalid easing type '${e}'`), xd[e];
  return e;
};
function rC(e, t, n) {
  const s = [], i = n || _m, o = e.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(e[r], e[r + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[r] || ye : t;
      a = Gi(l, a);
    }
    s.push(a);
  }
  return s;
}
function aC(e, t, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = e.length;
  if (kn(o === t.length, "Both input and output ranges must be the same length"), o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const r = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = rC(t, s, i), l = a.length, c = (u) => {
    if (r && u < e[0])
      return t[0];
    let h = 0;
    if (l > 1)
      for (; h < e.length - 2 && !(u < e[h + 1]); h++)
        ;
    const d = /* @__PURE__ */ Rs(e[h], e[h + 1], u);
    return a[h](d);
  };
  return n ? (u) => c(fn(e[0], e[o - 1], u)) : c;
}
function lC(e, t) {
  const n = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const i = /* @__PURE__ */ Rs(0, t, s);
    e.push(Ht(n, 1, i));
  }
}
function cC(e) {
  const t = [0];
  return lC(t, e.length - 1), t;
}
function uC(e, t) {
  return e.map((n) => n * t);
}
function hC(e, t) {
  return e.map(() => t || Am).splice(0, e.length - 1);
}
function gi({ duration: e = 300, keyframes: t, times: n, ease: s = "easeInOut" }) {
  const i = oC(s) ? s.map(vd) : vd(s), o = {
    done: !1,
    value: t[0]
  }, r = uC(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : cC(t),
    e
  ), a = aC(r, t, {
    ease: Array.isArray(i) ? i : hC(t, i)
  });
  return {
    calculatedDuration: e,
    next: (l) => (o.value = a(l), o.done = l >= e, o)
  };
}
const dC = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Dt.update(t, !0),
    stop: () => En(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => te.isProcessing ? te.timestamp : Ze.now()
  };
}, fC = {
  decay: bd,
  inertia: bd,
  tween: gi,
  keyframes: gi,
  spring: wm
}, pC = (e) => e / 100;
class Tc extends xm {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options, r = (i == null ? void 0 : i.KeyframeResolver) || wc, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new r(o, a, n, s, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = this.options, a = dc(n) ? n : fC[n] || gi;
    let l, c;
    process.env.NODE_ENV !== "production" && a !== gi && kn(t.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), a !== gi && typeof t[0] != "number" && (l = Gi(pC, _m(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    o === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = $g(u));
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
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
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
      const T = Math.min(this.currentTime, u) / h;
      let P = Math.floor(T), M = T % 1;
      !M && T >= 1 && (M = 1), M === 1 && P--, P = Math.min(P, f + 1), !!(P % 2) && (p === "reverse" ? (M = 1 - M, g && (M -= g / h)) : p === "mirror" && (_ = r)), S = fn(0, 1, M) * h;
    }
    const x = b ? { done: !1, value: l[0] } : _.next(S);
    a && (x.value = a(x.value));
    let { done: w } = x;
    !b && c !== null && (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && w);
    return A && i !== void 0 && (x.value = Er(l, this.options, i)), m && m(x.value), A && this.finish(), x;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ hn(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ hn(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Xe(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ hn(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = dC, onPlay: n, startTime: s } = this.options;
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
const gC = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function mC(e, t, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = Wg(a, i);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: s,
    duration: i,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const yC = /* @__PURE__ */ ql(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ir = 10, bC = 2e4;
function xC(e) {
  return dc(e.type) || e.type === "spring" || !zg(e.ease);
}
function vC(e, t) {
  const n = new Tc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !s.done && o < bC; )
    s = n.sample(o), i.push(s.value), o += ir;
  return {
    times: void 0,
    keyframes: i,
    duration: o - ir,
    ease: "linear"
  };
}
const Tm = {
  anticipate: nm,
  backInOut: em,
  circInOut: im
};
function _C(e) {
  return e in Tm;
}
class _d extends xm {
  constructor(t) {
    super(t);
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options;
    this.resolver = new bm(o, (r, a) => this.onKeyframesResolved(r, a), n, s, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: s = 300, times: i, ease: o, type: r, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && er() && _C(o) && (o = Tm[o]), xC(this.options)) {
      const { onComplete: h, onUpdate: d, motionValue: f, element: p, ...g } = this.options, m = vC(t, g);
      t = m.keyframes, t.length === 1 && (t[1] = t[0]), s = m.duration, i = m.times, o = m.ease, r = "keyframes";
    }
    const u = mC(a.owner.current, l, t, { ...this.options, duration: s, times: i, ease: o });
    return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (sd(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: h } = this.options;
      a.set(Er(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ hn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ hn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.currentTime = /* @__PURE__ */ Xe(t);
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
        return ye;
      const { animation: s } = n;
      sd(s, t);
    }
    return ye;
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
      const { motionValue: c, onUpdate: u, onComplete: h, element: d, ...f } = this.options, p = new Tc({
        ...f,
        keyframes: s,
        duration: i,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), g = /* @__PURE__ */ Xe(this.time);
      c.setWithVelocity(p.sample(g - ir).value, p.sample(g).value, ir);
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
    return yC() && s && gC.has(s) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !i && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const SC = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, wC = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), AC = {
  type: "keyframes",
  duration: 0.8
}, TC = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, PC = (e, { keyframes: t }) => t.length > 2 ? AC : rs.has(e) ? e.startsWith("scale") ? wC(t[1]) : SC : TC;
function MC({ when: e, delay: t, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const Pc = (e, t, n, s = {}, i, o) => (r) => {
  const a = hc(s, e) || {}, l = a.delay || s.delay || 0;
  let { elapsed: c = 0 } = s;
  c = c - /* @__PURE__ */ Xe(l);
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
  MC(a) || (u = {
    ...u,
    ...PC(e, u)
  }), u.duration && (u.duration = /* @__PURE__ */ Xe(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Xe(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (h = !0)), h && !o && t.get() !== void 0) {
    const d = Er(u.keyframes, a);
    if (d !== void 0)
      return Dt.update(() => {
        u.onUpdate(d), u.onComplete();
      }), new UP([]);
  }
  return !o && _d.supports(u) ? new _d(u) : new Tc(u);
};
function CC({ protectedKeys: e, needsAnimating: t }, n) {
  const s = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, s;
}
function Pm(e, t, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var o;
  let { transition: r = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  s && (r = s);
  const c = [], u = i && e.animationState && e.animationState.getState()[i];
  for (const h in l) {
    const d = e.getValue(h, (o = e.latestValues[h]) !== null && o !== void 0 ? o : null), f = l[h];
    if (f === void 0 || u && CC(u, h))
      continue;
    const p = {
      delay: n,
      ...hc(r || {}, h)
    };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const y = qg(e);
      if (y) {
        const b = window.MotionHandoffAnimation(y, h, Dt);
        b !== null && (p.startTime = b, g = !0);
      }
    }
    Qa(e, h), d.start(Pc(h, d, f, e.shouldReduceMotion && Gg.has(h) ? { type: !1 } : p, e, g));
    const m = d.animation;
    m && c.push(m);
  }
  return a && Promise.all(c).then(() => {
    Dt.update(() => {
      a && rM(e, a);
    });
  }), c;
}
function ol(e, t, n = {}) {
  var s;
  const i = Vi(e, t, n.type === "exit" ? (s = e.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = i ? () => Promise.all(Pm(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: h, staggerDirection: d } = o;
    return DC(e, t, u + c, h, d, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [r, a] : [a, r];
    return c().then(() => u());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function DC(e, t, n = 0, s = 0, i = 1, o) {
  const r = [], a = (e.variantChildren.size - 1) * s, l = i === 1 ? (c = 0) => c * s : (c = 0) => a - c * s;
  return Array.from(e.variantChildren).sort(kC).forEach((c, u) => {
    c.notify("AnimationStart", t), r.push(ol(c, t, {
      ...o,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(r);
}
function kC(e, t) {
  return e.sortNodePosition(t);
}
function EC(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let s;
  if (Array.isArray(t)) {
    const i = t.map((o) => ol(e, o, n));
    s = Promise.all(i);
  } else if (typeof t == "string")
    s = ol(e, t, n);
  else {
    const i = typeof t == "function" ? Vi(e, t, n.custom) : t;
    s = Promise.all(Pm(e, i, n));
  }
  return s.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Mm(e, t) {
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
const OC = Ql.length;
function Cm(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Cm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < OC; n++) {
    const s = Ql[n], i = e.props[s];
    (Li(i) || i === !1) && (t[s] = i);
  }
  return t;
}
const RC = [...Zl].reverse(), LC = Zl.length;
function IC(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: s }) => EC(e, n, s)));
}
function FC(e) {
  let t = IC(e), n = Sd(), s = !0;
  const i = (l) => (c, u) => {
    var h;
    const d = Vi(e, u, l === "exit" ? (h = e.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
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
    const { props: c } = e, u = Cm(e.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let f = {}, p = 1 / 0;
    for (let m = 0; m < LC; m++) {
      const y = RC[m], b = n[y], S = c[y] !== void 0 ? c[y] : u[y], _ = Li(S), x = y === l ? b.isActive : null;
      x === !1 && (p = m);
      let w = S === u[y] && S !== c[y] && _;
      if (w && s && e.manuallyAnimateOnMount && (w = !1), b.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && x === null || // If we didn't and don't have any defined prop for this animation type
      !S && !b.prevProp || // Or if the prop doesn't define an animation
      Dr(S) || typeof S == "boolean")
        continue;
      const A = VC(b.prevProp, S);
      let T = A || // If we're making this variant active, we want to always make it active
      y === l && b.isActive && !w && _ || // If we removed a higher-priority variant (i is in reverse order)
      m > p && _, P = !1;
      const M = Array.isArray(S) ? S : [S];
      let D = M.reduce(i(y), {});
      x === !1 && (D = {});
      const { prevResolvedValues: C = {} } = b, I = {
        ...C,
        ...D
      }, Z = (z) => {
        T = !0, d.has(z) && (P = !0, d.delete(z)), b.needsAnimating[z] = !0;
        const Q = e.getValue(z);
        Q && (Q.liveStyle = !1);
      };
      for (const z in I) {
        const Q = D[z], J = C[z];
        if (f.hasOwnProperty(z))
          continue;
        let ot = !1;
        Xa(Q) && Xa(J) ? ot = !Mm(Q, J) : ot = Q !== J, ot ? Q != null ? Z(z) : d.add(z) : Q !== void 0 && d.has(z) ? Z(z) : b.protectedKeys[z] = !0;
      }
      b.prevProp = S, b.prevResolvedValues = D, b.isActive && (f = { ...f, ...D }), s && e.blockInitialAnimation && (T = !1), T && (!(w && A) || P) && h.push(...M.map((z) => ({
        animation: z,
        options: { type: y }
      })));
    }
    if (d.size) {
      const m = {};
      if (typeof c.initial != "boolean") {
        const y = Vi(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
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
      n = Sd(), s = !0;
    }
  };
}
function VC(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Mm(t, e) : !1;
}
function zn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Sd() {
  return {
    animate: zn(!0),
    whileInView: zn(),
    whileHover: zn(),
    whileTap: zn(),
    whileDrag: zn(),
    whileFocus: zn(),
    exit: zn()
  };
}
class In {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class NC extends In {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = FC(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Dr(t) && (this.unmountControls = t.subscribe(this.node));
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
let BC = 0;
class jC extends In {
  constructor() {
    super(...arguments), this.id = BC++;
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
const $C = {
  animation: {
    Feature: NC
  },
  exit: {
    Feature: jC
  }
};
function ji(e, t, n, s = { passive: !0 }) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n);
}
function Xi(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const HC = (e) => (t) => pc(t) && e(t, Xi(t));
function bs(e, t, n, s) {
  return ji(e, t, HC(n), s);
}
function Dm({ top: e, left: t, right: n, bottom: s }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: s }
  };
}
function zC({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function WC(e, t) {
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
const km = 1e-4, UC = 1 - km, YC = 1 + km, Em = 0.01, KC = 0 - Em, GC = 0 + Em;
function ue(e) {
  return e.max - e.min;
}
function XC(e, t, n) {
  return Math.abs(e - t) <= n;
}
function wd(e, t, n, s = 0.5) {
  e.origin = s, e.originPoint = Ht(t.min, t.max, e.origin), e.scale = ue(n) / ue(t), e.translate = Ht(n.min, n.max, e.origin) - e.originPoint, (e.scale >= UC && e.scale <= YC || isNaN(e.scale)) && (e.scale = 1), (e.translate >= KC && e.translate <= GC || isNaN(e.translate)) && (e.translate = 0);
}
function mi(e, t, n, s) {
  wd(e.x, t.x, n.x, s ? s.originX : void 0), wd(e.y, t.y, n.y, s ? s.originY : void 0);
}
function Ad(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ue(t);
}
function qC(e, t, n) {
  Ad(e.x, t.x, n.x), Ad(e.y, t.y, n.y);
}
function Td(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ue(t);
}
function yi(e, t, n) {
  Td(e.x, t.x, n.x), Td(e.y, t.y, n.y);
}
const Pd = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), xs = () => ({
  x: Pd(),
  y: Pd()
}), Md = () => ({ min: 0, max: 0 }), Yt = () => ({
  x: Md(),
  y: Md()
});
function De(e) {
  return [e("x"), e("y")];
}
function ra(e) {
  return e === void 0 || e === 1;
}
function rl({ scale: e, scaleX: t, scaleY: n }) {
  return !ra(e) || !ra(t) || !ra(n);
}
function Yn(e) {
  return rl(e) || Om(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Om(e) {
  return Cd(e.x) || Cd(e.y);
}
function Cd(e) {
  return e && e !== "0%";
}
function or(e, t, n) {
  const s = e - n, i = t * s;
  return n + i;
}
function Dd(e, t, n, s, i) {
  return i !== void 0 && (e = or(e, i, s)), or(e, n, s) + t;
}
function al(e, t = 0, n = 1, s, i) {
  e.min = Dd(e.min, t, n, s, i), e.max = Dd(e.max, t, n, s, i);
}
function Rm(e, { x: t, y: n }) {
  al(e.x, t.translate, t.scale, t.originPoint), al(e.y, n.translate, n.scale, n.originPoint);
}
const kd = 0.999999999999, Ed = 1.0000000000001;
function ZC(e, t, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && _s(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (t.x *= r.x.scale, t.y *= r.y.scale, Rm(e, r)), s && Yn(o.latestValues) && _s(e, o.latestValues));
  }
  t.x < Ed && t.x > kd && (t.x = 1), t.y < Ed && t.y > kd && (t.y = 1);
}
function vs(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Od(e, t, n, s, i = 0.5) {
  const o = Ht(e.min, e.max, i);
  al(e, t, n, o, s);
}
function _s(e, t) {
  Od(e.x, t.x, t.scaleX, t.scale, t.originX), Od(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Lm(e, t) {
  return Dm(WC(e.getBoundingClientRect(), t));
}
function QC(e, t, n) {
  const s = Lm(e, n), { scroll: i } = t;
  return i && (vs(s.x, i.offset.x), vs(s.y, i.offset.y)), s;
}
const Rd = (e, t) => Math.abs(e - t);
function JC(e, t) {
  const n = Rd(e.x, t.x), s = Rd(e.y, t.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Im {
  constructor(t, n, { transformPagePoint: s, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = la(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, d = JC(u.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !d)
        return;
      const { point: f } = u, { timestamp: p } = te;
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
      this.lastMoveEvent = u, this.lastMoveEventInfo = aa(h, this.transformPagePoint), Dt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, h) => {
      nr(u, "release"), this.end();
      const { onEnd: d, onSessionEnd: f, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = la(u.type === "pointercancel" || u.type === "lostpointercapture" ? this.lastMoveEventInfo : aa(h, this.transformPagePoint), this.history);
      this.startEvent && d && d(u, g), f && f(u, g);
    }, !pc(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = s;
    const o = Xi(t), r = aa(o, this.transformPagePoint), { point: a } = r, { timestamp: l } = te;
    this.history = [{ ...a, timestamp: l }];
    const { onSessionStart: c } = n;
    c && c(t, la(r, this.history)), nr(t, "set"), this.removeListeners = Gi(bs(t.currentTarget, "pointermove", this.handlePointerMove), bs(t.currentTarget, "pointerup", this.handlePointerUp), bs(t.currentTarget, "pointercancel", this.handlePointerUp), bs(t.currentTarget, "lostpointercapture", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), En(this.updatePoint);
  }
}
function aa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ld(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function la({ point: e }, t) {
  return {
    point: e,
    delta: Ld(e, Fm(t)),
    offset: Ld(e, tD(t)),
    velocity: eD(t, 0.1)
  };
}
function tD(e) {
  return e[0];
}
function Fm(e) {
  return e[e.length - 1];
}
function eD(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, s = null;
  const i = Fm(e);
  for (; n >= 0 && (s = e[n], !(i.timestamp - s.timestamp > /* @__PURE__ */ Xe(t))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ hn(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function nD(e, { min: t, max: n }, s) {
  return t !== void 0 && e < t ? e = s ? Ht(t, e, s.min) : Math.max(e, t) : n !== void 0 && e > n && (e = s ? Ht(n, e, s.max) : Math.min(e, n)), e;
}
function Id(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function sD(e, { top: t, left: n, bottom: s, right: i }) {
  return {
    x: Id(e.x, n, i),
    y: Id(e.y, t, s)
  };
}
function Fd(e, t) {
  let n = t.min - e.min, s = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, s] = [s, n]), { min: n, max: s };
}
function iD(e, t) {
  return {
    x: Fd(e.x, t.x),
    y: Fd(e.y, t.y)
  };
}
function oD(e, t) {
  let n = 0.5;
  const s = ue(e), i = ue(t);
  return i > s ? n = /* @__PURE__ */ Rs(t.min, t.max - s, e.min) : s > i && (n = /* @__PURE__ */ Rs(e.min, e.max - i, t.min)), fn(0, 1, n);
}
function rD(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const ll = 0.35;
function aD(e = ll) {
  return e === !1 ? e = 0 : e === !0 && (e = ll), {
    x: Vd(e, "left", "right"),
    y: Vd(e, "top", "bottom")
  };
}
function Vd(e, t, n) {
  return {
    min: Nd(e, t),
    max: Nd(e, n)
  };
}
function Nd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const lD = /* @__PURE__ */ new WeakMap();
class cD {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Yt(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (u) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Xi(u).point);
    }, o = (u, h) => {
      const { drag: d, dragPropagation: f, onDragStart: p } = this.getProps();
      if (d && !f && (this.openDragLock && this.openDragLock(), this.openDragLock = eM(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), De((m) => {
        let y = this.getAxisMotionValue(m).get() || 0;
        if (qe.test(y)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const S = b.layout.layoutBox[m];
            S && (y = ue(S) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[m] = y;
      }), p && Dt.postRender(() => p(u, h)), Qa(this.visualElement, "transform");
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", !0);
    }, r = (u, h) => {
      const { dragPropagation: d, dragDirectionLock: f, onDirectionLock: p, onDrag: g } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: m } = h;
      if (f && this.currentDirection === null) {
        this.currentDirection = uD(m), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, m), this.updateAxis("y", h.point, m), this.visualElement.render(), g && g(u, h);
    }, a = (u, h) => this.stop(u, h), l = () => De((u) => {
      var h;
      return this.getAnimationState(u) === "paused" && ((h = this.getAxisMotionValue(u).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Im(t, {
      onSessionStart: i,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c
    });
  }
  stop(t, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && Dt.postRender(() => o(t, n));
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
    if (!s || !xo(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let r = this.originPoint[t] + s[t];
    this.constraints && this.constraints[t] && (r = nD(r, this.constraints[t], this.elastic[t])), o.set(r);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
    n && ms(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = sD(i.layoutBox, n) : this.constraints = !1, this.elastic = aD(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && De((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = rD(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ms(t))
      return !1;
    const s = t.current;
    kn(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = QC(s, i.root, this.visualElement.getTransformPagePoint());
    let r = iD(i.layout.layoutBox, o);
    if (n) {
      const a = n(zC(r));
      this.hasMutatedConstraints = !!a, a && (r = Dm(a));
    }
    return r;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = De((u) => {
      if (!xo(u, n, this.currentDirection))
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
    return Qa(this.visualElement, t), s.start(Pc(t, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    De((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    De((t) => {
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
    De((n) => {
      const { drag: s } = this.getProps();
      if (!xo(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - Ht(r, a, 0.5));
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
    if (!ms(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    De((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = oD({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), De((r) => {
      if (!xo(r, t, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: c } = this.constraints[r];
      a.set(Ht(l, c, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    lD.set(this.visualElement, this);
    const t = this.visualElement.current, n = bs(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      ms(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), Dt.read(s);
    const r = ji(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (De((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += l[u].translate, h.set(h.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = ll, dragMomentum: a = !0 } = t;
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
function xo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function uD(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class hD extends In {
  constructor(t) {
    super(t), this.removeGroupControls = ye, this.removeListeners = ye, this.controls = new cD(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ye;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Bd = (e) => (t, n) => {
  e && Dt.postRender(() => e(t, n));
};
class dD extends In {
  constructor() {
    super(...arguments), this.removePointerDownListener = ye;
  }
  onPointerDown(t) {
    this.session = new Im(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint()
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Bd(t),
      onStart: Bd(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && Dt.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = bs(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Io = {
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
function jd(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Qs = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (nt.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = jd(e, t.target.x), s = jd(e, t.target.y);
    return `${n}% ${s}%`;
  }
}, fD = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const s = e, i = On.parse(e);
    if (i.length > 5)
      return s;
    const o = On.createTransformer(e), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    i[0 + r] /= a, i[1 + r] /= l;
    const c = Ht(a, l, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= c), typeof i[3 + r] == "number" && (i[3 + r] /= c), o(i);
  }
};
class pD extends oy {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = t;
    bP(gD), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Io.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, r = s.projection;
    return r && (r.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? r.promote() : r.relegate() || Dt.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), tc.postRender(() => {
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
  const [t, n] = vg(), s = Wt(Yl);
  return R.jsx(pD, { ...e, layoutGroup: s, switchLayoutGroup: Wt(Cg), isPresent: t, safeToRemove: n });
}
const gD = {
  borderRadius: {
    ...Qs,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Qs,
  borderTopRightRadius: Qs,
  borderBottomLeftRadius: Qs,
  borderBottomRightRadius: Qs,
  boxShadow: fD
};
function mD(e, t, n) {
  const s = ae(e) ? e : Ni(e);
  return s.start(Pc("", s, t, n)), s.animation;
}
function yD(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const bD = (e, t) => e.depth - t.depth;
class xD {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    gc(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    mc(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(bD), this.isDirty = !1, this.children.forEach(t);
  }
}
function vD(e, t) {
  const n = Ze.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= t && (En(s), e(o - t));
  };
  return Dt.read(s, !0), () => En(s);
}
const Nm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], _D = Nm.length, $d = (e) => typeof e == "string" ? parseFloat(e) : e, Hd = (e) => typeof e == "number" || nt.test(e);
function SD(e, t, n, s, i, o) {
  i ? (e.opacity = Ht(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    wD(s)
  ), e.opacityExit = Ht(t.opacity !== void 0 ? t.opacity : 1, 0, AD(s))) : o && (e.opacity = Ht(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let r = 0; r < _D; r++) {
    const a = `border${Nm[r]}Radius`;
    let l = zd(t, a), c = zd(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Hd(l) === Hd(c) ? (e[a] = Math.max(Ht($d(l), $d(c), s), 0), (qe.test(c) || qe.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = Ht(t.rotate || 0, n.rotate || 0, s));
}
function zd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const wD = /* @__PURE__ */ Bm(0, 0.5, sm), AD = /* @__PURE__ */ Bm(0.5, 0.95, ye);
function Bm(e, t, n) {
  return (s) => s < e ? 0 : s > t ? 1 : n(/* @__PURE__ */ Rs(e, t, s));
}
function Wd(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ce(e, t) {
  Wd(e.x, t.x), Wd(e.y, t.y);
}
function Ud(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Yd(e, t, n, s, i) {
  return e -= t, e = or(e, 1 / n, s), i !== void 0 && (e = or(e, 1 / i, s)), e;
}
function TD(e, t = 0, n = 1, s = 0.5, i, o = e, r = e) {
  if (qe.test(t) && (t = parseFloat(t), t = Ht(r.min, r.max, t / 100) - r.min), typeof t != "number")
    return;
  let a = Ht(o.min, o.max, s);
  e === o && (a -= t), e.min = Yd(e.min, t, n, a, i), e.max = Yd(e.max, t, n, a, i);
}
function Kd(e, t, [n, s, i], o, r) {
  TD(e, t[n], t[s], t[i], t.scale, o, r);
}
const PD = ["x", "scaleX", "originX"], MD = ["y", "scaleY", "originY"];
function Gd(e, t, n, s) {
  Kd(e.x, t, PD, n ? n.x : void 0, s ? s.x : void 0), Kd(e.y, t, MD, n ? n.y : void 0, s ? s.y : void 0);
}
function Xd(e) {
  return e.translate === 0 && e.scale === 1;
}
function jm(e) {
  return Xd(e.x) && Xd(e.y);
}
function qd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function CD(e, t) {
  return qd(e.x, t.x) && qd(e.y, t.y);
}
function Zd(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function $m(e, t) {
  return Zd(e.x, t.x) && Zd(e.y, t.y);
}
function Qd(e) {
  return ue(e.x) / ue(e.y);
}
function Jd(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class DD {
  constructor() {
    this.members = [];
  }
  add(t) {
    gc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (mc(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function kD(e, t, n) {
  let s = "";
  const i = e.x.translate / t.x, o = e.y.translate / t.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (t.x !== 1 || t.y !== 1) && (s += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: h, rotateY: d, skewX: f, skewY: p } = n;
    c && (s = `perspective(${c}px) ${s}`), u && (s += `rotate(${u}deg) `), h && (s += `rotateX(${h}deg) `), d && (s += `rotateY(${d}deg) `), f && (s += `skewX(${f}deg) `), p && (s += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const ca = ["", "X", "Y", "Z"], ED = { visibility: "hidden" }, tf = 1e3;
let OD = 0;
function ua(e, t, n, s) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), s && (s[e] = 0));
}
function Hm(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = qg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Dt, !(i || o));
  }
  const { parent: s } = e;
  s && !s.hasCheckedOptimisedAppear && Hm(s);
}
function zm({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = t == null ? void 0 : t()) {
      this.id = OD++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(ID), this.nodes.forEach(jD), this.nodes.forEach($D), this.nodes.forEach(FD);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xD());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new yc()), this.eventHandlers.get(r).add(a);
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
      this.isSVG = yD(r), this.instance = r;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let h;
        const d = () => this.root.updateBlockedByResize = !1;
        e(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = vD(d, 250), Io.hasAnimatedSinceResize && (Io.hasAnimatedSinceResize = !1, this.nodes.forEach(nf));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || u.getDefaultTransition() || YD, { onLayoutAnimationStart: m, onLayoutAnimationComplete: y } = u.getProps(), b = !this.targetLayout || !$m(this.targetLayout, p), S = !d && f;
        if (this.options.layoutRoot || this.resumeFrom || S || d && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, S);
          const _ = {
            ...hc(g, "layout"),
            onPlay: m,
            onComplete: y
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0, _.type = !1), this.startAnimation(_);
        } else
          d || nf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, En(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(HD), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Hm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ef);
        return;
      }
      this.isUpdating || this.nodes.forEach(ND), this.isUpdating = !1, this.nodes.forEach(BD), this.nodes.forEach(RD), this.nodes.forEach(LD), this.clearAllSnapshots();
      const a = Ze.now();
      te.delta = fn(0, 1e3 / 60, a - te.timestamp), te.timestamp = a, te.isProcessing = !0, ea.update.process(te), ea.preRender.process(te), ea.render.process(te), te.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, tc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(VD), this.sharedNodes.forEach(zD);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Dt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Dt.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = Yt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !jm(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      r && (a || Yn(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), KD(l), {
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
        return Yt();
      const l = a.measureViewportBox();
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(GD))) {
        const { scroll: u } = this.root;
        u && (vs(l.x, u.offset.x), vs(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      var a;
      const l = Yt();
      if (Ce(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: h, options: d } = u;
        u !== this.root && h && d.layoutScroll && (h.wasRoot && Ce(l, r), vs(l.x, h.offset.x), vs(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(r, a = !1) {
      const l = Yt();
      Ce(l, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && _s(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Yn(u.latestValues) && _s(l, u.latestValues);
      }
      return Yn(this.latestValues) && _s(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = Yt();
      Ce(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Yn(c.latestValues))
          continue;
        rl(c.latestValues) && c.updateSnapshot();
        const u = Yt(), h = c.measurePageBox();
        Ce(u, h), Gd(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Yn(this.latestValues) && Gd(a, this.latestValues), a;
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
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Yt(), this.relativeTargetOrigin = Yt(), yi(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Ce(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Yt(), this.targetWithTransforms = Yt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), qC(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ce(this.target, this.layout.layoutBox), Rm(this.target, this.targetDelta)) : Ce(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Yt(), this.relativeTargetOrigin = Yt(), yi(this.relativeTargetOrigin, this.target, f.target), Ce(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || rl(this.parent.latestValues) || Om(this.parent.latestValues)))
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
      ZC(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Yt());
      const { target: p } = a;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ud(this.prevProjectionDelta.x, this.projectionDelta.x), Ud(this.prevProjectionDelta.y, this.projectionDelta.y)), mi(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !Jd(this.projectionDelta.x, this.prevProjectionDelta.x) || !Jd(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
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
      this.prevProjectionDelta = xs(), this.projectionDelta = xs(), this.projectionDeltaWithTransform = xs();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, h = xs();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = Yt(), f = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, g = f !== p, m = this.getStack(), y = !m || m.members.length <= 1, b = !!(g && !y && this.options.crossfade === !0 && !this.path.some(UD));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (_) => {
        const x = _ / 1e3;
        sf(h.x, r.x, x), sf(h.y, r.y, x), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (yi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), WD(this.relativeTarget, this.relativeTargetOrigin, d, x), S && CD(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = Yt()), Ce(S, this.relativeTarget)), g && (this.animationValues = u, SD(u, c, this.latestValues, x, b, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = x;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (En(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Dt.update(() => {
        Io.hasAnimatedSinceResize = !0, this.currentAnimation = mD(0, tf, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(tf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = r;
      if (!(!a || !l || !c)) {
        if (this !== r && this.layout && c && Wm(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Yt();
          const h = ue(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const d = ue(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + d;
        }
        Ce(a, l), _s(a, u), mi(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new DD()), this.sharedNodes.get(r).add(a);
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
      l.z && ua("z", r, c, this.animationValues);
      for (let u = 0; u < ca.length; u++)
        ua(`rotate${ca[u]}`, r, c, this.animationValues), ua(`skew${ca[u]}`, r, c, this.animationValues);
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
        return ED;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Ro(r == null ? void 0 : r.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = Ro(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !Yn(this.latestValues) && (g.transform = u ? u({}, "") : "none", this.hasProjected = !1), g;
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), c.transform = kD(this.projectionDeltaWithTransform, this.treeScale, d), u && (c.transform = u(d, c.transform));
      const { x: f, y: p } = this.projectionDelta;
      c.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`, h.animationValues ? c.opacity = h === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const g in Ii) {
        if (d[g] === void 0)
          continue;
        const { correct: m, applyTo: y, isCSSVariable: b } = Ii[g], S = c.transform === "none" ? d[g] : m(d[g], h);
        if (y) {
          const _ = y.length;
          for (let x = 0; x < _; x++)
            c[y[x]] = S;
        } else
          b ? this.options.visualElement.renderState.vars[g] = S : c[g] = S;
      }
      return this.options.layoutId && (c.pointerEvents = h === this ? Ro(r == null ? void 0 : r.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(ef), this.root.sharedNodes.clear();
    }
  };
}
function RD(e) {
  e.updateLayout();
}
function LD(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = e.layout, { animationType: o } = e.options, r = n.source !== e.layout.source;
    o === "size" ? De((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], f = ue(d);
      d.min = s[h].min, d.max = d.min + f;
    }) : Wm(o, n.layoutBox, s) && De((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], f = ue(s[h]);
      d.max = d.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[h].max = e.relativeTarget[h].min + f);
    });
    const a = xs();
    mi(a, s, n.layoutBox);
    const l = xs();
    r ? mi(l, e.applyTransform(i, !0), n.measuredBox) : mi(l, s, n.layoutBox);
    const c = !jm(a);
    let u = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: f } = h;
        if (d && f) {
          const p = Yt();
          yi(p, n.layoutBox, d.layoutBox);
          const g = Yt();
          yi(g, s, f.layoutBox), $m(p, g) || (u = !0), h.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = p, e.relativeParent = h);
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
function ID(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function FD(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function VD(e) {
  e.clearSnapshot();
}
function ef(e) {
  e.clearMeasurements();
}
function ND(e) {
  e.isLayoutDirty = !1;
}
function BD(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function nf(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function jD(e) {
  e.resolveTargetDelta();
}
function $D(e) {
  e.calcProjection();
}
function HD(e) {
  e.resetSkewAndRotation();
}
function zD(e) {
  e.removeLeadSnapshot();
}
function sf(e, t, n) {
  e.translate = Ht(t.translate, 0, n), e.scale = Ht(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function of(e, t, n, s) {
  e.min = Ht(t.min, n.min, s), e.max = Ht(t.max, n.max, s);
}
function WD(e, t, n, s) {
  of(e.x, t.x, n.x, s), of(e.y, t.y, n.y, s);
}
function UD(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const YD = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, rf = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), af = rf("applewebkit/") && !rf("chrome/") ? Math.round : ye;
function lf(e) {
  e.min = af(e.min), e.max = af(e.max);
}
function KD(e) {
  lf(e.x), lf(e.y);
}
function Wm(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !XC(Qd(t), Qd(n), 0.2);
}
function GD(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const XD = zm({
  attachResizeListener: (e, t) => ji(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ha = {
  current: void 0
}, Um = zm({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ha.current) {
      const e = new XD({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ha.current = e;
    }
    return ha.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), qD = {
  pan: {
    Feature: dD
  },
  drag: {
    Feature: hD,
    ProjectionNode: Um,
    MeasureLayout: Vm
  }
};
function cf(e, t, n) {
  const { props: s } = e;
  e.animationState && s.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && Dt.postRender(() => o(t, Xi(t)));
}
class ZD extends In {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = XP(t, (n, s) => (cf(this.node, s, "Start"), (i) => cf(this.node, i, "End"))));
  }
  unmount() {
  }
}
class QD extends In {
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
    this.unmount = Gi(ji(this.node.current, "focus", () => this.onFocus()), ji(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function uf(e, t, n) {
  const { props: s } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && s.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && Dt.postRender(() => o(t, Xi(t)));
}
class JD extends In {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = JP(t, (n, s) => (uf(this.node, s, "Start"), (i, { success: o }) => uf(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const cl = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), tk = (e) => {
  const t = cl.get(e.target);
  t && t(e);
}, ek = (e) => {
  e.forEach(tk);
};
function nk({ root: e, ...t }) {
  const n = e || document;
  da.has(n) || da.set(n, {});
  const s = da.get(n), i = JSON.stringify(t);
  return s[i] || (s[i] = new IntersectionObserver(ek, { root: e, ...t })), s[i];
}
function sk(e, t, n) {
  const s = nk(t);
  return cl.set(e, n), s.observe(e), () => {
    cl.delete(e), s.unobserve(e);
  };
}
const ik = {
  some: 0,
  all: 1
};
class ok extends In {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = t, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : ik[i]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, o && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), d = c ? u : h;
      d && d(l);
    };
    return sk(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(rk(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function rk({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const ak = {
  inView: {
    Feature: ok
  },
  tap: {
    Feature: JD
  },
  focus: {
    Feature: QD
  },
  hover: {
    Feature: ZD
  }
}, lk = {
  layout: {
    ProjectionNode: Um,
    MeasureLayout: Vm
  }
}, ul = { current: null }, Ym = { current: !1 };
function ck() {
  if (Ym.current = !0, !!Xl)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => ul.current = e.matches;
      e.addListener(t), t();
    } else
      ul.current = !1;
}
const uk = [...ym, oe, On], hk = (e) => uk.find(mm(e)), dk = /* @__PURE__ */ new WeakMap();
function fk(e, t, n) {
  for (const s in t) {
    const i = t[s], o = n[s];
    if (ae(i))
      e.addValue(s, i), process.env.NODE_ENV === "development" && Mr(i.version === "12.4.7", `Attempting to mix Motion versions ${i.version} with 12.4.7 may not work as expected.`);
    else if (ae(o))
      e.addValue(s, Ni(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(s)) {
        const r = e.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = e.getStaticValue(s);
        e.addValue(s, Ni(r !== void 0 ? r : i, { owner: e }));
      }
  }
  for (const s in n)
    t[s] === void 0 && e.removeValue(s);
  return t;
}
const hf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class pk {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = wc, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = Ze.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, Dt.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: u } = r;
    this.onUpdate = u, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = s, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = kr(n), this.isVariantNode = Pg(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: h, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const p = d[f];
      l[f] !== void 0 && ae(p) && p.set(l[f], !1);
    }
  }
  mount(t) {
    this.current = t, dk.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Ym.current || ck(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ul.current, process.env.NODE_ENV !== "production" && Mr(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), En(this.notifyUpdate), En(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
      this.latestValues[t] = a, this.props.onUpdate && Dt.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in Ls) {
      const n = Ls[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Yt();
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
    for (let s = 0; s < hf.length; s++) {
      const i = hf[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = t[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = fk(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return s === void 0 && n !== void 0 && (s = Ni(n === null ? void 0 : n, { owner: this }), this.addValue(t, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var s;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (s = this.getBaseTargetFromProps(this.props, t)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (pm(i) || om(i)) ? i = parseFloat(i) : !hk(i) && On.test(n) && (i = hm(t, n)), this.setBaseTarget(t, ae(i) ? i.get() : i)), ae(i) ? i.get() : i;
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
      const r = cc(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (i = r[t]);
    }
    if (s && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !ae(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new yc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Km extends pk {
  constructor() {
    super(...arguments), this.KeyframeResolver = bm;
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
    ae(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function gk(e) {
  return window.getComputedStyle(e);
}
class mk extends Km {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Vg;
  }
  readValueFromInstance(t, n) {
    if (rs.has(n)) {
      const s = Sc(n);
      return s && s.default || 0;
    } else {
      const s = gk(t), i = (ec(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Lm(t, n);
  }
  build(t, n, s) {
    ic(t, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return uc(t, n, s);
  }
}
class yk extends Km {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Yt, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && Fg(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (rs.has(n)) {
      const s = Sc(n);
      return s && s.default || 0;
    }
    return n = Ng.has(n) ? n : Jl(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return jg(t, n, s);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && Dt.postRender(this.updateDimensions);
  }
  build(t, n, s) {
    ac(t, n, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(t, n, s, i) {
    Bg(t, n, s, i);
  }
  mount(t) {
    this.isSVGTag = lc(t.tagName), super.mount(t);
  }
}
const bk = (e, t) => rc(e) ? new yk(t) : new mk(t, {
  allowProjection: e !== pf
}), xk = /* @__PURE__ */ HP({
  ...$C,
  ...ak,
  ...qD,
  ...lk
}, bk), Gm = /* @__PURE__ */ iP(xk), Xm = Ee(void 0), qm = ({
  children: e,
  onClose: t = () => {
  }
}) => {
  const [n, s] = bt(!0), i = () => {
    s(!1), t();
  };
  return /* @__PURE__ */ R.jsx(Xm.Provider, { value: { handleClose: i, isVisible: n, setIsVisible: s }, children: e });
};
qm.displayName = "HToastPopupProvider";
const vk = ({ children: e, onClose: t }) => /* @__PURE__ */ R.jsx(qm, { onClose: t, children: /* @__PURE__ */ R.jsx(
  Gm.div,
  {
    initial: { opacity: 0, y: 50, height: 0 },
    animate: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.3 },
    layout: !0,
    children: e
  }
) });
vk.displayName = "HToastPopupArea";
const Zm = () => {
  const e = Wt(Xm);
  if (!e)
    throw new Error("useToastContext must be used within a ToastPopupProvider");
  return e;
}, _k = ({
  duration: e = 3e3,
  className: t,
  children: n
}) => {
  const { setIsVisible: s, isVisible: i, handleClose: o } = Zm();
  return _t(() => {
    const r = setTimeout(() => {
      s(!1), o();
    }, e);
    return () => clearTimeout(r);
  }, [e]), /* @__PURE__ */ R.jsx(Sg, { children: i && /* @__PURE__ */ R.jsx(
    Gm.div,
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
_k.displayName = "HToastPopup";
const Sk = ({
  className: e,
  children: t,
  style: n
}) => /* @__PURE__ */ R.jsx("div", { style: n, className: `fixed bottom-4 right-4 z-[200] p-4 space-y-4 flex flex-col ${e}`, children: /* @__PURE__ */ R.jsx(Sg, { children: /* @__PURE__ */ R.jsx(R.Fragment, { children: t }) }) });
Sk.displayName = "HToastPopupContainer";
const wk = ({ children: e, className: t }) => {
  const { handleClose: n } = Zm();
  return /* @__PURE__ */ R.jsx(
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
wk.displayName = "HToastPopupCloseButton";
const Ak = ({ target: e, children: t, className: n, style: s }) => {
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
  return /* @__PURE__ */ R.jsx(
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
Ak.displayName = "HTooltipArea";
const Tk = Fs((e, t) => {
  const [n, s] = bt(!1), [i, o] = bt({
    x: 0,
    y: 0
  });
  Ts(t, () => ({
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
  return n ? /* @__PURE__ */ R.jsx(
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
Tk.displayName = "HTooltip";
const Pk = Fs((e, t) => {
  const {
    backdrop: n,
    escBeforeFunc: s,
    escAfterFunc: i,
    onBackdropClick: o,
    children: r,
    className: a,
    style: l
  } = e, c = mt(null), u = async () => {
    c.current && c.current.close();
  }, h = () => {
    c.current && c.current.showModal();
  };
  Ts(t, () => ({
    open: h,
    closeFunc: u
  })), _t(() => (n && document.documentElement.style.setProperty("--modal-backdrop-color", n), () => {
    n && document.documentElement.style.removeProperty("--modal-backdrop-color");
  }), [n]);
  const d = async (p) => {
    p.key === "Escape" && (p.preventDefault(), s && await s(), u(), i && await i());
  }, f = (p) => {
    p.target === c.current && (o == null || o(p));
  };
  return /* @__PURE__ */ R.jsx(
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
Pk.displayName = "HModal";
const Mk = ({
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
  return /* @__PURE__ */ R.jsx("button", { onClick: a, type: "button", className: i, style: o, disabled: r, children: s || "모달 열기" });
};
Mk.displayName = "HModalOpenButton";
const Ck = ({
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
  return /* @__PURE__ */ R.jsx("button", { onClick: r, type: "button", className: i, style: o, children: s || "닫기" });
};
Ck.displayName = "HModalCloseButton";
const Dk = "button", kk = (e) => {
  const {
    isAuth: t,
    noAuthList: n,
    originalEventTarget: s = Dk,
    originalEventTargetEvent: i = null,
    onAuthVerificationResult: o,
    children: r
  } = e, a = mt(null), l = mt(void 0), c = mt(null), u = () => t ? !(n != null && n.includes(t)) : !0;
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
    if (!r || !ff(r)) return r;
    const p = r, g = p.props, m = i ? g[i] : g.onClick;
    return c.current = m || null, ry(p, {
      // ...가능하면 onClick 다시 세팅, etc.
    });
  })();
  return _t(() => {
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
  }, [t, n, s, i, o, d]), /* @__PURE__ */ R.jsx("div", { ref: a, children: f });
};
kk.displayName = "AuthVerifyWrapper";
function Ek(e) {
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
  } = e, p = rr(), g = n.some((y) => Ga(y, t)), m = () => {
    i(g ? n.filter((y) => !Ga(y, t)) : [...n, t]);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: r, children: [
    /* @__PURE__ */ R.jsx("label", { htmlFor: p, className: a, style: c, children: f }),
    /* @__PURE__ */ R.jsx(
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
Ek.displayName = "HInputCheckbox";
const Kk = ({ children: e, style: t, className: n }) => /* @__PURE__ */ R.jsx("div", { style: { position: "relative", ...t }, className: n, children: e }), Gk = ({ value: e, style: t, className: n }) => /* @__PURE__ */ R.jsx("div", { style: {
  width: `${e}%`,
  height: "100%",
  ...t
}, className: n });
function Ok(e) {
  return e.tag === "textarea";
}
function Rk(e) {
  return !e.tag || e.tag === "input";
}
const Lk = Fs((e, t) => {
  const { maxLength: n, onUpdateModelValue: s, value: i, className: o, style: r } = e, a = i && i.length > n ? i.slice(0, n) : i || "", [l, c] = bt(a.length);
  _t(() => {
    if (i && i.length > n) {
      const p = i.slice(0, n);
      c(p.length), s && s(p);
    } else
      c(i ? i.length : 0);
  }, [i, n, s]);
  const u = mt(null), h = mt(null), d = (p) => {
    let g = p.target.value;
    g.length > n && (g = g.slice(0, n), u.current && (u.current.value = g)), c(g.length), s && s(g);
  }, f = (p) => {
    let g = p.target.value;
    g.length > n && (g = g.slice(0, n), h.current && (h.current.value = g)), c(g.length), s && s(g);
  };
  return Ok(e) ? (Ts(t, () => h.current), /* @__PURE__ */ R.jsx("div", { className: o, style: r, children: e.children({
    currentLength: l,
    maxLength: n,
    inputRef: h,
    onChange: f,
    value: a
  }) })) : Rk(e) ? (Ts(t, () => u.current), /* @__PURE__ */ R.jsx("div", { className: o, style: r, children: e.children({
    currentLength: l,
    maxLength: n,
    inputRef: u,
    onChange: d,
    value: a
  }) })) : null;
});
Lk.displayName = "HTextCounterArea";
const Qm = Ee(void 0), Ik = ({
  children: e,
  value: t = null,
  currentTime: n = 0
}) => {
  const [s, i] = bt(null), [o, r] = bt("");
  _t(() => {
    i(t);
  }, [t]), _t(() => {
    if (s)
      if (s.type.startsWith("image/")) {
        const l = new FileReader();
        l.onloadend = () => {
          r(l.result);
        }, l.readAsDataURL(s);
      } else if (s.type.startsWith("video/")) {
        const l = URL.createObjectURL(s), c = document.createElement("video");
        c.style.position = "absolute", c.style.left = "-9999px", c.preload = "metadata", c.src = l, c.addEventListener("loadeddata", () => {
          c.currentTime = n;
        }), c.addEventListener("seeked", () => {
          const u = document.createElement("canvas");
          u.width = c.videoWidth / 2, u.height = c.videoHeight / 2;
          const h = u.getContext("2d");
          h ? (h.drawImage(c, 0, 0, u.width, u.height), r(u.toDataURL("image/png"))) : r(""), c.remove(), URL.revokeObjectURL(l);
        }), c.addEventListener("error", () => {
          r(""), c.remove(), URL.revokeObjectURL(l);
        }), document.body.appendChild(c), c.load();
      } else
        r("");
    else
      r("");
  }, [s, n]);
  const a = () => {
    i(null);
  };
  return /* @__PURE__ */ R.jsx(Qm.Provider, { value: { file: s, setFile: i }, children: e({ thumbnail: o, fileRemoveHandler: a }) });
};
Ik.displayName = "HSingleFileUploadArea";
const Fk = ({
  id: e,
  name: t,
  sizeLimit: n,
  accept: s,
  onSizeExceeded: i,
  onFileUploaded: o,
  onCorruptedFile: r,
  style: a,
  className: l
}) => {
  const c = mt(null), { file: u, setFile: h } = Wt(Qm);
  _t(() => {
    if (c.current && u) {
      const f = new DataTransfer();
      f.items.add(u), c.current.files = f.files;
    } else
      c.current && (c.current.value = "");
  }, [u]);
  const d = (f) => {
    const p = f.target.files;
    if (!p || p.length === 0) return;
    const g = p[0];
    if (g.size > n) {
      i(n, g.size), c.current && (c.current.value = "");
      return;
    }
    if (g.size === 0) {
      r(g), c.current && (c.current.value = "");
      return;
    }
    o(g), h(g);
  };
  return /* @__PURE__ */ R.jsx(
    "input",
    {
      type: "file",
      id: e,
      name: t,
      ref: c,
      accept: s,
      onChange: d,
      className: l,
      style: a
    }
  );
};
Fk.displayName = "HSingleFileUploadInput";
const Jm = Ee(void 0), Vk = ({ value: e, children: t }) => {
  const [n, s] = bt([]), [i, o] = bt([]);
  _t(() => {
    s(e);
  }, [e]), _t(() => {
    o([]), n.forEach((l) => {
      if (l.type.startsWith("image/")) {
        const c = new FileReader();
        c.onloadend = () => {
          o((u) => [
            ...u,
            { file: l, thumbnail: c.result }
          ]);
        }, c.readAsDataURL(l);
      } else
        o((c) => [...c, { file: l, thumbnail: "" }]);
    });
  }, [n]);
  const r = (l) => {
    s(n.filter((c) => c !== l));
  }, a = () => {
    s([]);
  };
  return /* @__PURE__ */ R.jsx(Jm.Provider, { value: { files: n, setFiles: s }, children: /* @__PURE__ */ R.jsx("div", { children: t({ uploadedFilesInfo: i, fileRemoveHandler: r, allFileRemoveHandler: a }) }) });
};
Vk.displayName = "HMultipleFileUploadArea";
const Nk = ({
  id: e,
  name: t,
  totalSizeLimit: n,
  lengthLimit: s,
  sizeLimit: i,
  accept: o,
  onTotalSizeExceeded: r,
  onLengthExceeded: a,
  onSizeExceeded: l,
  onFileUploaded: c,
  onCorruptedFile: u
}) => {
  const h = mt(null), d = Wt(Jm);
  if (!d)
    throw new Error("HMultipleFileUploadInput must be used within a HMultipleFileUploadArea");
  const { files: f, setFiles: p } = d;
  _t(() => {
    if (h.current && f.length > 0) {
      const m = new DataTransfer();
      f.forEach((y) => m.items.add(y)), h.current.files = m.files;
    } else h.current && (h.current.value = "");
  }, [f]);
  const g = (m) => {
    const y = m.target.files;
    if (!y || y.length === 0) return;
    const b = Array.from(y), S = s - f.length;
    let _ = b;
    b.length > S && (a(s, f.length + b.length), _ = b.slice(0, S));
    const x = [], w = _.filter((P) => P.size > i ? (x.push(P), !1) : !0);
    x.length > 0 && l(i, x);
    let A = f.reduce((P, M) => P + M.size, 0);
    const T = [];
    for (const P of w) {
      if (P.size === 0) {
        u(P);
        continue;
      }
      if (A + P.size > n) {
        r(n, A + P.size);
        break;
      }
      A += P.size, T.push(P);
    }
    if (T.length > 0) {
      const P = [...f, ...T];
      p(P), c(P);
    } else
      p([...f]);
    h.current && (h.current.value = "");
  };
  return /* @__PURE__ */ R.jsx(
    "input",
    {
      type: "file",
      id: e,
      name: t,
      multiple: !0,
      ref: h,
      accept: o,
      onChange: g
    }
  );
};
Nk.displayName = "HMultipleFileUploadInput";
export {
  hp as CALENDAR_TYPES,
  Mi as DATE_AREA_TYPE,
  zk as HBarChart,
  kk as HCheckAuth,
  G_ as HDropdownArea,
  q_ as HDropdownButton,
  X_ as HDropdownItem,
  Z_ as HDropdownItemButton,
  ow as HDropdownList,
  Ek as HInputCheckbox,
  Pk as HModal,
  Ck as HModalCloseButton,
  Mk as HModalOpenButton,
  Vk as HMultipleFileUploadArea,
  Nk as HMultipleFileUploadInput,
  Uk as HPieChart,
  Kk as HProgress,
  Gk as HProgressBar,
  ag as HScrollbars,
  __ as HSingleDatePickerArea,
  S_ as HSingleDatePickerCalendar,
  A_ as HSingleDatePickerCalendarArea,
  w_ as HSingleDatePickerCalendarDateButton,
  P_ as HSingleDatePickerCalendarMonth,
  T_ as HSingleDatePickerCalendarMonthArea,
  C_ as HSingleDatePickerCalendarMonthButton,
  E_ as HSingleDatePickerCalendarYear,
  I_ as HSingleDatePickerCalendarYearArea,
  N_ as HSingleDatePickerCalendarYearButton,
  W_ as HSingleDatePickerInput,
  M_ as HSingleDatePickerMonthButton,
  U_ as HSingleDatePickerMonthNextButton,
  k_ as HSingleDatePickerMonthPrevButton,
  Y_ as HSingleDatePickerMonthYearButton,
  R_ as HSingleDatePickerNextButton,
  L_ as HSingleDatePickerPrevButton,
  y_ as HSingleDatePickerRangeArea,
  F_ as HSingleDatePickerYearButton,
  V_ as HSingleDatePickerYearNextButton,
  K_ as HSingleDatePickerYearPrevButton,
  Ik as HSingleFileUploadArea,
  Fk as HSingleFileUploadInput,
  Lk as HTextCounterArea,
  _k as HToastPopup,
  vk as HToastPopupArea,
  wk as HToastPopupCloseButton,
  Sk as HToastPopupContainer,
  Tk as HTooltip,
  Ak as HTooltipArea,
  Wk as checkEqual
};
