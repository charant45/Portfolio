let menuIcon = document.querySelector("#menu-bar-icone");
let navbar = document.querySelector(".navbar-container");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*='${id}']`)
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-container, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .project-card, .skills-container img, .certificates-card img",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-container h1, .about-img, .contact form", {
  origin: "left",
});
ScrollReveal().reveal(".home-container p, .about-container", {
  origin: "right",
});
