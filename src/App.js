import React from 'react';
import Home from './components/Home'
import Quotes from './components/Quotes'
import { Switch, Route } from 'react-router-dom'

// const exemple= [{
//   quote : "I'm sleeping in the bath tub.",
//   character: "Marge Simpson",
//   image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205"
// }]; // rien ne s'affiche au debut !!!

class App extends React.Component {
  // state = {
  //   simpson : exemple[0]
  // }

  // getSimpson = this.getSimpson.bind(this)

  // getSimpson() {
  //   // Send the request
  //   axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
  //     // Extract the DATA from the received response
  //     .then(response => response.data)
  //     // Use this data to update the state
  //     .then(data => {
  //       this.setState({
  //         simpson: data[0],
  //       });
  //   });
  // }

  

  render(){
    // const { simpson } = this.state
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Quotes" component={Quotes} />
      </Switch>
      </div>
    );
  }
}

export default App;


