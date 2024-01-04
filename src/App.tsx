import './App.css';
import Pomodoro from './components/Pomodoro';
import { GlobalAppStateProvider } from './providers/GlobalAppStateProvider';

function App() {
  return (
    <>
      <GlobalAppStateProvider>
        <Pomodoro />
      </GlobalAppStateProvider>
    </>
  );
}

export default App;
