
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
            alert('please recharge your account ');
           }
           else{
            donation += inputAmount ;
        
           totalDonation.innerText = `${donation} BDT`;

           mainBalance -= inputAmount;

            myBalance.innerText = `${mainBalance} BDT`;

            inputValue.value = ''; 
          }

          


           const historyContainer = document.getElementById('history-container');

           const historySection = document.createElement('div');
          
           historySection.style.marginBottom = "15px";
           historySection.style.border = "2px solid #D1D5DB";
           historySection.style.padding = "10px"
           historySection.style.borderRadius = "10px";
           

           const historyTittle = document.createElement('h1');
           historySection.appendChild(historyTittle);

        
          
           
           const donateAmount = document.createElement('p');
           donateAmount.innerText = `${inputAmount}Taka is Donated for ${formName}`;
           historySection.appendChild(donateAmount);
           
           const donationtime = document.createElement('p');
           donationtime.innerText = `${new Date().toString()}`;

           historySection.appendChild(donationtime);
  

           historyContainer.appendChild(historySection);
           
           
          
          

        }

        else{
            alert('Please enter a valid amount ')
        }
      })

}





