import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  getUserData({ userId }) {
    return Meteor.users.findOne({ _id: userId });
  },
});
