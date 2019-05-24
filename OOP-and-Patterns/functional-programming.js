// JS Class in Functional Way

// i.e. User
function User(name, year) {
    this.name = name;
    this.year = year;
    this.greeting = function() {
        console.log('Hello, my name is ' + this.name + ' and I\'m ' + this.year + ' age.');
    }
}

// create instance of User, called ruslan
const ruslan = new User('Ruslan', 1991);
