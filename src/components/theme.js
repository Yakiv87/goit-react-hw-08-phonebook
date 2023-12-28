import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#90A955',
      contrastText: '#202020',
      background: '#F5F2E8 ',
    },
  },
});

theme = responsiveFontSizes(theme);
export { theme };