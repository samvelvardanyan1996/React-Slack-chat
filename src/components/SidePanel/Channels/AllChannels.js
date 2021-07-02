import React from "react";
import { connect } from "react-redux";

const AllChannels = ({ allChannels }) => {
  return (
    <React.Fragment>
      ({allChannels.length})
    </React.Fragment>
  );
}

const mapStateToProps = ({ channels }) => ({
  allChannels: channels.allChannels
});

export default connect(mapStateToProps, null)(AllChannels);