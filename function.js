

// collectingTotalDonation('donate-input', 'btn-donate-for-noakhali', 'donation-total', 'main-balance' ) ;








const buttonDown = document.getElementsByClassName('btn-down');
const buttonUp = document.getElementsByClassName('btn-up');
const answer = document.getElementsByClassName('faq-answer');




for(let i = 0 ; i < buttonDown.length; i++){

    buttonDown[i].addEventListener('click', function(){

        buttonDown[i].classList.add('hidden');
        buttonUp[i].classList.remove('hidden');
        answer[i].classList.remove('hidden');
        
            
        })

        buttonUp[i].addEventListener('click', function(){

            answer[i].classList.add('hidden');
            buttonUp[i].classList.add('hidden');
            buttonDown[i].classList.remove('hidden');
          })

}





