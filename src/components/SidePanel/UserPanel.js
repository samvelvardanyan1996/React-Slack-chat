import React from 'react';
import { connect } from "react-redux";
import { Dropdown, Grid, Header, Icon, Image } from 'semantic-ui-react';
import { dropdownOptions } from "../../utils/dropdownOptions";


const UserPanel = ({currentUser}) => {
  const user = currentUser;

  return (
    <Grid style={{ background: "4c3c4c" }}>
      <Grid.Column>
        <Grid.Row style={{padding: "1.2e", margin: 0}}>
          {/* App Header */}
          <Header inverted floated="left" as="h2">
            <Icon name="code" />
            <Header.Content>
              DevChat
            </Header.Content>
          </Header>
        </Grid.Row>
        {/* User Dropdown */}
        <Header style={{padding: "0.25em"}} as="h4" inverted>
          <Dropdown trigger={
            <span>
              <Image src={user.photoURL} spaced="right" avatar />
              { user.displayName }
            </span>
          } options={dropdownOptions(user)} />
        </Header>

      </Grid.Column>
    </Grid>
  );
}


const mapStateToProps = ({ user, channel }) => ({
  currentUser: user.currentUser,
})

export default connect(mapStateToProps, null)(UserPanel);