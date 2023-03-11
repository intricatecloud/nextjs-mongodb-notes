import React, { useState, useContext, useEffect, createContext } from "react";

const DarkModeContext = createContext(null);

export function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  function updateTheme() {
    const currentTheme = localStorage.getItem("isDarkMode") || "false";
    if (currentTheme === "true") {
      document.body.classList.add("dark");
      setDarkMode(true);
    } else {
      document.body.classList.remove("dark");
      setDarkMode(false);
    }
  }
  useEffect(() => {
    updateTheme();
  }, []);
  function changeDarkMode(value) {
    localStorage.setItem("isDarkMode", value.toString());
    updateTheme();
  }

  const contextValue = {
    isDarkMode,
    changeDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};
