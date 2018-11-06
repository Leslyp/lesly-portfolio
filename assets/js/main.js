// slide to about section when arrow is clicked
function slideArrow() {
  document.getElementById("about").scrollIntoView();
}

// get side nav to show / close on mobile
function addShowClass() {
  document.getElementById("mySidenav").classList.add("showNav");
}

function removeShowClass() {
  document.getElementById("mySidenav").classList.remove("showNav");
}


// show active nav item on desktop
// var navItems = document.getElementsByClassName("nav__list-item");
// console.log(navItems);

// for (var i = 0; i < navItems.length; i++) {
//   navItems[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("selected");
//     current[0].className = current[0].className.replace(" selected", "");
//         this.className += " selected";
//   });
    
// }