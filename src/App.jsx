import { useState , useEffect } from 'react'
import './App.css';

import Api from './conponents/Api';
import TapToggle from './conponents/TapToggle';
import Scroll from './conponents/scroll/Scroll';
import Grid from './conponents/scroll/Grid'


function App() {
  const [count, setCount] = useState('');

  // function name(params) {
  //   if (count === 0) {
  //     return setCount(0);
  //   }
  // }

//  const clickEvent = (event) => {
//           console.log(setCount(event.target.value));
//           setCount(event.target.value);
//     }
  return (
    <>
      {/* <form> 
          <input 
              onChange={clickEvent} 
              value={count} 
              type='text' />
          <p> hii i am here:{count}</p>
      </form> */}

      {/* <TapToggle /> */}

      {/* <Api /> */}

      {/* <Scroll /> */}

      <Grid />

    </>

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">

    //   <h1>
    //       amount is  {count}
    //   </h1>

    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is 
    //     </button>

    //     <button onClick={  () => setCount((count) => count - 1)}>
    //       count is -
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
