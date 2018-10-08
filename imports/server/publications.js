// @flow
import { Meteor } from 'meteor/meteor';

const Users = Meteor.users;

Meteor.publish('users', () => Users.find());
Meteor.publish(null, () => {
  const projection = {
    'profile.name': 1,
  };
  return Meteor.users.find(
    { },
    { fields: projection }
  );
});
