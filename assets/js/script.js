// Spin shuriken when page loads
window.addEventListener("load", () => {
  let shuriken = document.getElementById("shuriken");
  if (shuriken) {
    shuriken.classList.add("spin");
    setTimeout(() => shuriken.classList.remove("spin"), 600);
  }
});

// Spin again on click
function spinShuriken() {
  let shuriken = document.getElementById("shuriken");
  if (shuriken) {
    shuriken.classList.add("spin");
    setTimeout(() => shuriken.classList.remove("spin"), 600);
  }
}
