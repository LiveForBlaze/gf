import React from 'react';
import { Meteor } from 'meteor/meteor';
import { translate } from 'react-i18next';
import { Route } from 'react-router-dom';
import './css/Interface';
import { LoginForm } from './login/LoginForm';
import {SignupForm } from './login/SignupForm';
import { UserMenu } from './UserMenu';
import { Home } from './Home';
import { UserPage } from './User';

const User = Meteor.user();

class InterfaceUI extends React.Component {
  constructor(){
    super();
    this.state = {
      user: '',
      ready: false,
    }
  }
  componentDidMount(){
    const userId = Meteor.userId();
    console.log(userId);
    Meteor.call('getUserData', { userId }, (err, res) => {
      if (err) {
        this.setState({
          ready: true
        })
      } else {
        this.setState({
          user: res,
          ready: true
        })
      }
    });
  }
  render(){
    console.log(Meteor.user());
    const { t } = this.props;
    const { ready, user } = this.state;
    return(
      <div>
        { ready && <UserMenu user={user}/>}
        <Route exact path="/" component={Home} />
        <Route exact path="/users/:id" component={UserPage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </div>
    )
  }
}
export const Interface = translate('common')(InterfaceUI);
