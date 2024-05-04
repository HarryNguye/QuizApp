import React, { useState } from 'react';
import { Question, sampleQuestions } from './Question';
import '../Quiz.css';  // Varmista, että polku on oikea CSS-tiedostolle

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState(() => [...sampleQuestions].sort(() => Math.random() - 0.5));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setQuestions([...sampleQuestions].sort(() => Math.random() - 0.5));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <div className="quiz-score">
            You scored <span className="quiz-score-highlight">{score}</span> out of <span className="quiz-score-highlight">{questions.length}</span>
          </div>
          <button className="quiz-button" onClick={resetQuiz}>Play Again</button>
        </div>
      ) : (
        <div className="question-card">
          <div className="question-count">
            Question {currentQuestionIndex + 1}/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestionIndex].questionText}</div>
          <div className="answer-buttons">
            {questions[currentQuestionIndex].answerOptions.map((answerOption, index) => (
              <button key={index} className="answer-button" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
