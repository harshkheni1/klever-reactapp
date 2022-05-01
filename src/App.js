import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from "react-router-dom";

import Routes from './routes';
import './App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
