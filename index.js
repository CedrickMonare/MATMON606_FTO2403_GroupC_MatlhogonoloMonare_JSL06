// // Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemListElement = document.createElement('ul');

        for (const item of menu[category]) {
            // Create a list item element
            const listItemElement = document.createElement('li');
            listItemElement.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            listItemElement.addEventListener('click', () => addToOrder(item));

            // Append the list item to the list of items
            itemListElement.appendChild(listItemElement);
        }

        // Append the list of items to the menu container
        menuContainer.appendChild(itemListElement);
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderListItem = document.createElement('li');
    orderListItem.textContent = itemName;

    // Append the list item to the order items list
    orderItemsList.appendChild(orderListItem);

    // Calculate and update the total price 
    const itemPrice = 60.00;
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + itemPrice;

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
