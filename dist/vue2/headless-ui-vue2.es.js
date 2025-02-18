import jo, { defineComponent as J, ref as L, onMounted as Ia, onBeforeUnmount as Es, computed as Me, nextTick as Ue, watch as Ja, onUnmounted as Gr, provide as ne, inject as k, useAttrs as Ru, isRef as Ss, toRefs as Ui } from "vue";
const eb = (t, { props: e, attrs: a, on: r, scopedSlots: c }) => {
  const s = jo.extend({
    render: (_) => _(t, {
      props: e,
      attrs: a,
      on: r,
      scopedSlots: c ? c(_) : {}
    })
  }), n = new s();
  return n.$mount(), n;
}, $u = (t) => t.type === "touchstart", Hu = (t) => t.type === "touchmove", Nu = (t) => t.type === "mousemove", Ou = (t) => t.type === "mousedown", Fu = (t) => t.type === "click", nt = (t) => t instanceof HTMLElement, zu = (t) => t instanceof HTMLInputElement, ys = (t) => t !== null && t.elm !== void 0, Ao = (t) => {
  t.preventDefault(), t.stopPropagation();
  const e = t.currentTarget;
  if (!e || !nt(e))
    return;
  e.style.position = "relative", e.style.overflow = "hidden";
  const a = document.createElement("span");
  a.classList.add("ripple-effect");
  const r = e.getBoundingClientRect();
  Fu(t) && (a.style.left = `${t.clientX - r.left}px`, a.style.top = `${t.clientY - r.top}px`), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      e.appendChild(a), a.addEventListener("animationend", () => {
        a.remove();
      });
    });
  });
}, tb = () => ({
  bind(t) {
    t.addEventListener("click", Ao);
  },
  unbind(t) {
    t.removeEventListener("click", Ao);
  }
}), Uu = J({
  name: "HSingleDragXArea",
  props: {
    buttonPosition: {
      type: String,
      required: !0
    },
    buttonBackgroundColor: {
      type: String
    }
  },
  setup() {
    const t = L(!1), e = L(0), a = L(0), r = L(0), c = L(null), s = L(null), n = (v) => {
      v.type === "touchmove" && v instanceof TouchEvent ? v.touches.length === 1 && (a.value = e.value - v.touches[0].clientX, e.value = v.touches[0].clientX) : v.type === "mousemove" && v instanceof MouseEvent && (a.value = e.value - v.clientX, e.value = v.clientX), s.value instanceof HTMLElement && (r.value = r.value + a.value, s.value.style.width = `${r.value}px`);
    }, _ = () => {
      t.value = !1, document.removeEventListener("mouseup", _), document.removeEventListener("touchend", _), document.removeEventListener("mousemove", n), document.removeEventListener("touchmove", n);
    }, o = (v) => {
      t.value = !0, s.value instanceof HTMLElement && (r.value = s.value.getBoundingClientRect().width, v.type === "touchstart" && v instanceof TouchEvent ? v.touches.length === 1 && (e.value = v.touches[0].clientX) : v.type === "mousedown" && v instanceof MouseEvent && (e.value = v.clientX), document.addEventListener("mouseup", _), document.addEventListener("touchend", _), document.addEventListener("mousemove", n), document.addEventListener("touchmove", n));
    };
    return Ia(() => {
      c.value instanceof HTMLButtonElement && (c.value.addEventListener("mousedown", o), c.value.addEventListener("touchstart", o));
    }), Es(() => {
      c.value instanceof HTMLButtonElement && (c.value.removeEventListener("mousedown", o), c.value.removeEventListener("touchstart", o));
    }), {
      grabArea: c,
      dragArea: s
    };
  }
});
function Z(t, e, a, r, c, s, n, _) {
  var o = typeof t == "function" ? t.options : t;
  return e && (o.render = e, o.staticRenderFns = a, o._compiled = !0), s && (o._scopeId = "data-v-" + s), {
    exports: t,
    options: o
  };
}
var Wu = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { ref: "dragArea" }, [a("button", { ref: "grabArea", staticClass: "h-single-drag-area-btn", class: e.buttonPosition, style: { backgroundColor: e.buttonBackgroundColor }, attrs: { type: "button" } }, [a("span", { staticClass: "blind" }, [e._v("드래그 버튼")])]), e._t("default")], 2);
}, Yu = [], ju = /* @__PURE__ */ Z(
  Uu,
  Wu,
  Yu,
  !1,
  null,
  null
);
const ab = ju.exports, rb = ({ minWidth: t, backgroundColor: e }) => {
  const a = L(null), r = L(0), c = L(0), s = L(0), n = () => {
    if (!((a == null ? void 0 : a.value) instanceof HTMLElement))
      return {};
    const { top: o, left: v, right: w } = a.value.getBoundingClientRect();
    r.value = o < 0 ? 0 : o, c.value = v < 0 ? 0 : v, s.value = innerWidth - w;
  }, _ = Me(() => (n(), {
    position: "absolute",
    top: "0",
    right: 0,
    width: "100%",
    maxWidth: `calc(100% - ${c.value + s.value}px)`,
    height: "100%",
    backgroundColor: e,
    minWidth: t
  }));
  return {
    scrollArea: a,
    dragAreaXStyle: _
  };
};
function Qu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var gs = { exports: {} };
/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.3
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 20.07.2022
 */
