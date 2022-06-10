
const paper = document.querySelector('.paper');
const sicssor = document.querySelector('.sicssor');
const rock = document.querySelector('.rock');


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
const ruleS = document.querySelector('.rules');
const ruleS2 = document.querySelector('.result-rules');




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
        ruleS.classList.add('rules-hide');

      },2000)
      


    }
      
    pickedImg.src = 'images/icon-paper.svg';
    


});

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
          ruleS.classList.add('rules-hide');
        },2000)
        
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
  

if(img === 'scissors'){
  houseCircle.style.backgroundImage = " radial-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))";
}

else if(img === 'rock'){
  houseCircle.style.backgroundImage = "radial-gradient(hsl(349, 71%, 52%) ,hsl(349, 70%, 56%))";

}

  function getRandomimgs() {
    return Math.floor(Math.random() * imgs.length);
  }

}

random();

// }