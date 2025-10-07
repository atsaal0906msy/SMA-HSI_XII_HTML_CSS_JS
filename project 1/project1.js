const tombolMode = document.querySelector("#tombol-mode");

tombolMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // ubah teks tombol sesuai mode
  if (document.body.classList.contains("dark-mode")) {
    tombolMode.textContent = "Light mode";
  } else {
    tombolMode.textContent = "Dark mode";
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".nav-items");

menuToggle.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
