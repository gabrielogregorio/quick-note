import { downloadAsTxt } from "./utils";

const downloadNotes = document.getElementById("note-download");

downloadNotes.addEventListener("click", () => {
  downloadAsTxt(`my-quick-note-in-${new Date().getTime()}`, note.value);
});
