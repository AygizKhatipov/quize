import React from 'react';
import {  useNavigate } from 'react-router-dom';

function QuestTemplate({ question, setIndexQuest, questions }) {

  const navigate = useNavigate();
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
      <div className="card">
        <img src={question.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {question.question} </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

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
  );
}

export default QuestTemplate;
