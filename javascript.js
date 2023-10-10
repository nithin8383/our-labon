// Define a function to handle the form submission
function createBill() {
    // Retrieve the values selected by the user
    var tableNumber = document.querySelector('select[name="tableNumber"]').value;
    var customerName = document.querySelector('input[name="customerName"]').value;
    var customerMobile = document.querySelector('input[name="customerMobile"]').value;

    // Initialize an array to store selected items and quantities
    var selectedItems = [];

    // Loop through each item row
    for (var i = 1; i <= 4; i++) {
        var item = document.querySelector('#item' + i).value;
        var quantity = parseInt(document.querySelector('#q' + i).value);
        
        // Check if the item is selected and a quantity is entered
        if (item !== "0" && quantity > 0) {
            selectedItems.push({ item: item, quantity: quantity });
        }
    }

    // Calculate the total amount
    var totalAmount = 0;
    for (var j = 0; j < selectedItems.length; j++) {
        var itemPrice = getItemPrice(selectedItems[j].item);
        totalAmount += itemPrice * selectedItems[j].quantity;
    }

    // Create an order summary as HTML content
    var orderSummaryHTML = "<h3>Order Summary</h3>";
    orderSummaryHTML += "<p>Table Number: " + tableNumber + "</p>";
    orderSummaryHTML += "<p>Customer Name: " + customerName + "</p>";
    orderSummaryHTML += "<p>Mobile: " + customerMobile + "</p>";
    orderSummaryHTML += "<p>Ordered Items:</p>";
    
    orderSummaryHTML += "<ul>";
    for (var k = 0; k < selectedItems.length; k++) {
        orderSummaryHTML += "<li>" + selectedItems[k].quantity + "x " + selectedItems[k].item + "</li>";
    }
    orderSummaryHTML += "</ul>";

    orderSummaryHTML += "<p>Total Amount: " + totalAmount + " /-</p>";

    // Update the content of the orderSummary div
    document.getElementById("orderSummary").innerHTML = orderSummaryHTML;
}

// Function to retrieve the price of an item (you can implement this as needed)
function getItemPrice(itemName) {
    // You can implement a logic here to retrieve the price of the item
    // For now, we'll return some placeholder values
    switch (itemName) {
        case "Chicken pizza":
            return 299;
        case "Vegetable Pizza":
            return 180;
        case "Chicken Burger":
            return 220;
        case "Veg Burger":
            return 150;
        case "Water Bottle":
            return 20;
        default:
            return 0;
    }
}














