
const paper = document.querySelector('.paper');
const sicssor = document.querySelector('.sicssor');
const rock = document.querySelector('.rock');
const rules = document.querySelector('.rules');



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
 
})

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
})

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
            direction: 'alternate',
          
          });

      }

})


//end  }



rules.addEventListener("click", function(){
  alert("hello world")
})
