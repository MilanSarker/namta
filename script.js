
let text = document.querySelector('h1')
    text.setAttribute("style","color: rgb(255, 196, 0); margin-bottom: 20px;")

let data = document.querySelector('.inputValue')
    data.setAttribute("style","padding:9px ;")

let show = document.querySelector(".show")


let clkBtn = document.querySelector('button')
    clkBtn.setAttribute("style","font-size: large; font-weight: 700; padding: 5px 20px; margin-left: 10px; border: none;");

clkBtn.addEventListener('click',function(){
     let x=Number(data.value)
    if(x){
        show.innerHTML=' '

         for(let i=1;i<=10;i++)
         {
            show.innerHTML +=`${x}X${i} = ${x*i} <br>`;
          
        }
      

    }else{
        show.innerHTML='দয়া করে একটি নম্বর দিন ';
        show.style.color='yellow';
    }


});







