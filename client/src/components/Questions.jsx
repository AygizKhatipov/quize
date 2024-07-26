import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import apiAxiosInstance from '../service/apiAxiosInstance';
import QuestTemplate from './QuestTemplate';

function Questions() {
  const location = useLocation();
  const { id } = location.state || {};

  const [questions, setQuestions] = useState([]);
  const [indexQuest, setIndexQuest] = useState(0);
  const [load, setLoad] = useState(false);

  
  async function getQuestions() {
    const { data } = await apiAxiosInstance.get(`/questions/${id}`);
    setQuestions(data);
    setLoad(true);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      {load ? (
        <QuestTemplate
          question={questions[indexQuest]}
          setIndexQuest={setIndexQuest}
          questions={questions}
        />
      ) : (
        <div>loading</div>
      )}
    </>
  );
}

export default Questions;