var qu = gs.exports, Co;
function Gu() {
  return Co || (Co = 1, function(t) {
    (function(e, a) {
      t.exports = a(e, e.document, void 0);
    })(
      typeof window < "u" ? window : qu,
      function(e, a, r) {
        var c = "OverlayScrollbars", s = {
          o: "object",
          f: "function",
          a: "array",
          s: "string",
          b: "boolean",
          n: "number",
          u: "undefined",
          z: "null"
          //d : 'date',
          //e : 'error',
          //r : 'regexp',
          //y : 'symbol'
        }, n = {
          c: "class",
          s: "style",
          i: "id",
          l: "length",
          p: "prototype",
          ti: "tabindex",
          oH: "offsetHeight",
          cH: "clientHeight",
          sH: "scrollHeight",
          oW: "offsetWidth",
          cW: "clientWidth",
          sW: "scrollWidth",
          hOP: "hasOwnProperty",
          bCR: "getBoundingClientRect"
        }, _ = /* @__PURE__ */ function() {
          var d = {}, x = {}, i = ["-webkit-", "-moz-", "-o-", "-ms-"], p = ["WebKit", "Moz", "O", "MS"];
          function b(S) {
            return S.charAt(0).toUpperCase() + S.slice(1);
          }
          return {
            _cssPrefixes: i,
            _jsPrefixes: p,
            _cssProperty: function(S) {
              var T = x[S];
              if (x[n.hOP](S))
                return T;
              for (var se = b(S), ce = a.createElement("div")[n.s], O, ae = 0, G, ue; ae < i.length; ae++)
                for (ue = i[ae].replace(/-/g, ""), O = [
                  S,
                  //transition
                  i[ae] + S,
                  //-webkit-transition
                  ue + se,
                  //webkitTransition
                  b(ue) + se
                  //WebkitTransition
                ], G = 0; G < O[n.l]; G++)
                  if (ce[O[G]] !== r) {
                    T = O[G];
                    break;
                  }
              return x[S] = T, T;
            },
            _cssPropertyValue: function(S, T, se) {
              var ce = S + " " + T, O = x[ce];
              if (x[n.hOP](ce))
                return O;
              for (var ae = a.createElement("div")[n.s], G = T.split(" "), ue = se || "", Y = 0, I = -1, j; Y < G[n.l]; Y++)
                for (; I < _._cssPrefixes[n.l]; I++)
                  if (j = I < 0 ? G[Y] : _._cssPrefixes[I] + G[Y], ae.cssText = S + ":" + j + ue, ae[n.l]) {
                    O = j;
                    break;
                  }
              return x[ce] = O, O;
            },
            _jsAPI: function(S, T, se) {
              var ce = 0, O = d[S];
              if (!d[n.hOP](S)) {
                for (O = e[S]; ce < p[n.l]; ce++)
                  O = O || e[(T ? p[ce] : p[ce].toLowerCase()) + b(S)];
                d[S] = O;
              }
              return O || se;
            }
          };
        }(), o = function() {
          function d(i) {
            return i ? e.innerWidth || a.documentElement[n.cW] || a.body[n.cW] : e.innerHeight || a.documentElement[n.cH] || a.body[n.cH];
          }
          function x(i, p) {
            if (typeof i != s.f)
              throw "Can't bind function!";
            var b = n.p, S = Array[b].slice.call(arguments, 2), T = function() {
            }, se = function() {
              return i.apply(this instanceof T ? this : p, S.concat(Array[b].slice.call(arguments)));
            };
            return i[b] && (T[b] = i[b]), se[b] = new T(), se;
          }
          return {
            /**
             * Gets the current window width.
             * @returns {Number|number} The current window width in pixel.
             */
            wW: x(d, 0, !0),
            /**
             * Gets the current window height.
             * @returns {Number|number} The current window height in pixel.
             */
            wH: x(d, 0),
            /**
             * Gets the MutationObserver Object or undefined if not supported.
             * @returns {MutationObserver|*|undefined} The MutationsObserver Object or undefined.
             */
            mO: x(_._jsAPI, 0, "MutationObserver", !0),
            /**
             * Gets the ResizeObserver Object or undefined if not supported.
             * @returns {MutationObserver|*|undefined} The ResizeObserver Object or undefined.
             */
            rO: x(_._jsAPI, 0, "ResizeObserver", !0),
            /**
             * Gets the RequestAnimationFrame method or it's corresponding polyfill.
             * @returns {*|Function} The RequestAnimationFrame method or it's corresponding polyfill.
             */
            rAF: x(_._jsAPI, 0, "requestAnimationFrame", !1, function(i) {
              return e.setTimeout(i, 1e3 / 60);
            }),
            /**
             * Gets the CancelAnimationFrame method or it's corresponding polyfill.
             * @returns {*|Function} The CancelAnimationFrame method or it's corresponding polyfill.
             */
            cAF: x(_._jsAPI, 0, "cancelAnimationFrame", !1, function(i) {
              return e.clearTimeout(i);
            }),
            /**
             * Gets the current time.
             * @returns {number} The current time.
             */
            now: function() {
              return Date.now && Date.now() || (/* @__PURE__ */ new Date()).getTime();
            },
            /**
             * Stops the propagation of the given event.
             * @param event The event of which the propagation shall be stoped.
             */
            stpP: function(i) {
              i.stopPropagation ? i.stopPropagation() : i.cancelBubble = !0;
            },
            /**
             * Prevents the default action of the given event.
             * @param event The event of which the default action shall be prevented.
             */
            prvD: function(i) {
              i.preventDefault && i.cancelable ? i.preventDefault() : i.returnValue = !1;
            },
            /**
             * Gets the pageX and pageY values of the given mouse event.
             * @param event The mouse event of which the pageX and pageX shall be got.
             * @returns {{x: number, y: number}} x = pageX value, y = pageY value.
             */
            page: function(i) {
              i = i.originalEvent || i;
              var p = "page", b = "client", S = "X", T = "Y", se = i.target || i.srcElement || a, ce = se.ownerDocument || a, O = ce.documentElement, ae = ce.body;
              if (i.touches !== r) {
                var G = i.touches[0];
                return {
                  x: G[p + S],
                  y: G[p + T]
                };
              }
              return !i[p + S] && i[b + S] && i[b + S] != null ? {
                x: i[b + S] + (O && O.scrollLeft || ae && ae.scrollLeft || 0) - (O && O.clientLeft || ae && ae.clientLeft || 0),
                y: i[b + T] + (O && O.scrollTop || ae && ae.scrollTop || 0) - (O && O.clientTop || ae && ae.clientTop || 0)
              } : {
                x: i[p + S],
                y: i[p + T]
              };
            },
            /**
             * Gets the clicked mouse button of the given mouse event.
             * @param event The mouse event of which the clicked button shal be got.
             * @returns {number} The number of the clicked mouse button. (0 : none | 1 : leftButton | 2 : middleButton | 3 : rightButton)
             */
            mBtn: function(i) {
              var p = i.button;
              return !i.which && p !== r ? p & 1 ? 1 : p & 2 ? 3 : p & 4 ? 2 : 0 : i.which;
            },
            /**
             * Checks whether a item is in the given array and returns its index.
             * @param item The item of which the position in the array shall be determined.
             * @param arr The array.
             * @returns {number} The zero based index of the item or -1 if the item isn't in the array.
             */
            inA: function(i, p) {
              for (var b = 0; b < p[n.l]; b++)
                try {
                  if (p[b] === i)
                    return b;
                } catch {
                }
              return -1;
            },
            /**
             * Returns true if the given value is a array.
             * @param arr The potential array.
             * @returns {boolean} True if the given value is a array, false otherwise.
             */
            isA: function(i) {
              var p = Array.isArray;
              return p ? p(i) : this.type(i) == s.a;
            },
            /**
             * Determine the internal JavaScript [[Class]] of the given object.
             * @param obj The object of which the type shall be determined.
             * @returns {string} The type of the given object.
             */
            type: function(i) {
              return i === r || i === null ? i + "" : Object[n.p].toString.call(i).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
            },
            bind: x
            /**
            		                 * Gets the vendor-prefixed CSS property by the given name.
            		                 * For example the given name is "transform" and you're using a old Firefox browser then the returned value would be "-moz-transform".
            		                 * If the browser doesn't need a vendor-prefix, then the returned string is the given name.
            		                 * If the browser doesn't support the given property name at all (not even with a vendor-prefix) the returned value is null.
            		                 * @param propName The unprefixed CSS property name.
            		                 * @returns {string|null} The vendor-prefixed CSS property or null if the browser doesn't support the given CSS property.
            
            		                cssProp: function(propName) {
            		                    return VENDORS._cssProperty(propName);
            		                }
            		                */
          };
        }(), v = Math, w = e.jQuery, P = function() {
          var d = {
            p: v.PI,
            c: v.cos,
            s: v.sin,
            w: v.pow,
            t: v.sqrt,
            n: v.asin,
            a: v.abs,
            o: 1.70158
          };
          return {
            swing: function(x, i, p, b, S) {
              return 0.5 - d.c(x * d.p) / 2;
            },
            linear: function(x, i, p, b, S) {
              return x;
            },
            easeInQuad: function(x, i, p, b, S) {
              return b * (i /= S) * i + p;
            },
            easeOutQuad: function(x, i, p, b, S) {
              return -b * (i /= S) * (i - 2) + p;
            },
            easeInOutQuad: function(x, i, p, b, S) {
              return (i /= S / 2) < 1 ? b / 2 * i * i + p : -b / 2 * (--i * (i - 2) - 1) + p;
            },
            easeInCubic: function(x, i, p, b, S) {
              return b * (i /= S) * i * i + p;
            },
            easeOutCubic: function(x, i, p, b, S) {
              return b * ((i = i / S - 1) * i * i + 1) + p;
            },
            easeInOutCubic: function(x, i, p, b, S) {
              return (i /= S / 2) < 1 ? b / 2 * i * i * i + p : b / 2 * ((i -= 2) * i * i + 2) + p;
            },
            easeInQuart: function(x, i, p, b, S) {
              return b * (i /= S) * i * i * i + p;
            },
            easeOutQuart: function(x, i, p, b, S) {
              return -b * ((i = i / S - 1) * i * i * i - 1) + p;
            },
            easeInOutQuart: function(x, i, p, b, S) {
              return (i /= S / 2) < 1 ? b / 2 * i * i * i * i + p : -b / 2 * ((i -= 2) * i * i * i - 2) + p;
            },
            easeInQuint: function(x, i, p, b, S) {
              return b * (i /= S) * i * i * i * i + p;
            },
            easeOutQuint: function(x, i, p, b, S) {
              return b * ((i = i / S - 1) * i * i * i * i + 1) + p;
            },
            easeInOutQuint: function(x, i, p, b, S) {
              return (i /= S / 2) < 1 ? b / 2 * i * i * i * i * i + p : b / 2 * ((i -= 2) * i * i * i * i + 2) + p;
            },
            easeInSine: function(x, i, p, b, S) {
              return -b * d.c(i / S * (d.p / 2)) + b + p;
            },
            easeOutSine: function(x, i, p, b, S) {
              return b * d.s(i / S * (d.p / 2)) + p;
            },
            easeInOutSine: function(x, i, p, b, S) {
              return -b / 2 * (d.c(d.p * i / S) - 1) + p;
            },
            easeInExpo: function(x, i, p, b, S) {
              return i == 0 ? p : b * d.w(2, 10 * (i / S - 1)) + p;
            },
            easeOutExpo: function(x, i, p, b, S) {
              return i == S ? p + b : b * (-d.w(2, -10 * i / S) + 1) + p;
            },
            easeInOutExpo: function(x, i, p, b, S) {
              return i == 0 ? p : i == S ? p + b : (i /= S / 2) < 1 ? b / 2 * d.w(2, 10 * (i - 1)) + p : b / 2 * (-d.w(2, -10 * --i) + 2) + p;
            },
            easeInCirc: function(x, i, p, b, S) {
              return -b * (d.t(1 - (i /= S) * i) - 1) + p;
            },
            easeOutCirc: function(x, i, p, b, S) {
              return b * d.t(1 - (i = i / S - 1) * i) + p;
            },
            easeInOutCirc: function(x, i, p, b, S) {
              return (i /= S / 2) < 1 ? -b / 2 * (d.t(1 - i * i) - 1) + p : b / 2 * (d.t(1 - (i -= 2) * i) + 1) + p;
            },
            easeInElastic: function(x, i, p, b, S) {
              var T = d.o, se = 0, ce = b;
              return i == 0 ? p : (i /= S) == 1 ? p + b : (se || (se = S * 0.3), ce < d.a(b) ? (ce = b, T = se / 4) : T = se / (2 * d.p) * d.n(b / ce), -(ce * d.w(2, 10 * (i -= 1)) * d.s((i * S - T) * (2 * d.p) / se)) + p);
            },
            easeOutElastic: function(x, i, p, b, S) {
              var T = d.o, se = 0, ce = b;
              return i == 0 ? p : (i /= S) == 1 ? p + b : (se || (se = S * 0.3), ce < d.a(b) ? (ce = b, T = se / 4) : T = se / (2 * d.p) * d.n(b / ce), ce * d.w(2, -10 * i) * d.s((i * S - T) * (2 * d.p) / se) + b + p);
            },
            easeInOutElastic: function(x, i, p, b, S) {
              var T = d.o, se = 0, ce = b;
              return i == 0 ? p : (i /= S / 2) == 2 ? p + b : (se || (se = S * (0.3 * 1.5)), ce < d.a(b) ? (ce = b, T = se / 4) : T = se / (2 * d.p) * d.n(b / ce), i < 1 ? -0.5 * (ce * d.w(2, 10 * (i -= 1)) * d.s((i * S - T) * (2 * d.p) / se)) + p : ce * d.w(2, -10 * (i -= 1)) * d.s((i * S - T) * (2 * d.p) / se) * 0.5 + b + p);
            },
            easeInBack: function(x, i, p, b, S, T) {
              return T = T || d.o, b * (i /= S) * i * ((T + 1) * i - T) + p;
            },
            easeOutBack: function(x, i, p, b, S, T) {
              return T = T || d.o, b * ((i = i / S - 1) * i * ((T + 1) * i + T) + 1) + p;
            },
            easeInOutBack: function(x, i, p, b, S, T) {
              return T = T || d.o, (i /= S / 2) < 1 ? b / 2 * (i * i * (((T *= 1.525) + 1) * i - T)) + p : b / 2 * ((i -= 2) * i * (((T *= 1.525) + 1) * i + T) + 2) + p;
            },
            easeInBounce: function(x, i, p, b, S) {
              return b - this.easeOutBounce(x, S - i, 0, b, S) + p;
            },
            easeOutBounce: function(x, i, p, b, S) {
              var T = 7.5625;
              return (i /= S) < 1 / 2.75 ? b * (T * i * i) + p : i < 2 / 2.75 ? b * (T * (i -= 1.5 / 2.75) * i + 0.75) + p : i < 2.5 / 2.75 ? b * (T * (i -= 2.25 / 2.75) * i + 0.9375) + p : b * (T * (i -= 2.625 / 2.75) * i + 0.984375) + p;
            },
            easeInOutBounce: function(x, i, p, b, S) {
              return i < S / 2 ? this.easeInBounce(x, i * 2, 0, b, S) * 0.5 + p : this.easeOutBounce(x, i * 2 - S, 0, b, S) * 0.5 + b * 0.5 + p;
            }
          };
        }(), A = function() {
          var d = /[^\x20\t\r\n\f]+/g, x = " ", i = "", p = "scrollLeft", b = "scrollTop", S = [], T = o.type, se = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          };
          function ce() {
            var f, y, h, C, $, ie, ve = arguments[0] || {}, ge = 1, N = arguments[n.l], q = !1;
            for (T(ve) == s.b && (q = ve, ve = arguments[1] || {}, ge = 2), T(ve) != s.o && !T(ve) == s.f && (ve = {}), N === ge && (ve = Ce, --ge); ge < N; ge++)
              if (($ = arguments[ge]) != null)
                for (C in $)
                  f = ve[C], h = $[C], ve !== h && (q && h && (ue(h) || (y = o.isA(h))) ? (y ? (y = !1, ie = f && o.isA(f) ? f : []) : ie = f && ue(f) ? f : {}, ve[C] = ce(q, ie, h)) : h !== r && (ve[C] = h));
            return ve;
          }
          function O(f, y, h) {
            for (var C = h || 0; C < y[n.l]; C++)
              if (y[C] === f)
                return C;
            return -1;
          }
          function ae(f) {
            return T(f) == s.f;
          }
          function G(f) {
            for (var y in f)
              return !1;
            return !0;
          }
          function ue(f) {
            if (!f || T(f) != s.o)
              return !1;
            var y, h = n.p, C = Object[h].hasOwnProperty, $ = C.call(f, "constructor"), ie = f.constructor && f.constructor[h] && C.call(f.constructor[h], "isPrototypeOf");
            if (f.constructor && !$ && !ie)
              return !1;
            for (y in f)
              ;
            return T(y) == s.u || C.call(f, y);
          }
          function Y(f, y) {
            var h = 0;
            if (I(f))
              for (; h < f[n.l] && y.call(f[h], h, f[h]) !== !1; h++)
                ;
            else
              for (h in f)
                if (y.call(f[h], h, f[h]) === !1)
                  break;
            return f;
          }
          function I(f) {
            var y = !!f && [n.l] in f && f[n.l], h = T(f);
            return ae(h) ? !1 : h == s.a || y === 0 || T(y) == s.n && y > 0 && y - 1 in f;
          }
          function j(f) {
            var y = f.match(d) || [];
            return y.join(x);
          }
          function K(f, y) {
            for (var h = (f.parentNode || a).querySelectorAll(y) || [], C = h[n.l]; C--; )
              if (h[C] == f)
                return !0;
            return !1;
          }
          function ee(f, y, h) {
            if (o.isA(h))
              for (var C = 0; C < h[n.l]; C++)
                ee(f, y, h[C]);
            else T(h) == s.s ? f.insertAdjacentHTML(y, h) : f.insertAdjacentElement(y, h.nodeType ? h : h[0]);
          }
          function me(f, y, h) {
            try {
              f[n.s][y] !== r && (f[n.s][y] = St(y, h));
            } catch {
            }
          }
          function St(f, y) {
            return !se[f.toLowerCase()] && T(y) == s.n && (y += "px"), y;
          }
          function Ae(f, y) {
            var h, C;
            y !== !1 && f.q.splice(0, 1), f.q[n.l] > 0 ? (C = f.q[0], V(f.el, C.props, C.duration, C.easing, C.complete, !0)) : (h = O(f, S), h > -1 && S.splice(h, 1));
          }
          function Xe(f, y, h) {
            y === p || y === b ? f[y] = h : me(f, y, h);
          }
          function V(f, y, h, C, $, ie) {
            var ve = ue(h), ge = {}, N = {}, q = 0, Ee, W, F, re, fe, D;
            for (ve ? (C = h.easing, h.start, F = h.progress, re = h.step, fe = h.specialEasing, $ = h.complete, D = h.duration) : D = h, fe = fe || {}, D = D || 400, C = C || "swing", ie = ie || !1; q < S[n.l]; q++)
              if (S[q].el === f) {
                W = S[q];
                break;
              }
            W || (W = {
              el: f,
              q: []
            }, S.push(W));
            for (Ee in y)
              Ee === p || Ee === b ? ge[Ee] = f[Ee] : ge[Ee] = Ce(f).css(Ee);
            for (Ee in ge)
              ge[Ee] !== y[Ee] && y[Ee] !== r && (N[Ee] = y[Ee]);
            if (G(N))
              ie && Ae(W);
            else {
              var R, B, te, Ye, pt, ke, qe, sa, wt, Tt = ie ? 0 : O(Fe, W.q), Fe = {
                props: N,
                duration: ve ? h : D,
                easing: C,
                complete: $
              };
              if (Tt === -1 && (Tt = W.q[n.l], W.q.push(Fe)), Tt === 0)
                if (D > 0)
                  qe = o.now(), sa = function() {
                    R = o.now(), wt = R - qe, B = Fe.stop || wt >= D, te = 1 - (v.max(0, qe + D - R) / D || 0);
                    for (Ee in N)
                      Ye = parseFloat(ge[Ee]), pt = parseFloat(N[Ee]), ke = (pt - Ye) * P[fe[Ee] || C](te, te * D, 0, 1, D) + Ye, Xe(f, Ee, ke), ae(re) && re(ke, {
                        elem: f,
                        prop: Ee,
                        start: Ye,
                        now: ke,
                        end: pt,
                        pos: te,
                        options: {
                          easing: C,
                          speacialEasing: fe,
                          duration: D,
                          complete: $,
                          step: re
                        },
                        startTime: qe
                      });
                    ae(F) && F({}, te, v.max(0, D - wt)), B ? (Ae(W), ae($) && $()) : Fe.frame = o.rAF()(sa);
                  }, Fe.frame = o.rAF()(sa);
                else {
                  for (Ee in N)
                    Xe(f, Ee, N[Ee]);
                  Ae(W);
                }
            }
          }
          function De(f, y, h) {
            for (var C, $, ie, ve = 0; ve < S[n.l]; ve++)
              if (C = S[ve], C.el === f) {
                if (C.q[n.l] > 0) {
                  if ($ = C.q[0], $.stop = !0, o.cAF()($.frame), C.q.splice(0, 1), h)
                    for (ie in $.props)
                      Xe(f, ie, $.props[ie]);
                  y ? C.q = [] : Ae(C, !1);
                }
                break;
              }
          }
          function Ie(f) {
            return !!(f[n.oW] || f[n.oH] || f.getClientRects()[n.l]);
          }
          function Ce(f) {
            if (arguments[n.l] === 0)
              return this;
            var y = new Ce(), h = f, C = 0, $, ie;
            if (T(f) == s.s)
              for (h = [], f.charAt(0) === "<" ? (ie = a.createElement("div"), ie.innerHTML = f, $ = ie.children) : $ = a.querySelectorAll(f); C < $[n.l]; C++)
                h.push($[C]);
            if (h) {
              for (T(h) != s.s && (!I(h) || h === e || h === h.self) && (h = [h]), C = 0; C < h[n.l]; C++)
                y[C] = h[C];
              y[n.l] = h[n.l];
            }
            return y;
          }
          return Ce[n.p] = {
            //EVENTS:
            on: function(f, y) {
              f = (f || i).match(d) || [i];
              var h = f[n.l], C = 0, $;
              return this.each(function() {
                $ = this;
                try {
                  if ($.addEventListener)
                    for (; C < h; C++)
                      $.addEventListener(f[C], y);
                  else if ($.detachEvent)
                    for (; C < h; C++)
                      $.attachEvent("on" + f[C], y);
                } catch {
                }
              });
            },
            off: function(f, y) {
              f = (f || i).match(d) || [i];
              var h = f[n.l], C = 0, $;
              return this.each(function() {
                $ = this;
                try {
                  if ($.removeEventListener)
                    for (; C < h; C++)
                      $.removeEventListener(f[C], y);
                  else if ($.detachEvent)
                    for (; C < h; C++)
                      $.detachEvent("on" + f[C], y);
                } catch {
                }
              });
            },
            one: function(f, y) {
              return f = (f || i).match(d) || [i], this.each(function() {
                var h = Ce(this);
                Ce.each(f, function(C, $) {
                  var ie = function(ve) {
                    y.call(this, ve), h.off($, ie);
                  };
                  h.on($, ie);
                });
              });
            },
            trigger: function(f) {
              var y, h;
              return this.each(function() {
                y = this, a.createEvent ? (h = a.createEvent("HTMLEvents"), h.initEvent(f, !0, !1), y.dispatchEvent(h)) : y.fireEvent("on" + f);
              });
            },
            //DOM NODE INSERTING / REMOVING:
            append: function(f) {
              return this.each(function() {
                ee(this, "beforeend", f);
              });
            },
            prepend: function(f) {
              return this.each(function() {
                ee(this, "afterbegin", f);
              });
            },
            before: function(f) {
              return this.each(function() {
                ee(this, "beforebegin", f);
              });
            },
            after: function(f) {
              return this.each(function() {
                ee(this, "afterend", f);
              });
            },
            remove: function() {
              return this.each(function() {
                var f = this, y = f.parentNode;
                y != null && y.removeChild(f);
              });
            },
            unwrap: function() {
              var f = [], y, h, C;
              for (this.each(function() {
                C = this.parentNode, O(C, f) === -1 && f.push(C);
              }), y = 0; y < f[n.l]; y++) {
                for (h = f[y], C = h.parentNode; h.firstChild; )
                  C.insertBefore(h.firstChild, h);
                C.removeChild(h);
              }
              return this;
            },
            wrapAll: function(f) {
              for (var y, h = this, C = Ce(f)[0], $ = C, ie = h[0].parentNode, ve = h[0].previousSibling; $.childNodes[n.l] > 0; )
                $ = $.childNodes[0];
              for (y = 0; h[n.l] - y; $.firstChild === h[0] && y++)
                $.appendChild(h[y]);
              var ge = ve ? ve.nextSibling : ie.firstChild;
              return ie.insertBefore(C, ge), this;
            },
            wrapInner: function(f) {
              return this.each(function() {
                var y = Ce(this), h = y.contents();
                h[n.l] ? h.wrapAll(f) : y.append(f);
              });
            },
            wrap: function(f) {
              return this.each(function() {
                Ce(this).wrapAll(f);
              });
            },
            //DOM NODE MANIPULATION / INFORMATION:
            css: function(f, y) {
              var h, C, $, ie = e.getComputedStyle;
              return T(f) == s.s ? y === r ? (h = this[0], $ = ie ? ie(h, null) : h.currentStyle[f], ie ? $ != null ? $.getPropertyValue(f) : h[n.s][f] : $) : this.each(function() {
                me(this, f, y);
              }) : this.each(function() {
                for (C in f)
                  me(this, C, f[C]);
              });
            },
            hasClass: function(f) {
              for (var y, h = 0, C = x + f + x, $; y = this[h++]; ) {
                if ($ = y.classList, $ && $.contains(f))
                  return !0;
                if (y.nodeType === 1 && (x + j(y.className + i) + x).indexOf(C) > -1)
                  return !0;
              }
              return !1;
            },
            addClass: function(f) {
              var y, h, C, $, ie, ve, ge, N, q = 0, Ee = 0;
              if (f) {
                for (y = f.match(d) || []; h = this[q++]; )
                  if (N = h.classList, ge === r && (ge = N !== r), ge)
                    for (; ie = y[Ee++]; )
                      N.add(ie);
                  else if ($ = h.className + i, C = h.nodeType === 1 && x + j($) + x, C) {
                    for (; ie = y[Ee++]; )
                      C.indexOf(x + ie + x) < 0 && (C += ie + x);
                    ve = j(C), $ !== ve && (h.className = ve);
                  }
              }
              return this;
            },
            removeClass: function(f) {
              var y, h, C, $, ie, ve, ge, N, q = 0, Ee = 0;
              if (f) {
                for (y = f.match(d) || []; h = this[q++]; )
                  if (N = h.classList, ge === r && (ge = N !== r), ge)
                    for (; ie = y[Ee++]; )
                      N.remove(ie);
                  else if ($ = h.className + i, C = h.nodeType === 1 && x + j($) + x, C) {
                    for (; ie = y[Ee++]; )
                      for (; C.indexOf(x + ie + x) > -1; )
                        C = C.replace(x + ie + x, x);
                    ve = j(C), $ !== ve && (h.className = ve);
                  }
              }
              return this;
            },
            hide: function() {
              return this.each(function() {
                this[n.s].display = "none";
              });
            },
            show: function() {
              return this.each(function() {
                this[n.s].display = "block";
              });
            },
            attr: function(f, y) {
              for (var h = 0, C; C = this[h++]; ) {
                if (y === r)
                  return C.getAttribute(f);
                C.setAttribute(f, y);
              }
              return this;
            },
            removeAttr: function(f) {
              return this.each(function() {
                this.removeAttribute(f);
              });
            },
            offset: function() {
              var f = this[0], y = f[n.bCR](), h = e.pageXOffset || a.documentElement[p], C = e.pageYOffset || a.documentElement[b];
              return {
                top: y.top + C,
                left: y.left + h
              };
            },
            position: function() {
              var f = this[0];
              return {
                top: f.offsetTop,
                left: f.offsetLeft
              };
            },
            scrollLeft: function(f) {
              for (var y = 0, h; h = this[y++]; ) {
                if (f === r)
                  return h[p];
                h[p] = f;
              }
              return this;
            },
            scrollTop: function(f) {
              for (var y = 0, h; h = this[y++]; ) {
                if (f === r)
                  return h[b];
                h[b] = f;
              }
              return this;
            },
            val: function(f) {
              var y = this[0];
              return f ? (y.value = f, this) : y.value;
            },
            //DOM TRAVERSAL / FILTERING:
            first: function() {
              return this.eq(0);
            },
            last: function() {
              return this.eq(-1);
            },
            eq: function(f) {
              return Ce(this[f >= 0 ? f : this[n.l] + f]);
            },
            find: function(f) {
              var y = [], h;
              return this.each(function() {
                var C = this, $ = C.querySelectorAll(f);
                for (h = 0; h < $[n.l]; h++)
                  y.push($[h]);
              }), Ce(y);
            },
            children: function(f) {
              var y = [], h, C, $;
              return this.each(function() {
                for (C = this.children, $ = 0; $ < C[n.l]; $++)
                  h = C[$], f ? (h.matches && h.matches(f) || K(h, f)) && y.push(h) : y.push(h);
              }), Ce(y);
            },
            parent: function(f) {
              var y = [], h;
              return this.each(function() {
                h = this.parentNode, (!f || Ce(h).is(f)) && y.push(h);
              }), Ce(y);
            },
            is: function(f) {
              var y, h;
              for (h = 0; h < this[n.l]; h++) {
                if (y = this[h], f === ":visible")
                  return Ie(y);
                if (f === ":hidden")
                  return !Ie(y);
                if (y.matches && y.matches(f) || K(y, f))
                  return !0;
              }
              return !1;
            },
            contents: function() {
              var f = [], y, h;
              return this.each(function() {
                for (y = this.childNodes, h = 0; h < y[n.l]; h++)
                  f.push(y[h]);
              }), Ce(f);
            },
            each: function(f) {
              return Y(this, f);
            },
            //ANIMATION:
            animate: function(f, y, h, C) {
              return this.each(function() {
                V(this, f, y, h, C);
              });
            },
            stop: function(f, y) {
              return this.each(function() {
                De(this, f, y);
              });
            }
          }, ce(Ce, {
            extend: ce,
            inArray: O,
            isEmptyObject: G,
            isPlainObject: ue,
            each: Y
          }), Ce;
        }(), z = /* @__PURE__ */ function() {
          var d = [], x = "__overlayScrollbars__";
          return function(i, p) {
            var b = arguments[n.l];
            if (b < 1)
              return d;
            if (p)
              i[x] = p, d.push(i);
            else {
              var S = o.inA(i, d);
              if (S > -1)
                if (b > 1)
                  delete i[x], d.splice(S, 1);
                else
                  return d[S][x];
            }
          };
        }(), oe = function() {
          var d, x, i, p = [], b = function() {
            var O = o.type, ae = [
              s.b,
              //boolean
              s.n,
              //number
              s.s,
              //string
              s.a,
              //array
              s.o,
              //object
              s.f,
              //function
              s.z
              //null
            ], G = " ", ue = ":", Y = [s.z, s.s], I = s.n, j = [s.z, s.b], K = [!0, s.b], ee = [!1, s.b], me = [null, [s.z, s.f]], St = [["img"], [s.s, s.a, s.z]], Ae = [["style", "class"], [s.s, s.a, s.z]], Xe = "n:none b:both h:horizontal v:vertical", V = "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden", De = "v:visible h:hidden a:auto", Ie = "n:never s:scroll l:leave m:move", Ce = {
              className: ["os-theme-dark", Y],
              //null || string
              resize: ["none", Xe],
              //none || both  || horizontal || vertical || n || b || h || v
              sizeAutoCapable: K,
              //true || false
              clipAlways: K,
              //true || false
              normalizeRTL: K,
              //true || false
              paddingAbsolute: ee,
              //true || false
              autoUpdate: [null, j],
              //true || false || null
              autoUpdateInterval: [33, I],
              //number
              updateOnLoad: St,
              //string || array || null
              nativeScrollbarsOverlaid: {
                showNativeScrollbars: ee,
                //true || false
                initialize: K
                //true || false
              },
              overflowBehavior: {
                x: ["scroll", V],
                //visible-hidden  || visible-scroll || hidden || scroll || v-h || v-s || h || s
                y: ["scroll", V]
                //visible-hidden  || visible-scroll || hidden || scroll || v-h || v-s || h || s
              },
              scrollbars: {
                visibility: ["auto", De],
                //visible || hidden || auto || v || h || a
                autoHide: ["never", Ie],
                //never || scroll || leave || move || n || s || l || m
                autoHideDelay: [800, I],
                //number
                dragScrolling: K,
                //true || false
                clickScrolling: ee,
                //true || false
                touchSupport: K,
                //true || false
                snapHandle: ee
                //true || false
              },
              textarea: {
                dynWidth: ee,
                //true || false
                dynHeight: ee,
                //true || false
                inheritedAttrs: Ae
                //string || array || null
              },
              callbacks: {
                onInitialized: me,
                //null || function
                onInitializationWithdrawn: me,
                //null || function
                onDestroyed: me,
                //null || function
                onScrollStart: me,
                //null || function
                onScroll: me,
                //null || function
                onScrollStop: me,
                //null || function
                onOverflowChanged: me,
                //null || function
                onOverflowAmountChanged: me,
                //null || function
                onDirectionChanged: me,
                //null || function
                onContentSizeChanged: me,
                //null || function
                onHostSizeChanged: me,
                //null || function
                onUpdated: me
                //null || function
              }
            }, f = function(y) {
              var h = function(C) {
                var $, ie, ve;
                for ($ in C)
                  C[n.hOP]($) && (ie = C[$], ve = O(ie), ve == s.a ? C[$] = ie[y ? 1 : 0] : ve == s.o && (C[$] = h(ie)));
                return C;
              };
              return h(A.extend(!0, {}, Ce));
            };
            return {
              _defaults: f(),
              _template: f(!0),
              /**
               * Validates the passed object by the passed template.
               * @param obj The object which shall be validated.
               * @param template The template which defines the allowed values and types.
               * @param writeErrors True if errors shall be logged to the console.
               * @param diffObj If a object is passed then only valid differences to this object will be returned.
               * @returns {{}} A object which contains two objects called "default" and "prepared" which contains only the valid properties of the passed original object and discards not different values compared to the passed diffObj.
               */
              _validate: function(y, h, C, $) {
                var ie = {}, ve = {}, ge = A.extend(!0, {}, y), N = A.inArray, q = A.isEmptyObject, Ee = function(W, F, re, fe, D, R) {
                  for (var B in F)
                    if (F[n.hOP](B) && W[n.hOP](B)) {
                      var te = !1, Ye = !1, pt = F[B], ke = O(pt), qe = ke == s.o, sa = o.isA(pt) ? pt : [pt], wt = re[B], Tt = W[B], Fe = O(Tt), ia = R ? R + "." : "", mr = 'The option "' + ia + B + `" wasn't set, because`, ft = [], je = [], ta, Ze, It, Gt, ze, Wt, er, Se;
                      if (wt = wt === r ? {} : wt, qe && Fe == s.o)
                        fe[B] = {}, D[B] = {}, Ee(Tt, pt, wt, fe[B], D[B], ia + B), A.each([W, fe, D], function(it, aa) {
                          q(aa[B]) && delete aa[B];
                        });
                      else if (!qe) {
                        for (Wt = 0; Wt < sa[n.l]; Wt++)
                          if (ze = sa[Wt], ke = O(ze), It = ke == s.s && N(ze, ae) === -1, It)
                            for (ft.push(s.s), ta = ze.split(G), je = je.concat(ta), er = 0; er < ta[n.l]; er++) {
                              for (Ze = ta[er].split(ue), Gt = Ze[0], Se = 0; Se < Ze[n.l]; Se++)
                                if (Tt === Ze[Se]) {
                                  te = !0;
                                  break;
                                }
                              if (te)
                                break;
                            }
                          else if (ft.push(ze), Fe === ze) {
                            te = !0;
                            break;
                          }
                        te ? (Ye = Tt !== wt, Ye && (fe[B] = Tt), (It ? N(wt, Ze) < 0 : Ye) && (D[B] = It ? Gt : Tt)) : C && console.warn(mr + " it doesn't accept the type [ " + Fe.toUpperCase() + ' ] with the value of "' + Tt + `".\r
Accepted types are: [ ` + ft.join(", ").toUpperCase() + " ]." + (je[length] > 0 ? `\r
Valid strings are: [ ` + je.join(", ").split(ue).join(", ") + " ]." : "")), delete W[B];
                      }
                    }
                };
                return Ee(ge, h, $ || {}, ie, ve), !q(ge) && C && console.warn(`The following options are discarded due to invalidity:\r
` + e.JSON.stringify(ge, null, 2)), {
                  _default: ie,
                  _prepared: ve
                };
              }
            };
          }();
          function S() {
            x || (x = new T(b._defaults)), i || (i = new se(x));
          }
          function T(O) {
            var ae = this, G = "overflow", ue = "hidden", Y = "scroll", I = A("body"), j = A('<div id="os-dummy-scrollbar-size"><div></div></div>'), K = j[0], ee = A(j.children("div").eq(0));
            I.append(j), j.hide().show();
            var me = Xe(K), St = {
              x: me.x === 0,
              y: me.y === 0
            }, Ae = function() {
              var V = e.navigator.userAgent, De = "indexOf", Ie = "substring", Ce = V[De]("MSIE "), f = V[De]("Trident/"), y = V[De]("Edge/"), h = V[De]("rv:"), C, $ = parseInt;
              return Ce > 0 ? C = $(V[Ie](Ce + 5, V[De](".", Ce)), 10) : f > 0 ? C = $(V[Ie](h + 3, V[De](".", h)), 10) : y > 0 && (C = $(V[Ie](y + 5, V[De](".", y)), 10)), C;
            }();
            A.extend(ae, {
              defaultOptions: O,
              msie: Ae,
              autoUpdateLoop: !1,
              autoUpdateRecommended: !o.mO(),
              nativeScrollbarSize: me,
              nativeScrollbarIsOverlaid: St,
              nativeScrollbarStyling: function() {
                var V = !1;
                j.addClass("os-viewport-native-scrollbars-invisible");
                try {
                  V = j.css("scrollbar-width") === "none" && (Ae > 9 || !Ae) || e.getComputedStyle(K, "::-webkit-scrollbar").getPropertyValue("display") === "none";
                } catch {
                }
                return V;
              }(),
              overlayScrollbarDummySize: { x: 30, y: 30 },
              cssCalc: _._cssPropertyValue("width", "calc", "(1px)") || null,
              restrictedMeasuring: function() {
                j.css(G, ue);
                var V = {
                  w: K[n.sW],
                  h: K[n.sH]
                };
                j.css(G, "visible");
                var De = {
                  w: K[n.sW],
                  h: K[n.sH]
                };
                return V.w - De.w !== 0 || V.h - De.h !== 0;
              }(),
              rtlScrollBehavior: function() {
                j.css({ "overflow-y": ue, "overflow-x": Y, direction: "rtl" }).scrollLeft(0);
                var V = j.offset(), De = ee.offset();
                j.scrollLeft(-999);
                var Ie = ee.offset();
                return {
                  //origin direction = determines if the zero scroll position is on the left or right side
                  //'i' means 'invert' (i === true means that the axis must be inverted to be correct)
                  //true = on the left side
                  //false = on the right side
                  i: V.left === De.left,
                  //negative = determines if the maximum scroll is positive or negative
                  //'n' means 'negate' (n === true means that the axis must be negated to be correct)
                  //true = negative
                  //false = positive
                  n: De.left !== Ie.left
                };
              }(),
              supportTransform: !!_._cssProperty("transform"),
              supportTransition: !!_._cssProperty("transition"),
              supportPassiveEvents: function() {
                var V = !1;
                try {
                  e.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                      V = !0;
                    }
                  }));
                } catch {
                }
                return V;
              }(),
              supportResizeObserver: !!o.rO(),
              supportMutationObserver: !!o.mO()
            }), j.removeAttr(n.s).remove(), function() {
              if (St.x && St.y)
                return;
              var V = v.abs, De = o.wW(), Ie = o.wH(), Ce = h(), f = function() {
                if (z().length > 0) {
                  var C = o.wW(), $ = o.wH(), ie = C - De, ve = $ - Ie;
                  if (ie === 0 && ve === 0)
                    return;
                  var ge = v.round(C / (De / 100)), N = v.round($ / (Ie / 100)), q = V(ie), Ee = V(ve), W = V(ge), F = V(N), re = h(), fe = q > 2 && Ee > 2, D = !y(W, F), R = re !== Ce && Ce > 0, B = fe && D && R, te = ae.nativeScrollbarSize, Ye;
                  B && (I.append(j), Ye = ae.nativeScrollbarSize = Xe(j[0]), j.remove(), (te.x !== Ye.x || te.y !== Ye.y) && A.each(z(), function() {
                    z(this) && z(this).update("zoom");
                  })), De = C, Ie = $, Ce = re;
                }
              };
              function y(C, $) {
                var ie = V(C), ve = V($);
                return !(ie === ve || ie + 1 === ve || ie - 1 === ve);
              }
              function h() {
                var C = e.screen.deviceXDPI || 0, $ = e.screen.logicalXDPI || 1;
                return e.devicePixelRatio || C / $;
              }
              A(e).on("resize", f);
            }();
            function Xe(V) {
              return {
                x: V[n.oH] - V[n.cH],
                y: V[n.oW] - V[n.cW]
              };
            }
          }
          function se(O) {
            var ae = this, G = A.inArray, ue = o.now, Y = "autoUpdate", I = Y + "Interval", j = n.l, K = [], ee = [], me = !1, St = 33, Ae = St, Xe = ue(), V, De = function() {
              if (K[j] > 0 && me) {
                V = o.rAF()(function() {
                  De();
                });
                var Ie = ue(), Ce = Ie - Xe, f, y, h, C, $, ie;
                if (Ce > Ae) {
                  Xe = Ie - Ce % Ae, f = St;
                  for (var ve = 0; ve < K[j]; ve++)
                    y = K[ve], y !== r && (h = y.options(), C = h[Y], $ = v.max(1, h[I]), ie = ue(), (C === !0 || C === null) && ie - ee[ve] > $ && (y.update("auto"), ee[ve] = new Date(ie += $)), f = v.max(1, v.min(f, $)));
                  Ae = f;
                }
              } else
                Ae = St;
            };
            ae.add = function(Ie) {
              G(Ie, K) === -1 && (K.push(Ie), ee.push(ue()), K[j] > 0 && !me && (me = !0, O.autoUpdateLoop = me, De()));
            }, ae.remove = function(Ie) {
              var Ce = G(Ie, K);
              Ce > -1 && (ee.splice(Ce, 1), K.splice(Ce, 1), K[j] === 0 && me && (me = !1, O.autoUpdateLoop = me, V !== r && (o.cAF()(V), V = -1)));
            };
          }
          function ce(O, ae, G, ue, Y) {
            var I = o.type, j = A.inArray, K = A.each, ee = new d(), me = A[n.p];
            if (!lo(O))
              return;
            if (z(O)) {
              var St = z(O);
              return St.options(ae), St;
            }
            var Ae, Xe, V, De, Ie, Ce, f, y, h, C, $, ie, ve, ge, N, q, Ee, W, F, re, fe, D, R, B, te, Ye, pt, ke, qe, sa = {}, wt = {}, Tt = {}, Fe = {}, ia = {}, mr = "-hidden", ft = "margin-", je = "padding-", ta = "border-", Ze = "top", It = "right", Gt = "bottom", ze = "left", Wt = "min-", er = "max-", Se = "width", it = "height", aa = "float", ye = "", At = "auto", Is = "sync", la = "scroll", tr = "100%", fn = "x", dn = "y", oa = ".", Mt = " ", Ms = "scrollbar", ks = "-horizontal", Bs = "-vertical", kt = la + "Left", Bt = la + "Top", Zr = "mousedown touchstart", _n = "mouseup touchend touchcancel", hn = "mousemove touchmove", sl = "mouseenter", il = "mouseleave", Rs = "keydown", $s = "keyup", pn = "selectstart", Hs = "transitionend webkitTransitionEnd oTransitionEnd", Ns = "__overlayScrollbarsRO__", Vt = "os-", ll = Vt + "html", Yt = Vt + "host", Yn = Yt + "-foreign", Os = Yt + "-textarea", ol = Yt + "-" + Ms + ks + mr, cl = Yt + "-" + Ms + Bs + mr, ul = Yt + "-transition", vl = Yt + "-rtl", Fs = Yt + "-resize-disabled", jn = Yt + "-scrolling", mn = Yt + "-overflow", mn = Yt + "-overflow", fl = mn + "-x", dl = mn + "-y", Qn = Vt + "textarea", eu = Qn + "-cover", zs = Vt + "padding", qn = Vt + "viewport", Us = qn + "-native-scrollbars-invisible", _l = qn + "-native-scrollbars-overlaid", Ws = Vt + "content", tu = Vt + "content-arrange", au = Vt + "content-glue", ru = Vt + "size-auto-observer", Ir = Vt + "resize-observer", Gn = Vt + "resize-observer-item", hl = Gn + "-final", Vn = Vt + "text-inherit", ar = Vt + Ms, pl = ar + "-track", ml = pl + "-off", gl = ar + "-handle", yl = gl + "-off", bl = ar + "-unusable", gn = ar + "-" + At + mr, Ys = ar + "-corner", yn = Ys + "-resize", Al = yn + "-both", Cl = yn + ks, xl = yn + Bs, nu = ar + ks, su = ar + Bs, Mr = Vt + "dragging", Xn = Vt + "theme-none", js = [
              Us,
              _l,
              ml,
              yl,
              bl,
              gn,
              yn,
              Al,
              Cl,
              xl,
              Mr
            ].join(Mt), Qs = [], qs = [n.ti], El, bn, Ct, rr = {}, iu = "added removed on contract", Sl, kr = {}, wl, Tl = 42, Gs = "load", Br = [], Zn, Oa, Kr, Rr, Re, be, Ma, ka, pa, Le, ot, nr, jt, sr, Xt, $r, Kn, An, Hr, Jn, Cn, xn, Jr, gr, ca, es, ts, yr, Nr, ma, En, Or, Dl, Fa, Sn, ga, br, Ll, Vs, Pl, Il, Ml, kl, Bl, Rl, $l, en, tn, Xs, Zs, Hl, Nl, Ol, Fl, zl, Ul, Ks, Wl, ir, wn, Js, as, ei, Yl, jl, Ql, Ar, ql = {}, rs, ns, ti, ai, za, Gl = ["wrap", "cols", "rows"], ri = [n.i, n.c, n.s, "open"].concat(qs), ni = [], si, Vl, Xl, ii, li, Cr, ya, Fr, oi, xr, ss, is, ci, ui;
            function ra(l, u, m, g, E) {
              var M = o.isA(u) && o.isA(m), H = g ? "removeEventListener" : "addEventListener", Q = g ? "off" : "on", U = M ? !1 : u.split(Mt), X = 0, pe = A.isPlainObject(E), de = $ && (pe ? E._passive : E) || !1, we = pe && (E._capture || !1), Te = $ ? {
                passive: de,
                capture: we
              } : we;
              if (M)
                for (; X < u[n.l]; X++)
                  ra(l, u[X], m[X], g, E);
              else
                for (; X < U[n.l]; X++)
                  $ ? l[0][H](U[X], m, Te) : l[Q](U[X], m);
            }
            function Ba(l, u, m, g) {
              ra(l, u, m, !1, g), ni.push(o.bind(ra, 0, l, u, m, !0, g));
            }
            function ls(l, u) {
              if (l) {
                var m = o.rO(), g = "animationstart mozAnimationStart webkitAnimationStart MSAnimationStart", E = "childNodes", M = 3333333, H = function() {
                  l[Bt](M)[kt](ke ? V.n ? -M : V.i ? 0 : M : M), u();
                };
                if (u) {
                  if (ie) {
                    var Q = l.addClass("observed").append(va(Ir)).contents()[0], U = Q[Ns] = new m(H);
                    U.observe(Q);
                  } else if (Ie > 9 || !De) {
                    l.prepend(
                      va(
                        Ir,
                        va(
                          { c: Gn, dir: "ltr" },
                          va(
                            Gn,
                            va(hl)
                          ) + va(
                            Gn,
                            va({ c: hl, style: "width: 200%; height: 200%" })
                          )
                        )
                      )
                    );
                    var X = l[0][E][0][E][0], pe = A(X[E][1]), de = A(X[E][0]), we = A(de[0][E][0]), Te = X[n.oW], $e = X[n.oH], xe, He, Pe, Je, Ft = 2, dt = ue.nativeScrollbarSize, Kt = function() {
                      de[kt](M)[Bt](M), pe[kt](M)[Bt](M);
                    }, Dt = function() {
                      He = 0, xe && (Te = Pe, $e = Je, H());
                    }, gt = function(Qe) {
                      return Pe = X[n.oW], Je = X[n.oH], xe = Pe != Te || Je != $e, Qe && xe && !He ? (o.cAF()(He), He = o.rAF()(Dt)) : Qe || Dt(), Kt(), Qe && (o.prvD(Qe), o.stpP(Qe)), !1;
                    }, yt = {}, ct = {};
                    zr(ct, ye, [
                      -((dt.y + 1) * Ft),
                      dt.x * -Ft,
                      dt.y * -Ft,
                      -((dt.x + 1) * Ft)
                    ]), A(X).css(ct), de.on(la, gt), pe.on(la, gt), l.on(g, function() {
                      gt(!1);
                    }), yt[Se] = M, yt[it] = M, we.css(yt), Kt();
                  } else {
                    var xt = Jr.attachEvent, Ha = Ie !== r;
                    if (xt)
                      l.prepend(va(Ir)), an(l, oa + Ir)[0].attachEvent("onresize", H);
                    else {
                      var ut = Jr.createElement(s.o);
                      ut.setAttribute(n.ti, "-1"), ut.setAttribute(n.c, Ir), ut.onload = function() {
                        var Qe = this.contentDocument.defaultView;
                        Qe.addEventListener("resize", H), Qe.document.documentElement.style.display = "none";
                      }, ut.type = "text/html", Ha && l.prepend(ut), ut.data = "about:blank", Ha || l.prepend(ut), l.on(g, H);
                    }
                  }
                  if (l[0] === ts) {
                    var Ca = function() {
                      var Qe = be.css("direction"), le = {}, et = 0, tt = !1;
                      return Qe !== kl && (Qe === "ltr" ? (le[ze] = 0, le[It] = At, et = M) : (le[ze] = At, le[It] = 0, et = V.n ? -M : V.i ? 0 : M), ka.children().eq(0).css(le), ka[kt](et)[Bt](M), kl = Qe, tt = !0), tt;
                    };
                    Ca(), Ba(l, la, function(Qe) {
                      return Ca() && Ra(), o.prvD(Qe), o.stpP(Qe), !1;
                    });
                  }
                } else if (ie) {
                  var Q = l.contents()[0], Ge = Q[Ns];
                  Ge && (Ge.disconnect(), delete Q[Ns]);
                } else
                  or(l.children(oa + Ir).eq(0));
              }
            }
            function lu() {
              if (ve) {
                var l = 11, u = o.mO(), m = o.now(), g, E, M, H, Q, U, X, pe, de, we;
                ti = function(Te) {
                  var $e = !1, xe = !1, He, Pe = [];
                  return ge && !qe && (K(Te, function() {
                    He = this, g = He.target, E = He.attributeName, M = E === n.c, H = He.oldValue, Q = g.className, F && M && !xe && H.indexOf(Yn) > -1 && Q.indexOf(Yn) < 0 && (U = io(!0), ca.className = Q.split(Mt).concat(H.split(Mt).filter(function(Je) {
                      return Je.match(U);
                    })).join(Mt), $e = xe = !0), $e || ($e = M ? to(H, Q) : E === n.s ? H !== g[n.s].cssText : !0), Pe.push(E);
                  }), _i(Pe), $e && ee.update(xe || At)), $e;
                }, ai = function(Te) {
                  var $e = !1, xe;
                  return ge && !qe && (K(Te, function() {
                    return xe = this, $e = uu(xe), !$e;
                  }), $e && (pe = o.now(), de = br || ga, we = function() {
                    N || (m = pe, q && hi(), de ? Ra() : ee.update(At));
                  }, clearTimeout(X), l <= 0 || pe - m > l || !de ? we() : X = setTimeout(we, l))), $e;
                }, rs = new u(ti), ns = new u(ai);
              }
            }
            function Zl() {
              ve && !za && (rs.observe(ca, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: ri
              }), ns.observe(q ? gr : ma, {
                attributes: !0,
                attributeOldValue: !0,
                subtree: !q,
                childList: !q,
                characterData: !q,
                attributeFilter: q ? Gl : ri
              }), za = !0);
            }
            function vi() {
              ve && za && (rs.disconnect(), ns.disconnect(), za = !1);
            }
            function ou() {
              if (!qe) {
                var l, u = {
                  w: ts[n.sW],
                  h: ts[n.sH]
                };
                l = Ur(u, Ol), Ol = u, l && Ra({ _hostSizeChanged: !0 });
              }
            }
            function Kl() {
              Fr && Ua(!0);
            }
            function Jl() {
              Fr && !Rr.hasClass(Mr) && Ua(!1);
            }
            function cu() {
              ya && (Ua(!0), clearTimeout(Xl), Xl = setTimeout(function() {
                ya && !N && Ua(!1);
              }, 100));
            }
            function Tn(l) {
              return o.prvD(l), !1;
            }
            function fi(l) {
              if (!N) {
                var u = l.target, m = A(l.target), g = A.inArray(u, Br);
                g > -1 && Br.splice(g, 1), co(function(E, M) {
                  m.is(M) && Ra({ _contentSizeChanged: !0 });
                });
              }
            }
            function di(l) {
              l || di(!0), ra(
                be,
                hn.split(Mt)[0],
                cu,
                !ya || l,
                !0
              ), ra(
                be,
                [sl, il],
                [Kl, Jl],
                !Fr || l,
                !0
              ), !ge && !l && be.one("mouseover", Kl);
            }
            function eo() {
              var l = {};
              return Ee && nr && (l.w = Wa(nr.css(Wt + Se)), l.h = Wa(nr.css(Wt + it)), l.c = Ur(l, Ar), l.f = !0), Ar = l, !!l.c;
            }
            function to(l, u) {
              var m = typeof u == s.s ? u.split(Mt) : [], g = typeof l == s.s ? l.split(Mt) : [], E = mu(g, m), M = j(Xn, E), H, Q;
              if (M > -1 && E.splice(M, 1), E[n.l] > 0) {
                for (Q = io(!0, !0), H = 0; H < E.length; H++)
                  if (!E[H].match(Q))
                    return !0;
              }
              return !1;
            }
            function uu(l) {
              var u = l.attributeName, m = l.target, g = l.type, E = "closest";
              if (m === ma)
                return u === null;
              if (g === "attributes" && (u === n.c || u === n.s) && !q) {
                if (u === n.c && A(m).hasClass(Yt))
                  return to(l.oldValue, m.className);
                if (typeof m[E] != s.f)
                  return !0;
                if (m[E](oa + Ir) !== null || m[E](oa + ar) !== null || m[E](oa + Ys) !== null)
                  return !1;
              }
              return !0;
            }
            function vu() {
              if (qe)
                return !1;
              var l = oo(), u = q && ga && !as ? Re.val().length : 0, m = !za && ga && !q, g = {}, E, M, H, Q;
              return m && (E = ot.css(aa), g[aa] = ke ? It : ze, g[Se] = At, ot.css(g)), Q = {
                w: l[n.sW] + u,
                h: l[n.sH] + u
              }, m && (g[aa] = E, g[Se] = tr, ot.css(g)), M = eo(), H = Ur(Q, Nl), Nl = Q, H || M;
            }
            function fu() {
              if (!(qe || za)) {
                var l, u, m, g = [], E = [
                  {
                    _elem: be,
                    _attrs: ri.concat(":visible")
                  },
                  {
                    _elem: q ? Re : r,
                    _attrs: Gl
                  }
                ];
                return K(E, function(M, H) {
                  l = H._elem, l && K(H._attrs, function(Q, U) {
                    u = U.charAt(0) === ":" ? l.is(U) : l.attr(U), m = ql[U], Ur(u, m) && g.push(U), ql[U] = u;
                  });
                }), _i(g), g[n.l] > 0;
              }
            }
            function du(l) {
              if (!ge)
                return !0;
              var u = "flex-grow", m = "flex-shrink", g = "flex-basis", E = [
                Se,
                Wt + Se,
                er + Se,
                ft + ze,
                ft + It,
                ze,
                It,
                "font-weight",
                "word-spacing",
                u,
                m,
                g
              ], M = [
                je + ze,
                je + It,
                ta + ze + Se,
                ta + It + Se
              ], H = [
                it,
                Wt + it,
                er + it,
                ft + Ze,
                ft + Gt,
                Ze,
                Gt,
                "line-height",
                u,
                m,
                g
              ], Q = [
                je + Ze,
                je + Gt,
                ta + Ze + Se,
                ta + Gt + Se
              ], U = "s", X = "v-s", pe = en.x === U || en.x === X, de = en.y === U || en.y === X, we = !1, Te = function($e, xe) {
                for (var He = 0; He < $e[n.l]; He++)
                  if ($e[He] === xe)
                    return !0;
                return !1;
              };
              return de && (we = Te(H, l), !we && !re && (we = Te(Q, l))), pe && !we && (we = Te(E, l), !we && !re && (we = Te(M, l))), we;
            }
            function _i(l) {
              l = l || qs, K(l, function(u, m) {
                if (o.inA(m, qs) > -1) {
                  var g = Re.attr(m);
                  I(g) == s.s ? Le.attr(m, g) : Le.removeAttr(m);
                }
              });
            }
            function hi() {
              if (!qe) {
                var l = !as, u = Fe.w, m = Fe.h, g = {}, E = ga || l, M, H, Q, U;
                return g[Wt + Se] = ye, g[Wt + it] = ye, g[Se] = At, Re.css(g), M = gr[n.oW], H = E ? v.max(M, gr[n.sW] - 1) : 1, g[Se] = ga ? At : tr, g[Wt + Se] = tr, g[it] = At, Re.css(g), Q = gr[n.oH], U = v.max(Q, gr[n.sH] - 1), g[Se] = H, g[it] = U, sr.css(g), g[Wt + Se] = u, g[Wt + it] = m, Re.css(g), {
                  _originalWidth: M,
                  _originalHeight: Q,
                  _dynamicWidth: H,
                  _dynamicHeight: U
                };
              }
            }
            function Ra(l) {
              clearTimeout(wl), l = l || {}, kr._hostSizeChanged |= l._hostSizeChanged, kr._contentSizeChanged |= l._contentSizeChanged, kr._force |= l._force;
              var u = o.now(), m = !!kr._hostSizeChanged, g = !!kr._contentSizeChanged, E = !!kr._force, M = l._changedOptions, H = ge && !N && !E && !M && u - Sl < Tl && !br && !ga, Q;
              if (H && (wl = setTimeout(Ra, Tl)), !(N || H || qe && !M || ge && !E && (Q = be.is(":hidden")) || be.css("display") === "inline")) {
                Sl = u, kr = {}, Ce && !(Ae.x && Ae.y) ? (y.x = 0, y.y = 0) : y = Zt({}, ue.nativeScrollbarSize), ia = {
                  x: (y.x + (Ae.x ? 0 : 3)) * 3,
                  y: (y.y + (Ae.y ? 0 : 3)) * 3
                }, M = M || {};
                var U = function() {
                  return Ur.apply(this, [].slice.call(arguments).concat([E]));
                }, X = {
                  x: Le[kt](),
                  y: Le[Bt]()
                }, pe = Ct.scrollbars, de = Ct.textarea, we = pe.visibility, Te = U(we, Fl), $e = pe.autoHide, xe = U($e, zl), He = pe.clickScrolling, Pe = U(He, Ul), Je = pe.dragScrolling, Ft = U(Je, Ks), dt = Ct.className, Kt = U(dt, wn), Dt = Ct.resize, gt = U(Dt, Wl) && !Ee, yt = Ct.paddingAbsolute, ct = U(yt, Bl), xt = Ct.clipAlways, Ha = U(xt, Rl), ut = Ct.sizeAutoCapable && !Ee, Ca = U(ut, Hl), Ge = Ct.nativeScrollbarsOverlaid.showNativeScrollbars, Qe = U(Ge, Xs), le = Ct.autoUpdate, et = U(le, Zs), tt = Ct.overflowBehavior, fa = U(tt, en, E), cr = de.dynWidth, Wr = U(Ql, cr), Jt = de.dynHeight, Ya = U(jl, Jt);
                if (li = $e === "n", Cr = $e === "s", ya = $e === "m", Fr = $e === "l", ii = pe.autoHideDelay, Js = wn, ss = Dt === "n", is = Dt === "b", ci = Dt === "h", ui = Dt === "v", ir = Ct.normalizeRTL, Ge = Ge && Ae.x && Ae.y, Fl = we, zl = $e, Ul = He, Ks = Je, wn = dt, Wl = Dt, Bl = yt, Rl = xt, Hl = ut, Xs = Ge, Zs = le, en = Zt({}, tt), Ql = cr, jl = Jt, Fa = Fa || { x: !1, y: !1 }, Kt && (Ot(be, Js + Mt + Xn), mt(be, dt !== r && dt !== null && dt.length > 0 ? dt : Xn)), et && (le === !0 || le === null && De ? (vi(), Y.add(ee)) : (Y.remove(ee), Zl())), Ca)
                  if (ut)
                    if (jt ? jt.show() : (jt = A(va(au)), pa.before(jt)), fe)
                      Ma.show();
                    else {
                      Ma = A(va(ru)), es = Ma[0], jt.before(Ma);
                      var ja = { w: -1, h: -1 };
                      ls(Ma, function() {
                        var jr = {
                          w: es[n.oW],
                          h: es[n.oH]
                        };
                        Ur(jr, ja) && (ge && br && jr.h > 0 || ga && jr.w > 0 || ge && !br && jr.h === 0 || !ga && jr.w === 0) && Ra(), ja = jr;
                      }), fe = !0, f !== null && Ma.css(it, f + "(100% + 1px)");
                    }
                  else
                    fe && Ma.hide(), jt && jt.hide();
                E && (ka.find("*").trigger(la), fe && Ma.find("*").trigger(la)), Q = Q === r ? be.is(":hidden") : Q;
                var da = q ? Re.attr("wrap") !== "off" : !1, Ln = U(da, as), _a = be.css("direction"), Qt = U(_a, Ml), ur = be.css("box-sizing"), ha = U(ur, Ll), lt = Ai(je), Rt;
                try {
                  Rt = fe ? es[n.bCR]() : null;
                } catch {
                  return;
                }
                ke = _a === "rtl", re = ur === "border-box";
                var $t = ke ? ze : It, Ne = ke ? It : ze, xa = !1, Er = fe && be.css(aa) !== "none" ? v.round(Rt.right - Rt.left) === 0 && (yt ? !0 : ca[n.cW] - D > 0) : !1;
                if (ut && !Er) {
                  var Yr = ca[n.oW], vr = jt.css(Se);
                  jt.css(Se, At);
                  var Qa = ca[n.oW];
                  jt.css(Se, vr), xa = Yr !== Qa, xa || (jt.css(Se, Yr + 1), Qa = ca[n.oW], jt.css(Se, vr), xa = Yr !== Qa);
                }
                var Be = (Er || xa) && ut && !Q, Ht = U(Be, ga), fr = !Be && ga, Ke = fe && ut && !Q ? v.round(Rt.bottom - Rt.top) === 0 : !1, Nt = U(Ke, br), Ea = !Ke && br, Pn = Be && re || !re, os = Ke && re || !re, Sa = Ai(ta, "-" + Se, !Pn, !os), qa = Ai(ft), _e = {}, he = {}, _t = function() {
                  return {
                    w: ca[n.cW],
                    h: ca[n.cH]
                  };
                }, qt = function() {
                  return {
                    w: yr[n.oW] + v.max(0, ma[n.cW] - ma[n.sW]),
                    h: yr[n.oH] + v.max(0, ma[n.cH] - ma[n.sH])
                  };
                }, We = D = lt.l + lt.r, wa = R = lt.t + lt.b;
                if (We *= yt ? 1 : 0, wa *= yt ? 1 : 0, lt.c = U(lt, Vs), B = Sa.l + Sa.r, te = Sa.t + Sa.b, Sa.c = U(Sa, Pl), Ye = qa.l + qa.r, pt = qa.t + qa.b, qa.c = U(qa, Il), as = da, Ml = _a, Ll = ur, ga = Be, br = Ke, Vs = lt, Pl = Sa, Il = qa, Qt && fe && Ma.css(aa, Ne), lt.c || Qt || ct || Ht || Nt || ha || Ca) {
                  var bt = {}, ea = {}, Sr = [lt.t, lt.r, lt.b, lt.l];
                  zr(he, ft, [-lt.t, -lt.r, -lt.b, -lt.l]), yt ? (zr(bt, ye, Sr), zr(q ? ea : _e, je)) : (zr(bt, ye), zr(q ? ea : _e, je, Sr)), pa.css(bt), Re.css(ea);
                }
                Fe = qt();
                var at = q ? hi() : !1, Ta = q && U(at, Yl), Ga = q && at ? {
                  w: cr ? at._dynamicWidth : at._originalWidth,
                  h: Jt ? at._dynamicHeight : at._originalHeight
                } : {};
                if (Yl = at, Ke && (Nt || ct || ha || lt.c || Sa.c) ? _e[it] = At : (Nt || ct) && (_e[it] = tr), Be && (Ht || ct || ha || lt.c || Sa.c || Qt) ? (_e[Se] = At, he[er + Se] = tr) : (Ht || ct) && (_e[Se] = tr, _e[aa] = ye, he[er + Se] = ye), Be ? (he[Se] = At, _e[Se] = _._cssPropertyValue(Se, "max-content intrinsic") || At, _e[aa] = Ne) : he[Se] = ye, Ke ? he[it] = Ga.h || ma[n.cH] : he[it] = ye, ut && jt.css(he), ot.css(_e), _e = {}, he = {}, m || g || Ta || Qt || ha || ct || Ht || Be || Nt || Ke || Qe || fa || Ha || gt || Te || xe || Ft || Pe || Wr || Ya || Ln) {
                  var Lt = "overflow", dr = Lt + "-x", Va = Lt + "-y", wr = "hidden", Da = "visible";
                  if (!Ce) {
                    var Xa = {}, Ei = Fa.y && Sn.ys && !Ge ? Ae.y ? Le.css($t) : -y.y : 0, Au = Fa.x && Sn.xs && !Ge ? Ae.x ? Le.css(Gt) : -y.x : 0;
                    zr(Xa, ye), Le.css(Xa);
                  }
                  var Tr = oo(), In = {
                    //use clientSize because natively overlaidScrollbars add borders
                    w: Ga.w || Tr[n.cW],
                    h: Ga.h || Tr[n.cH]
                  }, uo = {
                    w: Tr[n.sW],
                    h: Tr[n.sH]
                  };
                  Ce || (Xa[Gt] = Ea ? ye : Au, Xa[$t] = fr ? ye : Ei, Le.css(Xa)), Fe = qt();
                  var Mn = _t(), Si = {
                    w: Mn.w - Ye - B - (re ? 0 : D),
                    h: Mn.h - pt - te - (re ? 0 : R)
                  }, rn = {
                    //client/scrollSize + AbsolutePadding -> because padding is only applied to the paddingElement if its absolute, so you have to add it manually
                    //hostSize is clientSize -> so padding should be added manually, right? FALSE! Because content glue is inside hostElement, so we don't have to worry about padding
                    w: v.max((Be ? In.w : uo.w) + We, Si.w),
                    h: v.max((Ke ? In.h : uo.h) + wa, Si.h)
                  };
                  if (rn.c = U(rn, $l), $l = rn, ut) {
                    (rn.c || Ke || Be) && (he[Se] = rn.w, he[it] = rn.h, q || (In = {
                      //use clientSize because natively overlaidScrollbars add borders
                      w: Tr[n.cW],
                      h: Tr[n.cH]
                    }));
                    var vo = {}, fo = function(ht) {
                      var zt = ba(ht), La = zt._w_h, vt = zt._width_height, Oe = ht ? Be : Ke, Na = ht ? B : te, Qr = ht ? D : R, Pi = ht ? Ye : pt, _s = Fe[La] - Na - Pi - (re ? 0 : Qr);
                      (!Oe || !Oe && Sa.c) && (he[vt] = Si[La] - 1), Oe && In[La] < _s && (!(ht && q) || !da) && (q && (vo[vt] = Wa(sr.css(vt)) - 1), he[vt] -= 1), In[La] > 0 && (he[vt] = v.max(1, he[vt]));
                    };
                    fo(!0), fo(!1), q && sr.css(vo), jt.css(he);
                  }
                  Be && (_e[Se] = tr), Be && !re && !za && (_e[aa] = "none"), ot.css(_e), _e = {};
                  var Dr = {
                    w: Tr[n.sW],
                    h: Tr[n.sH]
                  };
                  Dr.c = g = U(Dr, Or), Or = Dr, Fe = qt(), Mn = _t(), m = U(Mn, En), En = Mn;
                  var wi = q && (Fe.w === 0 || Fe.h === 0), cs = tn, nn = {}, kn = {}, _o = {}, Za = {}, rt = {}, Ve = {}, Bn = {}, ho = yr[n.bCR](), po = function(ht) {
                    var zt = ba(ht), La = ba(!ht), vt = La._x_y, Oe = zt._x_y, Na = zt._w_h, Qr = zt._width_height, Pi = la + zt._Left_Top + "Max", _s = ho[Qr] ? v.abs(ho[Qr] - Fe[Na]) : 0, Bu = cs && cs[Oe] > 0 && Nr[Pi] === 0;
                    nn[Oe] = tt[Oe] === "v-s", kn[Oe] = tt[Oe] === "v-h", _o[Oe] = tt[Oe] === "s", Za[Oe] = v.max(0, v.round((Dr[Na] - Fe[Na]) * 100) / 100), Za[Oe] *= wi || Bu && _s > 0 && _s < 1 ? 0 : 1, rt[Oe] = Za[Oe] > 0, Ve[Oe] = nn[Oe] || kn[Oe] ? rt[vt] && !nn[vt] && !kn[vt] : rt[Oe], Ve[Oe + "s"] = Ve[Oe] ? _o[Oe] || nn[Oe] : !1, Bn[Oe] = rt[Oe] && Ve[Oe + "s"];
                  };
                  if (po(!0), po(!1), Za.c = U(Za, tn), tn = Za, rt.c = U(rt, Fa), Fa = rt, Ve.c = U(Ve, Sn), Sn = Ve, Ae.x || Ae.y) {
                    var Cu = "px solid transparent", Ti = {}, _r = {}, us = E, Di;
                    (rt.x || rt.y) && (_r.w = Ae.y && rt.y ? Dr.w + Xe.y : ye, _r.h = Ae.x && rt.x ? Dr.h + Xe.x : ye, us = U(_r, Dl), Dl = _r), (rt.c || Ve.c || Dr.c || Qt || Ht || Nt || Be || Ke || Qe) && (_e[ft + Ne] = _e[ta + Ne] = ye, Di = function(ht) {
                      var zt = ba(ht), La = ba(!ht), vt = zt._x_y, Oe = ht ? Gt : $t, Na = ht ? Ke : Be;
                      Ae[vt] && rt[vt] && Ve[vt + "s"] ? (_e[ft + Oe] = Na ? Ge ? ye : Xe[vt] : ye, _e[ta + Oe] = (!ht || !Na) && !Ge ? Xe[vt] + Cu : ye) : (_r[La._w_h] = _e[ft + Oe] = _e[ta + Oe] = ye, us = !0);
                    }, Ce ? Aa(Le, Us, !Ge) : (Di(!0), Di(!1))), Ge && (_r.w = _r.h = ye, us = !0), us && !Ce && (Ti[Se] = Ve.y ? _r.w : ye, Ti[it] = Ve.x ? _r.h : ye, nr || (nr = A(va(tu)), Le.prepend(nr)), nr.css(Ti)), ot.css(_e);
                  }
                  var Pt = {}, bt = {}, Li;
                  if ((m || rt.c || Ve.c || Dr.c || fa || ha || Qe || Qt || Ha || Nt) && (Pt[Ne] = ye, Li = function(ht) {
                    var zt = ba(ht), La = ba(!ht), vt = zt._x_y, Oe = zt._X_Y, Na = ht ? Gt : $t, Qr = function() {
                      Pt[Na] = ye, sa[La._w_h] = 0;
                    };
                    rt[vt] && Ve[vt + "s"] ? (Pt[Lt + Oe] = la, Ge || Ce ? Qr() : (Pt[Na] = -(Ae[vt] ? Xe[vt] : y[vt]), sa[La._w_h] = Ae[vt] ? Xe[La._x_y] : 0)) : (Pt[Lt + Oe] = ye, Qr());
                  }, Li(!0), Li(!1), !Ce && (Fe.h < ia.x || Fe.w < ia.y) && (rt.x && Ve.x && !Ae.x || rt.y && Ve.y && !Ae.y) ? (Pt[je + Ze] = ia.x, Pt[ft + Ze] = -ia.x, Pt[je + Ne] = ia.y, Pt[ft + Ne] = -ia.y) : Pt[je + Ze] = Pt[ft + Ze] = Pt[je + Ne] = Pt[ft + Ne] = ye, Pt[je + $t] = Pt[ft + $t] = ye, rt.x && Ve.x || rt.y && Ve.y || wi ? q && wi && (bt[dr] = bt[Va] = wr) : (!xt || kn.x || nn.x || kn.y || nn.y) && (q && (bt[dr] = bt[Va] = ye), Pt[dr] = Pt[Va] = Da), pa.css(bt), Le.css(Pt), Pt = {}, (rt.c || ha || Ht || Nt) && !(Ae.x && Ae.y))) {
                    var vs = ma[n.s];
                    vs.webkitTransform = "scale(1)", vs.display = "run-in", ma[n.oH], vs.display = ye, vs.webkitTransform = ye;
                  }
                  if (_e = {}, Qt || Ht || Nt)
                    if (ke && Be) {
                      var xu = ot.css(aa), mo = v.round(ot.css(aa, ye).css(ze, ye).position().left);
                      ot.css(aa, xu);
                      var Eu = v.round(ot.position().left);
                      mo !== Eu && (_e[ze] = mo);
                    } else
                      _e[ze] = ye;
                  if (ot.css(_e), q && g) {
                    var Ka = gu();
                    if (Ka) {
                      var go = ei === r ? !0 : Ka._rows !== ei._rows, yo = Ka._cursorRow, Su = Ka._cursorColumn, wu = Ka._widestRow, Tu = Ka._rows, Du = Ka._columns, Lu = Ka._cursorPosition, Pu = Ka._cursorMax, bo = Lu >= Pu && si, fs = {
                        x: !da && Su === Du && yo === wu ? tn.x : -1,
                        y: (da ? bo || go && (cs && X.y === cs.y) : (bo || go) && yo === Tu) ? tn.y : -1
                      };
                      X.x = fs.x > -1 ? ke && ir && V.i ? 0 : fs.x : X.x, X.y = fs.y > -1 ? fs.y : X.y;
                    }
                    ei = Ka;
                  }
                  ke && V.i && Ae.y && rt.x && ir && (X.x += sa.w || 0), Be && be[kt](0), Ke && be[Bt](0), Le[kt](X.x)[Bt](X.y);
                  var Iu = we === "v", Mu = we === "h", ku = we === "a", ds = function(ht, zt) {
                    zt = zt === r ? ht : zt, no(!0, ht, Bn.x), no(!1, zt, Bn.y);
                  };
                  Aa(be, mn, Ve.x || Ve.y), Aa(be, fl, Ve.x), Aa(be, dl, Ve.y), Qt && !Ee && Aa(be, vl, ke), Ee && mt(be, Fs), gt && (Aa(be, Fs, ss), Aa(Xt, yn, !ss), Aa(Xt, Al, is), Aa(Xt, Cl, ci), Aa(Xt, xl, ui)), (Te || fa || Ve.c || rt.c || Qe) && (Ge ? Qe && (Ot(be, jn), Ge && ds(!1)) : ku ? ds(Bn.x, Bn.y) : Iu ? ds(!0) : Mu && ds(!1)), (xe || Qe) && (di(!Fr && !ya), Ua(li, !li)), (m || Za.c || Nt || Ht || gt || ha || ct || Qe || Qt) && (yi(!0), $a(!0), yi(!1), $a(!1)), Pe && so(!0, He), Ft && so(!1, Je), ua("onDirectionChanged", {
                    isRTL: ke,
                    dir: _a
                  }, Qt), ua("onHostSizeChanged", {
                    width: En.w,
                    height: En.h
                  }, m), ua("onContentSizeChanged", {
                    width: Or.w,
                    height: Or.h
                  }, g), ua("onOverflowChanged", {
                    x: rt.x,
                    y: rt.y,
                    xScrollable: Ve.xs,
                    yScrollable: Ve.ys,
                    clipped: Ve.x || Ve.y
                  }, rt.c || Ve.c), ua("onOverflowAmountChanged", {
                    x: Za.x,
                    y: Za.y
                  }, Za.c);
                }
                Ee && Ar && (Fa.c || Ar.c) && (Ar.f || eo(), Ae.y && Fa.x && ot.css(Wt + Se, Ar.w + Xe.y), Ae.x && Fa.y && ot.css(Wt + it, Ar.h + Xe.x), Ar.c = !1), ge && M.updateOnLoad && ao(), ua("onUpdated", { forced: E });
              }
            }
            function ao() {
              q || co(function(l, u) {
                ot.find(u).each(function(m, g) {
                  o.inA(g, Br) < 0 && (Br.push(g), A(g).off(Gs, fi).on(Gs, fi));
                });
              });
            }
            function pi(l) {
              var u = b._validate(l, b._template, !0, bn);
              return bn = Zt({}, bn, u._default), Ct = Zt({}, Ct, u._prepared), u._prepared;
            }
            function mi(l) {
              var u = "parent", m = "os-resize-observer-host", g = Qn + Mt + Vn, E = q ? Mt + Vn : ye, M = Ct.textarea.inheritedAttrs, H = {}, Q = function() {
                var pe = l ? Re : be;
                K(H, function(de, we) {
                  I(we) == s.s && (de == n.c ? pe.addClass(we) : pe.attr(de, we));
                });
              }, U = [
                Yt,
                Yn,
                Os,
                Fs,
                vl,
                ol,
                cl,
                ul,
                jn,
                mn,
                fl,
                dl,
                Xn,
                Qn,
                Vn,
                wn
              ].join(Mt), X = {};
              be = be || (q ? F ? Re[u]()[u]()[u]()[u]() : A(va(Os)) : Re), ot = ot || lr(Ws + E), Le = Le || lr(qn + E), pa = pa || lr(zs + E), ka = ka || lr(m), sr = sr || (q ? lr(eu) : r), F && mt(be, Yn), l && Ot(be, U), M = I(M) == s.s ? M.split(Mt) : M, o.isA(M) && q && K(M, function(pe, de) {
                I(de) == s.s && (H[de] = l ? be.attr(de) : Re.attr(de));
              }), l ? (F && ge ? (ka.children().remove(), K([pa, Le, ot, sr], function(pe, de) {
                de && Ot(de.removeAttr(n.s), js);
              }), mt(be, q ? Os : Yt)) : (or(ka), ot.contents().unwrap().unwrap().unwrap(), q && (Re.unwrap(), or(be), or(sr), Q())), q && Re.removeAttr(n.s), Ee && Ot(Kr, ll)) : (q && (Ct.sizeAutoCapable || (X[Se] = Re.css(Se), X[it] = Re.css(it)), F || Re.addClass(Vn).wrap(be), be = Re[u]().css(X)), F || (mt(Re, q ? g : Yt), be.wrapInner(ot).wrapInner(Le).wrapInner(pa).prepend(ka), ot = an(be, oa + Ws), Le = an(be, oa + qn), pa = an(be, oa + zs), q && (ot.prepend(sr), Q())), Ce && mt(Le, Us), Ae.x && Ae.y && mt(Le, _l), Ee && mt(Kr, ll), ts = ka[0], ca = be[0], yr = pa[0], Nr = Le[0], ma = ot[0], _i());
            }
            function _u() {
              var l = [
                112,
                113,
                114,
                115,
                116,
                117,
                118,
                119,
                120,
                121,
                123,
                //F1 to F12
                33,
                34,
                //page up, page down
                37,
                38,
                39,
                40,
                //left, up, right, down arrows
                16,
                17,
                18,
                19,
                20,
                144
                //Shift, Ctrl, Alt, Pause, CapsLock, NumLock
              ], u = [], m, g, E = 175, M = "focus";
              function H(xe) {
                hi(), ee.update(At), xe && De && clearInterval(m);
              }
              function Q(xe) {
                return Re[kt](V.i && ir ? 9999999 : 0), Re[Bt](0), o.prvD(xe), o.stpP(xe), !1;
              }
              function U(xe) {
                setTimeout(function() {
                  N || H();
                }, 50);
              }
              function X() {
                si = !0, mt(be, M);
              }
              function pe() {
                si = !1, u = [], Ot(be, M), H(!0);
              }
              function de(xe) {
                var He = xe.keyCode;
                j(He, l) < 0 && (u[n.l] || (H(), m = setInterval(H, 1e3 / 60)), j(He, u) < 0 && u.push(He));
              }
              function we(xe) {
                var He = xe.keyCode, Pe = j(He, u);
                j(He, l) < 0 && (Pe > -1 && u.splice(Pe, 1), u[n.l] || H(!0));
              }
              function Te(xe) {
                Zs !== !0 && (xe = xe.originalEvent || xe, du(xe.propertyName) && ee.update(At));
              }
              function $e(xe) {
                qe || (g !== r ? clearTimeout(g) : ((Cr || ya) && Ua(!0), Dn() || mt(be, jn), ua("onScrollStart", xe)), xr || ($a(!0), $a(!1)), ua("onScroll", xe), g = setTimeout(function() {
                  N || (clearTimeout(g), g = r, (Cr || ya) && Ua(!1), Dn() || Ot(be, jn), ua("onScrollStop", xe));
                }, E));
              }
              q ? (Ie > 9 || !De ? Ba(Re, "input", H) : Ba(
                Re,
                [Rs, $s],
                [de, we]
              ), Ba(
                Re,
                [la, "drop", M, M + "out"],
                [Q, U, X, pe]
              )) : Ba(ot, Hs, Te), Ba(Le, la, $e, !0);
            }
            function gi(l) {
              var u = function(M) {
                var H = M ? nu : su, Q = lr(ar + Mt + H, !0), U = lr(pl, Q), X = lr(gl, Q);
                return !F && !l && (Q.append(U), U.append(X)), {
                  _scrollbar: Q,
                  _track: U,
                  _handle: X
                };
              };
              function m(M) {
                var H = ba(M), Q = H._scrollbar, U = H._track, X = H._handle;
                F && ge ? K([Q, U, X], function(pe, de) {
                  Ot(de.removeAttr(n.s), js);
                }) : or(Q || u(M)._scrollbar);
              }
              var g, E;
              l ? (m(!0), m()) : (g = u(!0), E = u(), $r = g._scrollbar, Kn = g._track, An = g._handle, Hr = E._scrollbar, Jn = E._track, Cn = E._handle, F || (pa.after(Hr), pa.after($r)));
            }
            function ro(l) {
              var u = ba(l), m = u._info, g = xn.top !== xn, E = u._x_y, M = u._X_Y, H = la + u._Left_Top, Q = "active", U = "snapHandle", X = "click", pe = 1, de = [16, 17], we, Te, $e, xe;
              function He(le) {
                return Ie && g ? le["screen" + M] : o.page(le)[E];
              }
              function Pe(le) {
                return Ct.scrollbars[le];
              }
              function Je() {
                pe = 0.5;
              }
              function Ft() {
                pe = 1;
              }
              function dt(le) {
                o.stpP(le);
              }
              function Kt(le) {
                j(le.keyCode, de) > -1 && Je();
              }
              function Dt(le) {
                j(le.keyCode, de) > -1 && Ft();
              }
              function gt(le) {
                var et = le.originalEvent || le, tt = et.touches !== r;
                return qe || N || Dn() || !Ks || tt && !Pe("touchSupport") ? !1 : o.mBtn(le) === 1 || tt;
              }
              function yt(le) {
                if (gt(le)) {
                  var et = m._trackLength, tt = m._handleLength, fa = m._maxScroll, cr = (He(le) - $e) * xe, Wr = cr / (et - tt), Jt = fa * Wr;
                  Jt = isFinite(Jt) ? Jt : 0, ke && l && !V.i && (Jt *= -1), Le[H](v.round(Te + Jt)), xr && $a(l, Te + Jt), $ || o.prvD(le);
                } else
                  ct(le);
              }
              function ct(le) {
                if (le = le || le.originalEvent, ra(
                  Oa,
                  [hn, _n, Rs, $s, pn],
                  [yt, ct, Kt, Dt, Tn],
                  !0
                ), o.rAF()(function() {
                  ra(Oa, X, dt, !0, { _capture: !0 });
                }), xr && $a(l, !0), xr = !1, Ot(Rr, Mr), Ot(u._handle, Q), Ot(u._track, Q), Ot(u._scrollbar, Q), Te = r, $e = r, xe = 1, Ft(), we !== r && (ee.scrollStop(), clearTimeout(we), we = r), le) {
                  var et = ca[n.bCR](), tt = le.clientX >= et.left && le.clientX <= et.right && le.clientY >= et.top && le.clientY <= et.bottom;
                  tt || Jl(), (Cr || ya) && Ua(!1);
                }
              }
              function xt(le) {
                gt(le) && Ha(le);
              }
              function Ha(le) {
                Te = Le[H](), Te = isNaN(Te) ? 0 : Te, (ke && l && !V.n || !ke) && (Te = Te < 0 ? 0 : Te), xe = Ci()[E], $e = He(le), xr = !Pe(U), mt(Rr, Mr), mt(u._handle, Q), mt(u._scrollbar, Q), ra(
                  Oa,
                  [hn, _n, pn],
                  [yt, ct, Tn]
                ), o.rAF()(function() {
                  ra(Oa, X, dt, !1, { _capture: !0 });
                }), (Ie || !W) && o.prvD(le), o.stpP(le);
              }
              function ut(le) {
                if (gt(le)) {
                  var et = u._info._handleLength / Math.round(v.min(1, Fe[u._w_h] / Or[u._w_h]) * u._info._trackLength), tt = v.round(Fe[u._w_h] * et), fa = 270 * et, cr = 400 * et, Wr = u._track.offset()[u._left_top], Jt = le.ctrlKey, Ya = le.shiftKey, ja = Ya && Jt, da = !0, Ln = "linear", _a, Qt, ur = function(Rt) {
                    xr && $a(l, Rt);
                  }, ha = function() {
                    ur(), Ha(le);
                  }, lt = function() {
                    if (!N) {
                      var Rt = ($e - Wr) * xe, $t = m._handleOffset, Ne = m._trackLength, xa = m._handleLength, Er = m._maxScroll, Yr = m._currentScroll, vr = fa * pe, Qa = da ? v.max(cr, vr) : vr, Be = Er * ((Rt - xa / 2) / (Ne - xa)), Ht = ke && l && (!V.i && !V.n || ir), fr = Ht ? $t < Rt : $t > Rt, Ke = {}, Nt = {
                        easing: Ln,
                        step: function(Ea) {
                          xr && (Le[H](Ea), $a(l, Ea));
                        }
                      };
                      Be = isFinite(Be) ? Be : 0, Be = ke && l && !V.i ? Er - Be : Be, Ya ? (Le[H](Be), ja ? (Be = Le[H](), Le[H](Yr), Be = Ht && V.i ? Er - Be : Be, Be = Ht && V.n ? -Be : Be, Ke[E] = Be, ee.scroll(Ke, Zt(Nt, {
                        duration: 130,
                        complete: ha
                      }))) : ha()) : (_a = da ? fr : _a, Qt = Ht ? _a ? $t + xa >= Rt : $t <= Rt : _a ? $t <= Rt : $t + xa >= Rt, Qt ? (clearTimeout(we), ee.scrollStop(), we = r, ur(!0)) : (we = setTimeout(lt, Qa), Ke[E] = (_a ? "-=" : "+=") + tt, ee.scroll(Ke, Zt(Nt, {
                        duration: vr
                      }))), da = !1);
                    }
                  };
                  Jt && Je(), xe = Ci()[E], $e = o.page(le)[E], xr = !Pe(U), mt(Rr, Mr), mt(u._track, Q), mt(u._scrollbar, Q), ra(
                    Oa,
                    [_n, Rs, $s, pn],
                    [ct, Kt, Dt, Tn]
                  ), lt(), o.prvD(le), o.stpP(le);
                }
              }
              function Ca(le) {
                oi = !0, (Cr || ya) && Ua(!0);
              }
              function Ge(le) {
                oi = !1, (Cr || ya) && Ua(!1);
              }
              function Qe(le) {
                o.stpP(le);
              }
              Ba(
                u._handle,
                Zr,
                xt
              ), Ba(
                u._track,
                [Zr, sl, il],
                [ut, Ca, Ge]
              ), Ba(
                u._scrollbar,
                Zr,
                Qe
              ), h && Ba(u._scrollbar, Hs, function(le) {
                le.target === u._scrollbar[0] && (yi(l), $a(l));
              });
            }
            function no(l, u, m) {
              var g = l ? ol : cl, E = l ? $r : Hr;
              Aa(be, g, !u), Aa(E, bl, !m);
            }
            function Ua(l, u) {
              if (clearTimeout(Vl), l)
                Ot($r, gn), Ot(Hr, gn);
              else {
                var m, g = "active", E = function() {
                  !oi && !N && (m = An.hasClass(g) || Cn.hasClass(g), !m && (Cr || ya || Fr) && mt($r, gn), !m && (Cr || ya || Fr) && mt(Hr, gn));
                };
                ii > 0 && u !== !0 ? Vl = setTimeout(E, ii) : E();
              }
            }
            function yi(l) {
              var u = {}, m = ba(l), g = m._info, E = 1e6, M = v.min(1, Fe[m._w_h] / Or[m._w_h]);
              u[m._width_height] = v.floor(M * 100 * E) / E + "%", Dn() || m._handle.css(u), g._handleLength = m._handle[0]["offset" + m._Width_Height], g._handleLengthRatio = M;
            }
            function $a(l, u) {
              var m = I(u) == s.b, g = 250, E = ke && l, M = ba(l), H = M._info, Q = "translate(", U = _._cssProperty("transform"), X = _._cssProperty("transition"), pe = l ? Le[kt]() : Le[Bt](), de = u === r || m ? pe : u, we = H._handleLength, Te = M._track[0]["offset" + M._Width_Height], $e = Te - we, xe = {}, He, Pe, Je = (Nr[la + M._Width_Height] - Nr["client" + M._Width_Height]) * (V.n && E ? -1 : 1), Ft = function(ct) {
                return isNaN(ct / Je) ? 0 : v.max(0, v.min(1, ct / Je));
              }, dt = function(ct) {
                var xt = $e * ct;
                return xt = isNaN(xt) ? 0 : xt, xt = E && !V.i ? Te - we - xt : xt, xt = v.max(0, xt), xt;
              }, Kt = Ft(pe), Dt = Ft(de), gt = dt(Dt), yt = dt(Kt);
              H._maxScroll = Je, H._currentScroll = pe, H._currentScrollRatio = Kt, C ? (He = E ? -(Te - we - gt) : gt, Pe = l ? Q + He + "px, 0)" : Q + "0, " + He + "px)", xe[U] = Pe, h && (xe[X] = m && v.abs(gt - H._handleOffset) > 1 ? pu(M._handle) + ", " + (U + Mt + g + "ms") : ye)) : xe[M._left_top] = gt, Dn() || (M._handle.css(xe), C && h && m && M._handle.one(Hs, function() {
                N || M._handle.css(X, ye);
              })), H._handleOffset = gt, H._snappedHandleOffset = yt, H._trackLength = Te;
            }
            function so(l, u) {
              var m = u ? "removeClass" : "addClass", g = l ? Kn : An, E = l ? Jn : Cn, M = l ? ml : yl;
              g[m](M), E[m](M);
            }
            function ba(l) {
              return {
                _width_height: l ? Se : it,
                _Width_Height: l ? "Width" : "Height",
                _left_top: l ? ze : Ze,
                _Left_Top: l ? "Left" : "Top",
                _x_y: l ? fn : dn,
                _X_Y: l ? "X" : "Y",
                _w_h: l ? "w" : "h",
                _l_t: l ? "l" : "t",
                _track: l ? Kn : Jn,
                _handle: l ? An : Cn,
                _scrollbar: l ? $r : Hr,
                _info: l ? wt : Tt
              };
            }
            function bi(l) {
              Xt = Xt || lr(Ys, !0), l ? F && ge ? Ot(Xt.removeAttr(n.s), js) : or(Xt) : F || be.append(Xt);
            }
            function hu() {
              var l = xn.top !== xn, u = {}, m = {}, g = {}, E;
              function M(X) {
                if (Q(X)) {
                  var pe = U(X), de = {};
                  (ci || is) && (de[Se] = m.w + (pe.x - u.x) * g.x), (ui || is) && (de[it] = m.h + (pe.y - u.y) * g.y), be.css(de), o.stpP(X);
                } else
                  H(X);
              }
              function H(X) {
                var pe = X !== r;
                ra(
                  Oa,
                  [pn, hn, _n],
                  [Tn, M, H],
                  !0
                ), Ot(Rr, Mr), Xt.releaseCapture && Xt.releaseCapture(), pe && (E && Zl(), ee.update(At)), E = !1;
              }
              function Q(X) {
                var pe = X.originalEvent || X, de = pe.touches !== r;
                return qe || N ? !1 : o.mBtn(X) === 1 || de;
              }
              function U(X) {
                return Ie && l ? { x: X.screenX, y: X.screenY } : o.page(X);
              }
              Ba(Xt, Zr, function(X) {
                Q(X) && !ss && (za && (E = !0, vi()), u = U(X), m.w = ca[n.oW] - (re ? 0 : D), m.h = ca[n.oH] - (re ? 0 : R), g = Ci(), ra(
                  Oa,
                  [pn, hn, _n],
                  [Tn, M, H]
                ), mt(Rr, Mr), Xt.setCapture && Xt.setCapture(), o.prvD(X), o.stpP(X));
              });
            }
            function ua(l, u, m) {
              if (m !== !1)
                if (ge) {
                  var g = Ct.callbacks[l], E = l, M;
                  E.substr(0, 2) === "on" && (E = E.substr(2, 1).toLowerCase() + E.substr(3)), I(g) == s.f && g.call(ee, u), K(rr, function() {
                    M = this, I(M.on) == s.f && M.on(E, u);
                  });
                } else N || Qs.push({ n: l, a: u });
            }
            function zr(l, u, m) {
              u = u || ye, m = m || [ye, ye, ye, ye], l[u + Ze] = m[0], l[u + It] = m[1], l[u + Gt] = m[2], l[u + ze] = m[3];
            }
            function Ai(l, u, m, g) {
              return u = u || ye, l = l || ye, {
                t: g ? 0 : Wa(be.css(l + Ze + u)),
                r: m ? 0 : Wa(be.css(l + It + u)),
                b: g ? 0 : Wa(be.css(l + Gt + u)),
                l: m ? 0 : Wa(be.css(l + ze + u))
              };
            }
            function pu(l) {
              var u = _._cssProperty("transition"), m = l.css(u);
              if (m)
                return m;
              for (var g = "\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*", E = new RegExp(g), M = new RegExp("^(" + g + ")+$"), H = "property duration timing-function delay".split(" "), Q = [], U, X, pe = 0, de, we = function(Te) {
                if (U = [], !Te.match(M))
                  return Te;
                for (; Te.match(E); )
                  U.push(RegExp.$1), Te = Te.replace(E, ye);
                return U;
              }; pe < H[n.l]; pe++)
                for (X = we(l.css(u + "-" + H[pe])), de = 0; de < X[n.l]; de++)
                  Q[de] = (Q[de] ? Q[de] + Mt : ye) + X[de];
              return Q.join(", ");
            }
            function io(l, u) {
              var m, g, E, M = function(H, Q) {
                if (E = "", Q && typeof H == s.s)
                  for (g = H.split(Mt), m = 0; m < g[n.l]; m++)
                    E += "|" + g[m] + "$";
                return E;
              };
              return new RegExp(
                "(^" + Yt + "([-_].+|)$)" + M(wn, l) + M(Js, u),
                "g"
              );
            }
            function Ci() {
              var l = yr[n.bCR]();
              return {
                x: C && 1 / (v.round(l.width) / yr[n.oW]) || 1,
                y: C && 1 / (v.round(l.height) / yr[n.oH]) || 1
              };
            }
            function lo(l) {
              var u = "ownerDocument", m = "HTMLElement", g = l && l[u] && l[u].parentWindow || e;
              return typeof g[m] == s.o ? l instanceof g[m] : (
                //DOM2
                l && typeof l == s.o && l !== null && l.nodeType === 1 && typeof l.nodeName == s.s
              );
            }
            function mu(l, u) {
              var m = [], g = [], E, M;
              for (E = 0; E < l.length; E++)
                m[l[E]] = !0;
              for (E = 0; E < u.length; E++)
                m[u[E]] ? delete m[u[E]] : m[u[E]] = !0;
              for (M in m)
                g.push(M);
              return g;
            }
            function Wa(l, u) {
              var m = u ? parseFloat(l) : parseInt(l, 10);
              return isNaN(m) ? 0 : m;
            }
            function gu() {
              var l = gr.selectionStart;
              if (l !== r) {
                var u = Re.val(), m = u[n.l], g = u.split(`
`), E = g[n.l], M = u.substr(0, l).split(`
`), H = 0, Q = 0, U = M[n.l], X = M[M[n.l] - 1][n.l], pe, de;
                for (de = 0; de < g[n.l]; de++)
                  pe = g[de][n.l], pe > Q && (H = de + 1, Q = pe);
                return {
                  _cursorRow: U,
                  //cursorRow
                  _cursorColumn: X,
                  //cursorCol
                  _rows: E,
                  //rows
                  _columns: Q,
                  //cols
                  _widestRow: H,
                  //wRow
                  _cursorPosition: l,
                  //pos
                  _cursorMax: m
                  //max
                };
              }
            }
            function Dn() {
              return Xs && Ae.x && Ae.y;
            }
            function oo() {
              return q ? sr[0] : ma;
            }
            function va(l, u) {
              return "<div " + (l ? I(l) == s.s ? 'class="' + l + '"' : function() {
                var m, g = ye;
                if (A.isPlainObject(l))
                  for (m in l)
                    g += (m === "c" ? "class" : m) + '="' + l[m] + '" ';
                return g;
              }() : ye) + ">" + (u || ye) + "</div>";
            }
            function lr(l, u) {
              var m = I(u) == s.b, g = m ? be : u || be;
              return F && !g[n.l] ? null : F ? g[m ? "children" : "find"](oa + l.replace(/\s/g, oa)).eq(0) : A(va(l));
            }
            function xi(l, u) {
              for (var m = u.split(oa), g = 0, E; g < m.length; g++) {
                if (!l[n.hOP](m[g]))
                  return;
                E = l[m[g]], g < m.length && I(E) == s.o && (l = E);
              }
              return E;
            }
            function yu(l, u, m) {
              for (var g = u.split(oa), E = g.length, M = 0, H = {}, Q = H; M < E; M++)
                H = H[g[M]] = M + 1 < E ? {} : m;
              A.extend(l, Q, !0);
            }
            function co(l) {
              var u = Ct.updateOnLoad;
              u = I(u) == s.s ? u.split(Mt) : u, o.isA(u) && !N && K(u, l);
            }
            function Ur(l, u, m) {
              if (m)
                return m;
              if (I(l) == s.o && I(u) == s.o) {
                for (var g in l)
                  if (g !== "c")
                    if (l[n.hOP](g) && u[n.hOP](g)) {
                      if (Ur(l[g], u[g]))
                        return !0;
                    } else
                      return !0;
              } else
                return l !== u;
              return !1;
            }
            function Zt() {
              return A.extend.apply(this, [!0].concat([].slice.call(arguments)));
            }
            function mt(l, u) {
              return me.addClass.call(l, u);
            }
            function Ot(l, u) {
              return me.removeClass.call(l, u);
            }
            function Aa(l, u, m) {
              return m ? mt(l, u) : Ot(l, u);
            }
            function or(l) {
              return me.remove.call(l);
            }
            function an(l, u) {
              return me.find.call(l, u).eq(0);
            }
            ee.sleep = function() {
              qe = !0;
            }, ee.update = function(l) {
              if (!N) {
                var u, m, g = I(l) == s.s, E, M, H;
                return g ? l === At ? (u = fu(), m = vu(), E = u || m, E && Ra({
                  _contentSizeChanged: m,
                  _changedOptions: ge ? r : Ct
                })) : l === Is ? za ? (M = ti(rs.takeRecords()), H = ai(ns.takeRecords())) : M = ee.update(At) : l === "zoom" && Ra({
                  _hostSizeChanged: !0,
                  _contentSizeChanged: !0
                }) : (l = qe || l, qe = !1, (!ee.update(Is) || l) && Ra({ _force: l })), ao(), E || M || H;
              }
            }, ee.options = function(l, u) {
              var m = {}, g;
              if (A.isEmptyObject(l) || !A.isPlainObject(l))
                if (I(l) == s.s)
                  if (arguments.length > 1)
                    yu(m, l, u), g = pi(m);
                  else
                    return xi(bn, l);
                else
                  return bn;
              else
                g = pi(l);
              A.isEmptyObject(g) || Ra({ _changedOptions: g });
            }, ee.destroy = function() {
              if (!N) {
                Y.remove(ee), vi(), ls(ka), ls(Ma);
                for (var l in rr)
                  ee.removeExt(l);
                for (; ni[n.l] > 0; )
                  ni.pop()();
                di(!0), jt && or(jt), nr && or(nr), fe && or(Ma), gi(!0), bi(!0), mi(!0);
                for (var u = 0; u < Br[n.l]; u++)
                  A(Br[u]).off(Gs, fi);
                Br = r, N = !0, qe = !0, z(O, 0), ua("onDestroyed");
              }
            }, ee.scroll = function(l, u, m, g) {
              if (arguments.length === 0 || l === r) {
                var E = wt, M = Tt, H = ir && ke && V.i, Q = ir && ke && V.n, U = E._currentScroll, X = E._currentScrollRatio, pe = E._maxScroll;
                return X = H ? 1 - X : X, U = H ? pe - U : U, U *= Q ? -1 : 1, pe *= Q ? -1 : 1, {
                  position: {
                    x: U,
                    y: M._currentScroll
                  },
                  ratio: {
                    x: X,
                    y: M._currentScrollRatio
                  },
                  max: {
                    x: pe,
                    y: M._maxScroll
                  },
                  handleOffset: {
                    x: E._handleOffset,
                    y: M._handleOffset
                  },
                  handleLength: {
                    x: E._handleLength,
                    y: M._handleLength
                  },
                  handleLengthRatio: {
                    x: E._handleLengthRatio,
                    y: M._handleLengthRatio
                  },
                  trackLength: {
                    x: E._trackLength,
                    y: M._trackLength
                  },
                  snappedHandleOffset: {
                    x: E._snappedHandleOffset,
                    y: M._snappedHandleOffset
                  },
                  isRTL: ke,
                  isRTLNormalized: ir
                };
              }
              ee.update(Is);
              var de = ir, we = [fn, ze, "l"], Te = [dn, Ze, "t"], $e = ["+=", "-=", "*=", "/="], xe = I(u) == s.o, He = xe ? u.complete : g, Pe, Je = {}, Ft = {}, dt, Kt, Dt, gt = "end", yt = "begin", ct = "center", xt = "nearest", Ha = "always", ut = "never", Ca = "ifneeded", Ge = n.l, Qe, le, et, tt, fa, cr = [fn, dn, "xy", "yx"], Wr = [yt, gt, ct, xt], Jt = [Ha, ut, Ca], Ya = l[n.hOP]("el"), ja = Ya ? l.el : l, da = ja instanceof A || w ? ja instanceof w : !1, Ln = da ? !1 : lo(ja), _a = function() {
                dt && $a(!0), Kt && $a(!1);
              }, Qt = I(He) != s.f ? r : function() {
                _a(), He();
              };
              function ur(_e, he) {
                for (Pe = 0; Pe < he[Ge]; Pe++)
                  if (_e === he[Pe])
                    return !0;
                return !1;
              }
              function ha(_e, he) {
                var _t = _e ? we : Te;
                if (he = I(he) == s.s || I(he) == s.n ? [he, he] : he, o.isA(he))
                  return _e ? he[0] : he[1];
                if (I(he) == s.o) {
                  for (Pe = 0; Pe < _t[Ge]; Pe++)
                    if (_t[Pe] in he)
                      return he[_t[Pe]];
                }
              }
              function lt(_e, he) {
                var _t = I(he) == s.s, qt, We, wa = _e ? wt : Tt, bt = wa._currentScroll, ea = wa._maxScroll, Sr = " * ", at, Ta = ke && _e, Ga = Ta && V.n && !de, Lt = "replace", dr = eval, Va;
                if (_t ? (he[Ge] > 2 && (Va = he.substr(0, 2), j(Va, $e) > -1 && (qt = Va)), he = qt ? he.substr(2) : he, he = he[Lt](/min/g, 0)[Lt](/</g, 0)[Lt](/max/g, (Ga ? "-" : ye) + tr)[Lt](/>/g, (Ga ? "-" : ye) + tr)[Lt](/px/g, ye)[Lt](/%/g, Sr + ea * (Ta && V.n ? -1 : 1) / 100)[Lt](/vw/g, Sr + Fe.w)[Lt](/vh/g, Sr + Fe.h), We = Wa(isNaN(he) ? Wa(dr(he), !0).toFixed() : he)) : We = he, We !== r && !isNaN(We) && I(We) == s.n) {
                  var wr = de && Ta, Da = bt * (wr && V.n ? -1 : 1), Xa = wr && V.i, Ei = wr && V.n;
                  switch (Da = Xa ? ea - Da : Da, qt) {
                    case "+=":
                      at = Da + We;
                      break;
                    case "-=":
                      at = Da - We;
                      break;
                    case "*=":
                      at = Da * We;
                      break;
                    case "/=":
                      at = Da / We;
                      break;
                    default:
                      at = We;
                      break;
                  }
                  at = Xa ? ea - at : at, at *= Ei ? -1 : 1, at = Ta && V.n ? v.min(0, v.max(ea, at)) : v.max(0, v.min(ea, at));
                }
                return at === bt ? r : at;
              }
              function Rt(_e, he, _t, qt) {
                var We = [_t, _t], wa = I(_e), bt, ea;
                if (wa == he)
                  _e = [_e, _e];
                else if (wa == s.a) {
                  if (bt = _e[Ge], bt > 2 || bt < 1)
                    _e = We;
                  else
                    for (bt === 1 && (_e[1] = _t), Pe = 0; Pe < bt; Pe++)
                      if (ea = _e[Pe], I(ea) != he || !ur(ea, qt)) {
                        _e = We;
                        break;
                      }
                } else wa == s.o ? _e = [_e[fn] || _t, _e[dn] || _t] : _e = We;
                return { x: _e[0], y: _e[1] };
              }
              function $t(_e) {
                var he = [], _t, qt, We = [Ze, It, Gt, ze];
                for (Pe = 0; Pe < _e[Ge] && Pe !== We[Ge]; Pe++)
                  _t = _e[Pe], qt = I(_t), qt == s.b ? he.push(_t ? Wa(fa.css(ft + We[Pe])) : 0) : he.push(qt == s.n ? _t : 0);
                return he;
              }
              if (da || Ln) {
                var Ne = Ya ? l.margin : 0, xa = Ya ? l.axis : 0, Er = Ya ? l.scroll : 0, Yr = Ya ? l.block : 0, vr = [0, 0, 0, 0], Qa = I(Ne), Be;
                if (fa = da ? ja : A(ja), fa[Ge] > 0) {
                  Qa == s.n || Qa == s.b ? Ne = $t([Ne, Ne, Ne, Ne]) : Qa == s.a ? (Be = Ne[Ge], Be === 2 ? Ne = $t([Ne[0], Ne[1], Ne[0], Ne[1]]) : Be >= 4 ? Ne = $t(Ne) : Ne = vr) : Qa == s.o ? Ne = $t([Ne[Ze], Ne[It], Ne[Gt], Ne[ze]]) : Ne = vr, Qe = ur(xa, cr) ? xa : "xy", le = Rt(Er, s.s, Ha, Jt), et = Rt(Yr, s.s, yt, Wr), tt = Ne;
                  var Ht = {
                    l: wt._currentScroll,
                    t: Tt._currentScroll
                  }, fr = pa.offset(), Ke = fa.offset(), Nt = {
                    x: le.x == ut || Qe == dn,
                    y: le.y == ut || Qe == fn
                  };
                  Ke[Ze] -= tt[0], Ke[ze] -= tt[3];
                  var Ea = {
                    x: v.round(Ke[ze] - fr[ze] + Ht.l),
                    y: v.round(Ke[Ze] - fr[Ze] + Ht.t)
                  };
                  if (ke && (!V.n && !V.i && (Ea.x = v.round(fr[ze] - Ke[ze] + Ht.l)), V.n && de && (Ea.x *= -1), V.i && de && (Ea.x = v.round(fr[ze] - Ke[ze] + (wt._maxScroll - Ht.l)))), et.x != yt || et.y != yt || le.x == Ca || le.y == Ca || ke) {
                    var Pn = fa[0], os = C ? Pn[n.bCR]() : {
                      width: Pn[n.oW],
                      height: Pn[n.oH]
                    }, Sa = {
                      w: os[Se] + tt[3] + tt[1],
                      h: os[it] + tt[0] + tt[2]
                    }, qa = function(_e) {
                      var he = ba(_e), _t = he._w_h, qt = he._left_top, We = he._x_y, wa = et[We] == (_e && ke ? yt : gt), bt = et[We] == ct, ea = et[We] == xt, Sr = le[We] == ut, at = le[We] == Ca, Ta = Fe[_t], Ga = fr[qt], Lt = Sa[_t], dr = Ke[qt], Va = bt ? 2 : 1, wr = dr + Lt / 2, Da = Ga + Ta / 2, Xa = Lt <= Ta && dr >= Ga && dr + Lt <= Ga + Ta;
                      Sr ? Nt[We] = !0 : Nt[We] || ((ea || at) && (Nt[We] = at ? Xa : !1, wa = Lt < Ta ? wr > Da : wr < Da), Ea[We] -= wa || bt ? (Ta / Va - Lt / Va) * (_e && ke && de ? -1 : 1) : 0);
                    };
                    qa(!0), qa(!1);
                  }
                  Nt.y && delete Ea.y, Nt.x && delete Ea.x, l = Ea;
                }
              }
              Je[kt] = lt(!0, ha(!0, l)), Je[Bt] = lt(!1, ha(!1, l)), dt = Je[kt] !== r, Kt = Je[Bt] !== r, (dt || Kt) && (u > 0 || xe) ? xe ? (u.complete = Qt, Le.animate(Je, u)) : (Dt = {
                duration: u,
                complete: Qt
              }, o.isA(m) || A.isPlainObject(m) ? (Ft[kt] = m[0] || m.x, Ft[Bt] = m[1] || m.y, Dt.specialEasing = Ft) : Dt.easing = m, Le.animate(Je, Dt)) : (dt && Le[kt](Je[kt]), Kt && Le[Bt](Je[Bt]), _a());
            }, ee.scrollStop = function(l, u, m) {
              return Le.stop(l, u, m), ee;
            }, ee.getElements = function(l) {
              var u = {
                target: gr,
                host: ca,
                padding: yr,
                viewport: Nr,
                content: ma,
                scrollbarHorizontal: {
                  scrollbar: $r[0],
                  track: Kn[0],
                  handle: An[0]
                },
                scrollbarVertical: {
                  scrollbar: Hr[0],
                  track: Jn[0],
                  handle: Cn[0]
                },
                scrollbarCorner: Xt[0]
              };
              return I(l) == s.s ? xi(u, l) : u;
            }, ee.getState = function(l) {
              function u(g) {
                if (!A.isPlainObject(g))
                  return g;
                var E = Zt({}, g), M = function(H, Q) {
                  E[n.hOP](H) && (E[Q] = E[H], delete E[H]);
                };
                return M("w", Se), M("h", it), delete E.c, E;
              }
              var m = {
                destroyed: !!u(N),
                sleeping: !!u(qe),
                autoUpdate: u(!za),
                widthAuto: u(ga),
                heightAuto: u(br),
                padding: u(Vs),
                overflowAmount: u(tn),
                hideOverflow: u(Sn),
                hasOverflow: u(Fa),
                contentScrollSize: u(Or),
                viewportSize: u(Fe),
                hostSize: u(En),
                documentMixed: u(W)
              };
              return I(l) == s.s ? xi(m, l) : m;
            }, ee.ext = function(l) {
              var u, m = iu.split(" "), g = 0;
              if (I(l) == s.s) {
                if (rr[n.hOP](l))
                  for (u = Zt({}, rr[l]); g < m.length; g++)
                    delete u[m[g]];
              } else {
                u = {};
                for (g in rr)
                  u[g] = Zt({}, ee.ext(g));
              }
              return u;
            }, ee.addExt = function(l, u) {
              var m = d.extension(l), g, E, M, H, Q = !0;
              if (m) {
                if (rr[n.hOP](l))
                  return ee.ext(l);
                if (g = m.extensionFactory.call(
                  ee,
                  Zt({}, m.defaultOptions),
                  A,
                  o
                ), g && (M = g.contract, I(M) == s.f && (H = M(e), Q = I(H) == s.b ? H : Q), Q))
                  return rr[l] = g, E = g.added, I(E) == s.f && E(u), ee.ext(l);
              } else
                console.warn('A extension with the name "' + l + `" isn't registered.`);
            }, ee.removeExt = function(l) {
              var u = rr[l], m;
              return u ? (delete rr[l], m = u.removed, I(m) == s.f && m(), !0) : !1;
            };
            function bu(l, u, m) {
              El = ue.defaultOptions, Ce = ue.nativeScrollbarStyling, y = Zt({}, ue.nativeScrollbarSize), Ae = Zt({}, ue.nativeScrollbarIsOverlaid), Xe = Zt({}, ue.overlayScrollbarDummySize), V = Zt({}, ue.rtlScrollBehavior), pi(Zt({}, El, u)), f = ue.cssCalc, Ie = ue.msie, De = ue.autoUpdateRecommended, h = ue.supportTransition, C = ue.supportTransform, $ = ue.supportPassiveEvents, ie = ue.supportResizeObserver, ve = ue.supportMutationObserver, ue.restrictedMeasuring, Oa = A(l.ownerDocument), Jr = Oa[0], Zn = A(Jr.defaultView || Jr.parentWindow), xn = Zn[0], Kr = an(Oa, "html"), Rr = an(Kr, "body"), Re = A(l), gr = Re[0], q = Re.is("textarea"), Ee = Re.is("body"), W = Jr !== a, F = q ? Re.hasClass(Qn) && Re.parent().hasClass(Ws) : Re.hasClass(Yt) && Re.children(oa + zs)[n.l];
              var g, E;
              return Ae.x && Ae.y && !Ct.nativeScrollbarsOverlaid.initialize ? (ge = !0, ua("onInitializationWithdrawn"), F && (mi(!0), gi(!0), bi(!0)), ge = !1, N = !0, qe = !0, ee) : (Ee && (g = {}, g.l = v.max(Re[kt](), Kr[kt](), Zn[kt]()), g.t = v.max(Re[Bt](), Kr[Bt](), Zn[Bt]()), E = function() {
                Le.removeAttr(n.ti), ra(Le, Zr, E, !0, !0);
              }), mi(), gi(), bi(), _u(), ro(!0), ro(!1), hu(), lu(), ls(ka, ou), Ee && (Le[kt](g.l)[Bt](g.t), a.activeElement == l && Nr.focus && (Le.attr(n.ti, "-1"), Nr.focus(), ra(Le, Zr, E, !1, !0))), ee.update(At), ge = !0, ua("onInitialized"), K(Qs, function(M, H) {
                ua(H.n, H.a);
              }), Qs = [], I(m) == s.s && (m = [m]), o.isA(m) ? K(m, function(M, H) {
                ee.addExt(H);
              }) : A.isPlainObject(m) && K(m, function(M, H) {
                ee.addExt(M, H);
              }), setTimeout(function() {
                h && !N && mt(be, ul);
              }, 333), ee);
            }
            return d.valid(bu(O, ae, G)) && z(O, ee), ee;
          }
          return d = e[c] = function(O, ae, G) {
            if (arguments[n.l] === 0)
              return this;
            var ue = [], Y = A.isPlainObject(ae), I, j;
            return O ? (O = O[n.l] != r ? O : [O[0] || O], S(), O[n.l] > 0 && (Y ? A.each(O, function(K, ee) {
              I = ee, I !== r && ue.push(ce(I, ae, G, x, i));
            }) : A.each(O, function(K, ee) {
              I = z(ee), (ae === "!" && d.valid(I) || o.type(ae) == s.f && ae(ee, I) || ae === r) && ue.push(I);
            }), j = ue[n.l] === 1 ? ue[0] : ue), j) : Y || !ae ? j : ue;
          }, d.globals = function() {
            S();
            var O = A.extend(!0, {}, x);
            return delete O.msie, O;
          }, d.defaultOptions = function(O) {
            S();
            var ae = x.defaultOptions;
            if (O === r)
              return A.extend(!0, {}, ae);
            x.defaultOptions = A.extend(!0, {}, ae, b._validate(O, b._template, !0, ae)._default);
          }, d.valid = function(O) {
            return O instanceof d && !O.getState().destroyed;
          }, d.extension = function(O, ae, G) {
            var ue = o.type(O) == s.s, Y = arguments[n.l], I = 0;
            if (Y < 1 || !ue)
              return A.extend(!0, { length: p[n.l] }, p);
            if (ue) {
              if (o.type(ae) == s.f)
                p.push({
                  name: O,
                  extensionFactory: ae,
                  defaultOptions: G
                });
              else
                for (; I < p[n.l]; I++)
                  if (p[I].name === O)
                    if (Y > 1)
                      p.splice(I, 1);
                    else
                      return A.extend(!0, {}, p[I]);
            }
          }, d;
        }();
        return w && w.fn && (w.fn.overlayScrollbars = function(d, x) {
          var i = this;
          return w.isPlainObject(d) ? (w.each(i, function() {
            oe(this, d, x);
          }), i) : oe(i, d);
        }), oe;
      }
    );
  }(gs)), gs.exports;
}
var Vu = Gu();
const Ii = /* @__PURE__ */ Qu(Vu);
class Xu extends jo.extend({
  name: "overlay-scrollbars",
  props: {
    options: {
      type: Object
    },
    extensions: {
      type: [String, Array, Object]
    }
  },
  methods: {
    osInstance() {
      return this._osInstace;
    },
    osTarget() {
      return this.$el || null;
    }
  },
  watch: {
    options(e, a) {
      let r = this._osInstace;
      Ii.valid(r) && r.options(e);
    }
  },
  data() {
    return {};
  },
  mounted() {
    this._osInstace = Ii(this.osTarget(), this.options || {}, this.extensions);
  },
  beforeDestroy() {
    const e = this._osInstace;
    Ii.valid(e) && (e.destroy(), this._osInstace = null);
  }
}) {
  constructor() {
    super(...arguments), this._osInstace = null;
  }
}
function Zu(t, e, a, r, c, s, n, _, o, v) {
  const w = typeof a == "function" ? a.options : a;
  return t && t.render && (w.render = t.render, w.staticRenderFns = t.staticRenderFns, w._compiled = !0), a;
}
const Ku = Xu;
var Qo = function() {
  var t = this, e = t.$createElement, a = t._self._c || e;
  return a("div", { staticClass: "os-host" }, [
    a("div", { staticClass: "os-resize-observer-host" }),
    t._v(" "),
    a("div", { staticClass: "os-padding" }, [
      a("div", { staticClass: "os-viewport" }, [
        a("div", { staticClass: "os-content" }, [t._t("default")], 2)
      ])
    ]),
    t._v(" "),
    t._m(0),
    t._v(" "),
    t._m(1),
    t._v(" "),
    a("div", { staticClass: "os-scrollbar-corner" })
  ]);
}, Ju = [
  function() {
    var t = this, e = t.$createElement, a = t._self._c || e;
    return a("div", { staticClass: "os-scrollbar os-scrollbar-horizontal " }, [
      a("div", { staticClass: "os-scrollbar-track" }, [
        a("div", { staticClass: "os-scrollbar-handle" })
      ])
    ]);
  },
  function() {
    var t = this, e = t.$createElement, a = t._self._c || e;
    return a("div", { staticClass: "os-scrollbar os-scrollbar-vertical" }, [
      a("div", { staticClass: "os-scrollbar-track" }, [
        a("div", { staticClass: "os-scrollbar-handle" })
      ])
    ]);
  }
];
Qo._withStripped = !0;
const ev = void 0, tv = Zu(
  { render: Qo, staticRenderFns: Ju },
  ev,
  Ku
), av = J({
  name: "HScrollbars",
  components: {
    OverlayScrollbarsComponent: tv
  },
  props: {
    options: {
      type: Object,
      // https://github.com/KingSora/OverlayScrollbars/tree/v1.x
      default: () => ({})
    },
    maxHeight: {
      type: Number,
      default: 0
    }
  },
  emits: ["scroll-end-y", "scroll-end-x", "is-scroll", "scroll"],
  setup(t, { emit: e }) {
    const a = L(null), r = L(null), c = () => {
      var s;
      a.value && (r.value = ((s = a.value.osInstance()) == null ? void 0 : s.scroll()) || null, r.value && (e("scroll", r.value), r.value.ratio.y === 1 && e("scroll-end-y", r.value), r.value.ratio.x === 1 && e("scroll-end-x", r.value)));
    };
    return Ia(async () => {
      var n, _, o;
      if (await Ue(), await Ue(), !a.value)
        return;
      const s = (_ = (n = a.value.osTarget()) == null ? void 0 : n.querySelector(".os-content")) == null ? void 0 : _.clientHeight;
      s && (r.value = ((o = a.value.osInstance()) == null ? void 0 : o.scroll()) || null, t.maxHeight < s && e("is-scroll", r.value));
    }), {
      scrollFunc: c,
      overlayScrollbars: a
    };
  }
});
var rv = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("overlay-scrollbars-component", { ref: "overlayScrollbars", staticClass: "h-overlay-scroll", style: {
    maxHeight: e.maxHeight === 0 ? "none" : `${e.maxHeight}px`
  }, attrs: { options: {
    ...e.options,
    callbacks: {
      onScroll: e.scrollFunc
    }
  } } }, [e._t("default")], 2);
}, nv = [], sv = /* @__PURE__ */ Z(
  av,
  rv,
  nv,
  !1,
  null,
  null
);
const qo = sv.exports, Go = Symbol("listPosition"), Vo = Symbol("clickedButton"), Xo = Symbol("isActiveList"), Zo = Symbol("dropdownList"), Ko = Symbol("dropdownButton"), Jo = Symbol("clickedDropdownItemButton"), ec = Symbol("button_disabled"), iv = J({
  name: "HDropdownArea",
  props: {
    value: {
      type: Object,
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    scrollEventRefs: {
      type: Array,
      required: !1
    }
  },
  emits: ["input", "blur"],
  setup(t, { emit: e }) {
    var d;
    const a = L(!1), r = L(null), c = L(0), s = L(null), n = L(null), _ = L(null);
    (d = t.value) != null && d.value && (_.value = t.value);
    const o = L({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      clientWidth: 0,
      clientHeight: 0
    }), v = () => {
      if (a.value = !a.value, !r.value)
        return;
      const { bottom: x, left: i, right: p, top: b, width: S } = r.value.getBoundingClientRect();
      c.value = S, o.value = {
        bottom: x,
        left: i,
        right: p,
        top: b,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, w = () => {
      if (!r.value)
        return;
      const { bottom: x, left: i, right: p, top: b } = r.value.getBoundingClientRect();
      o.value = {
        ...o.value,
        bottom: x,
        left: i,
        right: p,
        top: b
      };
    }, P = () => {
      o.value = {
        ...o.value,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, A = (x) => {
      const i = x.target;
      if (!(i instanceof Element))
        return;
      const p = i.closest(
        ".h_dropdown_button"
      );
      if (p) {
        p !== s.value && (a.value = !1, e("blur"));
        return;
      }
      const b = i.closest(
        ".h_dropdown_list"
      );
      b || (a.value = !1, e("blur")), b !== n.value && (a.value = !1, e("blur"));
    }, z = (x, i, p) => {
      e("input", { value: i, name: p }), _.value = {
        value: i,
        name: p
      }, a.value = !1;
    };
    Ja(a, (x) => {
      x ? (window.addEventListener("scroll", w), Array.isArray(t.scrollEventRefs) && t.scrollEventRefs.forEach((i) => {
        const p = document.querySelector(i);
        p instanceof HTMLElement && p.addEventListener("scroll", w);
      }), window.addEventListener("resize", P), window.addEventListener("click", A)) : (window.removeEventListener("scroll", w), Array.isArray(t.scrollEventRefs) && t.scrollEventRefs.forEach((i) => {
        const p = document.querySelector(i);
        p instanceof HTMLElement && p.removeEventListener(
          "scroll",
          w
        );
      }), window.removeEventListener("resize", P), window.removeEventListener("click", A));
    }), Gr(() => {
      window.removeEventListener("scroll", w), window.removeEventListener("resize", P), window.removeEventListener("click", A);
    });
    const oe = L(t.disabled);
    return Ja(t, (x) => {
      oe.value = x.disabled;
    }), ne(Vo, v), ne(Xo, a), ne(Go, o), ne(Zo, n), ne(Ko, s), ne(Jo, z), ne(ec, oe), {
      dropdownArea: r,
      isActiveList: a,
      dropdownAreaWidth: c,
      selectedValue: _
    };
  }
});
var lv = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { ref: "dropdownArea", staticClass: "h_dropdown_area" }, [e._t("default", null, { isActiveList: e.isActiveList, listWidth: e.dropdownAreaWidth })], 2);
}, ov = [], cv = /* @__PURE__ */ Z(
  iv,
  lv,
  ov,
  !1,
  null,
  null
);
const nb = cv.exports, uv = J({
  name: "HDropdownItem"
});
var vv = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_dropdown_item" }, [e._t("default")], 2);
}, fv = [], dv = /* @__PURE__ */ Z(
  uv,
  vv,
  fv,
  !1,
  null,
  null
);
const sb = dv.exports, _v = J({
  name: "HDropdownButton",
  setup() {
    const t = k(Vo), e = k(Ko), a = k(ec);
    return {
      clickedButton: t,
      dropdownButton: e,
      buttonDisabled: a
    };
  }
});
var hv = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { ref: "dropdownButton", staticClass: "h_dropdown_button", attrs: { type: "button", disabled: e.buttonDisabled }, on: { click: e.clickedButton } }, [e._t("default")], 2);
}, pv = [], mv = /* @__PURE__ */ Z(
  _v,
  hv,
  pv,
  !1,
  null,
  null
);
const ib = mv.exports, gv = J({
  name: "HDropdownItemButton",
  props: {
    value: {
      type: [String, Number, Object, Array],
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const t = Ru();
    return {
      clickedDropdownItemButton: k(Jo, (a, r, c) => {
        console.debug("clickedDropdownItemButton", a, r, c);
      }),
      attrs: t
    };
  }
});
var yv = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", e._b({ staticClass: "h_dropdown_item_button", attrs: { type: "button", disabled: e.disabled }, on: { click: function(r) {
    return e.clickedDropdownItemButton(r, e.$props.value ?? "", e.$props.name ?? "");
  } } }, "button", e.attrs, !1), [e._t("default")], 2);
}, bv = [], Av = /* @__PURE__ */ Z(
  gv,
  yv,
  bv,
  !1,
  null,
  null
);
const lb = Av.exports, Cv = J({
  name: "HDropdownList",
  props: {
    listWidth: Number
  },
  components: {
    HScrollbars: qo
  },
  setup(t) {
    const e = k(Xo), a = k(Go), r = k(Zo), c = (_, o, v, w) => o + v > w ? {
      top: "auto",
      bottom: `${w - _}px`,
      marginBottom: "-1px"
    } : {
      top: `${o}px`,
      bottom: "auto",
      marginTop: "-1px"
    }, s = (_, o, v, w) => o + v > w ? {
      left: "auto",
      right: `${w - o}px`
    } : {
      left: `${_}px`,
      right: "auto"
    }, n = Me(() => {
      if (!a || !Ss(a))
        return {
          position: "fixed"
        };
      const { bottom: _, left: o, right: v, top: w, clientWidth: P, clientHeight: A } = a.value;
      if (!((r == null ? void 0 : r.value) instanceof HTMLElement))
        return {};
      const { height: z, width: oe } = r.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...c(w, _, z, A),
        ...s(o, v, oe, P),
        width: `${t.listWidth}px`
      };
    });
    return {
      isActiveList: e,
      listStyle: n,
      dropdownList: r
    };
  }
});
var xv = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, e.isActiveList ? a("div", { ref: "dropdownList", staticClass: "h_dropdown_list", style: e.listStyle }, [a("HScrollbars", { staticStyle: { "max-height": "300px" } }, [e._t("default")], 2)], 1) : e._e();
}, Ev = [], Sv = /* @__PURE__ */ Z(
  Cv,
  xv,
  Ev,
  !1,
  null,
  null
);
const ob = Sv.exports, wv = J({
  name: "HCheckAuth",
  props: {
    isAuth: {
      type: String,
      required: !0
    },
    noAuthList: {
      type: Array,
      default: () => []
    },
    originalEventTarget: {
      type: String,
      default: null
    },
    originalEventTargetCallback: {
      type: String,
      default: null
    }
  },
  emits: {
    "auth-verification-result": ({
      event: t,
      result: e,
      originalFunc: a
    }) => t && e && typeof a == "function" ? !0 : (console.error(
      "auth-verification-result 이벤트 페이로드가 옳지 않음!"
    ), !1)
  },
  setup(t, { slots: e, emit: a }) {
    const r = L(null), c = L(null), s = (o) => (o.preventDefault(), o.stopPropagation(), !t.noAuthList.includes(t.isAuth)), n = (o) => {
      var v, w, P;
      (v = c.value) == null || v.removeEventListener("click", _, {
        capture: !0
      }), (w = c.value) == null || w.click(), (P = c.value) == null || P.addEventListener("click", _, {
        capture: !0
      });
    }, _ = (o) => {
      if (o.preventDefault(), o.stopPropagation(), !s(o)) {
        a("auth-verification-result", {
          event: o,
          result: !1,
          originalFunc: n
        });
        return;
      }
      a("auth-verification-result", {
        event: o,
        result: !0,
        originalFunc: n
      });
    };
    return Ia(() => {
      var v, w, P;
      if (r.value = ((v = e.default) == null ? void 0 : v.call(e)[0]) || null, !r.value || !ys(r.value))
        return;
      const o = r.value.elm;
      !o || !nt(o) || (t.originalEventTarget ? (c.value = o.querySelector(t.originalEventTarget), (w = c.value) == null || w.addEventListener("click", _, {
        capture: !0
      })) : (c.value = o, (P = c.value) == null || P.addEventListener("click", _, {
        capture: !0
      })));
    }), Gr(() => {
      var o;
      !r.value || !ys(r.value) || (o = c.value) == null || o.removeEventListener("click", _);
    }), {
      checkAuth: s
    };
  }
});
var Tv = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", [e._t("default")], 2);
}, Dv = [], Lv = /* @__PURE__ */ Z(
  wv,
  Tv,
  Dv,
  !1,
  null,
  null
);
const cb = Lv.exports;
var tc = typeof global == "object" && global && global.Object === Object && global, Pv = typeof self == "object" && self && self.Object === Object && self, hr = tc || Pv || Function("return this")(), ln = hr.Symbol, ac = Object.prototype, Iv = ac.hasOwnProperty, Mv = ac.toString, Rn = ln ? ln.toStringTag : void 0;
function kv(t) {
  var e = Iv.call(t, Rn), a = t[Rn];
  try {
    t[Rn] = void 0;
    var r = !0;
  } catch {
  }
  var c = Mv.call(t);
  return r && (e ? t[Rn] = a : delete t[Rn]), c;
}
var Bv = Object.prototype, Rv = Bv.toString;
function $v(t) {
  return Rv.call(t);
}
var Hv = "[object Null]", Nv = "[object Undefined]", xo = ln ? ln.toStringTag : void 0;
function Wn(t) {
  return t == null ? t === void 0 ? Nv : Hv : xo && xo in Object(t) ? kv(t) : $v(t);
}
function On(t) {
  return t != null && typeof t == "object";
}
var bs = Array.isArray;
function rc(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ov = "[object AsyncFunction]", Fv = "[object Function]", zv = "[object GeneratorFunction]", Uv = "[object Proxy]";
function nc(t) {
  if (!rc(t))
    return !1;
  var e = Wn(t);
  return e == Fv || e == zv || e == Ov || e == Uv;
}
var Mi = hr["__core-js_shared__"], Eo = function() {
  var t = /[^.]+$/.exec(Mi && Mi.keys && Mi.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Wv(t) {
  return !!Eo && Eo in t;
}
var Yv = Function.prototype, jv = Yv.toString;
function Vr(t) {
  if (t != null) {
    try {
      return jv.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Qv = /[\\^$.*+?()[\]{}|]/g, qv = /^\[object .+?Constructor\]$/, Gv = Function.prototype, Vv = Object.prototype, Xv = Gv.toString, Zv = Vv.hasOwnProperty, Kv = RegExp(
  "^" + Xv.call(Zv).replace(Qv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jv(t) {
  if (!rc(t) || Wv(t))
    return !1;
  var e = nc(t) ? Kv : qv;
  return e.test(Vr(t));
}
function ef(t, e) {
  return t == null ? void 0 : t[e];
}
function on(t, e) {
  var a = ef(t, e);
  return Jv(a) ? a : void 0;
}
var $i = on(hr, "WeakMap"), tf = 9007199254740991, af = /^(?:0|[1-9]\d*)$/;
function rf(t, e) {
  var a = typeof t;
  return e = e ?? tf, !!e && (a == "number" || a != "symbol" && af.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function sc(t, e) {
  return t === e || t !== t && e !== e;
}
var nf = 9007199254740991;
function ic(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= nf;
}
function sf(t) {
  return t != null && ic(t.length) && !nc(t);
}
var lf = Object.prototype;
function of(t) {
  var e = t && t.constructor, a = typeof e == "function" && e.prototype || lf;
  return t === a;
}
function cf(t, e) {
  for (var a = -1, r = Array(t); ++a < t; )
    r[a] = e(a);
  return r;
}
var uf = "[object Arguments]";
function So(t) {
  return On(t) && Wn(t) == uf;
}
var lc = Object.prototype, vf = lc.hasOwnProperty, ff = lc.propertyIsEnumerable, df = So(/* @__PURE__ */ function() {
  return arguments;
}()) ? So : function(t) {
  return On(t) && vf.call(t, "callee") && !ff.call(t, "callee");
};
function _f() {
  return !1;
}
var oc = typeof exports == "object" && exports && !exports.nodeType && exports, wo = oc && typeof module == "object" && module && !module.nodeType && module, hf = wo && wo.exports === oc, To = hf ? hr.Buffer : void 0, pf = To ? To.isBuffer : void 0, Hi = pf || _f, mf = "[object Arguments]", gf = "[object Array]", yf = "[object Boolean]", bf = "[object Date]", Af = "[object Error]", Cf = "[object Function]", xf = "[object Map]", Ef = "[object Number]", Sf = "[object Object]", wf = "[object RegExp]", Tf = "[object Set]", Df = "[object String]", Lf = "[object WeakMap]", Pf = "[object ArrayBuffer]", If = "[object DataView]", Mf = "[object Float32Array]", kf = "[object Float64Array]", Bf = "[object Int8Array]", Rf = "[object Int16Array]", $f = "[object Int32Array]", Hf = "[object Uint8Array]", Nf = "[object Uint8ClampedArray]", Of = "[object Uint16Array]", Ff = "[object Uint32Array]", st = {};
st[Mf] = st[kf] = st[Bf] = st[Rf] = st[$f] = st[Hf] = st[Nf] = st[Of] = st[Ff] = !0;
st[mf] = st[gf] = st[Pf] = st[yf] = st[If] = st[bf] = st[Af] = st[Cf] = st[xf] = st[Ef] = st[Sf] = st[wf] = st[Tf] = st[Df] = st[Lf] = !1;
function zf(t) {
  return On(t) && ic(t.length) && !!st[Wn(t)];
}
function Uf(t) {
  return function(e) {
    return t(e);
  };
}
var cc = typeof exports == "object" && exports && !exports.nodeType && exports, Nn = cc && typeof module == "object" && module && !module.nodeType && module, Wf = Nn && Nn.exports === cc, ki = Wf && tc.process, Do = function() {
  try {
    var t = Nn && Nn.require && Nn.require("util").types;
    return t || ki && ki.binding && ki.binding("util");
  } catch {
  }
}(), Lo = Do && Do.isTypedArray, uc = Lo ? Uf(Lo) : zf, Yf = Object.prototype, jf = Yf.hasOwnProperty;
function Qf(t, e) {
  var a = bs(t), r = !a && df(t), c = !a && !r && Hi(t), s = !a && !r && !c && uc(t), n = a || r || c || s, _ = n ? cf(t.length, String) : [], o = _.length;
  for (var v in t)
    jf.call(t, v) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    c && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    rf(v, o))) && _.push(v);
  return _;
}
function qf(t, e) {
  return function(a) {
    return t(e(a));
  };
}
var Gf = qf(Object.keys, Object), Vf = Object.prototype, Xf = Vf.hasOwnProperty;
function Zf(t) {
  if (!of(t))
    return Gf(t);
  var e = [];
  for (var a in Object(t))
    Xf.call(t, a) && a != "constructor" && e.push(a);
  return e;
}
function Kf(t) {
  return sf(t) ? Qf(t) : Zf(t);
}
var Fn = on(Object, "create");
function Jf() {
  this.__data__ = Fn ? Fn(null) : {}, this.size = 0;
}
function ed(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var td = "__lodash_hash_undefined__", ad = Object.prototype, rd = ad.hasOwnProperty;
function nd(t) {
  var e = this.__data__;
  if (Fn) {
    var a = e[t];
    return a === td ? void 0 : a;
  }
  return rd.call(e, t) ? e[t] : void 0;
}
var sd = Object.prototype, id = sd.hasOwnProperty;
function ld(t) {
  var e = this.__data__;
  return Fn ? e[t] !== void 0 : id.call(e, t);
}
var od = "__lodash_hash_undefined__";
function cd(t, e) {
  var a = this.__data__;
  return this.size += this.has(t) ? 0 : 1, a[t] = Fn && e === void 0 ? od : e, this;
}
function qr(t) {
  var e = -1, a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
qr.prototype.clear = Jf;
qr.prototype.delete = ed;
qr.prototype.get = nd;
qr.prototype.has = ld;
qr.prototype.set = cd;
function ud() {
  this.__data__ = [], this.size = 0;
}
function ws(t, e) {
  for (var a = t.length; a--; )
    if (sc(t[a][0], e))
      return a;
  return -1;
}
var vd = Array.prototype, fd = vd.splice;
function dd(t) {
  var e = this.__data__, a = ws(e, t);
  if (a < 0)
    return !1;
  var r = e.length - 1;
  return a == r ? e.pop() : fd.call(e, a, 1), --this.size, !0;
}
function _d(t) {
  var e = this.__data__, a = ws(e, t);
  return a < 0 ? void 0 : e[a][1];
}
function hd(t) {
  return ws(this.__data__, t) > -1;
}
function pd(t, e) {
  var a = this.__data__, r = ws(a, t);
  return r < 0 ? (++this.size, a.push([t, e])) : a[r][1] = e, this;
}
function pr(t) {
  var e = -1, a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
pr.prototype.clear = ud;
pr.prototype.delete = dd;
pr.prototype.get = _d;
pr.prototype.has = hd;
pr.prototype.set = pd;
var zn = on(hr, "Map");
function md() {
  this.size = 0, this.__data__ = {
    hash: new qr(),
    map: new (zn || pr)(),
    string: new qr()
  };
}
function gd(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ts(t, e) {
  var a = t.__data__;
  return gd(e) ? a[typeof e == "string" ? "string" : "hash"] : a.map;
}
function yd(t) {
  var e = Ts(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function bd(t) {
  return Ts(this, t).get(t);
}
function Ad(t) {
  return Ts(this, t).has(t);
}
function Cd(t, e) {
  var a = Ts(this, t), r = a.size;
  return a.set(t, e), this.size += a.size == r ? 0 : 1, this;
}
function Xr(t) {
  var e = -1, a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Xr.prototype.clear = md;
Xr.prototype.delete = yd;
Xr.prototype.get = bd;
Xr.prototype.has = Ad;
Xr.prototype.set = Cd;
function xd(t, e) {
  for (var a = -1, r = e.length, c = t.length; ++a < r; )
    t[c + a] = e[a];
  return t;
}
function Ed() {
  this.__data__ = new pr(), this.size = 0;
}
function Sd(t) {
  var e = this.__data__, a = e.delete(t);
  return this.size = e.size, a;
}
function wd(t) {
  return this.__data__.get(t);
}
function Td(t) {
  return this.__data__.has(t);
}
var Dd = 200;
function Ld(t, e) {
  var a = this.__data__;
  if (a instanceof pr) {
    var r = a.__data__;
    if (!zn || r.length < Dd - 1)
      return r.push([t, e]), this.size = ++a.size, this;
    a = this.__data__ = new Xr(r);
  }
  return a.set(t, e), this.size = a.size, this;
}
function Pr(t) {
  var e = this.__data__ = new pr(t);
  this.size = e.size;
}
Pr.prototype.clear = Ed;
Pr.prototype.delete = Sd;
Pr.prototype.get = wd;
Pr.prototype.has = Td;
Pr.prototype.set = Ld;
function Pd(t, e) {
  for (var a = -1, r = t == null ? 0 : t.length, c = 0, s = []; ++a < r; ) {
    var n = t[a];
    e(n, a, t) && (s[c++] = n);
  }
  return s;
}
function Id() {
  return [];
}
var Md = Object.prototype, kd = Md.propertyIsEnumerable, Po = Object.getOwnPropertySymbols, Bd = Po ? function(t) {
  return t == null ? [] : (t = Object(t), Pd(Po(t), function(e) {
    return kd.call(t, e);
  }));
} : Id;
function Rd(t, e, a) {
  var r = e(t);
  return bs(t) ? r : xd(r, a(t));
}
function Io(t) {
  return Rd(t, Kf, Bd);
}
var Ni = on(hr, "DataView"), Oi = on(hr, "Promise"), Fi = on(hr, "Set"), Mo = "[object Map]", $d = "[object Object]", ko = "[object Promise]", Bo = "[object Set]", Ro = "[object WeakMap]", $o = "[object DataView]", Hd = Vr(Ni), Nd = Vr(zn), Od = Vr(Oi), Fd = Vr(Fi), zd = Vr($i), Lr = Wn;
(Ni && Lr(new Ni(new ArrayBuffer(1))) != $o || zn && Lr(new zn()) != Mo || Oi && Lr(Oi.resolve()) != ko || Fi && Lr(new Fi()) != Bo || $i && Lr(new $i()) != Ro) && (Lr = function(t) {
  var e = Wn(t), a = e == $d ? t.constructor : void 0, r = a ? Vr(a) : "";
  if (r)
    switch (r) {
      case Hd:
        return $o;
      case Nd:
        return Mo;
      case Od:
        return ko;
      case Fd:
        return Bo;
      case zd:
        return Ro;
    }
  return e;
});
var Ho = hr.Uint8Array, Ud = "__lodash_hash_undefined__";
function Wd(t) {
  return this.__data__.set(t, Ud), this;
}
function Yd(t) {
  return this.__data__.has(t);
}
function As(t) {
  var e = -1, a = t == null ? 0 : t.length;
  for (this.__data__ = new Xr(); ++e < a; )
    this.add(t[e]);
}
As.prototype.add = As.prototype.push = Wd;
As.prototype.has = Yd;
function jd(t, e) {
  for (var a = -1, r = t == null ? 0 : t.length; ++a < r; )
    if (e(t[a], a, t))
      return !0;
  return !1;
}
function Qd(t, e) {
  return t.has(e);
}
var qd = 1, Gd = 2;
function vc(t, e, a, r, c, s) {
  var n = a & qd, _ = t.length, o = e.length;
  if (_ != o && !(n && o > _))
    return !1;
  var v = s.get(t), w = s.get(e);
  if (v && w)
    return v == e && w == t;
  var P = -1, A = !0, z = a & Gd ? new As() : void 0;
  for (s.set(t, e), s.set(e, t); ++P < _; ) {
    var oe = t[P], d = e[P];
    if (r)
      var x = n ? r(d, oe, P, e, t, s) : r(oe, d, P, t, e, s);
    if (x !== void 0) {
      if (x)
        continue;
      A = !1;
      break;
    }
    if (z) {
      if (!jd(e, function(i, p) {
        if (!Qd(z, p) && (oe === i || c(oe, i, a, r, s)))
          return z.push(p);
      })) {
        A = !1;
        break;
      }
    } else if (!(oe === d || c(oe, d, a, r, s))) {
      A = !1;
      break;
    }
  }
  return s.delete(t), s.delete(e), A;
}
function Vd(t) {
  var e = -1, a = Array(t.size);
  return t.forEach(function(r, c) {
    a[++e] = [c, r];
  }), a;
}
function Xd(t) {
  var e = -1, a = Array(t.size);
  return t.forEach(function(r) {
    a[++e] = r;
  }), a;
}
var Zd = 1, Kd = 2, Jd = "[object Boolean]", e_ = "[object Date]", t_ = "[object Error]", a_ = "[object Map]", r_ = "[object Number]", n_ = "[object RegExp]", s_ = "[object Set]", i_ = "[object String]", l_ = "[object Symbol]", o_ = "[object ArrayBuffer]", c_ = "[object DataView]", No = ln ? ln.prototype : void 0, Bi = No ? No.valueOf : void 0;
function u_(t, e, a, r, c, s, n) {
  switch (a) {
    case c_:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case o_:
      return !(t.byteLength != e.byteLength || !s(new Ho(t), new Ho(e)));
    case Jd:
    case e_:
    case r_:
      return sc(+t, +e);
    case t_:
      return t.name == e.name && t.message == e.message;
    case n_:
    case i_:
      return t == e + "";
    case a_:
      var _ = Vd;
    case s_:
      var o = r & Zd;
      if (_ || (_ = Xd), t.size != e.size && !o)
        return !1;
      var v = n.get(t);
      if (v)
        return v == e;
      r |= Kd, n.set(t, e);
      var w = vc(_(t), _(e), r, c, s, n);
      return n.delete(t), w;
    case l_:
      if (Bi)
        return Bi.call(t) == Bi.call(e);
  }
  return !1;
}
var v_ = 1, f_ = Object.prototype, d_ = f_.hasOwnProperty;
function __(t, e, a, r, c, s) {
  var n = a & v_, _ = Io(t), o = _.length, v = Io(e), w = v.length;
  if (o != w && !n)
    return !1;
  for (var P = o; P--; ) {
    var A = _[P];
    if (!(n ? A in e : d_.call(e, A)))
      return !1;
  }
  var z = s.get(t), oe = s.get(e);
  if (z && oe)
    return z == e && oe == t;
  var d = !0;
  s.set(t, e), s.set(e, t);
  for (var x = n; ++P < o; ) {
    A = _[P];
    var i = t[A], p = e[A];
    if (r)
      var b = n ? r(p, i, A, e, t, s) : r(i, p, A, t, e, s);
    if (!(b === void 0 ? i === p || c(i, p, a, r, s) : b)) {
      d = !1;
      break;
    }
    x || (x = A == "constructor");
  }
  if (d && !x) {
    var S = t.constructor, T = e.constructor;
    S != T && "constructor" in t && "constructor" in e && !(typeof S == "function" && S instanceof S && typeof T == "function" && T instanceof T) && (d = !1);
  }
  return s.delete(t), s.delete(e), d;
}
var h_ = 1, Oo = "[object Arguments]", Fo = "[object Array]", hs = "[object Object]", p_ = Object.prototype, zo = p_.hasOwnProperty;
function m_(t, e, a, r, c, s) {
  var n = bs(t), _ = bs(e), o = n ? Fo : Lr(t), v = _ ? Fo : Lr(e);
  o = o == Oo ? hs : o, v = v == Oo ? hs : v;
  var w = o == hs, P = v == hs, A = o == v;
  if (A && Hi(t)) {
    if (!Hi(e))
      return !1;
    n = !0, w = !1;
  }
  if (A && !w)
    return s || (s = new Pr()), n || uc(t) ? vc(t, e, a, r, c, s) : u_(t, e, o, a, r, c, s);
  if (!(a & h_)) {
    var z = w && zo.call(t, "__wrapped__"), oe = P && zo.call(e, "__wrapped__");
    if (z || oe) {
      var d = z ? t.value() : t, x = oe ? e.value() : e;
      return s || (s = new Pr()), c(d, x, a, r, s);
    }
  }
  return A ? (s || (s = new Pr()), __(t, e, a, r, c, s)) : !1;
}
function fc(t, e, a, r, c) {
  return t === e ? !0 : t == null || e == null || !On(t) && !On(e) ? t !== t && e !== e : m_(t, e, a, r, fc, c);
}
function zi(t, e) {
  return fc(t, e);
}
function ub() {
  return {
    checkEqual: Me(
      () => (e, a) => zi(e, a)
    )
  };
}
const ps = {}, $n = {}, vb = (t, e) => {
  const a = e.split("?")[0], r = () => {
    s();
  };
  Ja(t, (_, o) => {
    _ && (o && o.removeEventListener("input", r), _.addEventListener("input", r), ps[a] = c(), $n[a] = zi(
      ps[a],
      c()
    ));
  }), Gr(() => {
    t.value && t.value.removeEventListener("input", r);
  });
  const c = () => {
    if (!t.value)
      return null;
    const _ = new FormData(t.value), o = {};
    return _.forEach((v, w) => {
      o[w] = v;
    }), JSON.stringify(o);
  };
  ps[a] = c();
  const s = () => {
    if (!t.value)
      return null;
    const _ = c();
    return $n[a] = zi(
      ps[a],
      _
    ), $n[a];
  };
  return {
    deleteComponentState: () => {
      delete $n[a];
    }
  };
}, g_ = () => $n, y_ = J({
  name: "HCheckFormDataChange",
  props: {
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: "_self"
    },
    originalEventTarget: {
      type: String,
      default: null
    },
    originalEventTargetCallback: {
      type: String,
      default: null
    }
  },
  emits: {
    "data-change-verification-result": ({
      event: t,
      result: e,
      originalFunc: a
    }) => t && e && typeof a == "function" ? !0 : (console.error(
      "data-change-verification-result 이벤트 페이로드가 옳지 않음!"
    ), !1)
  },
  setup(t, { slots: e, emit: a }) {
    const r = L(null), c = L(null), s = () => {
      const o = g_()[window.location.href.split("?")[0]];
      return o === void 0 ? !0 : !!o;
    }, n = (o) => {
      var v, w, P;
      (v = c.value) == null || v.removeEventListener("click", _, {
        capture: !0
      }), (w = c.value) == null || w.click(), (P = c.value) == null || P.addEventListener("click", _, {
        capture: !0
      });
    }, _ = async (o) => {
      if (o.preventDefault(), o.stopPropagation(), !s()) {
        a("data-change-verification-result", {
          event: o,
          result: !1,
          originalFunc: n,
          href: t.href,
          target: t.target
        });
        return;
      }
      a("data-change-verification-result", {
        event: o,
        result: !0,
        originalFunc: n,
        href: t.href,
        target: t.target
      });
    };
    return Ia(() => {
      var v, w, P;
      if (r.value = ((v = e.default) == null ? void 0 : v.call(e)[0]) || null, !r.value || !ys(r.value))
        return;
      const o = r.value.elm;
      !o || !nt(o) || (t.originalEventTarget ? (c.value = o.querySelector(t.originalEventTarget), (w = c.value) == null || w.addEventListener("click", _, {
        capture: !0
      })) : (c.value = o, (P = c.value) == null || P.addEventListener("click", _, {
        capture: !0
      })));
    }), Gr(() => {
      var o;
      !r.value || !ys(r.value) || (o = c.value) == null || o.removeEventListener("click", _, {
        capture: !0
      });
    }), {
      checkFormDataChange: s
    };
  }
});
var b_ = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", [e._t("default")], 2);
}, A_ = [], C_ = /* @__PURE__ */ Z(
  y_,
  b_,
  A_,
  !1,
  null,
  null
);
const fb = C_.exports, dc = Symbol("triggerFileInput"), _c = Symbol("files"), hc = Symbol("formatSize"), pc = Symbol("removeFile"), x_ = J({
  name: "HFileUploadArea",
  props: {
    value: {
      type: Array,
      required: !0
    },
    multiple: {
      type: Boolean,
      default: !0
    },
    maxFiles: {
      type: Number,
      default: 5
    },
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024
    }
  },
  emits: ["input", "exceed-file-num", "exceed-file-size"],
  setup(t, { emit: e }) {
    const a = Me(() => t.multiple ? t.maxFiles : 1), r = L(t.value), c = L(null), s = (d) => {
      if (!c.value)
        return;
      const x = new DataTransfer();
      d.forEach((i) => {
        x.items.add(i);
      }), c.value.files = x.files;
    }, n = () => {
      var d;
      (d = c.value) == null || d.click();
    }, _ = (d) => {
      const x = d.target;
      if (!x || !(x instanceof HTMLInputElement))
        return;
      const i = x.files;
      i && A([...i]);
    }, o = L(!1), v = () => {
      o.value = !1;
    }, w = (d) => {
      o.value = !0;
      const x = d.dataTransfer;
      x && (x.dropEffect = "copy");
    }, P = (d) => {
      o.value = !1;
      const x = d.dataTransfer;
      x && A([...x.files]);
    }, A = (d) => {
      if (a.value > 1) {
        r.value.length + d.length > a.value && (e("exceed-file-num"), d = d.slice(
          0,
          a.value - r.value.length
        ));
        let x = r.value.reduce(
          (i, p) => i + p.size,
          0
        );
        d = d.filter((i) => t.maxSize && x + i.size > t.maxSize ? (console.log("multifile exceed file size"), e("exceed-file-size"), !1) : (x = x + i.size, !0)), r.value.push(...d), s(r.value), e("input", r.value);
      } else {
        if (d.length > 1) {
          e("exceed-file-num");
          return;
        }
        if (d[0].size > t.maxSize) {
          e("exceed-file-size");
          return;
        }
        r.value = [...d], s(r.value), e("input", r.value);
      }
    }, z = (d) => {
      r.value.splice(d, 1), s(r.value), e("input", r.value);
    }, oe = (d) => (d / 1024 / 1024).toFixed(2) + "MB";
    return ne(dc, n), ne(_c, r), ne(hc, oe), ne(pc, z), {
      isDragOver: o,
      dragOver: w,
      onFileDrop: P,
      dragLeave: v,
      onFileChange: _,
      fileInput: c
    };
  }
});
var E_ = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h-file-upload-container", class: { is_drag_over: e.isDragOver }, on: { dragover: function(r) {
    return r.preventDefault(), e.dragOver.apply(null, arguments);
  }, drop: function(r) {
    return r.preventDefault(), e.onFileDrop.apply(null, arguments);
  }, dragleave: e.dragLeave } }, [a("input", { ref: "fileInput", attrs: { type: "file", multiple: e.multiple, hidden: "" }, on: { change: e.onFileChange } }), e._t("default", null, { isDragOver: e.isDragOver })], 2);
}, S_ = [], w_ = /* @__PURE__ */ Z(
  x_,
  E_,
  S_,
  !1,
  null,
  null
);
const db = w_.exports, T_ = J({
  name: "HFileUploadButton",
  setup() {
    return {
      triggerFileInput: k(dc, () => {
      })
    };
  }
});
var D_ = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { attrs: { type: "button" }, on: { click: e.triggerFileInput } }, [e._t("default")], 2);
}, L_ = [], P_ = /* @__PURE__ */ Z(
  T_,
  D_,
  L_,
  !1,
  null,
  null
);
const _b = P_.exports, I_ = J({
  name: "HFileUploadFileItem",
  setup() {
    const t = k(_c, L([])), e = k(hc, (r) => ""), a = k(pc, (r) => {
    });
    return {
      files: t,
      formatSize: e,
      removeFile: a
    };
  }
});
var M_ = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", e._l(e.files, function(r, c) {
    return a("div", { key: c, staticClass: "h-file-info" }, [e._t("default", null, { filename: r.name, filesize: e.formatSize(r.size), removeFileFunc: () => {
      e.removeFile(c);
    } })], 2);
  }), 0);
}, k_ = [], B_ = /* @__PURE__ */ Z(
  I_,
  M_,
  k_,
  !1,
  null,
  null
);
const hb = B_.exports, R_ = J({
  name: "HFileUploadFileList"
});
var $_ = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h-file-list" }, [e._t("default")], 2);
}, H_ = [], N_ = /* @__PURE__ */ Z(
  R_,
  $_,
  H_,
  !1,
  null,
  null
);
const pb = N_.exports, O_ = J({
  functional: !0,
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  render(t, e) {
    const a = e.children[0].text, r = e.data, c = e.data.on;
    return t(
      `${e.props.tag}`,
      {
        domProps: {
          // 직접 HTML 문자열을 렌더링하기 위해 innerHTML 프로퍼티를 설정
          innerHTML: a
        },
        props: {
          tag: {
            type: String,
            default: "div"
          }
        },
        ...r,
        on: c
      },
      e.children
    );
  }
}), F_ = null, z_ = null;
var U_ = /* @__PURE__ */ Z(
  O_,
  F_,
  z_,
  !1,
  null,
  null
);
const mb = U_.exports, mc = Symbol("isDraggable"), gc = Symbol("eventDrag"), yc = Symbol("endEventDrag"), bc = Symbol("emitValue"), W_ = J({
  name: "HKanbanArea",
  props: {
    value: {
      type: Array,
      required: !0
    },
    isDraggable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["input"],
  setup(t, { emit: e }) {
    const { isDraggable: a, value: r } = Ui(t), c = (s, n, _, o) => {
      const v = o.closest(".h_kanban_line"), w = Array.prototype.slice.call(
        document.querySelectorAll(".h_kanban_line")
      ), P = w.findIndex(
        (z) => z === v
      );
      let A = null;
      w.forEach((z) => {
        const oe = Array.prototype.slice.call(z.querySelectorAll(".h_kanban_card")).findIndex((d) => d === o);
        oe >= 0 && (A = oe);
      }), typeof A == "number" && (r.value[n].value.splice(_, 1), r.value[P].value.splice(A, 0, s), e("input", r.value));
    };
    ne(mc, a), ne(bc, c);
  }
});
var Y_ = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_kanban_board_area" }, [e._t("default")], 2);
}, j_ = [], Q_ = /* @__PURE__ */ Z(
  W_,
  Y_,
  j_,
  !1,
  null,
  null
);
const gb = Q_.exports, q_ = J({
  name: "HKanbanCard",
  props: {
    className: {
      type: String
    },
    elValue: {
      type: Object,
      required: !0
    },
    colIndex: {
      type: Number,
      required: !0
    },
    rowIndex: {
      type: Number,
      required: !0
    }
  },
  emits: ["event-click", "emit-value"],
  setup(t, { emit: e }) {
    const a = k(mc, L(!0)), r = k(gc, () => {
    }), c = k(yc, () => {
    }), s = k(bc, () => {
    }), n = L(null), _ = L(null), o = L(0), v = L(0), w = L(0), P = L(0), A = L(0), z = L(0), oe = L(!1), d = L(null), x = () => {
      var T;
      d.value && clearTimeout(d.value), nt(n.value) && (s(
        t.elValue,
        t.colIndex,
        t.rowIndex,
        n.value
      ), (T = n.value) == null || T.removeEventListener(
        "transitionend",
        x
      ));
    }, i = (T) => {
      if (!(_.value instanceof HTMLElement) || (_.value.style.position = "fixed", _.value.style.zIndex = "100", Hu(T) ? T.touches.length === 1 && (A.value = T.touches[0].clientX - w.value, z.value = T.touches[0].clientY - P.value, w.value = T.touches[0].clientX, P.value = T.touches[0].clientY) : Nu(T) && (A.value = T.clientX - w.value, z.value = T.clientY - P.value, w.value = T.clientX, P.value = T.clientY), !n.value))
        return;
      const { width: se, height: ce } = n.value.getBoundingClientRect();
      _.value.style.width = se + "px", _.value.style.height = ce + "px", _.value.style.top = P.value - v.value + "px", _.value.style.left = w.value - o.value + "px", nt(n.value) && r(
        n.value,
        w.value,
        P.value,
        T.type
      );
    }, p = (T) => {
      var ce;
      if (!(_.value instanceof HTMLElement))
        return;
      _.value.style.position = "", _.value.style.zIndex = "", _.value.style.width = "", _.value.style.height = "", _.value.style.top = "", _.value.style.left = "";
      const se = document.querySelector(".clone");
      se && document.body.removeChild(se), oe.value = !1, document.removeEventListener("mouseup", p), document.removeEventListener("touchend", p), document.removeEventListener("mousemove", i), document.removeEventListener("touchmove", i), (ce = n.value) == null || ce.addEventListener(
        "transitionend",
        x
      ), d.value = setTimeout(() => {
        x();
      }, 550), c(T.type);
    }, b = (T) => {
      if (!n.value || (_.value = n.value.cloneNode(!0), !(_.value instanceof HTMLElement)))
        return;
      _.value.classList.add("clone"), _.value.style.position = "fixed", _.value.style.pointerEvents = "none", _.value.style.opacity = "0.5", document.body.appendChild(_.value);
      const se = n.value.getBoundingClientRect();
      oe.value = !0, $u(T) ? T.touches.length === 1 && (w.value = T.touches[0].clientX, P.value = T.touches[0].clientY, o.value = w.value - se.left, v.value = P.value - se.top) : Ou(T) && (w.value = T.clientX, P.value = T.clientY, o.value = w.value - se.left, v.value = P.value - se.top), document.addEventListener("mouseup", p), document.addEventListener("touchend", p), document.addEventListener("mousemove", i), document.addEventListener("touchmove", i);
    }, S = (T) => {
      let se = T.target;
      for (; nt(se) && se.tagName !== "BUTTON" && !se.classList.contains("h_kanban_card"); )
        se = se.parentElement;
      nt(se) && se.tagName === "BUTTON" || nt(se) && se.tagName === "A" || e("event-click");
    };
    return Ia(() => {
      if (a.value) {
        if (!n.value)
          return;
        n.value.addEventListener("mousedown", b), n.value.addEventListener("touchstart", b);
      }
    }), Es(() => {
      if (a.value) {
        if (!n.value)
          return;
        n.value.removeEventListener(
          "mousedown",
          b
        ), n.value.removeEventListener(
          "touchstart",
          b
        );
      }
    }), {
      isSelected: oe,
      clickKanbanCard: S,
      isDraggable: a,
      dragMouseDown: b,
      kanbanCard: n
    };
  }
});
var G_ = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { ref: "kanbanCard", staticClass: "h_kanban_card", class: [
    e.className,
    {
      is_selected: e.isSelected,
      is_draggable: e.isDraggable
    }
  ], on: { click: e.clickKanbanCard } }, [e._t("default")], 2);
}, V_ = [], X_ = /* @__PURE__ */ Z(
  q_,
  G_,
  V_,
  !1,
  null,
  null
);
const yb = X_.exports, Z_ = J({
  name: "HKanbanLine",
  setup() {
    const t = L(null), e = L(null), a = L(null), r = L(null), c = L(0), s = L(0), n = L(
      null
    ), _ = L(null), o = L(null), v = L([]), w = L({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0
    }), P = L(null), A = L(null), z = L(null), oe = () => {
      e.value;
    }, d = () => {
      oe();
    };
    Ia(() => {
      oe(), window.addEventListener("resize", d);
    }), Es(() => {
      window.removeEventListener("resize", d);
    });
    const x = (ae) => {
      const G = ae.currentTarget;
      nt(G) && (G.classList.remove("top"), G.classList.remove("bottom")), n.value = null, _.value = null;
    }, i = (ae) => {
      const G = ae.currentTarget;
      nt(G) && (G.style.transition = "", t.value && (t.value.style.position = "", t.value.style.zIndex = "", G.removeEventListener(
        "transitionend",
        i
      )));
    }, p = (ae) => {
      var ue;
      const G = ae.currentTarget;
      if (nt(G) && (G.classList.remove("top"), G.classList.remove("bottom")), n.value) {
        if ((ue = t.value) == null || ue.addEventListener(
          "transitionend",
          i
        ), _.value === "top") {
          if (!nt(o.value))
            return;
          const Y = o.value.querySelector(
            ".h_kanban_line_inner_area"
          );
          if (!Y || !t.value || !nt(n.value))
            return;
          Y.insertBefore(
            t.value,
            n.value
          ), t.value.style.marginBottom = -1 * t.value.getBoundingClientRect().height + "px", t.value.style.position = "relative", t.value.style.zIndex = "100", t.value.style.boxShadow = "0 0 12px 0 rgba(0, 0, 0, 1)", requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t.value && (t.value.style.transition = "all .5s", t.value.style.boxShadow = "", t.value.style.marginBottom = "");
            });
          });
        } else if (_.value === "bottom") {
          if (!nt(o.value))
            return;
          const Y = o.value.querySelector(
            ".h_kanban_line_inner_area"
          );
          if (!Y || !t.value || !nt(n.value))
            return;
          Y.insertBefore(
            t.value,
            n.value.nextElementSibling ? n.value.nextElementSibling : null
          ), t.value.style.marginBottom = -1 * t.value.getBoundingClientRect().height + "px", t.value.style.position = "relative", t.value.style.zIndex = "100", t.value.style.boxShadow = "0 0 12px 0 rgba(0, 0, 0, 1)", requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t.value && (t.value.style.transition = "all .5s", t.value.style.boxShadow = "", t.value.style.marginBottom = "");
            });
          });
        }
      }
      n.value = null, _.value = null;
    }, b = (ae) => {
      var G;
      o.value = ae.currentTarget, nt(o.value) && (v.value = Array.prototype.slice.call(
        (G = o.value) == null ? void 0 : G.querySelectorAll(
          ".h_kanban_line_inner_area .h_kanban_card"
        )
      ), v.value.length ? w.value = v.value[v.value.length - 1].getBoundingClientRect() : w.value = null);
    }, S = () => {
      if (w.value) {
        if (w.value.top + w.value.height <= s.value && nt(o.value) && o.value.getBoundingClientRect().bottom >= s.value) {
          const ae = o.value.querySelector(
            ".h_kanban_line_inner_area"
          );
          ae && t.value && ae.appendChild(t.value);
        }
      } else {
        if (!nt(o.value))
          return;
        const ae = o.value.querySelector(
          ".h_kanban_line_inner_area"
        );
        ae && t.value && ae.appendChild(t.value);
      }
    }, T = (ae) => {
      let G = ae;
      for (; G && !G.classList.contains("h_kanban_line"); )
        G = G.parentElement;
      return G;
    }, se = (ae) => {
      if (n.value = ae.currentTarget, !nt(n.value))
        return;
      const G = n.value.getBoundingClientRect();
      G.left <= c.value && c.value <= G.right && G.top <= s.value && s.value <= G.top + G.height / 2 ? (n.value.classList.add("top"), _.value = "top") : n.value.classList.remove("top"), G.left <= c.value && c.value <= G.right && G.bottom >= s.value && s.value >= G.top + G.height / 2 ? (n.value.classList.add("bottom"), _.value = "bottom") : n.value.classList.remove("bottom");
    }, ce = (ae, G, ue, Y) => {
      var ee, me, St, Ae, Xe, V, De, Ie, Ce, f, y, h, C, $, ie, ve, ge;
      t.value = ae, c.value = G, s.value = ue, e.value = T(t.value), a.value = ((ee = e.value) == null ? void 0 : ee.nextElementSibling) || null, r.value = ((me = e.value) == null ? void 0 : me.previousElementSibling) || null;
      const I = (St = e.value) == null ? void 0 : St.getBoundingClientRect(), j = a.value ? a.value.getBoundingClientRect() : null, K = r.value ? r.value.getBoundingClientRect() : null;
      if (Y === "touchmove") {
        if (!I)
          return;
        I.top <= s.value && I.bottom >= s.value && I.left <= c.value && I.right >= c.value || j && j.top <= s.value && j.bottom >= s.value && j.left <= c.value && j.right >= c.value || K && K.top <= s.value && K.bottom >= s.value && K.left <= c.value && K.right >= c.value || (n.value = null, o.value = null);
      }
      I && (I.top <= s.value && I.bottom >= s.value && I.left <= c.value && I.right >= c.value ? ((Ae = e.value) == null || Ae.classList.add("current"), a.value && a.value.classList.remove("next"), r.value && r.value.classList.remove("prev"), Y === "touchmove" && (o.value = e.value, P.value = Array.prototype.slice.call(
        (Xe = e.value) == null ? void 0 : Xe.querySelectorAll(".h_kanban_card")
      ), P.value.forEach((N) => {
        const q = N.getBoundingClientRect();
        q.top <= s.value && s.value <= q.top + q.height / 2 ? (N.classList.add("top"), n.value = N, _.value = "top") : N.classList.remove("top"), q.bottom >= s.value && s.value > q.top + q.height / 2 ? (N.classList.add("bottom"), n.value = N, _.value = "bottom") : N.classList.remove("bottom");
      }), P.value.length ? P.value[P.value.length - 1].getBoundingClientRect().bottom < s.value && (n.value = "append") : n.value = "append")) : ((V = e.value) == null || V.classList.remove("current"), Y === "touchmove" && P.value && P.value.forEach((N) => {
        N.classList.remove("top"), N.classList.remove("bottom");
      })), j && (j.top <= s.value && j.bottom >= s.value && j.left <= c.value && j.right >= c.value ? ((De = e.value) == null || De.classList.remove("current"), (Ie = a.value) == null || Ie.classList.add("next"), r.value && r.value.classList.remove("prev"), Y === "touchmove" && (o.value = a.value, A.value = Array.prototype.slice.call(
        (Ce = a.value) == null ? void 0 : Ce.querySelectorAll(
          ".h_kanban_card"
        )
      ), A.value.forEach((N) => {
        const q = N.getBoundingClientRect();
        q.top <= s.value && s.value <= q.top + q.height / 2 ? (N.classList.add("top"), n.value = N, _.value = "top") : N.classList.remove("top"), q.bottom >= s.value && s.value > q.top + q.height / 2 ? (N.classList.add("bottom"), n.value = N, _.value = "bottom") : N.classList.remove("bottom");
      }), A.value.length ? A.value[A.value.length - 1].getBoundingClientRect().bottom < s.value && (n.value = "append") : n.value = "append")) : ((f = a.value) == null || f.classList.remove("next"), Y === "touchmove" && A.value && A.value.forEach((N) => {
        N.classList.remove("top"), N.classList.remove("bottom");
      }))), K && (K.top <= s.value && K.bottom >= s.value && K.left <= c.value && K.right >= c.value ? ((y = e.value) == null || y.classList.remove("current"), a.value && a.value.classList.remove("next"), (h = r.value) == null || h.classList.add("prev"), Y === "touchmove" && (o.value = r.value, z.value = Array.prototype.slice.call(
        (C = r.value) == null ? void 0 : C.querySelectorAll(
          ".h_kanban_card"
        )
      ), z.value.forEach((N) => {
        const q = N.getBoundingClientRect();
        q.top <= s.value && s.value <= q.top + q.height / 2 ? (N.classList.add("top"), n.value = N, _.value = "top") : N.classList.remove("top"), q.bottom >= s.value && s.value > q.top + q.height / 2 ? (N.classList.add("bottom"), n.value = N, _.value = "bottom") : N.classList.remove("bottom");
      }), z.value.length ? z.value[z.value.length - 1].getBoundingClientRect().bottom < s.value && (n.value = "append") : n.value = "append")) : (($ = r.value) == null || $.classList.remove("prev"), Y === "touchmove" && z.value && z.value.forEach((N) => {
        N.classList.remove("top"), N.classList.remove("bottom");
      }))), (ie = e.value) == null || ie.addEventListener("mouseover", b), a.value && a.value.addEventListener("mouseover", b), r.value && r.value.addEventListener("mouseover", b), (ve = e.value) == null || ve.addEventListener("mouseup", S), a.value && a.value.addEventListener("mouseup", S), r.value && r.value.addEventListener("mouseup", S), (ge = e.value) == null || ge.querySelectorAll(".h_kanban_card").forEach((N) => {
        N.addEventListener("mouseout", x), N.addEventListener("mouseup", p), N.addEventListener("mousemove", se);
      }), a.value && a.value.querySelectorAll(".h_kanban_card").forEach((N) => {
        N.addEventListener("mouseout", x), N.addEventListener("mouseup", p), N.addEventListener("mousemove", se);
      }), r.value && r.value.querySelectorAll(".h_kanban_card").forEach((N) => {
        N.addEventListener("mouseout", x), N.addEventListener("mouseup", p), N.addEventListener("mousemove", se);
      }));
    }, O = (ae) => {
      var G, ue, Y;
      if (ae === "touchend" && n.value)
        if (n.value !== "append") {
          if (_.value === "top") {
            if (!nt(o.value))
              return;
            const I = (G = o.value) == null ? void 0 : G.querySelector(
              ".h_kanban_line_inner_area"
            );
            if (!I || !t.value || !nt(n.value))
              return;
            I.insertBefore(
              t.value,
              n.value
            );
          } else if (_.value === "bottom") {
            if (!nt(o.value))
              return;
            const I = (ue = o.value) == null ? void 0 : ue.querySelector(
              ".h_kanban_line_inner_area"
            );
            if (!I || !t.value || !nt(n.value))
              return;
            I.insertBefore(
              t.value,
              n.value.nextElementSibling ? n.value.nextElementSibling : null
            );
          }
          if (!nt(n.value))
            return;
          n.value.classList.remove("top"), n.value.classList.remove("bottom");
        } else {
          if (!nt(o.value))
            return;
          const I = (Y = o.value) == null ? void 0 : Y.querySelector(
            ".h_kanban_line_inner_area"
          );
          if (!I || !t.value)
            return;
          I.appendChild(t.value);
        }
      e.value && e.value.classList.remove("current"), a.value && a.value.classList.remove("next"), r.value && r.value.classList.remove("prev"), e.value && e.value.removeEventListener("mouseover", b), a.value && a.value.removeEventListener(
        "mouseover",
        b
      ), r.value && r.value.removeEventListener(
        "mouseover",
        b
      ), e.value && e.value.removeEventListener("mouseup", S), a.value && a.value.removeEventListener(
        "mouseup",
        S
      ), r.value && r.value.removeEventListener(
        "mouseup",
        S
      ), e.value && e.value.querySelectorAll(".h_kanban_card").forEach((I) => {
        I.removeEventListener("mouseout", x), I.removeEventListener("mouseup", p), I.removeEventListener("mousemove", se);
      }), a.value && a.value.querySelectorAll(".h_kanban_card").forEach((I) => {
        I.removeEventListener("mouseout", x), I.removeEventListener("mouseup", p), I.removeEventListener("mousemove", se);
      }), r.value && r.value.querySelectorAll(".h_kanban_card").forEach((I) => {
        I.removeEventListener("mouseout", x), I.removeEventListener("mouseup", p), I.removeEventListener("mousemove", se);
      }), e.value = null, a.value = null, r.value = null;
    };
    return ne(gc, ce), ne(yc, O), {
      kanbanLine: e
    };
  }
});
var K_ = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { ref: "kanbanLine", staticClass: "h_kanban_line" }, [e._t("default")], 2);
}, J_ = [], eh = /* @__PURE__ */ Z(
  Z_,
  K_,
  J_,
  !1,
  null,
  null
);
const bb = eh.exports, th = J({
  name: "HKanbanLineInnerArea"
});
var ah = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_kanban_line_inner_area" }, [e._t("default")], 2);
}, rh = [], nh = /* @__PURE__ */ Z(
  th,
  ah,
  rh,
  !1,
  null,
  null
);
const Ab = nh.exports, sh = J({
  name: "HLoading",
  props: {
    strokeColor: {
      type: String,
      default: "#4676f0"
    }
  }
});
var ih = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h-loading" }, [a("div", { staticClass: "h-dimmed" }), a("div", { staticClass: "h_spinner_bg" }, [a("svg", { staticClass: "h-spinner", attrs: { viewBox: "0 0 50 50" } }, [a("circle", { staticClass: "ring", attrs: { cx: "25", cy: "25", r: "22.5" } }), a("circle", { staticClass: "line", style: {
    stroke: e.strokeColor
  }, attrs: { cx: "25", cy: "25", r: "22.5" } })])])]);
}, lh = [], oh = /* @__PURE__ */ Z(
  sh,
  ih,
  lh,
  !1,
  null,
  null
);
const Cb = oh.exports, ch = J({
  name: "HThreeDotLoading",
  props: {
    backgroundColor: {
      type: String,
      default: "#333"
    }
  }
});
var uh = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h-dot-spinner" }, [a("div", { staticClass: "spinner_inner" }, [a("div", { staticClass: "bounce1 bounce", style: { backgroundColor: e.backgroundColor } }), a("div", { staticClass: "bounce2 bounce", style: { backgroundColor: e.backgroundColor } }), a("div", { staticClass: "bounce3 bounce", style: { backgroundColor: e.backgroundColor } })])]);
}, vh = [], fh = /* @__PURE__ */ Z(
  ch,
  uh,
  vh,
  !1,
  null,
  null
);
const xb = fh.exports;
/*!
 * Signature Pad v4.2.0 | https://github.com/szimek/signature_pad
 * (c) 2024 Szymon Nowak | Released under the MIT license
 */
