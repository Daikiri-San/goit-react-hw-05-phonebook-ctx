import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withThemeContext from '../hoc/withTheme';

const Item = styled.li`
  max-width: 54rem;
  box-shadow: ${props => props.shadow};
  padding: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: snow;
  margin-bottom: 0.6rem;

  &:last-of-type {
    margin-bottom: none;
  }
`;

const Name = styled.p`
  font-size: 2rem;
  flex-basis: 52%;
`;

const Number = styled.p`
  font-size: 2rem;
  flex-basis: 36%;
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  font-size: 3rem;
  flex-basis: 8%;
  height: 3.8rem;
  border-radius: 0.4rem;
  background-color: #e82a2a;
  cursor: pointer;
  color: snow;

  &:hover,
  &:focus {
    background-color: #b80000;
    outline: none;
  }

  &:active {
    background-color: #ff8080;
  }
`;

function ListItem({ name, number, onRemove, theme }) {
  return (
    <Item shadow={theme.config.mainShadowBox}>
      <Name>{name}</Name> <Number>{number}</Number>
      <Button type="button" onClick={onRemove}>
        ×
      </Button>
    </Item>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default withThemeContext(ListItem);
