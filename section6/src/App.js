import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutPut from './components/UI/Button/Demo/DemoOutPut';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prev => !prev);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => setAllowToggle(prev => !prev);
  console.log('여긴 app');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {<DemoOutPut show={showParagraph} />}
      <Button onClick={allowToggleHandler}>Allow Togglin</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
