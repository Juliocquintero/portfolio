import { createContext, useState } from 'react';
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const handleTheme = () => {
    // if (e.target.checked === false) {
    //   setTheme('light');
    //   localStorage.setItem('theme', 'light');
    // } else {
    //   setTheme('dark');
    //   localStorage.setItem('theme', 'dark');
    // }
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  const themeColors = {
    light: {
      primary: '#fafafa',
      secondary: '#020202',
    },
    dark: {
      primary: '#020202',
      secondary: '#fcfcfc',
    },
  };

  const colors = themeColors[theme];
  const data = { theme, colors, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
