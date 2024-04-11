const buttons = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
let count = 0;
// console.log(buttons);

buttons.forEach(function (btn)
{

    btn.addEventListener('click', function (e)
     {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease"))
        {
            count--;
        }
        else if (styles.contains('increase'))
        {
            count++;
        }
        else{
            count=0;
        }
        if(count>0){
            value.style.color ="green";
        }
        else if(count<0){
            value.style.color ="red";
        }
        else{
            value.style.color="yellow";
        }
        value.textContent = count;
    });
});
