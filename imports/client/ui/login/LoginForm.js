import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { translate } from 'react-i18next';

class LoginFormUI extends React.Component {
  render(){
    const { t } = this.props;
    return(
      <Form>
        <Form.Field>
          <input placeholder={t('login.Email')} />
        </Form.Field>
        <Form.Field>
          <input type="password" placeholder={t('login.Password')} />
        </Form.Field>
        <Button type='submit'>{t('login.Login')}</Button>
      </Form>
    )
  }
}
export const LoginForm = translate('common')(LoginFormUI);
