import React from 'react';
import { Profile } from './Profile/index';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';

import user from '../mocks/user.json';
import stats from '../mocks/data.json';
import friends from '../mocks/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
    </div>
  );
};
