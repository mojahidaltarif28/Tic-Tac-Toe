let boxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let winnercall=document.querySelector("#winnercall");
let newgame=document.querySelector("#newgame");
let turnx=true;

const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let j=0;

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
      j++;
        if(turnx)
            {
                box.style.color='rgb(5, 179, 5)';
                box.innerText="X";
                turnx=false;
            }
            else{
                box.style.color='red';
                box.innerText="O";
                turnx=true;
            }
            box.disabled=true;
            checkwinner();
           if(j==9)
            {
                tiegame();
                winnercall.style.color='red';
                winnercall.innerText='Tie game try again!';
            }
          
    });
});

let btndisabled=()=>{
    for(let i of boxs)
        i.disabled=true;
}
let btnenabled=()=>{
    for(let i of boxs)
        {
        i.disabled=false;
        i.innerText='';
        i.style.backgroundColor='rgb(170, 223, 246)';
        j=0;
        winnercall.innerText='';
        }
}
let checkwinner=()=>{
   
    for(let i of winpat)
       { let a=boxs[i[0]].innerText;
        let b=boxs[i[1]].innerText;
       let c= boxs[i[2]].innerText
         if(a!='' && b!=''&&c!='')
            if(a===b&&b===c)
                {
                    boxs[i[0]].style.backgroundColor='rgb(189, 246, 170)';
                    boxs[i[1]].style.backgroundColor='rgb(189, 246, 170)';
                    boxs[i[2]].style.backgroundColor='rgb(189, 246, 170)';
                    btndisabled();
                    winnercall.innerText=`Winner is: ${a}`;
                    j--;
                }
              
        }
}
let tiegame=()=>{
    for(let i of boxs)
        {
            i.style.backgroundColor='rgb(160, 149, 94)';
        }
}
resetbtn.addEventListener("click",btnenabled);
newgame.addEventListener("click",btnenabled);