
collectingTotalDonation('donate-input', 'btn-donate-for-noakhali', 'donation-total', 'main-balance', 'form-for-noakhali');


//collecting the donation for aid


collectingTotalDonation('aid-donate-input', 'btn-donate-for-aid', 'aid-donation-total', 'main-balance','form-for-feni');

// collecting donation for feni 



collectingTotalDonation('donate-input-feni', 'btn-donate-for-feni', 'donation-total-feni', 'main-balance', 'form-for-aid');



// donation and history button toggle code start here 

const donationContainer = document.getElementById('donation-container');
const historyContainer = document.getElementById('history-container');

const historyButton = document.getElementById('btn-history');

const donationButton = document.getElementById('btn-donation');


document.getElementById('btn-donation').addEventListener('click', function(){
    donationContainer.classList.remove('hidden');
    donationButton.classList.add('bg-lime-300');
    historyButton.classList.remove('bg-lime-300');
    historyButton.classList.add('border-2');
    historyContainer.classList.add('hidden');
})




document.getElementById('btn-history').addEventListener('click', function(){
     
       donationContainer.classList.add('hidden');
       historyContainer.classList.remove('hidden');
       historyButton.classList.add('bg-lime-300')
       donationButton.classList.remove('bg-lime-300');
       donationButton.classList.add('border-2');

})


