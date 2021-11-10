# Gatsby 4 with MDX Initial Setup

4 Nov 2021

Installed Gatsby Starter https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/

## Added dev dependencies

```
"devDependencies": {
  "eslint": "^5.16.0",
  "eslint-config-airbnb": "^17.1.1",
  "eslint-config-prettier": "^6.11.0",
  "eslint-plugin-import": "^2.20.2",
  "eslint-plugin-jsx-a11y": "^6.2.3",
  "eslint-plugin-prettier": "^3.3.0",
  "eslint-plugin-react": "^7.20.0",
  "prettier": "^1.19.1"
  },
```

Installed Gatsby plugin https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/

All content, pages, images or data (in json files) are located in folder `/content`

Removed remark plugins and added in gatsby-config.js:
```
{
  resolve: "gatsby-source-filesystem",
  options: {
    path: `${__dirname}/content/data`,
  },
},
{
  resolve: "gatsby-source-filesystem",
  options: {
    path: `${__dirname}/content/pages`,
    name: "pages",
  },
},
```
For now images will be located in `/static/assets/image/`

**Gatsby Image can only be used with graphql. Since I am not using page level graphql queries, Gatsby Image is not an option.**

Installed

- https://www.gatsbyjs.com/plugins/gatsby-plugin-layout/
- https://www.gatsbyjs.com/plugins/gatsby-plugin-emotion/
- https://www.gatsbyjs.com/plugins/gatsby-transformer-json/


## Typography

https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/#self-host-google-fonts-with-fontsource
https://fontsource.org/

### In gatsby-browser.js
```
// header fonts
import "@fontsource/montserrat/500.css";
// body fonts
import "@fontsource/open-sans/300.css";
```
## Icons

https://react-icons.github.io/react-icons/


## Initial Components

### Banner
Banner has a title, sub tilte and prose as well as media content. The media may be either an image, a video or an animated svg ([Lottie](https://lottiefiles.com/)).

Installed:
- https://www.npmjs.com/package/lottie-web

Sources:
- https://www.freecodecamp.org/news/how-to-animate-react-apps/