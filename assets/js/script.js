var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}





// let galleryImages = document.querySelectorAll(".gallery-img");
// let getLastedOpenedImg;
// let windowWidth = window.innerWidth;

// if(galleryImages) {
//   galleryImages.forEach(function(image, index) {
//       image.onclick = function() {
//         let getElementCss = window.getComputedStyle(image);
//         let getFullImgUrl = getElementCss.getPropertyValue("background-image");
//         let getImgUrlPos = getFullImgUrl.split("/image/thumbs/");
//         let setNewImgUrl = getImgUrlPos[1].replace('")', '');

//         getLastedOpenedImg = index + 1;

//         let container = document.body;
//         let newImgWindow = document.createElement("div");
//         container.appendChild(newImgWindow);
//         newImgWindow.setAttribute("class", "img-window");
//         newImgWindow.setAttribute("onclick", "closeImg()");

//         let newImg = document.createElement("img");
//         newImgWindow.appendChild(newImg);
//         newImg.setAttribute("src", "images/" + setNewImgUrl);
//         newImg.setAttribute("id", "current-img");

//         newImg.onload = function() {
//             let imgWidth = this.width;
//             let calcImgToEdge =((windowWidth - imgWidth) /2) - 80;

//           let newNextBtn = document.createElement("a");
//           let btnNextText = document.createTextNode("Prev")
//           newNextBtn.appendChild(btnNextText);
//           container.appendChild(newNextBtn);
//           newNextBtn.setAttribute("class", "img-btn-next");
//           newNextBtn.setAttribute("onclick", "changeImg(1)");
//           newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

//           let newPrevBtn = document.createElement("a");
//           let btnPrevText = document.createTextNode("Prev")
//           newPrevBtn.appendChild(btnPrevText);
//           container.appendChild(newPrevBtn);
//           newPrevBtn.setAttribute("class", "img-btn-prev");
//           newPrevBtn.setAttribute("onclick", "changeImg(0)");
//           newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
//         }


//       }
//   });
// }

// function closeImg() {
//   document.querySelector(".img-window").remove();
//   document.querySelector(".img-btn-next").remove();
//   document.querySelector(".img-btn-prev").remove();
// }

// function changeImg(changeDir) {
//   document.querySelector("#current-img").remove();

//   let getImgWindow = document.querySelector(".img-window");
//   let newImg = document.createElement("img");
//   getImgWindow.appendChild(newImg);

//   let calcNewImg;
//   if(changeDir === 1) {
//     calcNewImg = getLastedOpenedImg + 1;
//     if(calcNewImg > galleryImages.length) {
//         calcNewImg = 1;
//     }
//   }
//   else if(changeDir === 0) {
//     calcNewImg = getLastedOpenedImg + 1;
//     if(calcNewImg < galleryImages.length) {
//         calcNewImg = galleryImages.length;
//     }
//   }

//   newImg.setAttribute("src", "images/img" + calcNewImg + ".JPG");
//   newImg.setAttribute("id", "current-img");

//   getLastedOpenedImg = calcNewImg;

//   newImg.onload = function() {
//     let imgWidth = this.width;
//     let calcImgToEdge =((windowWidth - imgWidth) /2) - 80;


//     let nextBtn = document.querySelector(".img-btn-next");
//     nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
    
//     let prevBtn = document.querySelector(".img-btn-prev");
//     prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
//   }

// }







// Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }