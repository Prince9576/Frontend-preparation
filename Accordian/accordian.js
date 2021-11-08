const accordians = Array.from(
  document.getElementsByClassName("accordian__item--header")
);

accordians.forEach((accordian, index) => {
  accordian.addEventListener("click", function (event) {
    const sibling = this.nextElementSibling;
    sibling.classList.toggle("show");
    closeAllItems(index);
    const icon = accordian.querySelector("i");
    icon.classList.toggle("active");
    console.log({ icon, index });
  });
});

function closeAllItems(index) {
  accordians.forEach((accordian, i) => {
    if (index !== i) {
      console.log("Accordian", accordian);
      const sibling = accordian.nextElementSibling;
      sibling.classList.remove("show");
    }
  });
}
