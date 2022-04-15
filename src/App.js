import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import { Link, Route, Routes } from "react-router-dom"
import Header1 from './pages/Header';
import MiddleSection from './pages/middlesection';
import { motion } from 'framer-motion';


function App() {
  return (
    <>
      <Router>


        {/* initial="hidden"  animate="show"*/} 
         
           <Header1 />
          <MiddleSection /> 
         
        

      </Router>
    </>
  );
}

export default App;
