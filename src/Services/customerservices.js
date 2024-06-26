import { useState } from "react";
import { Customer } from "../Models/customer/Customer";

let customers= [
    new Customer("c34",'Ritu Soni',"ritu@gmail.com",7777777777,"ritu","Ritu@123"),
    new Customer("c1","Poonam Pawar","poo@gmail.com", 9898989898,"poo","Poo@123"),
    new Customer("c3","Poonam Pandey","pandey@gmail.com", 8888888888,"poonam","Pandey@123"),
    new Customer("c6","Ritha Kumari","ritha@gmail.com", 7878787878,"ritha","ritha@123"),
    new Customer("c2","Kiran Pujari","kiran@gmail.com", 9090909090,"kiran","kiran@123"),
    new Customer("c32","Ritu Khanna","Ritu@gmail.com", 8686868686,"ritu","ritu@123"),
]
export function addCustmer(customer){
    console.log(customer);
    customers.push(customer); // mutable array : avoid it
    console.log(customers); // immutable  array logic is pending : spread operator
    // new way of state management : react http
}

export function getCustomers(){
    return customers;
}