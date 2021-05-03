import { blue, grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue.A700,
    },
    secondary: {
      main: grey['800']
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;