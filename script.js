function politicize() {
    var input = document.getElementById("input").value.toLowerCase();
    var image = document.getElementById("image");
    if (input === "donald trump") {
      image.src = "https://upload.wikimedia.org/wikipedia/commons/9/9b/Republicanlogo.svg";
    } else if (input === "joe biden") {
      image.src = "https://www.onthisday.com/images/photos/democratic-party-logo.jpg";
    } else {
      alert("Invalid input.");
    }
    document.getElementById("input").value = "";
  }
  