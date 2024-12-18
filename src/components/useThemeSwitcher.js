// import React, { useEffect, useState } from 'react'

// const useThemeSwitcher = () => {
//     const preferDarkQuery = "(prefer-color-scheme: dark)";
//     const [mode, setMode] = useState("");

//     useEffect(() => {
//         const mediaQuery = window.matchMedia(preferDarkQuery);
//         const userPref = window.localStorage.getItem("theme");

//         const handleChange = () => {
//             if(userPref) {
//                 let check = userPref === "dark" ? "dark" : "light";
//                 setMode(check);
//                 if(check === "dark") {
//                     document.documentElement.classList.add("dark");
//                 }
//                 else {
//                     document.documentElement.classList.remove("dark");
//                 }
//             }
//             else {
//                 let check = mediaQuery.matches ? "dark" : "light";
//                 setMode(check);
//                 if(check === "dark") {
//                     document.documentElement.classList.add("dark");
//                 }
//                 else {
//                     document.documentElement.classList.remove("dark");
//                 }
//             }
//         }

//         handleChange();

//         mediaQuery.addEventListener("change", handleChange)

//         return () => {
//             mediaQuery.removeEventListener("change", handleChange)
//         }
//     })

//     useEffect(() => {
//         if(mode === "dark") {
//             window.localStorage.setItem("theme", "dark");
//             document.documentElement.classList.add("dark");
//         }
//         else {
//             window.localStorage.setItem("theme", "light");
//             document.documentElement.classList.remove("dark");
//         }
//     }, [mode])

//   return [mode, setMode]
// }

// export default useThemeSwitcher

import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";

  const [mode, setMode] = useState(null); // Initial state is null

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    const systemPref = mediaQuery.matches ? "dark" : "light";
    const initialMode = userPref || systemPref;

    setMode(initialMode);
    updateThemeClass(initialMode);

    const handleChange = () => {
      const systemPref = mediaQuery.matches ? "dark" : "light";
      const userPref = window.localStorage.getItem("theme");
      const newMode = userPref || systemPref;

      setMode(newMode);
      updateThemeClass(newMode);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem("theme", mode);
      updateThemeClass(mode);
    }
  }, [mode]);

  const updateThemeClass = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return [mode, setMode];
};

export default useThemeSwitcher;