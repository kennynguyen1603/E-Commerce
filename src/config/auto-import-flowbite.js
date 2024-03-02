const component = ["Button", "FloatingLabel", "Card"];

export default function autoImportComponentReactIcons() {
  return {
    "flowbite-react": component.reduce((pre, cur) => {
      pre.push([cur, cur]);
      return pre;
    }, []),
  };
}
