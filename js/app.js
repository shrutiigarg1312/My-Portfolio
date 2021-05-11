

function myFunction() {
    let x = document.getElementById("nav-items");
    let logo=document.getElementById("logo");
    if (x.className === "navitems" && logo.className === "") {
        x.className += " responsive"; 
        logo.className = "logo-invisible";
    } else {
        x.className = "navitems";
        logo.className = "";
    //   x.style.display = "block";
     
    }
  }

