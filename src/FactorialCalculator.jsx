import React, { useMemo, useState } from 'react';

function FactorialCalculator(){
    const [number,setNumber]=useState(0);
    const fact=(n)=>
    {
        let result=1;
        if(n===0|n===1)
            return 1;
        else{
            for(let i=2;i<=n;i++){
                result*=i;
            }
        }
        return result; 
    }
            
    let calFact=()=>{
        return fact(number)
    }
    return(
        <div>
            <input type="number" value={number} onChange={(e)=>{setNumber(parseInt(e.target.value))}}></input>
            <br></br>
            factorial of {number}is {calFact()}
        </div>
    )

}

export default FactorialCalculator;
