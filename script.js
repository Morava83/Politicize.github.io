const button = document.querySelector("button");
const input = document.querySelector("input");
const trumpImgUrl = "https://static.independent.co.uk/2021/03/10/03/GettyImages-1304610824%20%281%29.jpg?quality=50&width=640&auto=webp";
const bidenImgUrl = "https://phantom-marca.unidadeditorial.es/beb593b2ff158ad65735ee196da6694e/crop/11x0/643x421/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/26/16458863622431.jpg";
const container = document.querySelector("#container");

button.addEventListener("click", () => {
  const inputValue = input.value.toLowerCase();
  if (inputValue === "donald trump") {
    container.innerHTML = `<div id="trump">
                              <img src="${trumpImgUrl}" alt="Donald Trump">
                            </div>
                            <div id="republican">
                              <img src="https://www.seekpng.com/png/detail/390-3902928_republican-logo-clip-art-republican-elephant.png" alt="Republican">
                            </div>`;
  } else if (inputValue === "joe biden") {
    container.innerHTML = `<div id="democrat">
                              <img src="https://www.logolynx.com/images/logolynx/04/040c415eef277a6b3a34c10e7de26d83.png" alt="Democrat">
                            </div>
                            <div id="biden">
                              <img src="${bidenImgUrl}" alt="Joe Biden">
                            </div>`;
  } else {
    alert("Please enter 'Donald Trump' or 'Joe Biden'");
  }
  input.value = "";
});

  