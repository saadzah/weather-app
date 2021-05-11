import './App.css';
import { useDispatch } from 'react-redux';
import { appInit } from './actions';
import { useEffect } from 'react';

import Home from './pages/Home';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appInit());
  }, []);


  return (
    <>
      <div style={{ padding: '20px' }}>
        <Home />
      </div>
    </>
  );
}

export default App;
