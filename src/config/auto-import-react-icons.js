const component = [
  "FaFacebookF",
  "FaInstagram",
  "FaTwitter",
  "FaYoutube",
  "FaApple",
];

export default function autoImportComponentFlowbite() {
  return {
    "react-icons/fa": component.reduce((pre, cur) => {
      pre.push([cur, cur]);
      return pre;
    }, []),
  };
}
