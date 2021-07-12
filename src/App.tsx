import { ContadorRed } from './components/ContadorRed';
import { Counter } from './components/Counter';
import { TimerPadre } from './components/TimerPadre';
import { User } from './components/User';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h2>useStae</h2>
      <Counter/>
      <User/>
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre/>
      <h2>useReducer</h2>
      <hr />
      <ContadorRed/>
    </>
  );
}

export default App;
