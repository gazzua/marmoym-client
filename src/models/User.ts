import * as Immutable from 'immutable';
import { UserType } from './ModelTypes';

const UserRecord = Immutable.Record({
  id: 0,
  username: 'username',
  password: 'password',
  email: 'email',
  karma: 0,
  created_at: 0,
  updated_at: 0,
});

const User = (function() {
  function ofMany(users) {
    let newUsers = Immutable.Map();
    for (const id in users) {
      newUsers = newUsers.set(
        id.toString(), 
        of(users[id]));
    }
    return newUsers;
  }
  
  function of(user) {
    return new UserRecord({
      ...user,
    })
  }

  function hardMerge(users) {
    return {
      into: function(Users) {
        let newUsers = Users;
        users.map(user => {
          newUsers = newUsers.set(
            user.id.toString(), 
            of(user));
        });
        return newUsers;
      }
    }
  }

  return {
    of,
    ofMany,
    hardMerge
  }
})();

export default User;