import React, { useEffect, useState } from 'react';
import NewUser from '../components/NewUser';
import QuizCategories from '../components/QuizCategories';

import apiAxiosInstance from '../service/apiAxiosInstance';

function NewGame() {
  const [topics, setTopics] = useState([]);
  const [show, setShow] = useState(false);

  async function getTopics() {
    const { data } = await apiAxiosInstance.get('/topics');

    setTopics(data);
  }

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <>
      <NewUser setShow={setShow} />

      {show && topics.map((el) => <QuizCategories key={el.id} topic={el} />)}
    </>
  );
}

export default NewGame;
