import './App.css';
import Countdown from './components/Countdown';
import { GlobalAppStateProvider } from './providers/GlobalAppStateProvider';

function App() {
  return (
    <>
      <GlobalAppStateProvider>
        <Countdown />
      </GlobalAppStateProvider>
    </>
  );
}

export default App;
