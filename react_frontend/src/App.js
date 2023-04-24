import logo from './logo.svg';
import './App.css';
import Employees from './components/Employees';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="container"> <Employees /></div>
     
      <Footer/>
    </div>
  );
}

export default App;
