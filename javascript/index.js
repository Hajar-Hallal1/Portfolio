function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const icon = document.getElementById('menu-icon');

    navbar.classList.toggle('active');

    // Toggle hamburger/X icon
    if (navbar.classList.contains('active')) {
      icon.textContent = '✖';
    } else {
      icon.textContent = '☰';
    }
}

emailjs.init("nXEeNWivK3Pw1uyu4"); 

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  //e.preventDefault();

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


// animation on scroll view
const animatedEls = document.querySelectorAll('[style*="animation"], [style*="-animation"], [class*="animate"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running'; // start animation
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // triggers when 10% of the element is visible
});

// Pause all animations initially
animatedEls.forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});












