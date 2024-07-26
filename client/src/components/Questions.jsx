import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import apiAxiosInstance from '../service/apiAxiosInstance';
import QuestTemplate from './QuestTemplate';

function Questions() {
  const location = useLocation();
  const { id } = location.state || {};

  const [questions, setQuestions] = useState([]);
  const [indexQuest, setIndexQuest] = useState(0);

  async function getQuestions() {
    const { data } = await apiAxiosInstance.get(`/questions/${id}`);
    setQuestions(data);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <QuestTemplate
        question={questions[indexQuest]}
        setIndexQuest={setIndexQuest}
        questions={questions}
      />
      {/* {questions.map((el) => (
        <QuestTemplate key={el.id} question={el} />
      ))} */}
    </>
  );
}

export default Questions;
