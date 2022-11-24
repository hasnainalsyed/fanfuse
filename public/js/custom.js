
const accordionBtns = document.querySelectorAll('.accordion__heading');
accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {

    this.classList.toggle('is-open');
    let content = this.nextElementSibling;
    if (content.style.maxHeight > 0 + 'px') {
      //this is if the accordion is open
      content.setAttribute('hidden', 'true');
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.removeAttribute('hidden');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  };
});
