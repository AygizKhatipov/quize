import React from 'react';

function GetTopUsers({ user }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.score}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default GetTopUsers;