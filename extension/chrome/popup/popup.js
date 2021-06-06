// import React, {useState} from 'react';
// import { render } from 'react-dom';

// import './Popup.css'

// import Panel from './components/structure/Panel';
// import Navigation from './components/navigation/Navigation';
// import FrameContainer from './components/frames/FrameContainer';

// const [number, setNumber] = useState(Math.random())
// const tabChangeHandler = (newTabId) => {
//   console.log('(highest) switching to tab ' + newTabId)
//   setNumber(Math.random())
// }

// const frames = {
//   "changes": {
//     "element": (
//       <h1>{ number }</h1>
//     )
//   }
// }

// const Popup = () => {
//   return (
//     <div>
// <h1>Hello</h1>
//     </div>
//   );
// }

// export default Popup;


import React, {useState} from 'react';

import { render } from 'react-dom';

import './Popup.css'

import Panel from './components/structure/Panel';
import Navigation from './components/navigation/Navigation';
import FrameContainer from './components/frames/FrameContainer';

const popup = () => {
  const [currentTab, setCurrentTab] = useState("changes")

const tabChangeHandler = (newTabId) => {
  console.log('(highest) switching to tab ' + newTabId)
  setCurrentTab(newTabId)
}

const frames = {
  "changes": {
    "element": (
      <h1>hello world</h1>
    )
  }
}

  return (
    <div><Panel size='1'>
    <Navigation onTabChange={tabChangeHandler}/>
    <FrameContainer currentTab={currentTab} frames={frames}/>
  </Panel></div>
    
  );
}

export default popup;
