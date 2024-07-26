import React from 'react';

function QuestTemplate({ question, setIndexQuest, questions }) {
  function nextQuestion() {
    setIndexQuest((prev) => {
      if (prev < questions.length) {
        prev + 1;
      }
    });
  }

  // console.log(questions);
  return (
    <>
      <div className="card">
        <img src={question?.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {question?.question} </h5>
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
