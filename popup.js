const note = document.getElementById("note");
const keyLocalStorage = "notes";

function downloadAsTxt(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8;" });

  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");

  downloadLink.href = url;
  downloadLink.download = filename;

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
}

note.value = localStorage.getItem(keyLocalStorage) || "Type anywhere";

note.focus();

note.addEventListener("input", () => {
  localStorage.setItem(keyLocalStorage, note.value);
});

const downloadNotes = document.getElementById("download-notes");
downloadNotes.addEventListener("click", () => {
  downloadAsTxt(`my-quick-note-in-${new Date().getTime()}`, note.value);
});
