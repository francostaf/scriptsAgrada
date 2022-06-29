function initAccordion() {
  const accordionList = document.querySelectorAll("[data-accordions] dt");
  const activeClass = "active";
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);
  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  accordionList.forEach((i) => {
    i.addEventListener("click", activeAccordion);
  });
}
initAccordion();
