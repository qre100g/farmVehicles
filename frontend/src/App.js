import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {createStore} from 'redux';
import allReducers from './Reducers';
import {Provider} from 'react-redux';


function App() {
  const store = createStore(allReducers)
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
