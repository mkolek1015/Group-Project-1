

  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>


function getForecast() {

wineAPIKey = "77ee9b5219954db79536f73ad6175916";
foodChoice = "fish";

    wineURL ="https://api.spoonacular.com/food/wine/pairing?food=" + foodChoice+ "&apiKey=" +wineAPIKey; 


    $.ajax({
      url: wineURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(response);

      });


  }

  <div id = "wineDiv" ></div>
    
       


  var wineAPIKey = "77ee9b5219954db79536f73ad6175916";
  var foodChoice = prompt("enter your type of meal for wine recommendations!");
  var winePair1;
  var winePair2;
  var winePair3;
  var pairingText;


   wineURL ="https://api.spoonacular.com/food/wine/pairing?food=" + foodChoice+ "&apiKey=" +wineAPIKey; 

       $.ajax({
       url: wineURL,
       method: "GET"
       })
       // We store all of the retrieved data inside of an object called "response"
       .then(function(response) {

           // Log the queryURL
           console.log(response);
           winePair1 = response.pairedWines[0];
           winePair2 = response.pairedWines[1];
           winePair3 = response.pairedWines[2];
           pairingText = response.pairingText;

           console.log(winePair1);
           console.log(winePair2);
           console.log(winePair3);
           console.log(pairingText);

           // var wineDiv = $("<div class='wine'>");

           // // Displaying the pairing recommendations

           // wOne = $("<p>").text("Pairing one: " + winePair1);
           // wTwo = $("<p>").text("Pairing one: " + winePair2);
           // wThree = $("<p>").text("Pairing one: " + winePair3);
           // wText = $("<p>").text("Pairing one: " + pairingText);
          
           $('#wineDiv').text(winePair1);
           $('#wineDiv').append('<br><br>');
           $('#wineDiv').append(winePair2);
           $('#wineDiv').append('<br><br>');
           $('#wineDiv').append(winePair3);
           $('#wineDiv').append('<br><br>');
           $('#wineDiv').append(pairingText);

           // wineDiv.append(wOne);
           // wineDiv.append(wTwo);
           // wineDiv.append(Three);
           // wineDiv.append(wText);

     });  

     appKey = "599a2d7927259901607333dce7693505"

     //   https://api.edamam.com/search?q=indian&app_id=783735ac&
     //   app_key=599a2d7927259901607333dce7693505&from=0&to=3&calories=591-722&health=alcohol-free
 
       foodURL ="https://api.edamam.com/search?q=" + foodChoice + "&app_id=783735ac&app_key="+ appKey;
   
       //&from=0&to=3&calories=591-722&health=alcohol-free
 
         $.ajax({
         url: foodURL,
         method: "GET"
         })
         // We store all of the retrieved data inside of an object called "response"
         .then(function(response) {
 
             // // Log the queryURL
             console.log(response);
             // winePair1 = response.pairedWines[0];
             // winePair2 = response.pairedWines[1];
             // winePair3 = response.pairedWines[2];
             // pairingText = response.pairingText;
 
             // console.log(winePair1);
             // console.log(winePair2);
             // console.log(winePair3);
             // console.log(pairingText);
 
             // var wineDiv = $("<div class='wine'>");
 
             // // Displaying the pairing recommendations
 
             // wOne = $("<p>").text("Pairing one: " + winePair1);
             // wTwo = $("<p>").text("Pairing one: " + winePair2);
             // wThree = $("<p>").text("Pairing one: " + winePair3);
             // wText = $("<p>").text("Pairing one: " + pairingText);
         
             // $('#wineDiv').text(winePair1);
             // $('#wineDiv').append('<br><br>');
             // $('#wineDiv').append(winePair2);
             // $('#wineDiv').append('<br><br>');
             // $('#wineDiv').append(winePair3);
             // $('#wineDiv').append('<br><br>');
             // $('#wineDiv').append(pairingText);
 
             // wineDiv.append(wOne);
             // wineDiv.append(wTwo);
             // wineDiv.append(Three);
             // wineDiv.append(wText);
 
         });  



  

  