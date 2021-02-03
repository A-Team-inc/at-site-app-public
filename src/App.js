import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';

import HeroImage from './assets/Hero.jpg';
import './App.css';

function App() {
  const [loaderState, setLoaderState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderState(false)
    }, 5000);
  }, []);


  return (
    <div className="A-Team">
      { loaderState &&  <Loader /> }
      <div className="content">

        <div className="hero-section">
          <div className="name">A-Team</div>
          <img src={HeroImage} className="hero-logo" alt="logo" />
          <h2 className="greeting-text" >We are a small but super talented company with the high level it specialists.</h2>
        </div>

        {/* <div className="greeting-section book-width"> */}
          {/* <p className="line-1 anim-typewriter">We can everything you want and do it good</p> */}
          {/* <h2 className="greeting-text" >We are a small but super talented company with the high level it specialists.</h2> */}
        {/* </div> */}

        <div className="who-we-are-section">
          <div className="who-we-are-content">
            <h1 className="who-we-are">What is A-Team?</h1>
            <div className="answer1">it's a dozens succesfull projects</div>
            <div className="answer2">it's a skilled specialists</div>
            <div className="answer3">it's a friendly team</div>
          </div>
        </div>
        
        <div className="footer">
          <div className="contacts book-width">
            <div className="artur">
              <div className="co-founder">Co-founder Artur</div>
              <div className="co-founder-email">artur.koval@ateam-inc.com</div>
            </div>
            <div className="anton"> 
              <div className="co-founder">Co-founder Anton</div>
              <div className="co-founder-email">anton.polomkin@ateam-inc.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
