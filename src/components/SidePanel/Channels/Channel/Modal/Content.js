import React from "react";
import { connect } from "react-redux";
import { Modal, Form, Input } from "semantic-ui-react";
import { setChannelName, setChannelDetails } from "../../../../../redux/actions/channel";

const Content = ({ setChannelName, setChannelDetails }) => {
  const handleChange = event => {
    if(event.target.name === "channelName"){
      setChannelName(event.target.value);
    }
    else{
      setChannelDetails(event.target.value)
    }
  };

  return (
    <Modal.Content>
      <Form>
        <Form.Field>
          <Input
            fluid
            label="Name of Channel"
            name="channelName"
            onChange={handleChange}
          />
        </Form.Field>

        <Form.Field>
          <Input
            fluid
            label="About the Channel"
            name="channelDetails"
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
    </Modal.Content>
  );
}

export default connect(null, { setChannelName, setChannelDetails })(Content);