import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

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
  components: {
    Input: {
      baseStyle: {
        field: {
          background: 'text.whiteGrey',
          placeholderColor: 'text.grey',
        },
      },
      sizes: {
        lg: {
          field: {
            padding: 4,
            height: '62px',
            borderRadius: 100,
          },
        },
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  // Add other customizations here
});

export default eveniaTheme;
