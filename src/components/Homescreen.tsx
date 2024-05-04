import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Homescreen.css'; 

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-screen">
      <h1>General Knowledge Quiz</h1>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default HomeScreen;
