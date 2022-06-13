// const { remove } = require("animejs");

const paper = document.querySelector('.paper');
const sicssor = document.querySelector('.sicssor');
const rock = document.querySelector('.rock');

const paperImg = document.querySelector('.paper-img');
const sicssorImg = document.querySelector('.sicssor-img');
const rockImg = document.querySelector('.rock-img');


const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');
const imgConatiner = document.querySelector('.img-container');
const imgConatiner2 = document.querySelector('.img-container2');
const showContainer = document.querySelector('.step-two-container');
const triangle = document.querySelector('.triangle');
const circle = document.querySelector('.circle');
const houseCircle = document.querySelector('.house-circle');
const theHousePicked = document.querySelector('.the-house-picked');
const pickedImg = document.querySelector('.you-picked-img');
const housePickedImg = document.querySelector('.house-picked-img');
const resultHeading = document.querySelector('.result-heading');

const ruleS = document.querySelector('.rules');
const ruleS2 = document.querySelector('.result-rules');

let score = document.querySelector('.score');
const playagain = document.querySelector('.play-again');


// {
// working with paper
paper.addEventListener("click", function(animate){

// working with paper animation
  let myAnimation = anime({
    targets: '.paper',
    scale:(0.5),
    rotate:360 ,
    borderRadius: 50,
    duration: 1000,
    easing: 'easeInOutSine',
    direction: 'alternate',

  });

if (paper.elementClicked = true) {
    let myAnimation = anime({
        targets: '.rock, .sicssor',
        scale:(0.6),
        borderRadius: 50,
        duration: 1000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        
      });
  }

if (paper.elementClicked = true) {
  setTimeout(function(){
    imgConatiner.classList.add('remove-conatiner-img');
    imgConatiner2.classList.add('remove-conatiner-img');
    triangle.classList.add('remove-triangle');
    showContainer.classList.add('show-step-two-container');
    ruleS.classList.add('rules-hide');
      
    random(paper)
    results(paper)


    setTimeout(() => {
      theHousePicked.classList.add('show-the-house');
    }, 500)
    

  },2000)



}


pickedImg.src = 'images/icon-paper.svg';
circle.style.backgroundImage = "radial-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))"


});
  


// working with scissors

sicssor.addEventListener("click", function(animate){
  
// working with scissors animation
    let myAnimation = anime({
        targets: '.sicssor',
        scale:(0.5),
        rotate:360 ,
        borderRadius: 50,
        duration: 1000,
        easing: 'easeInOutSine',
        direction: 'alternate',
       
      });
  
    if(sicssor.elementClicked = true){
        let myAnimation = anime({
            targets: '.rock, .paper',
            scale:(0.6),
            borderRadius: 50,
            duration: 1000,
            easing: 'easeInOutSine',
            direction: 'alternate',
          
          });

      }
      if (sicssor.elementClicked = true) {
        setTimeout(function(){
          imgConatiner.classList.add('remove-conatiner-img');
          imgConatiner2.classList.add('remove-conatiner-img');
          triangle.classList.add('remove-triangle');
          showContainer.classList.add('show-step-two-container');
          ruleS.classList.add('rules-hide');
     
          random(sicssor)
          result1(sicssor)


          setTimeout(() => {
            theHousePicked.classList.add('show-the-house');
          }, 500)
        


        },2000)
        
      }

    
      pickedImg.src = 'images/icon-scissors.svg';  

      circle.style.backgroundImage = " radial-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))";
      
   
});



// working with rock 
rock.addEventListener("click", function(animate){

// working with rock animation
    let myAnimation = anime({
        targets: '.rock',
        scale:(0.5),
        rotate:360 ,
        borderRadius: 50,
        duration: 1000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        
      });

    if(rock.elementClicked = true){
        let myAnimation = anime({
            targets: '.sicssor, .paper',
            scale:(0.6),
            borderRadius: 50,
            duration: 1000,
            easing: 'easeInOutSine',
            direction: 'alternate'
          });

      }
      if (rock.elementClicked = true) {
        setTimeout(function(){
          imgConatiner.classList.add('remove-conatiner-img');
          imgConatiner2.classList.add('remove-conatiner-img');
          triangle.classList.add('remove-triangle');
          showContainer.classList.add('show-step-two-container');
          ruleS.classList.add('rules-hide');
          // setScore(resultHeading , score)
 
          random(rock)
          result2(rock)



          setTimeout(() => {
            theHousePicked.classList.add('show-the-house');
          }, 500)


        },2000);
        
      }
      
      pickedImg.src = 'images/icon-rock.svg';  
      circle.style.backgroundImage = "radial-gradient(hsl(349, 71%, 52%) ,hsl(349, 70%, 56%))";
      
});


//end  }



// working with modal {

function moDal(){
  ruleS.addEventListener("click", function(){
    modal.classList.add('open-modal');

  });

  ruleS2.addEventListener("click", function(){
    modal.classList.add('open-modal');

  });

  closeBtn.addEventListener("click", function(){
    modal.classList.remove('open-modal');
  });
}
moDal();

// }


// working with randomization{

function random(){

 let imgs = ['paper', 'scissors', 'rock'];

    
 img = imgs[Math.floor(Math.random() * imgs.length)];

 housePickedImg.src = `images/icon-${img}.svg`;

 function getRandomimgs() {
  return Math.floor(Math.random() * 2);

}





if(img === 'paper'){
  houseCircle.style.backgroundImage = "radial-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%)";
    results()
}

else if(img === 'scissors'){
  houseCircle.style.backgroundImage = " radial-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))";

  result1();

}

else if(img === 'rock'){
  houseCircle.style.backgroundImage = "radial-gradient(hsl(349, 71%, 52%) ,hsl(349, 70%, 56%))";
  result2();

}


}

random();

// }

function results() {
  if (img === 'rock') {
    setScore(resultHeading.textContent = "you win",  tar = score)
  }
  
   else if(img ===  'scissors') {
    setScore(resultHeading.textContent = "you lose",  tar = score)
  }

 else if(img ===  'paper') {
    setScore(resultHeading.textContent = "draw",  tar = score)
  }

}
results()



function result1() {
  if (img === 'paper') {
     setScore(resultHeading.textContent = "you win",  tar = score)
  }
  
 else if(img === 'rock') {
   setScore(resultHeading.textContent = "you lose",  tar = score)
  } 
 else if(img === 'scissors') {
    setScore(resultHeading.textContent = "draw",  tar = score)
  }
}
result1();


function result2() {
 
  if (img === 'scissors') {
    setScore(resultHeading.textContent = "you win",  tar = score)
  }
  
 else if(img === 'paper') {
    setScore(resultHeading.textContent = "you lose",  tar = score)
  } 
 else if(img === 'rock') {
    setScore(resultHeading.textContent = "draw",  tar = score)
  }
}
result2 ();






function setScore(resultHeading ,tar){ 
   

  if(resultHeading === "you win"){
    tar.textContent++;
}


else if( resultHeading === "you lose"){
    if(tar.textContent > 0){
      tar.textContent--;
    }
}

else if( resultHeading === "draw"){
  tar.textContent = 0;
}

 
}

setScore(resultHeading ,score)



playagain.addEventListener("click", function(){
  imgConatiner.classList.remove('remove-conatiner-img');
  imgConatiner2.classList.remove('remove-conatiner-img');
  triangle.classList.remove('remove-triangle');
  showContainer.classList.remove('show-step-two-container');
   ruleS.classList.remove('rules-hide');
   theHousePicked.classList.remove('show-the-house')
});

