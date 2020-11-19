import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Userhome from './components/user/UserHome';

function App() {
  return (
    <Provider store={store}>
      <Userhome></Userhome>
    </Provider>
  );
}

export default App;
