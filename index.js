// var imgNumber=Math.ceil(Math.random()*6);
// var newUrl="images/dice"+imgNumber+".png";
// console.log(newUrl);
// document.querySelectorAll("img")[0].setAttribute("src",newUrl);
// // querySelectorAll should be treated as an Array
// var imgNumber2=Math.ceil(Math.random()*6);
// var newUrl2="images/dice"+imgNumber2+".png";
// console.log(newUrl2);
// document.querySelectorAll("img")[1].setAttribute("src",newUrl2);

// //Main game code

// if(imgNumber>imgNumber2){
//     //Play sound
//     //show some animations
//     document.querySelector("h1").innerHTML="PLayer 1 won the match";
//     // document.querySelectorAll("img")[1].style.display="none";
//     // document.querySelector("img").style.display="none";
// }
// if(imgNumber<imgNumber2){
//     //Play sound
//     //show some animations
//     document.querySelector("h1").innerHTML="PLayer 2 won the match";
//     // document.querySelectorAll("img")[0].style.display="none";
//     // document.querySelector("img").style.display="none";
// }
// if(imgNumber===imgNumber2){
//     //Play sound
//     //show some animations
//     document.querySelector("h1").innerHTML="It's a draw";
// }

  
//   New JavaScript Code

document.querySelector('button').addEventListener('click',rollDice);

// document.querySelector('button').addEventListener("keypress",roll(event))


// passing check() in actionListener will make it happen before and passing name only check will make it happer when the function is called
function rollDice(){
    
    var dice1=Math.ceil(Math.random()*6);
    
    var dice2=Math.ceil(Math.random()*6);

    var url1="images/dice"+dice1+".png";
    
    document.querySelectorAll("img")[0].setAttribute("src",url1);

    var url2="images/dice"+dice2+".png";
    
    document.querySelectorAll("img")[1].setAttribute("src",url2);

    if(dice1>dice2)
    {
        document.querySelector('h1').innerHTML="Player 1 earned a point";
    }
    if(dice1<dice2)
    {
        document.querySelector('h1').innerHTML="Player 2 earned a point";
    }
    if(dice1==dice2)
    {
        document.querySelector('h1').innerHTML="It's a draw";
    }
    
}


