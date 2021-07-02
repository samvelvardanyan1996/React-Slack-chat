import React from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { setActiveChannel } from "../../../../redux/actions/channel";

const Channel = ({ channel, activeChannel, setActiveChannel }) => {
  return (
    <Menu.Item
      onClick={() => setActiveChannel(channel)}
      name={channel.name}
      style={{ opacity: 0.7}}
      active={channel.id === activeChannel.id}
    >
      # { channel.name }
    </Menu.Item>
  )
}

export default connect(null, { setActiveChannel })(Channel);