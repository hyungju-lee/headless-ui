import { defineComponent as t, createElementBlock as l, openBlock as o, createElementVNode as i } from "vue";
const n = ["width", "height"], h = ["fill"], s = /* @__PURE__ */ t({
  __name: "IconChevronRight",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    fill: { default: "#6752E6" }
  },
  setup(d) {
    return (e, r) => (o(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.width,
      height: e.height,
      viewBox: "0 0 20 20",
      fill: "none"
    }, [
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6.18036 3.29996C6.49793 2.96683 7.02541 2.95422 7.35854 3.27179L13.7835 9.3968C13.9485 9.55407 14.0419 9.77204 14.0419 9.99997C14.0419 10.2279 13.9485 10.4459 13.7835 10.6031L7.35855 16.7281C7.02543 17.0457 6.49794 17.0331 6.18037 16.7C5.86281 16.3669 5.87542 15.8394 6.20854 15.5218L12.0008 9.99997L6.20852 4.47813C5.8754 4.16056 5.86279 3.63308 6.18036 3.29996Z",
        fill: e.fill
      }, null, 8, h)
    ], 8, n));
  }
});
export {
  s as default
};
