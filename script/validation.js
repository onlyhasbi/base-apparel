(() => {
  "use strict";
  var form = document.querySelector("form");

  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      form.classList.toggle("invalid", !form.checkValidity());
    },
    false
  );
})();
