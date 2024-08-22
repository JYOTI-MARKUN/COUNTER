const para = document.querySelector(".counter-para")
const decreasebtn = document.querySelector(".decrease")
const increasebtn = document.querySelector(".increase")
const reset = document.querySelector(".reset")
const factorByIncDec = document.querySelector(".incdec-value")


let newValue = parseInt(para.innerText)

increasebtn.addEventListener("click",()=>{    
    console.log(para.innerText = newValue+=parseInt( factorByIncDec.value))   

})

decreasebtn.addEventListener("click",()=>{
    const decFactor = parseInt(factorByIncDec.value)
    if(newValue-decFactor<0){
        newValue = 0;
    } else {
        newValue-=decFactor
    }
             
       console.log(para.innerText = newValue) 
         

})

reset.addEventListener("click",()=>{
    para.innerText = 0;
    newValue = 0;
})
