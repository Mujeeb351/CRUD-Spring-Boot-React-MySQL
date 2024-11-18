import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Home from './home/Home';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
import AddUsers from './users/AddUsers';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUsers />} />          
        </Routes>

      </Router>
    </div>
  );
}


export default App;
