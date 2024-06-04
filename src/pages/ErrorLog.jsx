import React, { useState } from 'react';

const ErrorLog = () => {
  const [errors, setErrors] = useState([]);
  const [question, setQuestion] = useState('');
  const [errorType, setErrorType] = useState('');
  const [notes, setNotes] = useState('');

  const addError = () => {
    const newError = { question, errorType, notes };
    setErrors([...errors, newError]);
    setQuestion('');
    setErrorType('');
    setNotes('');
  };

  return (
    <div>
      <h1>Error Log</h1>
      <form onSubmit={(e) => { e.preventDefault(); addError(); }}>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Error Type"
          value={errorType}
          onChange={(e) => setErrorType(e.target.value)}
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <button type="submit">Add Error</button>
      </form>
      <ul>
        {errors.map((error, index) => (
          <li key={index}>
            <strong>{error.question}</strong> - {error.errorType}
            <p>{error.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorLog;