let rangeSlider = document.getElementById("sliderRange");
let getPrice = document.getElementById("price");

getPrice.innerHTML = rangeSlider.value;


rangeSlider.oninput = function() {
    getPrice.innerHTML = this.value;
  }