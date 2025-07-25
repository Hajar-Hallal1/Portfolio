emailjs.init("nXEeNWivK3Pw1uyu4"); 

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_cn60gd8", "template_abii55u", this)
    .then(() => {
      message.textContent = "✅ Message sent successfully!";
      message.style.color = "lightgreen";
      form.reset();
    })
    .catch(() => {
      message.textContent = "❌ Failed to send. Please try again.";
      message.style.color = "red";
    });
});
