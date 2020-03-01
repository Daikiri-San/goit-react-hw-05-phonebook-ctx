import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import slideItemTransition from '../transitions/slideItem.module.css';

const List = styled.ul`
  margin-bottom: 3rem;
`;

function ContactList({ contacts, onRemoveContact }) {
  return (
    <TransitionGroup component={List}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames={slideItemTransition}>
          <ListItem
            name={name}
            number={number}
            onRemove={() => onRemoveContact(id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.array,
  ]),
};

export default ContactList;
