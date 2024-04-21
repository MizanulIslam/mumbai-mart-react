import "./Products.css"

import { getProducts } from "../../Services/productServices";
import { ProductCard } from "../Products/productCard";


export function Products(){

    let products=getProducts();

    let trNodes=products.map(product=><tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.productName}</td>
        <td>{product.p}</td>
        <td>{product.productContact}</td>
    </tr>
    );

    let cards=products.map(product=>
        <div key={product.id} className="col-md-3 border border-3 border-success">
           <ProductCard product={product}></ProductCard>
        </div>
        );
    return(
        <>
        {/* <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL ID</th>
                    <th>MOBILE NO</th>
                </tr>
            </thead>
            <tbody>
                {trNodes}
            </tbody>
        </table> */}
        <section>
            <div className="row">
                {cards}
            </div>
        </section>
        </>

    );
}