import React from "react";
import PropType from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";

import theme from "../styles/theme";
import Head from "../components/head";
import Header from "../components/header";
import Footer from "../components/footer";
import useSiteMetadata from "../hooks/useSiteMetadata";

// apply global css
import "../styles/normalize.css";
import "../styles/global.css";

const duration = 0.5;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration },
  },
};

/** ***************************************************************************
 *  Default Page Layout
 *
 * - uses ThemeProvider from emotion-theming
 * - uses MDXProvider to allow injection of shortcodes.
 *   See: https://mdxjs.com/blog/shortcodes
 *
 *************************************************************************** */

const DefaultLayout = ({ children, location }) => {
  const metaData = useSiteMetadata();

  return (
    <ThemeProvider theme={theme}>
      <Head metaData={metaData} location={location} />

      <Header location={location} />

      <AnimatePresence>
        <motion.main key={location.pathname} variants={variants} initial="initial" animate="enter" exit="exit">
          <MDXProvider>{children}</MDXProvider>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </ThemeProvider>
  );
};

DefaultLayout.propTypes = {
  children: PropType.shape().isRequired,
  location: PropType.shape().isRequired,
};

export default DefaultLayout;
