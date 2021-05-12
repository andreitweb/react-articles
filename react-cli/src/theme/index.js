import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { typography } from './typography';
import { palette } from './palette';

// A custom theme for this app
const theme = createMuiTheme({
  palette,
  typography,
});

export default responsiveFontSizes(theme);