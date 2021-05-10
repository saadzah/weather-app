import './App.css';
import { useDispatch } from 'react-redux';
import { appInit } from './actions';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appInit());
  }, []);


  return (
    <div>
      Sample Text
    </div>
  );
}

export default App;
