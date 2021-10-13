import React from 'react';
import './App.css';
import userList from './userList';

const Hello = () => {
  return (
    <div>
      <div className='App'>
        <h2>Hello World!!</h2>
        <p>This is my first react program</p>
        <ul className='left-align'>
          {userList.map((user) => (
            <li key={user.id}>
              {user.id} {user.name}
            </li>
          ))}
        </ul>
        <p>
          Amount:{' '}
          {userList.map((user) => user.amount).reduce((acc, x) => acc + x, 0)}
        </p>
      </div>
    </div>
  );
};

export default Hello;
