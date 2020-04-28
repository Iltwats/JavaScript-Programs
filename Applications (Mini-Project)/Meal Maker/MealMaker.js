/*
As a frequent diner, you love trying out new restaurants and experimenting with different foods.However, having to figure out what you want to order can be a
time - consuming ordeal, if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, JavaScript is used to randomly create a three - course meal based on what is available on a menu.You can keep running it until you’ re satisfied with the generated meal!

Use of Advanced and different methods of object can be seen here.
 */



const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        set appetizers(appetizersIn) {
            this._appetizers.push(appetizersIn);
        },
        get mains() {
            return this._mains;
        },
        set mains(mainsIn) {
            this._mains.push(mainsIn);
        },
        get desserts() {
            return this._desserts;
        },
        set desserts(dessertsIn) {
            this._desserts.push(dessertsIn);
        },
    },

    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },

    ///===============================================================

    addDishToCourse(courseName, dishName, dishPrice) {
        const dishes = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName] = dishes;
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price it will cost you is $${totalPrice.toFixed(2)}.`;
    },
};
//More options can be added as per the user choice.
//Appetizers menu available.
menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Prawn Coctail', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);
menu.addDishToCourse('appetizer', 'tempura vegetables', 6.50);
menu.addDishToCourse('appetizer', 'spring rolls', 6.00);
menu.addDishToCourse('appetizer', 'crab legs', 14.00);

//Maincourse avialable.
menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);
menu.addDishToCourse('main', 'california rolls', 5.50);
menu.addDishToCourse('main', 'crab sashimi', 13.00);
menu.addDishToCourse('main', 'albacore sushi', 10.00);

//Desserts available.
menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);
menu.addDishToCourse('dessert', 'tiramisu', 10.00);
menu.addDishToCourse('dessert', 'sesame cookies', 7.00);
menu.addDishToCourse('dessert', 'cheesecake', 15.00);

let meal = menu.generateRandomMeal();

console.log(meal);
