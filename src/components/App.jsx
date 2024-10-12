import React from 'react';
import Home from './Home';
import AboutMe from './AboutMe'
import Connect from './Connect';


function App() {
  return (
    <div className="App">

      <div id="home">
        <Home />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="connect">
        <Connect/>
      </div>
    </div>
  );
}

export default App;
