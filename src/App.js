import './App.css';
import Aboutus from './Components/Aboutus/Aboutus';
import Navbar from './Components/Navbar';
import Skill from './Components/Skills/Skill';
import Contact from './Components/Contact/Contact.js';
import Home from './Components/Home';
import Quali from './Components/Qualification/quali.js'
import Footer from './Components/Footer/Footer.js';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
// import QualificatioN from './Components/Qu.js';

function App() {
  return (
   <div className="App">
    <BrowserRouter>
    <Navbar />
    {/* <Footer /> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Aboutus'element={<Aboutus />}/>
      <Route path='/Skill' element={<Skill />} />
      <Route path='/Contact' element={<Contact />} />
       <Route path='/Quali' element={<Quali/>}/> 
      <Route path='/Footer' element={<Footer />} />
    {/* <Route path='/Qu' element={<QualificatioN />} /> */}
    </Routes>
    </BrowserRouter>
  
   </div>
  );
}

export default App;