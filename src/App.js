import { useState,useEffect } from "react";
const App=()=>{
  const [data,setData]=useState(null);
  useEffect(()=>{
    let fetchData=async ()=>{
      try{
        let datafetch=await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data=await datafetch.json();
        setData(data);
      }
      catch(error){
        console.log("error",error)
      }
  
    }

    fetchData();
  },[data])
  
    return(<div>
          {data?<div>
            <p>user name:{data.name}</p>
          </div>:<div>...loading</div>}
    </div>
  

)}
export default App;