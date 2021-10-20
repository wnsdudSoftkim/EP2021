import React from 'react';
import './App.css';
import userList from './userList';

import { mean, stddev } from './ch10-es6-export';
import stat from './ch10-es6-export-default';

const Hello = () => {
  let mea = mean([1, 3, 5, 7, 9]); // => 5
  let std = stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)
  console.log(mea);
  console.log(std);

  console.log(stat);
  mea = stat.mean([1, 3, 5, 7, 9]); // => 5
  std = stat.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)
  console.log(mea);
  console.log(std);
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
