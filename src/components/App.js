
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [counter, setCounter] = useState(0)
  function handleClick(){
    setCounter((prev)=>prev++)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button Clicked {counter} times</p>
        <buttonk onClick={handleClick}>Click Me</buttonk>
    </div>
  )
}

export default App
