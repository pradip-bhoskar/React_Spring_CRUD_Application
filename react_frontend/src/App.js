import logo from './logo.svg';
import './App.css';
import Employees from './components/Employees';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />

          <Routes>
            <Route path='/' Component={Employees}></Route>
            <Route path='/employees' Component={Employees}></Route>
            <Route path='/add-employee' Component={AddEmployee}></Route>
            <Route path='/update-employee/:id' Component={UpdateEmployee}></Route>
          </Routes>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
