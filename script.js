function politicize() {
    var input = document.getElementById("input").value.toLowerCase();
    var image = document.getElementById("image");
    if (input === "donald trump") {
      image.src = "https://www.worldatlas.com/r/w1200/upload/cf/5e/28/untitled-design-22.jpg";
    } else if (input === "joe biden") {
      image.src = "https://www.worldatlas.com/r/w1200/upload/ea/c3/c5/shutterstock-319420406.jpg";
    } else {
      alert("Invalid input.");
    }
    document.getElementById("input").value = "";
  }
  