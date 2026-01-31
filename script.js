// Lucide icons
lucide.createIcons();

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("show");
});

// Dark mode
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeIcon.setAttribute("data-lucide", "sun");
    lucide.createIcons();
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");

    themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    lucide.createIcons();
});

// Scroll reveal animations
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

// Contact form validation
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", e => {
    e.preventDefault();

    const name = name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        msg.textContent = "Please fill in all fields.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";
    form.reset();
});