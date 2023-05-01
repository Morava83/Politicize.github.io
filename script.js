function politicize() {
    var input = document.getElementById("input").value.toLowerCase();
    var image = document.getElementById("image");
    const republicans = ["abraham lincoln", "ulysses s. grant", "ulysses grant", "rutherford b. hayes", "rutherford hayes", "james a. garfield", "james garfield", "chester a. arthur", "chester arthur", "benjamin harrison", "william mckinley", "theodore roosevelt", "william howard taft", "william taft", "warren g. harding", "warren harding", "calvin coolidge", "herbert hoover", "dwight d. eisenhower", "dwight eisenhower", "eisenhower", "richard nixon", "gerald ford", "ronald reagan", "george h.w. bush", "george bush", "george w. bush", "donald j. trump", "donald trump", "trump"];
    const democrats = ["andrew jackson", "martin van buren", "martin buren", "james k. polk", "james polk", "franklin pierce", "james buchanan", "andrew johnson", "grover cleveland", "woodrow wilson", "franklin d. roosevelt", "franklin roosevelt", "fdr", "harry s. truman", "harry truman", "john f. kennedy", "john kennedy", "jfk", "lyndon b. johnson", "lyndon johnson", "james carter", "jimmy carter", "william clinton", "bill clinton", "barack obama", "joe biden", "biden"];
    var Q1 = prompt("You would rather have a smaller government providing fewer services than a bigger government providing more services", "John Doe");
    var Q2 = prompt("");
    var Q3 = prompt("");
    var Q4 = prompt("");
    var Q5 = prompt("");
    var Q6 = prompt("");
    var Q7 = prompt("");
    var Q8 = prompt("");
    var Q9 = prompt("");
    var Q10 = prompt("");
    var Q11 = prompt("");
    var Q12 = prompt("");
    var Q13 = prompt("");
    var Q14 = prompt("");
    var Q15 = prompt("");
    var Q16 = prompt("");
    
    /* 
    if (republicans.includes(input)) {
      image.src = "https://upload.wikimedia.org/wikipedia/commons/9/9b/Republicanlogo.svg";
    } else if (democrats.includes(input)) {
      image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/DemocraticLogo.svg/1200px-DemocraticLogo.svg.png";
    } else {
      alert("Invalid input.");
    }
    */
    document.getElementById("input").value = "";
  }
  