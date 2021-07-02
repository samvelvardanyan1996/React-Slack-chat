import React from "react";
import Channel from "../components/SidePanel/Channels/Channel";

export const getChannels = (allChannels, activeChannel) => {
  let mapChannels = null;
  if(allChannels.length > 0){
    mapChannels = allChannels.map(channel => (
      <Channel
        key={channel.id}
        channel={channel}
        activeChannel={activeChannel}
      />
    ))
  }

  return mapChannels;
}