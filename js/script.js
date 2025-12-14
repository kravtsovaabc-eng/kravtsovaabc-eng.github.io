document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  const stored = localStorage.getItem("billie-theme");

  if (stored === "dark" || stored === "light") {
    body.setAttribute("data-theme", stored);
    toggle.textContent = stored === "dark" ? "🖤" : "🤍";
  }

  toggle.addEventListener("click", () => {
    const current = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", current);
    localStorage.setItem("billie-theme", current);
    toggle.textContent = current === "dark" ? "🖤" : "🤍";
  });
});
