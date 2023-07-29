import './App.css';
import Landing from './components/landing';
import {Route,Routes} from 'react-router-dom'
import Home from './routes/Home';
import { Link } from 'react-router-dom';
import Team from './components/team';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>  
        <Route path='/home#team' element={<Team/>}/>
      </Routes>

    </div>
  );
}

export default App;
