import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function QuizCategories({ topic }) {
  const navigate = useNavigate();

  function goToQuestions() {
    const { id } = topic;
    navigate('/questions', { state: { id } });
  }

  return (
    <>
      <div className="card">
        <img src={topic.img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title"> {topic.title}</h5>

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
