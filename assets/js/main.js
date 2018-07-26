// document.getElementById("divFirst").scrollIntoView();


// $(document).ready(function () {

//     $(function () {
//         $('.nav__list li a').click(function (e) {
//             e.preventDefault();
//             alert("hi");            
//             $(this).addClass('active');
//         });
//     });
// });




// Get the container element
var navContainer = document.getElementById("myNavList");

// // Get all buttons with class="btn" inside the container
// var navItems = navContainer.getElementsByClassName("nav__list-item");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < navItems.length; i++) {
//   navItems[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     console.log(navItems);
//   });
// }


var navItems = navContainer.getElementsByClassName("nav__list-item");

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
  });
    
}

console.log(navItems);


