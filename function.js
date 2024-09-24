// collecting donation for noakhali 


collectingTotalDonation('donate-input', 'btn-donate-for-noakhali', 'donation-total', 'main-balance', 'history-page');


//collecting the donation for aid


collectingTotalDonation('aid-donate-input', 'btn-donate-for-aid', 'aid-donation-total', 'main-balance','history-page');

// collecting donation for feni 



collectingTotalDonation('donate-input-feni', 'btn-donate-for-feni', 'donation-total-feni', 'main-balance', 'history-page');






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




// blog page accordion ends  here 




// blog page navigation start here 


const blogButton = document.getElementById('btn-blog');
const homeButton = document.getElementById('btn-home');



if(window.location.pathname.includes('blog.html')){
    blogButton.classList.add('hidden');
    homeButton.classList.remove('hidden');

}

else{
    homeButton.classList.add('hidden');
    blogButton.classList.remove('hidden');
}


blogButton.addEventListener('click', function(){

     window.location.href = 'blog.html';

    blogButton.classList.add('hidden');
    homeButton.classList.remove('hidden');
})




homeButton.addEventListener('click', function(){

    window.location.href = 'index.html';

    homeButton.classList.add('hidden');
    blogButton.classList.remove('hidden');
})





// blog button codes ends here 





// donation and history button toggle code start here 

const donationContainer = document.getElementById('donation-container');
const historyContainer = document.getElementById('history-container');

const historyButton = document.getElementById('btn-history');

const donationButton = document.getElementById('btn-donation');


document.getElementById('btn-history').addEventListener('click', function(){
     
       donationContainer.classList.add('hidden');
       historyContainer.classList.remove('hidden');
       historyButton.classList.add('bg-lime-300')
       donationButton.classList.remove('bg-lime-300');
       donationButton.classList.add('border-2');

})


document.getElementById('btn-donation').addEventListener('click', function(){
    donationContainer.classList.remove('hidden');
    donationButton.classList.add('bg-lime-300');
    historyButton.classList.remove('bg-lime-300');
    historyButton.classList.add.apply('border-2');
})