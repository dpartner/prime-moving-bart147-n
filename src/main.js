import toogleMobMenu from './js/mob-menu';
import shownFaqAnswer from './js/faq';
import handleSelect from './js/select';

const domElements = {
  mobMenuButton: document.querySelector('.mob-menu-button'),
  mobMenu: document.querySelector('.mobile-menu'),
  faqList: document.querySelector('.faq-list'),
  faqAnswer: document.querySelectorAll('.faq-list-item-answer'),
  modalForm: document.querySelector('.modal-form'),
};

domElements.mobMenuButton.addEventListener('click', () => {
  toogleMobMenu(domElements);
});

domElements.faqList.addEventListener('click', ev => {
  shownFaqAnswer(ev, domElements);
});

document.querySelector('.modal-input.select').addEventListener('focus', ev => {
  const selectedValue = handleSelect(ev);
  console.log(selectedValue);
});
