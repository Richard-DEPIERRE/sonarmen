window.onload = function () {
  document
    .getElementById("contactform")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_0f8h5tq", "template_q1loqbl", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
