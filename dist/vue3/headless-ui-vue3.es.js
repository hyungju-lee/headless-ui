import { createApp as il, h as mo, defineComponent as N, ref as g, onMounted as We, onBeforeUnmount as Da, openBlock as T, createElementBlock as M, createElementVNode as oe, normalizeClass as ve, normalizeStyle as ke, renderSlot as U, computed as ce, toRefs as Rn, shallowRef as En, watchPostEffect as cl, watch as Be, unref as ge, createBlock as Ve, resolveDynamicComponent as Ta, withCtx as Nn, onUnmounted as pt, provide as Y, inject as S, useAttrs as La, mergeProps as On, isRef as xn, createVNode as os, createCommentVNode as Me, getCurrentInstance as ss, useSlots as ka, withDirectives as rs, vModelText as ls, nextTick as me, withModifiers as qt, Fragment as is, renderList as ul, toHandlers as dl, resolveComponent as ot, createTextVNode as Fn, toDisplayString as Sn } from "vue";
const nm = (e, { props: t, attrs: n, on: a, scopedSlots: o }) => il({
  render() {
    return mo(e, {
      ...n,
      ...t,
      ...a,
      vSlots: o ? o(mo) : {}
    });
  }
}).mount(document.createElement("div")), vl = (e) => e.type === "touchstart", fl = (e) => e.type === "touchmove", pl = (e) => e.type === "mousemove", ml = (e) => e.type === "mousedown", hl = (e) => e.type === "click", Ce = (e) => e instanceof HTMLElement, gl = (e) => e instanceof HTMLInputElement, ho = (e) => {
  e.preventDefault(), e.stopPropagation();
  const t = e.currentTarget;
  if (!t || !Ce(t))
    return;
  t.style.position = "relative", t.style.overflow = "hidden";
  const n = document.createElement("span");
  n.classList.add("ripple-effect");
  const a = t.getBoundingClientRect();
  hl(e) && (n.style.left = `${e.clientX - a.left}px`, n.style.top = `${e.clientY - a.top}px`), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      t.appendChild(n), n.addEventListener("animationend", () => {
        n.remove();
      });
    });
  });
}, am = () => ({
  beforeMount(e) {
    e.addEventListener("click", ho);
  },
  beforeUnmount(e) {
    e.removeEventListener("click", ho);
  }
});
var yl = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(yl || {});
const Al = N({
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
    return We(() => {
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
}, bl = { ref: "dragArea" };
function _l(e, t, n, a, o, s) {
  return T(), M("div", bl, [
    oe("button", {
      ref: "grabArea",
      type: "button",
      class: ve(["h-single-drag-area-btn", e.buttonPosition]),
      style: ke({ backgroundColor: e.buttonBackgroundColor })
    }, t[0] || (t[0] = [
      oe("span", { class: "blind" }, "드래그 버튼", -1)
    ]), 6),
    U(e.$slots, "default")
  ], 512);
}
const om = /* @__PURE__ */ Z(Al, [["render", _l]]), sm = ({ minWidth: e, backgroundColor: t }) => {
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
}, El = typeof window < "u" && typeof HTMLElement < "u" && !!window.document, Pe = El ? window : {}, cs = Math.max, Sl = Math.min, la = Math.round, $n = Math.abs, go = Math.sign, us = Pe.cancelAnimationFrame, Ia = Pe.requestAnimationFrame, Cn = Pe.setTimeout, ia = Pe.clearTimeout, Un = (e) => typeof Pe[e] < "u" ? Pe[e] : void 0, $l = Un("MutationObserver"), yo = Un("IntersectionObserver"), wn = Un("ResizeObserver"), yn = Un("ScrollTimeline"), Ma = (e) => e === void 0, zn = (e) => e === null, Xe = (e) => typeof e == "number", an = (e) => typeof e == "string", Ba = (e) => typeof e == "boolean", ze = (e) => typeof e == "function", Ze = (e) => Array.isArray(e), Dn = (e) => typeof e == "object" && !Ze(e) && !zn(e), Pa = (e) => {
  const t = !!e && e.length, n = Xe(t) && t > -1 && t % 1 == 0;
  return Ze(e) || !ze(e) && n ? t > 0 && Dn(e) ? t - 1 in e : !0 : !1;
}, Tn = (e) => !!e && e.constructor === Object, Ln = (e) => e instanceof HTMLElement, Vn = (e) => e instanceof Element;
function Ae(e, t) {
  if (Pa(e))
    for (let n = 0; n < e.length && t(e[n], n, e) !== !1; n++)
      ;
  else e && Ae(Object.keys(e), (n) => t(e[n], n, e));
  return e;
}
const ds = (e, t) => e.indexOf(t) >= 0, Xt = (e, t) => e.concat(t), we = (e, t, n) => (!an(t) && Pa(t) ? Array.prototype.push.apply(e, t) : e.push(t), e), mt = (e) => Array.from(e || []), Ha = (e) => Ze(e) ? e : !an(e) && Pa(e) ? mt(e) : [e], ca = (e) => !!e && !e.length, ua = (e) => mt(new Set(e)), xe = (e, t, n) => {
  Ae(e, (o) => o ? o.apply(void 0, t || []) : !0), !n && (e.length = 0);
}, vs = "paddingTop", fs = "paddingRight", ps = "paddingLeft", ms = "paddingBottom", hs = "marginLeft", gs = "marginRight", ys = "marginBottom", As = "overflowX", bs = "overflowY", Yn = "width", Wn = "height", dt = "visible", yt = "hidden", Bt = "scroll", Cl = (e) => {
  const t = String(e || "");
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}, jn = (e, t, n, a) => {
  if (e && t) {
    let o = !0;
    return Ae(n, (s) => {
      const r = e[s], l = t[s];
      r !== l && (o = !1);
    }), o;
  }
  return !1;
}, _s = (e, t) => jn(e, t, ["w", "h"]), An = (e, t) => jn(e, t, ["x", "y"]), wl = (e, t) => jn(e, t, ["t", "r", "b", "l"]), At = () => {
}, re = (e, ...t) => e.bind(0, ...t), Tt = (e) => {
  let t;
  const n = e ? Cn : Ia, a = e ? ia : us;
  return [(o) => {
    a(t), t = n(() => o(), ze(e) ? e() : e);
  }, () => a(t)];
}, da = (e, t) => {
  const { _: n, v: a, p: o, S: s } = t || {};
  let r, l, i, c, d = At;
  const u = function(L) {
    d(), ia(r), c = r = l = void 0, d = At, e.apply(this, L);
  }, v = (f) => s && l ? s(l, f) : f, m = () => {
    d !== At && u(v(i) || i);
  }, p = function() {
    const L = mt(arguments), h = ze(n) ? n() : n;
    if (Xe(h) && h >= 0) {
      const I = ze(a) ? a() : a, D = Xe(I) && I >= 0, b = h > 0 ? Cn : Ia, B = h > 0 ? ia : us, te = v(L) || L, z = u.bind(0, te);
      let _;
      d(), o && !c ? (z(), c = !0, _ = b(() => c = void 0, h)) : (_ = b(z, h), D && !r && (r = Cn(m, I))), d = () => B(_), l = i = te;
    } else
      u(L);
  };
  return p.m = m, p;
}, Es = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Ye = (e) => e ? Object.keys(e) : [], pe = (e, t, n, a, o, s, r) => {
  const l = [t, n, a, o, s, r];
  return (typeof e != "object" || zn(e)) && !ze(e) && (e = {}), Ae(l, (i) => {
    Ae(i, (c, d) => {
      const u = i[d];
      if (e === u)
        return !0;
      const v = Ze(u);
      if (u && Tn(u)) {
        const m = e[d];
        let p = m;
        v && !Ze(m) ? p = [] : !v && !Tn(m) && (p = {}), e[d] = pe(p, u);
      } else
        e[d] = v ? u.slice() : u;
    });
  }), e;
}, Ss = (e, t) => Ae(pe({}, e), (n, a, o) => {
  n === void 0 ? delete o[a] : n && Tn(n) && (o[a] = Ss(n));
}), Ra = (e) => !Ye(e).length, $s = (e, t, n) => cs(e, Sl(t, n)), bt = (e) => ua((Ze(e) ? e : (e || "").split(" ")).filter((t) => t)), Na = (e, t) => e && e.getAttribute(t), Ao = (e, t) => e && e.hasAttribute(t), tt = (e, t, n) => {
  Ae(bt(t), (a) => {
    e && e.setAttribute(a, String(n || ""));
  });
}, Qe = (e, t) => {
  Ae(bt(t), (n) => e && e.removeAttribute(n));
}, Qn = (e, t) => {
  const n = bt(Na(e, t)), a = re(tt, e, t), o = (s, r) => {
    const l = new Set(n);
    return Ae(bt(s), (i) => {
      l[r](i);
    }), mt(l).join(" ");
  };
  return {
    O: (s) => a(o(s, "delete")),
    $: (s) => a(o(s, "add")),
    C: (s) => {
      const r = bt(s);
      return r.reduce((l, i) => l && n.includes(i), r.length > 0);
    }
  };
}, Cs = (e, t, n) => (Qn(e, t).O(n), re(Oa, e, t, n)), Oa = (e, t, n) => (Qn(e, t).$(n), re(Cs, e, t, n)), kn = (e, t, n, a) => (a ? Oa : Cs)(e, t, n), xa = (e, t, n) => Qn(e, t).C(n), ws = (e) => Qn(e, "class"), Ds = (e, t) => {
  ws(e).O(t);
}, Fa = (e, t) => (ws(e).$(t), re(Ds, e, t)), Ts = (e, t) => {
  const n = t ? Vn(t) && t : document;
  return n ? mt(n.querySelectorAll(e)) : [];
}, Dl = (e, t) => {
  const n = t ? Vn(t) && t : document;
  return n && n.querySelector(e);
}, va = (e, t) => Vn(e) && e.matches(t), Ls = (e) => va(e, "body"), fa = (e) => e ? mt(e.childNodes) : [], Zt = (e) => e && e.parentElement, Lt = (e, t) => Vn(e) && e.closest(t), pa = (e) => document.activeElement, Tl = (e, t, n) => {
  const a = Lt(e, t), o = e && Dl(n, a), s = Lt(o, t) === a;
  return a && o ? a === e || o === e || s && Lt(Lt(e, n), t) !== a : !1;
}, Pt = (e) => {
  Ae(Ha(e), (t) => {
    const n = Zt(t);
    t && n && n.removeChild(t);
  });
}, Ne = (e, t) => re(Pt, e && t && Ae(Ha(t), (n) => {
  n && e.appendChild(n);
})), It = (e) => {
  const t = document.createElement("div");
  return tt(t, "class", e), t;
}, ks = (e) => {
  const t = It();
  return t.innerHTML = e.trim(), Ae(fa(t), (n) => Pt(n));
}, bo = (e, t) => e.getPropertyValue(t) || e[t] || "", Is = (e) => {
  const t = e || 0;
  return isFinite(t) ? t : 0;
}, fn = (e) => Is(parseFloat(e || "")), ma = (e) => Math.round(e * 1e4) / 1e4, Ms = (e) => `${ma(Is(e))}px`;
function Kt(e, t) {
  e && t && Ae(t, (n, a) => {
    try {
      const o = e.style, s = zn(n) || Ba(n) ? "" : Xe(n) ? Ms(n) : n;
      a.indexOf("--") === 0 ? o.setProperty(a, s) : o[a] = s;
    } catch {
    }
  });
}
function at(e, t, n) {
  const a = an(t);
  let o = a ? "" : {};
  if (e) {
    const s = Pe.getComputedStyle(e, n) || e.style;
    o = a ? bo(s, t) : mt(t).reduce((r, l) => (r[l] = bo(s, l), r), o);
  }
  return o;
}
const _o = (e, t, n) => {
  const a = t ? `${t}-` : "", o = n ? `-${n}` : "", s = `${a}top${o}`, r = `${a}right${o}`, l = `${a}bottom${o}`, i = `${a}left${o}`, c = at(e, [s, r, l, i]);
  return {
    t: fn(c[s]),
    r: fn(c[r]),
    b: fn(c[l]),
    l: fn(c[i])
  };
}, Ll = (e, t) => `translate${Dn(e) ? `(${e.x},${e.y})` : `Y(${e})`}`, kl = (e) => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length), Il = {
  w: 0,
  h: 0
}, Gn = (e, t) => t ? {
  w: t[`${e}Width`],
  h: t[`${e}Height`]
} : Il, Ml = (e) => Gn("inner", e || Pe), Mt = re(Gn, "offset"), Bs = re(Gn, "client"), In = re(Gn, "scroll"), Ua = (e) => {
  const t = parseFloat(at(e, Yn)) || 0, n = parseFloat(at(e, Wn)) || 0;
  return {
    w: t - la(t),
    h: n - la(n)
  };
}, ea = (e) => e.getBoundingClientRect(), Bl = (e) => !!e && kl(e), ha = (e) => !!(e && (e[Wn] || e[Yn])), Ps = (e, t) => {
  const n = ha(e);
  return !ha(t) && n;
}, Eo = (e, t, n, a) => {
  Ae(bt(t), (o) => {
    e && e.removeEventListener(o, n, a);
  });
}, $e = (e, t, n, a) => {
  var o;
  const s = (o = a && a.H) != null ? o : !0, r = a && a.I || !1, l = a && a.A || !1, i = {
    passive: s,
    capture: r
  };
  return re(xe, bt(t).map((c) => {
    const d = l ? (u) => {
      Eo(e, c, d, r), n && n(u);
    } : n;
    return e && e.addEventListener(c, d, i), re(Eo, e, c, d, r);
  }));
}, Hs = (e) => e.stopPropagation(), ga = (e) => e.preventDefault(), Rs = (e) => Hs(e) || ga(e), Ge = (e, t) => {
  const { x: n, y: a } = Xe(t) ? {
    x: t,
    y: t
  } : t || {};
  Xe(n) && (e.scrollLeft = n), Xe(a) && (e.scrollTop = a);
}, Oe = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
}), Ns = () => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
}), Pl = (e, t) => {
  const { D: n, M: a } = e, { w: o, h: s } = t, r = (u, v, m) => {
    let p = go(u) * m, f = go(v) * m;
    if (p === f) {
      const L = $n(u), h = $n(v);
      f = L > h ? 0 : f, p = L < h ? 0 : p;
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
  Ae(Ha(t), e);
}, Aa = (e) => {
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
    if (an(s)) {
      const c = t.get(s) || /* @__PURE__ */ new Set();
      return t.set(s, c), Co((d) => {
        ze(d) && c.add(d);
      }, r), re(n, s, r);
    }
    Ba(r) && r && n();
    const l = Ye(s), i = [];
    return Ae(l, (c) => {
      const d = s[c];
      d && we(i, a(c, d));
    }), re(xe, i);
  }, o = (s, r) => {
    Ae(mt(t.get(s)), (l) => {
      r && !ca(r) ? l.apply(0, r) : l();
    });
  };
  return a(e || {}), [a, n, o];
}, wo = (e) => JSON.stringify(e, (t, n) => {
  if (ze(n))
    throw 0;
  return n;
}), Do = (e, t) => e ? `${t}`.split(".").reduce((n, a) => n && Es(n, a) ? n[a] : void 0, e) : void 0, Hl = {
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
}, Os = (e, t) => {
  const n = {}, a = Xt(Ye(t), Ye(e));
  return Ae(a, (o) => {
    const s = e[o], r = t[o];
    if (Dn(s) && Dn(r))
      pe(n[o] = {}, Os(s, r)), Ra(n[o]) && delete n[o];
    else if (Es(t, o) && r !== s) {
      let l = !0;
      if (Ze(s) || Ze(r))
        try {
          wo(s) === wo(r) && (l = !1);
        } catch {
        }
      l && (n[o] = r);
    }
  }), n;
}, To = (e, t, n) => (a) => [Do(e, a), n || Do(t, a) !== void 0], Ot = "data-overlayscrollbars", bn = "os-environment", pn = `${bn}-scrollbar-hidden`, ta = `${Ot}-initialize`, _n = "noClipping", Lo = `${Ot}-body`, vt = Ot, Rl = "host", nt = `${Ot}-viewport`, Nl = As, Ol = bs, xl = "arrange", xs = "measuring", Fl = "scrolling", Fs = "scrollbarHidden", Ul = "noContent", ba = `${Ot}-padding`, ko = `${Ot}-content`, za = "os-size-observer", zl = `${za}-appear`, Vl = `${za}-listener`, Yl = "os-trinsic-observer", Wl = "os-theme-none", Fe = "os-scrollbar", jl = `${Fe}-rtl`, Ql = `${Fe}-horizontal`, Gl = `${Fe}-vertical`, Us = `${Fe}-track`, Va = `${Fe}-handle`, ql = `${Fe}-visible`, Xl = `${Fe}-cornerless`, Io = `${Fe}-interaction`, Mo = `${Fe}-unusable`, _a = `${Fe}-auto-hide`, Bo = `${_a}-hidden`, Po = `${Fe}-wheel`, Zl = `${Us}-interactive`, Kl = `${Va}-interactive`;
let zs;
const Jl = () => zs, ei = (e) => {
  zs = e;
};
let na;
const ti = () => {
  const e = (D, b, B) => {
    Ne(document.body, D), Ne(document.body, D);
    const W = Bs(D), te = Mt(D), z = Ua(b);
    return B && Pt(D), {
      x: te.h - W.h + z.h,
      y: te.w - W.w + z.w
    };
  }, t = (D) => {
    let b = !1;
    const B = Fa(D, pn);
    try {
      b = at(D, "scrollbar-width") === "none" || at(D, "display", "::-webkit-scrollbar") === "none";
    } catch {
    }
    return B(), b;
  }, n = `.${bn}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${bn} div{width:200%;height:200%;margin:10px 0}.${pn}{scrollbar-width:none!important}.${pn}::-webkit-scrollbar,.${pn}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`, o = ks(`<div class="${bn}"><div></div><style>${n}</style></div>`)[0], s = o.firstChild, r = o.lastChild, l = Jl();
  l && (r.nonce = l);
  const [i, , c] = Aa(), [d, u] = Re({
    o: e(o, s),
    i: An
  }, re(e, o, s, !0)), [v] = u(), m = t(o), p = {
    x: v.x === 0,
    y: v.y === 0
  }, f = {
    elements: {
      host: null,
      padding: !m,
      viewport: (D) => m && Ls(D) && D,
      content: !1
    },
    scrollbars: {
      slot: !0
    },
    cancel: {
      nativeScrollbarsOverlaid: !1,
      body: null
    }
  }, L = pe({}, Hl), h = re(pe, {}, L), y = re(pe, {}, f), I = {
    T: v,
    k: p,
    R: m,
    V: !!yn,
    L: re(i, "r"),
    U: y,
    P: (D) => pe(f, D) && y(),
    N: h,
    q: (D) => pe(L, D) && h(),
    B: pe({}, f),
    F: pe({}, L)
  };
  if (Qe(o, "style"), Pt(o), $e(Pe, "resize", () => {
    c("r", []);
  }), ze(Pe.matchMedia) && !m && (!p.x || !p.y)) {
    const D = (b) => {
      const B = Pe.matchMedia(`(resolution: ${Pe.devicePixelRatio}dppx)`);
      $e(B, "change", () => {
        b(), D(b);
      }, {
        A: !0
      });
    };
    D(() => {
      const [b, B] = d();
      pe(I.T, b), c("r", [B]);
    });
  }
  return I;
}, Ke = () => (na || (na = ti()), na), Vs = (e, t) => ze(t) ? t.apply(0, e) : t, ni = (e, t, n, a) => {
  const o = Ma(a) ? n : a;
  return Vs(e, o) || t.apply(0, e);
}, Ys = (e, t, n, a) => {
  const o = Ma(a) ? n : a, s = Vs(e, o);
  return !!s && (Ln(s) ? s : t.apply(0, e));
}, ai = (e, t) => {
  const { nativeScrollbarsOverlaid: n, body: a } = t || {}, { k: o, R: s, U: r } = Ke(), { nativeScrollbarsOverlaid: l, body: i } = r().cancel, c = n ?? l, d = Ma(a) ? i : a, u = (o.x || o.y) && c, v = e && (zn(d) ? !s : d);
  return !!u || !!v;
}, Ya = /* @__PURE__ */ new WeakMap(), oi = (e, t) => {
  Ya.set(e, t);
}, si = (e) => {
  Ya.delete(e);
}, Ws = (e) => Ya.get(e), ri = (e, t, n) => {
  let a = !1;
  const o = n ? /* @__PURE__ */ new WeakMap() : !1, s = () => {
    a = !0;
  }, r = (l) => {
    if (o && n) {
      const i = n.map((c) => {
        const [d, u] = c || [];
        return [u && d ? (l || Ts)(d, e) : [], u];
      });
      Ae(i, (c) => Ae(c[0], (d) => {
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
  }), [v, m] = ri(e, u, l), p = s || [], f = r || [], L = Xt(p, f), h = (I, D) => {
    if (!ca(D)) {
      const b = c || At, B = d || At, W = [], te = [];
      let z = !1, _ = !1;
      if (Ae(D, (P) => {
        const { attributeName: C, target: w, type: j, oldValue: q, addedNodes: le, removedNodes: se } = P, de = j === "attributes", ue = j === "childList", be = e === w, O = de && C, x = O && Na(w, C || ""), Q = an(x) ? x : null, K = O && q !== Q, k = ds(f, C) && K;
        if (t && (ue || !be)) {
          const ne = de && K, ee = ne && i && va(w, i), ie = (ee ? !b(w, C, q, Q) : !de || ne) && !B(P, !!ee, e, a);
          Ae(le, (fe) => we(W, fe)), Ae(se, (fe) => we(W, fe)), _ = _ || ie;
        }
        !t && be && K && !b(w, C, q, Q) && (we(te, C), z = z || k);
      }), m((P) => ua(W).reduce((C, w) => (we(C, Ts(P, w)), va(w, P) ? we(C, w) : C), [])), t)
        return !I && _ && n(!1), [!1];
      if (!ca(te) || z) {
        const P = [ua(te), z];
        return !I && n.apply(0, P), P;
      }
    }
  }, y = new $l(re(h, !1));
  return [() => (y.observe(e, {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: L,
    subtree: t,
    childList: t,
    characterData: t
  }), o = !0, () => {
    o && (v(), y.disconnect(), o = !1);
  }), () => {
    if (o)
      return u.m(), h(!0, y.takeRecords());
  }];
}, js = {}, Qs = {}, li = (e) => {
  Ae(e, (t) => Ae(t, (n, a) => {
    js[a] = t[a];
  }));
}, Gs = (e, t, n) => Ye(e).map((a) => {
  const { static: o, instance: s } = e[a], [r, l, i] = n || [], c = n ? s : o;
  if (c) {
    const d = n ? c(r, l, t) : c(t);
    return (i || Qs)[a] = d;
  }
}), on = (e) => Qs[e], ii = "__osOptionsValidationPlugin", ci = "__osSizeObserverPlugin", ui = (e, t) => {
  const { k: n } = t, [a, o] = e("showNativeOverlaidScrollbars");
  return [a && n.x && n.y, o];
}, Ht = (e) => e.indexOf(dt) === 0, di = (e, t) => {
  const n = (o, s, r, l) => {
    const i = o === dt ? yt : o.replace(`${dt}-`, ""), c = Ht(o), d = Ht(r);
    return !s && !l ? yt : c && d ? dt : c ? s && l ? i : s ? dt : yt : s ? i : d && l ? dt : yt;
  }, a = {
    x: n(t.x, e.x, t.y, e.y),
    y: n(t.y, e.y, t.x, e.x)
  };
  return {
    K: a,
    Z: {
      x: a.x === Bt,
      y: a.y === Bt
    }
  };
}, qs = "__osScrollbarsHidingPlugin", vi = "__osClickScrollPlugin", Xs = (e, t, n) => {
  const { dt: a } = n || {}, o = on(ci), [s] = Re({
    o: !1,
    u: !0
  });
  return () => {
    const r = [], i = ks(`<div class="${za}"><div class="${Vl}"></div></div>`)[0], c = i.firstChild, d = (u) => {
      const v = u instanceof ResizeObserverEntry;
      let m = !1, p = !1;
      if (v) {
        const [f, , L] = s(u.contentRect), h = ha(f);
        p = Ps(f, L), m = !p && !h;
      } else
        p = u === !0;
      m || t({
        ft: !0,
        dt: p
      });
    };
    if (wn) {
      const u = new wn((v) => d(v.pop()));
      u.observe(c), we(r, () => {
        u.disconnect();
      });
    } else if (o) {
      const [u, v] = o(c, d, a);
      we(r, Xt([Fa(i, zl), $e(i, "animationstart", u)], v));
    } else
      return At;
    return re(xe, we(r, Ne(e, i)));
  };
}, fi = (e, t) => {
  let n;
  const a = (i) => i.h === 0 || i.isIntersecting || i.intersectionRatio > 0, o = It(Yl), [s] = Re({
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
    return re(xe, we(i, Ne(e, o)));
  }, () => n && l(!0, n.takeRecords())];
}, pi = (e, t, n, a) => {
  let o, s, r, l, i, c;
  const d = `[${vt}]`, u = `[${nt}]`, v = ["id", "class", "style", "open", "wrap", "cols", "rows"], { vt: m, ht: p, ot: f, gt: L, bt: h, nt: y, wt: I, yt: D, St: b, Ot: B } = e, W = (k) => at(k, "direction") === "rtl", te = {
    $t: !1,
    ct: W(m)
  }, z = Ke(), _ = on(qs), [P] = Re({
    i: _s,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const k = _ && _.tt(e, t, te, z, n).ut, ee = !(I && y) && xa(p, vt, _n), ae = !y && D(xl), ie = ae && Oe(L), fe = ie && B(), Ee = b(xs, ee), ye = ae && k && k()[0], G = In(f), X = Ua(f);
    return ye && ye(), Ge(L, ie), fe && fe(), ee && Ee(), {
      w: G.w + X.w,
      h: G.h + X.h
    };
  }), C = da(a, {
    _: () => o,
    v: () => s,
    S(k, ne) {
      const [ee] = k, [ae] = ne;
      return [Xt(Ye(ee), Ye(ae)).reduce((ie, fe) => (ie[fe] = ee[fe] || ae[fe], ie), {})];
    }
  }), w = (k) => {
    const ne = W(m);
    pe(k, {
      Ct: c !== ne
    }), pe(te, {
      ct: ne
    }), c = ne;
  }, j = (k, ne) => {
    const [ee, ae] = k, ie = {
      xt: ae
    };
    return pe(te, {
      $t: ee
    }), !ne && a(ie), ie;
  }, q = ({ ft: k, dt: ne }) => {
    const ae = !(k && !ne) && z.R ? C : a, ie = {
      ft: k || ne,
      dt: ne
    };
    w(ie), ae(ie);
  }, le = (k, ne) => {
    const [, ee] = P(), ae = {
      Ht: ee
    };
    return w(ae), ee && !ne && (k ? a : C)(ae), ae;
  }, se = (k, ne, ee) => {
    const ae = {
      Et: ne
    };
    return w(ae), ne && !ee && C(ae), ae;
  }, [de, ue] = h ? fi(p, j) : [], be = !y && Xs(p, q, {
    dt: !0
  }), [O, x] = Ho(p, !1, se, {
    X: v,
    j: v
  }), Q = y && wn && new wn((k) => {
    const ne = k[k.length - 1].contentRect;
    q({
      ft: !0,
      dt: Ps(ne, i)
    }), i = ne;
  }), K = da(() => {
    const [, k] = P();
    a({
      Ht: k
    });
  }, {
    _: 222,
    p: !0
  });
  return [() => {
    Q && Q.observe(p);
    const k = be && be(), ne = de && de(), ee = O(), ae = z.L((ie) => {
      ie ? C({
        zt: ie
      }) : K();
    });
    return () => {
      Q && Q.disconnect(), k && k(), ne && ne(), l && l(), ee(), ae();
    };
  }, ({ It: k, At: ne, Dt: ee }) => {
    const ae = {}, [ie] = k("update.ignoreMutation"), [fe, Ee] = k("update.attributes"), [ye, G] = k("update.elementEvents"), [X, Te] = k("update.debounce"), H = G || Ee, V = ne || ee, F = (J) => ze(ie) && ie(J);
    if (H) {
      r && r(), l && l();
      const [J, E] = Ho(h || f, !0, le, {
        j: Xt(v, fe || []),
        Y: ye,
        W: d,
        G: (A, $) => {
          const { target: R, attributeName: _e } = A;
          return (!$ && _e && !y ? Tl(R, d, u) : !1) || !!Lt(R, `.${Fe}`) || !!F(A);
        }
      });
      l = J(), r = E;
    }
    if (Te)
      if (C.m(), Ze(X)) {
        const J = X[0], E = X[1];
        o = Xe(J) && J, s = Xe(E) && E;
      } else Xe(X) ? (o = X, s = !1) : (o = !1, s = !1);
    if (V) {
      const J = x(), E = ue && ue(), A = r && r();
      J && pe(ae, se(J[0], J[1], V)), E && pe(ae, j(E[0], V)), A && pe(ae, le(A[0], V));
    }
    return w(ae), ae;
  }, te];
}, mi = (e, t, n, a) => {
  const o = "--os-viewport-percent", s = "--os-scroll-percent", r = "--os-scroll-direction", { U: l } = Ke(), { scrollbars: i } = l(), { slot: c } = i, { vt: d, ht: u, ot: v, Mt: m, gt: p, wt: f, nt: L } = t, { scrollbars: h } = m ? {} : e, { slot: y } = h || {}, I = [], D = [], b = [], B = Ys([d, u, v], () => L && f ? d : u, c, y), W = (O) => {
    if (yn) {
      const x = new yn({
        source: p,
        axis: O
      });
      return {
        kt: (K) => {
          const k = K.Tt.animate({
            clear: ["left"],
            [s]: [0, 1]
          }, {
            timeline: x
          });
          return () => k.cancel();
        }
      };
    }
  }, te = {
    x: W("x"),
    y: W("y")
  }, z = () => {
    const { Rt: O, Vt: x } = n, Q = (K, k) => $s(0, 1, K / (K + k) || 0);
    return {
      x: Q(x.x, O.x),
      y: Q(x.y, O.y)
    };
  }, _ = (O, x, Q) => {
    const K = Q ? Fa : Ds;
    Ae(O, (k) => {
      K(k.Tt, x);
    });
  }, P = (O, x) => {
    Ae(O, (Q) => {
      const [K, k] = x(Q);
      Kt(K, k);
    });
  }, C = (O, x, Q) => {
    const K = Ba(Q), k = K ? Q : !0, ne = K ? !Q : !0;
    k && _(D, O, x), ne && _(b, O, x);
  }, w = () => {
    const O = z(), x = (Q) => (K) => [K.Tt, {
      [o]: ma(Q) + ""
    }];
    P(D, x(O.x)), P(b, x(O.y));
  }, j = () => {
    if (!yn) {
      const { Lt: O } = n, x = $o(O, Oe(p)), Q = (K) => (k) => [k.Tt, {
        [s]: ma(K) + ""
      }];
      P(D, Q(x.x)), P(b, Q(x.y));
    }
  }, q = () => {
    const { Lt: O } = n, x = So(O), Q = (K) => (k) => [k.Tt, {
      [r]: K ? "0" : "1"
    }];
    P(D, Q(x.x)), P(b, Q(x.y));
  }, le = () => {
    if (L && !f) {
      const { Rt: O, Lt: x } = n, Q = So(x), K = $o(x, Oe(p)), k = (ne) => {
        const { Tt: ee } = ne, ae = Zt(ee) === v && ee, ie = (fe, Ee, ye) => {
          const G = Ee * fe;
          return Ms(ye ? G : -G);
        };
        return [ae, ae && {
          transform: Ll({
            x: ie(K.x, O.x, Q.x),
            y: ie(K.y, O.y, Q.y)
          })
        }];
      };
      P(D, k), P(b, k);
    }
  }, se = (O) => {
    const x = O ? "x" : "y", K = It(`${Fe} ${O ? Ql : Gl}`), k = It(Us), ne = It(Va), ee = {
      Tt: K,
      Ut: k,
      Pt: ne
    }, ae = te[x];
    return we(O ? D : b, ee), we(I, [Ne(K, k), Ne(k, ne), re(Pt, K), ae && ae.kt(ee), a(ee, C, O)]), ee;
  }, de = re(se, !0), ue = re(se, !1), be = () => (Ne(B, D[0].Tt), Ne(B, b[0].Tt), re(xe, I));
  return de(), ue(), [{
    Nt: w,
    qt: j,
    Bt: q,
    Ft: le,
    jt: C,
    Xt: {
      Yt: D,
      Wt: de,
      Jt: re(P, D)
    },
    Gt: {
      Yt: b,
      Wt: ue,
      Jt: re(P, b)
    }
  }, be];
}, hi = (e, t, n, a) => (o, s, r) => {
  const { ht: l, ot: i, nt: c, gt: d, Kt: u, Ot: v } = t, { Tt: m, Ut: p, Pt: f } = o, [L, h] = Tt(333), [y, I] = Tt(444), D = (W) => {
    ze(d.scrollBy) && d.scrollBy({
      behavior: "smooth",
      left: W.x,
      top: W.y
    });
  }, b = () => {
    const W = "pointerup pointercancel lostpointercapture", te = `client${r ? "X" : "Y"}`, z = r ? Yn : Wn, _ = r ? "left" : "top", P = r ? "w" : "h", C = r ? "x" : "y", w = (q, le) => (se) => {
      const { Rt: de } = n, ue = Mt(p)[P] - Mt(f)[P], O = le * se / ue * de[C];
      Ge(d, {
        [C]: q + O
      });
    }, j = [];
    return $e(p, "pointerdown", (q) => {
      const le = Lt(q.target, `.${Va}`) === f, se = le ? f : p, de = e.scrollbars, ue = de[le ? "dragScroll" : "clickScroll"], { button: be, isPrimary: O, pointerType: x } = q, { pointers: Q } = de;
      if (be === 0 && O && ue && (Q || []).includes(x)) {
        xe(j), I();
        const k = !le && (q.shiftKey || ue === "instant"), ne = re(ea, f), ee = re(ea, p), ae = ($, R) => ($ || ne())[_] - (R || ee())[_], ie = la(ea(d)[z]) / Mt(d)[P] || 1, fe = w(Oe(d)[C], 1 / ie), Ee = q[te], ye = ne(), G = ee(), X = ye[z], Te = ae(ye, G) + X / 2, H = Ee - G[_], V = le ? 0 : H - Te, F = ($) => {
          xe(A), se.releasePointerCapture($.pointerId);
        }, J = le || k, E = v(), A = [$e(u, W, F), $e(u, "selectstart", ($) => ga($), {
          H: !1
        }), $e(p, W, F), J && $e(p, "pointermove", ($) => fe(V + ($[te] - Ee))), J && (() => {
          const $ = Oe(d);
          E();
          const R = Oe(d), _e = {
            x: R.x - $.x,
            y: R.y - $.y
          };
          ($n(_e.x) > 3 || $n(_e.y) > 3) && (v(), Ge(d, $), D(_e), y(E));
        })];
        if (se.setPointerCapture(q.pointerId), k)
          fe(V);
        else if (!le) {
          const $ = on(vi);
          if ($) {
            const R = $(fe, V, X, (_e) => {
              _e ? E() : we(A, E);
            });
            we(A, R), we(j, re(R, !0));
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
    (Ao(W, nt) || Ao(W, vt) || W === document.body) && Cn(re(ya, i), 25);
  }), $e(m, "wheel", (W) => {
    const { deltaX: te, deltaY: z, deltaMode: _ } = W;
    B && _ === 0 && Zt(m) === l && D({
      x: te,
      y: z
    }), B = !1, s(Po, !0), L(() => {
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
  }), b(), h, I]);
}, gi = (e, t, n, a, o, s) => {
  let r, l, i, c, d, u = At, v = 0;
  const m = (O) => O.pointerType === "mouse", [p, f] = Tt(), [L, h] = Tt(100), [y, I] = Tt(100), [D, b] = Tt(() => v), [B, W] = mi(e, o, a, hi(t, o, a, (O) => m(O) && se())), { ht: te, Qt: z, wt: _ } = o, { jt: P, Nt: C, qt: w, Bt: j, Ft: q } = B, le = (O, x) => {
    if (b(), O)
      P(Bo);
    else {
      const Q = re(P, Bo, !0);
      v > 0 && !x ? D(Q) : Q();
    }
  }, se = () => {
    (i ? !r : !c) && (le(!0), L(() => {
      le(!1);
    }));
  }, de = (O) => {
    P(_a, O, !0), P(_a, O, !1);
  }, ue = (O) => {
    m(O) && (r = i, i && le(!0));
  }, be = [b, h, I, f, () => u(), $e(te, "pointerover", ue, {
    A: !0
  }), $e(te, "pointerenter", ue), $e(te, "pointerleave", (O) => {
    m(O) && (r = !1, i && le(!1));
  }), $e(te, "pointermove", (O) => {
    m(O) && l && se();
  }), $e(z, "scroll", (O) => {
    p(() => {
      w(), se();
    }), s(O), q();
  })];
  return [() => re(xe, we(be, W())), ({ It: O, Dt: x, Zt: Q, tn: K }) => {
    const { nn: k, sn: ne, en: ee, cn: ae } = K || {}, { Ct: ie, dt: fe } = Q || {}, { ct: Ee } = n, { k: ye } = Ke(), { K: G, rn: X } = a, [Te, H] = O("showNativeOverlaidScrollbars"), [V, F] = O("scrollbars.theme"), [J, E] = O("scrollbars.visibility"), [A, $] = O("scrollbars.autoHide"), [R, _e] = O("scrollbars.autoHideSuspend"), [He] = O("scrollbars.autoHideDelay"), [ht, lt] = O("scrollbars.dragScroll"), [gt, je] = O("scrollbars.clickScroll"), [Je, $t] = O("overflow"), Ct = fe && !x, wt = X.x || X.y, Dt = k || ne || ae || ie || x, De = ee || E || $t, rn = Te && ye.x && ye.y, it = (Vt, ct, ln) => {
      const Yt = Vt.includes(Bt) && (J === dt || J === "auto" && ct === Bt);
      return P(ql, Yt, ln), Yt;
    };
    if (v = He, Ct && (R && wt ? (de(!1), u(), y(() => {
      u = $e(z, "scroll", re(de, !0), {
        A: !0
      });
    })) : de(!0)), H && P(Wl, rn), F && (P(d), P(V, !0), d = V), _e && !R && de(!0), $ && (l = A === "move", i = A === "leave", c = A === "never", le(c, !0)), lt && P(Kl, ht), je && P(Zl, !!gt), De) {
      const Vt = it(Je.x, G.x, !0), ct = it(Je.y, G.y, !1);
      P(Xl, !(Vt && ct));
    }
    Dt && (w(), C(), q(), ae && j(), P(Mo, !X.x, !0), P(Mo, !X.y, !1), P(jl, Ee && !_));
  }, {}, B];
}, yi = (e) => {
  const t = Ke(), { U: n, R: a } = t, { elements: o } = n(), { padding: s, viewport: r, content: l } = o, i = Ln(e), c = i ? {} : e, { elements: d } = c, { padding: u, viewport: v, content: m } = d || {}, p = i ? e : c.target, f = Ls(p), L = p.ownerDocument, h = L.documentElement, y = () => L.defaultView || Pe, I = re(ni, [p]), D = re(Ys, [p]), b = re(It, ""), B = re(I, b, r), W = re(D, b, l), te = (X) => {
    const Te = Mt(X), H = In(X), V = at(X, As), F = at(X, bs);
    return H.w - Te.w > 0 && !Ht(V) || H.h - Te.h > 0 && !Ht(F);
  }, z = B(v), _ = z === p, P = _ && f, C = !_ && W(m), w = !_ && z === C, j = P ? h : z, q = P ? j : p, le = !_ && D(b, s, u), se = !w && C, de = [se, j, le, q].map((X) => Ln(X) && !Zt(X) && X), ue = (X) => X && ds(de, X), be = !ue(j) && te(j) ? j : p, O = P ? h : j, Q = {
    vt: p,
    ht: q,
    ot: j,
    ln: le,
    bt: se,
    gt: O,
    Qt: P ? L : j,
    an: f ? h : be,
    Kt: L,
    wt: f,
    Mt: i,
    nt: _,
    un: y,
    yt: (X) => xa(j, nt, X),
    St: (X, Te) => kn(j, nt, X, Te),
    Ot: () => kn(O, nt, Fl, !0)
  }, { vt: K, ht: k, ln: ne, ot: ee, bt: ae } = Q, ie = [() => {
    Qe(k, [vt, ta]), Qe(K, ta), f && Qe(h, [ta, vt]);
  }];
  let fe = fa([ae, ee, ne, k, K].find((X) => X && !ue(X)));
  const Ee = P ? K : ae || ee, ye = re(xe, ie);
  return [Q, () => {
    const X = y(), Te = pa(), H = (A) => {
      Ne(Zt(A), fa(A)), Pt(A);
    }, V = (A) => $e(A, "focusin focusout focus blur", Rs, {
      I: !0,
      H: !1
    }), F = "tabindex", J = Na(ee, F), E = V(Te);
    return tt(k, vt, _ ? "" : Rl), tt(ne, ba, ""), tt(ee, nt, ""), tt(ae, ko, ""), _ || (tt(ee, F, J || "-1"), f && tt(h, Lo, "")), Ne(Ee, fe), Ne(k, ne), Ne(ne || k, !_ && ee), Ne(ee, ae), we(ie, [E, () => {
      const A = pa(), $ = ue(ee), R = $ && A === ee ? K : A, _e = V(R);
      Qe(ne, ba), Qe(ae, ko), Qe(ee, nt), f && Qe(h, Lo), J ? tt(ee, F, J) : Qe(ee, F), ue(ae) && H(ae), $ && H(ee), ue(ne) && H(ne), ya(R), _e();
    }]), a && !_ && (Oa(ee, nt, Fs), we(ie, re(Qe, ee, nt))), ya(!_ && f && Te === K && X.top === X ? ee : Te), E(), fe = 0, ye;
  }, ye];
}, Ai = ({ bt: e }) => ({ Zt: t, _n: n, Dt: a }) => {
  const { xt: o } = t || {}, { $t: s } = n;
  e && (o || a) && Kt(e, {
    [Wn]: s && "100%"
  });
}, bi = ({ ht: e, ln: t, ot: n, nt: a }, o) => {
  const [s, r] = Re({
    i: wl,
    o: _o()
  }, re(_o, e, "padding", ""));
  return ({ It: l, Zt: i, _n: c, Dt: d }) => {
    let [u, v] = r(d);
    const { R: m } = Ke(), { ft: p, Ht: f, Ct: L } = i || {}, { ct: h } = c, [y, I] = l("paddingAbsolute");
    (p || v || (d || f)) && ([u, v] = s(d));
    const b = !a && (I || L || v);
    if (b) {
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
      Kt(t || n, z), Kt(n, _), pe(o, {
        ln: u,
        dn: !B,
        rt: t ? _ : pe({}, z, _)
      });
    }
    return {
      fn: b
    };
  };
}, _i = (e, t) => {
  const n = Ke(), { ht: a, ln: o, ot: s, nt: r, Qt: l, gt: i, wt: c, St: d, un: u } = e, { R: v } = n, m = c && r, p = re(cs, 0), f = {
    display: () => !1,
    direction: (x) => x !== "ltr",
    flexDirection: (x) => x.endsWith("-reverse"),
    writingMode: (x) => x !== "horizontal-tb"
  }, L = Ye(f), h = {
    i: _s,
    o: {
      w: 0,
      h: 0
    }
  }, y = {
    i: An,
    o: {}
  }, I = (x) => {
    d(xs, !m && x);
  }, D = (x) => {
    if (!L.some((Ee) => {
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
    I(!0);
    const K = Oe(i), k = d(Ul, !0), ne = $e(l, Bt, (Ee) => {
      const ye = Oe(i);
      Ee.isTrusted && ye.x === K.x && ye.y === K.y && Hs(Ee);
    }, {
      I: !0,
      A: !0
    });
    Ge(i, {
      x: 0,
      y: 0
    }), k();
    const ee = Oe(i), ae = In(i);
    Ge(i, {
      x: ae.w,
      y: ae.h
    });
    const ie = Oe(i);
    Ge(i, {
      x: ie.x - ee.x < 1 && -ae.w,
      y: ie.y - ee.y < 1 && -ae.h
    });
    const fe = Oe(i);
    return Ge(i, K), Ia(() => ne()), {
      D: ee,
      M: fe
    };
  }, b = (x, Q) => {
    const K = Pe.devicePixelRatio % 1 !== 0 ? 1 : 0, k = {
      w: p(x.w - Q.w),
      h: p(x.h - Q.h)
    };
    return {
      w: k.w > K ? k.w : 0,
      h: k.h > K ? k.h : 0
    };
  }, [B, W] = Re(h, re(Ua, s)), [te, z] = Re(h, re(In, s)), [_, P] = Re(h), [C] = Re(y), [w, j] = Re(h), [q] = Re(y), [le] = Re({
    i: (x, Q) => jn(x, Q, L),
    o: {}
  }, () => Bl(s) ? at(s, L) : {}), [se, de] = Re({
    i: (x, Q) => An(x.D, Q.D) && An(x.M, Q.M),
    o: Ns()
  }), ue = on(qs), be = (x, Q) => `${Q ? Nl : Ol}${Cl(x)}`, O = (x) => {
    const Q = (k) => [dt, yt, Bt].map((ne) => be(ne, k)), K = Q(!0).concat(Q()).join(" ");
    d(K), d(Ye(x).map((k) => be(x[k], k === "x")).join(" "), !0);
  };
  return ({ It: x, Zt: Q, _n: K, Dt: k }, { fn: ne }) => {
    const { ft: ee, Ht: ae, Ct: ie, dt: fe, zt: Ee } = Q || {}, ye = ue && ue.tt(e, t, K, n, x), { it: G, ut: X, _t: Te } = ye || {}, [H, V] = ui(x, n), [F, J] = x("overflow"), E = Ht(F.x), A = Ht(F.y), $ = !0;
    let R = W(k), _e = z(k), He = P(k), ht = j(k);
    V && v && d(Fs, !H);
    {
      xa(a, vt, _n) && I(!0);
      const [fo] = X ? X() : [], [cn] = R = B(k), [un] = _e = te(k), dn = Bs(s), vn = m && Ml(u()), ll = {
        w: p(un.w + cn.w),
        h: p(un.h + cn.h)
      }, po = {
        w: p((vn ? vn.w : dn.w + p(dn.w - un.w)) + cn.w),
        h: p((vn ? vn.h : dn.h + p(dn.h - un.h)) + cn.h)
      };
      fo && fo(), ht = w(po), He = _(b(ll, po), k);
    }
    const [lt, gt] = ht, [je, Je] = He, [$t, Ct] = _e, [wt, Dt] = R, [De, rn] = C({
      x: je.w > 0,
      y: je.h > 0
    }), it = E && A && (De.x || De.y) || E && De.x && !De.y || A && De.y && !De.x, Vt = ne || ie || Ee || Dt || Ct || gt || Je || J || V || $, ct = di(De, F), [ln, Yt] = q(ct.K), [al, ol] = le(k), vo = ie || fe || ol || rn || k, [sl, rl] = vo ? se(D(al), k) : de();
    return Vt && (Yt && O(ct.K), Te && G && Kt(s, Te(ct, K, G(ct, $t, wt)))), I(!1), kn(a, vt, _n, it), kn(o, ba, _n, it), pe(t, {
      K: ln,
      Vt: {
        x: lt.w,
        y: lt.h
      },
      Rt: {
        x: je.w,
        y: je.h
      },
      rn: De,
      Lt: Pl(sl, je)
    }), {
      en: Yt,
      nn: gt,
      sn: Je,
      cn: rl || Je,
      vn: vo
    };
  };
}, Ei = (e) => {
  const [t, n, a] = yi(e), o = {
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
    Lt: Ns()
  }, { vt: s, gt: r, nt: l, Ot: i } = t, { R: c, k: d } = Ke(), u = !c && (d.x || d.y), v = [Ai(t), bi(t, o), _i(t, o)];
  return [n, (m) => {
    const p = {}, L = u && Oe(r), h = L && i();
    return Ae(v, (y) => {
      pe(p, y(m, p) || {});
    }), Ge(r, L), h && h(), !l && Ge(s, 0), p;
  }, o, t, a];
}, Si = (e, t, n, a, o) => {
  let s = !1;
  const r = To(t, {}), [l, i, c, d, u] = Ei(e), [v, m, p] = pi(d, c, r, (D) => {
    I({}, D);
  }), [f, L, , h] = gi(e, t, p, c, d, o), y = (D) => Ye(D).some((b) => !!D[b]), I = (D, b) => {
    if (n())
      return !1;
    const { pn: B, Dt: W, At: te, hn: z } = D, _ = B || {}, P = !!W || !s, C = {
      It: To(t, _, P),
      pn: _,
      Dt: P
    };
    if (z)
      return L(C), !1;
    const w = b || m(pe({}, C, {
      At: te
    })), j = i(pe({}, C, {
      _n: p,
      Zt: w
    }));
    L(pe({}, C, {
      Zt: w,
      tn: j
    }));
    const q = y(w), le = y(j), se = q || le || !Ra(_) || P;
    return s = !0, se && a(D, {
      Zt: w,
      tn: j
    }), se;
  };
  return [() => {
    const { an: D, gt: b, Ot: B } = d, W = Oe(D), te = [v(), l(), f()], z = B();
    return Ge(b, W), z(), re(xe, te);
  }, I, () => ({
    gn: p,
    bn: c
  }), {
    wn: d,
    yn: h
  }, u];
}, qe = (e, t, n) => {
  const { N: a } = Ke(), o = Ln(e), s = o ? e : e.target, r = Ws(s);
  if (t && !r) {
    let l = !1;
    const i = [], c = {}, d = (_) => {
      const P = Ss(_), C = on(ii);
      return C ? C(P, !0) : P;
    }, u = pe({}, a(), d(t)), [v, m, p] = Aa(), [f, L, h] = Aa(n), y = (_, P) => {
      h(_, P), p(_, P);
    }, [I, D, b, B, W] = Si(e, u, () => l, ({ pn: _, Dt: P }, { Zt: C, tn: w }) => {
      const { ft: j, Ct: q, xt: le, Ht: se, Et: de, dt: ue } = C, { nn: be, sn: O, en: x, cn: Q } = w;
      y("updated", [z, {
        updateHints: {
          sizeChanged: !!j,
          directionChanged: !!q,
          heightIntrinsicChanged: !!le,
          overflowEdgeChanged: !!be,
          overflowAmountChanged: !!O,
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
      si(s), xe(i), l = !0, y("destroyed", [z, _]), m(), L();
    }, z = {
      options(_, P) {
        if (_) {
          const C = P ? a() : {}, w = Os(u, pe(C, d(_)));
          Ra(w) || (pe(u, w), D({
            pn: w
          }));
        }
        return pe({}, u);
      },
      on: f,
      off: (_, P) => {
        _ && P && L(_, P);
      },
      state() {
        const { gn: _, bn: P } = b(), { ct: C } = _, { Vt: w, Rt: j, K: q, rn: le, ln: se, dn: de, Lt: ue } = P;
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
        const { vt: _, ht: P, ln: C, ot: w, bt: j, gt: q, Qt: le } = B.wn, { Xt: se, Gt: de } = B.yn, ue = (O) => {
          const { Pt: x, Ut: Q, Tt: K } = O;
          return {
            scrollbar: K,
            track: Q,
            handle: x
          };
        }, be = (O) => {
          const { Yt: x, Wt: Q } = O, K = ue(x[0]);
          return pe({}, K, {
            clone: () => {
              const k = ue(Q());
              return D({
                hn: !0
              }), k;
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
          scrollbarHorizontal: be(se),
          scrollbarVertical: be(de)
        });
      },
      update: (_) => D({
        Dt: _,
        At: !0
      }),
      destroy: re(te, !1),
      plugin: (_) => c[Ye(_)[0]]
    };
    return we(i, [W]), oi(s, z), Gs(js, qe, [z, v, c]), ai(B.wn.wt, !o && e.cancel) ? (te(!0), z) : (we(i, I()), y("initialized", [z]), z.update(), z);
  }
  return r;
};
qe.plugin = (e) => {
  const t = Ze(e), n = t ? e : [e], a = n.map((o) => Gs(o, qe)[0]);
  return li(n), t ? a : a[0];
};
qe.valid = (e) => {
  const t = e && e.elements, n = ze(t) && t();
  return Tn(n) && !!Ws(n.target);
};
qe.env = () => {
  const { T: e, k: t, R: n, V: a, B: o, F: s, U: r, P: l, N: i, q: c } = Ke();
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
qe.nonce = ei;
const $i = () => {
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
}, Ci = (e) => {
  let t = null, n, a, o;
  const s = En(e || {}), [r, l] = $i();
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
      n = i, qe.valid(t) && t.options(n || {}, !0);
    },
    { deep: !0, immediate: !0 }
  ), Be(
    () => {
      var i;
      return ge((i = s.value) == null ? void 0 : i.events);
    },
    (i) => {
      a = i, qe.valid(t) && t.on(
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
      if (qe.valid(t))
        return t;
      const c = () => t = qe(i, n || {}, a || {});
      o ? r(c, o) : c();
    },
    () => t
  ];
}, wi = /* @__PURE__ */ N({
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
    }, { element: s, options: r, events: l, defer: i } = Rn(a), c = En(null), d = En(null), u = g(), [v, m] = Ci({ options: r, events: u, defer: i });
    return t({
      osInstance: m,
      getElement: () => c.value
    }), cl((p) => {
      const { value: f } = c, { value: L } = d;
      f && (v(
        s.value === "body" ? {
          target: f,
          cancel: {
            body: null
          }
        } : {
          target: f,
          elements: {
            viewport: L,
            content: L
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
        u.value = Object.keys(o).reduce((L, h) => {
          const y = f[h];
          return L[h] = [
            (...I) => n(
              o[h],
              ...I
            ),
            ...(Array.isArray(y) ? y : [y]).filter(Boolean)
          ], L;
        }, {});
      },
      { deep: !0, immediate: !0 }
    ), (p, f) => (T(), Ve(Ta(ge(s)), {
      "data-overlayscrollbars-initialize": "",
      ref_key: "elementRef",
      ref: c
    }, {
      default: Nn(() => [
        ge(s) === "body" ? U(p.$slots, "default", { key: 0 }) : (T(), M("div", {
          key: 1,
          "data-overlayscrollbars-contents": "",
          ref_key: "slotRef",
          ref: d
        }, [
          U(p.$slots, "default")
        ], 512))
      ]),
      _: 3
    }, 512));
  }
}), Zs = /* @__PURE__ */ N({
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
    return (l, i) => (T(), Ve(ge(wi), {
      class: "h-overlay-scroll",
      style: ke({ maxHeight: l.maxHeight === 0 ? "none" : `${l.maxHeight}px` }),
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
        U(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "options", "events"]));
  }
}), Ks = Symbol("listPosition"), Js = Symbol("clickedButton"), er = Symbol("isActiveList"), tr = Symbol("dropdownList"), nr = Symbol("dropdownButton"), ar = Symbol("clickedDropdownItemButton"), or = Symbol("button_disabled"), rm = /* @__PURE__ */ N({
  __name: "HDropdownArea",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    scrollEventRefs: {}
  },
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    var L;
    const n = e, a = t, o = g(!1), s = g(null), r = g(0), l = g(null), i = g(null), c = g(null);
    (L = n.modelValue) != null && L.value && (c.value = n.modelValue);
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
      const { bottom: h, left: y, right: I, top: D, width: b } = s.value.getBoundingClientRect();
      r.value = b, d.value = {
        bottom: h,
        left: y,
        right: I,
        top: D,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, v = () => {
      if (!s.value)
        return;
      const { bottom: h, left: y, right: I, top: D } = s.value.getBoundingClientRect();
      d.value = { ...d.value, bottom: h, left: y, right: I, top: D };
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
      const I = y.closest(".h_dropdown_button");
      if (I) {
        I !== l.value && (o.value = !1, a("blur"));
        return;
      }
      const D = y.closest(".h_dropdown_list");
      (!D || D !== i.value) && (o.value = !1, a("blur"));
    }, f = (h, y, I) => {
      a("update:modelValue", { value: y, name: I }), c.value = { value: y, name: I }, o.value = !1;
    };
    return Be(o, (h) => {
      h ? (window.addEventListener("scroll", v), Array.isArray(n.scrollEventRefs) && n.scrollEventRefs.forEach((y) => {
        const I = document.querySelector(y);
        I instanceof HTMLElement && I.addEventListener("scroll", v);
      }), window.addEventListener("resize", m), window.addEventListener("click", p)) : (window.removeEventListener("scroll", v), Array.isArray(n.scrollEventRefs) && n.scrollEventRefs.forEach((y) => {
        const I = document.querySelector(y);
        I instanceof HTMLElement && I.removeEventListener("scroll", v);
      }), window.removeEventListener("resize", m), window.removeEventListener("click", p));
    }), pt(() => {
      window.removeEventListener("scroll", v), window.removeEventListener("resize", m), window.removeEventListener("click", p), Array.isArray(n.scrollEventRefs) && n.scrollEventRefs.forEach((h) => {
        const y = document.querySelector(h);
        y instanceof HTMLElement && y.removeEventListener("scroll", v);
      });
    }), Y(Ks, d), Y(er, o), Y(Js, u), Y(tr, i), Y(nr, l), Y(ar, f), Y(or, ce(() => n.disabled)), (h, y) => (T(), M("div", {
      ref_key: "dropdownArea",
      ref: s,
      class: "h_dropdown_area"
    }, [
      U(h.$slots, "default", {
        isActiveList: o.value,
        listWidth: r.value
      })
    ], 512));
  }
}), Di = {}, Ti = { class: "h_dropdown_item" };
function Li(e, t) {
  return T(), M("div", Ti, [
    U(e.$slots, "default")
  ]);
}
const lm = /* @__PURE__ */ Z(Di, [["render", Li]]), ki = ["disabled"], im = /* @__PURE__ */ N({
  __name: "HDropdownButton",
  setup(e) {
    const t = S(Js), n = S(nr), a = S(or);
    return (o, s) => (T(), M("button", {
      ref_key: "dropdownButton",
      ref: n,
      type: "button",
      class: "h_dropdown_button",
      disabled: ge(a),
      onClick: s[0] || (s[0] = //@ts-ignore
      (...r) => ge(t) && ge(t)(...r))
    }, [
      U(o.$slots, "default")
    ], 8, ki));
  }
}), Ii = ["disabled"], cm = /* @__PURE__ */ N({
  __name: "HDropdownItemButton",
  props: {
    value: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t, a = La(), o = S(
      ar,
      (s, r, l) => {
        n("click", s, r, l);
      }
    );
    return (s, r) => (T(), M("button", On({
      type: "button",
      class: "h_dropdown_item_button",
      disabled: s.disabled
    }, ge(a), {
      onClick: r[0] || (r[0] = (l) => ge(o)(l, s.value, s.name))
    }), [
      U(s.$slots, "default")
    ], 16, Ii));
  }
}), um = /* @__PURE__ */ N({
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
      if (!a || !xn(a))
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
    return (i, c) => ge(n) ? (T(), M("div", {
      key: 0,
      ref_key: "dropdownList",
      ref: o,
      style: ke(l.value),
      class: "h_dropdown_list"
    }, [
      os(Zs, { style: { "max-height": "300px" } }, {
        default: Nn(() => [
          U(i.$slots, "default")
        ]),
        _: 3
      })
    ], 4)) : Me("", !0);
  }
}), dm = /* @__PURE__ */ N({
  __name: "HCheckAuth",
  props: {
    isAuth: {},
    noAuthList: {},
    originalEventTarget: { default: "button" },
    originalEventTargetEvent: {}
  },
  emits: ["auth-verification-result"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = g(null), s = ss(), r = ka(), l = g(null), i = (u) => {
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
    return We(async () => {
      var m, p, f, L, h, y, I;
      o.value = (m = s == null ? void 0 : s.proxy) == null ? void 0 : m.$el.querySelector(n.originalEventTarget), (p = o.value) == null || p.addEventListener("click", d, {
        capture: !0
      });
      const u = n.originalEventTargetEvent, v = (f = r == null ? void 0 : r.default) == null ? void 0 : f.call(r)[0];
      if (v)
        if (n.originalEventTargetEvent)
          if (v.props)
            l.value = n[u];
          else {
            const D = (L = v.type) == null ? void 0 : L.setup;
            typeof D == "function" && (l.value = (h = D()) == null ? void 0 : h[u]);
          }
        else if (v.props)
          l.value = v.props.onClick;
        else {
          const D = (y = v.type) == null ? void 0 : y.setup;
          typeof D == "function" && (l.value = (I = D()) == null ? void 0 : I.onClick);
        }
    }), pt(() => {
      var u;
      (u = o.value) == null || u.removeEventListener("click", d);
    }), (u, v) => (T(), M("div", null, [
      U(u.$slots, "default", { ref: "slotElements" })
    ]));
  }
});
var sr = typeof global == "object" && global && global.Object === Object && global, Mi = typeof self == "object" && self && self.Object === Object && self, st = sr || Mi || Function("return this")(), Rt = st.Symbol, rr = Object.prototype, Bi = rr.hasOwnProperty, Pi = rr.toString, Wt = Rt ? Rt.toStringTag : void 0;
function Hi(e) {
  var t = Bi.call(e, Wt), n = e[Wt];
  try {
    e[Wt] = void 0;
    var a = !0;
  } catch {
  }
  var o = Pi.call(e);
  return a && (t ? e[Wt] = n : delete e[Wt]), o;
}
var Ri = Object.prototype, Ni = Ri.toString;
function Oi(e) {
  return Ni.call(e);
}
var xi = "[object Null]", Fi = "[object Undefined]", Ro = Rt ? Rt.toStringTag : void 0;
function sn(e) {
  return e == null ? e === void 0 ? Fi : xi : Ro && Ro in Object(e) ? Hi(e) : Oi(e);
}
function Jt(e) {
  return e != null && typeof e == "object";
}
var Mn = Array.isArray;
function lr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ui = "[object AsyncFunction]", zi = "[object Function]", Vi = "[object GeneratorFunction]", Yi = "[object Proxy]";
function ir(e) {
  if (!lr(e))
    return !1;
  var t = sn(e);
  return t == zi || t == Vi || t == Ui || t == Yi;
}
var aa = st["__core-js_shared__"], No = function() {
  var e = /[^.]+$/.exec(aa && aa.keys && aa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wi(e) {
  return !!No && No in e;
}
var ji = Function.prototype, Qi = ji.toString;
function Et(e) {
  if (e != null) {
    try {
      return Qi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Gi = /[\\^$.*+?()[\]{}|]/g, qi = /^\[object .+?Constructor\]$/, Xi = Function.prototype, Zi = Object.prototype, Ki = Xi.toString, Ji = Zi.hasOwnProperty, ec = RegExp(
  "^" + Ki.call(Ji).replace(Gi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function tc(e) {
  if (!lr(e) || Wi(e))
    return !1;
  var t = ir(e) ? ec : qi;
  return t.test(Et(e));
}
function nc(e, t) {
  return e == null ? void 0 : e[t];
}
function xt(e, t) {
  var n = nc(e, t);
  return tc(n) ? n : void 0;
}
var Ea = xt(st, "WeakMap"), ac = 9007199254740991, oc = /^(?:0|[1-9]\d*)$/;
function sc(e, t) {
  var n = typeof e;
  return t = t ?? ac, !!t && (n == "number" || n != "symbol" && oc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function cr(e, t) {
  return e === t || e !== e && t !== t;
}
var rc = 9007199254740991;
function ur(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= rc;
}
function lc(e) {
  return e != null && ur(e.length) && !ir(e);
}
var ic = Object.prototype;
function cc(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ic;
  return e === n;
}
function uc(e, t) {
  for (var n = -1, a = Array(e); ++n < e; )
    a[n] = t(n);
  return a;
}
var dc = "[object Arguments]";
function Oo(e) {
  return Jt(e) && sn(e) == dc;
}
var dr = Object.prototype, vc = dr.hasOwnProperty, fc = dr.propertyIsEnumerable, pc = Oo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Oo : function(e) {
  return Jt(e) && vc.call(e, "callee") && !fc.call(e, "callee");
};
function mc() {
  return !1;
}
var vr = typeof exports == "object" && exports && !exports.nodeType && exports, xo = vr && typeof module == "object" && module && !module.nodeType && module, hc = xo && xo.exports === vr, Fo = hc ? st.Buffer : void 0, gc = Fo ? Fo.isBuffer : void 0, Sa = gc || mc, yc = "[object Arguments]", Ac = "[object Array]", bc = "[object Boolean]", _c = "[object Date]", Ec = "[object Error]", Sc = "[object Function]", $c = "[object Map]", Cc = "[object Number]", wc = "[object Object]", Dc = "[object RegExp]", Tc = "[object Set]", Lc = "[object String]", kc = "[object WeakMap]", Ic = "[object ArrayBuffer]", Mc = "[object DataView]", Bc = "[object Float32Array]", Pc = "[object Float64Array]", Hc = "[object Int8Array]", Rc = "[object Int16Array]", Nc = "[object Int32Array]", Oc = "[object Uint8Array]", xc = "[object Uint8ClampedArray]", Fc = "[object Uint16Array]", Uc = "[object Uint32Array]", Se = {};
Se[Bc] = Se[Pc] = Se[Hc] = Se[Rc] = Se[Nc] = Se[Oc] = Se[xc] = Se[Fc] = Se[Uc] = !0;
Se[yc] = Se[Ac] = Se[Ic] = Se[bc] = Se[Mc] = Se[_c] = Se[Ec] = Se[Sc] = Se[$c] = Se[Cc] = Se[wc] = Se[Dc] = Se[Tc] = Se[Lc] = Se[kc] = !1;
function zc(e) {
  return Jt(e) && ur(e.length) && !!Se[sn(e)];
}
function Vc(e) {
  return function(t) {
    return e(t);
  };
}
var fr = typeof exports == "object" && exports && !exports.nodeType && exports, Gt = fr && typeof module == "object" && module && !module.nodeType && module, Yc = Gt && Gt.exports === fr, oa = Yc && sr.process, Uo = function() {
  try {
    var e = Gt && Gt.require && Gt.require("util").types;
    return e || oa && oa.binding && oa.binding("util");
  } catch {
  }
}(), zo = Uo && Uo.isTypedArray, pr = zo ? Vc(zo) : zc, Wc = Object.prototype, jc = Wc.hasOwnProperty;
function Qc(e, t) {
  var n = Mn(e), a = !n && pc(e), o = !n && !a && Sa(e), s = !n && !a && !o && pr(e), r = n || a || o || s, l = r ? uc(e.length, String) : [], i = l.length;
  for (var c in e)
    jc.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    sc(c, i))) && l.push(c);
  return l;
}
function Gc(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var qc = Gc(Object.keys, Object), Xc = Object.prototype, Zc = Xc.hasOwnProperty;
function Kc(e) {
  if (!cc(e))
    return qc(e);
  var t = [];
  for (var n in Object(e))
    Zc.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Jc(e) {
  return lc(e) ? Qc(e) : Kc(e);
}
var en = xt(Object, "create");
function eu() {
  this.__data__ = en ? en(null) : {}, this.size = 0;
}
function tu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nu = "__lodash_hash_undefined__", au = Object.prototype, ou = au.hasOwnProperty;
function su(e) {
  var t = this.__data__;
  if (en) {
    var n = t[e];
    return n === nu ? void 0 : n;
  }
  return ou.call(t, e) ? t[e] : void 0;
}
var ru = Object.prototype, lu = ru.hasOwnProperty;
function iu(e) {
  var t = this.__data__;
  return en ? t[e] !== void 0 : lu.call(t, e);
}
var cu = "__lodash_hash_undefined__";
function uu(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = en && t === void 0 ? cu : t, this;
}
function _t(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
_t.prototype.clear = eu;
_t.prototype.delete = tu;
_t.prototype.get = su;
_t.prototype.has = iu;
_t.prototype.set = uu;
function du() {
  this.__data__ = [], this.size = 0;
}
function qn(e, t) {
  for (var n = e.length; n--; )
    if (cr(e[n][0], t))
      return n;
  return -1;
}
var vu = Array.prototype, fu = vu.splice;
function pu(e) {
  var t = this.__data__, n = qn(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : fu.call(t, n, 1), --this.size, !0;
}
function mu(e) {
  var t = this.__data__, n = qn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function hu(e) {
  return qn(this.__data__, e) > -1;
}
function gu(e, t) {
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
rt.prototype.clear = du;
rt.prototype.delete = pu;
rt.prototype.get = mu;
rt.prototype.has = hu;
rt.prototype.set = gu;
var tn = xt(st, "Map");
function yu() {
  this.size = 0, this.__data__ = {
    hash: new _t(),
    map: new (tn || rt)(),
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
function bu(e) {
  var t = Xn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _u(e) {
  return Xn(this, e).get(e);
}
function Eu(e) {
  return Xn(this, e).has(e);
}
function Su(e, t) {
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
St.prototype.clear = yu;
St.prototype.delete = bu;
St.prototype.get = _u;
St.prototype.has = Eu;
St.prototype.set = Su;
function $u(e, t) {
  for (var n = -1, a = t.length, o = e.length; ++n < a; )
    e[o + n] = t[n];
  return e;
}
function Cu() {
  this.__data__ = new rt(), this.size = 0;
}
function wu(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Du(e) {
  return this.__data__.get(e);
}
function Tu(e) {
  return this.__data__.has(e);
}
var Lu = 200;
function ku(e, t) {
  var n = this.__data__;
  if (n instanceof rt) {
    var a = n.__data__;
    if (!tn || a.length < Lu - 1)
      return a.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new St(a);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ft(e) {
  var t = this.__data__ = new rt(e);
  this.size = t.size;
}
ft.prototype.clear = Cu;
ft.prototype.delete = wu;
ft.prototype.get = Du;
ft.prototype.has = Tu;
ft.prototype.set = ku;
function Iu(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, o = 0, s = []; ++n < a; ) {
    var r = e[n];
    t(r, n, e) && (s[o++] = r);
  }
  return s;
}
function Mu() {
  return [];
}
var Bu = Object.prototype, Pu = Bu.propertyIsEnumerable, Vo = Object.getOwnPropertySymbols, Hu = Vo ? function(e) {
  return e == null ? [] : (e = Object(e), Iu(Vo(e), function(t) {
    return Pu.call(e, t);
  }));
} : Mu;
function Ru(e, t, n) {
  var a = t(e);
  return Mn(e) ? a : $u(a, n(e));
}
function Yo(e) {
  return Ru(e, Jc, Hu);
}
var $a = xt(st, "DataView"), Ca = xt(st, "Promise"), wa = xt(st, "Set"), Wo = "[object Map]", Nu = "[object Object]", jo = "[object Promise]", Qo = "[object Set]", Go = "[object WeakMap]", qo = "[object DataView]", Ou = Et($a), xu = Et(tn), Fu = Et(Ca), Uu = Et(wa), zu = Et(Ea), ut = sn;
($a && ut(new $a(new ArrayBuffer(1))) != qo || tn && ut(new tn()) != Wo || Ca && ut(Ca.resolve()) != jo || wa && ut(new wa()) != Qo || Ea && ut(new Ea()) != Go) && (ut = function(e) {
  var t = sn(e), n = t == Nu ? e.constructor : void 0, a = n ? Et(n) : "";
  if (a)
    switch (a) {
      case Ou:
        return qo;
      case xu:
        return Wo;
      case Fu:
        return jo;
      case Uu:
        return Qo;
      case zu:
        return Go;
    }
  return t;
});
var Xo = st.Uint8Array, Vu = "__lodash_hash_undefined__";
function Yu(e) {
  return this.__data__.set(e, Vu), this;
}
function Wu(e) {
  return this.__data__.has(e);
}
function Bn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new St(); ++t < n; )
    this.add(e[t]);
}
Bn.prototype.add = Bn.prototype.push = Yu;
Bn.prototype.has = Wu;
function ju(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Qu(e, t) {
  return e.has(t);
}
var Gu = 1, qu = 2;
function mr(e, t, n, a, o, s) {
  var r = n & Gu, l = e.length, i = t.length;
  if (l != i && !(r && i > l))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var u = -1, v = !0, m = n & qu ? new Bn() : void 0;
  for (s.set(e, t), s.set(t, e); ++u < l; ) {
    var p = e[u], f = t[u];
    if (a)
      var L = r ? a(f, p, u, t, e, s) : a(p, f, u, e, t, s);
    if (L !== void 0) {
      if (L)
        continue;
      v = !1;
      break;
    }
    if (m) {
      if (!ju(t, function(h, y) {
        if (!Qu(m, y) && (p === h || o(p, h, n, a, s)))
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
function Xu(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a, o) {
    n[++t] = [o, a];
  }), n;
}
function Zu(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a) {
    n[++t] = a;
  }), n;
}
var Ku = 1, Ju = 2, ed = "[object Boolean]", td = "[object Date]", nd = "[object Error]", ad = "[object Map]", od = "[object Number]", sd = "[object RegExp]", rd = "[object Set]", ld = "[object String]", id = "[object Symbol]", cd = "[object ArrayBuffer]", ud = "[object DataView]", Zo = Rt ? Rt.prototype : void 0, sa = Zo ? Zo.valueOf : void 0;
function dd(e, t, n, a, o, s, r) {
  switch (n) {
    case ud:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case cd:
      return !(e.byteLength != t.byteLength || !s(new Xo(e), new Xo(t)));
    case ed:
    case td:
    case od:
      return cr(+e, +t);
    case nd:
      return e.name == t.name && e.message == t.message;
    case sd:
    case ld:
      return e == t + "";
    case ad:
      var l = Xu;
    case rd:
      var i = a & Ku;
      if (l || (l = Zu), e.size != t.size && !i)
        return !1;
      var c = r.get(e);
      if (c)
        return c == t;
      a |= Ju, r.set(e, t);
      var d = mr(l(e), l(t), a, o, s, r);
      return r.delete(e), d;
    case id:
      if (sa)
        return sa.call(e) == sa.call(t);
  }
  return !1;
}
var vd = 1, fd = Object.prototype, pd = fd.hasOwnProperty;
function md(e, t, n, a, o, s) {
  var r = n & vd, l = Yo(e), i = l.length, c = Yo(t), d = c.length;
  if (i != d && !r)
    return !1;
  for (var u = i; u--; ) {
    var v = l[u];
    if (!(r ? v in t : pd.call(t, v)))
      return !1;
  }
  var m = s.get(e), p = s.get(t);
  if (m && p)
    return m == t && p == e;
  var f = !0;
  s.set(e, t), s.set(t, e);
  for (var L = r; ++u < i; ) {
    v = l[u];
    var h = e[v], y = t[v];
    if (a)
      var I = r ? a(y, h, v, t, e, s) : a(h, y, v, e, t, s);
    if (!(I === void 0 ? h === y || o(h, y, n, a, s) : I)) {
      f = !1;
      break;
    }
    L || (L = v == "constructor");
  }
  if (f && !L) {
    var D = e.constructor, b = t.constructor;
    D != b && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof b == "function" && b instanceof b) && (f = !1);
  }
  return s.delete(e), s.delete(t), f;
}
var hd = 1, Ko = "[object Arguments]", Jo = "[object Array]", mn = "[object Object]", gd = Object.prototype, es = gd.hasOwnProperty;
function yd(e, t, n, a, o, s) {
  var r = Mn(e), l = Mn(t), i = r ? Jo : ut(e), c = l ? Jo : ut(t);
  i = i == Ko ? mn : i, c = c == Ko ? mn : c;
  var d = i == mn, u = c == mn, v = i == c;
  if (v && Sa(e)) {
    if (!Sa(t))
      return !1;
    r = !0, d = !1;
  }
  if (v && !d)
    return s || (s = new ft()), r || pr(e) ? mr(e, t, n, a, o, s) : dd(e, t, i, n, a, o, s);
  if (!(n & hd)) {
    var m = d && es.call(e, "__wrapped__"), p = u && es.call(t, "__wrapped__");
    if (m || p) {
      var f = m ? e.value() : e, L = p ? t.value() : t;
      return s || (s = new ft()), o(f, L, n, a, s);
    }
  }
  return v ? (s || (s = new ft()), md(e, t, n, a, o, s)) : !1;
}
function hr(e, t, n, a, o) {
  return e === t ? !0 : e == null || t == null || !Jt(e) && !Jt(t) ? e !== e && t !== t : yd(e, t, n, a, hr, o);
}
function Nt(e, t) {
  return hr(e, t);
}
function vm() {
  return {
    checkEqual: ce(
      () => (t, n) => Nt(t, n)
    )
  };
}
const hn = {}, jt = {}, fm = (e, t) => {
  const n = t.split("?")[0], a = () => {
    s();
  };
  Be(e, (l, i) => {
    l && (i && i.removeEventListener("input", a), l.addEventListener("input", a), hn[n] = o(), jt[n] = Nt(
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
    return l.forEach((c, d) => {
      i[d] = c;
    }), JSON.stringify(i);
  };
  hn[n] = o();
  const s = () => {
    if (!e.value)
      return null;
    const l = o();
    return jt[n] = Nt(
      hn[n],
      l
    ), jt[n];
  };
  return {
    deleteComponentState: () => {
      delete jt[n];
    }
  };
}, Ad = () => jt, pm = /* @__PURE__ */ N({
  __name: "HCheckFormDataChange",
  props: {
    href: {},
    target: {},
    originalEventTarget: { default: "a" },
    originalEventTargetEvent: {}
  },
  emits: ["data-change-verification-result"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ss(), s = ka(), r = g(null), l = g(null), i = () => {
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
    return We(async () => {
      var m, p, f, L, h, y, I;
      r.value = (m = o == null ? void 0 : o.proxy) == null ? void 0 : m.$el.querySelector(n.originalEventTarget), (p = r.value) == null || p.addEventListener("click", d, {
        capture: !0
      });
      const u = n.originalEventTargetEvent, v = (f = s == null ? void 0 : s.default) == null ? void 0 : f.call(s)[0];
      if (v)
        if (n.originalEventTargetEvent)
          if (v.props)
            l.value = n[u];
          else {
            const D = (L = v.type) == null ? void 0 : L.setup;
            typeof D == "function" && (l.value = (h = D()) == null ? void 0 : h[u]);
          }
        else if (v.props)
          l.value = v.props.onClick;
        else {
          const D = (y = v.type) == null ? void 0 : y.setup;
          typeof D == "function" && (l.value = (I = D()) == null ? void 0 : I.onClick);
        }
    }), pt(() => {
      var u;
      (u = r.value) == null || u.removeEventListener("click", d);
    }), (u, v) => (T(), M("div", null, [
      U(u.$slots, "default")
    ]));
  }
}), Wa = Symbol("maxLength"), ja = Symbol("setCountValue"), Qa = Symbol("textRef"), gr = Symbol("textCounterArea"), mm = /* @__PURE__ */ N({
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
    return Y(ja, l), Y(Wa, o), Y(Qa, s), Y(gr, n), We(() => {
      l();
    }), (i, c) => (T(), M("div", {
      ref_key: "textCounterArea",
      ref: n,
      class: "h_text_counter_area"
    }, [
      U(i.$slots, "default", {
        currLength: a.value,
        maxLength: o.value,
        scrollWidth: r.value
      })
    ], 512));
  }
}), bd = {}, _d = { class: "h_text_counter_box" };
function Ed(e, t) {
  return T(), M("div", _d, [
    U(e.$slots, "default")
  ]);
}
const hm = /* @__PURE__ */ Z(bd, [["render", Ed]]), Sd = {};
function $d(e, t) {
  return T(), M("div", null, [
    U(e.$slots, "default")
  ]);
}
const gm = /* @__PURE__ */ Z(Sd, [["render", $d]]), Cd = ["maxlength"], ym = /* @__PURE__ */ N({
  __name: "HCounterInputText",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = La(), s = S(Wa, g(o.maxlength)), r = S(ja, () => {
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
    return (d, u) => rs((T(), M("input", On({
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
    }), null, 16, Cd)), [
      [ls, i.value]
    ]);
  }
}), wd = ["maxlength"], Am = /* @__PURE__ */ N({
  __name: "HCounterTextArea",
  props: {
    modelValue: {},
    autoHeight: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = La(), s = S(Wa, void 0), r = S(ja, () => {
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
    return We(() => {
      m();
    }), (f, L) => rs((T(), M("textarea", On({
      ref_key: "textAreaRef",
      ref: l,
      "onUpdate:modelValue": L[0] || (L[0] = (h) => v.value = h)
    }, ge(o), {
      class: "h_text_area",
      maxlength: ge(s),
      onInput: p
    }), null, 16, wd)), [
      [ls, v.value]
    ]);
  }
}), yr = Symbol("triggerFileInput"), Ar = Symbol("files"), br = Symbol("formatSize"), _r = Symbol("removeFile"), Dd = ["multiple"], bm = /* @__PURE__ */ N({
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
      h.forEach((I) => y.items.add(I)), r.value.files = y.files;
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
      let y = s.value.reduce((I, D) => I + D.size, 0);
      h = h.filter((I) => n.maxSize && y + I.size > n.maxSize ? (a("exceed-file-size"), !1) : (y += I.size, !0)), s.value.push(...h), l(s.value), a("update:modelValue", s.value);
    }, f = (h) => {
      s.value.splice(h, 1), l(s.value), a("update:modelValue", s.value);
    }, L = (h) => (h / 1024 / 1024).toFixed(2) + "MB";
    return Y(yr, i), Y(Ar, s), Y(_r, f), Y(br, L), (h, y) => (T(), M("div", {
      class: ve(["h-file-upload-container", { is_drag_over: d.value }]),
      onDragover: qt(v, ["prevent"]),
      onDrop: qt(m, ["prevent"]),
      onDragleave: u
    }, [
      oe("input", {
        ref_key: "fileInput",
        ref: r,
        type: "file",
        multiple: h.multiple,
        hidden: "",
        onChange: c
      }, null, 40, Dd),
      U(h.$slots, "default", { isDragOver: d.value })
    ], 34));
  }
}), _m = /* @__PURE__ */ N({
  __name: "HFileUploadButton",
  setup(e) {
    const t = S(yr, () => {
    });
    return (n, a) => (T(), M("button", {
      type: "button",
      onClick: a[0] || (a[0] = //@ts-ignore
      (...o) => ge(t) && ge(t)(...o))
    }, [
      U(n.$slots, "default")
    ]));
  }
}), Em = /* @__PURE__ */ N({
  __name: "HFileUploadFileItem",
  setup(e) {
    const t = S(Ar, g([])), n = S(br, (o) => ""), a = S(_r, (o) => {
    });
    return (o, s) => (T(), M("div", null, [
      (T(!0), M(is, null, ul(ge(t), (r, l) => (T(), M("div", {
        key: l,
        class: "h-file-info"
      }, [
        U(o.$slots, "default", {
          filename: r.name,
          filesize: ge(n)(r.size),
          removeFileFunc: () => ge(a)(l)
        })
      ]))), 128))
    ]));
  }
}), Td = {}, Ld = { class: "h-file-list" };
function kd(e, t) {
  return T(), M("div", Ld, [
    U(e.$slots, "default")
  ]);
}
const Sm = /* @__PURE__ */ Z(Td, [["render", kd]]), $m = /* @__PURE__ */ N({
  __name: "HHtmlRender",
  props: {
    tag: { default: "div" }
  },
  setup(e) {
    var s, r;
    const t = ka(), n = t.default ? (r = (s = t.default()[0]) == null ? void 0 : s.children) == null ? void 0 : r.toString() : "", a = {
      attrs: {},
      on: {}
    }, o = a.on;
    return (l, i) => (T(), Ve(Ta(l.tag), On({ innerHTML: ge(n) }, a.attrs, dl(ge(o))), null, 16, ["innerHTML"]));
  }
}), Er = Symbol("isDraggable"), Sr = Symbol("eventDrag"), $r = Symbol("endEventDrag"), Cr = Symbol("emitValue"), Id = N({
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
    const { isDraggable: n, modelValue: a } = Rn(e), o = (s, r, l, i) => {
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
}), Md = { class: "h_kanban_board_area" };
function Bd(e, t, n, a, o, s) {
  return T(), M("div", Md, [
    U(e.$slots, "default")
  ]);
}
const Cm = /* @__PURE__ */ Z(Id, [["render", Bd]]), Pd = N({
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
    }), r = g(null), l = g(null), i = g(0), c = g(0), d = g(0), u = g(0), v = g(0), m = g(0), p = g(!1), f = g(null), L = () => {
      var b;
      f.value && clearTimeout(f.value), Ce(r.value) && (s(
        e.elValue,
        e.colIndex,
        e.rowIndex,
        r.value
      ), (b = r.value) == null || b.removeEventListener(
        "transitionend",
        L
      ));
    }, h = (b) => {
      if (!(l.value instanceof HTMLElement) || (l.value.style.position = "fixed", l.value.style.zIndex = "100", fl(b) ? b.touches.length === 1 && (v.value = b.touches[0].clientX - d.value, m.value = b.touches[0].clientY - u.value, d.value = b.touches[0].clientX, u.value = b.touches[0].clientY) : pl(b) && (v.value = b.clientX - d.value, m.value = b.clientY - u.value, d.value = b.clientX, u.value = b.clientY), !r.value))
        return;
      const { width: B, height: W } = r.value.getBoundingClientRect();
      l.value.style.width = B + "px", l.value.style.height = W + "px", l.value.style.top = u.value - c.value + "px", l.value.style.left = d.value - i.value + "px", Ce(r.value) && a(
        r.value,
        d.value,
        u.value,
        b.type
      );
    }, y = (b) => {
      var W;
      if (!(l.value instanceof HTMLElement))
        return;
      l.value.style.position = "", l.value.style.zIndex = "", l.value.style.width = "", l.value.style.height = "", l.value.style.top = "", l.value.style.left = "";
      const B = document.querySelector(".clone");
      B && document.body.removeChild(B), p.value = !1, document.removeEventListener("mouseup", y), document.removeEventListener("touchend", y), document.removeEventListener("mousemove", h), document.removeEventListener("touchmove", h), (W = r.value) == null || W.addEventListener(
        "transitionend",
        L
      ), f.value = setTimeout(() => {
        L();
      }, 550), o(b.type);
    }, I = (b) => {
      if (!r.value || (l.value = r.value.cloneNode(!0), !(l.value instanceof HTMLElement)))
        return;
      l.value.classList.add("clone"), l.value.style.position = "fixed", l.value.style.pointerEvents = "none", l.value.style.opacity = "0.5", document.body.appendChild(l.value);
      const B = r.value.getBoundingClientRect();
      p.value = !0, vl(b) ? b.touches.length === 1 && (d.value = b.touches[0].clientX, u.value = b.touches[0].clientY, i.value = d.value - B.left, c.value = u.value - B.top) : ml(b) && (d.value = b.clientX, u.value = b.clientY, i.value = d.value - B.left, c.value = u.value - B.top), document.addEventListener("mouseup", y), document.addEventListener("touchend", y), document.addEventListener("mousemove", h), document.addEventListener("touchmove", h);
    }, D = (b) => {
      let B = b.target;
      for (; Ce(B) && B.tagName !== "BUTTON" && !B.classList.contains("h_kanban_card"); )
        B = B.parentElement;
      Ce(B) && B.tagName === "BUTTON" || Ce(B) && B.tagName === "A" || t("event-click");
    };
    return We(() => {
      if (n.value) {
        if (!r.value)
          return;
        r.value.addEventListener("mousedown", I), r.value.addEventListener("touchstart", I);
      }
    }), Da(() => {
      if (n.value) {
        if (!r.value)
          return;
        r.value.removeEventListener(
          "mousedown",
          I
        ), r.value.removeEventListener(
          "touchstart",
          I
        );
      }
    }), {
      isSelected: p,
      clickKanbanCard: D,
      isDraggable: n,
      dragMouseDown: I,
      kanbanCard: r
    };
  }
});
function Hd(e, t, n, a, o, s) {
  return T(), M("div", {
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
    U(e.$slots, "default")
  ], 2);
}
const wm = /* @__PURE__ */ Z(Pd, [["render", Hd]]), Rd = N({
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
    We(() => {
      p(), window.addEventListener("resize", f);
    }), Da(() => {
      window.removeEventListener("resize", f);
    });
    const L = (z) => {
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
    }, I = (z) => {
      var _;
      i.value = z.currentTarget, Ce(i.value) && (c.value = Array.prototype.slice.call(
        (_ = i.value) == null ? void 0 : _.querySelectorAll(
          ".h_kanban_line_inner_area .h_kanban_card"
        )
      ), c.value.length ? d.value = c.value[c.value.length - 1].getBoundingClientRect() : d.value = null);
    }, D = () => {
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
    }, b = (z) => {
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
      var le, se, de, ue, be, O, x, Q, K, k, ne, ee, ae, ie, fe, Ee, ye;
      e.value = z, o.value = _, s.value = P, t.value = b(e.value), n.value = ((le = t.value) == null ? void 0 : le.nextElementSibling) || null, a.value = ((se = t.value) == null ? void 0 : se.previousElementSibling) || null;
      const w = (de = t.value) == null ? void 0 : de.getBoundingClientRect(), j = n.value ? n.value.getBoundingClientRect() : null, q = a.value ? a.value.getBoundingClientRect() : null;
      if (C === "touchmove") {
        if (!w)
          return;
        w.top <= s.value && w.bottom >= s.value && w.left <= o.value && w.right >= o.value || j && j.top <= s.value && j.bottom >= s.value && j.left <= o.value && j.right >= o.value || q && q.top <= s.value && q.bottom >= s.value && q.left <= o.value && q.right >= o.value || (r.value = null, i.value = null);
      }
      w && (w.top <= s.value && w.bottom >= s.value && w.left <= o.value && w.right >= o.value ? ((ue = t.value) == null || ue.classList.add("current"), n.value && n.value.classList.remove("next"), a.value && a.value.classList.remove("prev"), C === "touchmove" && (i.value = t.value, u.value = Array.prototype.slice.call(
        (be = t.value) == null ? void 0 : be.querySelectorAll(".h_kanban_card")
      ), u.value.forEach((G) => {
        const X = G.getBoundingClientRect();
        X.top <= s.value && s.value <= X.top + X.height / 2 ? (G.classList.add("top"), r.value = G, l.value = "top") : G.classList.remove("top"), X.bottom >= s.value && s.value > X.top + X.height / 2 ? (G.classList.add("bottom"), r.value = G, l.value = "bottom") : G.classList.remove("bottom");
      }), u.value.length ? u.value[u.value.length - 1].getBoundingClientRect().bottom < s.value && (r.value = "append") : r.value = "append")) : ((O = t.value) == null || O.classList.remove("current"), C === "touchmove" && u.value && u.value.forEach((G) => {
        G.classList.remove("top"), G.classList.remove("bottom");
      })), j && (j.top <= s.value && j.bottom >= s.value && j.left <= o.value && j.right >= o.value ? ((x = t.value) == null || x.classList.remove("current"), (Q = n.value) == null || Q.classList.add("next"), a.value && a.value.classList.remove("prev"), C === "touchmove" && (i.value = n.value, v.value = Array.prototype.slice.call(
        (K = n.value) == null ? void 0 : K.querySelectorAll(
          ".h_kanban_card"
        )
      ), v.value.forEach((G) => {
        const X = G.getBoundingClientRect();
        X.top <= s.value && s.value <= X.top + X.height / 2 ? (G.classList.add("top"), r.value = G, l.value = "top") : G.classList.remove("top"), X.bottom >= s.value && s.value > X.top + X.height / 2 ? (G.classList.add("bottom"), r.value = G, l.value = "bottom") : G.classList.remove("bottom");
      }), v.value.length ? v.value[v.value.length - 1].getBoundingClientRect().bottom < s.value && (r.value = "append") : r.value = "append")) : ((k = n.value) == null || k.classList.remove("next"), C === "touchmove" && v.value && v.value.forEach((G) => {
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
      }))), (fe = t.value) == null || fe.addEventListener("mouseover", I), n.value && n.value.addEventListener("mouseover", I), a.value && a.value.addEventListener("mouseover", I), (Ee = t.value) == null || Ee.addEventListener("mouseup", D), n.value && n.value.addEventListener("mouseup", D), a.value && a.value.addEventListener("mouseup", D), (ye = t.value) == null || ye.querySelectorAll(".h_kanban_card").forEach((G) => {
        G.addEventListener("mouseout", L), G.addEventListener("mouseup", y), G.addEventListener("mousemove", B);
      }), n.value && n.value.querySelectorAll(".h_kanban_card").forEach((G) => {
        G.addEventListener("mouseout", L), G.addEventListener("mouseup", y), G.addEventListener("mousemove", B);
      }), a.value && a.value.querySelectorAll(".h_kanban_card").forEach((G) => {
        G.addEventListener("mouseout", L), G.addEventListener("mouseup", y), G.addEventListener("mousemove", B);
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
      t.value && t.value.classList.remove("current"), n.value && n.value.classList.remove("next"), a.value && a.value.classList.remove("prev"), t.value && t.value.removeEventListener("mouseover", I), n.value && n.value.removeEventListener(
        "mouseover",
        I
      ), a.value && a.value.removeEventListener(
        "mouseover",
        I
      ), t.value && t.value.removeEventListener("mouseup", D), n.value && n.value.removeEventListener(
        "mouseup",
        D
      ), a.value && a.value.removeEventListener(
        "mouseup",
        D
      ), t.value && t.value.querySelectorAll(".h_kanban_card").forEach((w) => {
        w.removeEventListener("mouseout", L), w.removeEventListener("mouseup", y), w.removeEventListener("mousemove", B);
      }), n.value && n.value.querySelectorAll(".h_kanban_card").forEach((w) => {
        w.removeEventListener("mouseout", L), w.removeEventListener("mouseup", y), w.removeEventListener("mousemove", B);
      }), a.value && a.value.querySelectorAll(".h_kanban_card").forEach((w) => {
        w.removeEventListener("mouseout", L), w.removeEventListener("mouseup", y), w.removeEventListener("mousemove", B);
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
function Od(e, t, n, a, o, s) {
  return T(), M("div", Nd, [
    U(e.$slots, "default")
  ], 512);
}
const Dm = /* @__PURE__ */ Z(Rd, [["render", Od]]), xd = N({
  name: "HKanbanLineInnerArea"
}), Fd = { class: "h_kanban_line_inner_area" };
function Ud(e, t, n, a, o, s) {
  return T(), M("div", Fd, [
    U(e.$slots, "default")
  ]);
}
const Tm = /* @__PURE__ */ Z(xd, [["render", Ud]]), zd = { class: "h-loading" }, Vd = { class: "h_spinner_bg" }, Yd = {
  viewBox: "0 0 50 50",
  class: "h-spinner"
}, Lm = /* @__PURE__ */ N({
  __name: "HLoading",
  props: {
    strokeColor: {
      type: String,
      default: "#4676f0"
    }
  },
  setup(e) {
    return (t, n) => (T(), M("div", zd, [
      n[1] || (n[1] = oe("div", { class: "h-dimmed" }, null, -1)),
      oe("div", Vd, [
        (T(), M("svg", Yd, [
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
            style: ke({
              stroke: e.strokeColor
            })
          }, null, 4)
        ]))
      ])
    ]));
  }
}), Wd = { class: "h-dot-spinner" }, jd = { class: "spinner_inner" }, km = /* @__PURE__ */ N({
  __name: "HThreeDotLoading",
  props: {
    backgroundColor: {
      type: String,
      default: "#333"
    }
  },
  setup(e) {
    return (t, n) => (T(), M("div", Wd, [
      oe("div", jd, [
        oe("div", {
          class: "bounce1 bounce",
          style: ke({ backgroundColor: e.backgroundColor })
        }, null, 4),
        oe("div", {
          class: "bounce2 bounce",
          style: ke({ backgroundColor: e.backgroundColor })
        }, null, 4),
        oe("div", {
          class: "bounce3 bounce",
          style: ke({ backgroundColor: e.backgroundColor })
        }, null, 4)
      ])
    ]));
  }
});
/*!
 * Signature Pad v4.2.0 | https://github.com/szimek/signature_pad
 * (c) 2024 Szymon Nowak | Released under the MIT license
 */
class Pn {
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
    const o = t.x - n.x, s = t.y - n.y, r = n.x - a.x, l = n.y - a.y, i = { x: (t.x + n.x) / 2, y: (t.y + n.y) / 2 }, c = { x: (n.x + a.x) / 2, y: (n.y + a.y) / 2 }, d = Math.sqrt(o * o + s * s), u = Math.sqrt(r * r + l * l), v = i.x - c.x, m = i.y - c.y, p = u / (d + u), f = { x: c.x + v * p, y: c.y + m * p }, L = n.x - f.x, h = n.y - f.y;
    return {
      c1: new Pn(i.x + L, i.y + h),
      c2: new Pn(c.x + L, c.y + h)
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
class Qd {
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
function Gd(e, t = 250) {
  let n = 0, a = null, o, s, r;
  const l = () => {
    n = Date.now(), a = null, o = e.apply(s, r), a || (s = null, r = []);
  };
  return function(...c) {
    const d = Date.now(), u = t - (d - n);
    return s = this, r = c, u <= 0 || u > t ? (a && (clearTimeout(a), a = null), n = d, o = e.apply(s, r), a || (s = null, r = [])) : a || (a = window.setTimeout(l, u)), o;
  };
}
class Hn extends Qd {
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
    }, this.velocityFilterWeight = n.velocityFilterWeight || 0.7, this.minWidth = n.minWidth || 0.5, this.maxWidth = n.maxWidth || 2.5, this.throttle = "throttle" in n ? n.throttle : 16, this.minDistance = "minDistance" in n ? n.minDistance : 5, this.dotSize = n.dotSize || 0, this.penColor = n.penColor || "black", this.backgroundColor = n.backgroundColor || "rgba(0,0,0,0)", this.compositeOperation = n.compositeOperation || "source-over", this.canvasContextOptions = "canvasContextOptions" in n ? n.canvasContextOptions : {}, this._strokeMoveUpdate = this.throttle ? Gd(Hn.prototype._strokeUpdate, this.throttle) : Hn.prototype._strokeUpdate, this._ctx = t.getContext("2d", this.canvasContextOptions), this.clear(), this.on();
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
    return new Pn(t - o.left, n - o.top, a, (/* @__PURE__ */ new Date()).getTime());
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
          const i = s[l], c = new Pn(i.x, i.y, i.pressure, i.time);
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
const qd = {
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
      e.sig = new Hn(t, e.option), e.attachEventListeners();
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
}, Xd = ["id", "data-uid", "disabled"];
function Zd(e, t, n, a, o, s) {
  return T(), M("div", {
    style: ke({ width: n.w, height: n.h }),
    onTouchmove: t[0] || (t[0] = qt(() => {
    }, ["prevent"]))
  }, [
    oe("canvas", {
      id: o.uid,
      class: "canvas",
      "data-uid": o.uid,
      disabled: n.disabled
    }, null, 8, Xd)
  ], 36);
}
const Kd = /* @__PURE__ */ Z(qd, [["render", Zd]]);
var Ie = [];
for (var ra = 0; ra < 256; ++ra)
  Ie.push((ra + 256).toString(16).slice(1));
function Jd(e, t = 0) {
  return (Ie[e[t + 0]] + Ie[e[t + 1]] + Ie[e[t + 2]] + Ie[e[t + 3]] + "-" + Ie[e[t + 4]] + Ie[e[t + 5]] + "-" + Ie[e[t + 6]] + Ie[e[t + 7]] + "-" + Ie[e[t + 8]] + Ie[e[t + 9]] + "-" + Ie[e[t + 10]] + Ie[e[t + 11]] + Ie[e[t + 12]] + Ie[e[t + 13]] + Ie[e[t + 14]] + Ie[e[t + 15]]).toLowerCase();
}
var gn, ev = new Uint8Array(16);
function tv() {
  if (!gn && (gn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !gn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return gn(ev);
}
var nv = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const ts = {
  randomUUID: nv
};
function qa(e, t, n) {
  if (ts.randomUUID && !t && !e)
    return ts.randomUUID();
  e = e || {};
  var a = e.random || (e.rng || tv)();
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, Jd(a);
}
function Qt() {
  return qa();
}
const wr = Symbol("clear"), Dr = Symbol("undo"), av = () => {
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
}, ns = "data:image/png;base64,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", ov = N({
  name: "HSignatureArea",
  components: {
    VueSignature: Kd
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
    const n = g(null), a = g(null), o = ce(() => e.modelValue), s = g(""), r = g(null), l = g(`${Qt()}`), i = g(100), c = ce(() => i.value * e.ratio), d = ce(() => !e.naturalHeight || !e.naturalWidth ? e.sigOption : {
      ...e.sigOption,
      backgroundColor: "transparent"
    }), { getBase64ImageDimensions: u } = av();
    Be(
      o,
      async (y) => {
        y ? (s.value = "", r.value = await u(
          y,
          (I) => {
          }
        )) : (s.value = e.placeHolderImage, l.value = `${Qt()}`);
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
          const I = y.getContext("2d");
          if (I && r.value) {
            I.drawImage(
              r.value,
              0,
              0,
              y.width,
              y.height
            );
            const b = a.value.$el.children[0].toDataURL(), B = await u(
              b,
              (W) => {
              }
            );
            I.drawImage(
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
      (y = a.value) == null || y.clear(), s.value = ns, l.value = `${Qt()}`, t("update:modelValue", "");
    }, f = () => {
      var y;
      (y = a.value) == null || y.undo(), m();
    }, L = g(null), h = () => {
      L.value && clearTimeout(L.value), L.value = setTimeout(() => {
        l.value = `${Qt()}`;
      }, 50);
    };
    return We(() => {
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
}), sv = {
  ref: "signatureArea",
  class: "h_signature_area"
}, rv = ["src"], lv = { class: "inner_area" }, iv = ["src"];
function cv(e, t, n, a, o, s) {
  const r = ot("vue-signature");
  return T(), M("div", sv, [
    oe("img", {
      src: e.dataUrl,
      alt: "",
      class: "img"
    }, null, 8, rv),
    oe("div", lv, [
      (T(), Ve(r, {
        ref: "signature",
        key: e.signatureKey,
        class: "h_signature_pad",
        sigOption: e.sigOptionData,
        disabled: e.disabled,
        w: "100%",
        h: "100%",
        style: ke({
          width: `${e.width}%`,
          paddingTop: `${e.height}%`,
          height: "0"
        }),
        onEndStroke: e.save,
        onBeginStroke: e.initDefaultUrl
      }, null, 8, ["sigOption", "disabled", "style", "onEndStroke", "onBeginStroke"])),
      e.defaultUrl ? (T(), M("img", {
        key: 0,
        src: e.defaultUrl,
        class: "default_img",
        alt: "서명 기본 이미지"
      }, null, 8, iv)) : Me("", !0)
    ]),
    U(e.$slots, "default")
  ], 512);
}
const Im = /* @__PURE__ */ Z(ov, [["render", cv]]), uv = N({
  name: "HSignatureClearButton",
  setup() {
    return {
      clear: S(wr, () => {
      })
    };
  }
});
function dv(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: "h_btn_delete",
    onClick: t[0] || (t[0] = (...r) => e.clear && e.clear(...r))
  }, [
    U(e.$slots, "default")
  ]);
}
const Mm = /* @__PURE__ */ Z(uv, [["render", dv]]), vv = N({
  name: "HSignatureUndoButton",
  setup() {
    return {
      undo: S(Dr, () => {
      })
    };
  }
});
function fv(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.undo && e.undo(...r))
  }, [
    U(e.$slots, "default")
  ]);
}
const Bm = /* @__PURE__ */ Z(vv, [["render", fv]]), Ft = Symbol(
  "clickPaginationButton"
), Tr = Symbol("lastPageIndex"), Zn = Symbol("activePageIndex"), Ut = Symbol(
  "clickPaginationButton"
), zt = Symbol("classNameValue"), as = (e) => e ? e.substring(1).split("&").reduce((t, n) => {
  const [a, o] = n.split("=");
  return t[decodeURIComponent(a)] = decodeURIComponent(o), t;
}, {}) : {}, pv = (e, t) => Array.from({ length: t - e + 1 }, (n, a) => e + a), mv = N({
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
    const { modelValue: n } = Rn(e);
    Be(n, (u) => {
      a.value = u + 1;
    });
    const a = g(n.value + 1), o = as(window.location.search);
    o[e.queryStringKey] && (a.value = parseInt(o[e.queryStringKey]) + 1);
    const s = ce(() => {
      const u = Math.floor(e.modelValue / e.countPerPage) * e.countPerPage, v = u + e.countPerPage - 1 <= l.value - 1 ? u + e.countPerPage - 1 : l.value - 1;
      return pv(u + 1, v + 1);
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
    return Y(Ft, i), Y(Tr, l), Y(Zn, a), Y(Ut, c), Y(zt, d), {
      lastPageIndex: l,
      activePageNum: a,
      classNameValue: d,
      paginatedItems: s
    };
  }
});
function hv(e, t, n, a, o, s) {
  return T(), M("div", {
    class: ve(["h_pagination_area", e.classNameValue])
  }, [
    U(e.$slots, "default", {
      lastPageIndex: e.lastPageIndex,
      paginatedItems: e.paginatedItems
    })
  ], 2);
}
const Pm = /* @__PURE__ */ Z(mv, [["render", hv]]), gv = N({
  name: "HPaginationFirstButton",
  setup() {
    const e = S(Ft, () => {
    }), t = S(
      Ut,
      () => {
      }
    ), n = () => {
      e(1), t();
    }, a = S(
      zt,
      ce(() => "")
    );
    return {
      clickPaginationButton: n,
      classNameValue: a
    };
  }
});
function yv(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: ve([e.classNameValue, "h_btn_first"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    U(e.$slots, "default", {}, () => [
      t[1] || (t[1] = Fn(" << "))
    ])
  ], 2);
}
const Hm = /* @__PURE__ */ Z(gv, [["render", yv]]), Av = N({
  name: "HPaginationLastButton",
  setup() {
    const e = S(Ft, () => {
    }), t = S(
      Tr,
      ce(() => 0)
    ), n = S(
      Ut,
      () => {
      }
    ), a = () => {
      e(t.value), n();
    }, o = S(
      zt,
      ce(() => "")
    );
    return {
      clickPaginationButton: a,
      classNameValue: o
    };
  }
});
function bv(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: ve([e.classNameValue, "h_btn_last"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    U(e.$slots, "default", {}, () => [
      t[1] || (t[1] = Fn(" >> "))
    ])
  ], 2);
}
const Rm = /* @__PURE__ */ Z(Av, [["render", bv]]), _v = N({
  name: "HPaginationNextButton",
  setup() {
    const e = S(Ft, () => {
    }), t = S(Zn, g(0)), n = S(
      Ut,
      () => {
      }
    ), a = () => {
      e(t.value + 1), n();
    }, o = S(
      zt,
      ce(() => "")
    );
    return {
      clickPaginationButton: a,
      classNameValue: o
    };
  }
});
function Ev(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: ve([e.classNameValue, "h_btn_next"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    U(e.$slots, "default", {}, () => [
      t[1] || (t[1] = Fn(" > "))
    ])
  ], 2);
}
const Nm = /* @__PURE__ */ Z(_v, [["render", Ev]]), Sv = N({
  name: "HPaginationNumberButton",
  props: {
    pageIndex: {
      type: Number,
      required: !0
    }
  },
  emits: ["click-pagination-button"],
  setup(e) {
    const t = S(Ft, () => {
    }), n = S(Zn, g(0)), a = ce(
      () => e.pageIndex === n.value
    ), o = S(
      Ut,
      () => {
      }
    ), s = () => {
      t(e.pageIndex), o();
    }, r = S(
      zt,
      ce(() => "")
    );
    return {
      clickPaginationButton: s,
      isActive: a,
      classNameValue: r
    };
  }
});
function $v(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: ve([[{ is_active: e.isActive }, e.classNameValue], "h_btn_num"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    U(e.$slots, "default", { isActive: e.isActive })
  ], 2);
}
const Om = /* @__PURE__ */ Z(Sv, [["render", $v]]), Cv = N({
  name: "HPaginationPrevButton",
  emits: ["click-pagination-button"],
  setup() {
    const e = S(Ft, () => {
    }), t = S(Zn, g(0)), n = S(
      Ut,
      () => {
      }
    ), a = () => {
      e(t.value - 1), n();
    }, o = S(
      zt,
      ce(() => "")
    );
    return {
      clickPaginationButton: a,
      classNameValue: o
    };
  }
});
function wv(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: ve([e.classNameValue, "h_btn_prev"]),
    onClick: t[0] || (t[0] = (...r) => e.clickPaginationButton && e.clickPaginationButton(...r))
  }, [
    U(e.$slots, "default", {}, () => [
      t[1] || (t[1] = Fn(" < "))
    ])
  ], 2);
}
const xm = /* @__PURE__ */ Z(Cv, [["render", wv]]), Dv = Symbol("pageHeaderSpace"), Tv = Symbol("pageFooterSpace"), Lv = N({
  name: "HPrintHtmlBox",
  setup() {
    const e = g(null), t = g(null);
    Y(Dv, e), Y(Tv, t);
  }
}), kv = { id: "h-printable" };
function Iv(e, t, n, a, o, s) {
  return T(), M("div", kv, [
    U(e.$slots, "default")
  ]);
}
const Fm = /* @__PURE__ */ Z(Lv, [["render", Iv]]), Mv = N({
  name: "HPrintHtmlButton",
  setup() {
    return {
      clickPrintButton: () => {
        window.print();
      }
    };
  }
});
function Bv(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.clickPrintButton && e.clickPrintButton(...r))
  }, [
    U(e.$slots, "default")
  ]);
}
const Um = /* @__PURE__ */ Z(Mv, [["render", Bv]]), Lr = Symbol("selectedValue"), kr = Symbol(
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
), Pr = Symbol("calendarInput"), Hr = Symbol("calendarInputArea"), Kn = Symbol("calendarPosition"), Rr = Symbol("calendarArea"), Nr = Symbol("calendarMonthArea"), Or = Symbol("calendarYearArea"), Le = Symbol("calendarTypes"), xr = Symbol(
  "focusInDatePickerInput"
), Fr = Symbol(
  "focusOutDatePickerInput"
), Ur = Symbol("isDisabled"), no = Symbol("setStartDate"), ao = Symbol("setEndDate"), zr = Symbol("selectedRange"), Vr = Symbol("rangeType"), Pv = N({
  name: "HSingleDatePickerCalendar",
  setup() {
    return {
      calendarType: S(Le)
    };
  }
}), Hv = { class: "h_calendar_table" }, Rv = { class: "calendar_head" }, Nv = { class: "calendar_body" };
function Ov(e, t, n, a, o, s) {
  return T(), M("div", {
    class: ve(["h_calendar", e.calendarType])
  }, [
    oe("table", Hv, [
      t[0] || (t[0] = oe("caption", null, [
        oe("span", { class: "blind" }, "Dates")
      ], -1)),
      oe("thead", Rv, [
        U(e.$slots, "table_head")
      ]),
      oe("tbody", Nv, [
        U(e.$slots, "table_body")
      ])
    ])
  ], 2);
}
const zm = /* @__PURE__ */ Z(Pv, [["render", Ov]]);
var Yr = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.TYPE1 = "type1", e))(Yr || {}), nn = /* @__PURE__ */ ((e) => (e.START_DATE = "startDate", e.END_DATE = "endDate", e))(nn || {});
const xv = N({
  name: "HSingleDatePickerCalendarDateButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = S(Le), n = S(
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
            case nn.START_DATE:
              a(e.value);
              break;
            case nn.END_DATE:
              o(e.value);
              break;
          }
      },
      calendarType: t
    };
  }
});
function Fv(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_calendar_common", [e.calendarType]]),
    onClick: t[0] || (t[0] = (...r) => e.clickedCalendarDateButton && e.clickedCalendarDateButton(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const Vm = /* @__PURE__ */ Z(xv, [["render", Fv]]), oo = (e, t, n, a) => t + n > a ? {
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
function kt(e = 0) {
  const t = /* @__PURE__ */ new Date();
  t.setDate(t.getDate() + e);
  const n = t.getFullYear(), a = String(t.getMonth() + 1).padStart(2, "0"), o = String(t.getDate()).padStart(2, "0");
  return `${n}.${a}.${o}`;
}
const Uv = N({
  name: "HSingleDatePickerCalendarArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = S(Le), t = S(Kn), n = S(Rr), a = ce(() => {
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
function zv(e, t, n, a, o, s) {
  return e.isActive ? (T(), M("div", {
    key: 0,
    ref: "calendarArea",
    class: ve(["h_calendar_area", e.calendarType]),
    style: ke(e.calendarStyle)
  }, [
    U(e.$slots, "default")
  ], 6)) : Me("", !0);
}
const Ym = /* @__PURE__ */ Z(Uv, [["render", zv]]), Vv = N({
  name: "HSingleDatePickerCalendarMonthArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = S(Le), t = S(Kn), n = S(Nr), a = ce(() => {
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
function Yv(e, t, n, a, o, s) {
  return e.isActive ? (T(), M("div", {
    key: 0,
    ref: "calendarMonthArea",
    class: ve(["h_calendar_month_area", e.calendarType]),
    style: ke(e.calendarStyle)
  }, [
    U(e.$slots, "default")
  ], 6)) : Me("", !0);
}
const Wm = /* @__PURE__ */ Z(Vv, [["render", Yv]]), he = (e) => e.replace(/\./g, "-"), Wv = N({
  name: "HSingleDatePickerArea",
  props: {
    modelValue: {
      type: String,
      // 2023.10.10
      required: !1,
      default: () => kt()
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
    ), a = (H) => {
      if (n.value.length === 0)
        return !1;
      const V = he(H);
      return new Date(he(n.value[0])) <= new Date(V) && new Date(V) <= new Date(he(n.value[1]));
    }, o = (H) => {
      if (n.value.length === 0)
        return !1;
      const [V, F] = n.value[0].split("."), [J, E] = n.value[1].split("."), A = `${V}.${F}`, $ = `${J}.${E}`, R = he(H);
      return new Date(he(A)) <= new Date(R) && new Date(R) <= new Date(he($));
    }, s = (H) => {
      if (n.value.length === 0)
        return !1;
      const [V] = n.value[0].split("."), [F] = n.value[1].split("."), J = `${V}`, E = `${F}`, A = he(H);
      return new Date(he(J)) <= new Date(A) && new Date(A) <= new Date(he(E));
    }, r = (H) => {
      const V = e.disabledDates.includes(H), F = e.disabledDatesRange.some((J) => {
        const E = he(H), [A, $] = J.split("~");
        if (A.length === 0 && $.length > 0)
          return new Date(E) < new Date(he($));
        if (A.length > 0 && $.length === 0)
          return new Date(he(A)) < new Date(E);
        if (A.length > 0 && $.length > 0)
          return new Date(he(A)) < new Date(E) && new Date(E) < new Date(he($));
      });
      return V || F;
    }, l = (H) => e.disabledDatesRange.some((V) => {
      const [F, J] = V.split("~");
      if (F.length === 0 && J.length > 0)
        return new Date(he(H)) < new Date(he(`${J.split(".")[0]}.${J.split(".")[1]}`));
      if (F.length > 0 && J.length === 0)
        return new Date(he(`${F.split(".")[0]}.${F.split(".")[1]}`)) < new Date(he(H));
      if (F.length > 0 && J.length > 0)
        return new Date(he(`${F.split(".")[0]}.${F.split(".")[1]}`)) < new Date(he(H)) && new Date(he(H)) < new Date(he(`${J.split(".")[0]}.${J.split(".")[1]}`));
    }), i = (H) => e.disabledDatesRange.some((V) => {
      const [F, J] = V.split("~");
      if (F.length === 0 && J.length > 0)
        return new Date(he(H)).getFullYear() < new Date(he(`${J.split(".")[0]}`)).getFullYear();
      if (F.length > 0 && J.length === 0)
        return new Date(he(`${F.split(".")[0]}`)).getFullYear() < new Date(he(H)).getFullYear();
      if (F.length > 0 && J.length > 0)
        return new Date(he(`${F.split(".")[0]}`)).getFullYear() < new Date(he(H)).getFullYear() && new Date(he(H)).getFullYear() < new Date(he(`${J.split(".")[0]}`)).getFullYear();
    }), c = g({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      minusWidth: 0,
      clientWidth: 0,
      clientHeight: 0
    }), d = g(null), u = g(null), v = (H) => {
      if (!d.value)
        return;
      const { bottom: V, left: F, right: J, top: E, width: A } = d.value.getBoundingClientRect();
      c.value = {
        ...c.value,
        bottom: V,
        left: F,
        right: J,
        top: E,
        minusWidth: A
      };
    }, m = (H) => {
      c.value = {
        ...c.value,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      };
    }, p = (H) => {
      const V = H.target;
      if (!(V instanceof Element))
        return;
      const F = V.closest(".inp_datepicker");
      if (F) {
        F !== u.value && (se.value = !1, j.value = !1, q.value = !1, t("blur"));
        return;
      }
      V.closest(".h_calendar_area") || V.closest(".h_calendar_month_area") || V.closest(".h_calendar_year_area") || (se.value = !1, j.value = !1, q.value = !1, t("blur"));
    }, f = g("");
    e.modelValue && (f.value = e.modelValue);
    const L = () => {
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
    }, y = ce(() => e.rangeType), I = S(no, () => {
    }), D = S(ao, () => {
    }), b = (H) => {
      switch (y.value) {
        case nn.START_DATE:
          I(H);
          break;
        case nn.END_DATE:
          D(H);
          break;
      }
    }, B = async (H) => {
      if (H instanceof KeyboardEvent && H.key !== "Enter")
        return;
      const V = H.target;
      if (!(V instanceof HTMLInputElement))
        return;
      const F = V.value, J = (/* @__PURE__ */ new Date()).getFullYear() % 100;
      switch (F.length) {
        case 4:
          await (async () => {
            const E = F.toString();
            let A = parseInt(E.slice(0, 2), 10);
            A > J ? A += 1900 : A += 2e3;
            const $ = E.slice(2, 3).padStart(2, "0"), R = E.slice(3).padStart(2, "0");
            if (!Ue(`${A}.${$}.${R}`) || r(`${A}.${$}.${R}`)) {
              const _e = f.value;
              f.value = "", await me(), f.value = _e, await me(), b(_e);
              return;
            }
            W.value = A, te.value = Number($), f.value = "", await me(), f.value = `${A}.${$}.${R}`, await me(), b(`${A}.${$}.${R}`);
          })();
          break;
        case 5:
          await (async () => {
            const E = F.replace(/\./g, ""), A = J >= parseInt(E.slice(0, 2)) ? 2e3 + parseInt(E.slice(0, 2)) : 1900 + parseInt(E.slice(0, 2));
            let $ = "", R = "";
            if (E.length === 5 ? ($ = E.slice(2, 3).toString().padStart(2, "0"), R = E.slice(3)) : E.length === 4 && ($ = "0" + E.charAt(2), R = "0" + E.charAt(3)), !Ue(`${A}.${$}.${R}`) || r(`${A}.${$}.${R}`)) {
              const _e = f.value;
              f.value = "", await me(), f.value = _e, await me(), b(_e);
              return;
            }
            W.value = Number(A), te.value = Number($), f.value = "", await me(), f.value = `${A}.${$}.${R}`, await me(), b(`${A}.${$}.${R}`);
          })();
          break;
        case 6:
          await (async () => {
            let E = "", A = "", $ = "";
            if (F.includes(".")) {
              const R = F.replace(/\./g, "");
              E = J >= parseInt(R.slice(0, 2)) ? (2e3 + parseInt(R.slice(0, 2))).toString() : (1900 + parseInt(R.slice(0, 2))).toString(), A = R.slice(2, 3).toString().padStart(2, "0"), $ = R.slice(3).toString().padStart(2, "0");
            } else
              E = F.slice(0, 2), A = F.slice(2, 4).toString().padStart(2, "0"), $ = F.slice(4, 6).toString().padStart(2, "0"), Ue(`${E}.${A}.${$}`) || (E = `${E}${A}`, A = $.toString().split("")[0].padStart(2, "0"), $ = $.toString().split("")[1].padStart(2, "0"));
            if (!Ue(`${E}.${A}.${$}`) || r(`${E}.${A}.${$}`)) {
              const R = f.value;
              f.value = "", await me(), f.value = R, await me(), b(R);
              return;
            }
            W.value = Number(E), te.value = Number(A), f.value = "", await me(), f.value = `${E}.${A}.${$}`, await me(), b(`${E}.${A}.${$}`);
          })();
          break;
        case 7:
          await (async () => {
            let E = "", A = "", $ = "";
            if (F.includes(".")) {
              const R = F.replace(/\./g, "");
              E = J >= parseInt(R.slice(0, 2)) ? (2e3 + parseInt(R.slice(0, 2))).toString() : (1900 + parseInt(R.slice(0, 2))).toString(), A = R.slice(2, 4).padStart(2, "0"), $ = R.slice(4, 6).padStart(2, "0"), Ue(`${E}.${A}.${$}`) || (E = `${E.slice(2)}${A}`, A = `${$.split("")[0].padStart(2, "0")}`, $ = `${$.split("")[1].padStart(2, "0")}`);
            } else
              E = F.slice(0, 4), A = F.slice(4, 5).toString().padStart(2, "0"), $ = F.slice(5).toString().padStart(2, "0");
            if (!Ue(`${E}.${A}.${$}`) || r(`${E}.${A}.${$}`)) {
              const R = f.value;
              f.value = "", await me(), f.value = R, await me(), b(R);
              return;
            }
            W.value = Number(E), te.value = Number(A), f.value = "", await me(), f.value = `${E}.${A}.${$}`, await me(), b(`${E}.${A}.${$}`);
          })();
          break;
        case 8:
          await (async () => {
            let E = "", A = "", $ = "";
            if (F.includes(".")) {
              const R = F.replace(/\./g, "");
              R.length === 6 ? (E = J >= parseInt(R.slice(0, 2)) ? (2e3 + parseInt(
                R.slice(0, 2)
              )).toString() : (1900 + parseInt(
                R.slice(0, 2)
              )).toString(), A = R.slice(2, 4).padStart(2, "0"), $ = R.slice(4, 6).padStart(2, "0"), Ue(`${E}.${A}.${$}`) || (E = `${E.slice(2)}${A}`, A = `${$.split("")[0].padStart(2, "0")}`, $ = `${$.split("")[1].padStart(2, "0")}`)) : (E = R.slice(0, 4), A = R.slice(4, 5).padStart(2, "0"), $ = R.slice(5).padStart(2, "0"), Ue(`${E}.${A}.${$}`) || (A = $.split("")[0].padStart(2, "0"), $ = $.split("")[1].padStart(2, "0")));
            } else
              E = F.slice(0, 4), A = F.slice(4, 6), $ = F.slice(6, 8);
            if (!Ue(`${E}.${A}.${$}`) || r(`${E}.${A}.${$}`)) {
              const R = f.value;
              f.value = "", await me(), f.value = R, await me(), b(R);
              return;
            }
            W.value = Number(E), te.value = Number(A), f.value = "", await me(), f.value = `${E}.${A}.${$}`, await me(), b(`${E}.${A}.${$}`);
          })();
          break;
        case 9:
          await (async () => {
            let E = "", A = "", $ = "";
            if (F.includes(".")) {
              const R = F.replace(/\./g, "");
              if (E = R.slice(0, 4), A = R.slice(4, 5).padStart(2, "0"), $ = R.slice(5).padStart(2, "0"), !Ue(`${E}.${A}.${$}`)) {
                const [_e, ...He] = $.split("");
                A = _e.padStart(2, "0"), $ = He.join("").padStart(2, "0");
              }
            }
            if (!Ue(`${E}.${A}.${$}`) || r(`${E}.${A}.${$}`)) {
              const R = f.value;
              f.value = "", await me(), f.value = R, await me(), b(R);
              return;
            }
            W.value = Number(E), te.value = Number(A), f.value = "", await me(), f.value = `${E}.${A}.${$}`, await me(), b(`${E}.${A}.${$}`);
          })();
          break;
        case 10:
        default:
          await (async () => {
            if (!Ue(F) || r(F)) {
              const R = f.value;
              f.value = "", await me(), f.value = R, await me(), b(R);
              return;
            }
            const [E, A, $] = F.split(".");
            W.value = Number(E), te.value = Number(A), f.value = "", await me(), f.value = `${E}.${A}.${$}`, await me(), b(`${E}.${A}.${$}`);
          })();
          break;
      }
    }, W = g(
      Number((X = f.value) == null ? void 0 : X.split(".")[0]) || (/* @__PURE__ */ new Date()).getFullYear()
    ), te = g(
      Number((Te = f.value) == null ? void 0 : Te.split(".")[1]) || (/* @__PURE__ */ new Date()).getMonth() + 1
    ), z = (H) => {
      const V = te.value + H;
      V > 12 ? (te.value = 1, W.value += 1) : V < 1 ? (te.value = 12, W.value -= 1) : te.value = V;
    }, _ = g(W.value), P = (H) => {
      _.value += H;
    }, C = g(W.value), w = (H) => {
      x.value += H, Q.value += H;
    };
    Be(W, (H, V) => {
      _.value = H, C.value = H;
    });
    const j = g(!1);
    We(() => {
      window.addEventListener("click", p), window.addEventListener("scroll", v), window.addEventListener("resize", m), Array.isArray(e.scrollEventRefs) && e.scrollEventRefs.forEach((H) => {
        const V = document.querySelector(H);
        V instanceof HTMLElement && V.addEventListener("scroll", v);
      });
    }), pt(() => {
      window.removeEventListener("click", p), window.removeEventListener("scroll", v), window.removeEventListener("resize", m), Array.isArray(e.scrollEventRefs) && e.scrollEventRefs.forEach((H) => {
        const V = document.querySelector(H);
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
      const { bottom: H, left: V, right: F, top: J, width: E } = d.value.getBoundingClientRect();
      c.value = {
        bottom: H,
        left: V,
        right: F,
        top: J,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight,
        minusWidth: E
      };
    }, be = ce(() => {
      const [H, V] = kt().split("."), J = Array.from({ length: 12 }, (A, $) => $ + 1).map((A) => {
        var $, R, _e, He;
        return {
          year: String(_.value),
          month: String(A),
          isActive: W.value === _.value && te.value === A,
          inRange: o(
            `${String(_.value)}.${String(
              A
            ).padStart(2, "0")}`
          ),
          isDisabled: l(
            `${String(_.value)}.${String(
              A
            ).padStart(2, "0")}`
          ),
          isCurrentMonth: _.value === Number(H) && A === Number(V),
          isStartMonth: Number(($ = n.value[0]) == null ? void 0 : $.split(".")[0]) === _.value && Number((R = n.value[0]) == null ? void 0 : R.split(".")[1]) === A,
          isEndMonth: Number((_e = n.value[1]) == null ? void 0 : _e.split(".")[0]) === _.value && Number((He = n.value[1]) == null ? void 0 : He.split(".")[1]) === A
        };
      }), E = [];
      for (let A = 0; A < J.length; A += e.monthLength)
        E.push(J.slice(A, A + e.monthLength));
      return E;
    }), O = g(e.yearBeforeAfterLength * 2 + 1), x = g(
      C.value - e.yearBeforeAfterLength
    ), Q = g(
      C.value + e.yearBeforeAfterLength
    ), K = ce(() => {
      const [H] = kt().split("."), V = [];
      for (let E = x.value; E <= Q.value; E++)
        V.push(E);
      const F = V.map((E) => {
        var A, $;
        return {
          year: String(E),
          isActive: W.value === E,
          inRange: s(String(E)),
          // Todo
          isDisabled: i(String(E)),
          isCurrentYear: E === Number(H),
          isStartYear: Number((A = n.value[0]) == null ? void 0 : A.split(".")[0]) === E,
          isEndYear: Number(($ = n.value[1]) == null ? void 0 : $.split(".")[0]) === E
        };
      }), J = [];
      for (let E = 0; E < F.length; E += e.yearLength)
        J.push(F.slice(E, E + e.yearLength));
      return J;
    }), k = (H, V) => {
      var gt, je, Je, $t, Ct, wt, Dt;
      const [F, J, E] = kt().split("."), [A, $, R] = ((gt = f.value) == null ? void 0 : gt.split(".")) || [null, null, null], _e = Number(A) === H && Number($) === V, He = new Date(H, V, 0).getDate(), ht = [];
      let lt = Array(7).fill(null);
      for (let De = 1; De <= He; De++) {
        const it = new Date(H, V - 1, De).getDay();
        lt[it] = {
          year: String(H),
          month: String(V).padStart(2, "0"),
          date: String(De),
          isActive: _e && Number(R) === De,
          inRange: a(
            `${String(H)}.${String(V).padStart(
              2,
              "0"
            )}.${String(De).padStart(2, "0")}`
          ),
          isDisabled: r(
            `${String(H)}.${String(V).padStart(
              2,
              "0"
            )}.${String(De).padStart(2, "0")}`
          ),
          isCurrentDate: Number(F) === H && Number(J) === V && Number(E) === De,
          isStartDate: Number((je = n.value[0]) == null ? void 0 : je.split(".")[0]) === H && Number((Je = n.value[0]) == null ? void 0 : Je.split(".")[1]) === V && Number(($t = n.value[0]) == null ? void 0 : $t.split(".")[2]) === De,
          isEndDate: Number((Ct = n.value[1]) == null ? void 0 : Ct.split(".")[0]) === H && Number((wt = n.value[1]) == null ? void 0 : wt.split(".")[1]) === V && Number((Dt = n.value[1]) == null ? void 0 : Dt.split(".")[2]) === De
        }, (it === 6 || De === He) && (ht.push(lt), lt = Array(7).fill(null));
      }
      return ht;
    }, ne = ce(() => k(W.value, te.value)), ee = (H) => {
      f.value = H || "", j.value = !1, q.value = !1, se.value = !1, t("update:modelValue", f.value);
    }, ae = (H) => {
      const [V, F] = H.split(".");
      W.value = Number(V), te.value = Number(F), q.value = !1, se.value = !1, j.value = !0;
    }, ie = (H) => {
      W.value = Number(H), se.value = !1, q.value = !0, j.value = !1;
    }, fe = g(null), Ee = g(null), ye = g(null), G = ce(() => e.isDisabled);
    return Y(Lr, f), Y(kr, ue), Y(Xa, ee), Y(Za, z), Y(Ka, w), Y(Ja, P), Y(eo, O), Y(to, de), Y(Ir, le), Y(Mr, ae), Y(Br, ie), Y(Pr, u), Y(Hr, d), Y(Kn, c), Y(Rr, fe), Y(Nr, Ee), Y(Or, ye), Y(Le, e.type), Y(xr, L), Y(Fr, h), Y(Ur, G), Y(Vr, y), {
      isActiveCalendar: j,
      monthDates: ne,
      nowYear: W,
      nowMonth: te,
      months: be,
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
function jv(e, t, n, a, o, s) {
  return T(), M("div", {
    class: ve(["h_single_datepicker_area", e.type])
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
const jm = /* @__PURE__ */ Z(Wv, [["render", jv]]), Qv = N({
  name: "HSingleDatePickerCalendarMonth",
  setup() {
    return {
      calendarType: S(Le)
    };
  }
}), Gv = { class: "h_calendar_month_table" };
function qv(e, t, n, a, o, s) {
  return T(), M("div", {
    class: ve(["h_calendar_month", e.calendarType])
  }, [
    oe("table", Gv, [
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
const Qm = /* @__PURE__ */ Z(Qv, [["render", qv]]), Xv = N({
  name: "HSingleDatePickerMonthButton",
  setup() {
    const e = S(Le);
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
function Zv(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_month", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.setIsActiveMonthCalendar && e.setIsActiveMonthCalendar(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const Gm = /* @__PURE__ */ Z(Xv, [["render", Zv]]), Kv = N({
  name: "HSingleDatePickerCalendarMonthButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = S(Le), n = S(
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
function Jv(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_calendar_common", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.clickedNowMonthButton && e.clickedNowMonthButton(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const qm = /* @__PURE__ */ Z(Kv, [["render", Jv]]), ef = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdSxCQMhFABQFQS73Ai3QWa4USytQkbIBukUG0dJRsgIN4KlWEjUIuRyen4t8kH8IE8E//8I/SOMMZPW+pJy3IO898+YnuO6guAPWkMISxOWkBBixSMoneERVIUtVIQQtINQtIE96AN7UYYjKAVxzk1xP+VbMLaMMYsAkZ8qpZwJIY+YzhG/KKUL59w24QjefEcP3hUAFBdLDoKrRd7Ch211hJuNXMOg0VHC4GH1jWNZ3lBPJKyUuqf8DUy8w9O6XZwQAAAAAElFTkSuQmCC", tf = N({
  name: "IconArrowLeft",
  setup() {
    return {
      ArrowLeftImage: ef
    };
  }
}), nf = ["src"];
function af(e, t, n, a, o, s) {
  return T(), M("span", null, [
    oe("img", {
      src: e.ArrowLeftImage,
      alt: "왼쪽 화살표"
    }, null, 8, nf)
  ]);
}
const ro = /* @__PURE__ */ Z(tf, [["render", af]]), of = N({
  name: "HSingleDatePickerMonthPrevButton",
  components: {
    IconArrowLeft: ro
  },
  setup() {
    const e = S(Ja, (n) => {
    }), t = S(Le);
    return {
      setYearForMonthCalendar: e,
      calendarType: t
    };
  }
});
function sf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-left");
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_calendar_month_prev", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForMonthCalendar(-1))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 이전 연도 ", -1))
  ], 2);
}
const Xm = /* @__PURE__ */ Z(of, [["render", sf]]), rf = N({
  name: "HSingleDatePickerCalendarYear",
  setup() {
    return {
      calendarType: S(Le)
    };
  }
}), lf = { class: "h_calendar_year_table" };
function cf(e, t, n, a, o, s) {
  return T(), M("div", {
    class: ve(["h_calendar_year", e.calendarType])
  }, [
    U(e.$slots, "default"),
    oe("table", lf, [
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
const Zm = /* @__PURE__ */ Z(rf, [["render", cf]]), uf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBpdS9FcIgEADgHEVqR8gIruAGjiAllRnFCh40uIEjZIWMkBHseQ88LfKi8nOnFBx3730cDdd1/yzn3NkYM3CMsNaOKaWLEGLiYNH3/RUAZjwPHAzPzXu/CyFM2HmP6RJjPCillib8BcM24WD4LFAx5G6j4Cyk4CJs4Sqs4SYsYUGBUso7hnlbI3XET+Cx24n11BxqdiyhKqyhImyhLKSgL0hFb5CDVshFL4jD6ojxxkHr0lqP3PH4AAMhEevOZzQ6AAAAAElFTkSuQmCC", df = N({
  name: "IconArrowRight",
  setup() {
    return {
      ArrowRightImage: uf
    };
  }
}), vf = ["src"];
function ff(e, t, n, a, o, s) {
  return T(), M("span", null, [
    oe("img", {
      src: e.ArrowRightImage,
      alt: "오른쪽 화살표"
    }, null, 8, vf)
  ]);
}
const lo = /* @__PURE__ */ Z(df, [["render", ff]]), pf = N({
  name: "HSingleDatePickerNextButton",
  components: {
    IconArrowRight: lo
  },
  setup() {
    const e = S(Za, (n) => {
    }), t = S(Le);
    return {
      setNowMonth: e,
      calendarType: t
    };
  }
});
function mf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-right");
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_calendar_next", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setNowMonth(1))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 다음 ", -1))
  ], 2);
}
const Km = /* @__PURE__ */ Z(pf, [["render", mf]]), hf = N({
  name: "HSingleDatePickerPrevButton",
  components: {
    IconArrowLeft: ro
  },
  setup() {
    const e = S(Za, (n) => {
    }), t = S(Le);
    return {
      setNowMonth: e,
      calendarType: t
    };
  }
});
function gf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-left");
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_calendar_prev", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setNowMonth(-1))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 이전 ", -1))
  ], 2);
}
const Jm = /* @__PURE__ */ Z(hf, [["render", gf]]), yf = N({
  name: "HSingleDatePickerCalendarYearArea",
  props: {
    isActive: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const e = S(Le), t = S(Kn), n = S(Or), a = ce(() => {
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
  return e.isActive ? (T(), M("div", {
    key: 0,
    ref: "calendarYearArea",
    class: ve(["h_calendar_year_area", e.calendarType]),
    style: ke(e.calendarStyle)
  }, [
    U(e.$slots, "default")
  ], 6)) : Me("", !0);
}
const eh = /* @__PURE__ */ Z(yf, [["render", Af]]), bf = N({
  name: "HSingleDatePickerYearButton",
  setup() {
    const e = S(Le);
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
function _f(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_year", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.setIsActiveYearCalendar && e.setIsActiveYearCalendar(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const th = /* @__PURE__ */ Z(bf, [["render", _f]]), Ef = N({
  name: "HSingleDatePickerYearNextButton",
  components: {
    IconArrowRight: lo
  },
  setup() {
    const e = S(
      Ka,
      (a) => {
      }
    ), t = S(eo, g(0)), n = S(Le);
    return {
      setYearForYearCalendar: e,
      yearsArrLength: t,
      calendarType: n
    };
  }
});
function Sf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-right");
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_calendar_year_next", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForYearCalendar(e.yearsArrLength))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 다음 연도 ", -1))
  ], 2);
}
const nh = /* @__PURE__ */ Z(Ef, [["render", Sf]]), $f = N({
  name: "HSingleDatePickerCalendarYearButton",
  props: {
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = S(Le), n = S(
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
function Cf(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_calendar_common", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.clickedYearButton && e.clickedYearButton(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const ah = /* @__PURE__ */ Z($f, [["render", Cf]]), Wr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB7ZnRbYNADIZ9iAceM8J1g3aDdJL2CcRTlQ3aEfqE4KXqBO0G7QbpBmUEFgDii4gURbkAZ0cOkj/pMNKPJf9wdzIAoCiKokhRluW/GxAINd8RAw0LNCwQiWDhGJ9QVdULhue+71fgxw6xhjDsWL4xpsEa3rIs+z6ne6cQJr1iuFT8uUJCseCvw4UPHPMMwFA83oGHtm2bU7HrulUcx9vh/A5mMiX/6BrvjRxdxGma/vk03EH2Mc/zGgKYkn+4xsfiFzF1G62BRg1ESAZwjj4mSdJAINR8B8lA6Nznyncsfg2oAWnUgDRqQBoWA9h633NrUyEbwGbrC1veLRbzw6XNgeMJrN0Bi1kzapMhG8B+ZoPvDL94uuHSWMBH3LsBwozVobuQNGpAGjUgjRqQRg1IM/pZhfoD4tp4DWCz9RlF0RMw/ISggh3ru08zlxKLorBwA3B8AFMU5UbZAevho9IdayVBAAAAAElFTkSuQmCC", wf = N({
  name: "IconCalendar",
  setup() {
    return {
      CalendarImage: Wr
    };
  }
}), Df = ["src"];
function Tf(e, t, n, a, o, s) {
  return T(), M("span", null, [
    oe("img", {
      src: e.CalendarImage,
      alt: "달력 이미지"
    }, null, 8, Df)
  ]);
}
const Lf = /* @__PURE__ */ Z(wf, [["render", Tf]]), kf = N({
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
      Lr,
      g(null)
    ), t = S(
      Xa,
      () => {
      }
    );
    Be(e, (u) => {
      t(u);
    });
    const n = S(kr, () => {
    }), a = S(Hr), o = S(Pr), s = S(Le), r = S(xr), l = S(Fr), i = S(Ur), c = g(Wr), d = Qt();
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
}), If = ["src"], Mf = ["id", "value", "disabled", "placeholder", "name"];
function Bf(e, t, n, a, o, s) {
  const r = ot("icon-calendar");
  return T(), M("div", {
    ref: "calendarInputArea",
    class: ve(["h_inp_datepicker_area", e.calendarType])
  }, [
    e.reactiveImage ? (T(), M("img", {
      key: 0,
      class: "icon_calendar",
      src: e.imageSrc,
      alt: "달력 이미지"
    }, null, 8, If)) : (T(), M(is, { key: 1 }, [
      e.calendarType === "type1" ? (T(), Ve(r, { key: 0 })) : Me("", !0)
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
    }, null, 40, Mf)
  ], 2);
}
const oh = /* @__PURE__ */ Z(kf, [["render", Bf]]), Pf = N({
  name: "HSingleDatePickerMonthNextButton",
  components: {
    IconArrowRight: lo
  },
  setup() {
    const e = S(Ja, (n) => {
    }), t = S(Le);
    return {
      setYearForMonthCalendar: e,
      calendarType: t
    };
  }
});
function Hf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-right");
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_calendar_month_next", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForMonthCalendar(1))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 다음 연도 ", -1))
  ], 2);
}
const sh = /* @__PURE__ */ Z(Pf, [["render", Hf]]), Rf = N({
  name: "HSingleDatePickerMonthYearButton",
  setup() {
    const e = S(Le);
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
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_year_in_month", e.calendarType]),
    onClick: t[0] || (t[0] = (...r) => e.setIsActiveYearCalendar && e.setIsActiveYearCalendar(...r))
  }, [
    U(e.$slots, "default")
  ], 2);
}
const rh = /* @__PURE__ */ Z(Rf, [["render", Nf]]), Of = N({
  name: "HSingleDatePickerRangeArea",
  props: {
    modelValue: {
      type: Array,
      default: () => [
        kt(),
        kt()
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
}), xf = { class: "h_single_datepicker_range_area" };
function Ff(e, t, n, a, o, s) {
  return T(), M("div", xf, [
    U(e.$slots, "default", {
      startDate: e.startDate,
      endDate: e.endDate,
      startDisableDatesRange: e.startDisableDatesRange,
      endDisabledDatesRange: e.endDisabledDatesRange
    })
  ]);
}
const lh = /* @__PURE__ */ Z(Of, [["render", Ff]]), Uf = N({
  name: "HSingleDatePickerYearPrevButton",
  components: {
    IconArrowLeft: ro
  },
  setup() {
    const e = S(
      Ka,
      (a) => {
      }
    ), t = S(eo, g(0)), n = S(Le);
    return {
      setYearForYearCalendar: e,
      yearsArrLength: t,
      calendarType: n
    };
  }
});
function zf(e, t, n, a, o, s) {
  const r = ot("icon-arrow-left");
  return T(), M("button", {
    type: "button",
    class: ve(["h_btn_calendar_year_prev", e.calendarType]),
    onClick: t[0] || (t[0] = (l) => e.setYearForYearCalendar(-1 * e.yearsArrLength))
  }, [
    U(e.$slots, "default", {}, () => [
      e.calendarType === "type1" ? (T(), Ve(r, { key: 0 })) : Me("", !0)
    ]),
    t[1] || (t[1] = oe("span", { class: "blind" }, " 이전 연도 ", -1))
  ], 2);
}
const ih = /* @__PURE__ */ Z(Uf, [["render", zf]]), jr = Symbol(
  "inputFileButtonClick"
), Qr = Symbol("deleteFile"), Gr = Symbol("fileName"), qr = Symbol("fileSize"), io = Symbol("file"), Jn = Symbol("isError"), Vf = Symbol("imageEl"), Yf = Symbol("signImage"), Wf = Symbol("useDirectImage"), jf = Symbol("cancelDirectImage"), Qf = Symbol("realValue"), Gf = N({
  name: "HSingleFileUploadedFileArea",
  setup() {
    const e = S(io, g(null)), t = S(Jn, g(!1));
    return {
      file: e,
      isError: t
    };
  }
}), qf = {
  key: 0,
  class: "h_uploaded_file"
};
function Xf(e, t, n, a, o, s) {
  return e.file && !e.isError ? (T(), M("div", qf, [
    U(e.$slots, "default")
  ])) : Me("", !0);
}
const ch = /* @__PURE__ */ Z(Gf, [["render", Xf]]), Zf = N({
  name: "HSingleFileUploadedFileDeleteButton",
  setup() {
    return {
      deleteFile: S(Qr, () => {
      })
    };
  }
});
function Kf(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.deleteFile && e.deleteFile(...r))
  }, [
    U(e.$slots, "default")
  ]);
}
const uh = /* @__PURE__ */ Z(Zf, [["render", Kf]]), Jf = N({
  name: "HSingleFileUploadTitle"
}), ep = { class: "h-single-file-upload-tit" };
function tp(e, t, n, a, o, s) {
  return T(), M("em", ep, [
    U(e.$slots, "default")
  ]);
}
const dh = /* @__PURE__ */ Z(Jf, [["render", tp]]), np = N({
  name: "HSingleFileUploadedFileName",
  setup() {
    return {
      fileName: S(
        Gr,
        ce(() => "")
      )
    };
  }
}), ap = { class: "h_file_name" };
function op(e, t, n, a, o, s) {
  return T(), M("span", ap, Sn(e.fileName), 1);
}
const vh = /* @__PURE__ */ Z(np, [["render", op]]), sp = () => ({
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
}), rp = (e) => {
  let t = "";
  const n = new Uint8Array(e), a = n.byteLength;
  for (let o = 0; o < a; o++)
    t += String.fromCharCode(n[o]);
  return window.btoa(t);
}, lp = (e) => new Promise((t, n) => {
  const a = new FileReader();
  a.readAsDataURL(e), a.onload = () => {
    const o = a.result;
    if (!o) {
      t("");
      return;
    }
    o instanceof ArrayBuffer ? t(rp(o)) : t(o);
  }, a.onerror = (o) => {
    n(o);
  };
});
function ip() {
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
const cp = N({
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
    const { validStatus: n, validExtensions: a, modelValue: o } = Rn(e), s = g(o.value || null), r = g(!1), l = g(!1), i = g(!1);
    Y(Qf, o);
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
      v.value && (v.value.value = "", v.value.files = null), s.value = null, r.value = !1, i.value = !1, b.value = null, f.value = "", t("update:modelValue", s.value);
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
          s.value = null, r.value = !1, i.value = !0, b.value = null, f.value = "", t("exceed-size"), t("update:modelValue", s.value);
          return;
        }
        e.image && W(s.value), t("update:modelValue", s.value);
      } else
        s.value = null, r.value = !1, i.value = !0, b.value = null, f.value = "", t("no-valid-extensions");
    }, f = g(""), { promiseInstance: L, resolveFunc: h, rejectFunc: y } = ip(), I = async () => {
      t("use-direct-image", {
        signImage: f.value,
        resolveFunc: h,
        rejectFunc: y
      }), await L() !== "false" && (b.value = f.value || null, b.value === null ? (s.value = null, v.value && (v.value.value = "", v.value.files = null)) : (s.value = lp(f.value), s.value.size > e.limitSize ? (s.value = null, r.value = !1, i.value = !0, b.value = null, f.value = "", t("exceed-size"), v.value && (v.value.value = "", v.value.files = null)) : (r.value = !0, i.value = !1)), t("update:modelValue", s.value));
    }, D = async () => {
      !b.value && f.value || b.value !== f.value ? (t("cancel-direct-image", {
        signImage: f.value,
        resolveFunc: h,
        rejectFunc: y
      }), await L() === "true" && (f.value = b.value || "")) : (f.value = b.value || "", t("cancel-direct-image"));
    };
    Y(Yf, f), Y(Wf, I), Y(jf, D);
    const b = g(e.initImage || null);
    Be(
      () => e.initImage,
      (C) => {
        C && (b.value = C, f.value = C);
      },
      {
        immediate: !0
      }
    );
    const { arrayBufferToBase64: B } = sp(), W = (C) => {
      const w = new FileReader();
      w.onload = (j) => {
        const q = j.target;
        if (!q || !(q instanceof FileReader) || !q.result)
          return;
        const le = q.result;
        le instanceof ArrayBuffer ? b.value = B(le) : b.value = le, f.value = b.value;
      }, w.readAsDataURL(C);
    };
    Y(Vf, b);
    const te = (C) => {
      var q;
      const w = C.target;
      if (!w || !gl(w))
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
}), up = ["accept"];
function dp(e, t, n, a, o, s) {
  return T(), M("div", {
    class: ve(["h_upload_area", { is_active: e.isActive, is_hover: e.isHover, is_error: e.isError }]),
    onDragover: t[1] || (t[1] = qt((...r) => e.fileDragOver && e.fileDragOver(...r), ["prevent"])),
    onDragleave: t[2] || (t[2] = (...r) => e.fileDragLeave && e.fileDragLeave(...r)),
    onDrop: t[3] || (t[3] = qt((...r) => e.fileDrop && e.fileDrop(...r), ["prevent"]))
  }, [
    oe("input", {
      ref: "fileInput",
      type: "file",
      hidden: "",
      accept: e.validExtensions.join(","),
      name: "fileUpload",
      onInput: t[0] || (t[0] = (...r) => e.fileAdded && e.fileAdded(...r))
    }, null, 40, up),
    U(e.$slots, "default", {
      isActive: e.isActive,
      isHover: e.isHover,
      isError: e.isError
    })
  ], 34);
}
const fh = /* @__PURE__ */ Z(cp, [["render", dp]]), vp = N({
  name: "HSingleFileUploadedFileSize",
  setup() {
    return {
      fileSize: S(
        qr,
        ce(() => "")
      )
    };
  }
}), fp = { class: "h_file_size" };
function pp(e, t, n, a, o, s) {
  return T(), M("span", fp, Sn(e.fileSize), 1);
}
const ph = /* @__PURE__ */ Z(vp, [["render", pp]]), mp = N({
  name: "HSingleFileUploadErrorMsg",
  setup() {
    return {
      isError: S(Jn, g(!1))
    };
  }
}), hp = {
  key: 0,
  class: "h-uploade-error-cont"
};
function gp(e, t, n, a, o, s) {
  return e.isError ? (T(), M("p", hp, [
    U(e.$slots, "default")
  ])) : Me("", !0);
}
const mh = /* @__PURE__ */ Z(mp, [["render", gp]]), yp = N({
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
function bp(e, t, n, a, o, s) {
  return !e.file && !e.isError ? (T(), M("p", Ap, [
    U(e.$slots, "default")
  ])) : Me("", !0);
}
const hh = /* @__PURE__ */ Z(yp, [["render", bp]]), _p = N({
  name: "HSingleFileUploadedFileAddButton",
  setup() {
    return {
      inputFileButtonClick: S(jr, () => {
      })
    };
  }
});
function Ep(e, t, n, a, o, s) {
  return T(), M("button", {
    type: "button",
    onClick: t[0] || (t[0] = (...r) => e.inputFileButtonClick && e.inputFileButtonClick(...r))
  }, [
    U(e.$slots, "default")
  ]);
}
const gh = /* @__PURE__ */ Z(_p, [["render", Ep]]), Xr = Symbol(
  "sliderRangeContainer"
), Zr = Symbol("startRangeDrag"), Kr = Symbol("clickRangeSlider"), co = Symbol("leftThumbPosition"), uo = Symbol("rightThumbPosition"), Sp = N({
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
    We(() => {
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
function $p(e, t, n, a, o, s) {
  return T(), M("div", null, [
    U(e.$slots, "default", {
      leftThumbPosition: e.leftThumbPosition,
      rightThumbPosition: e.rightThumbPosition
    })
  ]);
}
const yh = /* @__PURE__ */ Z(Sp, [["render", $p]]), Cp = N({
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
function wp(e, t, n, a, o, s) {
  return T(), M("div", {
    ref: "sliderRangeContainer",
    class: "h-slider-range-container",
    onMousedown: t[0] || (t[0] = (...r) => e.startRangeDrag && e.startRangeDrag(...r)),
    onClick: t[1] || (t[1] = (...r) => e.clickRangeSlider && e.clickRangeSlider(...r))
  }, [
    U(e.$slots, "default")
  ], 544);
}
const Ah = /* @__PURE__ */ Z(Cp, [["render", wp]]), Dp = N({
  name: "HSliderRangeLeftThumb",
  setup() {
    return {
      leftThumbPosition: S(co, g(0))
    };
  }
});
function Tp(e, t, n, a, o, s) {
  return T(), M("div", {
    class: "h-slider-thumb left-thumb",
    style: ke({ left: e.leftThumbPosition + "px" })
  }, null, 4);
}
const bh = /* @__PURE__ */ Z(Dp, [["render", Tp]]), Lp = N({
  name: "HSliderRangeRightThumb",
  setup() {
    return {
      rightThumbPosition: S(uo, g(0))
    };
  }
});
function kp(e, t, n, a, o, s) {
  return T(), M("div", {
    class: "h-slider-thumb right-thumb",
    style: ke({ left: e.rightThumbPosition + "px" })
  }, null, 4);
}
const _h = /* @__PURE__ */ Z(Lp, [["render", kp]]), Ip = N({
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
}), Mp = { class: "h-slider-track" };
function Bp(e, t, n, a, o, s) {
  return T(), M("div", Mp, [
    oe("div", {
      class: "h-slider-track-range-stick",
      style: ke(e.rangeStickStyle)
    }, null, 4)
  ]);
}
const Eh = /* @__PURE__ */ Z(Ip, [["render", Bp]]), Jr = Symbol("thumbPosition"), el = Symbol("sliderContainer"), tl = Symbol("startDrag"), nl = Symbol("clickSlider"), Pp = N({
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
    We(() => {
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
}), Hp = { class: "slider-area" };
function Rp(e, t, n, a, o, s) {
  return T(), M("div", Hp, [
    U(e.$slots, "default", { thumbPosition: e.thumbPosition })
  ]);
}
const Sh = /* @__PURE__ */ Z(Pp, [["render", Rp]]), Np = N({
  name: "HSliderSingleTrack"
}), Op = { class: "h-slider-track" };
function xp(e, t, n, a, o, s) {
  return T(), M("div", Op);
}
const $h = /* @__PURE__ */ Z(Np, [["render", xp]]), Fp = N({
  name: "HSliderSingleThumb",
  setup() {
    return {
      thumbPosition: S(Jr, g(0))
    };
  }
});
function Up(e, t, n, a, o, s) {
  return T(), M("div", {
    class: "h-slider-thumb",
    style: ke({ left: e.thumbPosition + "px" })
  }, null, 4);
}
const Ch = /* @__PURE__ */ Z(Fp, [["render", Up]]), zp = N({
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
function Vp(e, t, n, a, o, s) {
  return T(), M("div", {
    ref: "sliderContainer",
    class: "h-slider-container",
    onMousedown: t[0] || (t[0] = (...r) => e.startDrag && e.startDrag(...r)),
    onClick: t[1] || (t[1] = (...r) => e.clickSlider && e.clickSlider(...r))
  }, [
    U(e.$slots, "default")
  ], 544);
}
const wh = /* @__PURE__ */ Z(zp, [["render", Vp]]), Yp = N({
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
}), Wp = { class: "table_tit_area" }, jp = { class: "blind" }, Qp = { class: "cont_area" }, Gp = { class: "blind" }, qp = { class: "blind" };
function Xp(e, t, n, a, o, s) {
  const r = ot("HScrollbars");
  return T(), M("div", {
    class: ve({ h_table_area: e.defaultStyle })
  }, [
    oe("div", Wp, [
      oe("table", null, [
        oe("caption", null, [
          oe("span", jp, Sn(e.caption), 1)
        ]),
        U(e.$slots, "colgroup"),
        oe("thead", null, [
          U(e.$slots, "head")
        ])
      ])
    ]),
    os(r, {
      ref: "contArea",
      style: ke({
        maxHeight: e.tableContentMaxHeight,
        height: e.isScroll ? e.tableContentHeight : "auto"
      })
    }, {
      default: Nn(() => [
        oe("div", Qp, [
          oe("table", null, [
            oe("caption", null, [
              oe("span", Gp, Sn(e.caption), 1)
            ]),
            U(e.$slots, "colgroup"),
            oe("thead", qp, [
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
const Dh = /* @__PURE__ */ Z(Yp, [["render", Xp]]), Zp = ["for"], Kp = ["id", "name", "checked", "value"], Th = /* @__PURE__ */ N({
  __name: "HInputRadio",
  props: {
    modelValue: {},
    name: {},
    data: {},
    labelClass: {},
    labelStyle: {},
    value: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = qa(), a = e, o = t, s = ce(() => !!(a.modelValue && Nt(a.modelValue, a.data)));
    function r() {
      o("update:modelValue", a.data);
    }
    return (l, i) => (T(), M("div", null, [
      oe("label", {
        for: ge(n),
        class: ve(l.labelClass),
        style: ke(l.labelStyle)
      }, [
        U(l.$slots, "default")
      ], 14, Zp),
      oe("input", {
        id: ge(n),
        type: "radio",
        name: l.name,
        checked: s.value,
        value: l.value,
        onChange: r,
        class: "h-input-radio"
      }, null, 40, Kp)
    ]));
  }
}), Jp = ["for"], em = ["id", "name", "checked", "value"], Lh = /* @__PURE__ */ N({
  __name: "HInputCheckbox",
  props: {
    modelValue: {},
    data: {},
    name: {},
    labelClass: {},
    labelStyle: {},
    value: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = qa(), a = e, o = t, s = ce(() => a.modelValue.some((l) => Nt(l, a.data))), r = () => {
      const l = s.value ? a.modelValue.filter((i) => !Nt(i, a.data)) : [...a.modelValue, a.data];
      o("update:modelValue", l);
    };
    return (l, i) => (T(), M("div", null, [
      oe("label", {
        for: ge(n),
        class: ve(l.labelClass),
        style: ke(l.labelStyle)
      }, [
        U(l.$slots, "default")
      ], 14, Jp),
      oe("input", {
        id: ge(n),
        type: "checkbox",
        name: l.name,
        checked: s.value,
        value: l.value,
        onChange: r,
        class: "h-input-checkbox"
      }, null, 40, em)
    ]));
  }
});
var et = /* @__PURE__ */ ((e) => (e.NORMAL_LEFT = "normal-left", e.CHEVRON_LEFT = "chevron-left", e.CHEVRON_RIGHT = "chevron-right", e.CHECK_SQUARE_EMPTY = "check-square-empty", e.CHECK_SQUARE_CHECKED = "check-square-checked", e.TIP = "tip", e.RADIO_CIRCLE_EMPTY = "radio-circle-empty", e.RADIO_CIRCLE_CHECKED = "radio-circle-checked", e))(et || {});
const kh = /* @__PURE__ */ N({
  __name: "HIcon",
  props: {
    name: {},
    width: { default: 24 },
    height: { default: 24 },
    fill: { default: "currentColor" }
  },
  setup(e) {
    const t = e, n = En();
    return Be(() => t.name, async (a) => {
      switch (a) {
        case et.NORMAL_LEFT:
          n.value = (await import("./IconNormalLeft-DlBQvCkt.js")).default;
          break;
        case et.CHEVRON_LEFT:
          n.value = (await import("./IconChevronLeft-8f74EtRF.js")).default;
          break;
        case et.CHEVRON_RIGHT:
          n.value = (await import("./IconChevronRight-Wfv6uvw0.js")).default;
          break;
        case et.CHECK_SQUARE_EMPTY:
          n.value = (await import("./IconCheckSquareEmpty-Cq4I7kuz.js")).default;
          break;
        case et.TIP:
          n.value = (await import("./IconTip-CkJRn-BR.js")).default;
          break;
        case et.RADIO_CIRCLE_EMPTY:
          n.value = (await import("./IconRadioCircleEmpty-oMqHuIZR.js")).default;
          break;
        case et.RADIO_CIRCLE_CHECKED:
          n.value = (await import("./IconRadioCircleChecked-BGN3NC6r.js")).default;
          break;
        case et.CHECK_SQUARE_CHECKED:
          n.value = (await import("./IconCheckSquareChecked-DiYc0jS0.js")).default;
          break;
        default:
          n.value = null;
      }
    }, { immediate: !0 }), (a, o) => n.value ? (T(), Ve(Ta(n.value), {
      key: 0,
      width: a.width,
      height: a.height,
      fill: a.fill
    }, null, 8, ["width", "height", "fill"])) : Me("", !0);
  }
});
export {
  yl as ButtonPositionType,
  dm as HCheckAuth,
  pm as HCheckFormDataChange,
  ym as HCounterInputText,
  Am as HCounterTextArea,
  rm as HDropdownArea,
  im as HDropdownButton,
  lm as HDropdownItem,
  cm as HDropdownItemButton,
  um as HDropdownList,
  bm as HFileUploadArea,
  _m as HFileUploadButton,
  Em as HFileUploadFileItem,
  Sm as HFileUploadFileList,
  $m as HHtmlRender,
  kh as HIcon,
  Lh as HInputCheckbox,
  Th as HInputRadio,
  Cm as HKanbanArea,
  wm as HKanbanCard,
  Dm as HKanbanLine,
  Tm as HKanbanLineInnerArea,
  Lm as HLoading,
  Pm as HPaginationArea,
  Hm as HPaginationFirstButton,
  Rm as HPaginationLastButton,
  Nm as HPaginationNextButton,
  Om as HPaginationNumberButton,
  xm as HPaginationPrevButton,
  Fm as HPrintHtmlBox,
  Um as HPrintHtmlButton,
  Zs as HScrollbars,
  Im as HSignatureArea,
  Mm as HSignatureClearButton,
  Bm as HSignatureUndoButton,
  jm as HSingleDatePickerArea,
  zm as HSingleDatePickerCalendar,
  Ym as HSingleDatePickerCalendarArea,
  Vm as HSingleDatePickerCalendarDateButton,
  Qm as HSingleDatePickerCalendarMonth,
  Wm as HSingleDatePickerCalendarMonthArea,
  qm as HSingleDatePickerCalendarMonthButton,
  Zm as HSingleDatePickerCalendarYear,
  eh as HSingleDatePickerCalendarYearArea,
  ah as HSingleDatePickerCalendarYearButton,
  oh as HSingleDatePickerInput,
  Gm as HSingleDatePickerMonthButton,
  sh as HSingleDatePickerMonthNextButton,
  Xm as HSingleDatePickerMonthPrevButton,
  rh as HSingleDatePickerMonthYearButton,
  Km as HSingleDatePickerNextButton,
  Jm as HSingleDatePickerPrevButton,
  lh as HSingleDatePickerRangeArea,
  th as HSingleDatePickerYearButton,
  nh as HSingleDatePickerYearNextButton,
  ih as HSingleDatePickerYearPrevButton,
  om as HSingleDragXArea,
  fh as HSingleFileUploadArea,
  mh as HSingleFileUploadErrorMsg,
  hh as HSingleFileUploadNoFileErrorMsg,
  dh as HSingleFileUploadTitle,
  gh as HSingleFileUploadedFileAddButton,
  ch as HSingleFileUploadedFileArea,
  uh as HSingleFileUploadedFileDeleteButton,
  vh as HSingleFileUploadedFileName,
  ph as HSingleFileUploadedFileSize,
  yh as HSliderRangeArea,
  Ah as HSliderRangeContainer,
  bh as HSliderRangeLeftThumb,
  _h as HSliderRangeRightThumb,
  Eh as HSliderRangeTrack,
  Sh as HSliderSingleArea,
  wh as HSliderSingleContainer,
  Ch as HSliderSingleThumb,
  $h as HSliderSingleTrack,
  Dh as HTableArea,
  mm as HTextCounter,
  hm as HTextCounterArea,
  gm as HTextCounterInner,
  km as HThreeDotLoading,
  et as IconType,
  nm as makeVueInstance,
  am as rippleDirective,
  vm as useCheckEqual,
  fm as useFormChangeCheck,
  sm as useHSingleDragXArea
};
