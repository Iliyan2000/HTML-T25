import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  
  const image = document.querySelector(".image");
  image.addEventListener("click", () => {
	image.scale(2, 2);
  });
});
