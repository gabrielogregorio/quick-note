"use strict";
const textareaNotes = document.getElementById("textarea");
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
const downloadNotes = document.getElementById("note-download");
downloadNotes.addEventListener("click", () => {
    downloadAsTxt(`my-quick-note-in-${new Date().getTime()}`, textareaNotes.value);
});
