const textareaNotes2 = document.getElementById("textarea") as HTMLTextAreaElement;

const keyLocalStorageNotes = "notes";

textareaNotes2.value = localStorage.getItem(keyLocalStorageNotes) || "Type anywhere";

textareaNotes2.focus();

textareaNotes2.addEventListener("input", () => {
  localStorage.setItem(keyLocalStorageNotes, textareaNotes2.value);
});
