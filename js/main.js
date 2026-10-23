// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "Close" : "Menu";
  });
}

// Scholarship filter (resources page)
const filterButtons = document.querySelectorAll(".filters button");
const rows = document.querySelectorAll(".scholarships tbody tr");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.setAttribute("aria-pressed", b === btn));
    const want = btn.dataset.filter;
    rows.forEach((row) => {
      row.hidden = want !== "all" && !row.dataset.grade.includes(want);
    });
  });
});

// Keep the footer year current
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
