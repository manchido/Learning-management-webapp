import React, { useState } from 'react';
import './QuizForm.css'; // Import corresponding CSS file

const QuizForm = () => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle quiz submission logic
  };

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
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
