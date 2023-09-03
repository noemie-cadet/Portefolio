import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Study from './components/Study';
import LayoutEN from './components/EN/LayoutEN';
import HomeEN from './components/EN/HomeEN';
import AboutEN from './components/EN/AboutEN';
import ContactEN from './components/EN/ContactEN';
import StudyEN from './components/EN/StudyEN';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Study" element={<Study />} />
      </Route>
      <Route path='/en' element={<LayoutEN />}> 
        <Route index element={<HomeEN />} />
        <Route path="about" element={<AboutEN />} />
        <Route path="contact" element={<ContactEN />} />
        <Route path="Study" element={<StudyEN />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
