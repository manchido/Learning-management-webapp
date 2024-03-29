import React, { useState } from 'react';
import './QuizForm.css'; // Import corresponding CSS file

const QuizForm = ({ question, handleAnswerSubmission }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswerSubmission(answer);
    setAnswer(''); // Clear input after submission
  };

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      <h3>{question}</h3>
      <label htmlFor="answer">Your Answer:</label>
      <input
        type="text"
        id="answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuizForm;
