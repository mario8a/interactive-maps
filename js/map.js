var wordStates = document.querySelectorAll(".list-of-states li");

wordStates.forEach(function(el) {

  el.addEventListener("mouseenter", function() {
    var stateCode = el.getAttribute("data-state");
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