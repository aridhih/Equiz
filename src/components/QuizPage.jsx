import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = ({ addResult }) => {
  const quizQuestions = [
    { id: 1, question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
    { id: 2, question: 'Which programming language is used for web development?', options: ['Python', 'Java', 'JavaScript', 'C++'], answer: 'JavaScript' },
    { id: 3, question: 'What is the largest planet in our Solar System?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], answer: 'Jupiter' },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResults(true);
    }
  };

  const finishQuiz = () => {
    addResult({ name: userName, score });
    navigate('/');
  };

  const startQuiz = () => {
    if (userName.trim()) {
      setUserName(userName);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Quiz Time!</h1>

      {!userName ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Enter Your Name</h2>
          <input
            type="text"
            value={userName}
            onChange={handleNameChange}
            className="mt-4 p-2 border rounded-md"
          />
          <button
ask name of user and display along in leaderboard

 onClick={startQuiz}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700"
          >
            Start Quiz
          </button>
        </div>
      ) : showResults ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Quiz Completed!</h2>
          <p className="text-lg text-gray-600 mt-4">
            Your Score: <span className="text-blue-500">{score}</span>/{quizQuestions.length}
          </p>
          <button
            onClick={finishQuiz}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700"
          >
            Finish Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl">
          <h2 className="text-xl font-semibold text-gray-700">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </h2>
          <p className="text-gray-600 mt-2">{currentQuestion.question}</p>

          <div className="mt-4">
            {currentQuestion.options.map((option, index) => (
              <label
                key={index}
                className="block bg-gray-100 rounded-lg p-2 my-2 cursor-pointer hover:bg-gray-200"
              >
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 disabled:bg-gray-400"
          >
            {currentQuestionIndex + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
