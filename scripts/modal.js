const openBtn = document.querySelector("#formBtn");
const body = document.body;
const successModal = createModal("Сообщение отправлено");

openBtn.addEventListener ("click", e => {
  body.appendChild(successModal);
})

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("modal__container");

const template = document.querySelector("#modalTemplate");

overlayElement.innerHTML = template.innerHTML;

overlayElement.addEventListener("click", e =>  {
  if (e.target === overlayElement) {
    closeElement.click();
  }
})

const closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  })

  const contentElement = overlayElement.querySelector(".content");
  contentElement.innerHTML = content;

return overlayElement;

}
