// Tag filter for Builds section
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll("#builds-grid .card");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      if (filter === "all") {
        card.classList.remove("hidden");
      } else {
        const tags = card.dataset.tags || "";
        card.classList.toggle("hidden", !tags.includes(filter));
      }
    });
  });
});
