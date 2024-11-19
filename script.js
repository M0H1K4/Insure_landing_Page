
// const burgerOpenButton = document.querySelector('.burger_open_button')
// const burgerCloseButton = document.querySelector('.burger_close_button')
// const navigation = document.querySelector('.navigation')

// burgerOpenButton.addEventListener('click', () => {
//     console.log("clicked")
//     navigation.classList.add('visable')
//     burgerCloseButton.classList.add('hidden')
//     burgerCloseButton.classList.add('visable')
// })


// // Close Menu

// burgerCloseButton.addEventListener('click', () => {
//     navigation.classList.remove('visable')
//     burgerCloseButton.classList.remove('hidden')
//     burgerCloseButton.classList.remove('visable')
// })


const burgerOpenButton = document.querySelector('.burger_open_button');
const burgerCloseButton = document.querySelector('.burger_close_button');
const navigation = document.querySelector('.navigation');

burgerOpenButton.addEventListener('click', () => {
  console.log("clicked");
  navigation.classList.add('visable'); // Show navigation
  burgerOpenButton.classList.add('hidden'); // Hide open button
  burgerCloseButton.classList.add('visable'); // Show close button
});

// Close Menu
burgerCloseButton.addEventListener('click', () => {
  navigation.classList.remove('visable'); // Hide navigation
  burgerOpenButton.classList.remove('hidden'); // Show open button
  burgerCloseButton.classList.remove('visable'); // Hide close button
});
