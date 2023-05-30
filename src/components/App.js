
import React,{useState} from "react";
import './../styles/App.css';
import Option from './Option.js';

const App = () => {
  let [option,setOption] = useState('');

  return (
    <div className="parent">
      <h1>Parent Component</h1>
        {/* Do not remove the main div */}
        <Option text={'Child Component 1'} state={setOption} option={'Option 1'}/>
        <Option text={'Child Component 2'} state={setOption} option={'Option 2'}/>
        <p>Selected Option: {option}</p>
    </div>
  )
}

export default App
