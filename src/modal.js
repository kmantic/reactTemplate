import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Modal2() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">

      <i onClick={toggleModal} className="fas fa-cog" />

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        
        <i className="far fa-times-circle hand" onClick={toggleModal} />
        <div>Settings</div>
      </Modal>
    </div>
  );
}
