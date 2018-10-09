import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Form } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import { StyledLogin } from '../components/styled/forms';

class LoginFormUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(){
    const { email, pwd } = this.state;
    Meteor.loginWithPassword(email, pwd, (error) => {
      if (error) {
        console.log(error)
      } else {
        console.log(this);
        this.props.history.goBack();
        window.location.reload();
      }
    });
  }
  render(){
    const { t, user } = this.props;
    return(
      <StyledLogin>
      <Form onSubmit={this.handleSubmit}>
      {user && <div>LOGGED IN</div>}
        <Form.Field>
          <input name="email" placeholder={t('login.Email')} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <input type="password" name="pwd" placeholder={t('login.Password')} onChange={this.handleChange} />
        </Form.Field>
        <Button type='submit'>{t('login.Login')}</Button>
      </Form>
      </StyledLogin>
    )
  }
}
export const LoginForm = translate('common')(LoginFormUI);
