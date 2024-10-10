import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello/')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>

      </header>

    </div>
  );
}

export default App;
