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

