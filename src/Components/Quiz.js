import { useState } from 'react';

import './Quiz.css';

const Quiz = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const answerHandler = (currentQuestion, index) => {
    if (questions[currentQuestion].correct === index) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className='wrapper'>
      {currentQuestion < questions.length && (
        <div className='question-container'>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].answers.map((answer, index) => (
            <p
              style={{ backgroundColor: 'green' }}
              onClick={() => answerHandler(currentQuestion, index)}
            >
              {answer}
            </p>
          ))}
        </div>
      )}
      {currentQuestion >= questions.length && (
        <p>{`You scored ${(score / questions.length) * 100}%`}</p>
      )}
    </div>
  );
};

export default Quiz;
