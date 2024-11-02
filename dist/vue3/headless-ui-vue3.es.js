import { createApp as il, h as mo, defineComponent as H, ref as g, onMounted as je, onBeforeUnmount as Da, openBlock as D, createElementBlock as I, createElementVNode as oe, normalizeClass as ve, normalizeStyle as Le, renderSlot as F, computed as ce, toRefs as On, shallowRef as Sn, watchPostEffect as cl, watch as Be, unref as ge, createBlock as Ve, resolveDynamicComponent as Ta, withCtx as Nn, onUnmounted as pt, provide as Y, inject as S, useAttrs as ka, mergeProps as xn, isRef as Fn, createVNode as os, createCommentVNode as Me, getCurrentInstance as ss, useSlots as La, withDirectives as rs, vModelText as ls, nextTick as me, withModifiers as Bt, Fragment as is, renderList as ul, toHandlers as dl, resolveComponent as ot, createTextVNode as xt, toDisplayString as $n, withKeys as vl } from "vue";
const sm = (e, { props: t, attrs: n, on: a, scopedSlots: o }) => il({
  render() {
    return mo(e, {
      ...n,
      ...t,
      ...a,
      vSlots: o ? o(mo) : {}
    });
  }
}).mount(document.createElement("div")), fl = (e) => e.type === "touchstart", pl = (e) => e.type === "touchmove", ml = (e) => e.type === "mousemove", hl = (e) => e.type === "mousedown", gl = (e) => e.type === "click", Ce = (e) => e instanceof HTMLElement, yl = (e) => e instanceof HTMLInputElement, ho = (e) => {
  e.preventDefault(), e.stopPropagation();
  const t = e.currentTarget;
  if (!t || !Ce(t))
    return;
  t.style.position = "relative", t.style.overflow = "hidden";
  const n = document.createElement("span");
  n.classList.add("ripple-effect");
  const a = t.getBoundingClientRect();
  gl(e) && (n.style.left = `${e.clientX - a.left}px`, n.style.top = `${e.clientY - a.top}px`), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      t.appendChild(n), n.addEventListener("animationend", () => {
        n.remove();
      });
    });
  });
}, rm = () => ({
  beforeMount(e) {
    e.addEventListener("click", ho);
  },
  beforeUnmount(e) {
    e.removeEventListener("click", ho);
  }
});
var bl = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(bl || {});
const Al = H({
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
    const e = g(!1), t = g(0), n = g(0), a = g(0), o = g(null), s = g(null), r = (c) => {
      c.type === "touchmove" && c instanceof TouchEvent ? c.touches.length === 1 && (n.value = t.value - c.touches[0].clientX, t.value = c.touches[0].clientX) : c.type === "mousemove" && c instanceof MouseEvent && (n.value = t.value - c.clientX, t.value = c.clientX), s.value instanceof HTMLElement && (a.value = a.value + n.value, s.value.style.width = `${a.value}px`);
    }, l = () => {
      e.value = !1, document.removeEventListener("mouseup", l), document.removeEventListener("touchend", l), document.removeEventListener("mousemove", r), document.removeEventListener("touchmove", r);
    }, i = (c) => {
      e.value = !0, s.value instanceof HTMLElement && (a.value = s.value.getBoundingClientRect().width, c.type === "touchstart" && c instanceof TouchEvent ? c.touches.length === 1 && (t.value = c.touches[0].clientX) : c.type === "mousedown" && c instanceof MouseEvent && (t.value = c.clientX), document.addEventListener("mouseup", l), document.addEventListener("touchend", l), document.addEventListener("mousemove", r), document.addEventListener("touchmove", r));
    };
    return je(() => {
      o.value instanceof HTMLButtonElement && (o.value.addEventListener("mousedown", i), o.value.addEventListener("touchstart", i));
    }), Da(() => {
      o.value instanceof HTMLButtonElement && (o.value.removeEventListener("mousedown", i), o.value.removeEventListener("touchstart", i));
    }), {
      grabArea: o,
      dragArea: s
    };
  }
}), Z = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, _l = { ref: "dragArea" };
function El(e, t, n, a, o, s) {
  return D(), I("div", _l, [
    oe("button", {
      ref: "grabArea",
      type: "button",
      class: ve(["h-single-drag-area-btn", e.buttonPosition]),
      style: Le({ backgroundColor: e.buttonBackgroundColor })
    }, t[0] || (t[0] = [
      oe("span", { class: "blind" }, "드래그 버튼", -1)
    ]), 6),
    F(e.$slots, "default")
  ], 512);
}
const lm = /* @__PURE__ */ Z(Al, [["render", El]]), im = ({ minWidth: e, backgroundColor: t }) => {
  const n = g(null), a = g(0), o = g(0), s = g(0), r = () => {
    if (!((n == null ? void 0 : n.value) instanceof HTMLElement))
      return {};
    const { top: i, left: c, right: d } = n.value.getBoundingClientRect();
    a.value = i < 0 ? 0 : i, o.value = c < 0 ? 0 : c, s.value = innerWidth - d;
  }, l = ce(() => (r(), {
    position: "absolute",
    top: "0",
    right: 0,
    width: "100%",
    maxWidth: `calc(100% - ${o.value + s.value}px)`,
    height: "100%",
    backgroundColor: t,
    minWidth: e
  }));
  return {
    scrollArea: n,
    dragAreaXStyle: l
  };
};
/*!
 * OverlayScrollbars
 * Version: 2.10.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */
