import { defineComponent as t, openBlock as l, createElementBlock as o, createElementVNode as i } from "vue";
const n = ["width", "height"], h = ["fill"], p = /* @__PURE__ */ t({
  __name: "IconCheckSquareEmpty",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    fill: { default: "#6752E6" }
  },
  setup(d) {
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
        d: "M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z",
        fill: e.fill
      }, null, 8, h)
    ], 8, n));
  }
});
export {
  p as default
};
