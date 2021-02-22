function myFunction() {
  var x = document.getElementById("select-time").value;
  var a = document.getElementById("year");
  var b = document.getElementById("month");
  var c = document.getElementById("week");
  //console.log(x);
  if (x == 1) {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
  }
  if (x == 2) {
    b.style.display = "block";
    a.style.display = "none";
    c.style.display = "none";
  }
  if (x == 3) {
    c.style.display = "block";
    b.style.display = "none";
    a.style.display = "none";
  }
}

//document.getElementById("select-time").onchange = myFunction();

