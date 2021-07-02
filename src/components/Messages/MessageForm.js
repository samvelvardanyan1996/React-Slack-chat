import React from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";
import { Segment, Button, Input } from "semantic-ui-react";


import firebase from "../../firebase";

import FileModal from "./FileModal";
import { loadMessagesData } from "../../redux/actions/messages";
import { store } from "../../index";

class MessageForm extends React.Component {
  state = {
    storageRef: firebase.storage().ref(),
    uploadTask: null,
    uploadState: "",
    percentUploaded: 0,
    message: "",
    channel: this.props.activeChannel,
    user: this.props.currentUser,
    loading: false,
    errors: [],
    modal: false
  };

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createMessage = (fileUrl = null) => {
    const returnMessage = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.state.user.uid,
        name: this.state.user.displayName,
        avatar: this.state.user.photoURL
      }
    };
    if (fileUrl !== null) {
      returnMessage["Image"] = fileUrl;
    } else {
      returnMessage["content"] = this.state.message;
    }
    return returnMessage;
  };

  sendMessage = () => {
    console.log("messagesRef", this.props.messagesRef);
    const { message, channel } = this.state;

    let databaseMessagesRef = this.props.messagesRef;
    if(this.props.messagesRef.empty === "empty"){
      databaseMessagesRef = firebase.database().ref("messages");
    }

    console.log("databaseMessagesRef", databaseMessagesRef);

    if (message) {
      this.setState({ loading: true });
      firebase.database().ref("messages")
        .child(channel)
        .push()
        .set(this.createMessage())
        .then(() => {
          this.setState({ loading: false, message: "", errors: [] });
          store.dispatch(loadMessagesData(channel));
        })
        .catch(err => {
          console.error(err);
          this.setState({
            loading: false,
            errors: this.state.errors.concat(err)
          });
        });
        console.log("channel loadMessagesData", channel);
        store.dispatch(loadMessagesData(channel));
      } else {
      this.setState({
        errors: this.state.errors.concat({ message: "Add a message" })
      });
    }
  };

  uploadFile = (file, metadata) => {
    const pathToUpload = this.state.channel;
    const ref = firebase.database().ref("messages");
    const filePath = `chat/public/${uuidv4()}.jpg`;

    this.setState(
      {
        uploadState: "uploading",
        uploadTask: this.state.storageRef.child(filePath).put(file, metadata)
      },
      () => {
        this.state.uploadTask.on(
          "state_changed",
          snap => {
            const percentUploaded = Math.round(
              (snap.bytesTransferred / snap.totalBytes) * 100
            );
            this.setState({ percentUploaded });
          },
          err => {
            console.error(err);
            this.setState({
              errors: this.state.errors.concat(err),
              uploadState: "error",
              uploadTask: null
            });
          },
          () => {
            this.state.uploadTask.snapshot.ref
              .getDownloadURL()
              .then(downloadUrl => {
                this.sendFileMessage(downloadUrl, ref, pathToUpload);
              })
              .catch(err => {
                console.error(err);
                this.setState({
                  errors: this.state.errors.concat(err),
                  uploadState: "error",
                  uploadTask: null
                });
              });
          }
        );
      }
    );
  };

  sendFileMessage = (fileUrl, ref, pathToUpload) => {
    console.log("ref", ref);
    ref
      .child(pathToUpload)
      .push()
      .set(this.createMessage(fileUrl))
      .then(() => {
        this.setState({ uploadState: "done" });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          errors: this.state.errors.concat(err)
        });
      });
    store.dispatch(loadMessagesData(pathToUpload));
  };

  render() {
    const { errors, message, loading, modal } = this.state;

    console.log("messagesRef", this.props.messagesRef);

    return (
      <Segment className="message__form">
        <Input
          fluid
          name="message"
          onChange={this.handleChange}
          value={message}
          style={{ marginBottom: "0.7em" }}
          label={<Button icon={"add"} />}
          labelPosition="left"
          className={
            errors.some(error => error.message.includes("message"))
              ? "error"
              : ""
          }
          placeholder="Write your message"
        />
        <Button.Group icon widths="2">
          <Button
            onClick={this.sendMessage}
            disabled={loading}
            color="orange"
            content="Add Reply"
            labelPosition="left"
            icon="edit"
          />
          <Button
            color="teal"
            onClick={this.openModal}
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
          />
          <FileModal
            modal={modal}
            closeModal={this.closeModal}
            uploadFile={this.uploadFile}
          />
        </Button.Group>
      </Segment>
    );
  }
}

// export default MessageForm;
const mapStateToProps = ({ user, channels, messages, channel }) => ({
  currentUser:   user.currentUser,
  allChannels:   channels.allChannels,
  messagesRef:   messages.allMessages,
  activeChannel: channel.activeChannel,
})

export default connect(mapStateToProps, null)(MessageForm);