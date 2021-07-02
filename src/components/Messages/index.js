import React from 'react';
import { connect } from 'react-redux';
import { Segment, Comment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import Message from "./Message";

const Messages = ({ user, messagesRef }) => {
  const displayMessages = (messagesRef) => (
    messagesRef.length && messagesRef.map(message => (
      <Message
        key={message.timeStamp}
        message={message}
        user={user}
      />
    ))
  );

  return (
    <React.Fragment>
      <MessagesHeader />

      <Segment>
        <Comment.Group className="messages">
          {messagesRef.length !== undefined ? displayMessages(messagesRef) : 0}
        </Comment.Group>
      </Segment>

      <MessageForm />
    </React.Fragment>
  );
}

const mapStateToProps = ({ user, messages }) => ({
  user:        user.currentUser,
  messagesRef: messages.allMessages,
})

export default connect(mapStateToProps, null)(Messages);