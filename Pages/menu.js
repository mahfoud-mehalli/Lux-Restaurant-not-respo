// pizza array
const pizza = [
    {name: "Margherita",ingredient: "Tomato sauce, mozzarella, basil",price: 10,pic: "https://example.com/pizza/margherita.jpg"},
    {name: "Pepperoni",ingredient: "Tomato sauce, mozzarella, pepperoni",price: 12,pic: "https://example.com/pizza/pepperoni.jpg"},
    {name: "Hawaiian",ingredient: "Tomato sauce, mozzarella, ham, pineapple",price: 11,pic: "https://example.com/pizza/hawaiian.jpg"},
    {name: "Meat Lovers",ingredient: "Tomato sauce, mozzarella, sausage, bacon, beef",price: 14,pic: "https://example.com/pizza/meat-lovers.jpg"},
    {name: "Veggie",ingredient: "Tomato sauce, mozzarella, mushrooms, bell peppers, olives",price: 11,pic: "https://example.com/pizza/veggie.jpg"},
    {name: "BBQ Chicken",ingredient: "BBQ sauce, mozzarella, chicken, red onions",price: 13,pic: "https://example.com/pizza/bbq-chicken.jpg"}
];

// burger array
const burger = [
    {name: "Classic Cheeseburger",ingredient: "Beef patty, cheddar cheese, lettuce, tomato, pickles",price: 8,pic: "https://example.com/burger/classic-cheeseburger.jpg"},
    {name: "Bacon Burger",ingredient: "Beef patty, bacon, cheddar cheese, lettuce, tomato, onion",price: 10,pic: "https://example.com/burger/bacon-burger.jpg"},
    {name: "Mushroom Swiss Burger",ingredient: "Beef patty, sautéed mushrooms, swiss cheese, lettuce, tomato",price: 9,pic: "https://example.com/burger/mushroom-swiss-burger.jpg"},
    {name: "BBQ Bacon Burger",ingredient: "Beef patty, BBQ sauce, bacon, cheddar cheese, onion rings",price: 12,pic: "https://example.com/burger/bbq-bacon-burger.jpg"},
    {name: "Veggie Burger",ingredient: "Veggie patty, cheddar cheese, lettuce, tomato, pickles",price: 9,pic: "https://example.com/burger/veggie-burger.jpg"},
    {name: "The Works Burger",ingredient: "Beef patty, bacon, cheddar cheese, lettuce, tomato, onion, mushrooms, pickles",price: 13,pic: "https://example.com/burger/the-works-burger.jpg"}
];
// tacos array
const tacos = [
    { name: 'Carnitas', ingredients: 'pork, onion, cilantro', price: 8.99, img: 'carnitas.jpg' },
    { name: 'Al Pastor', ingredients: 'pork, pineapple, onion, cilantro', price: 9.99, img: 'al_pastor.jpg' },
    { name: 'Grilled Fish', ingredients: 'fish, cabbage, chipotle mayo', price: 10.99, img: 'grilled_fish.jpg' },
    { name: 'Veggie', ingredients: 'grilled veggies, lettuce, avocado, cheese', price: 7.99, img: 'veggie.jpg' },
    { name: 'Carne Asada', ingredients: 'beef, onion, cilantro', price: 9.99, img: 'carne_asada.jpg' },
    { name: 'Shrimp', ingredients: 'shrimp, cabbage, avocado, chipotle mayo', price: 11.99, img: 'shrimp.jpg' }
];

// sandwich array
const sandwich = [
    { name: 'Classic Club', ingredients: 'turkey, ham, bacon, lettuce, tomato', price: 8.99, img: 'classic_club.jpg' },
    { name: 'Philly Cheesesteak', ingredients: 'beef, onion, bell pepper, cheese', price: 9.99, img: 'philly_cheesesteak.jpg' },
    { name: 'Reuben', ingredients: 'corned beef, sauerkraut, Swiss cheese, thousand island dressing', price: 10.99, img: 'reuben.jpg' },
    { name: 'BLT', ingredients: 'bacon, lettuce, tomato', price: 7.99, img: 'blt.jpg' },
    { name: 'Cuban', ingredients: 'pulled pork, ham, Swiss cheese, mustard, pickles', price: 9.99, img: 'cuban.jpg' },
    { name: 'Grilled Chicken', ingredients: 'chicken, lettuce, tomato, avocado, chipotle mayo', price: 8.99, img: 'grilled_chicken.jpg' }
];

