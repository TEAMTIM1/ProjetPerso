import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';

//local import
import Home from './pages/Home';
import theme from './theme';
import PokemonDetails from './components/PokemonDetails';
import "./App.css"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
  },

  {
    path: "pokemon/:pokemonName",
    element: <PokemonDetails/>,
  }
]); 

function App() {

  return ( 
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App;
