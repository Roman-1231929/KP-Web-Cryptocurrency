document.addEventListener("DOMContentLoaded", function () {
  // === Кнопка "Вгору" ===
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // === Модальне вікно ===
  const modal = document.getElementById("modal");
  const openButtons = document.querySelectorAll(".openModal");
  const closeButton = document.getElementById("closeModal");

  if (modal && closeButton) {
    openButtons.forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        modal.classList.remove("hidden");
      });
    });

    closeButton.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    window.addEventListener("click", e => {
      if (e.target === modal) modal.classList.add("hidden");
    });

    window.addEventListener("keydown", e => {
      if (e.key === "Escape") modal.classList.add("hidden");
    });

    const form = document.getElementById("registerForm");
    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Форма відправлена!");
        modal.classList.add("hidden");
      });
    }
  }
});
// JavaScript для відкриття/закриття модального вікна
document.getElementById("openModal").onclick = function() {
  document.getElementById("modal").style.display = "block";
};
document.querySelector(".close").onclick = function() {
  document.getElementById("modal").style.display = "none";
};
window.onclick = function(event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};
