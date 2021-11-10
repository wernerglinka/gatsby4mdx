/* global window */

import React from "react";
import PropType from "prop-types";
import allComponents from "../../components";
import SectionWrapper from "../../components/page-sections/section-wrapper";
import { PageContent } from "./styles";

/** ***************************************************************************
 *  Default Page Template
 *  This page layout renders sections of components that are defined in the
 *  frontmatter
 *************************************************************************** */

const StandardPage = ({ pageContext }) => {
  const pageSections = pageContext.fields.sections;

  return (
    <>
      <PageContent>
        {pageSections &&
          pageSections.map((section, i) => {
            const SectionComponent = allComponents[section.component];
            // allow to disable individual sections
            // this is meant to be a temporary measure to maintain settings
            // permanent removal is done by removing the section from the page frontmatter
            const enabled = !section.disabled;

            return (
              enabled && (
                <SectionWrapper key={`${section.sectionID}${i}`}>
                  <SectionComponent info={section} />
                </SectionWrapper>
              )
            );
          })}
      </PageContent>
    </>
  );
};

StandardPage.propTypes = {
  pageContext: PropType.shape().isRequired,
};

export default StandardPage;
