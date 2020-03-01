import React, { Component } from 'react';

// NOT USED ===> JUST EXAMPLE FOR MYSELF

const withStateOfForm = WrappedComponent => {
  return class withStateOfForm extends Component {
    // componentDidMount() {
    //   console.group(`WithLog ouput @${WrappedComponent.name}`);
    //   console.log(this.props);
    //   console.groupEnd();
    // }

    handleSubmit = e => {
      e.preventDefault();
      const { name, number } = this.state;
      const { onAddContact } = this.props;
      onAddContact(name, number);
      this.setState({
        name: '',
        number: '',
      });
    };

    handleInputChange = ({ target: { value, name } }) => {
      this.setState({
        [name]: value,
      });
    };

    state = {
      name: '',
      number: '',
      handleSubmit: this.handleSubmit,
      handleInputChange: this.handleInputChange,
    };

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default withStateOfForm;
