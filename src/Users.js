import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails'
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    // The async function declaration defines an asynchronous function,
    // which returns an AsyncFunction object. An asynchronous function is a function
    // which operates asynchronously via the event loop, using an implicit Promise to return its result. 
    const fetchUsers = async () => {
      const result = await axios.get('https://reqres.in/api/users');
      console.log(result.data.data);
      setUsers(result.data.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {selectedUser ? <div>
        <button onClick={() => setSelectedUser(null)}><h4>Back to list</h4></button>
        <UserDetails SelecteUser={selectedUser} />
      </div> :
        <ul>
          {users.map(data => (
            <li key={data.id} className="App-link" onClick={() => {
              setSelectedUser(data);
            }}>
              <h3>{data.first_name} {data.last_name}</h3>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Users;
