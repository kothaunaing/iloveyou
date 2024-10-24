const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");
const okButton = document.querySelector(".okay-button");
const modalEl = document.querySelector(".modal");
const responseModalEl = document.querySelector(".response");
const userNameEl = document.querySelector(".username");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * innerWidth - noButton.offsetWidth;
  const y = Math.random() * innerHeight - noButton.offsetHeight;

  noButton.style.position = "absolute";
  noButton.style.left = `${Math.max(0, x)}px`;
  noButton.style.top = `${Math.max(0, y)}px`;
});

okButton.addEventListener("click", () => {
  if (!userNameEl.value.trim()) return;

  const name = userNameEl.value;

  document.querySelector(".text").innerText = `Do you love me, ${name}?`;
  modalEl.style.display = "none";
});

yesButton.addEventListener("click", () => {
  responseModalEl.style.display = "flex";

  noButton.style.display = "none";
});
