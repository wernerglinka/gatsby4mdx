import { useStaticQuery, graphql } from "gatsby";

const useSiteNavigation = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "main-navigation/menu.json" }) {
        childrenMainNavigationJson {
          menu {
            icon
            label
            description
            url
            submenuID
            submenuClass
            isExternal
            isButton
            buttonClass
          }
        }
      }
    }
  `);

  const mainMenu = data.file.childrenMainNavigationJson[0].menu;

  return mainMenu;
};

export default useSiteNavigation;
