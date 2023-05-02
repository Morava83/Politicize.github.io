function politicize() {

  var name = document.getElementById("input").value;
  var image = document.getElementById("image");

  //questions taken from: https://www.pewresearch.org/
  
  var Q9 = prompt("People being too easily offended by things others say is not a problem at all"); //R
  var Q10 = prompt("People saying things that are very offensive to others is a major problem"); //D
  var Q11 = prompt("When it comes to candidates for political office, I usually feel like there is at least one candidate who shares most of my views"); //R
  var Q12 = prompt("In general, White people benefit a fair amount from advantages in society that Black people do not have?"); //D
  var Q13 = prompt("Greater social acceptance of people who are transgender is somewhat bad for society"); //R
  var Q14 = prompt("Overall, people who are convicted of crimes in this country serve too much time in prison"); //D
  var Q15 = prompt("Government policies should support religious views and beliefs"); //R
  var Q16 = prompt("It would be acceptable if another country became as militarily powerful as the U.S."); //D
  var Q17 = prompt("On a scale of 0 to 100, where 0 means you feel as cold and negative as possible and 100 means you feel as warm and positive as possible\nHow do you feel toward Democrats?");
  var Q18 = prompt("On a scale of 0 to 100, where 0 means you feel as cold and negative as possible and 100 means you feel as warm and positive as possible\nHow do you feel toward Republicans?");



  const responses = [Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16]

  republicanCounter = 0;
  democraticCounter = 0;
  loopCounter = 0;
  for (let response of responses) {
    loopCounter++;
    if (response.toLowerCase() == "yes" && loopCounter % 2 == 0) {
      democraticCounter++;
    } else if (response.toLowerCase() == "yes" && loopCounter % 2 == 1) {
      republicanCounter++;
    }
  }

  if (Q17 > 50) {
    democraticCounter++;
  }

  if (Q18 > 50) {
    republicanCounter++;
  }

  if (republicanCounter > democraticCounter) {
    image.src = "https://upload.wikimedia.org/wikipedia/commons/9/9b/Republicanlogo.svg";
    document.getElementById("name").innerHTML = name + " is a Republican";
  } else if (democraticCounter > republicanCounter) {
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/DemocraticLogo.svg/1200px-DemocraticLogo.svg.png";
    document.getElementById("name").innerHTML = name + " is a Democrat";
  } else {
    image.src = "https://www.vhv.rs/dpng/d/430-4308955_united-states-presidential-election-democratic-party-democrats-and.png";
    document.getElementById("name").innerHTML = name + " is a Moderate/Independent";
  }
	
  document.getElementById("input").value = "";

}
