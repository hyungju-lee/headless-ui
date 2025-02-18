import { defineComponent as t, createElementBlock as l, openBlock as o, createElementVNode as i } from "vue";
const n = ["width", "height"], d = ["fill"], f = /* @__PURE__ */ t({
  __name: "IconClose",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    fill: { default: "#6752E6" }
  },
  setup(h) {
    return (e, r) => (o(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.width,
      height: e.height,
      viewBox: "0 0 24 24",
      fill: "none"
    }, [
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L10.9405 12.0012L5.2197 17.722C4.92681 18.0149 4.92681 18.4897 5.2197 18.7826C5.51259 19.0755 5.98747 19.0755 6.28036 18.7826L12.0011 13.0618L17.7219 18.7826C18.0148 19.0755 18.4897 19.0755 18.7826 18.7826C19.0755 18.4897 19.0755 18.0148 18.7826 17.7219L13.0618 12.0012L18.7826 6.28036C19.0755 5.98747 19.0755 5.51259 18.7826 5.2197C18.4897 4.92681 18.0148 4.92681 17.7219 5.2197L12.0011 10.9405L6.28033 5.21967Z",
        fill: e.fill
      }, null, 8, d)
    ], 8, n));
  }
});
export {
  f as default
};
