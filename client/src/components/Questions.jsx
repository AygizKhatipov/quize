import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiAxiosInstance from "../service/apiAxiosInstance";
import QuestTemplate from "./QuestTemplate";

function Questions() {
  const location = useLocation();
  const { id } = location.state || {};
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);

  const [answer, setAnswer] = useState("");

  const [indexQuest, setIndexQuest] = useState(0);

  const [load, setLoad] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [corrAnsw, setCorrAnsw] = useState("");

  async function getQuestions() {
    const { data } = await apiAxiosInstance.get(`/questions/${id}`);
    setQuestions(data);
    setLoad(true);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  function nextQuestion() {
    if (correct) {
      setIndexQuest((prev) => {
        if (prev < questions.length - 1) {
          return prev + 1;
        } else {
          navigate("/NewGame");
        }
      });
    }
  }

  function checkAnswer() {
   

    if (
      answer.trim().toUpperCase() === questions[indexQuest].answer.toUpperCase()
    ) {
      setCorrect(true);
      setCorrAnsw("Правильно");
    } else {
      setCorrAnsw("Неправильно");
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

             <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <input
                onChange={(event) => setAnswer(event.target.value)}
                type="text"
                required
                placeholder="Введите ответ"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
              {correct && corrAnsw}
              <button
                onClick={checkAnswer}
                type="button"
                className="btn btn-primary"
              >
                Ответить
              </button>

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
