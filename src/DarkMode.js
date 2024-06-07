
// import React, { createContext, useState, useEffect, useContext } from 'react';

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     useEffect(() => {
//         const storedDarkMode = localStorage.getItem('darkMode') === 'true';
//         setIsDarkMode(storedDarkMode);
//         applyTheme(storedDarkMode);
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('darkMode', isDarkMode);
//         applyTheme(isDarkMode);
//     }, [isDarkMode]);

//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     const applyTheme = (darkMode) => {
//         const root = document.documentElement;
//         if (darkMode) {
//             root.classList.add('dark-mode');
//         } else {
//             root.classList.remove('dark-mode');
//         }
//     };

//     return (
//         <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//             {children}
//         </DarkModeContext.Provider>
//     );
// };

// export const useDarkMode = () => useContext(DarkModeContext);

// import React from 'react';
// import { useTheme } from './ThemeContext';

// const DarkMode = () => {
//   const { darkMode, toggleDarkMode } = useTheme();

//   return (
//     <div className="dark-mode-toggle">
//       <label className="switch">
//         <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
//         <span className="slider round"></span>
//       </label>
//     </div>
//   );
// };

// export default DarkMode;
