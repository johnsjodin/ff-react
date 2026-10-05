import { useState, useEffect } from 'react';

function Taskbar({ title, onStart }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="taskbar">
      <button className="start-button" onClick={onStart}>
        <span className="win-logo" aria-hidden="true"></span>Start
      </button>
      <div className="task">{title}</div>
      <time className="tray">
        {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </time>
    </div>
  );
}

export default Taskbar;
