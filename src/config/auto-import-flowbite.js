const component = ["Button", "FloatingLabel", "Card"];

export default function autoImportComponentFlowbite() {
  return {
    "flowbite-react": component.reduce(
      (pre, cur) => {
        pre.push([cur, cur]);
        return pre;
      },
      [[]]
    ),
  };
}
