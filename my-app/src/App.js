import { ThemeProvider } from '@material-ui/core';
import theme from './Utils/theme'
import palletteCollection from './Utils/seedcolors'
import Palette from './Components/Palette/Palette';
import './App.css'
import generatePalette from './Utils/genereateColorsRange';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        <Palette colors={generatePalette(palletteCollection[4]).colors}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
