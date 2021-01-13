// problems:
// 1. create the following function:

// displayTableOfOrders( orders );

// this function, given the "orders" should
// return an html to be inserted in #app

function displayTableOfOrders(orders) {
  let rows = [
    "<thead><th>Nr.</th>" +
      "<th>OrderNo</th>" +
      "<th>Nr. prods</th>" +
      "<th>Address</th></thead>"
  ];

  // put your code here

  

  return "<table width='100%'>" + rows.join("") + "</table>";
}


// 2. create the following function:

// ListProducts( orders );

// this function should display a table of all products from the orders with the quantity, ordered alphabetically
function ListProducts( orders ){
    let rows = [
        "<thead><th>Nr.</th>" +
          "<th>Product</th>" +
          "<th>Quantity</th></thead>"
      ];

    // write your solution here

    

    return "<table width='100%'>" + rows.join("") + "</table>";
}


// 3. create the following function:

    // displayOrders( orders )

// This function should display each order with items rows like this:
    // Nr.     Order      Items       Quantity     ItemPrice

    // xxxxx   15325235                        
    //                    Samsung TV  2            2421
    //                    Other prod  1            2412

    // xxxxx   3463466                        
    //                    Some Prod   2            34
    //                    Other prod  3            2355.32


function displayOrders( orders ){
    let rows = [
        "<thead><th>Nr.</th>" +
          "<th>Order</th>" +
          "<th>Items</th>" +
          "<th>Quantity</th>" +
          "<th>Item Price</th></thead>"
      ];

    //   write your solution here


      return "<table width='100%'>" + rows.join("") + "</table>";
}





// do not edit this, it's just code
window.onload = function () {
    document.querySelector('#run1').onclick = () => { document.querySelector("#app").innerHTML = displayTableOfOrders(orders); }
    document.querySelector('#run2').onclick = () => { document.querySelector("#app").innerHTML = ListProducts(orders); }
    document.querySelector('#run3').onclick = () => { document.querySelector("#app").innerHTML = displayOrders(orders); }
  
};