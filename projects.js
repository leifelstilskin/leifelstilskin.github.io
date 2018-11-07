


  var  products = {};
  var service = [];
var serviceString;


function inputProduct(event) {
   if {
   }
   var callerElement = event.target || event.srcElement;
   var serviceItemName = callerElement.value;
   if (callerElement.checked) {
      service.push(serviceItemName);
      var newservice = document.createElement("li");
      newArrayItem.innerHTML = serviceItemName;
      document.getElementById("serviceItems").appendChild(serviceItemName);
      document.getElementById("service").style.display = "block";
  }
}
