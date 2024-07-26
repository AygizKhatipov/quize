import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiAxiosInstance from '../service/apiAxiosInstance';
import QuestTemplate from './QuestTemplate';

function Questions() {
  const location = useLocation();
  const { id } = location.state || {};
  const navigate = useNavigate();

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

  function nextQuestion() {
    setIndexQuest((prev) => {
      if (prev < questions.length - 1) {
        return prev + 1;
      } else {
        navigate('/NewGame');
      }
    });
  }

  return (
    <>
      {load ? 
      
      (
        <>
          <div className="card">
            <img
              src={questions[indexQuest].img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"> {questions[indexQuest].question} </h5>
              <button
                onClick={nextQuestion}
                type="button"
                className="btn btn-primary"
              >
                Следующий вопрос
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}

export default Questions;
