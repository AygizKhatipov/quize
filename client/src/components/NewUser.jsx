import React, { useState } from 'react';

function NewUser({ setShow, setUser }) {
  

  function preventDefault(event) {
    event.preventDefault();
    setShow(true);
  }

  return (
    <>
      <form onSubmit={preventDefault}>
        <div className="input-group mb-3">
          <input
            onChange={(event) =>
              setUser((prev) => ({ ...prev, name: event.target.value }))
            }
            type="text"
            required
            placeholder="Введите имя"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
          <button
            className="input-group-text"
            id="inputGroup-sizing-default"
            type="submit"
          >
            Играть
          </button>
        </div>
      </form>
    </>
  );
}

export default NewUser;
