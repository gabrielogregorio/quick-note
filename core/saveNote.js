const note = document.getElementById("textarea");
const keyLocalStorageNotes = "notes";

note.value = localStorage.getItem(keyLocalStorageNotes) || "Type anywhere";

note.focus();

note.addEventListener("input", () => {
  localStorage.setItem(keyLocalStorageNotes, note.value);
});
