import React, { Component, createContext } from 'react';

const themeConfig = {
  light: {
    mainBGColor: 'snow',
    contentColor: '#1d2bcc',
    mainShadowBox: '0px 2px 8px -3px rgba(0, 0, 0, 0.75)',
    inputColor: 'snow',
    messageColor: 'black',
  },

  dark: {
    mainBGColor: '#333333',
    contentColor: '#ccc',
    mainShadowBox: '0px 0px 8px 1px rgba(255, 255, 255, 0.75)',
    inputColor: '#e0e0e0',
    messageColor: '#ccc',
  },
};

const Context = createContext(themeConfig.light);

class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  toggleTheme = () => {
    const { theme, config } = this.state;
    this.setState({
      theme: theme === 'light' ? 'dark' : 'light',
      config:
        config === themeConfig.light ? themeConfig.dark : themeConfig.light,
    });
  };

  state = {
    theme: 'light',
    toggleTheme: this.toggleTheme,
    config: themeConfig.light,
  };

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          ...this.state,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export default ThemeContext;
