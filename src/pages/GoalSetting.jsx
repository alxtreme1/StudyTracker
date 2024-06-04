import React, { useState } from 'react';

const GoalSetting = () => {
  const [goals, setGoals] = useState([]);
  const [subject, setSubject] = useState('');
  const [goal, setGoal] = useState('');

  const addGoal = () => {
    const newGoal = { subject, goal };
    setGoals([...goals, newGoal]);
    setSubject('');
    setGoal('');
  };

  return (
    <div>
      <h1>Goal Setting</h1>
      <form onSubmit={(e) => { e.preventDefault(); addGoal(); }}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">Add Goal</button>
      </form>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            <strong>{goal.subject}</strong> - {goal.goal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalSetting;