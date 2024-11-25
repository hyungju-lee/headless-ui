import { createApp as tl, h as co, defineComponent as N, ref as h, onMounted as Ke, onBeforeUnmount as wa, openBlock as T, createElementBlock as I, createElementVNode as oe, normalizeClass as fe, normalizeStyle as Le, renderSlot as U, computed as ce, toRefs as Nn, shallowRef as Sn, watchPostEffect as nl, watch as Be, unref as $e, createBlock as Ye, resolveDynamicComponent as Da, withCtx as On, onUnmounted as pt, provide as q, inject as S, useAttrs as al, mergeProps as Jo, isRef as xn, createVNode as es, createCommentVNode as Ie, getCurrentInstance as ts, useSlots as Ta, withModifiers as Bt, Fragment as ns, renderList as ol, toHandlers as sl, resolveComponent as ot, createTextVNode as xt, nextTick as ge, toDisplayString as $n, withKeys as rl } from "vue";
const Wp = (e, { props: t, attrs: n, on: a, scopedSlots: o }) => tl({
  render() {
    return co(e, {
      ...n,
      ...t,
      ...a,
      vSlots: o ? o(co) : {}
    });
  }
}).mount(document.createElement("div")), ll = (e) => e.type === "touchstart", il = (e) => e.type === "touchmove", cl = (e) => e.type === "mousemove", ul = (e) => e.type === "mousedown", dl = (e) => e.type === "click", Ce = (e) => e instanceof HTMLElement, fl = (e) => e instanceof HTMLInputElement, uo = (e) => {
  e.preventDefault(), e.stopPropagation();
  const t = e.currentTarget;
  if (!t || !Ce(t))
    return;
  t.style.position = "relative", t.style.overflow = "hidden";
  const n = document.createElement("span");
  n.classList.add("ripple-effect");
  const a = t.getBoundingClientRect();
  dl(e) && (n.style.left = `${e.clientX - a.left}px`, n.style.top = `${e.clientY - a.top}px`), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      t.appendChild(n), n.addEventListener("animationend", () => {
        n.remove();
      });
    });
  });
}, qp = () => ({
  beforeMount(e) {
    e.addEventListener("click", uo);
  },
  beforeUnmount(e) {
    e.removeEventListener("click", uo);
  }
});
var vl = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(vl || {});
const pl = N({
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
    const e = h(!1), t = h(0), n = h(0), a = h(0), o = h(null), s = h(null), r = (c) => {
      c.type === "touchmove" && c instanceof TouchEvent ? c.touches.length === 1 && (n.value = t.value - c.touches[0].clientX, t.value = c.touches[0].clientX) : c.type === "mousemove" && c instanceof MouseEvent && (n.value = t.value - c.clientX, t.value = c.clientX), s.value instanceof HTMLElement && (a.value = a.value + n.value, s.value.style.width = `${a.value}px`);
    }, l = () => {
      e.value = !1, document.removeEventListener("mouseup", l), document.removeEventListener("touchend", l), document.removeEventListener("mousemove", r), document.removeEventListener("touchmove", r);
    }, i = (c) => {
      e.value = !0, s.value instanceof HTMLElement && (a.value = s.value.getBoundingClientRect().width, c.type === "touchstart" && c instanceof TouchEvent ? c.touches.length === 1 && (t.value = c.touches[0].clientX) : c.type === "mousedown" && c instanceof MouseEvent && (t.value = c.clientX), document.addEventListener("mouseup", l), document.addEventListener("touchend", l), document.addEventListener("mousemove", r), document.addEventListener("touchmove", r));
    };
    return Ke(() => {
      o.value instanceof HTMLButtonElement && (o.value.addEventListener("mousedown", i), o.value.addEventListener("touchstart", i));
    }), wa(() => {
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
}, ml = { ref: "dragArea" };
function gl(e, t, n, a, o, s) {
  return T(), I("div", ml, [
    oe("button", {
      ref: "grabArea",
      type: "button",
      class: fe(["h-single-drag-area-btn", e.buttonPosition]),
      style: Le({ backgroundColor: e.buttonBackgroundColor })
    }, t[0] || (t[0] = [
      oe("span", { class: "blind" }, "드래그 버튼", -1)
    ]), 6),
    U(e.$slots, "default")
  ], 512);
}
const Qp = /* @__PURE__ */ Z(pl, [["render", gl]]), Gp = ({ minWidth: e, backgroundColor: t }) => {
  const n = h(null), a = h(0), o = h(0), s = h(0), r = () => {
    if (!((n == null ? void 0 : n.value) instanceof HTMLElement))
      return {};
    const { top: i, left: c, right: u } = n.value.getBoundingClientRect();
    a.value = i < 0 ? 0 : i, o.value = c < 0 ? 0 : c, s.value = innerWidth - u;
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
  const l = (u, d) => {
    const f = s, m = u, p = d || (a ? !a(f, m) : f !== m);
    return (p || o) && (s = m, r = f), [s, p, r];
  };
  return [t ? (u) => l(t(s, r), u) : l, (u) => [s, !!u, r]];
}, hl = typeof window < "u" && typeof HTMLElement < "u" && !!window.document, Pe = hl ? window : {}, as = Math.max, yl = Math.min, ra = Math.round, Cn = Math.abs, fo = Math.sign, os = Pe.cancelAnimationFrame, ka = Pe.requestAnimationFrame, wn = Pe.setTimeout, la = Pe.clearTimeout, Fn = (e) => typeof Pe[e] < "u" ? Pe[e] : void 0, bl = Fn("MutationObserver"), vo = Fn("IntersectionObserver"), Dn = Fn("ResizeObserver"), bn = Fn("ScrollTimeline"), La = (e) => e === void 0, Un = (e) => e === null, Xe = (e) => typeof e == "number", on = (e) => typeof e == "string", Ma = (e) => typeof e == "boolean", ze = (e) => typeof e == "function", Ze = (e) => Array.isArray(e), Tn = (e) => typeof e == "object" && !Ze(e) && !Un(e), Ia = (e) => {
  const t = !!e && e.length, n = Xe(t) && t > -1 && t % 1 == 0;
  return Ze(e) || !ze(e) && n ? t > 0 && Tn(e) ? t - 1 in e : !0 : !1;
}, kn = (e) => !!e && e.constructor === Object, Ln = (e) => e instanceof HTMLElement, zn = (e) => e instanceof Element;
function ye(e, t) {
  if (Ia(e))
    for (let n = 0; n < e.length && t(e[n], n, e) !== !1; n++)
      ;
  else e && ye(Object.keys(e), (n) => t(e[n], n, e));
  return e;
}
const ss = (e, t) => e.indexOf(t) >= 0, Zt = (e, t) => e.concat(t), we = (e, t, n) => (!on(t) && Ia(t) ? Array.prototype.push.apply(e, t) : e.push(t), e), mt = (e) => Array.from(e || []), Ba = (e) => Ze(e) ? e : !on(e) && Ia(e) ? mt(e) : [e], ia = (e) => !!e && !e.length, ca = (e) => mt(new Set(e)), xe = (e, t, n) => {
  ye(e, (o) => o ? o.apply(void 0, t || []) : !0), !n && (e.length = 0);
}, rs = "paddingTop", ls = "paddingRight", is = "paddingLeft", cs = "paddingBottom", us = "marginLeft", ds = "marginRight", fs = "marginBottom", vs = "overflowX", ps = "overflowY", Yn = "width", Vn = "height", dt = "visible", yt = "hidden", Pt = "scroll", Al = (e) => {
  const t = String(e || "");
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}, jn = (e, t, n, a) => {
  if (e && t) {
    let o = !0;
    return ye(n, (s) => {
      const r = e[s], l = t[s];
      r !== l && (o = !1);
    }), o;
  }
  return !1;
}, ms = (e, t) => jn(e, t, ["w", "h"]), An = (e, t) => jn(e, t, ["x", "y"]), _l = (e, t) => jn(e, t, ["t", "r", "b", "l"]), bt = () => {
}, re = (e, ...t) => e.bind(0, ...t), Tt = (e) => {
  let t;
  const n = e ? wn : ka, a = e ? la : os;
  return [(o) => {
    a(t), t = n(() => o(), ze(e) ? e() : e);
  }, () => a(t)];
}, ua = (e, t) => {
  const { _: n, v: a, p: o, S: s } = t || {};
  let r, l, i, c, u = bt;
  const d = function(k) {
    u(), la(r), c = r = l = void 0, u = bt, e.apply(this, k);
  }, f = (v) => s && l ? s(l, v) : v, m = () => {
    u !== bt && d(f(i) || i);
  }, p = function() {
    const k = mt(arguments), g = ze(n) ? n() : n;
    if (Xe(g) && g >= 0) {
      const M = ze(a) ? a() : a, D = Xe(M) && M >= 0, A = g > 0 ? wn : ka, B = g > 0 ? la : os, te = f(k) || k, z = d.bind(0, te);
      let _;
      u(), o && !c ? (z(), c = !0, _ = A(() => c = void 0, g)) : (_ = A(z, g), D && !r && (r = wn(m, M))), u = () => B(_), l = i = te;
    } else
      d(k);
  };
  return p.m = m, p;
}, gs = (e, t) => Object.prototype.hasOwnProperty.call(e, t), je = (e) => e ? Object.keys(e) : [], pe = (e, t, n, a, o, s, r) => {
  const l = [t, n, a, o, s, r];
  return (typeof e != "object" || Un(e)) && !ze(e) && (e = {}), ye(l, (i) => {
    ye(i, (c, u) => {
      const d = i[u];
      if (e === d)
        return !0;
      const f = Ze(d);
      if (d && kn(d)) {
        const m = e[u];
        let p = m;
        f && !Ze(m) ? p = [] : !f && !kn(m) && (p = {}), e[u] = pe(p, d);
      } else
        e[u] = f ? d.slice() : d;
    });
  }), e;
}, hs = (e, t) => ye(pe({}, e), (n, a, o) => {
  n === void 0 ? delete o[a] : n && kn(n) && (o[a] = hs(n));
}), Pa = (e) => !je(e).length, ys = (e, t, n) => as(e, yl(t, n)), At = (e) => ca((Ze(e) ? e : (e || "").split(" ")).filter((t) => t)), Ha = (e, t) => e && e.getAttribute(t), po = (e, t) => e && e.hasAttribute(t), tt = (e, t, n) => {
  ye(At(t), (a) => {
    e && e.setAttribute(a, String(n || ""));
  });
}, qe = (e, t) => {
  ye(At(t), (n) => e && e.removeAttribute(n));
}, Wn = (e, t) => {
  const n = At(Ha(e, t)), a = re(tt, e, t), o = (s, r) => {
    const l = new Set(n);
    return ye(At(s), (i) => {
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
}, bs = (e, t, n) => (Wn(e, t).O(n), re(Ra, e, t, n)), Ra = (e, t, n) => (Wn(e, t).$(n), re(bs, e, t, n)), Mn = (e, t, n, a) => (a ? Ra : bs)(e, t, n), Na = (e, t, n) => Wn(e, t).C(n), As = (e) => Wn(e, "class"), _s = (e, t) => {
  As(e).O(t);
}, Oa = (e, t) => (As(e).$(t), re(_s, e, t)), Es = (e, t) => {
  const n = t ? zn(t) && t : document;
  return n ? mt(n.querySelectorAll(e)) : [];
}, El = (e, t) => {
  const n = t ? zn(t) && t : document;
  return n && n.querySelector(e);
}, da = (e, t) => zn(e) && e.matches(t), Ss = (e) => da(e, "body"), fa = (e) => e ? mt(e.childNodes) : [], Kt = (e) => e && e.parentElement, kt = (e, t) => zn(e) && e.closest(t), va = (e) => document.activeElement, Sl = (e, t, n) => {
  const a = kt(e, t), o = e && El(n, a), s = kt(o, t) === a;
  return a && o ? a === e || o === e || s && kt(kt(e, n), t) !== a : !1;
}, Ht = (e) => {
  ye(Ba(e), (t) => {
    const n = Kt(t);
    t && n && n.removeChild(t);
  });
}, Ne = (e, t) => re(Ht, e && t && ye(Ba(t), (n) => {
  n && e.appendChild(n);
})), Mt = (e) => {
  const t = document.createElement("div");
  return tt(t, "class", e), t;
}, $s = (e) => {
  const t = Mt();
  return t.innerHTML = e.trim(), ye(fa(t), (n) => Ht(n));
}, mo = (e, t) => e.getPropertyValue(t) || e[t] || "", Cs = (e) => {
  const t = e || 0;
  return isFinite(t) ? t : 0;
}, pn = (e) => Cs(parseFloat(e || "")), pa = (e) => Math.round(e * 1e4) / 1e4, ws = (e) => `${pa(Cs(e))}px`;
function Jt(e, t) {
  e && t && ye(t, (n, a) => {
    try {
      const o = e.style, s = Un(n) || Ma(n) ? "" : Xe(n) ? ws(n) : n;
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
    o = a ? mo(s, t) : mt(t).reduce((r, l) => (r[l] = mo(s, l), r), o);
  }
  return o;
}
const go = (e, t, n) => {
  const a = t ? `${t}-` : "", o = n ? `-${n}` : "", s = `${a}top${o}`, r = `${a}right${o}`, l = `${a}bottom${o}`, i = `${a}left${o}`, c = at(e, [s, r, l, i]);
  return {
    t: pn(c[s]),
    r: pn(c[r]),
    b: pn(c[l]),
    l: pn(c[i])
  };
}, $l = (e, t) => `translate${Tn(e) ? `(${e.x},${e.y})` : `Y(${e})`}`, Cl = (e) => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length), wl = {
  w: 0,
  h: 0
}, qn = (e, t) => t ? {
  w: t[`${e}Width`],
  h: t[`${e}Height`]
} : wl, Dl = (e) => qn("inner", e || Pe), It = re(qn, "offset"), Ds = re(qn, "client"), In = re(qn, "scroll"), xa = (e) => {
  const t = parseFloat(at(e, Yn)) || 0, n = parseFloat(at(e, Vn)) || 0;
  return {
    w: t - ra(t),
    h: n - ra(n)
  };
}, Jn = (e) => e.getBoundingClientRect(), Tl = (e) => !!e && Cl(e), ma = (e) => !!(e && (e[Vn] || e[Yn])), Ts = (e, t) => {
  const n = ma(e);
  return !ma(t) && n;
}, ho = (e, t, n, a) => {
  ye(At(t), (o) => {
    e && e.removeEventListener(o, n, a);
  });
}, Se = (e, t, n, a) => {
  var o;
  const s = (o = a && a.H) != null ? o : !0, r = a && a.I || !1, l = a && a.A || !1, i = {
    passive: s,
    capture: r
  };
  return re(xe, At(t).map((c) => {
    const u = l ? (d) => {
      ho(e, c, u, r), n && n(d);
    } : n;
    return e && e.addEventListener(c, u, i), re(ho, e, c, u, r);
  }));
}, ks = (e) => e.stopPropagation(), ga = (e) => e.preventDefault(), Ls = (e) => ks(e) || ga(e), Qe = (e, t) => {
  const { x: n, y: a } = Xe(t) ? {
    x: t,
    y: t
  } : t || {};
  Xe(n) && (e.scrollLeft = n), Xe(a) && (e.scrollTop = a);
}, Oe = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
}), Ms = () => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
}), kl = (e, t) => {
  const { D: n, M: a } = e, { w: o, h: s } = t, r = (d, f, m) => {
    let p = fo(d) * m, v = fo(f) * m;
    if (p === v) {
      const k = Cn(d), g = Cn(f);
      v = k > g ? 0 : v, p = k < g ? 0 : p;
    }
    return p = p === v ? 0 : p, [p + 0, v + 0];
  }, [l, i] = r(n.x, a.x, o), [c, u] = r(n.y, a.y, s);
  return {
    D: {
      x: l,
      y: c
    },
    M: {
      x: i,
      y: u
    }
  };
}, yo = ({ D: e, M: t }) => {
  const n = (a, o) => a === 0 && a <= o;
  return {
    x: n(e.x, t.x),
    y: n(e.y, t.y)
  };
}, bo = ({ D: e, M: t }, n) => {
  const a = (o, s, r) => ys(0, 1, (o - r) / (o - s) || 0);
  return {
    x: a(e.x, t.x, n.x),
    y: a(e.y, t.y, n.y)
  };
}, ha = (e) => {
  e && e.focus && e.focus({
    preventScroll: !0
  });
}, Ao = (e, t) => {
  ye(Ba(t), e);
}, ya = (e) => {
  const t = /* @__PURE__ */ new Map(), n = (s, r) => {
    if (s) {
      const l = t.get(s);
      Ao((i) => {
        l && l[i ? "delete" : "clear"](i);
      }, r);
    } else
      t.forEach((l) => {
        l.clear();
      }), t.clear();
  }, a = (s, r) => {
    if (on(s)) {
      const c = t.get(s) || /* @__PURE__ */ new Set();
      return t.set(s, c), Ao((u) => {
        ze(u) && c.add(u);
      }, r), re(n, s, r);
    }
    Ma(r) && r && n();
    const l = je(s), i = [];
    return ye(l, (c) => {
      const u = s[c];
      u && we(i, a(c, u));
    }), re(xe, i);
  }, o = (s, r) => {
    ye(mt(t.get(s)), (l) => {
      r && !ia(r) ? l.apply(0, r) : l();
    });
  };
  return a(e || {}), [a, n, o];
}, _o = (e) => JSON.stringify(e, (t, n) => {
  if (ze(n))
    throw 0;
  return n;
}), Eo = (e, t) => e ? `${t}`.split(".").reduce((n, a) => n && gs(n, a) ? n[a] : void 0, e) : void 0, Ll = {
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
}, Is = (e, t) => {
  const n = {}, a = Zt(je(t), je(e));
  return ye(a, (o) => {
    const s = e[o], r = t[o];
    if (Tn(s) && Tn(r))
      pe(n[o] = {}, Is(s, r)), Pa(n[o]) && delete n[o];
    else if (gs(t, o) && r !== s) {
      let l = !0;
      if (Ze(s) || Ze(r))
        try {
          _o(s) === _o(r) && (l = !1);
        } catch {
        }
      l && (n[o] = r);
    }
  }), n;
}, So = (e, t, n) => (a) => [Eo(e, a), n || Eo(t, a) !== void 0], Ft = "data-overlayscrollbars", _n = "os-environment", mn = `${_n}-scrollbar-hidden`, ea = `${Ft}-initialize`, En = "noClipping", $o = `${Ft}-body`, ft = Ft, Ml = "host", nt = `${Ft}-viewport`, Il = vs, Bl = ps, Pl = "arrange", Bs = "measuring", Hl = "scrolling", Ps = "scrollbarHidden", Rl = "noContent", ba = `${Ft}-padding`, Co = `${Ft}-content`, Fa = "os-size-observer", Nl = `${Fa}-appear`, Ol = `${Fa}-listener`, xl = "os-trinsic-observer", Fl = "os-theme-none", Fe = "os-scrollbar", Ul = `${Fe}-rtl`, zl = `${Fe}-horizontal`, Yl = `${Fe}-vertical`, Hs = `${Fe}-track`, Ua = `${Fe}-handle`, Vl = `${Fe}-visible`, jl = `${Fe}-cornerless`, wo = `${Fe}-interaction`, Do = `${Fe}-unusable`, Aa = `${Fe}-auto-hide`, To = `${Aa}-hidden`, ko = `${Fe}-wheel`, Wl = `${Hs}-interactive`, ql = `${Ua}-interactive`;
let Rs;
const Ql = () => Rs, Gl = (e) => {
  Rs = e;
};
let ta;
const Xl = () => {
  const e = (D, A, B) => {
    Ne(document.body, D), Ne(document.body, D);
    const V = Ds(D), te = It(D), z = xa(A);
    return B && Ht(D), {
      x: te.h - V.h + z.h,
      y: te.w - V.w + z.w
    };
  }, t = (D) => {
    let A = !1;
    const B = Oa(D, mn);
    try {
      A = at(D, "scrollbar-width") === "none" || at(D, "display", "::-webkit-scrollbar") === "none";
    } catch {
    }
    return B(), A;
  }, n = `.${_n}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${_n} div{width:200%;height:200%;margin:10px 0}.${mn}{scrollbar-width:none!important}.${mn}::-webkit-scrollbar,.${mn}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`, o = $s(`<div class="${_n}"><div></div><style>${n}</style></div>`)[0], s = o.firstChild, r = o.lastChild, l = Ql();
  l && (r.nonce = l);
  const [i, , c] = ya(), [u, d] = Re({
    o: e(o, s),
    i: An
  }, re(e, o, s, !0)), [f] = d(), m = t(o), p = {
    x: f.x === 0,
    y: f.y === 0
  }, v = {
    elements: {
      host: null,
      padding: !m,
      viewport: (D) => m && Ss(D) && D,
      content: !1
    },
    scrollbars: {
      slot: !0
    },
    cancel: {
      nativeScrollbarsOverlaid: !1,
      body: null
    }
  }, k = pe({}, Ll), g = re(pe, {}, k), y = re(pe, {}, v), M = {
    T: f,
    k: p,
    R: m,
    V: !!bn,
    L: re(i, "r"),
    U: y,
    P: (D) => pe(v, D) && y(),
    N: g,
    q: (D) => pe(k, D) && g(),
    B: pe({}, v),
    F: pe({}, k)
  };
  if (qe(o, "style"), Ht(o), Se(Pe, "resize", () => {
    c("r", []);
  }), ze(Pe.matchMedia) && !m && (!p.x || !p.y)) {
    const D = (A) => {
      const B = Pe.matchMedia(`(resolution: ${Pe.devicePixelRatio}dppx)`);
      Se(B, "change", () => {
        A(), D(A);
      }, {
        A: !0
      });
    };
    D(() => {
      const [A, B] = u();
      pe(M.T, A), c("r", [B]);
    });
  }
  return M;
}, Je = () => (ta || (ta = Xl()), ta), Ns = (e, t) => ze(t) ? t.apply(0, e) : t, Zl = (e, t, n, a) => {
  const o = La(a) ? n : a;
  return Ns(e, o) || t.apply(0, e);
}, Os = (e, t, n, a) => {
  const o = La(a) ? n : a, s = Ns(e, o);
  return !!s && (Ln(s) ? s : t.apply(0, e));
}, Kl = (e, t) => {
  const { nativeScrollbarsOverlaid: n, body: a } = t || {}, { k: o, R: s, U: r } = Je(), { nativeScrollbarsOverlaid: l, body: i } = r().cancel, c = n ?? l, u = La(a) ? i : a, d = (o.x || o.y) && c, f = e && (Un(u) ? !s : u);
  return !!d || !!f;
}, za = /* @__PURE__ */ new WeakMap(), Jl = (e, t) => {
  za.set(e, t);
}, ei = (e) => {
  za.delete(e);
}, xs = (e) => za.get(e), ti = (e, t, n) => {
  let a = !1;
  const o = n ? /* @__PURE__ */ new WeakMap() : !1, s = () => {
    a = !0;
  }, r = (l) => {
    if (o && n) {
      const i = n.map((c) => {
        const [u, d] = c || [];
        return [d && u ? (l || Es)(u, e) : [], d];
      });
      ye(i, (c) => ye(c[0], (u) => {
        const d = c[1], f = o.get(u) || [];
        if (e.contains(u) && d) {
          const p = Se(u, d, (v) => {
            a ? (p(), o.delete(u)) : t(v);
          });
          o.set(u, we(f, p));
        } else
          xe(f), o.delete(u);
      }));
    }
  };
  return r(), [s, r];
}, Lo = (e, t, n, a) => {
  let o = !1;
  const { j: s, X: r, Y: l, W: i, J: c, G: u } = a || {}, d = ua(() => o && n(!0), {
    _: 33,
    v: 99
  }), [f, m] = ti(e, d, l), p = s || [], v = r || [], k = Zt(p, v), g = (M, D) => {
    if (!ia(D)) {
      const A = c || bt, B = u || bt, V = [], te = [];
      let z = !1, _ = !1;
      if (ye(D, (P) => {
        const { attributeName: C, target: w, type: j, oldValue: G, addedNodes: le, removedNodes: se } = P, de = j === "attributes", ue = j === "childList", be = e === w, O = de && C, x = O && Ha(w, C || ""), W = on(x) ? x : null, K = O && G !== W, L = ss(v, C) && K;
        if (t && (ue || !be)) {
          const ne = de && K, ee = ne && i && da(w, i), ie = (ee ? !A(w, C, G, W) : !de || ne) && !B(P, !!ee, e, a);
          ye(le, (ve) => we(V, ve)), ye(se, (ve) => we(V, ve)), _ = _ || ie;
        }
        !t && be && K && !A(w, C, G, W) && (we(te, C), z = z || L);
      }), m((P) => ca(V).reduce((C, w) => (we(C, Es(P, w)), da(w, P) ? we(C, w) : C), [])), t)
        return !M && _ && n(!1), [!1];
      if (!ia(te) || z) {
        const P = [ca(te), z];
        return !M && n.apply(0, P), P;
      }
    }
  }, y = new bl(re(g, !1));
  return [() => (y.observe(e, {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: k,
    subtree: t,
    childList: t,
    characterData: t
  }), o = !0, () => {
    o && (f(), y.disconnect(), o = !1);
  }), () => {
    if (o)
      return d.m(), g(!0, y.takeRecords());
  }];
}, Fs = {}, Us = {}, ni = (e) => {
  ye(e, (t) => ye(t, (n, a) => {
    Fs[a] = t[a];
  }));
}, zs = (e, t, n) => je(e).map((a) => {
  const { static: o, instance: s } = e[a], [r, l, i] = n || [], c = n ? s : o;
  if (c) {
    const u = n ? c(r, l, t) : c(t);
    return (i || Us)[a] = u;
  }
}), sn = (e) => Us[e], ai = "__osOptionsValidationPlugin", oi = "__osSizeObserverPlugin", si = (e, t) => {
  const { k: n } = t, [a, o] = e("showNativeOverlaidScrollbars");
  return [a && n.x && n.y, o];
}, Rt = (e) => e.indexOf(dt) === 0, ri = (e, t) => {
  const n = (o, s, r, l) => {
    const i = o === dt ? yt : o.replace(`${dt}-`, ""), c = Rt(o), u = Rt(r);
    return !s && !l ? yt : c && u ? dt : c ? s && l ? i : s ? dt : yt : s ? i : u && l ? dt : yt;
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
}, Ys = "__osScrollbarsHidingPlugin", li = "__osClickScrollPlugin", Vs = (e, t, n) => {
  const { dt: a } = n || {}, o = sn(oi), [s] = Re({
    o: !1,
    u: !0
  });
  return () => {
    const r = [], i = $s(`<div class="${Fa}"><div class="${Ol}"></div></div>`)[0], c = i.firstChild, u = (d) => {
      const f = d instanceof ResizeObserverEntry;
      let m = !1, p = !1;
      if (f) {
        const [v, , k] = s(d.contentRect), g = ma(v);
        p = Ts(v, k), m = !p && !g;
      } else
        p = d === !0;
      m || t({
        ft: !0,
        dt: p
      });
    };
    if (Dn) {
      const d = new Dn((f) => u(f.pop()));
      d.observe(c), we(r, () => {
        d.disconnect();
      });
    } else if (o) {
      const [d, f] = o(c, u, a);
      we(r, Zt([Oa(i, Nl), Se(i, "animationstart", d)], f));
    } else
      return bt;
    return re(xe, we(r, Ne(e, i)));
  };
}, ii = (e, t) => {
  let n;
  const a = (i) => i.h === 0 || i.isIntersecting || i.intersectionRatio > 0, o = Mt(xl), [s] = Re({
    o: !1
  }), r = (i, c) => {
    if (i) {
      const u = s(a(i)), [, d] = u;
      return d && !c && t(u) && [u];
    }
  }, l = (i, c) => r(c.pop(), i);
  return [() => {
    const i = [];
    if (vo)
      n = new vo(re(l, !1), {
        root: e
      }), n.observe(o), we(i, () => {
        n.disconnect();
      });
    else {
      const c = () => {
        const u = It(o);
        r(u);
      };
      we(i, Vs(o, c)()), c();
    }
    return re(xe, we(i, Ne(e, o)));
  }, () => n && l(!0, n.takeRecords())];
}, ci = (e, t, n, a) => {
  let o, s, r, l, i, c;
  const u = `[${ft}]`, d = `[${nt}]`, f = ["id", "class", "style", "open", "wrap", "cols", "rows"], { vt: m, ht: p, ot: v, gt: k, bt: g, nt: y, wt: M, yt: D, St: A, Ot: B } = e, V = (L) => at(L, "direction") === "rtl", te = {
    $t: !1,
    ct: V(m)
  }, z = Je(), _ = sn(Ys), [P] = Re({
    i: ms,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const L = _ && _.tt(e, t, te, z, n).ut, ee = !(M && y) && Na(p, ft, En), ae = !y && D(Pl), ie = ae && Oe(k), ve = ie && B(), _e = A(Bs, ee), he = ae && L && L()[0], Q = In(v), X = xa(v);
    return he && he(), Qe(k, ie), ve && ve(), ee && _e(), {
      w: Q.w + X.w,
      h: Q.h + X.h
    };
  }), C = ua(a, {
    _: () => o,
    v: () => s,
    S(L, ne) {
      const [ee] = L, [ae] = ne;
      return [Zt(je(ee), je(ae)).reduce((ie, ve) => (ie[ve] = ee[ve] || ae[ve], ie), {})];
    }
  }), w = (L) => {
    const ne = V(m);
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
  }, G = ({ ft: L, dt: ne }) => {
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
  }, [de, ue] = g ? ii(p, j) : [], be = !y && Vs(p, G, {
    dt: !0
  }), [O, x] = Lo(p, !1, se, {
    X: f,
    j: f
  }), W = y && Dn && new Dn((L) => {
    const ne = L[L.length - 1].contentRect;
    G({
      ft: !0,
      dt: Ts(ne, i)
    }), i = ne;
  }), K = ua(() => {
    const [, L] = P();
    a({
      Ht: L
    });
  }, {
    _: 222,
    p: !0
  });
  return [() => {
    W && W.observe(p);
    const L = be && be(), ne = de && de(), ee = O(), ae = z.L((ie) => {
      ie ? C({
        zt: ie
      }) : K();
    });
    return () => {
      W && W.disconnect(), L && L(), ne && ne(), l && l(), ee(), ae();
    };
  }, ({ It: L, At: ne, Dt: ee }) => {
    const ae = {}, [ie] = L("update.ignoreMutation"), [ve, _e] = L("update.attributes"), [he, Q] = L("update.elementEvents"), [X, Te] = L("update.debounce"), H = Q || _e, Y = ne || ee, F = (J) => ze(ie) && ie(J);
    if (H) {
      r && r(), l && l();
      const [J, E] = Lo(g || v, !0, le, {
        j: Zt(f, ve || []),
        Y: he,
        W: u,
        G: (b, $) => {
          const { target: R, attributeName: Ae } = b;
          return (!$ && Ae && !y ? Sl(R, u, d) : !1) || !!kt(R, `.${Fe}`) || !!F(b);
        }
      });
      l = J(), r = E;
    }
    if (Te)
      if (C.m(), Ze(X)) {
        const J = X[0], E = X[1];
        o = Xe(J) && J, s = Xe(E) && E;
      } else Xe(X) ? (o = X, s = !1) : (o = !1, s = !1);
    if (Y) {
      const J = x(), E = ue && ue(), b = r && r();
      J && pe(ae, se(J[0], J[1], Y)), E && pe(ae, j(E[0], Y)), b && pe(ae, le(b[0], Y));
    }
    return w(ae), ae;
  }, te];
}, ui = (e, t, n, a) => {
  const o = "--os-viewport-percent", s = "--os-scroll-percent", r = "--os-scroll-direction", { U: l } = Je(), { scrollbars: i } = l(), { slot: c } = i, { vt: u, ht: d, ot: f, Mt: m, gt: p, wt: v, nt: k } = t, { scrollbars: g } = m ? {} : e, { slot: y } = g || {}, M = [], D = [], A = [], B = Os([u, d, f], () => k && v ? u : d, c, y), V = (O) => {
    if (bn) {
      const x = new bn({
        source: p,
        axis: O
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
    x: V("x"),
    y: V("y")
  }, z = () => {
    const { Rt: O, Vt: x } = n, W = (K, L) => ys(0, 1, K / (K + L) || 0);
    return {
      x: W(x.x, O.x),
      y: W(x.y, O.y)
    };
  }, _ = (O, x, W) => {
    const K = W ? Oa : _s;
    ye(O, (L) => {
      K(L.Tt, x);
    });
  }, P = (O, x) => {
    ye(O, (W) => {
      const [K, L] = x(W);
      Jt(K, L);
    });
  }, C = (O, x, W) => {
    const K = Ma(W), L = K ? W : !0, ne = K ? !W : !0;
    L && _(D, O, x), ne && _(A, O, x);
  }, w = () => {
    const O = z(), x = (W) => (K) => [K.Tt, {
      [o]: pa(W) + ""
    }];
    P(D, x(O.x)), P(A, x(O.y));
  }, j = () => {
    if (!bn) {
      const { Lt: O } = n, x = bo(O, Oe(p)), W = (K) => (L) => [L.Tt, {
        [s]: pa(K) + ""
      }];
      P(D, W(x.x)), P(A, W(x.y));
    }
  }, G = () => {
    const { Lt: O } = n, x = yo(O), W = (K) => (L) => [L.Tt, {
      [r]: K ? "0" : "1"
    }];
    P(D, W(x.x)), P(A, W(x.y));
  }, le = () => {
    if (k && !v) {
      const { Rt: O, Lt: x } = n, W = yo(x), K = bo(x, Oe(p)), L = (ne) => {
        const { Tt: ee } = ne, ae = Kt(ee) === f && ee, ie = (ve, _e, he) => {
          const Q = _e * ve;
          return ws(he ? Q : -Q);
        };
        return [ae, ae && {
          transform: $l({
            x: ie(K.x, O.x, W.x),
            y: ie(K.y, O.y, W.y)
          })
        }];
      };
      P(D, L), P(A, L);
    }
  }, se = (O) => {
    const x = O ? "x" : "y", K = Mt(`${Fe} ${O ? zl : Yl}`), L = Mt(Hs), ne = Mt(Ua), ee = {
      Tt: K,
      Ut: L,
      Pt: ne
    }, ae = te[x];
    return we(O ? D : A, ee), we(M, [Ne(K, L), Ne(L, ne), re(Ht, K), ae && ae.kt(ee), a(ee, C, O)]), ee;
  }, de = re(se, !0), ue = re(se, !1), be = () => (Ne(B, D[0].Tt), Ne(B, A[0].Tt), re(xe, M));
  return de(), ue(), [{
    Nt: w,
    qt: j,
    Bt: G,
    Ft: le,
    jt: C,
    Xt: {
      Yt: D,
      Wt: de,
      Jt: re(P, D)
    },
    Gt: {
      Yt: A,
      Wt: ue,
      Jt: re(P, A)
    }
  }, be];
}, di = (e, t, n, a) => (o, s, r) => {
  const { ht: l, ot: i, nt: c, gt: u, Kt: d, Ot: f } = t, { Tt: m, Ut: p, Pt: v } = o, [k, g] = Tt(333), [y, M] = Tt(444), D = (V) => {
    ze(u.scrollBy) && u.scrollBy({
      behavior: "smooth",
      left: V.x,
      top: V.y
    });
  }, A = () => {
    const V = "pointerup pointercancel lostpointercapture", te = `client${r ? "X" : "Y"}`, z = r ? Yn : Vn, _ = r ? "left" : "top", P = r ? "w" : "h", C = r ? "x" : "y", w = (G, le) => (se) => {
      const { Rt: de } = n, ue = It(p)[P] - It(v)[P], O = le * se / ue * de[C];
      Qe(u, {
        [C]: G + O
      });
    }, j = [];
    return Se(p, "pointerdown", (G) => {
      const le = kt(G.target, `.${Ua}`) === v, se = le ? v : p, de = e.scrollbars, ue = de[le ? "dragScroll" : "clickScroll"], { button: be, isPrimary: O, pointerType: x } = G, { pointers: W } = de;
      if (be === 0 && O && ue && (W || []).includes(x)) {
        xe(j), M();
        const L = !le && (G.shiftKey || ue === "instant"), ne = re(Jn, v), ee = re(Jn, p), ae = ($, R) => ($ || ne())[_] - (R || ee())[_], ie = ra(Jn(u)[z]) / It(u)[P] || 1, ve = w(Oe(u)[C], 1 / ie), _e = G[te], he = ne(), Q = ee(), X = he[z], Te = ae(he, Q) + X / 2, H = _e - Q[_], Y = le ? 0 : H - Te, F = ($) => {
          xe(b), se.releasePointerCapture($.pointerId);
        }, J = le || L, E = f(), b = [Se(d, V, F), Se(d, "selectstart", ($) => ga($), {
          H: !1
        }), Se(p, V, F), J && Se(p, "pointermove", ($) => ve(Y + ($[te] - _e))), J && (() => {
          const $ = Oe(u);
          E();
          const R = Oe(u), Ae = {
            x: R.x - $.x,
            y: R.y - $.y
          };
          (Cn(Ae.x) > 3 || Cn(Ae.y) > 3) && (f(), Qe(u, $), D(Ae), y(E));
        })];
        if (se.setPointerCapture(G.pointerId), L)
          ve(Y);
        else if (!le) {
          const $ = sn(li);
          if ($) {
            const R = $(ve, Y, X, (Ae) => {
              Ae ? E() : we(b, E);
            });
            we(b, R), we(j, re(R, !0));
          }
        }
      }
    });
  };
  let B = !0;
  return re(xe, [Se(v, "pointermove pointerleave", a), Se(m, "pointerenter", () => {
    s(wo, !0);
  }), Se(m, "pointerleave pointercancel", () => {
    s(wo, !1);
  }), !c && Se(m, "mousedown", () => {
    const V = va();
    (po(V, nt) || po(V, ft) || V === document.body) && wn(re(ha, i), 25);
  }), Se(m, "wheel", (V) => {
    const { deltaX: te, deltaY: z, deltaMode: _ } = V;
    B && _ === 0 && Kt(m) === l && D({
      x: te,
      y: z
    }), B = !1, s(ko, !0), k(() => {
      B = !0, s(ko);
    }), ga(V);
  }, {
    H: !1,
    I: !0
  }), Se(m, "pointerdown", re(Se, d, "click", Ls, {
    A: !0,
    I: !0,
    H: !1
  }), {
    I: !0
  }), A(), g, M]);
}, fi = (e, t, n, a, o, s) => {
  let r, l, i, c, u, d = bt, f = 0;
  const m = (O) => O.pointerType === "mouse", [p, v] = Tt(), [k, g] = Tt(100), [y, M] = Tt(100), [D, A] = Tt(() => f), [B, V] = ui(e, o, a, di(t, o, a, (O) => m(O) && se())), { ht: te, Qt: z, wt: _ } = o, { jt: P, Nt: C, qt: w, Bt: j, Ft: G } = B, le = (O, x) => {
    if (A(), O)
      P(To);
    else {
      const W = re(P, To, !0);
      f > 0 && !x ? D(W) : W();
    }
  }, se = () => {
    (i ? !r : !c) && (le(!0), k(() => {
      le(!1);
    }));
  }, de = (O) => {
    P(Aa, O, !0), P(Aa, O, !1);
  }, ue = (O) => {
    m(O) && (r = i, i && le(!0));
  }, be = [A, g, M, v, () => d(), Se(te, "pointerover", ue, {
    A: !0
  }), Se(te, "pointerenter", ue), Se(te, "pointerleave", (O) => {
    m(O) && (r = !1, i && le(!1));
  }), Se(te, "pointermove", (O) => {
    m(O) && l && se();
  }), Se(z, "scroll", (O) => {
    p(() => {
      w(), se();
    }), s(O), G();
  })];
  return [() => re(xe, we(be, V())), ({ It: O, Dt: x, Zt: W, tn: K }) => {
    const { nn: L, sn: ne, en: ee, cn: ae } = K || {}, { Ct: ie, dt: ve } = W || {}, { ct: _e } = n, { k: he } = Je(), { K: Q, rn: X } = a, [Te, H] = O("showNativeOverlaidScrollbars"), [Y, F] = O("scrollbars.theme"), [J, E] = O("scrollbars.visibility"), [b, $] = O("scrollbars.autoHide"), [R, Ae] = O("scrollbars.autoHideSuspend"), [He] = O("scrollbars.autoHideDelay"), [gt, lt] = O("scrollbars.dragScroll"), [ht, We] = O("scrollbars.clickScroll"), [et, $t] = O("overflow"), Ct = ve && !x, wt = X.x || X.y, Dt = L || ne || ae || ie || x, De = ee || E || $t, ln = Te && he.x && he.y, it = (jt, ct, cn) => {
      const Wt = jt.includes(Pt) && (J === dt || J === "auto" && ct === Pt);
      return P(Vl, Wt, cn), Wt;
    };
    if (f = He, Ct && (R && wt ? (de(!1), d(), y(() => {
      d = Se(z, "scroll", re(de, !0), {
        A: !0
      });
    })) : de(!0)), H && P(Fl, ln), F && (P(u), P(Y, !0), u = Y), Ae && !R && de(!0), $ && (l = b === "move", i = b === "leave", c = b === "never", le(c, !0)), lt && P(ql, gt), We && P(Wl, !!ht), De) {
      const jt = it(et.x, Q.x, !0), ct = it(et.y, Q.y, !1);
      P(jl, !(jt && ct));
    }
    Dt && (w(), C(), G(), ae && j(), P(Do, !X.x, !0), P(Do, !X.y, !1), P(Ul, _e && !_));
  }, {}, B];
}, vi = (e) => {
  const t = Je(), { U: n, R: a } = t, { elements: o } = n(), { padding: s, viewport: r, content: l } = o, i = Ln(e), c = i ? {} : e, { elements: u } = c, { padding: d, viewport: f, content: m } = u || {}, p = i ? e : c.target, v = Ss(p), k = p.ownerDocument, g = k.documentElement, y = () => k.defaultView || Pe, M = re(Zl, [p]), D = re(Os, [p]), A = re(Mt, ""), B = re(M, A, r), V = re(D, A, l), te = (X) => {
    const Te = It(X), H = In(X), Y = at(X, vs), F = at(X, ps);
    return H.w - Te.w > 0 && !Rt(Y) || H.h - Te.h > 0 && !Rt(F);
  }, z = B(f), _ = z === p, P = _ && v, C = !_ && V(m), w = !_ && z === C, j = P ? g : z, G = P ? j : p, le = !_ && D(A, s, d), se = !w && C, de = [se, j, le, G].map((X) => Ln(X) && !Kt(X) && X), ue = (X) => X && ss(de, X), be = !ue(j) && te(j) ? j : p, O = P ? g : j, W = {
    vt: p,
    ht: G,
    ot: j,
    ln: le,
    bt: se,
    gt: O,
    Qt: P ? k : j,
    an: v ? g : be,
    Kt: k,
    wt: v,
    Mt: i,
    nt: _,
    un: y,
    yt: (X) => Na(j, nt, X),
    St: (X, Te) => Mn(j, nt, X, Te),
    Ot: () => Mn(O, nt, Hl, !0)
  }, { vt: K, ht: L, ln: ne, ot: ee, bt: ae } = W, ie = [() => {
    qe(L, [ft, ea]), qe(K, ea), v && qe(g, [ea, ft]);
  }];
  let ve = fa([ae, ee, ne, L, K].find((X) => X && !ue(X)));
  const _e = P ? K : ae || ee, he = re(xe, ie);
  return [W, () => {
    const X = y(), Te = va(), H = (b) => {
      Ne(Kt(b), fa(b)), Ht(b);
    }, Y = (b) => Se(b, "focusin focusout focus blur", Ls, {
      I: !0,
      H: !1
    }), F = "tabindex", J = Ha(ee, F), E = Y(Te);
    return tt(L, ft, _ ? "" : Ml), tt(ne, ba, ""), tt(ee, nt, ""), tt(ae, Co, ""), _ || (tt(ee, F, J || "-1"), v && tt(g, $o, "")), Ne(_e, ve), Ne(L, ne), Ne(ne || L, !_ && ee), Ne(ee, ae), we(ie, [E, () => {
      const b = va(), $ = ue(ee), R = $ && b === ee ? K : b, Ae = Y(R);
      qe(ne, ba), qe(ae, Co), qe(ee, nt), v && qe(g, $o), J ? tt(ee, F, J) : qe(ee, F), ue(ae) && H(ae), $ && H(ee), ue(ne) && H(ne), ha(R), Ae();
    }]), a && !_ && (Ra(ee, nt, Ps), we(ie, re(qe, ee, nt))), ha(!_ && v && Te === K && X.top === X ? ee : Te), E(), ve = 0, he;
  }, he];
}, pi = ({ bt: e }) => ({ Zt: t, _n: n, Dt: a }) => {
  const { xt: o } = t || {}, { $t: s } = n;
  e && (o || a) && Jt(e, {
    [Vn]: s && "100%"
  });
}, mi = ({ ht: e, ln: t, ot: n, nt: a }, o) => {
  const [s, r] = Re({
    i: _l,
    o: go()
  }, re(go, e, "padding", ""));
  return ({ It: l, Zt: i, _n: c, Dt: u }) => {
    let [d, f] = r(u);
    const { R: m } = Je(), { ft: p, Ht: v, Ct: k } = i || {}, { ct: g } = c, [y, M] = l("paddingAbsolute");
    (p || f || (u || v)) && ([d, f] = s(u));
    const A = !a && (M || k || f);
    if (A) {
      const B = !y || !t && !m, V = d.r + d.l, te = d.t + d.b, z = {
        [ds]: B && !g ? -V : 0,
        [fs]: B ? -te : 0,
        [us]: B && g ? -V : 0,
        top: B ? -d.t : 0,
        right: B ? g ? -d.r : "auto" : 0,
        left: B ? g ? "auto" : -d.l : 0,
        [Yn]: B && `calc(100% + ${V}px)`
      }, _ = {
        [rs]: B ? d.t : 0,
        [ls]: B ? d.r : 0,
        [cs]: B ? d.b : 0,
        [is]: B ? d.l : 0
      };
      Jt(t || n, z), Jt(n, _), pe(o, {
        ln: d,
        dn: !B,
        rt: t ? _ : pe({}, z, _)
      });
    }
    return {
      fn: A
    };
  };
}, gi = (e, t) => {
  const n = Je(), { ht: a, ln: o, ot: s, nt: r, Qt: l, gt: i, wt: c, St: u, un: d } = e, { R: f } = n, m = c && r, p = re(as, 0), v = {
    display: () => !1,
    direction: (x) => x !== "ltr",
    flexDirection: (x) => x.endsWith("-reverse"),
    writingMode: (x) => x !== "horizontal-tb"
  }, k = je(v), g = {
    i: ms,
    o: {
      w: 0,
      h: 0
    }
  }, y = {
    i: An,
    o: {}
  }, M = (x) => {
    u(Bs, !m && x);
  }, D = (x) => {
    if (!k.some((_e) => {
      const he = x[_e];
      return he && v[_e](he);
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
    const K = Oe(i), L = u(Rl, !0), ne = Se(l, Pt, (_e) => {
      const he = Oe(i);
      _e.isTrusted && he.x === K.x && he.y === K.y && ks(_e);
    }, {
      I: !0,
      A: !0
    });
    Qe(i, {
      x: 0,
      y: 0
    }), L();
    const ee = Oe(i), ae = In(i);
    Qe(i, {
      x: ae.w,
      y: ae.h
    });
    const ie = Oe(i);
    Qe(i, {
      x: ie.x - ee.x < 1 && -ae.w,
      y: ie.y - ee.y < 1 && -ae.h
    });
    const ve = Oe(i);
    return Qe(i, K), ka(() => ne()), {
      D: ee,
      M: ve
    };
  }, A = (x, W) => {
    const K = Pe.devicePixelRatio % 1 !== 0 ? 1 : 0, L = {
      w: p(x.w - W.w),
      h: p(x.h - W.h)
    };
    return {
      w: L.w > K ? L.w : 0,
      h: L.h > K ? L.h : 0
    };
  }, [B, V] = Re(g, re(xa, s)), [te, z] = Re(g, re(In, s)), [_, P] = Re(g), [C] = Re(y), [w, j] = Re(g), [G] = Re(y), [le] = Re({
    i: (x, W) => jn(x, W, k),
    o: {}
  }, () => Tl(s) ? at(s, k) : {}), [se, de] = Re({
    i: (x, W) => An(x.D, W.D) && An(x.M, W.M),
    o: Ms()
  }), ue = sn(Ys), be = (x, W) => `${W ? Il : Bl}${Al(x)}`, O = (x) => {
    const W = (L) => [dt, yt, Pt].map((ne) => be(ne, L)), K = W(!0).concat(W()).join(" ");
    u(K), u(je(x).map((L) => be(x[L], L === "x")).join(" "), !0);
  };
  return ({ It: x, Zt: W, _n: K, Dt: L }, { fn: ne }) => {
    const { ft: ee, Ht: ae, Ct: ie, dt: ve, zt: _e } = W || {}, he = ue && ue.tt(e, t, K, n, x), { it: Q, ut: X, _t: Te } = he || {}, [H, Y] = si(x, n), [F, J] = x("overflow"), E = Rt(F.x), b = Rt(F.y), $ = !0;
    let R = V(L), Ae = z(L), He = P(L), gt = j(L);
    Y && f && u(Ps, !H);
    {
      Na(a, ft, En) && M(!0);
      const [lo] = X ? X() : [], [un] = R = B(L), [dn] = Ae = te(L), fn = Ds(s), vn = m && Dl(d()), el = {
        w: p(dn.w + un.w),
        h: p(dn.h + un.h)
      }, io = {
        w: p((vn ? vn.w : fn.w + p(fn.w - dn.w)) + un.w),
        h: p((vn ? vn.h : fn.h + p(fn.h - dn.h)) + un.h)
      };
      lo && lo(), gt = w(io), He = _(A(el, io), L);
    }
    const [lt, ht] = gt, [We, et] = He, [$t, Ct] = Ae, [wt, Dt] = R, [De, ln] = C({
      x: We.w > 0,
      y: We.h > 0
    }), it = E && b && (De.x || De.y) || E && De.x && !De.y || b && De.y && !De.x, jt = ne || ie || _e || Dt || Ct || ht || et || J || Y || $, ct = ri(De, F), [cn, Wt] = G(ct.K), [Xr, Zr] = le(L), ro = ie || ve || Zr || ln || L, [Kr, Jr] = ro ? se(D(Xr), L) : de();
    return jt && (Wt && O(ct.K), Te && Q && Jt(s, Te(ct, K, Q(ct, $t, wt)))), M(!1), Mn(a, ft, En, it), Mn(o, ba, En, it), pe(t, {
      K: cn,
      Vt: {
        x: lt.w,
        y: lt.h
      },
      Rt: {
        x: We.w,
        y: We.h
      },
      rn: De,
      Lt: kl(Kr, We)
    }), {
      en: Wt,
      nn: ht,
      sn: et,
      cn: Jr || et,
      vn: ro
    };
  };
}, hi = (e) => {
  const [t, n, a] = vi(e), o = {
    ln: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    dn: !1,
    rt: {
      [ds]: 0,
      [fs]: 0,
      [us]: 0,
      [rs]: 0,
      [ls]: 0,
      [cs]: 0,
      [is]: 0
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
    Lt: Ms()
  }, { vt: s, gt: r, nt: l, Ot: i } = t, { R: c, k: u } = Je(), d = !c && (u.x || u.y), f = [pi(t), mi(t, o), gi(t, o)];
  return [n, (m) => {
    const p = {}, k = d && Oe(r), g = k && i();
    return ye(f, (y) => {
      pe(p, y(m, p) || {});
    }), Qe(r, k), g && g(), !l && Qe(s, 0), p;
  }, o, t, a];
}, yi = (e, t, n, a, o) => {
  let s = !1;
  const r = So(t, {}), [l, i, c, u, d] = hi(e), [f, m, p] = ci(u, c, r, (D) => {
    M({}, D);
  }), [v, k, , g] = fi(e, t, p, c, u, o), y = (D) => je(D).some((A) => !!D[A]), M = (D, A) => {
    if (n())
      return !1;
    const { pn: B, Dt: V, At: te, hn: z } = D, _ = B || {}, P = !!V || !s, C = {
      It: So(t, _, P),
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
    const G = y(w), le = y(j), se = G || le || !Pa(_) || P;
    return s = !0, se && a(D, {
      Zt: w,
      tn: j
    }), se;
  };
  return [() => {
    const { an: D, gt: A, Ot: B } = u, V = Oe(D), te = [f(), l(), v()], z = B();
    return Qe(A, V), z(), re(xe, te);
  }, M, () => ({
    gn: p,
    bn: c
  }), {
    wn: u,
    yn: g
  }, d];
}, Ge = (e, t, n) => {
  const { N: a } = Je(), o = Ln(e), s = o ? e : e.target, r = xs(s);
  if (t && !r) {
    let l = !1;
    const i = [], c = {}, u = (_) => {
      const P = hs(_), C = sn(ai);
      return C ? C(P, !0) : P;
    }, d = pe({}, a(), u(t)), [f, m, p] = ya(), [v, k, g] = ya(n), y = (_, P) => {
      g(_, P), p(_, P);
    }, [M, D, A, B, V] = yi(e, d, () => l, ({ pn: _, Dt: P }, { Zt: C, tn: w }) => {
      const { ft: j, Ct: G, xt: le, Ht: se, Et: de, dt: ue } = C, { nn: be, sn: O, en: x, cn: W } = w;
      y("updated", [z, {
        updateHints: {
          sizeChanged: !!j,
          directionChanged: !!G,
          heightIntrinsicChanged: !!le,
          overflowEdgeChanged: !!be,
          overflowAmountChanged: !!O,
          overflowStyleChanged: !!x,
          scrollCoordinatesChanged: !!W,
          contentMutation: !!se,
          hostMutation: !!de,
          appear: !!ue
        },
        changedOptions: _ || {},
        force: !!P
      }]);
    }, (_) => y("scroll", [z, _])), te = (_) => {
      ei(s), xe(i), l = !0, y("destroyed", [z, _]), m(), k();
    }, z = {
      options(_, P) {
        if (_) {
          const C = P ? a() : {}, w = Is(d, pe(C, u(_)));
          Pa(w) || (pe(d, w), D({
            pn: w
          }));
        }
        return pe({}, d);
      },
      on: v,
      off: (_, P) => {
        _ && P && k(_, P);
      },
      state() {
        const { gn: _, bn: P } = A(), { ct: C } = _, { Vt: w, Rt: j, K: G, rn: le, ln: se, dn: de, Lt: ue } = P;
        return pe({}, {
          overflowEdge: w,
          overflowAmount: j,
          overflowStyle: G,
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
        const { vt: _, ht: P, ln: C, ot: w, bt: j, gt: G, Qt: le } = B.wn, { Xt: se, Gt: de } = B.yn, ue = (O) => {
          const { Pt: x, Ut: W, Tt: K } = O;
          return {
            scrollbar: K,
            track: W,
            handle: x
          };
        }, be = (O) => {
          const { Yt: x, Wt: W } = O, K = ue(x[0]);
          return pe({}, K, {
            clone: () => {
              const L = ue(W());
              return D({
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
          scrollOffsetElement: G,
          scrollEventElement: le,
          scrollbarHorizontal: be(se),
          scrollbarVertical: be(de)
        });
      },
      update: (_) => D({
        Dt: _,
        At: !0
      }),
      destroy: re(te, !1),
      plugin: (_) => c[je(_)[0]]
    };
    return we(i, [V]), Jl(s, z), zs(Fs, Ge, [z, f, c]), Kl(B.wn.wt, !o && e.cancel) ? (te(!0), z) : (we(i, M()), y("initialized", [z]), z.update(), z);
  }
  return r;
};
Ge.plugin = (e) => {
  const t = Ze(e), n = t ? e : [e], a = n.map((o) => zs(o, Ge)[0]);
  return ni(n), t ? a : a[0];
};
Ge.valid = (e) => {
  const t = e && e.elements, n = ze(t) && t();
  return kn(n) && !!xs(n.target);
};
Ge.env = () => {
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
Ge.nonce = Gl;
const bi = () => {
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
    (c, u) => {
      i(), e = r(
        a ? () => {
          i(), t = o(c);
        } : c,
        typeof u == "object" ? u : { timeout: 2233 }
      );
    },
    i
  ];
}, Ai = (e) => {
  let t = null, n, a, o;
  const s = Sn(e || {}), [r, l] = bi();
  return Be(
    () => {
      var i;
      return $e((i = s.value) == null ? void 0 : i.defer);
    },
    (i) => {
      o = i;
    },
    { deep: !0, immediate: !0 }
  ), Be(
    () => {
      var i;
      return $e((i = s.value) == null ? void 0 : i.options);
    },
    (i) => {
      n = i, Ge.valid(t) && t.options(n || {}, !0);
    },
    { deep: !0, immediate: !0 }
  ), Be(
    () => {
      var i;
      return $e((i = s.value) == null ? void 0 : i.events);
    },
    (i) => {
      a = i, Ge.valid(t) && t.on(
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
      if (Ge.valid(t))
        return t;
      const c = () => t = Ge(i, n || {}, a || {});
      o ? r(c, o) : c();
    },
    () => t
  ];
}, _i = /* @__PURE__ */ N({
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
    }, { element: s, options: r, events: l, defer: i } = Nn(a), c = Sn(null), u = Sn(null), d = h(), [f, m] = Ai({ options: r, events: d, defer: i });
    return t({
      osInstance: m,
      getElement: () => c.value
    }), nl((p) => {
      const { value: v } = c, { value: k } = u;
      v && (f(
        s.value === "body" ? {
          target: v,
          cancel: {
            body: null
          }
        } : {
          target: v,
          elements: {
            viewport: k,
            content: k
          }
        }
      ), p(() => {
        var g;
        return (g = m()) == null ? void 0 : g.destroy();
      }));
    }), Be(
      () => $e(l),
      (p) => {
        const v = p || {};
        d.value = Object.keys(o).reduce((k, g) => {
          const y = v[g];
          return k[g] = [
            (...M) => n(
              o[g],
              ...M
            ),
            ...(Array.isArray(y) ? y : [y]).filter(Boolean)
          ], k;
        }, {});
      },
      { deep: !0, immediate: !0 }
    ), (p, v) => (T(), Ye(Da($e(s)), {
      "data-overlayscrollbars-initialize": "",
      ref_key: "elementRef",
      ref: c
    }, {
      default: On(() => [
        $e(s) === "body" ? U(p.$slots, "default", { key: 0 }) : (T(), I("div", {
          key: 1,
          "data-overlayscrollbars-contents": "",
          ref_key: "slotRef",
          ref: u
        }, [
          U(p.$slots, "default")
        ], 512))
      ]),
      _: 3
    }, 512));
  }
}), js = /* @__PURE__ */ N({
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
    return (l, i) => (T(), Ye($e(_i), {
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
      default: On(() => [
        U(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "options", "events"]));
  }
}), Ws = Symbol("listPosition"), qs = Symbol("clickedButton"), Qs = Symbol("isActiveList"), Gs = Symbol("dropdownList"), Xs = Symbol("dropdownButton"), Zs = Symbol("clickedDropdownItemButton"), Ks = Symbol("button_disabled"), Xp = /* @__PURE__ */ N({
  __name: "HDropdownArea",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    scrollEventRefs: {}
  },
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    var k;
    const n = e, a = t, o = h(!1), s = h(null), r = h(0), l = h(null), i = h(null), c = h(null);
    (k = n.modelValue) != null && k.value && (c.value = n.modelValue);
    const u = h({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      clientWidth: 0,
      clientHeight: 0
    }), d = () => {
      if (o.value = !o.value, !s.value)
        return;
      const { bottom: g, left: y, right: M, top: D, width: A } = s.value.getBoundingClientRect();
      r.value = A, u.value = {
        bottom: g,
        left: y,
        right: M,
        top: D,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, f = () => {
      if (!s.value)
        return;
      const { bottom: g, left: y, right: M, top: D } = s.value.getBoundingClientRect();
      u.value = { ...u.value, bottom: g, left: y, right: M, top: D };
    }, m = () => {
      u.value = {
        ...u.value,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, p = (g) => {
      const y = g.target;
      if (!(y instanceof Element))
        return;
      const M = y.closest(".h_dropdown_button");
      if (M) {
        M !== l.value && (o.value = !1, a("blur"));
        return;
      }
      const D = y.closest(".h_dropdown_list");
      (!D || D !== i.value) && (o.value = !1, a("blur"));
    }, v = (g, y, M) => {
      a("update:modelValue", { value: y, name: M }), c.value = { value: y, name: M }, o.value = !1;
    };
    return Be(o, (g) => {
      g ? (window.addEventListener("scroll", f), Array.isArray(n.scrollEventRefs) && n.scrollEventRefs.forEach((y) => {
        const M = document.querySelector(y);
        M instanceof HTMLElement && M.addEventListener("scroll", f);
      }), window.addEventListener("resize", m), window.addEventListener("click", p)) : (window.removeEventListener("scroll", f), Array.isArray(n.scrollEventRefs) && n.scrollEventRefs.forEach((y) => {
        const M = document.querySelector(y);
        M instanceof HTMLElement && M.removeEventListener("scroll", f);
      }), window.removeEventListener("resize", m), window.removeEventListener("click", p));
    }), pt(() => {
      window.removeEventListener("scroll", f), window.removeEventListener("resize", m), window.removeEventListener("click", p), Array.isArray(n.scrollEventRefs) && n.scrollEventRefs.forEach((g) => {
        const y = document.querySelector(g);
        y instanceof HTMLElement && y.removeEventListener("scroll", f);
      });
    }), q(Ws, u), q(Qs, o), q(qs, d), q(Gs, i), q(Xs, l), q(Zs, v), q(Ks, ce(() => n.disabled)), (g, y) => (T(), I("div", {
      ref_key: "dropdownArea",
      ref: s,
      class: "h_dropdown_area"
    }, [
      U(g.$slots, "default", {
        isActiveList: o.value,
        listWidth: r.value
      })
    ], 512));
  }
}), Ei = {}, Si = { class: "h_dropdown_item" };
function $i(e, t) {
  return T(), I("div", Si, [
    U(e.$slots, "default")
  ]);
}
const Zp = /* @__PURE__ */ Z(Ei, [["render", $i]]), Ci = ["disabled"], Kp = /* @__PURE__ */ N({
  __name: "HDropdownButton",
  setup(e) {
    const t = S(qs), n = S(Xs), a = S(Ks);
    return (o, s) => (T(), I("button", {
      ref_key: "dropdownButton",
      ref: n,
      type: "button",
      class: "h_dropdown_button",
      disabled: $e(a),
      onClick: s[0] || (s[0] = //@ts-ignore
      (...r) => $e(t) && $e(t)(...r))
    }, [
      U(o.$slots, "default")
    ], 8, Ci));
  }
}), wi = ["disabled"], Jp = /* @__PURE__ */ N({
  __name: "HDropdownItemButton",
  props: {
    value: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t, a = al(), o = S(
      Zs,
      (s, r, l) => {
        n("click", s, r, l);
      }
    );
    return (s, r) => (T(), I("button", Jo({
      type: "button",
      class: "h_dropdown_item_button",
      disabled: s.disabled
    }, $e(a), {
      onClick: r[0] || (r[0] = (l) => $e(o)(l, s.value, s.name))
    }), [
      U(s.$slots, "default")
    ], 16, wi));
  }
}), em = /* @__PURE__ */ N({
  __name: "HDropdownList",
  props: {
    listWidth: {}
  },
  setup(e) {
    const t = e, n = S(Qs), a = S(Ws), o = S(Gs), s = (i, c, u, d) => c + u > d ? {
      top: "auto",
      bottom: `${d - i}px`,
      marginBottom: "-1px"
    } : {
      top: `${c}px`,
      bottom: "auto",
      marginTop: "-1px"
    }, r = (i, c, u, d) => c + u > d ? {
      left: "auto",
      right: `${d - c}px`
    } : {
      left: `${i}px`,
      right: "auto"
    }, l = ce(() => {
      if (!a || !xn(a))
        return {
          position: "fixed"
        };
      const { bottom: i, left: c, right: u, top: d, clientWidth: f, clientHeight: m } = a.value;
      if (!((o == null ? void 0 : o.value) instanceof HTMLElement))
        return {};
      const { height: p, width: v } = o.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...s(d, i, p, m),
        ...r(c, u, v, f),
        width: `${t.listWidth}px`
      };
    });
    return (i, c) => $e(n) ? (T(), I("div", {
      key: 0,
      ref_key: "dropdownList",
      ref: o,
      style: Le(l.value),
      class: "h_dropdown_list"
    }, [
      es(js, { style: { "max-height": "300px" } }, {
        default: On(() => [
          U(i.$slots, "default")
        ]),
        _: 3
      })
    ], 4)) : Ie("", !0);
  }
}), tm = /* @__PURE__ */ N({
  __name: "HCheckAuth",
  props: {
    isAuth: {},
    noAuthList: {},
    originalEventTarget: { default: "button" },
    originalEventTargetEvent: {}
  },
  emits: ["auth-verification-result"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = h(null), s = ts(), r = Ta(), l = h(null), i = (d) => {
      var f;
      return d.preventDefault(), d.stopPropagation(), n.isAuth ? !((f = n.noAuthList) != null && f.includes(n.isAuth)) : !0;
    }, c = (d) => {
      var f, m, p;
      (f = o.value) == null || f.removeEventListener("click", u, {
        capture: !0
      }), (m = o.value) == null || m.click(), (p = o.value) == null || p.addEventListener("click", u, {
        capture: !0
      });
    }, u = (d) => {
      d.preventDefault(), d.stopPropagation();
      const f = i(d);
      a("auth-verification-result", {
        event: d,
        result: f,
        originalFunc: c
      });
    };
    return Ke(async () => {
      var m, p, v, k, g, y, M;
      o.value = (m = s == null ? void 0 : s.proxy) == null ? void 0 : m.$el.querySelector(n.originalEventTarget), (p = o.value) == null || p.addEventListener("click", u, {
        capture: !0
      });
      const d = n.originalEventTargetEvent, f = (v = r == null ? void 0 : r.default) == null ? void 0 : v.call(r)[0];
      if (f)
        if (n.originalEventTargetEvent)
          if (f.props)
            l.value = n[d];
          else {
            const D = (k = f.type) == null ? void 0 : k.setup;
            typeof D == "function" && (l.value = (g = D()) == null ? void 0 : g[d]);
          }
        else if (f.props)
          l.value = f.props.onClick;
        else {
          const D = (y = f.type) == null ? void 0 : y.setup;
          typeof D == "function" && (l.value = (M = D()) == null ? void 0 : M.onClick);
        }
    }), pt(() => {
      var d;
      (d = o.value) == null || d.removeEventListener("click", u);
    }), (d, f) => (T(), I("div", null, [
      U(d.$slots, "default", { ref: "slotElements" })
    ]));
  }
});
var Js = typeof global == "object" && global && global.Object === Object && global, Di = typeof self == "object" && self && self.Object === Object && self, st = Js || Di || Function("return this")(), Nt = st.Symbol, er = Object.prototype, Ti = er.hasOwnProperty, ki = er.toString, qt = Nt ? Nt.toStringTag : void 0;
function Li(e) {
  var t = Ti.call(e, qt), n = e[qt];
  try {
    e[qt] = void 0;
    var a = !0;
  } catch {
  }
  var o = ki.call(e);
  return a && (t ? e[qt] = n : delete e[qt]), o;
}
var Mi = Object.prototype, Ii = Mi.toString;
function Bi(e) {
  return Ii.call(e);
}
var Pi = "[object Null]", Hi = "[object Undefined]", Mo = Nt ? Nt.toStringTag : void 0;
function rn(e) {
  return e == null ? e === void 0 ? Hi : Pi : Mo && Mo in Object(e) ? Li(e) : Bi(e);
}
function en(e) {
  return e != null && typeof e == "object";
}
var Bn = Array.isArray;
function tr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ri = "[object AsyncFunction]", Ni = "[object Function]", Oi = "[object GeneratorFunction]", xi = "[object Proxy]";
function nr(e) {
  if (!tr(e))
    return !1;
  var t = rn(e);
  return t == Ni || t == Oi || t == Ri || t == xi;
}
var na = st["__core-js_shared__"], Io = function() {
  var e = /[^.]+$/.exec(na && na.keys && na.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fi(e) {
  return !!Io && Io in e;
}
var Ui = Function.prototype, zi = Ui.toString;
function Et(e) {
  if (e != null) {
    try {
      return zi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Yi = /[\\^$.*+?()[\]{}|]/g, Vi = /^\[object .+?Constructor\]$/, ji = Function.prototype, Wi = Object.prototype, qi = ji.toString, Qi = Wi.hasOwnProperty, Gi = RegExp(
  "^" + qi.call(Qi).replace(Yi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xi(e) {
  if (!tr(e) || Fi(e))
    return !1;
  var t = nr(e) ? Gi : Vi;
  return t.test(Et(e));
}
function Zi(e, t) {
  return e == null ? void 0 : e[t];
}
function Ut(e, t) {
  var n = Zi(e, t);
  return Xi(n) ? n : void 0;
}
var _a = Ut(st, "WeakMap"), Ki = 9007199254740991, Ji = /^(?:0|[1-9]\d*)$/;
function ec(e, t) {
  var n = typeof e;
  return t = t ?? Ki, !!t && (n == "number" || n != "symbol" && Ji.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ar(e, t) {
  return e === t || e !== e && t !== t;
}
var tc = 9007199254740991;
function or(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= tc;
}
function nc(e) {
  return e != null && or(e.length) && !nr(e);
}
var ac = Object.prototype;
function oc(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ac;
  return e === n;
}
function sc(e, t) {
  for (var n = -1, a = Array(e); ++n < e; )
    a[n] = t(n);
  return a;
}
var rc = "[object Arguments]";
function Bo(e) {
  return en(e) && rn(e) == rc;
}
var sr = Object.prototype, lc = sr.hasOwnProperty, ic = sr.propertyIsEnumerable, cc = Bo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Bo : function(e) {
  return en(e) && lc.call(e, "callee") && !ic.call(e, "callee");
};
function uc() {
  return !1;
}
var rr = typeof exports == "object" && exports && !exports.nodeType && exports, Po = rr && typeof module == "object" && module && !module.nodeType && module, dc = Po && Po.exports === rr, Ho = dc ? st.Buffer : void 0, fc = Ho ? Ho.isBuffer : void 0, Ea = fc || uc, vc = "[object Arguments]", pc = "[object Array]", mc = "[object Boolean]", gc = "[object Date]", hc = "[object Error]", yc = "[object Function]", bc = "[object Map]", Ac = "[object Number]", _c = "[object Object]", Ec = "[object RegExp]", Sc = "[object Set]", $c = "[object String]", Cc = "[object WeakMap]", wc = "[object ArrayBuffer]", Dc = "[object DataView]", Tc = "[object Float32Array]", kc = "[object Float64Array]", Lc = "[object Int8Array]", Mc = "[object Int16Array]", Ic = "[object Int32Array]", Bc = "[object Uint8Array]", Pc = "[object Uint8ClampedArray]", Hc = "[object Uint16Array]", Rc = "[object Uint32Array]", Ee = {};
Ee[Tc] = Ee[kc] = Ee[Lc] = Ee[Mc] = Ee[Ic] = Ee[Bc] = Ee[Pc] = Ee[Hc] = Ee[Rc] = !0;
Ee[vc] = Ee[pc] = Ee[wc] = Ee[mc] = Ee[Dc] = Ee[gc] = Ee[hc] = Ee[yc] = Ee[bc] = Ee[Ac] = Ee[_c] = Ee[Ec] = Ee[Sc] = Ee[$c] = Ee[Cc] = !1;
function Nc(e) {
  return en(e) && or(e.length) && !!Ee[rn(e)];
}
function Oc(e) {
  return function(t) {
    return e(t);
  };
}
var lr = typeof exports == "object" && exports && !exports.nodeType && exports, Xt = lr && typeof module == "object" && module && !module.nodeType && module, xc = Xt && Xt.exports === lr, aa = xc && Js.process, Ro = function() {
  try {
    var e = Xt && Xt.require && Xt.require("util").types;
    return e || aa && aa.binding && aa.binding("util");
  } catch {
  }
}(), No = Ro && Ro.isTypedArray, ir = No ? Oc(No) : Nc, Fc = Object.prototype, Uc = Fc.hasOwnProperty;
function zc(e, t) {
  var n = Bn(e), a = !n && cc(e), o = !n && !a && Ea(e), s = !n && !a && !o && ir(e), r = n || a || o || s, l = r ? sc(e.length, String) : [], i = l.length;
  for (var c in e)
    Uc.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ec(c, i))) && l.push(c);
  return l;
}
function Yc(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Vc = Yc(Object.keys, Object), jc = Object.prototype, Wc = jc.hasOwnProperty;
function qc(e) {
  if (!oc(e))
    return Vc(e);
  var t = [];
  for (var n in Object(e))
    Wc.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Qc(e) {
  return nc(e) ? zc(e) : qc(e);
}
var tn = Ut(Object, "create");
function Gc() {
  this.__data__ = tn ? tn(null) : {}, this.size = 0;
}
function Xc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Zc = "__lodash_hash_undefined__", Kc = Object.prototype, Jc = Kc.hasOwnProperty;
function eu(e) {
  var t = this.__data__;
  if (tn) {
    var n = t[e];
    return n === Zc ? void 0 : n;
  }
  return Jc.call(t, e) ? t[e] : void 0;
}
var tu = Object.prototype, nu = tu.hasOwnProperty;
function au(e) {
  var t = this.__data__;
  return tn ? t[e] !== void 0 : nu.call(t, e);
}
var ou = "__lodash_hash_undefined__";
function su(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = tn && t === void 0 ? ou : t, this;
}
function _t(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
_t.prototype.clear = Gc;
_t.prototype.delete = Xc;
_t.prototype.get = eu;
_t.prototype.has = au;
_t.prototype.set = su;
function ru() {
  this.__data__ = [], this.size = 0;
}
function Qn(e, t) {
  for (var n = e.length; n--; )
    if (ar(e[n][0], t))
      return n;
  return -1;
}
var lu = Array.prototype, iu = lu.splice;
function cu(e) {
  var t = this.__data__, n = Qn(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : iu.call(t, n, 1), --this.size, !0;
}
function uu(e) {
  var t = this.__data__, n = Qn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function du(e) {
  return Qn(this.__data__, e) > -1;
}
function fu(e, t) {
  var n = this.__data__, a = Qn(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
rt.prototype.clear = ru;
rt.prototype.delete = cu;
rt.prototype.get = uu;
rt.prototype.has = du;
rt.prototype.set = fu;
var nn = Ut(st, "Map");
function vu() {
  this.size = 0, this.__data__ = {
    hash: new _t(),
    map: new (nn || rt)(),
    string: new _t()
  };
}
function pu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Gn(e, t) {
  var n = e.__data__;
  return pu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function mu(e) {
  var t = Gn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function gu(e) {
  return Gn(this, e).get(e);
}
function hu(e) {
  return Gn(this, e).has(e);
}
function yu(e, t) {
  var n = Gn(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function St(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
St.prototype.clear = vu;
St.prototype.delete = mu;
St.prototype.get = gu;
St.prototype.has = hu;
St.prototype.set = yu;
function bu(e, t) {
  for (var n = -1, a = t.length, o = e.length; ++n < a; )
    e[o + n] = t[n];
  return e;
}
function Au() {
  this.__data__ = new rt(), this.size = 0;
}
function _u(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Eu(e) {
  return this.__data__.get(e);
}
function Su(e) {
  return this.__data__.has(e);
}
var $u = 200;
function Cu(e, t) {
  var n = this.__data__;
  if (n instanceof rt) {
    var a = n.__data__;
    if (!nn || a.length < $u - 1)
      return a.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new St(a);
  }
  return n.set(e, t), this.size = n.size, this;
}
function vt(e) {
  var t = this.__data__ = new rt(e);
  this.size = t.size;
}
vt.prototype.clear = Au;
vt.prototype.delete = _u;
vt.prototype.get = Eu;
vt.prototype.has = Su;
vt.prototype.set = Cu;
function wu(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, o = 0, s = []; ++n < a; ) {
    var r = e[n];
    t(r, n, e) && (s[o++] = r);
  }
  return s;
}
function Du() {
  return [];
}
var Tu = Object.prototype, ku = Tu.propertyIsEnumerable, Oo = Object.getOwnPropertySymbols, Lu = Oo ? function(e) {
  return e == null ? [] : (e = Object(e), wu(Oo(e), function(t) {
    return ku.call(e, t);
  }));
} : Du;
function Mu(e, t, n) {
  var a = t(e);
  return Bn(e) ? a : bu(a, n(e));
}
function xo(e) {
  return Mu(e, Qc, Lu);
}
var Sa = Ut(st, "DataView"), $a = Ut(st, "Promise"), Ca = Ut(st, "Set"), Fo = "[object Map]", Iu = "[object Object]", Uo = "[object Promise]", zo = "[object Set]", Yo = "[object WeakMap]", Vo = "[object DataView]", Bu = Et(Sa), Pu = Et(nn), Hu = Et($a), Ru = Et(Ca), Nu = Et(_a), ut = rn;
(Sa && ut(new Sa(new ArrayBuffer(1))) != Vo || nn && ut(new nn()) != Fo || $a && ut($a.resolve()) != Uo || Ca && ut(new Ca()) != zo || _a && ut(new _a()) != Yo) && (ut = function(e) {
  var t = rn(e), n = t == Iu ? e.constructor : void 0, a = n ? Et(n) : "";
  if (a)
    switch (a) {
      case Bu:
        return Vo;
      case Pu:
        return Fo;
      case Hu:
        return Uo;
      case Ru:
        return zo;
      case Nu:
        return Yo;
    }
  return t;
});
var jo = st.Uint8Array, Ou = "__lodash_hash_undefined__";
function xu(e) {
  return this.__data__.set(e, Ou), this;
}
function Fu(e) {
  return this.__data__.has(e);
}
function Pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new St(); ++t < n; )
    this.add(e[t]);
}
Pn.prototype.add = Pn.prototype.push = xu;
Pn.prototype.has = Fu;
function Uu(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function zu(e, t) {
  return e.has(t);
}
var Yu = 1, Vu = 2;
function cr(e, t, n, a, o, s) {
  var r = n & Yu, l = e.length, i = t.length;
  if (l != i && !(r && i > l))
    return !1;
  var c = s.get(e), u = s.get(t);
  if (c && u)
    return c == t && u == e;
  var d = -1, f = !0, m = n & Vu ? new Pn() : void 0;
  for (s.set(e, t), s.set(t, e); ++d < l; ) {
    var p = e[d], v = t[d];
    if (a)
      var k = r ? a(v, p, d, t, e, s) : a(p, v, d, e, t, s);
    if (k !== void 0) {
      if (k)
        continue;
      f = !1;
      break;
    }
    if (m) {
      if (!Uu(t, function(g, y) {
        if (!zu(m, y) && (p === g || o(p, g, n, a, s)))
          return m.push(y);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === v || o(p, v, n, a, s))) {
      f = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}
function ju(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a, o) {
    n[++t] = [o, a];
  }), n;
}
function Wu(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a) {
    n[++t] = a;
  }), n;
}
var qu = 1, Qu = 2, Gu = "[object Boolean]", Xu = "[object Date]", Zu = "[object Error]", Ku = "[object Map]", Ju = "[object Number]", ed = "[object RegExp]", td = "[object Set]", nd = "[object String]", ad = "[object Symbol]", od = "[object ArrayBuffer]", sd = "[object DataView]", Wo = Nt ? Nt.prototype : void 0, oa = Wo ? Wo.valueOf : void 0;
function rd(e, t, n, a, o, s, r) {
  switch (n) {
    case sd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case od:
      return !(e.byteLength != t.byteLength || !s(new jo(e), new jo(t)));
    case Gu:
    case Xu:
    case Ju:
      return ar(+e, +t);
    case Zu:
      return e.name == t.name && e.message == t.message;
    case ed:
    case nd:
      return e == t + "";
    case Ku:
      var l = ju;
    case td:
      var i = a & qu;
      if (l || (l = Wu), e.size != t.size && !i)
        return !1;
      var c = r.get(e);
      if (c)
        return c == t;
      a |= Qu, r.set(e, t);
      var u = cr(l(e), l(t), a, o, s, r);
      return r.delete(e), u;
    case ad:
      if (oa)
        return oa.call(e) == oa.call(t);
  }
  return !1;
}
var ld = 1, id = Object.prototype, cd = id.hasOwnProperty;
function ud(e, t, n, a, o, s) {
  var r = n & ld, l = xo(e), i = l.length, c = xo(t), u = c.length;
  if (i != u && !r)
    return !1;
  for (var d = i; d--; ) {
    var f = l[d];
    if (!(r ? f in t : cd.call(t, f)))
      return !1;
  }
  var m = s.get(e), p = s.get(t);
  if (m && p)
    return m == t && p == e;
  var v = !0;
  s.set(e, t), s.set(t, e);
  for (var k = r; ++d < i; ) {
    f = l[d];
    var g = e[f], y = t[f];
    if (a)
      var M = r ? a(y, g, f, t, e, s) : a(g, y, f, e, t, s);
    if (!(M === void 0 ? g === y || o(g, y, n, a, s) : M)) {
      v = !1;
      break;
    }
    k || (k = f == "constructor");
  }
  if (v && !k) {
    var D = e.constructor, A = t.constructor;
    D != A && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof A == "function" && A instanceof A) && (v = !1);
  }
  return s.delete(e), s.delete(t), v;
}
var dd = 1, qo = "[object Arguments]", Qo = "[object Array]", gn = "[object Object]", fd = Object.prototype, Go = fd.hasOwnProperty;
function vd(e, t, n, a, o, s) {
  var r = Bn(e), l = Bn(t), i = r ? Qo : ut(e), c = l ? Qo : ut(t);
  i = i == qo ? gn : i, c = c == qo ? gn : c;
  var u = i == gn, d = c == gn, f = i == c;
  if (f && Ea(e)) {
    if (!Ea(t))
      return !1;
    r = !0, u = !1;
  }
  if (f && !u)
    return s || (s = new vt()), r || ir(e) ? cr(e, t, n, a, o, s) : rd(e, t, i, n, a, o, s);
  if (!(n & dd)) {
    var m = u && Go.call(e, "__wrapped__"), p = d && Go.call(t, "__wrapped__");
    if (m || p) {
      var v = m ? e.value() : e, k = p ? t.value() : t;
      return s || (s = new vt()), o(v, k, n, a, s);
    }
  }
  return f ? (s || (s = new vt()), ud(e, t, n, a, o, s)) : !1;
}
function ur(e, t, n, a, o) {
  return e === t ? !0 : e == null || t == null || !en(e) && !en(t) ? e !== e && t !== t : vd(e, t, n, a, ur, o);
}
function Ot(e, t) {
  return ur(e, t);
}
function nm() {
  return {
    checkEqual: ce(
      () => (t, n) => Ot(t, n)
    )
  };
}
const hn = {}, Qt = {}, am = (e, t) => {
  const n = t.split("?")[0], a = () => {
    s();
  };
  Be(e, (l, i) => {
    l && (i && i.removeEventListener("input", a), l.addEventListener("input", a), hn[n] = o(), Qt[n] = Ot(
      hn[n],
      o()
    ));
  }), pt(() => {
    e.value && e.value.removeEventListener("input", a);
  });
  const o = () => {
    if (!e.value)
      return null;
    const l = new FormData(e.value), i = {};
    return l.forEach((c, u) => {
      i[u] = c;
    }), JSON.stringify(i);
  };
  hn[n] = o();
  const s = () => {
    if (!e.value)
      return null;
    const l = o();
    return Qt[n] = Ot(
      hn[n],
      l
    ), Qt[n];
  };
  return {
    deleteComponentState: () => {
      delete Qt[n];
    }
  };
}, pd = () => Qt, om = /* @__PURE__ */ N({
  __name: "HCheckFormDataChange",
  props: {
    href: {},
    target: {},
    originalEventTarget: { default: "a" },
    originalEventTargetEvent: {}
  },
  emits: ["data-change-verification-result"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ts(), s = Ta(), r = h(null), l = h(null), i = () => {
      const d = pd()[window.location.href.split("?")[0]];
      return d === void 0 || !!d;
    }, c = (d) => {
      var f, m, p;
      (f = r.value) == null || f.removeEventListener("click", u, {
        capture: !0
      }), (m = r.value) == null || m.click(), (p = r.value) == null || p.addEventListener("click", u, {
        capture: !0
      });
    }, u = (d) => {
      d.preventDefault(), d.stopPropagation();
      const f = i();
      a("data-change-verification-result", {
        event: d,
        result: f,
        originalFunc: c,
        href: n.href,
        target: n.target
      });
    };
    return Ke(async () => {
      var m, p, v, k, g, y, M;
      r.value = (m = o == null ? void 0 : o.proxy) == null ? void 0 : m.$el.querySelector(n.originalEventTarget), (p = r.value) == null || p.addEventListener("click", u, {
        capture: !0
      });
      const d = n.originalEventTargetEvent, f = (v = s == null ? void 0 : s.default) == null ? void 0 : v.call(s)[0];
      if (f)
        if (n.originalEventTargetEvent)
          if (f.props)
            l.value = n[d];
          else {
            const D = (k = f.type) == null ? void 0 : k.setup;
            typeof D == "function" && (l.value = (g = D()) == null ? void 0 : g[d]);
          }
        else if (f.props)
          l.value = f.props.onClick;
        else {
          const D = (y = f.type) == null ? void 0 : y.setup;
          typeof D == "function" && (l.value = (M = D()) == null ? void 0 : M.onClick);
        }
    }), pt(() => {
      var d;
      (d = r.value) == null || d.removeEventListener("click", u);
    }), (d, f) => (T(), I("div", null, [
      U(d.$slots, "default")
    ]));
  }
}), dr = Symbol("triggerFileInput"), fr = Symbol("files"), vr = Symbol("formatSize"), pr = Symbol("removeFile"), md = ["multiple"], sm = /* @__PURE__ */ N({
  __name: "HFileUploadArea",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: !1 },
    maxFiles: { default: Number.MAX_VALUE },
    maxSize: { default: Number.MAX_VALUE }
  },
  emits: ["update:modelValue", "exceed-file-num", "exceed-file-size"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ce(() => n.multiple ? n.maxFiles : 1), s = h(n.modelValue);
    Be(() => n.modelValue, (g) => {
      s.value = g;
    });
    const r = h(null), l = (g) => {
      if (!r.value)
        return;
      const y = new DataTransfer();
      g.forEach((M) => y.items.add(M)), r.value.files = y.files;
    }, i = () => {
      var g;
      (g = r.value) == null || g.click();
    }, c = (g) => {
      const y = g.target;
      y.files && p([...y.files]);
    }, u = h(!1), d = () => {
      u.value = !1;
    }, f = (g) => {
      u.value = !0, g.dataTransfer && (g.dataTransfer.dropEffect = "copy");
    }, m = (g) => {
      u.value = !1, g.dataTransfer && p([...g.dataTransfer.files]);
    }, p = (g) => {
      s.value.length + g.length > o.value && (a("exceed-file-num"), g = g.slice(0, o.value - s.value.length));
      let y = s.value.reduce((M, D) => M + D.size, 0);
      g = g.filter((M) => n.maxSize && y + M.size > n.maxSize ? (a("exceed-file-size"), !1) : (y += M.size, !0)), s.value.push(...g), l(s.value), a("update:modelValue", s.value);
    }, v = (g) => {
      s.value.splice(g, 1), l(s.value), a("update:modelValue", s.value);
    }, k = (g) => (g / 1024 / 1024).toFixed(2) + "MB";
    return q(dr, i), q(fr, s), q(pr, v), q(vr, k), (g, y) => (T(), I("div", {
      class: fe(["h-file-upload-container", { is_drag_over: u.value }]),
      onDragover: Bt(f, ["prevent"]),
      onDrop: Bt(m, ["prevent"]),
      onDragleave: d
    }, [
      oe("input", {
        ref_key: "fileInput",
        ref: r,
        type: "file",
        multiple: g.multiple,
        hidden: "",
        onChange: c
      }, null, 40, md),
      U(g.$slots, "default", { isDragOver: u.value })
    ], 34));
  }
}), rm = /* @__PURE__ */ N({
  __name: "HFileUploadButton",
  setup(e) {
    const t = S(dr, () => {
    });
    return (n, a) => (T(), I("button", {
      type: "button",
      onClick: a[0] || (a[0] = //@ts-ignore
      (...o) => $e(t) && $e(t)(...o))
    }, [
      U(n.$slots, "default")
    ]));
  }
}), lm = /* @__PURE__ */ N({
  __name: "HFileUploadFileItem",
  setup(e) {
    const t = S(fr, h([])), n = S(vr, (o) => ""), a = S(pr, (o) => {
    });
    return (o, s) => (T(), I("div", null, [
      (T(!0), I(ns, null, ol($e(t), (r, l) => (T(), I("div", {
        key: l,
        class: "h-file-info"
      }, [
        U(o.$slots, "default", {
          filename: r.name,
          filesize: $e(n)(r.size),
          removeFileFunc: () => $e(a)(l)
        })
      ]))), 128))
    ]));
  }
}), gd = {}, hd = { class: "h-file-list" };
function yd(e, t) {
  return T(), I("div", hd, [
    U(e.$slots, "default")
  ]);
}
const im = /* @__PURE__ */ Z(gd, [["render", yd]]), cm = /* @__PURE__ */ N({
  __name: "HHtmlRender",
  props: {
    tag: { default: "div" }
  },
  setup(e) {
    var s, r;
    const t = Ta(), n = t.default ? (r = (s = t.default()[0]) == null ? void 0 : s.children) == null ? void 0 : r.toString() : "", a = {
      attrs: {},
      on: {}
    }, o = a.on;
    return (l, i) => (T(), Ye(Da(l.tag), Jo({ innerHTML: $e(n) }, a.attrs, sl($e(o))), null, 16, ["innerHTML"]));
  }
}), mr = Symbol("isDraggable"), gr = Symbol("eventDrag"), hr = Symbol("endEventDrag"), yr = Symbol("emitValue"), bd = N({
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
    const { isDraggable: n, modelValue: a } = Nn(e), o = (s, r, l, i) => {
      const c = i.closest(".h_kanban_line"), u = Array.prototype.slice.call(
        document.querySelectorAll(".h_kanban_line")
      ), d = u.findIndex(
        (m) => m === c
      );
      let f = null;
      u.forEach((m) => {
        const p = Array.prototype.slice.call(m.querySelectorAll(".h_kanban_card")).findIndex((v) => v === i);
        p >= 0 && (f = p);
      }), typeof f == "number" && (a.value[r].value.splice(l, 1), a.value[d].value.splice(f, 0, s), t("update:modelValue", a.value));
    };
    q(mr, n), q(yr, o);
  }
}), Ad = { class: "h_kanban_board_area" };
function _d(e, t, n, a, o, s) {
  return T(), I("div", Ad, [
    U(e.$slots, "default")
  ]);
}
const um = /* @__PURE__ */ Z(bd, [["render", _d]]), Ed = N({
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
    const n = S(mr, h(!0)), a = S(gr, () => {
    }), o = S(hr, () => {
    }), s = S(yr, () => {
    }), r = h(null), l = h(null), i = h(0), c = h(0), u = h(0), d = h(0), f = h(0), m = h(0), p = h(!1), v = h(null), k = () => {
      var A;
      v.value && clearTimeout(v.value), Ce(r.value) && (s(
        e.elValue,
        e.colIndex,
        e.rowIndex,
        r.value
      ), (A = r.value) == null || A.removeEventListener(
        "transitionend",
        k
      ));
    }, g = (A) => {
      if (!(l.value instanceof HTMLElement) || (l.value.style.position = "fixed", l.value.style.zIndex = "100", il(A) ? A.touches.length === 1 && (f.value = A.touches[0].clientX - u.value, m.value = A.touches[0].clientY - d.value, u.value = A.touches[0].clientX, d.value = A.touches[0].clientY) : cl(A) && (f.value = A.clientX - u.value, m.value = A.clientY - d.value, u.value = A.clientX, d.value = A.clientY), !r.value))
        return;
      const { width: B, height: V } = r.value.getBoundingClientRect();
      l.value.style.width = B + "px", l.value.style.height = V + "px", l.value.style.top = d.value - c.value + "px", l.value.style.left = u.value - i.value + "px", Ce(r.value) && a(
        r.value,
        u.value,
        d.value,
        A.type
      );
    }, y = (A) => {
      var V;
      if (!(l.value instanceof HTMLElement))
        return;
      l.value.style.position = "", l.value.style.zIndex = "", l.value.style.width = "", l.value.style.height = "", l.value.style.top = "", l.value.style.left = "";
      const B = document.querySelector(".clone");
      B && document.body.removeChild(B), p.value = !1, document.removeEventListener("mouseup", y), document.removeEventListener("touchend", y), document.removeEventListener("mousemove", g), document.removeEventListener("touchmove", g), (V = r.value) == null || V.addEventListener(
        "transitionend",
        k
      ), v.value = setTimeout(() => {
        k();
      }, 550), o(A.type);
    }, M = (A) => {
      if (!r.value || (l.value = r.value.cloneNode(!0), !(l.value instanceof HTMLElement)))
        return;
      l.value.classList.add("clone"), l.value.style.position = "fixed", l.value.style.pointerEvents = "none", l.value.style.opacity = "0.5", document.body.appendChild(l.value);
      const B = r.value.getBoundingClientRect();
      p.value = !0, ll(A) ? A.touches.length === 1 && (u.value = A.touches[0].clientX, d.value = A.touches[0].clientY, i.value = u.value - B.left, c.value = d.value - B.top) : ul(A) && (u.value = A.clientX, d.value = A.clientY, i.value = u.value - B.left, c.value = d.value - B.top), document.addEventListener("mouseup", y), document.addEventListener("touchend", y), document.addEventListener("mousemove", g), document.addEventListener("touchmove", g);
    }, D = (A) => {
      let B = A.target;
      for (; Ce(B) && B.tagName !== "BUTTON" && !B.classList.contains("h_kanban_card"); )
        B = B.parentElement;
      Ce(B) && B.tagName === "BUTTON" || Ce(B) && B.tagName === "A" || t("event-click");
    };
    return Ke(() => {
      if (n.value) {
        if (!r.value)
          return;
        r.value.addEventListener("mousedown", M), r.value.addEventListener("touchstart", M);
      }
    }), wa(() => {
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
      clickKanbanCard: D,
      isDraggable: n,
      dragMouseDown: M,
      kanbanCard: r
    };
  }
});
function Sd(e, t, n, a, o, s) {
  return T(), I("div", {
    ref: "kanbanCard",
    class: fe(["h_kanban_card", [
      e.className,
      {
        is_selected: e.isSelected,
        is_draggable: e.isDraggable
      }
    ]]),
    onClick: t[0] || (t[0] = (...r) => e.clickKanbanCard && e.clickKanbanCard(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const dm = /* @__PURE__ */ Z(Ed, [["render", Sd]]), $d = N({
  name: "HKanbanLine",
  setup() {
    const e = h(null), t = h(null), n = h(null), a = h(null), o = h(0), s = h(0), r = h(
      null
    ), l = h(null), i = h(null), c = h([]), u = h({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0
    }), d = h(null), f = h(null), m = h(null), p = () => {
      t.value;
    }, v = () => {
      p();
    };
    Ke(() => {
      p(), window.addEventListener("resize", v);
    }), wa(() => {
      window.removeEventListener("resize", v);
    });
    const k = (z) => {
      const _ = z.currentTarget;
      Ce(_) && (_.classList.remove("top"), _.classList.remove("bottom")), r.value = null, l.value = null;
    }, g = (z) => {
      const _ = z.currentTarget;
      Ce(_) && (_.style.transition = "", e.value && (e.value.style.position = "", e.value.style.zIndex = "", _.removeEventListener(
        "transitionend",
        g
      )));
    }, y = (z) => {
      var P;
      const _ = z.currentTarget;
      if (Ce(_) && (_.classList.remove("top"), _.classList.remove("bottom")), r.value) {
        if ((P = e.value) == null || P.addEventListener(
          "transitionend",
          g
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
      ), c.value.length ? u.value = c.value[c.value.length - 1].getBoundingClientRect() : u.value = null);
    }, D = () => {
      if (u.value) {
        if (u.value.top + u.value.height <= s.value && Ce(i.value) && i.value.getBoundingClientRect().bottom >= s.value) {
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
    }, V = (z, _, P, C) => {
      var le, se, de, ue, be, O, x, W, K, L, ne, ee, ae, ie, ve, _e, he;
      e.value = z, o.value = _, s.value = P, t.value = A(e.value), n.value = ((le = t.value) == null ? void 0 : le.nextElementSibling) || null, a.value = ((se = t.value) == null ? void 0 : se.previousElementSibling) || null;
      const w = (de = t.value) == null ? void 0 : de.getBoundingClientRect(), j = n.value ? n.value.getBoundingClientRect() : null, G = a.value ? a.value.getBoundingClientRect() : null;
      if (C === "touchmove") {
        if (!w)
          return;
        w.top <= s.value && w.bottom >= s.value && w.left <= o.value && w.right >= o.value || j && j.top <= s.value && j.bottom >= s.value && j.left <= o.value && j.right >= o.value || G && G.top <= s.value && G.bottom >= s.value && G.left <= o.value && G.right >= o.value || (r.value = null, i.value = null);
      }
      w && (w.top <= s.value && w.bottom >= s.value && w.left <= o.value && w.right >= o.value ? ((ue = t.value) == null || ue.classList.add("current"), n.value && n.value.classList.remove("next"), a.value && a.value.classList.remove("prev"), C === "touchmove" && (i.value = t.value, d.value = Array.prototype.slice.call(
        (be = t.value) == null ? void 0 : be.querySelectorAll(".h_kanban_card")
      ), d.value.forEach((Q) => {
        const X = Q.getBoundingClientRect();
        X.top <= s.value && s.value <= X.top + X.height / 2 ? (Q.classList.add("top"), r.value = Q, l.value = "top") : Q.classList.remove("top"), X.bottom >= s.value && s.value > X.top + X.height / 2 ? (Q.classList.add("bottom"), r.value = Q, l.value = "bottom") : Q.classList.remove("bottom");
      }), d.value.length ? d.value[d.value.length - 1].getBoundingClientRect().bottom < s.value && (r.value = "append") : r.value = "append")) : ((O = t.value) == null || O.classList.remove("current"), C === "touchmove" && d.value && d.value.forEach((Q) => {
        Q.classList.remove("top"), Q.classList.remove("bottom");
      })), j && (j.top <= s.value && j.bottom >= s.value && j.left <= o.value && j.right >= o.value ? ((x = t.value) == null || x.classList.remove("current"), (W = n.value) == null || W.classList.add("next"), a.value && a.value.classList.remove("prev"), C === "touchmove" && (i.value = n.value, f.value = Array.prototype.slice.call(
        (K = n.value) == null ? void 0 : K.querySelectorAll(
          ".h_kanban_card"
        )
      ), f.value.forEach((Q) => {
        const X = Q.getBoundingClientRect();
        X.top <= s.value && s.value <= X.top + X.height / 2 ? (Q.classList.add("top"), r.value = Q, l.value = "top") : Q.classList.remove("top"), X.bottom >= s.value && s.value > X.top + X.height / 2 ? (Q.classList.add("bottom"), r.value = Q, l.value = "bottom") : Q.classList.remove("bottom");
      }), f.value.length ? f.value[f.value.length - 1].getBoundingClientRect().bottom < s.value && (r.value = "append") : r.value = "append")) : ((L = n.value) == null || L.classList.remove("next"), C === "touchmove" && f.value && f.value.forEach((Q) => {
        Q.classList.remove("top"), Q.classList.remove("bottom");
      }))), G && (G.top <= s.value && G.bottom >= s.value && G.left <= o.value && G.right >= o.value ? ((ne = t.value) == null || ne.classList.remove("current"), n.value && n.value.classList.remove("next"), (ee = a.value) == null || ee.classList.add("prev"), C === "touchmove" && (i.value = a.value, m.value = Array.prototype.slice.call(
        (ae = a.value) == null ? void 0 : ae.querySelectorAll(
          ".h_kanban_card"
        )
      ), m.value.forEach((Q) => {
        const X = Q.getBoundingClientRect();
        X.top <= s.value && s.value <= X.top + X.height / 2 ? (Q.classList.add("top"), r.value = Q, l.value = "top") : Q.classList.remove("top"), X.bottom >= s.value && s.value > X.top + X.height / 2 ? (Q.classList.add("bottom"), r.value = Q, l.value = "bottom") : Q.classList.remove("bottom");
      }), m.value.length ? m.value[m.value.length - 1].getBoundingClientRect().bottom < s.value && (r.value = "append") : r.value = "append")) : ((ie = a.value) == null || ie.classList.remove("prev"), C === "touchmove" && m.value && m.value.forEach((Q) => {
        Q.classList.remove("top"), Q.classList.remove("bottom");
      }))), (ve = t.value) == null || ve.addEventListener("mouseover", M), n.value && n.value.addEventListener("mouseover", M), a.value && a.value.addEventListener("mouseover", M), (_e = t.value) == null || _e.addEventListener("mouseup", D), n.value && n.value.addEventListener("mouseup", D), a.value && a.value.addEventListener("mouseup", D), (he = t.value) == null || he.querySelectorAll(".h_kanban_card").forEach((Q) => {
        Q.addEventListener("mouseout", k), Q.addEventListener("mouseup", y), Q.addEventListener("mousemove", B);
      }), n.value && n.value.querySelectorAll(".h_kanban_card").forEach((Q) => {
        Q.addEventListener("mouseout", k), Q.addEventListener("mouseup", y), Q.addEventListener("mousemove", B);
      }), a.value && a.value.querySelectorAll(".h_kanban_card").forEach((Q) => {
        Q.addEventListener("mouseout", k), Q.addEventListener("mouseup", y), Q.addEventListener("mousemove", B);
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
      ), t.value && t.value.removeEventListener("mouseup", D), n.value && n.value.removeEventListener(
        "mouseup",
        D
      ), a.value && a.value.removeEventListener(
        "mouseup",
        D
      ), t.value && t.value.querySelectorAll(".h_kanban_card").forEach((w) => {
        w.removeEventListener("mouseout", k), w.removeEventListener("mouseup", y), w.removeEventListener("mousemove", B);
      }), n.value && n.value.querySelectorAll(".h_kanban_card").forEach((w) => {
        w.removeEventListener("mouseout", k), w.removeEventListener("mouseup", y), w.removeEventListener("mousemove", B);
      }), a.value && a.value.querySelectorAll(".h_kanban_card").forEach((w) => {
        w.removeEventListener("mouseout", k), w.removeEventListener("mouseup", y), w.removeEventListener("mousemove", B);
      }), t.value = null, n.value = null, a.value = null;
    };
    return q(gr, V), q(hr, te), {
      kanbanLine: t
    };
  }
}), Cd = {
  ref: "kanbanLine",
  class: "h_kanban_line"
};
function wd(e, t, n, a, o, s) {
  return T(), I("div", Cd, [
    U(e.$slots, "default")
  ], 512);
}
const fm = /* @__PURE__ */ Z($d, [["render", wd]]), Dd = N({
  name: "HKanbanLineInnerArea"
}), Td = { class: "h_kanban_line_inner_area" };
function kd(e, t, n, a, o, s) {
  return T(), I("div", Td, [
    U(e.$slots, "default")
  ]);
}
const vm = /* @__PURE__ */ Z(Dd, [["render", kd]]), Ld = { class: "h-loading" }, Md = { class: "h_spinner_bg" }, Id = {
  viewBox: "0 0 50 50",
  class: "h-spinner"
}, pm = /* @__PURE__ */ N({
  __name: "HLoading",
  props: {
    strokeColor: {
      type: String,
      default: "#4676f0"
    }
  },
  setup(e) {
    return (t, n) => (T(), I("div", Ld, [
      n[1] || (n[1] = oe("div", { class: "h-dimmed" }, null, -1)),
      oe("div", Md, [
        (T(), I("svg", Id, [
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
}), Bd = { class: "h-dot-spinner" }, Pd = { class: "spinner_inner" }, mm = /* @__PURE__ */ N({
  __name: "HThreeDotLoading",
  props: {
    backgroundColor: {
      type: String,
      default: "#333"
    }
  },
  setup(e) {
    return (t, n) => (T(), I("div", Bd, [
      oe("div", Pd, [
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
class Ya {
  static fromPoints(t, n) {
    const a = this.calculateControlPoints(t[0], t[1], t[2]).c2, o = this.calculateControlPoints(t[1], t[2], t[3]).c1;
    return new Ya(t[1], a, o, t[2], n.start, n.end);
  }
  static calculateControlPoints(t, n, a) {
    const o = t.x - n.x, s = t.y - n.y, r = n.x - a.x, l = n.y - a.y, i = { x: (t.x + n.x) / 2, y: (t.y + n.y) / 2 }, c = { x: (n.x + a.x) / 2, y: (n.y + a.y) / 2 }, u = Math.sqrt(o * o + s * s), d = Math.sqrt(r * r + l * l), f = i.x - c.x, m = i.y - c.y, p = d / (u + d), v = { x: c.x + f * p, y: c.y + m * p }, k = n.x - v.x, g = n.y - v.y;
    return {
      c1: new Hn(i.x + k, i.y + g),
      c2: new Hn(c.x + k, c.y + g)
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
        const c = l - a, u = i - o;
        n += Math.sqrt(c * c + u * u);
      }
      a = l, o = i;
    }
    return n;
  }
  point(t, n, a, o, s) {
    return n * (1 - t) * (1 - t) * (1 - t) + 3 * a * (1 - t) * (1 - t) * t + 3 * o * (1 - t) * t * t + s * t * t * t;
  }
}
class Hd {
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
function Rd(e, t = 250) {
  let n = 0, a = null, o, s, r;
  const l = () => {
    n = Date.now(), a = null, o = e.apply(s, r), a || (s = null, r = []);
  };
  return function(...c) {
    const u = Date.now(), d = t - (u - n);
    return s = this, r = c, d <= 0 || d > t ? (a && (clearTimeout(a), a = null), n = u, o = e.apply(s, r), a || (s = null, r = [])) : a || (a = window.setTimeout(l, d)), o;
  };
}
class Rn extends Hd {
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
    }, this.velocityFilterWeight = n.velocityFilterWeight || 0.7, this.minWidth = n.minWidth || 0.5, this.maxWidth = n.maxWidth || 2.5, this.throttle = "throttle" in n ? n.throttle : 16, this.minDistance = "minDistance" in n ? n.minDistance : 5, this.dotSize = n.dotSize || 0, this.penColor = n.penColor || "black", this.backgroundColor = n.backgroundColor || "rgba(0,0,0,0)", this.compositeOperation = n.compositeOperation || "source-over", this.canvasContextOptions = "canvasContextOptions" in n ? n.canvasContextOptions : {}, this._strokeMoveUpdate = this.throttle ? Rd(Rn.prototype._strokeUpdate, this.throttle) : Rn.prototype._strokeUpdate, this._ctx = t.getContext("2d", this.canvasContextOptions), this.clear(), this.on();
  }
  clear() {
    const { _ctx: t, canvas: n } = this;
    t.fillStyle = this.backgroundColor, t.clearRect(0, 0, n.width, n.height), t.fillRect(0, 0, n.width, n.height), this._data = [], this._reset(this._getPointGroupOptions()), this._isEmpty = !0;
  }
  fromDataURL(t, n = {}) {
    return new Promise((a, o) => {
      const s = new Image(), r = n.ratio || window.devicePixelRatio || 1, l = n.width || this.canvas.width / r, i = n.height || this.canvas.height / r, c = n.xOffset || 0, u = n.yOffset || 0;
      this._reset(this._getPointGroupOptions()), s.onload = () => {
        this._ctx.drawImage(s, c, u, l, i), a();
      }, s.onerror = (d) => {
        o(d);
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
    const n = t.clientX, a = t.clientY, o = t.pressure !== void 0 ? t.pressure : t.force !== void 0 ? t.force : 0, s = this._createPoint(n, a, o), r = this._data[this._data.length - 1], l = r.points, i = l.length > 0 && l[l.length - 1], c = i ? s.distanceTo(i) <= this.minDistance : !1, u = this._getPointGroupOptions(r);
    if (!i || !(i && c)) {
      const d = this._addPoint(s, u);
      i ? d && this._drawCurve(d, u) : this._drawDot(s, u), l.push({
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
      const o = this._calculateCurveWidths(a[1], a[2], n), s = Ya.fromPoints(a, o);
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
      const l = r / s, i = l * l, c = i * l, u = 1 - l, d = u * u, f = d * u;
      let m = f * t.startPoint.x;
      m += 3 * d * l * t.control1.x, m += 3 * u * i * t.control2.x, m += c * t.endPoint.x;
      let p = f * t.startPoint.y;
      p += 3 * d * l * t.control1.y, p += 3 * u * i * t.control2.y, p += c * t.endPoint.y;
      const v = Math.min(t.startWidth + c * o, n.maxWidth);
      this._drawCurveSegment(m, p, v);
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
          const u = this._addPoint(c, r);
          u && n(u, r);
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
    return this._fromData(n, (c, { penColor: u }) => {
      const d = document.createElement("path");
      if (!isNaN(c.control1.x) && !isNaN(c.control1.y) && !isNaN(c.control2.x) && !isNaN(c.control2.y)) {
        const f = `M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;
        d.setAttribute("d", f), d.setAttribute("stroke-width", (c.endWidth * 2.25).toFixed(3)), d.setAttribute("stroke", u), d.setAttribute("fill", "none"), d.setAttribute("stroke-linecap", "round"), i.appendChild(d);
      }
    }, (c, { penColor: u, dotSize: d, minWidth: f, maxWidth: m }) => {
      const p = document.createElement("circle"), v = d > 0 ? d : (f + m) / 2;
      p.setAttribute("r", v.toString()), p.setAttribute("cx", c.x.toString()), p.setAttribute("cy", c.y.toString()), p.setAttribute("fill", u), i.appendChild(p);
    }), i.outerHTML;
  }
}
const Nd = {
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
}, Od = ["id", "data-uid", "disabled"];
function xd(e, t, n, a, o, s) {
  return T(), I("div", {
    style: Le({ width: n.w, height: n.h }),
    onTouchmove: t[0] || (t[0] = Bt(() => {
    }, ["prevent"]))
  }, [
    oe("canvas", {
      id: o.uid,
      class: "canvas",
      "data-uid": o.uid,
      disabled: n.disabled
    }, null, 8, Od)
  ], 36);
}
const Fd = /* @__PURE__ */ Z(Nd, [["render", xd]]);
var Me = [];
for (var sa = 0; sa < 256; ++sa)
  Me.push((sa + 256).toString(16).slice(1));
function Ud(e, t = 0) {
  return (Me[e[t + 0]] + Me[e[t + 1]] + Me[e[t + 2]] + Me[e[t + 3]] + "-" + Me[e[t + 4]] + Me[e[t + 5]] + "-" + Me[e[t + 6]] + Me[e[t + 7]] + "-" + Me[e[t + 8]] + Me[e[t + 9]] + "-" + Me[e[t + 10]] + Me[e[t + 11]] + Me[e[t + 12]] + Me[e[t + 13]] + Me[e[t + 14]] + Me[e[t + 15]]).toLowerCase();
}
var yn, zd = new Uint8Array(16);
function Yd() {
  if (!yn && (yn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !yn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return yn(zd);
}
var Vd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Xo = {
  randomUUID: Vd
};
function Va(e, t, n) {
  if (Xo.randomUUID && !t && !e)
    return Xo.randomUUID();
  e = e || {};
  var a = e.random || (e.rng || Yd)();
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, Ud(a);
}
function Gt() {
  return Va();
}
const br = Symbol("clear"), Ar = Symbol("undo"), jd = () => {
  const e = h(!0);
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
}, Zo = "data:image/png;base64,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", Wd = N({
  name: "HSignatureArea",
  components: {
    VueSignature: Fd
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
      default: Zo
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = h(null), a = h(null), o = ce(() => e.modelValue), s = h(""), r = h(null), l = h(`${Gt()}`), i = h(100), c = ce(() => i.value * e.ratio), u = ce(() => !e.naturalHeight || !e.naturalWidth ? e.sigOption : {
      ...e.sigOption,
      backgroundColor: "transparent"
    }), { getBase64ImageDimensions: d } = jd();
    Be(
      o,
      async (y) => {
        y ? (s.value = "", r.value = await d(
          y,
          (M) => {
          }
        )) : (s.value = e.placeHolderImage, l.value = `${Gt()}`);
      },
      { immediate: !0 }
    );
    const f = () => {
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
            const A = a.value.$el.children[0].toDataURL(), B = await d(
              A,
              (V) => {
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
      (y = a.value) == null || y.clear(), s.value = Zo, l.value = `${Gt()}`, t("update:modelValue", "");
    }, v = () => {
      var y;
      (y = a.value) == null || y.undo(), m();
    }, k = h(null), g = () => {
      k.value && clearTimeout(k.value), k.value = setTimeout(() => {
        l.value = `${Gt()}`;
      }, 50);
    };
    return Ke(() => {
      window.addEventListener("resize", g);
    }), pt(() => {
      window.removeEventListener("resize", g);
    }), q(br, p), q(Ar, v), {
      signatureArea: n,
      signature: a,
      dataUrl: o,
      signatureKey: l,
      save: m,
      width: i,
      height: c,
      sigOptionData: u,
      defaultUrl: s,
      initDefaultUrl: f
    };
  }
}), qd = {
  ref: "signatureArea",
  class: "h_signature_area"
}, Qd = ["src"], Gd = { class: "inner_area" }, Xd = ["src"];
function Zd(e, t, n, a, o, s) {
  const r = ot("vue-signature");
  return T(), I("div", qd, [
    oe("img", {
      src: e.dataUrl,
      alt: "",
      class: "img"
    }, null, 8, Qd),
    oe("div", Gd, [
      (T(), Ye(r, {
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
      e.defaultUrl ? (T(), I("img", {
        key: 0,
        src: e.defaultUrl,
        class: "default_img",
        alt: "서명 기본 이미지"
      }, null, 8, Xd)) : Ie("", !0)
    ]),
    U(e.$slots, "default")
  ], 512);
}
const gm = /* @__PURE__ */ Z(Wd, [["render", Zd]]), Kd = N({
  name: "HSignatureClearButton",
  setup() {
    return {
      clear: S(br, () => {
      })
    };
  }
});
function Jd(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: "h_btn_delete",
    onClick: t[0] || (t[0] = (...r) => e.clear && e.clear(...r))
  }, [
    U(e.$slots, "default")
  ]);
}
const hm = /* @__PURE__ */ Z(Kd, [["render", Jd]]), ef = N({
  name: "HSignatureUndoButton",
  setup() {
    return {
      undo: S(Ar, () => {
      })
    };
  }
});
function tf(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.undo && e.undo(...r))
  }, [
    U(e.$slots, "default")
  ]);
}
const ym = /* @__PURE__ */ Z(ef, [["render", tf]]), zt = Symbol(
  "clickPaginationButton"
), _r = Symbol("lastPageIndex"), Xn = Symbol("activePageIndex"), Yt = Symbol(
  "clickPaginationButton"
), Vt = Symbol("classNameValue"), Ko = (e) => e ? e.substring(1).split("&").reduce((t, n) => {
  const [a, o] = n.split("=");
  return t[decodeURIComponent(a)] = decodeURIComponent(o), t;
}, {}) : {}, nf = (e, t) => Array.from({ length: t - e + 1 }, (n, a) => e + a), af = N({
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
    const { modelValue: n } = Nn(e);
    Be(n, (d) => {
      a.value = d + 1;
    });
    const a = h(n.value + 1), o = Ko(window.location.search);
    o[e.queryStringKey] && (a.value = parseInt(o[e.queryStringKey]) + 1);
    const s = ce(() => {
      const d = Math.floor(e.modelValue / e.countPerPage) * e.countPerPage, f = d + e.countPerPage - 1 <= l.value - 1 ? d + e.countPerPage - 1 : l.value - 1;
      return nf(d + 1, f + 1);
    }), r = (d) => {
      const f = d.target;
      if (!(f instanceof Window))
        return;
      const m = Ko(f.location.search);
      a.value !== parseInt(m[e.queryStringKey]) && (a.value = parseInt(m[e.queryStringKey]));
    };
    window.addEventListener("popstate", r), pt(() => {
      window.removeEventListener("popstate", r);
    });
    const l = ce(
      () => Math.ceil(e.totalCount / e.countPerPage)
    ), i = (d) => {
      a.value !== d && (d < 1 ? a.value = 1 : d > l.value ? a.value = l.value : a.value = d);
    }, c = () => {
      t("click-pagination-button", a.value - 1), t("update:modelValue", a.value - 1);
    }, u = ce(() => e.type);
    return q(zt, i), q(_r, l), q(Xn, a), q(Yt, c), q(Vt, u), {
      lastPageIndex: l,
      activePageNum: a,
      classNameValue: u,
      paginatedItems: s
    };
  }
});
function of(e, t, n, a, o, s) {
  return T(), I("div", {
    class: fe(["h_pagination_area", e.classNameValue])
  }, [
    U(e.$slots, "default", {
      lastPageIndex: e.lastPageIndex,
      paginatedItems: e.paginatedItems
    })
  ], 2);
}
const bm = /* @__PURE__ */ Z(af, [["render", of]]), sf = N({
  name: "HPaginationFirstButton",
  setup() {
    const e = S(zt, () => {
    }), t = S(
      Yt,
      () => {
      }
    ), n = () => {
      e(1), t();
    }, a = S(
      Vt,
      ce(() => "")
    );
    return {
      clickPaginationButton: n,
      classNameValue: a
    };
  }
});
function rf(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe([e.classNameValue, "h_btn_first"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    U(e.$slots, "default", {}, () => [
      t[1] || (t[1] = xt(" << "))
    ])
  ], 2);
}
const Am = /* @__PURE__ */ Z(sf, [["render", rf]]), lf = N({
  name: "HPaginationLastButton",
  setup() {
    const e = S(zt, () => {
    }), t = S(
      _r,
      ce(() => 0)
    ), n = S(
      Yt,
      () => {
      }
    ), a = () => {
      e(t.value), n();
    }, o = S(
      Vt,
      ce(() => "")
    );
    return {
      clickPaginationButton: a,
      classNameValue: o
    };
  }
});
function cf(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe([e.classNameValue, "h_btn_last"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    U(e.$slots, "default", {}, () => [
      t[1] || (t[1] = xt(" >> "))
    ])
  ], 2);
}
const _m = /* @__PURE__ */ Z(lf, [["render", cf]]), uf = N({
  name: "HPaginationNextButton",
  setup() {
    const e = S(zt, () => {
    }), t = S(Xn, h(0)), n = S(
      Yt,
      () => {
      }
    ), a = () => {
      e(t.value + 1), n();
    }, o = S(
      Vt,
      ce(() => "")
    );
    return {
      clickPaginationButton: a,
      classNameValue: o
    };
  }
});
function df(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe([e.classNameValue, "h_btn_next"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    U(e.$slots, "default", {}, () => [
      t[1] || (t[1] = xt(" > "))
    ])
  ], 2);
}
const Em = /* @__PURE__ */ Z(uf, [["render", df]]), ff = N({
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
    }), n = S(Xn, h(0)), a = ce(
      () => e.pageIndex === n.value
    ), o = S(
      Yt,
      () => {
      }
    ), s = () => {
      t(e.pageIndex), o();
    }, r = S(
      Vt,
      ce(() => "")
    );
    return {
      clickPaginationButton: s,
      isActive: a,
      classNameValue: r
    };
  }
});
function vf(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe([[{ is_active: e.isActive }, e.classNameValue], "h_btn_num"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    U(e.$slots, "default", { isActive: e.isActive })
  ], 2);
}
const Sm = /* @__PURE__ */ Z(ff, [["render", vf]]), pf = N({
  name: "HPaginationPrevButton",
  emits: ["click-pagination-button"],
  setup() {
    const e = S(zt, () => {
    }), t = S(Xn, h(0)), n = S(
      Yt,
      () => {
      }
    ), a = () => {
      e(t.value - 1), n();
    }, o = S(
      Vt,
      ce(() => "")
    );
    return {
      clickPaginationButton: a,
      classNameValue: o
    };
  }
});
function mf(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe([e.classNameValue, "h_btn_prev"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    U(e.$slots, "default", {}, () => [
      t[1] || (t[1] = xt(" < "))
    ])
  ], 2);
}
const $m = /* @__PURE__ */ Z(pf, [["render", mf]]), gf = Symbol("pageHeaderSpace"), hf = Symbol("pageFooterSpace"), yf = N({
  name: "HPrintHtmlBox",
  setup() {
    const e = h(null), t = h(null);
    q(gf, e), q(hf, t);
  }
}), bf = { id: "h-printable" };
function Af(e, t, n, a, o, s) {
  return T(), I("div", bf, [
    U(e.$slots, "default")
  ]);
}
const Cm = /* @__PURE__ */ Z(yf, [["render", Af]]), _f = N({
  name: "HPrintHtmlButton",
  setup() {
    return {
      clickPrintButton: () => {
        window.print();
      }
    };
  }
});
function Ef(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.clickPrintButton && e.clickPrintButton(...r))
  }, [
    U(e.$slots, "default")
  ]);
}
const wm = /* @__PURE__ */ Z(_f, [["render", Ef]]), Er = Symbol("selectedValue"), Sr = Symbol(
  "clickedDatePickerInput"
), ja = Symbol("setSelectedDatePickerValue"), Wa = Symbol("setNowMonth"), qa = Symbol(
  "setYearForYearCalendar"
), Qa = Symbol(
  "setYearForMonthCalendar"
), Ga = Symbol("yearsArrLength"), $r = Symbol(
  "setIsActiveMonthCalendar"
), Xa = Symbol(
  "setIsActiveYearCalendar"
), Cr = Symbol(
  "setNowMonthByMonthCalendar"
), wr = Symbol(
  "setNowYearByYearCalendar"
), Dr = Symbol("calendarInput"), Tr = Symbol("calendarInputArea"), Zn = Symbol("calendarPosition"), kr = Symbol("calendarArea"), Lr = Symbol("calendarMonthArea"), Mr = Symbol("calendarYearArea"), ke = Symbol("calendarTypes"), Ir = Symbol(
  "focusInDatePickerInput"
), Br = Symbol(
  "focusOutDatePickerInput"
), Pr = Symbol("isDisabled"), Za = Symbol("setStartDate"), Ka = Symbol("setEndDate"), Hr = Symbol("selectedRange"), Rr = Symbol("rangeType"), Sf = N({
  name: "HSingleDatePickerCalendar",
  setup() {
    return {
      calendarType: S(ke)
    };
  }
}), $f = { class: "h_calendar_table" }, Cf = { class: "calendar_head" }, wf = { class: "calendar_body" };
function Df(e, t, n, a, o, s) {
  return T(), I("div", {
    class: fe(["h_calendar", e.calendarType])
  }, [
    oe("table", $f, [
      t[0] || (t[0] = oe("caption", null, [
        oe("span", { class: "blind" }, "Dates")
      ], -1)),
      oe("thead", Cf, [
        U(e.$slots, "table_head")
      ]),
      oe("tbody", wf, [
        U(e.$slots, "table_body")
      ])
    ])
  ], 2);
}
const Dm = /* @__PURE__ */ Z(Sf, [["render", Df]]);
var Nr = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.TYPE1 = "type1", e))(Nr || {}), an = /* @__PURE__ */ ((e) => (e.START_DATE = "startDate", e.END_DATE = "endDate", e))(an || {});
const Tf = N({
  name: "HSingleDatePickerCalendarDateButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = S(ke), n = S(
      ja,
      () => {
      }
    ), a = S(Za, () => {
    }), o = S(Ka, () => {
    }), s = S(
      Rr,
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
function kf(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_calendar_common", [e.calendarType]]),
    onClick: t[0] || (t[0] = (...r) => e.clickedCalendarDateButton && e.clickedCalendarDateButton(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const Tm = /* @__PURE__ */ Z(Tf, [["render", kf]]), Ja = (e, t, n, a) => t + n > a ? {
  top: "auto",
  bottom: `${a - e}px`,
  marginBottom: "-1px"
} : {
  top: `${t}px`,
  bottom: "auto",
  marginTop: "-1px"
}, eo = (e, t, n, a, o) => t + n - o > a ? {
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
const Lf = N({
  name: "HSingleDatePickerCalendarArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = S(ke), t = S(Zn), n = S(kr), a = ce(() => {
      if (!t || !xn(t))
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
        minusWidth: u
      } = t.value;
      if (!((n == null ? void 0 : n.value) instanceof HTMLElement))
        return {};
      const { height: d, width: f } = n.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...Ja(l, o, d, c),
        ...eo(s, r, f, i, u)
      };
    });
    return {
      calendarArea: n,
      calendarStyle: a,
      calendarType: e
    };
  }
});
function Mf(e, t, n, a, o, s) {
  return e.isActive ? (T(), I("div", {
    key: 0,
    ref: "calendarArea",
    class: fe(["h_calendar_area", e.calendarType]),
    style: Le(e.calendarStyle)
  }, [
    U(e.$slots, "default")
  ], 6)) : Ie("", !0);
}
const km = /* @__PURE__ */ Z(Lf, [["render", Mf]]), If = N({
  name: "HSingleDatePickerCalendarMonthArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = S(ke), t = S(Zn), n = S(Lr), a = ce(() => {
      if (!t || !xn(t))
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
        minusWidth: u
      } = t.value;
      if (!((n == null ? void 0 : n.value) instanceof HTMLElement))
        return {};
      const { height: d, width: f } = n.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...Ja(l, o, d, c),
        ...eo(s, r, f, i, u)
      };
    });
    return {
      calendarMonthArea: n,
      calendarStyle: a,
      calendarType: e
    };
  }
});
function Bf(e, t, n, a, o, s) {
  return e.isActive ? (T(), I("div", {
    key: 0,
    ref: "calendarMonthArea",
    class: fe(["h_calendar_month_area", e.calendarType]),
    style: Le(e.calendarStyle)
  }, [
    U(e.$slots, "default")
  ], 6)) : Ie("", !0);
}
const Lm = /* @__PURE__ */ Z(If, [["render", Bf]]), me = (e) => e.replace(/\./g, "-"), Pf = N({
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
      default: Nr.DEFAULT
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
      Hr,
      ce(() => [])
    ), a = (H) => {
      if (n.value.length === 0)
        return !1;
      const Y = me(H);
      return new Date(me(n.value[0])) <= new Date(Y) && new Date(Y) <= new Date(me(n.value[1]));
    }, o = (H) => {
      if (n.value.length === 0)
        return !1;
      const [Y, F] = n.value[0].split("."), [J, E] = n.value[1].split("."), b = `${Y}.${F}`, $ = `${J}.${E}`, R = me(H);
      return new Date(me(b)) <= new Date(R) && new Date(R) <= new Date(me($));
    }, s = (H) => {
      if (n.value.length === 0)
        return !1;
      const [Y] = n.value[0].split("."), [F] = n.value[1].split("."), J = `${Y}`, E = `${F}`, b = me(H);
      return new Date(me(J)) <= new Date(b) && new Date(b) <= new Date(me(E));
    }, r = (H) => {
      const Y = e.disabledDates.includes(H), F = e.disabledDatesRange.some((J) => {
        const E = me(H), [b, $] = J.split("~");
        if (b.length === 0 && $.length > 0)
          return new Date(E) < new Date(me($));
        if (b.length > 0 && $.length === 0)
          return new Date(me(b)) < new Date(E);
        if (b.length > 0 && $.length > 0)
          return new Date(me(b)) < new Date(E) && new Date(E) < new Date(me($));
      });
      return Y || F;
    }, l = (H) => e.disabledDatesRange.some((Y) => {
      const [F, J] = Y.split("~");
      if (F.length === 0 && J.length > 0)
        return new Date(me(H)) < new Date(me(`${J.split(".")[0]}.${J.split(".")[1]}`));
      if (F.length > 0 && J.length === 0)
        return new Date(me(`${F.split(".")[0]}.${F.split(".")[1]}`)) < new Date(me(H));
      if (F.length > 0 && J.length > 0)
        return new Date(me(`${F.split(".")[0]}.${F.split(".")[1]}`)) < new Date(me(H)) && new Date(me(H)) < new Date(me(`${J.split(".")[0]}.${J.split(".")[1]}`));
    }), i = (H) => e.disabledDatesRange.some((Y) => {
      const [F, J] = Y.split("~");
      if (F.length === 0 && J.length > 0)
        return new Date(me(H)).getFullYear() < new Date(me(`${J.split(".")[0]}`)).getFullYear();
      if (F.length > 0 && J.length === 0)
        return new Date(me(`${F.split(".")[0]}`)).getFullYear() < new Date(me(H)).getFullYear();
      if (F.length > 0 && J.length > 0)
        return new Date(me(`${F.split(".")[0]}`)).getFullYear() < new Date(me(H)).getFullYear() && new Date(me(H)).getFullYear() < new Date(me(`${J.split(".")[0]}`)).getFullYear();
    }), c = h({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      minusWidth: 0,
      clientWidth: 0,
      clientHeight: 0
    }), u = h(null), d = h(null), f = (H) => {
      if (!u.value)
        return;
      const { bottom: Y, left: F, right: J, top: E, width: b } = u.value.getBoundingClientRect();
      c.value = {
        ...c.value,
        bottom: Y,
        left: F,
        right: J,
        top: E,
        minusWidth: b
      };
    }, m = (H) => {
      c.value = {
        ...c.value,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, p = (H) => {
      const Y = H.target;
      if (!(Y instanceof Element))
        return;
      const F = Y.closest(".inp_datepicker");
      if (F) {
        F !== d.value && (se.value = !1, j.value = !1, G.value = !1, t("blur"));
        return;
      }
      Y.closest(".h_calendar_area") || Y.closest(".h_calendar_month_area") || Y.closest(".h_calendar_year_area") || (se.value = !1, j.value = !1, G.value = !1, t("blur"));
    }, v = h("");
    e.modelValue && (v.value = e.modelValue);
    const k = () => {
      d.value && (d.value.addEventListener(
        "keyup",
        B
      ), d.value.addEventListener(
        "blur",
        B
      ));
    }, g = () => {
      d.value && (d.value.removeEventListener(
        "keyup",
        B
      ), d.value.removeEventListener(
        "blur",
        B
      ));
    }, y = ce(() => e.rangeType), M = S(Za, () => {
    }), D = S(Ka, () => {
    }), A = (H) => {
      switch (y.value) {
        case an.START_DATE:
          M(H);
          break;
        case an.END_DATE:
          D(H);
          break;
      }
    }, B = async (H) => {
      if (H instanceof KeyboardEvent && H.key !== "Enter")
        return;
      const Y = H.target;
      if (!(Y instanceof HTMLInputElement))
        return;
      const F = Y.value, J = (/* @__PURE__ */ new Date()).getFullYear() % 100;
      switch (F.length) {
        case 4:
          await (async () => {
            const E = F.toString();
            let b = parseInt(E.slice(0, 2), 10);
            b > J ? b += 1900 : b += 2e3;
            const $ = E.slice(2, 3).padStart(2, "0"), R = E.slice(3).padStart(2, "0");
            if (!Ue(`${b}.${$}.${R}`) || r(`${b}.${$}.${R}`)) {
              const Ae = v.value;
              v.value = "", await ge(), v.value = Ae, await ge(), A(Ae);
              return;
            }
            V.value = b, te.value = Number($), v.value = "", await ge(), v.value = `${b}.${$}.${R}`, await ge(), A(`${b}.${$}.${R}`);
          })();
          break;
        case 5:
          await (async () => {
            const E = F.replace(/\./g, ""), b = J >= parseInt(E.slice(0, 2)) ? 2e3 + parseInt(E.slice(0, 2)) : 1900 + parseInt(E.slice(0, 2));
            let $ = "", R = "";
            if (E.length === 5 ? ($ = E.slice(2, 3).toString().padStart(2, "0"), R = E.slice(3)) : E.length === 4 && ($ = "0" + E.charAt(2), R = "0" + E.charAt(3)), !Ue(`${b}.${$}.${R}`) || r(`${b}.${$}.${R}`)) {
              const Ae = v.value;
              v.value = "", await ge(), v.value = Ae, await ge(), A(Ae);
              return;
            }
            V.value = Number(b), te.value = Number($), v.value = "", await ge(), v.value = `${b}.${$}.${R}`, await ge(), A(`${b}.${$}.${R}`);
          })();
          break;
        case 6:
          await (async () => {
            let E = "", b = "", $ = "";
            if (F.includes(".")) {
              const R = F.replace(/\./g, "");
              E = J >= parseInt(R.slice(0, 2)) ? (2e3 + parseInt(R.slice(0, 2))).toString() : (1900 + parseInt(R.slice(0, 2))).toString(), b = R.slice(2, 3).toString().padStart(2, "0"), $ = R.slice(3).toString().padStart(2, "0");
            } else
              E = F.slice(0, 2), b = F.slice(2, 4).toString().padStart(2, "0"), $ = F.slice(4, 6).toString().padStart(2, "0"), Ue(`${E}.${b}.${$}`) || (E = `${E}${b}`, b = $.toString().split("")[0].padStart(2, "0"), $ = $.toString().split("")[1].padStart(2, "0"));
            if (!Ue(`${E}.${b}.${$}`) || r(`${E}.${b}.${$}`)) {
              const R = v.value;
              v.value = "", await ge(), v.value = R, await ge(), A(R);
              return;
            }
            V.value = Number(E), te.value = Number(b), v.value = "", await ge(), v.value = `${E}.${b}.${$}`, await ge(), A(`${E}.${b}.${$}`);
          })();
          break;
        case 7:
          await (async () => {
            let E = "", b = "", $ = "";
            if (F.includes(".")) {
              const R = F.replace(/\./g, "");
              E = J >= parseInt(R.slice(0, 2)) ? (2e3 + parseInt(R.slice(0, 2))).toString() : (1900 + parseInt(R.slice(0, 2))).toString(), b = R.slice(2, 4).padStart(2, "0"), $ = R.slice(4, 6).padStart(2, "0"), Ue(`${E}.${b}.${$}`) || (E = `${E.slice(2)}${b}`, b = `${$.split("")[0].padStart(2, "0")}`, $ = `${$.split("")[1].padStart(2, "0")}`);
            } else
              E = F.slice(0, 4), b = F.slice(4, 5).toString().padStart(2, "0"), $ = F.slice(5).toString().padStart(2, "0");
            if (!Ue(`${E}.${b}.${$}`) || r(`${E}.${b}.${$}`)) {
              const R = v.value;
              v.value = "", await ge(), v.value = R, await ge(), A(R);
              return;
            }
            V.value = Number(E), te.value = Number(b), v.value = "", await ge(), v.value = `${E}.${b}.${$}`, await ge(), A(`${E}.${b}.${$}`);
          })();
          break;
        case 8:
          await (async () => {
            let E = "", b = "", $ = "";
            if (F.includes(".")) {
              const R = F.replace(/\./g, "");
              R.length === 6 ? (E = J >= parseInt(R.slice(0, 2)) ? (2e3 + parseInt(
                R.slice(0, 2)
              )).toString() : (1900 + parseInt(
                R.slice(0, 2)
              )).toString(), b = R.slice(2, 4).padStart(2, "0"), $ = R.slice(4, 6).padStart(2, "0"), Ue(`${E}.${b}.${$}`) || (E = `${E.slice(2)}${b}`, b = `${$.split("")[0].padStart(2, "0")}`, $ = `${$.split("")[1].padStart(2, "0")}`)) : (E = R.slice(0, 4), b = R.slice(4, 5).padStart(2, "0"), $ = R.slice(5).padStart(2, "0"), Ue(`${E}.${b}.${$}`) || (b = $.split("")[0].padStart(2, "0"), $ = $.split("")[1].padStart(2, "0")));
            } else
              E = F.slice(0, 4), b = F.slice(4, 6), $ = F.slice(6, 8);
            if (!Ue(`${E}.${b}.${$}`) || r(`${E}.${b}.${$}`)) {
              const R = v.value;
              v.value = "", await ge(), v.value = R, await ge(), A(R);
              return;
            }
            V.value = Number(E), te.value = Number(b), v.value = "", await ge(), v.value = `${E}.${b}.${$}`, await ge(), A(`${E}.${b}.${$}`);
          })();
          break;
        case 9:
          await (async () => {
            let E = "", b = "", $ = "";
            if (F.includes(".")) {
              const R = F.replace(/\./g, "");
              if (E = R.slice(0, 4), b = R.slice(4, 5).padStart(2, "0"), $ = R.slice(5).padStart(2, "0"), !Ue(`${E}.${b}.${$}`)) {
                const [Ae, ...He] = $.split("");
                b = Ae.padStart(2, "0"), $ = He.join("").padStart(2, "0");
              }
            }
            if (!Ue(`${E}.${b}.${$}`) || r(`${E}.${b}.${$}`)) {
              const R = v.value;
              v.value = "", await ge(), v.value = R, await ge(), A(R);
              return;
            }
            V.value = Number(E), te.value = Number(b), v.value = "", await ge(), v.value = `${E}.${b}.${$}`, await ge(), A(`${E}.${b}.${$}`);
          })();
          break;
        case 10:
        default:
          await (async () => {
            if (!Ue(F) || r(F)) {
              const R = v.value;
              v.value = "", await ge(), v.value = R, await ge(), A(R);
              return;
            }
            const [E, b, $] = F.split(".");
            V.value = Number(E), te.value = Number(b), v.value = "", await ge(), v.value = `${E}.${b}.${$}`, await ge(), A(`${E}.${b}.${$}`);
          })();
          break;
      }
    }, V = h(
      Number((X = v.value) == null ? void 0 : X.split(".")[0]) || (/* @__PURE__ */ new Date()).getFullYear()
    ), te = h(
      Number((Te = v.value) == null ? void 0 : Te.split(".")[1]) || (/* @__PURE__ */ new Date()).getMonth() + 1
    ), z = (H) => {
      const Y = te.value + H;
      Y > 12 ? (te.value = 1, V.value += 1) : Y < 1 ? (te.value = 12, V.value -= 1) : te.value = Y;
    }, _ = h(V.value), P = (H) => {
      _.value += H;
    }, C = h(V.value), w = (H) => {
      x.value += H, W.value += H;
    };
    Be(V, (H, Y) => {
      _.value = H, C.value = H;
    });
    const j = h(!1);
    Ke(() => {
      window.addEventListener("click", p), window.addEventListener("scroll", f), window.addEventListener("resize", m), Array.isArray(e.scrollEventRefs) && e.scrollEventRefs.forEach((H) => {
        const Y = document.querySelector(H);
        Y instanceof HTMLElement && Y.addEventListener("scroll", f);
      });
    }), pt(() => {
      window.removeEventListener("click", p), window.removeEventListener("scroll", f), window.removeEventListener("resize", m), Array.isArray(e.scrollEventRefs) && e.scrollEventRefs.forEach((H) => {
        const Y = document.querySelector(H);
        Y instanceof HTMLElement && Y.removeEventListener(
          "scroll",
          f
        );
      });
    });
    const G = h(!1), le = () => {
      G.value = !0, se.value = !1, j.value = !1;
    }, se = h(!1), de = () => {
      se.value = !0, j.value = !1, G.value = !1;
    }, ue = () => {
      if (j.value || G.value || se.value)
        switch (!0) {
          case j.value:
            j.value = !0, G.value = !1, se.value = !1;
            break;
          case G.value:
            j.value = !1, G.value = !0, se.value = !1;
            break;
          case se.value:
            j.value = !1, G.value = !1, se.value = !0;
            break;
        }
      else
        j.value = !0, se.value = !1, G.value = !1;
      if (!u.value)
        return;
      const { bottom: H, left: Y, right: F, top: J, width: E } = u.value.getBoundingClientRect();
      c.value = {
        bottom: H,
        left: Y,
        right: F,
        top: J,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight,
        minusWidth: E
      };
    }, be = ce(() => {
      const [H, Y] = Lt().split("."), J = Array.from({ length: 12 }, (b, $) => $ + 1).map((b) => {
        var $, R, Ae, He;
        return {
          year: String(_.value),
          month: String(b),
          isActive: V.value === _.value && te.value === b,
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
          isCurrentMonth: _.value === Number(H) && b === Number(Y),
          isStartMonth: Number(($ = n.value[0]) == null ? void 0 : $.split(".")[0]) === _.value && Number((R = n.value[0]) == null ? void 0 : R.split(".")[1]) === b,
          isEndMonth: Number((Ae = n.value[1]) == null ? void 0 : Ae.split(".")[0]) === _.value && Number((He = n.value[1]) == null ? void 0 : He.split(".")[1]) === b
        };
      }), E = [];
      for (let b = 0; b < J.length; b += e.monthLength)
        E.push(J.slice(b, b + e.monthLength));
      return E;
    }), O = h(e.yearBeforeAfterLength * 2 + 1), x = h(
      C.value - e.yearBeforeAfterLength
    ), W = h(
      C.value + e.yearBeforeAfterLength
    ), K = ce(() => {
      const [H] = Lt().split("."), Y = [];
      for (let E = x.value; E <= W.value; E++)
        Y.push(E);
      const F = Y.map((E) => {
        var b, $;
        return {
          year: String(E),
          isActive: V.value === E,
          inRange: s(String(E)),
          // Todo
          isDisabled: i(String(E)),
          isCurrentYear: E === Number(H),
          isStartYear: Number((b = n.value[0]) == null ? void 0 : b.split(".")[0]) === E,
          isEndYear: Number(($ = n.value[1]) == null ? void 0 : $.split(".")[0]) === E
        };
      }), J = [];
      for (let E = 0; E < F.length; E += e.yearLength)
        J.push(F.slice(E, E + e.yearLength));
      return J;
    }), L = (H, Y) => {
      var ht, We, et, $t, Ct, wt, Dt;
      const [F, J, E] = Lt().split("."), [b, $, R] = ((ht = v.value) == null ? void 0 : ht.split(".")) || [null, null, null], Ae = Number(b) === H && Number($) === Y, He = new Date(H, Y, 0).getDate(), gt = [];
      let lt = Array(7).fill(null);
      for (let De = 1; De <= He; De++) {
        const it = new Date(H, Y - 1, De).getDay();
        lt[it] = {
          year: String(H),
          month: String(Y).padStart(2, "0"),
          date: String(De),
          isActive: Ae && Number(R) === De,
          inRange: a(
            `${String(H)}.${String(Y).padStart(
              2,
              "0"
            )}.${String(De).padStart(2, "0")}`
          ),
          isDisabled: r(
            `${String(H)}.${String(Y).padStart(
              2,
              "0"
            )}.${String(De).padStart(2, "0")}`
          ),
          isCurrentDate: Number(F) === H && Number(J) === Y && Number(E) === De,
          isStartDate: Number((We = n.value[0]) == null ? void 0 : We.split(".")[0]) === H && Number((et = n.value[0]) == null ? void 0 : et.split(".")[1]) === Y && Number(($t = n.value[0]) == null ? void 0 : $t.split(".")[2]) === De,
          isEndDate: Number((Ct = n.value[1]) == null ? void 0 : Ct.split(".")[0]) === H && Number((wt = n.value[1]) == null ? void 0 : wt.split(".")[1]) === Y && Number((Dt = n.value[1]) == null ? void 0 : Dt.split(".")[2]) === De
        }, (it === 6 || De === He) && (gt.push(lt), lt = Array(7).fill(null));
      }
      return gt;
    }, ne = ce(() => L(V.value, te.value)), ee = (H) => {
      v.value = H || "", j.value = !1, G.value = !1, se.value = !1, t("update:modelValue", v.value);
    }, ae = (H) => {
      const [Y, F] = H.split(".");
      V.value = Number(Y), te.value = Number(F), G.value = !1, se.value = !1, j.value = !0;
    }, ie = (H) => {
      V.value = Number(H), se.value = !1, G.value = !0, j.value = !1;
    }, ve = h(null), _e = h(null), he = h(null), Q = ce(() => e.isDisabled);
    return q(Er, v), q(Sr, ue), q(ja, ee), q(Wa, z), q(qa, w), q(Qa, P), q(Ga, O), q(Xa, de), q($r, le), q(Cr, ae), q(wr, ie), q(Dr, d), q(Tr, u), q(Zn, c), q(kr, ve), q(Lr, _e), q(Mr, he), q(ke, e.type), q(Ir, k), q(Br, g), q(Pr, Q), q(Rr, y), {
      isActiveCalendar: j,
      monthDates: ne,
      nowYear: V,
      nowMonth: te,
      months: be,
      years: K,
      startYear: x,
      endYear: W,
      isActiveMonthCalendar: G,
      isActiveYearCalendar: se,
      yearForYearCalendar: C,
      yearForMonthCalendar: _,
      // ...
      selectedDatePickerValue: v
    };
  }
});
function Hf(e, t, n, a, o, s) {
  return T(), I("div", {
    class: fe(["h_single_datepicker_area", e.type])
  }, [
    U(e.$slots, "default", {
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
const Mm = /* @__PURE__ */ Z(Pf, [["render", Hf]]), Rf = N({
  name: "HSingleDatePickerCalendarMonth",
  setup() {
    return {
      calendarType: S(ke)
    };
  }
}), Nf = { class: "h_calendar_month_table" };
function Of(e, t, n, a, o, s) {
  return T(), I("div", {
    class: fe(["h_calendar_month", e.calendarType])
  }, [
    oe("table", Nf, [
      t[0] || (t[0] = oe("caption", null, [
        oe("span", { class: "blind" }, "Months")
      ], -1)),
      oe("thead", null, [
        U(e.$slots, "table_head")
      ]),
      oe("tbody", null, [
        U(e.$slots, "table_body")
      ])
    ])
  ], 2);
}
const Im = /* @__PURE__ */ Z(Rf, [["render", Of]]), xf = N({
  name: "HSingleDatePickerMonthButton",
  setup() {
    const e = S(ke);
    return {
      setIsActiveMonthCalendar: S(
        $r,
        () => {
        }
      ),
      calendarType: e
    };
  }
});
function Ff(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_month", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.setIsActiveMonthCalendar && e.setIsActiveMonthCalendar(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const Bm = /* @__PURE__ */ Z(xf, [["render", Ff]]), Uf = N({
  name: "HSingleDatePickerCalendarMonthButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = S(ke), n = S(
      Cr,
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
function zf(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_calendar_common", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.clickedNowMonthButton && e.clickedNowMonthButton(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const Pm = /* @__PURE__ */ Z(Uf, [["render", zf]]), Yf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdSxCQMhFABQFQS73Ai3QWa4USytQkbIBukUG0dJRsgIN4KlWEjUIuRyen4t8kH8IE8E//8I/SOMMZPW+pJy3IO898+YnuO6guAPWkMISxOWkBBixSMoneERVIUtVIQQtINQtIE96AN7UYYjKAVxzk1xP+VbMLaMMYsAkZ8qpZwJIY+YzhG/KKUL59w24QjefEcP3hUAFBdLDoKrRd7Ch211hJuNXMOg0VHC4GH1jWNZ3lBPJKyUuqf8DUy8w9O6XZwQAAAAAElFTkSuQmCC", Vf = N({
  name: "IconArrowLeft",
  setup() {
    return {
      ArrowLeftImage: Yf
    };
  }
}), jf = ["src"];
function Wf(e, t, n, a, o, s) {
  return T(), I("span", null, [
    oe("img", {
      src: e.ArrowLeftImage,
      alt: "왼쪽 화살표"
    }, null, 8, jf)
  ]);
}
const to = /* @__PURE__ */ Z(Vf, [["render", Wf]]), qf = N({
  name: "HSingleDatePickerMonthPrevButton",
  components: {
    IconArrowLeft: to
  },
  setup() {
    const e = S(Qa, (n) => {
    }), t = S(ke);
    return {
      setYearForMonthCalendar: e,
      calendarType: t
    };
  }
});
function Qf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-left");
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_calendar_month_prev", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForMonthCalendar(-1))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ye(r, { key: 0 })) : Ie("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 이전 연도 ", -1))
  ], 2);
}
const Hm = /* @__PURE__ */ Z(qf, [["render", Qf]]), Gf = N({
  name: "HSingleDatePickerCalendarYear",
  setup() {
    return {
      calendarType: S(ke)
    };
  }
}), Xf = { class: "h_calendar_year_table" };
function Zf(e, t, n, a, o, s) {
  return T(), I("div", {
    class: fe(["h_calendar_year", e.calendarType])
  }, [
    U(e.$slots, "default"),
    oe("table", Xf, [
      t[0] || (t[0] = oe("caption", null, [
        oe("span", { class: "blind" }, "Years")
      ], -1)),
      oe("thead", null, [
        U(e.$slots, "table_head")
      ]),
      oe("tbody", null, [
        U(e.$slots, "table_body")
      ])
    ])
  ], 2);
}
const Rm = /* @__PURE__ */ Z(Gf, [["render", Zf]]), Kf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBpdS9FcIgEADgHEVqR8gIruAGjiAllRnFCh40uIEjZIWMkBHseQ88LfKi8nOnFBx3730cDdd1/yzn3NkYM3CMsNaOKaWLEGLiYNH3/RUAZjwPHAzPzXu/CyFM2HmP6RJjPCillib8BcM24WD4LFAx5G6j4Cyk4CJs4Sqs4SYsYUGBUso7hnlbI3XET+Cx24n11BxqdiyhKqyhImyhLKSgL0hFb5CDVshFL4jD6ojxxkHr0lqP3PH4AAMhEevOZzQ6AAAAAElFTkSuQmCC", Jf = N({
  name: "IconArrowRight",
  setup() {
    return {
      ArrowRightImage: Kf
    };
  }
}), ev = ["src"];
function tv(e, t, n, a, o, s) {
  return T(), I("span", null, [
    oe("img", {
      src: e.ArrowRightImage,
      alt: "오른쪽 화살표"
    }, null, 8, ev)
  ]);
}
const no = /* @__PURE__ */ Z(Jf, [["render", tv]]), nv = N({
  name: "HSingleDatePickerNextButton",
  components: {
    IconArrowRight: no
  },
  setup() {
    const e = S(Wa, (n) => {
    }), t = S(ke);
    return {
      setNowMonth: e,
      calendarType: t
    };
  }
});
function av(e, t, n, a, o, s) {
  const r = ot("icon-arrow-right");
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_calendar_next", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setNowMonth(1))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ye(r, { key: 0 })) : Ie("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 다음 ", -1))
  ], 2);
}
const Nm = /* @__PURE__ */ Z(nv, [["render", av]]), ov = N({
  name: "HSingleDatePickerPrevButton",
  components: {
    IconArrowLeft: to
  },
  setup() {
    const e = S(Wa, (n) => {
    }), t = S(ke);
    return {
      setNowMonth: e,
      calendarType: t
    };
  }
});
function sv(e, t, n, a, o, s) {
  const r = ot("icon-arrow-left");
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_calendar_prev", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setNowMonth(-1))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ye(r, { key: 0 })) : Ie("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 이전 ", -1))
  ], 2);
}
const Om = /* @__PURE__ */ Z(ov, [["render", sv]]), rv = N({
  name: "HSingleDatePickerCalendarYearArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = S(ke), t = S(Zn), n = S(Mr), a = ce(() => {
      if (!t || !xn(t))
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
        minusWidth: u
      } = t.value;
      if (!((n == null ? void 0 : n.value) instanceof HTMLElement))
        return {};
      const { height: d, width: f } = n.value.getBoundingClientRect();
      return {
        position: "fixed",
        zIndex: "220",
        ...Ja(l, o, d, c),
        ...eo(s, r, f, i, u)
      };
    });
    return {
      calendarYearArea: n,
      calendarStyle: a,
      calendarType: e
    };
  }
});
function lv(e, t, n, a, o, s) {
  return e.isActive ? (T(), I("div", {
    key: 0,
    ref: "calendarYearArea",
    class: fe(["h_calendar_year_area", e.calendarType]),
    style: Le(e.calendarStyle)
  }, [
    U(e.$slots, "default")
  ], 6)) : Ie("", !0);
}
const xm = /* @__PURE__ */ Z(rv, [["render", lv]]), iv = N({
  name: "HSingleDatePickerYearButton",
  setup() {
    const e = S(ke);
    return {
      setIsActiveYearCalendar: S(
        Xa,
        () => {
        }
      ),
      calendarType: e
    };
  }
});
function cv(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_year", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.setIsActiveYearCalendar && e.setIsActiveYearCalendar(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const Fm = /* @__PURE__ */ Z(iv, [["render", cv]]), uv = N({
  name: "HSingleDatePickerYearNextButton",
  components: {
    IconArrowRight: no
  },
  setup() {
    const e = S(
      qa,
      (a) => {
      }
    ), t = S(Ga, h(0)), n = S(ke);
    return {
      setYearForYearCalendar: e,
      yearsArrLength: t,
      calendarType: n
    };
  }
});
function dv(e, t, n, a, o, s) {
  const r = ot("icon-arrow-right");
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_calendar_year_next", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForYearCalendar(e.yearsArrLength))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ye(r, { key: 0 })) : Ie("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 다음 연도 ", -1))
  ], 2);
}
const Um = /* @__PURE__ */ Z(uv, [["render", dv]]), fv = N({
  name: "HSingleDatePickerCalendarYearButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = S(ke), n = S(
      wr,
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
function vv(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_calendar_common", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.clickedYearButton && e.clickedYearButton(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const zm = /* @__PURE__ */ Z(fv, [["render", vv]]), Or = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB7ZnRbYNADIZ9iAceM8J1g3aDdJL2CcRTlQ3aEfqE4KXqBO0G7QbpBmUEFgDii4gURbkAZ0cOkj/pMNKPJf9wdzIAoCiKokhRluW/GxAINd8RAw0LNCwQiWDhGJ9QVdULhue+71fgxw6xhjDsWL4xpsEa3rIs+z6ne6cQJr1iuFT8uUJCseCvw4UPHPMMwFA83oGHtm2bU7HrulUcx9vh/A5mMiX/6BrvjRxdxGma/vk03EH2Mc/zGgKYkn+4xsfiFzF1G62BRg1ESAZwjj4mSdJAINR8B8lA6Nznyncsfg2oAWnUgDRqQBoWA9h633NrUyEbwGbrC1veLRbzw6XNgeMJrN0Bi1kzapMhG8B+ZoPvDL94uuHSWMBH3LsBwozVobuQNGpAGjUgjRqQRg1IM/pZhfoD4tp4DWCz9RlF0RMw/ISggh3ru08zlxKLorBwA3B8AFMU5UbZAevho9IdayVBAAAAAElFTkSuQmCC", pv = N({
  name: "IconCalendar",
  setup() {
    return {
      CalendarImage: Or
    };
  }
}), mv = ["src"];
function gv(e, t, n, a, o, s) {
  return T(), I("span", null, [
    oe("img", {
      src: e.CalendarImage,
      alt: "달력 이미지"
    }, null, 8, mv)
  ]);
}
const hv = /* @__PURE__ */ Z(pv, [["render", gv]]), yv = N({
  name: "HSingleDatePickerInput",
  components: {
    IconCalendar: hv
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
      Er,
      h(null)
    ), t = S(
      ja,
      () => {
      }
    );
    Be(e, (d) => {
      t(d);
    });
    const n = S(Sr, () => {
    }), a = S(Tr), o = S(Dr), s = S(ke), r = S(Ir), l = S(Br), i = S(Pr), c = h(Or), u = Gt();
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
      id: u
    };
  }
}), bv = ["src"], Av = ["id", "value", "disabled", "placeholder", "name"];
function _v(e, t, n, a, o, s) {
  const r = ot("icon-calendar");
  return T(), I("div", {
    ref: "calendarInputArea",
    class: fe(["h_inp_datepicker_area", e.calendarType])
  }, [
    e.reactiveImage ? (T(), I("img", {
      key: 0,
      class: "icon_calendar",
      src: e.imageSrc,
      alt: "달력 이미지"
    }, null, 8, bv)) : (T(), I(ns, { key: 1 }, [
      e.calendarType === "type1" ? (T(), Ye(r, { key: 0 })) : Ie("", !0)
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
    }, null, 40, Av)
  ], 2);
}
const Ym = /* @__PURE__ */ Z(yv, [["render", _v]]), Ev = N({
  name: "HSingleDatePickerMonthNextButton",
  components: {
    IconArrowRight: no
  },
  setup() {
    const e = S(Qa, (n) => {
    }), t = S(ke);
    return {
      setYearForMonthCalendar: e,
      calendarType: t
    };
  }
});
function Sv(e, t, n, a, o, s) {
  const r = ot("icon-arrow-right");
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_calendar_month_next", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForMonthCalendar(1))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ye(r, { key: 0 })) : Ie("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 다음 연도 ", -1))
  ], 2);
}
const Vm = /* @__PURE__ */ Z(Ev, [["render", Sv]]), $v = N({
  name: "HSingleDatePickerMonthYearButton",
  setup() {
    const e = S(ke);
    return {
      setIsActiveYearCalendar: S(
        Xa,
        () => {
        }
      ),
      calendarType: e
    };
  }
});
function Cv(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_year_in_month", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.setIsActiveYearCalendar && e.setIsActiveYearCalendar(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const jm = /* @__PURE__ */ Z($v, [["render", Cv]]), wv = N({
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
    const n = h(e.modelValue[0]), a = h(e.modelValue[1]), o = ce(() => [n.value, a.value]), s = ce(() => [
      `${a.value}~`
    ]), r = ce(() => [
      `~${n.value}`
    ]), l = () => {
      t("update:modelValue", [n.value, a.value]);
    }, i = (u) => {
      n.value = u, l();
    }, c = (u) => {
      a.value = u, l();
    };
    return q(Za, i), q(Ka, c), q(Hr, o), {
      startDate: n,
      endDate: a,
      startDisableDatesRange: s,
      endDisabledDatesRange: r
    };
  }
}), Dv = { class: "h_single_datepicker_range_area" };
function Tv(e, t, n, a, o, s) {
  return T(), I("div", Dv, [
    U(e.$slots, "default", {
      startDate: e.startDate,
      endDate: e.endDate,
      startDisableDatesRange: e.startDisableDatesRange,
      endDisabledDatesRange: e.endDisabledDatesRange
    })
  ]);
}
const Wm = /* @__PURE__ */ Z(wv, [["render", Tv]]), kv = N({
  name: "HSingleDatePickerYearPrevButton",
  components: {
    IconArrowLeft: to
  },
  setup() {
    const e = S(
      qa,
      (a) => {
      }
    ), t = S(Ga, h(0)), n = S(ke);
    return {
      setYearForYearCalendar: e,
      yearsArrLength: t,
      calendarType: n
    };
  }
});
function Lv(e, t, n, a, o, s) {
  const r = ot("icon-arrow-left");
  return T(), I("button", {
    type: "button",
    class: fe(["h_btn_calendar_year_prev", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForYearCalendar(-1 * e.yearsArrLength))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ye(r, { key: 0 })) : Ie("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 이전 연도 ", -1))
  ], 2);
}
const qm = /* @__PURE__ */ Z(kv, [["render", Lv]]), xr = Symbol(
  "inputFileButtonClick"
), Fr = Symbol("deleteFile"), Ur = Symbol("fileName"), zr = Symbol("fileSize"), ao = Symbol("file"), Kn = Symbol("isError"), Mv = Symbol("imageEl"), Iv = Symbol("signImage"), Bv = Symbol("useDirectImage"), Pv = Symbol("cancelDirectImage"), Hv = Symbol("realValue"), Rv = N({
  name: "HSingleFileUploadedFileArea",
  setup() {
    const e = S(ao, h(null)), t = S(Kn, h(!1));
    return {
      file: e,
      isError: t
    };
  }
}), Nv = {
  key: 0,
  class: "h_uploaded_file"
};
function Ov(e, t, n, a, o, s) {
  return e.file && !e.isError ? (T(), I("div", Nv, [
    U(e.$slots, "default")
  ])) : Ie("", !0);
}
const Qm = /* @__PURE__ */ Z(Rv, [["render", Ov]]), xv = N({
  name: "HSingleFileUploadedFileDeleteButton",
  setup() {
    return {
      deleteFile: S(Fr, () => {
      })
    };
  }
});
function Fv(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.deleteFile && e.deleteFile(...r))
  }, [
    U(e.$slots, "default")
  ]);
}
const Gm = /* @__PURE__ */ Z(xv, [["render", Fv]]), Uv = N({
  name: "HSingleFileUploadTitle"
}), zv = { class: "h-single-file-upload-tit" };
function Yv(e, t, n, a, o, s) {
  return T(), I("em", zv, [
    U(e.$slots, "default")
  ]);
}
const Xm = /* @__PURE__ */ Z(Uv, [["render", Yv]]), Vv = N({
  name: "HSingleFileUploadedFileName",
  setup() {
    return {
      fileName: S(
        Ur,
        ce(() => "")
      )
    };
  }
}), jv = { class: "h_file_name" };
function Wv(e, t, n, a, o, s) {
  return T(), I("span", jv, $n(e.fileName), 1);
}
const Zm = /* @__PURE__ */ Z(Vv, [["render", Wv]]), qv = () => ({
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
}), Qv = (e) => {
  let t = "";
  const n = new Uint8Array(e), a = n.byteLength;
  for (let o = 0; o < a; o++)
    t += String.fromCharCode(n[o]);
  return window.btoa(t);
}, Gv = (e) => new Promise((t, n) => {
  const a = new FileReader();
  a.readAsDataURL(e), a.onload = () => {
    const o = a.result;
    if (!o) {
      t("");
      return;
    }
    o instanceof ArrayBuffer ? t(Qv(o)) : t(o);
  }, a.onerror = (o) => {
    n(o);
  };
});
function Xv() {
  const e = (r) => (l) => r(l), t = h(null), n = h(null);
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
const Zv = N({
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
    const { validStatus: n, validExtensions: a, modelValue: o } = Nn(e), s = h(o.value || null), r = h(!1), l = h(!1), i = h(!1);
    q(Hv, o);
    const c = ce(() => {
      var C;
      return (C = s.value) == null ? void 0 : C.name;
    }), u = ce(() => {
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
    const d = () => {
      f.value && (f.value.value = "", f.value.files = null), s.value = null, r.value = !1, i.value = !1, A.value = null, v.value = "", t("update:modelValue", s.value);
    }, f = h(null);
    Be(
      o,
      (C) => {
        ge(() => {
          if (f.value)
            if (C) {
              const w = new DataTransfer();
              w.items.add(C), f.value.files = w.files;
            } else {
              const w = new DataTransfer();
              f.value.files = w.files;
            }
        });
      },
      { immediate: !0 }
    );
    const m = () => {
      f.value && f.value.click();
    }, p = (C) => {
      var w;
      if (((w = a.value) == null ? void 0 : w.length) === 0 || a.value.includes(C.type) || a.value.includes(`.${C.name.split(".")[1]}`)) {
        if (s.value = C, r.value = !0, i.value = !1, s.value.size > e.limitSize) {
          s.value = null, r.value = !1, i.value = !0, A.value = null, v.value = "", t("exceed-size"), t("update:modelValue", s.value);
          return;
        }
        e.image && V(s.value), t("update:modelValue", s.value);
      } else
        s.value = null, r.value = !1, i.value = !0, A.value = null, v.value = "", t("no-valid-extensions");
    }, v = h(""), { promiseInstance: k, resolveFunc: g, rejectFunc: y } = Xv(), M = async () => {
      t("use-direct-image", {
        signImage: v.value,
        resolveFunc: g,
        rejectFunc: y
      }), await k() !== "false" && (A.value = v.value || null, A.value === null ? (s.value = null, f.value && (f.value.value = "", f.value.files = null)) : (s.value = Gv(v.value), s.value.size > e.limitSize ? (s.value = null, r.value = !1, i.value = !0, A.value = null, v.value = "", t("exceed-size"), f.value && (f.value.value = "", f.value.files = null)) : (r.value = !0, i.value = !1)), t("update:modelValue", s.value));
    }, D = async () => {
      !A.value && v.value || A.value !== v.value ? (t("cancel-direct-image", {
        signImage: v.value,
        resolveFunc: g,
        rejectFunc: y
      }), await k() === "true" && (v.value = A.value || "")) : (v.value = A.value || "", t("cancel-direct-image"));
    };
    q(Iv, v), q(Bv, M), q(Pv, D);
    const A = h(e.initImage || null);
    Be(
      () => e.initImage,
      (C) => {
        C && (A.value = C, v.value = C);
      },
      {
        immediate: !0
      }
    );
    const { arrayBufferToBase64: B } = qv(), V = (C) => {
      const w = new FileReader();
      w.onload = (j) => {
        const G = j.target;
        if (!G || !(G instanceof FileReader) || !G.result)
          return;
        const le = G.result;
        le instanceof ArrayBuffer ? A.value = B(le) : A.value = le, v.value = A.value;
      }, w.readAsDataURL(C);
    };
    q(Mv, A);
    const te = (C) => {
      var G;
      const w = C.target;
      if (!w || !fl(w))
        return;
      const j = (G = w.files) == null ? void 0 : G[0];
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
    return q(xr, m), q(Fr, d), q(Ur, c), q(zr, u), q(ao, s), q(Kn, i), {
      fileInput: f,
      fileName: c,
      fileSize: u,
      deleteFile: d,
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
}), Kv = ["accept"];
function Jv(e, t, n, a, o, s) {
  return T(), I("div", {
    class: fe(["h_upload_area", { is_active: e.isActive, is_hover: e.isHover, is_error: e.isError }]),
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
    }, null, 40, Kv),
    U(e.$slots, "default", {
      isActive: e.isActive,
      isHover: e.isHover,
      isError: e.isError
    })
  ], 34);
}
const Km = /* @__PURE__ */ Z(Zv, [["render", Jv]]), ep = N({
  name: "HSingleFileUploadedFileSize",
  setup() {
    return {
      fileSize: S(
        zr,
        ce(() => "")
      )
    };
  }
}), tp = { class: "h_file_size" };
function np(e, t, n, a, o, s) {
  return T(), I("span", tp, $n(e.fileSize), 1);
}
const Jm = /* @__PURE__ */ Z(ep, [["render", np]]), ap = N({
  name: "HSingleFileUploadErrorMsg",
  setup() {
    return {
      isError: S(Kn, h(!1))
    };
  }
}), op = {
  key: 0,
  class: "h-uploade-error-cont"
};
function sp(e, t, n, a, o, s) {
  return e.isError ? (T(), I("p", op, [
    U(e.$slots, "default")
  ])) : Ie("", !0);
}
const eg = /* @__PURE__ */ Z(ap, [["render", sp]]), rp = N({
  name: "HSingleFileUploadNoFileErrorMsg",
  setup() {
    const e = S(ao, h(null)), t = S(Kn, h(!1));
    return {
      file: e,
      isError: t
    };
  }
}), lp = {
  key: 0,
  class: "h-no-file-error-cont"
};
function ip(e, t, n, a, o, s) {
  return !e.file && !e.isError ? (T(), I("p", lp, [
    U(e.$slots, "default")
  ])) : Ie("", !0);
}
const tg = /* @__PURE__ */ Z(rp, [["render", ip]]), cp = N({
  name: "HSingleFileUploadedFileAddButton",
  setup() {
    return {
      inputFileButtonClick: S(xr, () => {
      })
    };
  }
});
function up(e, t, n, a, o, s) {
  return T(), I("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.inputFileButtonClick && e.inputFileButtonClick(...r))
  }, [
    U(e.$slots, "default")
  ]);
}
const ng = /* @__PURE__ */ Z(cp, [["render", up]]), Yr = Symbol(
  "sliderRangeContainer"
), Vr = Symbol("startRangeDrag"), jr = Symbol("clickRangeSlider"), oo = Symbol("leftThumbPosition"), so = Symbol("rightThumbPosition"), dp = N({
  name: "HSliderRangeArea",
  props: {
    modelValue: {
      type: Array,
      default: () => [0, 200]
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = h(null), a = h(0), o = h(200), s = h(200), r = h(null), l = h(!1);
    Ke(() => {
      if (!n.value)
        return;
      const { width: f } = n.value.getBoundingClientRect();
      s.value = f, e.modelValue[0] > o.value ? a.value = o.value - 10 : e.modelValue[0] > s.value ? a.value = s.value : e.modelValue[0] < 0 ? a.value = 0 : a.value = e.modelValue[0], e.modelValue[1] < a.value ? o.value = a.value + 10 : e.modelValue[1] > s.value ? o.value = s.value : e.modelValue[1] < 0 ? o.value = 0 : o.value = e.modelValue[1], t("update:modelValue", [a.value, o.value]);
    });
    const i = (f) => {
      if (!l.value || !n.value)
        return;
      let m = f.clientX - n.value.getBoundingClientRect().left;
      m < 0 ? m = 0 : m > s.value && (m = s.value), r.value === "left" && m >= o.value ? (m = o.value - 10, r.value = "right") : r.value === "right" && m <= a.value && (m = a.value + 10, r.value = "left"), r.value === "left" ? a.value = m : o.value = m, t("update:modelValue", [a.value, o.value]);
    }, c = () => {
      l.value = !1, r.value = null, document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", c);
    }, u = (f) => {
      if (!n.value)
        return;
      const m = n.value.getBoundingClientRect(), p = f.clientX - m.left, v = Math.abs(p - a.value) < Math.abs(p - o.value);
      r.value = v ? "left" : "right", l.value = !0, document.addEventListener("mousemove", i), document.addEventListener("mouseup", c);
    }, d = (f) => {
      l.value = !0, u(f), i(f), l.value = !1;
    };
    return q(Yr, n), q(Vr, u), q(jr, d), q(oo, a), q(so, o), {
      leftThumbPosition: a,
      rightThumbPosition: o
    };
  }
});
function fp(e, t, n, a, o, s) {
  return T(), I("div", null, [
    U(e.$slots, "default", {
      leftThumbPosition: e.leftThumbPosition,
      rightThumbPosition: e.rightThumbPosition
    })
  ]);
}
const ag = /* @__PURE__ */ Z(dp, [["render", fp]]), vp = N({
  name: "HSliderRangeContainer",
  setup() {
    const e = S(Yr, h(null)), t = S(Vr, () => {
    }), n = S(jr, (a) => {
    });
    return {
      sliderRangeContainer: e,
      startRangeDrag: t,
      clickRangeSlider: n
    };
  }
});
function pp(e, t, n, a, o, s) {
  return T(), I("div", {
    ref: "sliderRangeContainer",
    class: "h-slider-range-container",
    onMousedown: t[0] || (t[0] = (...r) => e.startRangeDrag && e.startRangeDrag(...r)),
    onClick: t[1] || (t[1] = (...r) => e.clickRangeSlider && e.clickRangeSlider(...r))
  }, [
    U(e.$slots, "default")
  ], 544);
}
const og = /* @__PURE__ */ Z(vp, [["render", pp]]), mp = N({
  name: "HSliderRangeLeftThumb",
  setup() {
    return {
      leftThumbPosition: S(oo, h(0))
    };
  }
});
function gp(e, t, n, a, o, s) {
  return T(), I("div", {
    class: "h-slider-thumb left-thumb",
    style: Le({ left: e.leftThumbPosition + "px" })
  }, null, 4);
}
const sg = /* @__PURE__ */ Z(mp, [["render", gp]]), hp = N({
  name: "HSliderRangeRightThumb",
  setup() {
    return {
      rightThumbPosition: S(so, h(0))
    };
  }
});
function yp(e, t, n, a, o, s) {
  return T(), I("div", {
    class: "h-slider-thumb right-thumb",
    style: Le({ left: e.rightThumbPosition + "px" })
  }, null, 4);
}
const rg = /* @__PURE__ */ Z(hp, [["render", yp]]), bp = N({
  name: "HSliderRangeTrack",
  setup() {
    const e = S(so, h(0)), t = S(oo, h(0));
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
}), Ap = { class: "h-slider-track" };
function _p(e, t, n, a, o, s) {
  return T(), I("div", Ap, [
    oe("div", {
      class: "h-slider-track-range-stick",
      style: Le(e.rangeStickStyle)
    }, null, 4)
  ]);
}
const lg = /* @__PURE__ */ Z(bp, [["render", _p]]), Wr = Symbol("thumbPosition"), qr = Symbol("sliderContainer"), Qr = Symbol("startDrag"), Gr = Symbol("clickSlider"), Ep = N({
  name: "HSliderSingleArea",
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = h(!1), a = h(null), o = h(200), s = h(0);
    Ke(() => {
      if (!a.value)
        return;
      const { width: u } = a.value.getBoundingClientRect();
      o.value = u, e.modelValue > o.value ? s.value = o.value : s.value = e.modelValue, t("update:modelValue", s.value);
    });
    const r = (u) => {
      if (!n.value || !a.value)
        return;
      let d = u.clientX - a.value.getBoundingClientRect().left;
      d < 0 ? d = 0 : d > o.value && (d = o.value), s.value = d, t("update:modelValue", s.value);
    }, l = () => {
      n.value = !1, document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", l);
    }, i = () => {
      n.value = !0, document.addEventListener("mousemove", r), document.addEventListener("mouseup", l);
    }, c = (u) => {
      n.value = !0, r(u), n.value = !1;
    };
    return q(Wr, s), q(qr, a), q(Qr, i), q(Gr, c), {
      thumbPosition: s
    };
  }
}), Sp = { class: "slider-area" };
function $p(e, t, n, a, o, s) {
  return T(), I("div", Sp, [
    U(e.$slots, "default", { thumbPosition: e.thumbPosition })
  ]);
}
const ig = /* @__PURE__ */ Z(Ep, [["render", $p]]), Cp = N({
  name: "HSliderSingleTrack"
}), wp = { class: "h-slider-track" };
function Dp(e, t, n, a, o, s) {
  return T(), I("div", wp);
}
const cg = /* @__PURE__ */ Z(Cp, [["render", Dp]]), Tp = N({
  name: "HSliderSingleThumb",
  setup() {
    return {
      thumbPosition: S(Wr, h(0))
    };
  }
});
function kp(e, t, n, a, o, s) {
  return T(), I("div", {
    class: "h-slider-thumb",
    style: Le({ left: e.thumbPosition + "px" })
  }, null, 4);
}
const ug = /* @__PURE__ */ Z(Tp, [["render", kp]]), Lp = N({
  name: "HSliderSingleContainer",
  setup() {
    const e = S(qr, h(null)), t = S(Qr, () => {
    }), n = S(Gr, (a) => {
    });
    return {
      sliderContainer: e,
      startDrag: t,
      clickSlider: n
    };
  }
});
function Mp(e, t, n, a, o, s) {
  return T(), I("div", {
    ref: "sliderContainer",
    class: "h-slider-container",
    onMousedown: t[0] || (t[0] = (...r) => e.startDrag && e.startDrag(...r)),
    onClick: t[1] || (t[1] = (...r) => e.clickSlider && e.clickSlider(...r))
  }, [
    U(e.$slots, "default")
  ], 544);
}
const dg = /* @__PURE__ */ Z(Lp, [["render", Mp]]), Ip = N({
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
    HScrollbars: js
  },
  setup() {
    const e = h(null), t = ce(() => e.value ? `${e.value.$el.getBoundingClientRect().height}px` : "auto");
    return {
      contArea: e,
      tableContentHeight: t
    };
  }
}), Bp = { class: "table_tit_area" }, Pp = { class: "blind" }, Hp = { class: "cont_area" }, Rp = { class: "blind" }, Np = { class: "blind" };
function Op(e, t, n, a, o, s) {
  const r = ot("HScrollbars");
  return T(), I("div", {
    class: fe({ h_table_area: e.defaultStyle })
  }, [
    oe("div", Bp, [
      oe("table", null, [
        oe("caption", null, [
          oe("span", Pp, $n(e.caption), 1)
        ]),
        U(e.$slots, "colgroup"),
        oe("thead", null, [
          U(e.$slots, "head")
        ])
      ])
    ]),
    es(r, {
      ref: "contArea",
      style: Le({
        maxHeight: e.tableContentMaxHeight,
        height: e.isScroll ? e.tableContentHeight : "auto"
      })
    }, {
      default: On(() => [
        oe("div", Hp, [
          oe("table", null, [
            oe("caption", null, [
              oe("span", Rp, $n(e.caption), 1)
            ]),
            U(e.$slots, "colgroup"),
            oe("thead", Np, [
              U(e.$slots, "head")
            ]),
            oe("tbody", null, [
              U(e.$slots, "body")
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["style"])
  ], 2);
}
const fg = /* @__PURE__ */ Z(Ip, [["render", Op]]), xp = ["for"], Fp = ["id", "name", "checked", "value", "disabled", "readonly", "required"], vg = /* @__PURE__ */ N({
  __name: "HInputRadio",
  props: {
    modelValue: {},
    name: {},
    data: {},
    labelClass: {},
    labelStyle: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const a = Va(), o = e, s = n, r = ce(() => !!(o.modelValue && Ot(o.modelValue, o.data)));
    function l() {
      s("update:modelValue", o.data);
    }
    const i = h(null);
    return t({
      inputRef: i
    }), (c, u) => (T(), I("div", null, [
      oe("label", {
        for: $e(a),
        class: fe(c.labelClass),
        style: Le(c.labelStyle)
      }, [
        U(c.$slots, "default")
      ], 14, xp),
      oe("input", {
        ref_key: "inputRef",
        ref: i,
        id: $e(a),
        type: "radio",
        name: c.name,
        checked: r.value,
        value: c.value,
        disabled: c.disabled,
        readonly: c.readonly,
        required: c.required,
        onChange: l,
        class: "h-input-radio"
      }, null, 40, Fp)
    ]));
  }
}), Up = ["for"], zp = ["id", "name", "checked", "value", "disabled", "readonly", "required"], pg = /* @__PURE__ */ N({
  __name: "HInputCheckbox",
  props: {
    modelValue: {},
    data: {},
    name: {},
    labelClass: {},
    labelStyle: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const a = Va(), o = e, s = n, r = ce(() => o.modelValue.some((c) => Ot(c, o.data))), l = () => {
      const c = r.value ? o.modelValue.filter((u) => !Ot(u, o.data)) : [...o.modelValue, o.data];
      s("update:modelValue", c);
    }, i = h(null);
    return t({
      inputRef: i
    }), (c, u) => (T(), I("div", null, [
      oe("label", {
        for: $e(a),
        class: fe(c.labelClass),
        style: Le(c.labelStyle)
      }, [
        U(c.$slots, "default")
      ], 14, Up),
      oe("input", {
        ref_key: "inputRef",
        ref: i,
        id: $e(a),
        type: "checkbox",
        name: c.name,
        checked: r.value,
        value: c.value,
        disabled: c.disabled,
        readonly: c.readonly,
        required: c.required,
        onChange: l,
        class: "h-input-checkbox"
      }, null, 40, zp)
    ]));
  }
});
var Ve = /* @__PURE__ */ ((e) => (e.NORMAL_LEFT = "normal-left", e.CHEVRON_LEFT = "chevron-left", e.CHEVRON_RIGHT = "chevron-right", e.CHECK_SQUARE_EMPTY = "check-square-empty", e.CHECK_SQUARE_CHECKED = "check-square-checked", e.TIP = "tip", e.RADIO_CIRCLE_EMPTY = "radio-circle-empty", e.RADIO_CIRCLE_CHECKED = "radio-circle-checked", e.CLOSE = "close", e.CIRCLE = "circle", e))(Ve || {});
const mg = /* @__PURE__ */ N({
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
        case Ve.NORMAL_LEFT:
          n.value = (await import("./IconNormalLeft-DlBQvCkt.js")).default;
          break;
        case Ve.CHEVRON_LEFT:
          n.value = (await import("./IconChevronLeft-8f74EtRF.js")).default;
          break;
        case Ve.CHEVRON_RIGHT:
          n.value = (await import("./IconChevronRight-Wfv6uvw0.js")).default;
          break;
        case Ve.CHECK_SQUARE_EMPTY:
          n.value = (await import("./IconCheckSquareEmpty-Cq4I7kuz.js")).default;
          break;
        case Ve.TIP:
          n.value = (await import("./IconTip-CkJRn-BR.js")).default;
          break;
        case Ve.RADIO_CIRCLE_EMPTY:
          n.value = (await import("./IconRadioCircleEmpty-oMqHuIZR.js")).default;
          break;
        case Ve.RADIO_CIRCLE_CHECKED:
          n.value = (await import("./IconRadioCircleChecked-BGN3NC6r.js")).default;
          break;
        case Ve.CHECK_SQUARE_CHECKED:
          n.value = (await import("./IconCheckSquareChecked-DiYc0jS0.js")).default;
          break;
        case Ve.CLOSE:
          n.value = (await import("./IconClose-CQ4FJre0.js")).default;
          break;
        case Ve.CIRCLE:
          n.value = (await import("./IconCircle-BXCei4go.js")).default;
          break;
        default:
          n.value = null;
      }
    }, { immediate: !0 }), (a, o) => n.value ? (T(), Ye(Da(n.value), {
      key: 0,
      width: a.width,
      height: a.height,
      fill: a.fill
    }, null, 8, ["width", "height", "fill"])) : Ie("", !0);
  }
}), Yp = ["onKeydown"], Vp = /* @__PURE__ */ N({
  __name: "HModal",
  props: {
    backdrop: {},
    escBeforeFunc: { type: Function },
    escAfterFunc: { type: Function }
  },
  emits: ["clicked-backdrop"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = n;
    a.backdrop && document.documentElement.style.setProperty("--modal-backdrop-color", a.backdrop);
    const s = h(null), r = async () => {
      s.value && s.value.close();
    }, l = async () => {
      a.escBeforeFunc && await a.escBeforeFunc(), r(), a.escAfterFunc && await a.escAfterFunc();
    }, i = () => {
      s.value && s.value.showModal();
    }, c = (u) => {
      s.value === u.target && o("clicked-backdrop", u);
    };
    return t({ open: i, closeFunc: r }), (u, d) => (T(), I("dialog", {
      ref_key: "dialogRef",
      ref: s,
      class: "h-modal",
      onKeydown: rl(Bt(l, ["prevent"]), ["esc"]),
      onClick: c
    }, [
      U(u.$slots, "default", { closeFunc: r }, void 0, !0)
    ], 40, Yp));
  }
}), gg = /* @__PURE__ */ Z(Vp, [["__scopeId", "data-v-6a07af1a"]]), hg = /* @__PURE__ */ N({
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
    return (a, o) => (T(), I("button", {
      onClick: n,
      type: "button"
    }, [
      U(a.$slots, "default", {}, () => [
        o[0] || (o[0] = xt("모달 열기"))
      ])
    ]));
  }
}), yg = /* @__PURE__ */ N({
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
    return (o, s) => (T(), I("button", {
      onClick: a,
      type: "button"
    }, [
      U(o.$slots, "default", {}, () => [
        s[0] || (s[0] = xt("닫기"))
      ])
    ]));
  }
}), bg = /* @__PURE__ */ N({
  __name: "HTextCounterArea",
  props: {
    tag: { default: "input" },
    maxLength: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = h(0), s = (l) => {
      const i = l.target;
      if (!i) return;
      const c = i.value;
      c.length > n.maxLength && (i.value = c.slice(0, n.maxLength)), o.value = i.value.length, a("update:modelValue", i.value);
    }, r = h(null);
    return Ke(() => {
      if (r.value === null)
        return;
      const l = r.value.querySelector(n.tag);
      if (!l)
        return;
      const i = l.tagName === "INPUT" && ["text", "number", "password", "search", "email", "url", "tel"].includes(l.type), c = l.tagName === "TEXTAREA";
      (i || c) && (l.addEventListener("input", s), o.value = l.value.length);
    }), (l, i) => (T(), I("div", {
      ref_key: "HTextCounterAreaRef",
      ref: r
    }, [
      U(l.$slots, "default", {
        maxLength: l.maxLength,
        currentLength: o.value
      })
    ], 512));
  }
});
export {
  vl as ButtonPositionType,
  tm as HCheckAuth,
  om as HCheckFormDataChange,
  Xp as HDropdownArea,
  Kp as HDropdownButton,
  Zp as HDropdownItem,
  Jp as HDropdownItemButton,
  em as HDropdownList,
  sm as HFileUploadArea,
  rm as HFileUploadButton,
  lm as HFileUploadFileItem,
  im as HFileUploadFileList,
  cm as HHtmlRender,
  mg as HIcon,
  pg as HInputCheckbox,
  vg as HInputRadio,
  um as HKanbanArea,
  dm as HKanbanCard,
  fm as HKanbanLine,
  vm as HKanbanLineInnerArea,
  pm as HLoading,
  gg as HModal,
  yg as HModalCloseButton,
  hg as HModalOpenButton,
  bm as HPaginationArea,
  Am as HPaginationFirstButton,
  _m as HPaginationLastButton,
  Em as HPaginationNextButton,
  Sm as HPaginationNumberButton,
  $m as HPaginationPrevButton,
  Cm as HPrintHtmlBox,
  wm as HPrintHtmlButton,
  js as HScrollbars,
  gm as HSignatureArea,
  hm as HSignatureClearButton,
  ym as HSignatureUndoButton,
  Mm as HSingleDatePickerArea,
  Dm as HSingleDatePickerCalendar,
  km as HSingleDatePickerCalendarArea,
  Tm as HSingleDatePickerCalendarDateButton,
  Im as HSingleDatePickerCalendarMonth,
  Lm as HSingleDatePickerCalendarMonthArea,
  Pm as HSingleDatePickerCalendarMonthButton,
  Rm as HSingleDatePickerCalendarYear,
  xm as HSingleDatePickerCalendarYearArea,
  zm as HSingleDatePickerCalendarYearButton,
  Ym as HSingleDatePickerInput,
  Bm as HSingleDatePickerMonthButton,
  Vm as HSingleDatePickerMonthNextButton,
  Hm as HSingleDatePickerMonthPrevButton,
  jm as HSingleDatePickerMonthYearButton,
  Nm as HSingleDatePickerNextButton,
  Om as HSingleDatePickerPrevButton,
  Wm as HSingleDatePickerRangeArea,
  Fm as HSingleDatePickerYearButton,
  Um as HSingleDatePickerYearNextButton,
  qm as HSingleDatePickerYearPrevButton,
  Qp as HSingleDragXArea,
  Km as HSingleFileUploadArea,
  eg as HSingleFileUploadErrorMsg,
  tg as HSingleFileUploadNoFileErrorMsg,
  Xm as HSingleFileUploadTitle,
  ng as HSingleFileUploadedFileAddButton,
  Qm as HSingleFileUploadedFileArea,
  Gm as HSingleFileUploadedFileDeleteButton,
  Zm as HSingleFileUploadedFileName,
  Jm as HSingleFileUploadedFileSize,
  ag as HSliderRangeArea,
  og as HSliderRangeContainer,
  sg as HSliderRangeLeftThumb,
  rg as HSliderRangeRightThumb,
  lg as HSliderRangeTrack,
  ig as HSliderSingleArea,
  dg as HSliderSingleContainer,
  ug as HSliderSingleThumb,
  cg as HSliderSingleTrack,
  fg as HTableArea,
  bg as HTextCounterArea,
  mm as HThreeDotLoading,
  Ve as IconType,
  Wp as makeVueInstance,
  qp as rippleDirective,
  nm as useCheckEqual,
  am as useFormChangeCheck,
  Gp as useHSingleDragXArea
};
