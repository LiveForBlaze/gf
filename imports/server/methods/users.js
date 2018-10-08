import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  createNewUser({ userData }) {
    console.log(userData);
  },
});
