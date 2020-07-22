import React from 'react';
import './App.css';
import Render from './components/rendering-component/render';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Render></Render>
      </BrowserRouter> 
    </div>
  );
}

export default App;
