function createUUID() {
  const newUUID = crypto.randomUUID();
  document.getElementById("uuid").textContent = newUUID;
}

function copyUUID() {
  const copyText = document.getElementById("uuid");
  navigator.clipboard.writeText(copyText.textContent);
  document.getElementById("copy-button-text").textContent = "Copied!";
  setTimeout(
    () => document.getElementById("copy-button-text").textContent = "Copy",
    1000,
  );
}
