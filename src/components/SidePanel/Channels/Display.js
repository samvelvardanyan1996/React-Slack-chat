import React from "react";
import { connect } from "react-redux";
import { getChannels } from "../../../utils/getChannels";


const DisplayChannels = ({ allChannels, activeChannel }) => {
  return (
    <React.Fragment>
      { getChannels(allChannels, activeChannel) }
    </React.Fragment>
  )
}

const mapStateToProps = ({ channels, channel }) => ({
  allChannels:   channels.allChannels,
  activeChannel: channel.activeChannel
});

export default connect(mapStateToProps, null)(DisplayChannels);