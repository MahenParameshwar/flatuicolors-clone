import { ThemeProvider } from '@material-ui/core';
import theme from './Utils/theme'
import './App.css'
import Home from './Components/Pages/Home';
import LevelContextProvider  from './Context/LevelContextProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LevelContextProvider>
        <div className="App">
          <Home />
        </div>
      </LevelContextProvider>
    </ThemeProvider>
  );
}

export default App;
