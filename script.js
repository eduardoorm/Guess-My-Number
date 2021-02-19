'use strict';
//llamamos una clase y la convertimos en texto
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'NUMERO CORRECTO 🤣';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent= 20;
// // console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=23;
let secretNumber = Math.trunc( Math.random()*20+1);
let score = 20;
let highscore=0;
// document.querySelector('.check').addEventListener('click', function(){
//     console.log(document.querySelector('.guess').value);
// });
// document.querySelector('.check').addEventListener('click',x);

//con el +1 llega al 20 , match.trunc lo redondea

const displayMessage = function(message){
   document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

     //Cuando no hay nada en el input
    if(!guess){
        displayMessage('Not number');
     //Cuando un jugador gana la partida
    }else if(guess === secretNumber){
         document.querySelector('.number').textContent = secretNumber;
        displayMessage('🎉 Corect Number');
         
         document.querySelector('body').style.backgroundColor = '#60b347' ;
         document.querySelector('.number').style.width='30rem';
         

         if(score> highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
         }
      //When guess is too high
    } else if (guess !== secretNumber){

      if(score>1){
         displayMessage( guess > secretNumber ?  'Muy alto' : 'Muy Bajo')
         score --;
         document.querySelector('.score').textContent= score;
      } else{
         displayMessage('Perdiste el juego')
     
         document.querySelector('.score').textContent= 0;
      }

    }
   
});

document.querySelector('.again').addEventListener('click',function(){
       secretNumber = Math.trunc( Math.random()*20+1);
       score=20;
       document.querySelector('.score').textContent= score;
       displayMessage('Start guessing...')
       document.querySelector('.guess').value = '';
       document.querySelector('.number').style.width= '15rem';
       document.querySelector('.number').textContent= '?';
       document.querySelector('body').style.backgroundColor= '#222';
       

})