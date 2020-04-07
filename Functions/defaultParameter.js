function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!, as default value has been set in case no parameter is passed.

//another example
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
makeShoppingList()