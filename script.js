const burgerOpenButton = document.querySelector(".burger_open_button");
const burgerCloseButton = document.querySelector(".burger_close_button");
const navigation = document.querySelector(".navigation");

const openFunction = () => {
  document.querySelector(".mobile_main_div").classList.add("hidden");
  document.querySelector(".mobile_footer").classList.add("hidden");
  navigation.classList.remove("hidden");
  burgerCloseButton.classList.remove("hidden");
  burgerOpenButton.classList.add("hidden");
};
const closeFunction = () => {
  burgerOpenButton.classList.remove("hidden");
  burgerCloseButton.classList.add("hidden");
  document.querySelector(".mobile_main_div").classList.remove("hidden");
  document.querySelector(".mobile_footer").classList.remove("hidden");
  navigation.classList.add("hidden");
};
burgerOpenButton.addEventListener("click", openFunction);
burgerCloseButton.addEventListener("click", closeFunction);
