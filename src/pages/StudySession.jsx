import React, { useState } from 'react';

const StudySession = () => {
  const [sessions, setSessions] = useState([]);
  const [subject, setSubject] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');

  const addSession = () => {
    const newSession = { subject, duration, notes };
    setSessions([...sessions, newSession]);
    setSubject('');
    setDuration('');
    setNotes('');
  };

  return (
    <div>
      <h1>Study Sessions</h1>
      <form onSubmit={(e) => { e.preventDefault(); addSession(); }}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <button type="submit">Add Session</button>
      </form>
      <ul>
        {sessions.map((session, index) => (
          <li key={index}>
            <strong>{session.subject}</strong> - {session.duration} minutes
            <p>{session.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudySession;