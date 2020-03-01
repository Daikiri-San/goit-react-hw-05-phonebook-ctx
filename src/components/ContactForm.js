import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import withThemeContext from './hoc/withTheme';

const Form = styled.form`
  margin-bottom: 3.4rem;
  max-width: 54rem;
  box-shadow: ${props => props.shadow};
  padding: 1.4rem 1.6rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  background-color: snow;
`;

const Label = styled.label`
  font-size: 2.4rem;
  cursor: pointer;
  ${props =>
    props.error &&
    css`
      color: red;
    `}
`;

const Input = styled.input`
  font-size: 2.2rem;
  width: 100%;
  margin-bottom: 2rem;
  padding: 1.4rem 1.2rem 1.2rem;
  border-radius: 0.6rem;
  background-color: ${props => props.backGroundColor};

  &:focus {
    border-color: #1d2bcc;
  }

  ${props =>
    props.isValid &&
    css`
      border: 0.3rem solid lightgreen;
    `}
  ${props =>
    props.error &&
    css`
      border: 0.3rem solid red;
    `}
`;

const Button = styled.button`
  display: block;
  font-size: 2rem;
  margin: 0 auto;
  width: 100%;
  padding: 1.8rem;
  border-radius: 1rem;
  background-color: #1d2bcc;
  cursor: pointer;
  color: snow;

  &:hover,
  &:focus {
    background-color: #404fff;
    color: snow;
    border-color: #333333;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    outline: none;
  }

  &:active {
    background-color: #7883ff;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 2rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
`;

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
  };
  //

  render() {
    const { onAddContact, theme } = this.props;
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = <ErrorText>Name is Required</ErrorText>;
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          onAddContact(values.name, values.number);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} shadow={theme.config.mainShadowBox}>
            {errors.name ? (
              <Label error>
                Name
                <Input
                  error
                  type="text"
                  name="name"
                  backGroundColor={theme.config.inputColor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
              </Label>
            ) : (
              <Label>
                Name
                {touched.name ? (
                  <Input
                    isValid
                    type="text"
                    name="name"
                    backGroundColor={theme.config.inputColor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                ) : (
                  <Input
                    type="text"
                    name="name"
                    backGroundColor={theme.config.inputColor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                )}
                {errors.name && touched.name && errors.name}
              </Label>
            )}

            <Label>
              Number
              <Input
                type="tel"
                name="number"
                backGroundColor={theme.config.inputColor}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
              {errors.number && touched.number && errors.number}
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              Add contact
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withThemeContext(ContactForm);
