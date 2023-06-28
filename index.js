var imgNumber=Math.ceil(Math.random()*6);
var newUrl="images/dice"+imgNumber+".png";
console.log(newUrl);
document.querySelectorAll("img")[0].setAttribute("src",newUrl);
// querySelectorAll should be treated as an Array
var imgNumber2=Math.ceil(Math.random()*6);
var newUrl2="images/dice"+imgNumber2+".png";
console.log(newUrl2);
document.querySelectorAll("img")[1].setAttribute("src",newUrl2);
