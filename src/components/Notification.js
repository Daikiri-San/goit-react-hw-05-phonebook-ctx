import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import slideNoticeTransition from './transitions/slideNotice.module.css';

const Container = styled.div`
  background-color: red;
  border-radius: 0.8rem;
  position: fixed;
  top: 5rem;
  right: 0;
`;

const Text = styled.p`
  display: inline-block;
  margin: 0 auto;
  color: snow;
  padding: 1.4rem;
  font-size: 3rem;
`;

function Notification({ message, apearNotice }) {
  return (
    <CSSTransition
      timeout={250}
      classNames={slideNoticeTransition}
      in={apearNotice}
      unmountOnExit
    >
      <Container>
        <Text>{message}</Text>
      </Container>
    </CSSTransition>
  );
}

export default Notification;
