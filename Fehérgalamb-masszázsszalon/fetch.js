async function loadPart(id, file) {
  const response = await fetch(file);
  const text = await response.text();
  document.getElementById(id).innerHTML = text;
}

// loadPart("nav", "parts/header.html")
loadPart("main", "parts/main.html")