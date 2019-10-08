import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';



const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <QuoteCard
      image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      character = "Homer Simpson"
      quote = "In theory, Communism works! In theory."/>
      
      <QuoteCard/>
    </div>
  );
}

export default App;


// src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
//       alt="Nelson Muntz"