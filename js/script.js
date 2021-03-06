var divs = ["India", "London", "NewYork", "Sydney", "Warsaw", "Shanghai"];
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
/*---------------------------------digitale clock & date-------------------------------*/
var getIndiaTime = function(){
document.getElementById("indiaTime").innerHTML = new Date().toLocaleString("en-AU", {timeZone: 'Asia/Kolkata'});
}
getIndiaTime();
setInterval(getIndiaTime,1000);

var getlondonTime = function(){
document.getElementById("londonTime").innerHTML = new Date().toLocaleString("en-AU", {timeZone: 'Europe/London'});
}
getlondonTime();
setInterval(getlondonTime,1000);

var getNewyorkTime = function(){
document.getElementById("newyorkTime").innerHTML = new Date().toLocaleString("en-AU", {timeZone: 'America/New_York'});
}
getNewyorkTime();
setInterval(getNewyorkTime,1000);

var getSydneyTime = function(){
document.getElementById("sydneyTime").innerHTML = new Date().toLocaleString("en-AU", {timeZone: 'Australia/Sydney'});
}
getSydneyTime();
setInterval(getSydneyTime,1000);

var getwarsawTime = function(){
document.getElementById("warsawTime").innerHTML = new Date().toLocaleString("en-AU", {timeZone: 'Europe/Warsaw'});
}
getwarsawTime();
setInterval(getwarsawTime,1000);

var getshanghaiTime = function(){
document.getElementById("shanghaiTime").innerHTML = new Date().toLocaleString("en-AU", {timeZone: 'Asia/Shanghai'});
}
getshanghaiTime();
setInterval(getshanghaiTime,1000);

$( document ).ready(function() {  
    SetImage();
    window.setInterval(SetImage,1000);
});



