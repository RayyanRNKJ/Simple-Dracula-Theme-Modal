const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn")
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

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);