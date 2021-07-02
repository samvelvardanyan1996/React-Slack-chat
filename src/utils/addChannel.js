export const addChannel = (sendObj) => {
  const {key, channelName, channelDetails, user, channelsRefs, setChannelName, setChannelDetails, closeModal} = sendObj;
  const newChannel = {
    id: key,
    name: channelName,
    details: channelDetails,
    createBy: {
      name: user.displayName,
      avatar: user.photoURL
    }
  };

  channelsRefs
    .child(key)
    .update(newChannel)
    .then(() => {
      setChannelName("");
      setChannelDetails("");
      closeModal();
      console.log("channel added");
    })
    .catch((err) => {
      console.error(err);
    });
};
