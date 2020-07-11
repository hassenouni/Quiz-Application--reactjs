import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/Home.js';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';



function App() {
  return (
    <Router>
      <Route path="/" exact component ={Home} />
      <Route path="/Play/instructions" exact component ={QuizInstructions} />
      <Route path="/Play/quiz" exact component ={Play} />
      <Route path="/Play/quizsummary" exact component ={QuizSummary} />

    </Router>
  );
}

export default App;
