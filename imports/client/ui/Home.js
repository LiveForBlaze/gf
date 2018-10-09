import React from 'react';
import { Meteor } from 'meteor/meteor';
import { translate } from 'react-i18next';

import { StyledHomeContainer, StyledHome } from './components/styled/forms';

class HomeUI extends React.Component {
  render(){
    return(
      <StyledHomeContainer>
        <StyledHome>
          Home
        </StyledHome>
      </StyledHomeContainer>
    )
  }
}
export const Home = translate('common')(HomeUI);
