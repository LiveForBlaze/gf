import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Dropdown } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { languageList } from './molecules/language-list';


const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background: rgba(0,0,0,0.04);
  border-bottom: 2px solid rgba(0,0,0,0.1);
  height: 40px;
  text-align: right;
`;

const StyledBlock = styled.div`
  display: inline-block;
  margin-right: 20px;
  text-align: left;
  margin-top: 10px;
  margin-left: ${props => props.left || '0px'};
`;

class UserMenuUI extends React.Component {
  handleOnSelectLanguage = (e, { value }) => {
    window.localStorage.setItem('locale', value);
    this.props.i18n.changeLanguage(value);
    console.log(`Language selected: ${value}`);
  };
  logoutHandle = () => {
    Meteor.logout();
    window.location.replace("/");
  };
  render(){
    const locale = window.localStorage.locale || 'en';
    const { t, user } = this.props;
    return(
      <StyledNav>
      <div>
        <StyledBlock left="20px">
          Glowing Fragments
        </StyledBlock>
      </div>
      <div>
        <StyledBlock>
          <Dropdown
            direction="left"
            text={t('lng')}
            options={languageList}
            defaultValue={locale}
            onChange={this.handleOnSelectLanguage}
            openOnFocus={false}
          />
        </StyledBlock>
        <StyledBlock>
          <Dropdown
            direction="left"
            item
            icon="user"
            openOnFocus={false}
          >
            { user ? (
              <Dropdown.Menu>
                <Dropdown.Header content={user.username} />
                <Dropdown.Item text={t('interface.Profile')} />
                <Dropdown.Item text={t('interface.Logout')} onClick={this.logoutHandle} />
              </Dropdown.Menu>
            ) : (
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/login">{t('login.Login')}</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/signup">{t('login.Signup')}</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            )}
          </Dropdown>
        </StyledBlock>
        </div>
      </StyledNav>
    )
  }
}
export const UserMenu = translate('common')(UserMenuUI);
