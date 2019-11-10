import React from 'react';

import { Codexes } from './middleware' 

import './App.css';

function App() {


  console.log(Codexes.getQuestion())

  return (
    <div className="App">
      <header className="App-header">
        <h2>Попробуй ответить на вопросы!</h2>  
      </header>

    </div>
  );
}

export default App;
