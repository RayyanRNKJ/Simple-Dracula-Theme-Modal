const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");

const openModal = () => {
  modalContainer.classList.add("open-modal-container");
  modal.classList.add("open-modal");
};

const closeModal = () => {
  modalContainer.classList.remove("open-modal-container");
  modal.classList.remove("open-modal");
};

const body = document.querySelector("body");
const openModalBtn = document.querySelector(".open-modal-btn");
const setThemeBtn = document.querySelector(".set-theme-btn");
const unSetThemeBtn = document.querySelector(".unset-theme-btn");

const setTheme = () => {
  body.classList.add("set-theme");
  openModalBtn.classList.add("open-modal-btn-set-theme");
  setThemeBtn.classList.add("hide-set-theme-btn");
  unSetThemeBtn.classList.add("show-unset-theme-btn");
  closeModal();
};

const unSetTheme = () => {
  body.classList.remove("set-theme");
  openModalBtn.classList.remove("open-modal-btn-set-theme");
  setThemeBtn.classList.remove("hide-set-theme-btn");
  unSetThemeBtn.classList.remove("show-unset-theme-btn");
  closeModal();
};
