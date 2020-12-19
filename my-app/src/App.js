import { ThemeProvider } from '@material-ui/core';
import theme from './Utils/theme'
import palletteCollection from './Utils/seedcolors'
import Palette from './Components/Palette/Palette';
import './App.css'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        <Palette colors={palletteCollection[4].colors}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
