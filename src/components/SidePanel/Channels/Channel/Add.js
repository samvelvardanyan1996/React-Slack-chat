import React from "react";
import { Modal } from "semantic-ui-react";

import Content from "./Modal/Content";
import Actions from "./Modal/Actions";

const AddChannel = ({ closeModal, modal }) => {
  return (
    <Modal basic open={modal} onClose={closeModal}>
      <Modal.Header>Add a Channel</Modal.Header>
      <Content />
      <Actions closeModal={closeModal} />
    </Modal>
  );
}


export default AddChannel;