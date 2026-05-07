document.addEventListener("DOMContentLoaded", () => {

  // Wait slightly for injected header

  setTimeout(() => {

    // ACTIVE NAV LINK

    const currentPage =
      window.location.pathname.split("/").pop()
      || "index.html";

    const navLinks =
      document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

      const href =
        link.getAttribute("href");

      if (href === currentPage) {

        link.classList.add("active");
      }
    });

    // DARK MODE

    const themeToggle =
      document.getElementById("themeToggle");

    if (!themeToggle) return;

    // LOAD THEME

    if (localStorage.getItem("theme") === "dark") {

      document.body.classList.add("dark-mode");

      themeToggle.innerHTML = "☀️";
    }

    // TOGGLE

    themeToggle.addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");

      const isDark =
        document.body.classList.contains("dark-mode");

      localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
      );

      themeToggle.innerHTML =
        isDark ? "☀️" : "🌙";
    });

  }, 100);

});