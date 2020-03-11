import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Session from './components/session';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[900]
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Session />
        </ThemeProvider>
    );
}

export default App;