const Re = (e, t) => {
  const { o: n, i: a, u: o } = e;
  let s = n, r;
  const l = (d, u) => {
    const v = s, m = d, p = u || (a ? !a(v, m) : v !== m);
    return (p || o) && (s = m, r = v), [s, p, r];
  };
  return [t ? (d) => l(t(s, r), d) : l, (d) => [s, !!d, r]];
}, Sl = typeof window < "u" && typeof HTMLElement < "u" && !!window.document, Pe = Sl ? window : {}, cs = Math.max, $l = Math.min, la = Math.round, Cn = Math.abs, go = Math.sign, us = Pe.cancelAnimationFrame, Ia = Pe.requestAnimationFrame, wn = Pe.setTimeout, ia = Pe.clearTimeout, Un = (e) => typeof Pe[e] < "u" ? Pe[e] : void 0, Cl = Un("MutationObserver"), yo = Un("IntersectionObserver"), Dn = Un("ResizeObserver"), bn = Un("ScrollTimeline"), Ma = (e) => e === void 0, zn = (e) => e === null, Ze = (e) => typeof e == "number", on = (e) => typeof e == "string", Ba = (e) => typeof e == "boolean", ze = (e) => typeof e == "function", Ke = (e) => Array.isArray(e), Tn = (e) => typeof e == "object" && !Ke(e) && !zn(e), Pa = (e) => {
  const t = !!e && e.length, n = Ze(t) && t > -1 && t % 1 == 0;
  return Ke(e) || !ze(e) && n ? t > 0 && Tn(e) ? t - 1 in e : !0 : !1;
}, kn = (e) => !!e && e.constructor === Object, Ln = (e) => e instanceof HTMLElement, Vn = (e) => e instanceof Element;
function be(e, t) {
  if (Pa(e))
    for (let n = 0; n < e.length && t(e[n], n, e) !== !1; n++)
      ;
  else e && be(Object.keys(e), (n) => t(e[n], n, e));
  return e;
}
const ds = (e, t) => e.indexOf(t) >= 0, Zt = (e, t) => e.concat(t), we = (e, t, n) => (!on(t) && Pa(t) ? Array.prototype.push.apply(e, t) : e.push(t), e), mt = (e) => Array.from(e || []), Ha = (e) => Ke(e) ? e : !on(e) && Pa(e) ? mt(e) : [e], ca = (e) => !!e && !e.length, ua = (e) => mt(new Set(e)), xe = (e, t, n) => {
  be(e, (o) => o ? o.apply(void 0, t || []) : !0), !n && (e.length = 0);
}, vs = "paddingTop", fs = "paddingRight", ps = "paddingLeft", ms = "paddingBottom", hs = "marginLeft", gs = "marginRight", ys = "marginBottom", bs = "overflowX", As = "overflowY", Yn = "width", Wn = "height", dt = "visible", yt = "hidden", Pt = "scroll", wl = (e) => {
  const t = String(e || "");
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}, jn = (e, t, n, a) => {
  if (e && t) {
    let o = !0;
    return be(n, (s) => {
      const r = e[s], l = t[s];
      r !== l && (o = !1);
    }), o;
  }
  return !1;
}, _s = (e, t) => jn(e, t, ["w", "h"]), An = (e, t) => jn(e, t, ["x", "y"]), Dl = (e, t) => jn(e, t, ["t", "r", "b", "l"]), bt = () => {
}, re = (e, ...t) => e.bind(0, ...t), Tt = (e) => {
  let t;
  const n = e ? wn : Ia, a = e ? ia : us;
  return [(o) => {
    a(t), t = n(() => o(), ze(e) ? e() : e);
  }, () => a(t)];
}, da = (e, t) => {
  const { _: n, v: a, p: o, S: s } = t || {};
  let r, l, i, c, d = bt;
  const u = function(k) {
    d(), ia(r), c = r = l = void 0, d = bt, e.apply(this, k);
  }, v = (f) => s && l ? s(l, f) : f, m = () => {
    d !== bt && u(v(i) || i);
  }, p = function() {
    const k = mt(arguments), h = ze(n) ? n() : n;
    if (Ze(h) && h >= 0) {
      const M = ze(a) ? a() : a, T = Ze(M) && M >= 0, A = h > 0 ? wn : Ia, B = h > 0 ? ia : us, te = v(k) || k, z = u.bind(0, te);
      let _;
      d(), o && !c ? (z(), c = !0, _ = A(() => c = void 0, h)) : (_ = A(z, h), T && !r && (r = wn(m, M))), d = () => B(_), l = i = te;
    } else
      u(k);
  };
  return p.m = m, p;
}, Es = (e, t) => Object.prototype.hasOwnProperty.call(e, t), We = (e) => e ? Object.keys(e) : [], pe = (e, t, n, a, o, s, r) => {
  const l = [t, n, a, o, s, r];
  return (typeof e != "object" || zn(e)) && !ze(e) && (e = {}), be(l, (i) => {
    be(i, (c, d) => {
      const u = i[d];
      if (e === u)
        return !0;
      const v = Ke(u);
      if (u && kn(u)) {
        const m = e[d];
        let p = m;
        v && !Ke(m) ? p = [] : !v && !kn(m) && (p = {}), e[d] = pe(p, u);
      } else
        e[d] = v ? u.slice() : u;
    });
  }), e;
}, Ss = (e, t) => be(pe({}, e), (n, a, o) => {
  n === void 0 ? delete o[a] : n && kn(n) && (o[a] = Ss(n));
}), Ra = (e) => !We(e).length, $s = (e, t, n) => cs(e, $l(t, n)), At = (e) => ua((Ke(e) ? e : (e || "").split(" ")).filter((t) => t)), Oa = (e, t) => e && e.getAttribute(t), bo = (e, t) => e && e.hasAttribute(t), tt = (e, t, n) => {
  be(At(t), (a) => {
    e && e.setAttribute(a, String(n || ""));
  });
}, Ge = (e, t) => {
  be(At(t), (n) => e && e.removeAttribute(n));
}, Qn = (e, t) => {
  const n = At(Oa(e, t)), a = re(tt, e, t), o = (s, r) => {
    const l = new Set(n);
    return be(At(s), (i) => {
      l[r](i);
    }), mt(l).join(" ");
  };
  return {
    O: (s) => a(o(s, "delete")),
    $: (s) => a(o(s, "add")),
    C: (s) => {
      const r = At(s);
      return r.reduce((l, i) => l && n.includes(i), r.length > 0);
    }
  };
}, Cs = (e, t, n) => (Qn(e, t).O(n), re(Na, e, t, n)), Na = (e, t, n) => (Qn(e, t).$(n), re(Cs, e, t, n)), In = (e, t, n, a) => (a ? Na : Cs)(e, t, n), xa = (e, t, n) => Qn(e, t).C(n), ws = (e) => Qn(e, "class"), Ds = (e, t) => {
  ws(e).O(t);
}, Fa = (e, t) => (ws(e).$(t), re(Ds, e, t)), Ts = (e, t) => {
  const n = t ? Vn(t) && t : document;
  return n ? mt(n.querySelectorAll(e)) : [];
}, Tl = (e, t) => {
  const n = t ? Vn(t) && t : document;
  return n && n.querySelector(e);
}, va = (e, t) => Vn(e) && e.matches(t), ks = (e) => va(e, "body"), fa = (e) => e ? mt(e.childNodes) : [], Kt = (e) => e && e.parentElement, kt = (e, t) => Vn(e) && e.closest(t), pa = (e) => document.activeElement, kl = (e, t, n) => {
  const a = kt(e, t), o = e && Tl(n, a), s = kt(o, t) === a;
  return a && o ? a === e || o === e || s && kt(kt(e, n), t) !== a : !1;
}, Ht = (e) => {
  be(Ha(e), (t) => {
    const n = Kt(t);
    t && n && n.removeChild(t);
  });
}, Oe = (e, t) => re(Ht, e && t && be(Ha(t), (n) => {
  n && e.appendChild(n);
})), It = (e) => {
  const t = document.createElement("div");
  return tt(t, "class", e), t;
}, Ls = (e) => {
  const t = It();
  return t.innerHTML = e.trim(), be(fa(t), (n) => Ht(n));
}, Ao = (e, t) => e.getPropertyValue(t) || e[t] || "", Is = (e) => {
  const t = e || 0;
  return isFinite(t) ? t : 0;
}, pn = (e) => Is(parseFloat(e || "")), ma = (e) => Math.round(e * 1e4) / 1e4, Ms = (e) => `${ma(Is(e))}px`;
function Jt(e, t) {
  e && t && be(t, (n, a) => {
    try {
      const o = e.style, s = zn(n) || Ba(n) ? "" : Ze(n) ? Ms(n) : n;
      a.indexOf("--") === 0 ? o.setProperty(a, s) : o[a] = s;
    } catch {
    }
  });
}
function at(e, t, n) {
  const a = on(t);
  let o = a ? "" : {};
  if (e) {
    const s = Pe.getComputedStyle(e, n) || e.style;
    o = a ? Ao(s, t) : mt(t).reduce((r, l) => (r[l] = Ao(s, l), r), o);
  }
  return o;
}
const _o = (e, t, n) => {
  const a = t ? `${t}-` : "", o = n ? `-${n}` : "", s = `${a}top${o}`, r = `${a}right${o}`, l = `${a}bottom${o}`, i = `${a}left${o}`, c = at(e, [s, r, l, i]);
  return {
    t: pn(c[s]),
    r: pn(c[r]),
    b: pn(c[l]),
    l: pn(c[i])
  };
}, Ll = (e, t) => `translate${Tn(e) ? `(${e.x},${e.y})` : `Y(${e})`}`, Il = (e) => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length), Ml = {
  w: 0,
  h: 0
}, Gn = (e, t) => t ? {
  w: t[`${e}Width`],
  h: t[`${e}Height`]
} : Ml, Bl = (e) => Gn("inner", e || Pe), Mt = re(Gn, "offset"), Bs = re(Gn, "client"), Mn = re(Gn, "scroll"), Ua = (e) => {
  const t = parseFloat(at(e, Yn)) || 0, n = parseFloat(at(e, Wn)) || 0;
  return {
    w: t - la(t),
    h: n - la(n)
  };
}, ea = (e) => e.getBoundingClientRect(), Pl = (e) => !!e && Il(e), ha = (e) => !!(e && (e[Wn] || e[Yn])), Ps = (e, t) => {
  const n = ha(e);
  return !ha(t) && n;
}, Eo = (e, t, n, a) => {
  be(At(t), (o) => {
    e && e.removeEventListener(o, n, a);
  });
}, $e = (e, t, n, a) => {
  var o;
  const s = (o = a && a.H) != null ? o : !0, r = a && a.I || !1, l = a && a.A || !1, i = {
    passive: s,
    capture: r
  };
  return re(xe, At(t).map((c) => {
    const d = l ? (u) => {
      Eo(e, c, d, r), n && n(u);
    } : n;
    return e && e.addEventListener(c, d, i), re(Eo, e, c, d, r);
  }));
}, Hs = (e) => e.stopPropagation(), ga = (e) => e.preventDefault(), Rs = (e) => Hs(e) || ga(e), qe = (e, t) => {
  const { x: n, y: a } = Ze(t) ? {
    x: t,
    y: t
  } : t || {};
  Ze(n) && (e.scrollLeft = n), Ze(a) && (e.scrollTop = a);
}, Ne = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
}), Os = () => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
}), Hl = (e, t) => {
  const { D: n, M: a } = e, { w: o, h: s } = t, r = (u, v, m) => {
    let p = go(u) * m, f = go(v) * m;
    if (p === f) {
      const k = Cn(u), h = Cn(v);
      f = k > h ? 0 : f, p = k < h ? 0 : p;
    }
    return p = p === f ? 0 : p, [p + 0, f + 0];
  }, [l, i] = r(n.x, a.x, o), [c, d] = r(n.y, a.y, s);
  return {
    D: {
      x: l,
      y: c
    },
    M: {
      x: i,
      y: d
    }
  };
}, So = ({ D: e, M: t }) => {
  const n = (a, o) => a === 0 && a <= o;
  return {
    x: n(e.x, t.x),
    y: n(e.y, t.y)
  };
}, $o = ({ D: e, M: t }, n) => {
  const a = (o, s, r) => $s(0, 1, (o - r) / (o - s) || 0);
  return {
    x: a(e.x, t.x, n.x),
    y: a(e.y, t.y, n.y)
  };
}, ya = (e) => {
  e && e.focus && e.focus({
    preventScroll: !0
  });
}, Co = (e, t) => {
  be(Ha(t), e);
}, ba = (e) => {
  const t = /* @__PURE__ */ new Map(), n = (s, r) => {
    if (s) {
      const l = t.get(s);
      Co((i) => {
        l && l[i ? "delete" : "clear"](i);
      }, r);
    } else
      t.forEach((l) => {
        l.clear();
      }), t.clear();
  }, a = (s, r) => {
    if (on(s)) {
      const c = t.get(s) || /* @__PURE__ */ new Set();
      return t.set(s, c), Co((d) => {
        ze(d) && c.add(d);
      }, r), re(n, s, r);
    }
    Ba(r) && r && n();
    const l = We(s), i = [];
    return be(l, (c) => {
      const d = s[c];
      d && we(i, a(c, d));
    }), re(xe, i);
  }, o = (s, r) => {
    be(mt(t.get(s)), (l) => {
      r && !ca(r) ? l.apply(0, r) : l();
    });
  };
  return a(e || {}), [a, n, o];
}, wo = (e) => JSON.stringify(e, (t, n) => {
  if (ze(n))
    throw 0;
  return n;
}), Do = (e, t) => e ? `${t}`.split(".").reduce((n, a) => n && Es(n, a) ? n[a] : void 0, e) : void 0, Rl = {
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
}, Ns = (e, t) => {
  const n = {}, a = Zt(We(t), We(e));
  return be(a, (o) => {
    const s = e[o], r = t[o];
    if (Tn(s) && Tn(r))
      pe(n[o] = {}, Ns(s, r)), Ra(n[o]) && delete n[o];
    else if (Es(t, o) && r !== s) {
      let l = !0;
      if (Ke(s) || Ke(r))
        try {
          wo(s) === wo(r) && (l = !1);
        } catch {
        }
      l && (n[o] = r);
    }
  }), n;
}, To = (e, t, n) => (a) => [Do(e, a), n || Do(t, a) !== void 0], Ft = "data-overlayscrollbars", _n = "os-environment", mn = `${_n}-scrollbar-hidden`, ta = `${Ft}-initialize`, En = "noClipping", ko = `${Ft}-body`, vt = Ft, Ol = "host", nt = `${Ft}-viewport`, Nl = bs, xl = As, Fl = "arrange", xs = "measuring", Ul = "scrolling", Fs = "scrollbarHidden", zl = "noContent", Aa = `${Ft}-padding`, Lo = `${Ft}-content`, za = "os-size-observer", Vl = `${za}-appear`, Yl = `${za}-listener`, Wl = "os-trinsic-observer", jl = "os-theme-none", Fe = "os-scrollbar", Ql = `${Fe}-rtl`, Gl = `${Fe}-horizontal`, ql = `${Fe}-vertical`, Us = `${Fe}-track`, Va = `${Fe}-handle`, Xl = `${Fe}-visible`, Zl = `${Fe}-cornerless`, Io = `${Fe}-interaction`, Mo = `${Fe}-unusable`, _a = `${Fe}-auto-hide`, Bo = `${_a}-hidden`, Po = `${Fe}-wheel`, Kl = `${Us}-interactive`, Jl = `${Va}-interactive`;
let zs;
const ei = () => zs, ti = (e) => {
  zs = e;
};
let na;
const ni = () => {
  const e = (T, A, B) => {
    Oe(document.body, T), Oe(document.body, T);
    const W = Bs(T), te = Mt(T), z = Ua(A);
    return B && Ht(T), {
      x: te.h - W.h + z.h,
      y: te.w - W.w + z.w
    };
  }, t = (T) => {
    let A = !1;
    const B = Fa(T, mn);
    try {
      A = at(T, "scrollbar-width") === "none" || at(T, "display", "::-webkit-scrollbar") === "none";
    } catch {
    }
    return B(), A;
  }, n = `.${_n}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${_n} div{width:200%;height:200%;margin:10px 0}.${mn}{scrollbar-width:none!important}.${mn}::-webkit-scrollbar,.${mn}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`, o = Ls(`<div class="${_n}"><div></div><style>${n}</style></div>`)[0], s = o.firstChild, r = o.lastChild, l = ei();
  l && (r.nonce = l);
  const [i, , c] = ba(), [d, u] = Re({
    o: e(o, s),
    i: An
  }, re(e, o, s, !0)), [v] = u(), m = t(o), p = {
    x: v.x === 0,
    y: v.y === 0
  }, f = {
    elements: {
      host: null,
      padding: !m,
      viewport: (T) => m && ks(T) && T,
      content: !1
    },
    scrollbars: {
      slot: !0
    },
    cancel: {
      nativeScrollbarsOverlaid: !1,
      body: null
    }
  }, k = pe({}, Rl), h = re(pe, {}, k), y = re(pe, {}, f), M = {
    T: v,
    k: p,
    R: m,
    V: !!bn,
    L: re(i, "r"),
    U: y,
    P: (T) => pe(f, T) && y(),
    N: h,
    q: (T) => pe(k, T) && h(),
    B: pe({}, f),
    F: pe({}, k)
  };
  if (Ge(o, "style"), Ht(o), $e(Pe, "resize", () => {
    c("r", []);
  }), ze(Pe.matchMedia) && !m && (!p.x || !p.y)) {
    const T = (A) => {
      const B = Pe.matchMedia(`(resolution: ${Pe.devicePixelRatio}dppx)`);
      $e(B, "change", () => {
        A(), T(A);
      }, {
        A: !0
      });
    };
    T(() => {
      const [A, B] = d();
      pe(M.T, A), c("r", [B]);
    });
  }
  return M;
}, Je = () => (na || (na = ni()), na), Vs = (e, t) => ze(t) ? t.apply(0, e) : t, ai = (e, t, n, a) => {
  const o = Ma(a) ? n : a;
  return Vs(e, o) || t.apply(0, e);
}, Ys = (e, t, n, a) => {
  const o = Ma(a) ? n : a, s = Vs(e, o);
  return !!s && (Ln(s) ? s : t.apply(0, e));
}, oi = (e, t) => {
  const { nativeScrollbarsOverlaid: n, body: a } = t || {}, { k: o, R: s, U: r } = Je(), { nativeScrollbarsOverlaid: l, body: i } = r().cancel, c = n ?? l, d = Ma(a) ? i : a, u = (o.x || o.y) && c, v = e && (zn(d) ? !s : d);
  return !!u || !!v;
}, Ya = /* @__PURE__ */ new WeakMap(), si = (e, t) => {
  Ya.set(e, t);
}, ri = (e) => {
  Ya.delete(e);
}, Ws = (e) => Ya.get(e), li = (e, t, n) => {
  let a = !1;
  const o = n ? /* @__PURE__ */ new WeakMap() : !1, s = () => {
    a = !0;
  }, r = (l) => {
    if (o && n) {
      const i = n.map((c) => {
        const [d, u] = c || [];
        return [u && d ? (l || Ts)(d, e) : [], u];
      });
      be(i, (c) => be(c[0], (d) => {
        const u = c[1], v = o.get(d) || [];
        if (e.contains(d) && u) {
          const p = $e(d, u, (f) => {
            a ? (p(), o.delete(d)) : t(f);
          });
          o.set(d, we(v, p));
        } else
          xe(v), o.delete(d);
      }));
    }
  };
  return r(), [s, r];
}, Ho = (e, t, n, a) => {
  let o = !1;
  const { j: s, X: r, Y: l, W: i, J: c, G: d } = a || {}, u = da(() => o && n(!0), {
    _: 33,
    v: 99
  }), [v, m] = li(e, u, l), p = s || [], f = r || [], k = Zt(p, f), h = (M, T) => {
    if (!ca(T)) {
      const A = c || bt, B = d || bt, W = [], te = [];
      let z = !1, _ = !1;
      if (be(T, (P) => {
        const { attributeName: C, target: w, type: j, oldValue: q, addedNodes: le, removedNodes: se } = P, de = j === "attributes", ue = j === "childList", Ae = e === w, N = de && C, x = N && Oa(w, C || ""), Q = on(x) ? x : null, K = N && q !== Q, L = ds(f, C) && K;
        if (t && (ue || !Ae)) {
          const ne = de && K, ee = ne && i && va(w, i), ie = (ee ? !A(w, C, q, Q) : !de || ne) && !B(P, !!ee, e, a);
          be(le, (fe) => we(W, fe)), be(se, (fe) => we(W, fe)), _ = _ || ie;
        }
        !t && Ae && K && !A(w, C, q, Q) && (we(te, C), z = z || L);
      }), m((P) => ua(W).reduce((C, w) => (we(C, Ts(P, w)), va(w, P) ? we(C, w) : C), [])), t)
        return !M && _ && n(!1), [!1];
      if (!ca(te) || z) {
        const P = [ua(te), z];
        return !M && n.apply(0, P), P;
      }
    }
  }, y = new Cl(re(h, !1));
  return [() => (y.observe(e, {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: k,
    subtree: t,
    childList: t,
    characterData: t
  }), o = !0, () => {
    o && (v(), y.disconnect(), o = !1);
  }), () => {
    if (o)
      return u.m(), h(!0, y.takeRecords());
  }];
}, js = {}, Qs = {}, ii = (e) => {
  be(e, (t) => be(t, (n, a) => {
    js[a] = t[a];
  }));
}, Gs = (e, t, n) => We(e).map((a) => {
  const { static: o, instance: s } = e[a], [r, l, i] = n || [], c = n ? s : o;
  if (c) {
    const d = n ? c(r, l, t) : c(t);
    return (i || Qs)[a] = d;
  }
}), sn = (e) => Qs[e], ci = "__osOptionsValidationPlugin", ui = "__osSizeObserverPlugin", di = (e, t) => {
  const { k: n } = t, [a, o] = e("showNativeOverlaidScrollbars");
  return [a && n.x && n.y, o];
}, Rt = (e) => e.indexOf(dt) === 0, vi = (e, t) => {
  const n = (o, s, r, l) => {
    const i = o === dt ? yt : o.replace(`${dt}-`, ""), c = Rt(o), d = Rt(r);
    return !s && !l ? yt : c && d ? dt : c ? s && l ? i : s ? dt : yt : s ? i : d && l ? dt : yt;
  }, a = {
    x: n(t.x, e.x, t.y, e.y),
    y: n(t.y, e.y, t.x, e.x)
  };
  return {
    K: a,
    Z: {
      x: a.x === Pt,
      y: a.y === Pt
    }
  };
}, qs = "__osScrollbarsHidingPlugin", fi = "__osClickScrollPlugin", Xs = (e, t, n) => {
  const { dt: a } = n || {}, o = sn(ui), [s] = Re({
    o: !1,
    u: !0
  });
  return () => {
    const r = [], i = Ls(`<div class="${za}"><div class="${Yl}"></div></div>`)[0], c = i.firstChild, d = (u) => {
      const v = u instanceof ResizeObserverEntry;
      let m = !1, p = !1;
      if (v) {
        const [f, , k] = s(u.contentRect), h = ha(f);
        p = Ps(f, k), m = !p && !h;
      } else
        p = u === !0;
      m || t({
        ft: !0,
        dt: p
      });
    };
    if (Dn) {
      const u = new Dn((v) => d(v.pop()));
      u.observe(c), we(r, () => {
        u.disconnect();
      });
    } else if (o) {
      const [u, v] = o(c, d, a);
      we(r, Zt([Fa(i, Vl), $e(i, "animationstart", u)], v));
    } else
      return bt;
    return re(xe, we(r, Oe(e, i)));
  };
}, pi = (e, t) => {
  let n;
  const a = (i) => i.h === 0 || i.isIntersecting || i.intersectionRatio > 0, o = It(Wl), [s] = Re({
    o: !1
  }), r = (i, c) => {
    if (i) {
      const d = s(a(i)), [, u] = d;
      return u && !c && t(d) && [d];
    }
  }, l = (i, c) => r(c.pop(), i);
  return [() => {
    const i = [];
    if (yo)
      n = new yo(re(l, !1), {
        root: e
      }), n.observe(o), we(i, () => {
        n.disconnect();
      });
    else {
      const c = () => {
        const d = Mt(o);
        r(d);
      };
      we(i, Xs(o, c)()), c();
    }
    return re(xe, we(i, Oe(e, o)));
  }, () => n && l(!0, n.takeRecords())];
}, mi = (e, t, n, a) => {
  let o, s, r, l, i, c;
  const d = `[${vt}]`, u = `[${nt}]`, v = ["id", "class", "style", "open", "wrap", "cols", "rows"], { vt: m, ht: p, ot: f, gt: k, bt: h, nt: y, wt: M, yt: T, St: A, Ot: B } = e, W = (L) => at(L, "direction") === "rtl", te = {
    $t: !1,
    ct: W(m)
  }, z = Je(), _ = sn(qs), [P] = Re({
    i: _s,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const L = _ && _.tt(e, t, te, z, n).ut, ee = !(M && y) && xa(p, vt, En), ae = !y && T(Fl), ie = ae && Ne(k), fe = ie && B(), Ee = A(xs, ee), ye = ae && L && L()[0], G = Mn(f), X = Ua(f);
    return ye && ye(), qe(k, ie), fe && fe(), ee && Ee(), {
      w: G.w + X.w,
      h: G.h + X.h
    };
  }), C = da(a, {
    _: () => o,
    v: () => s,
    S(L, ne) {
      const [ee] = L, [ae] = ne;
      return [Zt(We(ee), We(ae)).reduce((ie, fe) => (ie[fe] = ee[fe] || ae[fe], ie), {})];
    }
  }), w = (L) => {
    const ne = W(m);
    pe(L, {
      Ct: c !== ne
    }), pe(te, {
      ct: ne
    }), c = ne;
  }, j = (L, ne) => {
    const [ee, ae] = L, ie = {
      xt: ae
    };
    return pe(te, {
      $t: ee
    }), !ne && a(ie), ie;
  }, q = ({ ft: L, dt: ne }) => {
    const ae = !(L && !ne) && z.R ? C : a, ie = {
      ft: L || ne,
      dt: ne
    };
    w(ie), ae(ie);
  }, le = (L, ne) => {
    const [, ee] = P(), ae = {
      Ht: ee
    };
    return w(ae), ee && !ne && (L ? a : C)(ae), ae;
  }, se = (L, ne, ee) => {
    const ae = {
      Et: ne
    };
    return w(ae), ne && !ee && C(ae), ae;
  }, [de, ue] = h ? pi(p, j) : [], Ae = !y && Xs(p, q, {
    dt: !0
  }), [N, x] = Ho(p, !1, se, {
    X: v,
    j: v
  }), Q = y && Dn && new Dn((L) => {
    const ne = L[L.length - 1].contentRect;
    q({
      ft: !0,
      dt: Ps(ne, i)
    }), i = ne;
  }), K = da(() => {
    const [, L] = P();
    a({
      Ht: L
    });
  }, {
    _: 222,
    p: !0
  });
  return [() => {
    Q && Q.observe(p);
    const L = Ae && Ae(), ne = de && de(), ee = N(), ae = z.L((ie) => {
      ie ? C({
        zt: ie
      }) : K();
    });
    return () => {
      Q && Q.disconnect(), L && L(), ne && ne(), l && l(), ee(), ae();
    };
  }, ({ It: L, At: ne, Dt: ee }) => {
    const ae = {}, [ie] = L("update.ignoreMutation"), [fe, Ee] = L("update.attributes"), [ye, G] = L("update.elementEvents"), [X, Te] = L("update.debounce"), R = G || Ee, V = ne || ee, U = (J) => ze(ie) && ie(J);
    if (R) {
      r && r(), l && l();
      const [J, E] = Ho(h || f, !0, le, {
        j: Zt(v, fe || []),
        Y: ye,
        W: d,
        G: (b, $) => {
          const { target: O, attributeName: _e } = b;
          return (!$ && _e && !y ? kl(O, d, u) : !1) || !!kt(O, `.${Fe}`) || !!U(b);
        }
      });
      l = J(), r = E;
    }
    if (Te)
      if (C.m(), Ke(X)) {
        const J = X[0], E = X[1];
        o = Ze(J) && J, s = Ze(E) && E;
      } else Ze(X) ? (o = X, s = !1) : (o = !1, s = !1);
    if (V) {
      const J = x(), E = ue && ue(), b = r && r();
      J && pe(ae, se(J[0], J[1], V)), E && pe(ae, j(E[0], V)), b && pe(ae, le(b[0], V));
    }
    return w(ae), ae;
  }, te];
}, hi = (e, t, n, a) => {
  const o = "--os-viewport-percent", s = "--os-scroll-percent", r = "--os-scroll-direction", { U: l } = Je(), { scrollbars: i } = l(), { slot: c } = i, { vt: d, ht: u, ot: v, Mt: m, gt: p, wt: f, nt: k } = t, { scrollbars: h } = m ? {} : e, { slot: y } = h || {}, M = [], T = [], A = [], B = Ys([d, u, v], () => k && f ? d : u, c, y), W = (N) => {
    if (bn) {
      const x = new bn({
        source: p,
        axis: N
      });
      return {
        kt: (K) => {
          const L = K.Tt.animate({
            clear: ["left"],
            [s]: [0, 1]
          }, {
            timeline: x
          });
          return () => L.cancel();
        }
      };
    }
  }, te = {
    x: W("x"),
    y: W("y")
  }, z = () => {
    const { Rt: N, Vt: x } = n, Q = (K, L) => $s(0, 1, K / (K + L) || 0);
    return {
      x: Q(x.x, N.x),
      y: Q(x.y, N.y)
    };
  }, _ = (N, x, Q) => {
    const K = Q ? Fa : Ds;
    be(N, (L) => {
      K(L.Tt, x);
    });
  }, P = (N, x) => {
    be(N, (Q) => {
      const [K, L] = x(Q);
      Jt(K, L);
    });
  }, C = (N, x, Q) => {
    const K = Ba(Q), L = K ? Q : !0, ne = K ? !Q : !0;
    L && _(T, N, x), ne && _(A, N, x);
  }, w = () => {
    const N = z(), x = (Q) => (K) => [K.Tt, {
      [o]: ma(Q) + ""
    }];
    P(T, x(N.x)), P(A, x(N.y));
  }, j = () => {
    if (!bn) {
      const { Lt: N } = n, x = $o(N, Ne(p)), Q = (K) => (L) => [L.Tt, {
        [s]: ma(K) + ""
      }];
      P(T, Q(x.x)), P(A, Q(x.y));
    }
  }, q = () => {
    const { Lt: N } = n, x = So(N), Q = (K) => (L) => [L.Tt, {
      [r]: K ? "0" : "1"
    }];
    P(T, Q(x.x)), P(A, Q(x.y));
  }, le = () => {
    if (k && !f) {
      const { Rt: N, Lt: x } = n, Q = So(x), K = $o(x, Ne(p)), L = (ne) => {
        const { Tt: ee } = ne, ae = Kt(ee) === v && ee, ie = (fe, Ee, ye) => {
          const G = Ee * fe;
          return Ms(ye ? G : -G);
        };
        return [ae, ae && {
          transform: Ll({
            x: ie(K.x, N.x, Q.x),
            y: ie(K.y, N.y, Q.y)
          })
        }];
      };
      P(T, L), P(A, L);
    }
  }, se = (N) => {
    const x = N ? "x" : "y", K = It(`${Fe} ${N ? Gl : ql}`), L = It(Us), ne = It(Va), ee = {
      Tt: K,
      Ut: L,
      Pt: ne
    }, ae = te[x];
    return we(N ? T : A, ee), we(M, [Oe(K, L), Oe(L, ne), re(Ht, K), ae && ae.kt(ee), a(ee, C, N)]), ee;
  }, de = re(se, !0), ue = re(se, !1), Ae = () => (Oe(B, T[0].Tt), Oe(B, A[0].Tt), re(xe, M));
  return de(), ue(), [{
    Nt: w,
    qt: j,
    Bt: q,
    Ft: le,
    jt: C,
    Xt: {
      Yt: T,
      Wt: de,
      Jt: re(P, T)
    },
    Gt: {
      Yt: A,
      Wt: ue,
      Jt: re(P, A)
    }
  }, Ae];
}, gi = (e, t, n, a) => (o, s, r) => {
  const { ht: l, ot: i, nt: c, gt: d, Kt: u, Ot: v } = t, { Tt: m, Ut: p, Pt: f } = o, [k, h] = Tt(333), [y, M] = Tt(444), T = (W) => {
    ze(d.scrollBy) && d.scrollBy({
      behavior: "smooth",
      left: W.x,
      top: W.y
    });
  }, A = () => {
    const W = "pointerup pointercancel lostpointercapture", te = `client${r ? "X" : "Y"}`, z = r ? Yn : Wn, _ = r ? "left" : "top", P = r ? "w" : "h", C = r ? "x" : "y", w = (q, le) => (se) => {
      const { Rt: de } = n, ue = Mt(p)[P] - Mt(f)[P], N = le * se / ue * de[C];
      qe(d, {
        [C]: q + N
      });
    }, j = [];
    return $e(p, "pointerdown", (q) => {
      const le = kt(q.target, `.${Va}`) === f, se = le ? f : p, de = e.scrollbars, ue = de[le ? "dragScroll" : "clickScroll"], { button: Ae, isPrimary: N, pointerType: x } = q, { pointers: Q } = de;
      if (Ae === 0 && N && ue && (Q || []).includes(x)) {
        xe(j), M();
        const L = !le && (q.shiftKey || ue === "instant"), ne = re(ea, f), ee = re(ea, p), ae = ($, O) => ($ || ne())[_] - (O || ee())[_], ie = la(ea(d)[z]) / Mt(d)[P] || 1, fe = w(Ne(d)[C], 1 / ie), Ee = q[te], ye = ne(), G = ee(), X = ye[z], Te = ae(ye, G) + X / 2, R = Ee - G[_], V = le ? 0 : R - Te, U = ($) => {
          xe(b), se.releasePointerCapture($.pointerId);
        }, J = le || L, E = v(), b = [$e(u, W, U), $e(u, "selectstart", ($) => ga($), {
          H: !1
        }), $e(p, W, U), J && $e(p, "pointermove", ($) => fe(V + ($[te] - Ee))), J && (() => {
          const $ = Ne(d);
          E();
          const O = Ne(d), _e = {
            x: O.x - $.x,
            y: O.y - $.y
          };
          (Cn(_e.x) > 3 || Cn(_e.y) > 3) && (v(), qe(d, $), T(_e), y(E));
        })];
        if (se.setPointerCapture(q.pointerId), L)
          fe(V);
        else if (!le) {
          const $ = sn(fi);
          if ($) {
            const O = $(fe, V, X, (_e) => {
              _e ? E() : we(b, E);
            });
            we(b, O), we(j, re(O, !0));
          }
        }
      }
    });
  };
  let B = !0;
  return re(xe, [$e(f, "pointermove pointerleave", a), $e(m, "pointerenter", () => {
    s(Io, !0);
  }), $e(m, "pointerleave pointercancel", () => {
    s(Io, !1);
  }), !c && $e(m, "mousedown", () => {
    const W = pa();
    (bo(W, nt) || bo(W, vt) || W === document.body) && wn(re(ya, i), 25);
  }), $e(m, "wheel", (W) => {
    const { deltaX: te, deltaY: z, deltaMode: _ } = W;
    B && _ === 0 && Kt(m) === l && T({
      x: te,
      y: z
    }), B = !1, s(Po, !0), k(() => {
      B = !0, s(Po);
    }), ga(W);
  }, {
    H: !1,
    I: !0
  }), $e(m, "pointerdown", re($e, u, "click", Rs, {
    A: !0,
    I: !0,
    H: !1
  }), {
    I: !0
  }), A(), h, M]);
}, yi = (e, t, n, a, o, s) => {
  let r, l, i, c, d, u = bt, v = 0;
  const m = (N) => N.pointerType === "mouse", [p, f] = Tt(), [k, h] = Tt(100), [y, M] = Tt(100), [T, A] = Tt(() => v), [B, W] = hi(e, o, a, gi(t, o, a, (N) => m(N) && se())), { ht: te, Qt: z, wt: _ } = o, { jt: P, Nt: C, qt: w, Bt: j, Ft: q } = B, le = (N, x) => {
    if (A(), N)
      P(Bo);
    else {
      const Q = re(P, Bo, !0);
      v > 0 && !x ? T(Q) : Q();
    }
  }, se = () => {
    (i ? !r : !c) && (le(!0), k(() => {
      le(!1);
    }));
  }, de = (N) => {
    P(_a, N, !0), P(_a, N, !1);
  }, ue = (N) => {
    m(N) && (r = i, i && le(!0));
  }, Ae = [A, h, M, f, () => u(), $e(te, "pointerover", ue, {
    A: !0
  }), $e(te, "pointerenter", ue), $e(te, "pointerleave", (N) => {
    m(N) && (r = !1, i && le(!1));
  }), $e(te, "pointermove", (N) => {
    m(N) && l && se();
  }), $e(z, "scroll", (N) => {
    p(() => {
      w(), se();
    }), s(N), q();
  })];
  return [() => re(xe, we(Ae, W())), ({ It: N, Dt: x, Zt: Q, tn: K }) => {
    const { nn: L, sn: ne, en: ee, cn: ae } = K || {}, { Ct: ie, dt: fe } = Q || {}, { ct: Ee } = n, { k: ye } = Je(), { K: G, rn: X } = a, [Te, R] = N("showNativeOverlaidScrollbars"), [V, U] = N("scrollbars.theme"), [J, E] = N("scrollbars.visibility"), [b, $] = N("scrollbars.autoHide"), [O, _e] = N("scrollbars.autoHideSuspend"), [He] = N("scrollbars.autoHideDelay"), [ht, lt] = N("scrollbars.dragScroll"), [gt, Qe] = N("scrollbars.clickScroll"), [et, $t] = N("overflow"), Ct = fe && !x, wt = X.x || X.y, Dt = L || ne || ae || ie || x, De = ee || E || $t, ln = Te && ye.x && ye.y, it = (Wt, ct, cn) => {
      const jt = Wt.includes(Pt) && (J === dt || J === "auto" && ct === Pt);
      return P(Xl, jt, cn), jt;
    };
    if (v = He, Ct && (O && wt ? (de(!1), u(), y(() => {
      u = $e(z, "scroll", re(de, !0), {
        A: !0
      });
    })) : de(!0)), R && P(jl, ln), U && (P(d), P(V, !0), d = V), _e && !O && de(!0), $ && (l = b === "move", i = b === "leave", c = b === "never", le(c, !0)), lt && P(Jl, ht), Qe && P(Kl, !!gt), De) {
      const Wt = it(et.x, G.x, !0), ct = it(et.y, G.y, !1);
      P(Zl, !(Wt && ct));
    }
    Dt && (w(), C(), q(), ae && j(), P(Mo, !X.x, !0), P(Mo, !X.y, !1), P(Ql, Ee && !_));
  }, {}, B];
}, bi = (e) => {
  const t = Je(), { U: n, R: a } = t, { elements: o } = n(), { padding: s, viewport: r, content: l } = o, i = Ln(e), c = i ? {} : e, { elements: d } = c, { padding: u, viewport: v, content: m } = d || {}, p = i ? e : c.target, f = ks(p), k = p.ownerDocument, h = k.documentElement, y = () => k.defaultView || Pe, M = re(ai, [p]), T = re(Ys, [p]), A = re(It, ""), B = re(M, A, r), W = re(T, A, l), te = (X) => {
    const Te = Mt(X), R = Mn(X), V = at(X, bs), U = at(X, As);
    return R.w - Te.w > 0 && !Rt(V) || R.h - Te.h > 0 && !Rt(U);
  }, z = B(v), _ = z === p, P = _ && f, C = !_ && W(m), w = !_ && z === C, j = P ? h : z, q = P ? j : p, le = !_ && T(A, s, u), se = !w && C, de = [se, j, le, q].map((X) => Ln(X) && !Kt(X) && X), ue = (X) => X && ds(de, X), Ae = !ue(j) && te(j) ? j : p, N = P ? h : j, Q = {
    vt: p,
    ht: q,
    ot: j,
    ln: le,
    bt: se,
    gt: N,
    Qt: P ? k : j,
    an: f ? h : Ae,
    Kt: k,
    wt: f,
    Mt: i,
    nt: _,
    un: y,
    yt: (X) => xa(j, nt, X),
    St: (X, Te) => In(j, nt, X, Te),
    Ot: () => In(N, nt, Ul, !0)
  }, { vt: K, ht: L, ln: ne, ot: ee, bt: ae } = Q, ie = [() => {
    Ge(L, [vt, ta]), Ge(K, ta), f && Ge(h, [ta, vt]);
  }];
  let fe = fa([ae, ee, ne, L, K].find((X) => X && !ue(X)));
  const Ee = P ? K : ae || ee, ye = re(xe, ie);
  return [Q, () => {
    const X = y(), Te = pa(), R = (b) => {
      Oe(Kt(b), fa(b)), Ht(b);
    }, V = (b) => $e(b, "focusin focusout focus blur", Rs, {
      I: !0,
      H: !1
    }), U = "tabindex", J = Oa(ee, U), E = V(Te);
    return tt(L, vt, _ ? "" : Ol), tt(ne, Aa, ""), tt(ee, nt, ""), tt(ae, Lo, ""), _ || (tt(ee, U, J || "-1"), f && tt(h, ko, "")), Oe(Ee, fe), Oe(L, ne), Oe(ne || L, !_ && ee), Oe(ee, ae), we(ie, [E, () => {
      const b = pa(), $ = ue(ee), O = $ && b === ee ? K : b, _e = V(O);
      Ge(ne, Aa), Ge(ae, Lo), Ge(ee, nt), f && Ge(h, ko), J ? tt(ee, U, J) : Ge(ee, U), ue(ae) && R(ae), $ && R(ee), ue(ne) && R(ne), ya(O), _e();
    }]), a && !_ && (Na(ee, nt, Fs), we(ie, re(Ge, ee, nt))), ya(!_ && f && Te === K && X.top === X ? ee : Te), E(), fe = 0, ye;
  }, ye];
}, Ai = ({ bt: e }) => ({ Zt: t, _n: n, Dt: a }) => {
  const { xt: o } = t || {}, { $t: s } = n;
  e && (o || a) && Jt(e, {
    [Wn]: s && "100%"
  });
}, _i = ({ ht: e, ln: t, ot: n, nt: a }, o) => {
  const [s, r] = Re({
    i: Dl,
    o: _o()
  }, re(_o, e, "padding", ""));
  return ({ It: l, Zt: i, _n: c, Dt: d }) => {
    let [u, v] = r(d);
    const { R: m } = Je(), { ft: p, Ht: f, Ct: k } = i || {}, { ct: h } = c, [y, M] = l("paddingAbsolute");
    (p || v || (d || f)) && ([u, v] = s(d));
    const A = !a && (M || k || v);
    if (A) {
      const B = !y || !t && !m, W = u.r + u.l, te = u.t + u.b, z = {
        [gs]: B && !h ? -W : 0,
        [ys]: B ? -te : 0,
        [hs]: B && h ? -W : 0,
        top: B ? -u.t : 0,
        right: B ? h ? -u.r : "auto" : 0,
        left: B ? h ? "auto" : -u.l : 0,
        [Yn]: B && `calc(100% + ${W}px)`
      }, _ = {
        [vs]: B ? u.t : 0,
        [fs]: B ? u.r : 0,
        [ms]: B ? u.b : 0,
        [ps]: B ? u.l : 0
      };
      Jt(t || n, z), Jt(n, _), pe(o, {
        ln: u,
        dn: !B,
        rt: t ? _ : pe({}, z, _)
      });
    }
    return {
      fn: A
    };
  };
}, Ei = (e, t) => {
  const n = Je(), { ht: a, ln: o, ot: s, nt: r, Qt: l, gt: i, wt: c, St: d, un: u } = e, { R: v } = n, m = c && r, p = re(cs, 0), f = {
    display: () => !1,
    direction: (x) => x !== "ltr",
    flexDirection: (x) => x.endsWith("-reverse"),
    writingMode: (x) => x !== "horizontal-tb"
  }, k = We(f), h = {
    i: _s,
    o: {
      w: 0,
      h: 0
    }
  }, y = {
    i: An,
    o: {}
  }, M = (x) => {
    d(xs, !m && x);
  }, T = (x) => {
    if (!k.some((Ee) => {
      const ye = x[Ee];
      return ye && f[Ee](ye);
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
    M(!0);
    const K = Ne(i), L = d(zl, !0), ne = $e(l, Pt, (Ee) => {
      const ye = Ne(i);
      Ee.isTrusted && ye.x === K.x && ye.y === K.y && Hs(Ee);
    }, {
      I: !0,
      A: !0
    });
    qe(i, {
      x: 0,
      y: 0
    }), L();
    const ee = Ne(i), ae = Mn(i);
    qe(i, {
      x: ae.w,
      y: ae.h
    });
    const ie = Ne(i);
    qe(i, {
      x: ie.x - ee.x < 1 && -ae.w,
      y: ie.y - ee.y < 1 && -ae.h
    });
    const fe = Ne(i);
    return qe(i, K), Ia(() => ne()), {
      D: ee,
      M: fe
    };
  }, A = (x, Q) => {
    const K = Pe.devicePixelRatio % 1 !== 0 ? 1 : 0, L = {
      w: p(x.w - Q.w),
      h: p(x.h - Q.h)
    };
    return {
      w: L.w > K ? L.w : 0,
      h: L.h > K ? L.h : 0
    };
  }, [B, W] = Re(h, re(Ua, s)), [te, z] = Re(h, re(Mn, s)), [_, P] = Re(h), [C] = Re(y), [w, j] = Re(h), [q] = Re(y), [le] = Re({
    i: (x, Q) => jn(x, Q, k),
    o: {}
  }, () => Pl(s) ? at(s, k) : {}), [se, de] = Re({
    i: (x, Q) => An(x.D, Q.D) && An(x.M, Q.M),
    o: Os()
  }), ue = sn(qs), Ae = (x, Q) => `${Q ? Nl : xl}${wl(x)}`, N = (x) => {
    const Q = (L) => [dt, yt, Pt].map((ne) => Ae(ne, L)), K = Q(!0).concat(Q()).join(" ");
    d(K), d(We(x).map((L) => Ae(x[L], L === "x")).join(" "), !0);
  };
  return ({ It: x, Zt: Q, _n: K, Dt: L }, { fn: ne }) => {
    const { ft: ee, Ht: ae, Ct: ie, dt: fe, zt: Ee } = Q || {}, ye = ue && ue.tt(e, t, K, n, x), { it: G, ut: X, _t: Te } = ye || {}, [R, V] = di(x, n), [U, J] = x("overflow"), E = Rt(U.x), b = Rt(U.y), $ = !0;
    let O = W(L), _e = z(L), He = P(L), ht = j(L);
    V && v && d(Fs, !R);
    {
      xa(a, vt, En) && M(!0);
      const [fo] = X ? X() : [], [un] = O = B(L), [dn] = _e = te(L), vn = Bs(s), fn = m && Bl(u()), ll = {
        w: p(dn.w + un.w),
        h: p(dn.h + un.h)
      }, po = {
        w: p((fn ? fn.w : vn.w + p(vn.w - dn.w)) + un.w),
        h: p((fn ? fn.h : vn.h + p(vn.h - dn.h)) + un.h)
      };
      fo && fo(), ht = w(po), He = _(A(ll, po), L);
    }
    const [lt, gt] = ht, [Qe, et] = He, [$t, Ct] = _e, [wt, Dt] = O, [De, ln] = C({
      x: Qe.w > 0,
      y: Qe.h > 0
    }), it = E && b && (De.x || De.y) || E && De.x && !De.y || b && De.y && !De.x, Wt = ne || ie || Ee || Dt || Ct || gt || et || J || V || $, ct = vi(De, U), [cn, jt] = q(ct.K), [al, ol] = le(L), vo = ie || fe || ol || ln || L, [sl, rl] = vo ? se(T(al), L) : de();
    return Wt && (jt && N(ct.K), Te && G && Jt(s, Te(ct, K, G(ct, $t, wt)))), M(!1), In(a, vt, En, it), In(o, Aa, En, it), pe(t, {
      K: cn,
      Vt: {
        x: lt.w,
        y: lt.h
      },
      Rt: {
        x: Qe.w,
        y: Qe.h
      },
      rn: De,
      Lt: Hl(sl, Qe)
    }), {
      en: jt,
      nn: gt,
      sn: et,
      cn: rl || et,
      vn: vo
    };
  };
}, Si = (e) => {
  const [t, n, a] = bi(e), o = {
    ln: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    dn: !1,
    rt: {
      [gs]: 0,
      [ys]: 0,
      [hs]: 0,
      [vs]: 0,
      [fs]: 0,
      [ms]: 0,
      [ps]: 0
    },
    Vt: {
      x: 0,
      y: 0
    },
    Rt: {
      x: 0,
      y: 0
    },
    K: {
      x: yt,
      y: yt
    },
    rn: {
      x: !1,
      y: !1
    },
    Lt: Os()
  }, { vt: s, gt: r, nt: l, Ot: i } = t, { R: c, k: d } = Je(), u = !c && (d.x || d.y), v = [Ai(t), _i(t, o), Ei(t, o)];
  return [n, (m) => {
    const p = {}, k = u && Ne(r), h = k && i();
    return be(v, (y) => {
      pe(p, y(m, p) || {});
    }), qe(r, k), h && h(), !l && qe(s, 0), p;
  }, o, t, a];
}, $i = (e, t, n, a, o) => {
  let s = !1;
  const r = To(t, {}), [l, i, c, d, u] = Si(e), [v, m, p] = mi(d, c, r, (T) => {
    M({}, T);
  }), [f, k, , h] = yi(e, t, p, c, d, o), y = (T) => We(T).some((A) => !!T[A]), M = (T, A) => {
    if (n())
      return !1;
    const { pn: B, Dt: W, At: te, hn: z } = T, _ = B || {}, P = !!W || !s, C = {
      It: To(t, _, P),
      pn: _,
      Dt: P
    };
    if (z)
      return k(C), !1;
    const w = A || m(pe({}, C, {
      At: te
    })), j = i(pe({}, C, {
      _n: p,
      Zt: w
    }));
    k(pe({}, C, {
      Zt: w,
      tn: j
    }));
    const q = y(w), le = y(j), se = q || le || !Ra(_) || P;
    return s = !0, se && a(T, {
      Zt: w,
      tn: j
    }), se;
  };
  return [() => {
    const { an: T, gt: A, Ot: B } = d, W = Ne(T), te = [v(), l(), f()], z = B();
    return qe(A, W), z(), re(xe, te);
  }, M, () => ({
    gn: p,
    bn: c
  }), {
    wn: d,
    yn: h
  }, u];
}, Xe = (e, t, n) => {
  const { N: a } = Je(), o = Ln(e), s = o ? e : e.target, r = Ws(s);
  if (t && !r) {
    let l = !1;
    const i = [], c = {}, d = (_) => {
      const P = Ss(_), C = sn(ci);
      return C ? C(P, !0) : P;
    }, u = pe({}, a(), d(t)), [v, m, p] = ba(), [f, k, h] = ba(n), y = (_, P) => {
      h(_, P), p(_, P);
    }, [M, T, A, B, W] = $i(e, u, () => l, ({ pn: _, Dt: P }, { Zt: C, tn: w }) => {
      const { ft: j, Ct: q, xt: le, Ht: se, Et: de, dt: ue } = C, { nn: Ae, sn: N, en: x, cn: Q } = w;
      y("updated", [z, {
        updateHints: {
          sizeChanged: !!j,
          directionChanged: !!q,
          heightIntrinsicChanged: !!le,
          overflowEdgeChanged: !!Ae,
          overflowAmountChanged: !!N,
          overflowStyleChanged: !!x,
          scrollCoordinatesChanged: !!Q,
          contentMutation: !!se,
          hostMutation: !!de,
          appear: !!ue
        },
        changedOptions: _ || {},
        force: !!P
      }]);
    }, (_) => y("scroll", [z, _])), te = (_) => {
      ri(s), xe(i), l = !0, y("destroyed", [z, _]), m(), k();
    }, z = {
      options(_, P) {
        if (_) {
          const C = P ? a() : {}, w = Ns(u, pe(C, d(_)));
          Ra(w) || (pe(u, w), T({
            pn: w
          }));
        }
        return pe({}, u);
      },
      on: f,
      off: (_, P) => {
        _ && P && k(_, P);
      },
      state() {
        const { gn: _, bn: P } = A(), { ct: C } = _, { Vt: w, Rt: j, K: q, rn: le, ln: se, dn: de, Lt: ue } = P;
        return pe({}, {
          overflowEdge: w,
          overflowAmount: j,
          overflowStyle: q,
          hasOverflow: le,
          scrollCoordinates: {
            start: ue.D,
            end: ue.M
          },
          padding: se,
          paddingAbsolute: de,
          directionRTL: C,
          destroyed: l
        });
      },
      elements() {
        const { vt: _, ht: P, ln: C, ot: w, bt: j, gt: q, Qt: le } = B.wn, { Xt: se, Gt: de } = B.yn, ue = (N) => {
          const { Pt: x, Ut: Q, Tt: K } = N;
          return {
            scrollbar: K,
            track: Q,
            handle: x
          };
        }, Ae = (N) => {
          const { Yt: x, Wt: Q } = N, K = ue(x[0]);
          return pe({}, K, {
            clone: () => {
              const L = ue(Q());
              return T({
                hn: !0
              }), L;
            }
          });
        };
        return pe({}, {
          target: _,
          host: P,
          padding: C || w,
          viewport: w,
          content: j || w,
          scrollOffsetElement: q,
          scrollEventElement: le,
          scrollbarHorizontal: Ae(se),
          scrollbarVertical: Ae(de)
        });
      },
      update: (_) => T({
        Dt: _,
        At: !0
      }),
      destroy: re(te, !1),
      plugin: (_) => c[We(_)[0]]
    };
    return we(i, [W]), si(s, z), Gs(js, Xe, [z, v, c]), oi(B.wn.wt, !o && e.cancel) ? (te(!0), z) : (we(i, M()), y("initialized", [z]), z.update(), z);
  }
  return r;
};
Xe.plugin = (e) => {
  const t = Ke(e), n = t ? e : [e], a = n.map((o) => Gs(o, Xe)[0]);
  return ii(n), t ? a : a[0];
};
Xe.valid = (e) => {
  const t = e && e.elements, n = ze(t) && t();
  return kn(n) && !!Ws(n.target);
};
Xe.env = () => {
  const { T: e, k: t, R: n, V: a, B: o, F: s, U: r, P: l, N: i, q: c } = Je();
  return pe({}, {
    scrollbarsSize: e,
    scrollbarsOverlaid: t,
    scrollbarsHiding: n,
    scrollTimeline: a,
    staticDefaultInitialization: o,
    staticDefaultOptions: s,
    getDefaultInitialization: r,
    setDefaultInitialization: l,
    getDefaultOptions: i,
    setDefaultOptions: c
  });
};
Xe.nonce = ti;
const Ci = () => {
  if (typeof window > "u") {
    const c = () => {
    };
    return [c, c];
  }
  let e, t;
  const n = window, a = typeof n.requestIdleCallback == "function", o = n.requestAnimationFrame, s = n.cancelAnimationFrame, r = a ? n.requestIdleCallback : o, l = a ? n.cancelIdleCallback : s, i = () => {
    l(e), s(t);
  };
  return [
    (c, d) => {
      i(), e = r(
        a ? () => {
          i(), t = o(c);
        } : c,
        typeof d == "object" ? d : { timeout: 2233 }
      );
    },
    i
  ];
}, wi = (e) => {
  let t = null, n, a, o;
  const s = Sn(e || {}), [r, l] = Ci();
  return Be(
    () => {
      var i;
      return ge((i = s.value) == null ? void 0 : i.defer);
    },
    (i) => {
      o = i;
    },
    { deep: !0, immediate: !0 }
  ), Be(
    () => {
      var i;
      return ge((i = s.value) == null ? void 0 : i.options);
    },
    (i) => {
      n = i, Xe.valid(t) && t.options(n || {}, !0);
    },
    { deep: !0, immediate: !0 }
  ), Be(
    () => {
      var i;
      return ge((i = s.value) == null ? void 0 : i.events);
    },
    (i) => {
      a = i, Xe.valid(t) && t.on(
        /* c8 ignore next */
        a || {},
        !0
      );
    },
    { deep: !0, immediate: !0 }
  ), pt(() => {
    l(), t == null || t.destroy();
  }), [
    (i) => {
      if (Xe.valid(t))
        return t;
      const c = () => t = Xe(i, n || {}, a || {});
      o ? r(c, o) : c();
    },
    () => t
  ];
}, Di = /* @__PURE__ */ H({
  __name: "OverlayScrollbarsComponent",
  props: {
    element: {
      type: [String, Object],
      default: "div"
    },
    options: { type: Object },
    events: { type: Object },
    defer: { type: [Boolean, Object] }
  },
  emits: ["osInitialized", "osUpdated", "osDestroyed", "osScroll"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = {
      initialized: "osInitialized",
      updated: "osUpdated",
      destroyed: "osDestroyed",
      scroll: "osScroll"
    }, { element: s, options: r, events: l, defer: i } = On(a), c = Sn(null), d = Sn(null), u = g(), [v, m] = wi({ options: r, events: u, defer: i });
    return t({
      osInstance: m,
      getElement: () => c.value
    }), cl((p) => {
      const { value: f } = c, { value: k } = d;
      f && (v(
        s.value === "body" ? {
          target: f,
          cancel: {
            body: null
          }
        } : {
          target: f,
          elements: {
            viewport: k,
            content: k
          }
        }
      ), p(() => {
        var h;
        return (h = m()) == null ? void 0 : h.destroy();
      }));
    }), Be(
      () => ge(l),
      (p) => {
        const f = p || {};
        u.value = Object.keys(o).reduce((k, h) => {
          const y = f[h];
          return k[h] = [
            (...M) => n(
              o[h],
              ...M
            ),
            ...(Array.isArray(y) ? y : [y]).filter(Boolean)
          ], k;
        }, {});
      },
      { deep: !0, immediate: !0 }
    ), (p, f) => (D(), Ve(Ta(ge(s)), {
      "data-overlayscrollbars-initialize": "",
      ref_key: "elementRef",
      ref: c
    }, {
      default: Nn(() => [
        ge(s) === "body" ? F(p.$slots, "default", { key: 0 }) : (D(), I("div", {
          key: 1,
          "data-overlayscrollbars-contents": "",
          ref_key: "slotRef",
          ref: d
        }, [
          F(p.$slots, "default")
        ], 512))
      ]),
      _: 3
    }, 512));
  }
}), Zs = /* @__PURE__ */ H({
  __name: "HScrollbars",
  props: {
    options: { type: [Boolean, Object] },
    maxHeight: {}
  },
  emits: ["scroll-end-y", "scroll-end-x", "scroll"],
  setup(e, { emit: t }) {
    const n = t, a = (l) => {
      console.debug("initialized:", l);
    }, o = (l) => {
      console.debug("destroyed:", l);
    }, s = (l) => {
      console.debug("updated:", l);
    }, r = (l) => {
      n("scroll", {
        x: l.elements().viewport.scrollLeft,
        y: l.elements().viewport.scrollTop
      }), l.state().hasOverflow.x && l.state().overflowAmount.x === l.elements().viewport.scrollLeft && n("scroll-end-x", l), l.state().hasOverflow.y && l.state().overflowAmount.y === l.elements().viewport.scrollTop && n("scroll-end-y", l);
    };
    return (l, i) => (D(), Ve(ge(Di), {
      class: "h-overlay-scroll",
      style: Le({ maxHeight: l.maxHeight === 0 ? "none" : `${l.maxHeight}px` }),
      options: l.options,
      events: {
        initialized: a,
        destroyed: o,
        updated: s,
        scroll: r
      },
      defer: ""
    }, {
      default: Nn(() => [
        F(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "options", "events"]));
  }
}), Ks = Symbol("listPosition"), Js = Symbol("clickedButton"), er = Symbol("isActiveList"), tr = Symbol("dropdownList"), nr = Symbol("dropdownButton"), ar = Symbol("clickedDropdownItemButton"), or = Symbol("button_disabled"), cm = /* @__PURE__ */ H({
  __name: "HDropdownArea",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    scrollEventRefs: {}
  },
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    var k;
    const n = e, a = t, o = g(!1), s = g(null), r = g(0), l = g(null), i = g(null), c = g(null);
    (k = n.modelValue) != null && k.value && (c.value = n.modelValue);
    const d = g({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      clientWidth: 0,
      clientHeight: 0
    }), u = () => {
      if (o.value = !o.value, !s.value)
        return;
      const { bottom: h, left: y, right: M, top: T, width: A } = s.value.getBoundingClientRect();
      r.value = A, d.value = {
        bottom: h,
        left: y,
        right: M,
        top: T,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, v = () => {
      if (!s.value)
        return;
      const { bottom: h, left: y, right: M, top: T } = s.value.getBoundingClientRect();
      d.value = { ...d.value, bottom: h, left: y, right: M, top: T };
    }, m = () => {
      d.value = {
        ...d.value,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, p = (h) => {
      const y = h.target;
      if (!(y instanceof Element))
        return;
      const M = y.closest(".h_dropdown_button");
      if (M) {
        M !== l.value && (o.value = !1, a("blur"));
        return;
      }
      const T = y.closest(".h_dropdown_list");
      (!T || T !== i.value) && (o.value = !1, a("blur"));
    }, f = (h, y, M) => {
      a("update:modelValue", { value: y, name: M }), c.value = { value: y, name: M }, o.value = !1;
    };
    return Be(o, (h) => {
      h ? (window.addEventListener("scroll", v), Array.isArray(n.scrollEventRefs) && n.scrollEventRefs.forEach((y) => {
        const M = document.querySelector(y);
        M instanceof HTMLElement && M.addEventListener("scroll", v);
      }), window.addEventListener("resize", m), window.addEventListener("click", p)) : (window.removeEventListener("scroll", v), Array.isArray(n.scrollEventRefs) && n.scrollEventRefs.forEach((y) => {
        const M = document.querySelector(y);
        M instanceof HTMLElement && M.removeEventListener("scroll", v);
      }), window.removeEventListener("resize", m), window.removeEventListener("click", p));
    }), pt(() => {
      window.removeEventListener("scroll", v), window.removeEventListener("resize", m), window.removeEventListener("click", p), Array.isArray(n.scrollEventRefs) && n.scrollEventRefs.forEach((h) => {
        const y = document.querySelector(h);
        y instanceof HTMLElement && y.removeEventListener("scroll", v);
      });
    }), Y(Ks, d), Y(er, o), Y(Js, u), Y(tr, i), Y(nr, l), Y(ar, f), Y(or, ce(() => n.disabled)), (h, y) => (D(), I("div", {
      ref_key: "dropdownArea",
      ref: s,
      class: "h_dropdown_area"
    }, [
      F(h.$slots, "default", {
        isActiveList: o.value,
        listWidth: r.value
      })
    ], 512));
  }
}), Ti = {}, ki = { class: "h_dropdown_item" };
function Li(e, t) {
  return D(), I("div", ki, [
    F(e.$slots, "default")
  ]);
}
const um = /* @__PURE__ */ Z(Ti, [["render", Li]]), Ii = ["disabled"], dm = /* @__PURE__ */ H({
  __name: "HDropdownButton",
  setup(e) {
    const t = S(Js), n = S(nr), a = S(or);
    return (o, s) => (D(), I("button", {
      ref_key: "dropdownButton",
      ref: n,
      type: "button",
      class: "h_dropdown_button",
      disabled: ge(a),
      onClick: s[0] || (s[0] = //@ts-ignore
      (...r) => ge(t) && ge(t)(...r))
    }, [
      F(o.$slots, "default")
    ], 8, Ii));
  }
}), Mi = ["disabled"], vm = /* @__PURE__ */ H({
  __name: "HDropdownItemButton",
  props: {
    value: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t, a = ka(), o = S(
      ar,
      (s, r, l) => {
        n("click", s, r, l);
      }
    );
    return (s, r) => (D(), I("button", xn({
      type: "button",
      class: "h_dropdown_item_button",
      disabled: s.disabled
    }, ge(a), {
      onClick: r[0] || (r[0] = (l) => ge(o)(l, s.value, s.name))
    }), [
      F(s.$slots, "default")
    ], 16, Mi));
  }
}), fm = /* @__PURE__ */ H({
  __name: "HDropdownList",
  props: {
    listWidth: {}
  },
  setup(e) {
    const t = e, n = S(er), a = S(Ks), o = S(tr), s = (i, c, d, u) => c + d > u ? {
      top: "auto",
      bottom: `${u - i}px`,
      marginBottom: "-1px"
    } : {
      top: `${c}px`,
      bottom: "auto",
      marginTop: "-1px"
    }, r = (i, c, d, u) => c + d > u ? {
      left: "auto",
      right: `${u - c}px`
    } : {
      left: `${i}px`,
      right: "auto"
    }, l = ce(() => {
      if (!a || !Fn(a))
        return {
          position: "fixed"
        };
      const { bottom: i, left: c, right: d, top: u, clientWidth: v, clientHeight: m } = a.value;
      if (!((o == null ? void 0 : o.value) instanceof HTMLElement))
        return {};
      const { height: p, width: f } = o.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...s(u, i, p, m),
        ...r(c, d, f, v),
        width: `${t.listWidth}px`
      };
    });
    return (i, c) => ge(n) ? (D(), I("div", {
      key: 0,
      ref_key: "dropdownList",
      ref: o,
      style: Le(l.value),
      class: "h_dropdown_list"
    }, [
      os(Zs, { style: { "max-height": "300px" } }, {
        default: Nn(() => [
          F(i.$slots, "default")
        ]),
        _: 3
      })
    ], 4)) : Me("", !0);
  }
}), pm = /* @__PURE__ */ H({
  __name: "HCheckAuth",
  props: {
    isAuth: {},
    noAuthList: {},
    originalEventTarget: { default: "button" },
    originalEventTargetEvent: {}
  },
  emits: ["auth-verification-result"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = g(null), s = ss(), r = La(), l = g(null), i = (u) => {
      var v;
      return u.preventDefault(), u.stopPropagation(), n.isAuth ? !((v = n.noAuthList) != null && v.includes(n.isAuth)) : !0;
    }, c = (u) => {
      var v, m, p;
      (v = o.value) == null || v.removeEventListener("click", d, {
        capture: !0
      }), (m = o.value) == null || m.click(), (p = o.value) == null || p.addEventListener("click", d, {
        capture: !0
      });
    }, d = (u) => {
      u.preventDefault(), u.stopPropagation();
      const v = i(u);
      a("auth-verification-result", {
        event: u,
        result: v,
        originalFunc: c
      });
    };
    return je(async () => {
      var m, p, f, k, h, y, M;
      o.value = (m = s == null ? void 0 : s.proxy) == null ? void 0 : m.$el.querySelector(n.originalEventTarget), (p = o.value) == null || p.addEventListener("click", d, {
        capture: !0
      });
      const u = n.originalEventTargetEvent, v = (f = r == null ? void 0 : r.default) == null ? void 0 : f.call(r)[0];
      if (v)
        if (n.originalEventTargetEvent)
          if (v.props)
            l.value = n[u];
          else {
            const T = (k = v.type) == null ? void 0 : k.setup;
            typeof T == "function" && (l.value = (h = T()) == null ? void 0 : h[u]);
          }
        else if (v.props)
          l.value = v.props.onClick;
        else {
          const T = (y = v.type) == null ? void 0 : y.setup;
          typeof T == "function" && (l.value = (M = T()) == null ? void 0 : M.onClick);
        }
    }), pt(() => {
      var u;
      (u = o.value) == null || u.removeEventListener("click", d);
    }), (u, v) => (D(), I("div", null, [
      F(u.$slots, "default", { ref: "slotElements" })
    ]));
  }
});
var sr = typeof global == "object" && global && global.Object === Object && global, Bi = typeof self == "object" && self && self.Object === Object && self, st = sr || Bi || Function("return this")(), Ot = st.Symbol, rr = Object.prototype, Pi = rr.hasOwnProperty, Hi = rr.toString, Qt = Ot ? Ot.toStringTag : void 0;
function Ri(e) {
  var t = Pi.call(e, Qt), n = e[Qt];
  try {
    e[Qt] = void 0;
    var a = !0;
  } catch {
  }
  var o = Hi.call(e);
  return a && (t ? e[Qt] = n : delete e[Qt]), o;
}
var Oi = Object.prototype, Ni = Oi.toString;
function xi(e) {
  return Ni.call(e);
}
var Fi = "[object Null]", Ui = "[object Undefined]", Ro = Ot ? Ot.toStringTag : void 0;
function rn(e) {
  return e == null ? e === void 0 ? Ui : Fi : Ro && Ro in Object(e) ? Ri(e) : xi(e);
}
function en(e) {
  return e != null && typeof e == "object";
}
var Bn = Array.isArray;
function lr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var zi = "[object AsyncFunction]", Vi = "[object Function]", Yi = "[object GeneratorFunction]", Wi = "[object Proxy]";
function ir(e) {
  if (!lr(e))
    return !1;
  var t = rn(e);
  return t == Vi || t == Yi || t == zi || t == Wi;
}
var aa = st["__core-js_shared__"], Oo = function() {
  var e = /[^.]+$/.exec(aa && aa.keys && aa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ji(e) {
  return !!Oo && Oo in e;
}
var Qi = Function.prototype, Gi = Qi.toString;
function Et(e) {
  if (e != null) {
    try {
      return Gi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var qi = /[\\^$.*+?()[\]{}|]/g, Xi = /^\[object .+?Constructor\]$/, Zi = Function.prototype, Ki = Object.prototype, Ji = Zi.toString, ec = Ki.hasOwnProperty, tc = RegExp(
  "^" + Ji.call(ec).replace(qi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function nc(e) {
  if (!lr(e) || ji(e))
    return !1;
  var t = ir(e) ? tc : Xi;
  return t.test(Et(e));
}
function ac(e, t) {
  return e == null ? void 0 : e[t];
}
function Ut(e, t) {
  var n = ac(e, t);
  return nc(n) ? n : void 0;
}
var Ea = Ut(st, "WeakMap"), oc = 9007199254740991, sc = /^(?:0|[1-9]\d*)$/;
function rc(e, t) {
  var n = typeof e;
  return t = t ?? oc, !!t && (n == "number" || n != "symbol" && sc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function cr(e, t) {
  return e === t || e !== e && t !== t;
}
var lc = 9007199254740991;
function ur(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lc;
}
function ic(e) {
  return e != null && ur(e.length) && !ir(e);
}
var cc = Object.prototype;
function uc(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || cc;
  return e === n;
}
function dc(e, t) {
  for (var n = -1, a = Array(e); ++n < e; )
    a[n] = t(n);
  return a;
}
var vc = "[object Arguments]";
function No(e) {
  return en(e) && rn(e) == vc;
}
var dr = Object.prototype, fc = dr.hasOwnProperty, pc = dr.propertyIsEnumerable, mc = No(/* @__PURE__ */ function() {
  return arguments;
}()) ? No : function(e) {
  return en(e) && fc.call(e, "callee") && !pc.call(e, "callee");
};
function hc() {
  return !1;
}
var vr = typeof exports == "object" && exports && !exports.nodeType && exports, xo = vr && typeof module == "object" && module && !module.nodeType && module, gc = xo && xo.exports === vr, Fo = gc ? st.Buffer : void 0, yc = Fo ? Fo.isBuffer : void 0, Sa = yc || hc, bc = "[object Arguments]", Ac = "[object Array]", _c = "[object Boolean]", Ec = "[object Date]", Sc = "[object Error]", $c = "[object Function]", Cc = "[object Map]", wc = "[object Number]", Dc = "[object Object]", Tc = "[object RegExp]", kc = "[object Set]", Lc = "[object String]", Ic = "[object WeakMap]", Mc = "[object ArrayBuffer]", Bc = "[object DataView]", Pc = "[object Float32Array]", Hc = "[object Float64Array]", Rc = "[object Int8Array]", Oc = "[object Int16Array]", Nc = "[object Int32Array]", xc = "[object Uint8Array]", Fc = "[object Uint8ClampedArray]", Uc = "[object Uint16Array]", zc = "[object Uint32Array]", Se = {};
Se[Pc] = Se[Hc] = Se[Rc] = Se[Oc] = Se[Nc] = Se[xc] = Se[Fc] = Se[Uc] = Se[zc] = !0;
Se[bc] = Se[Ac] = Se[Mc] = Se[_c] = Se[Bc] = Se[Ec] = Se[Sc] = Se[$c] = Se[Cc] = Se[wc] = Se[Dc] = Se[Tc] = Se[kc] = Se[Lc] = Se[Ic] = !1;
function Vc(e) {
  return en(e) && ur(e.length) && !!Se[rn(e)];
}
function Yc(e) {
  return function(t) {
    return e(t);
  };
}
var fr = typeof exports == "object" && exports && !exports.nodeType && exports, Xt = fr && typeof module == "object" && module && !module.nodeType && module, Wc = Xt && Xt.exports === fr, oa = Wc && sr.process, Uo = function() {
  try {
    var e = Xt && Xt.require && Xt.require("util").types;
    return e || oa && oa.binding && oa.binding("util");
  } catch {
  }
}(), zo = Uo && Uo.isTypedArray, pr = zo ? Yc(zo) : Vc, jc = Object.prototype, Qc = jc.hasOwnProperty;
function Gc(e, t) {
  var n = Bn(e), a = !n && mc(e), o = !n && !a && Sa(e), s = !n && !a && !o && pr(e), r = n || a || o || s, l = r ? dc(e.length, String) : [], i = l.length;
  for (var c in e)
    Qc.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    rc(c, i))) && l.push(c);
  return l;
}
function qc(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Xc = qc(Object.keys, Object), Zc = Object.prototype, Kc = Zc.hasOwnProperty;
function Jc(e) {
  if (!uc(e))
    return Xc(e);
  var t = [];
  for (var n in Object(e))
    Kc.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function eu(e) {
  return ic(e) ? Gc(e) : Jc(e);
}
var tn = Ut(Object, "create");
function tu() {
  this.__data__ = tn ? tn(null) : {}, this.size = 0;
}
function nu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var au = "__lodash_hash_undefined__", ou = Object.prototype, su = ou.hasOwnProperty;
function ru(e) {
  var t = this.__data__;
  if (tn) {
    var n = t[e];
    return n === au ? void 0 : n;
  }
  return su.call(t, e) ? t[e] : void 0;
}
var lu = Object.prototype, iu = lu.hasOwnProperty;
function cu(e) {
  var t = this.__data__;
  return tn ? t[e] !== void 0 : iu.call(t, e);
}
var uu = "__lodash_hash_undefined__";
function du(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = tn && t === void 0 ? uu : t, this;
}
function _t(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
_t.prototype.clear = tu;
_t.prototype.delete = nu;
_t.prototype.get = ru;
_t.prototype.has = cu;
_t.prototype.set = du;
function vu() {
  this.__data__ = [], this.size = 0;
}
function qn(e, t) {
  for (var n = e.length; n--; )
    if (cr(e[n][0], t))
      return n;
  return -1;
}
var fu = Array.prototype, pu = fu.splice;
function mu(e) {
  var t = this.__data__, n = qn(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : pu.call(t, n, 1), --this.size, !0;
}
function hu(e) {
  var t = this.__data__, n = qn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function gu(e) {
  return qn(this.__data__, e) > -1;
}
function yu(e, t) {
  var n = this.__data__, a = qn(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
rt.prototype.clear = vu;
rt.prototype.delete = mu;
rt.prototype.get = hu;
rt.prototype.has = gu;
rt.prototype.set = yu;
var nn = Ut(st, "Map");
function bu() {
  this.size = 0, this.__data__ = {
    hash: new _t(),
    map: new (nn || rt)(),
    string: new _t()
  };
}
function Au(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xn(e, t) {
  var n = e.__data__;
  return Au(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function _u(e) {
  var t = Xn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Eu(e) {
  return Xn(this, e).get(e);
}
function Su(e) {
  return Xn(this, e).has(e);
}
function $u(e, t) {
  var n = Xn(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function St(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
St.prototype.clear = bu;
St.prototype.delete = _u;
St.prototype.get = Eu;
St.prototype.has = Su;
St.prototype.set = $u;
function Cu(e, t) {
  for (var n = -1, a = t.length, o = e.length; ++n < a; )
    e[o + n] = t[n];
  return e;
}
function wu() {
  this.__data__ = new rt(), this.size = 0;
}
function Du(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Tu(e) {
  return this.__data__.get(e);
}
function ku(e) {
  return this.__data__.has(e);
}
var Lu = 200;
function Iu(e, t) {
  var n = this.__data__;
  if (n instanceof rt) {
    var a = n.__data__;
    if (!nn || a.length < Lu - 1)
      return a.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new St(a);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ft(e) {
  var t = this.__data__ = new rt(e);
  this.size = t.size;
}
ft.prototype.clear = wu;
ft.prototype.delete = Du;
ft.prototype.get = Tu;
ft.prototype.has = ku;
ft.prototype.set = Iu;
function Mu(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, o = 0, s = []; ++n < a; ) {
    var r = e[n];
    t(r, n, e) && (s[o++] = r);
  }
  return s;
}
function Bu() {
  return [];
}
var Pu = Object.prototype, Hu = Pu.propertyIsEnumerable, Vo = Object.getOwnPropertySymbols, Ru = Vo ? function(e) {
  return e == null ? [] : (e = Object(e), Mu(Vo(e), function(t) {
    return Hu.call(e, t);
  }));
} : Bu;
function Ou(e, t, n) {
  var a = t(e);
  return Bn(e) ? a : Cu(a, n(e));
}
function Yo(e) {
  return Ou(e, eu, Ru);
}
var $a = Ut(st, "DataView"), Ca = Ut(st, "Promise"), wa = Ut(st, "Set"), Wo = "[object Map]", Nu = "[object Object]", jo = "[object Promise]", Qo = "[object Set]", Go = "[object WeakMap]", qo = "[object DataView]", xu = Et($a), Fu = Et(nn), Uu = Et(Ca), zu = Et(wa), Vu = Et(Ea), ut = rn;
($a && ut(new $a(new ArrayBuffer(1))) != qo || nn && ut(new nn()) != Wo || Ca && ut(Ca.resolve()) != jo || wa && ut(new wa()) != Qo || Ea && ut(new Ea()) != Go) && (ut = function(e) {
  var t = rn(e), n = t == Nu ? e.constructor : void 0, a = n ? Et(n) : "";
  if (a)
    switch (a) {
      case xu:
        return qo;
      case Fu:
        return Wo;
      case Uu:
        return jo;
      case zu:
        return Qo;
      case Vu:
        return Go;
    }
  return t;
});
var Xo = st.Uint8Array, Yu = "__lodash_hash_undefined__";
function Wu(e) {
  return this.__data__.set(e, Yu), this;
}
function ju(e) {
  return this.__data__.has(e);
}
function Pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new St(); ++t < n; )
    this.add(e[t]);
}
Pn.prototype.add = Pn.prototype.push = Wu;
Pn.prototype.has = ju;
function Qu(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Gu(e, t) {
  return e.has(t);
}
var qu = 1, Xu = 2;
function mr(e, t, n, a, o, s) {
  var r = n & qu, l = e.length, i = t.length;
  if (l != i && !(r && i > l))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var u = -1, v = !0, m = n & Xu ? new Pn() : void 0;
  for (s.set(e, t), s.set(t, e); ++u < l; ) {
    var p = e[u], f = t[u];
    if (a)
      var k = r ? a(f, p, u, t, e, s) : a(p, f, u, e, t, s);
    if (k !== void 0) {
      if (k)
        continue;
      v = !1;
      break;
    }
    if (m) {
      if (!Qu(t, function(h, y) {
        if (!Gu(m, y) && (p === h || o(p, h, n, a, s)))
          return m.push(y);
      })) {
        v = !1;
        break;
      }
    } else if (!(p === f || o(p, f, n, a, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
function Zu(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a, o) {
    n[++t] = [o, a];
  }), n;
}
function Ku(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a) {
    n[++t] = a;
  }), n;
}
var Ju = 1, ed = 2, td = "[object Boolean]", nd = "[object Date]", ad = "[object Error]", od = "[object Map]", sd = "[object Number]", rd = "[object RegExp]", ld = "[object Set]", id = "[object String]", cd = "[object Symbol]", ud = "[object ArrayBuffer]", dd = "[object DataView]", Zo = Ot ? Ot.prototype : void 0, sa = Zo ? Zo.valueOf : void 0;
function vd(e, t, n, a, o, s, r) {
  switch (n) {
    case dd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ud:
      return !(e.byteLength != t.byteLength || !s(new Xo(e), new Xo(t)));
    case td:
    case nd:
    case sd:
      return cr(+e, +t);
    case ad:
      return e.name == t.name && e.message == t.message;
    case rd:
    case id:
      return e == t + "";
    case od:
      var l = Zu;
    case ld:
      var i = a & Ju;
      if (l || (l = Ku), e.size != t.size && !i)
        return !1;
      var c = r.get(e);
      if (c)
        return c == t;
      a |= ed, r.set(e, t);
      var d = mr(l(e), l(t), a, o, s, r);
      return r.delete(e), d;
    case cd:
      if (sa)
        return sa.call(e) == sa.call(t);
  }
  return !1;
}
var fd = 1, pd = Object.prototype, md = pd.hasOwnProperty;
function hd(e, t, n, a, o, s) {
  var r = n & fd, l = Yo(e), i = l.length, c = Yo(t), d = c.length;
  if (i != d && !r)
    return !1;
  for (var u = i; u--; ) {
    var v = l[u];
    if (!(r ? v in t : md.call(t, v)))
      return !1;
  }
  var m = s.get(e), p = s.get(t);
  if (m && p)
    return m == t && p == e;
  var f = !0;
  s.set(e, t), s.set(t, e);
  for (var k = r; ++u < i; ) {
    v = l[u];
    var h = e[v], y = t[v];
    if (a)
      var M = r ? a(y, h, v, t, e, s) : a(h, y, v, e, t, s);
    if (!(M === void 0 ? h === y || o(h, y, n, a, s) : M)) {
      f = !1;
      break;
    }
    k || (k = v == "constructor");
  }
  if (f && !k) {
    var T = e.constructor, A = t.constructor;
    T != A && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof A == "function" && A instanceof A) && (f = !1);
  }
  return s.delete(e), s.delete(t), f;
}
var gd = 1, Ko = "[object Arguments]", Jo = "[object Array]", hn = "[object Object]", yd = Object.prototype, es = yd.hasOwnProperty;
function bd(e, t, n, a, o, s) {
  var r = Bn(e), l = Bn(t), i = r ? Jo : ut(e), c = l ? Jo : ut(t);
  i = i == Ko ? hn : i, c = c == Ko ? hn : c;
  var d = i == hn, u = c == hn, v = i == c;
  if (v && Sa(e)) {
    if (!Sa(t))
      return !1;
    r = !0, d = !1;
  }
  if (v && !d)
    return s || (s = new ft()), r || pr(e) ? mr(e, t, n, a, o, s) : vd(e, t, i, n, a, o, s);
  if (!(n & gd)) {
    var m = d && es.call(e, "__wrapped__"), p = u && es.call(t, "__wrapped__");
    if (m || p) {
      var f = m ? e.value() : e, k = p ? t.value() : t;
      return s || (s = new ft()), o(f, k, n, a, s);
    }
  }
  return v ? (s || (s = new ft()), hd(e, t, n, a, o, s)) : !1;
}
function hr(e, t, n, a, o) {
  return e === t ? !0 : e == null || t == null || !en(e) && !en(t) ? e !== e && t !== t : bd(e, t, n, a, hr, o);
}
function Nt(e, t) {
  return hr(e, t);
}
function mm() {
  return {
    checkEqual: ce(
      () => (t, n) => Nt(t, n)
    )
  };
}
const gn = {}, Gt = {}, hm = (e, t) => {
  const n = t.split("?")[0], a = () => {
    s();
  };
  Be(e, (l, i) => {
    l && (i && i.removeEventListener("input", a), l.addEventListener("input", a), gn[n] = o(), Gt[n] = Nt(
      gn[n],
      o()
    ));
  }), pt(() => {
    e.value && e.value.removeEventListener("input", a);
  });
  const o = () => {
    if (!e.value)
      return null;
    const l = new FormData(e.value), i = {};
    return l.forEach((c, d) => {
      i[d] = c;
    }), JSON.stringify(i);
  };
  gn[n] = o();
  const s = () => {
    if (!e.value)
      return null;
    const l = o();
    return Gt[n] = Nt(
      gn[n],
      l
    ), Gt[n];
  };
  return {
    deleteComponentState: () => {
      delete Gt[n];
    }
  };
}, Ad = () => Gt, gm = /* @__PURE__ */ H({
  __name: "HCheckFormDataChange",
  props: {
    href: {},
    target: {},
    originalEventTarget: { default: "a" },
    originalEventTargetEvent: {}
  },
  emits: ["data-change-verification-result"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ss(), s = La(), r = g(null), l = g(null), i = () => {
      const u = Ad()[window.location.href.split("?")[0]];
      return u === void 0 || !!u;
    }, c = (u) => {
      var v, m, p;
      (v = r.value) == null || v.removeEventListener("click", d, {
        capture: !0
      }), (m = r.value) == null || m.click(), (p = r.value) == null || p.addEventListener("click", d, {
        capture: !0
      });
    }, d = (u) => {
      u.preventDefault(), u.stopPropagation();
      const v = i();
      a("data-change-verification-result", {
        event: u,
        result: v,
        originalFunc: c,
        href: n.href,
        target: n.target
      });
    };
    return je(async () => {
      var m, p, f, k, h, y, M;
      r.value = (m = o == null ? void 0 : o.proxy) == null ? void 0 : m.$el.querySelector(n.originalEventTarget), (p = r.value) == null || p.addEventListener("click", d, {
        capture: !0
      });
      const u = n.originalEventTargetEvent, v = (f = s == null ? void 0 : s.default) == null ? void 0 : f.call(s)[0];
      if (v)
        if (n.originalEventTargetEvent)
          if (v.props)
            l.value = n[u];
          else {
            const T = (k = v.type) == null ? void 0 : k.setup;
            typeof T == "function" && (l.value = (h = T()) == null ? void 0 : h[u]);
          }
        else if (v.props)
          l.value = v.props.onClick;
        else {
          const T = (y = v.type) == null ? void 0 : y.setup;
          typeof T == "function" && (l.value = (M = T()) == null ? void 0 : M.onClick);
        }
    }), pt(() => {
      var u;
      (u = r.value) == null || u.removeEventListener("click", d);
    }), (u, v) => (D(), I("div", null, [
      F(u.$slots, "default")
    ]));
  }
}), Wa = Symbol("maxLength"), ja = Symbol("setCountValue"), Qa = Symbol("textRef"), gr = Symbol("textCounterArea"), ym = /* @__PURE__ */ H({
  __name: "HTextCounter",
  props: {
    maxLength: {}
  },
  setup(e) {
    const t = e, n = g(null), a = g(0), o = ce(() => t.maxLength), s = g(null), r = g(0), l = () => {
      a.value = s.value ? s.value.value.length : 0, setTimeout(() => {
        n.value && (r.value = n.value.offsetWidth - n.value.clientWidth);
      }, 30);
    };
    return Y(ja, l), Y(Wa, o), Y(Qa, s), Y(gr, n), je(() => {
      l();
    }), (i, c) => (D(), I("div", {
      ref_key: "textCounterArea",
      ref: n,
      class: "h_text_counter_area"
    }, [
      F(i.$slots, "default", {
        currLength: a.value,
        maxLength: o.value,
        scrollWidth: r.value
      })
    ], 512));
  }
}), _d = {}, Ed = { class: "h_text_counter_box" };
function Sd(e, t) {
  return D(), I("div", Ed, [
    F(e.$slots, "default")
  ]);
}
const bm = /* @__PURE__ */ Z(_d, [["render", Sd]]), $d = {};
function Cd(e, t) {
  return D(), I("div", null, [
    F(e.$slots, "default")
  ]);
}
const Am = /* @__PURE__ */ Z($d, [["render", Cd]]), wd = ["maxlength"], _m = /* @__PURE__ */ H({
  __name: "HCounterInputText",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ka(), s = S(Wa, g(o.maxlength)), r = S(ja, () => {
    }), l = S(Qa, null), i = ce({
      get() {
        return n.modelValue;
      },
      set(d) {
        a("update:modelValue", d);
      }
    }), c = () => {
      a("blur");
    };
    return (d, u) => rs((D(), I("input", xn({
      ref_key: "inputRef",
      ref: l,
      "onUpdate:modelValue": u[0] || (u[0] = (v) => i.value = v)
    }, ge(o), {
      type: "text",
      class: "h_inp_txt",
      maxlength: ge(s),
      onBlur: c,
      onInput: u[1] || (u[1] = //@ts-ignore
      (...v) => ge(r) && ge(r)(...v))
    }), null, 16, wd)), [
      [ls, i.value]
    ]);
  }
}), Dd = ["maxlength"], Em = /* @__PURE__ */ H({
  __name: "HCounterTextArea",
  props: {
    modelValue: {},
    autoHeight: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ka(), s = S(Wa, void 0), r = S(ja, () => {
    }), l = S(Qa, g(null)), i = S(gr, g(null)), c = g(null), d = () => {
      l.value && (c.value = {
        start: l.value.selectionStart,
        end: l.value.selectionEnd
      });
    }, u = () => {
      me(() => {
        l.value && c.value && l.value.setSelectionRange(
          c.value.start,
          c.value.end
        );
      });
    }, v = ce({
      get() {
        return n.modelValue;
      },
      set(f) {
        d(), a("update:modelValue", f), u();
      }
    }), m = () => {
      me(() => {
        let f = 0;
        i.value && (f = i.value.scrollTop), l.value && n.autoHeight && (l.value.style.height = "auto", l.value.scrollHeight > l.value.clientHeight ? l.value.style.height = `${l.value.scrollHeight + 1}px` : l.value.style.height = `${l.value.scrollHeight}px`), i.value && (i.value.scrollTop = f);
      });
    }, p = (f) => {
      r(), m();
    };
    return je(() => {
      m();
    }), (f, k) => rs((D(), I("textarea", xn({
      ref_key: "textAreaRef",
      ref: l,
      "onUpdate:modelValue": k[0] || (k[0] = (h) => v.value = h)
    }, ge(o), {
      class: "h_text_area",
      maxlength: ge(s),
      onInput: p
    }), null, 16, Dd)), [
      [ls, v.value]
    ]);
  }
}), yr = Symbol("triggerFileInput"), br = Symbol("files"), Ar = Symbol("formatSize"), _r = Symbol("removeFile"), Td = ["multiple"], Sm = /* @__PURE__ */ H({
  __name: "HFileUploadArea",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: !1 },
    maxFiles: { default: Number.MAX_VALUE },
    maxSize: { default: Number.MAX_VALUE }
  },
  emits: ["update:modelValue", "exceed-file-num", "exceed-file-size"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ce(() => n.multiple ? n.maxFiles : 1), s = g(n.modelValue);
    Be(() => n.modelValue, (h) => {
      s.value = h;
    });
    const r = g(null), l = (h) => {
      if (!r.value)
        return;
      const y = new DataTransfer();
      h.forEach((M) => y.items.add(M)), r.value.files = y.files;
    }, i = () => {
      var h;
      (h = r.value) == null || h.click();
    }, c = (h) => {
      const y = h.target;
      y.files && p([...y.files]);
    }, d = g(!1), u = () => {
      d.value = !1;
    }, v = (h) => {
      d.value = !0, h.dataTransfer && (h.dataTransfer.dropEffect = "copy");
    }, m = (h) => {
      d.value = !1, h.dataTransfer && p([...h.dataTransfer.files]);
    }, p = (h) => {
      s.value.length + h.length > o.value && (a("exceed-file-num"), h = h.slice(0, o.value - s.value.length));
      let y = s.value.reduce((M, T) => M + T.size, 0);
      h = h.filter((M) => n.maxSize && y + M.size > n.maxSize ? (a("exceed-file-size"), !1) : (y += M.size, !0)), s.value.push(...h), l(s.value), a("update:modelValue", s.value);
    }, f = (h) => {
      s.value.splice(h, 1), l(s.value), a("update:modelValue", s.value);
    }, k = (h) => (h / 1024 / 1024).toFixed(2) + "MB";
    return Y(yr, i), Y(br, s), Y(_r, f), Y(Ar, k), (h, y) => (D(), I("div", {
      class: ve(["h-file-upload-container", { is_drag_over: d.value }]),
      onDragover: Bt(v, ["prevent"]),
      onDrop: Bt(m, ["prevent"]),
      onDragleave: u
    }, [
      oe("input", {
        ref_key: "fileInput",
        ref: r,
        type: "file",
        multiple: h.multiple,
        hidden: "",
        onChange: c
      }, null, 40, Td),
      F(h.$slots, "default", { isDragOver: d.value })
    ], 34));
  }
}), $m = /* @__PURE__ */ H({
  __name: "HFileUploadButton",
  setup(e) {
    const t = S(yr, () => {
    });
    return (n, a) => (D(), I("button", {
      type: "button",
      onClick: a[0] || (a[0] = //@ts-ignore
      (...o) => ge(t) && ge(t)(...o))
    }, [
      F(n.$slots, "default")
    ]));
  }
}), Cm = /* @__PURE__ */ H({
  __name: "HFileUploadFileItem",
  setup(e) {
    const t = S(br, g([])), n = S(Ar, (o) => ""), a = S(_r, (o) => {
    });
    return (o, s) => (D(), I("div", null, [
      (D(!0), I(is, null, ul(ge(t), (r, l) => (D(), I("div", {
        key: l,
        class: "h-file-info"
      }, [
        F(o.$slots, "default", {
          filename: r.name,
          filesize: ge(n)(r.size),
          removeFileFunc: () => ge(a)(l)
        })
      ]))), 128))
    ]));
  }
}), kd = {}, Ld = { class: "h-file-list" };
function Id(e, t) {
  return D(), I("div", Ld, [
    F(e.$slots, "default")
  ]);
}
const wm = /* @__PURE__ */ Z(kd, [["render", Id]]), Dm = /* @__PURE__ */ H({
  __name: "HHtmlRender",
  props: {
    tag: { default: "div" }
  },
  setup(e) {
    var s, r;
    const t = La(), n = t.default ? (r = (s = t.default()[0]) == null ? void 0 : s.children) == null ? void 0 : r.toString() : "", a = {
      attrs: {},
      on: {}
    }, o = a.on;
    return (l, i) => (D(), Ve(Ta(l.tag), xn({ innerHTML: ge(n) }, a.attrs, dl(ge(o))), null, 16, ["innerHTML"]));
  }
}), Er = Symbol("isDraggable"), Sr = Symbol("eventDrag"), $r = Symbol("endEventDrag"), Cr = Symbol("emitValue"), Md = H({
  name: "HKanbanArea",
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    isDraggable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { isDraggable: n, modelValue: a } = On(e), o = (s, r, l, i) => {
      const c = i.closest(".h_kanban_line"), d = Array.prototype.slice.call(
        document.querySelectorAll(".h_kanban_line")
      ), u = d.findIndex(
        (m) => m === c
      );
      let v = null;
      d.forEach((m) => {
        const p = Array.prototype.slice.call(m.querySelectorAll(".h_kanban_card")).findIndex((f) => f === i);
        p >= 0 && (v = p);
      }), typeof v == "number" && (a.value[r].value.splice(l, 1), a.value[u].value.splice(v, 0, s), t("update:modelValue", a.value));
    };
    Y(Er, n), Y(Cr, o);
  }
}), Bd = { class: "h_kanban_board_area" };
function Pd(e, t, n, a, o, s) {
  return D(), I("div", Bd, [
    F(e.$slots, "default")
  ]);
}
const Tm = /* @__PURE__ */ Z(Md, [["render", Pd]]), Hd = H({
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
  setup(e, { emit: t }) {
    const n = S(Er, g(!0)), a = S(Sr, () => {
    }), o = S($r, () => {
    }), s = S(Cr, () => {
    }), r = g(null), l = g(null), i = g(0), c = g(0), d = g(0), u = g(0), v = g(0), m = g(0), p = g(!1), f = g(null), k = () => {
      var A;
      f.value && clearTimeout(f.value), Ce(r.value) && (s(
        e.elValue,
        e.colIndex,
        e.rowIndex,
        r.value
      ), (A = r.value) == null || A.removeEventListener(
        "transitionend",
        k
      ));
    }, h = (A) => {
      if (!(l.value instanceof HTMLElement) || (l.value.style.position = "fixed", l.value.style.zIndex = "100", pl(A) ? A.touches.length === 1 && (v.value = A.touches[0].clientX - d.value, m.value = A.touches[0].clientY - u.value, d.value = A.touches[0].clientX, u.value = A.touches[0].clientY) : ml(A) && (v.value = A.clientX - d.value, m.value = A.clientY - u.value, d.value = A.clientX, u.value = A.clientY), !r.value))
        return;
      const { width: B, height: W } = r.value.getBoundingClientRect();
      l.value.style.width = B + "px", l.value.style.height = W + "px", l.value.style.top = u.value - c.value + "px", l.value.style.left = d.value - i.value + "px", Ce(r.value) && a(
        r.value,
        d.value,
        u.value,
        A.type
      );
    }, y = (A) => {
      var W;
      if (!(l.value instanceof HTMLElement))
        return;
      l.value.style.position = "", l.value.style.zIndex = "", l.value.style.width = "", l.value.style.height = "", l.value.style.top = "", l.value.style.left = "";
      const B = document.querySelector(".clone");
      B && document.body.removeChild(B), p.value = !1, document.removeEventListener("mouseup", y), document.removeEventListener("touchend", y), document.removeEventListener("mousemove", h), document.removeEventListener("touchmove", h), (W = r.value) == null || W.addEventListener(
        "transitionend",
        k
      ), f.value = setTimeout(() => {
        k();
      }, 550), o(A.type);
    }, M = (A) => {
      if (!r.value || (l.value = r.value.cloneNode(!0), !(l.value instanceof HTMLElement)))
        return;
      l.value.classList.add("clone"), l.value.style.position = "fixed", l.value.style.pointerEvents = "none", l.value.style.opacity = "0.5", document.body.appendChild(l.value);
      const B = r.value.getBoundingClientRect();
      p.value = !0, fl(A) ? A.touches.length === 1 && (d.value = A.touches[0].clientX, u.value = A.touches[0].clientY, i.value = d.value - B.left, c.value = u.value - B.top) : hl(A) && (d.value = A.clientX, u.value = A.clientY, i.value = d.value - B.left, c.value = u.value - B.top), document.addEventListener("mouseup", y), document.addEventListener("touchend", y), document.addEventListener("mousemove", h), document.addEventListener("touchmove", h);
    }, T = (A) => {
      let B = A.target;
      for (; Ce(B) && B.tagName !== "BUTTON" && !B.classList.contains("h_kanban_card"); )
        B = B.parentElement;
      Ce(B) && B.tagName === "BUTTON" || Ce(B) && B.tagName === "A" || t("event-click");
    };
    return je(() => {
      if (n.value) {
        if (!r.value)
          return;
        r.value.addEventListener("mousedown", M), r.value.addEventListener("touchstart", M);
      }
    }), Da(() => {
      if (n.value) {
        if (!r.value)
          return;
        r.value.removeEventListener(
          "mousedown",
          M
        ), r.value.removeEventListener(
          "touchstart",
          M
        );
      }
    }), {
      isSelected: p,
      clickKanbanCard: T,
      isDraggable: n,
      dragMouseDown: M,
      kanbanCard: r
    };
  }
});
function Rd(e, t, n, a, o, s) {
  return D(), I("div", {
    ref: "kanbanCard",
    class: ve(["h_kanban_card", [
      e.className,
      {
        is_selected: e.isSelected,
        is_draggable: e.isDraggable
      }
    ]]),
    onClick: t[0] || (t[0] = (...r) => e.clickKanbanCard && e.clickKanbanCard(...r))
  }, [
    F(e.$slots, "default")
  ], 2);
}
const km = /* @__PURE__ */ Z(Hd, [["render", Rd]]), Od = H({
  name: "HKanbanLine",
  setup() {
    const e = g(null), t = g(null), n = g(null), a = g(null), o = g(0), s = g(0), r = g(
      null
    ), l = g(null), i = g(null), c = g([]), d = g({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0
    }), u = g(null), v = g(null), m = g(null), p = () => {
      t.value;
    }, f = () => {
      p();
    };
    je(() => {
      p(), window.addEventListener("resize", f);
    }), Da(() => {
      window.removeEventListener("resize", f);
    });
    const k = (z) => {
      const _ = z.currentTarget;
      Ce(_) && (_.classList.remove("top"), _.classList.remove("bottom")), r.value = null, l.value = null;
    }, h = (z) => {
      const _ = z.currentTarget;
      Ce(_) && (_.style.transition = "", e.value && (e.value.style.position = "", e.value.style.zIndex = "", _.removeEventListener(
        "transitionend",
        h
      )));
    }, y = (z) => {
      var P;
      const _ = z.currentTarget;
      if (Ce(_) && (_.classList.remove("top"), _.classList.remove("bottom")), r.value) {
        if ((P = e.value) == null || P.addEventListener(
          "transitionend",
          h
        ), l.value === "top") {
          if (!Ce(i.value))
            return;
          const C = i.value.querySelector(
            ".h_kanban_line_inner_area"
          );
          if (!C || !e.value || !Ce(r.value))
            return;
          C.insertBefore(
            e.value,
            r.value
          ), e.value.style.marginBottom = -1 * e.value.getBoundingClientRect().height + "px", e.value.style.position = "relative", e.value.style.zIndex = "100", e.value.style.boxShadow = "0 0 12px 0 rgba(0, 0, 0, 1)", requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.value && (e.value.style.transition = "all .5s", e.value.style.boxShadow = "", e.value.style.marginBottom = "");
            });
          });
        } else if (l.value === "bottom") {
          if (!Ce(i.value))
            return;
          const C = i.value.querySelector(
            ".h_kanban_line_inner_area"
          );
          if (!C || !e.value || !Ce(r.value))
            return;
          C.insertBefore(
            e.value,
            r.value.nextElementSibling ? r.value.nextElementSibling : null
          ), e.value.style.marginBottom = -1 * e.value.getBoundingClientRect().height + "px", e.value.style.position = "relative", e.value.style.zIndex = "100", e.value.style.boxShadow = "0 0 12px 0 rgba(0, 0, 0, 1)", requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.value && (e.value.style.transition = "all .5s", e.value.style.boxShadow = "", e.value.style.marginBottom = "");
            });
          });
        }
      }
      r.value = null, l.value = null;
    }, M = (z) => {
      var _;
      i.value = z.currentTarget, Ce(i.value) && (c.value = Array.prototype.slice.call(
        (_ = i.value) == null ? void 0 : _.querySelectorAll(
          ".h_kanban_line_inner_area .h_kanban_card"
        )
      ), c.value.length ? d.value = c.value[c.value.length - 1].getBoundingClientRect() : d.value = null);
    }, T = () => {
      if (d.value) {
        if (d.value.top + d.value.height <= s.value && Ce(i.value) && i.value.getBoundingClientRect().bottom >= s.value) {
          const z = i.value.querySelector(
            ".h_kanban_line_inner_area"
          );
          z && e.value && z.appendChild(e.value);
        }
      } else {
        if (!Ce(i.value))
          return;
        const z = i.value.querySelector(
          ".h_kanban_line_inner_area"
        );
        z && e.value && z.appendChild(e.value);
      }
    }, A = (z) => {
      let _ = z;
      for (; _ && !_.classList.contains("h_kanban_line"); )
        _ = _.parentElement;
      return _;
    }, B = (z) => {
      if (r.value = z.currentTarget, !Ce(r.value))
        return;
      const _ = r.value.getBoundingClientRect();
      _.left <= o.value && o.value <= _.right && _.top <= s.value && s.value <= _.top + _.height / 2 ? (r.value.classList.add("top"), l.value = "top") : r.value.classList.remove("top"), _.left <= o.value && o.value <= _.right && _.bottom >= s.value && s.value >= _.top + _.height / 2 ? (r.value.classList.add("bottom"), l.value = "bottom") : r.value.classList.remove("bottom");
    }, W = (z, _, P, C) => {
      var le, se, de, ue, Ae, N, x, Q, K, L, ne, ee, ae, ie, fe, Ee, ye;
      e.value = z, o.value = _, s.value = P, t.value = A(e.value), n.value = ((le = t.value) == null ? void 0 : le.nextElementSibling) || null, a.value = ((se = t.value) == null ? void 0 : se.previousElementSibling) || null;
      const w = (de = t.value) == null ? void 0 : de.getBoundingClientRect(), j = n.value ? n.value.getBoundingClientRect() : null, q = a.value ? a.value.getBoundingClientRect() : null;
      if (C === "touchmove") {
        if (!w)
          return;
        w.top <= s.value && w.bottom >= s.value && w.left <= o.value && w.right >= o.value || j && j.top <= s.value && j.bottom >= s.value && j.left <= o.value && j.right >= o.value || q && q.top <= s.value && q.bottom >= s.value && q.left <= o.value && q.right >= o.value || (r.value = null, i.value = null);
      }
      w && (w.top <= s.value && w.bottom >= s.value && w.left <= o.value && w.right >= o.value ? ((ue = t.value) == null || ue.classList.add("current"), n.value && n.value.classList.remove("next"), a.value && a.value.classList.remove("prev"), C === "touchmove" && (i.value = t.value, u.value = Array.prototype.slice.call(
        (Ae = t.value) == null ? void 0 : Ae.querySelectorAll(".h_kanban_card")
      ), u.value.forEach((G) => {
        const X = G.getBoundingClientRect();
        X.top <= s.value && s.value <= X.top + X.height / 2 ? (G.classList.add("top"), r.value = G, l.value = "top") : G.classList.remove("top"), X.bottom >= s.value && s.value > X.top + X.height / 2 ? (G.classList.add("bottom"), r.value = G, l.value = "bottom") : G.classList.remove("bottom");
      }), u.value.length ? u.value[u.value.length - 1].getBoundingClientRect().bottom < s.value && (r.value = "append") : r.value = "append")) : ((N = t.value) == null || N.classList.remove("current"), C === "touchmove" && u.value && u.value.forEach((G) => {
        G.classList.remove("top"), G.classList.remove("bottom");
      })), j && (j.top <= s.value && j.bottom >= s.value && j.left <= o.value && j.right >= o.value ? ((x = t.value) == null || x.classList.remove("current"), (Q = n.value) == null || Q.classList.add("next"), a.value && a.value.classList.remove("prev"), C === "touchmove" && (i.value = n.value, v.value = Array.prototype.slice.call(
        (K = n.value) == null ? void 0 : K.querySelectorAll(
          ".h_kanban_card"
        )
      ), v.value.forEach((G) => {
        const X = G.getBoundingClientRect();
        X.top <= s.value && s.value <= X.top + X.height / 2 ? (G.classList.add("top"), r.value = G, l.value = "top") : G.classList.remove("top"), X.bottom >= s.value && s.value > X.top + X.height / 2 ? (G.classList.add("bottom"), r.value = G, l.value = "bottom") : G.classList.remove("bottom");
      }), v.value.length ? v.value[v.value.length - 1].getBoundingClientRect().bottom < s.value && (r.value = "append") : r.value = "append")) : ((L = n.value) == null || L.classList.remove("next"), C === "touchmove" && v.value && v.value.forEach((G) => {
        G.classList.remove("top"), G.classList.remove("bottom");
      }))), q && (q.top <= s.value && q.bottom >= s.value && q.left <= o.value && q.right >= o.value ? ((ne = t.value) == null || ne.classList.remove("current"), n.value && n.value.classList.remove("next"), (ee = a.value) == null || ee.classList.add("prev"), C === "touchmove" && (i.value = a.value, m.value = Array.prototype.slice.call(
        (ae = a.value) == null ? void 0 : ae.querySelectorAll(
          ".h_kanban_card"
        )
      ), m.value.forEach((G) => {
        const X = G.getBoundingClientRect();
        X.top <= s.value && s.value <= X.top + X.height / 2 ? (G.classList.add("top"), r.value = G, l.value = "top") : G.classList.remove("top"), X.bottom >= s.value && s.value > X.top + X.height / 2 ? (G.classList.add("bottom"), r.value = G, l.value = "bottom") : G.classList.remove("bottom");
      }), m.value.length ? m.value[m.value.length - 1].getBoundingClientRect().bottom < s.value && (r.value = "append") : r.value = "append")) : ((ie = a.value) == null || ie.classList.remove("prev"), C === "touchmove" && m.value && m.value.forEach((G) => {
        G.classList.remove("top"), G.classList.remove("bottom");
      }))), (fe = t.value) == null || fe.addEventListener("mouseover", M), n.value && n.value.addEventListener("mouseover", M), a.value && a.value.addEventListener("mouseover", M), (Ee = t.value) == null || Ee.addEventListener("mouseup", T), n.value && n.value.addEventListener("mouseup", T), a.value && a.value.addEventListener("mouseup", T), (ye = t.value) == null || ye.querySelectorAll(".h_kanban_card").forEach((G) => {
        G.addEventListener("mouseout", k), G.addEventListener("mouseup", y), G.addEventListener("mousemove", B);
      }), n.value && n.value.querySelectorAll(".h_kanban_card").forEach((G) => {
        G.addEventListener("mouseout", k), G.addEventListener("mouseup", y), G.addEventListener("mousemove", B);
      }), a.value && a.value.querySelectorAll(".h_kanban_card").forEach((G) => {
        G.addEventListener("mouseout", k), G.addEventListener("mouseup", y), G.addEventListener("mousemove", B);
      }));
    }, te = (z) => {
      var _, P, C;
      if (z === "touchend" && r.value)
        if (r.value !== "append") {
          if (l.value === "top") {
            if (!Ce(i.value))
              return;
            const w = (_ = i.value) == null ? void 0 : _.querySelector(
              ".h_kanban_line_inner_area"
            );
            if (!w || !e.value || !Ce(r.value))
              return;
            w.insertBefore(
              e.value,
              r.value
            );
          } else if (l.value === "bottom") {
            if (!Ce(i.value))
              return;
            const w = (P = i.value) == null ? void 0 : P.querySelector(
              ".h_kanban_line_inner_area"
            );
            if (!w || !e.value || !Ce(r.value))
              return;
            w.insertBefore(
              e.value,
              r.value.nextElementSibling ? r.value.nextElementSibling : null
            );
          }
          if (!Ce(r.value))
            return;
          r.value.classList.remove("top"), r.value.classList.remove("bottom");
        } else {
          if (!Ce(i.value))
            return;
          const w = (C = i.value) == null ? void 0 : C.querySelector(
            ".h_kanban_line_inner_area"
          );
          if (!w || !e.value)
            return;
          w.appendChild(e.value);
        }
      t.value && t.value.classList.remove("current"), n.value && n.value.classList.remove("next"), a.value && a.value.classList.remove("prev"), t.value && t.value.removeEventListener("mouseover", M), n.value && n.value.removeEventListener(
        "mouseover",
        M
      ), a.value && a.value.removeEventListener(
        "mouseover",
        M
      ), t.value && t.value.removeEventListener("mouseup", T), n.value && n.value.removeEventListener(
        "mouseup",
        T
      ), a.value && a.value.removeEventListener(
        "mouseup",
        T
      ), t.value && t.value.querySelectorAll(".h_kanban_card").forEach((w) => {
        w.removeEventListener("mouseout", k), w.removeEventListener("mouseup", y), w.removeEventListener("mousemove", B);
      }), n.value && n.value.querySelectorAll(".h_kanban_card").forEach((w) => {
        w.removeEventListener("mouseout", k), w.removeEventListener("mouseup", y), w.removeEventListener("mousemove", B);
      }), a.value && a.value.querySelectorAll(".h_kanban_card").forEach((w) => {
        w.removeEventListener("mouseout", k), w.removeEventListener("mouseup", y), w.removeEventListener("mousemove", B);
      }), t.value = null, n.value = null, a.value = null;
    };
    return Y(Sr, W), Y($r, te), {
      kanbanLine: t
    };
  }
}), Nd = {
  ref: "kanbanLine",
  class: "h_kanban_line"
};
function xd(e, t, n, a, o, s) {
  return D(), I("div", Nd, [
    F(e.$slots, "default")
  ], 512);
}
const Lm = /* @__PURE__ */ Z(Od, [["render", xd]]), Fd = H({
  name: "HKanbanLineInnerArea"
}), Ud = { class: "h_kanban_line_inner_area" };
function zd(e, t, n, a, o, s) {
  return D(), I("div", Ud, [
    F(e.$slots, "default")
  ]);
}
const Im = /* @__PURE__ */ Z(Fd, [["render", zd]]), Vd = { class: "h-loading" }, Yd = { class: "h_spinner_bg" }, Wd = {
  viewBox: "0 0 50 50",
  class: "h-spinner"
}, Mm = /* @__PURE__ */ H({
  __name: "HLoading",
  props: {
    strokeColor: {
      type: String,
      default: "#4676f0"
    }
  },
  setup(e) {
    return (t, n) => (D(), I("div", Vd, [
      n[1] || (n[1] = oe("div", { class: "h-dimmed" }, null, -1)),
      oe("div", Yd, [
        (D(), I("svg", Wd, [
          n[0] || (n[0] = oe("circle", {
            class: "ring",
            cx: "25",
            cy: "25",
            r: "22.5"
          }, null, -1)),
          oe("circle", {
            class: "line",
            cx: "25",
            cy: "25",
            r: "22.5",
            style: Le({
              stroke: e.strokeColor
            })
          }, null, 4)
        ]))
      ])
    ]));
  }
}), jd = { class: "h-dot-spinner" }, Qd = { class: "spinner_inner" }, Bm = /* @__PURE__ */ H({
  __name: "HThreeDotLoading",
  props: {
    backgroundColor: {
      type: String,
      default: "#333"
    }
  },
  setup(e) {
    return (t, n) => (D(), I("div", jd, [
      oe("div", Qd, [
        oe("div", {
          class: "bounce1 bounce",
          style: Le({ backgroundColor: e.backgroundColor })
        }, null, 4),
        oe("div", {
          class: "bounce2 bounce",
          style: Le({ backgroundColor: e.backgroundColor })
        }, null, 4),
        oe("div", {
          class: "bounce3 bounce",
          style: Le({ backgroundColor: e.backgroundColor })
        }, null, 4)
      ])
    ]));
  }
});
/*!
 * Signature Pad v4.2.0 | https://github.com/szimek/signature_pad
 * (c) 2024 Szymon Nowak | Released under the MIT license
 */
class Hn {
  constructor(t, n, a, o) {
    if (isNaN(t) || isNaN(n))
      throw new Error(`Point is invalid: (${t}, ${n})`);
    this.x = +t, this.y = +n, this.pressure = a || 0, this.time = o || Date.now();
  }
  distanceTo(t) {
    return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2));
  }
  equals(t) {
    return this.x === t.x && this.y === t.y && this.pressure === t.pressure && this.time === t.time;
  }
  velocityFrom(t) {
    return this.time !== t.time ? this.distanceTo(t) / (this.time - t.time) : 0;
  }
}
class Ga {
  static fromPoints(t, n) {
    const a = this.calculateControlPoints(t[0], t[1], t[2]).c2, o = this.calculateControlPoints(t[1], t[2], t[3]).c1;
    return new Ga(t[1], a, o, t[2], n.start, n.end);
  }
  static calculateControlPoints(t, n, a) {
    const o = t.x - n.x, s = t.y - n.y, r = n.x - a.x, l = n.y - a.y, i = { x: (t.x + n.x) / 2, y: (t.y + n.y) / 2 }, c = { x: (n.x + a.x) / 2, y: (n.y + a.y) / 2 }, d = Math.sqrt(o * o + s * s), u = Math.sqrt(r * r + l * l), v = i.x - c.x, m = i.y - c.y, p = u / (d + u), f = { x: c.x + v * p, y: c.y + m * p }, k = n.x - f.x, h = n.y - f.y;
    return {
      c1: new Hn(i.x + k, i.y + h),
      c2: new Hn(c.x + k, c.y + h)
    };
  }
  constructor(t, n, a, o, s, r) {
    this.startPoint = t, this.control2 = n, this.control1 = a, this.endPoint = o, this.startWidth = s, this.endWidth = r;
  }
  length() {
    let n = 0, a, o;
    for (let s = 0; s <= 10; s += 1) {
      const r = s / 10, l = this.point(r, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), i = this.point(r, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (s > 0) {
        const c = l - a, d = i - o;
        n += Math.sqrt(c * c + d * d);
      }
      a = l, o = i;
    }
    return n;
  }
  point(t, n, a, o, s) {
    return n * (1 - t) * (1 - t) * (1 - t) + 3 * a * (1 - t) * (1 - t) * t + 3 * o * (1 - t) * t * t + s * t * t * t;
  }
}
class Gd {
  constructor() {
    try {
      this._et = new EventTarget();
    } catch {
      this._et = document;
    }
  }
  addEventListener(t, n, a) {
    this._et.addEventListener(t, n, a);
  }
  dispatchEvent(t) {
    return this._et.dispatchEvent(t);
  }
  removeEventListener(t, n, a) {
    this._et.removeEventListener(t, n, a);
  }
}
function qd(e, t = 250) {
  let n = 0, a = null, o, s, r;
  const l = () => {
    n = Date.now(), a = null, o = e.apply(s, r), a || (s = null, r = []);
  };
  return function(...c) {
    const d = Date.now(), u = t - (d - n);
    return s = this, r = c, u <= 0 || u > t ? (a && (clearTimeout(a), a = null), n = d, o = e.apply(s, r), a || (s = null, r = [])) : a || (a = window.setTimeout(l, u)), o;
  };
}
class Rn extends Gd {
  constructor(t, n = {}) {
    super(), this.canvas = t, this._drawingStroke = !1, this._isEmpty = !0, this._lastPoints = [], this._data = [], this._lastVelocity = 0, this._lastWidth = 0, this._handleMouseDown = (a) => {
      a.buttons === 1 && this._strokeBegin(a);
    }, this._handleMouseMove = (a) => {
      this._strokeMoveUpdate(a);
    }, this._handleMouseUp = (a) => {
      a.buttons === 1 && this._strokeEnd(a);
    }, this._handleTouchStart = (a) => {
      if (a.cancelable && a.preventDefault(), a.targetTouches.length === 1) {
        const o = a.changedTouches[0];
        this._strokeBegin(o);
      }
    }, this._handleTouchMove = (a) => {
      a.cancelable && a.preventDefault();
      const o = a.targetTouches[0];
      this._strokeMoveUpdate(o);
    }, this._handleTouchEnd = (a) => {
      if (a.target === this.canvas) {
        a.cancelable && a.preventDefault();
        const s = a.changedTouches[0];
        this._strokeEnd(s);
      }
    }, this._handlePointerStart = (a) => {
      a.preventDefault(), this._strokeBegin(a);
    }, this._handlePointerMove = (a) => {
      this._strokeMoveUpdate(a);
    }, this._handlePointerEnd = (a) => {
      this._drawingStroke && (a.preventDefault(), this._strokeEnd(a));
    }, this.velocityFilterWeight = n.velocityFilterWeight || 0.7, this.minWidth = n.minWidth || 0.5, this.maxWidth = n.maxWidth || 2.5, this.throttle = "throttle" in n ? n.throttle : 16, this.minDistance = "minDistance" in n ? n.minDistance : 5, this.dotSize = n.dotSize || 0, this.penColor = n.penColor || "black", this.backgroundColor = n.backgroundColor || "rgba(0,0,0,0)", this.compositeOperation = n.compositeOperation || "source-over", this.canvasContextOptions = "canvasContextOptions" in n ? n.canvasContextOptions : {}, this._strokeMoveUpdate = this.throttle ? qd(Rn.prototype._strokeUpdate, this.throttle) : Rn.prototype._strokeUpdate, this._ctx = t.getContext("2d", this.canvasContextOptions), this.clear(), this.on();
  }
  clear() {
    const { _ctx: t, canvas: n } = this;
    t.fillStyle = this.backgroundColor, t.clearRect(0, 0, n.width, n.height), t.fillRect(0, 0, n.width, n.height), this._data = [], this._reset(this._getPointGroupOptions()), this._isEmpty = !0;
  }
  fromDataURL(t, n = {}) {
    return new Promise((a, o) => {
      const s = new Image(), r = n.ratio || window.devicePixelRatio || 1, l = n.width || this.canvas.width / r, i = n.height || this.canvas.height / r, c = n.xOffset || 0, d = n.yOffset || 0;
      this._reset(this._getPointGroupOptions()), s.onload = () => {
        this._ctx.drawImage(s, c, d, l, i), a();
      }, s.onerror = (u) => {
        o(u);
      }, s.crossOrigin = "anonymous", s.src = t, this._isEmpty = !1;
    });
  }
  toDataURL(t = "image/png", n) {
    switch (t) {
      case "image/svg+xml":
        return typeof n != "object" && (n = void 0), `data:image/svg+xml;base64,${btoa(this.toSVG(n))}`;
      default:
        return typeof n != "number" && (n = void 0), this.canvas.toDataURL(t, n);
    }
  }
  on() {
    this.canvas.style.touchAction = "none", this.canvas.style.msTouchAction = "none", this.canvas.style.userSelect = "none";
    const t = /Macintosh/.test(navigator.userAgent) && "ontouchstart" in document;
    window.PointerEvent && !t ? this._handlePointerEvents() : (this._handleMouseEvents(), "ontouchstart" in window && this._handleTouchEvents());
  }
  off() {
    this.canvas.style.touchAction = "auto", this.canvas.style.msTouchAction = "auto", this.canvas.style.userSelect = "auto", this.canvas.removeEventListener("pointerdown", this._handlePointerStart), this.canvas.removeEventListener("pointermove", this._handlePointerMove), this.canvas.ownerDocument.removeEventListener("pointerup", this._handlePointerEnd), this.canvas.removeEventListener("mousedown", this._handleMouseDown), this.canvas.removeEventListener("mousemove", this._handleMouseMove), this.canvas.ownerDocument.removeEventListener("mouseup", this._handleMouseUp), this.canvas.removeEventListener("touchstart", this._handleTouchStart), this.canvas.removeEventListener("touchmove", this._handleTouchMove), this.canvas.removeEventListener("touchend", this._handleTouchEnd);
  }
  isEmpty() {
    return this._isEmpty;
  }
  fromData(t, { clear: n = !0 } = {}) {
    n && this.clear(), this._fromData(t, this._drawCurve.bind(this), this._drawDot.bind(this)), this._data = this._data.concat(t);
  }
  toData() {
    return this._data;
  }
  _getPointGroupOptions(t) {
    return {
      penColor: t && "penColor" in t ? t.penColor : this.penColor,
      dotSize: t && "dotSize" in t ? t.dotSize : this.dotSize,
      minWidth: t && "minWidth" in t ? t.minWidth : this.minWidth,
      maxWidth: t && "maxWidth" in t ? t.maxWidth : this.maxWidth,
      velocityFilterWeight: t && "velocityFilterWeight" in t ? t.velocityFilterWeight : this.velocityFilterWeight,
      compositeOperation: t && "compositeOperation" in t ? t.compositeOperation : this.compositeOperation
    };
  }
  _strokeBegin(t) {
    if (!this.dispatchEvent(new CustomEvent("beginStroke", { detail: t, cancelable: !0 })))
      return;
    this._drawingStroke = !0;
    const a = this._getPointGroupOptions(), o = Object.assign(Object.assign({}, a), { points: [] });
    this._data.push(o), this._reset(a), this._strokeUpdate(t);
  }
  _strokeUpdate(t) {
    if (!this._drawingStroke)
      return;
    if (this._data.length === 0) {
      this._strokeBegin(t);
      return;
    }
    this.dispatchEvent(new CustomEvent("beforeUpdateStroke", { detail: t }));
    const n = t.clientX, a = t.clientY, o = t.pressure !== void 0 ? t.pressure : t.force !== void 0 ? t.force : 0, s = this._createPoint(n, a, o), r = this._data[this._data.length - 1], l = r.points, i = l.length > 0 && l[l.length - 1], c = i ? s.distanceTo(i) <= this.minDistance : !1, d = this._getPointGroupOptions(r);
    if (!i || !(i && c)) {
      const u = this._addPoint(s, d);
      i ? u && this._drawCurve(u, d) : this._drawDot(s, d), l.push({
        time: s.time,
        x: s.x,
        y: s.y,
        pressure: s.pressure
      });
    }
    this.dispatchEvent(new CustomEvent("afterUpdateStroke", { detail: t }));
  }
  _strokeEnd(t) {
    this._drawingStroke && (this._strokeUpdate(t), this._drawingStroke = !1, this.dispatchEvent(new CustomEvent("endStroke", { detail: t })));
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
  _reset(t) {
    this._lastPoints = [], this._lastVelocity = 0, this._lastWidth = (t.minWidth + t.maxWidth) / 2, this._ctx.fillStyle = t.penColor, this._ctx.globalCompositeOperation = t.compositeOperation;
  }
  _createPoint(t, n, a) {
    const o = this.canvas.getBoundingClientRect();
    return new Hn(t - o.left, n - o.top, a, (/* @__PURE__ */ new Date()).getTime());
  }
  _addPoint(t, n) {
    const { _lastPoints: a } = this;
    if (a.push(t), a.length > 2) {
      a.length === 3 && a.unshift(a[0]);
      const o = this._calculateCurveWidths(a[1], a[2], n), s = Ga.fromPoints(a, o);
      return a.shift(), s;
    }
    return null;
  }
  _calculateCurveWidths(t, n, a) {
    const o = a.velocityFilterWeight * n.velocityFrom(t) + (1 - a.velocityFilterWeight) * this._lastVelocity, s = this._strokeWidth(o, a), r = {
      end: s,
      start: this._lastWidth
    };
    return this._lastVelocity = o, this._lastWidth = s, r;
  }
  _strokeWidth(t, n) {
    return Math.max(n.maxWidth / (t + 1), n.minWidth);
  }
  _drawCurveSegment(t, n, a) {
    const o = this._ctx;
    o.moveTo(t, n), o.arc(t, n, a, 0, 2 * Math.PI, !1), this._isEmpty = !1;
  }
  _drawCurve(t, n) {
    const a = this._ctx, o = t.endWidth - t.startWidth, s = Math.ceil(t.length()) * 2;
    a.beginPath(), a.fillStyle = n.penColor;
    for (let r = 0; r < s; r += 1) {
      const l = r / s, i = l * l, c = i * l, d = 1 - l, u = d * d, v = u * d;
      let m = v * t.startPoint.x;
      m += 3 * u * l * t.control1.x, m += 3 * d * i * t.control2.x, m += c * t.endPoint.x;
      let p = v * t.startPoint.y;
      p += 3 * u * l * t.control1.y, p += 3 * d * i * t.control2.y, p += c * t.endPoint.y;
      const f = Math.min(t.startWidth + c * o, n.maxWidth);
      this._drawCurveSegment(m, p, f);
    }
    a.closePath(), a.fill();
  }
  _drawDot(t, n) {
    const a = this._ctx, o = n.dotSize > 0 ? n.dotSize : (n.minWidth + n.maxWidth) / 2;
    a.beginPath(), this._drawCurveSegment(t.x, t.y, o), a.closePath(), a.fillStyle = n.penColor, a.fill();
  }
  _fromData(t, n, a) {
    for (const o of t) {
      const { points: s } = o, r = this._getPointGroupOptions(o);
      if (s.length > 1)
        for (let l = 0; l < s.length; l += 1) {
          const i = s[l], c = new Hn(i.x, i.y, i.pressure, i.time);
          l === 0 && this._reset(r);
          const d = this._addPoint(c, r);
          d && n(d, r);
        }
      else
        this._reset(r), a(s[0], r);
    }
  }
  toSVG({ includeBackgroundColor: t = !1 } = {}) {
    const n = this._data, a = Math.max(window.devicePixelRatio || 1, 1), o = 0, s = 0, r = this.canvas.width / a, l = this.canvas.height / a, i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (i.setAttribute("xmlns", "http://www.w3.org/2000/svg"), i.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), i.setAttribute("viewBox", `${o} ${s} ${r} ${l}`), i.setAttribute("width", r.toString()), i.setAttribute("height", l.toString()), t && this.backgroundColor) {
      const c = document.createElement("rect");
      c.setAttribute("width", "100%"), c.setAttribute("height", "100%"), c.setAttribute("fill", this.backgroundColor), i.appendChild(c);
    }
    return this._fromData(n, (c, { penColor: d }) => {
      const u = document.createElement("path");
      if (!isNaN(c.control1.x) && !isNaN(c.control1.y) && !isNaN(c.control2.x) && !isNaN(c.control2.y)) {
        const v = `M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;
        u.setAttribute("d", v), u.setAttribute("stroke-width", (c.endWidth * 2.25).toFixed(3)), u.setAttribute("stroke", d), u.setAttribute("fill", "none"), u.setAttribute("stroke-linecap", "round"), i.appendChild(u);
      }
    }, (c, { penColor: d, dotSize: u, minWidth: v, maxWidth: m }) => {
      const p = document.createElement("circle"), f = u > 0 ? u : (v + m) / 2;
      p.setAttribute("r", f.toString()), p.setAttribute("cx", c.x.toString()), p.setAttribute("cy", c.y.toString()), p.setAttribute("fill", d), i.appendChild(p);
    }), i.outerHTML;
  }
}
const Xd = {
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
    disabled(e) {
      var t = this;
      t.sig.off && (e ? t.sig.off() : t.sig.on());
    }
  },
  created() {
    var e = this;
    this.uid = "canvas" + e._uid;
    var t = Object.keys(e.sigOption);
    for (var n of t)
      e.option[n] = e.sigOption[n];
  },
  methods: {
    draw() {
      var e = this, t = document.getElementById(e.uid);
      e.sig = new Rn(t, e.option), e.attachEventListeners();
      function n(a) {
        var o;
        e.isEmpty() || (o = e.save());
        var s = Math.max(window.devicePixelRatio || 1, 1), r = RegExp(/px/);
        a.width = r.test(e.w) ? e.w.replace(/px/g, "") * s : a.offsetWidth * s, a.height = r.test(e.h) ? e.h.replace(/px/g, "") * s : a.offsetHeight * s, a.getContext("2d").scale(s, s), e.clear(), !e.clearOnResize && o !== void 0 && e.fromDataURL(o), Object.keys(e.waterMark).length && e.addWaterMark(e.waterMark);
      }
      window.addEventListener("resize", n(t)), n(t), e.defaultUrl !== "" && e.fromDataURL(e.defaultUrl), e.disabled ? e.sig.off() : e.sig.on();
    },
    clear() {
      var e = this;
      e.sig.clear();
    },
    save(e) {
      var t = this;
      return e ? t.sig.toDataURL(e) : t.sig.toDataURL();
    },
    fromDataURL(e) {
      var t = this;
      t.sig.fromDataURL(e);
    },
    isEmpty() {
      var e = this;
      return e.sig.isEmpty();
    },
    undo() {
      var e = this, t = e.sig.toData();
      t && (t.pop(), e.sig.fromData(t));
    },
    addWaterMark(e) {
      var t = this;
      if (Object.prototype.toString.call(e) != "[object Object]")
        throw new Error("Expected Object, got " + typeof e + ".");
      var n = document.getElementById(t.uid), a = {
        text: e.text || "",
        x: e.x || 20,
        y: e.y || 20,
        sx: e.sx || 40,
        sy: e.sy || 40
      }, o = n.getContext("2d");
      o.font = e.font || "20px sans-serif", o.fillStyle = e.fillStyle || "#333", o.strokeStyle = e.strokeStyle || "#333", e.style == "all" ? (o.fillText(a.text, a.x, a.y), o.strokeText(a.text, a.sx, a.sy)) : e.style == "stroke" ? o.strokeText(a.text, a.sx, a.sy) : o.fillText(a.text, a.x, a.y), t.sig._isEmpty = !1;
    },
    attachEventListeners() {
      var e = this;
      e.sig.addEventListener("beginStroke", (t) => e.$emit("beginStroke", t)), e.sig.addEventListener("endStroke", (t) => e.$emit("endStroke", t)), e.sig.addEventListener("beforeUpdateStroke", (t) => e.$emit("beforeUpdateStroke", t)), e.sig.addEventListener("afterUpdateStroke", (t) => e.$emit("afterUpdateStroke", t));
    }
  },
  mounted() {
    var e = this;
    this.$nextTick().then(() => {
      e.draw();
    });
  }
}, Zd = ["id", "data-uid", "disabled"];
function Kd(e, t, n, a, o, s) {
  return D(), I("div", {
    style: Le({ width: n.w, height: n.h }),
    onTouchmove: t[0] || (t[0] = Bt(() => {
    }, ["prevent"]))
  }, [
    oe("canvas", {
      id: o.uid,
      class: "canvas",
      "data-uid": o.uid,
      disabled: n.disabled
    }, null, 8, Zd)
  ], 36);
}
const Jd = /* @__PURE__ */ Z(Xd, [["render", Kd]]);
var Ie = [];
for (var ra = 0; ra < 256; ++ra)
  Ie.push((ra + 256).toString(16).slice(1));
function ev(e, t = 0) {
  return (Ie[e[t + 0]] + Ie[e[t + 1]] + Ie[e[t + 2]] + Ie[e[t + 3]] + "-" + Ie[e[t + 4]] + Ie[e[t + 5]] + "-" + Ie[e[t + 6]] + Ie[e[t + 7]] + "-" + Ie[e[t + 8]] + Ie[e[t + 9]] + "-" + Ie[e[t + 10]] + Ie[e[t + 11]] + Ie[e[t + 12]] + Ie[e[t + 13]] + Ie[e[t + 14]] + Ie[e[t + 15]]).toLowerCase();
}
var yn, tv = new Uint8Array(16);
function nv() {
  if (!yn && (yn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !yn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return yn(tv);
}
var av = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const ts = {
  randomUUID: av
};
function qa(e, t, n) {
  if (ts.randomUUID && !t && !e)
    return ts.randomUUID();
  e = e || {};
  var a = e.random || (e.rng || nv)();
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, ev(a);
}
function qt() {
  return qa();
}
const wr = Symbol("clear"), Dr = Symbol("undo"), ov = () => {
  const e = g(!0);
  return {
    isLoading: e,
    getBase64ImageDimensions: (n, a) => new Promise((o, s) => {
      if (n === "") {
        e.value = !1;
        return;
      }
      const r = new Image();
      r.onload = (l) => {
        const i = l.target;
        i instanceof HTMLImageElement && (a({
          width: i.naturalWidth,
          height: i.naturalHeight
        }), e.value = !1, o(r));
      }, r.src = n, e.value = !0;
    })
  };
}, ns = "data:image/png;base64,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", sv = H({
  name: "HSignatureArea",
  components: {
    VueSignature: Jd
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
    modelValue: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeHolderImage: {
      type: String,
      default: ns
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = g(null), a = g(null), o = ce(() => e.modelValue), s = g(""), r = g(null), l = g(`${qt()}`), i = g(100), c = ce(() => i.value * e.ratio), d = ce(() => !e.naturalHeight || !e.naturalWidth ? e.sigOption : {
      ...e.sigOption,
      backgroundColor: "transparent"
    }), { getBase64ImageDimensions: u } = ov();
    Be(
      o,
      async (y) => {
        y ? (s.value = "", r.value = await u(
          y,
          (M) => {
          }
        )) : (s.value = e.placeHolderImage, l.value = `${qt()}`);
      },
      { immediate: !0 }
    );
    const v = () => {
      s.value = "";
    }, m = async () => {
      if (a.value)
        if (s.value = "", e.naturalWidth && e.naturalHeight) {
          const y = document.createElement("canvas");
          y.width = e.naturalWidth, y.height = e.naturalHeight;
          const M = y.getContext("2d");
          if (M && r.value) {
            M.drawImage(
              r.value,
              0,
              0,
              y.width,
              y.height
            );
            const A = a.value.$el.children[0].toDataURL(), B = await u(
              A,
              (W) => {
              }
            );
            M.drawImage(
              B,
              0,
              0,
              y.width,
              y.height
            ), t("update:modelValue", y.toDataURL("image/jpeg"));
          }
        } else {
          const y = a.value.save("image/jpeg");
          t("update:modelValue", y);
        }
    }, p = () => {
      var y;
      (y = a.value) == null || y.clear(), s.value = ns, l.value = `${qt()}`, t("update:modelValue", "");
    }, f = () => {
      var y;
      (y = a.value) == null || y.undo(), m();
    }, k = g(null), h = () => {
      k.value && clearTimeout(k.value), k.value = setTimeout(() => {
        l.value = `${qt()}`;
      }, 50);
    };
    return je(() => {
      window.addEventListener("resize", h);
    }), pt(() => {
      window.removeEventListener("resize", h);
    }), Y(wr, p), Y(Dr, f), {
      signatureArea: n,
      signature: a,
      dataUrl: o,
      signatureKey: l,
      save: m,
      width: i,
      height: c,
      sigOptionData: d,
      defaultUrl: s,
      initDefaultUrl: v
    };
  }
}), rv = {
  ref: "signatureArea",
  class: "h_signature_area"
}, lv = ["src"], iv = { class: "inner_area" }, cv = ["src"];
function uv(e, t, n, a, o, s) {
  const r = ot("vue-signature");
  return D(), I("div", rv, [
    oe("img", {
      src: e.dataUrl,
      alt: "",
      class: "img"
    }, null, 8, lv),
    oe("div", iv, [
      (D(), Ve(r, {
        ref: "signature",
        key: e.signatureKey,
        class: "h_signature_pad",
        sigOption: e.sigOptionData,
        disabled: e.disabled,
        w: "100%",
        h: "100%",
        style: Le({
          width: `${e.width}%`,
          paddingTop: `${e.height}%`,
          height: "0"
        }),
        onEndStroke: e.save,
        onBeginStroke: e.initDefaultUrl
      }, null, 8, ["sigOption", "disabled", "style", "onEndStroke", "onBeginStroke"])),
      e.defaultUrl ? (D(), I("img", {
        key: 0,
        src: e.defaultUrl,
        class: "default_img",
        alt: "서명 기본 이미지"
      }, null, 8, cv)) : Me("", !0)
    ]),
    F(e.$slots, "default")
  ], 512);
}
const Pm = /* @__PURE__ */ Z(sv, [["render", uv]]), dv = H({
  name: "HSignatureClearButton",
  setup() {
    return {
      clear: S(wr, () => {
      })
    };
  }
});
function vv(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: "h_btn_delete",
    onClick: t[0] || (t[0] = (...r) => e.clear && e.clear(...r))
  }, [
    F(e.$slots, "default")
  ]);
}
const Hm = /* @__PURE__ */ Z(dv, [["render", vv]]), fv = H({
  name: "HSignatureUndoButton",
  setup() {
    return {
      undo: S(Dr, () => {
      })
    };
  }
});
function pv(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.undo && e.undo(...r))
  }, [
    F(e.$slots, "default")
  ]);
}
const Rm = /* @__PURE__ */ Z(fv, [["render", pv]]), zt = Symbol(
  "clickPaginationButton"
), Tr = Symbol("lastPageIndex"), Zn = Symbol("activePageIndex"), Vt = Symbol(
  "clickPaginationButton"
), Yt = Symbol("classNameValue"), as = (e) => e ? e.substring(1).split("&").reduce((t, n) => {
  const [a, o] = n.split("=");
  return t[decodeURIComponent(a)] = decodeURIComponent(o), t;
}, {}) : {}, mv = (e, t) => Array.from({ length: t - e + 1 }, (n, a) => e + a), hv = H({
  name: "HPaginationArea",
  props: {
    modelValue: {
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
  emits: ["click-pagination-button", "update:modelValue"],
  setup(e, { emit: t }) {
    const { modelValue: n } = On(e);
    Be(n, (u) => {
      a.value = u + 1;
    });
    const a = g(n.value + 1), o = as(window.location.search);
    o[e.queryStringKey] && (a.value = parseInt(o[e.queryStringKey]) + 1);
    const s = ce(() => {
      const u = Math.floor(e.modelValue / e.countPerPage) * e.countPerPage, v = u + e.countPerPage - 1 <= l.value - 1 ? u + e.countPerPage - 1 : l.value - 1;
      return mv(u + 1, v + 1);
    }), r = (u) => {
      const v = u.target;
      if (!(v instanceof Window))
        return;
      const m = as(v.location.search);
      a.value !== parseInt(m[e.queryStringKey]) && (a.value = parseInt(m[e.queryStringKey]));
    };
    window.addEventListener("popstate", r), pt(() => {
      window.removeEventListener("popstate", r);
    });
    const l = ce(
      () => Math.ceil(e.totalCount / e.countPerPage)
    ), i = (u) => {
      a.value !== u && (u < 1 ? a.value = 1 : u > l.value ? a.value = l.value : a.value = u);
    }, c = () => {
      t("click-pagination-button", a.value - 1), t("update:modelValue", a.value - 1);
    }, d = ce(() => e.type);
    return Y(zt, i), Y(Tr, l), Y(Zn, a), Y(Vt, c), Y(Yt, d), {
      lastPageIndex: l,
      activePageNum: a,
      classNameValue: d,
      paginatedItems: s
    };
  }
});
function gv(e, t, n, a, o, s) {
  return D(), I("div", {
    class: ve(["h_pagination_area", e.classNameValue])
  }, [
    F(e.$slots, "default", {
      lastPageIndex: e.lastPageIndex,
      paginatedItems: e.paginatedItems
    })
  ], 2);
}
const Om = /* @__PURE__ */ Z(hv, [["render", gv]]), yv = H({
  name: "HPaginationFirstButton",
  setup() {
    const e = S(zt, () => {
    }), t = S(
      Vt,
      () => {
      }
    ), n = () => {
      e(1), t();
    }, a = S(
      Yt,
      ce(() => "")
    );
    return {
      clickPaginationButton: n,
      classNameValue: a
    };
  }
});
function bv(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve([e.classNameValue, "h_btn_first"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    F(e.$slots, "default", {}, () => [
      t[1] || (t[1] = xt(" << "))
    ])
  ], 2);
}
const Nm = /* @__PURE__ */ Z(yv, [["render", bv]]), Av = H({
  name: "HPaginationLastButton",
  setup() {
    const e = S(zt, () => {
    }), t = S(
      Tr,
      ce(() => 0)
    ), n = S(
      Vt,
      () => {
      }
    ), a = () => {
      e(t.value), n();
    }, o = S(
      Yt,
      ce(() => "")
    );
    return {
      clickPaginationButton: a,
      classNameValue: o
    };
  }
});
function _v(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve([e.classNameValue, "h_btn_last"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    F(e.$slots, "default", {}, () => [
      t[1] || (t[1] = xt(" >> "))
    ])
  ], 2);
}
const xm = /* @__PURE__ */ Z(Av, [["render", _v]]), Ev = H({
  name: "HPaginationNextButton",
  setup() {
    const e = S(zt, () => {
    }), t = S(Zn, g(0)), n = S(
      Vt,
      () => {
      }
    ), a = () => {
      e(t.value + 1), n();
    }, o = S(
      Yt,
      ce(() => "")
    );
    return {
      clickPaginationButton: a,
      classNameValue: o
    };
  }
});
function Sv(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve([e.classNameValue, "h_btn_next"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    F(e.$slots, "default", {}, () => [
      t[1] || (t[1] = xt(" > "))
    ])
  ], 2);
}
const Fm = /* @__PURE__ */ Z(Ev, [["render", Sv]]), $v = H({
  name: "HPaginationNumberButton",
  props: {
    pageIndex: {
      type: Number,
      required: !0
    }
  },
  emits: ["click-pagination-button"],
  setup(e) {
    const t = S(zt, () => {
    }), n = S(Zn, g(0)), a = ce(
      () => e.pageIndex === n.value
    ), o = S(
      Vt,
      () => {
      }
    ), s = () => {
      t(e.pageIndex), o();
    }, r = S(
      Yt,
      ce(() => "")
    );
    return {
      clickPaginationButton: s,
      isActive: a,
      classNameValue: r
    };
  }
});
function Cv(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve([[{ is_active: e.isActive }, e.classNameValue], "h_btn_num"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    F(e.$slots, "default", { isActive: e.isActive })
  ], 2);
}
const Um = /* @__PURE__ */ Z($v, [["render", Cv]]), wv = H({
  name: "HPaginationPrevButton",
  emits: ["click-pagination-button"],
  setup() {
    const e = S(zt, () => {
    }), t = S(Zn, g(0)), n = S(
      Vt,
      () => {
      }
    ), a = () => {
      e(t.value - 1), n();
    }, o = S(
      Yt,
      ce(() => "")
    );
    return {
      clickPaginationButton: a,
      classNameValue: o
    };
  }
});
function Dv(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve([e.classNameValue, "h_btn_prev"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    F(e.$slots, "default", {}, () => [
      t[1] || (t[1] = xt(" < "))
    ])
  ], 2);
}
const zm = /* @__PURE__ */ Z(wv, [["render", Dv]]), Tv = Symbol("pageHeaderSpace"), kv = Symbol("pageFooterSpace"), Lv = H({
  name: "HPrintHtmlBox",
  setup() {
    const e = g(null), t = g(null);
    Y(Tv, e), Y(kv, t);
  }
}), Iv = { id: "h-printable" };
function Mv(e, t, n, a, o, s) {
  return D(), I("div", Iv, [
    F(e.$slots, "default")
  ]);
}
const Vm = /* @__PURE__ */ Z(Lv, [["render", Mv]]), Bv = H({
  name: "HPrintHtmlButton",
  setup() {
    return {
      clickPrintButton: () => {
        window.print();
      }
    };
  }
});
function Pv(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.clickPrintButton && e.clickPrintButton(...r))
  }, [
    F(e.$slots, "default")
  ]);
}
const Ym = /* @__PURE__ */ Z(Bv, [["render", Pv]]), kr = Symbol("selectedValue"), Lr = Symbol(
  "clickedDatePickerInput"
), Xa = Symbol("setSelectedDatePickerValue"), Za = Symbol("setNowMonth"), Ka = Symbol(
  "setYearForYearCalendar"
), Ja = Symbol(
  "setYearForMonthCalendar"
), eo = Symbol("yearsArrLength"), Ir = Symbol(
  "setIsActiveMonthCalendar"
), to = Symbol(
  "setIsActiveYearCalendar"
), Mr = Symbol(
  "setNowMonthByMonthCalendar"
), Br = Symbol(
  "setNowYearByYearCalendar"
), Pr = Symbol("calendarInput"), Hr = Symbol("calendarInputArea"), Kn = Symbol("calendarPosition"), Rr = Symbol("calendarArea"), Or = Symbol("calendarMonthArea"), Nr = Symbol("calendarYearArea"), ke = Symbol("calendarTypes"), xr = Symbol(
  "focusInDatePickerInput"
), Fr = Symbol(
  "focusOutDatePickerInput"
), Ur = Symbol("isDisabled"), no = Symbol("setStartDate"), ao = Symbol("setEndDate"), zr = Symbol("selectedRange"), Vr = Symbol("rangeType"), Hv = H({
  name: "HSingleDatePickerCalendar",
  setup() {
    return {
      calendarType: S(ke)
    };
  }
}), Rv = { class: "h_calendar_table" }, Ov = { class: "calendar_head" }, Nv = { class: "calendar_body" };
function xv(e, t, n, a, o, s) {
  return D(), I("div", {
    class: ve(["h_calendar", e.calendarType])
  }, [
    oe("table", Rv, [
      t[0] || (t[0] = oe("caption", null, [
        oe("span", { class: "blind" }, "Dates")
      ], -1)),
      oe("thead", Ov, [
        F(e.$slots, "table_head")
      ]),
      oe("tbody", Nv, [
        F(e.$slots, "table_body")
      ])
    ])
  ], 2);
}
const Wm = /* @__PURE__ */ Z(Hv, [["render", xv]]);
var Yr = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.TYPE1 = "type1", e))(Yr || {}), an = /* @__PURE__ */ ((e) => (e.START_DATE = "startDate", e.END_DATE = "endDate", e))(an || {});
const Fv = H({
  name: "HSingleDatePickerCalendarDateButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = S(ke), n = S(
      Xa,
      () => {
      }
    ), a = S(no, () => {
    }), o = S(ao, () => {
    }), s = S(
      Vr,
      ce(() => "")
    );
    return {
      clickedCalendarDateButton: () => {
        if (n(e.value), typeof e.value == "string")
          switch (s.value) {
            case an.START_DATE:
              a(e.value);
              break;
            case an.END_DATE:
              o(e.value);
              break;
          }
      },
      calendarType: t
    };
  }
});
function Uv(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_calendar_common", [e.calendarType]]),
    onClick: t[0] || (t[0] = (...r) => e.clickedCalendarDateButton && e.clickedCalendarDateButton(...r))
  }, [
    F(e.$slots, "default")
  ], 2);
}
const jm = /* @__PURE__ */ Z(Fv, [["render", Uv]]), oo = (e, t, n, a) => t + n > a ? {
  top: "auto",
  bottom: `${a - e}px`,
  marginBottom: "-1px"
} : {
  top: `${t}px`,
  bottom: "auto",
  marginTop: "-1px"
}, so = (e, t, n, a, o) => t + n - o > a ? {
  left: "auto",
  right: `${a - t}px`
} : {
  left: `${e}px`,
  right: "auto"
};
function Ue(e) {
  const [t, n, a] = e.split(".").map((s) => parseInt(s, 10)), o = new Date(t, n - 1, a);
  return o && o.getFullYear() === t && o.getMonth() === n - 1 && o.getDate() === a;
}
function Lt(e = 0) {
  const t = /* @__PURE__ */ new Date();
  t.setDate(t.getDate() + e);
  const n = t.getFullYear(), a = String(t.getMonth() + 1).padStart(2, "0"), o = String(t.getDate()).padStart(2, "0");
  return `${n}.${a}.${o}`;
}
const zv = H({
  name: "HSingleDatePickerCalendarArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = S(ke), t = S(Kn), n = S(Rr), a = ce(() => {
      if (!t || !Fn(t))
        return {
          position: "fixed"
        };
      const {
        bottom: o,
        left: s,
        right: r,
        top: l,
        clientWidth: i,
        clientHeight: c,
        minusWidth: d
      } = t.value;
      if (!((n == null ? void 0 : n.value) instanceof HTMLElement))
        return {};
      const { height: u, width: v } = n.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...oo(l, o, u, c),
        ...so(s, r, v, i, d)
      };
    });
    return {
      calendarArea: n,
      calendarStyle: a,
      calendarType: e
    };
  }
});
function Vv(e, t, n, a, o, s) {
  return e.isActive ? (D(), I("div", {
    key: 0,
    ref: "calendarArea",
    class: ve(["h_calendar_area", e.calendarType]),
    style: Le(e.calendarStyle)
  }, [
    F(e.$slots, "default")
  ], 6)) : Me("", !0);
}
const Qm = /* @__PURE__ */ Z(zv, [["render", Vv]]), Yv = H({
  name: "HSingleDatePickerCalendarMonthArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = S(ke), t = S(Kn), n = S(Or), a = ce(() => {
      if (!t || !Fn(t))
        return {
          position: "fixed"
        };
      const {
        bottom: o,
        left: s,
        right: r,
        top: l,
        clientWidth: i,
        clientHeight: c,
        minusWidth: d
      } = t.value;
      if (!((n == null ? void 0 : n.value) instanceof HTMLElement))
        return {};
      const { height: u, width: v } = n.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...oo(l, o, u, c),
        ...so(s, r, v, i, d)
      };
    });
    return {
      calendarMonthArea: n,
      calendarStyle: a,
      calendarType: e
    };
  }
});
function Wv(e, t, n, a, o, s) {
  return e.isActive ? (D(), I("div", {
    key: 0,
    ref: "calendarMonthArea",
    class: ve(["h_calendar_month_area", e.calendarType]),
    style: Le(e.calendarStyle)
  }, [
    F(e.$slots, "default")
  ], 6)) : Me("", !0);
}
const Gm = /* @__PURE__ */ Z(Yv, [["render", Wv]]), he = (e) => e.replace(/\./g, "-"), jv = H({
  name: "HSingleDatePickerArea",
  props: {
    modelValue: {
      type: String,
      // 2023.10.10
      required: !1,
      default: () => Lt()
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
      default: Yr.DEFAULT
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
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    var X, Te;
    const n = S(
      zr,
      ce(() => [])
    ), a = (R) => {
      if (n.value.length === 0)
        return !1;
      const V = he(R);
      return new Date(he(n.value[0])) <= new Date(V) && new Date(V) <= new Date(he(n.value[1]));
    }, o = (R) => {
      if (n.value.length === 0)
        return !1;
      const [V, U] = n.value[0].split("."), [J, E] = n.value[1].split("."), b = `${V}.${U}`, $ = `${J}.${E}`, O = he(R);
      return new Date(he(b)) <= new Date(O) && new Date(O) <= new Date(he($));
    }, s = (R) => {
      if (n.value.length === 0)
        return !1;
      const [V] = n.value[0].split("."), [U] = n.value[1].split("."), J = `${V}`, E = `${U}`, b = he(R);
      return new Date(he(J)) <= new Date(b) && new Date(b) <= new Date(he(E));
    }, r = (R) => {
      const V = e.disabledDates.includes(R), U = e.disabledDatesRange.some((J) => {
        const E = he(R), [b, $] = J.split("~");
        if (b.length === 0 && $.length > 0)
          return new Date(E) < new Date(he($));
        if (b.length > 0 && $.length === 0)
          return new Date(he(b)) < new Date(E);
        if (b.length > 0 && $.length > 0)
          return new Date(he(b)) < new Date(E) && new Date(E) < new Date(he($));
      });
      return V || U;
    }, l = (R) => e.disabledDatesRange.some((V) => {
      const [U, J] = V.split("~");
      if (U.length === 0 && J.length > 0)
        return new Date(he(R)) < new Date(he(`${J.split(".")[0]}.${J.split(".")[1]}`));
      if (U.length > 0 && J.length === 0)
        return new Date(he(`${U.split(".")[0]}.${U.split(".")[1]}`)) < new Date(he(R));
      if (U.length > 0 && J.length > 0)
        return new Date(he(`${U.split(".")[0]}.${U.split(".")[1]}`)) < new Date(he(R)) && new Date(he(R)) < new Date(he(`${J.split(".")[0]}.${J.split(".")[1]}`));
    }), i = (R) => e.disabledDatesRange.some((V) => {
      const [U, J] = V.split("~");
      if (U.length === 0 && J.length > 0)
        return new Date(he(R)).getFullYear() < new Date(he(`${J.split(".")[0]}`)).getFullYear();
      if (U.length > 0 && J.length === 0)
        return new Date(he(`${U.split(".")[0]}`)).getFullYear() < new Date(he(R)).getFullYear();
      if (U.length > 0 && J.length > 0)
        return new Date(he(`${U.split(".")[0]}`)).getFullYear() < new Date(he(R)).getFullYear() && new Date(he(R)).getFullYear() < new Date(he(`${J.split(".")[0]}`)).getFullYear();
    }), c = g({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      minusWidth: 0,
      clientWidth: 0,
      clientHeight: 0
    }), d = g(null), u = g(null), v = (R) => {
      if (!d.value)
        return;
      const { bottom: V, left: U, right: J, top: E, width: b } = d.value.getBoundingClientRect();
      c.value = {
        ...c.value,
        bottom: V,
        left: U,
        right: J,
        top: E,
        minusWidth: b
      };
    }, m = (R) => {
      c.value = {
        ...c.value,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, p = (R) => {
      const V = R.target;
      if (!(V instanceof Element))
        return;
      const U = V.closest(".inp_datepicker");
      if (U) {
        U !== u.value && (se.value = !1, j.value = !1, q.value = !1, t("blur"));
        return;
      }
      V.closest(".h_calendar_area") || V.closest(".h_calendar_month_area") || V.closest(".h_calendar_year_area") || (se.value = !1, j.value = !1, q.value = !1, t("blur"));
    }, f = g("");
    e.modelValue && (f.value = e.modelValue);
    const k = () => {
      u.value && (u.value.addEventListener(
        "keyup",
        B
      ), u.value.addEventListener(
        "blur",
        B
      ));
    }, h = () => {
      u.value && (u.value.removeEventListener(
        "keyup",
        B
      ), u.value.removeEventListener(
        "blur",
        B
      ));
    }, y = ce(() => e.rangeType), M = S(no, () => {
    }), T = S(ao, () => {
    }), A = (R) => {
      switch (y.value) {
        case an.START_DATE:
          M(R);
          break;
        case an.END_DATE:
          T(R);
          break;
      }
    }, B = async (R) => {
      if (R instanceof KeyboardEvent && R.key !== "Enter")
        return;
      const V = R.target;
      if (!(V instanceof HTMLInputElement))
        return;
      const U = V.value, J = (/* @__PURE__ */ new Date()).getFullYear() % 100;
      switch (U.length) {
        case 4:
          await (async () => {
            const E = U.toString();
            let b = parseInt(E.slice(0, 2), 10);
            b > J ? b += 1900 : b += 2e3;
            const $ = E.slice(2, 3).padStart(2, "0"), O = E.slice(3).padStart(2, "0");
            if (!Ue(`${b}.${$}.${O}`) || r(`${b}.${$}.${O}`)) {
              const _e = f.value;
              f.value = "", await me(), f.value = _e, await me(), A(_e);
              return;
            }
            W.value = b, te.value = Number($), f.value = "", await me(), f.value = `${b}.${$}.${O}`, await me(), A(`${b}.${$}.${O}`);
          })();
          break;
        case 5:
          await (async () => {
            const E = U.replace(/\./g, ""), b = J >= parseInt(E.slice(0, 2)) ? 2e3 + parseInt(E.slice(0, 2)) : 1900 + parseInt(E.slice(0, 2));
            let $ = "", O = "";
            if (E.length === 5 ? ($ = E.slice(2, 3).toString().padStart(2, "0"), O = E.slice(3)) : E.length === 4 && ($ = "0" + E.charAt(2), O = "0" + E.charAt(3)), !Ue(`${b}.${$}.${O}`) || r(`${b}.${$}.${O}`)) {
              const _e = f.value;
              f.value = "", await me(), f.value = _e, await me(), A(_e);
              return;
            }
            W.value = Number(b), te.value = Number($), f.value = "", await me(), f.value = `${b}.${$}.${O}`, await me(), A(`${b}.${$}.${O}`);
          })();
          break;
        case 6:
          await (async () => {
            let E = "", b = "", $ = "";
            if (U.includes(".")) {
              const O = U.replace(/\./g, "");
              E = J >= parseInt(O.slice(0, 2)) ? (2e3 + parseInt(O.slice(0, 2))).toString() : (1900 + parseInt(O.slice(0, 2))).toString(), b = O.slice(2, 3).toString().padStart(2, "0"), $ = O.slice(3).toString().padStart(2, "0");
            } else
              E = U.slice(0, 2), b = U.slice(2, 4).toString().padStart(2, "0"), $ = U.slice(4, 6).toString().padStart(2, "0"), Ue(`${E}.${b}.${$}`) || (E = `${E}${b}`, b = $.toString().split("")[0].padStart(2, "0"), $ = $.toString().split("")[1].padStart(2, "0"));
            if (!Ue(`${E}.${b}.${$}`) || r(`${E}.${b}.${$}`)) {
              const O = f.value;
              f.value = "", await me(), f.value = O, await me(), A(O);
              return;
            }
            W.value = Number(E), te.value = Number(b), f.value = "", await me(), f.value = `${E}.${b}.${$}`, await me(), A(`${E}.${b}.${$}`);
          })();
          break;
        case 7:
          await (async () => {
            let E = "", b = "", $ = "";
            if (U.includes(".")) {
              const O = U.replace(/\./g, "");
              E = J >= parseInt(O.slice(0, 2)) ? (2e3 + parseInt(O.slice(0, 2))).toString() : (1900 + parseInt(O.slice(0, 2))).toString(), b = O.slice(2, 4).padStart(2, "0"), $ = O.slice(4, 6).padStart(2, "0"), Ue(`${E}.${b}.${$}`) || (E = `${E.slice(2)}${b}`, b = `${$.split("")[0].padStart(2, "0")}`, $ = `${$.split("")[1].padStart(2, "0")}`);
            } else
              E = U.slice(0, 4), b = U.slice(4, 5).toString().padStart(2, "0"), $ = U.slice(5).toString().padStart(2, "0");
            if (!Ue(`${E}.${b}.${$}`) || r(`${E}.${b}.${$}`)) {
              const O = f.value;
              f.value = "", await me(), f.value = O, await me(), A(O);
              return;
            }
            W.value = Number(E), te.value = Number(b), f.value = "", await me(), f.value = `${E}.${b}.${$}`, await me(), A(`${E}.${b}.${$}`);
          })();
          break;
        case 8:
          await (async () => {
            let E = "", b = "", $ = "";
            if (U.includes(".")) {
              const O = U.replace(/\./g, "");
              O.length === 6 ? (E = J >= parseInt(O.slice(0, 2)) ? (2e3 + parseInt(
                O.slice(0, 2)
              )).toString() : (1900 + parseInt(
                O.slice(0, 2)
              )).toString(), b = O.slice(2, 4).padStart(2, "0"), $ = O.slice(4, 6).padStart(2, "0"), Ue(`${E}.${b}.${$}`) || (E = `${E.slice(2)}${b}`, b = `${$.split("")[0].padStart(2, "0")}`, $ = `${$.split("")[1].padStart(2, "0")}`)) : (E = O.slice(0, 4), b = O.slice(4, 5).padStart(2, "0"), $ = O.slice(5).padStart(2, "0"), Ue(`${E}.${b}.${$}`) || (b = $.split("")[0].padStart(2, "0"), $ = $.split("")[1].padStart(2, "0")));
            } else
              E = U.slice(0, 4), b = U.slice(4, 6), $ = U.slice(6, 8);
            if (!Ue(`${E}.${b}.${$}`) || r(`${E}.${b}.${$}`)) {
              const O = f.value;
              f.value = "", await me(), f.value = O, await me(), A(O);
              return;
            }
            W.value = Number(E), te.value = Number(b), f.value = "", await me(), f.value = `${E}.${b}.${$}`, await me(), A(`${E}.${b}.${$}`);
          })();
          break;
        case 9:
          await (async () => {
            let E = "", b = "", $ = "";
            if (U.includes(".")) {
              const O = U.replace(/\./g, "");
              if (E = O.slice(0, 4), b = O.slice(4, 5).padStart(2, "0"), $ = O.slice(5).padStart(2, "0"), !Ue(`${E}.${b}.${$}`)) {
                const [_e, ...He] = $.split("");
                b = _e.padStart(2, "0"), $ = He.join("").padStart(2, "0");
              }
            }
            if (!Ue(`${E}.${b}.${$}`) || r(`${E}.${b}.${$}`)) {
              const O = f.value;
              f.value = "", await me(), f.value = O, await me(), A(O);
              return;
            }
            W.value = Number(E), te.value = Number(b), f.value = "", await me(), f.value = `${E}.${b}.${$}`, await me(), A(`${E}.${b}.${$}`);
          })();
          break;
        case 10:
        default:
          await (async () => {
            if (!Ue(U) || r(U)) {
              const O = f.value;
              f.value = "", await me(), f.value = O, await me(), A(O);
              return;
            }
            const [E, b, $] = U.split(".");
            W.value = Number(E), te.value = Number(b), f.value = "", await me(), f.value = `${E}.${b}.${$}`, await me(), A(`${E}.${b}.${$}`);
          })();
          break;
      }
    }, W = g(
      Number((X = f.value) == null ? void 0 : X.split(".")[0]) || (/* @__PURE__ */ new Date()).getFullYear()
    ), te = g(
      Number((Te = f.value) == null ? void 0 : Te.split(".")[1]) || (/* @__PURE__ */ new Date()).getMonth() + 1
    ), z = (R) => {
      const V = te.value + R;
      V > 12 ? (te.value = 1, W.value += 1) : V < 1 ? (te.value = 12, W.value -= 1) : te.value = V;
    }, _ = g(W.value), P = (R) => {
      _.value += R;
    }, C = g(W.value), w = (R) => {
      x.value += R, Q.value += R;
    };
    Be(W, (R, V) => {
      _.value = R, C.value = R;
    });
    const j = g(!1);
    je(() => {
      window.addEventListener("click", p), window.addEventListener("scroll", v), window.addEventListener("resize", m), Array.isArray(e.scrollEventRefs) && e.scrollEventRefs.forEach((R) => {
        const V = document.querySelector(R);
        V instanceof HTMLElement && V.addEventListener("scroll", v);
      });
    }), pt(() => {
      window.removeEventListener("click", p), window.removeEventListener("scroll", v), window.removeEventListener("resize", m), Array.isArray(e.scrollEventRefs) && e.scrollEventRefs.forEach((R) => {
        const V = document.querySelector(R);
        V instanceof HTMLElement && V.removeEventListener(
          "scroll",
          v
        );
      });
    });
    const q = g(!1), le = () => {
      q.value = !0, se.value = !1, j.value = !1;
    }, se = g(!1), de = () => {
      se.value = !0, j.value = !1, q.value = !1;
    }, ue = () => {
      if (j.value || q.value || se.value)
        switch (!0) {
          case j.value:
            j.value = !0, q.value = !1, se.value = !1;
            break;
          case q.value:
            j.value = !1, q.value = !0, se.value = !1;
            break;
          case se.value:
            j.value = !1, q.value = !1, se.value = !0;
            break;
        }
      else
        j.value = !0, se.value = !1, q.value = !1;
      if (!d.value)
        return;
      const { bottom: R, left: V, right: U, top: J, width: E } = d.value.getBoundingClientRect();
      c.value = {
        bottom: R,
        left: V,
        right: U,
        top: J,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight,
        minusWidth: E
      };
    }, Ae = ce(() => {
      const [R, V] = Lt().split("."), J = Array.from({ length: 12 }, (b, $) => $ + 1).map((b) => {
        var $, O, _e, He;
        return {
          year: String(_.value),
          month: String(b),
          isActive: W.value === _.value && te.value === b,
          inRange: o(
            `${String(_.value)}.${String(
              b
            ).padStart(2, "0")}`
          ),
          isDisabled: l(
            `${String(_.value)}.${String(
              b
            ).padStart(2, "0")}`
          ),
          isCurrentMonth: _.value === Number(R) && b === Number(V),
          isStartMonth: Number(($ = n.value[0]) == null ? void 0 : $.split(".")[0]) === _.value && Number((O = n.value[0]) == null ? void 0 : O.split(".")[1]) === b,
          isEndMonth: Number((_e = n.value[1]) == null ? void 0 : _e.split(".")[0]) === _.value && Number((He = n.value[1]) == null ? void 0 : He.split(".")[1]) === b
        };
      }), E = [];
      for (let b = 0; b < J.length; b += e.monthLength)
        E.push(J.slice(b, b + e.monthLength));
      return E;
    }), N = g(e.yearBeforeAfterLength * 2 + 1), x = g(
      C.value - e.yearBeforeAfterLength
    ), Q = g(
      C.value + e.yearBeforeAfterLength
    ), K = ce(() => {
      const [R] = Lt().split("."), V = [];
      for (let E = x.value; E <= Q.value; E++)
        V.push(E);
      const U = V.map((E) => {
        var b, $;
        return {
          year: String(E),
          isActive: W.value === E,
          inRange: s(String(E)),
          // Todo
          isDisabled: i(String(E)),
          isCurrentYear: E === Number(R),
          isStartYear: Number((b = n.value[0]) == null ? void 0 : b.split(".")[0]) === E,
          isEndYear: Number(($ = n.value[1]) == null ? void 0 : $.split(".")[0]) === E
        };
      }), J = [];
      for (let E = 0; E < U.length; E += e.yearLength)
        J.push(U.slice(E, E + e.yearLength));
      return J;
    }), L = (R, V) => {
      var gt, Qe, et, $t, Ct, wt, Dt;
      const [U, J, E] = Lt().split("."), [b, $, O] = ((gt = f.value) == null ? void 0 : gt.split(".")) || [null, null, null], _e = Number(b) === R && Number($) === V, He = new Date(R, V, 0).getDate(), ht = [];
      let lt = Array(7).fill(null);
      for (let De = 1; De <= He; De++) {
        const it = new Date(R, V - 1, De).getDay();
        lt[it] = {
          year: String(R),
          month: String(V).padStart(2, "0"),
          date: String(De),
          isActive: _e && Number(O) === De,
          inRange: a(
            `${String(R)}.${String(V).padStart(
              2,
              "0"
            )}.${String(De).padStart(2, "0")}`
          ),
          isDisabled: r(
            `${String(R)}.${String(V).padStart(
              2,
              "0"
            )}.${String(De).padStart(2, "0")}`
          ),
          isCurrentDate: Number(U) === R && Number(J) === V && Number(E) === De,
          isStartDate: Number((Qe = n.value[0]) == null ? void 0 : Qe.split(".")[0]) === R && Number((et = n.value[0]) == null ? void 0 : et.split(".")[1]) === V && Number(($t = n.value[0]) == null ? void 0 : $t.split(".")[2]) === De,
          isEndDate: Number((Ct = n.value[1]) == null ? void 0 : Ct.split(".")[0]) === R && Number((wt = n.value[1]) == null ? void 0 : wt.split(".")[1]) === V && Number((Dt = n.value[1]) == null ? void 0 : Dt.split(".")[2]) === De
        }, (it === 6 || De === He) && (ht.push(lt), lt = Array(7).fill(null));
      }
      return ht;
    }, ne = ce(() => L(W.value, te.value)), ee = (R) => {
      f.value = R || "", j.value = !1, q.value = !1, se.value = !1, t("update:modelValue", f.value);
    }, ae = (R) => {
      const [V, U] = R.split(".");
      W.value = Number(V), te.value = Number(U), q.value = !1, se.value = !1, j.value = !0;
    }, ie = (R) => {
      W.value = Number(R), se.value = !1, q.value = !0, j.value = !1;
    }, fe = g(null), Ee = g(null), ye = g(null), G = ce(() => e.isDisabled);
    return Y(kr, f), Y(Lr, ue), Y(Xa, ee), Y(Za, z), Y(Ka, w), Y(Ja, P), Y(eo, N), Y(to, de), Y(Ir, le), Y(Mr, ae), Y(Br, ie), Y(Pr, u), Y(Hr, d), Y(Kn, c), Y(Rr, fe), Y(Or, Ee), Y(Nr, ye), Y(ke, e.type), Y(xr, k), Y(Fr, h), Y(Ur, G), Y(Vr, y), {
      isActiveCalendar: j,
      monthDates: ne,
      nowYear: W,
      nowMonth: te,
      months: Ae,
      years: K,
      startYear: x,
      endYear: Q,
      isActiveMonthCalendar: q,
      isActiveYearCalendar: se,
      yearForYearCalendar: C,
      yearForMonthCalendar: _,
      // ...
      selectedDatePickerValue: f
    };
  }
});
function Qv(e, t, n, a, o, s) {
  return D(), I("div", {
    class: ve(["h_single_datepicker_area", e.type])
  }, [
    F(e.$slots, "default", {
      isActiveCalendar: e.isActiveCalendar,
      isActiveMonthCalendar: e.isActiveMonthCalendar,
      isActiveYearCalendar: e.isActiveYearCalendar,
      dayFormat: e.dayFormat,
      monthDates: e.monthDates,
      nowYear: e.nowYear,
      nowMonth: e.nowMonth,
      months: e.months,
      years: e.years,
      startYear: e.startYear,
      endYear: e.endYear,
      yearForYearCalendar: e.yearForYearCalendar,
      yearForMonthCalendar: e.yearForMonthCalendar
    })
  ], 2);
}
const qm = /* @__PURE__ */ Z(jv, [["render", Qv]]), Gv = H({
  name: "HSingleDatePickerCalendarMonth",
  setup() {
    return {
      calendarType: S(ke)
    };
  }
}), qv = { class: "h_calendar_month_table" };
function Xv(e, t, n, a, o, s) {
  return D(), I("div", {
    class: ve(["h_calendar_month", e.calendarType])
  }, [
    oe("table", qv, [
      t[0] || (t[0] = oe("caption", null, [
        oe("span", { class: "blind" }, "Months")
      ], -1)),
      oe("thead", null, [
        F(e.$slots, "table_head")
      ]),
      oe("tbody", null, [
        F(e.$slots, "table_body")
      ])
    ])
  ], 2);
}
const Xm = /* @__PURE__ */ Z(Gv, [["render", Xv]]), Zv = H({
  name: "HSingleDatePickerMonthButton",
  setup() {
    const e = S(ke);
    return {
      setIsActiveMonthCalendar: S(
        Ir,
        () => {
        }
      ),
      calendarType: e
    };
  }
});
function Kv(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_month", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.setIsActiveMonthCalendar && e.setIsActiveMonthCalendar(...r))
  }, [
    F(e.$slots, "default")
  ], 2);
}
const Zm = /* @__PURE__ */ Z(Zv, [["render", Kv]]), Jv = H({
  name: "HSingleDatePickerCalendarMonthButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = S(ke), n = S(
      Mr,
      (o) => {
      }
    );
    return {
      clickedNowMonthButton: () => {
        n(e.value);
      },
      calendarType: t
    };
  }
});
function ef(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_calendar_common", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.clickedNowMonthButton && e.clickedNowMonthButton(...r))
  }, [
    F(e.$slots, "default")
  ], 2);
}
const Km = /* @__PURE__ */ Z(Jv, [["render", ef]]), tf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdSxCQMhFABQFQS73Ai3QWa4USytQkbIBukUG0dJRsgIN4KlWEjUIuRyen4t8kH8IE8E//8I/SOMMZPW+pJy3IO898+YnuO6guAPWkMISxOWkBBixSMoneERVIUtVIQQtINQtIE96AN7UYYjKAVxzk1xP+VbMLaMMYsAkZ8qpZwJIY+YzhG/KKUL59w24QjefEcP3hUAFBdLDoKrRd7Ch211hJuNXMOg0VHC4GH1jWNZ3lBPJKyUuqf8DUy8w9O6XZwQAAAAAElFTkSuQmCC", nf = H({
  name: "IconArrowLeft",
  setup() {
    return {
      ArrowLeftImage: tf
    };
  }
}), af = ["src"];
function of(e, t, n, a, o, s) {
  return D(), I("span", null, [
    oe("img", {
      src: e.ArrowLeftImage,
      alt: "왼쪽 화살표"
    }, null, 8, af)
  ]);
}
const ro = /* @__PURE__ */ Z(nf, [["render", of]]), sf = H({
  name: "HSingleDatePickerMonthPrevButton",
  components: {
    IconArrowLeft: ro
  },
  setup() {
    const e = S(Ja, (n) => {
    }), t = S(ke);
    return {
      setYearForMonthCalendar: e,
      calendarType: t
    };
  }
});
function rf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-left");
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_calendar_month_prev", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForMonthCalendar(-1))
  }, [
    F(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (D(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 이전 연도 ", -1))
  ], 2);
}
const Jm = /* @__PURE__ */ Z(sf, [["render", rf]]), lf = H({
  name: "HSingleDatePickerCalendarYear",
  setup() {
    return {
      calendarType: S(ke)
    };
  }
}), cf = { class: "h_calendar_year_table" };
function uf(e, t, n, a, o, s) {
  return D(), I("div", {
    class: ve(["h_calendar_year", e.calendarType])
  }, [
    F(e.$slots, "default"),
    oe("table", cf, [
      t[0] || (t[0] = oe("caption", null, [
        oe("span", { class: "blind" }, "Years")
      ], -1)),
      oe("thead", null, [
        F(e.$slots, "table_head")
      ]),
      oe("tbody", null, [
        F(e.$slots, "table_body")
      ])
    ])
  ], 2);
}
const eh = /* @__PURE__ */ Z(lf, [["render", uf]]), df = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBpdS9FcIgEADgHEVqR8gIruAGjiAllRnFCh40uIEjZIWMkBHseQ88LfKi8nOnFBx3730cDdd1/yzn3NkYM3CMsNaOKaWLEGLiYNH3/RUAZjwPHAzPzXu/CyFM2HmP6RJjPCillib8BcM24WD4LFAx5G6j4Cyk4CJs4Sqs4SYsYUGBUso7hnlbI3XET+Cx24n11BxqdiyhKqyhImyhLKSgL0hFb5CDVshFL4jD6ojxxkHr0lqP3PH4AAMhEevOZzQ6AAAAAElFTkSuQmCC", vf = H({
  name: "IconArrowRight",
  setup() {
    return {
      ArrowRightImage: df
    };
  }
}), ff = ["src"];
function pf(e, t, n, a, o, s) {
  return D(), I("span", null, [
    oe("img", {
      src: e.ArrowRightImage,
      alt: "오른쪽 화살표"
    }, null, 8, ff)
  ]);
}
const lo = /* @__PURE__ */ Z(vf, [["render", pf]]), mf = H({
  name: "HSingleDatePickerNextButton",
  components: {
    IconArrowRight: lo
  },
  setup() {
    const e = S(Za, (n) => {
    }), t = S(ke);
    return {
      setNowMonth: e,
      calendarType: t
    };
  }
});
function hf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-right");
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_calendar_next", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setNowMonth(1))
  }, [
    F(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (D(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 다음 ", -1))
  ], 2);
}
const th = /* @__PURE__ */ Z(mf, [["render", hf]]), gf = H({
  name: "HSingleDatePickerPrevButton",
  components: {
    IconArrowLeft: ro
  },
  setup() {
    const e = S(Za, (n) => {
    }), t = S(ke);
    return {
      setNowMonth: e,
      calendarType: t
    };
  }
});
function yf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-left");
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_calendar_prev", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setNowMonth(-1))
  }, [
    F(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (D(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 이전 ", -1))
  ], 2);
}
const nh = /* @__PURE__ */ Z(gf, [["render", yf]]), bf = H({
  name: "HSingleDatePickerCalendarYearArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = S(ke), t = S(Kn), n = S(Nr), a = ce(() => {
      if (!t || !Fn(t))
        return {
          position: "fixed"
        };
      const {
        bottom: o,
        left: s,
        right: r,
        top: l,
        clientWidth: i,
        clientHeight: c,
        minusWidth: d
      } = t.value;
      if (!((n == null ? void 0 : n.value) instanceof HTMLElement))
        return {};
      const { height: u, width: v } = n.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...oo(l, o, u, c),
        ...so(s, r, v, i, d)
      };
    });
    return {
      calendarYearArea: n,
      calendarStyle: a,
      calendarType: e
    };
  }
});
function Af(e, t, n, a, o, s) {
  return e.isActive ? (D(), I("div", {
    key: 0,
    ref: "calendarYearArea",
    class: ve(["h_calendar_year_area", e.calendarType]),
    style: Le(e.calendarStyle)
  }, [
    F(e.$slots, "default")
  ], 6)) : Me("", !0);
}
const ah = /* @__PURE__ */ Z(bf, [["render", Af]]), _f = H({
  name: "HSingleDatePickerYearButton",
  setup() {
    const e = S(ke);
    return {
      setIsActiveYearCalendar: S(
        to,
        () => {
        }
      ),
      calendarType: e
    };
  }
});
function Ef(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_year", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.setIsActiveYearCalendar && e.setIsActiveYearCalendar(...r))
  }, [
    F(e.$slots, "default")
  ], 2);
}
const oh = /* @__PURE__ */ Z(_f, [["render", Ef]]), Sf = H({
  name: "HSingleDatePickerYearNextButton",
  components: {
    IconArrowRight: lo
  },
  setup() {
    const e = S(
      Ka,
      (a) => {
      }
    ), t = S(eo, g(0)), n = S(ke);
    return {
      setYearForYearCalendar: e,
      yearsArrLength: t,
      calendarType: n
    };
  }
});
function $f(e, t, n, a, o, s) {
  const r = ot("icon-arrow-right");
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_calendar_year_next", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForYearCalendar(e.yearsArrLength))
  }, [
    F(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (D(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 다음 연도 ", -1))
  ], 2);
}
const sh = /* @__PURE__ */ Z(Sf, [["render", $f]]), Cf = H({
  name: "HSingleDatePickerCalendarYearButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = S(ke), n = S(
      Br,
      (o) => {
      }
    );
    return {
      clickedYearButton: () => {
        n(e.value);
      },
      calendarType: t
    };
  }
});
function wf(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_calendar_common", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.clickedYearButton && e.clickedYearButton(...r))
  }, [
    F(e.$slots, "default")
  ], 2);
}
const rh = /* @__PURE__ */ Z(Cf, [["render", wf]]), Wr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB7ZnRbYNADIZ9iAceM8J1g3aDdJL2CcRTlQ3aEfqE4KXqBO0G7QbpBmUEFgDii4gURbkAZ0cOkj/pMNKPJf9wdzIAoCiKokhRluW/GxAINd8RAw0LNCwQiWDhGJ9QVdULhue+71fgxw6xhjDsWL4xpsEa3rIs+z6ne6cQJr1iuFT8uUJCseCvw4UPHPMMwFA83oGHtm2bU7HrulUcx9vh/A5mMiX/6BrvjRxdxGma/vk03EH2Mc/zGgKYkn+4xsfiFzF1G62BRg1ESAZwjj4mSdJAINR8B8lA6Nznyncsfg2oAWnUgDRqQBoWA9h633NrUyEbwGbrC1veLRbzw6XNgeMJrN0Bi1kzapMhG8B+ZoPvDL94uuHSWMBH3LsBwozVobuQNGpAGjUgjRqQRg1IM/pZhfoD4tp4DWCz9RlF0RMw/ISggh3ru08zlxKLorBwA3B8AFMU5UbZAevho9IdayVBAAAAAElFTkSuQmCC", Df = H({
  name: "IconCalendar",
  setup() {
    return {
      CalendarImage: Wr
    };
  }
}), Tf = ["src"];
function kf(e, t, n, a, o, s) {
  return D(), I("span", null, [
    oe("img", {
      src: e.CalendarImage,
      alt: "달력 이미지"
    }, null, 8, Tf)
  ]);
}
const Lf = /* @__PURE__ */ Z(Df, [["render", kf]]), If = H({
  name: "HSingleDatePickerInput",
  components: {
    IconCalendar: Lf
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
    const e = S(
      kr,
      g(null)
    ), t = S(
      Xa,
      () => {
      }
    );
    Be(e, (u) => {
      t(u);
    });
    const n = S(Lr, () => {
    }), a = S(Hr), o = S(Pr), s = S(ke), r = S(xr), l = S(Fr), i = S(Ur), c = g(Wr), d = qt();
    return {
      selectedDatePickerValue: e,
      clickedDatePickerInput: n,
      calendarInput: o,
      calendarInputArea: a,
      calendarType: s,
      focusInDatePickerInput: r,
      focusOutDatePickerInput: l,
      isDisabled: i,
      imageSrc: c,
      id: d
    };
  }
}), Mf = ["src"], Bf = ["id", "value", "disabled", "placeholder", "name"];
function Pf(e, t, n, a, o, s) {
  const r = ot("icon-calendar");
  return D(), I("div", {
    ref: "calendarInputArea",
    class: ve(["h_inp_datepicker_area", e.calendarType])
  }, [
    e.reactiveImage ? (D(), I("img", {
      key: 0,
      class: "icon_calendar",
      src: e.imageSrc,
      alt: "달력 이미지"
    }, null, 8, Mf)) : (D(), I(is, { key: 1 }, [
      e.calendarType === "type1" ? (D(), Ve(r, { key: 0 })) : Me("", !0)
    ], 64)),
    oe("input", {
      id: e.id,
      ref: "calendarInput",
      type: "text",
      class: "inp_datepicker",
      value: e.selectedDatePickerValue,
      disabled: e.isDisabled,
      placeholder: e.placeholder,
      onClick: t[0] || (t[0] = (...l) => e.clickedDatePickerInput && e.clickedDatePickerInput(...l)),
      onKeyup: t[1] || (t[1] = (...l) => e.focusInDatePickerInput && e.focusInDatePickerInput(...l)),
      onFocusout: t[2] || (t[2] = (...l) => e.focusOutDatePickerInput && e.focusOutDatePickerInput(...l)),
      name: e.inputName
    }, null, 40, Bf)
  ], 2);
}
const lh = /* @__PURE__ */ Z(If, [["render", Pf]]), Hf = H({
  name: "HSingleDatePickerMonthNextButton",
  components: {
    IconArrowRight: lo
  },
  setup() {
    const e = S(Ja, (n) => {
    }), t = S(ke);
    return {
      setYearForMonthCalendar: e,
      calendarType: t
    };
  }
});
function Rf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-right");
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_calendar_month_next", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForMonthCalendar(1))
  }, [
    F(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (D(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 다음 연도 ", -1))
  ], 2);
}
const ih = /* @__PURE__ */ Z(Hf, [["render", Rf]]), Of = H({
  name: "HSingleDatePickerMonthYearButton",
  setup() {
    const e = S(ke);
    return {
      setIsActiveYearCalendar: S(
        to,
        () => {
        }
      ),
      calendarType: e
    };
  }
});
function Nf(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_year_in_month", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.setIsActiveYearCalendar && e.setIsActiveYearCalendar(...r))
  }, [
    F(e.$slots, "default")
  ], 2);
}
const ch = /* @__PURE__ */ Z(Of, [["render", Nf]]), xf = H({
  name: "HSingleDatePickerRangeArea",
  props: {
    modelValue: {
      type: Array,
      default: () => [
        Lt(),
        Lt()
      ]
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = g(e.modelValue[0]), a = g(e.modelValue[1]), o = ce(() => [n.value, a.value]), s = ce(() => [
      `${a.value}~`
    ]), r = ce(() => [
      `~${n.value}`
    ]), l = () => {
      t("update:modelValue", [n.value, a.value]);
    }, i = (d) => {
      n.value = d, l();
    }, c = (d) => {
      a.value = d, l();
    };
    return Y(no, i), Y(ao, c), Y(zr, o), {
      startDate: n,
      endDate: a,
      startDisableDatesRange: s,
      endDisabledDatesRange: r
    };
  }
}), Ff = { class: "h_single_datepicker_range_area" };
function Uf(e, t, n, a, o, s) {
  return D(), I("div", Ff, [
    F(e.$slots, "default", {
      startDate: e.startDate,
      endDate: e.endDate,
      startDisableDatesRange: e.startDisableDatesRange,
      endDisabledDatesRange: e.endDisabledDatesRange
    })
  ]);
}
const uh = /* @__PURE__ */ Z(xf, [["render", Uf]]), zf = H({
  name: "HSingleDatePickerYearPrevButton",
  components: {
    IconArrowLeft: ro
  },
  setup() {
    const e = S(
      Ka,
      (a) => {
      }
    ), t = S(eo, g(0)), n = S(ke);
    return {
      setYearForYearCalendar: e,
      yearsArrLength: t,
      calendarType: n
    };
  }
});
function Vf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-left");
  return D(), I("button", {
    type: "button",
    class: ve(["h_btn_calendar_year_prev", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForYearCalendar(-1 * e.yearsArrLength))
  }, [
    F(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (D(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 이전 연도 ", -1))
  ], 2);
}
const dh = /* @__PURE__ */ Z(zf, [["render", Vf]]), jr = Symbol(
  "inputFileButtonClick"
), Qr = Symbol("deleteFile"), Gr = Symbol("fileName"), qr = Symbol("fileSize"), io = Symbol("file"), Jn = Symbol("isError"), Yf = Symbol("imageEl"), Wf = Symbol("signImage"), jf = Symbol("useDirectImage"), Qf = Symbol("cancelDirectImage"), Gf = Symbol("realValue"), qf = H({
  name: "HSingleFileUploadedFileArea",
  setup() {
    const e = S(io, g(null)), t = S(Jn, g(!1));
    return {
      file: e,
      isError: t
    };
  }
}), Xf = {
  key: 0,
  class: "h_uploaded_file"
};
function Zf(e, t, n, a, o, s) {
  return e.file && !e.isError ? (D(), I("div", Xf, [
    F(e.$slots, "default")
  ])) : Me("", !0);
}
const vh = /* @__PURE__ */ Z(qf, [["render", Zf]]), Kf = H({
  name: "HSingleFileUploadedFileDeleteButton",
  setup() {
    return {
      deleteFile: S(Qr, () => {
      })
    };
  }
});
function Jf(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.deleteFile && e.deleteFile(...r))
  }, [
    F(e.$slots, "default")
  ]);
}
const fh = /* @__PURE__ */ Z(Kf, [["render", Jf]]), ep = H({
  name: "HSingleFileUploadTitle"
}), tp = { class: "h-single-file-upload-tit" };
function np(e, t, n, a, o, s) {
  return D(), I("em", tp, [
    F(e.$slots, "default")
  ]);
}
const ph = /* @__PURE__ */ Z(ep, [["render", np]]), ap = H({
  name: "HSingleFileUploadedFileName",
  setup() {
    return {
      fileName: S(
        Gr,
        ce(() => "")
      )
    };
  }
}), op = { class: "h_file_name" };
function sp(e, t, n, a, o, s) {
  return D(), I("span", op, $n(e.fileName), 1);
}
const mh = /* @__PURE__ */ Z(ap, [["render", sp]]), rp = () => ({
  base64ToArrayBuffer: (n) => {
    const a = window.atob(n), o = a.length, s = new Uint8Array(o);
    for (let r = 0; r < o; r++)
      s[r] = a.charCodeAt(r);
    return s.buffer;
  },
  arrayBufferToBase64: (n) => {
    let a = "";
    const o = new Uint8Array(n), s = o.byteLength;
    for (let r = 0; r < s; r++)
      a += String.fromCharCode(o[r]);
    return window.btoa(a);
  }
}), lp = (e) => {
  let t = "";
  const n = new Uint8Array(e), a = n.byteLength;
  for (let o = 0; o < a; o++)
    t += String.fromCharCode(n[o]);
  return window.btoa(t);
}, ip = (e) => new Promise((t, n) => {
  const a = new FileReader();
  a.readAsDataURL(e), a.onload = () => {
    const o = a.result;
    if (!o) {
      t("");
      return;
    }
    o instanceof ArrayBuffer ? t(lp(o)) : t(o);
  }, a.onerror = (o) => {
    n(o);
  };
});
function cp() {
  const e = (r) => (l) => r(l), t = g(null), n = g(null);
  return {
    promiseInstance: async () => await new Promise((r, l) => {
      t.value = e(r), n.value = e(l);
    }),
    resolveFunc: t,
    rejectFunc: n,
    clearResolveFunc: () => {
      t.value = null;
    },
    clearRejectFunc: () => {
      n.value = null;
    }
  };
}
const up = H({
  name: "HSingleFileUploadArea",
  props: {
    image: {
      type: Boolean,
      default: !1
    },
    modelValue: {
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
    "update:modelValue",
    "exceed-size",
    "use-direct-image-before",
    "use-direct-image",
    "cancel-direct-image",
    "no-valid-extensions"
  ],
  setup(e, { emit: t }) {
    const { validStatus: n, validExtensions: a, modelValue: o } = On(e), s = g(o.value || null), r = g(!1), l = g(!1), i = g(!1);
    Y(Gf, o);
    const c = ce(() => {
      var C;
      return (C = s.value) == null ? void 0 : C.name;
    }), d = ce(() => {
      var j;
      const C = (j = s.value) == null ? void 0 : j.size;
      let w = "";
      if (!C)
        return 0;
      switch (!0) {
        case C >= 1073741824:
          w = (C / 1073741824).toFixed(2) + "GB";
          break;
        case C >= 1048576:
          w = (C / 1048576).toFixed(2) + "MB";
          break;
        case C >= 1024:
          w = (C / 1024).toFixed(2) + "KB";
          break;
        case C > 1:
          w = C + "bytes";
          break;
        case C === 1:
          w = C + "byte";
          break;
        default:
          w = "0bytes";
          break;
      }
      return w;
    });
    Be(
      n,
      (C, w) => {
        i.value = !C;
      },
      { deep: !0 }
    );
    const u = () => {
      v.value && (v.value.value = "", v.value.files = null), s.value = null, r.value = !1, i.value = !1, A.value = null, f.value = "", t("update:modelValue", s.value);
    }, v = g(null);
    Be(
      o,
      (C) => {
        me(() => {
          if (v.value)
            if (C) {
              const w = new DataTransfer();
              w.items.add(C), v.value.files = w.files;
            } else {
              const w = new DataTransfer();
              v.value.files = w.files;
            }
        });
      },
      { immediate: !0 }
    );
    const m = () => {
      v.value && v.value.click();
    }, p = (C) => {
      var w;
      if (((w = a.value) == null ? void 0 : w.length) === 0 || a.value.includes(C.type) || a.value.includes(`.${C.name.split(".")[1]}`)) {
        if (s.value = C, r.value = !0, i.value = !1, s.value.size > e.limitSize) {
          s.value = null, r.value = !1, i.value = !0, A.value = null, f.value = "", t("exceed-size"), t("update:modelValue", s.value);
          return;
        }
        e.image && W(s.value), t("update:modelValue", s.value);
      } else
        s.value = null, r.value = !1, i.value = !0, A.value = null, f.value = "", t("no-valid-extensions");
    }, f = g(""), { promiseInstance: k, resolveFunc: h, rejectFunc: y } = cp(), M = async () => {
      t("use-direct-image", {
        signImage: f.value,
        resolveFunc: h,
        rejectFunc: y
      }), await k() !== "false" && (A.value = f.value || null, A.value === null ? (s.value = null, v.value && (v.value.value = "", v.value.files = null)) : (s.value = ip(f.value), s.value.size > e.limitSize ? (s.value = null, r.value = !1, i.value = !0, A.value = null, f.value = "", t("exceed-size"), v.value && (v.value.value = "", v.value.files = null)) : (r.value = !0, i.value = !1)), t("update:modelValue", s.value));
    }, T = async () => {
      !A.value && f.value || A.value !== f.value ? (t("cancel-direct-image", {
        signImage: f.value,
        resolveFunc: h,
        rejectFunc: y
      }), await k() === "true" && (f.value = A.value || "")) : (f.value = A.value || "", t("cancel-direct-image"));
    };
    Y(Wf, f), Y(jf, M), Y(Qf, T);
    const A = g(e.initImage || null);
    Be(
      () => e.initImage,
      (C) => {
        C && (A.value = C, f.value = C);
      },
      {
        immediate: !0
      }
    );
    const { arrayBufferToBase64: B } = rp(), W = (C) => {
      const w = new FileReader();
      w.onload = (j) => {
        const q = j.target;
        if (!q || !(q instanceof FileReader) || !q.result)
          return;
        const le = q.result;
        le instanceof ArrayBuffer ? A.value = B(le) : A.value = le, f.value = A.value;
      }, w.readAsDataURL(C);
    };
    Y(Yf, A);
    const te = (C) => {
      var q;
      const w = C.target;
      if (!w || !yl(w))
        return;
      const j = (q = w.files) == null ? void 0 : q[0];
      j && p(j);
    }, z = () => {
      l.value = !0, i.value = !1;
    }, _ = () => {
      l.value = !1;
    }, P = (C) => {
      var j;
      const w = (j = C.dataTransfer) == null ? void 0 : j.files[0];
      l.value = !1, w && p(w);
    };
    return Y(jr, m), Y(Qr, u), Y(Gr, c), Y(qr, d), Y(io, s), Y(Jn, i), {
      fileInput: v,
      fileName: c,
      fileSize: d,
      deleteFile: u,
      inputFileButtonClick: m,
      fileAdded: te,
      fileDragOver: z,
      fileDragLeave: _,
      fileDrop: P,
      isActive: r,
      isHover: l,
      isError: i,
      file: s
    };
  }
}), dp = ["accept"];
function vp(e, t, n, a, o, s) {
  return D(), I("div", {
    class: ve(["h_upload_area", { is_active: e.isActive, is_hover: e.isHover, is_error: e.isError }]),
    onDragover: t[1] || (t[1] = Bt((...r) => e.fileDragOver && e.fileDragOver(...r), ["prevent"])),
    onDragleave: t[2] || (t[2] = (...r) => e.fileDragLeave && e.fileDragLeave(...r)),
    onDrop: t[3] || (t[3] = Bt((...r) => e.fileDrop && e.fileDrop(...r), ["prevent"]))
  }, [
    oe("input", {
      ref: "fileInput",
      type: "file",
      hidden: "",
      accept: e.validExtensions.join(","),
      name: "fileUpload",
      onInput: t[0] || (t[0] = (...r) => e.fileAdded && e.fileAdded(...r))
    }, null, 40, dp),
    F(e.$slots, "default", {
      isActive: e.isActive,
      isHover: e.isHover,
      isError: e.isError
    })
  ], 34);
}
const hh = /* @__PURE__ */ Z(up, [["render", vp]]), fp = H({
  name: "HSingleFileUploadedFileSize",
  setup() {
    return {
      fileSize: S(
        qr,
        ce(() => "")
      )
    };
  }
}), pp = { class: "h_file_size" };
function mp(e, t, n, a, o, s) {
  return D(), I("span", pp, $n(e.fileSize), 1);
}
const gh = /* @__PURE__ */ Z(fp, [["render", mp]]), hp = H({
  name: "HSingleFileUploadErrorMsg",
  setup() {
    return {
      isError: S(Jn, g(!1))
    };
  }
}), gp = {
  key: 0,
  class: "h-uploade-error-cont"
};
function yp(e, t, n, a, o, s) {
  return e.isError ? (D(), I("p", gp, [
    F(e.$slots, "default")
  ])) : Me("", !0);
}
const yh = /* @__PURE__ */ Z(hp, [["render", yp]]), bp = H({
  name: "HSingleFileUploadNoFileErrorMsg",
  setup() {
    const e = S(io, g(null)), t = S(Jn, g(!1));
    return {
      file: e,
      isError: t
    };
  }
}), Ap = {
  key: 0,
  class: "h-no-file-error-cont"
};
function _p(e, t, n, a, o, s) {
  return !e.file && !e.isError ? (D(), I("p", Ap, [
    F(e.$slots, "default")
  ])) : Me("", !0);
}
const bh = /* @__PURE__ */ Z(bp, [["render", _p]]), Ep = H({
  name: "HSingleFileUploadedFileAddButton",
  setup() {
    return {
      inputFileButtonClick: S(jr, () => {
      })
    };
  }
});
function Sp(e, t, n, a, o, s) {
  return D(), I("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.inputFileButtonClick && e.inputFileButtonClick(...r))
  }, [
    F(e.$slots, "default")
  ]);
}
const Ah = /* @__PURE__ */ Z(Ep, [["render", Sp]]), Xr = Symbol(
  "sliderRangeContainer"
), Zr = Symbol("startRangeDrag"), Kr = Symbol("clickRangeSlider"), co = Symbol("leftThumbPosition"), uo = Symbol("rightThumbPosition"), $p = H({
  name: "HSliderRangeArea",
  props: {
    modelValue: {
      type: Array,
      default: () => [0, 200]
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = g(null), a = g(0), o = g(200), s = g(200), r = g(null), l = g(!1);
    je(() => {
      if (!n.value)
        return;
      const { width: v } = n.value.getBoundingClientRect();
      s.value = v, e.modelValue[0] > o.value ? a.value = o.value - 10 : e.modelValue[0] > s.value ? a.value = s.value : e.modelValue[0] < 0 ? a.value = 0 : a.value = e.modelValue[0], e.modelValue[1] < a.value ? o.value = a.value + 10 : e.modelValue[1] > s.value ? o.value = s.value : e.modelValue[1] < 0 ? o.value = 0 : o.value = e.modelValue[1], t("update:modelValue", [a.value, o.value]);
    });
    const i = (v) => {
      if (!l.value || !n.value)
        return;
      let m = v.clientX - n.value.getBoundingClientRect().left;
      m < 0 ? m = 0 : m > s.value && (m = s.value), r.value === "left" && m >= o.value ? (m = o.value - 10, r.value = "right") : r.value === "right" && m <= a.value && (m = a.value + 10, r.value = "left"), r.value === "left" ? a.value = m : o.value = m, t("update:modelValue", [a.value, o.value]);
    }, c = () => {
      l.value = !1, r.value = null, document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", c);
    }, d = (v) => {
      if (!n.value)
        return;
      const m = n.value.getBoundingClientRect(), p = v.clientX - m.left, f = Math.abs(p - a.value) < Math.abs(p - o.value);
      r.value = f ? "left" : "right", l.value = !0, document.addEventListener("mousemove", i), document.addEventListener("mouseup", c);
    }, u = (v) => {
      l.value = !0, d(v), i(v), l.value = !1;
    };
    return Y(Xr, n), Y(Zr, d), Y(Kr, u), Y(co, a), Y(uo, o), {
      leftThumbPosition: a,
      rightThumbPosition: o
    };
  }
});
function Cp(e, t, n, a, o, s) {
  return D(), I("div", null, [
    F(e.$slots, "default", {
      leftThumbPosition: e.leftThumbPosition,
      rightThumbPosition: e.rightThumbPosition
    })
  ]);
}
const _h = /* @__PURE__ */ Z($p, [["render", Cp]]), wp = H({
  name: "HSliderRangeContainer",
  setup() {
    const e = S(Xr, g(null)), t = S(Zr, () => {
    }), n = S(Kr, (a) => {
    });
    return {
      sliderRangeContainer: e,
      startRangeDrag: t,
      clickRangeSlider: n
    };
  }
});
function Dp(e, t, n, a, o, s) {
  return D(), I("div", {
    ref: "sliderRangeContainer",
    class: "h-slider-range-container",
    onMousedown: t[0] || (t[0] = (...r) => e.startRangeDrag && e.startRangeDrag(...r)),
    onClick: t[1] || (t[1] = (...r) => e.clickRangeSlider && e.clickRangeSlider(...r))
  }, [
    F(e.$slots, "default")
  ], 544);
}
const Eh = /* @__PURE__ */ Z(wp, [["render", Dp]]), Tp = H({
  name: "HSliderRangeLeftThumb",
  setup() {
    return {
      leftThumbPosition: S(co, g(0))
    };
  }
});
function kp(e, t, n, a, o, s) {
  return D(), I("div", {
    class: "h-slider-thumb left-thumb",
    style: Le({ left: e.leftThumbPosition + "px" })
  }, null, 4);
}
const Sh = /* @__PURE__ */ Z(Tp, [["render", kp]]), Lp = H({
  name: "HSliderRangeRightThumb",
  setup() {
    return {
      rightThumbPosition: S(uo, g(0))
    };
  }
});
function Ip(e, t, n, a, o, s) {
  return D(), I("div", {
    class: "h-slider-thumb right-thumb",
    style: Le({ left: e.rightThumbPosition + "px" })
  }, null, 4);
}
const $h = /* @__PURE__ */ Z(Lp, [["render", Ip]]), Mp = H({
  name: "HSliderRangeTrack",
  setup() {
    const e = S(uo, g(0)), t = S(co, g(0));
    return {
      rangeStickStyle: ce(() => ({
        position: "absolute",
        top: "50%",
        left: `${t.value}px`,
        width: `${e.value - t.value}px`,
        height: "100%",
        transform: "translateY(-50%)"
      }))
    };
  }
}), Bp = { class: "h-slider-track" };
function Pp(e, t, n, a, o, s) {
  return D(), I("div", Bp, [
    oe("div", {
      class: "h-slider-track-range-stick",
      style: Le(e.rangeStickStyle)
    }, null, 4)
  ]);
}
const Ch = /* @__PURE__ */ Z(Mp, [["render", Pp]]), Jr = Symbol("thumbPosition"), el = Symbol("sliderContainer"), tl = Symbol("startDrag"), nl = Symbol("clickSlider"), Hp = H({
  name: "HSliderSingleArea",
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = g(!1), a = g(null), o = g(200), s = g(0);
    je(() => {
      if (!a.value)
        return;
      const { width: d } = a.value.getBoundingClientRect();
      o.value = d, e.modelValue > o.value ? s.value = o.value : s.value = e.modelValue, t("update:modelValue", s.value);
    });
    const r = (d) => {
      if (!n.value || !a.value)
        return;
      let u = d.clientX - a.value.getBoundingClientRect().left;
      u < 0 ? u = 0 : u > o.value && (u = o.value), s.value = u, t("update:modelValue", s.value);
    }, l = () => {
      n.value = !1, document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", l);
    }, i = () => {
      n.value = !0, document.addEventListener("mousemove", r), document.addEventListener("mouseup", l);
    }, c = (d) => {
      n.value = !0, r(d), n.value = !1;
    };
    return Y(Jr, s), Y(el, a), Y(tl, i), Y(nl, c), {
      thumbPosition: s
    };
  }
}), Rp = { class: "slider-area" };
function Op(e, t, n, a, o, s) {
  return D(), I("div", Rp, [
    F(e.$slots, "default", { thumbPosition: e.thumbPosition })
  ]);
}
const wh = /* @__PURE__ */ Z(Hp, [["render", Op]]), Np = H({
  name: "HSliderSingleTrack"
}), xp = { class: "h-slider-track" };
function Fp(e, t, n, a, o, s) {
  return D(), I("div", xp);
}
const Dh = /* @__PURE__ */ Z(Np, [["render", Fp]]), Up = H({
  name: "HSliderSingleThumb",
  setup() {
    return {
      thumbPosition: S(Jr, g(0))
    };
  }
});
function zp(e, t, n, a, o, s) {
  return D(), I("div", {
    class: "h-slider-thumb",
    style: Le({ left: e.thumbPosition + "px" })
  }, null, 4);
}
const Th = /* @__PURE__ */ Z(Up, [["render", zp]]), Vp = H({
  name: "HSliderSingleContainer",
  setup() {
    const e = S(el, g(null)), t = S(tl, () => {
    }), n = S(nl, (a) => {
    });
    return {
      sliderContainer: e,
      startDrag: t,
      clickSlider: n
    };
  }
});
function Yp(e, t, n, a, o, s) {
  return D(), I("div", {
    ref: "sliderContainer",
    class: "h-slider-container",
    onMousedown: t[0] || (t[0] = (...r) => e.startDrag && e.startDrag(...r)),
    onClick: t[1] || (t[1] = (...r) => e.clickSlider && e.clickSlider(...r))
  }, [
    F(e.$slots, "default")
  ], 544);
}
const kh = /* @__PURE__ */ Z(Vp, [["render", Yp]]), Wp = H({
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
    HScrollbars: Zs
  },
  setup() {
    const e = g(null), t = ce(() => e.value ? `${e.value.$el.getBoundingClientRect().height}px` : "auto");
    return {
      contArea: e,
      tableContentHeight: t
    };
  }
}), jp = { class: "table_tit_area" }, Qp = { class: "blind" }, Gp = { class: "cont_area" }, qp = { class: "blind" }, Xp = { class: "blind" };
function Zp(e, t, n, a, o, s) {
  const r = ot("HScrollbars");
  return D(), I("div", {
    class: ve({ h_table_area: e.defaultStyle })
  }, [
    oe("div", jp, [
      oe("table", null, [
        oe("caption", null, [
          oe("span", Qp, $n(e.caption), 1)
        ]),
        F(e.$slots, "colgroup"),
        oe("thead", null, [
          F(e.$slots, "head")
        ])
      ])
    ]),
    os(r, {
      ref: "contArea",
      style: Le({
        maxHeight: e.tableContentMaxHeight,
        height: e.isScroll ? e.tableContentHeight : "auto"
      })
    }, {
      default: Nn(() => [
        oe("div", Gp, [
          oe("table", null, [
            oe("caption", null, [
              oe("span", qp, $n(e.caption), 1)
            ]),
            F(e.$slots, "colgroup"),
            oe("thead", Xp, [
              F(e.$slots, "head")
            ]),
            oe("tbody", null, [
              F(e.$slots, "body")
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["style"])
  ], 2);
}
const Lh = /* @__PURE__ */ Z(Wp, [["render", Zp]]), Kp = ["for"], Jp = ["id", "name", "checked", "value", "disabled"], Ih = /* @__PURE__ */ H({
  __name: "HInputRadio",
  props: {
    modelValue: {},
    name: {},
    data: {},
    labelClass: {},
    labelStyle: {},
    value: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = qa(), a = e, o = t, s = ce(() => !!(a.modelValue && Nt(a.modelValue, a.data)));
    function r() {
      o("update:modelValue", a.data);
    }
    return (l, i) => (D(), I("div", null, [
      oe("label", {
        for: ge(n),
        class: ve(l.labelClass),
        style: Le(l.labelStyle)
      }, [
        F(l.$slots, "default")
      ], 14, Kp),
      oe("input", {
        id: ge(n),
        type: "radio",
        name: l.name,
        checked: s.value,
        value: l.value,
        disabled: l.disabled,
        onChange: r,
        class: "h-input-radio"
      }, null, 40, Jp)
    ]));
  }
}), em = ["for"], tm = ["id", "name", "checked", "value", "disabled"], Mh = /* @__PURE__ */ H({
  __name: "HInputCheckbox",
  props: {
    modelValue: {},
    data: {},
    name: {},
    labelClass: {},
    labelStyle: {},
    value: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = qa(), a = e, o = t, s = ce(() => a.modelValue.some((l) => Nt(l, a.data))), r = () => {
      const l = s.value ? a.modelValue.filter((i) => !Nt(i, a.data)) : [...a.modelValue, a.data];
      o("update:modelValue", l);
    };
    return (l, i) => (D(), I("div", null, [
      oe("label", {
        for: ge(n),
        class: ve(l.labelClass),
        style: Le(l.labelStyle)
      }, [
        F(l.$slots, "default")
      ], 14, em),
      oe("input", {
        id: ge(n),
        type: "checkbox",
        name: l.name,
        checked: s.value,
        value: l.value,
        disabled: l.disabled,
        onChange: r,
        class: "h-input-checkbox"
      }, null, 40, tm)
    ]));
  }
});
var Ye = /* @__PURE__ */ ((e) => (e.NORMAL_LEFT = "normal-left", e.CHEVRON_LEFT = "chevron-left", e.CHEVRON_RIGHT = "chevron-right", e.CHECK_SQUARE_EMPTY = "check-square-empty", e.CHECK_SQUARE_CHECKED = "check-square-checked", e.TIP = "tip", e.RADIO_CIRCLE_EMPTY = "radio-circle-empty", e.RADIO_CIRCLE_CHECKED = "radio-circle-checked", e.CLOSE = "close", e.CIRCLE = "circle", e))(Ye || {});
const Bh = /* @__PURE__ */ H({
  __name: "HIcon",
  props: {
    name: {},
    width: { default: 24 },
    height: { default: 24 },
    fill: { default: "currentColor" }
  },
  setup(e) {
    const t = e, n = Sn();
    return Be(() => t.name, async (a) => {
      switch (a) {
        case Ye.NORMAL_LEFT:
          n.value = (await import("./IconNormalLeft-DlBQvCkt.js")).default;
          break;
        case Ye.CHEVRON_LEFT:
          n.value = (await import("./IconChevronLeft-8f74EtRF.js")).default;
          break;
        case Ye.CHEVRON_RIGHT:
          n.value = (await import("./IconChevronRight-Wfv6uvw0.js")).default;
          break;
        case Ye.CHECK_SQUARE_EMPTY:
          n.value = (await import("./IconCheckSquareEmpty-Cq4I7kuz.js")).default;
          break;
        case Ye.TIP:
          n.value = (await import("./IconTip-CkJRn-BR.js")).default;
          break;
        case Ye.RADIO_CIRCLE_EMPTY:
          n.value = (await import("./IconRadioCircleEmpty-oMqHuIZR.js")).default;
          break;
        case Ye.RADIO_CIRCLE_CHECKED:
          n.value = (await import("./IconRadioCircleChecked-BGN3NC6r.js")).default;
          break;
        case Ye.CHECK_SQUARE_CHECKED:
          n.value = (await import("./IconCheckSquareChecked-DiYc0jS0.js")).default;
          break;
        case Ye.CLOSE:
          n.value = (await import("./IconClose-CQ4FJre0.js")).default;
          break;
        case Ye.CIRCLE:
          n.value = (await import("./IconCircle-BXCei4go.js")).default;
          break;
        default:
          n.value = null;
      }
    }, { immediate: !0 }), (a, o) => n.value ? (D(), Ve(Ta(n.value), {
      key: 0,
      width: a.width,
      height: a.height,
      fill: a.fill
    }, null, 8, ["width", "height", "fill"])) : Me("", !0);
  }
}), nm = ["onKeydown"], am = /* @__PURE__ */ H({
  __name: "HModal",
  props: {
    backdrop: {},
    escBeforeFunc: { type: Function },
    escAfterFunc: { type: Function }
  },
  setup(e, { expose: t }) {
    const n = e;
    n.backdrop && document.documentElement.style.setProperty("--modal-backdrop-color", n.backdrop);
    const a = g(null), o = async () => {
      a.value && a.value.close();
    }, s = async () => {
      n.escBeforeFunc && await n.escBeforeFunc(), o(), n.escAfterFunc && await n.escAfterFunc();
    };
    return t({ open: () => {
      a.value && a.value.showModal();
    }, closeFunc: o }), (l, i) => (D(), I("dialog", {
      ref_key: "dialogRef",
      ref: a,
      class: "h-modal",
      onKeydown: vl(Bt(s, ["prevent"]), ["esc"])
    }, [
      F(l.$slots, "default", { closeFunc: o }, void 0, !0)
    ], 40, nm));
  }
}), Ph = /* @__PURE__ */ Z(am, [["__scopeId", "data-v-797ff08e"]]), Hh = /* @__PURE__ */ H({
  __name: "HModalOpenButton",
  props: {
    target: {},
    beforeFunc: { type: Function },
    afterFunc: { type: Function }
  },
  setup(e) {
    const t = e, n = async () => {
      t.beforeFunc && await t.beforeFunc(), t.target.open(), t.afterFunc && t.afterFunc();
    };
    return (a, o) => (D(), I("button", {
      onClick: n,
      type: "button"
    }, [
      F(a.$slots, "default", {}, () => [
        o[0] || (o[0] = xt("모달 열기"))
      ])
    ]));
  }
}), Rh = /* @__PURE__ */ H({
  __name: "HModalCloseButton",
  props: {
    target: {},
    beforeFunc: { type: Function },
    afterFunc: { type: Function }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, a = async () => {
      n.beforeFunc && await n.beforeFunc(), n.target.closeFunc(), n.afterFunc && n.afterFunc();
    };
    return (o, s) => (D(), I("button", {
      onClick: a,
      type: "button"
    }, [
      F(o.$slots, "default", {}, () => [
        s[0] || (s[0] = xt("닫기"))
      ])
    ]));
  }
});
export {
  bl as ButtonPositionType,
  pm as HCheckAuth,
  gm as HCheckFormDataChange,
  _m as HCounterInputText,
  Em as HCounterTextArea,
  cm as HDropdownArea,
  dm as HDropdownButton,
  um as HDropdownItem,
  vm as HDropdownItemButton,
  fm as HDropdownList,
  Sm as HFileUploadArea,
  $m as HFileUploadButton,
  Cm as HFileUploadFileItem,
  wm as HFileUploadFileList,
  Dm as HHtmlRender,
  Bh as HIcon,
  Mh as HInputCheckbox,
  Ih as HInputRadio,
  Tm as HKanbanArea,
  km as HKanbanCard,
  Lm as HKanbanLine,
  Im as HKanbanLineInnerArea,
  Mm as HLoading,
  Ph as HModal,
  Rh as HModalCloseButton,
  Hh as HModalOpenButton,
  Om as HPaginationArea,
  Nm as HPaginationFirstButton,
  xm as HPaginationLastButton,
  Fm as HPaginationNextButton,
  Um as HPaginationNumberButton,
  zm as HPaginationPrevButton,
  Vm as HPrintHtmlBox,
  Ym as HPrintHtmlButton,
  Zs as HScrollbars,
  Pm as HSignatureArea,
  Hm as HSignatureClearButton,
  Rm as HSignatureUndoButton,
  qm as HSingleDatePickerArea,
  Wm as HSingleDatePickerCalendar,
  Qm as HSingleDatePickerCalendarArea,
  jm as HSingleDatePickerCalendarDateButton,
  Xm as HSingleDatePickerCalendarMonth,
  Gm as HSingleDatePickerCalendarMonthArea,
  Km as HSingleDatePickerCalendarMonthButton,
  eh as HSingleDatePickerCalendarYear,
  ah as HSingleDatePickerCalendarYearArea,
  rh as HSingleDatePickerCalendarYearButton,
  lh as HSingleDatePickerInput,
  Zm as HSingleDatePickerMonthButton,
  ih as HSingleDatePickerMonthNextButton,
  Jm as HSingleDatePickerMonthPrevButton,
  ch as HSingleDatePickerMonthYearButton,
  th as HSingleDatePickerNextButton,
  nh as HSingleDatePickerPrevButton,
  uh as HSingleDatePickerRangeArea,
  oh as HSingleDatePickerYearButton,
  sh as HSingleDatePickerYearNextButton,
  dh as HSingleDatePickerYearPrevButton,
  lm as HSingleDragXArea,
  hh as HSingleFileUploadArea,
  yh as HSingleFileUploadErrorMsg,
  bh as HSingleFileUploadNoFileErrorMsg,
  ph as HSingleFileUploadTitle,
  Ah as HSingleFileUploadedFileAddButton,
  vh as HSingleFileUploadedFileArea,
  fh as HSingleFileUploadedFileDeleteButton,
  mh as HSingleFileUploadedFileName,
  gh as HSingleFileUploadedFileSize,
  _h as HSliderRangeArea,
  Eh as HSliderRangeContainer,
  Sh as HSliderRangeLeftThumb,
  $h as HSliderRangeRightThumb,
  Ch as HSliderRangeTrack,
  wh as HSliderSingleArea,
  kh as HSliderSingleContainer,
  Th as HSliderSingleThumb,
  Dh as HSliderSingleTrack,
  Lh as HTableArea,
  ym as HTextCounter,
  bm as HTextCounterArea,
  Am as HTextCounterInner,
  Bm as HThreeDotLoading,
  Ye as IconType,
  sm as makeVueInstance,
  rm as rippleDirective,
  mm as useCheckEqual,
  hm as useFormChangeCheck,
  im as useHSingleDragXArea
};
