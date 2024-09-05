export default function shownFaqAnswer(ev, { faqAnswer }) {
  ev.preventDefault();
  if (ev.target.classList.contains('faq-list-item-answer')) {
    console.log(2);
  }
  console.log(ev);
  console.log(faqAnswer);
  console.log(ev.target.nextElementSibling);
  ev.target.nextElementSibling.classList.toggle('is-show');
  ev.target.firstElementChild.classList.toggle('rotate');
}
