import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

class Spinner extends React.Component {
  render() {
    return (
      <Dimmer active>
        <Loader size="huge" content={"Preparing chat..."} />
      </Dimmer>
    );
  }
}

export default Spinner;