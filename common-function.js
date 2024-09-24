
let mainBalance = 0 ;

function collectingTotalDonation(inputId, submitId, totalId, balanceId, formId){
    const submit = document.getElementById(submitId);
    const inputValue = document.getElementById(inputId);
    const totalDonation = document.getElementById(totalId);
    const myBalance = document.getElementById(balanceId);
    const formTittle = document.getElementById(formId);


 mainBalance = parseFloat(myBalance.innerText.replace('BDT', ''));

  let donation = 0 ;
 
      submit.addEventListener('click', function(event){
        event.preventDefault();
        
        
        const inputAmount = Number(inputValue.value);
        const formName = formTittle.innerText;
        
        if(!isNaN(inputAmount) && inputAmount > 0){
            
           if(inputAmount > mainBalance){

            
            const popupSection = document.getElementById('popup-section');
            popupSection.classList.remove('hidden');

            const popupClose = document.getElementById('btn-close');

            popupClose.addEventListener('click', function(){
              popupSection.classList.add('hidden');
              
            })

            
           }
           else{
            donation += inputAmount ;
        
           totalDonation.innerText = `${donation} BDT`;

           mainBalance -= inputAmount;

            myBalance.innerText = `${mainBalance} BDT`;

            inputValue.value = ''; 






            // here is the history function 

            const historyContainer = document.getElementById('history-container');

            const historySection = document.createElement('div');
           
            historySection.style.marginBottom = "15px";
            historySection.style.border = "2px solid #D1D5DB";
            historySection.style.padding = "10px"
            historySection.style.borderRadius = "10px";
           
           
           const donateAmount = document.createElement('h1');
           donateAmount.classList.add('text-lg', 'font-lexend', 'font-bold', 'py-2');
            donateAmount.innerText = `${inputAmount} Taka is Donated for ${formName}`;
            historySection.appendChild(donateAmount);
            
            const donationtime = document.createElement('p');
            donationtime.classList.add('font-lexend', 'font-light', 'text-sm', 'font-gray', 'py-2');
            donationtime.innerText = `${new Date().toString()}`;
 
            historySection.appendChild(donationtime);
   
 
            historyContainer.appendChild(historySection);

          }

      
          
        
        }

        else{
            
          const invalidPopup = document.getElementById('invalid-popup-section');

          invalidPopup.classList.remove('hidden');

          const invalidButton = document.getElementById('invalid-btn-close');

          invalidButton.addEventListener('click', function(){
            invalidPopup.classList.add('hidden');
          })
        }
      })

}




