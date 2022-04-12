// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FPIS {

    //Product Count 
    uint public productCount = 0;

    //Product Structure
    struct Product {
        uint id;
        string prod_name;
        string prod_desc;
        uint prod_code;
    }

    //Variable for Products
    mapping(uint => Product) public products;

    //constructor for Initializing Products
    constructor() public {

        createProduct("iPhone", "Great Smartphone", 521340);
    }

    //Event for Product Creation
    event ProductCreated(
        uint id,
        string prod_name,
        string prod_desc,
        uint prod_code
    );


    //function to Create a Product in Block
    function createProduct(string memory _prodName, string memory _prodDesc, uint _prodCode) public {
        productCount ++;
        products[productCount] = Product(productCount, _prodName, _prodDesc, _prodCode);
        //Calling Event
        emit ProductCreated(productCount, _prodName, _prodDesc, _prodCode);
    }

    
}