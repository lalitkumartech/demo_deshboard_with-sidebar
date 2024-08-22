
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './dashboard/Layout';
import Home from './dashboard/sidebar_Inner_Pages/Home';
import Contact from './dashboard/sidebar_Inner_Pages/Contact';
import About from './dashboard/sidebar_Inner_Pages/About';

function App() {
  const [open, setOpen] = React.useState(true);
  console.log(open)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  
  return (
    <Router>
      <div className="App">
        <Layout toggleDrawer={toggleDrawer} open={open}/>
        <Routes>
          <Route path='/home' element={<Home open={open}/>} />
          <Route path='/contact' element={<Contact open={open} />} />
          <Route path='/about' element={<About open={open} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
