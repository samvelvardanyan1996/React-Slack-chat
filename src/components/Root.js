import React, { useEffect, memo } from 'react';
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import firebase from "../firebase";

import PreLoadOrLoad from "./PreLoadOrLoad";
import { setUser, clearUser } from "../redux/actions/user";
import { loadData } from "../redux/actions/channels";
import { loadMessagesData } from "../redux/actions/messages";

import { setActiveChannel } from '../redux/actions/channel';

const Root = ({ history, setUser, clearUser, setActiveChannel, isLoading, allChannels, activeChannel }) => {
  console.log("Root");
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        if(allChannels.length === 0){
          dispatch(loadData());
          setUser(user);
        }
        else if(allChannels.length > 0 && activeChannel === ""){
          setActiveChannel( allChannels[0].id );
        }
        else{
          dispatch(loadMessagesData(activeChannel));
        }
        if(history.location.pathname !== "/"){
          history.push("/");
        }
      }
      else{
        if(history.location.pathname !== "/login"){
          history.push("/login");
        }
        clearUser();
      }
    })
  }, [allChannels, activeChannel]);
  return (
    <PreLoadOrLoad preLoad={isLoading} />
  );
}


const mapStateFromProps = ({ user, channels, channel }) => ({
  isLoading:     user.isLoading,
  allChannels:   channels.allChannels,
  activeChannel: channel.activeChannel,
});

const RouteWithAuth = withRouter(
  connect(
    mapStateFromProps,
    { setUser, clearUser, setActiveChannel }
  )(memo(Root))
);

export default RouteWithAuth;