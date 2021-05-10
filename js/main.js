let rangeSlider = document.getElementById("sliderRange");
let getPrice = document.getElementById("price");
let changePageView = document.querySelector(".span-1");
let progressBar = document.getElementById("progress")


getPrice.innerHTML = rangeSlider.value;


rangeSlider.oninput = function () {
   
    getPrice.innerHTML = this.value;
    

    switch (this.value) {
        case "8":
        changePageView.innerHTML = "10K Pageviews";
        progressBar.style.width = "0";
        break;
      
        case "12":
        changePageView.innerHTML = "50K Pageviews";
        progressBar.style.width = "14.3%";
        break;
      
        case "16":
        changePageView.innerHTML = "100K Pageviews";
        progressBar.style.width = "28.57%";
        break;
      
        case "20":
        changePageView.innerHTML = "Sorry, No plan for this amount";
        changePageView.style.fontSize = ".9rem"
        progressBar.style.width = "41.5%";
        break;
      
        case "24":
        changePageView.innerHTML = "500K Pageviews";
        progressBar.style.width = "54.5%";
        break;
      
        case "28":
        changePageView.innerHTML = "Sorry, No plan for this amount";
        changePageView.style.fontSize = ".9rem"
        progressBar.style.width = "67.5%";
        break;
      
        case "32":
        changePageView.innerHTML = "750K Pageviews";
        progressBar.style.width = "80%";
        break;
      
        case "36":
        changePageView.innerHTML = "1M Pageviews";
        progressBar.style.width = "93%";
        break;
      
        default:
            changePageView.innerHTML = "Sorry, No plan for this amount";
         
  }
   
  }