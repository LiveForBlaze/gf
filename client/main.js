import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import App from '../imports/client/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.querySelector('#main'));
});
