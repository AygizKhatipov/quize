import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiAxiosInstance from '../service/apiAxiosInstance';
import QuestTemplate from './QuestTemplate';

function Questions({ setUser }) {
  const location = useLocation();
  const { id } = location.state || {};

  const [questions, setQuestions] = useState([]);

  const [answer, setAnswer] = useState('');
  // const [inputvalue, setInputvalue] = useState("");

  const [indexQuest, setIndexQuest] = useState(0);
  const [load, setLoad] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [corrAnsw, setCorrAnsw] = useState('');
  const [nextQuestionPermission, setNextQuestionPermission] = useState(false);

  async function getQuestions() {
    const { data } = await apiAxiosInstance.get(`/questions/${id}`);
    setQuestions(data);
    setLoad(true);
  }

  const navigate = useNavigate();

  useEffect(() => {
    getQuestions();
  }, []);

  function nextQuestion() {
    if (nextQuestionPermission) {
      setIndexQuest((prev) => {
        if (prev < questions.length - 1) {
          setCorrect(false);
          setNextQuestionPermission(false);
          setAnswer('');

          setUser((prev2) => ({ ...prev2, score: prev + 1 }));
          return prev + 1;
        } else {
          navigate('/NewGame');
        }
      });
    }
  }

  function checkAnswer() {
    setCorrect(true);
    if (
      answer.trim().toUpperCase() === questions[indexQuest].answer.toUpperCase()
    ) {
      setNextQuestionPermission(true);
      setCorrAnsw(<p className="card-text">Правильно</p>);
    } else {
      setCorrAnsw(<p className="card-text">Неправильно</p>);
    }
  }

  return (
    <>
      {load ? (
        <>
          <div className="card">
            <img
              src={questions[indexQuest].img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"> {questions[indexQuest].question} </h5>
              {correct && corrAnsw}
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}

              <input
                onChange={(event) => {
                  setAnswer(event.target.value), setCorrect(false);
                }}
                value={answer}
                type="text"
                required
                placeholder="Введите ответ"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />

              <button
                onClick={checkAnswer}
                type="button"
                className="btn btn-primary m-3"
              >
                Ответить
              </button>

              <button
                onClick={nextQuestion}
                type="button"
                className="btn btn-primary m-3"
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
