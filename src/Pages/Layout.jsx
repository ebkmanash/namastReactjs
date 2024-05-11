import { Link,Outlet } from "react-router-dom/dist";
const Layout=()=>
{
        return(<div>
            <ul>
                <li>
                    <Link to ="/" >Home</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/blogs1">Blogs</Link>
                </li>
            </ul>
            <Outlet/>
        </div>)

}
export default Layout;