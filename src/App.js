import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm.js';
import Lamp from './components/Lamp.js'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <QuoteForm />
        <QuoteList />
        <Lamp />
        <Lamp />
      </div>
    );
  }
}

export default App;


