import { useTranslations } from "next-intl";

const Navtext = () => {
  const Index = useTranslations("Index");
  const Nav = useTranslations("Nav");

  return [
    {
      title: Nav("about"),
      path: "#about",
    },
    {
      title: Nav("project"),
      path: "#projects",
    },
    {
      title: Nav("contact"),
      path: "#contact",
    },
  ];
};

export default Navtext;
