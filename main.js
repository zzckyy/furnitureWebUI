const img1 = "img/charis.jpg";
const img2 = "img/cabinet.jpg";
const img3 = "img/mirror.jpg";
const img4 = "img/sofa.jpg";
const lamp = "img/lamp.jpg";

function imageDisplay(selected, imageSrc){
 document.getElementById("displayimg").src = imageSrc;

 const button = document.querySelectorAll(".pill button");

 button.forEach(btn => {btn.classList.remove("active")});

 selected.classList.add("active");
}
