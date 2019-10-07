import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';



const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <QuoteCard/>
      <QuoteCard/>
    </div>
  );
}

export default App;
