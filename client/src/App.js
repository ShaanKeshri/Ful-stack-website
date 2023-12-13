import './App.css';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
