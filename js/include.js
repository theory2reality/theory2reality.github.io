async function loadComponent(id, file) {

  const element =
    document.getElementById(id);

  if (!element) return;

  const response =
    await fetch(file);

  const html =
    await response.text();

  element.innerHTML = html;
}

// LOAD COMPONENTS

document.addEventListener("DOMContentLoaded", async () => {

  await loadComponent(
    "header-placeholder",
    "components/header.html"
  );

  await loadComponent(
    "footer-placeholder",
    "components/footer.html"
  );

});