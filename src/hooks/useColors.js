import { useContext } from "react";
import ThemeContext from "../context/themeProvider";

const useColors = () => {
  const { colors } = useContext(ThemeContext);
  const { primary, secondary } = colors;

  console.log(primary, secondary)
  return {
    primary,
    secondary,
  };
};

export default useColors;
