import { useState } from "react";
import SunIcon from "../../icons/sun-svgrepo-com.svg";
import MoonIcon from "../../icons/moon-svgrepo-com.svg";
import { useTheme } from "next-themes";

const Theme = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
 
  return (
    <button title="Theme" onClick={changeTheme} className="btn">
      <img src={theme === "dark" ? SunIcon : MoonIcon} width="25" alt="" />
    </button>
  );
};

export default Theme;
