import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  
  const i = document.querySelector("canvas");
  i.addEventListener("click", () => {
	const image = i.getContext("2d");
	image.scale(2, 2);
  });
});
