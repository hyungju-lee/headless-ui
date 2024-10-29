import { defineComponent as t, openBlock as l, createElementBlock as o, createElementVNode as i } from "vue";
const n = ["width", "height"], h = ["fill"], s = /* @__PURE__ */ t({
  __name: "IconCheckSquareChecked",
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
        d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM17.4176 8.96446C17.6211 8.77779 17.6348 8.4615 17.4481 8.25801C17.2614 8.05452 16.9451 8.04089 16.7416 8.22756L10.4345 14.0135L7.25762 11.0992C7.05413 10.9125 6.73784 10.9261 6.55117 11.1296C6.36449 11.3331 6.37813 11.6494 6.58162 11.8361L10.0965 15.0605C10.2877 15.2359 10.5813 15.2359 10.7725 15.0605L17.4176 8.96446Z",
        fill: e.fill
      }, null, 8, h)
    ], 8, n));
  }
});
export {
  s as default
};
