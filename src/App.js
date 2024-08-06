import { useEffect } from 'react';
import Header from './Header';
import Main from './Main';

// import Loader from './Loader';
// import Error from './Error';
import './App.css';

function App() {
  useEffect(function () {
    fetch('http://localhost:3001/questions')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((err) => console.log('Error'));
    // .then((res) => res.json())
    // .then((data) => dispatch({ type: 'dataReceived', payload: data }))
    // .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
