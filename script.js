function politicize() {
    var input = document.getElementById("input").value.toLowerCase();
    var image = document.getElementById("image");
    if (input === "donald trump") {
      image.src = "https://upload.wikimedia.org/wikipedia/commons/9/9b/Republicanlogo.svg";
    } else if (input === "joe biden") {
      image.src = "https://img.freepik.com/premium-vector/donkey-colors-american-flag-symbol-democratic-party-usa-isolated-icon-vector-illustration-design_431724-7343.jpg";
    } else {
      alert("Invalid input.");
    }
    document.getElementById("input").value = "";
  }
  //new photo