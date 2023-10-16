"use strict";
const basePage = document.getElementById("app");
const updateTheme = document.getElementById("change-theme");
const localStorageKeyPreferenceTheme = "preferenceLocalStorage";
const themes = ["dark", "yellow", "blue", "green", "pink", "white"];
basePage.classList.toggle(localStorage.getItem(localStorageKeyPreferenceTheme) || themes[0]);
updateTheme.addEventListener("click", () => {
    const actualClass = basePage.classList[0];
    const findActualClass = themes.findIndex((classItem) => actualClass.includes(classItem));
    let newClass = "";
    if (findActualClass === -1 || findActualClass === themes.length - 1) {
        newClass = themes[0];
    }
    else {
        newClass = themes[findActualClass + 1];
    }
    basePage.classList.remove(actualClass);
    basePage.classList.add(newClass);
    localStorage.setItem(localStorageKeyPreferenceTheme, newClass);
});
