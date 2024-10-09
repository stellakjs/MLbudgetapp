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

  const handleChatSubmit = () => {
    fetch(`http://127.0.0.1:8000/api/chat/?message=${userMessage}`)
      .then(response => response.json())
      .then(data => {
        if (data.response) {
          setChatResponse(data.response);
        } else {
          setChatResponse('Error: ' + data.error);
        }
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <div>
          <h2>Chat with GPT</h2>
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)} />
          <button onClick={handleChatSubmit}>Send</button>
          <p>{chatResponse}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
