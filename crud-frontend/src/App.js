import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Home from './home/Home';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
import AddUsers from './users/AddUsers';
import EditUser from './users/EditUser';
import ViewUsers from './users/ViewUsers';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUsers />} />       
          <Route exact path="/api/user/:id" element={<EditUser />} />  
          <Route exact path="/api/viewuser/:id" element={<ViewUsers />} />   
        </Routes>

      </Router>
    </div>
  );
}


export default App;
