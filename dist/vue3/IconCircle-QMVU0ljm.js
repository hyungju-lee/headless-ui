import { defineComponent as t, createElementBlock as l, openBlock as i, createElementVNode as o } from "vue";
const n = ["width", "height"], h = ["fill"], d = /* @__PURE__ */ t({
  __name: "IconCircle",
  props: {
    width: { default: 17 },
    height: { default: 16 },
    fill: { default: "#6752E6" }
  },
  setup(r) {
    return (e, c) => (i(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.width,
      height: e.height,
      viewBox: "0 0 17 16",
      fill: "none"
    }, [
      o("circle", {
        cx: "8.5",
        cy: "8",
        r: "8",
        fill: e.fill
      }, null, 8, h)
    ], 8, n));
  }
});
export {
  d as default
};
