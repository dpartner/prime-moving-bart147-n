export default function handleSelect(ev) {
  // console.log(ev);
  const options = [...ev.target.options];
  console.log(options);
  let customOptionsWrap = ev.target.nextElementSibling;

  const htmlArr = options.map(
    option =>
      `<span class="select-focus" data-select="${option.value}">${option.text}</span>`
  );
  customOptionsWrap.innerHTML = htmlArr.join('');
  customOptionsWrap.classList.add('is-show');
  let userSelect;

  customOptionsWrap.addEventListener('click', () => {
    userSelect = ev.target.dataset.select;
  });
  console.log(userSelect);
}
