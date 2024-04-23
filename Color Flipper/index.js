const colors = ["A", "B", "C", "D", "E", "F", 0,1,2,3,4,5,6,7,8,9];
const btn = document.getElementById("flipper-btn");
var navbar = document.getElementById("nav-bar");
var flipperInfo = document.getElementById("flipper");


function getRandomNumber1(){
  return Math.floor(Math.random()*colors.length);
}
function getRandomNumber2(){
  return Math.floor(Math.random()*colors.length);
}
function getRandomNumber3(){
  return Math.floor(Math.random()*colors.length);
} 
btn.addEventListener("click", function () {
  let color_id1 = "#";
  for(let i=0; i<6; i++){
    color_id1 += colors[getRandomNumber1()];
  }
  let color_id2= "#";
  for(let i=0;i<6;i++){
    color_id2+=colors[getRandomNumber2()];
  }
  let color_id3= "#";
  for(let i=0;i<6;i++){
    color_id3+=colors[getRandomNumber3()];
  }

navbar.style.backgroundColor = color_id3;
document.body.style.backgroundColor = color_id2;
flipperInfo.style.backgroundColor=color_id1;
});