import './App.css';
import { useDispatch } from 'react-redux';
import { appInit } from './actions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import Home from './pages/Home';

function App() {

  const dispatch = useDispatch();

  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(appInit());
  }, []);


  return (
    <>
      <div className="app-container">
        {
          loading ?
          <div className="loader-container"><CircularProgress color="secondary"/></div> :
          <Home />
        }
      </div>
    </>
  );
}

export default App;
