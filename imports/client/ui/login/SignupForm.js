import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import { StyledLogin } from '../components/styled/forms';

class SignupUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target.name);
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit() {
    const { email, password } = this.state;
    Accounts.createUser({
      username: email,
      password: password,
      isAdmin: false,
    }, (err) => {
      if (err) {
        console.log(err)
      } else {
        this.props.history.goBack();
        window.location.reload();
      }
    });
  }

  render(){
    console.log(Meteor.users.find({}).fetch());
    const { t } = this.props;
    return(
      <StyledLogin>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <input name="email" placeholder={t('login.Email')} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <input name="password" type="password" placeholder={t('login.Password')} onChange={this.handleChange} />
        </Form.Field>
        <Button type='submit'>{t('login.Signup')}</Button>
      </Form>
      </StyledLogin>
    )
  }
}
export const SignupForm = translate('common')(SignupUI);