class Cs {
  constructor(e, a, r, c) {
    if (isNaN(e) || isNaN(a))
      throw new Error(`Point is invalid: (${e}, ${a})`);
    this.x = +e, this.y = +a, this.pressure = r || 0, this.time = c || Date.now();
  }
  distanceTo(e) {
    return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
  }
  equals(e) {
    return this.x === e.x && this.y === e.y && this.pressure === e.pressure && this.time === e.time;
  }
  velocityFrom(e) {
    return this.time !== e.time ? this.distanceTo(e) / (this.time - e.time) : 0;
  }
}
class Wi {
  static fromPoints(e, a) {
    const r = this.calculateControlPoints(e[0], e[1], e[2]).c2, c = this.calculateControlPoints(e[1], e[2], e[3]).c1;
    return new Wi(e[1], r, c, e[2], a.start, a.end);
  }
  static calculateControlPoints(e, a, r) {
    const c = e.x - a.x, s = e.y - a.y, n = a.x - r.x, _ = a.y - r.y, o = { x: (e.x + a.x) / 2, y: (e.y + a.y) / 2 }, v = { x: (a.x + r.x) / 2, y: (a.y + r.y) / 2 }, w = Math.sqrt(c * c + s * s), P = Math.sqrt(n * n + _ * _), A = o.x - v.x, z = o.y - v.y, oe = P / (w + P), d = { x: v.x + A * oe, y: v.y + z * oe }, x = a.x - d.x, i = a.y - d.y;
    return {
      c1: new Cs(o.x + x, o.y + i),
      c2: new Cs(v.x + x, v.y + i)
    };
  }
  constructor(e, a, r, c, s, n) {
    this.startPoint = e, this.control2 = a, this.control1 = r, this.endPoint = c, this.startWidth = s, this.endWidth = n;
  }
  length() {
    let a = 0, r, c;
    for (let s = 0; s <= 10; s += 1) {
      const n = s / 10, _ = this.point(n, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), o = this.point(n, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (s > 0) {
        const v = _ - r, w = o - c;
        a += Math.sqrt(v * v + w * w);
      }
      r = _, c = o;
    }
    return a;
  }
  point(e, a, r, c, s) {
    return a * (1 - e) * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) * e + 3 * c * (1 - e) * e * e + s * e * e * e;
  }
}
class dh {
  constructor() {
    try {
      this._et = new EventTarget();
    } catch {
      this._et = document;
    }
  }
  addEventListener(e, a, r) {
    this._et.addEventListener(e, a, r);
  }
  dispatchEvent(e) {
    return this._et.dispatchEvent(e);
  }
  removeEventListener(e, a, r) {
    this._et.removeEventListener(e, a, r);
  }
}
function _h(t, e = 250) {
  let a = 0, r = null, c, s, n;
  const _ = () => {
    a = Date.now(), r = null, c = t.apply(s, n), r || (s = null, n = []);
  };
  return function(...v) {
    const w = Date.now(), P = e - (w - a);
    return s = this, n = v, P <= 0 || P > e ? (r && (clearTimeout(r), r = null), a = w, c = t.apply(s, n), r || (s = null, n = [])) : r || (r = window.setTimeout(_, P)), c;
  };
}
class xs extends dh {
  constructor(e, a = {}) {
    super(), this.canvas = e, this._drawingStroke = !1, this._isEmpty = !0, this._lastPoints = [], this._data = [], this._lastVelocity = 0, this._lastWidth = 0, this._handleMouseDown = (r) => {
      r.buttons === 1 && this._strokeBegin(r);
    }, this._handleMouseMove = (r) => {
      this._strokeMoveUpdate(r);
    }, this._handleMouseUp = (r) => {
      r.buttons === 1 && this._strokeEnd(r);
    }, this._handleTouchStart = (r) => {
      if (r.cancelable && r.preventDefault(), r.targetTouches.length === 1) {
        const c = r.changedTouches[0];
        this._strokeBegin(c);
      }
    }, this._handleTouchMove = (r) => {
      r.cancelable && r.preventDefault();
      const c = r.targetTouches[0];
      this._strokeMoveUpdate(c);
    }, this._handleTouchEnd = (r) => {
      if (r.target === this.canvas) {
        r.cancelable && r.preventDefault();
        const s = r.changedTouches[0];
        this._strokeEnd(s);
      }
    }, this._handlePointerStart = (r) => {
      r.preventDefault(), this._strokeBegin(r);
    }, this._handlePointerMove = (r) => {
      this._strokeMoveUpdate(r);
    }, this._handlePointerEnd = (r) => {
      this._drawingStroke && (r.preventDefault(), this._strokeEnd(r));
    }, this.velocityFilterWeight = a.velocityFilterWeight || 0.7, this.minWidth = a.minWidth || 0.5, this.maxWidth = a.maxWidth || 2.5, this.throttle = "throttle" in a ? a.throttle : 16, this.minDistance = "minDistance" in a ? a.minDistance : 5, this.dotSize = a.dotSize || 0, this.penColor = a.penColor || "black", this.backgroundColor = a.backgroundColor || "rgba(0,0,0,0)", this.compositeOperation = a.compositeOperation || "source-over", this.canvasContextOptions = "canvasContextOptions" in a ? a.canvasContextOptions : {}, this._strokeMoveUpdate = this.throttle ? _h(xs.prototype._strokeUpdate, this.throttle) : xs.prototype._strokeUpdate, this._ctx = e.getContext("2d", this.canvasContextOptions), this.clear(), this.on();
  }
  clear() {
    const { _ctx: e, canvas: a } = this;
    e.fillStyle = this.backgroundColor, e.clearRect(0, 0, a.width, a.height), e.fillRect(0, 0, a.width, a.height), this._data = [], this._reset(this._getPointGroupOptions()), this._isEmpty = !0;
  }
  fromDataURL(e, a = {}) {
    return new Promise((r, c) => {
      const s = new Image(), n = a.ratio || window.devicePixelRatio || 1, _ = a.width || this.canvas.width / n, o = a.height || this.canvas.height / n, v = a.xOffset || 0, w = a.yOffset || 0;
      this._reset(this._getPointGroupOptions()), s.onload = () => {
        this._ctx.drawImage(s, v, w, _, o), r();
      }, s.onerror = (P) => {
        c(P);
      }, s.crossOrigin = "anonymous", s.src = e, this._isEmpty = !1;
    });
  }
  toDataURL(e = "image/png", a) {
    switch (e) {
      case "image/svg+xml":
        return typeof a != "object" && (a = void 0), `data:image/svg+xml;base64,${btoa(this.toSVG(a))}`;
      default:
        return typeof a != "number" && (a = void 0), this.canvas.toDataURL(e, a);
    }
  }
  on() {
    this.canvas.style.touchAction = "none", this.canvas.style.msTouchAction = "none", this.canvas.style.userSelect = "none";
    const e = /Macintosh/.test(navigator.userAgent) && "ontouchstart" in document;
    window.PointerEvent && !e ? this._handlePointerEvents() : (this._handleMouseEvents(), "ontouchstart" in window && this._handleTouchEvents());
  }
  off() {
    this.canvas.style.touchAction = "auto", this.canvas.style.msTouchAction = "auto", this.canvas.style.userSelect = "auto", this.canvas.removeEventListener("pointerdown", this._handlePointerStart), this.canvas.removeEventListener("pointermove", this._handlePointerMove), this.canvas.ownerDocument.removeEventListener("pointerup", this._handlePointerEnd), this.canvas.removeEventListener("mousedown", this._handleMouseDown), this.canvas.removeEventListener("mousemove", this._handleMouseMove), this.canvas.ownerDocument.removeEventListener("mouseup", this._handleMouseUp), this.canvas.removeEventListener("touchstart", this._handleTouchStart), this.canvas.removeEventListener("touchmove", this._handleTouchMove), this.canvas.removeEventListener("touchend", this._handleTouchEnd);
  }
  isEmpty() {
    return this._isEmpty;
  }
  fromData(e, { clear: a = !0 } = {}) {
    a && this.clear(), this._fromData(e, this._drawCurve.bind(this), this._drawDot.bind(this)), this._data = this._data.concat(e);
  }
  toData() {
    return this._data;
  }
  _getPointGroupOptions(e) {
    return {
      penColor: e && "penColor" in e ? e.penColor : this.penColor,
      dotSize: e && "dotSize" in e ? e.dotSize : this.dotSize,
      minWidth: e && "minWidth" in e ? e.minWidth : this.minWidth,
      maxWidth: e && "maxWidth" in e ? e.maxWidth : this.maxWidth,
      velocityFilterWeight: e && "velocityFilterWeight" in e ? e.velocityFilterWeight : this.velocityFilterWeight,
      compositeOperation: e && "compositeOperation" in e ? e.compositeOperation : this.compositeOperation
    };
  }
  _strokeBegin(e) {
    if (!this.dispatchEvent(new CustomEvent("beginStroke", { detail: e, cancelable: !0 })))
      return;
    this._drawingStroke = !0;
    const r = this._getPointGroupOptions(), c = Object.assign(Object.assign({}, r), { points: [] });
    this._data.push(c), this._reset(r), this._strokeUpdate(e);
  }
  _strokeUpdate(e) {
    if (!this._drawingStroke)
      return;
    if (this._data.length === 0) {
      this._strokeBegin(e);
      return;
    }
    this.dispatchEvent(new CustomEvent("beforeUpdateStroke", { detail: e }));
    const a = e.clientX, r = e.clientY, c = e.pressure !== void 0 ? e.pressure : e.force !== void 0 ? e.force : 0, s = this._createPoint(a, r, c), n = this._data[this._data.length - 1], _ = n.points, o = _.length > 0 && _[_.length - 1], v = o ? s.distanceTo(o) <= this.minDistance : !1, w = this._getPointGroupOptions(n);
    if (!o || !(o && v)) {
      const P = this._addPoint(s, w);
      o ? P && this._drawCurve(P, w) : this._drawDot(s, w), _.push({
        time: s.time,
        x: s.x,
        y: s.y,
        pressure: s.pressure
      });
    }
    this.dispatchEvent(new CustomEvent("afterUpdateStroke", { detail: e }));
  }
  _strokeEnd(e) {
    this._drawingStroke && (this._strokeUpdate(e), this._drawingStroke = !1, this.dispatchEvent(new CustomEvent("endStroke", { detail: e })));
  }
  _handlePointerEvents() {
    this._drawingStroke = !1, this.canvas.addEventListener("pointerdown", this._handlePointerStart), this.canvas.addEventListener("pointermove", this._handlePointerMove), this.canvas.ownerDocument.addEventListener("pointerup", this._handlePointerEnd);
  }
  _handleMouseEvents() {
    this._drawingStroke = !1, this.canvas.addEventListener("mousedown", this._handleMouseDown), this.canvas.addEventListener("mousemove", this._handleMouseMove), this.canvas.ownerDocument.addEventListener("mouseup", this._handleMouseUp);
  }
  _handleTouchEvents() {
    this.canvas.addEventListener("touchstart", this._handleTouchStart), this.canvas.addEventListener("touchmove", this._handleTouchMove), this.canvas.addEventListener("touchend", this._handleTouchEnd);
  }
  _reset(e) {
    this._lastPoints = [], this._lastVelocity = 0, this._lastWidth = (e.minWidth + e.maxWidth) / 2, this._ctx.fillStyle = e.penColor, this._ctx.globalCompositeOperation = e.compositeOperation;
  }
  _createPoint(e, a, r) {
    const c = this.canvas.getBoundingClientRect();
    return new Cs(e - c.left, a - c.top, r, (/* @__PURE__ */ new Date()).getTime());
  }
  _addPoint(e, a) {
    const { _lastPoints: r } = this;
    if (r.push(e), r.length > 2) {
      r.length === 3 && r.unshift(r[0]);
      const c = this._calculateCurveWidths(r[1], r[2], a), s = Wi.fromPoints(r, c);
      return r.shift(), s;
    }
    return null;
  }
  _calculateCurveWidths(e, a, r) {
    const c = r.velocityFilterWeight * a.velocityFrom(e) + (1 - r.velocityFilterWeight) * this._lastVelocity, s = this._strokeWidth(c, r), n = {
      end: s,
      start: this._lastWidth
    };
    return this._lastVelocity = c, this._lastWidth = s, n;
  }
  _strokeWidth(e, a) {
    return Math.max(a.maxWidth / (e + 1), a.minWidth);
  }
  _drawCurveSegment(e, a, r) {
    const c = this._ctx;
    c.moveTo(e, a), c.arc(e, a, r, 0, 2 * Math.PI, !1), this._isEmpty = !1;
  }
  _drawCurve(e, a) {
    const r = this._ctx, c = e.endWidth - e.startWidth, s = Math.ceil(e.length()) * 2;
    r.beginPath(), r.fillStyle = a.penColor;
    for (let n = 0; n < s; n += 1) {
      const _ = n / s, o = _ * _, v = o * _, w = 1 - _, P = w * w, A = P * w;
      let z = A * e.startPoint.x;
      z += 3 * P * _ * e.control1.x, z += 3 * w * o * e.control2.x, z += v * e.endPoint.x;
      let oe = A * e.startPoint.y;
      oe += 3 * P * _ * e.control1.y, oe += 3 * w * o * e.control2.y, oe += v * e.endPoint.y;
      const d = Math.min(e.startWidth + v * c, a.maxWidth);
      this._drawCurveSegment(z, oe, d);
    }
    r.closePath(), r.fill();
  }
  _drawDot(e, a) {
    const r = this._ctx, c = a.dotSize > 0 ? a.dotSize : (a.minWidth + a.maxWidth) / 2;
    r.beginPath(), this._drawCurveSegment(e.x, e.y, c), r.closePath(), r.fillStyle = a.penColor, r.fill();
  }
  _fromData(e, a, r) {
    for (const c of e) {
      const { points: s } = c, n = this._getPointGroupOptions(c);
      if (s.length > 1)
        for (let _ = 0; _ < s.length; _ += 1) {
          const o = s[_], v = new Cs(o.x, o.y, o.pressure, o.time);
          _ === 0 && this._reset(n);
          const w = this._addPoint(v, n);
          w && a(w, n);
        }
      else
        this._reset(n), r(s[0], n);
    }
  }
  toSVG({ includeBackgroundColor: e = !1 } = {}) {
    const a = this._data, r = Math.max(window.devicePixelRatio || 1, 1), c = 0, s = 0, n = this.canvas.width / r, _ = this.canvas.height / r, o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (o.setAttribute("xmlns", "http://www.w3.org/2000/svg"), o.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), o.setAttribute("viewBox", `${c} ${s} ${n} ${_}`), o.setAttribute("width", n.toString()), o.setAttribute("height", _.toString()), e && this.backgroundColor) {
      const v = document.createElement("rect");
      v.setAttribute("width", "100%"), v.setAttribute("height", "100%"), v.setAttribute("fill", this.backgroundColor), o.appendChild(v);
    }
    return this._fromData(a, (v, { penColor: w }) => {
      const P = document.createElement("path");
      if (!isNaN(v.control1.x) && !isNaN(v.control1.y) && !isNaN(v.control2.x) && !isNaN(v.control2.y)) {
        const A = `M ${v.startPoint.x.toFixed(3)},${v.startPoint.y.toFixed(3)} C ${v.control1.x.toFixed(3)},${v.control1.y.toFixed(3)} ${v.control2.x.toFixed(3)},${v.control2.y.toFixed(3)} ${v.endPoint.x.toFixed(3)},${v.endPoint.y.toFixed(3)}`;
        P.setAttribute("d", A), P.setAttribute("stroke-width", (v.endWidth * 2.25).toFixed(3)), P.setAttribute("stroke", w), P.setAttribute("fill", "none"), P.setAttribute("stroke-linecap", "round"), o.appendChild(P);
      }
    }, (v, { penColor: w, dotSize: P, minWidth: A, maxWidth: z }) => {
      const oe = document.createElement("circle"), d = P > 0 ? P : (A + z) / 2;
      oe.setAttribute("r", d.toString()), oe.setAttribute("cx", v.x.toString()), oe.setAttribute("cy", v.y.toString()), oe.setAttribute("fill", w), o.appendChild(oe);
    }), o.outerHTML;
  }
}
const hh = {
  name: "vueSignature",
  props: {
    sigOption: {
      type: Object,
      default: () => ({
        backgroundColor: "rgb(255,255,255)",
        penColor: "rgb(0, 0, 0)"
      })
    },
    w: {
      type: String,
      default: "100%"
    },
    h: {
      type: String,
      default: "100%"
    },
    clearOnResize: {
      type: Boolean,
      default: !1
    },
    waterMark: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    defaultUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      sig: () => {
      },
      option: {
        backgroundColor: "rgb(255,255,255)",
        penColor: "rgb(0, 0, 0)"
      },
      uid: ""
    };
  },
  watch: {
    disabled(t) {
      var e = this;
      e.sig.off && (t ? e.sig.off() : e.sig.on());
    }
  },
  created() {
    var t = this;
    this.uid = "canvas" + t._uid;
    var e = Object.keys(t.sigOption);
    for (var a of e)
      t.option[a] = t.sigOption[a];
  },
  methods: {
    draw() {
      var t = this, e = document.getElementById(t.uid);
      t.sig = new xs(e, t.option), t.attachEventListeners();
      function a(r) {
        var c;
        t.isEmpty() || (c = t.save());
        var s = Math.max(window.devicePixelRatio || 1, 1), n = RegExp(/px/);
        r.width = n.test(t.w) ? t.w.replace(/px/g, "") * s : r.offsetWidth * s, r.height = n.test(t.h) ? t.h.replace(/px/g, "") * s : r.offsetHeight * s, r.getContext("2d").scale(s, s), t.clear(), !t.clearOnResize && c !== void 0 && t.fromDataURL(c), Object.keys(t.waterMark).length && t.addWaterMark(t.waterMark);
      }
      window.addEventListener("resize", a(e)), a(e), t.defaultUrl !== "" && t.fromDataURL(t.defaultUrl), t.disabled ? t.sig.off() : t.sig.on();
    },
    clear() {
      var t = this;
      t.sig.clear();
    },
    save(t) {
      var e = this;
      return t ? e.sig.toDataURL(t) : e.sig.toDataURL();
    },
    fromDataURL(t) {
      var e = this;
      e.sig.fromDataURL(t);
    },
    isEmpty() {
      var t = this;
      return t.sig.isEmpty();
    },
    undo() {
      var t = this, e = t.sig.toData();
      e && (e.pop(), t.sig.fromData(e));
    },
    addWaterMark(t) {
      var e = this;
      if (Object.prototype.toString.call(t) != "[object Object]")
        throw new Error("Expected Object, got " + typeof t + ".");
      var a = document.getElementById(e.uid), r = {
        text: t.text || "",
        x: t.x || 20,
        y: t.y || 20,
        sx: t.sx || 40,
        sy: t.sy || 40
      }, c = a.getContext("2d");
      c.font = t.font || "20px sans-serif", c.fillStyle = t.fillStyle || "#333", c.strokeStyle = t.strokeStyle || "#333", t.style == "all" ? (c.fillText(r.text, r.x, r.y), c.strokeText(r.text, r.sx, r.sy)) : t.style == "stroke" ? c.strokeText(r.text, r.sx, r.sy) : c.fillText(r.text, r.x, r.y), e.sig._isEmpty = !1;
    },
    attachEventListeners() {
      var t = this;
      t.sig.addEventListener("beginStroke", (e) => t.$emit("beginStroke", e)), t.sig.addEventListener("endStroke", (e) => t.$emit("endStroke", e)), t.sig.addEventListener("beforeUpdateStroke", (e) => t.$emit("beforeUpdateStroke", e)), t.sig.addEventListener("afterUpdateStroke", (e) => t.$emit("afterUpdateStroke", e));
    }
  },
  mounted() {
    var t = this;
    this.$nextTick().then(() => {
      t.draw();
    });
  }
};
var ph = function() {
  var e = this, a = e._self._c;
  return a("div", { style: { width: e.w, height: e.h }, on: { touchmove: function(r) {
    r.preventDefault();
  } } }, [a("canvas", { staticClass: "canvas", attrs: { id: e.uid, "data-uid": e.uid, disabled: e.disabled } })]);
}, mh = [], gh = /* @__PURE__ */ Z(
  hh,
  ph,
  mh,
  !1,
  null,
  null
);
const yh = gh.exports;
var Ut = [];
for (var Ri = 0; Ri < 256; ++Ri)
  Ut.push((Ri + 256).toString(16).slice(1));
