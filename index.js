function nextImage() {
    var randomNum = Math.floor(Math.random()*5+1);
    var nextImg= "./images/i"+randomNum+".jpg";
    document.querySelector("img").setAttribute("src",nextImg);
    // console.log("next image",nextImg);
}
function prevImage() {
  var randomNum = Math.floor(Math.random()*5+1);
  var prevImg = "./images/i"+randomNum+".jpg";
  document.querySelector("img").setAttribute("src",prevImg);
  // console.log("prev image",prevImg);
}
