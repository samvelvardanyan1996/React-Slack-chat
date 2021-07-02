import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import Spinner from "./Spinner";

import App from './App';
import Login from './Auth/Login';
import Register from './Auth/Register';

const PreLoadOrLoad = ({ preLoad, currentUser, allChannels, messagesRef, activeChannel }) => {
  // console.log("----------------------------------------------------------");
  // console.log("    PreLoadOrLoad preLoad",            preLoad);
  // console.log("    PreLoadOrLoad currentUser",        currentUser);
  // console.log("    PreLoadOrLoad allChannels.length", allChannels.length);
  // console.log("    PreLoadOrLoad messagesRef",        messagesRef);
  // console.log("    PreLoadOrLoad activeChannel",      activeChannel);
  // console.log("----------------------------------------------------------");
  if(preLoad === true || 
    currentUser === null ||
    allChannels.length === 0 ||
    activeChannel === "" ||
    messagesRef.length === 0)
  {
    return (
      <React.Fragment>
        <Spinner />
      </React.Fragment>
    );
  }
  else{
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ user, channels, messages, channel }) => ({
  currentUser:   user.currentUser,
  allChannels:   channels.allChannels,
  messagesRef:   messages.allMessages,
  activeChannel: channel.activeChannel
})

export default connect(mapStateToProps, null)(PreLoadOrLoad);
// export default PreLoadOrLoad;