function bh(t, e = 0) {
  return (Ut[t[e + 0]] + Ut[t[e + 1]] + Ut[t[e + 2]] + Ut[t[e + 3]] + "-" + Ut[t[e + 4]] + Ut[t[e + 5]] + "-" + Ut[t[e + 6]] + Ut[t[e + 7]] + "-" + Ut[t[e + 8]] + Ut[t[e + 9]] + "-" + Ut[t[e + 10]] + Ut[t[e + 11]] + Ut[t[e + 12]] + Ut[t[e + 13]] + Ut[t[e + 14]] + Ut[t[e + 15]]).toLowerCase();
}
var ms, Ah = new Uint8Array(16);
function Ch() {
  if (!ms && (ms = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ms))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ms(Ah);
}
var xh = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Uo = {
  randomUUID: xh
};
function Eh(t, e, a) {
  if (Uo.randomUUID && !t)
    return Uo.randomUUID();
  t = t || {};
  var r = t.random || (t.rng || Ch)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, bh(r);
}
function Hn() {
  return Eh();
}
const Ac = Symbol("clear"), Cc = Symbol("undo"), Sh = () => {
  const t = L(!0);
  return {
    isLoading: t,
    getBase64ImageDimensions: (a, r) => new Promise((c, s) => {
      if (a === "") {
        t.value = !1;
        return;
      }
      const n = new Image();
      n.onload = (_) => {
        const o = _.target;
        o instanceof HTMLImageElement && (r({
          width: o.naturalWidth,
          height: o.naturalHeight
        }), t.value = !1, c(n));
      }, n.src = a, t.value = !0;
    })
  };
}, Wo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAAE4CAYAAABv+jgwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB4ASURBVHgB7d1bclTX2QbgJSEcV26ijMCdEViUwVVcWR6BYQSIqhyc5AIYAWIEwEUqpwvECAIjsHxFFYdCHkHaI/iVq7hAhv/7xNpkI1pSt6SWVkvPU9X07vPu3aL322t9a+25Uj179mx5bm7udiwuxWmxAABM12acNt68eXPryy+/3Mgr5vKfFy9e3H779u1qAQA4AdE4svrFF1/cmXv69OnS/Pz8y3r9/XPnzq1euHBhswAATNGTJ08GCwsLK7XHpkQjyddzz58//y6Wl+PCnUuXLq0WAIBjFFnkXpzdiNP6fHlXU1K2trbWCgDAMcvemrq4lMFku9D18uXLwwIAcMx6JSSL8wUAoBGCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQjIUCcIJevny5+Pr168Hc3Nzi27dvB3ldLA923i9uG87Pz2/G+ebCwsLGhQsXNgtw6ggmwNR14SMWlyJcLMX5Z7kcp8Wff/55Ma7bvl8Ekl2fo7stz+Mx5cWLF8MIKRtv3rx5HJfXL1++PCzAzBNMgCP35MmTwblz55bj9FWEh6UIDktd+DgqtXVlEM97JZ87gsraq1ev7ggoMNsEE+DQnj59uhQtGctx+iouLsdpMa+P8DDOwzfraRiPH+YV0Qry4847Rfj4rIaRfO6lnbfHbSvnz59fiYBy74svvrhVgJkkmAATy66Zra2tlQgLn0cguFJqENnHME4bcf8fsl4klyNIDA9aK9ILQ9+Ud2FoWzz3zefPn2drzdfqUGD2CCbAWJ49e7YcQSS7ZpajayYDwV4tIhkI1uP27+N8YxrFql9++eVGPnec7mXXUYSc1Vi+Vm/O7qPv4vxCAWaKYALsKsNIBJBsEckd/uJeQSTu9yjCwPcnUYhaX28l1je7g27Xq5fi8uqlS5dWCzAz5qLJc/ub5uLFi3MFOPN2hpFd7patH9kt8zi6dB61VHCaYaQXTsrr169/oyAW2tflES0mQL+b5mbZI4xkq8ibN28etjyPSLaQxBdcV4RbYl1X4my1ADNBMIEzqitg7YpHd+mmyfDxMG57FDv89TIjYn3vZGFsLsf5jSKYwMwQTOCMqV01N2oB66jWkZkMI3253tFqku8j399ijuCpxbJA4wQTOAOydSS6YG7Uob1LI+7SjaK5P6thZITHpTdKp7wbwQM0TjCBU6wrZI3Wkd0KWTOMPF5YWFg7bXN+5HT18d63g0mdBh+YAYIJnEI1kOTIlOURN898V8048mB/vePr/KoAM0EwgVOi112z28iaU9s6Mkoeibhbju3y6wLMBMEEZlwXSKK7ZlQgeT/E9zS3joyixQRmk2ACM6pOw35zl/qRzSxkjdaRe2f1eDH9EUexLf5TgJkgmMCMGXFcmL6cjfXhWemu2Uu0Ei1Gd872cpz/XwFmgmACM2KfQJL1I3fOWnfNXqLFZNAtazGB2SGYQOMEkoPZ0ZUzLMBMEEygUQLJoX3eLURIGRZgJggm0Jh9hv0KJON7v+1iew4LMBMEE2jEPsN+BZIJ5LaM7fh+tlfHyYHZIZhAA54+fboSO9KcqXWw4yaB5AC2traWujlMimPkwEwRTOAE7TZ1fNZEROvJdYHkwN63lsS2FExghggmcAJqV8O98nFha06MdufixYv3Coex3C3Edv6+ADNDMIFj9uLFi9sj6kjO/EytRylaST7vXdRiAjNEMIFjkt02cXYvAsjnO25af/369fXLly8PC4f29OnT7MYZ1IubCl9htggmMGV1tM3tOvz3vbj8Q5zdVEdy5N7Xl8Q21o0DM0YwgSl6/vx5Dv9dLR932+RIG3UkUxDdOFd6F9cLMFMEE5iCOmvrg7JjtE14FN02t3TbTE8Ek6+65QiA6wWYKYIJHLFsJYmz1dJrJTH893jUOp7t7Z7bXH0JzB7BBI7IHq0k9+fn51e/+OILo22mb7m3vF6AmSOYwBHQStKGHd04jwswcwQTOIQ6Udq/ilaSE5ctVqX3OZw7d269ADNHMIEDynqGCCXZdTPortNKcnIiiCz3Lq6bqA5m03wBJvbixYu7EUK+Kx8edC9bSS4IJSejP0xYNw7MLi0mMIHsLlhYWHjUn71VK0kb+vUlW1tbj8opld2HWoM4zbSYwJieP39+7fz58y93HIflkVaSkxefTbaWdIXHG6dxnpgMxfE+/x3dh/8X3Yg3C5xSggmMIbtu4myt/G/nl7O33rp48eJVv16b0J/t9dRNQ5+tJNlSV2rXYYTjawVOKV05sIdubpIIIcvdddl1E79ar5q8qyn9YcKnqhsnQ0l0Ta3vaKm7U+CUEkxgF3mU2uimyaHAg97V2XVz3TDgdtTZXge5nKExWrHWyymSI7/6oaQeZ+nU1tCAYAIj1AnTPjjIXnbdOPBee07zQfuiCzFb6/qjjTKUrBY4xQQT2CHrSWIH0C8uzHqSqwpcm3UqZ3utoWSluyyUcFYIJlB1s7j260li+Yfo37/iaMBtqrO9LtWLm9GNcyq6OIQSzjLBBMq7HVyEkp0Tpj1cWFi4GTsE9SSNis+n380x86NxdgnHQglnimDCmVdH3nwQSuwMZsPc3Nw33fKsj8YZNfrG3yFnkXlMONNy5E1OmlY+DCW37Azalzvy0jtoX7Q0rJcZleFYKIF3tJhwZuVMruXdyJv+pGmKXGdEBJHl3sX1Wa0D0mIHHxJMOJNqKFnrLuf8F69evfpaketMmfn6kl1CiWHpnGm6cjhzXrx4cbsIJafBV73l9TJjcmK4nd2I9WCQQglnmhYTzpQMJfGLdLW7LJTMpqwNKv/boW/OWvfbiAn8NiOUfO0wB6DFhDNkZyjJOUryyMBCyUzq5i6ZuW6c2mL3PpRkOH79+vUFoQTe0WLCmTAqlCwsLCw7MvBsmsVp6HMUUbSK3N0xcdoPEUpM4Ac9ggmnXjabCyWny45hteulcXU48KMdRwh+FH+H103gBx8STDgLVroFoWT27awvab0LJItcI5A8KB/OKnz/4sWLNwvwETUmnHoRRh7WxXWhZPbNz88PehebDiXZWheh5KPhwEIJ7E6LCadeHX5pCObpsdwttFr4OqqeJItcf/7556uKXGFvggkwa97XacTOvrmd/KgDQipyhfEJJsCs6Q4hkBOSDUtD6vwkq6W3juF+tNrpuoExCSbArHk/h0kr3SLZdROtJFng2h/GnJOm3Yp1XCvA2AQTYGZkN0nv4rA0IEfd1FAy6K7LrputrS1dN3AAggkwMxYWFga9i8NygmqBa07ct7Ob5n6s56r5SeBgBBOACY1qJQkZRK5fvHjxUQEOTDABGNMerSTrr1+/vq7rBg5PMAFmRgSCzbm5ue7iYjlGu7WSxDrdqXPlAEdAMAFmRgSDzfn59xNWH0swyYLb8+fPZyBZ3nGTVhKYAlPSAzOjhoCuqHSQXStlSvK586jUEUpelg9DSQ4DzlqSr4USOHqCCTBr3s9dsrW1tVKmICdKi9aZf9ejUn8wWdq5c+d+Y24SmB7BBJgpERYed8vRrXPjKFtNnj59uhKh5N/l3bGV+s+7Hq/7dR58z0EgYbrUmAAzZWFhYS1aM27H4mKEhUEeLC+Wr5cDqiNtbtSRNh+EnHrgvTtaSOD4zMWvg7e5EL8E5grADHj27NnNCA13u8uTBogcYRNnS/G4b8rHRa0pR9vkRGn3tJDA8ejyiGACzKQIF6sRLG7vuDpDxEYGlWgF+bG7Mi4vxulXETbyODuDsvuIHoEETkiXR3TlADPp0qVLqxFONms46YJGni9HuCi9+U625XV7WC/vClvXBRI4WYIJMLNyYrMnT548On/+fNaHZLfMYMyHDiO4rEf3z/fx2EfCCLRDMAFmWp1LJIPJzSxk3draWsqi2Ageg97dsotmu5sngshQEIF2CSbAqVEDx3oBZpZ5TACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzFgo07MGDB4txlqfN69evb5ZT4CTeU7zmIM/j9YbliHXPXXxGTZjmZw3HQTChaa9evboXZ9fidCdOq2XG/OMf/1iKsxtv37794Q9/+EO+l/LTTz9dmZ+ffzA3N7ceF78uxyC243dxNvjrX//69R//+Mf1coRev379IN7fchnjM8od/s8//7wcp0G8/0Fc9avezf+J59k8d+7cRjznRqznsBxSvN9BPN9ybO/N3/72t49G3efvf//7zThb/OSTT+51IaT7u4t1vB7na6VBuS1jO93NbRZ/W7fyuny/se7/rneZKzCDBBOOVf6aiy/TxfPnz29O8xfd3/72t3uxU/mmHEJ82f+mHFKsw+KbN29Wagi5VxqTO7KFhYXBOPfNHeDvf//7jXIAf/nLX5biM78bO83l3vONvG+ElhJBIkPdely8ddDXTPneYvs/iOccxsVHu9ztRpwGERjX4nzf1pFYrwflCMT7ul4OIdZ3MbbTSiwO43SrHECGm62traXYRhmgF3s3bcZzb/zud79bL3DMBBOOxT//+c/l2BHd7nZMcZ6/VIexw74TX9BrpS2DvW6sX+Y34st8+5d2nIbxJb4WX+J3yjGJbbcaZ7dj+60dZgeXO7Z4H7fHuW++VpxN/FqxrlfiLFtVFjOgxfnj2H7rv/zlL4c7u0kywMQ6LUUrx7XaCvMyHn+ra21qQazXSjkae27LCED5nj+P17sf7/9ROUK5nSO0df8fF0fdJ/4uuv+j6xHs7hxFCxaMQzBh6iKU3I4vudV6cTO+6Dbiy3YQy4M4fxC3f3bUO/Vvv/02Q8PNMqFsQYgd47/3uk98ma/H2ee9q/JX+WrsSAaH/RV8Uupn8niX277KkJDBoldP8l60gJV93I3TYt3B7vmZ/PnPf87WkTytxWexGp9Fhqbb8bprrdR6xGe9V0tadht1LSpX474Hbu0p70LJcmz/h+UIxd9pdi12QS//P96P4JHrOezuk+EwzvL0TQaxuLxcA+KRBiQYRTBhqnJH34WSOM9fXavdbbVv/27eHvf7/qhrH6ahhqwMJcM4v57r3GsRWInlxzP65b0R67066obaOrMcpysRyq6UyQ3yn9g+E22XTz/99F68XgaTxey2KPt0s9TP4W7/uvzV361D3P5B4Iwd8jCC5MQ1Pnu1HMTfcf/5F1trZdgRSvZqiVrPf/L/b7yPm3HK7q5/xeMvHKZrDcZhuDBTFU3y278esxugH0pS/VK8U+83VnfCtPXqLT7aCWYXTu2+yR3e+yLSGkS2W0rqF/hplc36aztPZf+6jO3b41f3RDU/0RJzrVuOkHKY1pJh6bUGTFNt4ek09beQISNCSddiNVb3WAarbH3M1q561d0CU6bFhKmpX4TLuZx91KPukyMh4ldx/opbjvsvT7vVpBvJkMv7dLsMd17R9cdnn/vOX8IZTuIX+WZ9H4PT2B+f73vUNssurO5zHiVC3K3avXEz7psFm48jiK6P6prpFWOuxHNeq4+/M043Tg2IJ9ZaVVvTBuVdgBvmNom/ibvdiJmTVrtnBvVznKhm5xe/+MVq/P1fO81/37RDMGGalvOfUTvyTu5wsvsjFq/VL871MkW9kQzbL7/z9jo6Idf5ox1h7e8vu9VihO33kcNTy5SHmNZC0lzfX5fGxWef9SJZILzd3RUhNU/Z9ZLbuL+dF2Pn1y/E3C6OzseXA6gh9EqtZ5raKJMu7GaYKu+6+La7h+L1coj2zXifGcDvNFAjs1TPh2VCue4RKjNsbYebckwtUJxNgglTEzuV7ovwh33umn3WOWfE5+WE5U4sd/hlxDrHjiaLEcseBY3Der5Upqxbl53bLOt2Rg2TrjvnwxrEzmllxPWL+z2wtoT9po4GWa5zmHyw7jkcOQNhzvmS2/gwrWdZSxEhZ7W/bllvkkOQIxRdP6pf/BG4VmodzKDUUNI9d84Z04WTrM2J1550BNr2umcIrc83qKF3Wx2KXiZwqGB0RH9DsC/BhKnJL848zx3OXveLL9f8NZuLg3LCsnWntoqslwnF+8hWgXzsN7ET+lW9bt+d9kHUX65pkL/Ye7/Gl/bqVjnkay6X2gp2UL1RN1OTYaEr8MwamAgi38fnkp/DdpdhhoXYZhcO0oLRdTXF4le94eKlDqn9IPDkcg0nq3Exu0EeRHDMId6P4/QoAtrGXuvQfcZd+OzmZOndXiaRYa/+fV6J9Zpo+G8tLN4eGj8LRerMNsGEqcv+9jIj9qpTmOAX4+AI57r4SM4J0w888Wt8pdTJ22L9c3ll52PqiJTBbs+521DglBPi1daZ3YYUX9v53LkjO+wEd7v4fr9Wh14B6q0dtRT3IjB+l+EktlmGitUdj/suu12qkYGyPu59gWtvjo/1UfevO/+VCAJrtQsxA0oGpBt1dtmR9Sf1M95eziARZ9cjEGXwfV+rVbvzxi6wzXXMFqN8/9Hy8q9Yp6vjhJNs5Sq16DXW6UiHLsMogglTd1xNwN3072XvdVns3X+sGTy7Kb9rN8M493/cG/3Qn9fiSNRahpQ7iQwF+Z4nKmYcYZyhwCOHFMd2/GrEZ7w0jXBWu9nWdru97tD3KvDMIPCyvNtuq2VCWawdQe2zbIX59NNPH43b6lKDy3rOzRLnGQyW4jnu73b/3mecz7/YKwxf7e5Th/JONPLn/PnzV2P9M5zlRHbfZfdSrMfIGrA6KWLW6Nyo6/Rw58g6mAbBhGnqakc+2+tO8QU5qIv71aLsqZv+fdz7T7DjHJZ3O7Qf47RUuwU+0r2PbFn49ttv8zH55T6csA5gT7kzKu92qpuxk7yZO8k6+uPmAWdH3ahDfsfx/Zj3296B1ynej9R+w4a74uXYJiPXNefgyNlMy4jWo359SNxnrbzbzh+oQeTAk+jV518b465fdS8Zp3/V4fTr5ZDq+l/oJq/L7qXs3slC5Py7rXfLFrLBjm7IW7Huhw2/MBbBhKnp9Wkv73W/OrNoLh6q9qCOuJjagcuyhqT+Ys+d30fdPVnsexTvYy85L0ztVtn+tZ61AjkrZ9x0O5YfTVrUOa0htnUHeKhiy9ZkC0KZgp21Jt2w43q4gf4w9KMcTr9W/tcl9SiLkfutXnW48zAWt1vRWjokAKefYMLU1FlR8wt3sNuX6o65TtZLw3Lm0mw6zyC1y+3b1x9yGvJd1R3WciwOu3lhdtYNPHjw4OvjHpZa1+Xhbu+7dpkNygHFe9sYdy6QLgzv9hnVFqc8DcsE6gzG35UpiJalnOJ+s/c6q7ncm/snz+9ml+BBi3b3Etv26qjr6+EZ9uvegyMnmDBt2Y9+O79Uc4RC/xd9jnB49erV9pd9nRl2WI5BjtrI9al1CGNPSd4FrVG/XmtoWNxrzpbD6B9vqM7tMexuy7qB2I4vs24g6wfGLWrc5/WWa9HlV7UuZ1Bv2qzFzLkdvo91WhvjV/zggHVG+bqLtZVqLNHVsxHbYtcWhvjct4s469GeJ3nezXjefY/ntKMgdazjP3XdUzUIfPT/IVsrItzlMWuW8/M9ifAJx0kwYapqseA3/WK73LFlPUidZ2JQei0Ax2G3GpExdb9e87ght+pO+qveQQqPfJbPnD20NxX+RxOO1S6d7Tkz+tv5IEdtzhEYEXTu1paZ1AWR9d7dFruhw1mnEK+1ttfRZw9yPJpUC1knaqWoE/Z1n1Fuh5w2/2ENRtfqek/891aDwOp+9+sXpO527KHdHldDySDXLz6DD/6Ocihy9/lmCM3Pu8Ap5Vg5TFV+oceX6tVaWLd9NOHc2cR1/yrvJtga9osOj0Osy3Ke55d8ttpM8tj89VqHTC5276V/kMKjPsBZ7Fiz/qMLJbuOisjtV2ccHcZpENt3UCaUO8eFhYXv6gy36/l88X5/He8pD9z2de90IQLnr/Mghvl6WUSc3UilEfUz2g4euW75GeVn1YWS4/57G0fdfoNS129ni8iOz/ewxw6CpmkxYerqTiBHAuQOLAtHtwNJGWNOiqNWa1q6+TUW66ydE7VyxPvJeSnW471cq7/EN2KncX8aE09FwLgZr/NZvM7D/UZF5HbOGoT//ve/K3/6058mLlasE4FlUHsUn8vVve5bd5w51fx6PG67GylnhR31eWa4itsnntX3MKOZMsDVuUOu1AnK/pOT5rV65OdoVbweoTC7627tFpq6CdtyubaSHablD5olmHBsDnrMk6PS78PPX9SxnE3ueSyTHycddVDfy1qZsi7UjXv/GhgONIIih3XXET+Px31Mrl93rKM96khyFty8bXiAyfaG5YDDyOu2m4nRJHVG3Kv73e8gLT27HKZgsZuTJyed2+Whe94na4wm6a6CcQkmnAl57JT4Il0t775s79df1MM6+dnd+PL+rLZ6DMsZFdvlx7qYI1rWJnjo9giY/UJHFu0edwsZ2/Y8TMHbMQ5hMOo+szSjM7NFMOHUqqN+VvLXYvfFWotHV3M5Wz3qcOYcqXEzm/3rQd7unMWAkiNsYhtky8dKbpf9gloduXO7tpQMWx/ufVblRHw//fTTajli6lyYFsGEUydbR+Isj/razQK66zFNsuYgWk42egday6HEK3V20Efjzp9xGtTh0Nmd0AW1m7Et8/g42QXzYz36b9Y1/CqDXk4CVh86VkFpTm0ez3etHMxDrS0Hcxonu+N0E0w4dSKA/BA71aUcCRTLWf+wvldhau9Aa6vl3XFMMqAsxc72P+WQpj0b7VHrglrpbYfyritg+/besYJyR5cTzj2eIDAsvZ3wiLg9Y0+HP6l4z78pM6j+3c7M3xaMSzChabHjuxfhYq1MMFNnhpDoxvn1pJNQ9Y5jkqcy6VDiCWwPxY3Tsf2KrUN7tycg2+++o7ZDdAW83xbZhD/Jtj3oPCYnqfu7G2d79eW2iW11Yu/3pF8fjsLc8+fPt3/CXLx4UfIGAE5El0dMsAYANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANEMwAQCaIZgAAM0QTACAZggmAEAzBBMAoBmCCQDQDMEEAGiGYAIANCODyWYuvHz5crEAAByzJ0+eDOriZgaTjVx68+bN7QIAcMw++eSTa3VxY+7Zs2fLc3Nz3+WlOF999erVw8uXLw8LAMAUZW9NNoy8ffv2Zl6O5QtzuRDhZDVCiRYTAOBERDi5c+nSpdW57oqnT58uzc/P343FpTipNwEApi3rXDdqKFnPK/4f/fQSPqAolboAAAAASUVORK5CYII=", wh = J({
  name: "HSignatureArea",
  components: {
    VueSignature: yh
  },
  props: {
    naturalWidth: {
      type: Number,
      default: 0
    },
    naturalHeight: {
      type: Number,
      default: 0
    },
    ratio: {
      type: Number,
      default: 0.56
    },
    sigOption: {
      type: Object,
      default: () => ({
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(255, 255, 255)"
      })
    },
    value: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeHolderImage: {
      type: String,
      default: Wo
    }
  },
  emits: ["input"],
  setup(t, { emit: e }) {
    const a = L(null), r = L(null), c = Me(() => t.value), s = L(""), n = L(null), _ = L(`${Hn()}`), o = L(100), v = Me(() => o.value * t.ratio), w = Me(() => !t.naturalHeight || !t.naturalWidth ? t.sigOption : {
      ...t.sigOption,
      backgroundColor: "transparent"
    }), { getBase64ImageDimensions: P } = Sh();
    Ja(
      c,
      async (p) => {
        p ? (s.value = "", n.value = await P(
          p,
          (b) => {
          }
        )) : (s.value = t.placeHolderImage, _.value = `${Hn()}`);
      },
      { immediate: !0 }
    );
    const A = () => {
      s.value = "";
    }, z = async () => {
      if (r.value)
        if (s.value = "", t.naturalWidth && t.naturalHeight) {
          const p = document.createElement("canvas");
          p.width = t.naturalWidth, p.height = t.naturalHeight;
          const b = p.getContext("2d");
          if (b && n.value) {
            b.drawImage(
              n.value,
              0,
              0,
              p.width,
              p.height
            );
            const T = r.value.$el.children[0].toDataURL(), se = await P(
              T,
              (ce) => {
              }
            );
            b.drawImage(
              se,
              0,
              0,
              p.width,
              p.height
            ), e("input", p.toDataURL("image/jpeg"));
          }
        } else {
          const p = r.value.save("image/jpeg");
          e("input", p);
        }
    }, oe = () => {
      var p;
      (p = r.value) == null || p.clear(), s.value = Wo, _.value = `${Hn()}`, e("input", "");
    }, d = () => {
      var p;
      (p = r.value) == null || p.undo(), z();
    }, x = L(null), i = () => {
      x.value && clearTimeout(x.value), x.value = setTimeout(() => {
        _.value = `${Hn()}`;
      }, 50);
    };
    return Ia(() => {
      window.addEventListener("resize", i);
    }), Gr(() => {
      window.removeEventListener("resize", i);
    }), ne(Ac, oe), ne(Cc, d), {
      signatureArea: a,
      signature: r,
      dataUrl: c,
      signatureKey: _,
      save: z,
      width: o,
      height: v,
      sigOptionData: w,
      defaultUrl: s,
      initDefaultUrl: A
    };
  }
});
var Th = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { ref: "signatureArea", staticClass: "h_signature_area" }, [a("img", { staticClass: "img", attrs: { src: e.dataUrl, alt: "" } }), a("div", { staticClass: "inner_area" }, [a("vue-signature", { key: e.signatureKey, ref: "signature", staticClass: "h_signature_pad", style: {
    width: `${e.width}%`,
    paddingTop: `${e.height}%`,
    height: "0"
  }, attrs: { sigOption: e.sigOptionData, disabled: e.disabled, w: "100%", h: "100%" }, on: { endStroke: e.save, beginStroke: e.initDefaultUrl } }), e.defaultUrl ? a("img", { staticClass: "default_img", attrs: { src: e.defaultUrl, alt: "서명 기본 이미지" } }) : e._e()], 1), e._t("default")], 2);
}, Dh = [], Lh = /* @__PURE__ */ Z(
  wh,
  Th,
  Dh,
  !1,
  null,
  null
);
const Eb = Lh.exports, Ph = J({
  name: "HSignatureClearButton",
  setup() {
    return {
      clear: k(Ac, () => {
      })
    };
  }
});
var Ih = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_delete", attrs: { type: "button" }, on: { click: e.clear } }, [e._t("default")], 2);
}, Mh = [], kh = /* @__PURE__ */ Z(
  Ph,
  Ih,
  Mh,
  !1,
  null,
  null
);
const Sb = kh.exports, Bh = J({
  name: "HSignatureUndoButton",
  setup() {
    return {
      undo: k(Cc, () => {
      })
    };
  }
});
var Rh = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { attrs: { type: "button" }, on: { click: e.undo } }, [e._t("default")], 2);
}, $h = [], Hh = /* @__PURE__ */ Z(
  Bh,
  Rh,
  $h,
  !1,
  null,
  null
);
const wb = Hh.exports, cn = Symbol(
  "clickPaginationButton"
), xc = Symbol("lastPageIndex"), Ds = Symbol("activePageIndex"), un = Symbol(
  "clickPaginationButton"
), vn = Symbol("classNameValue"), Yo = (t) => t ? t.substring(1).split("&").reduce((e, a) => {
  const [r, c] = a.split("=");
  return e[decodeURIComponent(r)] = decodeURIComponent(c), e;
}, {}) : {}, Nh = (t, e) => Array.from({ length: e - t + 1 }, (a, r) => t + r), Oh = J({
  name: "HPaginationArea",
  props: {
    value: {
      type: Number,
      required: !0
    },
    countPerPage: {
      type: Number,
      default: 10
    },
    totalCount: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ""
    },
    queryStringKey: {
      type: String,
      required: !0
    }
  },
  emits: ["click-pagination-button", "input"],
  setup(t, { emit: e }) {
    const { value: a } = Ui(t);
    Ja(a, (P) => {
      r.value = P + 1;
    });
    const r = L(a.value + 1), c = Yo(window.location.search);
    c[t.queryStringKey] && (r.value = parseInt(c[t.queryStringKey]) + 1);
    const s = Me(() => {
      const P = Math.floor(t.value / t.countPerPage) * t.countPerPage, A = P + t.countPerPage - 1 <= _.value - 1 ? P + t.countPerPage - 1 : _.value - 1;
      return Nh(P + 1, A + 1);
    }), n = (P) => {
      const A = P.target;
      if (!(A instanceof Window))
        return;
      const z = Yo(A.location.search);
      r.value !== parseInt(z[t.queryStringKey]) && (r.value = parseInt(z[t.queryStringKey]));
    };
    window.addEventListener("popstate", n), Gr(() => {
      window.removeEventListener("popstate", n);
    });
    const _ = Me(
      () => Math.ceil(t.totalCount / t.countPerPage)
    ), o = (P) => {
      r.value !== P && (P < 1 ? r.value = 1 : P > _.value ? r.value = _.value : r.value = P);
    }, v = () => {
      e("click-pagination-button", r.value - 1), e("input", r.value - 1);
    }, w = Me(() => t.type);
    return ne(cn, o), ne(xc, _), ne(Ds, r), ne(un, v), ne(vn, w), {
      lastPageIndex: _,
      activePageNum: r,
      classNameValue: w,
      paginatedItems: s
    };
  }
});
var Fh = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_pagination_area", class: e.classNameValue }, [e._t("default", null, { lastPageIndex: e.lastPageIndex, paginatedItems: e.paginatedItems })], 2);
}, zh = [], Uh = /* @__PURE__ */ Z(
  Oh,
  Fh,
  zh,
  !1,
  null,
  null
);
const Tb = Uh.exports, Wh = J({
  name: "HPaginationFirstButton",
  setup() {
    const t = k(cn, () => {
    }), e = k(
      un,
      () => {
      }
    ), a = () => {
      t(1), e();
    }, r = k(
      vn,
      Me(() => "")
    );
    return {
      clickPaginationButton: a,
      classNameValue: r
    };
  }
});
var Yh = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_first", class: e.classNameValue, attrs: { type: "button" }, on: { click: e.clickPaginationButton } }, [e._t("default", function() {
    return [e._v(" << ")];
  })], 2);
}, jh = [], Qh = /* @__PURE__ */ Z(
  Wh,
  Yh,
  jh,
  !1,
  null,
  null
);
const Db = Qh.exports, qh = J({
  name: "HPaginationLastButton",
  setup() {
    const t = k(cn, () => {
    }), e = k(
      xc,
      Me(() => 0)
    ), a = k(
      un,
      () => {
      }
    ), r = () => {
      t(e.value), a();
    }, c = k(
      vn,
      Me(() => "")
    );
    return {
      clickPaginationButton: r,
      classNameValue: c
    };
  }
});
var Gh = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_last", class: e.classNameValue, attrs: { type: "button" }, on: { click: e.clickPaginationButton } }, [e._t("default", function() {
    return [e._v(" >> ")];
  })], 2);
}, Vh = [], Xh = /* @__PURE__ */ Z(
  qh,
  Gh,
  Vh,
  !1,
  null,
  null
);
const Lb = Xh.exports, Zh = J({
  name: "HPaginationNextButton",
  setup() {
    const t = k(cn, () => {
    }), e = k(Ds, L(0)), a = k(
      un,
      () => {
      }
    ), r = () => {
      t(e.value + 1), a();
    }, c = k(
      vn,
      Me(() => "")
    );
    return {
      clickPaginationButton: r,
      classNameValue: c
    };
  }
});
var Kh = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_next", class: e.classNameValue, attrs: { type: "button" }, on: { click: e.clickPaginationButton } }, [e._t("default", function() {
    return [e._v(" > ")];
  })], 2);
}, Jh = [], ep = /* @__PURE__ */ Z(
  Zh,
  Kh,
  Jh,
  !1,
  null,
  null
);
const Pb = ep.exports, tp = J({
  name: "HPaginationNumberButton",
  props: {
    pageIndex: {
      type: Number,
      required: !0
    }
  },
  emits: ["click-pagination-button"],
  setup(t) {
    const e = k(cn, () => {
    }), a = k(Ds, L(0)), r = Me(
      () => t.pageIndex === a.value
    ), c = k(
      un,
      () => {
      }
    ), s = () => {
      e(t.pageIndex), c();
    }, n = k(
      vn,
      Me(() => "")
    );
    return {
      clickPaginationButton: s,
      isActive: r,
      classNameValue: n
    };
  }
});
var ap = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_num", class: [{ is_active: e.isActive }, e.classNameValue], attrs: { type: "button" }, on: { click: e.clickPaginationButton } }, [e._t("default", null, { isActive: e.isActive })], 2);
}, rp = [], np = /* @__PURE__ */ Z(
  tp,
  ap,
  rp,
  !1,
  null,
  null
);
const Ib = np.exports, sp = J({
  name: "HPaginationPrevButton",
  emits: ["click-pagination-button"],
  setup() {
    const t = k(cn, () => {
    }), e = k(Ds, L(0)), a = k(
      un,
      () => {
      }
    ), r = () => {
      t(e.value - 1), a();
    }, c = k(
      vn,
      Me(() => "")
    );
    return {
      clickPaginationButton: r,
      classNameValue: c
    };
  }
});
var ip = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_prev", class: e.classNameValue, attrs: { type: "button" }, on: { click: e.clickPaginationButton } }, [e._t("default", function() {
    return [e._v(" < ")];
  })], 2);
}, lp = [], op = /* @__PURE__ */ Z(
  sp,
  ip,
  lp,
  !1,
  null,
  null
);
const Mb = op.exports, cp = Symbol("pageHeaderSpace"), up = Symbol("pageFooterSpace"), vp = J({
  name: "HPrintHtmlBox",
  setup() {
    const t = L(null), e = L(null);
    ne(cp, t), ne(up, e);
  }
});
var fp = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { attrs: { id: "h-printable" } }, [e._t("default")], 2);
}, dp = [], _p = /* @__PURE__ */ Z(
  vp,
  fp,
  dp,
  !1,
  null,
  null
);
const kb = _p.exports, hp = J({
  name: "HPrintHtmlButton",
  setup() {
    return {
      clickPrintButton: () => {
        window.print();
      }
    };
  }
});
var pp = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { attrs: { type: "button" }, on: { click: e.clickPrintButton } }, [e._t("default")], 2);
}, mp = [], gp = /* @__PURE__ */ Z(
  hp,
  pp,
  mp,
  !1,
  null,
  null
);
const Bb = gp.exports, Ec = Symbol("selectedValue"), Sc = Symbol(
  "clickedDatePickerInput"
), Yi = Symbol("setSelectedDatePickerValue"), ji = Symbol("setNowMonth"), Qi = Symbol(
  "setYearForYearCalendar"
), qi = Symbol(
  "setYearForMonthCalendar"
), Gi = Symbol("yearsArrLength"), wc = Symbol(
  "setIsActiveMonthCalendar"
), Vi = Symbol(
  "setIsActiveYearCalendar"
), Tc = Symbol(
  "setNowMonthByMonthCalendar"
), Dc = Symbol(
  "setNowYearByYearCalendar"
), Lc = Symbol("calendarInput"), Pc = Symbol("calendarInputArea"), Ls = Symbol("calendarPosition"), Ic = Symbol("calendarArea"), Mc = Symbol("calendarMonthArea"), kc = Symbol("calendarYearArea"), Et = Symbol("calendarTypes"), Bc = Symbol(
  "focusInDatePickerInput"
), Rc = Symbol(
  "focusOutDatePickerInput"
), $c = Symbol("isDisabled"), Xi = Symbol("setStartDate"), Zi = Symbol("setEndDate"), Hc = Symbol("selectedRange"), Nc = Symbol("rangeType"), yp = J({
  name: "HSingleDatePickerCalendar",
  setup() {
    return {
      calendarType: k(Et)
    };
  }
});
var bp = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_calendar", class: e.calendarType }, [a("table", { staticClass: "h_calendar_table" }, [e._m(0), a("thead", { staticClass: "calendar_head" }, [e._t("table_head")], 2), a("tbody", { staticClass: "calendar_body" }, [e._t("table_body")], 2)])]);
}, Ap = [function() {
  var t = this, e = t._self._c;
  return t._self._setupProxy, e("caption", [e("span", { staticClass: "blind" }, [t._v("Dates")])]);
}], Cp = /* @__PURE__ */ Z(
  yp,
  bp,
  Ap,
  !1,
  null,
  null
);
const Rb = Cp.exports;
var Un = /* @__PURE__ */ ((t) => (t.START_DATE = "startDate", t.END_DATE = "endDate", t))(Un || {});
const xp = J({
  name: "HSingleDatePickerCalendarDateButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    const e = k(Et), a = k(
      Yi,
      () => {
      }
    ), r = k(Xi, () => {
    }), c = k(Zi, () => {
    }), s = k(
      Nc,
      Me(() => "")
    );
    return {
      clickedCalendarDateButton: () => {
        if (a(t.value), typeof t.value == "string")
          switch (s.value) {
            case Un.START_DATE:
              r(t.value);
              break;
            case Un.END_DATE:
              c(t.value);
              break;
          }
      },
      calendarType: e
    };
  }
});
var Ep = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_calendar_common", class: [e.calendarType], attrs: { type: "button" }, on: { click: e.clickedCalendarDateButton } }, [e._t("default")], 2);
}, Sp = [], wp = /* @__PURE__ */ Z(
  xp,
  Ep,
  Sp,
  !1,
  null,
  null
);
const $b = wp.exports, Ki = (t, e, a, r) => e + a > r ? {
  top: "auto",
  bottom: `${r - t}px`,
  marginBottom: "-1px"
} : {
  top: `${e}px`,
  bottom: "auto",
  marginTop: "-1px"
}, Ji = (t, e, a, r, c) => e + a - c > r ? {
  left: "auto",
  right: `${r - e}px`
} : {
  left: `${t}px`,
  right: "auto"
};
function Pa(t) {
  const [e, a, r] = t.split(".").map((s) => parseInt(s, 10)), c = new Date(e, a - 1, r);
  return c && c.getFullYear() === e && c.getMonth() === a - 1 && c.getDate() === r;
}
function sn(t = 0) {
  const e = /* @__PURE__ */ new Date();
  e.setDate(e.getDate() + t);
  const a = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), c = String(e.getDate()).padStart(2, "0");
  return `${a}.${r}.${c}`;
}
const Tp = J({
  name: "HSingleDatePickerCalendarArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const t = k(Et), e = k(Ls), a = k(Ic), r = Me(() => {
      if (!e || !Ss(e))
        return {
          position: "fixed"
        };
      const {
        bottom: c,
        left: s,
        right: n,
        top: _,
        clientWidth: o,
        clientHeight: v,
        minusWidth: w
      } = e.value;
      if (!((a == null ? void 0 : a.value) instanceof HTMLElement))
        return {};
      const { height: P, width: A } = a.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...Ki(_, c, P, v),
        ...Ji(s, n, A, o, w)
      };
    });
    return {
      calendarArea: a,
      calendarStyle: r,
      calendarType: t
    };
  }
});
var Dp = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, e.isActive ? a("div", { ref: "calendarArea", staticClass: "h_calendar_area", class: e.calendarType, style: e.calendarStyle }, [e._t("default")], 2) : e._e();
}, Lp = [], Pp = /* @__PURE__ */ Z(
  Tp,
  Dp,
  Lp,
  !1,
  null,
  null
);
const Hb = Pp.exports, Ip = J({
  name: "HSingleDatePickerCalendarMonthArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const t = k(Et), e = k(Ls), a = k(Mc), r = Me(() => {
      if (!e || !Ss(e))
        return {
          position: "fixed"
        };
      const {
        bottom: c,
        left: s,
        right: n,
        top: _,
        clientWidth: o,
        clientHeight: v,
        minusWidth: w
      } = e.value;
      if (!((a == null ? void 0 : a.value) instanceof HTMLElement))
        return {};
      const { height: P, width: A } = a.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...Ki(_, c, P, v),
        ...Ji(s, n, A, o, w)
      };
    });
    return {
      calendarMonthArea: a,
      calendarStyle: r,
      calendarType: t
    };
  }
});
var Mp = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, e.isActive ? a("div", { ref: "calendarMonthArea", staticClass: "h_calendar_month_area", class: e.calendarType, style: e.calendarStyle }, [e._t("default")], 2) : e._e();
}, kp = [], Bp = /* @__PURE__ */ Z(
  Ip,
  Mp,
  kp,
  !1,
  null,
  null
);
const Nb = Bp.exports, na = (t) => t.replace(/\./g, "-"), Rp = J({
  name: "HSingleDatePickerArea",
  props: {
    value: {
      type: String,
      // 2023.10.10
      required: !1,
      default: () => sn()
    },
    dayFormat: {
      type: Array,
      default: () => ["일", "월", "화", "수", "목", "금", "토"]
    },
    monthLength: {
      type: Number,
      default: 4
    },
    yearLength: {
      type: Number,
      default: 3
    },
    yearBeforeAfterLength: {
      type: Number,
      default: 4
    },
    type: {
      type: String,
      default: "default"
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    // disabled 날짜만
    disabledDates: {
      type: Array,
      default: () => []
      // [ '2023.10.10', '2023.09.11' ]
    },
    // disabled 범위 (연,월도 포함됨 범위이기 때문)
    disabledDatesRange: {
      type: Array,
      default: () => []
      // [ '~2023.10.10', '2023.10.10~2023.11.11', '2023.10.10~' ]
      // validator
    },
    rangeType: {
      type: String,
      default: ""
    },
    scrollEventRefs: {
      type: Array,
      required: !1
    }
  },
  emits: ["input", "blur"],
  setup(t, { emit: e }) {
    var q, Ee;
    const a = k(
      Hc,
      Me(() => [])
    ), r = (W) => {
      if (a.value.length === 0)
        return !1;
      const F = na(W);
      return new Date(na(a.value[0])) <= new Date(F) && new Date(F) <= new Date(na(a.value[1]));
    }, c = (W) => {
      if (a.value.length === 0)
        return !1;
      const [F, re] = a.value[0].split("."), [fe, D] = a.value[1].split("."), R = `${F}-${re}`, B = `${fe}-${D}`;
      return new Date(R) <= new Date(na(W)) && new Date(na(W)) <= new Date(B);
    }, s = (W) => {
      if (a.value.length === 0)
        return !1;
      const [F] = a.value[0].split("."), [re] = a.value[1].split("."), fe = `${F}`, D = `${re}`;
      return new Date(fe) <= new Date(na(W)) && new Date(na(W)) <= new Date(D);
    }, n = (W) => {
      const F = na(W), re = t.disabledDates.includes(W), fe = t.disabledDatesRange.some((D) => {
        const [R, B] = D.split("~");
        if (R.length === 0 && B.length > 0)
          return new Date(F) < new Date(na(B));
        if (R.length > 0 && B.length === 0)
          return new Date(na(R)) < new Date(F);
        if (R.length > 0 && B.length > 0)
          return new Date(na(R)) < new Date(F) && new Date(F) < new Date(na(B));
      });
      return re || fe;
    }, _ = (W) => {
      const F = na(W);
      return t.disabledDatesRange.some((re) => {
        const [fe, D] = re.split("~");
        if (fe.length === 0 && D.length > 0)
          return new Date(F) < /* @__PURE__ */ new Date(
            `${D.split(".")[0]}-${D.split(".")[1]}`
          );
        if (fe.length > 0 && D.length === 0)
          return /* @__PURE__ */ new Date(`${fe.split(".")[0]}-${fe.split(".")[1]}`) < new Date(F);
        if (fe.length > 0 && D.length > 0)
          return /* @__PURE__ */ new Date(`${fe.split(".")[0]}-${fe.split(".")[1]}`) < new Date(F) && new Date(F) < /* @__PURE__ */ new Date(`${D.split(".")[0]}-${D.split(".")[1]}`);
      });
    }, o = (W) => {
      const F = na(W);
      return t.disabledDatesRange.some((re) => {
        const [fe, D] = re.split("~");
        if (fe.length === 0 && D.length > 0)
          return new Date(F).getFullYear() < (/* @__PURE__ */ new Date(`${D.split(".")[0]}`)).getFullYear();
        if (fe.length > 0 && D.length === 0)
          return (/* @__PURE__ */ new Date(`${fe.split(".")[0]}`)).getFullYear() < new Date(F).getFullYear();
        if (fe.length > 0 && D.length > 0)
          return (/* @__PURE__ */ new Date(`${fe.split(".")[0]}`)).getFullYear() < new Date(F).getFullYear() && new Date(F).getFullYear() < (/* @__PURE__ */ new Date(`${D.split(".")[0]}`)).getFullYear();
      });
    }, v = L({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      minusWidth: 0,
      clientWidth: 0,
      clientHeight: 0
    }), w = L(null), P = L(null), A = (W) => {
      if (!w.value)
        return;
      const { bottom: F, left: re, right: fe, top: D, width: R } = w.value.getBoundingClientRect();
      v.value = {
        ...v.value,
        bottom: F,
        left: re,
        right: fe,
        top: D,
        minusWidth: R
      };
    }, z = (W) => {
      v.value = {
        ...v.value,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, oe = (W) => {
      const F = W.target;
      if (!(F instanceof Element))
        return;
      const re = F.closest(".inp_datepicker");
      if (re) {
        re !== P.value && (me.value = !1, j.value = !1, K.value = !1, e("blur"));
        return;
      }
      F.closest(".h_calendar_area") || F.closest(".h_calendar_month_area") || F.closest(".h_calendar_year_area") || (me.value = !1, j.value = !1, K.value = !1, e("blur"));
    }, d = L("");
    t.value && (d.value = t.value);
    const x = () => {
      P.value && (P.value.addEventListener(
        "keyup",
        se
      ), P.value.addEventListener(
        "blur",
        se
      ));
    }, i = () => {
      P.value && (P.value.removeEventListener(
        "keyup",
        se
      ), P.value.removeEventListener(
        "blur",
        se
      ));
    }, p = Me(() => t.rangeType), b = k(Xi, () => {
    }), S = k(Zi, () => {
    }), T = (W) => {
      switch (p.value) {
        case Un.START_DATE:
          b(W);
          break;
        case Un.END_DATE:
          S(W);
          break;
      }
    }, se = async (W) => {
      if (W instanceof KeyboardEvent && W.key !== "Enter")
        return;
      const F = W.target;
      if (!(F instanceof HTMLInputElement))
        return;
      const re = F.value, fe = (/* @__PURE__ */ new Date()).getFullYear() % 100;
      switch (re.length) {
        // 4- 2311(2023.01.01) // 2325(2023.02.05)
        case 4:
          await (async () => {
            const D = re.toString();
            let R = parseInt(D.slice(0, 2), 10);
            R > fe ? R += 1900 : R += 2e3;
            const B = D.slice(2, 3).padStart(2, "0"), te = D.slice(3).padStart(2, "0");
            if (!Pa(`${R}.${B}.${te}`) || n(`${R}.${B}.${te}`)) {
              const Ye = d.value;
              d.value = "", await Ue(), d.value = Ye, await Ue(), T(Ye);
              return;
            }
            ce.value = R, O.value = Number(B), d.value = "", await Ue(), d.value = `${R}.${B}.${te}`, await Ue(), T(`${R}.${B}.${te}`);
          })();
          break;
        // 5 - 23.21(2023.02.01) // 232.1(2023.02.01) // 23210(2023.02.10) // 23101(2023.01.01) // 23131(2023.01.31)
        case 5:
          await (async () => {
            const D = re.replace(/\./g, ""), R = fe >= parseInt(D.slice(0, 2)) ? 2e3 + parseInt(D.slice(0, 2)) : 1900 + parseInt(D.slice(0, 2));
            let B = "", te = "";
            if (D.length === 5 ? (B = D.slice(2, 3).toString().padStart(2, "0"), te = D.slice(3)) : D.length === 4 && (B = "0" + D.charAt(2), te = "0" + D.charAt(3)), !Pa(`${R}.${B}.${te}`) || n(`${R}.${B}.${te}`)) {
              const Ye = d.value;
              d.value = "", await Ue(), d.value = Ye, await Ue(), T(Ye);
              return;
            }
            ce.value = Number(R), O.value = Number(B), d.value = "", await Ue(), d.value = `${R}.${B}.${te}`, await Ue(), T(`${R}.${B}.${te}`);
          })();
          break;
        // 6 - 202321(2023.02.01) // 23.2.1(2023.02.01) // 23.210(2023.02.10) // 232.10(2023.02.10)
        case 6:
          await (async () => {
            let D = "", R = "", B = "";
            if (re.includes(".")) {
              const te = re.replace(/\./g, "");
              D = fe >= parseInt(te.slice(0, 2)) ? (2e3 + parseInt(te.slice(0, 2))).toString() : (1900 + parseInt(te.slice(0, 2))).toString(), R = te.slice(2, 3).toString().padStart(2, "0"), B = te.slice(3).toString().padStart(2, "0");
            } else
              D = re.slice(0, 2), R = re.slice(2, 4).toString().padStart(2, "0"), B = re.slice(4, 6).toString().padStart(2, "0"), Pa(`${D}.${R}.${B}`) || (D = `${D}${R}`, R = B.toString().split("")[0].padStart(2, "0"), B = B.toString().split("")[1].padStart(2, "0"));
            if (!Pa(`${D}.${R}.${B}`) || n(`${D}.${R}.${B}`)) {
              const te = d.value;
              d.value = "", await Ue(), d.value = te, await Ue(), T(te);
              return;
            }
            ce.value = Number(D), O.value = Number(R), d.value = "", await Ue(), d.value = `${D}.${R}.${B}`, await Ue(), T(`${D}.${R}.${B}`);
          })();
          break;
        // 7 - 20232.1(2023.02.01) // 2023.21(2023.02.01) // 20.0511(2020.05.11) // 2023201(2023.02.01) // 2023101(2023.01.01) // 2023130(2023.01.30)
        case 7:
          await (async () => {
            let D = "", R = "", B = "";
            if (re.includes(".")) {
              const te = re.replace(/\./g, "");
              D = fe >= parseInt(te.slice(0, 2)) ? (2e3 + parseInt(te.slice(0, 2))).toString() : (1900 + parseInt(te.slice(0, 2))).toString(), R = te.slice(2, 4).padStart(2, "0"), B = te.slice(4, 6).padStart(2, "0"), Pa(`${D}.${R}.${B}`) || (D = `${D.slice(2)}${R}`, R = `${B.split("")[0].padStart(2, "0")}`, B = `${B.split("")[1].padStart(2, "0")}`);
            } else
              D = re.slice(0, 4), R = re.slice(4, 5).toString().padStart(2, "0"), B = re.slice(5).toString().padStart(2, "0");
            if (!Pa(`${D}.${R}.${B}`) || n(`${D}.${R}.${B}`)) {
              const te = d.value;
              d.value = "", await Ue(), d.value = te, await Ue(), T(te);
              return;
            }
            ce.value = Number(D), O.value = Number(R), d.value = "", await Ue(), d.value = `${D}.${R}.${B}`, await Ue(), T(`${D}.${R}.${B}`);
          })();
          break;
        // 8 - 20230212(2023.02.12) // 2023.2.1(2023.02.01) // 20.02.05(2020.02.05) // 2023.021(2023.02.01) // 20232.11(2023.02.11)
        case 8:
          await (async () => {
            let D = "", R = "", B = "";
            if (re.includes(".")) {
              const te = re.replace(/\./g, "");
              te.length === 6 ? (D = fe >= parseInt(te.slice(0, 2)) ? (2e3 + parseInt(
                te.slice(0, 2)
              )).toString() : (1900 + parseInt(
                te.slice(0, 2)
              )).toString(), R = te.slice(2, 4).padStart(2, "0"), B = te.slice(4, 6).padStart(2, "0"), Pa(`${D}.${R}.${B}`) || (D = `${D.slice(2)}${R}`, R = `${B.split("")[0].padStart(2, "0")}`, B = `${B.split("")[1].padStart(2, "0")}`)) : (D = te.slice(0, 4), R = te.slice(4, 5).padStart(2, "0"), B = te.slice(5).padStart(2, "0"), Pa(`${D}.${R}.${B}`) || (R = B.split("")[0].padStart(2, "0"), B = B.split("")[1].padStart(2, "0")));
            } else
              D = re.slice(0, 4), R = re.slice(4, 6), B = re.slice(6, 8);
            if (!Pa(`${D}.${R}.${B}`) || n(`${D}.${R}.${B}`)) {
              const te = d.value;
              d.value = "", await Ue(), d.value = te, await Ue(), T(te);
              return;
            }
            ce.value = Number(D), O.value = Number(R), d.value = "", await Ue(), d.value = `${D}.${R}.${B}`, await Ue(), T(`${D}.${R}.${B}`);
          })();
          break;
        // 9 - 2023.02.1(2023.02.01) // 2023.0212(2023.02.12) // 202302.12(2023.02.12) // 2023.2.11(2023.02.11) // 2023.02.1(2023.02.01) // 2023.19.1(2023.09.01)
        case 9:
          await (async () => {
            let D = "", R = "", B = "";
            if (re.includes(".")) {
              const te = re.replace(/\./g, "");
              if (D = te.slice(0, 4), R = te.slice(4, 5).padStart(2, "0"), B = te.slice(5).padStart(2, "0"), !Pa(`${D}.${R}.${B}`)) {
                const [Ye, ...pt] = B.split("");
                R = Ye.padStart(2, "0"), B = pt.join("").padStart(2, "0");
              }
            }
            if (!Pa(`${D}.${R}.${B}`) || n(`${D}.${R}.${B}`)) {
              const te = d.value;
              d.value = "", await Ue(), d.value = te, await Ue(), T(te);
              return;
            }
            ce.value = Number(D), O.value = Number(R), d.value = "", await Ue(), d.value = `${D}.${R}.${B}`, await Ue(), T(`${D}.${R}.${B}`);
          })();
          break;
        // 10 - 2023.02.12
        case 10:
        default:
          await (async () => {
            if (!Pa(re) || n(re)) {
              const te = d.value;
              d.value = "", await Ue(), d.value = te, await Ue(), T(te);
              return;
            }
            const [D, R, B] = re.split(".");
            ce.value = Number(D), O.value = Number(R), d.value = "", await Ue(), d.value = `${D}.${R}.${B}`, await Ue(), T(`${D}.${R}.${B}`);
          })();
          break;
      }
    }, ce = L(
      Number((q = d.value) == null ? void 0 : q.split(".")[0]) || (/* @__PURE__ */ new Date()).getFullYear()
    ), O = L(
      Number((Ee = d.value) == null ? void 0 : Ee.split(".")[1]) || (/* @__PURE__ */ new Date()).getMonth() + 1
    ), ae = (W) => {
      const F = O.value + W;
      F > 12 ? (O.value = 1, ce.value += 1) : F < 1 ? (O.value = 12, ce.value -= 1) : O.value = F;
    }, G = L(ce.value), ue = (W) => {
      G.value += W;
    }, Y = L(ce.value), I = (W) => {
      De.value += W, Ie.value += W;
    };
    Ja(ce, (W, F) => {
      G.value = W, Y.value = W;
    });
    const j = L(!1);
    Ia(() => {
      window.addEventListener("click", oe), window.addEventListener("scroll", A), window.addEventListener("resize", z), Array.isArray(t.scrollEventRefs) && t.scrollEventRefs.forEach((W) => {
        const F = document.querySelector(W);
        F instanceof HTMLElement && F.addEventListener("scroll", A);
      });
    }), Gr(() => {
      window.removeEventListener("click", oe), window.removeEventListener("scroll", A), window.removeEventListener("resize", z), Array.isArray(t.scrollEventRefs) && t.scrollEventRefs.forEach((W) => {
        const F = document.querySelector(W);
        F instanceof HTMLElement && F.removeEventListener(
          "scroll",
          A
        );
      });
    });
    const K = L(!1), ee = () => {
      K.value = !0, me.value = !1, j.value = !1;
    }, me = L(!1), St = () => {
      me.value = !0, j.value = !1, K.value = !1;
    }, Ae = () => {
      if (j.value || K.value || me.value)
        switch (!0) {
          case j.value:
            j.value = !0, K.value = !1, me.value = !1;
            break;
          case K.value:
            j.value = !1, K.value = !0, me.value = !1;
            break;
          case me.value:
            j.value = !1, K.value = !1, me.value = !0;
            break;
        }
      else
        j.value = !0, me.value = !1, K.value = !1;
      if (!w.value)
        return;
      const { bottom: W, left: F, right: re, top: fe, width: D } = w.value.getBoundingClientRect();
      v.value = {
        bottom: W,
        left: F,
        right: re,
        top: fe,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight,
        minusWidth: D
      };
    }, Xe = Me(() => {
      const [W, F] = sn().split("."), fe = Array.from({ length: 12 }, (R, B) => B + 1).map((R) => {
        var B, te, Ye, pt;
        return {
          year: String(G.value),
          month: String(R),
          isActive: ce.value === G.value && O.value === R,
          inRange: c(
            `${String(G.value)}.${String(
              R
            ).padStart(2, "0")}`
          ),
          isDisabled: _(
            `${String(G.value)}.${String(
              R
            ).padStart(2, "0")}`
          ),
          isCurrentMonth: G.value === Number(W) && R === Number(F),
          isStartMonth: Number((B = a.value[0]) == null ? void 0 : B.split(".")[0]) === G.value && Number((te = a.value[0]) == null ? void 0 : te.split(".")[1]) === R,
          isEndMonth: Number((Ye = a.value[1]) == null ? void 0 : Ye.split(".")[0]) === G.value && Number((pt = a.value[1]) == null ? void 0 : pt.split(".")[1]) === R
        };
      }), D = [];
      for (let R = 0; R < fe.length; R += t.monthLength)
        D.push(fe.slice(R, R + t.monthLength));
      return D;
    }), V = L(t.yearBeforeAfterLength * 2 + 1), De = L(
      Y.value - t.yearBeforeAfterLength
    ), Ie = L(
      Y.value + t.yearBeforeAfterLength
    ), Ce = Me(() => {
      const [W] = sn().split("."), F = [];
      for (let D = De.value; D <= Ie.value; D++)
        F.push(D);
      const re = F.map((D) => {
        var R, B;
        return {
          year: String(D),
          isActive: ce.value === D,
          inRange: s(String(D)),
          // Todo
          isDisabled: o(String(D)),
          isCurrentYear: D === Number(W),
          isStartYear: Number((R = a.value[0]) == null ? void 0 : R.split(".")[0]) === D,
          isEndYear: Number((B = a.value[1]) == null ? void 0 : B.split(".")[0]) === D
        };
      }), fe = [];
      for (let D = 0; D < re.length; D += t.yearLength)
        fe.push(re.slice(D, D + t.yearLength));
      return fe;
    }), f = (W, F) => {
      var sa, wt, Tt, Fe, ia, mr, ft;
      const [re, fe, D] = sn().split("."), [R, B, te] = ((sa = d.value) == null ? void 0 : sa.split(".")) || [null, null, null], Ye = Number(R) === W && Number(B) === F, pt = new Date(W, F, 0).getDate(), ke = [];
      let qe = Array(7).fill(null);
      for (let je = 1; je <= pt; je++) {
        const Ze = new Date(W, F - 1, je).getDay();
        qe[Ze] = {
          year: String(W),
          month: String(F).padStart(2, "0"),
          date: String(je),
          isActive: Ye && Number(te) === je,
          inRange: r(
            `${String(W)}.${String(F).padStart(
              2,
              "0"
            )}.${String(je).padStart(2, "0")}`
          ),
          isDisabled: n(`${String(W)}.${String(F).padStart(2, "0")}.${String(je).padStart(2, "0")}`),
          isCurrentDate: Number(re) === W && Number(fe) === F && Number(D) === je,
          isStartDate: Number((wt = a.value[0]) == null ? void 0 : wt.split(".")[0]) === W && Number((Tt = a.value[0]) == null ? void 0 : Tt.split(".")[1]) === F && Number((Fe = a.value[0]) == null ? void 0 : Fe.split(".")[2]) === je,
          isEndDate: Number((ia = a.value[1]) == null ? void 0 : ia.split(".")[0]) === W && Number((mr = a.value[1]) == null ? void 0 : mr.split(".")[1]) === F && Number((ft = a.value[1]) == null ? void 0 : ft.split(".")[2]) === je
        }, (Ze === 6 || je === pt) && (ke.push(qe), qe = Array(7).fill(null));
      }
      return ke;
    }, y = Me(() => f(ce.value, O.value)), h = (W) => {
      d.value = W, j.value = !1, K.value = !1, me.value = !1, e("input", d.value);
    }, C = (W) => {
      const [F, re] = W.split(".");
      ce.value = Number(F), O.value = Number(re), K.value = !1, me.value = !1, j.value = !0;
    }, $ = (W) => {
      ce.value = Number(W), me.value = !1, K.value = !0, j.value = !1;
    }, ie = L(null), ve = L(null), ge = L(null), N = Me(() => t.isDisabled);
    return ne(Ec, d), ne(Sc, Ae), ne(Yi, h), ne(ji, ae), ne(Qi, I), ne(qi, ue), ne(Gi, V), ne(Vi, St), ne(wc, ee), ne(Tc, C), ne(Dc, $), ne(Lc, P), ne(Pc, w), ne(Ls, v), ne(Ic, ie), ne(Mc, ve), ne(kc, ge), ne(Et, t.type), ne(Bc, x), ne(Rc, i), ne($c, N), ne(Nc, p), {
      isActiveCalendar: j,
      monthDates: y,
      nowYear: ce,
      nowMonth: O,
      months: Xe,
      years: Ce,
      startYear: De,
      endYear: Ie,
      isActiveMonthCalendar: K,
      isActiveYearCalendar: me,
      yearForYearCalendar: Y,
      yearForMonthCalendar: G,
      // ...
      selectedDatePickerValue: d
    };
  }
});
var $p = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_single_datepicker_area", class: e.type }, [e._t("default", null, { isActiveCalendar: e.isActiveCalendar, isActiveMonthCalendar: e.isActiveMonthCalendar, isActiveYearCalendar: e.isActiveYearCalendar, dayFormat: e.dayFormat, monthDates: e.monthDates, nowYear: e.nowYear, nowMonth: e.nowMonth, months: e.months, years: e.years, startYear: e.startYear, endYear: e.endYear, yearForYearCalendar: e.yearForYearCalendar, yearForMonthCalendar: e.yearForMonthCalendar })], 2);
}, Hp = [], Np = /* @__PURE__ */ Z(
  Rp,
  $p,
  Hp,
  !1,
  null,
  null
);
const Ob = Np.exports, Op = J({
  name: "HSingleDatePickerCalendarMonth",
  setup() {
    return {
      calendarType: k(Et)
    };
  }
});
var Fp = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_calendar_month", class: e.calendarType }, [a("table", { staticClass: "h_calendar_month_table" }, [e._m(0), a("thead", [e._t("table_head")], 2), a("tbody", [e._t("table_body")], 2)])]);
}, zp = [function() {
  var t = this, e = t._self._c;
  return t._self._setupProxy, e("caption", [e("span", { staticClass: "blind" }, [t._v("Months")])]);
}], Up = /* @__PURE__ */ Z(
  Op,
  Fp,
  zp,
  !1,
  null,
  null
);
const Fb = Up.exports, Wp = J({
  name: "HSingleDatePickerMonthButton",
  setup() {
    const t = k(Et);
    return {
      setIsActiveMonthCalendar: k(
        wc,
        () => {
        }
      ),
      calendarType: t
    };
  }
});
var Yp = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_month", class: e.calendarType, attrs: { type: "button" }, on: { click: e.setIsActiveMonthCalendar } }, [e._t("default")], 2);
}, jp = [], Qp = /* @__PURE__ */ Z(
  Wp,
  Yp,
  jp,
  !1,
  null,
  null
);
const zb = Qp.exports, qp = J({
  name: "HSingleDatePickerCalendarMonthButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    const e = k(Et), a = k(
      Tc,
      (c) => {
      }
    );
    return {
      clickedNowMonthButton: () => {
        a(t.value);
      },
      calendarType: e
    };
  }
});
var Gp = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_calendar_common", class: e.calendarType, attrs: { type: "button" }, on: { click: e.clickedNowMonthButton } }, [e._t("default")], 2);
}, Vp = [], Xp = /* @__PURE__ */ Z(
  qp,
  Gp,
  Vp,
  !1,
  null,
  null
);
const Ub = Xp.exports, Zp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdSxCQMhFABQFQS73Ai3QWa4USytQkbIBukUG0dJRsgIN4KlWEjUIuRyen4t8kH8IE8E//8I/SOMMZPW+pJy3IO898+YnuO6guAPWkMISxOWkBBixSMoneERVIUtVIQQtINQtIE96AN7UYYjKAVxzk1xP+VbMLaMMYsAkZ8qpZwJIY+YzhG/KKUL59w24QjefEcP3hUAFBdLDoKrRd7Ch211hJuNXMOg0VHC4GH1jWNZ3lBPJKyUuqf8DUy8w9O6XZwQAAAAAElFTkSuQmCC", Kp = J({
  name: "IconArrowLeft",
  setup() {
    return {
      ArrowLeftImage: Zp
    };
  }
});
var Jp = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("span", [a("img", { attrs: { src: e.ArrowLeftImage, alt: "왼쪽 화살표" } })]);
}, em = [], tm = /* @__PURE__ */ Z(
  Kp,
  Jp,
  em,
  !1,
  null,
  null
);
const el = tm.exports, am = J({
  name: "HSingleDatePickerMonthPrevButton",
  components: {
    IconArrowLeft: el
  },
  setup() {
    const t = k(qi, (a) => {
    }), e = k(Et);
    return {
      setYearForMonthCalendar: t,
      calendarType: e
    };
  }
});
var rm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_calendar_month_prev", class: e.calendarType, attrs: { type: "button" }, on: { click: function(r) {
    return e.setYearForMonthCalendar(-1);
  } } }, [e._t("default", function() {
    return [e.calendarType === "type1" ? a("icon-arrow-left") : e._e()];
  }), a("span", { staticClass: "blind" }, [e._v(" 이전 연도 ")])], 2);
}, nm = [], sm = /* @__PURE__ */ Z(
  am,
  rm,
  nm,
  !1,
  null,
  null
);
const Wb = sm.exports, im = J({
  name: "HSingleDatePickerCalendarYear",
  setup() {
    return {
      calendarType: k(Et)
    };
  }
});
var lm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_calendar_year", class: e.calendarType }, [e._t("default"), a("table", { staticClass: "h_calendar_year_table" }, [e._m(0), a("thead", [e._t("table_head")], 2), a("tbody", [e._t("table_body")], 2)])], 2);
}, om = [function() {
  var t = this, e = t._self._c;
  return t._self._setupProxy, e("caption", [e("span", { staticClass: "blind" }, [t._v("Years")])]);
}], cm = /* @__PURE__ */ Z(
  im,
  lm,
  om,
  !1,
  null,
  null
);
const Yb = cm.exports, um = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBpdS9FcIgEADgHEVqR8gIruAGjiAllRnFCh40uIEjZIWMkBHseQ88LfKi8nOnFBx3730cDdd1/yzn3NkYM3CMsNaOKaWLEGLiYNH3/RUAZjwPHAzPzXu/CyFM2HmP6RJjPCillib8BcM24WD4LFAx5G6j4Cyk4CJs4Sqs4SYsYUGBUso7hnlbI3XET+Cx24n11BxqdiyhKqyhImyhLKSgL0hFb5CDVshFL4jD6ojxxkHr0lqP3PH4AAMhEevOZzQ6AAAAAElFTkSuQmCC", vm = J({
  name: "IconArrowRight",
  setup() {
    return {
      ArrowRightImage: um
    };
  }
});
var fm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("span", [a("img", { attrs: { src: e.ArrowRightImage, alt: "오른쪽 화살표" } })]);
}, dm = [], _m = /* @__PURE__ */ Z(
  vm,
  fm,
  dm,
  !1,
  null,
  null
);
const tl = _m.exports, hm = J({
  name: "HSingleDatePickerNextButton",
  components: {
    IconArrowRight: tl
  },
  setup() {
    const t = k(ji, (a) => {
    }), e = k(Et);
    return {
      setNowMonth: t,
      calendarType: e
    };
  }
});
var pm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_calendar_next", class: e.calendarType, attrs: { type: "button" }, on: { click: function(r) {
    return e.setNowMonth(1);
  } } }, [e._t("default", function() {
    return [e.calendarType === "type1" ? a("icon-arrow-right") : e._e()];
  }), a("span", { staticClass: "blind" }, [e._v(" 다음 ")])], 2);
}, mm = [], gm = /* @__PURE__ */ Z(
  hm,
  pm,
  mm,
  !1,
  null,
  null
);
const jb = gm.exports, ym = J({
  name: "HSingleDatePickerPrevButton",
  components: {
    IconArrowLeft: el
  },
  setup() {
    const t = k(ji, (a) => {
    }), e = k(Et);
    return {
      setNowMonth: t,
      calendarType: e
    };
  }
});
var bm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_calendar_prev", class: e.calendarType, attrs: { type: "button" }, on: { click: function(r) {
    return e.setNowMonth(-1);
  } } }, [e._t("default", function() {
    return [e.calendarType === "type1" ? a("icon-arrow-left") : e._e()];
  }), a("span", { staticClass: "blind" }, [e._v(" 이전 ")])], 2);
}, Am = [], Cm = /* @__PURE__ */ Z(
  ym,
  bm,
  Am,
  !1,
  null,
  null
);
const Qb = Cm.exports, xm = J({
  name: "HSingleDatePickerCalendarYearArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const t = k(Et), e = k(Ls), a = k(kc), r = Me(() => {
      if (!e || !Ss(e))
        return {
          position: "fixed"
        };
      const {
        bottom: c,
        left: s,
        right: n,
        top: _,
        clientWidth: o,
        clientHeight: v,
        minusWidth: w
      } = e.value;
      if (!((a == null ? void 0 : a.value) instanceof HTMLElement))
        return {};
      const { height: P, width: A } = a.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...Ki(_, c, P, v),
        ...Ji(s, n, A, o, w)
      };
    });
    return {
      calendarYearArea: a,
      calendarStyle: r,
      calendarType: t
    };
  }
});
var Em = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, e.isActive ? a("div", { ref: "calendarYearArea", staticClass: "h_calendar_year_area", class: e.calendarType, style: e.calendarStyle }, [e._t("default")], 2) : e._e();
}, Sm = [], wm = /* @__PURE__ */ Z(
  xm,
  Em,
  Sm,
  !1,
  null,
  null
);
const qb = wm.exports, Tm = J({
  name: "HSingleDatePickerYearButton",
  setup() {
    const t = k(Et);
    return {
      setIsActiveYearCalendar: k(
        Vi,
        () => {
        }
      ),
      calendarType: t
    };
  }
});
var Dm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_year", class: e.calendarType, attrs: { type: "button" }, on: { click: e.setIsActiveYearCalendar } }, [e._t("default")], 2);
}, Lm = [], Pm = /* @__PURE__ */ Z(
  Tm,
  Dm,
  Lm,
  !1,
  null,
  null
);
const Gb = Pm.exports, Im = J({
  name: "HSingleDatePickerYearNextButton",
  components: {
    IconArrowRight: tl
  },
  setup() {
    const t = k(
      Qi,
      (r) => {
      }
    ), e = k(Gi, L(0)), a = k(Et);
    return {
      setYearForYearCalendar: t,
      yearsArrLength: e,
      calendarType: a
    };
  }
});
var Mm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_calendar_year_next", class: e.calendarType, attrs: { type: "button" }, on: { click: function(r) {
    return e.setYearForYearCalendar(e.yearsArrLength);
  } } }, [e._t("default", function() {
    return [e.calendarType === "type1" ? a("icon-arrow-right") : e._e()];
  }), a("span", { staticClass: "blind" }, [e._v(" 다음 연도 ")])], 2);
}, km = [], Bm = /* @__PURE__ */ Z(
  Im,
  Mm,
  km,
  !1,
  null,
  null
);
const Vb = Bm.exports, Rm = J({
  name: "HSingleDatePickerCalendarYearButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    const e = k(Et), a = k(
      Dc,
      (c) => {
      }
    );
    return {
      clickedYearButton: () => {
        a(t.value);
      },
      calendarType: e
    };
  }
});
var $m = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_calendar_common", class: e.calendarType, attrs: { type: "button" }, on: { click: e.clickedYearButton } }, [e._t("default")], 2);
}, Hm = [], Nm = /* @__PURE__ */ Z(
  Rm,
  $m,
  Hm,
  !1,
  null,
  null
);
const Xb = Nm.exports, Oc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB7ZnRbYNADIZ9iAceM8J1g3aDdJL2CcRTlQ3aEfqE4KXqBO0G7QbpBmUEFgDii4gURbkAZ0cOkj/pMNKPJf9wdzIAoCiKokhRluW/GxAINd8RAw0LNCwQiWDhGJ9QVdULhue+71fgxw6xhjDsWL4xpsEa3rIs+z6ne6cQJr1iuFT8uUJCseCvw4UPHPMMwFA83oGHtm2bU7HrulUcx9vh/A5mMiX/6BrvjRxdxGma/vk03EH2Mc/zGgKYkn+4xsfiFzF1G62BRg1ESAZwjj4mSdJAINR8B8lA6Nznyncsfg2oAWnUgDRqQBoWA9h633NrUyEbwGbrC1veLRbzw6XNgeMJrN0Bi1kzapMhG8B+ZoPvDL94uuHSWMBH3LsBwozVobuQNGpAGjUgjRqQRg1IM/pZhfoD4tp4DWCz9RlF0RMw/ISggh3ru08zlxKLorBwA3B8AFMU5UbZAevho9IdayVBAAAAAElFTkSuQmCC", Om = J({
  name: "IconCalendar",
  setup() {
    return {
      CalendarImage: Oc
    };
  }
});
var Fm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("span", [a("img", { attrs: { src: e.CalendarImage, alt: "달력 이미지" } })]);
}, zm = [], Um = /* @__PURE__ */ Z(
  Om,
  Fm,
  zm,
  !1,
  null,
  null
);
const Wm = Um.exports, Ym = J({
  name: "HSingleDatePickerInput",
  components: {
    IconCalendar: Wm
  },
  props: {
    reactiveImage: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    inputName: {
      type: String,
      default: ""
    }
  },
  setup() {
    const t = k(
      Ec,
      L(null)
    );
    Ja(t, (P) => {
      _(P);
    });
    const e = k(Sc, () => {
    }), a = k(Pc), r = k(Lc), c = k(Et), s = k(Bc), n = k(Rc), _ = k(
      Yi,
      () => {
      }
    ), o = k($c), v = L(Oc), w = Hn();
    return {
      selectedDatePickerValue: t,
      clickedDatePickerInput: e,
      calendarInput: r,
      calendarInputArea: a,
      calendarType: c,
      focusInDatePickerInput: s,
      focusOutDatePickerInput: n,
      isDisabled: o,
      imageSrc: v,
      id: w
    };
  }
});
var jm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { ref: "calendarInputArea", staticClass: "h_inp_datepicker_area", class: e.calendarType }, [e.reactiveImage ? [a("img", { staticClass: "icon_calendar", attrs: { src: e.imageSrc, alt: "달력 이미지" } })] : [e.calendarType === "type1" ? a("icon-calendar") : e._e()], a("input", { ref: "calendarInput", staticClass: "inp_datepicker", attrs: { id: e.id, type: "text", disabled: e.isDisabled, placeholder: e.placeholder, name: e.inputName }, domProps: { value: e.selectedDatePickerValue }, on: { click: e.clickedDatePickerInput, keyup: e.focusInDatePickerInput, focusout: e.focusOutDatePickerInput } })], 2);
}, Qm = [], qm = /* @__PURE__ */ Z(
  Ym,
  jm,
  Qm,
  !1,
  null,
  null
);
const Zb = qm.exports, Gm = J({
  name: "HSingleDatePickerMonthNextButton",
  components: {
    IconArrowRight: tl
  },
  setup() {
    const t = k(qi, (a) => {
    }), e = k(Et);
    return {
      setYearForMonthCalendar: t,
      calendarType: e
    };
  }
});
var Vm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_calendar_month_next", class: e.calendarType, attrs: { type: "button" }, on: { click: function(r) {
    return e.setYearForMonthCalendar(1);
  } } }, [e._t("default", function() {
    return [e.calendarType === "type1" ? a("icon-arrow-right") : e._e()];
  }), a("span", { staticClass: "blind" }, [e._v(" 다음 연도 ")])], 2);
}, Xm = [], Zm = /* @__PURE__ */ Z(
  Gm,
  Vm,
  Xm,
  !1,
  null,
  null
);
const Kb = Zm.exports, Km = J({
  name: "HSingleDatePickerMonthYearButton",
  setup() {
    const t = k(Et);
    return {
      setIsActiveYearCalendar: k(
        Vi,
        () => {
        }
      ),
      calendarType: t
    };
  }
});
var Jm = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_year_in_month", class: e.calendarType, attrs: { type: "button" }, on: { click: e.setIsActiveYearCalendar } }, [e._t("default")], 2);
}, eg = [], tg = /* @__PURE__ */ Z(
  Km,
  Jm,
  eg,
  !1,
  null,
  null
);
const Jb = tg.exports, ag = J({
  name: "HSingleDatePickerRangeArea",
  props: {
    value: {
      type: Array,
      default: () => [
        sn(),
        sn()
      ]
    }
  },
  emits: ["input"],
  setup(t, { emit: e }) {
    const a = L(t.value[0]), r = L(t.value[1]), c = Me(() => [a.value, r.value]), s = Me(() => [
      `${r.value}~`
    ]), n = Me(() => [
      `~${a.value}`
    ]), _ = () => {
      e("input", [a.value, r.value]);
    }, o = (w) => {
      a.value = w, _();
    }, v = (w) => {
      r.value = w, _();
    };
    return ne(Xi, o), ne(Zi, v), ne(Hc, c), {
      startDate: a,
      endDate: r,
      startDisableDatesRange: s,
      endDisabledDatesRange: n
    };
  }
});
var rg = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_single_datepicker_range_area" }, [e._t("default", null, { startDate: e.startDate, endDate: e.endDate, startDisableDatesRange: e.startDisableDatesRange, endDisabledDatesRange: e.endDisabledDatesRange })], 2);
}, ng = [], sg = /* @__PURE__ */ Z(
  ag,
  rg,
  ng,
  !1,
  null,
  null
);
const eA = sg.exports, ig = J({
  name: "HSingleDatePickerYearPrevButton",
  components: {
    IconArrowLeft: el
  },
  setup() {
    const t = k(
      Qi,
      (r) => {
      }
    ), e = k(Gi, L(0)), a = k(Et);
    return {
      setYearForYearCalendar: t,
      yearsArrLength: e,
      calendarType: a
    };
  }
});
var lg = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { staticClass: "h_btn_calendar_year_prev", class: e.calendarType, attrs: { type: "button" }, on: { click: function(r) {
    return e.setYearForYearCalendar(-1 * e.yearsArrLength);
  } } }, [e._t("default", function() {
    return [e.calendarType === "type1" ? a("icon-arrow-left") : e._e()];
  }), a("span", { staticClass: "blind" }, [e._v(" 이전 연도 ")])], 2);
}, og = [], cg = /* @__PURE__ */ Z(
  ig,
  lg,
  og,
  !1,
  null,
  null
);
const tA = cg.exports, Fc = Symbol(
  "inputFileButtonClick"
), zc = Symbol("deleteFile"), Uc = Symbol("fileName"), Wc = Symbol("fileSize"), al = Symbol("file"), Ps = Symbol("isError"), ug = Symbol("imageEl"), vg = Symbol("signImage"), fg = Symbol("useDirectImage"), dg = Symbol("cancelDirectImage"), _g = Symbol("realValue"), hg = J({
  name: "HSingleFileUploadedFileArea",
  setup() {
    const t = k(al, L(null)), e = k(Ps, L(!1));
    return {
      file: t,
      isError: e
    };
  }
});
var pg = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, e.file && !e.isError ? a("div", { staticClass: "h_uploaded_file" }, [e._t("default")], 2) : e._e();
}, mg = [], gg = /* @__PURE__ */ Z(
  hg,
  pg,
  mg,
  !1,
  null,
  null
);
const aA = gg.exports, yg = J({
  name: "HSingleFileUploadedFileDeleteButton",
  setup() {
    return {
      deleteFile: k(zc, () => {
      })
    };
  }
});
var bg = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { attrs: { type: "button" }, on: { click: e.deleteFile } }, [e._t("default")], 2);
}, Ag = [], Cg = /* @__PURE__ */ Z(
  yg,
  bg,
  Ag,
  !1,
  null,
  null
);
const rA = Cg.exports, xg = J({
  name: "HSingleFileUploadTitle"
});
var Eg = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("em", { staticClass: "h-single-file-upload-tit" }, [e._t("default")], 2);
}, Sg = [], wg = /* @__PURE__ */ Z(
  xg,
  Eg,
  Sg,
  !1,
  null,
  null
);
const nA = wg.exports, Tg = J({
  name: "HSingleFileUploadedFileName",
  setup() {
    return {
      fileName: k(
        Uc,
        Me(() => "")
      )
    };
  }
});
var Dg = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("span", { staticClass: "h_file_name" }, [e._v(" " + e._s(e.fileName) + " ")]);
}, Lg = [], Pg = /* @__PURE__ */ Z(
  Tg,
  Dg,
  Lg,
  !1,
  null,
  null
);
const sA = Pg.exports, Ig = () => ({
  base64ToArrayBuffer: (a) => {
    const r = window.atob(a), c = r.length, s = new Uint8Array(c);
    for (let n = 0; n < c; n++)
      s[n] = r.charCodeAt(n);
    return s.buffer;
  },
  arrayBufferToBase64: (a) => {
    let r = "";
    const c = new Uint8Array(a), s = c.byteLength;
    for (let n = 0; n < s; n++)
      r += String.fromCharCode(c[n]);
    return window.btoa(r);
  }
}), Mg = (t) => {
  let e = "";
  const a = new Uint8Array(t), r = a.byteLength;
  for (let c = 0; c < r; c++)
    e += String.fromCharCode(a[c]);
  return window.btoa(e);
}, kg = (t) => new Promise((e, a) => {
  const r = new FileReader();
  r.readAsDataURL(t), r.onload = () => {
    const c = r.result;
    if (!c) {
      e("");
      return;
    }
    c instanceof ArrayBuffer ? e(Mg(c)) : e(c);
  }, r.onerror = (c) => {
    a(c);
  };
});
function Bg() {
  const t = (n) => (_) => n(_), e = L(null), a = L(null);
  return {
    promiseInstance: async () => await new Promise((n, _) => {
      e.value = t(n), a.value = t(_);
    }),
    resolveFunc: e,
    rejectFunc: a,
    clearResolveFunc: () => {
      e.value = null;
    },
    clearRejectFunc: () => {
      a.value = null;
    }
  };
}
const Rg = J({
  name: "HSingleFileUploadArea",
  props: {
    image: {
      type: Boolean,
      default: !1
    },
    value: {
      default: null
      /**
       * validator 사용하면 setup(props <- 이 인자의 타입이 추론이 안됨) 왜 그런건지는 모르겠음
       * */
      // validator: function (value) {
      // 	return value === null || value instanceof File;
      // },
    },
    validStatus: {
      type: Boolean,
      default: !0
    },
    validExtensions: {
      type: Array,
      default: () => []
      // 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    },
    limitSize: {
      type: Number,
      // byte 단위
      default: 1 / 0
    },
    initImage: {
      type: String,
      default: null
    }
  },
  emits: [
    "input",
    "exceed-size",
    "use-direct-image-before",
    "use-direct-image",
    "cancel-direct-image",
    "no-valid-extensions"
  ],
  setup(t, { emit: e }) {
    const { validStatus: a, validExtensions: r, value: c } = Ui(t), s = L(c.value || null), n = L(!1), _ = L(!1), o = L(!1);
    ne(_g, c);
    const v = Me(() => {
      var Y;
      return (Y = s.value) == null ? void 0 : Y.name;
    }), w = Me(() => {
      var j;
      const Y = (j = s.value) == null ? void 0 : j.size;
      let I = "";
      if (!Y)
        return 0;
      switch (!0) {
        case Y >= 1073741824:
          I = (Y / 1073741824).toFixed(2) + "GB";
          break;
        case Y >= 1048576:
          I = (Y / 1048576).toFixed(2) + "MB";
          break;
        case Y >= 1024:
          I = (Y / 1024).toFixed(2) + "KB";
          break;
        case Y > 1:
          I = Y + "bytes";
          break;
        case Y === 1:
          I = Y + "byte";
          break;
        default:
          I = "0bytes";
          break;
      }
      return I;
    });
    Ja(
      a,
      (Y, I) => {
        o.value = !Y;
      },
      { deep: !0 }
    );
    const P = () => {
      A.value && (A.value.value = "", A.value.files = null), s.value = null, n.value = !1, o.value = !1, T.value = null, d.value = "", e("input", s.value);
    }, A = L(null);
    Ja(
      c,
      (Y) => {
        Ue(() => {
          if (A.value)
            if (Y) {
              const I = new DataTransfer();
              I.items.add(Y), A.value.files = I.files;
            } else {
              const I = new DataTransfer();
              A.value.files = I.files;
            }
        });
      },
      { immediate: !0 }
    );
    const z = () => {
      A.value && A.value.click();
    }, oe = (Y) => {
      var I;
      if (((I = r.value) == null ? void 0 : I.length) === 0 || r.value.includes(Y.type) || r.value.includes(`.${Y.name.split(".")[1]}`)) {
        if (s.value = Y, n.value = !0, o.value = !1, s.value.size > t.limitSize) {
          s.value = null, n.value = !1, o.value = !0, T.value = null, d.value = "", e("exceed-size"), e("input", s.value);
          return;
        }
        t.image && ce(s.value), e("input", s.value);
      } else
        s.value = null, n.value = !1, o.value = !0, T.value = null, d.value = "", e("no-valid-extensions");
    }, d = L(""), { promiseInstance: x, resolveFunc: i, rejectFunc: p } = Bg(), b = async () => {
      e("use-direct-image", {
        signImage: d.value,
        resolveFunc: i,
        rejectFunc: p
      }), await x() !== "false" && (T.value = d.value || null, T.value === null ? (s.value = null, A.value && (A.value.value = "", A.value.files = null)) : (s.value = kg(d.value), s.value.size > t.limitSize ? (s.value = null, n.value = !1, o.value = !0, T.value = null, d.value = "", e("exceed-size"), A.value && (A.value.value = "", A.value.files = null)) : (n.value = !0, o.value = !1)), e("input", s.value));
    }, S = async () => {
      !T.value && d.value || T.value !== d.value ? (e("cancel-direct-image", {
        signImage: d.value,
        resolveFunc: i,
        rejectFunc: p
      }), await x() === "true" && (d.value = T.value || "")) : (d.value = T.value || "", e("cancel-direct-image"));
    };
    ne(vg, d), ne(fg, b), ne(dg, S);
    const T = L(t.initImage || null);
    Ja(
      () => t.initImage,
      (Y) => {
        Y && (T.value = Y, d.value = Y);
      },
      {
        immediate: !0
      }
    );
    const { arrayBufferToBase64: se } = Ig(), ce = (Y) => {
      const I = new FileReader();
      I.onload = (j) => {
        const K = j.target;
        if (!K || !(K instanceof FileReader) || !K.result)
          return;
        const ee = K.result;
        ee instanceof ArrayBuffer ? T.value = se(ee) : T.value = ee, d.value = T.value;
      }, I.readAsDataURL(Y);
    };
    ne(ug, T);
    const O = (Y) => {
      var K;
      const I = Y.target;
      if (!I || !zu(I))
        return;
      const j = (K = I.files) == null ? void 0 : K[0];
      j && oe(j);
    }, ae = () => {
      _.value = !0, o.value = !1;
    }, G = () => {
      _.value = !1;
    }, ue = (Y) => {
      var j;
      const I = (j = Y.dataTransfer) == null ? void 0 : j.files[0];
      _.value = !1, I && oe(I);
    };
    return ne(Fc, z), ne(zc, P), ne(Uc, v), ne(Wc, w), ne(al, s), ne(Ps, o), {
      fileInput: A,
      fileName: v,
      fileSize: w,
      deleteFile: P,
      inputFileButtonClick: z,
      fileAdded: O,
      fileDragOver: ae,
      fileDragLeave: G,
      fileDrop: ue,
      isActive: n,
      isHover: _,
      isError: o,
      file: s
    };
  }
});
var $g = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_upload_area", class: { is_active: e.isActive, is_hover: e.isHover, is_error: e.isError }, on: { dragover: function(r) {
    return r.preventDefault(), e.fileDragOver.apply(null, arguments);
  }, dragleave: e.fileDragLeave, drop: function(r) {
    return r.preventDefault(), e.fileDrop.apply(null, arguments);
  } } }, [a("input", { ref: "fileInput", attrs: { type: "file", hidden: "", accept: e.validExtensions.join(","), name: "fileUpload" }, on: { input: e.fileAdded } }), e._t("default", null, { isActive: e.isActive, isHover: e.isHover, isError: e.isError })], 2);
}, Hg = [], Ng = /* @__PURE__ */ Z(
  Rg,
  $g,
  Hg,
  !1,
  null,
  null
);
const iA = Ng.exports, Og = J({
  name: "HSingleFileUploadedFileSize",
  setup() {
    return {
      fileSize: k(
        Wc,
        Me(() => "")
      )
    };
  }
});
var Fg = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("span", { staticClass: "h_file_size" }, [e._v(" " + e._s(e.fileSize) + " ")]);
}, zg = [], Ug = /* @__PURE__ */ Z(
  Og,
  Fg,
  zg,
  !1,
  null,
  null
);
const lA = Ug.exports, Wg = J({
  name: "HSingleFileUploadErrorMsg",
  setup() {
    return {
      isError: k(Ps, L(!1))
    };
  }
});
var Yg = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, e.isError ? a("p", { staticClass: "h-uploade-error-cont" }, [e._t("default")], 2) : e._e();
}, jg = [], Qg = /* @__PURE__ */ Z(
  Wg,
  Yg,
  jg,
  !1,
  null,
  null
);
const oA = Qg.exports, qg = J({
  name: "HSingleFileUploadNoFileErrorMsg",
  setup() {
    const t = k(al, L(null)), e = k(Ps, L(!1));
    return {
      file: t,
      isError: e
    };
  }
});
var Gg = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, !e.file && !e.isError ? a("p", { staticClass: "h-no-file-error-cont" }, [e._t("default")], 2) : e._e();
}, Vg = [], Xg = /* @__PURE__ */ Z(
  qg,
  Gg,
  Vg,
  !1,
  null,
  null
);
const cA = Xg.exports, Zg = J({
  name: "HSingleFileUploadedFileAddButton",
  setup() {
    return {
      inputFileButtonClick: k(Fc, () => {
      })
    };
  }
});
var Kg = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("button", { attrs: { type: "button" }, on: { click: e.inputFileButtonClick } }, [e._t("default")], 2);
}, Jg = [], ey = /* @__PURE__ */ Z(
  Zg,
  Kg,
  Jg,
  !1,
  null,
  null
);
const uA = ey.exports, Yc = Symbol(
  "sliderRangeContainer"
), jc = Symbol("startRangeDrag"), Qc = Symbol("clickRangeSlider"), rl = Symbol("leftThumbPosition"), nl = Symbol("rightThumbPosition"), ty = J({
  name: "HSliderRangeArea",
  props: {
    value: {
      type: Array,
      default: () => [0, 200]
    }
  },
  emits: ["input"],
  setup(t, { emit: e }) {
    const a = L(null), r = L(0), c = L(200), s = L(200), n = L(null), _ = L(!1);
    Ia(() => {
      if (!a.value)
        return;
      const { width: A } = a.value.getBoundingClientRect();
      s.value = A, t.value[0] > c.value ? r.value = c.value - 10 : t.value[0] > s.value ? r.value = s.value : t.value[0] < 0 ? r.value = 0 : r.value = t.value[0], t.value[1] < r.value ? c.value = r.value + 10 : t.value[1] > s.value ? c.value = s.value : t.value[1] < 0 ? c.value = 0 : c.value = t.value[1], e("input", [r.value, c.value]);
    });
    const o = (A) => {
      if (!_.value || !a.value)
        return;
      let z = A.clientX - a.value.getBoundingClientRect().left;
      z < 0 ? z = 0 : z > s.value && (z = s.value), n.value === "left" && z >= c.value ? (z = c.value - 10, n.value = "right") : n.value === "right" && z <= r.value && (z = r.value + 10, n.value = "left"), n.value === "left" ? r.value = z : c.value = z, e("input", [r.value, c.value]);
    }, v = () => {
      _.value = !1, n.value = null, document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", v);
    }, w = (A) => {
      if (!a.value)
        return;
      const z = a.value.getBoundingClientRect(), oe = A.clientX - z.left, d = Math.abs(oe - r.value) < Math.abs(oe - c.value);
      n.value = d ? "left" : "right", _.value = !0, document.addEventListener("mousemove", o), document.addEventListener("mouseup", v);
    }, P = (A) => {
      _.value = !0, w(A), o(A), _.value = !1;
    };
    return ne(Yc, a), ne(jc, w), ne(Qc, P), ne(rl, r), ne(nl, c), {
      leftThumbPosition: r,
      rightThumbPosition: c
    };
  }
});
var ay = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", [e._t("default", null, { leftThumbPosition: e.leftThumbPosition, rightThumbPosition: e.rightThumbPosition })], 2);
}, ry = [], ny = /* @__PURE__ */ Z(
  ty,
  ay,
  ry,
  !1,
  null,
  null
);
const vA = ny.exports, sy = J({
  name: "HSliderRangeContainer",
  setup() {
    const t = k(Yc, L(null)), e = k(jc, () => {
    }), a = k(Qc, (r) => {
    });
    return {
      sliderRangeContainer: t,
      startRangeDrag: e,
      clickRangeSlider: a
    };
  }
});
var iy = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { ref: "sliderRangeContainer", staticClass: "h-slider-range-container", on: { mousedown: e.startRangeDrag, click: e.clickRangeSlider } }, [e._t("default")], 2);
}, ly = [], oy = /* @__PURE__ */ Z(
  sy,
  iy,
  ly,
  !1,
  null,
  null
);
const fA = oy.exports, cy = J({
  name: "HSliderRangeLeftThumb",
  setup() {
    return {
      leftThumbPosition: k(rl, L(0))
    };
  }
});
var uy = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h-slider-thumb left-thumb", style: { left: e.leftThumbPosition + "px" } });
}, vy = [], fy = /* @__PURE__ */ Z(
  cy,
  uy,
  vy,
  !1,
  null,
  null
);
const dA = fy.exports, dy = J({
  name: "HSliderRangeRightThumb",
  setup() {
    return {
      rightThumbPosition: k(nl, L(0))
    };
  }
});
var _y = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h-slider-thumb right-thumb", style: { left: e.rightThumbPosition + "px" } });
}, hy = [], py = /* @__PURE__ */ Z(
  dy,
  _y,
  hy,
  !1,
  null,
  null
);
const _A = py.exports, my = J({
  name: "HSliderRangeTrack",
  setup() {
    const t = k(nl, L(0)), e = k(rl, L(0));
    return {
      rangeStickStyle: Me(() => ({
        position: "absolute",
        top: "50%",
        left: `${e.value}px`,
        width: `${t.value - e.value}px`,
        height: "100%",
        transform: "translateY(-50%)"
      }))
    };
  }
});
var gy = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h-slider-track" }, [a("div", { staticClass: "h-slider-track-range-stick", style: e.rangeStickStyle })]);
}, yy = [], by = /* @__PURE__ */ Z(
  my,
  gy,
  yy,
  !1,
  null,
  null
);
const hA = by.exports, qc = Symbol("thumbPosition"), Gc = Symbol("sliderContainer"), Vc = Symbol("startDrag"), Xc = Symbol("clickSlider"), Ay = J({
  name: "HSliderSingleArea",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  emits: ["input"],
  setup(t, { emit: e }) {
    const a = L(!1), r = L(null), c = L(200), s = L(0);
    Ia(() => {
      if (!r.value)
        return;
      const { width: w } = r.value.getBoundingClientRect();
      c.value = w, t.value > c.value ? s.value = c.value : s.value = t.value, e("input", s.value);
    });
    const n = (w) => {
      if (!a.value || !r.value)
        return;
      let P = w.clientX - r.value.getBoundingClientRect().left;
      P < 0 ? P = 0 : P > c.value && (P = c.value), s.value = P, e("input", s.value);
    }, _ = () => {
      a.value = !1, document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", _);
    }, o = () => {
      a.value = !0, document.addEventListener("mousemove", n), document.addEventListener("mouseup", _);
    }, v = (w) => {
      a.value = !0, n(w), a.value = !1;
    };
    return ne(qc, s), ne(Gc, r), ne(Vc, o), ne(Xc, v), {
      thumbPosition: s
    };
  }
});
var Cy = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "slider-area" }, [e._t("default", null, { thumbPosition: e.thumbPosition })], 2);
}, xy = [], Ey = /* @__PURE__ */ Z(
  Ay,
  Cy,
  xy,
  !1,
  null,
  null
);
const pA = Ey.exports, Sy = J({
  name: "HSliderSingleTrack"
});
var wy = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h-slider-track" });
}, Ty = [], Dy = /* @__PURE__ */ Z(
  Sy,
  wy,
  Ty,
  !1,
  null,
  null
);
const mA = Dy.exports, Ly = J({
  name: "HSliderSingleThumb",
  setup() {
    return {
      thumbPosition: k(qc, L(0))
    };
  }
});
var Py = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h-slider-thumb", style: { left: e.thumbPosition + "px" } });
}, Iy = [], My = /* @__PURE__ */ Z(
  Ly,
  Py,
  Iy,
  !1,
  null,
  null
);
const gA = My.exports, ky = J({
  name: "HSliderSingleContainer",
  setup() {
    const t = k(Gc, L(null)), e = k(Vc, () => {
    }), a = k(Xc, (r) => {
    });
    return {
      sliderContainer: t,
      startDrag: e,
      clickSlider: a
    };
  }
});
var By = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { ref: "sliderContainer", staticClass: "h-slider-container", on: { mousedown: e.startDrag, click: e.clickSlider } }, [e._t("default")], 2);
}, Ry = [], $y = /* @__PURE__ */ Z(
  ky,
  By,
  Ry,
  !1,
  null,
  null
);
const yA = $y.exports, Hy = J({
  name: "HTableArea",
  props: {
    caption: {
      type: String,
      default: ""
    },
    tableContentMaxHeight: {
      type: String,
      default: "auto"
    },
    isScroll: {
      type: Boolean,
      default: !1
    },
    defaultStyle: {
      type: Boolean,
      default: !0
    }
  },
  components: {
    HScrollbars: qo
  },
  setup() {
    const t = L(null), e = Me(() => t.value ? `${t.value.$el.getBoundingClientRect().height}px` : "auto");
    return {
      contArea: t,
      tableContentHeight: e
    };
  }
});
var Ny = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { class: { h_table_area: e.defaultStyle } }, [a("div", { staticClass: "table_tit_area" }, [a("table", [a("caption", [a("span", { staticClass: "blind" }, [e._v(e._s(e.caption))])]), e._t("colgroup"), a("thead", [e._t("head")], 2)], 2)]), a("HScrollbars", { ref: "contArea", style: {
    maxHeight: e.tableContentMaxHeight,
    height: e.isScroll ? e.tableContentHeight : "auto"
  } }, [a("div", { staticClass: "cont_area" }, [a("table", [a("caption", [a("span", { staticClass: "blind" }, [e._v(e._s(e.caption))])]), e._t("colgroup"), a("thead", { staticClass: "blind" }, [e._t("head")], 2), a("tbody", [e._t("body")], 2)], 2)])])], 1);
}, Oy = [], Fy = /* @__PURE__ */ Z(
  Hy,
  Ny,
  Oy,
  !1,
  null,
  null
);
const bA = Fy.exports, zy = J({
  name: "HTextCounterArea",
  props: {
    tag: {
      type: String,
      default: "input"
    },
    maxLength: {
      type: Number,
      required: !0
    }
  },
  emits: ["input"],
  setup(t, { emit: e }) {
    const a = L(0), r = (s) => {
      const n = s.target;
      if (!n) return;
      const _ = n.value;
      _.length > t.maxLength && (n.value = _.slice(0, t.maxLength)), a.value = n.value.length, e("input", n.value);
    }, c = L(null);
    return Ia(() => {
      if (c.value === null)
        return;
      const s = c.value.querySelector(t.tag);
      if (!s)
        return;
      const n = s.tagName === "INPUT" && ["text", "number", "password", "search", "email", "url", "tel"].includes(s.type), _ = s.tagName === "TEXTAREA";
      (n || _) && (s.addEventListener("input", r), a.value = s.value.length);
    }), {
      currentLength: a,
      HTextCounterAreaRef: c
    };
  }
});
var Uy = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { ref: "HTextCounterAreaRef" }, [e._t("default", null, { maxLength: e.maxLength, currentLength: e.currentLength })], 2);
}, Wy = [], Yy = /* @__PURE__ */ Z(
  zy,
  Uy,
  Wy,
  !1,
  null,
  null
);
const AA = Yy.exports, Zc = Symbol("activeToasts"), Kc = Symbol("getNextId"), Jc = Symbol("recalcOffsets"), jy = J({
  name: "HToastPopup",
  setup() {
    const t = L([]), e = L(1), a = () => {
      const c = e.value;
      return e.value += 1, c;
    };
    function r() {
      let c = 20;
      for (let s = t.value.length - 1; s >= 0; s--) {
        const n = t.value[s];
        n.offset = c, c += n.height + 8;
      }
    }
    return ne(Zc, t), ne(Kc, a), ne(Jc, () => r()), {};
  }
});
var Qy = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("div", { staticClass: "h_toast_popup_container" }, [e._t("default")], 2);
}, qy = [], Gy = /* @__PURE__ */ Z(
  jy,
  Qy,
  qy,
  !1,
  null,
  "77cb67aa"
);
const CA = Gy.exports, Vy = J({
  name: "HToastPopupMessage",
  props: {
    /**
     * 토스트가 자동으로 사라지는 데까지 걸리는 시간(밀리초)
     * 0 이하로 설정하면 자동 닫힘 없음
     */
    timeout: {
      type: Number,
      default: 3e3
    }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const a = k(Zc, L([])), r = k(Kc, () => 0), c = k(Jc, () => {
    }), s = r(), n = L(!0), _ = L(null);
    let o = null;
    const v = () => {
      t.timeout > 0 && (o = window.setTimeout(() => {
        w();
      }, t.timeout));
    }, w = () => {
      n.value = !1;
    }, P = () => {
      if (a.value && a.value.length) {
        const z = a.value.findIndex((oe) => oe.id === s);
        z > -1 && a.value.splice(z, 1);
      }
      c(), e("close");
    };
    Ia(() => {
      a.value && a.value.push({
        id: s,
        height: 0,
        offset: 0
      }), Ue(() => {
        const z = _.value;
        if (!z || !a.value) return;
        const oe = a.value.find((x) => x.id === s);
        if (!oe) return;
        const { height: d } = z.getBoundingClientRect();
        oe.height = d, oe.el = z, c(), v();
      });
    }), Es(() => {
      o && clearTimeout(o);
    });
    const A = Me(() => {
      if (!a.value) return {};
      const z = a.value.find((oe) => oe.id === s);
      return z ? {
        position: "absolute",
        left: "50%",
        bottom: `${z.offset}px`,
        zIndex: 9999,
        pointerEvents: "auto"
      } : {};
    });
    return {
      toastElement: _,
      isVisible: n,
      wrapperStyle: A,
      onAfterLeave: P
    };
  }
});
var Xy = function() {
  var e = this, a = e._self._c;
  return e._self._setupProxy, a("transition", { attrs: { name: "toast-slide" }, on: { "after-leave": e.onAfterLeave } }, [e.isVisible ? a("div", { ref: "toastElement", staticClass: "h_toast_popup_message", style: e.wrapperStyle }, [e._t("default")], 2) : e._e()]);
}, Zy = [], Ky = /* @__PURE__ */ Z(
  Vy,
  Xy,
  Zy,
  !1,
  null,
  "584cfa40"
);
const xA = Ky.exports;
export {
  cb as HCheckAuth,
  fb as HCheckFormDataChange,
  nb as HDropdownArea,
  ib as HDropdownButton,
  sb as HDropdownItem,
  lb as HDropdownItemButton,
  ob as HDropdownList,
  db as HFileUploadArea,
  _b as HFileUploadButton,
  hb as HFileUploadFileItem,
  pb as HFileUploadFileList,
  mb as HHtmlRender,
  gb as HKanbanArea,
  yb as HKanbanCard,
  bb as HKanbanLine,
  Ab as HKanbanLineInnerArea,
  Cb as HLoading,
  Tb as HPaginationArea,
  Db as HPaginationFirstButton,
  Lb as HPaginationLastButton,
  Pb as HPaginationNextButton,
  Ib as HPaginationNumberButton,
  Mb as HPaginationPrevButton,
  kb as HPrintHtmlBox,
  Bb as HPrintHtmlButton,
  qo as HScrollbars,
  Eb as HSignatureArea,
  Sb as HSignatureClearButton,
  wb as HSignatureUndoButton,
  Ob as HSingleDatePickerArea,
  Rb as HSingleDatePickerCalendar,
  Hb as HSingleDatePickerCalendarArea,
  $b as HSingleDatePickerCalendarDateButton,
  Fb as HSingleDatePickerCalendarMonth,
  Nb as HSingleDatePickerCalendarMonthArea,
  Ub as HSingleDatePickerCalendarMonthButton,
  Yb as HSingleDatePickerCalendarYear,
  qb as HSingleDatePickerCalendarYearArea,
  Xb as HSingleDatePickerCalendarYearButton,
  Zb as HSingleDatePickerInput,
  zb as HSingleDatePickerMonthButton,
  Kb as HSingleDatePickerMonthNextButton,
  Wb as HSingleDatePickerMonthPrevButton,
  Jb as HSingleDatePickerMonthYearButton,
  jb as HSingleDatePickerNextButton,
  Qb as HSingleDatePickerPrevButton,
  eA as HSingleDatePickerRangeArea,
  Gb as HSingleDatePickerYearButton,
  Vb as HSingleDatePickerYearNextButton,
  tA as HSingleDatePickerYearPrevButton,
  ab as HSingleDragXArea,
  iA as HSingleFileUploadArea,
  oA as HSingleFileUploadErrorMsg,
  cA as HSingleFileUploadNoFileErrorMsg,
  nA as HSingleFileUploadTitle,
  uA as HSingleFileUploadedFileAddButton,
  aA as HSingleFileUploadedFileArea,
  rA as HSingleFileUploadedFileDeleteButton,
  sA as HSingleFileUploadedFileName,
  lA as HSingleFileUploadedFileSize,
  vA as HSliderRangeArea,
  fA as HSliderRangeContainer,
  dA as HSliderRangeLeftThumb,
  _A as HSliderRangeRightThumb,
  hA as HSliderRangeTrack,
  pA as HSliderSingleArea,
  yA as HSliderSingleContainer,
  gA as HSliderSingleThumb,
  mA as HSliderSingleTrack,
  bA as HTableArea,
  AA as HTextCounterArea,
  xb as HThreeDotLoading,
  CA as HToastPopup,
  xA as HToastPopupMessage,
  eb as makeVueInstance,
  tb as registerRippleDirective,
  ub as useCheckEqual,
  vb as useFormChangeCheck,
  rb as useHSingleDragXArea
};
