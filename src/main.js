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
  modalForm: document.querySelector('.modal-form'),
  modalServiceSelect: document.querySelector('[data-listname="service"]'),
  modalRequirementSelect: document.querySelector('[data-listname="service"]'),
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

flatpickr('#date', {
  position: 'below',
  onChange: function (selectedDates, dateStr, instance) {
    console.log(dateStr);
  },
  minDate: Date.now(),
});
