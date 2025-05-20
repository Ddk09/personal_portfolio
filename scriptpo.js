const nameText = "Hello, I'm Divya Kumari";
let nameIndex = 0;

function typeName() {
  if (nameIndex < nameText.length) {
    document.getElementById("namei-text").textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 50);
  } else {
    setTimeout(typeIntro, 300); // If you have an intro function, it will call here
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeName();
});

// Mobile nav toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Contact form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! Thank you for contacting me.");
    this.reset();
  });
}

// Navbar link click: manually set active
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Highlight active link on scroll (with Home detection)
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('header, section'); // Includes #home (header) and other sections
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
