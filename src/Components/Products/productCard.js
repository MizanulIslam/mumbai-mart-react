export function ProductCard({product}){
    /*  console.log(product.productImage); */
     return(
         <div className="card">
             <img src={require("../../Resources/"+product.productImage)} className="card-img-top profilePic" alt="..."></img>
            
             <div className="card-body">
                 <h5 className="card-title">#{product.id}</h5>
                 <h5 className="card-title">{product.productName}</h5>
             </div>
             <ul className="list-group list-group-flush">
                 <li className="list-group-item"><i>Email Id: </i><b>{product.productEmail}</b></li>
                 <li className="list-group-item"><i>Mobile No: </i><b>{product.productContact}</b></li>
                 <li className="list-group-item"><i>Username: </i><b>{product.username}</b></li>
             </ul>
             <div className="card-body">
                 <a href="#" className="card-link">EDIT</a>
                 <a href="#" className="card-link">DELETE</a>
             </div>
         </div>
     );
 }