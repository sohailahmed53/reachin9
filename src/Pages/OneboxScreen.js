// src/pages/OneboxScreen.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OneboxScreen() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    axios.get('/onebox/list')
      .then(response => setThreads(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="onebox-container">
      <h1>Onebox</h1>
      <ul>
        {threads.map(thread => (
          <li key={thread.id}>
            {thread.subject}
            {/* Add more details and actions here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OneboxScreen;
