//Welkomsbericht --------------------------------------------------------------------------------------------------------
alert("Hey Mars reiziger, Kies je (thuis)tijdzone.");

//zichtbare en niet zichtbare elementen wanneer geselecteerd ------------------------------------------------------------
var divs = ["India", "London", "NewYork", "Sydney", "Warsaw", "Shanghai", "dayMessage", "shuttleBack", "shuttleLiftOff"];
    var visibleDivId = null;
    function divVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }

/*----------------------------------------------digitale clock & date-------------------------------------------------*/
//Aanroep id caller ----------------------------------------------------------------------------------------------------
  var India;
  var London;
  var newYork;
  var Sydney;
  var Warsaw;
  var Shanghai;
//Indian time ---------------------------------------------------------------------------------------------------------
var getIndiaTime = function(){
document.getElementById("indiaTime").innerHTML = new Date().toLocaleString("en-AU", {hour12: false, timeZone: 'Asia/Kolkata'});
India = new Date().toLocaleTimeString("en-AU", {hour: "2-digit", hour12: false, timeZone: 'Asia/Kolkata'});
console.log(India);

if (India> 6 && India< 20) {
  document.getElementById("indiaImage").innerHTML = "<img src='./images/taj-mahal-day.jpg'>";
} else {
  document.getElementById("indiaImage").innerHTML = "<img src='./images/taj-mahal-night.jpg'>";
}
}
getIndiaTime();
setInterval(getIndiaTime,1000);
//London time -------------------------------------------------------------------------------------------------------
var getlondonTime = function(){
  document.getElementById("londonTime").innerHTML = new Date().toLocaleString("en-AU", {hour12: false, timeZone: 'Europe/London'});
  London = new Date().toLocaleTimeString("en-AU", {hour12: false, timeZone: 'Europe/London'});
  console.log(London);

  if (London> 6 && London< 20) {
    document.getElementById("londonImage").innerHTML = "<img src='./images/elizabethtower-day.jpg'>";
  } else {
    document.getElementById("londonImage").innerHTML = "<img src='./images/elizabethtower-night.jpg'>";
  }
}
getlondonTime();
setInterval(getlondonTime,1000);
//newYork time -------------------------------------------------------------------------------------------------------
var getNewyorkTime = function(){
document.getElementById("newyorkTime").innerHTML = new Date().toLocaleString("en-AU", {hour12: false, timeZone: 'America/New_York'});
NewYork = new Date().toLocaleTimeString("en-AU", {hour12: false, timeZone: 'America/New_York'});
console.log(NewYork);

if (NewYork> 6 && NewYork< 20) {
  document.getElementById("newYorkImage").innerHTML = "<img src='./images/brookeline-bridge-ny-day.jpg'>";
} else {
  document.getElementById("newYorkImage").innerHTML = "<img src='./images/brookeline-bridge-ny-night.jpg'>";
}
}
getNewyorkTime();
setInterval(getNewyorkTime,1000);
//Sydney time ---------------------------------------------------------------------------------------------------------
var getSydneyTime = function(){
document.getElementById("sydneyTime").innerHTML = new Date().toLocaleString("en-AU", {hour12: false, timeZone: 'Australia/Sydney'});
Sydney = new Date().toLocaleString("en-AU", {hour12: false, timeZone: 'Australia/Sydney'});
console.log(Sydney);

if (Sydney> 6 && Sydney< 20) {
  document.getElementById("sydneyImage").innerHTML = "<img src='./images/sydney-opera-house-day.jpeg'>";
} else {
  document.getElementById("sydneyImage").innerHTML = "<img src='./images/sydney-opera-house-night.jpeg'>";
}
}
getSydneyTime();
setInterval(getSydneyTime,1000);
//Warsaw time --------------------------------------------------------------------------------------------------------
var getwarsawTime = function(){
document.getElementById("warsawTime").innerHTML = new Date().toLocaleString("en-AU", {hour12: false, timeZone: 'Europe/Warsaw'});
Warsaw = new Date().toLocaleString("en-AU", {hour12: false, timeZone: 'Europe/Warsaw'});
console.log(Warsaw);

if (Warsaw> 6 && Warsaw< 20) {
  document.getElementById("warsawImage").innerHTML = "<img src='./images/PalaceOfSienceAndCulture-Warsaw-day.JPG'>";
} else {
  document.getElementById("warsawImage").innerHTML = "<img src='./images/PalaceOfSienceAndCulture-Warsaw-night.JPG'>";
}
}
getwarsawTime();
setInterval(getwarsawTime,1000);
//Shanghai time ------------------------------------------------------------------------------------------------------
var getshanghaiTime = function(){
document.getElementById("shanghaiTime").innerHTML = new Date().toLocaleString("en-AU", {hour12: false, timeZone: 'Asia/Shanghai'});
Shanghai = new Date().toLocaleString("en-AU", {hour12: false, timezone: 'Asia/Shanghai'});
console.log(Shanghai);

if (Shanghai> 6 && Shanghai< 20) {
  document.getElementById("shanghaiImage").innerHTML = "<img src='./images/shanghai-day.jpg'>";
} else {
  document.getElementById("shanghaiImage").innerHTML = "<img src='./images/shanghai-night.jpg'>";
}
}
getshanghaiTime();
setInterval(getshanghaiTime,1000);
//Momenten op de dag meldingen ---------------------------------------------------------------------------------------
var now = new Date();
var hours = now.getHours();

var greetings = [
   {"tod": "latenight",
    "greet": "Wow! nog steedts aan het werk. Maak het niet te laat?",
    "test": hours >= 24 || hours <= 4
  },
  {"tod":"night",
    "greet": "Goedenacht!",
    "test": hours >= 20 || hours <= 5
  },
  {"tod":"evening",
    "greet": "Goedeavond!",
    "test": hours >= 18 && hours <= 20
  },
  {"tod":"afternoon",
    "greet": "Goedemiddag!",
    "test": hours >= 13 && hours <= 17
  },
  {"tod":"noon",
    "greet": "Tijd om iets te gaan eten!",
    "test": hours >= 12 && hours <= 13
  },
  {"tod":"morning",
    "greet": "Hey! Goedemorgen! Maak er een mooie dag van.",
    "test": hours >= 5 && hours <= 11
  }
];

var message = document.getElementById("message");
message.innerHTML = greetings.find(el=>el.test).greet;
message.className = greetings.find(el=>el.test).tod;
//background verwisselen dag en nacht ----------------------------------------------------------------------------------
Module.register("background", {
  getStyles: function() {
  var currentTime = new Date().getHours();
  
  if (currentTime > 5 && currentTime < 23 ){
    return ["backgroundImage1.css"];       
    }
  else {
    return ["backgroundImage2.css"];       
    }
  }
});