// drinks array
const drinks = [
    { name: 'Iced Coffee', ingredients: 'coffee, milk, sugar', price: 2.99, img: 'iced_coffee.jpg' },
    { name: 'Lemonade', ingredients: 'lemon, water, sugar', price: 1.99, img: 'lemonade.jpg' },
    { name: 'Smoothie', ingredients: 'banana, strawberry, yogurt, honey', price: 4.99, img: 'smoothie.jpg' },
    { name: 'Mojito', ingredients: 'rum, lime, mint, sugar, soda', price: 5.99, img: 'mojito.jpg' },
    { name: 'Soda', ingredients: 'cola, sprite, ginger ale', price: 1.49, img: 'soda.jpg' },
    { name: 'Tea', ingredients: 'black tea, honey, lemon', price: 2.49, img: 'tea.jpg' }
];

// Desserts array
const desserts = [
    {name: "Chocolate Cake",ingredients: "Flour, sugar, cocoa powder, eggs, butter, vanilla extract",price: 6.99,image: "https://www.example.com/chocolate-cake.jpg",},
    {name: "Cheesecake",ingredients: "Graham crackers, cream cheese, sugar, eggs, sour cream, vanilla extract",price: 7.99,image: "https://www.example.com/cheesecake.jpg",},
    {name: "Tiramisu",ingredients: "Ladyfingers, espresso, mascarpone cheese, eggs, sugar, cocoa powder",price: 8.99,image: "https://www.example.com/tiramisu.jpg",},
    {name: "Fruit Tart",ingredients: "Pastry crust, pastry cream, assorted fresh fruit",price: 5.99,image: "https://www.example.com/fruit-tart.jpg",},
    {name: "Ice Cream Sundae",ingredients: "Vanilla ice cream, hot fudge, whipped cream, cherry",price: 4.99,image: "https://www.example.com/ice-cream-sundae.jpg",},
    {name: "Brownie",ingredients: "Flour, sugar, cocoa powder, eggs, butter, vanilla extract",price: 3.99,image: "https://www.example.com/brownie.jpg",},
];

// Salads array
const salads = [
    {name: "Greek Salad",ingredients: "Romaine lettuce, cucumbers, tomatoes, red onion, feta cheese, olives",price: 7.99,image: "https://www.example.com/greek-salad.jpg",},
    {name: "Caesar Salad",ingredients: "Romaine lettuce, croutons, parmesan cheese, Caesar dressing",price: 6.99,image: "https://www.example.com/caesar-salad.jpg",},
    {name: "Caprese Salad",ingredients: "Tomatoes, mozzarella cheese, basil, balsamic glaze",price: 8.99,image: "https://www.example.com/caprese-salad.jpg",},
    {name: "Cobb Salad",ingredients: "Romaine lettuce, bacon, hard-boiled egg, avocado, tomato, blue cheese",price: 9.99,image: "https://www.example.com/cobb-salad.jpg",},
    {name: "Spinach Salad",ingredients: "Baby spinach, bacon, mushrooms, red onion, hard-boiled egg, hot bacon dressing",price: 7.99,image: "https://www.example.com/spinach-salad.jpg",},
    {name: "Mixed Greens Salad",ingredients: "Mixed greens, carrots, cucumbers, cherry tomatoes, red onion, croutons",price: 6.99,image: "https://www.example.com/mixed-greens-salad.jpg",},
];


// ******************** OnClick Cart: ********************

// Get the necessary elements
const cartButton = document.getElementById('cart-button');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');
const cartItems = document.getElementById('cart-items');
const totalCredit = document.getElementById('total-credit');
const orderButton = document.getElementById('order-button');

// Add event listener to the cart button
cartButton.addEventListener('click', () => {
  // Show the overlay
  overlay.style.display = 'flex';
});

// Add event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the overlay
  overlay.style.display = 'none';
});

// Example function to add an item to the cart
function addItemToCart(itemName, price) {
  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.textContent = `${itemName}: $${price}`;

  // Append the list item to the cart items container
  cartItems.appendChild(listItem);

  // Update the total credit
  const currentTotal = parseFloat(totalCredit.textContent);
  const newTotal = currentTotal + price;
  totalCredit.textContent = newTotal.toFixed(2);
}

// Example usage: Add items to the cart
addItemToCart('Pizza Alfredo', 10);
addItemToCart('Pizza Royal', 20);
addItemToCart('Pizza Four Season', 15);






