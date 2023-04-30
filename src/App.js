import axios from 'axios';
import './App.css';
import PageRouter from './PageRouter';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <PageRouter />
    </>
  );
}

export default App;
