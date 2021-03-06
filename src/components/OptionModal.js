import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#model");

const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.HandleClearSelectedOption}
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.HandleClearSelectedOption}>Okay</button>
    </Modal>
  );
};

export default OptionModal;
