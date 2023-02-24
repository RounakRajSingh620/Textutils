
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      {/*<Navbar  title ="TextUtils" AboutText="About Us"/>*/}
      {/*<Navbar />*/}
      <Navbar title="TextUtils" mode={darkMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
        {/*<About/>*/}
      </div>
    </>);
}

export default App;
