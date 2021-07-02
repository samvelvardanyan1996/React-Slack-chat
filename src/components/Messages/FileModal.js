import React, { useState } from 'react';
import mime from "mime-types";
import { Modal, Input, Button, Icon } from "semantic-ui-react";

const FileModal = ({ modal, closeModal, uploadFile }) => {
  const [autorized, setAutorized] = useState(["image/jpeg", "image/png"]);
  const [file, setFile] = useState("");

  const addFile = (event) => {
    const nameFile = event.target.files[0];
    if(nameFile){
      setFile(nameFile);
    }
  }

  const sendFile = () => {
    if(file !== null){
      if( isAutorized(file.name) ){
        const metadata = { contentType: mime.lookup(file.name) };
        uploadFile(file, metadata);
        closeModal();
        clearFile();
      }
    }
  }

  const isAutorized = (filename) => autorized.includes(mime.lookup(filename))

  const clearFile = () => {
    setFile(null);
  }
  
  return (
    <Modal basic open={modal} onClose={closeModal}>
      <Modal.Header>Select an Image</Modal.Header>
      <Modal.Content>
        <Input
          fluid
          label="File types jpg, png"
          name="file"
          type="file"
          onChange={addFile}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" inverted onClick={sendFile}>
          <Icon name="checkmark" /> Send
        </Button>
        <Button color="red" inverted onClick={closeModal}>
          <Icon name="remove" /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default FileModal;