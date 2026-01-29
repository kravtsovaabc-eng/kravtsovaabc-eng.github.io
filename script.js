"use strict";

const button = document.getElementById("startBreathing");
const text = document.getElementById("breathingText");

button.addEventListener("click", () => {
  text.textContent = "Inhale… 2… 3… 4… Hold… 2… 3… 4… Exhale… 2… 3… 4…";
});
