import { defineComponent as t, openBlock as l, createElementBlock as o, createElementVNode as i } from "vue";
const n = ["width", "height"], d = ["fill"], s = /* @__PURE__ */ t({
  __name: "IconNormalLeft",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    fill: { default: "#6752E6" }
  },
  setup(h) {
    return (e, r) => (l(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.width,
      height: e.height,
      viewBox: "0 0 24 24",
      fill: "none"
    }, [
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M11.2992 5.20702C11.5938 5.49041 11.6024 5.95852 11.3185 6.25256L6.48342 11.2606H19.2593C19.6684 11.2606 20 11.5916 20 12C20 12.4084 19.6684 12.7394 19.2593 12.7394H6.48342L11.3185 17.7474C11.6024 18.0415 11.5938 18.5096 11.2992 18.793C11.0046 19.0764 10.5357 19.0677 10.2518 18.7737L4.20739 12.5131C3.93087 12.2267 3.93087 11.7733 4.20739 11.4869L10.2518 5.22631C10.5357 4.93226 11.0046 4.92363 11.2992 5.20702Z",
        fill: e.fill
      }, null, 8, d)
    ], 8, n));
  }
});
export {
  s as default
};
