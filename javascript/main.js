// sticky navigation bar
window.onscroll = function() {stickyHeader()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//responsive navigation
function toggleResponsive() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
