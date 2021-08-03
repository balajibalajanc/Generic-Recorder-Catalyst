function iterator() {
let step=0;
return  {
    next :()=>{
    step++
    if(step ===1){
    return {value:'😊' ,done:false};
    }
    return  {value:undefined,done:true};
    }
    
}
}

const fk=iterator();
console.log(fk);