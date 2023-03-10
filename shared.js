const backdrop = document.querySelector(".backdrop");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavToggleButton = document.querySelector(".toggle-button");

const closeModal = () => {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  mobileNav.style.display = "none";
};

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", closeModal);
mobileNavToggleButton.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backdrop.classList.add("open");
});
