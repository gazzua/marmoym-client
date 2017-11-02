import * as Immutable from 'immutable';
import { UserType } from './ModelTypes';

const UserRecord = Immutable.Record({
  created_at: 0,
  email: 'email',
  id: 0,
  karma: 0,
  password: 'password',
  updated_at: 0,
  username: 'username',
});

const User = (() => {
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
    });
  }

  function hardMerge(users) {
    return {
      into(Users) {
        let newUsers = Users;
        users.map((user) => {
          newUsers = newUsers.set(
            user.id.toString(),
            of(user));
        });
        return newUsers;
      },
    };
  }

  return {
    hardMerge,
    of,
    ofMany,
  };
})();

export default User;
