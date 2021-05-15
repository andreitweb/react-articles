import { grey } from '@material-ui/core/colors';

export const typography = {
  text: {
    color: grey['800'],
  },
  h1: {
    fontSize: 42,
    fontWeight: 500,
    color: grey['800'],
    '&:not(:last-child)': {
      marginBottom: 28,
    }
  },
  h2: {
    fontSize: 36,
    fontWeight: 500,
    color: grey['800'],
    '&:not(:last-child)': {
      marginBottom: 24,
    }
  },
  h3: {
    fontSize: 30,
    fontWeight: 500,
    color: grey['800'],
    '&:not(:last-child)': {
      marginBottom: 20,
    }
  },
};