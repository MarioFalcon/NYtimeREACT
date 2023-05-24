import React from "react";
import Router from "./containers/Router";
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components';


function App() {
   return (
      <ThemeProvider theme={theme}>
      <div>
         <Router />
      </div>
      </ThemeProvider>
   )
}

export default App;
