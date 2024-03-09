const component = [
  "FaFacebookF",
  "FaInstagram",
  "FaTwitter",
  "FaYoutube",
  "FaApple",
  "FaDeleteLeft"
];

export default function autoImportComponentReactIcons() {
  return {
    "react-icons/fa": component.reduce((pre, cur) => {
      pre.push([cur, cur]);
      return pre;
    }, []),
  };
}
