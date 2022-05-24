import React,{useState,useEffect} from 'react';
import style from './App.module.css';
import Router from './components/Router/Router';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
// import Engine from './engine/engine';
import clock from './engine/clock';

// testing themes
const theme = createTheme({
  palette: {
    primary: {
      main: blue[100]
    },
    secondary: {
      main:  '#434343'
    },
    tertiary: {
      main:  '#333333'
    },
    text: {
      primary: '#EEEEEE',
      secondary:'#000000',
      tertiary:'rgb(100, 240, 255)'
    },
    backgrounds: {
      primary: "#8dd0f0",
      secondary: "#ffffff",
      tertiary: "#333333",
      extra:"#000000"
    }
  },
  typography: {
    body2:  {
      
    }
  },
});

// Home is the root url (/)

const App = () => {
  const [clockCurrent,ClockCurrentHandler] = useState(undefined)
    useEffect( () => {
        const identifier = setTimeout( () => {
          clock(clockCurrent).then( (value) => {
            ClockCurrentHandler(value);
            console.log(clockCurrent);
          })
        return () => {
            clearTimeout(identifier);
        };
      })
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <div className={style.App}>
          {/* <Engine></Engine> */}
          <Router></Router> 
        </div>
    </ThemeProvider>
  );
}

export default App;