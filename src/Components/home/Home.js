import { Link, Outlet } from "react-router-dom";


export function Home(){
    return (
        <div>
            <h5>Welcome to OpenGroceries's </h5>
            <h6>Order Products</h6>

            {/* <nav>
                <Link to="child1"> CHILD ROUTE 1</Link>
                <Link to="child2"> CHILD ROUTE 2</Link>
            </nav> */}
            <div>
                <h6>Dynamic View on Home Component</h6>
                <Outlet></Outlet>
            </div>
        </div>
    );
}