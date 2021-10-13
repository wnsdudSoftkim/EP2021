import React from 'react';
import users from './userData';
import UserList from './UserList';

const App = () => {
  return (
    <main>
      <section className='container'>
        <h3>{users.length} birthdays today</h3>
        <UserList users={users} />
      </section>
    </main>
  );
};

export default App;
