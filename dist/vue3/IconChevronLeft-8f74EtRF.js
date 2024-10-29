import { defineComponent as t, openBlock as l, createElementBlock as o, createElementVNode as i } from "vue";
const n = ["width", "height"], h = ["fill"], s = /* @__PURE__ */ t({
  __name: "IconChevronLeft",
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
      viewBox: "0 0 20 20",
      fill: "none"
    }, [
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M13.8113 3.29996C13.4938 2.96683 12.9663 2.95422 12.6332 3.27179L6.20816 9.3968C6.04319 9.55407 5.94983 9.77204 5.94983 9.99997C5.94983 10.2279 6.04319 10.4459 6.20816 10.6031L12.6331 16.7281C12.9663 17.0457 13.4938 17.0331 13.8113 16.7C14.1289 16.3669 14.1163 15.8394 13.7832 15.5218L7.99088 9.99997L13.7832 4.47813C14.1163 4.16056 14.1289 3.63308 13.8113 3.29996Z",
        fill: e.fill
      }, null, 8, h)
    ], 8, n));
  }
});
export {
  s as default
};
