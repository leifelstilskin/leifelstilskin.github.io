"use strict";
var httpRequest = false;
var countrySel;
function getRequestObject() {
   try {
      httpRequest = new XMLHttpRequest();
   }
   catch (requestError) {
      document.getElementById("zipset").style.visibility = "visible";
      document.getElementById("csset").style.visibility = "visible";
      var germany = document.getElementById("germany");
      var france = document.getElementById("france");
      var japan = document.getElementById("japan");
      var us = document.getElementById("us");
      var dominicanrepublic = document.getElementById("dominicanrepublic");
      var mexico = document.getElementById("mexico");
      var netherlands = document.getElementById("netherlands");
      var czechrepublic = document.getElementById("czechrepublic");
      var unitedkingdom = document.getElementById("unitedkingdom");
      var zip = document.getElementById("zip").value;
      if (zip.addEventListener) {
         france.removeEventListener("click", checkButtons, false);
         dominicanrepublic.removeEventListener("click", checkButtons, false);
         mexico.removeEventListener("click", checkButtons, false);
         unitedkingdom.removeEventListener("click", checkButtons, false);
         czechrepublic.removeEventListener("click", checkButtons, false);
         netherlands.removeEventListener("click", checkButtons, false);
         germany.removeEventListener("click", checkButtons, false);
         us.removeEventListener("click", checkButtons, false);
         japan.removeEventListener("click", checkButtons, false);
         zip.removeEventListener("keyup", checkInput, false);
      } else if (zip.attachEvent) {
         france.detachEvent("onclick", checkButtons);
         dominicanrepublic.detachEvent("onclick", checkButtons);
         mexico.detachEvent("onclick", checkButtons);
         unitedkingdom.detachEvent("onclick", checkButtons);
         czechrepublic.detachEvent("onclick", checkButtons);
         netherlands.detachEvent("onclick", checkButtons);
         germany.detachEvent("onclick", checkButtons);
         us.detachEvent("onclick", checkButtons);
         japan.detachEvent("onclick", checkButtons);
         zip.detachEvent("onkeyup", checkInput);
      }
      return false;
   }
   return httpRequest;
}

function checkButtons() {
   var germany = document.getElementById("germany");
   var france = document.getElementById("france");
   var japan = document.getElementById("japan");
   var dominicanrepublic = document.getElementById("dominicanrepublic");
   var mexico = document.getElementById("mexico");
   var netherlands = document.getElementById("netherlands");
   var czechrepublic = document.getElementById("czechrepublic");
   var unitedkingdom = document.getElementById("unitedkingdom");
   var us = document.getElementById("us");
   if (germany.checked || us.checked || france.checked || japan.checked || dominicanrepublic.checked || mexico.checked
   || netherlands.checked || czechrepublic.checked || unitedkingdom.checked) {
      document.getElementById("zipset").style.visibility = "visible";
//Heres where I think I am having issues allowing other countries postal codes to be shown 
      if (germany.checked) {
         countrySel = "de";
      } else {
         countrySel = "us";
      }
   }
}

function checkInput() {
   var zip = document.getElementById("zip").value;
   if (zip.length === 5) {
      getLocation();
   } else {
      document.getElementById("city").value = "";
      document.getElementById("state").value = "";
   }
}

function getLocation() {
   var zip = document.getElementById("zip").value;
   if (!httpRequest) {
      httpRequest = getRequestObject();
   }
   httpRequest.abort();
   httpRequest.open("get","http://api.zippopotam.us/" + countrySel + "/" + zip, true);
   httpRequest.send();
   httpRequest.onreadystatechange = displayData;
}

function displayData() {
   if(httpRequest.readyState === 4 && httpRequest.status === 200) {
      var resultData = JSON.parse(httpRequest.responseText);
      var city = document.getElementById("city");
      var state = document.getElementById("state");
      city.value = resultData.places[0]["place name"];
      state.value = resultData.places[0]["state abbreviation"];
      document.getElementById("zip").blur();
      document.getElementById("csset").style.visibility = "visible";
   }
}

var germany = document.getElementById("germany");
var france = document.getElementById("france");
var japan = document.getElementById("japan");
var us = document.getElementById("us");
var dominicanrepublic = document.getElementById("dominicanrepublic");
var mexico = document.getElementById("mexico");
var netherlands = document.getElementById("netherlands");
var czechrepublic = document.getElementById("czechrepublic");
var unitedkingdom = document.getElementById("unitedkingdom");
if (us.addEventListener) {
   germany.addEventListener("click", checkButtons, false);
   france.addEventListener("click", checkButtons, false);
   dominicanrepublic.addEventListener("click", checkButtons, false);
   mexico.addEventListener("click", checkButtons, false);
   netherlands.addEventListener("click", checkButtons, false);
   czechrepublic.addEventListener("click", checkButtons, false);
   unitedkingdom.addEventListener("click", checkButtons, false);
   us.addEventListener("click", checkButtons, false);
   japan.addEventListener("click", checkButtons, false);
} else if (us.attachEvent) {
   netherlands.attachEvent("onclick", checkButtons);
   dominicanrepublic.attachEvent("onclick", checkButtons);
   mexico.attachEvent("onclick", checkButtons);
   czechrepublic.attachEvent("onclick", checkButtons);
   unitedkingdom.attachEvent("onclick", checkButtons);
   france.attachEvent("onclick", checkButtons);
   germany.attachEvent("onclick", checkButtons);
   us.attachEvent("onclick", checkButtons);
   japan.attachEvent("onclick", checkButtons)
}

var zip = document.getElementById("zip");
if (zip.addEventListener) {
   zip.addEventListener("keyup", checkInput, false);
} else if (zip.attachEvent) {
   zip.attachEvent("onkeyup", checkInput);
}
