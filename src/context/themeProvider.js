import { createContext, useState } from 'react';
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  const themeColors = {
    light: {
      primary: '#fafafa',
      secondary: '#111827',
    },
    dark: {
      primary: '#111827',
      secondary: '#fcfcfc',
    },
  };

  const colors = themeColors[theme];
  const data = { theme, colors, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
