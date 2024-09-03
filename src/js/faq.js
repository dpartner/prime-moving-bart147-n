export default function shownFaqAnswer(ev, { faqAnswer }) {
  ev.preventDefault();
  console.log(ev);
  console.log(faqAnswer);
  console.log(ev.target.nextElementSibling);
  ev.target.nextElementSibling.classList.toggle('is-show');
  ev.target.firstElementChild.classList.toggle('rotate');
}
