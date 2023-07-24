import { extendTheme } from '@chakra-ui/react';

const eveniaTheme = extendTheme({
  colors: {
    primary: {
      majorelle: '#624CF5',
      coral: '#FA776C',
    },
    secondary: {
      cerulean: '#02A6FF',
      orange: '#FF4D2D',
      yellow: '#FFD507',
      green: '#75BF15',
    },
    text: {
      black: '#000000',
      grey: '#757575',
      critical: '#FF4D2D',
      disabled: '#AFAFAF',
      link: '#276EF1',
      whiteGrey: '#F6F6F6',
      white: '#FFFFFF',
    },
    dark: {
      grey: '#AAAAAA',
      card: '#292451',
      footer: '#241E4D',
      header: '#161239',
      background: '#000C29',
    },
  },
  // Add other customizations here
});

export default eveniaTheme;
