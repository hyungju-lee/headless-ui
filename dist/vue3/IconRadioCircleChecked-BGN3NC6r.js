import { defineComponent as t, openBlock as l, createElementBlock as i, createElementVNode as o } from "vue";
const n = ["width", "height"], d = ["fill"], s = /* @__PURE__ */ t({
  __name: "IconRadioCircleChecked",
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
      viewBox: "0 0 24 24",
      fill: "none"
    }, [
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.338 9.36844C17.5415 9.18177 17.5551 8.86548 17.3684 8.66199C17.1818 8.4585 16.8655 8.44487 16.662 8.63154L10.4595 14.3215L7.338 11.4579C7.13451 11.2713 6.81822 11.2849 6.63154 11.4884C6.44487 11.6919 6.4585 12.0082 6.66199 12.1948L10.1215 15.3684C10.3127 15.5438 10.6063 15.5438 10.7975 15.3684L17.338 9.36844Z",
        fill: e.fill
      }, null, 8, d)
    ], 8, n));
  }
});
export {
  s as default
};
