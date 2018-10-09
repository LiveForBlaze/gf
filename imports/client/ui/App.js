import React, { Component } from 'react';
import i18next from 'i18next';
import { BrowserRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { I18nextProvider } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';

import commonRu from '../../../translations/ru.json';
import commonEn from '../../../translations/en.json';

import { Interface } from './Interface';

i18next
  .use(LngDetector)
  .init({
    detection: {
      // order and from where user language should be detected
      order: ['customDetector', 'querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
    },
    interpolation: { escapeValue: false },
    resources: {
      en: {
        common: commonEn,
      },
      ru: {
        common: commonRu,
      },
    },
  });

class App extends Component {
  shouldComponentUpdate(nextProps) {
    return !this.props.currentUser || !nextProps.currentUser;
  }
  render() {
    return (
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <Interface />
        </BrowserRouter>
      </I18nextProvider>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('users').ready();

  return {
    users: Meteor.users.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(App);
