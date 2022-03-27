const menu = {
	// coursses propert
	_courses: {
		appetizers: [],
		mains: [],
		desserts: [],
	},
	// getter methods
	get appetizers() {
		return this._courses.appetizers;
	},
	get mains() {
		return this._courses.mains;
	},
	get desserts() {
		return this._courses.desserts;
	},
	// setter mothods
	set appetizers(appetizers) {
		this._courses.appetizers = appetizers;
	},
	set mains(mains) {
		this._courses.mains = mains;
	},
	set desserts(_value) {
		this._courses.desserts = desserts;
	},
	get courses() {
		return {
			appetizers: this.appetizers,
			mains: this.mains,
			desserts: this.desserts,
		};
	},
	addDishToCourse(couseName, dishName, dishPrice) {
		let dish = {
			name: dishName,
			price: dishPrice,
		};

		return this._courses[couseName].push(dish);
	},

	getRandomDishFromCourse(couseName) {
		const dishes = this._courses[couseName];
		// let randomIndex = Math.random() * dishes.length;
		// // 10.3 rounds the number
		// randomIndex = Math.floor(randomIndex);
		// // 10.4 chooses one of the dishes inside the array
		// return dishes[randomIndex];
		let randomIndex = Math.random() * dishes.length;
		randomIndex = Math.floor(Math.random());
		return dishes[randomIndex];
	},
	generateRandomMeal: function () {
		const appetizer = this.getRandomDishFromCourse('appetizers');
		const main = this.getRandomDishFromCourse('mains');
		const dessert = this.getRandomDishFromCourse('desserts');
		// const totalPrice = appetizer.price + main.price + dessert.price;
		const totalPrice = appetizer.price + main.price + dessert.price;

		return `your Meal is ${appetizer.name}, ${main.name}, ${dessert.name}, And The Total Price Is $${totalPrice}`;
	},
};
menu.addDishToCourse('appetizers', 'tuna tartar', 9.5);
menu.addDishToCourse('appetizers', 'thai lolipops', 9.0);
menu.addDishToCourse('appetizers', 'bread and olives', 3.5);

// menu.addDishToCourse('appetizers', 'Crumbed Mushrooms', 28.0);
// menu.addDishToCourse('appetizers', 'Chicken Wings', 32.0);
// menu.addDishToCourse('appetizers', 'Caesar Salad', 35.0);

menu.addDishToCourse('mains', 'Cheddar-Melt Steak', 249.0);
menu.addDishToCourse('mains', 'Half-Chicken', 199.0);
menu.addDishToCourse('mains', 'Salmon Steak', 267.0);

menu.addDishToCourse('desserts', 'tuna tartar', 9.5);
menu.addDishToCourse('desserts', 'thai lolipops', 9.0);
menu.addDishToCourse('desserts', 'bread and olives', 3.5);

let meal = menu.generateRandomMeal();
console.log(meal);
// menu.addDishToCourse('soup of the day', 'past and fish', 10.25);
// menu.addDishToCourse('fish soup', 'anjera and suqaar', 22.5);
// menu.addDishToCourse('vegi soup', 'rice and camel meat', 25.15);

// 	getRandomDishFromCourse(courseName) {
// 		const dishes = this._courses[courseName];
// 		const randomIndex = Math.floor(Math.random() * dishes.length);
// 		return dishes[randomIndex];
// 	},
// 	generateRandomMeal() {
// 		const appetizer = this.getRandomDishFromCourse('appetizers');
// 		const main = this.getRandomDishFromCourse('mains');
// 		const dessert = this.getRandomDishFromCourse('desserts');
// 		const totalPrice = appetizer.price + main.price + dessert.price;
// 		return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} and costs $${totalPrice}`;
// 	},
// };

// menu.addDishToCourse('appetizers', 'Crumbed Mushrooms', 28.0);
// menu.addDishToCourse('appetizers', 'Chicken Wings', 32.0);
// menu.addDishToCourse('appetizers', 'Caesar Salad', 35.0);

// menu.addDishToCourse('mains', 'Cheddar-Melt Steak', 249.0);
// menu.addDishToCourse('mains', 'Half-Chicken', 199.0);
// menu.addDishToCourse('mains', 'Salmon Steak', 267.0);

// menu.addDishToCourse('desserts', 'Ice-cream & chocolate sauce', 35.0);

// let meal = menu.generateRandomMeal();
// console.log(meal);
