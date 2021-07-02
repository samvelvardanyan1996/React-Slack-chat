import React, {useState} from "react";
import ShowChannels from "./Show";
import AddChannel from "./Channel/Add";

const Channels = () => {
  const [modal, setModal] = useState(false);
  const openModal  = () => setModal( true  );
  const closeModal = () => setModal( false );

  return (
    <React.Fragment>
      <ShowChannels openModal={openModal} />
      <AddChannel closeModal={closeModal} modal={modal} />
    </React.Fragment>
  );
}

export default Channels;