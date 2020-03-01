import React from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const WithTheme = WrappedComponent => {
  return function WithThemeContext(props) {
    return (
      <ThemeContext.Consumer>
        {ctx => <WrappedComponent {...props} theme={ctx} />}
      </ThemeContext.Consumer>
    );
  };
};

export default WithTheme;
