import React from 'react';
import { Menu } from 'semantic-ui-react';
import UserPanel from "./UserPanel";
import Channels from "./Channels";

const SidePanel = () => {
  return (
    <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: "4c3c4c", fontSize: "1.2remm", paddingTop: 10 }}
    >
      <UserPanel />
      <Channels  />
    </Menu>
  );
}

export default SidePanel;