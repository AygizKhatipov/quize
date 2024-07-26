import React, { useEffect, useState } from 'react';
import apiAxiosInstance from '../service/apiAxiosInstance';
import GetTopUsers from '../components/GetTopUsers';

function TopPlayers({ users, setUsers }) {
  const topUsers = () => {
    apiAxiosInstance
      .get('/users')
      .then(({ data }) => setUsers(data))
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    topUsers();
  }, []);

  return (
    <>
      {users ? (
        users.length ? (
          users.map((user) => <GetTopUsers key={user.id} user={user} />)
        ) : (
          <h1>No Data</h1>
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default TopPlayers;
