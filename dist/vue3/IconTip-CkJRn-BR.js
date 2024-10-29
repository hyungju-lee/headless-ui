import { defineComponent as t, openBlock as l, createElementBlock as i, createElementVNode as o } from "vue";
const n = ["width", "height"], d = ["fill"], p = /* @__PURE__ */ t({
  __name: "IconTip",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    fill: { default: "#6752E6" }
  },
  setup(h) {
    return (e, r) => (l(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.width,
      height: e.height,
      viewBox: "0 0 16 16",
      fill: "none"
    }, [
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667ZM7.3335 5.33337C7.3335 4.96518 7.63197 4.66671 8.00016 4.66671C8.36835 4.66671 8.66683 4.96518 8.66683 5.33337V8.44449C8.66683 8.81268 8.36835 9.11115 8.00016 9.11115C7.63197 9.11115 7.3335 8.81267 7.3335 8.44448V5.33337ZM8.66683 10.7778C8.66683 11.146 8.36835 11.4445 8.00016 11.4445C7.63197 11.4445 7.3335 11.146 7.3335 10.7778C7.3335 10.4096 7.63197 10.1112 8.00016 10.1112C8.36835 10.1112 8.66683 10.4096 8.66683 10.7778Z",
        fill: e.fill
      }, null, 8, d)
    ], 8, n));
  }
});
export {
  p as default
};
