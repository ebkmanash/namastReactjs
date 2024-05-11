import { useContext } from "react";
import { MyContext } from "./MyProvider";
const MyComponent=()=>{
  let value=useContext(MyContext)
  return(<div>
    {value}
  </div>)
}
export default MyComponent;