import React, { useEffect } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import {useDispatch} from "react-redux";

import firebase from "../../../../../firebase";
import { setChannelName, setChannelDetails } from "../../../../../redux/actions/channel";
import { handleSubmit } from "../../../../../utils/handleSubmit"; 

const Actions = ({ currentUser, channelName, setChannelName, setChannelDetails, channelDetails, closeModal }) => {
  useEffect(() => {
    return () => {
      removeListeners();
    }
  }, []);

  const removeListeners = () => {
    firebase.database().ref("channels").off();
  };
  const sendObj = {
    "channelName":       channelName,
    "setChannelName":    setChannelName,
    "setChannelDetails": setChannelDetails,
    "channelDetails":    channelDetails,
    "closeModal":        closeModal,
    "dispatch":          useDispatch(),
    "user":              currentUser,
    "channelsRefs":      firebase.database().ref("channels"),
    "key":               firebase.database().ref("channels").push().key
  };

  return (
    <Modal.Actions>
      <Button
        color="green"
        inverted
        onClick={(event) => handleSubmit(event, sendObj)}>
        <Icon name="checkmark" /> Add
      </Button>
      <Button color="red" inverted onClick={closeModal}>
        <Icon name="remove" /> Cancel
      </Button>
    </Modal.Actions>
  );
}

const mapStateToProps = ({ user, channel }) => ({
  currentUser:    user.currentUser,
  channelName:    channel.channelName,
  channelDetails: channel.channelDetails,
})

export default connect(mapStateToProps, { setChannelName, setChannelDetails })(Actions);