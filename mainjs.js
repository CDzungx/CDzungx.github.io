document.addEventListener("DOMContentLoaded", () => {
  const menu = new MmenuLight(
    document.querySelector("#mobileNav"),
    "(max-width: 65em)"
  );

  const navigator = menu.navigation();
  const drawer = menu.offcanvas();

  document
    .querySelector("a[href='#mobileNav']")
    .addEventListener("click", (evnt) => {
      evnt.preventDefault();
      drawer.open();
    });
});

window.onload = function () {
  Particles.init({
    selector: ".background",
    maxParticles: 80,
    minDistance: 150,
    connectParticles: true,
  });
};
