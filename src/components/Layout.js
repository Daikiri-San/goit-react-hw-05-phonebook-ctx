import React from 'react';
import styled from 'styled-components';
import withThemeContext from './hoc/withTheme';

const Background = styled.div`
  padding-top: 3rem;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.color};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 56rem;
`;

const Layout = ({ children, theme }) => (
  <Background color={theme.config.mainBGColor}>
    <Container>{children}</Container>
  </Background>
);

export default withThemeContext(Layout);
