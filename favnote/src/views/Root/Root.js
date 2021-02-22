import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import Card from 'components/molecues/Card/Card';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello World!</h1>
        <Button>Close/save</Button>
        <Button secondary>Remove</Button>
        <Input placeholder="login" />
        <Input placeholder="search" search />
        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: theme.primary,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ButtonIcon icon={bulbIcon} />
        </div>
        <Card />
      </>
    </ThemeProvider>
  </>
);

export default Root;
