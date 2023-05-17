function switchview() {
    var checkbox = document.getElementById("switch");
    var content = document.getElementById("main-content-container");
    var revision = document.getElementById("revision-content-container");
    /*const revision = document.querySelectorAll(".r-c-c")*/
    var revelements = document.getElementsByClassName("card");

    if (checkbox.checked) {
        content.style.display = "none";
        revision.style.display = "flex";
            for (var i = 0; i < revelements.length; i++) {
            revelements[i].style.display = "block";
        }
    } else {
        content.style.display = "block";
        revision.style.display = "none";
            for (var i = 0; i < revelements.length; i++) {
            revelements[i].style.display = "none";
        }
      }
    }