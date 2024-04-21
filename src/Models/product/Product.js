export class Product{
    constructor(
        id="1",
        productName="sample", 
        productDescription="", 
        productPrice=0, 
        productImage="product.png"){
        this.id=id;
        this.productName=productName;
        this.productDescription=productDescription;
        this.productPrice=productPrice;
        this.productImage=productImage;
    }
}