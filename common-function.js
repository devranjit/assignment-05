



function collectingTotalDonation(inputId, submitId, totalId, balanceId){
    const submit = document.getElementById(submitId);
    const inputValue = document.getElementById(inputId);
    const totalDonation = document.getElementById(totalId);
    const myBalance = document.getElementById(balanceId);
    

    let mainBalance = Number(myBalance);
    let donation = 0 ;


      submit.addEventListener('click', function(event){
        event.preventDefault();

        const inputAmount = Number(inputValue.value);

        
        
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
           
           
        

        }

        else{
            alert('Please enter a valid amount ')
        }
      })

}