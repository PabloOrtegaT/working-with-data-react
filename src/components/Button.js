import { ThemeContextConsumer } from './context/ThemeContext';
import React from "react";
import "./Button.styles.css";

export const Button = () => {
    return (
      <ThemeContextConsumer>
        {({ theme, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            className={`button-container theme-${theme}`}
          >
            <p>Switch Mode</p>
          </button>
        )}
      </ThemeContextConsumer>
    );
  };

export default Button;
//className={`button-container theme-${theme}`}