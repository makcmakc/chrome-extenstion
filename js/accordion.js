// Accordion Action
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("open")) {
      el.classList.remove("open")
    } else {
      accordionItem.forEach((el2) => el2.classList.remove("open"))
      el.classList.add("open")
    }
  })
)
