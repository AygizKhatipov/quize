import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function QuizCategories({ topic }) {
  const navigate = useNavigate();

  function goToQuestions() {
    const { id } = topic;
    // const { id } = { id: 3 };
    navigate('/questions', { state: { id } });
  }

  return (
    <>
      <div className="card">
        <img src='{topic.img}' className="card-img-top" alt="..." />
        {/* DELETE Quotes in src */}

        <div className="card-body">
          {/* {topic.title} */}
          <h5 className="card-title"> {topic.title}</h5>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p> */}
          <button
            onClick={goToQuestions}
            type="button"
            className="btn btn-primary"
          >
            Начать игру
          </button>
        </div>
      </div>
    </>
  );
}

export default QuizCategories;
