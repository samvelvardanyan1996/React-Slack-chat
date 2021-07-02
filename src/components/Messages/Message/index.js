import React from 'react';
import moment from "moment";
import { Comment, Image } from "semantic-ui-react";

const Message = ({ message, user }) => {
  const isOwnMessage = (message, user) => {
    return message.user.id == user.uid ? "message__self" : "";
  };

  const isImage = (message) => {
    return message.hasOwnProperty("Image") && !message.hasOwnProperty("content");
  }

  const timeFromNow = (timestamp) => moment(timestamp).fromNow();
  return (
    <Comment>
      <Comment.Avatar src={message.user.avatar} />
      <Comment.Content className={isOwnMessage(message, user)}>        
        <Comment.Author as="a">{message.user.name}</Comment.Author>
        <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>
        {
          isImage(message) ?
            <Image src={message.Image} className="message__image" /> :
            <Comment.Text>{message.content}</Comment.Text>
        }
      </Comment.Content>
    </Comment>
  );
}

export default Message;