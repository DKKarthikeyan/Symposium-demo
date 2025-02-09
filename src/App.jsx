
import { Routes, Route } from 'react-router-dom'; // Fixed import
import './index2.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Sponsors from './Sponsors';
import Events from './Events';
import Workshops from './Workshops';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';

// Keerthi
import Cse from './CSE/csepage';
import Civil from './Civil/civilpage';
import Eee from './EEE/eeepage';
import Ece from './ECE/ecepage';
import Mech from './MECH/mechpage';
import Sh from './SH/sh';
import CseTech from './CSE/csetech';
import CseNonTech from './CSE/csenontech';
import CseTech1 from './pages/csetec1';
import UiUxIgnite from './pages/uiuxignite';
import Pixelpunchlines from './pages/pixelpunchlines';
import MultiverseOfMadness from './pages/multiverse';
import CiviTech from './Civil/civiltech';
import CivilNonTech from './Civil/civilnontech';
import Strick from './pages/CIVIL/strickabridge';
import Break from './pages/CIVIL/breakthecode';
import Smart from './pages/CIVIL/smartclickz';
import Avantgarde from './pages/CIVIL/avantgarde';
import Ecetech from './ECE/ecetech';
import Ecenontech from './ECE/ecenontech';
import Circuit from './pages/ECE/circuit';
import Robot from './pages/ECE/robot';
import Minute from './pages/ECE/minute';
import Think from './pages/ECE/think';
import Eeetech from './EEE/eeetech';
import Eeenontech from './EEE/eeenontech';
import Fusion from './pages/EEE/fusion';
import Junkyard from './pages/EEE/junkyard';
import Fashion from './pages/EEE/fashion';
import Reels from './pages/EEE/reels';
import Mechtech from './MECH/mechtech';
import Mechnontech from './MECH/mechnontech';
import Cad from './pages/MECH/cad';
import Jam from './pages/MECH/jam';
import Hunt from'./pages/MECH/hunt';
import Action from './pages/MECH/action';
import Shtech from './SH/shtech';
import Shnontech from './SH/shnontech'
import Elo from './pages/SH/elo';
import Tech from './pages/SH/tech';
import Road from './pages/SH/Road';
import Ad from './pages/SH/ad';
import Suprise  from './suprise'
import Event1 from './SUPRISE/event1';
import Event2 from './SUPRISE/event2';
import CseWorkshop from './Workshops/CseWorkshop';
import MechWorkshop from './Workshops/MechWorkshop';
import CivilWorkshop from './Workshops/CivilWorkshop';
import EeeWorkshop from './Workshops/EeeWorkshop';
import EceWorkshop from './Workshops/EceWorkshop';

function App() {
  return (
    <>
      <div className="Canvas_area__">
        <ul className="Canvas_circles__">
          {[...Array(12)].map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
      <div className='d-flex flex-column min-vh-100 app'>
        <div className='flex-grow-1'>
          <Navbar />
          <MobileNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/sponsors' element={<Sponsors />} />
            <Route path='/events' element={<Events />} />
            <Route path='/workshops' element={<Workshops />} />
            <Route path='/workshops/blockchain-technology' element={<CseWorkshop />} />
            <Route path='/workshops/drone-o-topia' element={<MechWorkshop />} />
            <Route path='/workshops/3-d-modeling-with-ar-vr' element={<CivilWorkshop />} />
            <Route path='/workshops/ev-retrofit' element={<EeeWorkshop />} />
            <Route path='/workshops/embedded-systems-with-raspberry-pi' element={<EceWorkshop />} />

            <Route path='/cse' element={<Cse />} />
            <Route path='/civil' element={<Civil />} />
            <Route path='/eee' element={<Eee />} />
            <Route path='/ece' element={<Ece />} />
            <Route path='/mech' element={<Mech />} />
            <Route path='/sh' element={<Sh />} />
            <Route path='/cse/csetech' element={<CseTech />} />
            <Route path='/cse/csenontech' element={<CseNonTech />} />
            <Route path='/cse/csetec1' element={<CseTech1 />} />
            <Route path='/cse/uiuxignite' element={<UiUxIgnite />} />
            <Route path='/cse/pixelpunchlines' element={<Pixelpunchlines />} />
            <Route path='/cse/multiverse' element={<MultiverseOfMadness />} />
            <Route path='/civil/civiltech' element={<CiviTech />} />
            <Route path='/civil/civilnontech' element={<CivilNonTech />} />
            <Route path='/civil/strick_a_bridge' element={<Strick />} />
            <Route path='/civil/break_the_code' element={<Break />} />
            <Route path='/civil/smartclickz' element={<Smart />} />
            <Route path='/civil/avantgarde' element={<Avantgarde />} />
            <Route path='/ece/ecetech' element={<Ecetech />} />
            <Route path='/ece/ecenontech' element={<Ecenontech />} />
            <Route path='/ece/circuit' element={< Circuit/>} />
            <Route path='/ece/robot' element={<Robot/>} />
            <Route path='/ece/minute' element={<Minute/>} />
            <Route path='/ece/think' element={<Think />} />
            <Route path='/eee/eeetech' element={<Eeetech />} />
            <Route path='/eee/eeenontech' element={<Eeenontech />} />
            <Route path='/eee/fusion' element={<Fusion />} />
            <Route path='/eee/junkyard' element={<Junkyard />} />
            <Route path='/eee/fashion' element={<Fashion/>} />
            <Route path='/eee/reels' element={<Reels />} />
            <Route path='/mech/mechtech' element={<Mechtech />} />
            <Route path='/mech/mechnontech' element={<Mechnontech/>} />
            <Route path='/mech/cad' element={<Cad/>} />
            <Route path='/mech/jam' element={<Jam/>} />
            <Route path='/mech/hunt' element={<Hunt/>} />
            <Route path='/mech/action' element={<Action/>} />
            <Route path='/sh/shtech' element={<Shtech/>} />
            <Route path='/sh/shnontech' element={<Shnontech/>} />
            <Route path='/sh/elo' element={<Elo/>} />
            <Route path='sh/tech' element={<Tech/>} />
            <Route path='/sh/road' element={<Road/>} />
            <Route path='/sh/ad' element={<Ad/>} />
            <Route path='/suprise' element={<Suprise/>}/>
            <Route path='/suprise/event1' element={<Event1/>}/>
            <Route path='/suprise/event2' element={<Event2/>}/>
            

            
            
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
