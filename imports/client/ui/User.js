import React from 'react';
import { Meteor } from 'meteor/meteor';
import { translate } from 'react-i18next';

import { StyledHomeContainer, StyledHome } from './components/styled/forms';

class UserPageUI extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      ready: false,
    }
  }
  componentDidMount(){
    const userId = this.props.match.params.id;
    console.log("userId: ", userId);
    Meteor.call('getUserData', { userId }, (err, resp) => {
      if(err) {
        console.log(err);
      } else {
        this.setState({
          user: resp,
          ready: true
        });
        console.log("RESP:", resp)
      }
    });
  }
  render(){
    const { ready, user } = this.state;
    return(
      <StyledHomeContainer>
        <StyledHome>
          Home
          {ready && user && user.username }
        </StyledHome>
      </StyledHomeContainer>
    )
  }
}
export const UserPage = translate('common')(UserPageUI);
