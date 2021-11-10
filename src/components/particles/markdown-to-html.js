import React from "react";
import PropTypes from "prop-types";
import showdown from "showdown";

const converter = new showdown.Converter();

const MarkdownToHTML = ({ content }) => <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />;

MarkdownToHTML.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MarkdownToHTML;
