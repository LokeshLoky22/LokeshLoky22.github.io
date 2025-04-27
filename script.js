// script.js

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for your booking! We will contact you shortly.");
      form.reset();
    });
  }
});
