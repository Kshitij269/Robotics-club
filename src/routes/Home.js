import About from '../components/about-us';
import Contact from '../components/contact';
import Events from '../components/events';
import Navbar from '../components/navbar';
import Team from '../components/team';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <Navbar/>
        <About/>
        <Contact/>
        <Events/>
        <Team/>
      </div>
    );
  }
export default Home;