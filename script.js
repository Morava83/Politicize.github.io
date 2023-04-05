function politicize() {
    document.body.appendChild(republicanImage);
    const inputText = document.getElementById("input-text").value;
    if (inputText.toLowerCase() === "donald trump") {
      document.body.innerHTML = "";
      const republicanImage = document.createElement("img");
      republicanImage.src = "https://www.worldatlas.com/r/w1200/upload/cf/5e/28/untitled-design-22.jpg";
      document.body.appendChild(republicanImage);
    } else if (inputText.toLowerCase() === "joe biden") {
      document.body.innerHTML = "";
      const democratImage = document.createElement("img");
      democratImage.src = "https://www.worldatlas.com/r/w1200/upload/ea/c3/c5/shutterstock-319420406.jpg";
      document.body.appendChild(democratImage);
    }
  }
  
  const politicizeButton = document.getElementById("politicize-button");
  politicizeButton.addEventListener("click", politicize);
  