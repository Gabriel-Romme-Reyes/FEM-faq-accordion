var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    let firstsvg = this.lastElementChild.previousElementSibling;
    let lastsvg = this.lastElementChild;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      lastsvg.style.display ="none";
      firstsvg.style.display ="block";
    } else {
      panel.style.display = "block";
      lastsvg.style.display ="block";
      firstsvg.style.display ="none";
    }
  });
}