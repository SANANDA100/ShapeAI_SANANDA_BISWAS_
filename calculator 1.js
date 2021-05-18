let screen= document.getE1elementById('screen');
buttons= document.querySelectorAll('button');
let screenValue ='';
for(item of buttons)
{
    item.addEventListener('click', (e)=>
    {
    buttonText = e.target.innerText;
    console.log('Button Text is ', buttontext);
     if (buttonText=='X')
     {
         buttonText = '*';
         screenValue += buttonText;
         screenValue = screenValue;
     }
     elseif (buttontext =='C');
     { 
        screenValue = " ";
        screen.value = screenValue;
     }  
     elseif (buttonText =='=');
     { 
     screen.value = eval(screenValue);
     }
    }

)
}


