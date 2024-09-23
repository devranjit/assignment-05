function collectingTotalDonation(inputId, submitId, totalId, balanceId){
    const submit = document.getElementById(submitId);
    const inputValue = document.getElementById(inputId);
    const totalDonation = document.getElementById(totalId);
    const myBalance = document.getElementById(balanceId);
    




    
if(!submit || !inputValue || !totalDonation || !myBalance ){
  return ;
}







    let mainBalance = (myBalance).innerText;


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
           
           const historyItem = document.createElement('div');

           const donateAmount = document.createElement('h1');
           donateAmount.innerText = `Donated: ${inputAmount} BDT`;
           historyItem.appendChild(donateAmount);

           const totalAmount = document.createElement('p');
           totalAmount.innerText = `Donated: ${donation} BDT`;
           historyItem.append(totalAmount);


           const donationTime = document.createElement('p');
           donationTime.innerText = `Time: ${new Date().toLocaleDateString()}`;
           historyItem.appendChild(donationTime);




           
        

        }

        else{
            alert('Please enter a valid amount ')
        }
      })

}