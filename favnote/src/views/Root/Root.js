import React from 'react';
import {ThemeProvider} from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import {theme} from 'theme/mainTheme'



const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello World!</h1>
        <Button>Close/save</Button>
        <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </>
);

export default Root;
