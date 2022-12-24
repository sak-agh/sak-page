import React, { useState } from 'react';
import './App.css';
import Button from './components/ui/Button';
import { Link } from 'react-router-dom';

const App = () => {
  const [ loading, setLoading ] = useState(false);
  const handleClick = () => {
    setLoading(!loading);
  };

  return (
    <>
      <Button loading={ loading } onClick={ handleClick }>
        Click me!
      </Button>
      <Link to='example'>
        Example page
      </Link>
    </>
  )
};

export default App;
