import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import ChatGPT from './ChatGPT';

function App() {
  const [prompt, setprompt] = useState("");
  const [response, setresponse] = useState("");
  const handleSubmit = async (e) => {
    // e.preventDefault();

    // const response = await fetch('http://localhost:8080/chat', { prompt }, {
    //   method: 'POST'  // Sending a POST request
    // });
    axios
      .post("http://localhost:8080/chat", { prompt })
      .then((res) => {
        setresponse(res.data);
      })
      .catch((err) => {
        console.error("The error is", err);
      })
  }
  return (
    <>
      {/* <div>
        <input
          type='text'
          value={prompt}
          onChange={(e) => setprompt(e.target.value)}>
        </input>
        <button style={{ 'backgroundcolor': 'green' }}
          onClick={() => {
            handleSubmit();
          }}>Submit</button>
      </div>
      <div>
        <p>
          {response}
        </p>

      </div> */}

      <ChatGPT />
    </>
  );
}

export default App;
