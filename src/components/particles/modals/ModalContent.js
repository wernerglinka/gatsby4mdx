import React from "react";
import PropTypes from "prop-types";

const ModalContent = ({ modalData: { title, subTitle, modalContent } }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <div dangerouslySetInnerHTML={{ __html: modalContent }} />
    </div>
  );
};

ModalContent.propTypes = {
  modalData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    modalContent: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalContent;
