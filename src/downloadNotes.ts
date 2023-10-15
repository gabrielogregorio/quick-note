const textareaNotes = document.getElementById("textarea") as HTMLTextAreaElement;


function downloadAsTxt(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8;" });

  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");

  downloadLink.href = url;
  downloadLink.download = filename;

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
}

const downloadNotes = document.getElementById("note-download") as HTMLElement;

downloadNotes.addEventListener("click", () => {
  downloadAsTxt(`my-quick-note-in-${new Date().getTime()}`, textareaNotes.value);
});
