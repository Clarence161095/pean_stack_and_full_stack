import { Toaster } from 'react-hot-toast';
import './App.css';
import ButtonAtom from './atoms/ButtonAtom';

function App() {
  return (
    <div className="App">
      <Toaster />
      <ButtonAtom />
      <ButtonAtom name={'Click 1'} />
      <ButtonAtom name={'Click 2'} />
      <ButtonAtom name={'Click 3'} />
    </div>
  );
}

export default App;
