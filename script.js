document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const shuriken = document.getElementById("shuriken");

  function spinShuriken() {
    shuriken.style.transform = "translateX(-50%) rotate(1080deg)";
    setTimeout(() => {
      shuriken.style.transform = "translateX(-50%) rotate(0deg)";
    }, 1000);
  }

  spinShuriken();
  logo.addEventListener("click", spinShuriken);
});
