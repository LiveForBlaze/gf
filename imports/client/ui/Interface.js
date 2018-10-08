import React from 'react';
import { translate } from 'react-i18next';
import styled from 'styled-components';

import './css/Interface';
import { LoginForm } from './login/LoginForm';
import {SignupForm } from './login/SignupForm';


const StyledLogin = styled.div`
  width: 200px;
  background: rgba(0,0,0,0.04);
  border: 2px solid rgba(0,0,0,0.1);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  margin-bottom: 0;
`;

class InterfaceUI extends React.Component {
  render(){
    const { t } = this.props;
    return(
      <div>
        <StyledLogin>
          <LoginForm />
        </StyledLogin>
        <StyledLogin>
          <SignupForm />
        </StyledLogin>
      </div>
    )
  }
}
export const Interface = translate('common')(InterfaceUI);
