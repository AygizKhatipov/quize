import React, { useEffect, useState } from 'react';
import NewUser from '../components/NewUser';
import QuizCategories from '../components/QuizCategories';

import apiAxiosInstance from '../service/apiAxiosInstance';

function NewGame() {
  const [topics, setTopics] = useState([]);
  const [show, setShow] = useState(false);

  function getTopics() {
    apiAxiosInstance
      .get('/topics')
      .then((res) => setTopics(res.data))
      .catch(({ message }) => console.error(message));
  }

  useEffect(() => {
    getTopics;
  }, []);



  return (
    <>
      <NewUser setShow={setShow} />


      {show && <QuizCategories/>}
      {/* {topics.map((el) => (
        <QuizCategories key={el.id} topic={el} />
      ))} */}
    </>
  );
}

export default NewGame;
