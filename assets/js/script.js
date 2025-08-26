document.addEventListener("DOMContentLoaded", () => {
  const shuriken = document.getElementById("shuriken");

  if (shuriken) {
    shuriken.addEventListener("click", () => {
      shuriken.classList.add("spin");

      // Remove spin class after animation ends so it can spin again
      shuriken.addEventListener("animationend", () => {
        shuriken.classList.remove("spin");
      }, { once: true });
    });
  }
});
