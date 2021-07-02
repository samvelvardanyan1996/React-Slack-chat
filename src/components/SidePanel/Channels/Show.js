import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import DisplayChannels from "./Display";
import AllChannels from "./AllChannels";


const ShowChannels = ({ openModal }) => {
  return (
    <Menu.Menu style={{ paddingBottom: "2em" }}>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> CHANNELS
        </span>{" "}
        <AllChannels />
        <Icon style={{ cursor: "pointer" }} name="add" onClick={openModal} />
      </Menu.Item>
      <DisplayChannels />
    </Menu.Menu>
  );
}

export default ShowChannels;