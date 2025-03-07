import { defineComponent as t, createElementBlock as l, openBlock as i, createElementVNode as o } from "vue";
const n = ["width", "height"], d = ["fill"], p = /* @__PURE__ */ t({
  __name: "IconRadioCircleEmpty",
  props: {
    width: { default: 24 },
    height: { default: 24 },
    fill: { default: "#6752E6" }
  },
  setup(h) {
    return (e, r) => (i(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.width,
      height: e.height,
      viewBox: "0 0 24 24",
      fill: "none"
    }, [
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
        fill: e.fill
      }, null, 8, d)
    ], 8, n));
  }
});
export {
  p as default
};
