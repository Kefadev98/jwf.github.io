document.addEventListener("DOMContentLoaded", function () {
  var menuStart = document.querySelector(".menu__start");
  var menuNavigation = document.querySelector(".menu__navigation");

  menuNavigation.style.display = "none";

  menuStart.addEventListener("click", function () {
    if (menuNavigation.style.display === "none") {
      menuNavigation.style.display = "flex";
    } else {
      menuNavigation.style.display = "none";
    }
  });
});

const listItems = document.querySelectorAll(".list");

function handleListClick() {
  const container = this.querySelector(".list__container");
  if (container) {
    const isSmallScreen = window.innerWidth <= 991;
    if (isSmallScreen) {
      container.style.display =
        container.style.display === "block" ? "none" : "block";
    }
  }
}

function handleListMouseover() {
  const container = this.querySelector(".list__container");
  if (container) {
    const isSmallScreen = window.innerWidth <= 991;
    if (!isSmallScreen) {
      container.style.display = "block";
    }
  }
}

function handleListMouseout() {
  const container = this.querySelector(".list__container");
  if (container) {
    const isSmallScreen = window.innerWidth <= 991;
    if (!isSmallScreen) {
      container.style.display = "none";
    }
  }
}

listItems.forEach((listItem) => {
  listItem.addEventListener("click", handleListClick);
  listItem.addEventListener("mouseover", handleListMouseover);
  listItem.addEventListener("mouseout", handleListMouseout);
});

//Header
document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var header = document.querySelector(".header");

  navbarToggler.addEventListener("click", function () {
    header.classList.toggle("expanded");
  });
});
