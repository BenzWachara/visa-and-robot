// import logo from './logo.svg';
import './sass/main.scss';
import './App.css';
import Visa from './content/visa';
import VisaDetail1 from './content/VisaDetail1';
import HeaderRoute from './component/HeaderRoute';
import Robotwalk from './content/Robotwalk';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderRoute/>
      <Routes>
        <Route exact path="/" element={<Visa/>}/>
        <Route path="/visadetail1" element={<VisaDetail1/>}/>
        <Route path="/robotwalk" element={<Robotwalk/>}/>
      </Routes>
    </div>
  );
}

export default App;
