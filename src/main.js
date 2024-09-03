import toogleMobMenu from './js/mob-menu';
import shownFaqAnswer from './js/faq';

const domElements = {
  mobMenuButton: document.querySelector('.mob-menu-button'),
  mobMenu: document.querySelector('.mobile-menu'),
  faqList: document.querySelector('.faq-list'),
  faqAnswer: document.querySelectorAll('.faq-list-item-answer'),
};

domElements.mobMenuButton.addEventListener('click', () => {
  toogleMobMenu(domElements);
});

domElements.faqList.addEventListener('click', ev => {
  shownFaqAnswer(ev, domElements);
});
