import toogleMobMenu from './js/mob-menu';
import shownFaqAnswer from './js/faq';
import { handleSelect } from './js/select';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const domElements = {
  mobMenuButton: document.querySelector('.mob-menu-button'),
  mobMenu: document.querySelector('.mobile-menu'),
  faqList: document.querySelector('.faq-list'),
  faqAnswer: document.querySelectorAll('.faq-list-item-answer'),
  modalBackDrop: document.querySelector('.modal-backdrop'),
  modalForm: document.querySelector('.modal-form'),
  modalCloseButton: document.querySelector('.modal-close-button'),
  modalServiceSelect: document.querySelector('[data-listname="service"]'),
  modalRequirementSelect: document.querySelector(
    '[data-listname="requirement"]'
  ),
};

domElements.mobMenuButton.addEventListener('click', () => {
  toogleMobMenu(domElements);
});

domElements.faqList.addEventListener('click', ev => {
  shownFaqAnswer(ev, domElements);
});

domElements.modalForm.addEventListener('click', ev => {
  if (ev.target.dataset.type === 'customSelect') {
    const listName = ev.target.name;
    handleSelect(ev, listName);
  } else {
    domElements.modalServiceSelect.classList.remove('is-show');
    domElements.modalRequirementSelect.classList.remove('is-show');
  }
});

domElements.modalCloseButton.addEventListener('click', () =>
  domElements.modalBackDrop.classList.add('is-hidden')
);

document.querySelector('body').addEventListener('click', ev => {
  if (ev.target.dataset.set === 'open-modal') {
    domElements.modalBackDrop.classList.remove('is-hidden');
  }
});

flatpickr('#date', {
  position: 'below center',
  onChange: function (selectedDates, dateStr, instance) {
    console.log(dateStr);
  },
  minDate: Date.now(),
  static: true,
  disableMobile: true,
});
