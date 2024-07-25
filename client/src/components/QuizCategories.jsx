import React from 'react';
import { Link, useNavigate, useHistory  } from 'react-router-dom';

function QuizCategories({ topic }) {
  const navigate = useNavigate();

  const history = useHistory()

  function goToQuestions() {
    const {id} = topic
    history.push('/', id)
  }
  
  return (
    <>
      <div className="card">
        <img src="{topic.img}" className="card-img-top" alt="..." />
        {/* DELETE Quotes in src */}

        <div className="card-body">
          {/* {topic.title} */}
          <h5 className="card-title"> input here topic.title</h5>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p> */}
          <button
          onClick={goToQuestions} type="button" className="btn btn-primary">
            Начать игру
          </button>
        </div>
      </div>
    </>
  );
}

export default QuizCategories;
