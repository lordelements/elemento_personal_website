
function myFunction() {
    var x = document.getElementById("navbars");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }