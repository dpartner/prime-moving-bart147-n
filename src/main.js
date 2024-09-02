import toogleMobMenu from './js/mob-menu';

const domElements = {
  mobMenuButton: document.querySelector('.mob-menu-button'),
  mobMenu: document.querySelector('.mobile-menu'),
};

domElements.mobMenuButton.addEventListener('click', () => {
  toogleMobMenu(domElements);
});
