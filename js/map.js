var wordStates = document.querySelectorAll(".list-of-states li");
var svgStates = document.querySelectorAll ( ".states" );

wordStates.forEach(function(el) {

  el.addEventListener("mouseenter", function() {
    //saca el codigo o atributo o id del la lista
    var stateCode = el.getAttribute("data-state");
    //Relaciona el id con el id que tenga el elemento del mapa
    var svgState = document.querySelector("#" + stateCode);
    el.classList.add("on");
    svgState.classList.add("on");
  });

  el.addEventListener("mouseleave", function() {
    var stateCode = el.getAttribute("data-state");
    var svgState = document.querySelector("#" + stateCode);
    el.classList.remove("on");
    svgState.classList.remove("on");
  });

});

svgStates.forEach(function(el) {

  el.addEventListener("mouseenter", function() {
    var stateId = el.getAttribute("id");
    var wordState = document.querySelector("[data-state='" + stateId + "']");
    el.classList.add("on");
    wordState.classList.add("on");
  });

  el.addEventListener("mouseleave", function() {
    var stateId = el.getAttribute("id");
    var wordState = document.querySelector("[data-state='" + stateId + "']");
    el.classList.remove("on");
    wordState.classList.remove("on");
  });

});


//zoom mapa

function zoomIn() {
   
  var myIMG = document.getElementById('mapaint');
  var currWith = myIMG.clientWidth;

  if(currWith == 5000) {
     alert("maximo nivel de zom")
  } else {
     myIMG.style.width=(currWith+40) + "px";
     myIMG.classList.remove("reset");
  }
}

function zoomOut() {
  var myIMG = document.getElementById('mapaint');
  var currWith = myIMG.clientWidth;

  if(currWith == 40) {
     alert("maximo nivel de zom bako")
  } else {
    myIMG.classList.remove("reset");
     myIMG.style.width = (currWith-40) + "px";
  }
}

function reset() {
  var myIMG = document.getElementById('mapaint');
  // myIMG.classList.add("reset");
  alert('Device not compatible')
}