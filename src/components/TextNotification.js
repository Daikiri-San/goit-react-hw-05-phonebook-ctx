import React from 'react';
import styled from 'styled-components';
import withThemeContext from './hoc/withTheme';

const Text = styled.p`
  font-size: 3rem;
  color: ${props => props.color};
`;

const TextNotification = ({ message, theme }) => {
  return <Text color={theme.config.messageColor}>{message}</Text>;
};

export default withThemeContext(TextNotification);
