import { useState } from "react";
import { Product } from "../Models/product/Product";

let products= [
    new Product("c34","Eggs","Grade A Broiler Egg",7),
    new Product("c1","Buffalo Milk","Full Cream Buffalo Milk", 99),
    new Product("c3","Toned Cow Milk"," Toned Cow Milk", 60),
    new Product("c6","Lassi","Fresh Lassi", 35),
]
export function addCustmer(product){
    console.log(product);
    products.push(product); // mutable array : avoid it
    console.log(products); // immutable  array logic is pending : spread operator
    // new way of state management : react http
}

export function getProducts(){
    return products;
}