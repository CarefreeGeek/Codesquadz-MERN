const popupCardContainer = document.querySelector('.popup-card-container');
const closeButton = document.querySelector('.close-button button');
const popupCard = document.querySelector('.popup-card');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    popupCardContainer.classList.add('show');
  }, 5000);
});

closeButton.addEventListener('click', () => {
  popupCardContainer.classList.remove('show');
});

document.addEventListener('click', (e) => {
  if (e.target === popupCardContainer) {
    popupCardContainer.classList.remove('show');
  }
});