import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components.js/NavBar';
import NewLogin from './components.js/newLogin';
import Signup from './components.js/Signup';
import { BrowserRouter as Router , Routes, Route ,Link } from "react-router-dom";
import ButtonAppBar from './components.js/newNavBar';
import Form from './formActions/Form';
import FormLogin from './formActions/FormLogin';

function App() {
  return (
    <Router>
      {/* <ResponsiveAppBar/> */}
      <ButtonAppBar/>
      {/* <Routes>
        <Route path='/' element={<Signup />}/>
      </Routes> */}
      <Routes>
        <Route path='/login' element={<FormLogin />}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Form />}/>
      </Routes>
      {/* <Routes>
        <Route path='/Login' element={<NewLogin />}/>
      </Routes> */}
    </Router>

  );
}

export default App;
