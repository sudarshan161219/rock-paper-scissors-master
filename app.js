
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
const theHousePicked = document.getElementsByClassName('.the-house-picked');
const pickedImg = document.querySelector('.you-picked-img');
const housePickedImg = document.querySelector('.house-picked-img');
let resultHeading = document.querySelector('.result-heading');

const ruleS = document.querySelector('.rules');
const ruleS2 = document.querySelector('.result-rules');

const score = document.querySelector('.score');
const playagain = document.querySelector('.play-again');



// { working with Animation
paper.addEventListener("click", function(animate){
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
    random(paper)
    results (paper)
   
    ruleS.classList.add('rules-hide');

  },2000)
}

  
pickedImg.src = 'images/icon-paper.svg';
circle.style.backgroundImage = "radial-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))"


});
    // });

sicssor.addEventListener("click", function(animate){

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
          random(sicssor)
          result2 (sicssor)
          updateScore1(sicssor)
          ruleS.classList.add('rules-hide');
        },2000)
        
      }

    
      pickedImg.src = 'images/icon-scissors.svg';  

      circle.style.backgroundImage = " radial-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))";
      
   
});

rock.addEventListener("click", function(animate){

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
          random(rock)
          result3(rock)
          // updateScore2(rock)
          updateScore(paper++)
          ruleS.classList.add('rules-hide');
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

 const randomNumber = getRandomimgs();
    
 img = imgs[randomNumber];

 housePickedImg.src = `images/icon-${img}.svg`;
//  showContainer.classList.add('show-step-two-container');



if(img === 'paper'){
  houseCircle.style.backgroundImage = "radial-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))";
  results(paper )
  result2 (paper )
  result3 (paper )
  // updateScore(rock)
  // updateScore1(paper)
  // updateScore2(paper)
}

else if(img === 'scissors'){
  houseCircle.style.backgroundImage = " radial-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))";
  results(sicssor  )
  result2 (sicssor ) 
  result3 (sicssor )
  // updateScore(sicssor )
  // updateScore1(sicssor )
  // updateScore2(sicssor )
}

else if(img === 'rock'){
  houseCircle.style.backgroundImage = "radial-gradient(hsl(349, 71%, 52%) ,hsl(349, 70%, 56%))";
  results(rock)
  result2(rock)
  result3(rock)
  // updateScore(rock)
  // updateScore1(rock)
  // updateScore2(rock)
}

  function getRandomimgs() {
    return Math.floor(Math.random() * imgs.length);
  }
  
}

random();

// }



function results() {
  let scoree = 0;
  if(img === 'paper'){

    resultHeading.textContent = "Draw";
   
  }
  
  else if(img === 'scissors'){
    
    setScore(resultHeading.textContent = "you lose", tar = score)
  

  }
  
  else if(img === 'rock'){
    
    setScore(resultHeading.textContent = "you win", tar = score)
  }
  
  
// updateScore()
}

results();


function result2 (){
  let scoree = 0;
 if(img === 'scissors'){
 
    resultHeading.textContent = "Draw"
  }
  
  else if(img === 'rock'){
  
    setScore(resultHeading.textContent = "you lose", tar = score)
    
  
  
  }

  else  if(img === 'paper'){
   
    setScore(resultHeading.textContent = "you win", tar = score)
    
  

  }

}

result2 ();



function result3 (){
  let scoree = 0;
 if(img === 'rock'){
  
    resultHeading.textContent = "Draw"
  
  }

  if(img === 'paper'){

     setScore(resultHeading.textContent = "you lose", tar = score)
   
  }
  
  else if(img === 'scissors'){
 
    setScore(resultHeading.textContent = "you win", tar = score)
  
  }

}

result3 ()

function setScore(resultHeading , tar){
//  let  = Heading 
  if(resultHeading === "you win"){
      tar.textContent++;
  }else if( resultHeading === "you lose"){
      if(tar.textContent > 0){
        tar.textContent--;
      }
  }
  
  // else if( Heading === "Draw"){
  //   tar.textContent = 0;
  // }
}



playagain.addEventListener("click", function(e){
  imgConatiner.classList.remove('remove-conatiner-img');
  imgConatiner2.classList.remove('remove-conatiner-img');
  triangle.classList.remove('remove-triangle');
  showContainer.classList.remove('show-step-two-container');
  ruleS.classList.remove('rules-hide');
  
});

