async function loadPart(id, file) {
  const response = await fetch(file);
  const text = await response.text();
  document.getElementById(id).innerHTML = text;
}

loadPart("header", "parts/header.html");
loadPart("nav", "parts/nav.html");