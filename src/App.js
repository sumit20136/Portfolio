import './App.css';
// import Button from 'react-bootstrap/Button';
import Profile from './content/profile/Profile';
import Header from './content/Header/Header';
import AboutMe from './content/AboutMe/AboutMe';
import ContactMe from './content/ContactMe/ContactMe';
function App() {
  return (<>
      <Header/>
      <Profile/>
      <AboutMe/>
      <ContactMe/>
      </>
  );
}

export default App;
