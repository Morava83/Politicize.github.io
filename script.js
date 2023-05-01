function politicize() {
    var input = document.getElementById("input").value.toLowerCase();
    var image = document.getElementById("image");
    //const republicans = ["abraham lincoln", "ulysses s. grant", "ulysses grant", "rutherford b. hayes", "rutherford hayes", "james a. garfield", "james garfield", "chester a. arthur", "chester arthur", "benjamin harrison", "william mckinley", "theodore roosevelt", "william howard taft", "william taft", "warren g. harding", "warren harding", "calvin coolidge", "herbert hoover", "dwight d. eisenhower", "dwight eisenhower", "eisenhower", "richard nixon", "gerald ford", "ronald reagan", "george h.w. bush", "george bush", "george w. bush", "donald j. trump", "donald trump", "trump"];
    //const democrats = ["andrew jackson", "martin van buren", "martin buren", "james k. polk", "james polk", "franklin pierce", "james buchanan", "andrew johnson", "grover cleveland", "woodrow wilson", "franklin d. roosevelt", "franklin roosevelt", "fdr", "harry s. truman", "harry truman", "john f. kennedy", "john kennedy", "jfk", "lyndon b. johnson", "lyndon johnson", "james carter", "jimmy carter", "william clinton", "bill clinton", "barack obama", "joe biden", "biden"];
    //questions taken from: https://www.pewresearch.org/
    alert("hi");
    var Q1 = prompt("You would rather have a smaller government providing fewer services than a bigger government providing more services"); //R
    alert(Q1);
    alert("bye");
    var Q2 = prompt("America’s openness to people from all over the world is essential to who we are as a nation"); //D
    var Q3 = prompt("In general, would you say experts who study a subject for many years are usually WORSE at making good policy decisions than other people"); //R
    var Q4 = prompt("The U.S. has gained more than it has lost from increased trade"); //D
    var Q5 = prompt("Nothing needs to be done to ensure equal rights for all Americans regardless of their racial or ethnic backgrounds"); //R
    var Q6 = prompt("Business Corportations make too much profit"); //D
    var Q7 = prompt("It would bother you a lot to regularly hear people speak a language other than English in public places in your community"); //R
    var Q8 = prompt("There are other countries that are better than the U.S."); //D
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

    

    const responses = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,Q11,Q12,Q13,Q14,Q15,Q16]

    republicanCounter = 0;
    democraticCounter = 0;
    loopCounter = 0;
    for(let response of responses){
      loopCounter++;
      if(response.toLowerCase().equals("yes") && loopCounter % 2 == 0){
        democraticCounter++;
      }else if(response.toLowerCase().equals("yes") && loopCounter % 2 == 1){
        republicanCounter++;
      }
    }

    alert(republicanCounter);
    alert(democraticCounter);

    if(Q17 > 50){
      democraticCounter++;
    }
    
    if(Q18 > 50){
      republicanCounter++;
    }

    alert(republicanCounter);
    alert(democraticCounter);

    
    if (republicanCounter > democraticCounter) {
      alert("Republican");
      image.src = "https://upload.wikimedia.org/wikipedia/commons/9/9b/Republicanlogo.svg";
    } else if (democraticCounter > republicanCounter) {
      alert("Democrat");
      image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/DemocraticLogo.svg/1200px-DemocraticLogo.svg.png";
    } else {
      alert("Moderate");
      image.src = "https://www.vhv.rs/dpng/d/430-4308955_united-states-presidential-election-democratic-party-democrats-and.png";
    }
    
    document.getElementById("input").value = "";
  }
  