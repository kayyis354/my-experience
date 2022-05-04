let btn = document.getElementById('btn-push');
btn.addEventListener('click',function(){
     let showValue = document.getElementById('inputNumber').value;
     let allBox = document.getElementById('allBox'); 
    
     if( showValue == ""){
         alert('form tidak boleh kosong')
        }else{
         document.getElementById('sentance').innerHTML= 'You are creating'+ ' ' + showValue + ' x ' + showValue + ' table ' + 'allBox'
     }
 })
