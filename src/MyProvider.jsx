import { createContext } from "react";
export let MyContext=createContext();

const MyProvider=({children})=>{
    let value="hellow react this is react context";
    return(<div>
        <MyContext.Provider value={value}>{children}</MyContext.Provider>
    </div>)
}
export default MyProvider;








