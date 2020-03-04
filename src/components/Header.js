import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import slideTitleTransition from './transitions/slideTitle.module.css';
import withThemeContext from './hoc/withTheme';

const HeaderContenet = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  color: ${props => props.color};
`;

const LabelOfSwitch = styled.span`
  top: -10px;
  position: relative;
  padding: 0px 10px;
  font-size: 2.2rem;
  font-weight: 500;
  color: ${props => props.color};
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Input = styled.input`
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + & {
    background-color: #2196f3;
  }

  input:focus + & {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + &:before {
    transform: translateX(26px);
  }
`;

function Header({ text, apearPage, theme }) {
  return (
    <HeaderContenet>
      <CSSTransition
        timeout={500}
        classNames={slideTitleTransition}
        in={apearPage}
      >
        <Title color={theme.config.contentColor}>{text}</Title>
      </CSSTransition>
      <div>
        <LabelOfSwitch color={theme.config.contentColor}>
          Theme: {theme.theme === 'light' ? 'Light' : 'Dark'}
        </LabelOfSwitch>
        <Label>
          <Input
            type="checkbox"
            checked={theme.theme === 'light'}
            onChange={theme.toggleTheme}
          />
          <Slider></Slider>
        </Label>
      </div>
    </HeaderContenet>
  );
}

export default withThemeContext(Header);
